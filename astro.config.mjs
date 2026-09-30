// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for sitemap.xml and canonical URLs. Must match the real domain.
  site: 'https://ninjanini.com',
  integrations: [sitemap()],
});
