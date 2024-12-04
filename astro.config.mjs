import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    site: 'https://www.creative-hive.co',
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
        react(),
    ],

    image: {
        remotePatterns: [
            {
                protocol: 'https',
            },
        ],
        domains: ['creativehive.auxcgen.com'],
    },

    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
        imageService: true,
        isr: {
            expiration: 3600,
        },
        imagesConfig: {
            sizes: [420, 640, 1280, 1920],
            formats: ["image/avif"],
            domains: ["creativehive.auxcgen.com"],
        },
        functionPerRoute: false
    }),
});