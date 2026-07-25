# CTA Audit

Global CTAs:
- Get 24–48 Hour Review -> /book-free-audit/
- Talk to Sales -> footer /contact/ or chat
- Submit an Enterprise Project Brief -> /enterprise-solutions/project-brief/
- Contact Our Team -> /contact/
- Get a Kajabi Review -> /book-free-kajabi-audit/

Findings:
- There is a "Talk to Sales" button in the footer which has a `Tawk_API.toggle()` script inline, meaning it does not work well without JS.
- Footer has a mix of redundant CTAs (Talk to Sales and Get 24-48 Hour Review) in the same block.

Recommendations:
- Simplify footer CTAs to a single block as specified in instructions.
