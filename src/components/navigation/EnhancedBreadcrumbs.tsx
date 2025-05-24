/**
 * Enhanced Breadcrumbs Component
 * 
 * This component implements a breadcrumb navigation system with proper Schema.org markup
 * to improve both user experience and search engine visibility. It addresses SEO issues
 * by providing clear navigation paths and structured breadcrumb data.
 * 
 * Features:
 * - Responsive design that works in both English and Arabic
 * - Schema.org BreadcrumbList structured data for rich snippets in search results
 * - Automatic generation of breadcrumbs based on current URL path
 * - Custom breadcrumb path option for special cases
 */

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StructuredData from '@/components/seo/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/seo/schema-generator';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface EnhancedBreadcrumbsProps {
  /**
   * Custom breadcrumb items to use instead of auto-generated ones
   */
  items?: BreadcrumbItem[];
  
  /**
   * Class name to apply to the breadcrumbs container
   */
  className?: string;
  
  /**
   * Whether to include home page as the first breadcrumb
   */
  includeHome?: boolean;
  
  /**
   * Whether to include schema.org structured data
   */
  includeSchema?: boolean;
  
  /**
   * Whether to show icon separators between breadcrumb items
   */
  showIcons?: boolean;
  
  /**
   * Aria label for the breadcrumb navigation
   */
  ariaLabel?: string;
}

/**
 * Get the label for a path segment in both English and Arabic
 */
const getPathLabel = (segment: string, locale: string): string => {
  const pathLabels: Record<string, Record<string, string>> = {
    industries: {
      en: 'Industries',
      ar: 'الصناعات'
    },
    services: {
      en: 'Services',
      ar: 'الخدمات'
    },
    about: {
      en: 'About Us',
      ar: 'عن الشركة'
    },
    contact: {
      en: 'Contact Us',
      ar: 'اتصل بنا'
    },
    blog: {
      en: 'Blog',
      ar: 'المدونة'
    },
    locations: {
      en: 'Locations',
      ar: 'المواقع'
    },
    resources: {
      en: 'Resources',
      ar: 'الموارد'
    },
    corporate: {
      en: 'Corporate Uniforms',
      ar: 'أزياء موحدة للشركات'
    },
    healthcare: {
      en: 'Healthcare Uniforms',
      ar: 'أزياء الرعاية الصحية'
    },
    hospitality: {
      en: 'Hospitality Uniforms',
      ar: 'أزياء الضيافة'
    },
    industrial: {
      en: 'Industrial Workwear',
      ar: 'ملابس العمل الصناعية'
    },
    school: {
      en: 'School Uniforms',
      ar: 'زي المدارس'
    },
    security: {
      en: 'Security Uniforms',
      ar: 'زي الأمن'
    },
    design: {
      en: 'Design Services',
      ar: 'خدمات التصميم'
    },
    manufacturing: {
      en: 'Manufacturing',
      ar: 'التصنيع'
    },
    delivery: {
      en: 'Delivery Services',
      ar: 'خدمات التوصيل'
    },
    consulting: {
      en: 'Consulting',
      ar: 'الاستشارات'
    },
    riyadh: {
      en: 'Riyadh',
      ar: 'الرياض'
    },
    jeddah: {
      en: 'Jeddah',
      ar: 'جدة'
    },
    dammam: {
      en: 'Dammam',
      ar: 'الدمام'
    },
    mecca: {
      en: 'Mecca',
      ar: 'مكة المكرمة'
    },
    medina: {
      en: 'Medina',
      ar: 'المدينة المنورة'
    }
  };
  
  if (pathLabels[segment] && pathLabels[segment][locale]) {
    return pathLabels[segment][locale];
  }
  
  // Return capitalized segment if no specific translation is found
  return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
};

const EnhancedBreadcrumbs: React.FC<EnhancedBreadcrumbsProps> = ({
  items,
  className = 'py-4',
  includeHome = true,
  includeSchema = true,
  showIcons = true,
  ariaLabel = 'Breadcrumb'
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';
  const textDir = isRTL ? 'rtl' : 'ltr';
  
  // Generate breadcrumb items based on current path if not provided
  const breadcrumbs = items || (() => {
    const pathSegments = router.asPath.split('/').filter(Boolean);
    let breadcrumbItems: BreadcrumbItem[] = [];
    let currentPath = '';
    
    // Add home page as first breadcrumb if specified
    if (includeHome) {
      breadcrumbItems.push({
        name: isRTL ? 'الرئيسية' : 'Home',
        href: '/',
        current: false
      });
    }
    
    // Generate breadcrumb for each path segment
    pathSegments.forEach((segment, index) => {
      // Skip locale segment (e.g., 'ar' or 'en')
      if (index === 0 && (segment === 'ar' || segment === 'en')) {
        return;
      }
      
      // Handle query parameters and hash fragments
      if (segment.includes('#') || segment.includes('?')) {
        return;
      }
      
      // Create path for this breadcrumb
      currentPath = currentPath ? `${currentPath}/${segment}` : `/${segment}`;
      
      // Add leading locale if needed
      const localePath = locale !== 'en' ? `/${locale}${currentPath}` : currentPath;
      
      // Add to breadcrumbs array
      breadcrumbItems.push({
        name: getPathLabel(segment, locale),
        href: localePath,
        current: index === pathSegments.length - 1
      });
    });
    
    return breadcrumbItems;
  })();
  
  // Prepare schema data for BreadcrumbList structured data
  const breadcrumbSchemaItems = breadcrumbs.map((breadcrumb) => ({
    name: breadcrumb.name,
    url: `https://uneom.com${breadcrumb.href}`
  }));
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbSchemaItems);
  
  return (
    <>
      {includeSchema && (
        <StructuredData
          type="BreadcrumbList"
          data={breadcrumbSchema}
          language={locale}
        />
      )}
      
      <nav className={`breadcrumbs ${className}`} aria-label={ariaLabel} dir={textDir}>
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              {/* Breadcrumb item */}
              {index > 0 && showIcons && (
                <span className="mx-2 text-gray-400">
                  {isRTL ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  )}
                </span>
              )}
              
              {breadcrumb.current ? (
                <span className="font-medium text-primary-600" aria-current="page">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link 
                  href={breadcrumb.href} 
                  className="hover:text-primary-600 hover:underline"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default EnhancedBreadcrumbs;
