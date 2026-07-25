import fs from 'fs';
import path from 'path';

console.log("Validating footer UX...");

let hasErrors = false;
const footerContent = fs.readFileSync(path.join(process.cwd(), 'src/components/layout/Footer.astro'), 'utf8');

if (footerContent.match(/<footer/g)?.length > 1) {
    console.error("❌ Multiple footers found");
    hasErrors = true;
}

if (footerContent.includes('href="#"')) {
    console.error('❌ Found href="#" placeholder link');
    hasErrors = true;
}

const matches = footerContent.match(/Ready to Build a Better Learning Experience\?/g);
if (!matches || matches.length === 0) {
     console.error("❌ Top CTA missing or incorrect text");
     hasErrors = true;
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log("🎉 Footer UX validated successfully.");
}
