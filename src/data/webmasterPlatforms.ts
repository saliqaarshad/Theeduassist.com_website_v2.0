export type WebmasterPlatformStatus =
  | "not-started"
  | "access-required"
  | "verification-prepared"
  | "verified"
  | "sitemap-submitted"
  | "processing"
  | "complete"
  | "error"
  | "deferred"
  | "not-applicable";

export interface WebmasterPlatform {
  name: string;
  status: WebmasterPlatformStatus;
  verificationMethod: string;
  notes?: string;
  metaTagName?: string;
  envVarName?: string;
}

export const webmasterPlatforms: Record<string, WebmasterPlatform> = {
  google: {
    name: "Google Search Console",
    status: "verification-prepared",
    verificationMethod: "DNS TXT (Preferred) / HTML Meta Tag (Fallback)",
    notes: "DNS verification strongly preferred. Meta tag fallback supported for URL-Prefix property.",
    metaTagName: "google-site-verification",
    envVarName: "PUBLIC_GOOGLE_SITE_VERIFICATION"
  },
  bing: {
    name: "Bing Webmaster Tools",
    status: "verification-prepared",
    verificationMethod: "HTML Meta Tag / GSC Import",
    notes: "Can import from verified GSC property.",
    metaTagName: "msvalidate.01",
    envVarName: "PUBLIC_BING_SITE_VERIFICATION"
  },
  yandex: {
    name: "Yandex Webmaster",
    status: "verification-prepared",
    verificationMethod: "HTML Meta Tag",
    metaTagName: "yandex-verification",
    envVarName: "PUBLIC_YANDEX_SITE_VERIFICATION"
  },
  naver: {
    name: "Naver Search Advisor",
    status: "verification-prepared",
    verificationMethod: "HTML Meta Tag",
    metaTagName: "naver-site-verification",
    envVarName: "PUBLIC_NAVER_SITE_VERIFICATION"
  },
  baidu: {
    name: "Baidu Search Resource Platform",
    status: "verification-prepared",
    verificationMethod: "HTML Meta Tag",
    metaTagName: "baidu-site-verification",
    envVarName: "PUBLIC_BAIDU_SITE_VERIFICATION"
  }
};
