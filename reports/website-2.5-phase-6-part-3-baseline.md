# Phase 6 Part 3 Baseline
?? reports/website-2.5-phase-6-part-3-baseline.md

> theeduassist@1.0.0 validate:robots
> node scripts/validate-robots.mjs

Validating robots.txt...
✅ robots.txt passes validation.

> theeduassist@1.0.0 validate:canonicals
> node scripts/validate-canonicals.mjs

Validating Canonicals...
✅ Canonical URLs validated successfully.

> theeduassist@1.0.0 validate:http
> node scripts/validate-http-statuses.mjs

Ensure the app is running on port 4321 before running this script.
Validating HTTP Statuses on http://localhost:4321 ...
Error requesting /:
❌ Expected 200/301 for /, got 0
Error requesting /services/:
❌ Expected 200/301 for /services/, got 0
Error requesting /blog/:
❌ Expected 200/301 for /blog/, got 0
Error requesting /robots.txt:
❌ Expected 200/301 for /robots.txt, got 0
Error requesting /sitemap.xml:
❌ Expected 200/301 for /sitemap.xml, got 0
Error requesting /rss.xml:
❌ Expected 200/301 for /rss.xml, got 0
Error requesting /blog/this-is-a-fake-article-that-does-not-exist/:
❌ Expected 404 for missing route /blog/this-is-a-fake-article-that-does-not-exist/, got 0
Error requesting /authors/fake-author-does-not-exist/:
❌ Expected 404 for missing route /authors/fake-author-does-not-exist/, got 0
Error requesting /category/fake-category-does-not-exist/:
❌ Expected 404 for missing route /category/fake-category-does-not-exist/, got 0
Error requesting /locations/fake-location-does-not-exist/:
❌ Expected 404 for missing route /locations/fake-location-does-not-exist/, got 0
🚨 HTTP Status validation failed.

> theeduassist@1.0.0 validate:crawl
> node scripts/validate-crawl-readiness.mjs

Testing Crawler Parity (Mobile vs Desktop) and Image Crawlability...
node:internal/process/promises:394
    triggerUncaughtException(err, true /* fromPromise */);
    ^

browserType.launch: Executable doesn't exist at /home/jules/.cache/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
    at validateCrawlReadiness (/app/scripts/validate-crawl-readiness.mjs:12:34)
    at /app/scripts/validate-crawl-readiness.mjs:83:1 {
  log: [],
  name: 'Error'
}

Node.js v22.22.1

> theeduassist@1.0.0 validate:sitemap
> node scripts/validate-sitemap.mjs


🎉 Sitemap validation passed.

> theeduassist@1.0.0 validate:internal-links
> node scripts/validate-internal-links.mjs


🎉 Internal link validation passed.

> theeduassist@1.0.0 validate:redirects
> node scripts/validate-redirects.mjs

Redirects validated successfully.

> theeduassist@1.0.0 validate:metadata
> node scripts/validate-metadata.mjs


🎉 Metadata validation passed.

> theeduassist@1.0.0 validate:structured-data
> node scripts/validate-structured-data.mjs


🎉 Structured data validation passed.

> theeduassist@1.0.0 validate:blog-content
> node scripts/validate-blog-content.mjs

✅ Blog content validation passed.

> theeduassist@1.0.0 validate:blog-orphans
> node scripts/validate-blog-orphans.mjs

Validating blog orphans...
✅ Blog orphans validated successfully.

> theeduassist@1.0.0 validate:phase5
> node scripts/validate-phase5-complete.mjs

Validating Phase 5 Complete...
✅ Phase 5 complete validated successfully.

> theeduassist@1.0.0 validate:indexnow
> node scripts/validate-indexnow.mjs

Validating IndexNow Architecture...

🎉 IndexNow validation passed.

> theeduassist@1.0.0 validate:webmaster-platforms
> node scripts/validate-webmaster-platforms.mjs

Validating Webmaster Platforms Architecture...

🎉 Webmaster Platforms validation passed.
17:37:11 [types] Generated 124ms
17:37:11 [check] Getting diagnostics for Astro files in /app...
[96msrc/components/about/AboutContactCTA.astro[0m:[93m2[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'SectionHeader' is declared but its value is never read.

[7m2[0m import SectionHeader from '../ui/SectionHeader.astro';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/about/AboutHero.astro[0m:[93m64[0m:[93m30[0m - [93mwarning[0m[90m ts(6133): [0m'i' is declared but its value is never read.

[7m64[0m                 ].map((node, i) => {
[7m  [0m [93m                             ~[0m

[96msrc/components/ai/PersistentAIBottomBar.astro[0m:[93m7[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'secondaryAssistants' is declared but its value is never read.

[7m7[0m const secondaryAssistants = aiAssistants.filter(ai => !primaryAIs.includes(ai.id));
[7m [0m [93m      ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/ai/PersistentAIBottomBar.astro[0m:[93m6[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'primaryAssistants' is declared but its value is never read.

[7m6[0m const primaryAssistants = aiAssistants.filter(ai => primaryAIs.includes(ai.id));
[7m [0m [93m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/ai/PersistentAIBottomBar.astro[0m:[93m148[0m:[93m15[0m - [93mwarning[0m[90m ts(6133): [0m'isDesktop' is declared but its value is never read.

[7m148[0m         const isDesktop = window.innerWidth >= 768;
[7m   [0m [93m              ~~~~~~~~~[0m

[96msrc/components/audit/AuditBookingPanel.astro[0m:[93m52[0m:[93m64[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "primary"; class: string; target: string; rel: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m52[0m             <Button href="/book-free-audit/" variant="primary" class="w-full justify-center text-lg py-3" target="_blank" rel="noopener noreferrer">
[7m  [0m [91m                                                               ~~~~~[0m
[96msrc/components/audit/AuditBookingPanel.astro[0m:[93m3[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'SectionHeader' is declared but its value is never read.

[7m3[0m import SectionHeader from '../ui/SectionHeader.astro';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/audit/AuditFinalCTA.astro[0m:[93m17[0m:[93m58[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "primary"; class: string; target: string; rel: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m17[0m       <Button href="/book-free-audit/" variant="primary" class="text-lg px-8 py-4" target="_blank" rel="noopener noreferrer">
[7m  [0m [91m                                                         ~~~~~[0m

[96msrc/components/audit/AuditHero.astro[0m:[93m33[0m:[93m67[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "outline"; size: "lg"; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m33[0m       <Button href={secondaryCtaLink} variant="outline" size="lg" class="bg-white/5 text-white border-white/20 hover:bg-white/10">{secondaryCtaLabel}</Button>
[7m  [0m [91m                                                                  ~~~~~[0m
[96msrc/components/audit/AuditHero.astro[0m:[93m32[0m:[93m65[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "primary"; size: "lg"; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m32[0m       <Button href={primaryCtaLink} variant="primary" size="lg" class="bg-[#77BA55] border-[#77BA55] hover:bg-green-600">{primaryCtaLabel}</Button>
[7m  [0m [91m                                                                ~~~~~[0m

[96msrc/components/audit/AuditPreparationChecklist.astro[0m:[93m22[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType '{ title: string; subtitle: string; centered: true; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'subtitle' does not exist on type 'IntrinsicAttributes & Props'.

[7m22[0m         subtitle="To get the most out of our 30 minutes, gather these items if you have them."
[7m  [0m [91m        ~~~~~~~~[0m
[96msrc/components/audit/AuditPreparationChecklist.astro[0m:[93m3[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'Card' is declared but its value is never read.

[7m3[0m import Card from '../ui/Card.astro';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/audit/AuditProcessDiagram.astro[0m:[93m48[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ title: string; subtitle: string; centered: true; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'subtitle' does not exist on type 'IntrinsicAttributes & Props'.

[7m48[0m       subtitle="A simple, clear process from booking to practical next steps."
[7m  [0m [91m      ~~~~~~~~[0m

[96msrc/components/audit/AuditValueSection.astro[0m:[93m49[0m:[93m15[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m49[0m         <Card class="h-full hover:-translate-y-1 transition-transform duration-300">
[7m  [0m [91m              ~~~~~[0m
[96msrc/components/audit/AuditValueSection.astro[0m:[93m43[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ title: string; subtitle: string; centered: true; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'subtitle' does not exist on type 'IntrinsicAttributes & Props'.

[7m43[0m       subtitle="A comprehensive look at your e-learning setup to identify gaps and opportunities."
[7m  [0m [91m      ~~~~~~~~[0m

[96msrc/components/audit/AuditWhatYouReceive.astro[0m:[93m2[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'SectionHeader' is declared but its value is never read.

[7m2[0m import SectionHeader from '../ui/SectionHeader.astro';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/audit/AuditWhoItIsFor.astro[0m:[93m20[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ title: string; subtitle: string; centered: true; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'subtitle' does not exist on type 'IntrinsicAttributes & Props'.

[7m20[0m       subtitle="If you relate to any of the following, this free review is built for you."
[7m  [0m [91m      ~~~~~~~~[0m

[96msrc/components/audit/AuditWhyUs.astro[0m:[93m28[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ title: string; subtitle: string; centered: true; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'subtitle' does not exist on type 'IntrinsicAttributes & Props'.

[7m28[0m       subtitle="Honest, practical feedback from e-learning specialists."
[7m  [0m [91m      ~~~~~~~~[0m

[96msrc/components/audit/CalendlyCTA.astro[0m:[93m15[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "primary"; size: "lg"; class: string; target: string; rel: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m15[0m       class="bg-[#77BA55] border-[#77BA55] hover:bg-green-600"
[7m  [0m [91m      ~~~~~[0m

[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m186[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m186[0m         loadMoreBtn.disabled = false;
[7m   [0m [91m                    ~~~~~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m179[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m179[0m           loadMoreBtn.disabled = false;
[7m   [0m [91m                      ~~~~~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m177[0m:[93m11[0m - [91merror[0m[90m ts(18047): [0m'loadMoreBtn.parentElement' is possibly 'null'.

[7m177[0m           loadMoreBtn.parentElement.style.display = 'none';
[7m   [0m [91m          ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m139[0m:[93m25[0m - [91merror[0m[90m ts(7006): [0mParameter 'link' implicitly has an 'any' type.

[7m139[0m           links.forEach(link => link.setAttribute('href', url));
[7m   [0m [91m                        ~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m135[0m:[93m34[0m - [91merror[0m[90m ts(2339): [0mProperty 'content' does not exist on type 'HTMLElement'.

[7m135[0m           const clone = template.content.cloneNode(true);
[7m   [0m [91m                                 ~~~~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m134[0m:[93m23[0m - [91merror[0m[90m ts(7006): [0mParameter 'post' implicitly has an 'any' type.

[7m134[0m         posts.forEach(post => {
[7m   [0m [91m                      ~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m124[0m:[93m19[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m124[0m       loadMoreBtn.disabled = true;
[7m   [0m [91m                  ~~~~~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m120[0m:[93m33[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m120[0m       const lastPage = parseInt(loadMoreBtn.dataset.lastPage, 10);
[7m   [0m [91m                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m119[0m:[93m33[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

[7m119[0m       const nextPage = parseInt(loadMoreBtn.dataset.nextPage, 10);
[7m   [0m [91m                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/blog/AllArticlesGrid.astro[0m:[93m117[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'disabled' does not exist on type 'HTMLElement'.

[7m117[0m       if (loadMoreBtn.disabled) return;
[7m   [0m [91m                      ~~~~~~~~[0m

[96msrc/components/blog/ArticleShareButtons.astro[0m:[93m8[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'encodedTitle' is declared but its value is never read.

[7m8[0m const encodedTitle = encodeURIComponent(title);
[7m [0m [93m      ~~~~~~~~~~~~[0m

[96msrc/components/blog/BlogCard.astro[0m:[93m28[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'displayTags' is declared but its value is never read.

[7m28[0m const displayTags = tags.filter(tag => !hiddenStatuses.includes(tag.toLowerCase()));
[7m  [0m [93m      ~~~~~~~~~~~[0m

[96msrc/components/blog/BlogCategoryCards.astro[0m:[93m18[0m:[93m8[0m - [91merror[0m[90m ts(7005): [0mVariable 'categories' implicitly has an 'any[]' type.

[7m18[0m       {categories.slice(0, 8).map(category => (
[7m  [0m [91m       ~~~~~~~~~~[0m
[96msrc/components/blog/BlogCategoryCards.astro[0m:[93m4[0m:[93m5[0m - [91merror[0m[90m ts(7034): [0mVariable 'categories' implicitly has type 'any[]' in some locations where its type cannot be determined.

[7m4[0m let categories = [];
[7m [0m [91m    ~~~~~~~~~~[0m

[96msrc/components/blog/BlogSearchFilters.astro[0m:[93m96[0m:[93m42[0m - [91merror[0m[90m ts(18046): [0m'tag' is of type 'unknown'.

[7m96[0m                                const t = tag.toLowerCase();
[7m  [0m [91m                                         ~~~[0m

[96msrc/components/blog/BlogTableOfContents.astro[0m:[93m71[0m:[93m39[0m - [93mwarning[0m[90m ts(6133): [0m'e' is declared but its value is never read.

[7m71[0m       link.addEventListener('click', (e) => {
[7m  [0m [93m                                      ~[0m

[96msrc/components/blog/LatestArticles.astro[0m:[93m21[0m:[93m22[0m - [91merror[0m[90m ts(7005): [0mVariable 'posts' implicitly has an 'any[]' type.

[7m21[0m const displayPosts = posts
[7m  [0m [91m                     ~~~~~[0m
[96msrc/components/blog/LatestArticles.astro[0m:[93m8[0m:[93m5[0m - [91merror[0m[90m ts(7034): [0mVariable 'posts' implicitly has type 'any[]' in some locations where its type cannot be determined.

[7m8[0m let posts = [];
[7m [0m [91m    ~~~~~[0m

[96msrc/components/blog/ReadingProgressBar.astro[0m:[93m47[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'readingMilestones' does not exist on type 'Window & typeof globalThis'.

[7m47[0m                    window.readingMilestones.add(milestone);
[7m  [0m [91m                          ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/blog/ReadingProgressBar.astro[0m:[93m46[0m:[93m53[0m - [91merror[0m[90m ts(2339): [0mProperty 'readingMilestones' does not exist on type 'Window & typeof globalThis'.

[7m46[0m                if (progress >= milestone && !window.readingMilestones.has(milestone)) {
[7m  [0m [91m                                                    ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/blog/ReadingProgressBar.astro[0m:[93m42[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'readingMilestones' does not exist on type 'Window & typeof globalThis'.

[7m42[0m                window.readingMilestones = new Set();
[7m  [0m [91m                      ~~~~~~~~~~~~~~~~~[0m
[96msrc/components/blog/ReadingProgressBar.astro[0m:[93m41[0m:[93m24[0m - [91merror[0m[90m ts(2339): [0mProperty 'readingMilestones' does not exist on type 'Window & typeof globalThis'.

[7m41[0m            if (!window.readingMilestones) {
[7m  [0m [91m                       ~~~~~~~~~~~~~~~~~[0m

[96msrc/components/blog/RelatedArticles.astro[0m:[93m48[0m:[93m19[0m - [93mwarning[0m[90m ts(6133): [0m'clusterName' is declared but its value is never read.

[7m48[0m       for (const [clusterName, clusterTags] of Object.entries(topicClusters)) {
[7m  [0m [93m                  ~~~~~~~~~~~[0m

[96msrc/components/blog/RelatedCaseStudies.astro[0m:[93m54[0m:[93m54[0m - [91merror[0m[90m ts(7006): [0mParameter 'service' implicitly has an 'any' type.

[7m54[0m               {study.relatedServices.slice(0, 1).map(service => (
[7m  [0m [91m                                                     ~~~~~~~[0m
[96msrc/components/blog/RelatedCaseStudies.astro[0m:[93m33[0m:[93m18[0m - [91merror[0m[90m ts(7005): [0mVariable 'matchedStudies' implicitly has an 'any[]' type.

[7m33[0m matchedStudies = matchedStudies.slice(0, 3);
[7m  [0m [91m                 ~~~~~~~~~~~~~~[0m
[96msrc/components/blog/RelatedCaseStudies.astro[0m:[93m12[0m:[93m5[0m - [91merror[0m[90m ts(7034): [0mVariable 'matchedStudies' implicitly has type 'any[]' in some locations where its type cannot be determined.

[7m12[0m let matchedStudies = [];
[7m  [0m [91m    ~~~~~~~~~~~~~~[0m

[96msrc/components/case-studies/BeforeAfterFramework.astro[0m:[93m28[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m28[0m <!-- <SectionWrapper --> <section className="bg-slate-50 py-24 border-b border-slate-200">
[7m  [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/CaseStudiesFAQ.astro[0m:[93m33[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m33[0m <!-- <SectionWrapper --> <section className="bg-slate-50 py-24 border-b border-slate-200">
[7m  [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/CaseStudiesFinalCTA.astro[0m:[93m6[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m6[0m <!-- <SectionWrapper --> <section className="bg-[#27496D] py-24">
[7m [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/CaseStudiesHero.astro[0m:[93m6[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m6[0m <!-- <SectionWrapper --> <section className="bg-slate-50 pt-24 pb-16 overflow-hidden">
[7m [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/CaseStudyAnatomy.astro[0m:[93m44[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m44[0m <!-- <SectionWrapper --> <section className="bg-white py-24">
[7m  [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/CaseStudyCategories.astro[0m:[93m17[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m17[0m <!-- <SectionWrapper --> <section className="bg-slate-50 py-12 border-b border-slate-200">
[7m  [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/FeaturedCaseStudy.astro[0m:[93m6[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m6[0m <!-- <SectionWrapper --> <section className="bg-white py-24">
[7m [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/PortfolioGrid.astro[0m:[93m126[0m:[93m20[0m - [91merror[0m[90m ts(2322): [0mType '"secondary"' is not assignable to type '"outline" | "filled" | "pill" | undefined'.

[7m126[0m             <Badge variant="secondary" className="text-brand-accent bg-brand-softGreen border-brand-accent/20 uppercase tracking-wide">
[7m   [0m [91m                   ~~~~~~~[0m

[96msrc/components/case-studies/RealCaseStudyReadiness.astro[0m:[93m6[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m6[0m <!-- <SectionWrapper --> <section className="bg-white py-12 border-b border-slate-200">
[7m [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/ServicesBehindWork.astro[0m:[93m45[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m45[0m <!-- <SectionWrapper --> <section className="bg-white py-24">
[7m  [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/TrustPositioningSection.astro[0m:[93m7[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; className: string; }' is not assignable to type 'HTMLAttributes'.
  Property 'className' does not exist on type 'HTMLAttributes'.

[7m7[0m <!-- <SectionWrapper --> <section className="bg-white py-20 border-b border-slate-100">
[7m [0m [91m                                  ~~~~~~~~~[0m

[96msrc/components/case-studies/real/CaseStudyCTA.astro[0m:[93m2[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'study' is declared but its value is never read.

[7m2[0m const { study } = Astro.props;
[7m [0m [93m      ~~~~~~~~~[0m

[96msrc/components/case-studies/real/RealCaseStudyCards.astro[0m:[93m67[0m:[93m52[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m67[0m               {study.deliverables.slice(0, 3).map((item) => (
[7m  [0m [91m                                                   ~~~~[0m

[96msrc/components/contact/ContactHero.astro[0m:[93m42[0m:[93m67[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "outline"; size: "lg"; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m42[0m       <Button href={secondaryCtaLink} variant="outline" size="lg" class="bg-white/5 text-white border-white/20 hover:bg-white/10">{secondaryCtaLabel}</Button>
[7m  [0m [91m                                                                  ~~~~~[0m

[96msrc/components/contact/ContactOptions.astro[0m:[93m42[0m:[93m53[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "outline"; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m42[0m         <Button href="/services/" variant="outline" class="w-full text-center">View Services & Starting Prices</Button>
[7m  [0m [91m                                                    ~~~~~[0m
[96msrc/components/contact/ContactOptions.astro[0m:[93m28[0m:[93m60[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "primary"; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m28[0m         <Button href="/book-free-audit/" variant="primary" class="w-full text-center">Get 24–48 Hour Review</Button>
[7m  [0m [91m                                                           ~~~~~[0m

[96msrc/components/enterprise/EnterpriseDeliveryLifecycle.astro[0m:[93m19[0m:[93m27[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m19[0m       {phases.map((phase, index) => (
[7m  [0m [93m                          ~~~~~[0m

[96msrc/components/enterprise/EnterpriseFAQ.astro[0m:[93m51[0m:[93m23[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m51[0m       {faqs.map((faq, index) => (
[7m  [0m [93m                      ~~~~~[0m
[96msrc/components/enterprise/EnterpriseFAQ.astro[0m:[93m68[0m:[93m9[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m68[0m <script type="application/ld+json" set:html={JSON.stringify({
[7m  [0m [93m        ~~~~[0m

[96msrc/components/forms/EnterpriseBriefForm.astro[0m:[93m212[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'turnstile' does not exist on type 'Window & typeof globalThis'.

[7m212[0m             window.turnstile.reset();
[7m   [0m [91m                   ~~~~~~~~~[0m
[96msrc/components/forms/EnterpriseBriefForm.astro[0m:[93m211[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'turnstile' does not exist on type 'Window & typeof globalThis'.

[7m211[0m         if (window.turnstile) {
[7m   [0m [91m                   ~~~~~~~~~[0m
[96msrc/components/forms/EnterpriseBriefForm.astro[0m:[93m194[0m:[93m20[0m - [91merror[0m[90m ts(2339): [0mProperty 'turnstile' does not exist on type 'Window & typeof globalThis'.

[7m194[0m             window.turnstile.reset();
[7m   [0m [91m                   ~~~~~~~~~[0m
[96msrc/components/forms/EnterpriseBriefForm.astro[0m:[93m193[0m:[93m22[0m - [91merror[0m[90m ts(2339): [0mProperty 'turnstile' does not exist on type 'Window & typeof globalThis'.

[7m193[0m           if (window.turnstile) {
[7m   [0m [91m                     ~~~~~~~~~[0m

[96msrc/components/forms/TurnstileField.astro[0m:[93m4[0m:[93m9[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m4[0m <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
[7m [0m [93m        ~~~[0m

[96msrc/components/forms/TurnstileWidget.astro[0m:[93m9[0m:[93m13[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m9[0m     <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
[7m [0m [93m            ~~~[0m

[96msrc/components/funnels/FunnelComparison.astro[0m:[93m34[0m:[93m23[0m - [93mwarning[0m[90m ts(6133): [0m'i' is declared but its value is never read.

[7m34[0m           ].map((row, i) => (
[7m  [0m [93m                      ~[0m

[96msrc/components/funnels/FunnelFAQ.astro[0m:[93m45[0m:[93m23[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m45[0m       {faqs.map((faq, index) => (
[7m  [0m [93m                      ~~~~~[0m

[96msrc/components/funnels/FunnelFinalCTA.astro[0m:[93m43[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m43[0m           serviceSlug: target.dataset.serviceSlug || '',
[7m  [0m [91m                              ~~~~~~~[0m
[96msrc/components/funnels/FunnelFinalCTA.astro[0m:[93m43[0m:[93m24[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m43[0m           serviceSlug: target.dataset.serviceSlug || '',
[7m  [0m [91m                       ~~~~~~[0m

[96msrc/components/funnels/FunnelPackages.astro[0m:[93m197[0m:[93m32[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m197[0m           packagePrice: target.dataset.packagePrice || '',
[7m   [0m [91m                               ~~~~~~~[0m
[96msrc/components/funnels/FunnelPackages.astro[0m:[93m197[0m:[93m25[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m197[0m           packagePrice: target.dataset.packagePrice || '',
[7m   [0m [91m                        ~~~~~~[0m
[96msrc/components/funnels/FunnelPackages.astro[0m:[93m196[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m196[0m           packageSlug: target.dataset.packageSlug || '',
[7m   [0m [91m                              ~~~~~~~[0m
[96msrc/components/funnels/FunnelPackages.astro[0m:[93m196[0m:[93m24[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m196[0m           packageSlug: target.dataset.packageSlug || '',
[7m   [0m [91m                       ~~~~~~[0m

[96msrc/components/home/BlogPreview.astro[0m:[93m42[0m:[93m25[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m42[0m       {displayItems.map(item => (
[7m  [0m [91m                        ~~~~[0m

[96msrc/components/home/FeaturedCaseStudies.astro[0m:[93m87[0m:[93m16[0m - [91merror[0m[90m ts(18047): [0m'study' is possibly 'null'.

[7m87[0m               {study.summary}
[7m  [0m [91m               ~~~~~[0m
[96msrc/components/home/FeaturedCaseStudies.astro[0m:[93m83[0m:[93m124[0m - [91merror[0m[90m ts(18047): [0m'study' is possibly 'null'.

[7m83[0m                <h3 class="text-xl font-bold text-brand-navy group-hover:text-brand-accent transition-colors line-clamp-2">{study.title}</h3>
[7m  [0m [91m                                                                                                                           ~~~~~[0m
[96msrc/components/home/FeaturedCaseStudies.astro[0m:[93m82[0m:[93m150[0m - [91merror[0m[90m ts(18047): [0m'study' is possibly 'null'.

[7m82[0m                <span class="inline-block bg-brand-softBg text-brand-primary text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{study.industry}</span>
[7m  [0m [91m                                                                                                                                                     ~~~~~[0m
[96msrc/components/home/FeaturedCaseStudies.astro[0m:[93m62[0m:[93m25[0m - [91merror[0m[90m ts(18047): [0m'study' is possibly 'null'.

[7m62[0m                 src={`${study.imageUrl}?w=600&h=400&fit=crop&auto=format`}
[7m  [0m [91m                        ~~~~~[0m
[96msrc/components/home/FeaturedCaseStudies.astro[0m:[93m60[0m:[93m14[0m - [91merror[0m[90m ts(18047): [0m'study' is possibly 'null'.

[7m60[0m             {study.imageUrl ? (
[7m  [0m [91m             ~~~~~[0m
[96msrc/components/home/FeaturedCaseStudies.astro[0m:[93m57[0m:[93m35[0m - [91merror[0m[90m ts(18047): [0m'study' is possibly 'null'.

[7m57[0m         <a href={`/case-studies/${study.slug}/`} class="group bg-white rounded-2xl border border-brand-border hover:border-brand-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden focus-ring h-full">
[7m  [0m [91m                                  ~~~~~[0m
[96msrc/components/home/FeaturedCaseStudies.astro[0m:[93m21[0m:[93m46[0m - [91merror[0m[90m ts(7006): [0mParameter 'study' implicitly has an 'any' type.

[7m21[0m   const sanityStudy = sanityCaseStudies.find(study => study.slug?.current === slug);
[7m  [0m [91m                                             ~~~~~[0m

[96msrc/components/home/HomeFAQ.astro[0m:[93m38[0m:[93m11[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m38[0m   <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />
[7m  [0m [93m          ~~~~[0m

[96msrc/components/home/KajabiSpecialty.astro[0m:[93m27[0m:[93m36[0m - [93mwarning[0m[90m ts(6133): [0m'i' is declared but its value is never read.

[7m27[0m           {capabilities.map((item, i) => (
[7m  [0m [93m                                   ~[0m

[96msrc/components/home/SupportLevels.astro[0m:[93m34[0m:[93m27[0m - [93mwarning[0m[90m ts(6133): [0m'i' is declared but its value is never read.

[7m34[0m       {levels.map((level, i) => (
[7m  [0m [93m                          ~[0m

[96msrc/components/layout/Footer.astro[0m:[93m7[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'site' is declared but its value is never read.

[7m7[0m const site = siteSettings || { name: 'TheEduAssist', email: 'Info@theeduassist.com', social: {} };
[7m [0m [93m      ~~~~[0m
[96msrc/components/layout/Footer.astro[0m:[93m4[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'trustPages' is declared but its value is never read.

[7m4[0m import { trustPages } from '../../data/trustArchitecture';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/layout/Footer.astro[0m:[93m204[0m:[93m14[0m - [93mwarning[0m[90m ts(6133): [0m'showToast' is declared but its value is never read.

[7m204[0m     function showToast(message: string) {
[7m   [0m [93m             ~~~~~~~~~[0m
[96msrc/components/layout/Footer.astro[0m:[93m166[0m:[93m5[0m - [93mwarning[0m[90m ts(6133): [0m'shareLinks' is declared but its value is never read.

[7m166[0m     import { shareLinks } from '../../data/shareLinks';
[7m   [0m [93m    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/layout/Header.astro[0m:[93m10[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'navigation' is declared but its value is never read.

[7m10[0m const navigation = await getNavigation();
[7m  [0m [93m      ~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m8[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'site' is declared but its value is never read.

[7m8[0m const site = siteSettings || { name: 'TheEduAssist', email: 'Info@theeduassist.com', social: {} };
[7m [0m [93m      ~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m4[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'aiAssistants' is declared but its value is never read.

[7m4[0m import { aiAssistants } from '../../data/aiAssistants';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m180[0m:[93m34[0m - [91merror[0m[90m ts(2345): [0mArgument of type 'EventTarget | null' is not assignable to parameter of type 'Node | null'.
  Type 'EventTarget' is missing the following properties from type 'Node': baseURI, childNodes, firstChild, isConnected, and 43 more.

[7m180[0m           if (!dropdown.contains(e.target)) {
[7m   [0m [91m                                 ~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m169[0m:[93m34[0m - [91merror[0m[90m ts(2339): [0mProperty 'relatedTarget' does not exist on type 'Event'.

[7m169[0m         if (!dropdown.contains(e.relatedTarget)) {
[7m   [0m [91m                                 ~~~~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m162[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'focus' does not exist on type 'Element'.

[7m162[0m           if(toggleBtn) toggleBtn.focus();
[7m   [0m [91m                                  ~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m160[0m:[93m15[0m - [91merror[0m[90m ts(2339): [0mProperty 'key' does not exist on type 'Event'.

[7m160[0m         if (e.key === 'Escape' && isOpen) {
[7m   [0m [91m              ~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m135[0m:[93m22[0m - [91merror[0m[90m ts(7005): [0mVariable 'closeTimeout' implicitly has an 'any' type.

[7m135[0m         clearTimeout(closeTimeout);
[7m   [0m [91m                     ~~~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m127[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'menuContent' is possibly 'null'.

[7m127[0m         menuContent.classList.add('opacity-0', 'invisible', 'translate-y-2');
[7m   [0m [91m        ~~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m126[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'menuContent' is possibly 'null'.

[7m126[0m         menuContent.classList.remove('opacity-100', 'visible', 'translate-y-0');
[7m   [0m [91m        ~~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m119[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'menuContent' is possibly 'null'.

[7m119[0m         menuContent.classList.add('opacity-100', 'visible', 'translate-y-0');
[7m   [0m [91m        ~~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m118[0m:[93m9[0m - [91merror[0m[90m ts(18047): [0m'menuContent' is possibly 'null'.

[7m118[0m         menuContent.classList.remove('opacity-0', 'invisible', 'translate-y-2');
[7m   [0m [91m        ~~~~~~~~~~~[0m
[96msrc/components/layout/Header.astro[0m:[93m103[0m:[93m11[0m - [91merror[0m[90m ts(7034): [0mVariable 'closeTimeout' implicitly has type 'any' in some locations where its type cannot be determined.

[7m103[0m       let closeTimeout = null;
[7m   [0m [91m          ~~~~~~~~~~~~[0m

[96msrc/components/layout/MobileMenu.astro[0m:[93m156[0m:[93m16[0m - [91merror[0m[90m ts(2339): [0mProperty 'btn' does not exist on type 'MobileMenu'.

[7m156[0m           this.btn.focus();
[7m   [0m [91m               ~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m155[0m:[93m18[0m - [91merror[0m[90m ts(2339): [0mProperty 'btn' does not exist on type 'MobileMenu'.

[7m155[0m         if (this.btn instanceof HTMLElement) {
[7m   [0m [91m                 ~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m153[0m:[93m38[0m - [91merror[0m[90m ts(2339): [0mProperty 'isOpen' does not exist on type 'MobileMenu'.

[7m153[0m       if (e.key === 'Escape' && this.isOpen) {
[7m   [0m [91m                                     ~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m147[0m:[93m16[0m - [91merror[0m[90m ts(2339): [0mProperty 'isOpen' does not exist on type 'MobileMenu'.

[7m147[0m       if (this.isOpen) {
[7m   [0m [91m               ~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m142[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'iconOpen' does not exist on type 'MobileMenu'.

[7m142[0m         this.iconOpen?.classList.remove('block');
[7m   [0m [91m             ~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m141[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'iconOpen' does not exist on type 'MobileMenu'.

[7m141[0m         this.iconOpen?.classList.add('hidden');
[7m   [0m [91m             ~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m140[0m:[93m14[0m - [91merror[0m[90m ts(2551): [0mProperty 'iconClosed' does not exist on type 'MobileMenu'. Did you mean 'onclose'?

[7m140[0m         this.iconClosed?.classList.add('block');
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m139[0m:[93m14[0m - [91merror[0m[90m ts(2551): [0mProperty 'iconClosed' does not exist on type 'MobileMenu'. Did you mean 'onclose'?

[7m139[0m         this.iconClosed?.classList.remove('hidden');
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m138[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'panel' does not exist on type 'MobileMenu'.

[7m138[0m         this.panel?.classList.add('hidden');
[7m   [0m [91m             ~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m136[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'iconOpen' does not exist on type 'MobileMenu'.

[7m136[0m         this.iconOpen?.classList.add('block');
[7m   [0m [91m             ~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m135[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'iconOpen' does not exist on type 'MobileMenu'.

[7m135[0m         this.iconOpen?.classList.remove('hidden');
[7m   [0m [91m             ~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m134[0m:[93m14[0m - [91merror[0m[90m ts(2551): [0mProperty 'iconClosed' does not exist on type 'MobileMenu'. Did you mean 'onclose'?

[7m134[0m         this.iconClosed?.classList.remove('block');
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m133[0m:[93m14[0m - [91merror[0m[90m ts(2551): [0mProperty 'iconClosed' does not exist on type 'MobileMenu'. Did you mean 'onclose'?

[7m133[0m         this.iconClosed?.classList.add('hidden');
[7m   [0m [91m             ~~~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m132[0m:[93m14[0m - [91merror[0m[90m ts(2339): [0mProperty 'panel' does not exist on type 'MobileMenu'.

[7m132[0m         this.panel?.classList.remove('hidden');
[7m   [0m [91m             ~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m131[0m:[93m16[0m - [91merror[0m[90m ts(2339): [0mProperty 'isOpen' does not exist on type 'MobileMenu'.

[7m131[0m       if (this.isOpen) {
[7m   [0m [91m               ~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m130[0m:[93m52[0m - [91merror[0m[90m ts(2339): [0mProperty 'isOpen' does not exist on type 'MobileMenu'.

[7m130[0m       this.btn?.setAttribute('aria-expanded', this.isOpen.toString());
[7m   [0m [91m                                                   ~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m130[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'btn' does not exist on type 'MobileMenu'.

[7m130[0m       this.btn?.setAttribute('aria-expanded', this.isOpen.toString());
[7m   [0m [91m           ~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m129[0m:[93m27[0m - [91merror[0m[90m ts(2339): [0mProperty 'isOpen' does not exist on type 'MobileMenu'.

[7m129[0m       this.isOpen = !this.isOpen;
[7m   [0m [91m                          ~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m129[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'isOpen' does not exist on type 'MobileMenu'.

[7m129[0m       this.isOpen = !this.isOpen;
[7m   [0m [91m           ~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m107[0m:[93m26[0m - [91merror[0m[90m ts(7006): [0mParameter 'link' implicitly has an 'any' type.

[7m107[0m       this.links.forEach(link => link.addEventListener('click', this.closeMenu));
[7m   [0m [91m                         ~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m107[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'links' does not exist on type 'MobileMenu'.

[7m107[0m       this.links.forEach(link => link.addEventListener('click', this.closeMenu));
[7m   [0m [91m           ~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m102[0m:[93m34[0m - [91merror[0m[90m ts(7006): [0mParameter 'btn' implicitly has an 'any' type.

[7m102[0m       this.accordionBtns.forEach(btn => {
[7m   [0m [91m                                 ~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m102[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'accordionBtns' does not exist on type 'MobileMenu'.

[7m102[0m       this.accordionBtns.forEach(btn => {
[7m   [0m [91m           ~~~~~~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m100[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'btn' does not exist on type 'MobileMenu'.

[7m100[0m       this.btn?.addEventListener('click', this.toggleMenu);
[7m   [0m [91m           ~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m94[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'isOpen' does not exist on type 'MobileMenu'.

[7m94[0m       this.isOpen = false;
[7m  [0m [91m           ~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m93[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'links' does not exist on type 'MobileMenu'.

[7m93[0m       this.links = this.querySelectorAll('.mobile-link');
[7m  [0m [91m           ~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m92[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'iconOpen' does not exist on type 'MobileMenu'.

[7m92[0m       this.iconOpen = this.querySelector('#icon-open');
[7m  [0m [91m           ~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m91[0m:[93m12[0m - [91merror[0m[90m ts(2551): [0mProperty 'iconClosed' does not exist on type 'MobileMenu'. Did you mean 'onclose'?

[7m91[0m       this.iconClosed = this.querySelector('#icon-closed');
[7m  [0m [91m           ~~~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m89[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'accordionBtns' does not exist on type 'MobileMenu'.

[7m89[0m       this.accordionBtns = this.querySelectorAll('.mobile-accordion-btn');
[7m  [0m [91m           ~~~~~~~~~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m87[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'panel' does not exist on type 'MobileMenu'.

[7m87[0m       this.panel = this.querySelector('#mobile-menu-panel');
[7m  [0m [91m           ~~~~~[0m
[96msrc/components/layout/MobileMenu.astro[0m:[93m86[0m:[93m12[0m - [91merror[0m[90m ts(2339): [0mProperty 'btn' does not exist on type 'MobileMenu'.

[7m86[0m       this.btn = this.querySelector('#mobile-menu-btn');
[7m  [0m [91m           ~~~[0m

[96msrc/components/locations/CityTemplate.astro[0m:[93m155[0m:[93m27[0m - [91merror[0m[90m ts(7006): [0mParameter 'arr' implicitly has an 'any' type.

[7m155[0m       ]).map((cta, index, arr) => (
[7m   [0m [91m                          ~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m155[0m:[93m20[0m - [91merror[0m[90m ts(7006): [0mParameter 'index' implicitly has an 'any' type.

[7m155[0m       ]).map((cta, index, arr) => (
[7m   [0m [91m                   ~~~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m155[0m:[93m15[0m - [91merror[0m[90m ts(7006): [0mParameter 'cta' implicitly has an 'any' type.

[7m155[0m       ]).map((cta, index, arr) => (
[7m   [0m [91m              ~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m130[0m:[93m36[0m - [91merror[0m[90m ts(7006): [0mParameter 'faq' implicitly has an 'any' type.

[7m130[0m         {cityData.faqQuestions.map(faq => (
[7m   [0m [91m                                   ~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m89[0m:[93m48[0m - [91merror[0m[90m ts(7006): [0mParameter 'index' implicitly has an 'any' type.

[7m89[0m         {cityData.learningLifecycle.map((step, index) => (
[7m  [0m [91m                                               ~~~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m89[0m:[93m42[0m - [91merror[0m[90m ts(7006): [0mParameter 'step' implicitly has an 'any' type.

[7m89[0m         {cityData.learningLifecycle.map((step, index) => (
[7m  [0m [91m                                         ~~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m74[0m:[93m39[0m - [91merror[0m[90m ts(7006): [0mParameter 'service' implicitly has an 'any' type.

[7m74[0m         {cityData.popularServices.map(service => (
[7m  [0m [91m                                      ~~~~~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m49[0m:[93m39[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m49[0m         {cityData.whatWeHelpBuild.map(item => (
[7m  [0m [91m                                      ~~~~[0m
[96msrc/components/locations/CityTemplate.astro[0m:[93m37[0m:[93m64[0m - [91merror[0m[90m ts(7006): [0mParameter 'buyer' implicitly has an 'any' type.

[7m37[0m         {(cityData.whoWeHelp || cityData.buyerTypes || []).map(buyer => (
[7m  [0m [91m                                                               ~~~~~[0m

[96msrc/components/locations/CountryTemplate.astro[0m:[93m68[0m:[93m39[0m - [91merror[0m[90m ts(7006): [0mParameter 'faq' implicitly has an 'any' type.

[7m68[0m         {countryData.faqQuestions.map(faq => (
[7m  [0m [91m                                      ~~~[0m

[96msrc/components/locations/LocationHub.astro[0m:[93m2[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'CollectionEntry' is declared but its value is never read.

[7m2[0m import type { CollectionEntry } from 'astro:content';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/locations/RegionTemplate.astro[0m:[93m67[0m:[93m38[0m - [91merror[0m[90m ts(7006): [0mParameter 'faq' implicitly has an 'any' type.

[7m67[0m         {regionData.faqQuestions.map(faq => (
[7m  [0m [91m                                     ~~~[0m

[96msrc/components/sections/CalendlySoftCTA.astro[0m:[93m9[0m:[93m55[0m - [91merror[0m[90m ts(7006): [0mParameter 'block' implicitly has an 'any' type.

[7m9[0m const ctaBlocks = (await getCtaBlocks()).reduce((acc, block) => {
[7m [0m [91m                                                      ~~~~~[0m
[96msrc/components/sections/CalendlySoftCTA.astro[0m:[93m9[0m:[93m50[0m - [91merror[0m[90m ts(7006): [0mParameter 'acc' implicitly has an 'any' type.

[7m9[0m const ctaBlocks = (await getCtaBlocks()).reduce((acc, block) => {
[7m [0m [91m                                                 ~~~[0m

[96msrc/components/sections/CaseStudyPreviewGrid.astro[0m:[93m23[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'cs' implicitly has an 'any' type.

[7m23[0m       {caseStudies.map(cs => (
[7m  [0m [91m                       ~~[0m

[96msrc/components/sections/ChooseYourPath.astro[0m:[93m2[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'Button' is declared but its value is never read.

[7m2[0m import Button from '../ui/Button.astro';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/sections/HomeFAQ.astro[0m:[93m24[0m:[93m11[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m24[0m   <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />
[7m  [0m [93m          ~~~~[0m

[96msrc/components/sections/HomeHero.astro[0m:[93m3[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'getSiteSettings' is declared but its value is never read.

[7m3[0m import { getSiteSettings } from '../../sanity/queries';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/sections/InfographicSystemNew.astro[0m:[93m61[0m:[93m49[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m61[0m                 {blocks.slice(3, 6).map((block, index) => (
[7m  [0m [93m                                                ~~~~~[0m
[96msrc/components/sections/InfographicSystemNew.astro[0m:[93m43[0m:[93m49[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m43[0m                 {blocks.slice(0, 3).map((block, index) => (
[7m  [0m [93m                                                ~~~~~[0m

[96msrc/components/sections/MultiPlatformSection.astro[0m:[93m13[0m:[93m37[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m13[0m         {platformGroups.map((group, index) => (
[7m  [0m [93m                                    ~~~~~[0m
[96msrc/components/sections/MultiPlatformSection.astro[0m:[93m47[0m:[93m13[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'leadIntent' does not exist in type 'ServiceContext'.

[7m47[0m             leadIntent: target.dataset.leadIntent || ""
[7m  [0m [91m            ~~~~~~~~~~[0m

[96msrc/components/sections/NewHomeFinalCTA.astro[0m:[93m33[0m:[93m176[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'Button'.

[7m33[0m             <Button href="/contact/?source=homepage-cta" variant="outline" size="lg" class="w-full sm:w-auto border-slate-500 text-white hover:bg-slate-800">{secondaryLabel}</Button>
[7m  [0m [91m                                                                                                                                                                               ~~~~~~[0m
[96msrc/components/sections/NewHomeFinalCTA.astro[0m:[93m33[0m:[93m14[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'Button'.

[7m33[0m             <Button href="/contact/?source=homepage-cta" variant="outline" size="lg" class="w-full sm:w-auto border-slate-500 text-white hover:bg-slate-800">{secondaryLabel}</Button>
[7m  [0m [91m             ~~~~~~[0m
[96msrc/components/sections/NewHomeFinalCTA.astro[0m:[93m32[0m:[93m204[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'Button'.

[7m32[0m             <Button href="/book-free-audit/?source=homepage-cta" variant="primary" size="lg" class="w-full sm:w-auto shadow-lg bg-brand-accent text-brand-navy hover:bg-white border-none">{primaryLabel}</Button>
[7m  [0m [91m                                                                                                                                                                                                           ~~~~~~[0m
[96msrc/components/sections/NewHomeFinalCTA.astro[0m:[93m32[0m:[93m14[0m - [91merror[0m[90m ts(2304): [0mCannot find name 'Button'.

[7m32[0m             <Button href="/book-free-audit/?source=homepage-cta" variant="primary" size="lg" class="w-full sm:w-auto shadow-lg bg-brand-accent text-brand-navy hover:bg-white border-none">{primaryLabel}</Button>
[7m  [0m [91m             ~~~~~~[0m
[96msrc/components/sections/NewHomeFinalCTA.astro[0m:[93m10[0m:[93m5[0m - [93mwarning[0m[90m ts(6133): [0m'secondaryHref' is declared but its value is never read.

[7m10[0m let secondaryHref = "/contact/";
[7m  [0m [93m    ~~~~~~~~~~~~~[0m
[96msrc/components/sections/NewHomeFinalCTA.astro[0m:[93m8[0m:[93m5[0m - [93mwarning[0m[90m ts(6133): [0m'primaryHref' is declared but its value is never read.

[7m8[0m let primaryHref = "/book-free-audit/";
[7m [0m [93m    ~~~~~~~~~~~[0m

[96msrc/components/sections/NewHomeHero.astro[0m:[93m45[0m:[93m69[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "outline"; size: "lg"; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m45[0m         <Button href={secondaryCtaLink} variant="outline" size="lg" class="w-full sm:w-auto">{secondaryCtaLabel}</Button>
[7m  [0m [91m                                                                    ~~~~~[0m
[96msrc/components/sections/NewHomeHero.astro[0m:[93m43[0m:[93m65[0m - [91merror[0m[90m ts(2322): [0mType '{ children: string; href: string; variant: "primary"; size: "lg"; class: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'className'?

[7m43[0m       <Button href={primaryCtaLink} variant="primary" size="lg" class="w-full sm:w-auto shadow-md hover:shadow-lg">{primaryCtaLabel}</Button>
[7m  [0m [91m                                                                ~~~~~[0m

[96msrc/components/sections/PlatformStrip.astro[0m:[93m3[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'getPlatformsForBadges' is declared but its value is never read.

[7m3[0m import { getPlatformsForBadges } from '../../sanity/queries';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/components/sections/PlatformStrip.astro[0m:[93m2[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'Badge' is declared but its value is never read.

[7m2[0m import Badge from '../ui/Badge.astro';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/sections/PlatformSystemInfographic.astro[0m:[93m72[0m:[93m25[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m72[0m       {steps.map((step, index) => (
[7m  [0m [93m                        ~~~~~[0m

[96msrc/components/sections/SelfDiagnosisMirror.astro[0m:[93m54[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ title: string; subtitle: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'subtitle' does not exist on type 'IntrinsicAttributes & Props'.

[7m54[0m       subtitle="Before a client invests in a course build, platform setup, or LMS migration, they need a clear view of what is working, what feels confusing, and what should be improved. TheEduAssist helps you review your course structure, content, platform, learner journey, and launch workflow so you can choose the right next step with confidence."
[7m  [0m [91m      ~~~~~~~~[0m

[96msrc/components/sections/ServiceCategoryTabs.astro[0m:[93m24[0m:[93m28[0m - [91merror[0m[90m ts(7006): [0mParameter 'item' implicitly has an 'any' type.

[7m24[0m             {cat.items.map(item => (
[7m  [0m [91m                           ~~~~[0m

[96msrc/components/sections/StartingPoint.astro[0m:[93m175[0m:[93m35[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m175[0m           packageAudience: target.dataset.packageAudience || "",
[7m   [0m [91m                                  ~~~~~~~[0m
[96msrc/components/sections/StartingPoint.astro[0m:[93m175[0m:[93m28[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m175[0m           packageAudience: target.dataset.packageAudience || "",
[7m   [0m [91m                           ~~~~~~[0m
[96msrc/components/sections/StartingPoint.astro[0m:[93m174[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m174[0m           packageName: target.dataset.packageName || "",
[7m   [0m [91m                              ~~~~~~~[0m
[96msrc/components/sections/StartingPoint.astro[0m:[93m174[0m:[93m24[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m174[0m           packageName: target.dataset.packageName || "",
[7m   [0m [91m                       ~~~~~~[0m
[96msrc/components/sections/StartingPoint.astro[0m:[93m173[0m:[93m32[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m173[0m           packagePrice: target.dataset.packagePrice || "",
[7m   [0m [91m                               ~~~~~~~[0m
[96msrc/components/sections/StartingPoint.astro[0m:[93m173[0m:[93m25[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m173[0m           packagePrice: target.dataset.packagePrice || "",
[7m   [0m [91m                        ~~~~~~[0m
[96msrc/components/sections/StartingPoint.astro[0m:[93m172[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m172[0m           packageSlug: target.dataset.packageSlug || "",
[7m   [0m [91m                              ~~~~~~~[0m
[96msrc/components/sections/StartingPoint.astro[0m:[93m172[0m:[93m24[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m172[0m           packageSlug: target.dataset.packageSlug || "",
[7m   [0m [91m                       ~~~~~~[0m

[96msrc/components/sections/TrainingSolutionsGrid.astro[0m:[93m12[0m:[93m30[0m - [91merror[0m[90m ts(7006): [0mParameter 't' implicitly has an 'any' type.

[7m12[0m       {trainingSolutions.map(t => (
[7m  [0m [91m                             ~[0m

[96msrc/components/seo/SiteVerification.astro[0m:[93m28[0m:[93m34[0m - [91merror[0m[90m ts(18048): [0m'tag.content' is possibly 'undefined'.

[7m28[0m   <meta name={tag.name} content={tag.content.trim()} />
[7m  [0m [91m                                 ~~~~~~~~~~~[0m

[96msrc/components/service-page/ContentModernizationCallout.astro[0m:[93m50[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m50[0m           <ArrowRight class="w-5 h-5 ml-2" />
[7m  [0m [91m                      ~~~~~[0m
[96msrc/components/service-page/ContentModernizationCallout.astro[0m:[93m38[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m38[0m                 <Check class="w-4 h-4 text-brand-accent shrink-0" />
[7m  [0m [91m                       ~~~~~[0m
[96msrc/components/service-page/ContentModernizationCallout.astro[0m:[93m23[0m:[93m21[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m23[0m           <FileText class="w-4 h-4" />
[7m  [0m [91m                    ~~~~~[0m

[96msrc/components/service-page/EngagementModel.astro[0m:[93m48[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m48[0m           <RefreshCw class="w-7 h-7" />
[7m  [0m [91m                     ~~~~~[0m
[96msrc/components/service-page/EngagementModel.astro[0m:[93m34[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m34[0m           <FolderGit2 class="w-7 h-7" />
[7m  [0m [91m                      ~~~~~[0m
[96msrc/components/service-page/EngagementModel.astro[0m:[93m19[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m19[0m           <Search class="w-7 h-7" />
[7m  [0m [91m                  ~~~~~[0m

[96msrc/components/service-page/KajabiSpecialtyCallout.astro[0m:[93m45[0m:[93m37[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m45[0m                         <ArrowRight class="w-5 h-5 ml-2" />
[7m  [0m [91m                                    ~~~~~[0m
[96msrc/components/service-page/KajabiSpecialtyCallout.astro[0m:[93m36[0m:[93m43[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m36[0m                             <CheckCircle2 class="w-5 h-5 text-brand-accent mr-3 mt-1 shrink-0" />
[7m  [0m [91m                                          ~~~~~[0m

[96msrc/components/service-page/LiveServicesGrid.astro[0m:[93m63[0m:[93m29[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m63[0m                 <ArrowRight class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
[7m  [0m [91m                            ~~~~~[0m

[96msrc/components/service-page/OrganizationalLearningCallout.astro[0m:[93m22[0m:[93m25[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m22[0m             <ArrowRight class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
[7m  [0m [91m                        ~~~~~[0m
[96msrc/components/service-page/OrganizationalLearningCallout.astro[0m:[93m14[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m14[0m             <Building2 class="w-8 h-8 text-white" />
[7m  [0m [91m                       ~~~~~[0m

[96msrc/components/service-page/ProblemNavigator.astro[0m:[93m46[0m:[93m25[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m46[0m             <ArrowRight class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
[7m  [0m [91m                        ~~~~~[0m

[96msrc/components/service-page/ServiceDeliverables.astro[0m:[93m28[0m:[93m20[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m28[0m             <Check class="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
[7m  [0m [91m                   ~~~~~[0m

[96msrc/components/service-page/ServiceFamilyOverview.astro[0m:[93m53[0m:[93m35[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m53[0m                       <ArrowRight class="w-4 h-4 text-slate-300 group-hover:text-brand-accent transform group-hover:translate-x-1 transition-all" />
[7m  [0m [91m                                  ~~~~~[0m

[96msrc/components/service-page/ServiceHero.astro[0m:[93m2[0m:[93m10[0m - [91merror[0m[90m ts(2724): [0m'"lucide-react"' has no exported member named 'Lucide'. Did you mean 'LucideX'?

[7m2[0m import { Lucide } from "lucide-react";
[7m [0m [91m         ~~~~~~[0m
[96msrc/components/service-page/ServiceHero.astro[0m:[93m23[0m:[93m3[0m - [93mwarning[0m[90m ts(6133): [0m'icon' is declared but its value is never read.

[7m23[0m   icon
[7m  [0m [93m  ~~~~[0m
[96msrc/components/service-page/ServiceHero.astro[0m:[93m2[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'Lucide' is declared but its value is never read.

[7m2[0m import { Lucide } from "lucide-react";
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/components/service-page/ServiceInputs.astro[0m:[93m21[0m:[93m19[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m21[0m         <FileText class="w-16 h-16 text-brand-accent mx-auto md:mx-0 mb-4" />
[7m  [0m [91m                  ~~~~~[0m

[96msrc/components/service-page/ServiceProblems.astro[0m:[93m37[0m:[93m29[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m37[0m               <CheckCircle2 class="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
[7m  [0m [91m                            ~~~~~[0m
[96msrc/components/service-page/ServiceProblems.astro[0m:[93m33[0m:[93m24[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m33[0m               <XCircle class="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
[7m  [0m [91m                       ~~~~~[0m

[96msrc/components/service-page/ServiceQuality.astro[0m:[93m21[0m:[93m22[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m21[0m         <ShieldCheck class="w-8 h-8" />
[7m  [0m [91m                     ~~~~~[0m

[96msrc/components/service-page/ServiceRelatedContent.astro[0m:[93m10[0m:[93m18[0m - [91merror[0m[90m ts(2322): [0mType '{ categories: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'categories' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'category'?

[7m10[0m <RelatedArticles categories={categories} />
[7m  [0m [91m                 ~~~~~~~~~~[0m

[96msrc/components/service-page/ServiceSelectionGuidance.astro[0m:[93m58[0m:[93m29[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m58[0m               <CheckCircle2 class="w-6 h-6 text-brand-accent" />
[7m  [0m [91m                            ~~~~~[0m
[96msrc/components/service-page/ServiceSelectionGuidance.astro[0m:[93m48[0m:[93m21[0m - [91merror[0m[90m ts(2322): [0mType '{ class: string; }' is not assignable to type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'.
  Property 'class' does not exist on type 'IntrinsicAttributes & Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>'. Did you mean 'className'?

[7m48[0m         <HelpCircle class="w-6 h-6" />
[7m  [0m [91m                    ~~~~~[0m

[96msrc/components/services/ServicesFinalCTA.astro[0m:[93m37[0m:[93m31[0m - [91merror[0m[90m ts(2339): [0mProperty 'dataset' does not exist on type 'EventTarget'.

[7m37[0m           serviceSlug: target.dataset.serviceSlug || '',
[7m  [0m [91m                              ~~~~~~~[0m
[96msrc/components/services/ServicesFinalCTA.astro[0m:[93m37[0m:[93m24[0m - [91merror[0m[90m ts(18047): [0m'target' is possibly 'null'.

[7m37[0m           serviceSlug: target.dataset.serviceSlug || '',
[7m  [0m [91m                       ~~~~~~[0m

[96msrc/components/ui/Badge.astro[0m:[93m3[0m:[93m20[0m - [93mwarning[0m[90m ts(6133): [0m'VariantProps' is declared but its value is never read.

[7m3[0m import { cva, type VariantProps } from 'class-variance-authority';
[7m [0m [93m                   ~~~~~~~~~~~~[0m

[96msrc/components/ui/FAQAccordion.astro[0m:[93m15[0m:[93m21[0m - [93mwarning[0m[90m ts(6133): [0m'index' is declared but its value is never read.

[7m15[0m   {items.map((item, index) => (
[7m  [0m [93m                    ~~~~~[0m

[96msrc/layouts/Layout.astro[0m:[93m96[0m:[93m21[0m - [93mwarning[0m[90m astro(4000): [0mThis script will be treated as if it has the `is:inline` directive because it contains an attribute. Therefore, features that require processing (e.g. using TypeScript or npm packages in the script) are unavailable.

See docs for more details: https://docs.astro.build/en/guides/client-side-scripts/#script-processing.

Add the `is:inline` directive explicitly to silence this hint.

[7m96[0m             <script type="application/ld+json" set:html={JSON.stringify(schema)} />
[7m  [0m [93m                    ~~~~[0m

[96msrc/pages/[slug].astro[0m:[93m27[0m:[93m17[0m - [91merror[0m[90m ts(2339): [0mProperty 'noindex' does not exist on type 'never'.

[7m27[0m   noindex={seo?.noindex}
[7m  [0m [91m                ~~~~~~~[0m
[96msrc/pages/[slug].astro[0m:[93m26[0m:[93m21[0m - [91merror[0m[90m ts(2339): [0mProperty 'metaDescription' does not exist on type 'never'.

[7m26[0m   description={seo?.metaDescription}
[7m  [0m [91m                    ~~~~~~~~~~~~~~~[0m
[96msrc/pages/[slug].astro[0m:[93m25[0m:[93m15[0m - [91merror[0m[90m ts(2339): [0mProperty 'metaTitle' does not exist on type 'never'.

[7m25[0m   title={seo?.metaTitle || title}
[7m  [0m [91m              ~~~~~~~~~[0m

[96msrc/pages/authors/[slug].astro[0m:[93m85[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ post: NormalizedBlogPost; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'post' does not exist on type 'IntrinsicAttributes & Props'.

[7m85[0m             <BlogCard post={post} />
[7m  [0m [91m                      ~~~~[0m
[96msrc/pages/authors/[slug].astro[0m:[93m38[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; canonicalPath: string; robots: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'robots' does not exist on type 'IntrinsicAttributes & Props'.

[7m38[0m   robots={hasContent ? "index, follow" : "noindex, follow"}
[7m  [0m [91m  ~~~~~~[0m

[96msrc/pages/blog/[slug].astro[0m:[93m242[0m:[93m48[0m - [91merror[0m[90m ts(2322): [0mType '{ currentSlug: string; relatedSlugs: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'relatedSlugs' does not exist on type 'IntrinsicAttributes & Props'.

[7m242[0m       <RelatedArticles currentSlug={post.slug} relatedSlugs={post.relatedArticleSlugs} />
[7m   [0m [91m                                               ~~~~~~~~~~~~[0m
[96msrc/pages/blog/[slug].astro[0m:[93m75[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; canonicalPath: string; image: string | undefined; type: string; publishDate: string; modifiedDate: string | undefined; authorName: any; robots: string; jsonLd: { ...; }[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'image' does not exist on type 'IntrinsicAttributes & Props'. Did you mean 'ogImage'?

[7m75[0m   image={post.featuredImage}
[7m  [0m [91m  ~~~~~[0m
[96msrc/pages/blog/[slug].astro[0m:[93m4[0m:[93m34[0m - [91merror[0m[90m ts(5097): [0mAn import path can only end with a '.tsx' extension when 'allowImportingTsExtensions' is enabled.

[7m4[0m import PortableTextRenderer from '../../components/blog/PortableTextRenderer.tsx';
[7m [0m [91m                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/blog/[slug].astro[0m:[93m190[0m:[93m50[0m - [93mwarning[0m[90m ts(6133): [0m'i' is declared but its value is never read.

[7m190[0m                  {post.sources.map((source: any, i: number) => (
[7m   [0m [93m                                                 ~[0m
[96msrc/pages/blog/[slug].astro[0m:[93m9[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'BlogFAQs' is declared but its value is never read.

[7m9[0m import BlogFAQs from '../../components/blog/BlogFAQs.astro';
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/blog/index.astro[0m:[93m163[0m:[93m46[0m - [91merror[0m[90m ts(2322): [0mType '{ post: NormalizedBlogPost; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'post' does not exist on type 'IntrinsicAttributes & Props'.

[7m163[0m           {kajabiPosts.map(post => <BlogCard post={post} />)}
[7m   [0m [91m                                             ~~~~[0m
[96msrc/pages/blog/index.astro[0m:[93m149[0m:[93m50[0m - [91merror[0m[90m ts(2322): [0mType '{ post: NormalizedBlogPost; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'post' does not exist on type 'IntrinsicAttributes & Props'.

[7m149[0m           {enterprisePosts.map(post => <BlogCard post={post} />)}
[7m   [0m [91m                                                 ~~~~[0m
[96msrc/pages/blog/index.astro[0m:[93m136[0m:[93m46[0m - [91merror[0m[90m ts(2322): [0mType '{ post: NormalizedBlogPost; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'post' does not exist on type 'IntrinsicAttributes & Props'.

[7m136[0m           {latestPosts.map(post => <BlogCard post={post} />)}
[7m   [0m [91m                                             ~~~~[0m
[96msrc/pages/blog/index.astro[0m:[93m33[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; canonicalPath: string; robots: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'robots' does not exist on type 'IntrinsicAttributes & Props'.

[7m33[0m   robots="index, follow"
[7m  [0m [91m  ~~~~~~[0m

[96msrc/pages/blog/category/[slug].astro[0m:[93m66[0m:[93m23[0m - [91merror[0m[90m ts(2322): [0mType '{ post: NormalizedBlogPost; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'post' does not exist on type 'IntrinsicAttributes & Props'.

[7m66[0m             <BlogCard post={post} />
[7m  [0m [91m                      ~~~~[0m
[96msrc/pages/blog/category/[slug].astro[0m:[93m45[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; canonicalPath: string; robots: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'robots' does not exist on type 'IntrinsicAttributes & Props'.

[7m45[0m   robots={hasContent && category.sitemapVisibility ? "index, follow" : "noindex, follow"}
[7m  [0m [91m  ~~~~~~[0m

[96msrc/pages/blog/page/[...page].astro[0m:[93m87[0m:[93m11[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'never'.

[7m87[0m     {page.data.length === 0 ? (
[7m  [0m [91m          ~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m44[0m:[93m67[0m - [91merror[0m[90m ts(2339): [0mProperty 'currentPage' does not exist on type 'never'.

[7m44[0m const canonicalPath = isFirstPage ? "/blog/" : `/blog/page/${page.currentPage}/`;
[7m  [0m [91m                                                                  ~~~~~~~~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m40[0m:[93m25[0m - [91merror[0m[90m ts(2339): [0mProperty 'currentPage' does not exist on type 'never'.

[7m40[0m   : `Blog - Page ${page.currentPage} | TheEduAssist`;
[7m  [0m [91m                        ~~~~~~~~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m35[0m:[93m59[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'never'.

[7m35[0m const gridPosts = isFirstPage ? page.data.slice(1) : page.data;
[7m  [0m [91m                                                          ~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m35[0m:[93m38[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'never'.

[7m35[0m const gridPosts = isFirstPage ? page.data.slice(1) : page.data;
[7m  [0m [91m                                     ~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m32[0m:[93m67[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'never'.

[7m32[0m const featuredPost = (isFirstPage && page.data.length > 0) ? page.data[0] : null;
[7m  [0m [91m                                                                  ~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m32[0m:[93m43[0m - [91merror[0m[90m ts(2339): [0mProperty 'data' does not exist on type 'never'.

[7m32[0m const featuredPost = (isFirstPage && page.data.length > 0) ? page.data[0] : null;
[7m  [0m [91m                                          ~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m29[0m:[93m26[0m - [91merror[0m[90m ts(2339): [0mProperty 'currentPage' does not exist on type 'never'.

[7m29[0m const isFirstPage = page.currentPage === 1;
[7m  [0m [91m                         ~~~~~~~~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m23[0m:[93m19[0m - [91merror[0m[90m ts(7005): [0mVariable 'posts' implicitly has an 'any[]' type.

[7m23[0m   return paginate(posts, { pageSize: 12 });
[7m  [0m [91m                  ~~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m17[0m:[93m7[0m - [91merror[0m[90m ts(7034): [0mVariable 'posts' implicitly has type 'any[]' in some locations where its type cannot be determined.

[7m17[0m   let posts = [];
[7m  [0m [91m      ~~~~~[0m
[96msrc/pages/blog/page/[...page].astro[0m:[93m16[0m:[93m40[0m - [91merror[0m[90m ts(7031): [0mBinding element 'paginate' implicitly has an 'any' type.

[7m16[0m export async function getStaticPaths({ paginate }) {
[7m  [0m [91m                                       ~~~~~~~~[0m

[96msrc/pages/book-free-audit/index.astro[0m:[93m10[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'packages' is declared but its value is never read.

[7m10[0m import { packages } from "../../data/packages";
[7m  [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/enterprise-solutions/index.astro[0m:[93m34[0m:[93m79[0m - [91merror[0m[90m ts(2740): [0mType '{ "@context": string; "@type": string; name: string; description: string; url: string; }' is missing the following properties from type 'any[]': length, pop, push, concat, and 35 more.

[7m34[0m <Layout title={title} description={description} canonicalPath={canonicalPath} jsonLd={schema}>
[7m  [0m [91m                                                                              ~~~~~~[0m

[96msrc/pages/enterprise-solutions/workforce-upskilling/index.astro[0m:[93m134[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'relatedCaseStudies' is declared but its value is never read.

[7m134[0m const relatedCaseStudies = [
[7m   [0m [93m      ~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/locations/[slug].astro[0m:[93m69[0m:[93m51[0m - [91merror[0m[90m ts(7006): [0mParameter 'faq' implicitly has an 'any' type.

[7m69[0m           "mainEntity": itemData.faqQuestions.map(faq => ({
[7m  [0m [91m                                                  ~~~[0m
[96msrc/pages/locations/[slug].astro[0m:[93m32[0m:[93m10[0m - [91merror[0m[90m ts(7005): [0mVariable 'paths' implicitly has an 'any[]' type.

[7m32[0m   return paths;
[7m  [0m [91m         ~~~~~[0m
[96msrc/pages/locations/[slug].astro[0m:[93m13[0m:[93m9[0m - [91merror[0m[90m ts(7034): [0mVariable 'paths' implicitly has type 'any[]' in some locations where its type cannot be determined.

[7m13[0m   const paths = [];
[7m  [0m [91m        ~~~~~[0m

[96msrc/pages/platforms/index.astro[0m:[93m223[0m:[93m24[0m - [91merror[0m[90m ts(7006): [0mParameter 'platform' implicitly has an 'any' type.

[7m223[0m         {displays.map((platform) => (
[7m   [0m [91m                       ~~~~~~~~[0m
[96msrc/pages/platforms/index.astro[0m:[93m10[0m:[93m25[0m - [91merror[0m[90m ts(7006): [0mParameter 'p' implicitly has an 'any' type.

[7m10[0m   ? sanityPlatforms.map(p => ({
[7m  [0m [91m                        ~[0m
[96msrc/pages/platforms/index.astro[0m:[93m3[0m:[93m25[0m - [93mwarning[0m[90m ts(6133): [0m'platformGroups' is declared but its value is never read.

[7m3[0m import { platformsData, platformGroups, extraToolsData } from "../../data/platforms";
[7m [0m [93m                        ~~~~~~~~~~~~~~[0m

[96msrc/pages/services/ai-powered-elearning.astro[0m:[93m171[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ serviceSlug: string; primaryCtaLabel: string; primaryCtaLink: string; secondaryCtaLabel: string; secondaryCtaLink: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'secondaryCtaLabel' does not exist on type 'IntrinsicAttributes & Props'.

[7m171[0m       secondaryCtaLabel="Get a 24–48 Hour Review"
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/ai-powered-elearning.astro[0m:[93m79[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; steps: { title: string; description: string; }[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m79[0m       heading="Responsible Process"
[7m  [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/ai-powered-elearning.astro[0m:[93m60[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; deliverables: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m60[0m       heading="Possible Use Cases"
[7m  [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/ai-powered-elearning.astro[0m:[93m10[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'ServiceRelatedSolutions' is declared but its value is never read.

[7m10[0m import ServiceRelatedSolutions from "../../components/service-page/ServiceRelatedSolutions.astro";
[7m  [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/ai-powered-elearning.astro[0m:[93m5[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'ServiceProblems' is declared but its value is never read.

[7m5[0m import ServiceProblems from "../../components/service-page/ServiceProblems.astro";
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/services/assessment-design.astro[0m:[93m9[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'ServiceInputs' is declared but its value is never read.

[7m9[0m import ServiceInputs from "../../components/service-page/ServiceInputs.astro";
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/services/content-conversion.astro[0m:[93m229[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ serviceSlug: string; primaryCtaLabel: string; primaryCtaLink: string; secondaryCtaLabel: string; secondaryCtaLink: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'secondaryCtaLabel' does not exist on type 'IntrinsicAttributes & Props'.

[7m229[0m       secondaryCtaLabel="Discuss Your Conversion Project"
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m148[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; deliverables: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m148[0m       heading="Possible Deliverables"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m118[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; steps: { title: string; description: string; }[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m118[0m       heading="Our Conversion Process"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m92[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m92[0m         "Inconsistent formatting"
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m91[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m91[0m         "Content spread across systems",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m90[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m90[0m         "Difficult maintenance",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m89[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m89[0m         "Unresponsive legacy content",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m88[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m88[0m         "No activities or assessments",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m87[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m87[0m         "No learning outcomes",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m86[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m86[0m         "Missing module structure",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m85[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m85[0m         "Repeated or outdated material",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m84[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m84[0m         "Excessive reading",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m83[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m83[0m         "Useful content that is difficult to navigate",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/content-conversion.astro[0m:[93m62[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; inputs: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m62[0m       heading="Source Material We Can Convert"
[7m  [0m [91m      ~~~~~~~[0m

[96msrc/pages/services/course-development.astro[0m:[93m9[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'ServiceInputs' is declared but its value is never read.

[7m9[0m import ServiceInputs from "../../components/service-page/ServiceInputs.astro";
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/services/course-localization-translation.astro[0m:[93m83[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m83[0m         "Kajabi or LMS users adding localized experiences"
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m82[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m82[0m         "Course businesses preparing multilingual delivery",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m81[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m81[0m         "Associations with international members",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m80[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m80[0m         "Partner training programs",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m79[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m79[0m         "Customer education programs",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m78[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m78[0m         "Publishers converting educational content",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m77[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m77[0m         "Academies entering Europe or MENA",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m76[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m76[0m         "Training providers serving multilingual learners",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m75[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m75[0m         "Multinational learning teams",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m74[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m74[0m         "Organizations expanding training into new regions",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/course-localization-translation.astro[0m:[93m9[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'ServiceRelatedContent' is declared but its value is never read.

[7m9[0m import ServiceRelatedContent from "../../components/service-page/ServiceRelatedContent.astro";
[7m [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/services/funnels-automation.astro[0m:[93m8[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any[]; title: string; description: string; canonical: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'canonical' does not exist on type 'IntrinsicAttributes & Props'.

[7m8[0m   canonical="/kajabi-services/"
[7m [0m [91m  ~~~~~~~~~[0m

[96msrc/pages/services/index.astro[0m:[93m45[0m:[93m3[0m - [91merror[0m[90m ts(2322): [0mType '{ children: any; title: string; description: string; canonical: string; schema: ({ "@context": string; "@type": string; mainEntity: { "@type": string; name: string; acceptedAnswer: { "@type": string; text: string; }; }[]; } | { ...; } | { ...; } | null)[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'canonical' does not exist on type 'IntrinsicAttributes & Props'.

[7m45[0m   canonical="/services/"
[7m  [0m [91m  ~~~~~~~~~[0m
[96msrc/pages/services/index.astro[0m:[93m38[0m:[93m17[0m - [91merror[0m[90m ts(2345): [0mArgument of type '{ questionName: string; acceptedAnswerText: string; }[]' is not assignable to parameter of type '{ question: string; answer: string; }[]'.
  Type '{ questionName: string; acceptedAnswerText: string; }' is missing the following properties from type '{ question: string; answer: string; }': question, answer

[7m38[0m   faqPageSchema(faqs.map(f => ({ questionName: f.question, acceptedAnswerText: f.answer })))
[7m  [0m [91m                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/index.astro[0m:[93m36[0m:[93m25[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'item' does not exist in type '{ name: string; urlPath: string; }'.

[7m36[0m     { name: 'Services', item: '/services/' }
[7m  [0m [91m                        ~~~~[0m
[96msrc/pages/services/index.astro[0m:[93m35[0m:[93m21[0m - [91merror[0m[90m ts(2353): [0mObject literal may only specify known properties, and 'item' does not exist in type '{ name: string; urlPath: string; }'.

[7m35[0m     { name: 'Home', item: '/' },
[7m  [0m [91m                    ~~~~[0m
[96msrc/pages/services/index.astro[0m:[93m16[0m:[93m1[0m - [93mwarning[0m[90m ts(6133): [0m'ServicesFinalCTA' is declared but its value is never read.

[7m16[0m import ServicesFinalCTA from "../../components/services/ServicesFinalCTA.astro";
[7m  [0m [93m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m223[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ serviceSlug: string; primaryCtaLabel: string; primaryCtaLink: string; secondaryCtaLabel: string; secondaryCtaLink: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'secondaryCtaLabel' does not exist on type 'IntrinsicAttributes & Props'.

[7m223[0m       secondaryCtaLabel="Get a 24–48 Hour Review"
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m123[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; steps: { title: string; description: string; }[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m123[0m       heading="Migration Process"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m101[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; deliverables: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m101[0m       heading="Implementation May Include"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m88[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m88[0m         "Insufficient launch testing"
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m87[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m87[0m         "Poor learner navigation",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m86[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m86[0m         "Undefined reporting requirements",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m85[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m85[0m         "Duplicate or obsolete courses",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m84[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m84[0m         "Migration uncertainty",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m83[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m83[0m         "Unclear roles and permissions",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m82[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m82[0m         "Outdated LMS configuration",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m81[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m81[0m         "Scattered learning content",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m80[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m80[0m         "Inconsistent course structures",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m79[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'Problem'.

[7m79[0m         "Unclear platform requirements",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m72[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m72[0m         "Organizations reviewing platform options"
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m71[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m71[0m         "Clients moving from manual delivery",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m70[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m70[0m         "Teams with disorganized courses",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m69[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m69[0m         "Organizations replacing a legacy LMS",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m68[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m68[0m         "Customer education teams",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m67[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m67[0m         "Associations",
[7m  [0m [91m        ~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m66[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m66[0m         "Academies",
[7m  [0m [91m        ~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m65[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m65[0m         "Training providers",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/lms-implementation-migration.astro[0m:[93m64[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m64[0m         "Corporate learning teams",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/services/managed-learning.astro[0m:[93m206[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ serviceSlug: string; primaryCtaLabel: string; primaryCtaLink: string; secondaryCtaLabel: string; secondaryCtaLink: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'secondaryCtaLabel' does not exist on type 'IntrinsicAttributes & Props'.

[7m206[0m       secondaryCtaLabel="Review Your Current Learning Operations"
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m177[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; deliverables: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m177[0m       heading="Deliverables We Provide"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m138[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; steps: { title: string; description: string; }[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m138[0m       heading="Operating Rhythm"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m74[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; deliverables: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m74[0m       heading="Possible Service Areas"
[7m  [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m69[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m69[0m         "Teams needing delivery support without immediate internal expansion"
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m68[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m68[0m         "Organizations with learning backlogs",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m67[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m67[0m         "Professional associations",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m66[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m66[0m         "Customer education teams",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m65[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m65[0m         "Organizations with frequent updates",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m64[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m64[0m         "Academies with several courses",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m63[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m63[0m         "Growing training providers",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/managed-learning.astro[0m:[93m62[0m:[93m9[0m - [91merror[0m[90m ts(2322): [0mType 'string' is not assignable to type 'AudienceMember'.

[7m62[0m         "Small learning teams",
[7m  [0m [91m        ~~~~~~~~~~~~~~~~~~~~~~[0m

[96msrc/pages/services/ongoing-support-maintenance.astro[0m:[93m141[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ serviceSlug: string; primaryCtaLabel: string; primaryCtaLink: string; secondaryCtaLabel: string; secondaryCtaLink: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'secondaryCtaLabel' does not exist on type 'IntrinsicAttributes & Props'.

[7m141[0m       secondaryCtaLabel="Review Your Current Learning System"
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/ongoing-support-maintenance.astro[0m:[93m101[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; steps: { title: string; description: string; }[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m101[0m       heading="Request Process"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/ongoing-support-maintenance.astro[0m:[93m59[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; deliverables: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m59[0m       heading="Support May Include"
[7m  [0m [91m      ~~~~~~~[0m

[96msrc/pages/services/quality-assurance.astro[0m:[93m227[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ serviceSlug: string; primaryCtaLabel: string; primaryCtaLink: string; secondaryCtaLabel: string; secondaryCtaLink: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'secondaryCtaLabel' does not exist on type 'IntrinsicAttributes & Props'.

[7m227[0m       secondaryCtaLabel="Submit Your Course for Review"
[7m   [0m [91m      ~~~~~~~~~~~~~~~~~[0m
[96msrc/pages/services/quality-assurance.astro[0m:[93m190[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; deliverables: string[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m190[0m       heading="Possible Deliverables"
[7m   [0m [91m      ~~~~~~~[0m
[96msrc/pages/services/quality-assurance.astro[0m:[93m143[0m:[93m7[0m - [91merror[0m[90m ts(2322): [0mType '{ heading: string; steps: { title: string; description: string; }[]; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'heading' does not exist on type 'IntrinsicAttributes & Props'.

[7m143[0m       heading="QA Process"
[7m   [0m [91m      ~~~~~~~[0m

[96msrc/pages/sitemap/index.astro[0m:[93m15[0m:[93m7[0m - [93mwarning[0m[90m ts(6133): [0m'getRouteTitle' is declared but its value is never read.

[7m15[0m const getRouteTitle = (path: string) => publicRoutes.find(r => r.path === path)?.title.split(' |')[0];
[7m  [0m [93m      ~~~~~~~~~~~~~[0m

[96msrc/components/ai/AIAssistClient.ts[0m:[93m123[0m:[93m44[0m - [93mwarning[0m[90m ts(6133): [0m'platformUrl' is declared but its value is never read.

[7m123[0m function showFallbackModal(prompt: string, platformUrl: string) {
[7m   [0m [93m                                           ~~~~~~~~~~~[0m
[96msrc/components/ai/AIAssistClient.ts[0m:[93m123[0m:[93m28[0m - [93mwarning[0m[90m ts(6133): [0m'prompt' is declared but its value is never read.

[7m123[0m function showFallbackModal(prompt: string, platformUrl: string) {
[7m   [0m [93m                           ~~~~~~[0m

[96msrc/lib/firebaseClient.ts[0m:[93m3[0m:[93m58[0m - [91merror[0m[90m ts(2307): [0mCannot find module 'firebase/app' or its corresponding type declarations.

[7m3[0m import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
[7m [0m [91m                                                         ~~~~~~~~~~~~~~[0m

[96msrc/lib/blog/normalizeBlogPost.ts[0m:[93m39[0m:[93m6[0m - [93mwarning[0m[90m ts(6196): [0m'SanitySlugValue' is declared but never used.

[7m39[0m type SanitySlugValue =
[7m  [0m [93m     ~~~~~~~~~~~~~~~[0m
[96msrc/lib/blog/normalizeBlogPost.ts[0m:[93m1[0m:[93m32[0m - [93mwarning[0m[90m ts(6196): [0m'BlogContentStatus' is declared but never used.

[7m1[0m import type { BlogContentType, BlogContentStatus, BlogCategoryId } from '../../data/blogArchitecture';
[7m [0m [93m                               ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/content/getAllCaseStudies.ts[0m:[93m52[0m:[93m8[0m - [91merror[0m[90m ts(2322): [0mType '(CaseStudy | { title: any; slug: any; subtitle: any; clientType: any; industry: any; summary: any; publishedAt: any; updatedAt: any; source: string; })[]' is not assignable to type 'CaseStudy[]'.
  Type 'CaseStudy | { title: any; slug: any; subtitle: any; clientType: any; industry: any; summary: any; publishedAt: any; updatedAt: any; source: string; }' is not assignable to type 'CaseStudy'.
    Type '{ title: any; slug: any; subtitle: any; clientType: any; industry: any; summary: any; publishedAt: any; updatedAt: any; source: string; }' is not assignable to type 'CaseStudy'.
      Types of property 'source' are incompatible.
        Type 'string' is not assignable to type '"sanity" | "static"'.

[7m52[0m        return unique;
[7m  [0m [91m       ~~~~~~[0m
[96msrc/lib/content/getAllCaseStudies.ts[0m:[93m21[0m:[93m23[0m - [91merror[0m[90m ts(2339): [0mProperty 'noIndex' does not exist on type '{ slug: string; title: string; subtitle: string; caseNumber: string; clientType: string; industry: string; location: string; isRealProject: boolean; clientNamePublic: boolean; summary: string; ... 13 more ...; seoDescription: string; }'.

[7m21[0m     .filter(cs => !cs.noIndex)
[7m  [0m [91m                      ~~~~~~~[0m
[96msrc/lib/content/getAllCaseStudies.ts[0m:[93m2[0m:[93m10[0m - [93mwarning[0m[90m ts(6133): [0m'getCaseStudyBySlug' is declared but its value is never read.

[7m2[0m import { getCaseStudyBySlug, getAllCaseStudies as getSanityCaseStudies } from '../../sanity/queries';
[7m [0m [93m         ~~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/seo/buildJsonLd.ts[0m:[93m10[0m:[93m5[0m - [93mwarning[0m[90m ts(6133): [0m'blogPostingSchema' is declared but its value is never read.

[7m10[0m     blogPostingSchema
[7m  [0m [93m    ~~~~~~~~~~~~~~~~~[0m

[96msrc/lib/seo/metadata.ts[0m:[93m33[0m:[93m9[0m - [93mwarning[0m[90m ts(6133): [0m'siteName' is declared but its value is never read.

[7m33[0m   const siteName = siteSettings?.name || 'TheEduAssist';
[7m  [0m [93m        ~~~~~~~~[0m

[96msrc/pages/api/forms/enterprise-brief.ts[0m:[93m127[0m:[93m31[0m - [93mwarning[0m[90m ts(6133): [0m'request' is declared but its value is never read.

[7m127[0m export const GET: APIRoute = ({ request }) => {
[7m   [0m [93m                              ~~~~~~~~~~~[0m

Result (404 files):
- 270 errors
- 0 warnings
- 67 hints


> theeduassist@1.0.0 prebuild
> node scripts/generate-sitemap.mjs && node scripts/generate-sitemap-extension.cjs

Generating sitemap...
Successfully fetched 293 posts from Sanity.
Sitemap generated with 91 core URLs and 292 blog URLs (1 blog posts excluded).
Added 12 additional URLs to sitemap.

> theeduassist@1.0.0 build
> astro build

17:37:43 [types] Generated 77ms
17:37:43 [build] output: "static"
17:37:43 [build] mode: "server"
17:37:43 [build] directory: /app/dist/
17:37:43 [build] adapter: @astrojs/vercel
17:37:43 [build] Collecting build info...
17:37:43 [build] ✓ Completed in 237ms.
17:37:43 [build] Building server entrypoints...
17:37:47 [WARN] [vite]
/noise.png referenced in /noise.png didn't resolve at build time, it will remain unchanged to be resolved at runtime
17:37:47 [WARN] [vite]
/ui/grid-pattern-light.svg referenced in /ui/grid-pattern-light.svg didn't resolve at build time, it will remain unchanged to be resolved at runtime
17:37:48 [WARN] [vite] [plugin vite-plugin-sanity-studio-chunk-warning] Some chunks are larger than 500 kB after minification. Consider:
- chunks/cities_C29in_kp.mjs
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
17:37:48 [vite] ✓ built in 5.04s
17:37:49 [vite] ✓ built in 900ms
17:37:50 [vite] ✓ built in 1.14s

 prerendering static routes
17:37:51 [WARN] [build] Could not render `/case-studies` from route `/[slug]` as it conflicts with higher priority route `/case-studies`.
17:37:51 [WARN] [build] Could not render `/contact` from route `/[slug]` as it conflicts with higher priority route `/contact`.
17:37:51 [WARN] [build] Could not render `/kajabi-services` from route `/[slug]` as it conflicts with higher priority route `/kajabi-services`.
17:37:51 [WARN] [build] Could not render `/services` from route `/[slug]` as it conflicts with higher priority route `/services`.
17:37:51   ├─ /404.html (+425ms)
17:37:52   ├─ /about-us/index.html (+430ms)
17:37:52   ├─ /accessibility-statement/index.html (+393ms)
17:37:53   ├─ /ai-use-policy/index.html (+415ms)
17:37:53   ├─ /authors/editorial-team/index.html (+910ms)
17:37:54   ├─ /blog/category/learning-strategy/index.html (+994ms)
17:37:55   ├─ /blog/category/instructional-design/index.html (+980ms)
17:37:56   ├─ /blog/category/course-development/index.html (+849ms)
17:37:57   ├─ /blog/category/lms-learning-technology/index.html (+767ms)
17:37:57   ├─ /blog/category/kajabi/index.html (+975ms)
17:37:58   ├─ /blog/category/enterprise-learning/index.html (+895ms)
17:37:59   ├─ /blog/category/ai-learning/index.html (+768ms)
17:38:00   ├─ /blog/category/accessibility-quality/index.html (+1.07s)
17:38:01   ├─ /blog/category/localization-global-learning/index.html (+1.12s)
17:38:02   ├─ /blog/category/managed-learning/index.html (+793ms)
17:38:03   ├─ /blog/page/index.html (+643ms)
17:38:04   ├─ /blog/page/2/index.html (+451ms)
17:38:04   ├─ /blog/page/3/index.html (+463ms)
17:38:05   ├─ /blog/page/4/index.html (+385ms)
17:38:05   ├─ /blog/page/5/index.html (+504ms)
17:38:06   ├─ /blog/page/6/index.html (+472ms)
17:38:06   ├─ /blog/page/7/index.html (+402ms)
17:38:06   ├─ /blog/page/8/index.html (+384ms)
17:38:07   ├─ /blog/page/9/index.html (+390ms)
17:38:07   ├─ /blog/page/10/index.html (+426ms)
17:38:08   ├─ /blog/page/11/index.html (+399ms)
17:38:08   ├─ /blog/page/12/index.html (+423ms)
17:38:08   ├─ /blog/page/13/index.html (+542ms)
17:38:09   ├─ /blog/page/14/index.html (+399ms)
17:38:09   ├─ /blog/page/15/index.html (+380ms)
17:38:10   ├─ /blog/page/16/index.html (+394ms)
17:38:10   ├─ /blog/page/17/index.html (+392ms)
17:38:11   ├─ /blog/page/18/index.html (+714ms)
17:38:11   ├─ /blog/page/19/index.html (+389ms)
17:38:12   ├─ /blog/page/20/index.html (+390ms)
17:38:12   ├─ /blog/page/21/index.html (+403ms)
17:38:12   ├─ /blog/page/22/index.html (+403ms)
17:38:13   ├─ /blog/page/23/index.html (+388ms)
17:38:13   ├─ /blog/page/24/index.html (+390ms)
17:38:14   ├─ /blog/page/25/index.html (+388ms)
17:38:14   ├─ /blog/ms-request-for-proposal-rfp-free-template-guide/index.html (+561ms)
17:38:15   ├─ /blog/your-guide-to-kajabi-emails-that-people-love-to-read/index.html (+549ms)
17:38:15   ├─ /blog/kajabi-major-updates-2026-ai-cofounder-expert-agents-amplify-and-more/index.html (+548ms)
17:38:16   ├─ /blog/build-your-online-course-yourself-or-hire-course-creation-experts/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+528ms)
17:38:16   ├─ /blog/__trashed/index.html (+635ms)
17:38:17   ├─ /blog/ai-customized-safety-training/index.html (+541ms)
17:38:17   ├─ /blog/why-human-error-is-the-leading-cause-of-truck-accidents-and-how-to-prevent-it/index.html (+534ms)
17:38:18   ├─ /blog/what-is-technical-proficiency/index.html (+534ms)
17:38:18   ├─ /blog/instructional-design-made-simple-with-synthesia-videos-and-indesign-workbooks/index.html (+550ms)
17:38:19   ├─ /blog/time-management-and-productivity-skills-students-can-master-2025/index.html (+533ms)
17:38:20   ├─ /blog/complete-guide-to-saas-curriculum-development-and-training-best-practices/index.html (+524ms)
17:38:20   ├─ /blog/continuing-education-creation-how-to-develop-effective-programs-for-professionals-2026/index.html (+541ms)
17:38:21   ├─ /blog/instructional-design-in-action-practical-solutions-for-learner-problems/index.html (+529ms)
17:38:21   ├─ /blog/thinkific-course-creation-and-lms-management-how-to-create-online-courses-2026/index.html (+546ms)
17:38:22   ├─ /blog/ai-insights-powering-skills-based-learning-and-professional-growth-in-2026/index.html (+551ms)
17:38:22   ├─ /blog/udemy-made-simple-how-the-platform-works-for-learners-and-instructors/index.html (+536ms)
17:38:23   ├─ /blog/strategic-digital-product-architecture-for-wealth-systems-a-simple-guide/index.html (+536ms)
17:38:23   ├─ /blog/a-practical-2026-guide-in-using-skool-for-real-estate-lending-sales-training/index.html (+535ms)
17:38:24   ├─ /blog/why-learners-skip-pop-ups-and-how-better-design-changes-that/index.html (+535ms)
17:38:24   ├─ /blog/moocs-and-it-education-a-practical-guide-for-learners-in-2026/index.html (+532ms)
17:38:25   ├─ /blog/how-to-apply-seta-standards-in-digital-and-blended-learning-environments/index.html (+533ms)
17:38:25   ├─ /blog/education-is-the-key-of-success-its-future-2026/index.html (+528ms)
17:38:26   ├─ /blog/gamification-2026-how-to-boost-engagement-learning-and-productivity/index.html (+534ms)
17:38:26   ├─ /blog/learning-strategies/index.html (+607ms)
17:38:27   ├─ /blog/teachability/index.html (+527ms)
17:38:28   ├─ /blog/how-to-promote-your-online-course-by-using-teachability-principles-2026/index.html (+668ms)
17:38:28   ├─ /blog/ai-driven-online-learning-from-content-creation-to-skill-mastery/index.html (+526ms)
17:38:29   ├─ /blog/elearning-2026-how-technology-is-reshaping-education/index.html (+529ms)
17:38:29   ├─ /blog/go-high-level-for-education-businesses-what-actually-works/index.html (+528ms)
17:38:30   ├─ /blog/personal-learning-environment/index.html (+710ms)
17:38:31   ├─ /blog/what-is-ferpa/index.html (+544ms)
17:38:31   ├─ /blog/instructional-design-services-for-custom-elearning-development-better-learning-outcomes/index.html (+523ms)
17:38:32   ├─ /blog/a-practical-guide-to-planning-and-development-training-for-modern-workforces/index.html (+533ms)
17:38:32   ├─ /blog/what-are-terminal-learning-objectives-a-practical-guide-for-training-2026/index.html (+522ms)
17:38:33   ├─ /blog/kajabi-course-design-explained-how-to-create-online-course-in-2026/index.html (+595ms)
17:38:33   ├─ /blog/what-is-a-curriculum-development-centre-a-complete-explanation/index.html (+536ms)
17:38:34   ├─ /blog/why-learning-is-the-strongest-skill-you-can-build/index.html (+763ms)
17:38:35   ├─ /blog/why-kajabi-works-better-than-multiple-tools-for-coaching-businesses/index.html (+527ms)
17:38:35   ├─ /blog/the-essential-guide-to-ai-generated-course-quality-2026/index.html (+852ms)
17:38:36   ├─ /blog/choosing-the-right-authoring-tool-affordable-alternatives-to-articulate-storyline/index.html (+525ms)
17:38:37   ├─ /blog/how-to-overcome-lms-course-editing-restrictions-without-rebuilding-everything/index.html (+529ms)
17:38:37   ├─ /blog/training-coordination-made-easy-proven-strategies-for-hybrid-teams/index.html (+889ms)
17:38:38   ├─ /blog/beyond-gamification-how-to-make-interactive-learning-truly-effective/index.html (+523ms)
17:38:38   ├─ /blog/quest-3-for-sim-racing-can-it-be-made-reliable/index.html (+536ms)
17:38:39   ├─ /blog/instructional-design-checklist-make-your-online-courses-more-engaging/index.html (+544ms)
17:38:40   ├─ /blog/ai-microlearning-the-ultimate-formula-for-corporate-training-2026/index.html (+529ms)
17:38:40   ├─ /blog/the-tool-trap-when-technology-overshadows-learning-strategy/index.html (+523ms)
17:38:41   ├─ /blog/scorm-construction-courses-for-lms-compliance-made-simple-2026/index.html (+535ms)
17:38:41   ├─ /blog/practical-ai-learning-in-2026-how-to-build-real-world-skills-that-matter/index.html (+526ms)
17:38:42   ├─ /blog/when-e-learning-feels-unrealistic-a-practical-fix-for-modern-workplaces-2026/index.html (+529ms)
17:38:42   ├─ /blog/why-early-grades-struggle-with-e-learning-the-k2-perspective/index.html (+523ms)
17:38:43   ├─ /blog/small-team-free-lms-smart-cost-saving-or-risky-shortcut/index.html (+548ms)
17:38:43   ├─ /blog/how-to-break-into-corporate-ld-in-2026-a-complete-guide-for-teachers/index.html (+534ms)
17:38:44   ├─ /blog/why-modern-edtech-still-fails-to-create-real-skill-transfer/index.html (+531ms)
17:38:44   ├─ /blog/free-moodle-installation-the-realities-of-self-hosting-your-lms/index.html (+532ms)
17:38:45   ├─ /blog/how-to-choose-a-scorm-course-builder-that-works-with-any-lms-2026/index.html (+527ms)
17:38:45   ├─ /blog/the-ultimate-guide-to-ai-powered-course-visuals-for-educators/index.html (+549ms)
17:38:46   ├─ /blog/leadership-training-program-design-in-2026-new-generation/index.html (+545ms)
17:38:46   ├─ /blog/webinar-to-online-course-a-complete-guide-for-florida-sales-accelerator-programs-in-the-us/index.html (+537ms)
17:38:47   ├─ /blog/how-to-create-executive-assistant-elearning/index.html (+544ms)
17:38:48   ├─ /blog/how-to-design-interactive-learning-content-for-corporate-training-programs/index.html (+557ms)
17:38:48   ├─ /blog/high-impact-sales-training-slides-in-visual-storytelling-for-better-engagement/index.html (+561ms)
17:38:49   ├─ /blog/hire-an-expert-to-create-an-entrepreneurship-training-program-from-scratch/index.html (+636ms)
17:38:49   ├─ /blog/busy-course-creators-diy-vs-pro-slide-design-compare-costs-time-outsourcing-tips/index.html (+526ms)
17:38:50   ├─ /blog/miami-elearning-services-learnworlds-course-design-made-easy/index.html (+529ms)
17:38:50   ├─ /blog/phlebotomy-curriculum-design-guide-to-building-an-ai-future-ready-training-program-for-2026/index.html (+531ms)
17:38:51   ├─ /blog/busy-e-learning-teams-in-new-york-how-ai-video-creation-can-speed-up-their-training-module-production/index.html (+533ms)
17:38:51   ├─ /blog/ghl-development-and-setup-a-complete-guide-for-edtech-and-coaching-businesses-in-new-jersey/index.html (+525ms)
17:38:52   ├─ /blog/build-a-health-and-wealth-online-course-with-us-focused-content-expert/index.html (+555ms)
17:38:52   ├─ /blog/professional-kajabi-designers-in-perth-for-scalable-elearning/index.html (+529ms)
17:38:53   ├─ /blog/creating-interactive-elearning-videos-with-pre-recorded-voiceovers-a-guide-for-edtech-startups-in-new-york/index.html (+521ms)
17:38:54   ├─ /blog/leadership-course-creation-on-kajabi-for-coaching-businesses-in-miami/index.html (+524ms)
17:38:54   ├─ /blog/ultimate-guide-to-ai-content-automation-for-melbourne-course-creators/index.html (+541ms)
17:38:55   ├─ /blog/ultimate-learnworlds-lms-guide-how-elearning-businesses-in-chicago-can-design-microlearning-courses/index.html (+536ms)
17:38:55   ├─ /blog/how-to-design-a-life-health-insurance-course/index.html (+686ms)
17:38:56   ├─ /blog/ultimate-guide-to-curriculum-design-for-supply-chain-courses/index.html (+521ms)
17:38:56   ├─ /blog/instructional-design-strategies-for-course-creation-for-real-estate-investors-in-new-york/index.html (+534ms)
17:38:57   ├─ /blog/build-profitable-kajabi-courses-in-canberra-with-instructional-designpart-1/index.html (+540ms)
17:38:57   ├─ /blog/kajabi-course-creation-guide-for-edtech-startups-in-miami-why-hiring-a-kajabi-expert-matters/index.html (+537ms)
17:38:58   ├─ /blog/build-profitable-kajabi-courses-in-canberra-with-instructional-designpart-2/index.html (+538ms)
17:38:59   ├─ /blog/sales-training-workbook-vs-presentation-deck-which-drives-better-results/index.html (+548ms)
17:38:59   ├─ /blog/how-to-launch-a-kajabi-online-course-in-florida-best-practices-for-video-editing-and-e-learning-course-creation/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+706ms)
17:39:00   ├─ /blog/how-to-build-engaging-elearning-courses-in-sydney/index.html (+537ms)
17:39:00   ├─ /blog/ultimate-guide-for-queensland-course-creators-elearning-screencast-video-creation/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+543ms)
17:39:01   ├─ /blog/learndash-optimization-for-schools-teachers/index.html (+551ms)
17:39:01   ├─ /blog/how-to-design-elearning-workbooks-for-masterclasses-ultimate-2026-curriculum-guide-for-california-course-creators/index.html (+543ms)
17:39:02   ├─ /blog/how-to-create-coaching-content-systems-for-influencer-brands-of-dallasus/index.html (+539ms)
17:39:02   ├─ /blog/ultimate-talentlms-onboarding-framework-for-elearning-creators-in-ohio/index.html (+548ms)
17:39:03   ├─ /blog/hiring-selling-specialist-build-sales-funnel/index.html (+547ms)
17:39:04   ├─ /blog/creating-self-help-online-courses-in-ohio-the-ultimate-guide/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+540ms)
17:39:04   ├─ /blog/how-to-launch-a-6-week-online-course-on-a-new-lms-step-by-step-setup-guide-for-texas-creators/index.html (+560ms)
17:39:05   ├─ /blog/how-to-turn-raw-videos-into-an-online-course-content-stepwise-guide-for-california-creators/index.html (+535ms)
17:39:05   ├─ /blog/canva-video-tutorials-for-digital-products-a-complete-guide/index.html (+544ms)
17:39:06   ├─ /blog/educational-html-css-video-tutorials-a-complete-guide-for-coaches/index.html (+558ms)
17:39:06   ├─ /blog/affiliate-marketing-strategy-for-agencies-in-orlando-full-guide/index.html (+529ms)
17:39:07   ├─ /blog/how-to-produce-20-40-minute-coaching-videos-from-long-scripts/index.html (+544ms)
17:39:07   ├─ /blog/ultimate-guide-to-developing-an-elearning-curriculum-in-victoria/index.html (+539ms)
17:39:08   ├─ /blog/hybrid-yoga-teacher-training-system-for-better-learning-outcomes/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+537ms)
17:39:08   ├─ /blog/how-to-create-course-pop-ups-in-chicago-perth-best-practices/index.html (+553ms)
17:39:09   ├─ /blog/why-static-slides-fail-and-how-to-create-truly-interactive-content/index.html (+518ms)
17:39:10   ├─ /blog/ultimate-guide-to-udemy-video-editing-with-canva-doodly/index.html (+533ms)
17:39:10   ├─ /blog/ai-automation-course-creation-guide-for-new-york-edtech-startups/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+555ms)
17:39:11   ├─ /blog/philosophy-to-practice-interactive-leadership-mastery-with-ai-technology/index.html (+532ms)
17:39:11   ├─ /blog/ultimate-excel-course-video-guide-in-sydney-la-with-theeduassist/index.html (+524ms)
17:39:12   ├─ /blog/learning-experience-designer-for-elearning/index.html (+541ms)
17:39:12   ├─ /blog/how-to-create-a-youtube-channel-for-promoting-elearning-business-in-ohio-complete-2026-guide/index.html (+529ms)
17:39:13   ├─ /blog/professional-video-workshops-for-kajabi-skool-funnels-in-australia/index.html (+541ms)
17:39:13   ├─ /blog/ultimate-opigno-lms-course-development-tips-for-businesses-in-adelaide/index.html (+548ms)
17:39:14   ├─ /blog/skool-community-growth-2026-blueprint-for-high-engagement/index.html (+873ms)
17:39:15   ├─ /blog/2026-teachable-guide-how-to-build-sell-online-courses-as-a-california-creator/index.html (+550ms)
17:39:15   ├─ /blog/ai-product-training-video-blueprint-for-businesses-in-new-york/index.html (+544ms)
17:39:16   ├─ /blog/mastering-sales-objection-handling-proven-techniques-with-ai-video-training/index.html (+531ms)
17:39:16   ├─ /blog/how-to-turn-a-video-creation-course-into-a-handbook-instructional-design-guide-for-2026/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+527ms)
17:39:17   ├─ /blog/digital-marketing-curriculum-on-skool-how-to-build-high-value/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+532ms)
17:39:17   ├─ /blog/training-modules-design-for-elearning-in-ohio-2026/index.html (+601ms)
17:39:18   ├─ /blog/guide-for-creating-an-n8n-automation-online-course-2026-in-florida/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+537ms)
17:39:19   ├─ /blog/ai-hr-training-programs-with-360learning-a-practical-guide/index.html (+542ms)
17:39:19   ├─ /blog/how-to-become-a-training-coordinator-in-2026-content-and-lms-management-guide-for-course-creators-in-texas/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+669ms)
17:39:20   ├─ /blog/the-ultimate-canva-tutorial-video-formula-for-product-customization-theeduassist/index.html (+542ms)
17:39:20   ├─ /blog/instructional-design-for-leadership-training-programs-in-new-york/index.html (+544ms)
17:39:21   ├─ /blog/360-to-skool-migration-easy-guide-for-course-transfer-in-2026/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+539ms)
17:39:21   ├─ /blog/how-to-create-an-ai-elearning-course-that-sells-2026-ultimate-guide-for-new-creators-in-new-york/index.html (+535ms)
17:39:22   ├─ /blog/how-to-create-high-converting-digital-marketing-workshops-on-skool-2026-guide/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+738ms)
17:39:23   ├─ /blog/how-to-design-cybersecurity-awareness-training-for-employees-2026/index.html (+541ms)
17:39:23   ├─ /blog/how-to-build-a-high-engaging-online-community-in-mighty-networks-2026/index.html (+535ms)
17:39:24   ├─ /blog/how-to-create-a-self-help-elearning-course-that-sells-in-2026-ultimate-guide-for-victoria-coaching-businesses/index.html (+521ms)
17:39:24   ├─ /blog/how-to-build-a-transformational-curriculum-that-actually-works-step-by-step/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+527ms)
17:39:25   ├─ /blog/which-is-better-for-effective-learning-slides-or-screen-recordings/index.html (+545ms)
17:39:25   ├─ /blog/how-to-build-learning-modules-in-hibob-lms-in-australia/index.html (+655ms)
17:39:26   ├─ /blog/design-debate-training-program-in-ohio-2026/index.html (+536ms)
17:39:26   ├─ /blog/how-to-create-self-guided-learning-experiences-in-google-classroom/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+548ms)
17:39:27   ├─ /blog/ai-driven-elearning-video-production-for-the-food-industry-ultimate-guide/index.html (+549ms)
17:39:28   ├─ /blog/how-to-build-a-real-estate-virtual-strategy-with-instructional-design/index.html (+865ms)
17:39:28   ├─ /blog/guide-for-interactive-elearning-course-2026-florida-creators/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+569ms)
17:39:29   ├─ /blog/proven-instructional-design-secrets-to-create-courses-that-actually-convert/index.html (+733ms)
17:39:30   ├─ /blog/how-to-create-engaging-video-seminars-on-spotlightr-step-by-step-guide/index.html (+524ms)
17:39:30   ├─ /blog/launch-6-week-online-course-on-new-lms-in-tasmania/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+535ms)
17:39:31   ├─ /blog/create-leadership-training-program-in-florida-kajabi-2026/index.html (+534ms)
17:39:31   ├─ /blog/powerful-executive-assistant-training-review-that-actually-improves-results/index.html (+544ms)
17:39:32   ├─ /blog/6-critical-reasons-leadership-training-failshow-to-fix-them-fast/index.html (+539ms)
17:39:32   ├─ /blog/ultimate-guide-to-creating-an-ai-powered-roulette-blackjack-course/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+541ms)
17:39:33   ├─ /blog/how-to-turn-pdfs-into-high-converting-courses-that-actually-sell/index.html (+546ms)
17:39:34   ├─ /blog/stop-ineffective-training-how-to-build-uplifting-elearning-modules/index.html (+702ms)
17:39:34   ├─ /blog/how-to-transform-passive-lessons-into-interactive-learndash-courses/index.html[@portabletext/react] Unknown block type "markdownBlock", specify a component for it in the `components.types` prop
 (+535ms)
17:39:35   ├─ /blog/design-an-ai-for-everyone-course/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+535ms)
17:39:35   ├─ /blog/e-learning-videos-for-students-and-teachers-who-actually-love/index.html (+544ms)
17:39:36   ├─ /blog/how-to-sell-online-courses-that-actually-convert/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+547ms)
17:39:36   ├─ /blog/thrilling-thinkific-courses-that-learners-of-us-actually-complete/index.html (+538ms)
17:39:37   ├─ /blog/create-an-online-course-website-in-victoria-2026/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+538ms)
17:39:37   ├─ /blog/how-to-win-at-digital-product-creation-in-2026/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+539ms)
17:39:38   ├─ /blog/ultimate-canva-development-and-design-support-that-sell/index.html (+536ms)
17:39:39   ├─ /blog/build-a-thrilling-leadership-training-system-that-actually-delighted/index.html (+539ms)
17:39:39   ├─ /blog/build-a-cybersecurity-course-in-2026-scorm-and-instructional-design-guide/index.html (+738ms)
17:39:40   ├─ /blog/want-strong-case-management-traininguse-this-design-for-usaustralia/index.html (+552ms)
17:39:40   ├─ /blog/the-ultimate-guide-to-building-a-spiritual-awakening-online-course/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+525ms)
17:39:41   ├─ /blog/development-research-and-strong-curriculum-creation-for-a-thrilling-coaching-program/index.html (+530ms)
17:39:41   ├─ /blog/how-to-create-an-interactive-bible-elearning-course-instructional-design-guide-for-2026/index.html (+537ms)
17:39:42   ├─ /blog/from-ppt-to-profitable-leadership-coursethat-actually-put-impact/index.html (+533ms)
17:39:42   ├─ /blog/how-to-build-cybersecurity-curriculum-design-coursethat-actually-encourage/index.html (+627ms)
17:39:43   ├─ /blog/how-to-create-engaging-educational-content-for-online-platform-2026/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+568ms)
17:39:44   ├─ /blog/want-to-airbnb-skills-start-with-this-course-framework/index.html (+689ms)
17:39:44   ├─ /blog/systeme-io-funnel-7-proven-steps-to-launch-a-stunning-funnel/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+546ms)
17:39:45   ├─ /blog/how-to-build-a-high-performance-real-estate-video-content-engine-for-social-media-growth/index.html (+547ms)
17:39:45   ├─ /blog/creating-an-audio-video-and-workbook-based-lifestyle-elearning-course/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+543ms)
17:39:46   ├─ /blog/10-strong-reasons-its-time-to-rethink-how-we-use-the-learning-management-system/index.html (+545ms)
17:39:47   ├─ /blog/the-new-era-of-learning-development-you-can-try-today/index.html (+553ms)
17:39:47   ├─ /blog/how-to-create-professional-training-guides-with-microsoft-365/index.html (+546ms)
17:39:48   ├─ /blog/create-google-classroom-training-in-2026-in-miami/index.html (+532ms)
17:39:48   ├─ /blog/study-e-learning-design-mistakes-that-prevents-retention-rate-of-the-learner/index.html (+534ms)
17:39:49   ├─ /blog/how-to-design-an-agentic-ai-curriculum-in-7-simple-steps/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+531ms)
17:39:49   ├─ /blog/building-womens-health-elearning-funnel-in-2026-stepwise-using-ghl/index.html (+531ms)
17:39:50   ├─ /blog/build-ultimate-thrilling-corporate-training-that-actually-works-with-theeduassist/index.html (+540ms)
17:39:50   ├─ /blog/create-wellbeing-product-content-for-brands-in-new-york-step-in-2026/index.html (+549ms)
17:39:51   ├─ /blog/7-thrilling-proven-ways-to-measure-training-roi-theeduassist/index.html (+549ms)
17:39:51   ├─ /blog/how-to-build-a-15-hour-financial-literacy-program/index.html (+531ms)
17:39:52   ├─ /blog/10-strong-competitor-analysis-tools-to-benchmark-your-elearning/index.html (+534ms)
17:39:52   ├─ /blog/how-to-build-a-massive-high-ticket-funnel-in-20-days/index.html (+542ms)
17:39:53   ├─ /blog/from-completion-rates-to-strong-behaviorwhat-elearning-success-really-means/index.html (+543ms)
17:39:54   ├─ /blog/create-updated-it-classes-for-teenagers-2026-guide-for-ohio-creators/index.html (+556ms)
17:39:54   ├─ /blog/instructional-design-how-to-launch-scalable-thrilling-video-training-program/index.html (+536ms)
17:39:55   ├─ /blog/how-to-create-a-thinkific-course-7-proven-steps/index.html (+551ms)
17:39:55   ├─ /blog/profitable-and-thrilling-staad-course-with-instructional-design/index.html (+544ms)
17:39:56   ├─ /blog/5-strong-massive-benefits-of-microlearning-for-employee-training/index.html (+556ms)
17:39:56   ├─ /blog/strong-best-microlearning-platforms-for-professionals-in-the-us/index.html (+745ms)
17:39:57   ├─ /blog/in-house-vs-outsourcing-elearning-development-which-is-really-better/index.html (+549ms)
17:39:58   ├─ /blog/complete-elearning-pricing-and-course-creation-guide-for-moodle/index.html (+523ms)
17:39:58   ├─ /blog/2026-best-non-technical-scorm-course-creation-tools-easy-guide/index.html (+530ms)
17:39:59   ├─ /blog/how-to-use-teachablestep-by-step-guide-for-beginners/index.html (+718ms)
17:39:59   ├─ /blog/lms-migration-checklist-simple-steps-for-a-smooth-switch/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+552ms)
17:40:00   ├─ /blog/udemy-vs-teachable-guide-for-course-creators/index.html (+531ms)
17:40:00   ├─ /blog/is-a-skool-community-actually-worth-creating-in-2026/index.html (+608ms)
17:40:01   ├─ /blog/kajabi-vs-teachable-which-one-is-better-for-your-business/index.html (+517ms)
17:40:02   ├─ /blog/how-to-use-ai-tools-for-course-design-without-losing-quality-in-2026/index.html (+532ms)
17:40:02   ├─ /blog/easy-lms-migration-best-practices-for-moving-data-safely/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+540ms)
17:40:03   ├─ /blog/is-podia-worth-the-money-discover-its-strong-features/index.html (+546ms)
17:40:03   ├─ /blog/the-ultimate-lms-migration-timeline-for-a-smooth-platform-transition/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+750ms)
17:40:04   ├─ /blog/is-synthesia-worth-it-in-2026/index.html (+539ms)
17:40:04   ├─ /blog/moodle-elearning-with-the-best-online-learning-management-system/index.html (+745ms)
17:40:05   ├─ /blog/lms-migration-cost-guide-for-enterprises-budget-planning-made-simple/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+770ms)
17:40:06   ├─ /blog/can-synthesia-replace-your-video-production-team-in-2026/index.html (+542ms)
17:40:07   ├─ /blog/lifterlms-is-it-still-the-best-wordpress-lms/index.html (+527ms)
17:40:07   ├─ /blog/skool-community-vs-facebook-for-course-creators-the-best-choice/index.html (+545ms)
17:40:08   ├─ /blog/zero-downtime-lms-migration-the-ultimate-guide-to-no-disruption-transition/index.html (+526ms)
17:40:08   ├─ /blog/lms-integration-the-most-important-systems-to-connect-to-your-lms/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+543ms)
17:40:09   ├─ /blog/is-adobe-captivate-worth-the-cost/index.html (+527ms)
17:40:09   ├─ /blog/discover-kajabi-the-most-popular-platform-of-elearning-world/index.html (+543ms)
17:40:10   ├─ /blog/7-powerful-kajabi-course-creation-services/index.html (+742ms)
17:40:11   ├─ /blog/kajabi-online-course-setup/index.html (+544ms)
17:40:11   ├─ /blog/kajabi-course-design/index.html (+1.06s)
17:40:12   ├─ /blog/kajabi-membership-sites-development/index.html (+558ms)
17:40:13   ├─ /blog/kajabi-coaching-program-setup/index.html (+552ms)
17:40:13   ├─ /blog/kajabi-digital-product-creation/index.html (+656ms)
17:40:14   ├─ /blog/kajabi-drip-course-setup/index.html (+759ms)
17:40:15   ├─ /blog/kajabi-course-upload-services/index.html (+843ms)
17:40:15   ├─ /blog/how-to-create-a-kajabi-training-platform/index.html (+537ms)
17:40:16   ├─ /blog/kajabi-course-templates/index.html (+539ms)
17:40:17   ├─ /blog/kajabi-website-funnel-services/index.html (+632ms)
17:40:17   ├─ /blog/kajabi-website-design-services/index.html (+850ms)
17:40:18   ├─ /blog/kajabi-sales-funnel-setup/index.html (+548ms)
17:40:19   ├─ /blog/kajabi-landing-page-design/index.html (+650ms)
17:40:19   ├─ /blog/kajabi-funnel-builder/index.html (+538ms)
17:40:20   ├─ /blog/kajabi-webinar-funnel/index.html (+536ms)
17:40:20   ├─ /blog/is-teachable-the-best-platform-for-offering-online-courses/index.html (+543ms)
17:40:21   ├─ /blog/microlearning-the-ultimate-guide-of-theeduassist/index.html (+650ms)
17:40:21   ├─ /blog/kajabi-sales-funnel-setup-5-proven-ways-to-grow-enrollments/index.html (+541ms)
17:40:22   ├─ /blog/how-can-corporate-training-actually-improve-employee-engagement/index.html (+553ms)
17:40:23   ├─ /blog/kajabi-email-marketing-funnels/index.html (+767ms)
17:40:23   ├─ /blog/kajabi-checkout-page-optimization/index.html (+749ms)
17:40:24   ├─ /blog/why-you-should-switch-to-kajabi-the-ultimate-website-migration-guide/index.html (+540ms)
17:40:25   ├─ /blog/employee-development-programs/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+527ms)
17:40:25   ├─ /blog/best-kajabi-website-templates/index.html (+544ms)
17:40:26   ├─ /blog/kajabi-lead-generation-funnels/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+538ms)
17:40:26   ├─ /blog/how-to-build-a-lifterlms-employee-training-portal/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+532ms)
17:40:27   ├─ /blog/how-to-run-kajabi-email-campaigns-successfully/index.html (+532ms)
17:40:27   ├─ /blog/kajabi-automation-workflows/index.html (+839ms)
17:40:28   ├─ /blog/kajabi-vs-clickfunnels/index.html (+545ms)
17:40:29   ├─ /blog/kajabi-marketing-services/index.html (+639ms)
17:40:29   ├─ /blog/kajabi-crm-integration/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+534ms)
17:40:30   ├─ /blog/increase-online-course-traffic-with-the-best-kajabi-seo-services/index.html (+547ms)
17:40:30   ├─ /blog/corporate-training-simulations/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+534ms)
17:40:31   ├─ /blog/is-podia-good-for-beginners/index.html (+549ms)
17:40:32   ├─ /blog/make-more-money-while-you-sleep-with-kajabi-email-automation/index.html (+538ms)
17:40:32   ├─ /blog/blog-ai-vs-traditional-instructional-design/index.html (+537ms)
17:40:33   ├─ /blog/podia-vs-teachable/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+533ms)
17:40:33   ├─ /blog/which-lms-plugin-is-better-learndash-or-lifterlms/index.html (+679ms)
17:40:34   ├─ /blog/kajabi-affiliate-marketing-setup/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+538ms)
17:40:34   ├─ /blog/how-to-choose-the-right-lms-for-your-organization-in-2026/index.html (+555ms)
17:40:35   ├─ /blog/best-learning-management-system-lms-for-2026/index.html (+648ms)
17:40:36   ├─ /blog/is-absorb-lms-right-for-small-businessthe-strong-eduassist-guide/index.html (+535ms)
17:40:36   ├─ /blog/ai-upskilling-strategy/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+636ms)
17:40:37   ├─ /blog/how-to-use-kajabi-gamification-in-2026/index.html (+533ms)
17:40:37   ├─ /blog/how-to-create-online-courses-with-lifterlms/index.html (+528ms)
17:40:38   ├─ /blog/can-ar-and-vr-really-improve-learning-outcomes/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+531ms)
17:40:38   ├─ /blog/ai-powered-learning-a-smarter-way-to-train-and-upskill-employees/index.html (+631ms)
17:40:39   ├─ /blog/instructional-designer-vs-developer/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+540ms)
17:40:39   ├─ /blog/kajabi-pipeline-setup/index.html (+533ms)
17:40:40   ├─ /blog/kajabi-email-strategy-how-to-use-broadcasts-and-sequences-effectively/index.html (+540ms)
17:40:41   ├─ /blog/kajabi-launch-strategy/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+708ms)
17:40:41   ├─ /blog/kajabi-templates/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+827ms)
17:40:42   ├─ /blog/kajabi-sales-automation-why-your-sales-funnel-is-broken-and-how-to-fix-it/index.html (+541ms)
17:40:43   ├─ /blog/is-it-worth-hiring-an-in-house-instructional-designer/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+549ms)
17:40:43   ├─ /blog/how-to-build-a-corporate-elearning-program-on-a-budget-a-complete-2026-guide/index.html (+546ms)
17:40:44   ├─ /blog/how-to-convert-legacy-training-content-to-modern-elearning/index.html (+548ms)
17:40:44   ├─ /blog/kajabi-crm-how-to-manage-leads-and-students-in-one-place/index.html (+547ms)
17:40:45   ├─ /blog/xapi-vs-scorm-best-lms-in-2026/index.html (+622ms)
17:40:45   ├─ /blog/how-to-create-a-scorm-course-without-coding/index.html (+532ms)
17:40:46   ├─ /blog/kajabi-blogging-strategy/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+537ms)
17:40:47   ├─ /blog/kajabi-ai-features-in-2026/index.html (+791ms)
17:40:47   ├─ /blog/model-context-protocol-mcp-for-lms-everything-you-need-to-know/index.html (+536ms)
17:40:48   ├─ /blog/xapi-learning-record-store-lrs-everything-you-need-to-know-in-2026/index.html (+531ms)
17:40:48   ├─ /blog/lms-vr-integration/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+541ms)
17:40:49   ├─ /blog/the-ultimate-guide-to-ar-and-vr-in-online-learning-in-2026/index.html (+535ms)
17:40:49   ├─ /blog/corporate-training-roi-calculator-measuring-learning-effectiveness/index.html (+540ms)
17:40:50   ├─ /blog/learndash-vs-kajabi/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+541ms)
17:40:51   ├─ /blog/ada-and-wcag-compliance-for-elearning-a-simple-self-audit-checklist/index.html (+533ms)
17:40:51   ├─ /blog/vr-training-costs/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+744ms)
17:40:52   ├─ /blog/7-powerful-reasons-why-microlearning-is-the-future-of-employee-training/index.html (+535ms)
17:40:52   ├─ /blog/kajabi-keyword-research/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+647ms)
17:40:53   ├─ /blog/lxp-vs-lms-which-one-does-your-business-need-in-2026/index.html (+531ms)
17:40:54   ├─ /blog/how-to-migrate-to-a-new-lms-a-complete-checklist-for-2026/index.html (+536ms)
17:40:54   ├─ /blog/migrate-teachable-to-learndash/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+549ms)
17:40:55   ├─ /blog/kajabi-organic-traffic-growth/index.html (+531ms)
17:40:55   ├─ /blog/kajabi-membership-site-7-steps-to-launch-a-successful-membership/index.html (+537ms)
17:40:56   ├─ /blog/off-the-shelf-elearning-is-it-right-for-your-company/index.html (+527ms)
17:40:56   ├─ /blog/kajabi-analytics-the-complete-guide-to-tracking-course-performance-in-2026/index.html (+526ms)
17:40:57   ├─ /blog/learndash-scorm-for-enterprise-tracking/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+527ms)
17:40:57   ├─ /blog/ai-in-elearning-the-complete-guide-to-smarter-digital-learning/index.html (+538ms)
17:40:58   ├─ /blog/lms-integration-how-to-connect-hris-crm-slack-and-teams/index.html (+530ms)
17:40:58   ├─ /blog/lms-user-adoption-15-proven-ways-to-increase-employee-engagement/index.html (+538ms)
17:40:59   ├─ /blog/kajabi-conversion-optimization/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+540ms)
17:40:59   ├─ /blog/lms-vs-lxp-a-complete-comparison-for-ld-professionals/index.html (+539ms)
17:41:00   ├─ /blog/teachable-alternatives/index.html[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
[@portabletext/react] Unknown block type "table", specify a component for it in the `components.types` prop
 (+532ms)
17:41:00   ├─ /blog/skills-based-learning-or-traditional-training/index.html (+537ms)
17:41:01   ├─ /blog/index.html (+790ms)
17:41:02   ├─ /book-free-audit/index.html (+406ms)
17:41:02   ├─ /book-free-kajabi-audit/index.html (+501ms)
17:41:03   ├─ /brand-assets/index.html (+396ms)
17:41:03   ├─ /careers/index.html (+406ms)
17:41:03   ├─ /case-studies/sqa-aligned-vocational-training/index.html (+385ms)
17:41:04   ├─ /case-studies/business-analytics-corporate-training/index.html (+396ms)
17:41:04   ├─ /case-studies/language-courses-book-publisher/index.html (+398ms)
17:41:05   ├─ /case-studies/index.html (+580ms)
17:41:05   ├─ /contact/index.html (+498ms)
17:41:06   ├─ /cookie-policy/index.html (+416ms)
17:41:06   ├─ /disclaimer/index.html (+524ms)
17:41:07   ├─ /editorial-policy/index.html (+405ms)
17:41:07   ├─ /enterprise-solutions/ai-workforce-readiness/index.html (+687ms)
17:41:08   ├─ /enterprise-solutions/customer-education/index.html (+411ms)
17:41:08   ├─ /enterprise-solutions/employee-onboarding/index.html (+406ms)
17:41:09   ├─ /enterprise-solutions/internal-learning-academies/index.html (+407ms)
17:41:09   ├─ /enterprise-solutions/partner-training/index.html (+400ms)
17:41:09   ├─ /enterprise-solutions/project-brief/index.html (+389ms)
17:41:10   ├─ /enterprise-solutions/workforce-upskilling/index.html (+413ms)
17:41:10   ├─ /enterprise-solutions/index.html (+420ms)
17:41:11   ├─ /kajabi-services/index.html (+398ms)
17:41:11   ├─ /locations/north-america/index.html (+384ms)
17:41:11   ├─ /locations/europe/index.html (+391ms)
17:41:12   ├─ /locations/middle-east/index.html (+379ms)
17:41:12   ├─ /locations/asia-pacific/index.html (+387ms)
17:41:13   ├─ /locations/australia-new-zealand/index.html (+480ms)
17:41:13   ├─ /locations/gcc-elearning-services/index.html (+390ms)
17:41:13   ├─ /locations/africa/index.html (+382ms)
17:41:14   ├─ /locations/latin-america/index.html (+389ms)
17:41:14   ├─ /locations/united-states/index.html (+405ms)
17:41:15   ├─ /locations/united-kingdom/index.html (+382ms)
17:41:15   ├─ /locations/canada/index.html (+566ms)
17:41:16   ├─ /locations/australia/index.html (+383ms)
17:41:16   ├─ /locations/united-arab-emirates/index.html (+385ms)
17:41:16   ├─ /locations/saudi-arabia/index.html (+382ms)
17:41:17   ├─ /locations/qatar/index.html (+382ms)
17:41:17   ├─ /locations/singapore/index.html (+389ms)
17:41:17   ├─ /locations/pakistan/index.html (+386ms)
17:41:18   ├─ /locations/india/index.html (+392ms)
17:41:18   ├─ /locations/germany/index.html (+387ms)
17:41:19   ├─ /locations/france/index.html (+392ms)
17:41:19   ├─ /locations/netherlands/index.html (+386ms)
17:41:19   ├─ /locations/ireland/index.html (+395ms)
17:41:20   ├─ /locations/south-africa/index.html (+395ms)
17:41:20   ├─ /locations/new-york-elearning-development/index.html (+398ms)
17:41:21   ├─ /locations/london-elearning-development/index.html (+399ms)
17:41:21   ├─ /locations/dubai-elearning-development/index.html (+389ms)
17:41:21   ├─ /locations/sydney-elearning-development/index.html (+401ms)
17:41:22   ├─ /locations/toronto-elearning-development/index.html (+383ms)
17:41:22   ├─ /locations/singapore-elearning-development/index.html (+388ms)
17:41:23   ├─ /locations/riyadh-elearning-development/index.html (+393ms)
17:41:23   ├─ /locations/los-angeles-elearning-development/index.html (+389ms)
17:41:23   ├─ /locations/chicago-elearning-development/index.html (+394ms)
17:41:24   ├─ /locations/melbourne-elearning-development/index.html (+394ms)
17:41:24   ├─ /locations/san-francisco-elearning-development/index.html (+392ms)
17:41:25   ├─ /locations/vancouver-elearning-development/index.html (+382ms)
17:41:25   ├─ /locations/doha-elearning-development/index.html (+398ms)
17:41:25   ├─ /locations/abu-dhabi-elearning-development/index.html (+391ms)
17:41:26   ├─ /locations/jeddah-elearning-development/index.html (+394ms)
17:41:26   ├─ /locations/karachi-elearning-development/index.html (+386ms)
17:41:26   ├─ /locations/lahore-elearning-development/index.html (+393ms)
17:41:27   ├─ /locations/islamabad-elearning-development/index.html (+377ms)
17:41:27   ├─ /locations/mumbai-elearning-development/index.html (+383ms)
17:41:28   ├─ /locations/bengaluru-elearning-development/index.html (+389ms)
17:41:28   ├─ /locations/berlin-elearning-development/index.html (+392ms)
17:41:28   ├─ /locations/paris-elearning-development/index.html (+390ms)
17:41:29   ├─ /locations/amsterdam-elearning-development/index.html (+389ms)
17:41:29   ├─ /locations/dublin-elearning-development/index.html (+391ms)
17:41:30   ├─ /locations/johannesburg-elearning-development/index.html (+391ms)
17:41:30   ├─ /locations/cape-town-elearning-development/index.html (+396ms)
17:41:30   ├─ /locations/kuala-lumpur-elearning-development/index.html (+444ms)
17:41:31   ├─ /locations/manchester-elearning-development/index.html (+407ms)
17:41:31   ├─ /locations/zurich-elearning-development/index.html (+385ms)
17:41:32   ├─ /locations/index.html (+612ms)
17:41:32   ├─ /media-kit/index.html (+401ms)
17:41:33   ├─ /news/index.html (+386ms)
17:41:33   ├─ /newsroom/index.html (+446ms)
17:41:33   ├─ /platforms/index.html (+528ms)
17:41:34   ├─ /press-releases/theeduassist-expands-elearning-design-services/index.html (+402ms)
17:41:34   ├─ /press-releases/index.html (+397ms)
17:41:35   ├─ /pricing/index.html (+396ms)
17:41:35   ├─ /privacy-policy/index.html (+391ms)
17:41:36   ├─ /rss.xml (+464ms)
17:41:36   ├─ /services/ai-ethics-corporate-training/index.html (+397ms)
17:41:36   ├─ /services/ai-powered-elearning/index.html (+513ms)
17:41:37   ├─ /services/assessment-design/index.html (+409ms)
17:41:37   ├─ /services/content-conversion/index.html (+607ms)
17:41:38   ├─ /services/course-development/index.html (+608ms)
17:41:39   ├─ /services/course-localization-translation/index.html (+403ms)
17:41:39   ├─ /services/custom-elearning-development/index.html (+393ms)
17:41:39   ├─ /services/funnels-automation/index.html (+473ms)
17:41:40   ├─ /services/instructional-design/index.html (+401ms)
17:41:40   ├─ /services/learning-strategy/index.html (+398ms)
17:41:41   ├─ /services/lms-implementation-migration/index.html (+405ms)
17:41:41   ├─ /services/managed-learning/index.html (+402ms)
17:41:41   ├─ /services/ongoing-support-maintenance/index.html (+407ms)
17:41:42   ├─ /services/quality-assurance/index.html (+392ms)
17:41:42   ├─ /services/index.html (+409ms)
17:41:43   ├─ /sitemap/index.html (+621ms)
17:41:43   ├─ /terms-and-conditions/index.html (+598ms)
17:41:44   ├─ /trust-centre/accessibility/index.html (+394ms)
17:41:44   ├─ /trust-centre/delivery-methodology/index.html (+392ms)
17:41:45   ├─ /trust-centre/procurement/index.html (+397ms)
17:41:45   ├─ /trust-centre/responsible-ai/index.html (+389ms)
17:41:45   ├─ /trust-centre/security-privacy/index.html (+395ms)
17:41:46   ├─ /trust-centre/index.html (+392ms)
17:41:46   ├─ /about/index.html (+388ms)
17:41:47   ├─ /home/index.html (+397ms)
17:41:47   ├─ /index.html (+550ms)
17:41:48 ✓ Completed in 3m 57s.

17:41:48 [build] Rearranging server assets...
17:41:48 [build] ✓ Completed in 4m 4s.
17:41:48 [@astrojs/vercel] Bundling function ../../../../dist/server/entry.mjs
17:41:51 [build] Waiting for integration "@astrojs/vercel", hook "astro:build:done"...
17:41:51 [@astrojs/vercel] Copying static files to .vercel/output/static
17:41:51 [build] Server built in 4m 8s
17:41:51 [build] Complete!

> theeduassist@1.0.0 validate:overflow
> node scripts/validate-overflow.mjs

Ensure the app is running on port 4321 before running this script.
node:internal/process/promises:394
    triggerUncaughtException(err, true /* fromPromise */);
    ^

browserType.launch: Executable doesn't exist at /home/jules/.cache/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell
╔════════════════════════════════════════════════════════════╗
║ Looks like Playwright was just installed or updated.       ║
║ Please run the following command to download new browsers: ║
║                                                            ║
║     npx playwright install                                 ║
║                                                            ║
║ <3 Playwright Team                                         ║
╚════════════════════════════════════════════════════════════╝
    at checkOverflow (/app/scripts/validate-overflow.mjs:35:34)
    at /app/scripts/validate-overflow.mjs:103:1 {
  log: [],
  name: 'Error'
}

Node.js v22.22.1
