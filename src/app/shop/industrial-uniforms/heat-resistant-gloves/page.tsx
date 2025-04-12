import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Premium Heat-Resistant Gloves | 1000°C Protection | UNEOM Saudi Arabia',
  description: 'Industrial-grade heat-resistant gloves providing protection up to 1000°C for Saudi petrochemical, manufacturing & metallurgical industries. EN 407 & SASO certified with advanced aramid fiber technology.',
  keywords: 'heat resistant gloves Saudi Arabia, industrial thermal protection, aramid fiber gloves, petrochemical safety equipment, metallurgy hand protection, 1000 degree heat gloves, EN 407 certified gloves, Saudi industrial PPE',
  openGraph: {
    title: 'Premium Heat-Resistant Gloves | 1000°C Protection | UNEOM Saudi Arabia',
    description: 'Industrial-grade heat-resistant gloves providing protection up to 1000°C for Saudi petrochemical, manufacturing & metallurgical industries. EN 407 & SASO certified with advanced aramid fiber technology.',
    images: [
      {
        url: 'https://uneom.com/images/manufacturing_manufacturing_industrial_workwear_1.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Premium Heat-Resistant Gloves'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/heat-resistant-gloves',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/heat-resistant-gloves',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HeatResistantGlovesPage() {
  // Use metadata from params to filter products and get specific product data
  const params = {
    category: 'industrial-uniforms',
    product: 'heat-resistant-gloves'
  };
  
  return (
    <>
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Premium Heat-Resistant Gloves",
            "image": [
              "https://uneom.com/images/manufacturing_manufacturing_industrial_workwear_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_1.webp",
              "https://uneom.com/images/industries/supply-manufacturing/supply-manufacturing-uniform-safety-protection.jpg"
            ],
            "description": "Advanced heat-resistant gloves providing protection up to 1000°C for Saudi industrial environments, featuring multi-layer aramid fiber construction with ceramic coating technology.",
            "sku": "UNEOM-HRG-500",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/heat-resistant-gloves",
              "priceCurrency": "SAR",
              "price": "349",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
}
