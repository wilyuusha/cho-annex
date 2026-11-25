# CHO Annex public information site

A lightweight Astro site for verified public information about the City Health Office Annex, Valencia City, Bukidnon. It is an informational portal only: no accounts, appointments, patient data, or backend services.

See [`AGENTS.md`](./AGENTS.md) for scope, design principles, and content rules.

## Local development

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build     # static output in dist/
npm run preview   # preview the built site
npm run check     # Astro/TypeScript checks
```

## Adding information

Content lives in [`src/data`](./src/data/README.md) as JSON. Initial entries were curated from [`src/scrape/cho-annex-public-data.json`](./src/scrape/cho-annex-public-data.json); each published entry keeps its source link and date. Records the scrape marks as historical or not current were excluded. Never publish unverified schedules, requirements, room assignments, or advisories, and set the matching `lastUpdated` date when information changes.

The City Health Office and Valencia City LGU logos in `src/images/` are rendered through `src/components/LogoPair.astro` in the header and footer.

Pages, layout, and styling live in:

- `src/pages/` — one page per core section plus `404`. The Visits page is retained but currently hidden from navigation and the home page.
- `src/layouts/BaseLayout.astro` — shared page shell.
- `src/components/` — reusable header, footer, cards, notices, and date display.
- `src/styles/global.css` — Material Design–inspired tokens and shared styles.

## GitHub Pages

The site is deployed by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) on pushes to `main`.

Defaults assume a project site at `https://wilyuusha.github.io/cho-annex/`. If you use a custom domain, add these repository variables under **Settings → Secrets and variables → Actions → Variables**:

- `SITE_URL` — full origin, e.g. `https://example.org`
- `BASE_PATH` — `/` for a custom domain root

The deploy job builds with these values, so local and production links stay in sync.
