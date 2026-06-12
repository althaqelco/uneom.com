import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { locations } from '@/lib/data/locations';
import { products } from '@/lib/data/products';
import { INDUSTRIES } from '@/lib/data/industries';
import { getAllBlogPosts } from '@/lib/data/blogPosts.server';

// IMPORTANT: next.config.mjs sets `trailingSlash: true`, so every URL in
// this sitemap MUST end with "/" — otherwise each entry 308-redirects and
// Google treats the whole sitemap as low-quality.

/**
 * Enumerate static App Router child routes (folders containing page.tsx)
 * under src/app/<segments>. Most blog posts, resources and case studies
 * are static folders, NOT entries in the markdown/data layer — relying on
 * data files alone left ~90 crawlable pages out of the sitemap.
 */
function staticChildSlugs(...segments: string[]): string[] {
  try {
    const dir = path.join(process.cwd(), 'src', 'app', ...segments);
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter(
        e =>
          e.isDirectory() &&
          !e.name.startsWith('[') &&
          !e.name.startsWith('_') &&
          !['tag', 'posts', 'category'].includes(e.name) &&
          fs.existsSync(path.join(dir, e.name, 'page.tsx'))
      )
      .map(e => e.name);
  } catch {
    return [];
  }
}

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
    { url: `${baseUrl}/`, lastModified: CONTENT_DATES.homepage, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/ar/`, lastModified: CONTENT_DATES.homepage, changeFrequency: 'daily', priority: 1.0 },
  ];

  // 2. Core Pages
  const corePages: MetadataRoute.Sitemap = [
    'quote', 'contact', 'about', 'faq', 'privacy-policy', 'terms-of-service'
  ].flatMap(page => [
    { url: `${baseUrl}/${page}/`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ar/${page}/`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]);

  // 3. Industries (Dynamic)
  const industryPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/industries/`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/industries/`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    ...INDUSTRIES.flatMap(ind => [
      { url: `${baseUrl}/industries/${ind.slug}/`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly' as const, priority: 0.9 },
      { url: `${baseUrl}/ar/industries/${ind.slug}/`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly' as const, priority: 0.9 },
    ]),
  ];

  // 4. Locations (Dynamic)
  // Every SAUDI_CITIES slug now resolves: rich office cities render the
  // full ClientPage, the rest render the server CityHub fallback
  // (components/locations/CityHub.tsx) — so all hubs are safe to list.
  const locationPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/locations/`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/ar/locations/`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly', priority: 0.9 },
    ...SAUDI_CITIES.flatMap(city => [
      { url: `${baseUrl}/locations/${city.slug}/`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: city.priority },
      { url: `${baseUrl}/ar/locations/${city.slug}/`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: city.priority },
      ...INDUSTRIES.map(i => i.slug).flatMap(ind => [
        { url: `${baseUrl}/locations/${city.slug}/${ind}/`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
        { url: `${baseUrl}/ar/locations/${city.slug}/${ind}/`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
      ])
    ]),
  ];

  // 5. Shop (Dynamic)
  const productCategories = Array.from(new Set(products.map(p => p.category)));
  const shopPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/shop/`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/ar/shop/`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    ...productCategories.flatMap(cat => [
      { url: `${baseUrl}/shop/${cat}/`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/shop/${cat}/`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
    ]),
    ...products.flatMap(product => [
      { url: `${baseUrl}/shop/${product.category}/${product.id}/`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.8 },
      { url: `${baseUrl}/ar/shop/${product.category}/${product.id}/`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.8 },
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
    { url: `${baseUrl}/services/`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/services/`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    ...activeServices.flatMap(svc => [
      { url: `${baseUrl}/services/${svc}/`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/services/${svc}/`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
    ]),
  ];

  // 7. Blog (markdown posts + static page folders, deduplicated)
  const enPosts = getAllBlogPosts('en');
  const arPosts = getAllBlogPosts('ar');
  const enPostDates = new Map(enPosts.map(p => [p.slug, p.date]));
  const arPostDates = new Map(arPosts.map(p => [p.slug, p.date]));
  const enBlogSlugs = Array.from(new Set([...enPostDates.keys(), ...staticChildSlugs('blog')]));
  const arBlogSlugs = Array.from(new Set([...arPostDates.keys(), ...staticChildSlugs('ar', 'blog')]));

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog/`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/ar/blog/`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    ...enBlogSlugs.map(slug => ({
      url: `${baseUrl}/blog/${slug}/`,
      lastModified: enPostDates.get(slug) || CONTENT_DATES.blog,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...arBlogSlugs.map(slug => ({
      url: `${baseUrl}/ar/blog/${slug}/`,
      lastModified: arPostDates.get(slug) || CONTENT_DATES.blog,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
  ];

  // 8. Resources (static folders, both locales)
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/resources/`, lastModified: CONTENT_DATES.resources, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/ar/resources/`, lastModified: CONTENT_DATES.resources, changeFrequency: 'weekly', priority: 0.8 },
    ...staticChildSlugs('resources').map(slug => ({
      url: `${baseUrl}/resources/${slug}/`,
      lastModified: CONTENT_DATES.resources,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...staticChildSlugs('ar', 'resources').map(slug => ({
      url: `${baseUrl}/ar/resources/${slug}/`,
      lastModified: CONTENT_DATES.resources,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
  ];

  // 9. Case Studies (static folders, both locales)
  const casePages: MetadataRoute.Sitemap = [
    ...(staticChildSlugs('case-studies').length ? [
      { url: `${baseUrl}/case-studies/`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.75 },
    ] : []),
    ...(staticChildSlugs('ar', 'case-studies').length ? [
      { url: `${baseUrl}/ar/case-studies/`, lastModified: CONTENT_DATES.core, changeFrequency: 'monthly' as const, priority: 0.75 },
    ] : []),
    ...staticChildSlugs('case-studies').map(slug => ({
      url: `${baseUrl}/case-studies/${slug}/`,
      lastModified: CONTENT_DATES.core,
      changeFrequency: 'monthly' as const,
      priority: 0.65
    })),
    ...staticChildSlugs('ar', 'case-studies').map(slug => ({
      url: `${baseUrl}/ar/case-studies/${slug}/`,
      lastModified: CONTENT_DATES.core,
      changeFrequency: 'monthly' as const,
      priority: 0.65
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
    ...resourcePages,
    ...casePages,
  ];
}
