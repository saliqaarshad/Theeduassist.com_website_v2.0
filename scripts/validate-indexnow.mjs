import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let hasErrors = false;

function validateKeyFile() {
    const key = 'b50f16bdf5ffe352f6c93e5bcdfdd691';
    const filePath = path.join(__dirname, `../public/${key}.txt`);

    if (!fs.existsSync(filePath)) {
        console.error(`❌ IndexNow key file missing: public/${key}.txt`);
        hasErrors = true;
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8').trim();
    if (content !== key) {
        console.error(`❌ IndexNow key file content does not match filename.`);
        hasErrors = true;
    }

    if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
         console.error(`❌ IndexNow key format is invalid.`);
         hasErrors = true;
    }
}

function parseSitemapAndCheckUrls(sitemapPath, blockedUrls) {
    if (!fs.existsSync(sitemapPath)) {
        return;
    }

    const content = fs.readFileSync(sitemapPath, 'utf8');

    // Check if it's a sitemap index
    if (content.includes('<sitemapindex')) {
        const sitemaps = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
        sitemaps.forEach(url => {
            const filename = url.split('/').pop();
            const childPath = path.join(__dirname, `../.vercel/output/static/${filename}`);
            parseSitemapAndCheckUrls(childPath, blockedUrls);
        });
        return;
    }

    // It's a standard sitemap
    const locs = [...content.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    locs.forEach(loc => {
        blockedUrls.forEach(blocked => {
             if (loc.includes(blocked) || loc.endsWith('.txt')) {
                 console.error(`❌ IndexNow key file must not appear in sitemap:`);
                 console.error(`Sitemap: ${sitemapPath}`);
                 console.error(`URL: ${loc}`);
                 hasErrors = true;
             }
        });
    });
}

function validateSitemapExclusion() {
    const key = 'b50f16bdf5ffe352f6c93e5bcdfdd691';
    const sitemapIndex = path.join(__dirname, '../.vercel/output/static/sitemap-index.xml');
    const fallbackSitemap = path.join(__dirname, '../.vercel/output/static/sitemap.xml');

    const blockedUrls = [
         `/${key}.txt`,
         '/indexnow/',
         'api.indexnow.org',
         '/api/',
         'localhost',
         '.vercel.app'
    ];

    if (fs.existsSync(sitemapIndex)) {
        parseSitemapAndCheckUrls(sitemapIndex, blockedUrls);
    } else if (fs.existsSync(fallbackSitemap)) {
        parseSitemapAndCheckUrls(fallbackSitemap, blockedUrls);
    } else {
        console.warn('⚠️ No sitemap found to validate against.');
    }
}

console.log('Validating IndexNow Architecture...');
validateKeyFile();
validateSitemapExclusion();

if (hasErrors) {
    console.error('\n🚨 IndexNow validation failed.');
    process.exit(1);
} else {
    console.log('\n🎉 IndexNow validation passed.');
}
