import { describe, it, expect } from 'vitest';
import { normalizeBlogSlug, getBlogUrl, getFallbackDescription } from '../../src/utils/blog';

describe('blog utils', () => {
  describe('normalizeBlogSlug', () => {
    it('returns null if post is falsy', () => {
      expect(normalizeBlogSlug(null)).toBeNull();
      expect(normalizeBlogSlug(undefined)).toBeNull();
    });

    it('returns null if slug is missing', () => {
      expect(normalizeBlogSlug({})).toBeNull();
    });

    it('returns null if slug is not a string', () => {
      expect(normalizeBlogSlug({ slug: 123 })).toBeNull();
      expect(normalizeBlogSlug({ slug: { current: 123 } })).toBeNull();
    });

    it('returns null for string representation of undefined, null, or object', () => {
      expect(normalizeBlogSlug({ slug: 'undefined' })).toBeNull();
      expect(normalizeBlogSlug({ slug: 'null' })).toBeNull();
      expect(normalizeBlogSlug({ slug: '[object Object]' })).toBeNull();
    });

    it('extracts slug from raw string', () => {
      expect(normalizeBlogSlug({ slug: 'my-test-post' })).toBe('my-test-post');
    });

    it('extracts slug from object with current property', () => {
      expect(normalizeBlogSlug({ slug: { current: 'my-test-post' } })).toBe('my-test-post');
    });

    it('strips absolute blog URL prefix', () => {
      expect(normalizeBlogSlug({ slug: 'https://example.com/blog/my-test-post' })).toBe('my-test-post');
      expect(normalizeBlogSlug({ slug: 'http://example.com/blog/my-test-post' })).toBe('my-test-post');
    });

    it('strips trailing slash', () => {
      expect(normalizeBlogSlug({ slug: 'my-test-post/' })).toBe('my-test-post');
      expect(normalizeBlogSlug({ slug: 'https://example.com/blog/my-test-post/' })).toBe('my-test-post');
    });
  });

  describe('getBlogUrl', () => {
    it('returns null if post is falsy', () => {
      expect(getBlogUrl(null)).toBeNull();
      expect(getBlogUrl(undefined)).toBeNull();
    });

    it('returns null if post has no valid slug', () => {
      expect(getBlogUrl({})).toBeNull();
      expect(getBlogUrl({ slug: 'undefined' })).toBeNull();
    });

    it('formats valid string slug correctly', () => {
      expect(getBlogUrl({ slug: 'my-post' })).toBe('/blog/my-post/');
    });

    it('formats valid object slug correctly', () => {
      expect(getBlogUrl({ slug: { current: 'my-post' } })).toBe('/blog/my-post/');
    });

    it('formats url with stripped prefix correctly', () => {
      expect(getBlogUrl({ slug: 'https://test.com/blog/my-post' })).toBe('/blog/my-post/');
    });
  });

  describe('getFallbackDescription', () => {
    it('returns extracted text from content string', () => {
      const content = '<p>This is a <b>test</b> description that is relatively long and should be truncated if it exceeds the limit of one hundred and fifty characters, which is what we expect.</p>';
      expect(getFallbackDescription(content)).toBe('This is a test description that is relatively long and should be truncated if it exceeds the limit of one hundred and fifty characters, which is what ...');
    });

    it('returns default text if content is empty string', () => {
      expect(getFallbackDescription('')).toBe('Read our latest insights on course creation and LMS implementation.');
    });

    it('extracts text from body array correctly', () => {
      const body = [
        { _type: 'image' }, // Should ignore
        {
          _type: 'block',
          style: 'normal',
          children: [
            { text: 'This is extracted ' },
            { text: 'from the body array.' }
          ]
        }
      ];
      expect(getFallbackDescription(undefined, body)).toBe('This is extracted from the body array.');
    });

    it('truncates extracted body text if too long', () => {
      const longText = 'A'.repeat(160);
      const body = [
        {
          _type: 'block',
          style: 'normal',
          children: [
            { text: longText }
          ]
        }
      ];
      expect(getFallbackDescription(undefined, body)).toBe('A'.repeat(150) + '...');
    });

    it('returns default text if no valid text found in body', () => {
      const body = [
        { _type: 'image' },
        { _type: 'block', style: 'h1', children: [{ text: 'Heading' }] } // Ignored because style is not normal
      ];
      expect(getFallbackDescription(undefined, body)).toBe('Read our latest insights on course creation and LMS implementation.');
    });

    it('returns default text if both content and body are missing', () => {
      expect(getFallbackDescription()).toBe('Read our latest insights on course creation and LMS implementation.');
    });
  });
});
