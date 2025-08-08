import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uneom.com';
  const currentDate = new Date().toISOString();

  // Homepage - Maximum priority
  const homepage = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0},
    {
      url: `${baseUrl}/ar/`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0},
  ];

  // Core business pages - High priority
  const corePages = [
    {
      url: `${baseUrl}/quote/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95},
    {
      url: `${baseUrl}/ar/quote/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95},
    {
      url: `${baseUrl}/contact/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/contact/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
  ];

  // Service pages - High priority for business
  const servicePages = [
    {
      url: `${baseUrl}/services/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/services/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/services/custom-design/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/services/custom-design/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/services/fabric-selection/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/services/fabric-selection/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/services/manufacturing/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/services/manufacturing/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/services/quality-assurance/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/services/quality-assurance/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/services/technical-finishes/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/services/technical-finishes/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/services/corporate-programs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/services/corporate-programs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/services/bulk-ordering/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/services/bulk-ordering/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/services/measurement-services/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/services/measurement-services/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/services/program-management/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/services/program-management/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/services/uniform-policies/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/services/uniform-policies/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
  ];

  // Industry pages - High priority for targeting
  const industryPages = [
    {
      url: `${baseUrl}/industries/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/industries/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/industries/corporate/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/industries/corporate/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/industries/healthcare/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/industries/healthcare/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/industries/aviation/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/industries/aviation/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/industries/hospitality/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/industries/hospitality/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/industries/education/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/industries/education/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/industries/manufacturing/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/industries/manufacturing/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/industries/security/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/industries/security/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/industries/retail-shops/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/industries/retail-shops/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
  ];

  // Location pages - High priority for local SEO
  const locationPages = [
    {
      url: `${baseUrl}/locations/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/locations/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/locations/riyadh/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.95, // Headquarters - highest priority
    },
    {
      url: `${baseUrl}/ar/locations/riyadh/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.95},
    {
      url: `${baseUrl}/locations/jeddah/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/locations/jeddah/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/locations/dammam/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/locations/dammam/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/locations/mecca/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/locations/mecca/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/locations/medina/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/locations/medina/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85},
  ];

  // Shop pages - High priority for e-commerce
  const shopPages = [
    {
      url: `${baseUrl}/shop/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    {
      url: `${baseUrl}/ar/shop/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9},
    // Medical Scrubs Category
    {
      url: `${baseUrl}/shop/medical-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/shop/medical-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    // Aviation Uniforms Category
    {
      url: `${baseUrl}/shop/aviation-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/shop/aviation-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    // Hospitality Attire Category
    {
      url: `${baseUrl}/shop/hospitality-attire/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/shop/hospitality-attire/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    // Industrial Uniforms Category
    {
      url: `${baseUrl}/shop/industrial-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    {
      url: `${baseUrl}/ar/shop/industrial-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85},
    // Education Uniforms Category
    {
      url: `${baseUrl}/shop/education-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/shop/education-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    // Corporate Workwear Category
    {
      url: `${baseUrl}/shop/corporate-workwear/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/shop/corporate-workwear/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    // Security Uniforms Category
    {
      url: `${baseUrl}/shop/security-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/shop/security-uniforms/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
  ];

  // Top product pages - Key revenue drivers
  const productPages = [
    // Premium Medical Scrubs
    {
      url: `${baseUrl}/shop/medical-scrubs/premium-medical-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/shop/medical-scrubs/premium-medical-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    // Antimicrobial Scrubs
    {
      url: `${baseUrl}/shop/medical-scrubs/antimicrobial-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    {
      url: `${baseUrl}/ar/shop/medical-scrubs/antimicrobial-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    // Surgical Scrubs
    {
      url: `${baseUrl}/shop/medical-scrubs/surgical-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    {
      url: `${baseUrl}/ar/shop/medical-scrubs/surgical-scrubs/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    // Airline Crew Uniform
    {
      url: `${baseUrl}/shop/aviation-uniforms/airline-crew-uniform/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    {
      url: `${baseUrl}/ar/shop/aviation-uniforms/airline-crew-uniform/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    // Pilot Uniform
    {
      url: `${baseUrl}/shop/aviation-uniforms/pilot-uniform/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    {
      url: `${baseUrl}/ar/shop/aviation-uniforms/pilot-uniform-set/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    // Luxury Hotel Uniform
    {
      url: `${baseUrl}/shop/hospitality-attire/luxury-hotel-uniform/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    {
      url: `${baseUrl}/ar/shop/hospitality-attire/luxury-hotel-uniform/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    // Restaurant Staff Uniform
    {
      url: `${baseUrl}/shop/hospitality-attire/restaurant-staff-uniform/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    {
      url: `${baseUrl}/ar/shop/hospitality-attire/restaurant-staff-uniform/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    // Industrial Coverall Pro
    {
      url: `${baseUrl}/shop/industrial-uniforms/industrial-coverall-pro/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
    {
      url: `${baseUrl}/ar/shop/industrial-uniforms/industrial-coverall-pro/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75},
  ];

  // Blog pages - Content marketing
  const blogPages = [
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/blog/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/blog/sustainable-uniforms-2024-trends/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/ar/blog/sustainable-uniforms-2024-trends/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/blog/school-uniforms-academic-performance/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/ar/blog/school-uniforms-academic-performance/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/blog/sustainable-school-uniforms-saudi/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/ar/blog/sustainable-school-uniforms-saudi/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
  ];

  // Resources and support pages
  const resourcePages = [
    {
      url: `${baseUrl}/resources/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/ar/resources/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/resources/fabric-guide/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65},
    {
      url: `${baseUrl}/ar/resources/fabric-guide/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65},
    {
      url: `${baseUrl}/resources/size-guide/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65},
    {
      url: `${baseUrl}/ar/resources/size-guide/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65},
    {
      url: `${baseUrl}/resources/procurement-guide/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65},
    {
      url: `${baseUrl}/ar/resources/procurement-guide/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65},
  ];

  // Static informational pages
  const staticPages = [
    {
      url: `${baseUrl}/about/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/ar/about/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8},
    {
      url: `${baseUrl}/faq/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/ar/faq/`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7},
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3},
    {
      url: `${baseUrl}/ar/privacy-policy/`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3},
    {
      url: `${baseUrl}/terms-of-service/`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3},
    {
      url: `${baseUrl}/ar/terms-of-service/`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3},
  ];

  return [
    ...homepage,
    ...corePages,
    ...servicePages,
    ...industryPages,
    ...locationPages,
    ...shopPages,
    ...productPages,
    ...blogPages,
    ...resourcePages,
    ...staticPages,
  ];
}