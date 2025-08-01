# @pnpm/package-requester

## 1006.0.0

### Major Changes

- d1edf73: Removed node fetcher. The binary fetcher should be used for downloading node assets.
- f91922c: Changed how the integrity of the node.js artifact is stored in the lockfile.

### Patch Changes

- Updated dependencies [d1edf73]
- Updated dependencies [d1edf73]
- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [adb097c]
- Updated dependencies [f91922c]
  - @pnpm/dependency-path@1001.1.0
  - @pnpm/fetcher-base@1001.0.0
  - @pnpm/resolver-base@1005.0.0
  - @pnpm/pick-fetcher@1001.0.0
  - @pnpm/read-package-json@1000.0.11
  - @pnpm/error@1000.0.4
  - @pnpm/store.cafs@1000.0.16
  - @pnpm/store-controller-types@1004.0.1
  - @pnpm/package-is-installable@1000.0.12
  - @pnpm/worker@1000.1.11

## 1005.0.0

### Major Changes

- 1a07b8f: expectedPkg removed from options of the fetch package to store function.

### Minor Changes

- 1a07b8f: Added support for resolving and downloading the Node.js runtime specified in the [devEngines](https://github.com/openjs-foundation/package-metadata-interoperability-collab-space/issues/15) field of `package.json`.

  Usage example:

  ```json
  {
    "devEngines": {
      "runtime": {
        "name": "node",
        "version": "^24.4.0",
        "onFail": "download"
      }
    }
  }
  ```

  When running `pnpm install`, pnpm will resolve Node.js to the latest version that satisfies the specified range and install it as a dependency of the project. As a result, when running scripts, the locally installed Node.js version will be used.

  Unlike the existing options, `useNodeVersion` and `executionEnv.nodeVersion`, this new field supports version ranges, which are locked to exact versions during installation. The resolved version is stored in the pnpm lockfile, along with an integrity checksum for future validation of the Node.js content's validity.

  Related PR: [#9755](https://github.com/pnpm/pnpm/pull/9755).

### Patch Changes

- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/store-controller-types@1004.0.0
  - @pnpm/resolver-base@1004.1.0
  - @pnpm/fetcher-base@1000.1.0
  - @pnpm/pick-fetcher@1000.1.0
  - @pnpm/package-is-installable@1000.0.11
  - @pnpm/core-loggers@1001.0.2
  - @pnpm/dependency-path@1001.0.2
  - @pnpm/read-package-json@1000.0.10
  - @pnpm/store.cafs@1000.0.15
  - @pnpm/worker@1000.1.10
  - @pnpm/error@1000.0.3

## 1004.0.5

### Patch Changes

- Updated dependencies [589ac1f]
  - @pnpm/worker@1000.1.9
  - @pnpm/dependency-path@1001.0.1

## 1004.0.4

### Patch Changes

- Updated dependencies [540986f]
  - @pnpm/dependency-path@1001.0.0

## 1004.0.3

### Patch Changes

- Updated dependencies [2721291]
- Updated dependencies [6acf819]
  - @pnpm/resolver-base@1004.0.0
  - @pnpm/pick-fetcher@1000.0.1
  - @pnpm/fetcher-base@1000.0.12
  - @pnpm/store-controller-types@1003.0.3
  - @pnpm/store.cafs@1000.0.14
  - @pnpm/worker@1000.1.8

## 1004.0.2

### Patch Changes

- 509948d: Fix a regression (in v10.9.0) causing the `--lockfile-only` flag on `pnpm update` to produce a different `pnpm-lock.yaml` than an update without the flag.
- Updated dependencies [509948d]
  - @pnpm/store-controller-types@1003.0.2
  - @pnpm/store.cafs@1000.0.13
  - @pnpm/worker@1000.1.7

## 1004.0.1

### Patch Changes

- 09cf46f: Update `@pnpm/logger` in peer dependencies.
- c24c66e: Don't remove cpu field on subsequent install
- Updated dependencies [09cf46f]
- Updated dependencies [5ec7255]
- Updated dependencies [c24c66e]
  - @pnpm/package-is-installable@1000.0.10
  - @pnpm/core-loggers@1001.0.1
  - @pnpm/worker@1000.1.6
  - @pnpm/types@1000.6.0
  - @pnpm/store-controller-types@1003.0.1
  - @pnpm/fetcher-base@1000.0.11
  - @pnpm/dependency-path@1000.0.9
  - @pnpm/read-package-json@1000.0.9
  - @pnpm/resolver-base@1003.0.1
  - @pnpm/store.cafs@1000.0.12
  - @pnpm/pick-fetcher@1000.0.0

## 1004.0.0

### Major Changes

- 8a9f3a4: `pref` renamed to `bareSpecifier`.
- 5b73df1: Renamed `normalizedPref` to `specifiers`.

### Minor Changes

- 9c3dd03: **Added support for installing JSR packages.** You can now install JSR packages using the following syntax:

  ```
  pnpm add jsr:<pkg_name>
  ```

  or with a version range:

  ```
  pnpm add jsr:<pkg_name>@<range>
  ```

  For example, running:

  ```
  pnpm add jsr:@foo/bar
  ```

  will add the following entry to your `package.json`:

  ```json
  {
    "dependencies": {
      "@foo/bar": "jsr:^0.1.2"
    }
  }
  ```

  When publishing, this entry will be transformed into a format compatible with npm, older versions of Yarn, and previous pnpm versions:

  ```json
  {
    "dependencies": {
      "@foo/bar": "npm:@jsr/foo__bar@^0.1.2"
    }
  }
  ```

  Related issue: [#8941](https://github.com/pnpm/pnpm/issues/8941).

  Note: The `@jsr` scope defaults to <https://npm.jsr.io/> if the `@jsr:registry` setting is not defined.

### Patch Changes

- Updated dependencies [8a9f3a4]
- Updated dependencies [5b73df1]
- Updated dependencies [9c3dd03]
- Updated dependencies [5b73df1]
  - @pnpm/store-controller-types@1003.0.0
  - @pnpm/resolver-base@1003.0.0
  - @pnpm/core-loggers@1001.0.0
  - @pnpm/logger@1001.0.0
  - @pnpm/types@1000.5.0
  - @pnpm/store.cafs@1000.0.11
  - @pnpm/fetcher-base@1000.0.10
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/package-is-installable@1000.0.9
  - @pnpm/dependency-path@1000.0.8
  - @pnpm/read-package-json@1000.0.8
  - @pnpm/worker@1000.1.5

## 1003.0.1

### Patch Changes

- Updated dependencies [81f441c]
  - @pnpm/resolver-base@1002.0.0
  - @pnpm/fetcher-base@1000.0.9
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/store-controller-types@1002.0.1
  - @pnpm/store.cafs@1000.0.10
  - @pnpm/worker@1000.1.4

## 1003.0.0

### Major Changes

- 72cff38: The resolving function now takes a `registries` object, so it finds the required registry itself instead of receiving it from package requester.

### Patch Changes

- Updated dependencies [750ae7d]
- Updated dependencies [72cff38]
- Updated dependencies [750ae7d]
  - @pnpm/types@1000.4.0
  - @pnpm/store-controller-types@1002.0.0
  - @pnpm/resolver-base@1001.0.0
  - @pnpm/core-loggers@1000.2.0
  - @pnpm/package-is-installable@1000.0.8
  - @pnpm/fetcher-base@1000.0.8
  - @pnpm/dependency-path@1000.0.7
  - @pnpm/read-package-json@1000.0.7
  - @pnpm/store.cafs@1000.0.9
  - @pnpm/worker@1000.1.3
  - @pnpm/pick-fetcher@1000.0.0

## 1002.0.2

### Patch Changes

- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
  - @pnpm/types@1000.3.0
  - @pnpm/package-is-installable@1000.0.7
  - @pnpm/fetcher-base@1000.0.7
  - @pnpm/core-loggers@1000.1.5
  - @pnpm/dependency-path@1000.0.6
  - @pnpm/read-package-json@1000.0.6
  - @pnpm/resolver-base@1000.2.1
  - @pnpm/store.cafs@1000.0.8
  - @pnpm/store-controller-types@1001.0.5
  - @pnpm/worker@1000.1.2
  - @pnpm/pick-fetcher@1000.0.0

## 1002.0.1

### Patch Changes

- Updated dependencies [3d52365]
  - @pnpm/resolver-base@1000.2.0
  - @pnpm/fetcher-base@1000.0.6
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/store-controller-types@1001.0.4
  - @pnpm/store.cafs@1000.0.7
  - @pnpm/worker@1000.1.1

## 1002.0.0

### Patch Changes

- Updated dependencies [2e05789]
  - @pnpm/worker@1000.1.0

## 1001.0.4

### Patch Changes

- @pnpm/worker@1000.0.8
- @pnpm/dependency-path@1000.0.5

## 1001.0.3

### Patch Changes

- Updated dependencies [a5e4965]
  - @pnpm/types@1000.2.1
  - @pnpm/dependency-path@1000.0.4
  - @pnpm/package-is-installable@1000.0.6
  - @pnpm/fetcher-base@1000.0.5
  - @pnpm/core-loggers@1000.1.4
  - @pnpm/read-package-json@1000.0.5
  - @pnpm/resolver-base@1000.1.4
  - @pnpm/store.cafs@1000.0.6
  - @pnpm/store-controller-types@1001.0.3
  - @pnpm/worker@1000.0.7
  - @pnpm/pick-fetcher@1000.0.0

## 1001.0.2

### Patch Changes

- Updated dependencies [8fcc221]
  - @pnpm/types@1000.2.0
  - @pnpm/package-is-installable@1000.0.5
  - @pnpm/fetcher-base@1000.0.4
  - @pnpm/core-loggers@1000.1.3
  - @pnpm/dependency-path@1000.0.3
  - @pnpm/read-package-json@1000.0.4
  - @pnpm/resolver-base@1000.1.3
  - @pnpm/store.cafs@1000.0.5
  - @pnpm/store-controller-types@1001.0.2
  - @pnpm/worker@1000.0.6
  - @pnpm/pick-fetcher@1000.0.0

## 1001.0.1

### Patch Changes

- Updated dependencies [b562deb]
  - @pnpm/types@1000.1.1
  - @pnpm/error@1000.0.2
  - @pnpm/package-is-installable@1000.0.4
  - @pnpm/fetcher-base@1000.0.3
  - @pnpm/core-loggers@1000.1.2
  - @pnpm/dependency-path@1000.0.2
  - @pnpm/read-package-json@1000.0.3
  - @pnpm/resolver-base@1000.1.2
  - @pnpm/store.cafs@1000.0.4
  - @pnpm/store-controller-types@1001.0.1
  - @pnpm/worker@1000.0.5
  - @pnpm/pick-fetcher@1000.0.0

## 1001.0.0

### Major Changes

- dde650b: `RequestPackageOptions` now takes a union type for the `update` option, instead of a separate `updateToLatest` option.

  This avoids pitfalls around specifying only `update` or, specifying `update: false`, but still providing `updateToLatest: true`.

### Patch Changes

- Updated dependencies [dde650b]
  - @pnpm/store-controller-types@1001.0.0
  - @pnpm/store.cafs@1000.0.3
  - @pnpm/worker@1000.0.4

## 1000.1.2

### Patch Changes

- Updated dependencies [9591a18]
  - @pnpm/types@1000.1.0
  - @pnpm/package-is-installable@1000.0.3
  - @pnpm/fetcher-base@1000.0.2
  - @pnpm/core-loggers@1000.1.1
  - @pnpm/dependency-path@1000.0.1
  - @pnpm/read-package-json@1000.0.2
  - @pnpm/resolver-base@1000.1.1
  - @pnpm/store.cafs@1000.0.2
  - @pnpm/store-controller-types@1000.1.1
  - @pnpm/worker@1000.0.3
  - @pnpm/pick-fetcher@1000.0.0

## 1000.1.1

### Patch Changes

- Updated dependencies [516c4b3]
- Updated dependencies [7272992]
  - @pnpm/core-loggers@1000.1.0
  - @pnpm/worker@1000.0.2
  - @pnpm/package-is-installable@1000.0.2

## 1000.1.0

### Minor Changes

- 6483b64: A new setting, `inject-workspace-packages`, has been added to allow hard-linking all local workspace dependencies instead of symlinking them. Previously, this behavior was achievable via the [`dependenciesMeta[].injected`](https://pnpm.io/package_json#dependenciesmetainjected) setting, which remains supported [#8836](https://github.com/pnpm/pnpm/pull/8836).

### Patch Changes

- Updated dependencies [6483b64]
  - @pnpm/store-controller-types@1000.1.0
  - @pnpm/resolver-base@1000.1.0
  - @pnpm/error@1000.0.1
  - @pnpm/store.cafs@1000.0.1
  - @pnpm/fetcher-base@1000.0.1
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/package-is-installable@1000.0.1
  - @pnpm/read-package-json@1000.0.1
  - @pnpm/worker@1000.0.1

## 26.0.0

### Major Changes

- d433cb9: Some registries allow identical content to be published under different package names or versions. To accommodate this, index files in the store are now stored using both the content hash and package identifier.

  This approach ensures that we can:

  1. Validate that the integrity in the lockfile corresponds to the correct package,
     which might not be the case after a poorly resolved Git conflict.
  2. Allow the same content to be referenced by different packages or different versions of the same package.

  Related PR: [#8510](https://github.com/pnpm/pnpm/pull/8510)
  Related issue: [#8204](https://github.com/pnpm/pnpm/issues/8204)

### Patch Changes

- Updated dependencies [dcd2917]
- Updated dependencies [d433cb9]
- Updated dependencies [e476b07]
- Updated dependencies [099e6af]
- Updated dependencies [d55b259]
  - @pnpm/dependency-path@6.0.0
  - @pnpm/store.cafs@5.0.0
  - @pnpm/package-is-installable@9.0.12
  - @pnpm/worker@2.0.0
  - @pnpm/error@6.0.3
  - @pnpm/fetcher-base@16.0.7
  - @pnpm/store-controller-types@18.1.6
  - @pnpm/read-package-json@9.0.10

## 25.2.10

### Patch Changes

- Updated dependencies [222d10a]
- Updated dependencies [a1f4df2]
  - @pnpm/worker@1.0.13
  - @pnpm/store.cafs@4.0.2
  - @pnpm/package-is-installable@9.0.11
  - @pnpm/dependency-path@5.1.7

## 25.2.9

### Patch Changes

- Updated dependencies [db7ff76]
  - @pnpm/store.cafs@4.0.1
  - @pnpm/worker@1.0.12

## 25.2.8

### Patch Changes

- @pnpm/error@6.0.2
- @pnpm/package-is-installable@9.0.10
- @pnpm/read-package-json@9.0.9
- @pnpm/worker@1.0.11

## 25.2.7

### Patch Changes

- Updated dependencies [d500d9f]
- Updated dependencies [db420ab]
  - @pnpm/types@12.2.0
  - @pnpm/store.cafs@4.0.0
  - @pnpm/package-is-installable@9.0.9
  - @pnpm/fetcher-base@16.0.7
  - @pnpm/core-loggers@10.0.7
  - @pnpm/dependency-path@5.1.6
  - @pnpm/read-package-json@9.0.8
  - @pnpm/resolver-base@13.0.4
  - @pnpm/store-controller-types@18.1.6
  - @pnpm/worker@1.0.10
  - @pnpm/pick-fetcher@3.0.0

## 25.2.6

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/package-is-installable@9.0.8
  - @pnpm/fetcher-base@16.0.6
  - @pnpm/core-loggers@10.0.6
  - @pnpm/dependency-path@5.1.5
  - @pnpm/read-package-json@9.0.7
  - @pnpm/resolver-base@13.0.3
  - @pnpm/store.cafs@3.0.8
  - @pnpm/store-controller-types@18.1.5
  - @pnpm/worker@1.0.9
  - @pnpm/pick-fetcher@3.0.0

## 25.2.5

### Patch Changes

- Updated dependencies [33ba536]
  - @pnpm/package-is-installable@9.0.7

## 25.2.4

### Patch Changes

- Updated dependencies [cb006df]
  - @pnpm/types@12.0.0
  - @pnpm/package-is-installable@9.0.6
  - @pnpm/fetcher-base@16.0.5
  - @pnpm/core-loggers@10.0.5
  - @pnpm/dependency-path@5.1.4
  - @pnpm/read-package-json@9.0.6
  - @pnpm/resolver-base@13.0.2
  - @pnpm/store.cafs@3.0.7
  - @pnpm/store-controller-types@18.1.4
  - @pnpm/worker@1.0.8
  - @pnpm/pick-fetcher@3.0.0

## 25.2.3

### Patch Changes

- Updated dependencies [0ef168b]
  - @pnpm/types@11.1.0
  - @pnpm/package-is-installable@9.0.5
  - @pnpm/fetcher-base@16.0.4
  - @pnpm/core-loggers@10.0.4
  - @pnpm/dependency-path@5.1.3
  - @pnpm/read-package-json@9.0.5
  - @pnpm/resolver-base@13.0.1
  - @pnpm/store.cafs@3.0.6
  - @pnpm/store-controller-types@18.1.3
  - @pnpm/worker@1.0.7
  - @pnpm/pick-fetcher@3.0.0

## 25.2.2

### Patch Changes

- Updated dependencies [afe520d]
- Updated dependencies [afe520d]
  - @pnpm/store.cafs@3.0.5
  - @pnpm/worker@1.0.6

## 25.2.1

### Patch Changes

- Updated dependencies [dd00eeb]
- Updated dependencies
  - @pnpm/resolver-base@13.0.0
  - @pnpm/types@11.0.0
  - @pnpm/fetcher-base@16.0.3
  - @pnpm/pick-fetcher@3.0.0
  - @pnpm/store-controller-types@18.1.2
  - @pnpm/package-is-installable@9.0.4
  - @pnpm/core-loggers@10.0.3
  - @pnpm/dependency-path@5.1.2
  - @pnpm/read-package-json@9.0.4
  - @pnpm/store.cafs@3.0.4
  - @pnpm/worker@1.0.5

## 25.2.0

### Minor Changes

- 7c6c923: Some registries allow the exact same content to be published under different package names and/or versions. This breaks the validity checks of packages in the store. To avoid errors when verifying the names and versions of such packages in the store, you may now set the `strict-store-pkg-content-check` setting to `false` [#4724](https://github.com/pnpm/pnpm/issues/4724).

### Patch Changes

- Updated dependencies [13e55b2]
  - @pnpm/types@10.1.1
  - @pnpm/package-is-installable@9.0.3
  - @pnpm/fetcher-base@16.0.2
  - @pnpm/core-loggers@10.0.2
  - @pnpm/dependency-path@5.1.1
  - @pnpm/read-package-json@9.0.3
  - @pnpm/resolver-base@12.0.2
  - @pnpm/store.cafs@3.0.3
  - @pnpm/store-controller-types@18.1.1
  - @pnpm/worker@1.0.4
  - @pnpm/pick-fetcher@3.0.0

## 25.1.4

### Patch Changes

- Updated dependencies [47341e5]
  - @pnpm/dependency-path@5.1.0

## 25.1.3

### Patch Changes

- Updated dependencies [0c08e1c]
  - @pnpm/store-controller-types@18.1.0
  - @pnpm/store.cafs@3.0.2
  - @pnpm/worker@1.0.3

## 25.1.2

### Patch Changes

- Updated dependencies [45f4262]
- Updated dependencies
  - @pnpm/types@10.1.0
  - @pnpm/dependency-path@5.0.0
  - @pnpm/package-is-installable@9.0.2
  - @pnpm/fetcher-base@16.0.1
  - @pnpm/core-loggers@10.0.1
  - @pnpm/read-package-json@9.0.2
  - @pnpm/resolver-base@12.0.1
  - @pnpm/store.cafs@3.0.1
  - @pnpm/store-controller-types@18.0.1
  - @pnpm/worker@1.0.2
  - @pnpm/pick-fetcher@3.0.0

## 25.1.1

### Patch Changes

- Updated dependencies [a7aef51]
  - @pnpm/error@6.0.1
  - @pnpm/package-is-installable@9.0.1
  - @pnpm/read-package-json@9.0.1
  - @pnpm/worker@1.0.1

## 25.1.0

### Minor Changes

- 9719a42: New setting called `virtual-store-dir-max-length` added to modify the maximum allowed length of the directories inside `node_modules/.pnpm`. The default length is set to 120 characters. This setting is particularly useful on Windows, where there is a limit to the maximum length of a file path [#7355](https://github.com/pnpm/pnpm/issues/7355).

### Patch Changes

- Updated dependencies [9719a42]
  - @pnpm/dependency-path@4.0.0

## 25.0.1

### Patch Changes

- b7d2ed4: The `engines.pnpm` field in the `package.json` files of dependencies should be ignored [#7965](https://github.com/pnpm/pnpm/issues/7965).

## 25.0.0

### Major Changes

- cdd8365: Package ID does not contain the registry domain.
- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Minor Changes

- 730929e: Add a field named `ignoredOptionalDependencies`. This is an array of strings. If an optional dependency has its name included in this array, it will be skipped.

### Patch Changes

- Updated dependencies [7733f3a]
- Updated dependencies [3ded840]
- Updated dependencies [cdd8365]
- Updated dependencies [89b396b]
- Updated dependencies [43cdd87]
- Updated dependencies [6cdbf11]
- Updated dependencies [36dcaa0]
- Updated dependencies [11d9ebd]
- Updated dependencies [36dcaa0]
- Updated dependencies [d381a60]
- Updated dependencies [b13d2dc]
- Updated dependencies [730929e]
- Updated dependencies [98a1266]
  - @pnpm/types@10.0.0
  - @pnpm/error@6.0.0
  - @pnpm/worker@1.0.0
  - @pnpm/dependency-path@3.0.0
  - @pnpm/read-package-json@9.0.0
  - @pnpm/package-is-installable@9.0.0
  - @pnpm/store-controller-types@18.0.0
  - @pnpm/resolver-base@12.0.0
  - @pnpm/fetcher-base@16.0.0
  - @pnpm/pick-fetcher@3.0.0
  - @pnpm/core-loggers@10.0.0
  - @pnpm/graceful-fs@4.0.0
  - @pnpm/store.cafs@3.0.0

## 24.1.8

### Patch Changes

- 31054a63e: Running `pnpm update -r --latest` will no longer downgrade prerelease dependencies [#7436](https://github.com/pnpm/pnpm/issues/7436).
- Updated dependencies [31054a63e]
  - @pnpm/store-controller-types@17.2.0
  - @pnpm/resolver-base@11.1.0
  - @pnpm/store.cafs@2.0.12
  - @pnpm/fetcher-base@15.0.7
  - @pnpm/pick-fetcher@2.0.1
  - @pnpm/worker@0.3.14

## 24.1.7

### Patch Changes

- @pnpm/worker@0.3.13

## 24.1.6

### Patch Changes

- Updated dependencies [33313d2fd]
- Updated dependencies [4d34684f1]
  - @pnpm/store.cafs@2.0.11
  - @pnpm/types@9.4.2
  - @pnpm/worker@0.3.12
  - @pnpm/package-is-installable@8.1.2
  - @pnpm/fetcher-base@15.0.6
  - @pnpm/core-loggers@9.0.6
  - @pnpm/dependency-path@2.1.7
  - @pnpm/read-package-json@8.0.7
  - @pnpm/resolver-base@11.0.2
  - @pnpm/store-controller-types@17.1.4
  - @pnpm/pick-fetcher@2.0.1

## 24.1.5

### Patch Changes

- Updated dependencies
  - @pnpm/types@9.4.1
  - @pnpm/package-is-installable@8.1.1
  - @pnpm/fetcher-base@15.0.5
  - @pnpm/core-loggers@9.0.5
  - @pnpm/dependency-path@2.1.6
  - @pnpm/read-package-json@8.0.6
  - @pnpm/resolver-base@11.0.1
  - @pnpm/store.cafs@2.0.10
  - @pnpm/store-controller-types@17.1.3
  - @pnpm/worker@0.3.11
  - @pnpm/pick-fetcher@2.0.1

## 24.1.4

### Patch Changes

- @pnpm/worker@0.3.10

## 24.1.3

### Patch Changes

- 1e7bd4af3: Use availableParallelism, when available.
- Updated dependencies [1e7bd4af3]
  - @pnpm/worker@0.3.9

## 24.1.2

### Patch Changes

- Updated dependencies [291607c5a]
  - @pnpm/store-controller-types@17.1.2
  - @pnpm/store.cafs@2.0.9
  - @pnpm/worker@0.3.8

## 24.1.1

### Patch Changes

- 7ea45afbe: If a package's tarball cannot be fetched, print the dependency chain that leads to the failed package [#7265](https://github.com/pnpm/pnpm/pull/7265).
- Updated dependencies [4c2450208]
- Updated dependencies [7ea45afbe]
  - @pnpm/resolver-base@11.0.0
  - @pnpm/store-controller-types@17.1.1
  - @pnpm/fetcher-base@15.0.4
  - @pnpm/pick-fetcher@2.0.1
  - @pnpm/worker@0.3.7
  - @pnpm/store.cafs@2.0.8

## 24.1.0

### Minor Changes

- 43ce9e4a6: Support for multiple architectures when installing dependencies [#5965](https://github.com/pnpm/pnpm/issues/5965).

  You can now specify architectures for which you'd like to install optional dependencies, even if they don't match the architecture of the system running the install. Use the `supportedArchitectures` field in `package.json` to define your preferences.

  For example, the following configuration tells pnpm to install optional dependencies for Windows x64:

  ```json
  {
    "pnpm": {
      "supportedArchitectures": {
        "os": ["win32"],
        "cpu": ["x64"]
      }
    }
  }
  ```

  Whereas this configuration will have pnpm install optional dependencies for Windows, macOS, and the architecture of the system currently running the install. It includes artifacts for both x64 and arm64 CPUs:

  ```json
  {
    "pnpm": {
      "supportedArchitectures": {
        "os": ["win32", "darwin", "current"],
        "cpu": ["x64", "arm64"]
      }
    }
  }
  ```

  Additionally, `supportedArchitectures` also supports specifying the `libc` of the system.

### Patch Changes

- Updated dependencies [43ce9e4a6]
- Updated dependencies [6390033cd]
  - @pnpm/package-is-installable@8.1.0
  - @pnpm/store-controller-types@17.1.0
  - @pnpm/types@9.4.0
  - @pnpm/worker@0.3.6
  - @pnpm/store.cafs@2.0.7
  - @pnpm/fetcher-base@15.0.3
  - @pnpm/core-loggers@9.0.4
  - @pnpm/dependency-path@2.1.5
  - @pnpm/read-package-json@8.0.5
  - @pnpm/resolver-base@10.0.4
  - @pnpm/pick-fetcher@2.0.1

## 24.0.6

### Patch Changes

- @pnpm/worker@0.3.5

## 24.0.5

### Patch Changes

- 01bc58e2c: Update ssri to v10.0.5.
- Updated dependencies [01bc58e2c]
- Updated dependencies [08b65ff78]
  - @pnpm/store.cafs@2.0.6
  - @pnpm/worker@0.3.4

## 24.0.4

### Patch Changes

- @pnpm/worker@0.3.3

## 24.0.3

### Patch Changes

- @pnpm/worker@0.3.2

## 24.0.2

### Patch Changes

- Updated dependencies [d774a3196]
  - @pnpm/types@9.3.0
  - @pnpm/package-is-installable@8.0.5
  - @pnpm/fetcher-base@15.0.2
  - @pnpm/core-loggers@9.0.3
  - @pnpm/dependency-path@2.1.4
  - @pnpm/read-package-json@8.0.4
  - @pnpm/resolver-base@10.0.3
  - @pnpm/store.cafs@2.0.5
  - @pnpm/store-controller-types@17.0.1
  - @pnpm/worker@0.3.1
  - @pnpm/pick-fetcher@2.0.1

## 24.0.1

### Patch Changes

- Updated dependencies [f394cfccd]
  - @pnpm/pick-fetcher@2.0.1

## 24.0.0

### Major Changes

- 9caa33d53: `fromStore` replaced with `resolvedFrom`.

### Patch Changes

- Updated dependencies [9caa33d53]
- Updated dependencies [9caa33d53]
- Updated dependencies [9caa33d53]
  - @pnpm/store-controller-types@17.0.0
  - @pnpm/worker@0.3.0
  - @pnpm/graceful-fs@3.2.0
  - @pnpm/store.cafs@2.0.4
  - @pnpm/fetcher-base@15.0.1

## 23.0.1

### Patch Changes

- @pnpm/worker@0.2.1

## 23.0.0

### Patch Changes

- Updated dependencies [03cdccc6e]
- Updated dependencies [48dcd108c]
  - @pnpm/store-controller-types@16.1.0
  - @pnpm/worker@0.2.0
  - @pnpm/store.cafs@2.0.3
  - @pnpm/fetcher-base@15.0.1

## 22.0.2

### Patch Changes

- Updated dependencies [b3947185c]
  - @pnpm/store.cafs@2.0.2
  - @pnpm/worker@0.1.2

## 22.0.1

### Patch Changes

- Updated dependencies [b548f2f43]
- Updated dependencies [4a1a9431d]
  - @pnpm/store.cafs@2.0.1
  - @pnpm/fetcher-base@15.0.1
  - @pnpm/worker@0.1.1
  - @pnpm/pick-fetcher@2.0.0
  - @pnpm/store-controller-types@16.0.1

## 22.0.0

### Major Changes

- 494f87544: Breaking changes to the API.
- 083bbf590: Breaking changes to the API.

### Patch Changes

- Updated dependencies [0fd9e6a6c]
- Updated dependencies [494f87544]
- Updated dependencies [70b2830ac]
- Updated dependencies [083bbf590]
- Updated dependencies [083bbf590]
- Updated dependencies [083bbf590]
- Updated dependencies [083bbf590]
  - @pnpm/store.cafs@2.0.0
  - @pnpm/store-controller-types@16.0.0
  - @pnpm/fetcher-base@15.0.0
  - @pnpm/worker@0.1.0
  - @pnpm/graceful-fs@3.1.0
  - @pnpm/pick-fetcher@2.0.0

## 21.1.0

### Minor Changes

- 92f42224c: New option added: `relinkLocalDirDeps`. It is `true` by default. When `false`, local directory dependencies are not relinked on repeat install.

## 21.0.12

### Patch Changes

- dac59e632: The length of the temporary file names in the content-addressable store reduced in order to prevent `ENAMETOOLONG` errors from happening [#6842](https://github.com/pnpm/pnpm/issues/6842).

## 21.0.11

### Patch Changes

- 73f2b6826: When several containers use the same store simultaneously, there's a chance that multiple containers may create a temporary file at the same time. In such scenarios, pnpm could fail to rename the temporary file in one of the containers. This issue has been addressed: pnpm will no longer fail if the temporary file is absent but the destination file exists.
- Updated dependencies [73f2b6826]
  - @pnpm/store.cafs@1.0.2

## 21.0.10

### Patch Changes

- Updated dependencies [fe1c5f48d]
  - @pnpm/store.cafs@1.0.1

## 21.0.9

### Patch Changes

- Updated dependencies [4bbf482d1]
  - @pnpm/store.cafs@1.0.0

## 21.0.8

### Patch Changes

- e958707b2: Improve performance by removing cryptographically generated id from temporary file names.
- Updated dependencies [aa2ae8fe2]
- Updated dependencies [250f7e9fe]
- Updated dependencies [e958707b2]
  - @pnpm/types@9.2.0
  - @pnpm/cafs@7.0.5
  - @pnpm/package-is-installable@8.0.4
  - @pnpm/fetcher-base@14.0.2
  - @pnpm/core-loggers@9.0.2
  - @pnpm/dependency-path@2.1.3
  - @pnpm/read-package-json@8.0.3
  - @pnpm/resolver-base@10.0.2
  - @pnpm/store-controller-types@15.0.2
  - @pnpm/pick-fetcher@2.0.0

## 21.0.7

### Patch Changes

- Updated dependencies [b81cefdcd]
  - @pnpm/cafs@7.0.4

## 21.0.6

### Patch Changes

- Updated dependencies [e57e2d340]
  - @pnpm/cafs@7.0.3

## 21.0.5

### Patch Changes

- @pnpm/error@5.0.2
- @pnpm/package-is-installable@8.0.3
- @pnpm/read-package-json@8.0.2

## 21.0.4

### Patch Changes

- d55b41a8b: Dependencies have been updated.
- Updated dependencies [d55b41a8b]
- Updated dependencies [614d5bd72]
  - @pnpm/cafs@7.0.2

## 21.0.3

### Patch Changes

- Updated dependencies [a9e0b7cbf]
  - @pnpm/types@9.1.0
  - @pnpm/package-is-installable@8.0.2
  - @pnpm/fetcher-base@14.0.1
  - @pnpm/core-loggers@9.0.1
  - @pnpm/dependency-path@2.1.2
  - @pnpm/read-package-json@8.0.1
  - @pnpm/resolver-base@10.0.1
  - @pnpm/cafs@7.0.1
  - @pnpm/store-controller-types@15.0.1
  - @pnpm/error@5.0.1
  - @pnpm/pick-fetcher@2.0.0

## 21.0.2

### Patch Changes

- c0760128d: bump semver to 7.4.0
- Updated dependencies [c0760128d]
  - @pnpm/package-is-installable@8.0.1
  - @pnpm/dependency-path@2.1.1

## 21.0.1

### Patch Changes

- Updated dependencies [5087636b6]
- Updated dependencies [94f94eed6]
  - @pnpm/dependency-path@2.1.0

## 21.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [ca8f51e60]
- Updated dependencies [eceaa8b8b]
- Updated dependencies [0e26acb0f]
  - @pnpm/dependency-path@2.0.0
  - @pnpm/read-package-json@8.0.0
  - @pnpm/package-is-installable@8.0.0
  - @pnpm/store-controller-types@15.0.0
  - @pnpm/resolver-base@10.0.0
  - @pnpm/fetcher-base@14.0.0
  - @pnpm/pick-fetcher@2.0.0
  - @pnpm/core-loggers@9.0.0
  - @pnpm/graceful-fs@3.0.0
  - @pnpm/error@5.0.0
  - @pnpm/types@9.0.0
  - @pnpm/cafs@7.0.0

## 20.1.7

### Patch Changes

- Updated dependencies [955874422]
  - @pnpm/graceful-fs@2.1.0
  - @pnpm/cafs@6.0.2

## 20.1.6

### Patch Changes

- Updated dependencies [029143cff]
- Updated dependencies [029143cff]
  - @pnpm/resolver-base@9.2.0
  - @pnpm/fetcher-base@13.1.6
  - @pnpm/pick-fetcher@1.0.0
  - @pnpm/store-controller-types@14.3.1
  - @pnpm/cafs@6.0.1

## 20.1.5

### Patch Changes

- Updated dependencies [d89d7a078]
  - @pnpm/dependency-path@1.1.3

## 20.1.4

### Patch Changes

- Updated dependencies [9247f6781]
  - @pnpm/dependency-path@1.1.2

## 20.1.3

### Patch Changes

- 98d6603f3: The store integrity check should validate the side effects cache of the installed package. If the side effects cache is broken, the package needs to be rebuilt [#4997](https://github.com/pnpm/pnpm/issues/4997).
- Updated dependencies [98d6603f3]
- Updated dependencies [98d6603f3]
  - @pnpm/cafs@6.0.0

## 20.1.2

### Patch Changes

- 1e6de89b6: Update ssri to v10.0.1.
- Updated dependencies [1e6de89b6]
  - @pnpm/cafs@5.0.6

## 20.1.1

### Patch Changes

- Updated dependencies [0f6e95872]
  - @pnpm/dependency-path@1.1.1

## 20.1.0

### Minor Changes

- 891a8d763: New function added to the store: `getFilesIndexFilePath`.
- c7b05cd9a: When ignoreScripts=true is passed to the fetcher, do not build git-hosted dependencies.

### Patch Changes

- Updated dependencies [891a8d763]
- Updated dependencies [c7b05cd9a]
- Updated dependencies [3ebce5db7]
  - @pnpm/store-controller-types@14.3.0
  - @pnpm/dependency-path@1.1.0
  - @pnpm/cafs@5.0.5
  - @pnpm/error@4.0.1
  - @pnpm/package-is-installable@7.0.4
  - @pnpm/read-package-json@7.0.5

## 20.0.5

### Patch Changes

- Updated dependencies [b77651d14]
- Updated dependencies [2458741fa]
  - @pnpm/types@8.10.0
  - @pnpm/store-controller-types@14.2.0
  - @pnpm/package-is-installable@7.0.3
  - @pnpm/fetcher-base@13.1.5
  - @pnpm/core-loggers@8.0.3
  - @pnpm/dependency-path@1.0.1
  - @pnpm/read-package-json@7.0.4
  - @pnpm/resolver-base@9.1.5
  - @pnpm/cafs@5.0.4
  - @pnpm/pick-fetcher@1.0.0

## 20.0.4

### Patch Changes

- Updated dependencies [313702d76]
  - @pnpm/dependency-path@1.0.0

## 20.0.3

### Patch Changes

- a9d59d8bc: Update dependencies.
- Updated dependencies [a9d59d8bc]
  - @pnpm/read-package-json@7.0.3
  - @pnpm/cafs@5.0.3

## 20.0.2

### Patch Changes

- Updated dependencies [702e847c1]
  - @pnpm/types@8.9.0
  - @pnpm/cafs@5.0.2
  - @pnpm/core-loggers@8.0.2
  - dependency-path@9.2.8
  - @pnpm/fetcher-base@13.1.4
  - @pnpm/package-is-installable@7.0.2
  - @pnpm/read-package-json@7.0.2
  - @pnpm/resolver-base@9.1.4
  - @pnpm/store-controller-types@14.1.5
  - @pnpm/pick-fetcher@1.0.0

## 20.0.1

### Patch Changes

- Updated dependencies [844e82f3a]
  - @pnpm/types@8.8.0
  - @pnpm/cafs@5.0.1
  - @pnpm/core-loggers@8.0.1
  - dependency-path@9.2.7
  - @pnpm/fetcher-base@13.1.3
  - @pnpm/package-is-installable@7.0.1
  - @pnpm/read-package-json@7.0.1
  - @pnpm/resolver-base@9.1.3
  - @pnpm/store-controller-types@14.1.4
  - @pnpm/pick-fetcher@1.0.0

## 20.0.0

### Major Changes

- f884689e0: Require `@pnpm/logger` v5.

### Patch Changes

- Updated dependencies [043d988fc]
- Updated dependencies [f884689e0]
  - @pnpm/cafs@5.0.0
  - @pnpm/error@4.0.0
  - @pnpm/core-loggers@8.0.0
  - @pnpm/package-is-installable@7.0.0
  - @pnpm/read-package-json@7.0.0

## 19.0.6

### Patch Changes

- Updated dependencies [3ae888c28]
  - @pnpm/core-loggers@7.1.0
  - @pnpm/package-is-installable@6.0.12

## 19.0.5

### Patch Changes

- Updated dependencies [e8a631bf0]
  - @pnpm/error@3.1.0
  - @pnpm/package-is-installable@6.0.11
  - @pnpm/read-package-json@6.0.11

## 19.0.4

### Patch Changes

- Updated dependencies [d665f3ff7]
  - @pnpm/types@8.7.0
  - @pnpm/cafs@4.3.2
  - @pnpm/core-loggers@7.0.8
  - dependency-path@9.2.6
  - @pnpm/fetcher-base@13.1.2
  - @pnpm/package-is-installable@6.0.10
  - @pnpm/read-package-json@6.0.10
  - @pnpm/resolver-base@9.1.2
  - @pnpm/store-controller-types@14.1.3
  - @pnpm/pick-fetcher@1.0.0

## 19.0.3

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/types@8.6.0
  - @pnpm/cafs@4.3.1
  - @pnpm/core-loggers@7.0.7
  - dependency-path@9.2.5
  - @pnpm/fetcher-base@13.1.1
  - @pnpm/package-is-installable@6.0.9
  - @pnpm/read-package-json@6.0.9
  - @pnpm/resolver-base@9.1.1
  - @pnpm/store-controller-types@14.1.2
  - @pnpm/pick-fetcher@1.0.0

## 19.0.2

### Patch Changes

- Updated dependencies [745143e79]
  - @pnpm/cafs@4.3.0
  - @pnpm/fetcher-base@13.1.0
  - @pnpm/store-controller-types@14.1.1

## 19.0.1

### Patch Changes

- dbac0ca01: Update ssri to v9.
- Updated dependencies [dbac0ca01]
- Updated dependencies [07bc24ad1]
  - @pnpm/cafs@4.2.1
  - @pnpm/read-package-json@6.0.8

## 19.0.0

### Major Changes

- 7a17f99ab: Refactor `tarball-fetcher` and separate it into more specific fetchers, such as `localTarball`, `remoteTarball` and `gitHostedTarball`.

### Minor Changes

- 23984abd1: Add hook for adding custom fetchers.

### Patch Changes

- 32915f0e4: Refactor cafs types into separate package and add additional properties including `cafsDir` and `getFilePathInCafs`.
- Updated dependencies [32915f0e4]
- Updated dependencies [23984abd1]
- Updated dependencies [7a17f99ab]
  - @pnpm/cafs@4.2.0
  - @pnpm/fetcher-base@13.1.0
  - @pnpm/store-controller-types@14.1.1
  - @pnpm/pick-fetcher@1.0.0
  - @pnpm/resolver-base@9.1.0

## 18.1.3

### Patch Changes

- c191ca7bf: Fix bug where the package manifest was not resolved if `verifyStoreIntegrity` is set to `false`.
- Updated dependencies [c191ca7bf]
  - @pnpm/cafs@4.1.0

## 18.1.2

### Patch Changes

- 8103f92bd: Use a patched version of ramda to fix deprecation warnings on Node.js 16. Related issue: https://github.com/ramda/ramda/pull/3270
- Updated dependencies [39c040127]
- Updated dependencies [65c4260de]
  - @pnpm/cafs@4.0.9
  - @pnpm/store-controller-types@14.1.0

## 18.1.1

### Patch Changes

- Updated dependencies [c90798461]
  - @pnpm/types@8.5.0
  - @pnpm/cafs@4.0.8
  - @pnpm/core-loggers@7.0.6
  - dependency-path@9.2.4
  - @pnpm/fetcher-base@13.0.2
  - @pnpm/package-is-installable@6.0.8
  - @pnpm/read-package-json@6.0.7
  - @pnpm/resolver-base@9.0.6
  - @pnpm/store-controller-types@14.0.2

## 18.1.0

### Minor Changes

- cac34ad69: `verify-store-integrity=false` makes pnpm skip checking the integrities of files in the global content-addressable store.

## 18.0.13

### Patch Changes

- dependency-path@9.2.3

## 18.0.12

### Patch Changes

- 5f643f23b: Update ramda to v0.28.

## 18.0.11

### Patch Changes

- Updated dependencies [fc581d371]
  - dependency-path@9.2.2

## 18.0.10

### Patch Changes

- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0
  - @pnpm/cafs@4.0.7
  - @pnpm/core-loggers@7.0.5
  - dependency-path@9.2.1
  - @pnpm/fetcher-base@13.0.1
  - @pnpm/package-is-installable@6.0.7
  - @pnpm/read-package-json@6.0.6
  - @pnpm/resolver-base@9.0.5
  - @pnpm/store-controller-types@14.0.1

## 18.0.9

### Patch Changes

- Updated dependencies [2a34b21ce]
- Updated dependencies [c635f9fc1]
- Updated dependencies [2a34b21ce]
- Updated dependencies [47b5e45dd]
  - @pnpm/types@8.3.0
  - dependency-path@9.2.0
  - @pnpm/fetcher-base@13.0.0
  - @pnpm/store-controller-types@14.0.0
  - @pnpm/cafs@4.0.6
  - @pnpm/core-loggers@7.0.4
  - @pnpm/package-is-installable@6.0.6
  - @pnpm/read-package-json@6.0.5
  - @pnpm/resolver-base@9.0.4

## 18.0.8

### Patch Changes

- 0abfe1718: Use `safe-promise-defer`.
- Updated dependencies [fb5bbfd7a]
- Updated dependencies [725636a90]
- Updated dependencies [0abfe1718]
  - @pnpm/types@8.2.0
  - dependency-path@9.1.4
  - @pnpm/fetcher-base@12.1.0
  - @pnpm/cafs@4.0.5
  - @pnpm/core-loggers@7.0.3
  - @pnpm/package-is-installable@6.0.5
  - @pnpm/read-package-json@6.0.4
  - @pnpm/resolver-base@9.0.3
  - @pnpm/store-controller-types@13.0.4

## 18.0.7

### Patch Changes

- Updated dependencies [4d39e4a0c]
  - @pnpm/types@8.1.0
  - @pnpm/cafs@4.0.4
  - @pnpm/core-loggers@7.0.2
  - dependency-path@9.1.3
  - @pnpm/fetcher-base@12.0.3
  - @pnpm/package-is-installable@6.0.4
  - @pnpm/read-package-json@6.0.3
  - @pnpm/resolver-base@9.0.2
  - @pnpm/store-controller-types@13.0.3

## 18.0.6

### Patch Changes

- 6756c2b02: It should be possible to install a git-hosted package that has no `package.json` file [#4822](https://github.com/pnpm/pnpm/issues/4822).
- Updated dependencies [6756c2b02]
  - @pnpm/cafs@4.0.3
  - @pnpm/fetcher-base@12.0.2
  - @pnpm/store-controller-types@13.0.2

## 18.0.5

### Patch Changes

- Updated dependencies [c57695550]
  - dependency-path@9.1.2

## 18.0.4

### Patch Changes

- Updated dependencies [52b0576af]
  - @pnpm/package-is-installable@6.0.3

## 18.0.3

### Patch Changes

- Updated dependencies [cadefe5b6]
  - @pnpm/cafs@4.0.2

## 18.0.2

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1
  - @pnpm/core-loggers@7.0.1
  - dependency-path@9.1.1
  - @pnpm/fetcher-base@12.0.1
  - @pnpm/package-is-installable@6.0.2
  - @pnpm/read-package-json@6.0.2
  - @pnpm/resolver-base@9.0.1
  - @pnpm/store-controller-types@13.0.1
  - @pnpm/cafs@4.0.1

## 18.0.1

### Patch Changes

- 7cdca5ef2: Don't check the integrity of the store with the package version from the lockfile, when the package was updated [#4580](https://github.com/pnpm/pnpm/pull/4580).
- Updated dependencies [0a70aedb1]
  - dependency-path@9.1.0
  - @pnpm/error@3.0.1
  - @pnpm/package-is-installable@6.0.1
  - @pnpm/read-package-json@6.0.1

## 18.0.0

### Major Changes

- 9c22c063e: Local dependencies referenced through the `file:` protocol are hard linked (not symlinked) [#4408](https://github.com/pnpm/pnpm/pull/4408). If you need to symlink a dependency, use the `link:` protocol instead.
- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [d504dc380]
- Updated dependencies [faf830b8f]
- Updated dependencies [542014839]
  - @pnpm/types@8.0.0
  - dependency-path@9.0.0
  - @pnpm/cafs@4.0.0
  - @pnpm/core-loggers@7.0.0
  - @pnpm/error@3.0.0
  - @pnpm/fetcher-base@12.0.0
  - @pnpm/graceful-fs@2.0.0
  - @pnpm/package-is-installable@6.0.0
  - @pnpm/read-package-json@6.0.0
  - @pnpm/resolver-base@9.0.0
  - @pnpm/store-controller-types@13.0.0

## 17.0.0

### Major Changes

- 5c525db13: Changes to RequestPackageOptions: currentPkg.name and currentPkg.version removed.

### Patch Changes

- Updated dependencies [70ba51da9]
- Updated dependencies [5c525db13]
  - @pnpm/error@2.1.0
  - @pnpm/store-controller-types@12.0.0
  - @pnpm/package-is-installable@5.0.13
  - @pnpm/read-package-json@5.0.12
  - @pnpm/cafs@3.0.15

## 16.0.2

### Patch Changes

- 800fb2836: Ignore case, when verifying package name in the store [#4367](https://github.com/pnpm/pnpm/issues/4367).
- Updated dependencies [b138d048c]
  - @pnpm/types@7.10.0
  - @pnpm/core-loggers@6.1.4
  - dependency-path@8.0.11
  - @pnpm/fetcher-base@11.1.6
  - @pnpm/package-is-installable@5.0.12
  - @pnpm/read-package-json@5.0.11
  - @pnpm/resolver-base@8.1.6
  - @pnpm/store-controller-types@11.0.12
  - @pnpm/cafs@3.0.14

## 16.0.1

### Patch Changes

- Updated dependencies [26cd01b88]
  - @pnpm/types@7.9.0
  - @pnpm/core-loggers@6.1.3
  - dependency-path@8.0.10
  - @pnpm/fetcher-base@11.1.5
  - @pnpm/package-is-installable@5.0.11
  - @pnpm/read-package-json@5.0.10
  - @pnpm/resolver-base@8.1.5
  - @pnpm/store-controller-types@11.0.11
  - @pnpm/cafs@3.0.13

## 16.0.0

### Major Changes

- 8ddcd5116: Log the fetch statuses of packages for the progress reporter.

## 15.2.6

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0
  - @pnpm/core-loggers@6.1.2
  - dependency-path@8.0.9
  - @pnpm/fetcher-base@11.1.4
  - @pnpm/package-is-installable@5.0.10
  - @pnpm/read-package-json@5.0.9
  - @pnpm/resolver-base@8.1.4
  - @pnpm/store-controller-types@11.0.10
  - @pnpm/cafs@3.0.12

## 15.2.5

### Patch Changes

- Updated dependencies [6493e0c93]
  - @pnpm/types@7.7.1
  - @pnpm/core-loggers@6.1.1
  - dependency-path@8.0.8
  - @pnpm/fetcher-base@11.1.3
  - @pnpm/package-is-installable@5.0.9
  - @pnpm/read-package-json@5.0.8
  - @pnpm/resolver-base@8.1.3
  - @pnpm/store-controller-types@11.0.9
  - @pnpm/cafs@3.0.11

## 15.2.4

### Patch Changes

- 77ff0898b: Don't fail when the version of a package in the store is not a semver version.
- Updated dependencies [ba9b2eba1]
- Updated dependencies [ba9b2eba1]
  - @pnpm/core-loggers@6.1.0
  - @pnpm/types@7.7.0
  - @pnpm/package-is-installable@5.0.8
  - dependency-path@8.0.7
  - @pnpm/fetcher-base@11.1.2
  - @pnpm/read-package-json@5.0.7
  - @pnpm/resolver-base@8.1.2
  - @pnpm/store-controller-types@11.0.8
  - @pnpm/cafs@3.0.10

## 15.2.3

### Patch Changes

- dbd8acfe9: The version in the bundled manifest should always be normalized.
- 119b3a908: When checking the correctness of the package data in the lockfile, don't use exact version comparison. `v1.0.0` should be considered to be the same as `1.0.0`. This fixes some edge cases when a package is published with a non-normalized version specifier in its `package.json`.

## 15.2.2

### Patch Changes

- Updated dependencies [783cc1051]
  - @pnpm/package-is-installable@5.0.7

## 15.2.1

### Patch Changes

- Updated dependencies [302ae4f6f]
  - @pnpm/types@7.6.0
  - @pnpm/core-loggers@6.0.6
  - dependency-path@8.0.6
  - @pnpm/fetcher-base@11.1.1
  - @pnpm/package-is-installable@5.0.6
  - @pnpm/read-package-json@5.0.6
  - @pnpm/resolver-base@8.1.1
  - @pnpm/store-controller-types@11.0.7
  - @pnpm/cafs@3.0.9

## 15.2.0

### Minor Changes

- 4ab87844a: Added support for "injected" dependencies.

### Patch Changes

- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0
  - @pnpm/fetcher-base@11.1.0
  - @pnpm/resolver-base@8.1.0
  - @pnpm/core-loggers@6.0.5
  - dependency-path@8.0.5
  - @pnpm/package-is-installable@5.0.5
  - @pnpm/read-package-json@5.0.5
  - @pnpm/store-controller-types@11.0.6
  - @pnpm/cafs@3.0.8

## 15.1.2

### Patch Changes

- 11a934da1: Always fetch the bundled manifest.

## 15.1.1

### Patch Changes

- 31e01d9a9: isInstallable should be always returned by `packageRequester()`.

## 15.1.0

### Minor Changes

- 07e7b1c0c: Do not fetch optional packages that are not installable on the target system.

## 15.0.7

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0
  - @pnpm/core-loggers@6.0.4
  - dependency-path@8.0.4
  - @pnpm/fetcher-base@11.0.3
  - @pnpm/read-package-json@5.0.4
  - @pnpm/resolver-base@8.0.4
  - @pnpm/store-controller-types@11.0.5
  - @pnpm/cafs@3.0.7

## 15.0.6

### Patch Changes

- Updated dependencies [8e76690f4]
  - @pnpm/types@7.3.0
  - @pnpm/core-loggers@6.0.3
  - dependency-path@8.0.3
  - @pnpm/fetcher-base@11.0.2
  - @pnpm/read-package-json@5.0.3
  - @pnpm/resolver-base@8.0.3
  - @pnpm/store-controller-types@11.0.4
  - @pnpm/cafs@3.0.6

## 15.0.5

### Patch Changes

- Updated dependencies [6c418943c]
  - dependency-path@8.0.2

## 15.0.4

### Patch Changes

- Updated dependencies [724c5abd8]
  - @pnpm/types@7.2.0
  - @pnpm/core-loggers@6.0.2
  - dependency-path@8.0.1
  - @pnpm/fetcher-base@11.0.1
  - @pnpm/read-package-json@5.0.2
  - @pnpm/resolver-base@8.0.2
  - @pnpm/store-controller-types@11.0.3
  - @pnpm/cafs@3.0.5

## 15.0.3

### Patch Changes

- a1a03d145: Import only the required functions from ramda.

## 15.0.2

### Patch Changes

- Updated dependencies [20e2f235d]
  - dependency-path@8.0.0

## 15.0.1

### Patch Changes

- Updated dependencies [a2aeeef88]
- Updated dependencies [ef0ca24be]
  - @pnpm/graceful-fs@1.0.0
  - @pnpm/cafs@3.0.4

## 15.0.0

### Major Changes

- e6a2654a2: Breaking changes to the API of `packageRequester()`.

  `resolve` and `fetchers` should be passed in through `options`, not as arguments.

  `cafs` is not returned anymore. It should be passed in through `options` as well.

### Patch Changes

- Updated dependencies [e6a2654a2]
- Updated dependencies [e6a2654a2]
  - @pnpm/fetcher-base@11.0.0
  - @pnpm/cafs@3.0.3
  - @pnpm/store-controller-types@11.0.2

## 14.0.3

### Patch Changes

- Updated dependencies [97c64bae4]
  - @pnpm/types@7.1.0
  - @pnpm/core-loggers@6.0.1
  - dependency-path@7.0.1
  - @pnpm/fetcher-base@10.0.1
  - @pnpm/read-package-json@5.0.1
  - @pnpm/resolver-base@8.0.1
  - @pnpm/store-controller-types@11.0.1
  - @pnpm/cafs@3.0.2

## 14.0.2

### Patch Changes

- 6f198457d: Update rename-overwrite.
- Updated dependencies [6f198457d]
  - @pnpm/cafs@3.0.1

## 14.0.1

### Patch Changes

- Updated dependencies [9ceab68f0]
  - dependency-path@7.0.0

## 14.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Patch Changes

- 83645c8ed: Update ssri.
- Updated dependencies [97b986fbc]
- Updated dependencies [90487a3a8]
- Updated dependencies [e4efddbd2]
- Updated dependencies [f2bb5cbeb]
- Updated dependencies [83645c8ed]
  - @pnpm/cafs@3.0.0
  - @pnpm/core-loggers@6.0.0
  - dependency-path@6.0.0
  - @pnpm/error@2.0.0
  - @pnpm/fetcher-base@10.0.0
  - @pnpm/read-package-json@5.0.0
  - @pnpm/resolver-base@8.0.0
  - @pnpm/store-controller-types@11.0.0
  - @pnpm/types@7.0.0

## 13.0.1

### Patch Changes

- Updated dependencies [d853fb14a]
  - @pnpm/read-package-json@4.0.0

## 13.0.0

### Major Changes

- 8d1dfa89c: Breaking changes to the store controller API.

  The options to `requestPackage()` and `fetchPackage()` changed.

### Patch Changes

- Updated dependencies [8d1dfa89c]
- Updated dependencies [8d1dfa89c]
  - @pnpm/store-controller-types@10.0.0
  - @pnpm/cafs@2.1.0

## 12.2.2

### Patch Changes

- Updated dependencies [9ad8c27bf]
  - @pnpm/types@6.4.0
  - @pnpm/core-loggers@5.0.3
  - dependency-path@5.1.1
  - @pnpm/fetcher-base@9.0.4
  - @pnpm/read-package-json@3.1.9
  - @pnpm/resolver-base@7.1.1
  - @pnpm/store-controller-types@9.2.1
  - @pnpm/cafs@2.0.5

## 12.2.1

### Patch Changes

- Updated dependencies [e27dcf0dc]
  - dependency-path@5.1.0

## 12.2.0

### Minor Changes

- 8698a7060: New option added: preferWorkspacePackages. When it is `true`, dependencies are linked from the workspace even, when there are newer version available in the registry.

### Patch Changes

- Updated dependencies [8698a7060]
  - @pnpm/resolver-base@7.1.0
  - @pnpm/store-controller-types@9.2.0
  - @pnpm/fetcher-base@9.0.3
  - @pnpm/cafs@2.0.4

## 12.1.4

### Patch Changes

- @pnpm/read-package-json@3.1.8

## 12.1.3

### Patch Changes

- Updated dependencies [b3059f4f8]
  - @pnpm/cafs@2.0.3

## 12.1.2

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/types@6.3.1
  - @pnpm/core-loggers@5.0.2
  - @pnpm/fetcher-base@9.0.2
  - @pnpm/read-package-json@3.1.7
  - @pnpm/resolver-base@7.0.5
  - @pnpm/store-controller-types@9.1.2
  - @pnpm/cafs@2.0.2

## 12.1.1

### Patch Changes

- Updated dependencies [d54043ee4]
- Updated dependencies [212671848]
  - @pnpm/types@6.3.0
  - @pnpm/read-package-json@3.1.6
  - @pnpm/core-loggers@5.0.1
  - @pnpm/fetcher-base@9.0.1
  - @pnpm/resolver-base@7.0.4
  - @pnpm/store-controller-types@9.1.1
  - @pnpm/cafs@2.0.1

## 12.1.0

### Minor Changes

- 0a6544043: A new field added to the package files index: `checkedAt`. `checkedAt` is the timestamp (number of milliseconds), when the file's content was verified the last time.

### Patch Changes

- Updated dependencies [0a6544043]
- Updated dependencies [0a6544043]
- Updated dependencies [0a6544043]
  - @pnpm/store-controller-types@9.1.0
  - @pnpm/cafs@2.0.0
  - @pnpm/fetcher-base@9.0.0

## 12.0.13

### Patch Changes

- Updated dependencies [86cd72de3]
- Updated dependencies [86cd72de3]
  - @pnpm/core-loggers@5.0.0
  - @pnpm/store-controller-types@9.0.0
  - @pnpm/cafs@1.0.8

## 12.0.12

### Patch Changes

- 501efdabd: The `finishing` promise is resolved always after the `files` promise.

## 12.0.11

### Patch Changes

- @pnpm/read-package-json@3.1.5

## 12.0.10

### Patch Changes

- Updated dependencies [9f5803187]
  - @pnpm/read-package-json@3.1.4

## 12.0.9

### Patch Changes

- Updated dependencies [1525fff4c]
  - @pnpm/cafs@1.0.7

## 12.0.8

### Patch Changes

- a2ef8084f: Use the same versions of dependencies across the pnpm monorepo.
- Updated dependencies [a2ef8084f]
  - @pnpm/cafs@1.0.6

## 12.0.7

### Patch Changes

- Updated dependencies [9a908bc07]
- Updated dependencies [9a908bc07]
  - @pnpm/core-loggers@4.2.0

## 12.0.6

### Patch Changes

- Updated dependencies [db17f6f7b]
  - @pnpm/types@6.2.0
  - @pnpm/core-loggers@4.1.2
  - @pnpm/fetcher-base@8.0.2
  - @pnpm/read-package-json@3.1.3
  - @pnpm/resolver-base@7.0.3
  - @pnpm/store-controller-types@8.0.2
  - @pnpm/cafs@1.0.5

## 12.0.5

### Patch Changes

- Updated dependencies [71a8c8ce3]
  - @pnpm/types@6.1.0
  - @pnpm/core-loggers@4.1.1
  - @pnpm/fetcher-base@8.0.1
  - @pnpm/read-package-json@3.1.2
  - @pnpm/resolver-base@7.0.2
  - @pnpm/store-controller-types@8.0.1
  - @pnpm/cafs@1.0.4

## 12.0.4

### Patch Changes

- Updated dependencies [492805ee3]
  - @pnpm/cafs@1.0.3

## 12.0.3

### Patch Changes

- d3ddd023c: Update p-limit to v3.
- Updated dependencies [d3ddd023c]
- Updated dependencies [2ebb7af33]
  - @pnpm/cafs@1.0.2
  - @pnpm/core-loggers@4.1.0

## 12.0.2

### Patch Changes

- a203bc138: The temporary file name to which the package index is written should not be longer than the target file name.

## 12.0.1

### Patch Changes

- Updated dependencies [bcd4aa1aa]
  - @pnpm/fetcher-base@8.0.0
  - @pnpm/cafs@1.0.1

## 12.0.0

### Major Changes

- b5f66c0f2: Reduce the number of directories in the virtual store directory. Don't create a subdirectory for the package version. Append the package version to the package name directory.
- 9596774f2: Store the package index files in the CAFS to reduce directory nesting.
- 16d1ac0fd: `body.cacheByEngine` removed from `PackageResponse`.
- da091c711: Remove state from store. The store should not store the information about what projects on the computer use what dependencies. This information was needed for pruning in pnpm v4. Also, without this information, we cannot have the `pnpm store usages` command. So `pnpm store usages` is deprecated.
- b6a82072e: Using a content-addressable filesystem for storing packages.
- 802d145fc: `getPackageLocation()` removed from store. Remove `inStoreLocation` from the result of `fetchPackage()`.
- 471149e66: Change the format of the package index file. Move all the files info into a "files" property.

### Minor Changes

- f516d266c: Executables are saved into a separate directory inside the content-addressable storage.
- 42e6490d1: The fetch package to store function does not need the pkgName anymore.
- a5febb913: Package request response contains the path to the files index file.
- 42e6490d1: When a new package is being added to the store, its manifest is streamed in the memory. So instead of reading the manifest from the filesystem, we can parse the stream from the memory.

### Patch Changes

- a7d20d927: The peer suffix at the end of local tarball dependency paths is not encoded.
- 64bae33c4: Update p-queue to v6.4.0.
- f93583d52: Use `fs.mkdir` instead of the `make-dir` package.
- c207d994f: Update rename-overwrite to v3.
- Updated dependencies [9596774f2]
- Updated dependencies [16d1ac0fd]
- Updated dependencies [f516d266c]
- Updated dependencies [7852deea3]
- Updated dependencies [da091c711]
- Updated dependencies [42e6490d1]
- Updated dependencies [a5febb913]
- Updated dependencies [b6a82072e]
- Updated dependencies [b6a82072e]
- Updated dependencies [802d145fc]
- Updated dependencies [a5febb913]
- Updated dependencies [c207d994f]
- Updated dependencies [a5febb913]
- Updated dependencies [a5febb913]
- Updated dependencies [471149e66]
- Updated dependencies [42e6490d1]
  - @pnpm/cafs@1.0.0
  - @pnpm/store-controller-types@8.0.0
  - @pnpm/fetcher-base@7.0.0
  - @pnpm/types@6.0.0
  - @pnpm/core-loggers@4.0.2
  - @pnpm/read-package-json@3.1.1
  - @pnpm/resolver-base@7.0.1

## 12.0.0-alpha.5

### Major Changes

- 16d1ac0fd: `body.cacheByEngine` removed from `PackageResponse`.

### Minor Changes

- a5febb913: Package request response contains the path to the files index file.

### Patch Changes

- a7d20d927: The peer suffix at the end of local tarball dependency paths is not encoded.
- Updated dependencies [16d1ac0fd]
- Updated dependencies [a5febb913]
- Updated dependencies [a5febb913]
- Updated dependencies [a5febb913]
- Updated dependencies [a5febb913]
  - @pnpm/store-controller-types@8.0.0-alpha.4
  - @pnpm/cafs@1.0.0-alpha.5

## 12.0.0-alpha.4

### Major Changes

- da091c71: Remove state from store. The store should not store the information about what projects on the computer use what dependencies. This information was needed for pruning in pnpm v4. Also, without this information, we cannot have the `pnpm store usages` command. So `pnpm store usages` is deprecated.
- 471149e6: Change the format of the package index file. Move all the files info into a "files" property.

### Patch Changes

- Updated dependencies [da091c71]
- Updated dependencies [471149e6]
  - @pnpm/store-controller-types@8.0.0-alpha.3
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/cafs@1.0.0-alpha.4
  - @pnpm/core-loggers@4.0.2-alpha.0
  - @pnpm/fetcher-base@6.0.1-alpha.3
  - @pnpm/read-package-json@3.1.1-alpha.0
  - @pnpm/resolver-base@7.0.1-alpha.0

## 12.0.0-alpha.3

### Major Changes

- b5f66c0f2: Reduce the number of directories in the virtual store directory. Don't create a subdirectory for the package version. Append the package version to the package name directory.
- 9596774f2: Store the package index files in the CAFS to reduce directory nesting.

### Patch Changes

- Updated dependencies [9596774f2]
- Updated dependencies [7852deea3]
  - @pnpm/cafs@1.0.0-alpha.3

## 12.0.0-alpha.2

### Minor Changes

- 42e6490d1: The fetch package to store function does not need the pkgName anymore.
- 42e6490d1: When a new package is being added to the store, its manifest is streamed in the memory. So instead of reading the manifest from the filesystem, we can parse the stream from the memory.

### Patch Changes

- 64bae33c4: Update p-queue to v6.4.0.
- c207d994f: Update rename-overwrite to v3.
- Updated dependencies [42e6490d1]
- Updated dependencies [c207d994f]
- Updated dependencies [42e6490d1]
  - @pnpm/store-controller-types@8.0.0-alpha.2
  - @pnpm/cafs@1.0.0-alpha.2
  - @pnpm/fetcher-base@7.0.0-alpha.2

## 12.0.0-alpha.1

### Minor Changes

- 4f62d0383: Executables are saved into a separate directory inside the content-addressable storage.

### Patch Changes

- f93583d52: Use `fs.mkdir` instead of the `make-dir` package.
- Updated dependencies [4f62d0383]
  - @pnpm/cafs@1.0.0-alpha.1
  - @pnpm/fetcher-base@7.0.0-alpha.1
  - @pnpm/store-controller-types@8.0.0-alpha.1

## 12.0.0-alpha.0

### Major Changes

- 91c4b5954: Using a content-addressable filesystem for storing packages.

### Patch Changes

- Updated dependencies [91c4b5954]
- Updated dependencies [91c4b5954]
  - @pnpm/cafs@1.0.0-alpha.0
  - @pnpm/fetcher-base@7.0.0-alpha.0
  - @pnpm/store-controller-types@8.0.0-alpha.0

## 11.0.6

### Patch Changes

- 907c63a48: Update symlink-dir to v4.
- 907c63a48: Dependencies updated.
