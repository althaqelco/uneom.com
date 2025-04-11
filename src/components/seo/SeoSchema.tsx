import React from 'react';
import Head from 'next/head';

interface SeoSchemaProps {
  type: 'Product' | 'BlogPosting' | 'Service' | 'Organization' | 'WebPage';
  name: string;
  description: string;
  image: string;
  price?: string;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  brand?: string;
  sku?: string;
  reviewCount?: number;
  ratingValue?: number;
  // BlogPosting specific props
  datePublished?: string;
  dateModified?: string;
  author?: string;
  // Service specific props
  serviceType?: string;
  // Organization specific props
  logo?: string;
  url?: string;
  // WebPage specific props
  breadcrumbs?: Array<{ name: string; url: string }>;
  pageUrl?: string;
}

const SeoSchema: React.FC<SeoSchemaProps> = ({
  type,
  name,
  description,
  image,
  price,
  currency,
  availability,
  brand,
  sku,
  reviewCount,
  ratingValue,
  datePublished,
  dateModified,
  author,
  serviceType,
  logo,
  url,
  breadcrumbs,
  pageUrl
}) => {
  // Construct the base schema
  let schema: any = {
    '@context': 'https://schema.org',
    '@type': type
  };

  // Add common properties
  if (name) schema.name = name;
  if (description) schema.description = description;

  // Add product-specific properties
  if (type === 'Product') {
    if (image) {
      schema.image = Array.isArray(image) ? image : [image];
    }
    
    if (brand) {
      schema.brand = {
        '@type': 'Brand',
        name: brand
      };
    }
    
    if (sku) schema.sku = sku;

    // Add offer data if price is provided
    if (price) {
      schema.offers = {
        '@type': 'Offer',
        price,
        priceCurrency: currency || 'SAR',
        availability: availability 
          ? `https://schema.org/${availability}` 
          : 'https://schema.org/InStock'
      };
    }

    // Add aggregated review data if provided
    if (reviewCount && ratingValue) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: ratingValue.toString(),
        reviewCount: reviewCount.toString()
      };
    }
  }

  // Add BlogPosting-specific properties
  if (type === 'BlogPosting') {
    if (image) schema.image = image;
    if (datePublished) schema.datePublished = datePublished;
    if (dateModified) schema.dateModified = dateModified;
    if (author) {
      schema.author = {
        '@type': 'Person',
        name: author
      };
    }
  }

  // Add Service-specific properties
  if (type === 'Service') {
    if (image) schema.image = image;
    if (serviceType) schema.serviceType = serviceType;
    if (brand) {
      schema.provider = {
        '@type': 'Organization',
        name: brand
      };
    }
    if (price) {
      schema.offers = {
        '@type': 'Offer',
        price,
        priceCurrency: currency || 'SAR'
      };
    }
  }

  // Add Organization-specific properties
  if (type === 'Organization') {
    if (logo) schema.logo = logo;
    if (url) schema.url = url;
    if (image) schema.image = image;
  }

  // Add WebPage-specific properties
  if (type === 'WebPage') {
    if (pageUrl) schema.url = pageUrl;
    
    // Add breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schema.breadcrumb = {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      };
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default SeoSchema; 