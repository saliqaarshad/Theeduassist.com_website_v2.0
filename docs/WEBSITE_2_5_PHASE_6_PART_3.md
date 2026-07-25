# Website 2.5 Phase 6 Part 3 Readiness
- Created `src/data/organizationEntity.ts` for single source of truth.
- Updated `src/lib/seo/schema.ts` to use `organizationEntity.ts`.
- Updated `public/robots.txt` to handle `OAI-SearchBot` and `PerplexityBot` for AI discovery, while blocking `GPTBot`.
- Added validators for Entities, AI Crawlers, and Answer Readiness.
