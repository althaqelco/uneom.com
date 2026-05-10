import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Generic crawlers — full access
      { userAgent: '*', allow: '/', disallow: ['/api/admin/', '/admin/', '/api/revalidate'] },

      // AI crawlers — explicitly allowed (matches llms.txt directive)
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'ClaudeBot',      allow: '/' },
      { userAgent: 'CCBot',          allow: '/' },
      { userAgent: 'OAI-SearchBot',  allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },

      // Aggressive SEO crawlers — rate limited via crawl-delay
      { userAgent: 'AhrefsBot',  crawlDelay: 10 },
      { userAgent: 'SemrushBot', crawlDelay: 10 },
      { userAgent: 'MJ12bot',    crawlDelay: 10 }
    ],
    sitemap: [
      'https://uneom.com/sitemap.xml',
      'https://uneom.com/sitemap-images.xml'
    ],
    host: 'https://uneom.com'
  };
}
