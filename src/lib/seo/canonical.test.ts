import { describe, it, expect } from 'vitest';
import { getCanonicalUrl } from './canonical';

describe('getCanonicalUrl', () => {
  it('should format simple paths with a trailing slash', () => {
    expect(getCanonicalUrl('/foo')).toBe('https://www.theeduassist.com/foo/');
  });

  it('should remove query parameters', () => {
    expect(getCanonicalUrl('/foo?query=1')).toBe('https://www.theeduassist.com/foo/');
  });

  it('should handle root path correctly', () => {
    expect(getCanonicalUrl('/')).toBe('https://www.theeduassist.com/');
  });

  it('should handle paths without leading slash', () => {
    expect(getCanonicalUrl('foo')).toBe('https://www.theeduassist.com/foo/');
  });
});
