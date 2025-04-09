import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization directly without using products.find()
export const metadata: Metadata = {
  title: 'Advanced Safety Helmet Pro | ANSI-Certified Industrial Head Protection | UNEOM',
  description: 'UNEOM\'s Advanced Safety Helmet Pro provides superior protection in Saudi industrial environments with Class E electrical insulation, UV resistance, and integrated cooling system. ANSI Z89.1 & SASO 1368 certified.',
  keywords: 'safety helmet Saudi Arabia, industrial head protection, construction safety equipment, ANSI certified helmet, electrical insulation helmet, UV-resistant safety helmet, customizable safety helmets, Saudi industrial PPE',
  openGraph: {
    title: 'Advanced Safety Helmet Pro | Industry-Leading Head Protection for Saudi Workplaces',
    description: 'Engineered for Saudi Arabia\'s demanding industrial environments. Class E electrical protection, UV-resistant, integrated cooling for extreme heat. Exceeds GCC & international safety standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/helmet-pro-1.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Advanced Safety Helmet Pro'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/safety-helmet-pro',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/safety-helmet-pro',
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

export default function SafetyHelmetProPage() {
  // Use metadata from params to filter products and get specific product data
  const params = {
    category: 'industrial-uniforms',
    product: 'safety-helmet-pro'
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
            "name": "UNEOM Advanced Safety Helmet Pro",
            "image": [
              "https://uneom.com/images/products/safety/helmet-pro-1.webp",
              "https://uneom.com/images/products/safety/helmet-pro-2.webp",
              "https://uneom.com/images/products/safety/helmet-pro-3.webp"
            ],
            "description": "Advanced impact-resistant safety helmet engineered for Saudi industrial and construction environments, featuring Class E electrical insulation and integrated cooling system.",
            "sku": "UNEOM-SH-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/safety-helmet-pro",
              "priceCurrency": "SAR",
              "price": "189",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "124"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
} 