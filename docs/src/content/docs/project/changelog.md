---
title: Changelog
description: Release history for RepoWidget.
---

All notable changes to RepoWidget are documented here.

## v1.1.0

- Added `exclude` option — pass an array of repository names to hide specific repos from the output.
- Improved caching: API responses are stored in `sessionStorage` to reduce redundant GitHub API calls within the same browser session.
- Fixed column layout not updating correctly when `columns` object properties were partially specified.

## v1.0.0

Initial public release.

- `createRepoWidget()` function with `username`, `containerId`, `maxRepos`, `sortBy`, `columns`, `scaleOnHover`, `cardStyles`, and `textStyles` options.
- Responsive CSS Grid layout with configurable breakpoints.
- Sorting by stars, forks, size, name, and last-updated date.
- CDN and npm package distribution.
- ES module build (`repoWidget.esm.js`) alongside the UMD build.
