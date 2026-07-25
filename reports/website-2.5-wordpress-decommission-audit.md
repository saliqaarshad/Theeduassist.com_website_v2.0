# WordPress Decommission Audit

Checking why some old non-www WordPress routes might remain available:
- Vercel `vercel.json` already has `trailingSlash: true` and redirect for non-www.
- Legacy URLs map to `_redirects` which handles mapping old WP routes to the new site.
- The `src/data/redirects.ts` does not contain all the missing redirects from the instructions, such as `/ebook-services/` mapping to `/services/content-conversion/` or 410 for tags.
- For 410 redirects, we'll need to define a rule in Astro or simply configure vercel.json or the redirects.ts (if it supports 410s).
- Need to update `src/data/redirects.ts` with correct maps and vercel.json.
- Recommend decommissioning WordPress once the redirects are tested.
