import { test, expect } from '@playwright/test';
import { resolveBlogSlug } from './normalizeBlogPost';

test.describe('resolveBlogSlug', () => {
  test('handles string values', () => {
    expect(resolveBlogSlug('hello-world')).toBe('hello-world');
    expect(resolveBlogSlug('  spaces  ')).toBe('spaces');
    expect(resolveBlogSlug('')).toBe(null);
    expect(resolveBlogSlug('   ')).toBe(null);
  });

  test('handles object with current', () => {
    expect(resolveBlogSlug({ current: 'my-slug' })).toBe('my-slug');
    expect(resolveBlogSlug({ current: '  padded-slug  ' })).toBe('padded-slug');
    expect(resolveBlogSlug({ current: '' })).toBe(null);
    expect(resolveBlogSlug({ current: '   ' })).toBe(null);
    expect(resolveBlogSlug({ current: null })).toBe(null);
    expect(resolveBlogSlug({ current: undefined })).toBe(null);
    expect(resolveBlogSlug({ current: 123 })).toBe(null);
  });

  test('handles invalid or empty inputs', () => {
    expect(resolveBlogSlug(null)).toBe(null);
    expect(resolveBlogSlug(undefined)).toBe(null);
    expect(resolveBlogSlug({})).toBe(null);
    expect(resolveBlogSlug({ other: 'value' })).toBe(null);
    expect(resolveBlogSlug(123)).toBe(null);
    expect(resolveBlogSlug([])).toBe(null);
  });
});
