import fs from 'fs';
import path from 'path';

console.log('Validating local markdown content...');

const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
let errors = 0;
const slugs = new Set();

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

    // Core fields
    const hasTitle = frontmatterBlock.includes('title:');
    const hasSlug = frontmatterBlock.includes('slug:');
    const hasExcerpt = frontmatterBlock.includes('excerpt:');

    if (!hasTitle) { console.error(`[Error] Missing title in ${file}`); errors++; }
    if (!hasExcerpt) { console.error(`[Error] Missing excerpt in ${file}`); errors++; }

    if (!hasSlug) {
      console.error(`[Error] Missing slug in ${file}`);
      errors++;
    } else {
      const slugMatch = frontmatterBlock.match(/slug:\s*["']?([^"'\s]+)["']?/);
      if (slugMatch && slugMatch[1]) {
        const slug = slugMatch[1];
        if (slugs.has(slug)) {
          console.error(`[Error] Duplicate slug "${slug}" found in ${file}`);
          errors++;
        }
        slugs.add(slug);

        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
          console.error(`[Error] Invalid slug format "${slug}" in ${file}`);
          errors++;
        }
      }
    }

    // Sanity / old CDN checks
    if (content.toLowerCase().includes('cdn.sanity.io')) {
      console.error(`[Error] Sanity CDN URL found in ${file}`);
      errors++;
    }

    // Media checks
    const hasHeroImage = frontmatterBlock.includes('heroImage:');
    const hasHeroAlt = frontmatterBlock.includes('heroImageAlt:');
    if (hasHeroImage && !hasHeroAlt) {
      console.error(`[Error] Missing heroImageAlt in ${file} when heroImage is present.`);
      errors++;
    }

    // SEO length warnings
    const seoTitleMatch = frontmatterBlock.match(/seoTitle:\s*["']([^"']+)["']/);
    if (seoTitleMatch && seoTitleMatch[1].length > 60) {
      console.warn(`[Warning] seoTitle is longer than 60 characters in ${file}`);
    }
    const seoDescMatch = frontmatterBlock.match(/seoDescription:\s*["']([^"']+)["']/);
    if (seoDescMatch && seoDescMatch[1].length > 160) {
      console.warn(`[Warning] seoDescription is longer than 160 characters in ${file}`);
    }

    // Pages CMS specifics
    if (frontmatterBlock.includes('seoScore:')) {
      console.error(`[Error] Manually entered seoScore found in ${file}. Writers cannot assign scores.`);
      errors++;
    }

    if (frontmatterBlock.includes('contentStatus: "Draft"') || frontmatterBlock.includes('contentStatus: "Idea"')) {
       console.warn(`[Warning] Draft or Idea status found in ${file}. Will not be published.`);
    }

    if (content.toLowerCase().includes('lorem ipsum')) {
      console.error(`[Error] Placeholder content found in ${file}`);
      errors++;
    }

    if (frontmatterBlock.includes('title: "Untitled"')) {
      console.error(`[Error] "Untitled" title found in ${file}`);
      errors++;
    }
  });
}

if (errors > 0) {
  console.error(`\nValidation failed with ${errors} error(s).`);
  process.exit(1);
}

console.log('Local content validation passed.');
