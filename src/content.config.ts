import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    role: z.string().optional(),
    shortBio: z.string().optional(),
    fullBio: z.string().optional(),
    profileImage: z.string().optional(),
    profileImageAlt: z.string().optional(),
  })
});

export const collections = { blog, authors };