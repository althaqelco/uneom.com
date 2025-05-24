/**
 * Sitemap Generator
 * 
 * Generates a sitemap.xml file for search engines.
 * This implementation creates a dynamic sitemap that includes both English and Arabic pages,
 * with proper lastmod dates and priority settings.
 */

import { GetServerSideProps } from 'next';

// Define the interface for page URLs
interface PageURL {
  url: string;
  lastModified?: string; // ISO date string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number; // 0.0 to 1.0
  alternateLanguages?: {
    [locale: string]: string; // Map of locale to URL
  };
}

// Helper function to format date for sitemap
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Get the current date minus specified days
const getDateMinusDays = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return formatDate(date);
};

/**
 * Generate all page URLs for the sitemap
 */
function generateSiteURLs(): PageURL[] {
  const baseUrl = 'https://uneom.com';
  const today = formatDate(new Date());
  const lastWeek = getDateMinusDays(7);
  const lastMonth = getDateMinusDays(30);
  
  // Core pages available in both languages
  const corePages: PageURL[] = [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternateLanguages: {
        ar: `${baseUrl}/ar/`
      }
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternateLanguages: {
        ar: `${baseUrl}/ar/about/`
      }
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: lastMonth,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternateLanguages: {
        ar: `${baseUrl}/ar/contact/`
      }
    }
  ];
  
  // Industry pages
  const industries = ['corporate', 'healthcare', 'hospitality', 'industrial', 'school', 'security'];
  const industryPages: PageURL[] = industries.map(industry => ({
    url: `${baseUrl}/industries/${industry}/`,
    lastModified: industry === 'corporate' ? today : lastWeek,
    changeFrequency: 'weekly',
    priority: 0.9,
    alternateLanguages: {
      ar: `${baseUrl}/ar/industries/${industry}/`
    }
  }));
  
  // Services pages
  const services = ['design', 'manufacturing', 'delivery', 'consulting'];
  const servicePages: PageURL[] = services.map(service => ({
    url: `${baseUrl}/services/${service}/`,
    lastModified: lastWeek,
    changeFrequency: 'weekly',
    priority: 0.9,
    alternateLanguages: {
      ar: `${baseUrl}/ar/services/${service}/`
    }
  }));
  
  // Locations pages
  const locations = ['riyadh', 'jeddah', 'dammam', 'mecca', 'medina'];
  const locationPages: PageURL[] = locations.map(location => ({
    url: `${baseUrl}/locations/${location}/`,
    lastModified: lastWeek,
    changeFrequency: 'monthly',
    priority: 0.8,
    alternateLanguages: {
      ar: `${baseUrl}/ar/locations/${location}/`
    }
  }));
  
  // Blog posts (example - in a real implementation, you would fetch these from your CMS or database)
  const blogPosts: PageURL[] = [
    {
      url: `${baseUrl}/blog/corporate-uniform-trends-2025/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternateLanguages: {
        ar: `${baseUrl}/ar/blog/corporate-uniform-trends-2025/`
      }
    },
    {
      url: `${baseUrl}/blog/healthcare-uniforms-post-pandemic/`,
      lastModified: lastWeek,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternateLanguages: {
        ar: `${baseUrl}/ar/blog/healthcare-uniforms-post-pandemic/`
      }
    }
  ];
  
  // Combine all URLs
  const allPages: PageURL[] = [
    ...corePages,
    ...industryPages,
    ...servicePages,
    ...locationPages,
    ...blogPosts
  ];
  
  // Generate Arabic version URLs
  const arPages: PageURL[] = allPages.map(page => ({
    url: page.alternateLanguages?.ar || '',
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority ? page.priority - 0.1 : 0.5, // Slightly lower priority for AR pages
    alternateLanguages: {
      en: page.url
    }
  }));
  
  // Return all URLs
  return [...allPages, ...arPages];
}

/**
 * Generate the sitemap XML content
 */
function generateSitemapXML(pages: PageURL[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(page => {
    return `  <url>
    <loc>${page.url}</loc>
    ${page.lastModified ? `<lastmod>${page.lastModified}</lastmod>` : ''}
    ${page.changeFrequency ? `<changefreq>${page.changeFrequency}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority.toFixed(1)}</priority>` : ''}
    ${
      page.alternateLanguages
        ? Object.entries(page.alternateLanguages)
            .map(
              ([locale, url]) =>
                `<xhtml:link rel="alternate" hreflang="${locale === 'ar' ? 'ar-SA' : 'en-SA'}" href="${url}" />`
            )
            .join('\n    ')
        : ''
    }
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the site URLs
  const pages = generateSiteURLs();
  
  // Generate the XML content
  const sitemapXML = generateSitemapXML(pages);
  
  // Set the appropriate headers
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=43200');
  
  // Write the XML content to the response
  res.write(sitemapXML);
  res.end();
  
  return {
    props: {}
  };
};

// Return empty component since this is handled by getServerSideProps
const Sitemap = () => null;
export default Sitemap;
