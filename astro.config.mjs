// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), tailwind()],
  // @ts-ignore
  middleware: './src/middleware.js',

  // vite: {
  //   plugins: [tailwindcss()]
  // }
});