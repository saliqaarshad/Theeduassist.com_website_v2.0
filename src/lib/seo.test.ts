import { describe, it, expect } from 'vitest';
import { buildCanonicalUrl, site } from './seo';

describe('buildCanonicalUrl', () => {
  it('returns site.url with trailing slash for empty path', () => {
    expect(buildCanonicalUrl('')).toBe(`${site.url}/`);
  });

  it('handles basic relative paths', () => {
    expect(buildCanonicalUrl('about')).toBe(`${site.url}/about/`);
    expect(buildCanonicalUrl('/about')).toBe(`${site.url}/about/`);
    expect(buildCanonicalUrl('about/')).toBe(`${site.url}/about/`);
    expect(buildCanonicalUrl('/about/')).toBe(`${site.url}/about/`);
  });

  it('handles absolute http URLs and normalize to site.url', () => {
    expect(buildCanonicalUrl('http://example.com/about')).toBe(`${site.url}/about/`);
    expect(buildCanonicalUrl('https://example.com/about')).toBe(`${site.url}/about/`);
    expect(buildCanonicalUrl('https://www.theeduassist.com/about')).toBe(`${site.url}/about/`);
    // with trailing slash
    expect(buildCanonicalUrl('http://example.com/about/')).toBe(`${site.url}/about/`);
  });

  it('normalizes double slashes', () => {
    expect(buildCanonicalUrl('about//us')).toBe(`${site.url}/about/us/`);
    expect(buildCanonicalUrl('//about/us//')).toBe(`${site.url}/about/us/`);
    expect(buildCanonicalUrl('https://example.com/about//us')).toBe(`${site.url}/about/us/`);
  });

  it('handles root slash path', () => {
    expect(buildCanonicalUrl('/')).toBe(`${site.url}/`);
  });

  it('falls back on parse error for absolute URLs', () => {
    // URL parser throws for things like 'https://%'
    // It should fall through to the manual processing
    expect(buildCanonicalUrl('https://%')).toBe(`${site.url}/https:/%/`);
  });
});
