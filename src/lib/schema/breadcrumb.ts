/**
 * Schema.org BreadcrumbList markup
 * @param items Breadcrumb items with name and url
 * @returns BreadcrumbList schema object
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Helper function to generate breadcrumb items from a pathname
 * @param pathname The current path
 * @param locale The current locale
 * @returns Array of breadcrumb items
 */
export function generateBreadcrumbsFromPath(pathname: string, locale: string = 'en'): Array<{ name: string; url: string }> {
  const baseUrl = locale === 'en' ? '' : '/ar';
  const segments = pathname.split('/').filter(Boolean);
  
  // Create the Home breadcrumb
  const breadcrumbs = [
    {
      name: locale === 'en' ? 'Home' : 'الرئيسية',
      url: `${baseUrl}/`,
    },
  ];

  // Map common URL segments to readable names in both languages
  const segmentNames: Record<string, { en: string; ar: string }> = {
    industries: { en: 'Industries', ar: 'الصناعات' },
    products: { en: 'Products', ar: 'المنتجات' },
    services: { en: 'Services', ar: 'الخدمات' },
    blog: { en: 'Blog', ar: 'المدونة' },
    shop: { en: 'Shop', ar: 'المتجر' },
    about: { en: 'About Us', ar: 'من نحن' },
    contact: { en: 'Contact', ar: 'اتصل بنا' },
    resources: { en: 'Resources', ar: 'الموارد' },
    
    // Industries
    healthcare: { en: 'Healthcare', ar: 'الرعاية الصحية' },
    aviation: { en: 'Aviation', ar: 'الطيران' },
    hospitality: { en: 'Hospitality', ar: 'الضيافة' },
    corporate: { en: 'Corporate', ar: 'الشركات' },
    education: { en: 'Education', ar: 'التعليم' },
    manufacturing: { en: 'Manufacturing', ar: 'التصنيع' },
    security: { en: 'Security', ar: 'الأمن' },
    
    // Products
    'medical-scrubs': { en: 'Medical Scrubs', ar: 'الملابس الطبية' },
    'aviation-uniforms': { en: 'Aviation Uniforms', ar: 'زي الطيران' },
    'culinary-uniforms': { en: 'Culinary Uniforms', ar: 'زي الطهاة' },
    'corporate-workwear': { en: 'Corporate Workwear', ar: 'ملابس الشركات' },
    'hospitality-attire': { en: 'Hospitality Attire', ar: 'ملابس الضيافة' },
    'industrial-uniforms': { en: 'Industrial Uniforms', ar: 'الزي الصناعي' },
    'security-uniforms': { en: 'Security Uniforms', ar: 'زي الأمن' },
    
    // Services
    'program-management': { en: 'Program Management', ar: 'إدارة البرامج' },
    'custom-design': { en: 'Custom Design', ar: 'التصميم المخصص' },
    'bulk-ordering': { en: 'Bulk Ordering', ar: 'الطلبات بالجملة' },
    'measurement-services': { en: 'Measurement Services', ar: 'خدمات القياس' },
    'uniform-policies': { en: 'Uniform Policies', ar: 'سياسات الزي الموحد' },
  };

  // Build the breadcrumbs based on the path segments
  let currentPath = baseUrl;
  
  segments.forEach((segment, index) => {
    // Skip locale segment 
    if (segment === 'ar') return;
    
    currentPath += `/${segment}`;
    const name = segmentNames[segment] 
      ? segmentNames[segment][locale as 'en' | 'ar'] 
      : segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    breadcrumbs.push({
      name,
      url: currentPath,
    });
  });

  return breadcrumbs;
} 