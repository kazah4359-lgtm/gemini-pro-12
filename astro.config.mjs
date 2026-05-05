// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kazah4359-lgtm.github.io',
  base: '/gemini-pro-12',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
