const fs = require('fs');
const path = require('path');

// تاريخ آخر تحديث
const lastmod = new Date().toISOString().split('T')[0];

// الصفحات الرئيسية مع أولوياتها
const mainPages = [
  // الصفحات الرئيسية
  { url: '/', priority: '1.0', changefreq: 'daily', hreflang: { en: '/', ar: '/ar' } },
  { url: '/ar', priority: '1.0', changefreq: 'daily', hreflang: { en: '/', ar: '/ar' } },
  
  // صفحات المتجر الرئيسية
  { url: '/shop', priority: '0.9', changefreq: 'daily', hreflang: { en: '/shop', ar: '/ar/shop' } },
  { url: '/ar/shop', priority: '0.9', changefreq: 'daily', hreflang: { en: '/shop', ar: '/ar/shop' } },
  
  // صفحات الخدمات
  { url: '/services', priority: '0.8', changefreq: 'weekly', hreflang: { en: '/services', ar: '/ar/services' } },
  { url: '/ar/services', priority: '0.8', changefreq: 'weekly', hreflang: { en: '/services', ar: '/ar/services' } },
  
  // صفحات الصناعات
  { url: '/industries', priority: '0.8', changefreq: 'weekly', hreflang: { en: '/industries', ar: '/ar/industries' } },
  { url: '/ar/industries', priority: '0.8', changefreq: 'weekly', hreflang: { en: '/industries', ar: '/ar/industries' } },
  
  // صفحات المدونة
  { url: '/blog', priority: '0.8', changefreq: 'daily', hreflang: { en: '/blog', ar: '/ar/blog' } },
  { url: '/ar/blog', priority: '0.8', changefreq: 'daily', hreflang: { en: '/blog', ar: '/ar/blog' } },
  
  // صفحات الاتصال والعروض
  { url: '/contact', priority: '0.9', changefreq: 'monthly', hreflang: { en: '/contact', ar: '/ar/contact' } },
  { url: '/ar/contact', priority: '0.9', changefreq: 'monthly', hreflang: { en: '/contact', ar: '/ar/contact' } },
  { url: '/quote', priority: '0.9', changefreq: 'monthly', hreflang: { en: '/quote', ar: '/ar/quote' } },
  { url: '/ar/quote', priority: '0.9', changefreq: 'monthly', hreflang: { en: '/quote', ar: '/ar/quote' } },
  
  // صفحات المعلومات
  { url: '/about', priority: '0.7', changefreq: 'monthly', hreflang: { en: '/about', ar: '/ar/about' } },
  { url: '/ar/about', priority: '0.7', changefreq: 'monthly', hreflang: { en: '/about', ar: '/ar/about' } },
  { url: '/faq', priority: '0.6', changefreq: 'monthly', hreflang: { en: '/faq', ar: '/ar/faq' } },
  { url: '/ar/faq', priority: '0.6', changefreq: 'monthly', hreflang: { en: '/faq', ar: '/ar/faq' } },
];

// صفحات الصناعات
const industryPages = [
  'aviation', 'corporate', 'healthcare', 'hospitality', 'manufacturing', 
  'education', 'security', 'retail-shops', 'factory-industry', 'supply-manufacturing'
];

// صفحات الخدمات
const servicePages = [
  'custom-design', 'fabric-selection', 'manufacturing', 'quality-assurance',
  'technical-finishes', 'corporate-programs', 'bulk-ordering', 'measurement-services',
  'program-management', 'uniform-policies'
];

// فئات المتجر
const shopCategories = [
  'aviation-uniforms', 'medical-scrubs', 'hospitality-attire', 'industrial-uniforms',
  'education-uniforms', 'security-uniforms', 'corporate', 'manufacturing-attire',
  'healthcare', 'workplace-uniforms'
];

// منتجات المتجر الرئيسية
const shopProducts = {
  'aviation-uniforms': [
    'airline-crew-uniform', 'pilot-uniform', 'flight-attendant-dress', 
    'ground-crew-uniform', 'pilot-uniform-set', 'airline-service-vest', 'aviation-blazer'
  ],
  'medical-scrubs': [
    'premium-medical-scrubs', 'antimicrobial-scrubs', 'nursing-scrubs',
    'medical-lab-coats', 'surgical-scrubs', 'executive-medical-uniforms',
    'premium-scrubs-set', 'premium-surgical-gowns', 'medical-lab-coat',
    'executive-medical-uniform', 'professional-lab-coat'
  ],
  'hospitality-attire': [
    'luxury-hotel-uniform', 'restaurant-staff-uniform', 'housekeeping-uniform',
    'concierge-uniform', 'premium-hotel-uniforms', 'reception-staff-uniform',
    'resort-staff-attire'
  ],
  'industrial-uniforms': [
    'industrial-coverall-pro', 'flame-resistant-workwear', 'industrial-coverall',
    'industrial-jacket', 'industrial-safety-vest', 'welding-apron'
  ],
  'education-uniforms': [
    'premium-school-uniforms', 'faculty-professional-attire', 'student-athletic-wear',
    'premium-school-uniform', 'university-attire', 'staff-uniforms'
  ],
  'security-uniforms': [
    'executive-protection', 'security-officer-uniform', 'professional-security',
    'tactical-security-uniforms', 'security-patrol-jacket', 'tactical-security-vest',
    'security-accessories-kit'
  ],
  'corporate': [
    'executive-office-attire', 'executive-suits', 'business-shirts'
  ],
  'manufacturing-attire': [
    'industrial-protective-uniforms'
  ],
  'healthcare': [
    'advanced-medical-scrubs'
  ],
  'workplace-uniforms': [
    'executive-suits'
  ]
};

// صفحات المواقع
const locationPages = ['riyadh', 'jeddah', 'dammam', 'mecca', 'medina'];

// صفحات الموارد
const resourcePages = [
  'case-studies', 'events', 'fabric-guide', 'fabric-technology', 
  'fit-optimization', 'guides', 'policy-templates', 'procurement-guide', 'size-guide'
];

// مقالات المدونة
const blogPosts = [
  'school-uniforms-academic-performance', 'sustainable-uniforms-2024-trends',
  'sustainable-school-uniforms-saudi', 'airline-uniform-design-cultural-identity',
  'corporate-security-branding', 'corporate-uniforms-brand-perception',
  'fabrics-professional-attire', 'future-aviation-uniforms-gcc',
  'future-professional-wear-digital-age', 'hospital-uniform-safety-standards',
  'industrial-heat-stress-management', 'industrial-uniform-color-coding',
  'material-innovations-aviation-attire', 'retail-uniform-impact',
  'security-uniform-psychology', 'smart-fabrics-professional-wear',
  'advanced-fabrics-security-uniforms', 'corporate-uniform-employee-satisfaction',
  'industrial-electrostatic-protection', 'industrial-heat-stress-management',
  'industrial-safety-compliance-guide', 'security-uniform-safety-standards'
];

// علامات المدونة
const blogTags = [
  'healthcare', 'safety-standards', 'infection-control', 'aviation', 'corporate',
  'sustainability', 'innovation', 'manufacturing', 'security', 'education',
  'الرعاية-الصحية', 'معايير-السلامة', 'مكافحة-العدوى', 'الطيران', 'الشركات',
  'الاستدامة', 'الابتكار', 'التصنيع', 'الأمن', 'التعليم'
];

// المؤلفون
const authors = [
  'abdullah-al-qahtani', 'noura-al-ahmad', 'khalid-ibrahim', 'fatima-al-zahra',
  'omar-hassan', 'aisha-mohammed', 'ahmed-salem', 'sara-al-rashid',
  'mohammed-al-otaibi', 'layla-al-mansouri'
];

// دراسات الحالة
const caseStudies = [
  '5-star-hotel-spa', 'hospital-aesthetic-clinic', 'luxury-salon-evolution',
  'nationwide-retail-branding', 'retail-brand-transformation', 'factory-safety-improvement'
];

function generateHreflangTags(hreflang) {
  if (!hreflang) return '';
  
  let tags = '';
  if (hreflang.en) {
    tags += `    <xhtml:link rel="alternate" hreflang="en" href="https://uneom.com${hreflang.en}"/>\n`;
  }
  if (hreflang.ar) {
    tags += `    <xhtml:link rel="alternate" hreflang="ar" href="https://uneom.com${hreflang.ar}"/>\n`;
  }
  return tags;
}

function createUrlEntry(url, priority, changefreq, hreflang = null) {
  const hreflangTags = generateHreflangTags(hreflang);
  
  return `  <url>
    <loc>https://uneom.com${url}</loc>
${hreflangTags}    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // إضافة الصفحات الرئيسية
  mainPages.forEach(page => {
    sitemap += createUrlEntry(page.url, page.priority, page.changefreq, page.hreflang) + '\n';
  });

  // إضافة صفحات الصناعات
  industryPages.forEach(industry => {
    sitemap += createUrlEntry(`/industries/${industry}`, '0.8', 'weekly', {
      en: `/industries/${industry}`,
      ar: `/ar/industries/${industry}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/industries/${industry}`, '0.8', 'weekly', {
      en: `/industries/${industry}`,
      ar: `/ar/industries/${industry}`
    }) + '\n';
  });

  // إضافة صفحات فرعية للصناعات
  sitemap += createUrlEntry('/industries/hospitality/hotels', '0.7', 'weekly', {
    en: '/industries/hospitality/hotels',
    ar: '/ar/industries/hospitality/hotels'
  }) + '\n';
  sitemap += createUrlEntry('/ar/industries/hospitality/hotels', '0.7', 'weekly', {
    en: '/industries/hospitality/hotels',
    ar: '/ar/industries/hospitality/hotels'
  }) + '\n';
  
  sitemap += createUrlEntry('/industries/hospitality/restaurants', '0.7', 'weekly', {
    en: '/industries/hospitality/restaurants',
    ar: '/ar/industries/hospitality/restaurants'
  }) + '\n';
  sitemap += createUrlEntry('/ar/industries/hospitality/restaurants', '0.7', 'weekly', {
    en: '/industries/hospitality/restaurants',
    ar: '/ar/industries/hospitality/restaurants'
  }) + '\n';

  sitemap += createUrlEntry('/industries/manufacturing/heavy-industry', '0.7', 'weekly', {
    en: '/industries/manufacturing/heavy-industry',
    ar: '/ar/industries/manufacturing/heavy-industry'
  }) + '\n';
  sitemap += createUrlEntry('/ar/industries/manufacturing/heavy-industry', '0.7', 'weekly', {
    en: '/industries/manufacturing/heavy-industry',
    ar: '/ar/industries/manufacturing/heavy-industry'
  }) + '\n';

  sitemap += createUrlEntry('/industries/manufacturing/petrochemical', '0.7', 'weekly', {
    en: '/industries/manufacturing/petrochemical',
    ar: '/ar/industries/manufacturing/petrochemical'
  }) + '\n';
  sitemap += createUrlEntry('/ar/industries/manufacturing/petrochemical', '0.7', 'weekly', {
    en: '/industries/manufacturing/petrochemical',
    ar: '/ar/industries/manufacturing/petrochemical'
  }) + '\n';

  // إضافة صفحات الخدمات
  servicePages.forEach(service => {
    sitemap += createUrlEntry(`/services/${service}`, '0.8', 'monthly', {
      en: `/services/${service}`,
      ar: `/ar/services/${service}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/services/${service}`, '0.8', 'monthly', {
      en: `/services/${service}`,
      ar: `/ar/services/${service}`
    }) + '\n';
  });

  // إضافة فئات المتجر
  shopCategories.forEach(category => {
    sitemap += createUrlEntry(`/shop/${category}`, '0.8', 'daily', {
      en: `/shop/${category}`,
      ar: `/ar/shop/${category}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/shop/${category}`, '0.8', 'daily', {
      en: `/shop/${category}`,
      ar: `/ar/shop/${category}`
    }) + '\n';
  });

  // إضافة منتجات المتجر
  Object.keys(shopProducts).forEach(category => {
    shopProducts[category].forEach(product => {
      sitemap += createUrlEntry(`/shop/${category}/${product}`, '0.7', 'weekly') + '\n';
      sitemap += createUrlEntry(`/ar/shop/${category}/${product}`, '0.7', 'weekly') + '\n';
    });
  });

  // إضافة صفحات المواقع
  sitemap += createUrlEntry('/locations', '0.6', 'monthly', {
    en: '/locations',
    ar: '/ar/locations'
  }) + '\n';
  sitemap += createUrlEntry('/ar/locations', '0.6', 'monthly', {
    en: '/locations',
    ar: '/ar/locations'
  }) + '\n';

  locationPages.forEach(location => {
    sitemap += createUrlEntry(`/locations/${location}`, '0.7', 'monthly', {
      en: `/locations/${location}`,
      ar: `/ar/locations/${location}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/locations/${location}`, '0.7', 'monthly', {
      en: `/locations/${location}`,
      ar: `/ar/locations/${location}`
    }) + '\n';
  });

  // إضافة صفحات الموارد
  resourcePages.forEach(resource => {
    const enUrl = `/resources/${resource}`;
    const arUrl = `/ar/resources/${resource}`;
    
    sitemap += createUrlEntry(enUrl, '0.7', 'monthly', {
      en: enUrl,
      ar: arUrl
    }) + '\n';
    sitemap += createUrlEntry(arUrl, '0.7', 'monthly', {
      en: enUrl,
      ar: arUrl
    }) + '\n';
  });

  // إضافة مقالات المدونة
  blogPosts.forEach(post => {
    sitemap += createUrlEntry(`/blog/${post}`, '0.7', 'weekly', {
      en: `/blog/${post}`,
      ar: `/ar/blog/${post}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/blog/${post}`, '0.7', 'weekly', {
      en: `/blog/${post}`,
      ar: `/ar/blog/${post}`
    }) + '\n';
  });

  // إضافة علامات المدونة
  blogTags.forEach(tag => {
    const encodedTag = encodeURIComponent(tag);
    sitemap += createUrlEntry(`/blog/tag/${encodedTag}`, '0.6', 'weekly') + '\n';
    sitemap += createUrlEntry(`/ar/blog/tag/${encodedTag}`, '0.6', 'weekly') + '\n';
  });

  // إضافة المؤلفين
  sitemap += createUrlEntry('/authors', '0.6', 'monthly', {
    en: '/authors',
    ar: '/ar/authors'
  }) + '\n';
  sitemap += createUrlEntry('/ar/authors', '0.6', 'monthly', {
    en: '/authors',
    ar: '/ar/authors'
  }) + '\n';

  authors.forEach(author => {
    sitemap += createUrlEntry(`/authors/${author}`, '0.6', 'monthly', {
      en: `/authors/${author}`,
      ar: `/ar/authors/${author}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/authors/${author}`, '0.6', 'monthly', {
      en: `/authors/${author}`,
      ar: `/ar/authors/${author}`
    }) + '\n';
  });

  // إضافة دراسات الحالة
  caseStudies.forEach(study => {
    sitemap += createUrlEntry(`/case-studies/${study}`, '0.7', 'monthly', {
      en: `/case-studies/${study}`,
      ar: `/ar/case-studies/${study}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/case-studies/${study}`, '0.7', 'monthly', {
      en: `/case-studies/${study}`,
      ar: `/ar/case-studies/${study}`
    }) + '\n';
  });

  // إضافة صفحات قانونية
  const legalPages = ['privacy', 'terms', 'privacy-policy', 'terms-of-service'];
  legalPages.forEach(page => {
    sitemap += createUrlEntry(`/${page}`, '0.3', 'yearly', {
      en: `/${page}`,
      ar: `/ar/${page}`
    }) + '\n';
    sitemap += createUrlEntry(`/ar/${page}`, '0.3', 'yearly', {
      en: `/${page}`,
      ar: `/ar/${page}`
    }) + '\n';
  });

  sitemap += '</urlset>';
  return sitemap;
}

// إنشاء خريطة الموقع
const sitemapContent = generateSitemap();

// كتابة الملف
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapContent);

console.log('✅ تم إنشاء خريطة الموقع بنجاح!');
console.log(`📊 تم إنشاء ${sitemapContent.split('<url>').length - 1} رابط`);