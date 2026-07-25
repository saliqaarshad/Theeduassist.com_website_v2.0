# Legacy Redirect Map

Added exact legacy URLs from task instructions:
- `/case-studies-1/` -> `/case-studies/` (301)
- `/kajabi-virtual-assistant-services/` -> `/kajabi-services/` (301)
- `/ebook-services/` -> `/services/content-conversion/` (301)
- `/tag/thinkific-marketing/` -> 410
- `/tag/theeduassist-com-course-creation/` -> 410
- `/jobs/lead-generation-internfresh-grads-unpaid/` -> 410

Action plan:
Add these to `vercel.json` redirects since it handles status codes like 410 via `destination: "/404"` and maybe some 410. Vercel supports permanent redirects and 404s. Wait, vercel.json `redirects` doesn't natively do 410 status. Actually wait, to do true 410 in Astro/Vercel, we can create a `_redirects` file or use `vercel.json` `redirects` with `statusCode`. No, Vercel `redirects` supports `statusCode: 301, 302, 307, 308, 410`. Let's check Vercel docs.
