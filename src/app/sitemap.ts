import { MetadataRoute } from 'next';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import sitemapPaths from '@/lib/data/sitemap-paths.json';

/**
 * SEO 2026 Sovereign Sitemap — Temporal Integrity Engine
 * 
 * From Prokr Blueprint §37.2:
 * ❌ NEVER use `new Date()` — this lies to Google and causes Sitemap Distrust
 * ✅ Use static dates that only change when content actually changes
 * 
 * Split into logical sections with proper priority hierarchy.
 * Includes all 24 Saudi cities × 11 industries = 264 location pages (EN+AR = 528)
 */

// Static last-modified dates — update these ONLY when actual content changes
const CONTENT_DATES = {
  homepage: '2026-05-04',
  core: '2026-05-01',
  industries: '2026-05-05',
  locations: '2026-05-04', // New geo pages
  services: '2026-05-05',
  shop: '2026-05-05',
  blog: '2026-04-30',
  resources: '2026-05-05',
  legal: '2026-01-01',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uneom.com';

  // ============================================
  // HOMEPAGE — Maximum Priority
  // ============================================
  const homepage: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: CONTENT_DATES.homepage, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/ar`, lastModified: CONTENT_DATES.homepage, changeFrequency: 'daily', priority: 1.0 },
  ];

  // ============================================
  // CORE BUSINESS PAGES
  // ============================================
  const corePages: MetadataRoute.Sitemap = [
    'quote', 'contact', 'about', 'faq',
  ].flatMap(page => [
    { url: `${baseUrl}/${page}`, lastModified: CONTENT_DATES.core, changeFrequency: 'weekly' as const, priority: page === 'quote' || page === 'contact' ? 0.95 : 0.85 },
    { url: `${baseUrl}/ar/${page}`, lastModified: CONTENT_DATES.core, changeFrequency: 'weekly' as const, priority: page === 'quote' || page === 'contact' ? 0.95 : 0.85 },
  ]);

  // ============================================
  // INDUSTRIES — High Priority
  // ============================================
  const industryPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/industries`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/industries`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    ...sitemapPaths.industries.flatMap(ind => [
      { url: `${baseUrl}/industries/${ind}`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${baseUrl}/ar/industries/${ind}`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly' as const, priority: 0.9 },
    ]),
  ];

  // ============================================
  // LOCATIONS — 24 Saudi Cities (Hyper-Local pSEO)
  // ============================================
  const locationPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/locations`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ar/locations`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly', priority: 0.9 },
    // Individual city pages
    ...SAUDI_CITIES.flatMap(city => [
      { url: `${baseUrl}/locations/${city.slug}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: city.priority },
      { url: `${baseUrl}/ar/locations/${city.slug}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: city.priority },
    ]),
    // City × Industry cross-pages (528 pages!)
    ...SAUDI_CITIES.flatMap(city =>
      sitemapPaths.industries.flatMap(ind => [
        { url: `${baseUrl}/locations/${city.slug}/${ind}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
        { url: `${baseUrl}/ar/locations/${city.slug}/${ind}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
      ])
    ),
  ];

  // ============================================
  // SERVICES
  // ============================================
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/services`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    ...sitemapPaths.services.flatMap(svc => [
      { url: `${baseUrl}/services/${svc}`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/services/${svc}`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
    ]),
  ];

  // ============================================
  // SHOP — All product categories
  // ============================================
  const shopPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/shop`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/ar/shop`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    ...sitemapPaths.shop.flatMap(cat => [
      { url: `${baseUrl}/shop/${cat}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/shop/${cat}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
    ]),
  ];

  // ============================================
  // BLOG
  // ============================================
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/ar/blog`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    ...sitemapPaths.blog.flatMap(post => [
      { url: `${baseUrl}/blog/${post}`, lastModified: CONTENT_DATES.blog, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${baseUrl}/ar/blog/${post}`, lastModified: CONTENT_DATES.blog, changeFrequency: 'monthly' as const, priority: 0.7 },
    ]),
  ];

  // ============================================
  // RESOURCES + CASE STUDIES + LEGAL
  // ============================================
  const otherPages: MetadataRoute.Sitemap = [
    ...sitemapPaths.resources.flatMap(r => [
      { url: `${baseUrl}/resources/${r}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${baseUrl}/ar/resources/${r}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
    ]),
    ...sitemapPaths.caseStudies.flatMap(cs => [
      { url: `${baseUrl}/case-studies/${cs}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${baseUrl}/ar/case-studies/${cs}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
    ]),
    ...sitemapPaths.other.flatMap(p => [
      { url: `${baseUrl}/${p}`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${baseUrl}/ar/${p}`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.7 },
    ]),
    ...[
      { url: `${baseUrl}/privacy-policy`, priority: 0.3 }, { url: `${baseUrl}/ar/privacy-policy`, priority: 0.3 },
      { url: `${baseUrl}/terms-of-service`, priority: 0.3 }, { url: `${baseUrl}/ar/terms-of-service`, priority: 0.3 },
    ].map(p => ({ ...p, lastModified: CONTENT_DATES.legal, changeFrequency: 'yearly' as const })),
  ];

  // ============================================
  // COMBINE ALL
  // ============================================
  return [
    ...homepage,
    ...corePages,
    ...industryPages,
    ...locationPages,
    ...servicePages,
    ...shopPages,
    ...blogPages,
    ...otherPages,
  ];
}
