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

## Repository and deployment

Repository: https://github.com/Raja6559/ember-oak

The dedicated Cloudflare Worker name is `krelyvo-demo-ember-oak`. Its custom domain is configured as `demo-ember-oak.krelyvo.com`. The build generates `.output/server/wrangler.json`, matching the existing demos. Noindex is included to keep the concept out of search results.

Cloudflare GitHub build connection settings:

- Repository: `Raja6559/ember-oak`
- Production branch: `main`
- Root directory: `/`
- Build command: `bun run build`
- Deploy command: `npx wrangler deploy --config .output/server/wrangler.json`
- Runtime secrets: none

Cloudflare's GitHub app has access to this repository. The production build connection uses `main`, with preview builds disabled. The first public deployment and Git connection were completed on 2026-10-09. A push to `main` triggers the connected Cloudflare build; check its result before treating automatic deployment as verified.

To run the browser suite against the deployed site:

```powershell
$env:DEMO_BASE_URL = 'https://demo-ember-oak.krelyvo.com'
bun run test
Remove-Item Env:DEMO_BASE_URL
```

The application installs no analytics. Cloudflare may inject a zone-level performance beacon (`/cdn-cgi/rum`) on the public host; the reservation test distinguishes this infrastructure request from application submissions.

For an authenticated local deployment:

```powershell
bun run build
bunx wrangler deploy --config .output/server/wrangler.json
```

The existing Krelyvo website and its case study have not been modified. The footer returns to `https://krelyvo.com/work/ember-oak`.
