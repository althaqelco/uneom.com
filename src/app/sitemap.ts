import { MetadataRoute } from 'next';

/**
 * SEO 2026 Optimized Sitemap
 * 
 * Priority Strategy:
 * 1.0  - Homepage (both languages)
 * 0.95 - Quote, Contact, Main Location (Riyadh)
 * 0.9  - Industries, Shop Main, Services Main
 * 0.85 - Product Categories, Individual Industries
 * 0.8  - Products, Blog Main, About, FAQ
 * 0.7  - Blog Posts, Resources
 * 0.6  - Authors, Case Studies
 * 0.3  - Legal pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uneom.com';
  const currentDate = new Date().toISOString();

  // ============================================
  // HOMEPAGE - Maximum Priority
  // ============================================
  const homepage = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // ============================================
  // CORE BUSINESS PAGES - Critical for Conversions
  // ============================================
  const corePages = [
    // Quote Request - Top Revenue Driver
    { url: `${baseUrl}/quote`, priority: 0.95, freq: 'weekly' as const },
    { url: `${baseUrl}/ar/quote`, priority: 0.95, freq: 'weekly' as const },
    
    // Contact - Lead Generation
    { url: `${baseUrl}/contact`, priority: 0.95, freq: 'weekly' as const },
    { url: `${baseUrl}/ar/contact`, priority: 0.95, freq: 'weekly' as const },
    
    // About - Trust & Authority
    { url: `${baseUrl}/about`, priority: 0.85, freq: 'monthly' as const },
    { url: `${baseUrl}/ar/about`, priority: 0.85, freq: 'monthly' as const },
    
    // FAQ - Customer Support & SEO
    { url: `${baseUrl}/faq`, priority: 0.8, freq: 'weekly' as const },
    { url: `${baseUrl}/ar/faq`, priority: 0.8, freq: 'weekly' as const },
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // INDUSTRIES - High Priority for Targeting
  // ============================================
  const industries = [
    'healthcare',
    'hospitality',
    'corporate',
    'aviation',
    'education',
    'manufacturing',
    'security',
    'retail-shops',
    'factory-industry',
    'factory-security',
    'firefighting',
    'delivery',
    'supply-manufacturing',
  ];

  const industryPages = [
    // Main industries page
    { url: `${baseUrl}/industries`, priority: 0.9, freq: 'weekly' as const },
    { url: `${baseUrl}/ar/industries`, priority: 0.9, freq: 'weekly' as const },
    // Individual industries
    ...industries.flatMap(industry => [
      { url: `${baseUrl}/industries/${industry}`, priority: 0.9, freq: 'weekly' as const },
      { url: `${baseUrl}/ar/industries/${industry}`, priority: 0.9, freq: 'weekly' as const },
    ]),
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // LOCATIONS - Local SEO Critical
  // ============================================
  const locations = [
    { city: 'riyadh', priority: 0.95 },    // Headquarters
    { city: 'jeddah', priority: 0.9 },
    { city: 'dammam', priority: 0.9 },
    { city: 'mecca', priority: 0.85 },
    { city: 'medina', priority: 0.85 },
  ];

  const locationPages = [
    // Main locations page
    { url: `${baseUrl}/locations`, priority: 0.9, freq: 'monthly' as const },
    { url: `${baseUrl}/ar/locations`, priority: 0.9, freq: 'monthly' as const },
    // Individual locations
    ...locations.flatMap(loc => [
      { url: `${baseUrl}/locations/${loc.city}`, priority: loc.priority, freq: 'monthly' as const },
      { url: `${baseUrl}/ar/locations/${loc.city}`, priority: loc.priority, freq: 'monthly' as const },
    ]),
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // SERVICES
  // ============================================
  const services = [
    'custom-design',
    'fabric-selection',
    'manufacturing',
    'quality-assurance',
    'technical-finishes',
    'corporate-programs',
    'bulk-ordering',
    'measurement-services',
    'program-management',
    'uniform-policies',
    'sustainable-uniforms',
  ];

  const servicePages = [
    { url: `${baseUrl}/services`, priority: 0.9, freq: 'weekly' as const },
    { url: `${baseUrl}/ar/services`, priority: 0.9, freq: 'weekly' as const },
    ...services.flatMap(service => [
      { url: `${baseUrl}/services/${service}`, priority: 0.85, freq: 'monthly' as const },
      { url: `${baseUrl}/ar/services/${service}`, priority: 0.85, freq: 'monthly' as const },
    ]),
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // SHOP - E-commerce Pages
  // ============================================
  const shopCategories = [
    'medical-scrubs',
    'aviation-uniforms',
    'hospitality-attire',
    'industrial-uniforms',
    'education-uniforms',
    'corporate-workwear',
    'security-uniforms',
    'healthcare-accessories',
    'chef-wear',
    'lab-coats',
    'nursing-scrubs',
    'doctors-coats',
  ];

  const shopPages = [
    { url: `${baseUrl}/shop`, priority: 0.9, freq: 'daily' as const },
    { url: `${baseUrl}/ar/shop`, priority: 0.9, freq: 'daily' as const },
    ...shopCategories.flatMap(category => [
      { url: `${baseUrl}/shop/${category}`, priority: 0.85, freq: 'weekly' as const },
      { url: `${baseUrl}/ar/shop/${category}`, priority: 0.85, freq: 'weekly' as const },
    ]),
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // BLOG - Content Marketing
  // ============================================
  const blogPosts = [
    // Healthcare & Medical
    'medical-scrubs-evolution-saudi',
    'medical-textile-innovation',
    'hospital-uniform-safety-standards',
    'healthcare-compliance-guide',
    'sustainable-healthcare-uniforms',
    'medical-hijab-healthcare-standards',
    
    // Hospitality
    'hospitality-uniforms-guest-experience',
    'chef-uniform-design-guide',
    'hajj-umrah-staff-uniforms',
    'mall-retail-uniforms-excellence',
    
    // Corporate
    'corporate-uniforms-brand-culture',
    'corporate-uniforms-brand-perception',
    'corporate-uniform-employee-satisfaction',
    'national-day-corporate-uniforms',
    
    // Education
    'school-uniforms-national-identity-saudi',
    'uniforms-modern-education',
    'fabrics-student-uniforms',
    'teacher-uniform-professional-guide',
    
    // Industrial & Safety
    'industrial-safety-workwear-saudi',
    'industrial-safety-compliance-guide',
    'industrial-protective-clothing-advances',
    'industrial-uniform-color-coding',
    'industrial-electrostatic-protection',
    'industrial-heat-stress-management',
    'safety-standards-saudi-manufacturing',
    'workwear-innovations-saudi-factories',
    
    // Security
    'security-uniforms-authority-trust',
    'security-uniform-psychology',
    'advanced-fabrics-security-uniforms',
    'corporate-security-branding',
    
    // Aviation
    'aviation-uniforms-brand-identity',
    'airline-uniform-design-cultural-identity',
    'future-aviation-uniforms-gcc',
    'material-innovations-aviation-attire',
    
    // Retail
    'retail-uniform-impact',
    'retail-uniform-selection-guide',
    'sustainable-retail-uniforms',
    
    // General & Trends
    'sustainable-uniforms-2024-trends',
    'uniform-trends-2025-saudi-market',
    'top-10-uniform-innovations-2025',
    'circular-economy-uniforms',
    'uniform-budget-planning-2026',
    'choosing-uniform-supplier-guide',
    'fabrics-professional-attire',
  ];

  const blogPages = [
    { url: `${baseUrl}/blog`, priority: 0.85, freq: 'daily' as const },
    { url: `${baseUrl}/ar/blog`, priority: 0.85, freq: 'daily' as const },
    ...blogPosts.flatMap(post => [
      { url: `${baseUrl}/blog/${post}`, priority: 0.7, freq: 'monthly' as const },
      { url: `${baseUrl}/ar/blog/${post}`, priority: 0.7, freq: 'monthly' as const },
    ]),
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // RESOURCES
  // ============================================
  const resources = [
    'fabric-guide',
    'size-guide',
    'procurement-guide',
    'policy-templates',
    'fabric-technology',
    'fit-optimization',
    'case-studies',
    'guides',
    'events',
  ];

  const resourcePages = [
    { url: `${baseUrl}/resources`, priority: 0.75, freq: 'weekly' as const },
    { url: `${baseUrl}/ar/resources`, priority: 0.75, freq: 'weekly' as const },
    ...resources.flatMap(resource => [
      { url: `${baseUrl}/resources/${resource}`, priority: 0.7, freq: 'monthly' as const },
      { url: `${baseUrl}/ar/resources/${resource}`, priority: 0.7, freq: 'monthly' as const },
    ]),
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // CASE STUDIES
  // ============================================
  const caseStudies = [
    '5-star-hotel-spa',
    'beauty-chain-standardization',
    'hospital-aesthetic-clinic',
    'luxury-salon-evolution',
    'nationwide-retail-branding',
    'retail-brand-transformation',
    'factory-safety-improvement',
  ];

  const caseStudyPages = caseStudies.flatMap(study => [
    { url: `${baseUrl}/case-studies/${study}`, priority: 0.7, freq: 'monthly' as const },
    { url: `${baseUrl}/ar/case-studies/${study}`, priority: 0.7, freq: 'monthly' as const },
  ]).map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // AUTHORS
  // ============================================
  const authorPages = [
    { url: `${baseUrl}/authors`, priority: 0.6, freq: 'monthly' as const },
    { url: `${baseUrl}/ar/authors`, priority: 0.6, freq: 'monthly' as const },
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // LEGAL PAGES - Low Priority
  // ============================================
  const legalPages = [
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, freq: 'yearly' as const },
    { url: `${baseUrl}/ar/privacy-policy`, priority: 0.3, freq: 'yearly' as const },
    { url: `${baseUrl}/terms-of-service`, priority: 0.3, freq: 'yearly' as const },
    { url: `${baseUrl}/ar/terms-of-service`, priority: 0.3, freq: 'yearly' as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, freq: 'yearly' as const },
    { url: `${baseUrl}/ar/privacy`, priority: 0.3, freq: 'yearly' as const },
    { url: `${baseUrl}/terms`, priority: 0.3, freq: 'yearly' as const },
    { url: `${baseUrl}/ar/terms`, priority: 0.3, freq: 'yearly' as const },
  ].map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  // ============================================
  // COMBINE ALL SITEMAPS
  // ============================================
  return [
    ...homepage,
    ...corePages,
    ...industryPages,
    ...locationPages,
    ...servicePages,
    ...shopPages,
    ...blogPages,
    ...resourcePages,
    ...caseStudyPages,
    ...authorPages,
    ...legalPages,
  ];
}
