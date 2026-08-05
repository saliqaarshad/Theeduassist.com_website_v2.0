import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    author: z.string(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.string().optional(),
    updatedAt: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  })
});

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string().optional(),
    shortBio: z.string().optional(),
    fullBio: z.string().optional(),
    profileImage: z.string().optional(),
    profileImageAlt: z.string().optional(),
  })
});

export const collections = { blog, authors };