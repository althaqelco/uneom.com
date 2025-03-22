import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  const lastModified = new Date();
  
  // Define all pages for the sitemap with both English and Arabic versions
  const pages = [
    // Main pages
    { url: '/', lastModified, changeFrequency: 'daily', priority: 1.0 },
    { url: '/ar', lastModified, changeFrequency: 'daily', priority: 1.0 },
    
    // About pages
    { url: '/about', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/about', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Contact pages
    { url: '/contact', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/contact', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Quote pages
    { url: '/quote', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: '/ar/quote', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    
    // Industries pages
    { url: '/industries', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/industries', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Industry specific pages - English
    { url: '/industries/healthcare', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/industries/aviation', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/industries/hospitality', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/industries/corporate', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/industries/education', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/industries/manufacturing', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/industries/security', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Industry specific pages - Arabic
    { url: '/ar/industries/healthcare', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/industries/aviation', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/industries/hospitality', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/industries/corporate', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/industries/education', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/industries/manufacturing', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/industries/security', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Services pages
    { url: '/services', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/services', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Service specific pages - English
    { url: '/services/program-management', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/custom-design', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/bulk-ordering', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/measurement-services', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/services/uniform-policies', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Service specific pages - Arabic
    { url: '/ar/services/program-management', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/services/custom-design', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/services/bulk-ordering', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/services/measurement-services', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: '/ar/services/uniform-policies', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Resources pages
    { url: '/resources', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/ar/resources', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    
    // Resource specific pages - English
    { url: '/resources/fabric-guide', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/resources/size-guide', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/resources/procurement-guide', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/resources/policy-templates', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    
    // Resource specific pages - Arabic
    { url: '/ar/resources/fabric-guide', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/ar/resources/size-guide', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/ar/resources/procurement-guide', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: '/ar/resources/policy-templates', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    
    // Shop pages
    { url: '/shop', lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: '/ar/shop', lastModified, changeFrequency: 'daily', priority: 0.9 },
    
    // Shop category pages - English
    { url: '/shop/medical-scrubs', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/shop/aviation-uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/shop/hospitality-attire', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/shop/corporate-workwear', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/shop/security-uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/shop/education-uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    
    // Shop category pages - Arabic
    { url: '/ar/shop/medical-scrubs', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/ar/shop/aviation-uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/ar/shop/hospitality-attire', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/ar/shop/corporate-workwear', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/ar/shop/security-uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/ar/shop/education-uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    
    // Blog pages
    { url: '/blog', lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: '/ar/blog', lastModified, changeFrequency: 'weekly', priority: 0.7 },
    
    // صفحات الزي الموحد واليونيفورم حسب المدن السعودية - اللغة الإنجليزية
    { url: '/locations/riyadh/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/locations/jeddah/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/locations/dammam/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/locations/makkah/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/locations/medina/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/locations/khobar/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/locations/taif/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/locations/abha/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    
    // صفحات الزي الموحد واليونيفورم حسب المدن السعودية - اللغة العربية
    { url: '/ar/locations/riyadh/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/locations/jeddah/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/locations/dammam/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/locations/makkah/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/locations/medina/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/locations/khobar/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/locations/taif/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: '/ar/locations/abha/uniforms', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    
    // صفحات اليونيفورم حسب القطاعات والمدن - اللغة الإنجليزية
    { url: '/industries/healthcare/riyadh', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/industries/healthcare/jeddah', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/industries/healthcare/dammam', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/industries/aviation/riyadh', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/industries/aviation/jeddah', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/industries/hospitality/riyadh', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/industries/hospitality/jeddah', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/industries/hospitality/dammam', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    
    // صفحات اليونيفورم حسب القطاعات والمدن - اللغة العربية
    { url: '/ar/industries/healthcare/riyadh', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/industries/healthcare/jeddah', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/industries/healthcare/dammam', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/industries/aviation/riyadh', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/industries/aviation/jeddah', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/industries/hospitality/riyadh', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/industries/hospitality/jeddah', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: '/ar/industries/hospitality/dammam', lastModified, changeFrequency: 'weekly', priority: 0.9 },
  ];
  
  // Create sitemap entries with absolute URLs
  return pages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: page.priority,
  }));
} 