import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

/**
 * Generate a sitemap index file for Next.js
 * This will be useful when the site grows and needs multiple sitemap files
 * Example usage: When you have more than 50,000 URLs, which is the limit for a single sitemap
 */
export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  const lastModified = new Date();

  // In future, this array could be dynamically generated based on different sitemap files
  // For now, we'll just have a standard structure
  const sitemaps = [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified,
    },
    // Examples for future expansion:
    // { url: `${baseUrl}/sitemaps/products-sitemap.xml`, lastModified },
    // { url: `${baseUrl}/sitemaps/blog-sitemap.xml`, lastModified },
    // { url: `${baseUrl}/sitemaps/ar-sitemap.xml`, lastModified },
  ];

  // Generate a static sitemap index file
  const staticSitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.url}</loc>
    <lastmod>${sitemap.lastModified.toISOString().split('T')[0]}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  // Write to public directory if we need to split sitemaps in the future
  // fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap-index.xml'), staticSitemapIndex);

  return sitemaps;
} 