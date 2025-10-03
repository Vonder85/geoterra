import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap()
  ],
  site: 'https://geoterra.fr',
  compilerOptions: {
    strict: true
  }
});