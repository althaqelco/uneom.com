import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Professional Safety Goggles | ANSI-Certified Eye Protection | UNEOM',
  description: 'UNEOM professional safety goggles provide superior eye protection in Saudi industrial environments with impact resistance, anti-fog coating, and UV protection. Meets ANSI Z87.1 and SASO standards for maximum safety.',
  keywords: 'safety goggles Saudi, industrial eye protection, anti-fog safety glasses, impact resistant goggles, UV protection eyewear, ANSI certified eye protection, Saudi industrial safety equipment',
  openGraph: {
    title: 'Professional Safety Goggles | Superior Eye Protection for Saudi Industrial Environments',
    description: 'Engineered for demanding industrial environments in Saudi Arabia. Impact-resistant polycarbonate lenses, anti-fog coating, and UV protection. Ergonomic design for all-day comfort. Exceeds ANSI Z87.1 and SASO safety standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/goggles-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Professional Safety Goggles'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/related-product-2',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/related-product-2',
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

export default function SafetyGogglesPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'related-product-2'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-2',
    name: 'Professional Safety Goggles',
    description: 'Professional safety goggles specifically designed for use in demanding Saudi industrial environments. These goggles provide superior eye protection from industrial hazards such as flying debris, chemicals, and UV radiation. Featuring impact-resistant polycarbonate lenses with anti-fog coating, these goggles are engineered to maintain clear vision in all conditions while providing all-day comfort.',
    features: [
      'Impact-resistant polycarbonate lenses meeting ANSI Z87.1 standards',
      'Premium anti-fog coating for clear vision in all conditions',
      'UV protection (99.9% UVA/UVB/UVC protection)',
      'Chemical splash protection with sealed design',
      'Adjustable elastic strap for secure fit',
      'Compatible with most prescription eyewear',
      'Ventilation system to reduce fogging and improve comfort'
    ],
    price: 175,
    images: [
      '/images/products/safety/goggles-1.jpg',
      '/images/products/safety/goggles-2.jpg',
      '/images/products/safety/goggles-3.jpg'
    ],
    colors: ['#2c3e50', '#3498db', '#e74c3c'],
    sizes: ['Standard', 'Over-Spectacle'],
    category: 'industrial-uniforms',
    tags: ['safety goggles', 'eye protection', 'protective equipment', 'industrial', 'occupational safety'],
    rating: 4.9,
    reviews: 87
  };
  
  // Create related products
  const relatedProducts = [
    {
      id: 'safety-helmet-pro',
      name: 'Advanced Safety Helmet Pro',
      description: 'Advanced safety helmet providing superior protection in industrial work environments',
      features: ['Electrical insulation', 'Impact resistance'],
      price: 189,
      images: ['/images/products/safety/helmet-pro-1.webp'],
      colors: ['#f1c40f', '#ecf0f1', '#2980b9'],
      sizes: ['Universal', 'Large'],
      category: 'industrial-uniforms',
      tags: ['safety helmet', 'protective equipment', 'head protection'],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 'related-product-1',
      name: 'Advanced Industrial Work Boots',
      description: 'Advanced work boots designed for demanding industrial environments with superior protection',
      features: ['Slip-resistant', 'Steel toe cap'],
      price: 320,
      images: ['/images/products/industrial/work-boots-1.jpg'],
      colors: ['#34495e', '#795548', '#212121'],
      sizes: ['42', '43', '44', '45'],
      category: 'industrial-uniforms',
      tags: ['work boots', 'safety footwear', 'protective equipment'],
      rating: 4.8,
      reviews: 102
    },
    {
      id: 'heat-resistant-gloves',
      name: 'Heat Resistant Industrial Gloves',
      description: 'Heat resistant gloves specifically designed for use in demanding Saudi industrial environments',
      features: ['Heat resistance', 'Puncture protection'],
      price: 145,
      images: ['/images/products/industrial/heat-resistant-gloves-1.jpg'],
      colors: ['#e74c3c', '#34495e', '#f1c40f'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'industrial-uniforms',
      tags: ['heat resistant gloves', 'hand protection', 'protective equipment'],
      rating: 4.7,
      reviews: 89
    }
  ];
  
  const locale = 'en';
  
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
            "name": "UNEOM Professional Safety Goggles",
            "image": [
              "https://uneom.com/images/products/safety/goggles-1.jpg",
              "https://uneom.com/images/products/safety/goggles-2.jpg",
              "https://uneom.com/images/products/safety/goggles-3.jpg"
            ],
            "description": "Professional safety goggles designed for Saudi industrial environments, featuring impact-resistant polycarbonate lenses, anti-fog coating, and UV protection. ANSI Z87.1 certified.",
            "sku": "UNEOM-SG-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Safety Equipment",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/related-product-2",
              "priceCurrency": "SAR",
              "price": "175",
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
