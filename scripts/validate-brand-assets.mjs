import fs from 'fs';
import path from 'path';

console.log("Validating brand assets...");

let hasErrors = false;
const officialLogoPath = path.join(process.cwd(), 'public/brand/theeduassist-logo-official.svg');

if (!fs.existsSync(officialLogoPath)) {
    console.error("❌ Official logo missing at " + officialLogoPath);
    hasErrors = true;
}

const headerContent = fs.readFileSync(path.join(process.cwd(), 'src/components/layout/Header.astro'), 'utf8');
const footerContent = fs.readFileSync(path.join(process.cwd(), 'src/components/layout/Footer.astro'), 'utf8');

if (!headerContent.includes('BrandLogo') && !headerContent.includes('/brand/theeduassist-logo-official.svg')) {
     console.error("❌ Header is missing official logo");
     hasErrors = true;
}

if (!footerContent.includes('BrandLogo') && !footerContent.includes('/brand/theeduassist-logo-official.svg')) {
     console.error("❌ Footer is missing official logo");
     hasErrors = true;
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log("🎉 Brand assets validated successfully.");
}
