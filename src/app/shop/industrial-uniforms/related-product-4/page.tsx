import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Industrial Fall Protection System | OSHA-Certified Safety Harness | UNEOM',
  description: 'UNEOM industrial fall protection systems provide superior safety in Saudi industrial environments with 5-point harness, energy-absorbing lanyard, and OSHA/ANSI certification. Ideal for construction, maintenance, and oil & gas sectors.',
  keywords: 'fall protection Saudi Arabia, industrial safety harness, full body harness, OSHA certified fall arrest system, construction safety equipment, height safety gear, Saudi industrial safety equipment',
  openGraph: {
    title: 'Industrial Fall Protection System | Superior Height Safety for Saudi Industrial Environments',
    description: 'Specifically designed for high-risk industrial environments in Saudi Arabia. Features 5-point harness system, energy-absorbing lanyard, and quick-connect buckles for rapid safety deployment. Exceeds OSHA, ANSI Z359, and SASO standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/fall-protection-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Fall Protection System'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/related-product-4',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/related-product-4',
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

export default function IndustrialFallProtectionPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'related-product-4'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-4',
    name: 'Industrial Fall Protection System',
    description: 'Professional industrial fall protection system specifically designed for high-risk environments in Saudi industrial sectors. This complete system includes a full-body 5-point harness, energy-absorbing lanyard, and anchor points designed to prevent falls and minimize injury in the event of a fall. Engineered for maximum safety and comfort in construction, maintenance, and oil & gas sectors.',
    features: [
      'Full-body 5-point harness with adjustable straps for perfect fit',
      'Energy-absorbing lanyard to reduce impact forces during fall arrest',
      'Quick-connect buckles for fast and secure attachment',
      'Meets or exceeds OSHA, ANSI Z359, and SASO standards for fall protection',
      'Corrosion-resistant hardware for harsh industrial environments',
      'Lightweight, breathable design for all-day comfort',
      'Visible stitching for easy inspection',
      'Universal attachment point for various connection systems'
    ],
    price: 590,
    images: [
      '/images/products/safety/fall-protection-1.jpg',
      '/images/products/safety/fall-protection-2.jpg',
      '/images/products/safety/fall-protection-3.jpg'
    ],
    colors: ['#2c3e50', '#e74c3c', '#f39c12'],
    sizes: ['Standard', 'Large/XL'],
    category: 'industrial-uniforms',
    tags: ['fall protection', 'safety harness', 'fall arrest', 'protective equipment', 'industrial safety', 'height work'],
    rating: 4.9,
    reviews: 65
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
            "name": "UNEOM Industrial Fall Protection System",
            "image": [
              "https://uneom.com/images/products/safety/fall-protection-1.jpg",
              "https://uneom.com/images/products/safety/fall-protection-2.jpg",
              "https://uneom.com/images/products/safety/fall-protection-3.jpg"
            ],
            "description": "Professional industrial fall protection system designed for Saudi industrial environments, featuring 5-point harness, energy-absorbing lanyard, and quick-connect buckles. OSHA, ANSI Z359, and SASO certified for maximum safety.",
            "sku": "UNEOM-FP-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Safety Equipment",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/related-product-4",
              "priceCurrency": "SAR",
              "price": "590",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "65"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
}
