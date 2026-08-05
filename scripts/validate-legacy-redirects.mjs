import fs from 'fs';
import path from 'path';

console.log("Validating legacy redirects...");

const vercelJsonPath = path.join(process.cwd(), 'vercel.json');
const redirectsTsPath = path.join(process.cwd(), 'src/data/redirects.ts');

let hasErrors = false;

try {
  const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
  const redirects = vercelJson.redirects || [];

  redirects.forEach(r => {
    if (r.source === r.destination) {
      console.error(`❌ Source matches destination: ${r.source}`);
      hasErrors = true;
    }
  });
} catch (e) {
  console.error(`Failed to parse vercel.json: ${e.message}`);
  hasErrors = true;
}

const redirectsTsContent = fs.readFileSync(redirectsTsPath, 'utf8');
if (!redirectsTsContent.includes('export const redirects: RedirectRule[] = [')) {
    console.error("❌ redirects.ts is missing exported array");
    hasErrors = true;
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log("🎉 Legacy redirects validated successfully.");
}
