import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from 'astro-sitemap';
import netlify from '@astrojs/netlify';
import tailwind from '@astrojs/tailwind';


// import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
    prefetch: {
        prefetchAll: false,
        defaultStrategy: 'load',
    },

    // },
    site: 'https://www.petrostarinnovative.com',
    integrations: [robotsTxt(), sitemap(), tailwind({
        config: {
            applyBaseStyles: false,
        },
    }), (await import('astro-compress')).default({
        Image: false,
    }), // swup({
        //   theme: 'fade', reloadScripts: false,

        //   progress: true,

        //   preload: {
        //     hover: true,
        //   }
        // })
    ],
    output: "server",
    adapter: netlify({
        cacheOnDemandPages: true,
    }),
    experimental: {
        // serverIslands: true
    },
    image: {
        remotePatterns: [
            {
                protocol: 'https',
            },
        ],
        domains: ['northernsky.auxcgen.com'],
    },
});