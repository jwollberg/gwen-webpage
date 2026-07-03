import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL || "https://gweneveregreenwood.com";
const base = process.env.SITE_BASE || "/";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});