import { MetadataRoute } from 'next';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { products } from '@/lib/data/products';
import { INDUSTRIES } from '@/lib/data/industries';
import { getAllBlogPosts } from '@/lib/data/blogPosts.server';

/**
 * SEO 2026 Sovereign Sitemap — Temporal Integrity Engine
 */

const CONTENT_DATES = {
  homepage: '2026-05-04',
  core: '2026-05-01',
  industries: '2026-05-05',
  locations: '2026-05-04',
  services: '2026-05-05',
  shop: '2026-05-06', // Updated today
  blog: '2026-05-06',
  resources: '2026-05-05',
  legal: '2026-01-01',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uneom.com';

  // 1. Homepage
  const homepage: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: CONTENT_DATES.homepage, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/ar`, lastModified: CONTENT_DATES.homepage, changeFrequency: 'daily', priority: 1.0 },
  ];

  // 2. Core Pages
  const corePages: MetadataRoute.Sitemap = [
    'quote', 'contact', 'about', 'faq', 'privacy-policy', 'terms-of-service'
  ].flatMap(page => [
    { url: `${baseUrl}/${page}`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ar/${page}`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]);

  // 3. Industries (Dynamic)
  const industryPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/industries`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/industries`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    ...INDUSTRIES.flatMap(ind => [
      { url: `${baseUrl}/industries/${ind.slug}`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${baseUrl}/ar/industries/${ind.slug}`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly' as const, priority: 0.9 },
    ]),
  ];

  // 4. Locations (Dynamic)
  const locationPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/locations`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ar/locations`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly', priority: 0.9 },
    ...SAUDI_CITIES.flatMap(city => [
      { url: `${baseUrl}/locations/${city.slug}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: city.priority },
      { url: `${baseUrl}/ar/locations/${city.slug}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: city.priority },
      ...INDUSTRIES.map(i => i.slug).flatMap(ind => [
        { url: `${baseUrl}/locations/${city.slug}/${ind}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
        { url: `${baseUrl}/ar/locations/${city.slug}/${ind}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
      ])
    ]),
  ];

  // 5. Shop (Dynamic)
  const productCategories = Array.from(new Set(products.map(p => p.category)));
  const shopPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/shop`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/ar/shop`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    ...productCategories.flatMap(cat => [
      { url: `${baseUrl}/shop/${cat}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/shop/${cat}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
    ]),
    ...products.flatMap(product => [
      { url: `${baseUrl}/shop/${product.category}/${product.id}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.8 },
      { url: `${baseUrl}/ar/shop/${product.category}/${product.id}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.8 },
    ]),
  ];

  // 6. Services (Dynamic)
  // We'll use a curated list of active service paths
  const activeServices = [
    'program-management', 'custom-design', 'bulk-ordering', 'measurement-services', 
    'uniform-policies', 'fabric-selection', 'quality-assurance', 'manufacturing', 
    'technical-finishes', 'corporate-programs'
  ];
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/services`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    ...activeServices.flatMap(svc => [
      { url: `${baseUrl}/services/${svc}`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/services/${svc}`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
    ]),
  ];

  // 7. Blog (Dynamic)
  const enPosts = getAllBlogPosts('en');
  const arPosts = getAllBlogPosts('ar');
  
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/ar/blog`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    ...enPosts.map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date || CONTENT_DATES.blog,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...arPosts.map(post => ({
      url: `${baseUrl}/ar/blog/${post.slug}`,
      lastModified: post.date || CONTENT_DATES.blog,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
  ];

  return [
    ...homepage,
    ...corePages,
    ...industryPages,
    ...locationPages,
    ...shopPages,
    ...servicePages,
    ...blogPages,
  ];
}
