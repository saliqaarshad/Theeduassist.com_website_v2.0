export type MonitoringArea =
  | "availability"
  | "deployment"
  | "crawl"
  | "indexation"
  | "analytics"
  | "conversion"
  | "performance"
  | "cdn"
  | "functions"
  | "sanity"
  | "content-freshness"
  | "security";

export type MonitoringSeverity =
  | "critical"
  | "important"
  | "warning"
  | "informational";

export interface MonitoringCheck {
  id: string;
  area: MonitoringArea;
  title: string;
  description: string;
  dataSource: string;
  ownerRole: string;
  cadence: "continuous" | "daily" | "weekly" | "monthly" | "quarterly";
  severity: MonitoringSeverity;
  baselineRequired: boolean;
  active: boolean;
  manual: boolean;
  remediationDocument?: string;
}

export const monitoringChecks: MonitoringCheck[] = [
  {
    id: "prod-availability",
    area: "availability",
    title: "Production Availability Check",
    description: "Verify the production website is returning 200 OK for core routes.",
    dataSource: "Vercel Observability",
    ownerRole: "Technical Owner",
    cadence: "continuous",
    severity: "critical",
    baselineRequired: false,
    active: true,
    manual: false,
    remediationDocument: "docs/WEBSITE_2_5_OPERATIONS_RUNBOOK.md"
  },
  {
    id: "gsc-indexation",
    area: "indexation",
    title: "Google Search Console Indexation",
    description: "Review GSC for indexing errors, exclusions, or unexpected drops.",
    dataSource: "Google Search Console",
    ownerRole: "SEO Owner",
    cadence: "weekly",
    severity: "important",
    baselineRequired: true,
    active: true,
    manual: true,
    remediationDocument: "docs/WEBSITE_2_5_OPERATIONS_RUNBOOK.md"
  },
  {
    id: "vercel-function-usage",
    area: "functions",
    title: "Vercel Content Function Invocations",
    description: "Ensure static pages are not unexpectedly invoking Serverless Functions.",
    dataSource: "Vercel Usage Analytics",
    ownerRole: "Technical Owner",
    cadence: "weekly",
    severity: "important",
    baselineRequired: true,
    active: true,
    manual: true,
    remediationDocument: "docs/WEBSITE_2_5_OPERATIONS_RUNBOOK.md"
  },
  {
    id: "core-web-vitals",
    area: "performance",
    title: "Core Web Vitals Monitoring",
    description: "Review Field Data (CrUX) via PageSpeed Insights / GSC.",
    dataSource: "PageSpeed Insights / GSC",
    ownerRole: "Technical Owner",
    cadence: "monthly",
    severity: "important",
    baselineRequired: true,
    active: true,
    manual: true,
    remediationDocument: "docs/WEBSITE_2_5_OPERATIONS_RUNBOOK.md"
  },
  {
     id: "content-freshness",
     area: "content-freshness",
     title: "Content Freshness Review",
     description: "Review and update legacy or stale content based on schedule.",
     dataSource: "Sanity CMS / Review Calendar",
     ownerRole: "Content Owner",
     cadence: "monthly",
     severity: "warning",
     baselineRequired: false,
     active: true,
     manual: true,
     remediationDocument: "docs/WEBSITE_2_5_OPERATIONS_RUNBOOK.md"
  }
];
