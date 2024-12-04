import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
// import icon from "astro-icon";

// import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'load',
    },

    // },
    site: 'https://petrostarinnovative.com',

    integrations: [
        robotsTxt(),
        sitemap(),
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

    ],

    image: {
        remotePatterns: [
            {
                protocol: 'https',
            },
        ],
        domains: ['northernsky.auxcgen.com'],
    },

    output: "server",
    adapter: vercel({
        imageService: true,
        isr: true,
        imagesConfig: {
            sizes: [320, 640, 1280, 1920, 2560],
            formats: ["image/avif"],
            domains: ["northernsky.auxcgen.com"],
        },
    }),
});
