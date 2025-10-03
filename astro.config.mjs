import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "server",
  site: "https://geoterra.fr",
  integrations: [tailwind(), sitemap()],
  adapter: vercel({
    runtime: "nodejs20.x",
  }),
});
