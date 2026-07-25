# Website 2.5 Operations Runbook

## DAILY OR AUTOMATED

### Deployment Status and Production Availability
- **Purpose**: Ensure the production website is successfully deployed and returning valid responses.
- **Data Source**: Vercel Dashboard / automated HTTP status checks.
- **Owner**: Technical Owner
- **Steps**:
  1. Check Vercel deployments dashboard for failed builds.
  2. Verify 200 OK statuses on core routes.
- **Expected Outcome**: All deployments green; routes return 200.
- **Failure Action**: Investigate build logs, revert commit if necessary.
- **Escalation**: Notify Technical Owner immediately.
- **Documentation Location**: `docs/DEPLOYMENT.md`

### Function Failures and Form Endpoint Failures
- **Purpose**: Ensure serverless functions (like forms) execute without errors.
- **Data Source**: Vercel Observability logs.
- **Owner**: Technical Owner
- **Steps**: Review function execution logs for exceptions or timeouts.
- **Expected Outcome**: Zero unexpected function errors.
- **Failure Action**: Debug failing function logic or form delivery integration.
- **Escalation**: Notify Technical Owner.
- **Documentation Location**: `docs/WEBSITE_2_5_OPERATIONS_RUNBOOK.md`

### Critical Security Alerts
- **Purpose**: Prevent and handle security vulnerabilities.
- **Data Source**: GitHub Dependabot / NPM Audit / Vercel Firewall.
- **Owner**: Security Owner
- **Steps**: Monitor alerts dashboard daily.
- **Expected Outcome**: Zero unresolved critical security vulnerabilities.
- **Failure Action**: Patch dependency or apply required mitigation immediately.
- **Escalation**: Notify Security Owner and Business Approver.
- **Documentation Location**: `docs/WEBSITE_2_5_OPERATIONS_RUNBOOK.md`


## WEEKLY

### Sitemap and Robots Validation
- **Purpose**: Ensure search engine crawlers receive correct instructions and valid URLs.
- **Data Source**: `validate:sitemap` and `validate:robots` scripts.
- **Owner**: SEO Owner
- **Steps**: Run local validators or check CI pipeline results.
- **Expected Outcome**: Scripts exit cleanly; no duplicate or 404 URLs in sitemap; no unexpected disallows.
- **Failure Action**: Fix routing or crawler configuration.
- **Escalation**: Notify SEO Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-sitemap-robots-monitoring.md`

### Search Console Indexing Exceptions
- **Purpose**: Identify pages that Google refuses to index.
- **Data Source**: Google Search Console (Page Indexing report).
- **Owner**: SEO Owner
- **Steps**: Review "Crawled - currently not indexed" and "Discovered - currently not indexed".
- **Expected Outcome**: Minimal high-value pages excluded.
- **Failure Action**: Diagnose content quality, canonicalization, or internal linking issues.
- **Escalation**: Notify SEO Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-google-indexation.md`

### Bing Crawl Exceptions
- **Purpose**: Identify pages Bing refuses to index or has trouble crawling.
- **Data Source**: Bing Webmaster Tools.
- **Owner**: SEO Owner
- **Steps**: Review crawl error reports.
- **Expected Outcome**: Minimal crawl blocks.
- **Failure Action**: Resolve server errors or blocks specific to Bingbot.
- **Escalation**: Notify SEO Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-bing-performance.md`

### Function Anomalies
- **Purpose**: Ensure dynamic rendering is strictly limited to approved forms, keeping the site static.
- **Data Source**: Vercel Usage Analytics.
- **Owner**: Technical Owner
- **Steps**: Check function invocation paths.
- **Expected Outcome**: Only form/API endpoints show invocation counts.
- **Failure Action**: Investigate accidental SSR conversion of content routes.
- **Escalation**: Notify Technical Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-function-monitoring.md`

### Sanity Build Failures
- **Purpose**: Ensure content publishing triggers successful site updates.
- **Data Source**: Vercel Deployments (triggered by Sanity Webhooks).
- **Owner**: Sanity Publishing Owner
- **Steps**: Check build history after recent publications.
- **Expected Outcome**: Green builds matching content publication timestamps.
- **Failure Action**: Diagnose schema validation or query failures breaking the build.
- **Escalation**: Notify Content Owner and Technical Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-sanity-publishing.md`


## MONTHLY

### Search Performance and Generative-AI Visibility
- **Purpose**: Evaluate organic search trends and emerging AI overview impact.
- **Data Source**: Google Search Console / GA4.
- **Owner**: SEO Owner
- **Steps**: Compare clicks/impressions against baseline; check for Generative AI reports.
- **Expected Outcome**: Stable or growing search visibility.
- **Failure Action**: Plan content improvements for declining pages.
- **Escalation**: Discuss in Monthly Review.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-google-search-performance.md`

### Organic Conversions and AI Referrals
- **Purpose**: Track business impact of organic search and AI assistant traffic.
- **Data Source**: Google Analytics 4 (Key Events).
- **Owner**: Analytics Owner
- **Steps**: Review conversion counts and filter by organic/AI referral classifications.
- **Expected Outcome**: Accurate tracking without duplicate events.
- **Failure Action**: Re-verify GA4 tags and referral hostname patterns.
- **Escalation**: Notify Analytics Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-ai-referrals.md`

### Core Web Vitals
- **Purpose**: Maintain fast, user-friendly page experience.
- **Data Source**: PageSpeed Insights (CrUX data) / Search Console.
- **Owner**: Technical Owner
- **Steps**: Review LCP, INP, CLS for major page groups (Homepage, Services, Blog).
- **Expected Outcome**: Passing Core Web Vitals ("Good" status).
- **Failure Action**: Identify and optimize slow assets or main-thread bottlenecks.
- **Escalation**: Notify Technical Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-core-web-vitals.md`

### Content-Freshness Actions
- **Purpose**: Ensure legacy content is updated or deprecated.
- **Data Source**: Sanity CMS Review Schedule.
- **Owner**: Content Owner
- **Steps**: Execute required 6-month or annual reviews.
- **Expected Outcome**: Stale articles updated with current platform/industry info.
- **Failure Action**: Assign content update tasks.
- **Escalation**: Notify Content Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-content-review-calendar.md`

### Vercel Usage and Indexed URL Trends
- **Purpose**: Monitor infrastructure usage and total index size.
- **Data Source**: Vercel Dashboard / Google Search Console.
- **Owner**: Technical Owner
- **Steps**: Review bandwidth, cache hit rates, and total indexed pages graph.
- **Expected Outcome**: High cache hit rate; stable indexed page count.
- **Failure Action**: Investigate cache bypasses or mass deindexation.
- **Escalation**: Notify Technical Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-vercel-observability.md`


## QUARTERLY

### Strategy Updates (Topic Clusters, Demand Generation)
- **Purpose**: Align website content with business goals.
- **Data Source**: Business strategy documents / Service demand data.
- **Owner**: Business Approver / SEO Owner
- **Steps**: Review enterprise and service leads; adjust topic cluster focus.
- **Expected Outcome**: Updated editorial calendar.
- **Failure Action**: Revise strategy if leads fall below target.
- **Escalation**: Leadership Review.
- **Documentation Location**: (Internal Strategy Docs)

### Platform and Dependency Changes
- **Purpose**: Keep software stack modern and secure.
- **Data Source**: NPM Outdated / Astro changelogs.
- **Owner**: Technical Owner
- **Steps**: Plan and execute minor/major version upgrades.
- **Expected Outcome**: Clean dependency tree without deprecated packages.
- **Failure Action**: Create tech debt tickets.
- **Escalation**: Notify Technical Owner.
- **Documentation Location**: `docs/DEPLOYMENT.md`

### Crawler Policy and Security Review
- **Purpose**: Ensure AI crawlers and overall site security align with policies.
- **Data Source**: `robots.txt` / Security Audit logs.
- **Owner**: Security Owner / SEO Owner
- **Steps**: Review allowed/disallowed agents; audit access controls.
- **Expected Outcome**: Only approved bots allowed; no unauthorized data exposure.
- **Failure Action**: Update robots.txt or security headers.
- **Escalation**: Notify Security Owner.
- **Documentation Location**: `reports/website-2.5-phase-6-part-4-monitoring-ownership.md`
