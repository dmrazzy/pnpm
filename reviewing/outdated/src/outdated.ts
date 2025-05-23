import {
  matchCatalogResolveResult,
  resolveFromCatalog,
  type CatalogResolutionFound,
  type WantedDependency,
} from '@pnpm/catalogs.resolver'
import { type Catalogs } from '@pnpm/catalogs.types'
import { LOCKFILE_VERSION, WANTED_LOCKFILE } from '@pnpm/constants'
import { PnpmError } from '@pnpm/error'
import {
  getLockfileImporterId,
  type LockfileObject,
  type ProjectSnapshot,
} from '@pnpm/lockfile.fs'
import { nameVerFromPkgSnapshot } from '@pnpm/lockfile.utils'
import { getAllDependenciesFromManifest } from '@pnpm/manifest-utils'
import { parseBareSpecifier } from '@pnpm/npm-resolver'
import { pickRegistryForPackage } from '@pnpm/pick-registry-for-package'
import {
  type DependenciesField,
  DEPENDENCIES_FIELDS,
  type IncludedDependencies,
  type PackageManifest,
  type ProjectManifest,
  type Registries,
} from '@pnpm/types'
import * as dp from '@pnpm/dependency-path'
import semver from 'semver'
import { createMatcher } from '@pnpm/matcher'
import { createReadPackageHook } from '@pnpm/hooks.read-package-hook'
import { parseOverrides } from '@pnpm/parse-overrides'

export * from './createManifestGetter'

export type GetLatestManifestFunction = (packageName: string, rangeOrTag: string) => Promise<PackageManifest | null>

export interface OutdatedPackage {
  alias: string
  belongsTo: DependenciesField
  current?: string // not defined means the package is not installed
  latestManifest?: PackageManifest
  packageName: string
  wanted: string
  workspace?: string
}

export async function outdated (
  opts: {
    catalogs?: Catalogs
    compatible?: boolean
    currentLockfile: LockfileObject | null
    getLatestManifest: GetLatestManifestFunction
    ignoreDependencies?: string[]
    include?: IncludedDependencies
    lockfileDir: string
    manifest: ProjectManifest
    match?: (dependencyName: string) => boolean
    prefix: string
    registries: Registries
    wantedLockfile: LockfileObject | null
  }
): Promise<OutdatedPackage[]> {
  if (packageHasNoDeps(opts.manifest)) return []
  if (opts.wantedLockfile == null) {
    throw new PnpmError('OUTDATED_NO_LOCKFILE', `No lockfile in directory "${opts.lockfileDir}". Run \`pnpm install\` to generate one.`)
  }

  async function getOverriddenManifest () {
    const overrides = opts.currentLockfile?.overrides ?? opts.wantedLockfile?.overrides
    if (overrides) {
      const readPackageHook = createReadPackageHook({
        lockfileDir: opts.lockfileDir,
        overrides: parseOverrides(overrides, opts.catalogs ?? {}),
      })
      const manifest = await readPackageHook?.(opts.manifest, opts.lockfileDir)
      if (manifest) return manifest
    }

    return opts.manifest
  }

  const allDeps = getAllDependenciesFromManifest(await getOverriddenManifest())
  const importerId = getLockfileImporterId(opts.lockfileDir, opts.prefix)
  const currentLockfile: LockfileObject = opts.currentLockfile ?? { lockfileVersion: LOCKFILE_VERSION, importers: { [importerId]: { specifiers: {} } } }

  const outdated: OutdatedPackage[] = []

  const ignoreDependenciesMatcher = opts.ignoreDependencies?.length ? createMatcher(opts.ignoreDependencies) : undefined

  await Promise.all(
    DEPENDENCIES_FIELDS.map(async (depType) => {
      if (
        opts.include?.[depType] === false ||
        (opts.wantedLockfile!.importers[importerId][depType] == null)
      ) return

      let pkgs = Object.keys(opts.wantedLockfile!.importers[importerId][depType]!)

      if (opts.match != null) {
        pkgs = pkgs.filter((pkgName) => opts.match!(pkgName))
      }

      const _replaceCatalogProtocolIfNecessary = replaceCatalogProtocolIfNecessary.bind(null, opts.catalogs ?? {})

      await Promise.all(
        pkgs.map(async (alias) => {
          if (!allDeps[alias]) return
          const ref = opts.wantedLockfile!.importers[importerId][depType]![alias]

          if (
            ref.startsWith('file:') || // ignoring linked packages. (For backward compatibility)
            ignoreDependenciesMatcher?.(alias)
          ) {
            return
          }

          const relativeDepPath = dp.refToRelative(ref, alias)

          // ignoring linked packages
          if (relativeDepPath === null) return

          const pkgSnapshot = opts.wantedLockfile!.packages?.[relativeDepPath]

          if (pkgSnapshot == null) {
            throw new Error(`Invalid ${WANTED_LOCKFILE} file. ${relativeDepPath} not found in packages field`)
          }

          const currentRef = (currentLockfile.importers[importerId] as ProjectSnapshot)?.[depType]?.[alias]
          const currentRelative = currentRef && dp.refToRelative(currentRef, alias)
          const current = (currentRelative && dp.parse(currentRelative).version) ?? currentRef
          const wanted = dp.parse(relativeDepPath).version ?? ref
          const { name: packageName } = nameVerFromPkgSnapshot(relativeDepPath, pkgSnapshot)
          const name = dp.parse(relativeDepPath).name ?? packageName

          const bareSpecifier = _replaceCatalogProtocolIfNecessary({ alias, bareSpecifier: allDeps[alias] })
          // If the npm resolve parser cannot parse the spec of the dependency,
          // it means that the package is not from a npm-compatible registry.
          // In that case, we can't check whether the package is up-to-date
          if (
            parseBareSpecifier(bareSpecifier, alias, 'latest', pickRegistryForPackage(opts.registries, name)) == null
          ) {
            if (current !== wanted) {
              outdated.push({
                alias,
                belongsTo: depType,
                current,
                latestManifest: undefined,
                packageName,
                wanted,
                workspace: opts.manifest.name,
              })
            }
            return
          }

          const latestManifest = await opts.getLatestManifest(
            name,
            opts.compatible ? (bareSpecifier ?? 'latest') : 'latest'
          )

          if (latestManifest == null) return

          if (!current) {
            outdated.push({
              alias,
              belongsTo: depType,
              latestManifest,
              packageName,
              wanted,
              workspace: opts.manifest.name,

            })
            return
          }

          if (current !== wanted || semver.lt(current, latestManifest.version) || latestManifest.deprecated) {
            outdated.push({
              alias,
              belongsTo: depType,
              current,
              latestManifest,
              packageName,
              wanted,
              workspace: opts.manifest.name,

            })
          }
        })
      )
    })
  )

  return outdated.sort((pkg1, pkg2) => pkg1.packageName.localeCompare(pkg2.packageName))
}

function packageHasNoDeps (manifest: ProjectManifest): boolean {
  return ((manifest.dependencies == null) || isEmpty(manifest.dependencies)) &&
    ((manifest.devDependencies == null) || isEmpty(manifest.devDependencies)) &&
    ((manifest.optionalDependencies == null) || isEmpty(manifest.optionalDependencies))
}

function isEmpty (obj: object): boolean {
  return Object.keys(obj).length === 0
}

function replaceCatalogProtocolIfNecessary (catalogs: Catalogs, wantedDependency: WantedDependency) {
  return matchCatalogResolveResult(resolveFromCatalog(catalogs, wantedDependency), {
    unused: () => wantedDependency.bareSpecifier,
    found: (found: CatalogResolutionFound) => found.resolution.specifier,
    misconfiguration: (misconfiguration) => {
      throw misconfiguration.error
    },
  })
}
