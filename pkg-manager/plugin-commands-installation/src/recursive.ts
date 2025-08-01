import { promises as fs } from 'fs'
import path from 'path'
import { type Catalogs } from '@pnpm/catalogs.types'
import {
  type RecursiveSummary,
  throwOnCommandFail,
} from '@pnpm/cli-utils'
import {
  type Config,
  type OptionsFromRootManifest,
  getOptionsFromRootManifest,
  getWorkspaceConcurrency,
  readLocalConfig,
} from '@pnpm/config'
import { PnpmError } from '@pnpm/error'
import { arrayOfWorkspacePackagesToMap } from '@pnpm/get-context'
import { logger } from '@pnpm/logger'
import { filterDependenciesByType } from '@pnpm/manifest-utils'
import { createMatcherWithIndex } from '@pnpm/matcher'
import { rebuild } from '@pnpm/plugin-commands-rebuild'
import { type StoreController } from '@pnpm/package-store'
import { requireHooks } from '@pnpm/pnpmfile'
import { sortPackages } from '@pnpm/sort-packages'
import { createOrConnectStoreController, type CreateStoreControllerOptions } from '@pnpm/store-connection-manager'
import {
  type IncludedDependencies,
  type PackageManifest,
  type Project,
  type ProjectManifest,
  type ProjectsGraph,
  type ProjectRootDir,
  type ProjectRootDirRealPath,
} from '@pnpm/types'
import { addCatalogs } from '@pnpm/workspace.manifest-writer'
import {
  addDependenciesToPackage,
  install,
  type InstallOptions,
  type MutatedProject,
  mutateModules,
  type ProjectOptions,
  type UpdateMatchingFunction,
  type WorkspacePackages,
} from '@pnpm/core'
import isSubdir from 'is-subdir'
import mem from 'mem'
import pFilter from 'p-filter'
import pLimit from 'p-limit'
import { createWorkspaceSpecs, updateToWorkspacePackagesFromManifest } from './updateWorkspaceDependencies'
import { getSaveType } from './getSaveType'
import { getPinnedVersion } from './getPinnedVersion'
import { type PreferredVersions } from '@pnpm/resolver-base'
import { IgnoredBuildsError } from './errors'

export type RecursiveOptions = CreateStoreControllerOptions & Pick<Config,
| 'bail'
| 'configDependencies'
| 'dedupePeerDependents'
| 'depth'
| 'globalPnpmfile'
| 'hoistPattern'
| 'hooks'
| 'ignorePnpmfile'
| 'ignoreScripts'
| 'linkWorkspacePackages'
| 'lockfileDir'
| 'lockfileOnly'
| 'modulesDir'
| 'rawLocalConfig'
| 'registries'
| 'rootProjectManifest'
| 'rootProjectManifestDir'
| 'save'
| 'saveCatalogName'
| 'saveDev'
| 'saveExact'
| 'saveOptional'
| 'savePeer'
| 'savePrefix'
| 'saveProd'
| 'saveWorkspaceProtocol'
| 'lockfileIncludeTarballUrl'
| 'sharedWorkspaceLockfile'
| 'tag'
> & {
  include?: IncludedDependencies
  includeDirect?: IncludedDependencies
  latest?: boolean
  pending?: boolean
  workspace?: boolean
  allowNew?: boolean
  forceHoistPattern?: boolean
  forcePublicHoistPattern?: boolean
  ignoredPackages?: Set<string>
  update?: boolean
  updatePackageManifest?: boolean
  updateMatching?: UpdateMatchingFunction
  useBetaCli?: boolean
  allProjectsGraph: ProjectsGraph
  selectedProjectsGraph: ProjectsGraph
  preferredVersions?: PreferredVersions
  pruneDirectDependencies?: boolean
  pruneLockfileImporters?: boolean
  storeControllerAndDir?: {
    ctrl: StoreController
    dir: string
  }
  pnpmfile: string[]
} & Partial<
Pick<Config,
| 'sort'
| 'strictDepBuilds'
| 'workspaceConcurrency'
>
> & Required<
Pick<Config, 'workspaceDir'>
>

export type CommandFullName = 'install' | 'add' | 'remove' | 'update' | 'import'

export async function recursive (
  allProjects: Project[],
  params: string[],
  opts: RecursiveOptions,
  cmdFullName: CommandFullName
): Promise<boolean | string> {
  if (allProjects.length === 0) {
    // It might make sense to throw an exception in this case
    return false
  }

  const pkgs = Object.values(opts.selectedProjectsGraph).map((wsPkg) => wsPkg.package)

  if (pkgs.length === 0) {
    return false
  }
  const manifestsByPath = getManifestsByPath(allProjects)

  const throwOnFail = throwOnCommandFail.bind(null, `pnpm recursive ${cmdFullName}`)

  const store = opts.storeControllerAndDir ?? await createOrConnectStoreController(opts)

  const workspacePackages: WorkspacePackages = arrayOfWorkspacePackagesToMap(allProjects) as WorkspacePackages
  const targetDependenciesField = getSaveType(opts)
  const rootManifestDir = (opts.lockfileDir ?? opts.dir) as ProjectRootDir
  const installOpts = Object.assign(opts, {
    ...getOptionsFromRootManifest(rootManifestDir, manifestsByPath[rootManifestDir]?.manifest ?? {}),
    allProjects: getAllProjects(manifestsByPath, opts.allProjectsGraph, opts.sort),
    linkWorkspacePackagesDepth: opts.linkWorkspacePackages === 'deep' ? Infinity : opts.linkWorkspacePackages ? 0 : -1,
    ownLifecycleHooksStdio: 'pipe',
    peer: opts.savePeer,
    pruneLockfileImporters: opts.pruneLockfileImporters ??
      (((opts.ignoredPackages == null) || opts.ignoredPackages.size === 0) &&
        pkgs.length === allProjects.length),
    saveCatalogName: opts.saveCatalogName,
    storeController: store.ctrl,
    storeDir: store.dir,
    targetDependenciesField,
    workspacePackages,

    forceHoistPattern: typeof opts.rawLocalConfig?.['hoist-pattern'] !== 'undefined' || typeof opts.rawLocalConfig?.['hoist'] !== 'undefined',
    forceShamefullyHoist: typeof opts.rawLocalConfig?.['shamefully-hoist'] !== 'undefined',
  }) as InstallOptions

  const result: RecursiveSummary = {}

  const memReadLocalConfig = mem(readLocalConfig)

  const updateToLatest = opts.update && opts.latest
  const includeDirect = opts.includeDirect ?? {
    dependencies: true,
    devDependencies: true,
    optionalDependencies: true,
  }

  let updateMatch: UpdateDepsMatcher | null
  if (cmdFullName === 'update') {
    if (params.length === 0) {
      const ignoreDeps = manifestsByPath[opts.workspaceDir as ProjectRootDir]?.manifest?.pnpm?.updateConfig?.ignoreDependencies
      if (ignoreDeps?.length) {
        params = makeIgnorePatterns(ignoreDeps)
      }
    }
    updateMatch = params.length ? createMatcher(params) : null
  } else {
    updateMatch = null
  }
  // For a workspace with shared lockfile
  if (opts.lockfileDir && ['add', 'install', 'remove', 'update', 'import'].includes(cmdFullName)) {
    let importers = getImporters(opts)
    const calculatedRepositoryRoot = await fs.realpath(calculateRepositoryRoot(opts.workspaceDir, importers.map(x => x.rootDir)))
    const isFromWorkspace = isSubdir.bind(null, calculatedRepositoryRoot)
    importers = await pFilter(importers, async ({ rootDirRealPath }) => isFromWorkspace(rootDirRealPath))
    if (importers.length === 0) return true
    let mutation: 'install' | 'installSome' | 'uninstallSome'
    switch (cmdFullName) {
    case 'remove':
      mutation = 'uninstallSome'
      break
    case 'import':
      mutation = 'install'
      break
    default:
      mutation = (params.length === 0 && !updateToLatest ? 'install' : 'installSome')
      break
    }
    const mutatedImporters = [] as MutatedProject[]
    await Promise.all(importers.map(async ({ rootDir }) => {
      const localConfig = await memReadLocalConfig(rootDir)
      const modulesDir = localConfig.modulesDir ?? opts.modulesDir
      const { manifest } = manifestsByPath[rootDir]
      let currentInput = [...params]
      if (updateMatch != null) {
        currentInput = matchDependencies(updateMatch, manifest, includeDirect)
        if ((currentInput.length === 0) && (typeof opts.depth === 'undefined' || opts.depth <= 0)) {
          installOpts.pruneLockfileImporters = false
          return
        }
      }
      if (updateToLatest && (!params || (params.length === 0))) {
        currentInput = Object.keys(filterDependenciesByType(manifest, includeDirect))
      }
      if (opts.workspace) {
        if (!currentInput || (currentInput.length === 0)) {
          currentInput = updateToWorkspacePackagesFromManifest(manifest, includeDirect, workspacePackages)
        } else {
          currentInput = createWorkspaceSpecs(currentInput, workspacePackages)
        }
      }
      switch (mutation) {
      case 'uninstallSome':
        mutatedImporters.push({
          dependencyNames: currentInput,
          modulesDir,
          mutation,
          rootDir,
          targetDependenciesField,
        } as MutatedProject)
        return
      case 'installSome':
        mutatedImporters.push({
          allowNew: cmdFullName === 'install' || cmdFullName === 'add',
          dependencySelectors: currentInput,
          modulesDir,
          mutation,
          peer: opts.savePeer,
          pinnedVersion: getPinnedVersion({
            saveExact: typeof localConfig.saveExact === 'boolean' ? localConfig.saveExact : opts.saveExact,
            savePrefix: typeof localConfig.savePrefix === 'string' ? localConfig.savePrefix : opts.savePrefix,
          }),
          rootDir,
          targetDependenciesField,
          update: opts.update,
          updateMatching: opts.updateMatching,
          updatePackageManifest: opts.updatePackageManifest,
          updateToLatest: opts.latest,
        } as MutatedProject)
        return
      case 'install':
        mutatedImporters.push({
          modulesDir,
          mutation,
          pruneDirectDependencies: opts.pruneDirectDependencies,
          rootDir,
          update: opts.update,
          updateMatching: opts.updateMatching,
          updatePackageManifest: opts.updatePackageManifest,
          updateToLatest: opts.latest,
        } as MutatedProject)
      }
    }))
    if (!opts.selectedProjectsGraph[opts.workspaceDir as ProjectRootDir] && manifestsByPath[opts.workspaceDir as ProjectRootDir] != null) {
      mutatedImporters.push({
        mutation: 'install',
        rootDir: opts.workspaceDir as ProjectRootDir,
      })
    }
    if ((mutatedImporters.length === 0) && cmdFullName === 'update' && opts.depth === 0) {
      throw new PnpmError('NO_PACKAGE_IN_DEPENDENCIES',
        'None of the specified packages were found in the dependencies of any of the projects.')
    }
    const {
      updatedCatalogs,
      updatedProjects: mutatedPkgs,
      ignoredBuilds,
    } = await mutateModules(mutatedImporters, {
      ...installOpts,
      storeController: store.ctrl,
    })
    if (opts.save !== false) {
      const promises: Array<Promise<void>> = mutatedPkgs.map(async ({ originalManifest, manifest, rootDir }) => {
        return manifestsByPath[rootDir].writeProjectManifest(originalManifest ?? manifest)
      })
      if (updatedCatalogs) {
        promises.push(addCatalogs(opts.workspaceDir, updatedCatalogs))
      }
      await Promise.all(promises)
    }
    if (opts.strictDepBuilds && ignoredBuilds?.length) {
      throw new IgnoredBuildsError(ignoredBuilds)
    }
    return true
  }

  const pkgPaths = (Object.keys(opts.selectedProjectsGraph) as ProjectRootDir[]).sort()

  let updatedCatalogs: Catalogs | undefined

  const limitInstallation = pLimit(getWorkspaceConcurrency(opts.workspaceConcurrency))
  await Promise.all(pkgPaths.map(async (rootDir) =>
    limitInstallation(async () => {
      const hooks = opts.ignorePnpmfile
        ? {}
        : (() => {
          const { hooks: pnpmfileHooks } = requireHooks(rootDir, opts)
          return {
            ...opts.hooks,
            ...pnpmfileHooks,
            afterAllResolved: [...(pnpmfileHooks.afterAllResolved ?? []), ...(opts.hooks?.afterAllResolved ?? [])],
            readPackage: [...(pnpmfileHooks.readPackage ?? []), ...(opts.hooks?.readPackage ?? [])],
          }
        })()
      try {
        if (opts.ignoredPackages?.has(rootDir)) {
          return
        }
        result[rootDir] = { status: 'running' }
        const { manifest, writeProjectManifest } = manifestsByPath[rootDir]
        let currentInput = [...params]
        if (updateMatch != null) {
          currentInput = matchDependencies(updateMatch, manifest, includeDirect)
          if (currentInput.length === 0) return
        }
        if (updateToLatest && (!params || (params.length === 0))) {
          currentInput = Object.keys(filterDependenciesByType(manifest, includeDirect))
        }
        if (opts.workspace) {
          if (!currentInput || (currentInput.length === 0)) {
            currentInput = updateToWorkspacePackagesFromManifest(manifest, includeDirect, workspacePackages)
          } else {
            currentInput = createWorkspaceSpecs(currentInput, workspacePackages)
          }
        }

        type ActionOpts =
          & Omit<InstallOptions, 'allProjects'>
          & OptionsFromRootManifest
          & Project
          & Pick<Config, 'bin'>
          & { pinnedVersion: 'major' | 'minor' | 'patch' }

        interface ActionResult {
          updatedCatalogs?: Catalogs
          updatedManifest: ProjectManifest
          ignoredBuilds: string[] | undefined
        }

        type ActionFunction = (manifest: PackageManifest | ProjectManifest, opts: ActionOpts) => Promise<ActionResult>

        let action: ActionFunction
        switch (cmdFullName) {
        case 'remove':
          action = async (manifest, opts) => {
            const mutationResult = await mutateModules([
              {
                dependencyNames: currentInput,
                mutation: 'uninstallSome',
                rootDir,
              },
            ], opts)
            return {
              updatedCatalogs: undefined, // there's no reason to add new or update catalogs on `pnpm remove`
              updatedManifest: mutationResult.updatedProjects[0].manifest,
              ignoredBuilds: mutationResult.ignoredBuilds,
            }
          }
          break
        default:
          action = currentInput.length === 0
            ? install
            : async (manifest, opts) => addDependenciesToPackage(manifest, currentInput, opts)
          break
        }

        const localConfig = await memReadLocalConfig(rootDir)
        const {
          updatedCatalogs: newCatalogsAddition,
          updatedManifest: newManifest,
          ignoredBuilds,
        } = await action(
          manifest,
          {
            ...installOpts,
            ...localConfig,
            ...getOptionsFromRootManifest(rootDir, manifest),
            ...opts.allProjectsGraph[rootDir]?.package,
            bin: path.join(rootDir, 'node_modules', '.bin'),
            dir: rootDir,
            hooks,
            ignoreScripts: true,
            pinnedVersion: getPinnedVersion({
              saveExact: typeof localConfig.saveExact === 'boolean' ? localConfig.saveExact : opts.saveExact,
              savePrefix: typeof localConfig.savePrefix === 'string' ? localConfig.savePrefix : opts.savePrefix,
            }),
            rawConfig: {
              ...installOpts.rawConfig,
              ...localConfig,
            },
            storeController: store.ctrl,
          }
        )
        if (opts.save !== false) {
          await writeProjectManifest(newManifest)
          if (newCatalogsAddition) {
            updatedCatalogs ??= {}
            Object.assign(updatedCatalogs, newCatalogsAddition)
          }
        }
        if (opts.strictDepBuilds && ignoredBuilds?.length) {
          throw new IgnoredBuildsError(ignoredBuilds)
        }
        result[rootDir].status = 'passed'
      } catch (err: any) { // eslint-disable-line
        logger.info(err)

        if (!opts.bail) {
          result[rootDir] = {
            status: 'failure',
            error: err,
            message: err.message,
            prefix: rootDir,
          }
          return
        }

        err['prefix'] = rootDir
        throw err
      }
    })
  ))

  if (updatedCatalogs) {
    await addCatalogs(opts.workspaceDir, updatedCatalogs)
  }

  if (
    !opts.lockfileOnly && !opts.ignoreScripts && (
      cmdFullName === 'add' ||
      cmdFullName === 'install' ||
      cmdFullName === 'update'
    )
  ) {
    await rebuild.handler({
      ...opts,
      pending: opts.pending === true,
      skipIfHasSideEffectsCache: true,
    }, [])
  }

  throwOnFail(result)

  if (!Object.values(result).filter(({ status }) => status === 'passed').length && cmdFullName === 'update' && opts.depth === 0) {
    throw new PnpmError('NO_PACKAGE_IN_DEPENDENCIES',
      'None of the specified packages were found in the dependencies of any of the projects.')
  }

  return true
}

function calculateRepositoryRoot (
  workspaceDir: string,
  projectDirs: string[]
): string {
  // assume repo root is workspace dir
  let relativeRepoRoot = '.'
  for (const rootDir of projectDirs) {
    const relativePartRegExp = new RegExp(`^(\\.\\.\\${path.sep})+`)
    const relativePartMatch = relativePartRegExp.exec(path.relative(workspaceDir, rootDir))
    if (relativePartMatch != null) {
      const relativePart = relativePartMatch[0]
      if (relativePart.length > relativeRepoRoot.length) {
        relativeRepoRoot = relativePart
      }
    }
  }
  return path.resolve(workspaceDir, relativeRepoRoot)
}

export function matchDependencies (
  match: (input: string) => string | null,
  manifest: ProjectManifest,
  include: IncludedDependencies
): string[] {
  const deps = Object.keys(filterDependenciesByType(manifest, include))
  const matchedDeps = []
  for (const dep of deps) {
    const spec = match(dep)
    if (spec === null) continue
    matchedDeps.push(spec ? `${dep}@${spec}` : dep)
  }
  return matchedDeps
}

export type UpdateDepsMatcher = (input: string) => string | null

export function createMatcher (params: string[]): UpdateDepsMatcher {
  const patterns: string[] = []
  const specs: string[] = []
  for (const param of params) {
    const { pattern, versionSpec } = parseUpdateParam(param)
    patterns.push(pattern)
    specs.push(versionSpec ?? '')
  }
  const matcher = createMatcherWithIndex(patterns)
  return (depName: string) => {
    const index = matcher(depName)
    if (index === -1) return null
    return specs[index]
  }
}

export function parseUpdateParam (param: string): { pattern: string, versionSpec: string | undefined } {
  const atIndex = param.indexOf('@', param[0] === '!' ? 2 : 1)
  if (atIndex === -1) {
    return {
      pattern: param,
      versionSpec: undefined,
    }
  }
  return {
    pattern: param.slice(0, atIndex),
    versionSpec: param.slice(atIndex + 1),
  }
}

export function makeIgnorePatterns (ignoredDependencies: string[]): string[] {
  return ignoredDependencies.map(depName => `!${depName}`)
}

function getAllProjects (manifestsByPath: ManifestsByPath, allProjectsGraph: ProjectsGraph, sort?: boolean): ProjectOptions[] {
  const chunks = sort !== false
    ? sortPackages(allProjectsGraph)
    : [(Object.keys(allProjectsGraph) as ProjectRootDir[]).sort()]
  return chunks.map((prefixes, buildIndex) => prefixes.map((rootDir) => {
    const { rootDirRealPath, modulesDir } = allProjectsGraph[rootDir].package
    return {
      buildIndex,
      manifest: manifestsByPath[rootDir].manifest,
      rootDir,
      rootDirRealPath,
      modulesDir,
    }
  })).flat()
}

interface ManifestsByPath { [dir: string]: Omit<Project, 'rootDir' | 'rootDirRealPath'> }

function getManifestsByPath (projects: Project[]): Record<ProjectRootDir, Omit<Project, 'rootDir' | 'rootDirRealPath'>> {
  const manifestsByPath: Record<string, Omit<Project, 'rootDir' | 'rootDirRealPath'>> = {}
  for (const { rootDir, manifest, writeProjectManifest } of projects) {
    manifestsByPath[rootDir] = { manifest, writeProjectManifest }
  }
  return manifestsByPath
}

function getImporters (opts: Pick<RecursiveOptions, 'selectedProjectsGraph' | 'ignoredPackages'>): Array<{ rootDir: ProjectRootDir, rootDirRealPath: ProjectRootDirRealPath }> {
  let rootDirs = Object.keys(opts.selectedProjectsGraph) as ProjectRootDir[]
  if (opts.ignoredPackages != null) {
    rootDirs = rootDirs.filter((rootDir) => !opts.ignoredPackages!.has(rootDir))
  }
  return rootDirs.map((rootDir) => ({ rootDir, rootDirRealPath: opts.selectedProjectsGraph[rootDir].package.rootDirRealPath }))
}
