import fs from 'fs';
import path from 'path';

const ROBOTS_FILE = path.join(process.cwd(), 'public/robots.txt');

function validateRobots() {
  console.log('Validating robots.txt...');
  if (!fs.existsSync(ROBOTS_FILE)) {
    console.error('❌ robots.txt not found.');
    process.exit(1);
  }

  const content = fs.readFileSync(ROBOTS_FILE, 'utf8');

  if (!content.includes('Sitemap: https://www.theeduassist.com/sitemap.xml')) {
    console.error('❌ Invalid sitemap reference in robots.txt.');
    process.exit(1);
  }

  // Only check for accidental global disallow for all user agents, not specific bots like GPTBot.
  const globalDisallowMatch = content.match(/User-agent:\s*\*\s*\n(?:Allow:[^\n]+\n)*Disallow:\s*\/\s*$/m);
  if (globalDisallowMatch) {
    console.error('❌ Accidental global disallow in robots.txt.');
    process.exit(1);
  }

  // Ensure no sensitive or unsupported rules
  if (content.toLowerCase().includes('noindex:')) {
     console.error('❌ Unsupported noindex directive found in robots.txt.');
     process.exit(1);
  }

  console.log('✅ robots.txt passes validation.');
}

validateRobots();
