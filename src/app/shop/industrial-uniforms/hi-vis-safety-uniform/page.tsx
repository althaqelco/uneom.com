import { Metadata } from 'next';
import ClientPage from '../../[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'High-Visibility Safety Uniforms | ISO-Certified Industrial Workwear | UNEOM',
  description: 'UNEOM\'s professional high-visibility safety uniforms ensure maximum visibility in Saudi industrial environments with Class 3 reflective elements, moisture-wicking fabric, and heat-resistant properties. ISO 20471 & SASO certified.',
  keywords: 'high-visibility uniforms Saudi Arabia, industrial safety workwear, reflective safety clothing, ISO 20471 certified uniform, moisture-wicking safety uniform, heat-resistant work uniform, customizable hi-vis workwear, industrial safety equipment Saudi',
  openGraph: {
    title: 'High-Visibility Safety Uniforms | Industry-Leading Visibility Protection for Saudi Workplaces',
    description: 'Engineered for Saudi Arabia\'s demanding industrial environments. Class 3 reflective elements, moisture-wicking fabric for extreme heat, and flame-resistant properties. Exceeds GCC & international safety standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/hi-vis-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM High-Visibility Safety Uniform'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/hi-vis-safety-uniform',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/hi-vis-safety-uniform',
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

export default function HiVisUniformPage() {
  // Use metadata from params to filter products and get specific product data
  const params = {
    category: 'industrial-uniforms',
    product: 'hi-vis-safety-uniform'
  };
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">High-Visibility Safety Uniforms | ISO-Certified Industrial Workwear</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Professional High-Visibility Safety Uniform",
            "image": [
              "https://uneom.com/images/products/industrial/hi-vis-1.jpg",
              "https://uneom.com/images/products/industrial/hi-vis-2.jpg",
              "https://uneom.com/images/products/industrial/hi-vis-3.jpg"
            ],
            "description": "Advanced high-visibility safety uniform engineered for Saudi industrial environments, featuring Class 3 reflective elements, moisture-wicking fabric, and heat-resistant properties for maximum workplace safety.",
            "sku": "UNEOM-HV-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/hi-vis-safety-uniform",
              "priceCurrency": "SAR",
              "price": "280",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "76"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
}
