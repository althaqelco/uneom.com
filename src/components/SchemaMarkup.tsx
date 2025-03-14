"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { useParams } from 'next/navigation';
import { useLocale } from '@/lib/i18n/client';
import getOrganizationSchema from '@/lib/schema/organization';
import productSchema from '@/lib/schema/product';
import faqSchema from '@/lib/schema/faq';
import reviewSchema from '@/lib/schema/review';

/**
 * SchemaMarkup component renders structured data for SEO based on page type
 * This helps search engines understand the content and display rich results
 */
export default function SchemaMarkup({
  type,
  data,
  pageUrl
}: {
  type: 'organization' | 'product' | 'productList' | 'faq' | 'review' | 'aggregateRating' | 'localBusiness';
  data?: any;
  pageUrl?: string;
}) {
  const locale = useLocale();
  const params = useParams();
  const [schemaData, setSchemaData] = useState<any>(null);

  useEffect(() => {
    let schema = null;

    // Create schema based on type
    switch (type) {
      case 'organization':
        schema = getOrganizationSchema(locale);
        break;
        
      case 'product':
        if (data) {
          schema = productSchema.getProductSchema({
            ...data,
            locale,
            url: pageUrl
          });
        }
        break;
        
      case 'productList':
        if (data && Array.isArray(data)) {
          schema = productSchema.getProductListSchema(
            data.map(item => ({
              ...item,
              locale,
              url: item.url || `${pageUrl}/${item.id}`
            }))
          );
        }
        break;
        
      case 'faq':
        if (data && Array.isArray(data)) {
          schema = faqSchema.getFAQSchema(data.map(faq => ({ ...faq, locale })));
        } else if (data && data.industry) {
          schema = faqSchema.getIndustryFAQSchema(data.industry, locale);
        }
        break;
        
      case 'review':
        if (data) {
          schema = reviewSchema.getReviewSchema({
            ...data,
            locale
          });
        }
        break;
        
      case 'aggregateRating':
        if (data) {
          schema = reviewSchema.getAggregateRatingSchema({
            ...data,
            locale
          });
        }
        break;
        
      case 'localBusiness':
        if (data) {
          schema = reviewSchema.getLocalBusinessReviewSchema({
            ...data,
            locale
          });
        }
        break;
    }

    setSchemaData(schema);
  }, [type, data, locale, pageUrl, params]);

  if (!schemaData) return null;

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
}

/**
 * MultiSchemaMarkup component allows rendering multiple schemas on a single page
 */
export function MultiSchemaMarkup({
  schemas
}: {
  schemas: Array<{
    type: 'organization' | 'product' | 'productList' | 'faq' | 'review' | 'aggregateRating' | 'localBusiness';
    data?: any;
    pageUrl?: string;
  }>;
}) {
  return (
    <>
      {schemas.map((schema, index) => (
        <SchemaMarkup
          key={`schema-${schema.type}-${index}`}
          type={schema.type}
          data={schema.data}
          pageUrl={schema.pageUrl}
        />
      ))}
    </>
  );
} 