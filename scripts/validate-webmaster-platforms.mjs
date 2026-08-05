import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let hasErrors = false;

function validateSeoComponentSource() {
    const componentPath = path.join(__dirname, '../src/components/seo/SiteVerification.astro');
    if (!fs.existsSync(componentPath)) {
        console.error(`❌ SiteVerification.astro component is missing.`);
        hasErrors = true;
        return;
    }

    const content = fs.readFileSync(componentPath, 'utf8');
    if (content.includes('import.meta.env[')) {
        console.error(`❌ Dynamic import.meta.env access found in SiteVerification.astro.`);
        hasErrors = true;
    }
}

function validateRobots() {
     const robotsPath = path.join(__dirname, '../public/robots.txt');
     if (fs.existsSync(robotsPath)) {
         const content = fs.readFileSync(robotsPath, 'utf8');
         if (!content.includes('Sitemap: https://www.theeduassist.com/sitemap.xml')) {
              console.error(`❌ Authoritative sitemap missing from robots.txt`);
              hasErrors = true;
         }
     }
}

function validateGeneratedHtml() {
    const htmlFiles = globSync('dist/**/*.html');
    const placeholders = ['YOUR_VERIFICATION_CODE', 'REPLACE_ME', 'undefined', 'null'];

    htmlFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');

        // Extract meta tags from head (rough extraction for verification tags)
        const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
        if (!headMatch) return;

        const headContent = headMatch[1];
        const metaTags = [...headContent.matchAll(/<meta\s+name="([^"]+)"\s+content="([^"]*)"/g)];

        const verificationNames = [
            'google-site-verification',
            'msvalidate.01',
            'yandex-verification',
            'naver-site-verification',
            'baidu-site-verification'
        ];

        const seenTags = new Set();

        metaTags.forEach(m => {
             const name = m[1];
             const val = m[2];

             if (verificationNames.includes(name)) {
                 if (seenTags.has(name)) {
                     console.error(`❌ Duplicate verification tag '${name}' found in ${file}`);
                     hasErrors = true;
                 }
                 seenTags.add(name);

                 if (val.trim() === '') {
                     console.error(`❌ Empty verification tag '${name}' found in ${file}`);
                     hasErrors = true;
                 }

                 if (placeholders.some(p => val.includes(p))) {
                     console.error(`❌ Placeholder value found in verification tag '${name}' in ${file}`);
                     hasErrors = true;
                 }
             }
        });
    });
}

console.log('Validating Webmaster Platforms Architecture...');
validateSeoComponentSource();
validateRobots();
validateGeneratedHtml();

if (hasErrors) {
    console.error('\n🚨 Webmaster Platforms validation failed.');
    process.exit(1);
} else {
    console.log('\n🎉 Webmaster Platforms validation passed.');
}
