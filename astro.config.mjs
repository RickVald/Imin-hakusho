// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://imin-hakusho.jp',
  i18n: {
      defaultLocale: 'ja',
      locales: ['ja', 'en'],
      routing: {
          prefixDefaultLocale: false,
      },
	},

  integrations: [mdx(), sitemap()],
});