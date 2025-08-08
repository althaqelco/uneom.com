"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export interface BreadcrumbsProps {
  locale?: string;
  items?: { label: string; href: string }[];
  className?: string;
  homeLabel?: string;
  includeHome?: boolean;
  maxItems?: number;
  separator?: React.ReactNode;
}

/**
 * Breadcrumbs component for navigation and SEO
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  locale = 'en',
  items,
  className = '',
  homeLabel,
  includeHome = true,
  maxItems = 0,
  separator = '/'
}) => {
  const pathname = usePathname();
  const rtl = locale === 'ar';
  
  // Generate breadcrumbs based on pathname if not provided
  const getBreadcrumbsFromPath = () => {
    // Check if we're on the homepage
    if (pathname === '/' || pathname === '/ar') {
      return [];
    }
    
    // Remove locale prefix for Arabic
    let path = pathname;
    if (locale === 'ar' && pathname.startsWith('/ar')) {
      path = pathname.replace(/^\/ar/, '');
    }
    
    // Split path and create breadcrumbs
    const segments = path.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      // Create readable label from segment
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
      
      // Create URL up to this segment
      const href = `${locale === 'ar' ? '/ar' : ''}/${segments.slice(0, index + 1).join('/')}`;
      
      return { label, href };
    });
  };
  
  // Use provided items or generate from path
  const breadcrumbItems = items || getBreadcrumbsFromPath();
  
  // Add home item if needed
  const allItems = includeHome 
    ? [
        { 
          label: homeLabel || (locale === 'ar' ? 'الرئيسية' : 'Home'), 
          href: locale === 'ar' ? '/ar' : '/' 
        },
        ...breadcrumbItems
      ]
    : breadcrumbItems;
  
  // Apply max items limit if specified
  const displayedItems = maxItems > 0 && allItems.length > maxItems
    ? [...allItems.slice(0, maxItems - 1), allItems[allItems.length - 1]]
    : allItems;
  
  // Don't render if no items
  if (displayedItems.length === 0) {
    return null;
  }
  
  // Prepare schema data for structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com'}${item.href}`
    }))
  };
  
  return (
    <React.Fragment>
      <nav 
        aria-label={locale === 'ar' ? 'مسار التنقل' : 'Breadcrumb'} 
        className={`text-sm ${className}`}
      >
        <ol 
          className={`flex flex-wrap items-center ${rtl ? 'flex-row-reverse' : ''}`}
        >
          {displayedItems.map((item, index) => {
            const isLast = index === displayedItems.length - 1;
            return (
              <li 
                key={item.href}
                className={`flex items-center ${isLast ? 'text-neutral-700 font-medium' : 'text-neutral-500'}`}
              >
                {index > 0 && (
                  <span 
                    className={`mx-2 text-neutral-400 ${rtl ? 'transform rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    {separator}
                  </span>
                )}
                
                {isLast ? (
                  <span className="text-neutral-700 font-medium">{item.label}</span>
                ) : (
                  <Link 
                    href={item.href}
                    className="hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      
      {/* Add structured data for SEO */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </React.Fragment>
  );
};

export default Breadcrumbs; 