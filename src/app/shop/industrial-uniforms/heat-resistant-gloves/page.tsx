import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Professional Heat-Resistant Industrial Gloves | ANSI-Certified Protection | UNEOM',
  description: 'UNEOM\'s premium heat-resistant gloves offer superior protection for Saudi industrial environments with Class 3 heat resistance, puncture protection, and ergonomic design. EN 407 & SASO certified for maximum workplace safety.',
  keywords: 'heat-resistant gloves Saudi Arabia, industrial hand protection, heat-proof safety gloves, EN 407 certified gloves, puncture-resistant work gloves, thermal protection equipment, industrial PPE Saudi, customizable safety gloves',
  openGraph: {
    title: 'Professional Heat-Resistant Industrial Gloves | Advanced Thermal Protection for Saudi Workplaces',
    description: 'Engineered for Saudi Arabia\'s demanding industrial environments. Class 3 heat resistance up to 350°C, reinforced palms for puncture protection, and ergonomic design for extended wear. Exceeds GCC & international safety standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/heat-resistant-gloves-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Heat-Resistant Industrial Gloves'
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
            "name": "UNEOM Professional Heat-Resistant Industrial Gloves",
            "image": [
              "https://uneom.com/images/products/industrial/heat-resistant-gloves-1.jpg",
              "https://uneom.com/images/products/industrial/heat-resistant-gloves-2.jpg",
              "https://uneom.com/images/products/industrial/heat-resistant-gloves-3.jpg"
            ],
            "description": "Advanced heat-resistant industrial gloves engineered for Saudi industrial environments, featuring Class 3 heat resistance up to 350°C and reinforced palms for puncture protection.",
            "sku": "UNEOM-HRG-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/heat-resistant-gloves",
              "priceCurrency": "SAR",
              "price": "145",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "89"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
}
