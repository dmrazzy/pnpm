import type { AtomicResolution } from '@pnpm/resolver-base'
import type { Fetchers, FetchFunction, DirectoryFetcher, GitFetcher, BinaryFetcher } from '@pnpm/fetcher-base'

export function pickFetcher (fetcherByHostingType: Partial<Fetchers>, resolution: AtomicResolution): FetchFunction | DirectoryFetcher | GitFetcher | BinaryFetcher {
  let fetcherType: keyof Fetchers | undefined = resolution.type

  if (resolution.type == null) {
    if (resolution.tarball.startsWith('file:')) {
      fetcherType = 'localTarball'
    } else if (isGitHostedPkgUrl(resolution.tarball)) {
      fetcherType = 'gitHostedTarball'
    } else {
      fetcherType = 'remoteTarball'
    }
  }

  const fetch = fetcherByHostingType[fetcherType!]

  if (!fetch) {
    throw new Error(`Fetching for dependency type "${resolution.type ?? 'undefined'}" is not supported`)
  }

  return fetch
}

export function isGitHostedPkgUrl (url: string): boolean {
  return (
    url.startsWith('https://codeload.github.com/') ||
    url.startsWith('https://bitbucket.org/') ||
    url.startsWith('https://gitlab.com/')
  ) && url.includes('tar.gz')
}
