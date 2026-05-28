import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ton-site.netlify.app', // ← À modifier après déploiement
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  // Section image simplifiée pour débutant (pas de remotePatterns problématique)
  image: {
    domains: ['cloudinary.com'], // Utile seulement si tu utilises Cloudinary plus tard
  }
});
