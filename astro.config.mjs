import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), sitemap()],
  site: "https://geoterra.fr",
  compilerOptions: {
    strict: true,
  },
  adapter: vercel({
    runtime: "nodejs20.x",
  }),
});