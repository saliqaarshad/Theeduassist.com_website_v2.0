# Logo Usage Audit

- Official Asset: `/brand/theeduassist-logo-official.svg`
- Currently `Header.astro` uses `<img src="/brand/theeduassist-logo-official.svg" ... />`.
- `Footer.astro` uses it twice.
- We will create `src/components/ui/BrandLogo.astro` as requested and replace `<img ... />` instances in Header and Footer with it.
