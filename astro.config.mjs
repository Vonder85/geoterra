import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  site: "https://geoterra.fr",
  integrations: [tailwind()],
  adapter: vercel({
    runtime: "nodejs20.x",
  }),
});
