# @pnpm/plugin-commands-publishing

## 1000.2.7

### Patch Changes

- Updated dependencies [d1edf73]
- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [d1edf73]
- Updated dependencies [f91922c]
  - @pnpm/client@1001.0.0
  - @pnpm/resolver-base@1005.0.0
  - @pnpm/config@1004.2.1
  - @pnpm/error@1000.0.4
  - @pnpm/lifecycle@1001.0.19
  - @pnpm/cli-utils@1001.0.3
  - @pnpm/exportable-manifest@1000.1.3
  - @pnpm/plugin-commands-env@1000.0.32
  - @pnpm/network.auth-header@1000.0.5

## 1000.2.6

### Patch Changes

- Updated dependencies [1a07b8f]
- Updated dependencies [1ba2e15]
- Updated dependencies [6f7ac0f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/plugin-commands-env@1000.0.31
  - @pnpm/config@1004.2.0
  - @pnpm/resolver-base@1004.1.0
  - @pnpm/client@1000.1.0
  - @pnpm/cli-utils@1001.0.2
  - @pnpm/pick-registry-for-package@1000.0.9
  - @pnpm/lifecycle@1001.0.18
  - @pnpm/package-bins@1000.0.9
  - @pnpm/exportable-manifest@1000.1.2
  - @pnpm/sort-packages@1000.0.9
  - @pnpm/error@1000.0.3
  - @pnpm/network.auth-header@1000.0.4

## 1000.2.5

### Patch Changes

- Updated dependencies [7ad0bc3]
  - @pnpm/cli-utils@1001.0.1
  - @pnpm/plugin-commands-env@1000.0.30

## 1000.2.4

### Patch Changes

- Updated dependencies [623da6f]
- Updated dependencies [cf630a8]
- Updated dependencies [e225310]
- Updated dependencies [589ac1f]
  - @pnpm/config@1004.1.0
  - @pnpm/cli-utils@1001.0.0
  - @pnpm/lifecycle@1001.0.17
  - @pnpm/plugin-commands-env@1000.0.29
  - @pnpm/client@1000.0.21

## 1000.2.3

### Patch Changes

- @pnpm/cli-utils@1000.1.7
- @pnpm/plugin-commands-env@1000.0.28

## 1000.2.2

### Patch Changes

- Updated dependencies [2721291]
- Updated dependencies [6acf819]
- Updated dependencies [b217bbb]
- Updated dependencies [b0ead51]
- Updated dependencies [c8341cc]
- Updated dependencies [b0ead51]
- Updated dependencies [046af72]
  - @pnpm/resolver-base@1004.0.0
  - @pnpm/config@1004.0.0
  - @pnpm/client@1000.0.20
  - @pnpm/cli-utils@1000.1.6
  - @pnpm/plugin-commands-env@1000.0.27
  - @pnpm/lifecycle@1001.0.16
  - @pnpm/exportable-manifest@1000.1.1

## 1000.2.1

### Patch Changes

- Updated dependencies [8d175c0]
  - @pnpm/config@1003.1.1
  - @pnpm/cli-utils@1000.1.5
  - @pnpm/plugin-commands-env@1000.0.26
  - @pnpm/lifecycle@1001.0.15
  - @pnpm/client@1000.0.19
  - @pnpm/exportable-manifest@1000.1.1

## 1000.2.0

### Minor Changes

- fdb1d98: Added support for recursively running pack in every project of a workspace [#4351](https://github.com/pnpm/pnpm/issues/4351).

  Now you can run `pnpm -r pack` to pack all packages in the workspace.

### Patch Changes

- fdb1d98: Parallelly run recursive pack and publish
- fdb1d98: Get `pack-destination` configuration from settings.
- 09cf46f: Update `@pnpm/logger` in peer dependencies.
- 36d1448: Set the default `workspaceConcurrency` to `Math.min(os.availableParallelism(), 4)` [#9493](https://github.com/pnpm/pnpm/pull/9493).
- 36d1448: Add `workspace-concurrency` cli option for pack and publish
- Updated dependencies [b282bd1]
- Updated dependencies [51bd373]
- Updated dependencies [fdb1d98]
- Updated dependencies [e4af08c]
- Updated dependencies [09cf46f]
- Updated dependencies [36d1448]
- Updated dependencies [9362b5f]
- Updated dependencies [5ec7255]
- Updated dependencies [6cf010c]
  - @pnpm/config@1003.1.0
  - @pnpm/network.auth-header@1000.0.3
  - @pnpm/plugin-commands-env@1000.0.25
  - @pnpm/lifecycle@1001.0.14
  - @pnpm/cli-utils@1000.1.4
  - @pnpm/types@1000.6.0
  - @pnpm/client@1000.0.18
  - @pnpm/pick-registry-for-package@1000.0.8
  - @pnpm/package-bins@1000.0.8
  - @pnpm/exportable-manifest@1000.1.1
  - @pnpm/resolver-base@1003.0.1
  - @pnpm/sort-packages@1000.0.8

## 1000.1.22

### Patch Changes

- Updated dependencies [fa1e69b]
- Updated dependencies [7c7f0d6]
  - @pnpm/plugin-commands-env@1000.0.24
  - @pnpm/common-cli-options-help@1000.0.1
  - @pnpm/lifecycle@1001.0.13
  - @pnpm/cli-utils@1000.1.3
  - @pnpm/config@1003.0.1
  - @pnpm/client@1000.0.17

## 1000.1.21

### Patch Changes

- Updated dependencies [56bb69b]
- Updated dependencies [8a9f3a4]
- Updated dependencies [5b73df1]
- Updated dependencies [9c3dd03]
- Updated dependencies [5b73df1]
  - @pnpm/config@1003.0.0
  - @pnpm/resolver-base@1003.0.0
  - @pnpm/logger@1001.0.0
  - @pnpm/exportable-manifest@1000.1.0
  - @pnpm/types@1000.5.0
  - @pnpm/cli-utils@1000.1.2
  - @pnpm/plugin-commands-env@1000.0.23
  - @pnpm/lifecycle@1001.0.12
  - @pnpm/client@1000.0.16
  - @pnpm/pick-registry-for-package@1000.0.7
  - @pnpm/package-bins@1000.0.7
  - @pnpm/sort-packages@1000.0.7

## 1000.1.20

### Patch Changes

- Updated dependencies [81f441c]
  - @pnpm/resolver-base@1002.0.0
  - @pnpm/client@1000.0.15
  - @pnpm/cli-utils@1000.1.1
  - @pnpm/lifecycle@1001.0.11
  - @pnpm/plugin-commands-env@1000.0.22
  - @pnpm/config@1002.7.2
  - @pnpm/exportable-manifest@1000.0.10

## 1000.1.19

### Patch Changes

- 72cff38: The resolving function now takes a `registries` object, so it finds the required registry itself instead of receiving it from package requester.
- Updated dependencies [750ae7d]
- Updated dependencies [72cff38]
- Updated dependencies [5679712]
- Updated dependencies [01f2bcf]
- Updated dependencies [1413c25]
  - @pnpm/types@1000.4.0
  - @pnpm/resolver-base@1001.0.0
  - @pnpm/config@1002.7.1
  - @pnpm/cli-utils@1000.1.0
  - @pnpm/pick-registry-for-package@1000.0.6
  - @pnpm/plugin-commands-env@1000.0.21
  - @pnpm/lifecycle@1001.0.10
  - @pnpm/client@1000.0.14
  - @pnpm/package-bins@1000.0.6
  - @pnpm/exportable-manifest@1000.0.10
  - @pnpm/sort-packages@1000.0.6

## 1000.1.18

### Patch Changes

- Updated dependencies [e57f1df]
  - @pnpm/config@1002.7.0
  - @pnpm/cli-utils@1000.0.19
  - @pnpm/plugin-commands-env@1000.0.20

## 1000.1.17

### Patch Changes

- Updated dependencies [9bcca9f]
- Updated dependencies [5b35dff]
- Updated dependencies [9bcca9f]
- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
  - @pnpm/config@1002.6.0
  - @pnpm/types@1000.3.0
  - @pnpm/cli-utils@1000.0.18
  - @pnpm/plugin-commands-env@1000.0.19
  - @pnpm/pick-registry-for-package@1000.0.5
  - @pnpm/lifecycle@1001.0.9
  - @pnpm/client@1000.0.13
  - @pnpm/package-bins@1000.0.5
  - @pnpm/exportable-manifest@1000.0.9
  - @pnpm/resolver-base@1000.2.1
  - @pnpm/sort-packages@1000.0.5

## 1000.1.16

### Patch Changes

- Updated dependencies [936430a]
- Updated dependencies [3d52365]
  - @pnpm/config@1002.5.4
  - @pnpm/resolver-base@1000.2.0
  - @pnpm/cli-utils@1000.0.17
  - @pnpm/plugin-commands-env@1000.0.18
  - @pnpm/client@1000.0.12
  - @pnpm/lifecycle@1001.0.8
  - @pnpm/exportable-manifest@1000.0.8

## 1000.1.15

### Patch Changes

- Updated dependencies [aec8c50]
  - @pnpm/plugin-commands-env@1000.0.17
  - @pnpm/client@1000.0.11

## 1000.1.14

### Patch Changes

- Updated dependencies [6e4459c]
  - @pnpm/config@1002.5.3
  - @pnpm/cli-utils@1000.0.16
  - @pnpm/plugin-commands-env@1000.0.16

## 1000.1.13

### Patch Changes

- @pnpm/cli-utils@1000.0.15
- @pnpm/plugin-commands-env@1000.0.15
- @pnpm/config@1002.5.2
- @pnpm/client@1000.0.10

## 1000.1.12

### Patch Changes

- Updated dependencies [c3aa4d8]
  - @pnpm/config@1002.5.1
  - @pnpm/cli-utils@1000.0.14
  - @pnpm/plugin-commands-env@1000.0.14
  - @pnpm/client@1000.0.9

## 1000.1.11

### Patch Changes

- b8b0c68: `fast-glob` replace with `tinyglobby` to reduce the size of the pnpm CLI dependencies [#9169](https://github.com/pnpm/pnpm/pull/9169).
- Updated dependencies [b8b0c68]
- Updated dependencies [a5e4965]
- Updated dependencies [d965748]
  - @pnpm/package-bins@1000.0.4
  - @pnpm/types@1000.2.1
  - @pnpm/config@1002.5.0
  - @pnpm/cli-utils@1000.0.13
  - @pnpm/pick-registry-for-package@1000.0.4
  - @pnpm/plugin-commands-env@1000.0.13
  - @pnpm/lifecycle@1001.0.7
  - @pnpm/client@1000.0.8
  - @pnpm/exportable-manifest@1000.0.8
  - @pnpm/resolver-base@1000.1.4
  - @pnpm/sort-packages@1000.0.4

## 1000.1.10

### Patch Changes

- Updated dependencies [1c2eb8c]
  - @pnpm/config@1002.4.1
  - @pnpm/cli-utils@1000.0.12
  - @pnpm/plugin-commands-env@1000.0.12

## 1000.1.9

### Patch Changes

- Updated dependencies [8fcc221]
- Updated dependencies [e32b1a2]
- Updated dependencies [8fcc221]
  - @pnpm/config@1002.4.0
  - @pnpm/types@1000.2.0
  - @pnpm/cli-utils@1000.0.11
  - @pnpm/plugin-commands-env@1000.0.11
  - @pnpm/pick-registry-for-package@1000.0.3
  - @pnpm/lifecycle@1001.0.6
  - @pnpm/client@1000.0.7
  - @pnpm/package-bins@1000.0.3
  - @pnpm/exportable-manifest@1000.0.7
  - @pnpm/resolver-base@1000.1.3
  - @pnpm/sort-packages@1000.0.3

## 1000.1.8

### Patch Changes

- Updated dependencies [fee898f]
  - @pnpm/config@1002.3.1
  - @pnpm/cli-utils@1000.0.10
  - @pnpm/plugin-commands-env@1000.0.10

## 1000.1.7

### Patch Changes

- @pnpm/cli-utils@1000.0.9
- @pnpm/plugin-commands-env@1000.0.9

## 1000.1.6

### Patch Changes

- Updated dependencies [f6006f2]
  - @pnpm/config@1002.3.0
  - @pnpm/cli-utils@1000.0.8
  - @pnpm/plugin-commands-env@1000.0.8

## 1000.1.5

### Patch Changes

- Updated dependencies [c0d1c01]
  - @pnpm/lifecycle@1001.0.5
  - @pnpm/cli-utils@1000.0.7
  - @pnpm/config@1002.2.1
  - @pnpm/exportable-manifest@1000.0.6
  - @pnpm/plugin-commands-env@1000.0.7
  - @pnpm/client@1000.0.6

## 1000.1.4

### Patch Changes

- b65303d: Verify that the package name is valid when executing the publish command.
- Updated dependencies [b562deb]
- Updated dependencies [f3ffaed]
- Updated dependencies [c96eb2b]
  - @pnpm/types@1000.1.1
  - @pnpm/config@1002.2.0
  - @pnpm/error@1000.0.2
  - @pnpm/cli-utils@1000.0.6
  - @pnpm/pick-registry-for-package@1000.0.2
  - @pnpm/plugin-commands-env@1000.0.6
  - @pnpm/lifecycle@1001.0.4
  - @pnpm/client@1000.0.5
  - @pnpm/package-bins@1000.0.2
  - @pnpm/exportable-manifest@1000.0.5
  - @pnpm/resolver-base@1000.1.2
  - @pnpm/sort-packages@1000.0.2
  - @pnpm/network.auth-header@1000.0.2

## 1000.1.3

### Patch Changes

- @pnpm/cli-utils@1000.0.5
- @pnpm/config@1002.1.2
- @pnpm/exportable-manifest@1000.0.4
- @pnpm/lifecycle@1001.0.3
- @pnpm/plugin-commands-env@1000.0.5
- @pnpm/client@1000.0.4

## 1000.1.2

### Patch Changes

- b28a533: Fixed the Regex used to find the package manifest during packing [#8938](https://github.com/pnpm/pnpm/pull/8938).
- Updated dependencies [9591a18]
- Updated dependencies [1f5169f]
  - @pnpm/types@1000.1.0
  - @pnpm/config@1002.1.1
  - @pnpm/cli-utils@1000.0.4
  - @pnpm/pick-registry-for-package@1000.0.1
  - @pnpm/plugin-commands-env@1000.0.4
  - @pnpm/lifecycle@1001.0.2
  - @pnpm/client@1000.0.3
  - @pnpm/package-bins@1000.0.1
  - @pnpm/exportable-manifest@1000.0.3
  - @pnpm/resolver-base@1000.1.1
  - @pnpm/sort-packages@1000.0.1

## 1000.1.1

### Patch Changes

- Updated dependencies [f90a94b]
- Updated dependencies [f891288]
  - @pnpm/config@1002.1.0
  - @pnpm/cli-utils@1000.0.3
  - @pnpm/plugin-commands-env@1000.0.3

## 1000.1.0

### Minor Changes

- 3a3cc49: Add support for specifying a custom output path in the pack command using a new `--out` flag [#8900](https://github.com/pnpm/pnpm/pull/8900).

### Patch Changes

- Updated dependencies [738d9e4]
- Updated dependencies [878ea8c]
  - @pnpm/exportable-manifest@1000.0.2
  - @pnpm/config@1002.0.0
  - @pnpm/lifecycle@1001.0.1
  - @pnpm/cli-utils@1000.0.2
  - @pnpm/plugin-commands-env@1000.0.2
  - @pnpm/client@1000.0.2

## 1000.0.1

### Patch Changes

- Updated dependencies [ac5b9d8]
- Updated dependencies [6483b64]
- Updated dependencies [3a6a417]
  - @pnpm/config@1001.0.0
  - @pnpm/resolver-base@1000.1.0
  - @pnpm/lifecycle@1001.0.0
  - @pnpm/cli-utils@1000.0.1
  - @pnpm/plugin-commands-env@1000.0.1
  - @pnpm/error@1000.0.1
  - @pnpm/client@1000.0.1
  - @pnpm/network.auth-header@1000.0.1
  - @pnpm/exportable-manifest@1000.0.1

## 10.1.0

### Minor Changes

- 2f210d9: Added support for `pnpm pack --json` to print packed tarball and contents in JSON format [#8765](https://github.com/pnpm/pnpm/pull/8765).

### Patch Changes

- b3333fb: Display packed files list in `pnpm pack`
- 29447d7: `pnpm publish --json` should work [#8788](https://github.com/pnpm/pnpm/issues/8788).
- Updated dependencies [477e0c1]
- Updated dependencies [dfcf034]
- Updated dependencies [592e2ef]
- Updated dependencies [19d5b51]
- Updated dependencies [1dbc56a]
- Updated dependencies [e9985b6]
- Updated dependencies [39c5385]
  - @pnpm/config@22.0.0
  - @pnpm/plugin-commands-env@5.1.12
  - @pnpm/error@6.0.3
  - @pnpm/cli-utils@4.0.8
  - @pnpm/lifecycle@17.1.6
  - @pnpm/network.auth-header@3.0.3
  - @pnpm/exportable-manifest@7.0.7
  - @pnpm/client@11.1.13

## 10.0.12

### Patch Changes

- Updated dependencies [d04f7f2]
  - @pnpm/plugin-commands-env@5.1.11
  - @pnpm/client@11.1.12
  - @pnpm/cli-utils@4.0.7
  - @pnpm/config@21.8.5
  - @pnpm/lifecycle@17.1.5
  - @pnpm/exportable-manifest@7.0.6

## 10.0.11

### Patch Changes

- @pnpm/plugin-commands-env@5.1.10
- @pnpm/client@11.1.11
- @pnpm/cli-utils@4.0.6
- @pnpm/config@21.8.4
- @pnpm/lifecycle@17.1.5
- @pnpm/exportable-manifest@7.0.6

## 10.0.10

### Patch Changes

- 9cfee8f: `pnpm publish` should be able to publish from a local tarball [#7950](https://github.com/pnpm/pnpm/issues/7950).

## 10.0.9

### Patch Changes

- @pnpm/config@21.8.4
- @pnpm/error@6.0.2
- @pnpm/cli-utils@4.0.6
- @pnpm/plugin-commands-env@5.1.9
- @pnpm/lifecycle@17.1.5
- @pnpm/network.auth-header@3.0.2
- @pnpm/exportable-manifest@7.0.6
- @pnpm/client@11.1.10

## 10.0.8

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/types@12.2.0
  - @pnpm/cli-utils@4.0.5
  - @pnpm/config@21.8.3
  - @pnpm/pick-registry-for-package@6.0.7
  - @pnpm/plugin-commands-env@5.1.8
  - @pnpm/lifecycle@17.1.4
  - @pnpm/client@11.1.9
  - @pnpm/package-bins@9.0.7
  - @pnpm/exportable-manifest@7.0.5
  - @pnpm/resolver-base@13.0.4
  - @pnpm/sort-packages@6.0.8

## 10.0.7

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/cli-utils@4.0.4
  - @pnpm/config@21.8.2
  - @pnpm/pick-registry-for-package@6.0.6
  - @pnpm/plugin-commands-env@5.1.7
  - @pnpm/lifecycle@17.1.3
  - @pnpm/client@11.1.8
  - @pnpm/package-bins@9.0.6
  - @pnpm/exportable-manifest@7.0.4
  - @pnpm/resolver-base@13.0.3
  - @pnpm/sort-packages@6.0.7

## 10.0.6

### Patch Changes

- @pnpm/cli-utils@4.0.3
- @pnpm/plugin-commands-env@5.1.6

## 10.0.5

### Patch Changes

- Updated dependencies [251ab21]
- Updated dependencies [ecbe2ea]
  - @pnpm/config@21.8.1
  - @pnpm/exportable-manifest@7.0.3
  - @pnpm/cli-utils@4.0.2
  - @pnpm/plugin-commands-env@5.1.5

## 10.0.4

### Patch Changes

- @pnpm/cli-utils@4.0.1
- @pnpm/plugin-commands-env@5.1.4

## 10.0.3

### Patch Changes

- Updated dependencies [26b065c]
- Updated dependencies [26b065c]
  - @pnpm/cli-utils@4.0.0
  - @pnpm/config@21.8.0
  - @pnpm/plugin-commands-env@5.1.3

## 10.0.2

### Patch Changes

- Updated dependencies [cb006df]
- Updated dependencies [98c8bd6]
- Updated dependencies [d20eed3]
  - @pnpm/types@12.0.0
  - @pnpm/cli-utils@3.1.7
  - @pnpm/config@21.7.0
  - @pnpm/pick-registry-for-package@6.0.5
  - @pnpm/plugin-commands-env@5.1.2
  - @pnpm/lifecycle@17.1.2
  - @pnpm/client@11.1.7
  - @pnpm/package-bins@9.0.5
  - @pnpm/exportable-manifest@7.0.2
  - @pnpm/resolver-base@13.0.2
  - @pnpm/sort-packages@6.0.6

## 10.0.1

### Patch Changes

- Updated dependencies [9899576]
  - @pnpm/lifecycle@17.1.1
  - @pnpm/config@21.6.3
  - @pnpm/client@11.1.6
  - @pnpm/cli-utils@3.1.6
  - @pnpm/plugin-commands-env@5.1.1
  - @pnpm/exportable-manifest@7.0.1

## 10.0.0

### Major Changes

- 0ef168b: Support specifying node version (via `pnpm.executionEnv.nodeVersion` in `package.json`) for running lifecycle scripts per each package in a workspace [#6720](https://github.com/pnpm/pnpm/issues/6720).

### Patch Changes

- Updated dependencies [0ef168b]
  - @pnpm/plugin-commands-env@5.1.0
  - @pnpm/lifecycle@17.1.0
  - @pnpm/types@11.1.0
  - @pnpm/cli-utils@3.1.5
  - @pnpm/config@21.6.2
  - @pnpm/pick-registry-for-package@6.0.4
  - @pnpm/client@11.1.5
  - @pnpm/package-bins@9.0.4
  - @pnpm/exportable-manifest@7.0.1
  - @pnpm/resolver-base@13.0.1
  - @pnpm/sort-packages@6.0.5

## 9.0.1

### Patch Changes

- Updated dependencies [afe520d]
  - @pnpm/config@21.6.1
  - @pnpm/client@11.1.4
  - @pnpm/cli-utils@3.1.4
  - @pnpm/lifecycle@17.0.8
  - @pnpm/exportable-manifest@7.0.0

## 9.0.0

### Major Changes

- dd00eeb: Renamed dir to rootDir in the Project object.

### Patch Changes

- Updated dependencies [1b03682]
- Updated dependencies [dd00eeb]
- Updated dependencies [9c63679]
- Updated dependencies
  - @pnpm/config@21.6.0
  - @pnpm/resolver-base@13.0.0
  - @pnpm/types@11.0.0
  - @pnpm/exportable-manifest@7.0.0
  - @pnpm/cli-utils@3.1.3
  - @pnpm/client@11.1.3
  - @pnpm/pick-registry-for-package@6.0.3
  - @pnpm/lifecycle@17.0.7
  - @pnpm/package-bins@9.0.3
  - @pnpm/sort-packages@6.0.4

## 8.1.8

### Patch Changes

- Updated dependencies [7c6c923]
- Updated dependencies [7d10394]
- Updated dependencies [d8eab39]
- Updated dependencies [13e55b2]
- Updated dependencies [398472c]
- Updated dependencies [04b8363]
  - @pnpm/config@21.5.0
  - @pnpm/types@10.1.1
  - @pnpm/exportable-manifest@6.1.0
  - @pnpm/cli-utils@3.1.2
  - @pnpm/pick-registry-for-package@6.0.2
  - @pnpm/lifecycle@17.0.6
  - @pnpm/client@11.1.2
  - @pnpm/package-bins@9.0.2
  - @pnpm/resolver-base@12.0.2
  - @pnpm/sort-packages@6.0.3

## 8.1.7

### Patch Changes

- Updated dependencies [47341e5]
  - @pnpm/config@21.4.0
  - @pnpm/cli-utils@3.1.1
  - @pnpm/exportable-manifest@6.0.2
  - @pnpm/lifecycle@17.0.5

## 8.1.6

### Patch Changes

- Updated dependencies [b7ca13f]
- Updated dependencies [b7ca13f]
  - @pnpm/cli-utils@3.1.0
  - @pnpm/config@21.3.0
  - @pnpm/lifecycle@17.0.5
  - @pnpm/client@11.1.1

## 8.1.5

### Patch Changes

- Updated dependencies [0c08e1c]
  - @pnpm/client@11.1.0
  - @pnpm/lifecycle@17.0.4
  - @pnpm/config@21.2.3
  - @pnpm/cli-utils@3.0.7
  - @pnpm/exportable-manifest@6.0.2

## 8.1.4

### Patch Changes

- Updated dependencies [45f4262]
  - @pnpm/types@10.1.0
  - @pnpm/cli-utils@3.0.6
  - @pnpm/config@21.2.2
  - @pnpm/pick-registry-for-package@6.0.1
  - @pnpm/lifecycle@17.0.3
  - @pnpm/client@11.0.6
  - @pnpm/package-bins@9.0.1
  - @pnpm/exportable-manifest@6.0.2
  - @pnpm/resolver-base@12.0.1
  - @pnpm/sort-packages@6.0.2

## 8.1.3

### Patch Changes

- Updated dependencies [a7aef51]
  - @pnpm/error@6.0.1
  - @pnpm/cli-utils@3.0.5
  - @pnpm/config@21.2.1
  - @pnpm/lifecycle@17.0.2
  - @pnpm/network.auth-header@3.0.1
  - @pnpm/exportable-manifest@6.0.1
  - @pnpm/client@11.0.5

## 8.1.2

### Patch Changes

- @pnpm/cli-utils@3.0.4
- @pnpm/client@11.0.4

## 8.1.1

### Patch Changes

- c50afe4: Explicitly throw an error when user attempts to run `publish` or `pack` when `bundledDependencies` is set but `node-linker` isn't `hoisted`.
  - @pnpm/sort-packages@6.0.1
  - @pnpm/client@11.0.3

## 8.1.0

### Minor Changes

- 9719a42: New setting called `virtual-store-dir-max-length` added to modify the maximum allowed length of the directories inside `node_modules/.pnpm`. The default length is set to 120 characters. This setting is particularly useful on Windows, where there is a limit to the maximum length of a file path [#7355](https://github.com/pnpm/pnpm/issues/7355).

### Patch Changes

- Updated dependencies [9719a42]
  - @pnpm/config@21.2.0
  - @pnpm/cli-utils@3.0.3
  - @pnpm/exportable-manifest@6.0.0
  - @pnpm/lifecycle@17.0.1

## 8.0.3

### Patch Changes

- @pnpm/client@11.0.2

## 8.0.2

### Patch Changes

- Updated dependencies [bfadc0a]
- Updated dependencies [a80b539]
  - @pnpm/lifecycle@17.0.1
  - @pnpm/cli-utils@3.0.2
  - @pnpm/client@11.0.1

## 8.0.1

### Patch Changes

- Updated dependencies [e0f47f4]
  - @pnpm/config@21.1.0
  - @pnpm/cli-utils@3.0.1

## 8.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Minor Changes

- 7733f3a: Added support for registry-scoped SSL configurations (cert, key, and ca). Three new settings supported: `<registryURL>:certfile`, `<registryURL>:keyfile`, and `<registryURL>:ca`. For instance:

  ```
  //registry.mycomp.com/:certfile=server-cert.pem
  //registry.mycomp.com/:keyfile=server-key.pem
  //registry.mycomp.com/:cafile=client-cert.pem
  ```

  Related issue: [#7427](https://github.com/pnpm/pnpm/issues/7427).
  Related PR: [#7626](https://github.com/pnpm/pnpm/pull/7626).

### Patch Changes

- f7537b8: It should be possible to publish a tarball with custom dist-tag [#7845](https://github.com/pnpm/pnpm/issues/7845).
- Updated dependencies [7733f3a]
- Updated dependencies [3ded840]
- Updated dependencies [43cdd87]
- Updated dependencies [2d9e3b8]
- Updated dependencies [3477ee5]
- Updated dependencies [cfa33f1]
- Updated dependencies [e748162]
- Updated dependencies [82aac81]
- Updated dependencies [2b89155]
- Updated dependencies [60839fc]
- Updated dependencies [b13d2dc]
- Updated dependencies [e70a829]
- Updated dependencies [730929e]
- Updated dependencies [98566d9]
  - @pnpm/client@11.0.0
  - @pnpm/types@10.0.0
  - @pnpm/config@21.0.0
  - @pnpm/error@6.0.0
  - @pnpm/pick-registry-for-package@6.0.0
  - @pnpm/exportable-manifest@6.0.0
  - @pnpm/common-cli-options-help@2.0.0
  - @pnpm/package-bins@9.0.0
  - @pnpm/resolver-base@12.0.0
  - @pnpm/sort-packages@6.0.0
  - @pnpm/network.auth-header@3.0.0
  - @pnpm/git-utils@2.0.0
  - @pnpm/lifecycle@17.0.0
  - @pnpm/cli-utils@3.0.0
  - @pnpm/run-npm@7.0.0
  - @pnpm/fs.packlist@2.0.0

## 7.5.3

### Patch Changes

- Updated dependencies [31054a63e]
  - @pnpm/resolver-base@11.1.0
  - @pnpm/lifecycle@16.0.12
  - @pnpm/client@10.0.46
  - @pnpm/cli-utils@2.1.9
  - @pnpm/config@20.4.2
  - @pnpm/exportable-manifest@5.0.11

## 7.5.2

### Patch Changes

- 3c6726936: `pnpm pack` should work as expected when "prepack" modifies the manifest [#7558](https://github.com/pnpm/pnpm/pull/7558).

## 7.5.1

### Patch Changes

- 7856b9263: `@pnpm/network.auth-header` should be a prod dependency.
- 9fb45d0fc: `pnpm publish` should pack "main" file or "bin" files defined in "publishConfig" [#4195](https://github.com/pnpm/pnpm/issues/4195).
- Updated dependencies [9fb45d0fc]
  - @pnpm/fs.packlist@1.0.3
  - @pnpm/client@10.0.45
  - @pnpm/lifecycle@16.0.11

## 7.5.0

### Minor Changes

- 5a5e42551: Allow using token helpers in `pnpm publish` [#7316](https://github.com/pnpm/pnpm/issues/7316).

### Patch Changes

- Updated dependencies [5a5e42551]
- Updated dependencies [d9564e354]
- Updated dependencies [5a5e42551]
  - @pnpm/run-npm@6.1.0
  - @pnpm/config@20.4.1
  - @pnpm/client@10.0.44
  - @pnpm/cli-utils@2.1.8
  - @pnpm/exportable-manifest@5.0.11
  - @pnpm/lifecycle@16.0.10

## 7.4.13

### Patch Changes

- @pnpm/client@10.0.43

## 7.4.12

### Patch Changes

- Updated dependencies [c597f72ec]
  - @pnpm/config@20.4.0
  - @pnpm/cli-utils@2.1.7

## 7.4.11

### Patch Changes

- Updated dependencies [4e71066dd]
- Updated dependencies [4d34684f1]
  - @pnpm/common-cli-options-help@1.1.0
  - @pnpm/config@20.3.0
  - @pnpm/types@9.4.2
  - @pnpm/cli-utils@2.1.6
  - @pnpm/pick-registry-for-package@5.0.6
  - @pnpm/lifecycle@16.0.10
  - @pnpm/package-bins@8.0.6
  - @pnpm/exportable-manifest@5.0.11
  - @pnpm/resolver-base@11.0.2
  - @pnpm/sort-packages@5.0.9
  - @pnpm/client@10.0.42

## 7.4.10

### Patch Changes

- Updated dependencies
- Updated dependencies [672c559e4]
  - @pnpm/types@9.4.1
  - @pnpm/config@20.2.0
  - @pnpm/cli-utils@2.1.5
  - @pnpm/pick-registry-for-package@5.0.5
  - @pnpm/lifecycle@16.0.9
  - @pnpm/package-bins@8.0.5
  - @pnpm/exportable-manifest@5.0.10
  - @pnpm/resolver-base@11.0.1
  - @pnpm/sort-packages@5.0.8
  - @pnpm/client@10.0.41

## 7.4.9

### Patch Changes

- @pnpm/client@10.0.40

## 7.4.8

### Patch Changes

- @pnpm/client@10.0.39
- @pnpm/cli-utils@2.1.4

## 7.4.7

### Patch Changes

- @pnpm/cli-utils@2.1.3
- @pnpm/client@10.0.38

## 7.4.6

### Patch Changes

- @pnpm/client@10.0.37

## 7.4.5

### Patch Changes

- @pnpm/client@10.0.36

## 7.4.4

### Patch Changes

- Updated dependencies [74432d605]
  - @pnpm/fs.packlist@1.0.2
  - @pnpm/client@10.0.35
  - @pnpm/lifecycle@16.0.8
  - @pnpm/config@20.1.2
  - @pnpm/cli-utils@2.1.2
  - @pnpm/exportable-manifest@5.0.9

## 7.4.3

### Patch Changes

- Updated dependencies [c7f1359b6]
  - @pnpm/fs.packlist@1.0.1
  - @pnpm/lifecycle@16.0.7
  - @pnpm/client@10.0.34

## 7.4.2

### Patch Changes

- Updated dependencies [4c2450208]
  - @pnpm/resolver-base@11.0.0
  - @pnpm/client@10.0.33
  - @pnpm/lifecycle@16.0.6
  - @pnpm/config@20.1.1
  - @pnpm/cli-utils@2.1.1
  - @pnpm/exportable-manifest@5.0.9

## 7.4.1

### Patch Changes

- 500363647: `pnpm publish` should not pack the same file twice sometimes [#6997](https://github.com/pnpm/pnpm/issues/6997).

  The fix was to update `npm-packlist` to the latest version.

- Updated dependencies [500363647]
  - @pnpm/fs.packlist@1.0.0
  - @pnpm/lifecycle@16.0.5
  - @pnpm/client@10.0.32

## 7.4.0

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
- Updated dependencies [d2dc2e66a]
- Updated dependencies [d6592964f]
  - @pnpm/types@9.4.0
  - @pnpm/cli-utils@2.1.0
  - @pnpm/config@20.1.0
  - @pnpm/package-bins@8.0.4
  - @pnpm/lifecycle@16.0.4
  - @pnpm/pick-registry-for-package@5.0.4
  - @pnpm/exportable-manifest@5.0.9
  - @pnpm/resolver-base@10.0.4
  - @pnpm/sort-packages@5.0.7
  - @pnpm/client@10.0.31

## 7.3.20

### Patch Changes

- @pnpm/lifecycle@16.0.3
- @pnpm/client@10.0.30

## 7.3.19

### Patch Changes

- Updated dependencies [4246f41be]
- Updated dependencies [84f81c9ae]
  - @pnpm/sort-packages@5.0.6
  - @pnpm/lifecycle@16.0.2
  - @pnpm/client@10.0.29

## 7.3.18

### Patch Changes

- Updated dependencies [ac5abd3ff]
- Updated dependencies [b60bb6cbe]
  - @pnpm/config@20.0.0
  - @pnpm/cli-utils@2.0.24
  - @pnpm/client@10.0.28
  - @pnpm/exportable-manifest@5.0.8
  - @pnpm/lifecycle@16.0.1

## 7.3.17

### Patch Changes

- @pnpm/client@10.0.27

## 7.3.16

### Patch Changes

- @pnpm/client@10.0.26

## 7.3.15

### Patch Changes

- Updated dependencies [b1dd0ee58]
  - @pnpm/config@19.2.1
  - @pnpm/cli-utils@2.0.23

## 7.3.14

### Patch Changes

- Updated dependencies [d774a3196]
- Updated dependencies [d774a3196]
- Updated dependencies [832e28826]
  - @pnpm/config@19.2.0
  - @pnpm/types@9.3.0
  - @pnpm/cli-utils@2.0.22
  - @pnpm/pick-registry-for-package@5.0.3
  - @pnpm/lifecycle@16.0.1
  - @pnpm/package-bins@8.0.3
  - @pnpm/exportable-manifest@5.0.8
  - @pnpm/resolver-base@10.0.3
  - @pnpm/sort-packages@5.0.5
  - @pnpm/client@10.0.25

## 7.3.13

### Patch Changes

- Updated dependencies [ee328fd25]
  - @pnpm/config@19.1.0
  - @pnpm/cli-utils@2.0.21

## 7.3.12

### Patch Changes

- @pnpm/cli-utils@2.0.20
- @pnpm/client@10.0.24

## 7.3.11

### Patch Changes

- Updated dependencies [9caa33d53]
  - @pnpm/lifecycle@16.0.0
  - @pnpm/client@10.0.23
  - @pnpm/config@19.0.3
  - @pnpm/cli-utils@2.0.19
  - @pnpm/exportable-manifest@5.0.7

## 7.3.10

### Patch Changes

- @pnpm/client@10.0.22

## 7.3.9

### Patch Changes

- @pnpm/lifecycle@15.0.9
- @pnpm/config@19.0.2
- @pnpm/client@10.0.21
- @pnpm/cli-utils@2.0.18
- @pnpm/exportable-manifest@5.0.6

## 7.3.8

### Patch Changes

- @pnpm/client@10.0.20
- @pnpm/config@19.0.1
- @pnpm/exportable-manifest@5.0.6
- @pnpm/lifecycle@15.0.8

## 7.3.7

### Patch Changes

- @pnpm/lifecycle@15.0.8
- @pnpm/client@10.0.19
- @pnpm/config@19.0.1
- @pnpm/exportable-manifest@5.0.6
- @pnpm/cli-utils@2.0.17

## 7.3.6

### Patch Changes

- a33503208: Reduce concurrency in the `pnpm -r publish` command [#6968](https://github.com/pnpm/pnpm/issues/6968).
- Updated dependencies [cb8bcc8df]
- Updated dependencies [e9aa6f682]
  - @pnpm/config@19.0.0
  - @pnpm/exportable-manifest@5.0.6
  - @pnpm/lifecycle@15.0.7
  - @pnpm/client@10.0.18
  - @pnpm/cli-utils@2.0.16

## 7.3.5

### Patch Changes

- @pnpm/cli-utils@2.0.15
- @pnpm/client@10.0.17

## 7.3.4

### Patch Changes

- Updated dependencies [692197df3]
  - @pnpm/lifecycle@15.0.6
  - @pnpm/client@10.0.16

## 7.3.3

### Patch Changes

- @pnpm/cli-utils@2.0.14

## 7.3.2

### Patch Changes

- @pnpm/client@10.0.15
- @pnpm/config@18.4.4
- @pnpm/exportable-manifest@5.0.5
- @pnpm/lifecycle@15.0.5

## 7.3.1

### Patch Changes

- @pnpm/client@10.0.14

## 7.3.0

### Minor Changes

- aa2ae8fe2: Support `publishConfig.registry` in `package.json` for publishing [#6775](https://github.com/pnpm/pnpm/issues/6775).

### Patch Changes

- Updated dependencies [aa2ae8fe2]
  - @pnpm/types@9.2.0
  - @pnpm/cli-utils@2.0.13
  - @pnpm/config@18.4.4
  - @pnpm/pick-registry-for-package@5.0.2
  - @pnpm/lifecycle@15.0.5
  - @pnpm/package-bins@8.0.2
  - @pnpm/exportable-manifest@5.0.5
  - @pnpm/resolver-base@10.0.2
  - @pnpm/sort-packages@5.0.4
  - @pnpm/client@10.0.13

## 7.2.10

### Patch Changes

- @pnpm/cli-utils@2.0.12
- @pnpm/config@18.4.3
- @pnpm/exportable-manifest@5.0.4
- @pnpm/lifecycle@15.0.4
- @pnpm/client@10.0.12

## 7.2.9

### Patch Changes

- Updated dependencies [dddb8ad71]
  - @pnpm/lifecycle@15.0.3
  - @pnpm/client@10.0.11
  - @pnpm/config@18.4.2
  - @pnpm/exportable-manifest@5.0.3

## 7.2.8

### Patch Changes

- @pnpm/client@10.0.10

## 7.2.7

### Patch Changes

- @pnpm/client@10.0.9

## 7.2.6

### Patch Changes

- Updated dependencies [e2d631217]
  - @pnpm/config@18.4.2
  - @pnpm/cli-utils@2.0.11
  - @pnpm/exportable-manifest@5.0.3
  - @pnpm/lifecycle@15.0.2

## 7.2.5

### Patch Changes

- @pnpm/config@18.4.1
- @pnpm/error@5.0.2
- @pnpm/cli-utils@2.0.10
- @pnpm/lifecycle@15.0.2
- @pnpm/exportable-manifest@5.0.3
- @pnpm/client@10.0.8

## 7.2.4

### Patch Changes

- 4b97f1f07: Don't use await in loops.
- Updated dependencies [4b97f1f07]
  - @pnpm/exportable-manifest@5.0.2
  - @pnpm/client@10.0.7
  - @pnpm/config@18.4.0
  - @pnpm/lifecycle@15.0.1

## 7.2.3

### Patch Changes

- Updated dependencies [a9e0b7cbf]
- Updated dependencies [301b8e2da]
- Updated dependencies [6ce3424a9]
  - @pnpm/types@9.1.0
  - @pnpm/config@18.4.0
  - @pnpm/lifecycle@15.0.1
  - @pnpm/cli-utils@2.0.9
  - @pnpm/pick-registry-for-package@5.0.1
  - @pnpm/package-bins@8.0.1
  - @pnpm/exportable-manifest@5.0.1
  - @pnpm/resolver-base@10.0.1
  - @pnpm/sort-packages@5.0.3
  - @pnpm/error@5.0.1
  - @pnpm/client@10.0.6

## 7.2.2

### Patch Changes

- Updated dependencies [ee429b300]
- Updated dependencies [1de07a4af]
  - @pnpm/cli-utils@2.0.8
  - @pnpm/config@18.3.2

## 7.2.1

### Patch Changes

- Updated dependencies [3fa14d7e4]
  - @pnpm/sort-packages@5.0.2

## 7.2.0

### Minor Changes

- ad8e3b6a0: `pnpm publish` supports the `--provenance` CLI option [#6435](https://github.com/pnpm/pnpm/issues/6435).

### Patch Changes

- Updated dependencies [2809e89ab]
  - @pnpm/config@18.3.1
  - @pnpm/cli-utils@2.0.7
  - @pnpm/client@10.0.5
  - @pnpm/exportable-manifest@5.0.0
  - @pnpm/lifecycle@15.0.0

## 7.1.1

### Patch Changes

- @pnpm/client@10.0.4

## 7.1.0

### Minor Changes

- 32f8e08c6: A custom compression level may be specified for the `pnpm pack` command using the `pack-gzip-level` setting [#6393](https://github.com/pnpm/pnpm/issues/6393).

### Patch Changes

- Updated dependencies [32f8e08c6]
- Updated dependencies [d43ccc44d]
  - @pnpm/config@18.3.0
  - @pnpm/sort-packages@5.0.1
  - @pnpm/cli-utils@2.0.6
  - @pnpm/client@10.0.3

## 7.0.5

### Patch Changes

- Updated dependencies [fc8780ca9]
  - @pnpm/config@18.2.0
  - @pnpm/cli-utils@2.0.5

## 7.0.4

### Patch Changes

- @pnpm/cli-utils@2.0.4
- @pnpm/config@18.1.1
- @pnpm/client@10.0.2

## 7.0.3

### Patch Changes

- Updated dependencies [e2cb4b63d]
- Updated dependencies [cd6ce11f0]
  - @pnpm/config@18.1.0
  - @pnpm/cli-utils@2.0.3
  - @pnpm/client@10.0.1

## 7.0.2

### Patch Changes

- @pnpm/config@18.0.2
- @pnpm/cli-utils@2.0.2

## 7.0.1

### Patch Changes

- @pnpm/config@18.0.1
- @pnpm/cli-utils@2.0.1

## 7.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- 059d3ac39: When publish some package throws an error, the exit code should be non-zero [#5528](https://github.com/pnpm/pnpm/issues/5528).
- Updated dependencies [47e45d717]
- Updated dependencies [47e45d717]
- Updated dependencies [7a0ce1df0]
- Updated dependencies [158d8cf22]
- Updated dependencies [eceaa8b8b]
- Updated dependencies [8e35c21d1]
- Updated dependencies [47e45d717]
- Updated dependencies [47e45d717]
- Updated dependencies [113f0ae26]
  - @pnpm/config@18.0.0
  - @pnpm/client@10.0.0
  - @pnpm/pick-registry-for-package@5.0.0
  - @pnpm/exportable-manifest@5.0.0
  - @pnpm/common-cli-options-help@1.0.0
  - @pnpm/package-bins@8.0.0
  - @pnpm/resolver-base@10.0.0
  - @pnpm/sort-packages@5.0.0
  - @pnpm/git-utils@1.0.0
  - @pnpm/lifecycle@15.0.0
  - @pnpm/error@5.0.0
  - @pnpm/types@9.0.0
  - @pnpm/cli-utils@2.0.0
  - @pnpm/run-npm@6.0.0

## 6.1.22

### Patch Changes

- @pnpm/config@17.0.2
- @pnpm/cli-utils@1.1.7

## 6.1.21

### Patch Changes

- Updated dependencies [b38d711f3]
  - @pnpm/config@17.0.1
  - @pnpm/cli-utils@1.1.6

## 6.1.20

### Patch Changes

- Updated dependencies [e505b58e3]
  - @pnpm/config@17.0.0
  - @pnpm/cli-utils@1.1.5
  - @pnpm/client@9.1.5
  - @pnpm/exportable-manifest@4.0.8
  - @pnpm/lifecycle@14.1.7

## 6.1.19

### Patch Changes

- @pnpm/config@16.7.2
- @pnpm/cli-utils@1.1.4

## 6.1.18

### Patch Changes

- @pnpm/config@16.7.1
- @pnpm/cli-utils@1.1.3

## 6.1.17

### Patch Changes

- Updated dependencies [7d64d757b]
- Updated dependencies [5c31fa8be]
  - @pnpm/cli-utils@1.1.2
  - @pnpm/config@16.7.0

## 6.1.16

### Patch Changes

- @pnpm/config@16.6.4
- @pnpm/cli-utils@1.1.1

## 6.1.15

### Patch Changes

- Updated dependencies [0377d9367]
  - @pnpm/cli-utils@1.1.0
  - @pnpm/config@16.6.3

## 6.1.14

### Patch Changes

- @pnpm/client@9.1.4
- @pnpm/config@16.6.2
- @pnpm/cli-utils@1.0.34

## 6.1.13

### Patch Changes

- Updated dependencies [029143cff]
- Updated dependencies [b71c6ed74]
- Updated dependencies [029143cff]
  - @pnpm/resolver-base@9.2.0
  - @pnpm/exportable-manifest@4.0.7
  - @pnpm/client@9.1.3
  - @pnpm/config@16.6.1
  - @pnpm/lifecycle@14.1.6
  - @pnpm/cli-utils@1.0.33

## 6.1.12

### Patch Changes

- Updated dependencies [59ee53678]
  - @pnpm/config@16.6.0
  - @pnpm/cli-utils@1.0.32
  - @pnpm/client@9.1.2

## 6.1.11

### Patch Changes

- @pnpm/config@16.5.5
- @pnpm/cli-utils@1.0.31

## 6.1.10

### Patch Changes

- @pnpm/config@16.5.4
- @pnpm/cli-utils@1.0.30

## 6.1.9

### Patch Changes

- @pnpm/config@16.5.3
- @pnpm/cli-utils@1.0.29

## 6.1.8

### Patch Changes

- d51cb2a3f: `prepublishOnly` and `prepublish` should not be executed on `pnpm pack` [#2941](https://github.com/pnpm/pnpm/issues/2941).
  - @pnpm/config@16.5.2
  - @pnpm/cli-utils@1.0.28

## 6.1.7

### Patch Changes

- @pnpm/config@16.5.1
- @pnpm/cli-utils@1.0.27
- @pnpm/lifecycle@14.1.5

## 6.1.6

### Patch Changes

- Updated dependencies [28b47a156]
  - @pnpm/config@16.5.0
  - @pnpm/cli-utils@1.0.26

## 6.1.5

### Patch Changes

- @pnpm/client@9.1.1
- @pnpm/config@16.4.3
- @pnpm/cli-utils@1.0.25
- @pnpm/lifecycle@14.1.5

## 6.1.4

### Patch Changes

- @pnpm/config@16.4.2
- @pnpm/cli-utils@1.0.24

## 6.1.3

### Patch Changes

- @pnpm/config@16.4.1
- @pnpm/cli-utils@1.0.23

## 6.1.2

### Patch Changes

- Updated dependencies [c7b05cd9a]
- Updated dependencies [3ebce5db7]
  - @pnpm/client@9.1.0
  - @pnpm/config@16.4.0
  - @pnpm/lifecycle@14.1.5
  - @pnpm/error@4.0.1
  - @pnpm/cli-utils@1.0.22
  - @pnpm/exportable-manifest@4.0.6

## 6.1.1

### Patch Changes

- Updated dependencies [1fad508b0]
  - @pnpm/config@16.3.0
  - @pnpm/cli-utils@1.0.21

## 6.1.0

### Minor Changes

- a02f1fea1: expose the `npm_command` environment variable to lifecycle hooks & scripts.

### Patch Changes

- ec97a3105: Report to the console when a git-hosted dependency is built [#5847](https://github.com/pnpm/pnpm/pull/5847).
- 08ceaf3fc: replace dependency `is-ci` by `ci-info` (`is-ci` is just a simple wrapper around `ci-info`).
- Updated dependencies [ec97a3105]
  - @pnpm/client@9.0.1
  - @pnpm/cli-utils@1.0.20
  - @pnpm/config@16.2.2

## 6.0.19

### Patch Changes

- Updated dependencies [d71dbf230]
  - @pnpm/config@16.2.1
  - @pnpm/cli-utils@1.0.19

## 6.0.18

### Patch Changes

- Updated dependencies [339c0a704]
- Updated dependencies [841f52e70]
  - @pnpm/client@9.0.0
  - @pnpm/config@16.2.0
  - @pnpm/cli-utils@1.0.18

## 6.0.17

### Patch Changes

- Updated dependencies [b77651d14]
- Updated dependencies [6b00a8325]
  - @pnpm/types@8.10.0
  - @pnpm/lifecycle@14.1.4
  - @pnpm/cli-utils@1.0.17
  - @pnpm/config@16.1.11
  - @pnpm/pick-registry-for-package@4.0.3
  - @pnpm/package-bins@7.0.3
  - @pnpm/exportable-manifest@4.0.5
  - @pnpm/resolver-base@9.1.5
  - @pnpm/sort-packages@4.0.3
  - @pnpm/client@8.1.3

## 6.0.16

### Patch Changes

- @pnpm/config@16.1.10
- @pnpm/cli-utils@1.0.16

## 6.0.15

### Patch Changes

- 5d8f84520: Added `--json` to the `pnpm publish --help` output [#5773](https://github.com/pnpm/pnpm/pull/5773).
- Updated dependencies [f5c377a8d]
  - @pnpm/lifecycle@14.1.3
  - @pnpm/config@16.1.9
  - @pnpm/cli-utils@1.0.15

## 6.0.14

### Patch Changes

- @pnpm/cli-utils@1.0.14
- @pnpm/config@16.1.8

## 6.0.13

### Patch Changes

- Updated dependencies [a9d59d8bc]
- Updated dependencies [93558ce68]
  - @pnpm/config@16.1.7
  - @pnpm/lifecycle@14.1.2
  - @pnpm/cli-utils@1.0.13
  - @pnpm/client@8.1.2
  - @pnpm/exportable-manifest@4.0.4

## 6.0.12

### Patch Changes

- @pnpm/config@16.1.6
- @pnpm/cli-utils@1.0.12

## 6.0.11

### Patch Changes

- @pnpm/config@16.1.5
- @pnpm/cli-utils@1.0.11

## 6.0.10

### Patch Changes

- a2b432691: `pnpm publish <tarball path>` should exit with non-0 exit code when publish fails [#5396](https://github.com/pnpm/pnpm/issues/5396).
  - @pnpm/cli-utils@1.0.10
  - @pnpm/config@16.1.4
  - @pnpm/exportable-manifest@4.0.3
  - @pnpm/lifecycle@14.1.1
  - @pnpm/client@8.1.1

## 6.0.9

### Patch Changes

- @pnpm/config@16.1.3
- @pnpm/cli-utils@1.0.9

## 6.0.8

### Patch Changes

- Updated dependencies [1d04e663b]
  - @pnpm/lifecycle@14.1.0
  - @pnpm/config@16.1.2
  - @pnpm/cli-utils@1.0.8

## 6.0.7

### Patch Changes

- Updated dependencies [eacff33e4]
  - @pnpm/client@8.1.0
  - @pnpm/lifecycle@14.0.3
  - @pnpm/config@16.1.1
  - @pnpm/cli-utils@1.0.7

## 6.0.6

### Patch Changes

- Updated dependencies [3dab7f83c]
  - @pnpm/config@16.1.0
  - @pnpm/cli-utils@1.0.6

## 6.0.5

### Patch Changes

- Updated dependencies [a4c58d424]
- Updated dependencies [702e847c1]
  - @pnpm/lifecycle@14.0.2
  - @pnpm/types@8.9.0
  - @pnpm/client@8.0.3
  - @pnpm/cli-utils@1.0.5
  - @pnpm/config@16.0.5
  - @pnpm/exportable-manifest@4.0.2
  - @pnpm/package-bins@7.0.2
  - @pnpm/pick-registry-for-package@4.0.2
  - @pnpm/resolver-base@9.1.4
  - @pnpm/sort-packages@4.0.2

## 6.0.4

### Patch Changes

- @pnpm/config@16.0.4
- @pnpm/cli-utils@1.0.4

## 6.0.3

### Patch Changes

- e9cad1939: Remove double negative error code name in ERR_PNPM_GIT_NOT_UNCLEAN
- Updated dependencies [aacb83f73]
- Updated dependencies [a14ad09e6]
  - @pnpm/config@16.0.3
  - @pnpm/cli-utils@1.0.3

## 6.0.2

### Patch Changes

- Updated dependencies [bea0acdfc]
  - @pnpm/config@16.0.2
  - @pnpm/client@8.0.2
  - @pnpm/cli-utils@1.0.2

## 6.0.1

### Patch Changes

- Updated dependencies [e7fd8a84c]
- Updated dependencies [844e82f3a]
  - @pnpm/config@16.0.1
  - @pnpm/types@8.8.0
  - @pnpm/cli-utils@1.0.1
  - @pnpm/exportable-manifest@4.0.1
  - @pnpm/lifecycle@14.0.1
  - @pnpm/package-bins@7.0.1
  - @pnpm/pick-registry-for-package@4.0.1
  - @pnpm/resolver-base@9.1.3
  - @pnpm/sort-packages@4.0.1
  - @pnpm/client@8.0.1

## 6.0.0

### Major Changes

- f884689e0: Require `@pnpm/logger` v5.

### Patch Changes

- Updated dependencies [043d988fc]
- Updated dependencies [1d0fd82fd]
- Updated dependencies [645384bfd]
- Updated dependencies [f884689e0]
- Updated dependencies [3c117996e]
  - @pnpm/client@8.0.0
  - @pnpm/config@16.0.0
  - @pnpm/error@4.0.0
  - @pnpm/exportable-manifest@4.0.0
  - @pnpm/lifecycle@14.0.0
  - @pnpm/cli-utils@1.0.0
  - @pnpm/package-bins@7.0.0
  - @pnpm/pick-registry-for-package@4.0.0
  - @pnpm/run-npm@5.0.0
  - @pnpm/sort-packages@4.0.0

## 5.2.12

### Patch Changes

- @pnpm/config@15.10.12
- @pnpm/cli-utils@0.7.43
- @pnpm/exportable-manifest@3.1.6
- @pnpm/client@7.2.10
- @pnpm/lifecycle@13.1.12

## 5.2.11

### Patch Changes

- e07225651: Fix the return path of `pnpm pack`, when a custom destination directory is used [#5471](https://github.com/pnpm/pnpm/issues/5471).
  - @pnpm/lifecycle@13.1.11
  - @pnpm/cli-utils@0.7.42
  - @pnpm/client@7.2.9
  - @pnpm/config@15.10.11

## 5.2.10

### Patch Changes

- Updated dependencies [e8a631bf0]
  - @pnpm/error@3.1.0
  - @pnpm/cli-utils@0.7.41
  - @pnpm/config@15.10.10
  - @pnpm/exportable-manifest@3.1.5
  - @pnpm/client@7.2.8
  - @pnpm/lifecycle@13.1.10

## 5.2.9

### Patch Changes

- Updated dependencies [d665f3ff7]
  - @pnpm/types@8.7.0
  - @pnpm/config@15.10.9
  - @pnpm/cli-utils@0.7.40
  - @pnpm/exportable-manifest@3.1.4
  - @pnpm/lifecycle@13.1.9
  - @pnpm/package-bins@6.0.8
  - @pnpm/pick-registry-for-package@3.0.8
  - @pnpm/resolver-base@9.1.2
  - @pnpm/sort-packages@3.0.9
  - @pnpm/client@7.2.7

## 5.2.8

### Patch Changes

- @pnpm/config@15.10.8
- @pnpm/cli-utils@0.7.39

## 5.2.7

### Patch Changes

- @pnpm/config@15.10.7
- @pnpm/cli-utils@0.7.38

## 5.2.6

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/types@8.6.0
  - @pnpm/cli-utils@0.7.37
  - @pnpm/config@15.10.6
  - @pnpm/exportable-manifest@3.1.3
  - @pnpm/lifecycle@13.1.8
  - @pnpm/package-bins@6.0.7
  - @pnpm/pick-registry-for-package@3.0.7
  - @pnpm/resolver-base@9.1.1
  - @pnpm/sort-packages@3.0.8
  - @pnpm/client@7.2.6

## 5.2.5

### Patch Changes

- @pnpm/client@7.2.5
- @pnpm/config@15.10.5
- @pnpm/cli-utils@0.7.36

## 5.2.4

### Patch Changes

- @pnpm/cli-utils@0.7.35
- @pnpm/config@15.10.4

## 5.2.3

### Patch Changes

- @pnpm/client@7.2.4
- @pnpm/config@15.10.3
- @pnpm/cli-utils@0.7.34

## 5.2.2

### Patch Changes

- @pnpm/client@7.2.3
- @pnpm/config@15.10.2
- @pnpm/cli-utils@0.7.33

## 5.2.1

### Patch Changes

- @pnpm/client@7.2.2
- @pnpm/config@15.10.1
- @pnpm/cli-utils@0.7.32

## 5.2.0

### Minor Changes

- 2aa22e4b1: Set `NODE_PATH` when `preferSymlinkedExecutables` is enabled.

### Patch Changes

- Updated dependencies [2aa22e4b1]
  - @pnpm/config@15.10.0
  - @pnpm/cli-utils@0.7.31

## 5.1.19

### Patch Changes

- @pnpm/config@15.9.4
- @pnpm/cli-utils@0.7.30

## 5.1.18

### Patch Changes

- @pnpm/config@15.9.3
- @pnpm/cli-utils@0.7.29

## 5.1.17

### Patch Changes

- 07bc24ad1: Update npm-packlist.
  - @pnpm/client@7.2.1
  - @pnpm/lifecycle@13.1.7
  - @pnpm/config@15.9.2
  - @pnpm/cli-utils@0.7.28

## 5.1.16

### Patch Changes

- Updated dependencies [23984abd1]
  - @pnpm/client@7.2.0
  - @pnpm/resolver-base@9.1.0
  - @pnpm/lifecycle@13.1.6
  - @pnpm/config@15.9.1
  - @pnpm/cli-utils@0.7.27

## 5.1.15

### Patch Changes

- @pnpm/client@7.1.14
- @pnpm/config@15.9.0

## 5.1.14

### Patch Changes

- 39c040127: upgrade various dependencies
- 8103f92bd: Use a patched version of ramda to fix deprecation warnings on Node.js 16. Related issue: https://github.com/ramda/ramda/pull/3270
- Updated dependencies [43cd6aaca]
- Updated dependencies [8103f92bd]
- Updated dependencies [65c4260de]
- Updated dependencies [29a81598a]
  - @pnpm/config@15.9.0
  - @pnpm/exportable-manifest@3.1.2
  - @pnpm/cli-utils@0.7.26
  - @pnpm/client@7.1.13
  - @pnpm/lifecycle@13.1.5

## 5.1.13

### Patch Changes

- Updated dependencies [c90798461]
- Updated dependencies [34121d753]
  - @pnpm/types@8.5.0
  - @pnpm/config@15.8.1
  - @pnpm/cli-utils@0.7.25
  - @pnpm/exportable-manifest@3.1.1
  - @pnpm/lifecycle@13.1.4
  - @pnpm/package-bins@6.0.6
  - @pnpm/pick-registry-for-package@3.0.6
  - @pnpm/resolver-base@9.0.6
  - @pnpm/sort-packages@3.0.7
  - @pnpm/client@7.1.12

## 5.1.12

### Patch Changes

- Updated dependencies [cac34ad69]
- Updated dependencies [99019e071]
  - @pnpm/config@15.8.0
  - @pnpm/cli-utils@0.7.24

## 5.1.11

### Patch Changes

- @pnpm/config@15.7.1
- @pnpm/cli-utils@0.7.23

## 5.1.10

### Patch Changes

- eb2426cf8: It should be possible to publish a package with local dependencies from a custom publish directory (set via `publishConfig.directory`) [#3901](https://github.com/pnpm/pnpm/issues/3901#issuecomment-1194156886).
- Updated dependencies [eb2426cf8]
- Updated dependencies [4fa1091c8]
  - @pnpm/exportable-manifest@3.1.0
  - @pnpm/config@15.7.0
  - @pnpm/cli-utils@0.7.22
  - @pnpm/client@7.1.11
  - @pnpm/lifecycle@13.1.3

## 5.1.9

### Patch Changes

- Updated dependencies [7334b347b]
  - @pnpm/config@15.6.1
  - @pnpm/cli-utils@0.7.21

## 5.1.8

### Patch Changes

- 348580c3f: `pnpm publish --help` should print the `--recursive` and `--filter` options [#5019](https://github.com/pnpm/pnpm/issues/5019).
- Updated dependencies [28f000509]
- Updated dependencies [406656f80]
  - @pnpm/config@15.6.0
  - @pnpm/client@7.1.10
  - @pnpm/cli-utils@0.7.20

## 5.1.7

### Patch Changes

- @pnpm/config@15.5.2
- @pnpm/cli-utils@0.7.19

## 5.1.6

### Patch Changes

- @pnpm/cli-utils@0.7.18

## 5.1.5

### Patch Changes

- @pnpm/client@7.1.9

## 5.1.4

### Patch Changes

- 5f643f23b: Update ramda to v0.28.
- Updated dependencies [5f643f23b]
  - @pnpm/cli-utils@0.7.17
  - @pnpm/config@15.5.1
  - @pnpm/exportable-manifest@3.0.7
  - @pnpm/client@7.1.8
  - @pnpm/lifecycle@13.1.2

## 5.1.3

### Patch Changes

- Updated dependencies [f48d46ef6]
  - @pnpm/config@15.5.0
  - @pnpm/cli-utils@0.7.16

## 5.1.2

### Patch Changes

- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0
  - @pnpm/cli-utils@0.7.15
  - @pnpm/config@15.4.1
  - @pnpm/exportable-manifest@3.0.6
  - @pnpm/lifecycle@13.1.1
  - @pnpm/package-bins@6.0.5
  - @pnpm/pick-registry-for-package@3.0.5
  - @pnpm/resolver-base@9.0.5
  - @pnpm/sort-packages@3.0.6
  - @pnpm/client@7.1.7

## 5.1.1

### Patch Changes

- Updated dependencies [2a34b21ce]
- Updated dependencies [47b5e45dd]
  - @pnpm/types@8.3.0
  - @pnpm/lifecycle@13.1.0
  - @pnpm/config@15.4.0
  - @pnpm/cli-utils@0.7.14
  - @pnpm/exportable-manifest@3.0.5
  - @pnpm/package-bins@6.0.4
  - @pnpm/pick-registry-for-package@3.0.4
  - @pnpm/resolver-base@9.0.4
  - @pnpm/sort-packages@3.0.5
  - @pnpm/client@7.1.6

## 5.1.0

### Minor Changes

- 56cf04cb3: New settings added: use-git-branch-lockfile, merge-git-branch-lockfiles, merge-git-branch-lockfiles-branch-pattern.

### Patch Changes

- Updated dependencies [fb5bbfd7a]
- Updated dependencies [56cf04cb3]
  - @pnpm/types@8.2.0
  - @pnpm/config@15.3.0
  - @pnpm/git-utils@0.1.0
  - @pnpm/cli-utils@0.7.13
  - @pnpm/exportable-manifest@3.0.4
  - @pnpm/lifecycle@13.0.5
  - @pnpm/package-bins@6.0.3
  - @pnpm/pick-registry-for-package@3.0.3
  - @pnpm/resolver-base@9.0.3
  - @pnpm/sort-packages@3.0.4
  - @pnpm/client@7.1.5

## 5.0.13

### Patch Changes

- Updated dependencies [25798aad1]
  - @pnpm/config@15.2.1
  - @pnpm/cli-utils@0.7.12

## 5.0.12

### Patch Changes

- Updated dependencies [4d39e4a0c]
- Updated dependencies [bc80631d3]
- Updated dependencies [d5730ba81]
  - @pnpm/types@8.1.0
  - @pnpm/config@15.2.0
  - @pnpm/cli-utils@0.7.11
  - @pnpm/exportable-manifest@3.0.3
  - @pnpm/lifecycle@13.0.4
  - @pnpm/package-bins@6.0.2
  - @pnpm/pick-registry-for-package@3.0.2
  - @pnpm/resolver-base@9.0.2
  - @pnpm/sort-packages@3.0.3
  - @pnpm/client@7.1.4

## 5.0.11

### Patch Changes

- @pnpm/cli-utils@0.7.10
- @pnpm/lifecycle@13.0.3
- @pnpm/client@7.1.3
- @pnpm/config@15.1.4

## 5.0.10

### Patch Changes

- Updated dependencies [ae2f845c5]
  - @pnpm/config@15.1.4
  - @pnpm/cli-utils@0.7.9

## 5.0.9

### Patch Changes

- Updated dependencies [05159665d]
  - @pnpm/config@15.1.3
  - @pnpm/cli-utils@0.7.8

## 5.0.8

### Patch Changes

- @pnpm/cli-utils@0.7.7

## 5.0.7

### Patch Changes

- Updated dependencies [af22c6c4f]
  - @pnpm/config@15.1.2
  - @pnpm/cli-utils@0.7.6
  - @pnpm/client@7.1.2

## 5.0.6

### Patch Changes

- Updated dependencies [52b0576af]
  - @pnpm/cli-utils@0.7.5

## 5.0.5

### Patch Changes

- 154e582f4: refactor: display more informative error for packing when package name or version is missing
  - @pnpm/cli-utils@0.7.4
  - @pnpm/config@15.1.1

## 5.0.4

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/exportable-manifest@3.0.2
  - @pnpm/types@8.0.1
  - @pnpm/cli-utils@0.7.3
  - @pnpm/config@15.1.1
  - @pnpm/lifecycle@13.0.2
  - @pnpm/package-bins@6.0.1
  - @pnpm/pick-registry-for-package@3.0.1
  - @pnpm/resolver-base@9.0.1
  - @pnpm/sort-packages@3.0.2
  - @pnpm/client@7.1.1

## 5.0.3

### Patch Changes

- 9177ddbc9: `pnpm publish` should work correctly in a workspace, when the latest npm CLI is installed [#4348](https://github.com/pnpm/pnpm/issues/4348).
- Updated dependencies [9177ddbc9]
  - @pnpm/run-npm@4.0.1

## 5.0.2

### Patch Changes

- Updated dependencies [e05dcc48a]
  - @pnpm/config@15.1.0
  - @pnpm/cli-utils@0.7.2

## 5.0.1

### Patch Changes

- cfe345b6d: Show a friendly error message when it is impossible to get the current Git branch name during publish [#4488](https://github.com/pnpm/pnpm/pull/4488).
- Updated dependencies [2109f2e8e]
- Updated dependencies [8dac029ef]
- Updated dependencies [72b79f55a]
- Updated dependencies [546e644e9]
- Updated dependencies [c6463b9fd]
- Updated dependencies [4bed585e2]
- Updated dependencies [8fa95fd86]
  - @pnpm/sort-packages@3.0.1
  - @pnpm/config@15.0.0
  - @pnpm/client@7.1.0
  - @pnpm/cli-utils@0.7.1
  - @pnpm/lifecycle@13.0.1
  - @pnpm/error@3.0.1
  - @pnpm/exportable-manifest@3.0.1

## 5.0.0

### Major Changes

- 542014839: Node.js 12 is not supported.
- 5fa29295b: `pnpm pack` should only pack a file as an executable if it's a bin or listed in the `publishConfig.executableFiles` array.

### Patch Changes

- Updated dependencies [516859178]
- Updated dependencies [d504dc380]
- Updated dependencies [73d71a2d5]
- Updated dependencies [fa656992c]
- Updated dependencies [542014839]
- Updated dependencies [d999a0801]
- Updated dependencies [585e9ca9e]
  - @pnpm/config@14.0.0
  - @pnpm/types@8.0.0
  - @pnpm/client@7.0.0
  - @pnpm/error@3.0.0
  - @pnpm/exportable-manifest@3.0.0
  - @pnpm/lifecycle@13.0.0
  - @pnpm/package-bins@6.0.0
  - @pnpm/pick-registry-for-package@3.0.0
  - @pnpm/resolver-base@9.0.0
  - @pnpm/run-npm@4.0.0
  - @pnpm/sort-packages@3.0.0
  - @pnpm/cli-utils@0.7.0

## 4.5.2

### Patch Changes

- Updated dependencies [70ba51da9]
  - @pnpm/error@2.1.0
  - @pnpm/cli-utils@0.6.50
  - @pnpm/config@13.13.2
  - @pnpm/exportable-manifest@2.3.2
  - @pnpm/lifecycle@12.1.7
  - @pnpm/client@6.1.3

## 4.5.1

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/types@7.10.0
  - @pnpm/cli-utils@0.6.49
  - @pnpm/config@13.13.1
  - @pnpm/exportable-manifest@2.3.1
  - @pnpm/lifecycle@12.1.6
  - @pnpm/package-bins@5.0.12
  - @pnpm/pick-registry-for-package@2.0.11
  - @pnpm/resolver-base@8.1.6
  - @pnpm/sort-packages@2.1.8
  - @pnpm/client@6.1.2

## 4.5.0

### Minor Changes

- e1b459008: Remove meaningless keys from `publishConfig` when the `pack` or `publish` commands are used [#4311](https://github.com/pnpm/pnpm/issues/4311)

### Patch Changes

- Updated dependencies [e1b459008]
  - @pnpm/exportable-manifest@2.3.0

## 4.4.2

### Patch Changes

- Updated dependencies [7ae349cd3]
  - @pnpm/lifecycle@12.1.5

## 4.4.1

### Patch Changes

- Updated dependencies [334e5340a]
  - @pnpm/config@13.13.0
  - @pnpm/cli-utils@0.6.48

## 4.4.0

### Minor Changes

- b7566b979: embed-readme option was added

### Patch Changes

- Updated dependencies [b7566b979]
  - @pnpm/config@13.12.0
  - @pnpm/cli-utils@0.6.47

## 4.3.5

### Patch Changes

- Updated dependencies [fff0e4493]
  - @pnpm/config@13.11.0
  - @pnpm/cli-utils@0.6.46

## 4.3.4

### Patch Changes

- @pnpm/cli-utils@0.6.45

## 4.3.3

### Patch Changes

- 4f78a2a5f: Update npm-packlist to v3.
- Updated dependencies [e76151f66]
- Updated dependencies [26cd01b88]
  - @pnpm/config@13.10.0
  - @pnpm/types@7.9.0
  - @pnpm/client@6.1.1
  - @pnpm/lifecycle@12.1.4
  - @pnpm/cli-utils@0.6.44
  - @pnpm/exportable-manifest@2.2.4
  - @pnpm/package-bins@5.0.11
  - @pnpm/pick-registry-for-package@2.0.10
  - @pnpm/resolver-base@8.1.5
  - @pnpm/sort-packages@2.1.7

## 4.3.2

### Patch Changes

- @pnpm/cli-utils@0.6.43

## 4.3.1

### Patch Changes

- Updated dependencies [8fe8f5e55]
  - @pnpm/config@13.9.0
  - @pnpm/cli-utils@0.6.42

## 4.3.0

### Minor Changes

- a6cf11cb7: New optional setting added: userConfig. userConfig may contain token helpers.

### Patch Changes

- Updated dependencies [a6cf11cb7]
- Updated dependencies [732d4962f]
- Updated dependencies [a6cf11cb7]
  - @pnpm/client@6.1.0
  - @pnpm/config@13.8.0
  - @pnpm/cli-utils@0.6.41

## 4.2.37

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0
  - @pnpm/cli-utils@0.6.40
  - @pnpm/config@13.7.2
  - @pnpm/exportable-manifest@2.2.3
  - @pnpm/lifecycle@12.1.3
  - @pnpm/package-bins@5.0.10
  - @pnpm/pick-registry-for-package@2.0.9
  - @pnpm/resolver-base@8.1.4
  - @pnpm/sort-packages@2.1.6
  - @pnpm/client@6.0.11

## 4.2.36

### Patch Changes

- @pnpm/cli-utils@0.6.39

## 4.2.35

### Patch Changes

- 890549b7d: feat: support --otp option
- 6493e0c93: add readme file to published package.json file
- Updated dependencies [6493e0c93]
  - @pnpm/exportable-manifest@2.2.2
  - @pnpm/types@7.7.1
  - @pnpm/cli-utils@0.6.38
  - @pnpm/config@13.7.1
  - @pnpm/lifecycle@12.1.2
  - @pnpm/package-bins@5.0.9
  - @pnpm/pick-registry-for-package@2.0.8
  - @pnpm/resolver-base@8.1.3
  - @pnpm/sort-packages@2.1.5
  - @pnpm/client@6.0.10

## 4.2.34

### Patch Changes

- Updated dependencies [30bfca967]
- Updated dependencies [927c4a089]
- Updated dependencies [10a4bd4db]
- Updated dependencies [ba9b2eba1]
  - @pnpm/config@13.7.0
  - @pnpm/types@7.7.0
  - @pnpm/lifecycle@12.1.1
  - @pnpm/cli-utils@0.6.37
  - @pnpm/exportable-manifest@2.2.1
  - @pnpm/package-bins@5.0.8
  - @pnpm/pick-registry-for-package@2.0.7
  - @pnpm/resolver-base@8.1.2
  - @pnpm/sort-packages@2.1.4
  - @pnpm/client@6.0.9

## 4.2.33

### Patch Changes

- @pnpm/client@6.0.8

## 4.2.32

### Patch Changes

- Updated dependencies [46aaf7108]
  - @pnpm/config@13.6.1
  - @pnpm/client@6.0.7
  - @pnpm/cli-utils@0.6.36

## 4.2.31

### Patch Changes

- Updated dependencies [8a99a01ff]
  - @pnpm/config@13.6.0
  - @pnpm/cli-utils@0.6.35

## 4.2.30

### Patch Changes

- @pnpm/client@6.0.6
- @pnpm/cli-utils@0.6.34

## 4.2.29

### Patch Changes

- Updated dependencies [a7ff2d5ce]
  - @pnpm/config@13.5.1
  - @pnpm/cli-utils@0.6.33

## 4.2.28

### Patch Changes

- Updated dependencies [002778559]
  - @pnpm/config@13.5.0
  - @pnpm/lifecycle@12.1.0
  - @pnpm/cli-utils@0.6.32
  - @pnpm/client@6.0.5

## 4.2.27

### Patch Changes

- @pnpm/client@6.0.4

## 4.2.26

### Patch Changes

- @pnpm/client@6.0.3

## 4.2.25

### Patch Changes

- Updated dependencies [6428690e2]
  - @pnpm/exportable-manifest@2.2.0
  - @pnpm/cli-utils@0.6.31

## 4.2.24

### Patch Changes

- Updated dependencies [302ae4f6f]
- Updated dependencies [fa03cbdc8]
  - @pnpm/types@7.6.0
  - @pnpm/lifecycle@12.0.2
  - @pnpm/client@6.0.2
  - @pnpm/config@13.4.2
  - @pnpm/cli-utils@0.6.30
  - @pnpm/exportable-manifest@2.1.8
  - @pnpm/package-bins@5.0.7
  - @pnpm/pick-registry-for-package@2.0.6
  - @pnpm/resolver-base@8.1.1
  - @pnpm/sort-packages@2.1.3

## 4.2.23

### Patch Changes

- 8cde32987: Return the exit code instead of killing the process.
- Updated dependencies [5b90ab98f]
  - @pnpm/lifecycle@12.0.1

## 4.2.22

### Patch Changes

- @pnpm/client@6.0.1

## 4.2.21

### Patch Changes

- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [37dcfceeb]
- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0
  - @pnpm/lifecycle@12.0.0
  - @pnpm/resolver-base@8.1.0
  - @pnpm/client@6.0.0
  - @pnpm/cli-utils@0.6.29
  - @pnpm/config@13.4.1
  - @pnpm/exportable-manifest@2.1.7
  - @pnpm/package-bins@5.0.6
  - @pnpm/pick-registry-for-package@2.0.5
  - @pnpm/sort-packages@2.1.2

## 4.2.20

### Patch Changes

- @pnpm/client@5.0.10

## 4.2.19

### Patch Changes

- Updated dependencies [b6d74c545]
  - @pnpm/config@13.4.0
  - @pnpm/cli-utils@0.6.28
  - @pnpm/client@5.0.9

## 4.2.18

### Patch Changes

- Updated dependencies [bd7bcdbe8]
  - @pnpm/config@13.3.0
  - @pnpm/cli-utils@0.6.27
  - @pnpm/client@5.0.8

## 4.2.17

### Patch Changes

- Updated dependencies [5ee3b2dc7]
  - @pnpm/config@13.2.0
  - @pnpm/cli-utils@0.6.26

## 4.2.16

### Patch Changes

- @pnpm/cli-utils@0.6.25

## 4.2.15

### Patch Changes

- Updated dependencies [4027a3c69]
  - @pnpm/config@13.1.0
  - @pnpm/cli-utils@0.6.24

## 4.2.14

### Patch Changes

- Updated dependencies [4a4d42d8f]
  - @pnpm/lifecycle@11.0.5
  - @pnpm/client@5.0.7

## 4.2.13

### Patch Changes

- Updated dependencies [fe5688dc0]
- Updated dependencies [c7081cbb4]
- Updated dependencies [c7081cbb4]
  - @pnpm/config@13.0.0
  - @pnpm/cli-utils@0.6.23

## 4.2.12

### Patch Changes

- Updated dependencies [d62259d67]
  - @pnpm/config@12.6.0
  - @pnpm/cli-utils@0.6.22

## 4.2.11

### Patch Changes

- 04b7f6086: Use safe-execa instead of execa to prevent binary planting attacks on Windows.
  - @pnpm/client@5.0.6

## 4.2.10

### Patch Changes

- Updated dependencies [6681fdcbc]
  - @pnpm/config@12.5.0
  - @pnpm/cli-utils@0.6.21
  - @pnpm/client@5.0.5

## 4.2.9

### Patch Changes

- Updated dependencies [97f90e537]
  - @pnpm/package-bins@5.0.5
  - @pnpm/client@5.0.4
  - @pnpm/cli-utils@0.6.20

## 4.2.8

### Patch Changes

- Updated dependencies [ede519190]
  - @pnpm/config@12.4.9
  - @pnpm/cli-utils@0.6.19

## 4.2.7

### Patch Changes

- @pnpm/config@12.4.8
- @pnpm/cli-utils@0.6.18

## 4.2.6

### Patch Changes

- @pnpm/client@5.0.3

## 4.2.5

### Patch Changes

- Updated dependencies [655af55ba]
  - @pnpm/config@12.4.7
  - @pnpm/cli-utils@0.6.17

## 4.2.4

### Patch Changes

- @pnpm/client@5.0.2

## 4.2.3

### Patch Changes

- Updated dependencies [3fb74c618]
  - @pnpm/config@12.4.6
  - @pnpm/cli-utils@0.6.16

## 4.2.2

### Patch Changes

- Updated dependencies [051296a16]
  - @pnpm/config@12.4.5
  - @pnpm/cli-utils@0.6.15

## 4.2.1

### Patch Changes

- Updated dependencies [af8b5716e]
  - @pnpm/config@12.4.4
  - @pnpm/cli-utils@0.6.14

## 4.2.0

### Minor Changes

- b734b45ea: By default, for portability reasons, no files except those listed in the bin field will be marked as executable in the resulting package archive. The executableFiles field lets you declare additional fields that must have the executable flag (+x) set even if they aren't directly accessible through the bin field.

  ```json
  "publishConfig": {
    "executableFiles": [
      "./dist/shim.js",
    ]
  }
  ```

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0
  - @pnpm/cli-utils@0.6.13
  - @pnpm/config@12.4.3
  - @pnpm/exportable-manifest@2.1.6
  - @pnpm/lifecycle@11.0.4
  - @pnpm/package-bins@5.0.4
  - @pnpm/pick-registry-for-package@2.0.4
  - @pnpm/resolver-base@8.0.4
  - @pnpm/sort-packages@2.1.1
  - @pnpm/client@5.0.1

## 4.1.3

### Patch Changes

- 47ed7b163: Scripts should be executed upon the original package.json, when publishConfig.directory is set.

## 4.1.2

### Patch Changes

- f9152ab3c: Fix the help description of the pack command.
- Updated dependencies [7af16a011]
- Updated dependencies [73c1f802e]
  - @pnpm/lifecycle@11.0.3
  - @pnpm/config@12.4.2
  - @pnpm/cli-utils@0.6.12

## 4.1.1

### Patch Changes

- efca3896c: Use the correct compression algorithm to pack.

## 4.1.0

### Minor Changes

- f63c034c6: `pnpm pack` uses its own inhouse implementation. `pnpm pack` is not using `npm pack`.
- f63c034c6: Run prepublish and prepublishOnly before packing a package.

### Patch Changes

- f63c034c6: Do not modify the package.json file before packing the package. Do not copy LICENSE files from the root of the workspace (the files are still packed).
  - @pnpm/cli-utils@0.6.11

## 4.0.1

### Patch Changes

- Updated dependencies [2264bfdf4]
  - @pnpm/config@12.4.1
  - @pnpm/cli-utils@0.6.10

## 4.0.0

### Major Changes

- 691f64713: New required option added: cacheDir.

### Patch Changes

- Updated dependencies [25f6968d4]
- Updated dependencies [691f64713]
- Updated dependencies [691f64713]
- Updated dependencies [5aaf3e3fa]
  - @pnpm/config@12.4.0
  - @pnpm/client@5.0.0
  - @pnpm/cli-utils@0.6.9

## 3.3.4

### Patch Changes

- Updated dependencies [1442f8786]
- Updated dependencies [8e76690f4]
  - @pnpm/sort-packages@2.1.0
  - @pnpm/types@7.3.0
  - @pnpm/cli-utils@0.6.8
  - @pnpm/config@12.3.3
  - @pnpm/exportable-manifest@2.1.5
  - @pnpm/lifecycle@11.0.2
  - @pnpm/pick-registry-for-package@2.0.3
  - @pnpm/resolver-base@8.0.3
  - @pnpm/client@4.0.2

## 3.3.3

### Patch Changes

- 40ce0eb6b: Copy the `.npmrc` from the root of the repository.

## 3.3.2

### Patch Changes

- @pnpm/client@4.0.1

## 3.3.1

### Patch Changes

- b5e9284c3: fix publishConfig.directory script

## 3.3.0

### Minor Changes

- 724c5abd8: support "publishConfig.directory" field

### Patch Changes

- Updated dependencies [eeff424bd]
- Updated dependencies [724c5abd8]
  - @pnpm/client@4.0.0
  - @pnpm/run-npm@3.1.0
  - @pnpm/types@7.2.0
  - @pnpm/cli-utils@0.6.7
  - @pnpm/config@12.3.2
  - @pnpm/exportable-manifest@2.1.4
  - @pnpm/lifecycle@11.0.1
  - @pnpm/pick-registry-for-package@2.0.2
  - @pnpm/resolver-base@8.0.2
  - @pnpm/sort-packages@2.0.2

## 3.2.2

### Patch Changes

- a1a03d145: Import only the required functions from ramda.
- Updated dependencies [a1a03d145]
  - @pnpm/config@12.3.1
  - @pnpm/exportable-manifest@2.1.3
  - @pnpm/cli-utils@0.6.6
  - @pnpm/client@3.1.6

## 3.2.1

### Patch Changes

- @pnpm/client@3.1.5

## 3.2.0

### Minor Changes

- 819f67894: New option: reportSummary. When it is set to `true`, recursive publish will save the summary of published packages to `pnpm-publish-summary.json`.

### Patch Changes

- Updated dependencies [84ec82e05]
- Updated dependencies [c2a71e4fd]
- Updated dependencies [84ec82e05]
  - @pnpm/config@12.3.0
  - @pnpm/cli-utils@0.6.5

## 3.1.5

### Patch Changes

- Updated dependencies [6a1468495]
  - @pnpm/exportable-manifest@2.1.2

## 3.1.4

### Patch Changes

- @pnpm/cli-utils@0.6.4
- @pnpm/client@3.1.4

## 3.1.3

### Patch Changes

- @pnpm/cli-utils@0.6.3
- @pnpm/exportable-manifest@2.1.1
- @pnpm/client@3.1.3
- @pnpm/config@12.2.0

## 3.1.2

### Patch Changes

- @pnpm/client@3.1.2

## 3.1.1

### Patch Changes

- Updated dependencies [e6a2654a2]
  - @pnpm/lifecycle@11.0.0
  - @pnpm/client@3.1.1
  - @pnpm/config@12.2.0

## 3.1.0

### Minor Changes

- 05baaa6e7: Add new config setting: `fetch-timeout`.
- 85fb21a83: Add support for workspace:^ and workspace:~ aliases

### Patch Changes

- Updated dependencies [05baaa6e7]
- Updated dependencies [dfdf669e6]
- Updated dependencies [85fb21a83]
- Updated dependencies [05baaa6e7]
- Updated dependencies [97c64bae4]
  - @pnpm/config@12.2.0
  - @pnpm/exportable-manifest@2.1.0
  - @pnpm/client@3.1.0
  - @pnpm/types@7.1.0
  - @pnpm/cli-utils@0.6.2
  - @pnpm/lifecycle@10.0.1
  - @pnpm/pick-registry-for-package@2.0.1
  - @pnpm/resolver-base@8.0.1
  - @pnpm/sort-packages@2.0.1

## 3.0.2

### Patch Changes

- Updated dependencies [ba5231ccf]
  - @pnpm/config@12.1.0
  - @pnpm/cli-utils@0.6.1

## 3.0.1

### Patch Changes

- Updated dependencies [561276d2c]
  - @pnpm/exportable-manifest@2.0.1
  - @pnpm/client@3.0.1
  - @pnpm/config@12.0.0

## 3.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Patch Changes

- Updated dependencies [97b986fbc]
- Updated dependencies [78470a32d]
- Updated dependencies [aed712455]
- Updated dependencies [aed712455]
  - @pnpm/cli-utils@0.6.0
  - @pnpm/client@3.0.0
  - @pnpm/config@12.0.0
  - @pnpm/error@2.0.0
  - @pnpm/exportable-manifest@2.0.0
  - @pnpm/lifecycle@10.0.0
  - @pnpm/pick-registry-for-package@2.0.0
  - @pnpm/resolver-base@8.0.0
  - @pnpm/run-npm@3.0.0
  - @pnpm/sort-packages@2.0.0
  - @pnpm/types@7.0.0

## 2.5.6

### Patch Changes

- Updated dependencies [4f1ce907a]
  - @pnpm/config@11.14.2
  - @pnpm/cli-utils@0.5.4

## 2.5.5

### Patch Changes

- Updated dependencies [d853fb14a]
- Updated dependencies [4b3852c39]
  - @pnpm/lifecycle@9.6.5
  - @pnpm/config@11.14.1
  - @pnpm/cli-utils@0.5.3

## 2.5.4

### Patch Changes

- @pnpm/client@2.0.24

## 2.5.3

### Patch Changes

- @pnpm/client@2.0.23
- @pnpm/config@11.14.0
- @pnpm/cli-utils@0.5.2

## 2.5.2

### Patch Changes

- Updated dependencies [3be2b1773]
  - @pnpm/cli-utils@0.5.1

## 2.5.1

### Patch Changes

- @pnpm/client@2.0.22

## 2.5.0

### Minor Changes

- `pnpm publish -r --force` publishes packages even if their current version is already in the registry.

## 2.4.3

### Patch Changes

- 249c068dd: add pref to pick registries
- Updated dependencies [cb040ae18]
- Updated dependencies [249c068dd]
  - @pnpm/cli-utils@0.5.0
  - @pnpm/config@11.14.0
  - @pnpm/pick-registry-for-package@1.1.0

## 2.4.2

### Patch Changes

- Updated dependencies [c4cc62506]
  - @pnpm/config@11.13.0
  - @pnpm/cli-utils@0.4.51
  - @pnpm/exportable-manifest@1.2.2
  - @pnpm/client@2.0.21

## 2.4.1

### Patch Changes

- cc39fc8ad: fix: remove --publish-branch with branch name to npm publish args
- Updated dependencies [bff84dbca]
  - @pnpm/config@11.12.1
  - @pnpm/cli-utils@0.4.50

## 2.4.0

### Minor Changes

- ff6129041: feat: print an info message when there's nothing new to publish recursively

### Patch Changes

- @pnpm/cli-utils@0.4.49

## 2.3.15

### Patch Changes

- @pnpm/cli-utils@0.4.48

## 2.3.14

### Patch Changes

- Updated dependencies [9a9bc67d2]
  - @pnpm/lifecycle@9.6.4

## 2.3.13

### Patch Changes

- Updated dependencies [9ad8c27bf]
- Updated dependencies [548f28df9]
- Updated dependencies [548f28df9]
  - @pnpm/types@6.4.0
  - @pnpm/cli-utils@0.4.47
  - @pnpm/config@11.12.0
  - @pnpm/exportable-manifest@1.2.1
  - @pnpm/lifecycle@9.6.3
  - @pnpm/pick-registry-for-package@1.0.6
  - @pnpm/resolver-base@7.1.1
  - @pnpm/sort-packages@1.0.16
  - @pnpm/client@2.0.20

## 2.3.12

### Patch Changes

- @pnpm/config@11.11.1
- @pnpm/cli-utils@0.4.46

## 2.3.11

### Patch Changes

- Updated dependencies [c854f8547]
  - @pnpm/exportable-manifest@1.2.0

## 2.3.10

### Patch Changes

- 6af60416c: add 'main' to default publish branch

## 2.3.9

### Patch Changes

- Updated dependencies [f40bc5927]
  - @pnpm/config@11.11.0
  - @pnpm/cli-utils@0.4.45

## 2.3.8

### Patch Changes

- Updated dependencies [425c7547d]
  - @pnpm/config@11.10.2
  - @pnpm/cli-utils@0.4.44
  - @pnpm/client@2.0.19

## 2.3.7

### Patch Changes

- Updated dependencies [ea09da716]
  - @pnpm/config@11.10.1
  - @pnpm/cli-utils@0.4.43

## 2.3.6

### Patch Changes

- Updated dependencies [a8656b42f]
  - @pnpm/config@11.10.0
  - @pnpm/cli-utils@0.4.42

## 2.3.5

### Patch Changes

- Updated dependencies [041537bc3]
  - @pnpm/config@11.9.1
  - @pnpm/cli-utils@0.4.41

## 2.3.4

### Patch Changes

- @pnpm/client@2.0.18

## 2.3.3

### Patch Changes

- @pnpm/client@2.0.17

## 2.3.2

### Patch Changes

- @pnpm/client@2.0.16

## 2.3.1

### Patch Changes

- Updated dependencies [8698a7060]
  - @pnpm/config@11.9.0
  - @pnpm/resolver-base@7.1.0
  - @pnpm/cli-utils@0.4.40
  - @pnpm/client@2.0.15

## 2.3.0

### Minor Changes

- 084614f55: Support aliases to workspace packages. For instance, `"foo": "workspace:bar@*"` will link bar from the repository but aliased to foo. Before publish, these specs are converted to regular aliased versions.

### Patch Changes

- Updated dependencies [284e95c5e]
- Updated dependencies [084614f55]
- Updated dependencies [fcc1c7100]
  - @pnpm/exportable-manifest@1.1.0
  - @pnpm/config@11.8.0
  - @pnpm/cli-utils@0.4.39
  - @pnpm/client@2.0.14

## 2.2.16

### Patch Changes

- Updated dependencies [0c5f1bcc9]
  - @pnpm/error@1.4.0
  - @pnpm/client@2.0.13
  - @pnpm/cli-utils@0.4.38
  - @pnpm/config@11.7.2
  - @pnpm/exportable-manifest@1.0.8
  - @pnpm/lifecycle@9.6.2

## 2.2.15

### Patch Changes

- 09492b7b4: Update write-file-atomic to v3.
  - @pnpm/cli-utils@0.4.37
  - @pnpm/exportable-manifest@1.0.7
  - @pnpm/client@2.0.12

## 2.2.14

### Patch Changes

- @pnpm/client@2.0.11
- @pnpm/cli-utils@0.4.36
- @pnpm/exportable-manifest@1.0.6

## 2.2.13

### Patch Changes

- @pnpm/client@2.0.10

## 2.2.12

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/types@6.3.1
  - @pnpm/cli-utils@0.4.35
  - @pnpm/config@11.7.1
  - @pnpm/exportable-manifest@1.0.5
  - @pnpm/lifecycle@9.6.1
  - @pnpm/pick-registry-for-package@1.0.5
  - @pnpm/resolver-base@7.0.5
  - @pnpm/sort-packages@1.0.15
  - @pnpm/client@2.0.9

## 2.2.11

### Patch Changes

- Updated dependencies [50b360ec1]
  - @pnpm/config@11.7.0
  - @pnpm/lifecycle@9.6.0
  - @pnpm/cli-utils@0.4.34

## 2.2.10

### Patch Changes

- Updated dependencies [d54043ee4]
  - @pnpm/types@6.3.0
  - @pnpm/cli-utils@0.4.33
  - @pnpm/config@11.6.1
  - @pnpm/exportable-manifest@1.0.4
  - @pnpm/lifecycle@9.5.1
  - @pnpm/pick-registry-for-package@1.0.4
  - @pnpm/resolver-base@7.0.4
  - @pnpm/sort-packages@1.0.14
  - @pnpm/client@2.0.8

## 2.2.9

### Patch Changes

- Updated dependencies [f591fdeeb]
- Updated dependencies [f591fdeeb]
- Updated dependencies [f591fdeeb]
- Updated dependencies [3a83db407]
  - @pnpm/config@11.6.0
  - @pnpm/lifecycle@9.5.0
  - @pnpm/client@2.0.7
  - @pnpm/cli-utils@0.4.32

## 2.2.8

### Patch Changes

- @pnpm/cli-utils@0.4.31
- @pnpm/exportable-manifest@1.0.3
- @pnpm/client@2.0.6

## 2.2.7

### Patch Changes

- 5351791f6: Added more info to the Git check error hint.

## 2.2.6

### Patch Changes

- Updated dependencies [74914c178]
  - @pnpm/config@11.5.0
  - @pnpm/cli-utils@0.4.30

## 2.2.5

### Patch Changes

- Updated dependencies [203e65ac8]
  - @pnpm/lifecycle@9.4.0
  - @pnpm/client@2.0.5

## 2.2.4

### Patch Changes

- 892e2b155: The order of Git checks is changed. The branch is checked after the cleannes check.
- Updated dependencies [23cf3c88b]
  - @pnpm/config@11.4.0
  - @pnpm/lifecycle@9.3.0
  - @pnpm/cli-utils@0.4.29

## 2.2.3

### Patch Changes

- @pnpm/client@2.0.4

## 2.2.2

### Patch Changes

- Updated dependencies [767212f4e]
- Updated dependencies [092f8dd83]
  - @pnpm/config@11.3.0
  - @pnpm/cli-utils@0.4.28

## 2.2.1

### Patch Changes

- @pnpm/client@2.0.3
- @pnpm/lifecycle@9.2.5
- @pnpm/cli-utils@0.4.27

## 2.2.0

### Minor Changes

- 273f11af4: More information added to the Git check errors and prompt.

### Patch Changes

- @pnpm/client@2.0.2

## 2.1.21

### Patch Changes

- @pnpm/cli-utils@0.4.26

## 2.1.20

### Patch Changes

- Updated dependencies [75a36deba]
- Updated dependencies [9f1a29ff9]
  - @pnpm/error@1.3.1
  - @pnpm/config@11.2.7
  - @pnpm/cli-utils@0.4.25
  - @pnpm/exportable-manifest@1.0.2
  - @pnpm/client@2.0.1
  - @pnpm/lifecycle@9.2.4

## 2.1.19

### Patch Changes

- Updated dependencies [ac0d3e122]
  - @pnpm/config@11.2.6
  - @pnpm/cli-utils@0.4.24

## 2.1.18

### Patch Changes

- Updated dependencies [855f8b00a]
- Updated dependencies [972864e0d]
- Updated dependencies [a1cdae3dc]
  - @pnpm/client@2.0.0
  - @pnpm/config@11.2.5
  - @pnpm/lifecycle@9.2.3
  - @pnpm/cli-utils@0.4.23

## 2.1.17

### Patch Changes

- 69a675f41: `pnpm publish -r` should not publish packages with `pnpm-temp` distribution tag.
- Updated dependencies [6d480dd7a]
- Updated dependencies [6d480dd7a]
  - @pnpm/error@1.3.0
  - @pnpm/npm-resolver@9.1.0
  - @pnpm/cli-utils@0.4.22
  - @pnpm/config@11.2.4
  - @pnpm/exportable-manifest@1.0.1
  - @pnpm/fetch@2.1.3

## 2.1.16

### Patch Changes

- Updated dependencies [13c18e397]
  - @pnpm/config@11.2.3
  - @pnpm/cli-utils@0.4.21

## 2.1.15

### Patch Changes

- Updated dependencies [3f6d35997]
  - @pnpm/config@11.2.2
  - @pnpm/cli-utils@0.4.20

## 2.1.14

### Patch Changes

- Updated dependencies [edf1f412e]
  - @pnpm/exportable-manifest@1.0.0

## 2.1.13

### Patch Changes

- @pnpm/read-project-manifest@1.0.11
- @pnpm/cli-utils@0.4.19

## 2.1.12

### Patch Changes

- Updated dependencies [3bd3253e3]
  - @pnpm/read-project-manifest@1.0.10
  - @pnpm/cli-utils@0.4.18

## 2.1.11

### Patch Changes

- a2ef8084f: Use the same versions of dependencies across the pnpm monorepo.
- 2a41ce95c: peerDependencies workspace substitution
- Updated dependencies [622c0b6f9]
- Updated dependencies [a2ef8084f]
  - @pnpm/npm-resolver@9.0.2
  - @pnpm/config@11.2.1
  - @pnpm/lifecycle@9.2.2
  - @pnpm/run-npm@2.0.3
  - @pnpm/cli-utils@0.4.17

## 2.1.10

### Patch Changes

- d44ff97f8: `pnpm publish -r --dry-run` should not publish anything to the registry.

## 2.1.9

### Patch Changes

- Updated dependencies [ad69677a7]
  - @pnpm/cli-utils@0.4.16
  - @pnpm/config@11.2.0

## 2.1.8

### Patch Changes

- @pnpm/fetch@2.1.2
- @pnpm/lifecycle@9.2.1
- @pnpm/npm-resolver@9.0.1
- @pnpm/cli-utils@0.4.15

## 2.1.7

### Patch Changes

- 7b98d16c8: Update lru-cache to v6
- Updated dependencies [379cdcaf8]
- Updated dependencies [65b4d07ca]
- Updated dependencies [ab3b8f51d]
  - @pnpm/npm-resolver@9.0.1
  - @pnpm/config@11.1.0
  - @pnpm/cli-utils@0.4.14
  - @pnpm/fetch@2.1.1

## 2.1.6

### Patch Changes

- Updated dependencies [76aaead32]
  - @pnpm/lifecycle@9.2.0

## 2.1.5

### Patch Changes

- @pnpm/config@11.0.1
- @pnpm/cli-utils@0.4.13

## 2.1.4

### Patch Changes

- Updated dependencies [71aeb9a38]
- Updated dependencies [71aeb9a38]
- Updated dependencies [71aeb9a38]
- Updated dependencies [915828b46]
  - @pnpm/config@11.0.0
  - @pnpm/fetch@2.1.0
  - @pnpm/npm-resolver@9.0.0
  - @pnpm/cli-utils@0.4.12

## 2.1.3

### Patch Changes

- @pnpm/config@10.0.1
- @pnpm/cli-utils@0.4.11

## 2.1.2

### Patch Changes

- Updated dependencies [db17f6f7b]
- Updated dependencies [1146b76d2]
- Updated dependencies [db17f6f7b]
  - @pnpm/config@10.0.0
  - @pnpm/types@6.2.0
  - @pnpm/cli-utils@0.4.10
  - @pnpm/lifecycle@9.1.3
  - @pnpm/npm-resolver@8.1.2
  - @pnpm/pick-registry-for-package@1.0.3
  - @pnpm/read-project-manifest@1.0.9
  - @pnpm/resolver-base@7.0.3
  - @pnpm/sort-packages@1.0.13

## 2.1.1

### Patch Changes

- 1520e3d6f: Update fast-glob to v3.2.4

## 2.1.0

### Minor Changes

- 6808c43fa: Don't request the full metadata just for getting the list of published versions.

### Patch Changes

- Updated dependencies [71a8c8ce3]
- Updated dependencies [71a8c8ce3]
  - @pnpm/types@6.1.0
  - @pnpm/config@9.2.0
  - @pnpm/cli-utils@0.4.9
  - @pnpm/lifecycle@9.1.2
  - @pnpm/npm-resolver@8.1.1
  - @pnpm/pick-registry-for-package@1.0.2
  - @pnpm/read-project-manifest@1.0.8
  - @pnpm/resolver-base@7.0.2
  - @pnpm/sort-packages@1.0.12

## 2.0.4

### Patch Changes

- Updated dependencies [57c510f00]
- Updated dependencies [e934b1a48]
  - @pnpm/read-project-manifest@1.0.7
  - @pnpm/cli-utils@0.4.8

## 2.0.3

### Patch Changes

- Updated dependencies [4cf7ef367]
- Updated dependencies [d3ddd023c]
- Updated dependencies [68d8dc68f]
  - @pnpm/npm-resolver@8.1.0
  - @pnpm/lifecycle@9.1.1
  - @pnpm/cli-utils@0.4.7

## 2.0.2

### Patch Changes

- @pnpm/npm-resolver@8.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [c56438567]
- Updated dependencies [ffddf34a8]
- Updated dependencies [8094b2a62]
  - @pnpm/run-npm@2.0.2
  - @pnpm/config@9.1.0
  - @pnpm/lifecycle@9.1.0
  - @pnpm/cli-utils@0.4.6
  - @pnpm/sort-packages@1.0.11

## 2.0.0

### Major Changes

- 4063f1bee: Git checks are on by default.

### Patch Changes

- Updated dependencies [242cf8737]
- Updated dependencies [5bc033c43]
- Updated dependencies [da091c711]
- Updated dependencies [f35a3ec1c]
- Updated dependencies [e11019b89]
- Updated dependencies [802d145fc]
- Updated dependencies [45fdcfde2]
- Updated dependencies [f453a5f46]
- Updated dependencies [e3990787a]
  - @pnpm/config@9.0.0
  - @pnpm/npm-resolver@8.0.0
  - @pnpm/types@6.0.0
  - @pnpm/lifecycle@9.0.0
  - @pnpm/cli-utils@0.4.5
  - @pnpm/error@1.2.1
  - @pnpm/pick-registry-for-package@1.0.1
  - @pnpm/read-project-manifest@1.0.6
  - @pnpm/resolver-base@7.0.1
  - @pnpm/run-npm@2.0.2
  - @pnpm/sort-packages@1.0.10

## 2.0.0-alpha.4

### Patch Changes

- Updated dependencies [242cf8737]
- Updated dependencies [45fdcfde2]
  - @pnpm/config@9.0.0-alpha.2
  - @pnpm/cli-utils@0.4.5-alpha.2
  - @pnpm/sort-packages@1.0.10-alpha.2

## 2.0.0-alpha.3

### Patch Changes

- Updated dependencies [da091c71]
- Updated dependencies [e3990787]
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/lifecycle@9.0.0-alpha.1
  - @pnpm/cli-utils@0.4.5-alpha.1
  - @pnpm/config@8.3.1-alpha.1
  - @pnpm/npm-resolver@7.3.12-alpha.2
  - @pnpm/pick-registry-for-package@1.0.1-alpha.0
  - @pnpm/read-project-manifest@1.0.6-alpha.0
  - @pnpm/resolver-base@7.0.1-alpha.0
  - @pnpm/sort-packages@1.0.10-alpha.1

## 2.0.0-alpha.2

### Patch Changes

- Updated dependencies [5bc033c43]
  - @pnpm/npm-resolver@8.0.0-alpha.1
  - @pnpm/config@8.3.1-alpha.0
  - @pnpm/cli-utils@0.4.5-alpha.0
  - @pnpm/sort-packages@1.0.10-alpha.0

## 1.0.12-alpha.1

### Patch Changes

- Updated dependencies [f35a3ec1c]
- Updated dependencies [f453a5f46]
  - @pnpm/lifecycle@8.2.0-alpha.0
  - @pnpm/npm-resolver@7.3.12-alpha.0

## 2.0.0-alpha.0

### Major Changes

- 4063f1bee: Git checks are on by default.

## 1.0.12

### Patch Changes

- Updated dependencies [2ec4c4eb9]
  - @pnpm/lifecycle@8.2.0

## 1.0.11

### Patch Changes

- 907c63a48: Update `@pnpm/store-path`.
- 907c63a48: Dependencies updated.
  - @pnpm/read-project-manifest@1.0.5
  - @pnpm/cli-utils@0.4.4
