/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_SITE_VERIFICATION?: string;
  readonly PUBLIC_BING_SITE_VERIFICATION?: string;
  readonly PUBLIC_YANDEX_SITE_VERIFICATION?: string;
  readonly PUBLIC_NAVER_SITE_VERIFICATION?: string;
  readonly PUBLIC_BAIDU_SITE_VERIFICATION?: string;
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_SANITY_PROJECT_ID?: string;
  readonly PUBLIC_SANITY_DATASET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
