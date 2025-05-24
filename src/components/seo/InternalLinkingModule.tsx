/**
 * Internal Linking Module
 * 
 * This component implements a strategic internal linking structure to enhance SEO.
 * It provides contextually relevant links to related content, improving crawlability
 * and content relationship signals for search engines.
 */

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import internalLinkingStrategy from '@/lib/seo/internal-linking-strategy';

export interface RelatedLink {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  type: 'product' | 'blog' | 'resource' | 'industry' | 'service' | 'location';
}

interface InternalLinkingModuleProps {
  currentPagePath: string;
  sectionTitle?: string;
  relatedLinks: RelatedLink[];
  maxLinks?: number;
  showDescriptions?: boolean;
  className?: string;
}

const InternalLinkingModule: React.FC<InternalLinkingModuleProps> = ({
  currentPagePath,
  sectionTitle,
  relatedLinks,
  maxLinks = 4,
  showDescriptions = true,
  className = ''
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const isRTL = locale === 'ar';
  const textDir = isRTL ? 'rtl' : 'ltr';
  const textAlign = isRTL ? 'text-right' : 'text-left';
  
  // Filter out current page from related links if it's included
  const filteredLinks = relatedLinks
    .filter(link => link.href !== currentPagePath)
    .slice(0, maxLinks);
  
  if (filteredLinks.length === 0) return null;
  
  // Default section titles based on locale
  const defaultTitle = isRTL ? 'محتوى ذو صلة' : 'Related Content';
  const title = sectionTitle || defaultTitle;
  
  // Icon mapping for link types
  const getIconForType = (type: string) => {
    switch (type) {
      case 'product':
        return 'M16 4v12h-12v-12h12zm2-2h-16v16h16v-16z';
      case 'blog':
        return 'M14 2h-8v2h8v-2zm4 6v12h-16v-12h16zm-14 10h12v-8h-12v8z';
      case 'resource':
        return 'M12 2h-10v20h16v-14l-6-6zm-1 1.5l4.5 4.5h-4.5v-4.5zm5 14.5h-12v-16h6v6h6v10z';
      case 'industry':
        return 'M20 3h-16c-0.6 0-1 0.4-1 1v16c0 0.6 0.4 1 1 1h16c0.6 0 1-0.4 1-1v-16c0-0.6-0.4-1-1-1zM10 17h-5v-10h5v10zM19 17h-7v-10h7v10z';
      case 'service':
        return 'M21 16.5c0 0.8-0.7 1.5-1.5 1.5h-15c-0.8 0-1.5-0.7-1.5-1.5v-9c0-0.8 0.7-1.5 1.5-1.5h15c0.8 0 1.5 0.7 1.5 1.5v9z';
      case 'location':
        return 'M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zM12 11.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z';
      default:
        return 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z';
    }
  };
  
  // Get type label based on locale
  const getTypeLabel = (type: string, isArabic: boolean) => {
    if (isArabic) {
      switch (type) {
        case 'product': return 'منتج';
        case 'blog': return 'مدونة';
        case 'resource': return 'مورد';
        case 'industry': return 'صناعة';
        case 'service': return 'خدمة';
        case 'location': return 'موقع';
        default: return '';
      }
    } else {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };
  
  return (
    <div className={`internal-linking-module my-8 ${className}`} dir={textDir}>
      <h3 className={`text-xl font-semibold mb-4 ${textAlign}`}>{title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLinks.map((link, index) => (
          <Link 
            href={link.href} 
            key={index}
            locale={locale}
            className={`flex p-3 border rounded-md hover:bg-gray-50 transition-colors ${textAlign}`}
          >
            {link.icon ? (
              <span className="flex-shrink-0 w-6 h-6 mr-3">
                <img src={link.icon} alt="" className="w-full h-full object-contain" />
              </span>
            ) : (
              <span className="flex-shrink-0 w-6 h-6 mr-3 text-primary-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d={getIconForType(link.type)} />
                </svg>
              </span>
            )}
            
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium">{link.title}</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {getTypeLabel(link.type, isRTL)}
                </span>
              </div>
              
              {showDescriptions && link.description && (
                <p className="text-sm text-gray-600 line-clamp-2">{link.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

/**
 * Helper functions to get related links using the internal linking strategy utility
 */

// Get related links for corporate uniforms page
export const getCorporateRelatedLinks = (locale: string = 'en'): RelatedLink[] => {
  return internalLinkingStrategy.getCorporateIndustryLinks(locale);
};

// Get related links for healthcare page
export const getHealthcareRelatedLinks = (locale: string = 'en'): RelatedLink[] => {
  return internalLinkingStrategy.getHealthcareIndustryLinks(locale);
};

// Get related links for a location page
export const getLocationRelatedLinks = (cityName: string, locale: string = 'en'): RelatedLink[] => {
  return internalLinkingStrategy.getLocationPageLinks(cityName, locale);
};

// Get related links for design services page
export const getDesignServicesRelatedLinks = (locale: string = 'en'): RelatedLink[] => {
  return internalLinkingStrategy.getDesignServicesLinks(locale);
};

// Get homepage related links
export const getHomepageRelatedLinks = (locale: string = 'en'): RelatedLink[] => {
  return internalLinkingStrategy.getHomepageLinks(locale);
};

// Get related links based on page type
export const getRelatedLinks = (
  pageType: 'home' | 'industry' | 'service' | 'location' | 'blog' | 'resource',
  locale: string = 'en',
  specificType?: string,
  specificValue?: string
): RelatedLink[] => {
  return internalLinkingStrategy.getRelatedLinks(pageType, locale, specificType, specificValue);
};

export default InternalLinkingModule;
