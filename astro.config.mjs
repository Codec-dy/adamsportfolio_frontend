// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown(), tailwind()],
  output: 'server', // ← This enables SSR
   adapter: node({ mode: 'standalone' }),
  // @ts-ignore
  middleware: './src/middleware.js',
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000 
  }

});