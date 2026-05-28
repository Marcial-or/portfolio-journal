import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ton-site.netlify.app", // ← À modifier après déploiement
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
  image: {
    domains: ["cloudinary.com"], // Si tu utilises Cloudinary plus tard
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
});
