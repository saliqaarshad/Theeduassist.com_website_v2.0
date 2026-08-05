# Website 2.5 Phase 6 Part 4: Build Monitoring

## Status: Active

Code-side validations (validators, astro check, sanity check) serve as primary build monitoring logic.

Additional Manual actions required by external owner:
1. Review build durations on Vercel
2. Setup alerts for significant route count drops (e.g. blog or location collapse)
3. Monitor query failures or environment variable omissions
