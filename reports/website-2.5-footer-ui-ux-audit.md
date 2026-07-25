# Footer UX Audit

1. **Top CTA Block**: Existing block says "Ready to build a better learning experience?" -> "Get 24-48 Hour Review". It needs to be updated to the exact wording:
   Heading: Ready to Build a Better Learning Experience?
   Body: Share your course idea, Kajabi setup, LMS, or existing learning content. We’ll review it and recommend the clearest next step.
   Primary CTA: Get a 24–48 Hour Review -> /book-free-audit/
   Secondary text link: Contact Our Team -> /contact/

2. **Brand & Navigation Structure**:
   Currently, there's a logo and description row, then 4 columns of navigation, then a bottom duplicate CTA/description block, and finally a legal row.
   The instructions require exactly 5 columns:
   - Column 1: Brand (logo, name, description, social links)
   - Column 2: Services
   - Column 3: Solutions
   - Column 4: Resources
   - Column 5: Company

3. **Locations**:
   Must only use locations with indexStatus === "index". Only a few links like North America, Europe, etc.

4. **Legal Row**:
   - copyright
   - Info@theeduassist.com
   - Privacy
   - Terms
   - social links (only if not in column 1, but instructions say "social links only when not already used in the main brand column"). Let's put them in Column 1.

5. **Chat Button Fallback**:
   Currently: `<button ... onclick="if(typeof Tawk_API !== 'undefined') Tawk_API.toggle();">Talk to Sales</button>`
   Needs to be an anchor tag fallback to `/contact/` which opens chat if JS/Tawk loads.

6. **Logo**:
   Ensure logo uses `BrandLogo` component (we need to create this) instead of raw img tag, and only appears once in the footer.
