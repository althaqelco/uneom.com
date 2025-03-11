"use client";

import React from 'react';

export interface SchemaMarkupProps {
  type: 'Organization' | 'Product' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'Service' | 'LocalBusiness';
  data: any;
}

/**
 * Schema.org structured data component for SEO
 * Adds JSON-LD markup to pages for better search engine understanding
 */
const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  // Base organization data that's reused in many schemas
  const organizationData = {
    '@type': 'Organization',
    name: data.locale === 'ar' ? 'يونيوم' : 'UNEOM',
    url: 'https://uneom.com',
    logo: 'https://uneom.com/images/uneom-logo.png',
    sameAs: [
      'https://twitter.com/uneom',
      'https://www.linkedin.com/company/uneom',
      'https://www.instagram.com/uneom_sa',
      'https://www.facebook.com/uneom'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971558164922',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['Arabic', 'English']
    }
  };
  
  // Generate schema based on type
  const generateSchema = () => {
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': type
    };
    
    switch (type) {
      case 'Organization':
        return {
          ...schema,
          ...organizationData,
          description: data.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'King Fahd Road, Al Faisaliyah Tower, 25th Floor',
            addressLocality: 'Riyadh',
            addressRegion: 'Riyadh',
            postalCode: '12212',
            addressCountry: 'SA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.6909617,
            longitude: 46.6851237
          }
        };
        
      case 'Product':
        return {
          ...schema,
          name: data.name,
          image: data.image,
          description: data.description,
          brand: {
            '@type': 'Brand',
            name: data.locale === 'ar' ? 'يونيوم' : 'UNEOM'
          },
          offers: {
            '@type': 'Offer',
            url: data.url,
            priceCurrency: 'SAR',
            price: data.price,
            availability: 'https://schema.org/InStock',
            seller: organizationData
          },
          ...(data.reviews && {
            review: data.reviews.map((review: any) => ({
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
                bestRating: '5'
              },
              author: {
                '@type': 'Person',
                name: review.author
              }
            }))
          })
        };
        
      case 'Article':
        return {
          ...schema,
          headline: data.title,
          image: data.image,
          author: {
            '@type': 'Person',
            name: data.author.name
          },
          publisher: organizationData,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          description: data.description,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url
          }
        };
        
      case 'BreadcrumbList':
        return {
          ...schema,
          itemListElement: data.breadcrumbs.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };
        
      case 'FAQPage':
        return {
          ...schema,
          mainEntity: data.questions.map((item: any) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        };
        
      case 'Service':
        return {
          ...schema,
          name: data.name,
          serviceType: data.serviceType,
          provider: organizationData,
          description: data.description,
          areaServed: {
            '@type': 'Country',
            name: 'Saudi Arabia'
          },
          ...(data.offers && {
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SAR',
              availability: 'https://schema.org/InStock'
            }
          })
        };
        
      case 'LocalBusiness':
        return {
          ...schema,
          ...organizationData,
          description: data.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'King Fahd Road, Al Faisaliyah Tower, 25th Floor',
            addressLocality: 'Riyadh',
            addressRegion: 'Riyadh',
            postalCode: '12212',
            addressCountry: 'SA'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 24.6909617,
            longitude: 46.6851237
          },
          openingHours: [
            'Su-Th 09:00-17:00',
            'Sa 10:00-14:00'
          ],
          telephone: '+971558164922',
          priceRange: '$$'
        };
        
      default:
        return schema;
    }
  };
  
  const jsonLd = generateSchema();
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaMarkup; 