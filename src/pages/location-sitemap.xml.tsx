/**
 * Location Sitemap Generator
 * 
 * Generates a specialized sitemap for all location pages on the UNEOM website.
 * This improves crawlability and indexing of our location-specific content,
 * enhancing our local SEO strategy.
 * 
 * NOTE: This file should be accessed via /sitemap-locations.xml as referenced in robots.txt
 */

import { GetServerSideProps } from 'next';
import { locationData } from '@/lib/seo/local-business-schema';

const LocationSitemap = () => {
  // This component doesn't render anything on the client side
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Set proper content type
  res.setHeader('Content-Type', 'application/xml');
  
  // Get all cities from our location data
  const cities = Object.keys(locationData);
  const baseUrl = 'https://www.uneom.com';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  // Start building the sitemap
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  // Add entries for each city in both English and Arabic
  cities.forEach(city => {
    // English location page
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}/locations/${city}/</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += '    <changefreq>monthly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '    <xhtml:link rel="alternate" hreflang="en-sa" href="' + baseUrl + '/locations/' + city + '/" />\n';
    sitemap += '    <xhtml:link rel="alternate" hreflang="ar-sa" href="' + baseUrl + '/ar/locations/' + city + '/" />\n';
    sitemap += '  </url>\n';
    
    // Arabic location page
    sitemap += '  <url>\n';
    sitemap += `    <loc>${baseUrl}/ar/locations/${city}/</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += '    <changefreq>monthly</changefreq>\n';
    sitemap += '    <priority>0.8</priority>\n';
    sitemap += '    <xhtml:link rel="alternate" hreflang="ar-sa" href="' + baseUrl + '/ar/locations/' + city + '/" />\n';
    sitemap += '    <xhtml:link rel="alternate" hreflang="en-sa" href="' + baseUrl + '/locations/' + city + '/" />\n';
    sitemap += '  </url>\n';
  });
  
  // Add entry for the main locations landing page
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseUrl}/locations/</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>0.9</priority>\n';
  sitemap += '    <xhtml:link rel="alternate" hreflang="en-sa" href="' + baseUrl + '/locations/" />\n';
  sitemap += '    <xhtml:link rel="alternate" hreflang="ar-sa" href="' + baseUrl + '/ar/locations/" />\n';
  sitemap += '  </url>\n';
  
  sitemap += '  <url>\n';
  sitemap += `    <loc>${baseUrl}/ar/locations/</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += '    <changefreq>monthly</changefreq>\n';
  sitemap += '    <priority>0.9</priority>\n';
  sitemap += '    <xhtml:link rel="alternate" hreflang="ar-sa" href="' + baseUrl + '/ar/locations/" />\n';
  sitemap += '    <xhtml:link rel="alternate" hreflang="en-sa" href="' + baseUrl + '/locations/" />\n';
  sitemap += '  </url>\n';
  
  sitemap += '</urlset>';
  
  // Send the XML response
  res.write(sitemap);
  res.end();
  
  return {
    props: {},
  };
};

export default LocationSitemap;
