/**
 * Structured Data Component
 * 
 * This component generates proper Schema.org JSON-LD markup for different page types.
 * It helps improve search engine understanding of content and enhances rich snippet opportunities.
 */

import React from 'react';
import { useRouter } from 'next/router';

interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description?: string;
  sameAs?: string[];
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
}

interface WebsiteSchema {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    target: string;
    'query-input'?: string;
  }[];
}

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface ProductSchema {
  name: string;
  description: string;
  image: string | string[];
  sku?: string;
  brand?: {
    name: string;
  };
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
    url?: string;
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'Organization' | 'Website' | 'BreadcrumbList' | 'Product' | 'Service' | 'FAQPage' | 'LocalBusiness';
  data: any;
  language?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  data,
  language
}) => {
  const router = useRouter();
  const locale = language || router.locale || 'en';
  
  // Base schema data with @context and language
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en-SA'
  };
  
  // Merge base schema with provided data
  const schemaData = {
    ...baseSchema,
    ...data
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
};

/**
 * Generate Organization Schema
 */
export const generateOrganizationSchema = (data: OrganizationSchema) => {
  return {
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    sameAs: data.sameAs,
    telephone: data.telephone,
    email: data.email,
    address: data.address ? {
      '@type': 'PostalAddress',
      ...data.address
    } : undefined
  };
};

/**
 * Generate Website Schema
 */
export const generateWebsiteSchema = (data: WebsiteSchema) => {
  return {
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description,
    potentialAction: data.potentialAction ? data.potentialAction.map(action => ({
      '@type': 'SearchAction',
      ...action
    })) : undefined
  };
};

/**
 * Generate Breadcrumb Schema
 */
export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      item: {
        '@id': item.url,
        name: item.name
      }
    }))
  };
};

/**
 * Generate Product Schema
 */
export const generateProductSchema = (data: ProductSchema) => {
  return {
    '@type': 'Product',
    name: data.name,
    description: data.description,
    image: data.image,
    sku: data.sku,
    brand: data.brand ? {
      '@type': 'Brand',
      name: data.brand.name
    } : undefined,
    offers: data.offers ? {
      '@type': 'Offer',
      ...data.offers,
      price: data.offers.price?.toString(),
      priceCurrency: data.offers.priceCurrency || 'SAR',
      availability: data.offers.availability || 'https://schema.org/InStock'
    } : undefined
  };
};

/**
 * Generate FAQ Schema
 */
export const generateFAQSchema = (items: FAQItem[]) => {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
};

/**
 * Generate Local Business Schema
 */
export const generateLocalBusinessSchema = (data: any) => {
  return {
    '@type': 'LocalBusiness',
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: data.address ? {
      '@type': 'PostalAddress',
      ...data.address
    } : undefined,
    geo: data.geo ? {
      '@type': 'GeoCoordinates',
      ...data.geo
    } : undefined,
    openingHoursSpecification: data.openingHours ? 
      data.openingHours.map((hours: any) => ({
        '@type': 'OpeningHoursSpecification',
        ...hours
      })) : undefined,
    image: data.image,
    priceRange: data.priceRange,
    currenciesAccepted: data.currenciesAccepted,
    paymentAccepted: data.paymentAccepted
  };
};

export default StructuredData;
