import fs from 'fs';
import path from 'path';

// This is a placeholder/mock script since the actual exported .ndjson containing
// all blog posts, authors, and case studies is missing from the environment.
// In a real scenario, this would stream the ndjson, parse PortableText to Markdown,
// and download/copy images.

console.log("Starting Sanity to Markdown Migration...");

const seedFile = path.resolve('seed.ndjson');
if (fs.existsSync(seedFile)) {
  console.log("Found seed.ndjson. Extracting any available posts...");
  const data = fs.readFileSync(seedFile, 'utf8');
  const lines = data.split('\n').filter(Boolean);

  lines.forEach(line => {
    try {
      const doc = JSON.parse(line);
      if (doc._type === 'post') {
        const slug = doc.slug?.current || 'untitled';
        const title = doc.title || 'Untitled';
        const excerpt = doc.excerpt || '';
        const publishedAt = doc.publishedAt || '';
        const seoTitle = doc.seo?.metaTitle || '';
        const seoDescription = doc.seo?.metaDescription || '';

        let body = '';
        if (doc.body && Array.isArray(doc.body)) {
          body = doc.body.map((block) => {
             if (block._type === 'block' && block.children) {
                 return block.children.map((c) => c.text).join('');
             }
             return '';
          }).join('\n\n');
        }

        const frontmatter = `---
title: "${title}"
slug: "${slug}"
excerpt: "${excerpt}"
publishedAt: "${publishedAt}"
author: "editorial-team"
category: "general"
seoTitle: "${seoTitle}"
seoDescription: "${seoDescription}"
---

${body}
`;
        fs.writeFileSync(path.resolve(`src/content/blog/${slug}.md`), frontmatter);
        console.log(`Generated: src/content/blog/${slug}.md`);
      }
    } catch (e) {
      console.error("Error parsing line", e);
    }
  });
} else {
  console.warn("No seed.ndjson or export found.");
}

console.log("Migration script complete. Note: the full export dump is missing from this environment.");
