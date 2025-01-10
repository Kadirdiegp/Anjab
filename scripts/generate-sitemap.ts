/**
 * Sitemap Generator
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://haarambiente.netlify.app'; // Replace with your domain

const routes = [
  '/',
  '/services',
  '/galerie',
  '/team',
  '/kontakt',
  '/datenschutz',
  '/impressum'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    route => `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync(
    path.join(__dirname, '../public/sitemap.xml'),
    sitemap,
    'utf8'
  );

  console.log('Sitemap generated successfully!');
};

generateSitemap();
