import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Advanced Industrial Work Boots | SASO-Certified Safety Footwear | UNEOM',
  description: 'UNEOM industrial work boots provide superior protection in Saudi industrial environments with slip-resistant soles, impact protection, and ergonomic design. Exceeds Gulf and international safety standards for maximum protection.',
  keywords: 'industrial work boots Saudi, safety footwear, slip-resistant boots, SASO certified safety boots, steel toe boots, puncture-resistant footwear, Saudi industrial safety equipment',
  openGraph: {
    title: 'Advanced Industrial Work Boots | Superior Foot Protection for Saudi Work Environments',
    description: 'Specifically designed for demanding industrial environments in Saudi Arabia. Slip-resistant outsole, steel toe for impact protection, and anti-fatigue insole for extended wear. Exceeds Gulf and international safety standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/work-boots-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Work Boots'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/related-product-1',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/related-product-1',
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

export default function IndustrialWorkBootsPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'related-product-1'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-1',
    name: 'Advanced Industrial Work Boots',
    description: 'Advanced industrial work boots specifically designed for use in demanding Saudi industrial environments. These boots provide superior foot protection from industrial hazards such as heavy objects and sharp surfaces, with a slip-resistant outsole and steel toe for impact protection. Carefully engineered to provide comfort during long working hours in tough conditions.',
    features: [
      'Slip-resistant outsole on oily and wet surfaces',
      'Steel toe providing impact protection up to 200 joules',
      'Puncture-resistant inner sole',
      'Advanced ventilation system for work in high temperatures',
      'Comfortable anti-fatigue insole for extended wear',
      'Resistant to industrial oils and chemicals'
    ],
    price: 320,
    images: [
      '/images/products/industrial/work-boots-1.jpg',
      '/images/products/industrial/work-boots-2.jpg',
      '/images/products/industrial/work-boots-3.jpg'
    ],
    colors: ['#34495e', '#795548', '#212121'],
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    category: 'industrial-uniforms',
    tags: ['work boots', 'safety footwear', 'protective equipment', 'industrial', 'occupational safety'],
    rating: 4.8,
    reviews: 102
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
      id: 'industrial-coverall',
      name: 'Industrial Coverall',
      description: 'High-quality industrial coverall resistant to heat and flame',
      features: ['Heat resistant', 'Flame resistant'],
      price: 349,
      images: ['/images/products/industrial/coverall-1.jpg'],
      colors: ['#e67e22', '#21618c', '#b7950b'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'industrial-uniforms',
      tags: ['coverall', 'industrial', 'heat resistant'],
      rating: 4.6,
      reviews: 98
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
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Advanced Industrial Work Boots | SASO-Certified Safety Footwear</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Advanced Industrial Work Boots",
            "image": [
              "https://uneom.com/images/products/industrial/work-boots-1.jpg",
              "https://uneom.com/images/products/industrial/work-boots-2.jpg",
              "https://uneom.com/images/products/industrial/work-boots-3.jpg"
            ],
            "description": "Advanced industrial work boots designed for Saudi industrial environments, featuring slip-resistant outsole, steel toe for impact protection, and puncture-resistant inner sole.",
            "sku": "UNEOM-WB-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Apparel",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/related-product-1",
              "priceCurrency": "SAR",
              "price": "320",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "102"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
}
