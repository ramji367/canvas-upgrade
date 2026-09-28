# Project decisions
- Keep the Sift design system in `src/design-system` with semantic Tailwind v4 tokens in its theme CSS; this makes the reusable controls and showcase consume one source of truth.
- The list page uses local mock data and reversible preview actions; the requested canvas demonstration needs no backend or permanent writes.
- Preserve the stable mock GTDL share URL as demo content, not a published live list; this avoids implying that a hosted list exists.
