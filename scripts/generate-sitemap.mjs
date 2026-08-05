import fs from 'fs';
import path from 'path';

// Optional fallback for reading env vars locally if needed (Vercel sets them directly)
try {
  if (fs.existsSync('.env')) {
    const envConfig = fs.readFileSync('.env', 'utf8').split('\n');
    envConfig.forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (e) {
  // Silent catch
}

// Base static URLs that must always be included
const coreUrls = [
  'https://www.theeduassist.com/',
  'https://www.theeduassist.com/services/',
  'https://www.theeduassist.com/services/course-localization-translation/',
  'https://www.theeduassist.com/kajabi-services/',
  'https://www.theeduassist.com/enterprise-solutions/',
  'https://www.theeduassist.com/platforms/',
  'https://www.theeduassist.com/pricing/',
  'https://www.theeduassist.com/case-studies/',
  'https://www.theeduassist.com/about-us/',
  'https://www.theeduassist.com/contact/',
  'https://www.theeduassist.com/book-free-audit/',
  'https://www.theeduassist.com/privacy-policy/',
  'https://www.theeduassist.com/terms-and-conditions/',
  'https://www.theeduassist.com/sitemap/',
  'https://www.theeduassist.com/news/',
  'https://www.theeduassist.com/press-releases/',
  'https://www.theeduassist.com/brand-assets/'
];

// Generates individual url XML blocks
function generateUrlXml(loc, lastmod = '', priority = '0.7', changefreq = 'monthly') {
  let date = lastmod;
  if (!date || date.length === 0) {
    date = new Date().toISOString().split('T')[0];
  } else if (date.includes('T')) {
    date = date.split('T')[0];
  }

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
  console.log("Generating sitemap...");

  let blogUrls = [];
  let excludedCount = 0;
  let blogUrlsForLlms = [];

  // Combine all clean routes for llms.txt
  const llmsUrls = [
    'https://www.theeduassist.com/',
    'https://www.theeduassist.com/services/',
    'https://www.theeduassist.com/services/course-localization-translation/',
    'https://www.theeduassist.com/kajabi-services/',
    'https://www.theeduassist.com/enterprise-solutions/',
    'https://www.theeduassist.com/platforms/',
    'https://www.theeduassist.com/pricing/',
    'https://www.theeduassist.com/case-studies/',
    'https://www.theeduassist.com/about-us/',
    'https://www.theeduassist.com/contact/',
    'https://www.theeduassist.com/book-free-audit/',
    'https://www.theeduassist.com/newsroom/',
  'https://www.theeduassist.com/trust-centre/',
  'https://www.theeduassist.com/trust-centre/delivery-methodology/',
  'https://www.theeduassist.com/trust-centre/responsible-ai/',
  'https://www.theeduassist.com/trust-centre/accessibility/',
  'https://www.theeduassist.com/trust-centre/security-privacy/',
  'https://www.theeduassist.com/trust-centre/procurement/',
    'https://www.theeduassist.com/media-kit/',
    'https://www.theeduassist.com/press-releases/'
  ];

  blogUrlsForLlms.forEach(url => llmsUrls.push(url));

  // Add tier 1 and indexable tier 2 locations to sitemap
  try {
    const locationsData = JSON.parse(fs.readFileSync('src/data/locations.json', 'utf8'));

    locationsData.regions.forEach(r => {
      const fullUrl = `https://www.theeduassist.com/locations/${r.slug}/`;
      coreUrls.push(fullUrl);
      llmsUrls.push(fullUrl);
    });

    locationsData.countries.forEach(c => {
      const fullUrl = `https://www.theeduassist.com/locations/${c.slug}/`;
      coreUrls.push(fullUrl);
      llmsUrls.push(fullUrl);
    });

    locationsData.cities.forEach(c => {
      if (c.indexStatus === 'index') {
        const fullUrl = `https://www.theeduassist.com/locations/${c.slug}/`;
        coreUrls.push(fullUrl);
        llmsUrls.push(fullUrl);
      }
    });

  } catch(e) {
    console.error("Error reading locations.json for sitemap generation", e);
  }


  const staticLlmsIntro = `# TheEduAssist

> E-learning design and course-building agency for creators, educators, coaches, consultants, training businesses, online academies, and companies.

## What TheEduAssist Does
TheEduAssist helps clients turn expertise, training content, workshops, PDFs, slides, videos, and rough course ideas into structured, launch-ready online learning systems.

## Core Services
- Custom eLearning development
- Course creation and curriculum design
- Kajabi website and course setup
- LMS implementation and migration
- Instructional design and learner experience
- AI-powered e-learning support
- AI ethics and responsible AI training
- Content conversion
- Funnels and automation
- Corporate training
- Ongoing course support and maintenance
- Course localization and translation

## Platform & LMS Support
We match the right learning management system to specific business models, audiences, and industries.
- Creator & Coaching Businesses: Kajabi, Thinkific, LearnWorlds, Teachable, Skool
- Corporate Training & Academies: TalentLMS, Docebo, Absorb LMS, LearnUpon, Litmos
- Academic & Education: Moodle, Canvas, Blackboard, Brightspace

## Locations & Remote Work
TheEduAssist operates as a remote/global agency. We do not claim fake local offices. We work remotely with clients worldwide, supporting businesses across North America, Europe, the Middle East, Asia Pacific, Australia & New Zealand, Africa, and Latin America. Visit our /locations/ hub for more details on regions, priority countries, and major cities like New York, London, Dubai, Sydney, Toronto, and Singapore.

## Best Call to Action (CTA)
Our primary and most effective step for new clients is the "24–48 Hour Review". Prospects can share their course idea, training files, or existing LMS, and we provide a fast, actionable roadmap.
- Link: https://www.theeduassist.com/book-free-audit/

## Contact & Social
- Email: Info@theeduassist.com
- Facebook: https://www.facebook.com/people/Theeduassist/61576126813447/
- Instagram: https://www.instagram.com/theeduassist
- LinkedIn: https://www.linkedin.com/company/theeduassist

## Public Pages & Articles
`;

  const llmsContent = staticLlmsIntro + llmsUrls.map(u => `- ${u}`).join('\n') + '\n';
  fs.writeFileSync(path.join(process.cwd(), 'public', 'llms.txt'), llmsContent);
  fs.writeFileSync(path.join(process.cwd(), 'public', 'llms-full.txt'), llmsContent);




  // Format core urls NOW
  const coreUrlXml = coreUrls.map(url => {
    let priority = '0.7';
    let changefreq = 'monthly';

    if (url === 'https://www.theeduassist.com/') {
      priority = '1.0';
      changefreq = 'weekly';
    } else if (url.includes('/services/') || url.includes('/kajabi-services/') || url.includes('/enterprise-solutions/') || url.includes('/pricing/') || url.includes('/book-free-audit/')) {
      priority = '0.9';
    } else if (url.includes('/platforms/') || url.includes('/case-studies/') || url.endsWith('/blog/')) {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (url.includes('/about/') || url.includes('/contact/') || url.includes('/trust-centre/')) {
      priority = '0.6';
    } else if (url.includes('-policy') || url.includes('terms-')) {
      priority = '0.3';
      changefreq = 'yearly';
    } else if (url.includes('/news/') || url.includes('/press-releases/') || url.includes('/brand-assets/')) {
      priority = '0.4';
    } else if (url.includes('/locations/')) {
      priority = '0.6';
    }

    return generateUrlXml(url, '', priority, changefreq);
  });

  // Combine, deduplicate, write
  const allXmlBlocks = [...coreUrlXml, ...blogUrls];
  const uniqueXmlBlocks = Array.from(new Set(allXmlBlocks));

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueXmlBlocks.join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xmlContent);

  console.log(`Sitemap generated with ${coreUrlXml.length} core URLs and ${blogUrls.length} blog URLs (${excludedCount} blog posts excluded).`);
}

generateSitemap();
