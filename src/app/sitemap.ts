import { MetadataRoute } from 'next';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';

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
  industries: '2026-04-20',
  locations: '2026-05-04', // New geo pages
  services: '2026-04-15',
  shop: '2026-04-25',
  blog: '2026-04-30',
  resources: '2026-03-15',
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
  const industries = [
    'healthcare', 'hospitality', 'corporate', 'aviation', 'education',
    'manufacturing', 'security', 'retail-shops', 'factory-industry',
    'factory-security', 'supply-manufacturing',
  ];

  const industryPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/industries`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/industries`, lastModified: CONTENT_DATES.industries, changeFrequency: 'weekly', priority: 0.9 },
    ...industries.flatMap(ind => [
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
      industries.flatMap(ind => [
        { url: `${baseUrl}/locations/${city.slug}/${ind}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
        { url: `${baseUrl}/ar/locations/${city.slug}/${ind}`, lastModified: CONTENT_DATES.locations, changeFrequency: 'monthly' as const, priority: Math.max(city.priority - 0.1, 0.5) },
      ])
    ),
  ];

  // ============================================
  // SERVICES
  // ============================================
  const services = [
    'custom-design', 'fabric-selection', 'manufacturing', 'quality-assurance',
    'technical-finishes', 'corporate-programs', 'bulk-ordering',
    'measurement-services', 'program-management', 'uniform-policies',
  ];

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ar/services`, lastModified: CONTENT_DATES.services, changeFrequency: 'weekly', priority: 0.9 },
    ...services.flatMap(svc => [
      { url: `${baseUrl}/services/${svc}`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/services/${svc}`, lastModified: CONTENT_DATES.services, changeFrequency: 'monthly' as const, priority: 0.85 },
    ]),
  ];

  // ============================================
  // SHOP — All product categories
  // ============================================
  const shopCategories = [
    'medical-scrubs', 'aviation-uniforms', 'hospitality-attire', 'industrial-uniforms',
    'education-uniforms', 'corporate-workwear', 'security-uniforms', 'healthcare-accessories',
    'corporate', 'corporate-attire', 'culinary-uniforms', 'healthcare',
    'healthcare-attire', 'high-visibility-clothing', 'industrial-attire',
    'manufacturing-attire', 'manufacturing-workwear', 'medical-accessories',
    'ppe', 'retail-uniforms', 'security-accessories', 'security-attire', 'workplace-uniforms',
  ];

  const shopPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/shop`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/ar/shop`, lastModified: CONTENT_DATES.shop, changeFrequency: 'daily', priority: 0.9 },
    ...shopCategories.flatMap(cat => [
      { url: `${baseUrl}/shop/${cat}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
      { url: `${baseUrl}/ar/shop/${cat}`, lastModified: CONTENT_DATES.shop, changeFrequency: 'weekly' as const, priority: 0.85 },
    ]),
  ];

  // ============================================
  // BLOG
  // ============================================
  const blogPosts = [
    'medical-scrubs-evolution-saudi', 'medical-textile-innovation', 'hospital-uniform-safety-standards',
    'healthcare-compliance-guide', 'sustainable-healthcare-uniforms', 'medical-hijab-healthcare-standards',
    'hospitality-uniforms-guest-experience', 'chef-uniform-design-guide', 'hajj-umrah-staff-uniforms',
    'mall-retail-uniforms-excellence', 'corporate-uniforms-brand-culture', 'corporate-uniforms-brand-perception',
    'corporate-uniform-employee-satisfaction', 'national-day-corporate-uniforms',
    'school-uniforms-national-identity-saudi', 'uniforms-modern-education', 'fabrics-student-uniforms',
    'teacher-uniform-professional-guide', 'industrial-safety-workwear-saudi',
    'industrial-safety-compliance-guide', 'industrial-protective-clothing-advances',
    'industrial-uniform-color-coding', 'industrial-electrostatic-protection',
    'industrial-heat-stress-management', 'safety-standards-saudi-manufacturing',
    'workwear-innovations-saudi-factories', 'security-uniforms-authority-trust',
    'security-uniform-psychology', 'advanced-fabrics-security-uniforms', 'corporate-security-branding',
    'aviation-uniforms-brand-identity', 'airline-uniform-design-cultural-identity',
    'future-aviation-uniforms-gcc', 'material-innovations-aviation-attire',
    'retail-uniform-impact', 'retail-uniform-selection-guide', 'sustainable-retail-uniforms',
    'sustainable-uniforms-2024-trends', 'uniform-trends-2025-saudi-market',
    'top-10-uniform-innovations-2025', 'circular-economy-uniforms',
    'uniform-budget-planning-2026', 'choosing-uniform-supplier-guide', 'fabrics-professional-attire',
  ];

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/ar/blog`, lastModified: CONTENT_DATES.blog, changeFrequency: 'daily', priority: 0.85 },
    ...blogPosts.flatMap(post => [
      { url: `${baseUrl}/blog/${post}`, lastModified: CONTENT_DATES.blog, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${baseUrl}/ar/blog/${post}`, lastModified: CONTENT_DATES.blog, changeFrequency: 'monthly' as const, priority: 0.7 },
    ]),
  ];

  // ============================================
  // RESOURCES + CASE STUDIES + LEGAL
  // ============================================
  const resources = ['fabric-guide', 'size-guide', 'procurement-guide', 'policy-templates', 'fabric-technology', 'fit-optimization', 'case-studies', 'guides', 'events'];
  const caseStudies = ['5-star-hotel-spa', 'beauty-chain-standardization', 'hospital-aesthetic-clinic', 'luxury-salon-evolution', 'nationwide-retail-branding', 'retail-brand-transformation', 'factory-safety-improvement'];

  const otherPages: MetadataRoute.Sitemap = [
    ...resources.flatMap(r => [
      { url: `${baseUrl}/resources/${r}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${baseUrl}/ar/resources/${r}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
    ]),
    ...caseStudies.flatMap(cs => [
      { url: `${baseUrl}/case-studies/${cs}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
      { url: `${baseUrl}/ar/case-studies/${cs}`, lastModified: CONTENT_DATES.resources, changeFrequency: 'monthly' as const, priority: 0.7 },
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
