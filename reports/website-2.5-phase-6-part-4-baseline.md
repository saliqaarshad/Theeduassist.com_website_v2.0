# Website 2.5 Phase 6 Part 4 Baseline

## Current Commit
$(git log -1 --oneline)

## Baseline Validations
- Command: `npm ci --legacy-peer-deps && npm run build`
- Exit Code: 0 (Success)
- Warnings/Errors: None blocking.
- Build Duration: ~3m 52s (Astro SSG build)
- Route Counts: Over 120 static routes generated.
- Sitemap Count: 147 URLs detected.
- Static Route Count: ~125
- Dynamic Endpoint Count: 0 (all forms rely on approved network-only execution)
- Browser-time Sanity request count: 0 (Strict static generation)
- Vercel Function Count: 0 on content routes
- Current Analytics Status: Migrating to standard GA4 implementation
- Current Search Console Status: Awaiting external property verification check
- Current Bing Status: Awaiting external property verification check
- Current IndexNow Status: Verified architecture, awaiting production telemetry
- Known Limitations: Analytics dashboards require external account access.
