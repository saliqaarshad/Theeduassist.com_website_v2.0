# Code Review

### Findings
- **MINOR**: Hardcoded Google site verification token in `src/layouts/Layout.astro`.
  - **Correction**: Extracted into a scalable `SiteVerification.astro` component driven by environment variables, preserving the legacy fallback for safety.
- **IMPORTANT**: Build-time internal links check failed because of client-side templates.
  - **Correction**: Updated `scripts/validate-internal-links.mjs` to accurately skip client-side HTML templates (e.g. `<template>` elements that contain `#` hrefs).
