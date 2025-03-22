import React from 'react';

const UniformSupplierData = () => {
  const supplierData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Premium Uniform Collections in Saudi Arabia",
    "description": "Explore UNEOM's top-rated uniform collections available across Saudi Arabia, including Riyadh, Jeddah, and Dammam.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Healthcare Uniforms in Saudi Arabia",
          "description": "Premium medical uniforms and scrubs for healthcare professionals in Riyadh, Jeddah, and Dammam.",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "199.00",
            "priceCurrency": "SAR",
            "areaServed": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Corporate Uniforms in Saudi Arabia",
          "description": "Professional corporate uniforms tailored for Saudi businesses across major cities.",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "249.00",
            "priceCurrency": "SAR",
            "areaServed": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Hospitality Uniforms in Saudi Arabia",
          "description": "Elegant hospitality uniforms for hotels and restaurants throughout Saudi Arabia.",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "179.00",
            "priceCurrency": "SAR",
            "areaServed": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"]
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Industrial Uniforms in Saudi Arabia",
          "description": "Durable industrial uniforms for workers in Saudi Arabia's major industrial hubs.",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "189.00",
            "priceCurrency": "SAR",
            "areaServed": ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"]
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(supplierData) }}
    />
  );
};

export default UniformSupplierData; 