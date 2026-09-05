import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = normalizeSiteUrl(process.env.SITE_URL || 'https://naikmediaads.com');
const publicDir = path.resolve('public');
const lastmod = new Date().toISOString().slice(0, 10);

const routes = [
  {
    path: '/',
    changefreq: 'monthly',
    priority: '1.0',
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await mkdir(publicDir, { recursive: true });
await writeFile(path.join(publicDir, 'sitemap.xml'), sitemap);

function normalizeSiteUrl(url) {
  return url.replace(/\/+$/, '');
}
