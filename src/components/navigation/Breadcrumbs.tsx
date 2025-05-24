/**
 * Breadcrumbs Component
 * 
 * Implements structured breadcrumbs with Schema.org markup for enhanced SEO.
 * This helps search engines understand the site hierarchy and improves user navigation.
 */

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StructuredData from '@/components/seo/StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
  showSchema?: boolean;
}

/**
 * Generate breadcrumb items based on the current URL path
 */
export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isArabic = locale === 'ar';
  const baseUrl = isArabic ? '/ar' : '';
  
  // This mapping helps translate path segments to human-readable names
  // For a real implementation, this could be loaded from a translation file
  const pathMapping: Record<string, { [key: string]: string }> = {
    en: {
      industries: 'Industries',
      services: 'Services',
      locations: 'Locations',
      blog: 'Blog',
      about: 'About Us',
      contact: 'Contact Us',
      corporate: 'Corporate Uniforms',
      healthcare: 'Healthcare Uniforms',
      hospitality: 'Hospitality Uniforms',
      industrial: 'Industrial Workwear',
      school: 'School Uniforms',
      security: 'Security Uniforms',
      design: 'Design Services',
      manufacturing: 'Manufacturing',
      delivery: 'Delivery & Logistics',
      consulting: 'Consulting Services',
      riyadh: 'Riyadh',
      jeddah: 'Jeddah',
      dammam: 'Dammam',
      mecca: 'Mecca',
      medina: 'Medina'
    },
    ar: {
      industries: 'الصناعات',
      services: 'الخدمات',
      locations: 'المواقع',
      blog: 'المدونة',
      about: 'من نحن',
      contact: 'اتصل بنا',
      corporate: 'أزياء موحدة للشركات',
      healthcare: 'أزياء الرعاية الصحية',
      hospitality: 'أزياء الضيافة',
      industrial: 'ملابس العمل الصناعية',
      school: 'زي المدارس',
      security: 'زي الأمن',
      design: 'خدمات التصميم',
      manufacturing: 'التصنيع',
      delivery: 'التوصيل والخدمات اللوجستية',
      consulting: 'خدمات الاستشارات',
      riyadh: 'الرياض',
      jeddah: 'جدة',
      dammam: 'الدمام',
      mecca: 'مكة المكرمة',
      medina: 'المدينة المنورة'
    }
  };
  
  // Get translated names
  const getTranslatedName = (segment: string) => {
    return pathMapping[locale]?.[segment] || segment;
  };
  
  // Create home breadcrumb
  const homeBreadcrumb: BreadcrumbItem = {
    name: isArabic ? 'الرئيسية' : 'Home',
    url: `${baseUrl}/`,
    isCurrentPage: router.pathname === '/' || router.pathname === '/ar'
  };
  
  // If we're on the homepage, just return home
  if (homeBreadcrumb.isCurrentPage) {
    return [homeBreadcrumb];
  }
  
  // Split the path and remove empty segments and locale prefix
  const pathSegments = router.pathname
    .split('/')
    .filter(segment => segment && segment !== 'ar');
  
  // Generate breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [homeBreadcrumb];
  let currentPath = baseUrl;
  
  pathSegments.forEach((segment, index) => {
    // Skip dynamic routes with [brackets]
    if (segment.startsWith('[') && segment.endsWith(']')) {
      // If we have actual values for these dynamic segments, use them
      const paramName = segment.slice(1, -1);
      const paramValue = router.query[paramName] as string;
      
      if (paramValue) {
        currentPath += `/${paramValue}`;
        
        // Try to get a translated name, or fallback to the parameter value
        const name = getTranslatedName(paramValue) || paramValue;
        
        breadcrumbs.push({
          name,
          url: `${currentPath}/`,
          isCurrentPage: index === pathSegments.length - 1
        });
      }
      
      return;
    }
    
    currentPath += `/${segment}`;
    
    // Get name from mapping or capitalize the segment as fallback
    const name = getTranslatedName(segment) || 
      segment.charAt(0).toUpperCase() + segment.slice(1);
    
    breadcrumbs.push({
      name,
      url: `${currentPath}/`,
      isCurrentPage: index === pathSegments.length - 1
    });
  });
  
  return breadcrumbs;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  showSchema = true
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';
  const autoBreadcrumbs = useBreadcrumbs();
  
  // Use provided items or auto-generated breadcrumbs
  const breadcrumbItems = items || autoBreadcrumbs;
  
  // Skip rendering if there's only the home item
  if (breadcrumbItems.length <= 1) {
    return null;
  }
  
  // Prepare data for Schema.org structured data
  const schemaItems = breadcrumbItems.map((item, index) => ({
    name: item.name,
    url: `https://uneom.com${item.url}`,
    position: index + 1
  }));
  
  return (
    <>
      {/* Schema.org structured data for breadcrumbs */}
      {showSchema && (
        <StructuredData
          type="BreadcrumbList"
          data={schemaItems}
          language={locale}
        />
      )}
      
      {/* Visual breadcrumbs component */}
      <nav aria-label="Breadcrumb" className={`py-3 ${className}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400" aria-hidden="true">
                    {isRTL ? '\\' : '/'}
                  </span>
                )}
                
                {isLast ? (
                  <span className="font-medium text-primary-600" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-primary-700 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
