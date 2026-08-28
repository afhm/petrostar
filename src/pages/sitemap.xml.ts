import type { APIRoute } from 'astro';
import { PAGES, SITE_URL } from '@data/site';

export const GET: APIRoute = () => {
  const urls = PAGES.map((path) => `  <url><loc>${new URL(path, SITE_URL).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
