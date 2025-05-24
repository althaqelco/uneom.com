import React from 'react';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

const BreadcrumbData = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "UNEOM",
        "item": "https://uneom.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Uniforms in Saudi Arabia",
        "item": "https://uneom.com/shop"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Uniform Categories",
        "item": "https://uneom.com/industries"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
};

export default BreadcrumbData; 