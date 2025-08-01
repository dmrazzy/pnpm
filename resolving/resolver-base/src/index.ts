import {
  type ProjectRootDir,
  type DependencyManifest,
  type PkgResolutionId,
  type PinnedVersion,
} from '@pnpm/types'

export { type PkgResolutionId }

/**
 * tarball hosted remotely
 */
export interface TarballResolution {
  type?: undefined
  tarball: string
  integrity?: string
  path?: string
}

export interface BinaryResolution {
  type: 'binary'
  archive: 'tarball' | 'zip'
  url: string
  integrity: string
  bin: string
  prefix?: string
}

/**
 * directory on a file system
 */
export interface DirectoryResolution {
  type: 'directory'
  directory: string
}

export interface GitResolution {
  commit: string
  repo: string
  path?: string
  type: 'git'
}

export interface PlatformAssetTarget {
  os: string
  cpu: string
  libc?: 'musl'
}

export interface PlatformAssetResolution {
  resolution: AtomicResolution
  targets: PlatformAssetTarget[]
}

export type AtomicResolution =
  | TarballResolution
  | DirectoryResolution
  | GitResolution
  | BinaryResolution

export interface VariationsResolution {
  type: 'variations'
  variants: PlatformAssetResolution[]
}

export type Resolution = AtomicResolution | VariationsResolution

export interface ResolveResult {
  id: PkgResolutionId
  latest?: string
  publishedAt?: string
  manifest?: DependencyManifest
  resolution: Resolution
  resolvedVia: string
  normalizedBareSpecifier?: string
  alias?: string
}

export interface WorkspacePackage {
  rootDir: ProjectRootDir
  manifest: DependencyManifest
}

export type WorkspacePackagesByVersion = Map<string, WorkspacePackage>

export type WorkspacePackages = Map<string, WorkspacePackagesByVersion>

// This weight is set for selectors that are used on direct dependencies.
// It is important to give a bigger weight to direct dependencies.
export const DIRECT_DEP_SELECTOR_WEIGHT = 1000

export type VersionSelectorType = 'version' | 'range' | 'tag'

export interface VersionSelectors {
  [selector: string]: VersionSelectorWithWeight | VersionSelectorType
}

export interface VersionSelectorWithWeight {
  selectorType: VersionSelectorType
  weight: number
}

export interface PreferredVersions {
  [packageName: string]: VersionSelectors
}

export interface ResolveOptions {
  alwaysTryWorkspacePackages?: boolean
  defaultTag?: string
  pickLowestVersion?: boolean
  publishedBy?: Date
  projectDir: string
  lockfileDir: string
  preferredVersions: PreferredVersions
  preferWorkspacePackages?: boolean
  workspacePackages?: WorkspacePackages
  update?: false | 'compatible' | 'latest'
  injectWorkspacePackages?: boolean
  calcSpecifier?: boolean
  pinnedVersion?: PinnedVersion
}

export type WantedDependency = {
  injected?: boolean
  prevSpecifier?: string
} & ({
  alias?: string
  bareSpecifier: string
} | {
  alias: string
  bareSpecifier?: string
})

export type ResolveFunction = (wantedDependency: WantedDependency, opts: ResolveOptions) => Promise<ResolveResult>
