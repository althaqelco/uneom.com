import type { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import { products } from '@/lib/data/products';
import Script from 'next/script';

// Find product data for SEO metadata
const productData = products.find(p => p.category === 'industrial-uniforms' && p.id === 'industrial-jacket');

export const metadata: Metadata = {
  title: 'Premium Industrial Safety Jacket | Fire Resistant | UNEOM Saudi Arabia',
  description: 'High-performance industrial safety jackets with fire-resistant properties, reflective elements & durable construction for workplace safety. Made in Saudi Arabia.',
  keywords: 'industrial safety jacket, fire resistant workwear, reflective safety clothing, Saudi Arabia workwear, industrial uniform supplier Riyadh, flame retardant jacket',
  openGraph: {
    title: 'Premium Industrial Safety Jacket | Fire Resistant | UNEOM Saudi Arabia',
    description: 'High-performance industrial safety jackets with fire-resistant properties, reflective elements & durable construction for workplace safety. Made in Saudi Arabia.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial-safety-jacket-main.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Safety Jacket',
      }
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/industrial-jacket',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/industrial-jacket',
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

export default function ProductPage() {
  // Use metadata from params to filter products and get specific product data
  const params = {
    category: 'industrial-uniforms',
    product: 'industrial-jacket'
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
            "name": "Industrial Safety Jacket",
            "image": [
              "https://uneom.com/images/products/industrial-safety-jacket-main.jpg",
              "https://uneom.com/images/products/industrial-safety-jacket-alt1.jpg",
              "https://uneom.com/images/products/industrial-safety-jacket-alt2.jpg"
            ],
            "description": "High-performance industrial safety jacket with fire-resistant properties, reflective elements, and durable construction for workplace safety.",
            "sku": "IND-SAF-JKT-001",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/industrial-jacket",
              "priceCurrency": "SAR",
              "price": "499",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "42"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
} 