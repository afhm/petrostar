import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
// import icon from "astro-icon";

// import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
    // prefetch: {
    //     prefetchAll: true,
    //     defaultStrategy: 'load',
    // },

    // },
    site: 'https://www.creative-hive.co',

    integrations: [
        robotsTxt(),
        sitemap(),
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

    image: {
        remotePatterns: [
            {
                protocol: 'https',
            },
        ],
        domains: ['creativehive.auxcgen.com'],
    },

    adapter: vercel({
        maxDuration: 60,
        imageService: true,

        imagesConfig: {
            sizes: [420, 640, 1280, 1920, 2048],
            formats: ["image/avif"],
            domains: ["creativehive.auxcgen.com"],
        },
        webAnalytics: {
            enabled: true,
        },
        runtime: 'nodejs20.x'
    }),
});