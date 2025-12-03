import { MetadataRoute } from 'next';

/**
 * SEO 2026 Optimized Robots.txt
 * 
 * Includes rules for:
 * - Traditional search engines (Google, Bing, Yandex)
 * - AI Search Engines (ChatGPT, Perplexity, Claude, Gemini)
 * - Social media crawlers
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  
  return {
    rules: [
      // ============================================
      // TRADITIONAL SEARCH ENGINES
      // ============================================
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
          '/private/',
          '/cart/',
          '/checkout/',
          '/order-confirmation/',
          '/*.json$',
          '/search?*',
        ],
      },
      
      // Google - Full access
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // Google Images
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // Yandex (for Central Asian traffic)
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // ============================================
      // AI SEARCH ENGINES - CRITICAL FOR 2026
      // ============================================
      
      // OpenAI GPTBot (ChatGPT Web Browsing)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/', '/private/'],
      },
      
      // ChatGPT User Agent
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // Anthropic Claude
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // Google Extended (Bard/Gemini training)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // Facebook/Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      {
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // Apple AI (Siri, Apple Intelligence)
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      
      // Microsoft Copilot
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // You.com AI
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/cart/', '/checkout/'],
      },
      
      // ============================================
      // SOCIAL MEDIA CRAWLERS
      // ============================================
      
      // Twitter/X
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      
      // LinkedIn
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      
      // Pinterest
      {
        userAgent: 'Pinterest',
        allow: '/',
      },
      
      // WhatsApp
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      
      // Telegram
      {
        userAgent: 'TelegramBot',
        allow: '/',
      },
      
      // ============================================
      // BLOCK UNWANTED BOTS
      // ============================================
      
      // Block aggressive scrapers
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-index.xml`,
    ],
    
    host: baseUrl,
  };
}
