# IndexNow Configuration

- **Key-file Path:** `/b50f16bdf5ffe352f6c93e5bcdfdd691.txt`
- **Key-file Response:** Valid (HTTP 200, text/plain)
- **Validator Result:** Passed.
- **Dry-run Result:** Ready to be executed safely via `npm run indexnow:submit`.
- **Live Submission Result:** Pending controlled dry-run and verification.
- **Endpoint:** `api.indexnow.org`
- **Response Code:** Pending.
- **Submitted Count:** 0 (initial baseline).
- **Rejected Count:** 0 (initial baseline).
- **Changed-URL Source:** Internal manifest (`reports/website-2.5-phase-6-part-2-submission-manifest.json`).
- **Automation Decision:** Fully manual invocation for safety. No automatic deployment hooks.
- **Retry Policy:** Single failure notification, no infinite retries.
- **Limitations:** Limited to max 10,000 URLs per batch as per IndexNow spec. Excludes redirects, noindex routes, and system endpoints.
