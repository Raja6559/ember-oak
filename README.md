# Ember & Oak

A standalone fictional restaurant concept by Krelyvo Studio. Built with React, TypeScript, Tailwind, TanStack Start and GSAP. No bookings, enquiries, analytics or customer data collection.

## Local development

Run in `D:\Raja\Business Work\Krelyvo Studio\portfolio-demos\ember-oak`:

```powershell
bun install --frozen-lockfile
bun run dev
```

Preview: http://localhost:8085

```powershell
bun run typecheck
bun run test
bun run build
```

Browser tests use locally installed Google Chrome. `bun run test` starts the development server if necessary. Screenshots are written to `test-results/`.

## Images

`assets/source` retains the original restaurant photo and five AI-generated concept images. Optimized 640px and 1280px WebP derivatives in `public/images` are used by the page. Regenerate with `bun run images`. Source provenance and prompts are in `docs/imagery.md`. Fonts are self-hosted through Fontsource.

## Publishing is a separate task

The Cloudflare Worker name is `krelyvo-demo-ember-oak`; no remote repo, deployment connection or domain has been created. Planned domain: `demo-ember-oak.krelyvo.com`. The build generates `.output/server/wrangler.json`, matching the existing demos. Noindex is included now to keep the concept out of search results when published.

The existing Krelyvo website and its case study have not been modified. The footer returns to `https://krelyvo.com/work/ember-oak`.
