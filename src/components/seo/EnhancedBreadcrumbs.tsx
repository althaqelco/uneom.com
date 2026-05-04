/**
 * EnhancedBreadcrumbs — Auto-Trail with BreadcrumbList Schema (§37.5)
 * 
 * Renders visible breadcrumbs AND injects BreadcrumbList JSON-LD.
 * This is the #1 most impactful Rich Snippet for local SEO pages.
 */
import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  nameAr?: string;
  url: string;
}

interface EnhancedBreadcrumbsProps {
  items: BreadcrumbItem[];
  locale?: 'en' | 'ar';
  className?: string;
}

export function EnhancedBreadcrumbs({ items, locale = 'en', className = '' }: EnhancedBreadcrumbsProps) {
  const isArabic = locale === 'ar';

  // Build BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isArabic ? "الرئيسية" : "Home",
        "item": isArabic ? "https://uneom.com/ar" : "https://uneom.com",
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": isArabic ? (item.nameAr || item.name) : item.name,
        "item": `https://uneom.com${item.url}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-2 text-sm ${className}`}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <Link
          href={isArabic ? '/ar' : '/'}
          className="text-gray-500 hover:text-blue-600 transition-colors"
        >
          {isArabic ? 'الرئيسية' : 'Home'}
        </Link>

        {items.map((item, idx) => (
          <React.Fragment key={item.url}>
            <span className="text-gray-400">{isArabic ? '←' : '→'}</span>
            {idx === items.length - 1 ? (
              <span className="text-gray-900 font-medium">
                {isArabic ? (item.nameAr || item.name) : item.name}
              </span>
            ) : (
              <Link
                href={item.url}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {isArabic ? (item.nameAr || item.name) : item.name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
