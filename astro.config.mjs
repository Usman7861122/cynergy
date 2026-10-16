import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com', // TODO: change to real domain
  redirects: {
    '/back-pain': '/what-we-treat/back-pain/',
    '/testimonials': '/patient-testimonials/',
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
