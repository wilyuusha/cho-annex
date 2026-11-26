import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Defaults target a GitHub Pages project site named "cho-annex".
// For a custom domain, set SITE_URL and BASE_PATH as repository variables.
const site = process.env.SITE_URL || 'https://wilyuusha.github.io';
const base = process.env.BASE_PATH || '/cho-annex';

export default defineConfig({
  site,
  base,
  integrations: [react()],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
