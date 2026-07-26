import { test, expect } from '@playwright/test';
import { formatTitle, site } from './seo';

test.describe('formatTitle', () => {
  test('should return default title if no title is provided', () => {
    expect(formatTitle()).toBe(site.title);
  });

  test('should return title as is if it already includes branding', () => {
    expect(formatTitle(`My Custom Title | ${site.name}`)).toBe(`My Custom Title | ${site.name}`);
    expect(formatTitle(`${site.name} - Home`)).toBe(`${site.name} - Home`);
  });

  test('should append branding to title if it does not include branding', () => {
    expect(formatTitle('My Custom Title')).toBe(`My Custom Title | ${site.name}`);
  });
});
