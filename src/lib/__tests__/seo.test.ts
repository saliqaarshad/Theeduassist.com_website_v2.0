import { describe, it, expect } from 'vitest';
import { formatDescription } from '../seo';

describe('formatDescription', () => {
  const defaultDescription = "TheEduAssist is an e-learning design and course-building agency helping creators, coaches, consultants, educators, training companies, online academies, and businesses build structured online courses, Kajabi systems, LMS experiences, and launch-ready e-learning content.";

  it('returns the provided description if it exists', () => {
    const customDescription = 'A custom description for testing.';
    expect(formatDescription(customDescription)).toBe(customDescription);
  });

  it('returns the default fallback description if no description is provided', () => {
    expect(formatDescription()).toBe(defaultDescription);
  });

  it('returns the default fallback description if an empty string is provided', () => {
    expect(formatDescription('')).toBe(defaultDescription);
  });
});
