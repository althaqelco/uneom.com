import React from 'react';

export default function HomePageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "UNEOM",
    "alternateName": "UNEOM Uniforms Saudi Arabia",
    "url": "https://uneom.com",
    "logo": "https://uneom.com/images/logo.png",
    "description": "UNEOM is Saudi Arabia's leading uniform supplier and manufacturer, providing premium quality uniforms for healthcare, corporate, hospitality and industrial sectors across all Saudi cities.",
    "sameAs": [
      "https://www.facebook.com/uneom",
      "https://www.instagram.com/uneom_sa/",
      "https://twitter.com/uneom_sa",
      "https://www.linkedin.com/company/uneom"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Fahd Road",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh Province",
      "postalCode": "12345",
      "addressCountry": "Saudi Arabia"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966-13-000-0000",
        "contactType": "customer service",
        "areaServed": "Saudi Arabia",
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Riyadh"
      },
      {
        "@type": "City",
        "name": "Jeddah"
      },
      {
        "@type": "City",
        "name": "Dammam"
      },
      {
        "@type": "City",
        "name": "Mecca"
      },
      {
        "@type": "City",
        "name": "Medina"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UNEOM Uniform Collections",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Healthcare Uniforms",
          "description": "Medical scrubs, lab coats, and nursing uniforms for healthcare professionals in Saudi Arabia"
        },
        {
          "@type": "OfferCatalog",
          "name": "Corporate Uniforms",
          "description": "Professional business attire and corporate uniforms for Saudi Arabian companies"
        },
        {
          "@type": "OfferCatalog",
          "name": "Hospitality Uniforms",
          "description": "High-quality hotel, restaurant, and service staff uniforms for the hospitality industry in Saudi Arabia"
        },
        {
          "@type": "OfferCatalog",
          "name": "Industrial Uniforms",
          "description": "Durable workwear and industrial uniforms for factories and manufacturing businesses in Saudi Arabia"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 