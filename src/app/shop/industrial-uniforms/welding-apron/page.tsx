import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Premium Leather Welding Apron | 1100°C Heat Protection | UNEOM Saudi Arabia',
  description: 'Heavy-duty leather welding aprons for Saudi industrial workers, offering protection up to 1100°C. Split cowhide construction with flame-resistant stitching, adjustable cross-back straps, and multiple tool pockets.',
  keywords: 'welding apron Saudi Arabia, leather welding protection, industrial welder PPE, high temperature protection apron, Saudi welding safety equipment, flame resistant work apron, metalworking protective gear, adjustable welding apron Riyadh',
  openGraph: {
    title: 'Premium Leather Welding Apron | 1100°C Heat Protection | UNEOM Saudi Arabia',
    description: 'Heavy-duty leather welding aprons for Saudi industrial workers, offering protection up to 1100°C. Split cowhide construction with flame-resistant stitching, adjustable cross-back straps, and multiple tool pockets.',
    images: [
      {
        url: 'https://uneom.com/images/industries/manufacturing/manufacturing_uniform_product2.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Premium Leather Welding Apron'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/welding-apron',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/welding-apron',
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

export default function WeldingApronPage() {
  // Use params to get product data
  const params = {
    category: 'industrial-uniforms',
    product: 'welding-apron'
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
            "name": "UNEOM Premium Leather Welding Apron",
            "image": [
              "https://uneom.com/images/industries/manufacturing/manufacturing_uniform_product2.jpg",
              "https://uneom.com/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg",
              "https://uneom.com/images/industries/manufacturing/manufacturing_uniform_perpare.jpg"
            ],
            "description": "Heavy-duty split cowhide leather welding apron offering protection up to 1100°C, designed specifically for industrial welders in Saudi Arabia's extreme working environments. Features flame-resistant stitching, adjustable cross-back straps, and multiple tool pockets.",
            "sku": "UNEOM-WA-450",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/welding-apron",
              "priceCurrency": "SAR",
              "price": "279",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "78"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
} 