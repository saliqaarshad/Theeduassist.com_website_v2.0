const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    storageState: undefined
  });

  const urls = [
    'https://www.theeduassist.com/',
    'https://www.theeduassist.com/about/',
    'https://www.theeduassist.com/services/',
    'https://www.theeduassist.com/pricing/',
    'https://www.theeduassist.com/blog/',
    'https://www.theeduassist.com/blog/understanding-the-uk-education-system/',
    'https://www.theeduassist.com/blog/how-to-choose-the-right-university/',
    'https://www.theeduassist.com/blog/top-10-tips-for-international-students/',
    'https://www.theeduassist.com/case-studies/', // Just guessing urls
    'https://www.theeduassist.com/case-studies/student-success-story/',
    'https://www.theeduassist.com/contact/',
    'https://www.theeduassist.com/this-is-a-404-url-that-does-not-exist/'
  ];

  for (const url of urls) {
    console.log(`\nTesting ${url}`);
    const page = await context.newPage();
    let sanityRequests = 0;

    page.on('request', request => {
      const reqUrl = request.url();
      if (reqUrl.includes('api.sanity.io') || reqUrl.includes('apicdn.sanity.io')) {
        console.log(`  [SANITY API] ${reqUrl}`);
        sanityRequests++;
      } else if (reqUrl.includes('cdn.sanity.io')) {
        // console.log(`  [SANITY CDN] Image request: ${reqUrl}`);
      }
    });

    try {
      await page.goto(url, { waitUntil: 'networkidle' });
      console.log(`  -> API/APICDN Requests: ${sanityRequests}`);
    } catch (e) {
      console.log(`  -> Error loading page: ${e.message}`);
    }
    await page.close();
  }

  await browser.close();
})();
