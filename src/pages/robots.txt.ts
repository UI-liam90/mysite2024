import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Disallow: /wp-admin/
Allow: /
Allow: /wp-admin/admin-ajax.php

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};