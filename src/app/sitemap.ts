import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Function to get all page directories recursively
const getPageDirectories = (dir: string, basePath = '', results: string[] = []) => {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    // Skip internal Next.js files/directories and API routes
    if (item.startsWith('_') || item === 'api' || item === 'fonts' || item === '[locale]') continue;
    
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      // If directory contains page.tsx, add it to results
      if (fs.existsSync(path.join(itemPath, 'page.tsx'))) {
        // Normalize path for URL (remove src/app and replace backslashes)
        const urlPath = path.join(basePath, item).replace(/\\/g, '/');
        results.push(urlPath);
      }
      
      // Recursively search subdirectories
      getPageDirectories(itemPath, path.join(basePath, item), results);
    }
  }
  
  return results;
};

// Function to determine priority based on URL path
const getPriority = (url: string): number => {
  // Homepage gets highest priority
  if (url === '' || url === 'ar') return 1.0;
  
  // Primary sections
  if (['shop', 'ar/shop', 'quote', 'ar/quote'].includes(url)) return 0.9;
  
  // Major content sections
  if (url.includes('/industries/') || 
      url.includes('/shop/') || 
      url.includes('/services/')) return 0.8;
  
  // Secondary content
  if (url.includes('/blog/') || 
      url.includes('/resources/') || 
      url.includes('/authors/')) return 0.7;
  
  // Default priority for other pages
  return 0.6;
};

// Function to determine change frequency based on URL path
const getChangeFrequency = (url: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' => {
  // Pages that change frequently
  if (url === '' || url === 'ar' || url.includes('/shop')) return 'daily';
  
  // Pages that change somewhat regularly
  if (url.includes('/blog/') || 
      url.includes('/industries/') || 
      url.includes('/products/')) return 'weekly';
  
  // Pages that change less frequently
  return 'monthly';
};

// Function to get the alternate language URL
const getAlternateUrl = (url: string): string | null => {
  if (url.startsWith('ar/')) {
    // If Arabic, alternate is English
    return url.substring(3);
  } else {
    // If English, alternate is Arabic
    return `ar/${url}`;
  }
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  const lastModified = new Date();
  const appDirectory = path.join(process.cwd(), 'src', 'app');
  
  // Get all page directories
  let pageDirectories = getPageDirectories(appDirectory);
  
  // Add homepage (root)
  pageDirectories.unshift('');
  
  // Create sitemap entries with absolute URLs and metadata
  const sitemapEntries = pageDirectories.map(pageDir => {
    const url = pageDir;
    const priority = getPriority(url);
    const changeFrequency = getChangeFrequency(url);
    
    return {
      url: `${baseUrl}/${url}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
  
  // Create a map for hreflang alternates
  const urlMap = new Map();
  
  // Group URLs by their base path (removing language prefix)
  sitemapEntries.forEach(entry => {
    const urlPath = entry.url.replace(baseUrl + '/', '');
    const isArabic = urlPath.startsWith('ar/');
    const basePath = isArabic ? urlPath.substring(3) : urlPath;
    
    if (!urlMap.has(basePath)) {
      urlMap.set(basePath, { en: null, ar: null });
    }
    
    const langData = urlMap.get(basePath);
    if (isArabic) {
      langData.ar = entry.url;
    } else {
      langData.en = entry.url;
    }
  });
  
  // Enhanced sitemap with alternates (for search engines that support it)
  // Note: Next.js's built-in sitemap doesn't support alternates directly,
  // but we're including them in the static file for completeness
  const staticSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.map(entry => {
  const urlPath = entry.url.replace(baseUrl + '/', '');
  const isArabic = urlPath.startsWith('ar/');
  const basePath = isArabic ? urlPath.substring(3) : urlPath;
  const langData = urlMap.get(basePath);
  
  return `  <url>
    <loc>${entry.url}</loc>
    ${langData.en ? `<xhtml:link rel="alternate" hreflang="en" href="${langData.en}"/>` : ''}
    ${langData.ar ? `<xhtml:link rel="alternate" hreflang="ar" href="${langData.ar}"/>` : ''}
    <lastmod>${entry.lastModified.toISOString().split('T')[0]}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  // Write enhanced sitemap to public directory
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), staticSitemap);
  
  // Return Next.js compatible sitemap (without alternates)
  return sitemapEntries;
} 