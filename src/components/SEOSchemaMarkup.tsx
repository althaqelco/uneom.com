import Script from 'next/script';
import getOrganizationSchema from '@/lib/schema/organization';

// Define Locale type locally to avoid import issues
type Locale = 'en' | 'ar';

/**
 * Server Component that renders base schema markup for all pages
 * This provides essential structured data for search engines
 */
export default function SEOSchemaMarkup({
  locale = 'en',
  pageType
}: {
  locale?: Locale;
  pageType?: 'home' | 'about' | 'services' | 'contact' | 'products' | 'blog';
}) {
  // Generate organization schema
  const organizationSchema = getOrganizationSchema(locale);
  
  // Serialize schema to JSON string
  const schemaJson = JSON.stringify(organizationSchema);
  
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaJson }}
      strategy="afterInteractive"
    />
  );
}

/**
 * Generate website schema markup for better SEO
 * @param locale - Current locale
 * @returns Website schema object
 */
export function getWebsiteSchema(locale: Locale = 'en') {
  const isArabic = locale === 'ar';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://uneom.com/#website',
    url: isArabic ? 'https://uneom.com/ar' : 'https://uneom.com',
    name: isArabic ? 'يونيوم' : 'UNEOM',
    description: isArabic 
      ? 'نحن نقدم حلول الزي الموحد المتكاملة المصممة خصيصًا للشركات في جميع أنحاء المملكة العربية السعودية والشرق الأوسط'
      : 'We provide integrated uniform solutions tailored specifically for businesses across Saudi Arabia and the Middle East',
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: isArabic
            ? 'https://uneom.com/ar/search?q={search_term_string}'
            : 'https://uneom.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    ],
    inLanguage: isArabic ? 'ar-SA' : 'en'
  };
}

/**
 * Generate breadcrumb markup based on current path
 * @param breadcrumbItems - Array of breadcrumb items
 * @param locale - Current locale
 * @returns BreadcrumbList schema object
 */
export function getBreadcrumbSchema(
  breadcrumbItems: Array<{ name: string; url: string }>,
  locale: Locale = 'en'
) {
  const baseUrl = locale === 'ar' ? 'https://uneom.com/ar' : 'https://uneom.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  };
} 