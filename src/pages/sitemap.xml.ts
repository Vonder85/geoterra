import type { APIRoute } from 'astro';

const SITE_URL = "https://be-geoterra.fr";

// Configuration des pages avec priorités et fréquences de mise à jour
const pages = [
  {
    url: "",
    changefreq: "monthly",
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: "services",
    changefreq: "monthly",
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
  {
    url: "entreprise",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    url: "contact",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
    .map(
      (page) => `  <url>
    <loc>${SITE_URL}/${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
