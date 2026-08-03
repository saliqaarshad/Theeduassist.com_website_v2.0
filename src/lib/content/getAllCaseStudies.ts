import { caseStudies } from '../../data/caseStudies';

export type CaseStudy = {
  title: string;
  slug: string;
  subtitle: string;
  clientType?: string;
  industry?: string;
  summary: string;
  heroImage?: string;
  heroImageAlt?: string;
  noIndex?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  source: 'static';
};

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const staticStudies: CaseStudy[] = caseStudies
    .filter(cs => !(cs as any).noIndex)
    .map(cs => ({
      title: cs.title,
      slug: cs.slug,
      subtitle: cs.subtitle,
      clientType: cs.clientType,
      industry: cs.industry,
      summary: cs.summary,
      source: 'static'
    }));

  return staticStudies;
}
