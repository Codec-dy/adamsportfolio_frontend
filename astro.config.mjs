// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), tailwind()],
  output: 'server', // ← This enables SSR
  adapter: netlify(),
  // @ts-ignore
  middleware: './src/middleware.js',
  

});