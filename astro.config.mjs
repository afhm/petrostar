import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
// import icon from "astro-icon";

// import swup from '@swup/astro';

// Apex 308-redirects to www, so www is the canonical host.
const SITE = 'https://www.petrostarin.com';

// https://astro.build/config
export default defineConfig({
  // prefetch: {
  //     prefetchAll: true,
  //     defaultStrategy: 'load',
  // },

  // },
  site: SITE,

  integrations: [
    // icon(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    (await import('astro-compress')).default({
      Image: false,
    }),
    // swup({
    //   theme: 'fade', reloadScripts: false,

    //   progress: true,

    //   preload: {
    //     hover: true,
    //   }
    // })
    react(),
  ],


  output: 'server',
  adapter: vercel({
    imageService: true,
    isr: {
      expiration: 3600,
    },
    imagesConfig: {
      sizes: [420, 640, 1280, 1920],
      formats: ['image/avif'],
      // No remote image hosts: every image on this site is local.
      domains: [],
    },
  }),
});
