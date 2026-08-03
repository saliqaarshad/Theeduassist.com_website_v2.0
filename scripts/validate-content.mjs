import fs from 'fs';
import path from 'path';

console.log('Validating local markdown content...');

const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
let errors = 0;

if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  files.forEach(file => {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes('---')) {
      console.error(`[Error] Missing frontmatter in ${file}`);
      errors++;
      return;
    }

    const frontmatterBlock = content.split('---')[1];
    const hasTitle = frontmatterBlock.includes('title:');
    const hasSlug = frontmatterBlock.includes('slug:');
    const hasExcerpt = frontmatterBlock.includes('excerpt:');

    if (!hasTitle) { console.error(`[Error] Missing title in ${file}`); errors++; }
    if (!hasSlug) { console.error(`[Error] Missing slug in ${file}`); errors++; }
    if (!hasExcerpt) { console.error(`[Error] Missing excerpt in ${file}`); errors++; }
    if (content.toLowerCase().includes('cdn.sanity.io')) {
      console.error(`[Error] Sanity CDN URL found in ${file}`);
      errors++;
    }
  });
}

if (errors > 0) {
  console.error(`\nValidation failed with ${errors} error(s).`);
  process.exit(1);
}

console.log('Local content validation passed.');
