import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Industrial Ear Protection | OSHA-Certified Hearing Protection | UNEOM',
  description: 'UNEOM industrial ear protection provides superior noise reduction in Saudi industrial environments with 31dB NRR, ergonomic design, and OSHA/ANSI certification. Ideal for oil & gas, manufacturing, and construction sectors.',
  keywords: 'industrial ear protection Saudi, hearing protection, noise reduction earmuffs, OSHA certified ear defenders, NRR 31dB ear protection, Saudi industrial safety equipment, hearing conservation',
  openGraph: {
    title: 'Industrial Ear Protection | Superior Hearing Protection for Saudi Industrial Environments',
    description: 'Specifically designed for high-noise industrial environments in Saudi Arabia. Features 31dB NRR, pressure-distributing headband, and memory foam ear cushions for all-day comfort. Exceeds OSHA and ANSI S3.19 standards.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/ear-protection-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Ear Protection'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/related-product-3',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/related-product-3',
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

export default function IndustrialEarProtectionPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'related-product-3'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-3',
    name: 'Industrial Ear Protection',
    description: 'Professional industrial ear protection specifically designed for high-noise environments in Saudi industrial sectors. These earmuffs provide superior hearing protection with a Noise Reduction Rating (NRR) of 31dB, effectively reducing harmful noise levels in oil & gas, manufacturing, and construction environments. Engineered for all-day comfort with pressure-distributing headband and memory foam ear cushions.',
    features: [
      'Superior noise reduction with 31dB NRR (Noise Reduction Rating)',
      'Meets or exceeds OSHA and ANSI S3.19 standards for hearing protection',
      'Pressure-distributing padded headband for reduced fatigue',
      'Memory foam ear cushions for a perfect seal and comfort',
      'Adjustable headband to fit various head sizes',
      'Durable construction for harsh industrial environments',
      'Foldable design for easy storage when not in use'
    ],
    price: 165,
    images: [
      '/images/products/safety/ear-protection-1.jpg',
      '/images/products/safety/ear-protection-2.jpg',
      '/images/products/safety/ear-protection-3.jpg'
    ],
    colors: ['#2c3e50', '#c0392b', '#f39c12'],
    sizes: ['Standard', 'Large'],
    category: 'industrial-uniforms',
    tags: ['ear protection', 'hearing protection', 'noise reduction', 'protective equipment', 'industrial safety'],
    rating: 4.8,
    reviews: 76
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
      id: 'related-product-2',
      name: 'Professional Safety Goggles',
      description: 'Professional safety goggles designed for demanding industrial environments',
      features: ['Impact-resistant', 'Anti-fog coating'],
      price: 175,
      images: ['/images/products/safety/goggles-1.jpg'],
      colors: ['#2c3e50', '#3498db', '#e74c3c'],
      sizes: ['Standard', 'Over-Spectacle'],
      category: 'industrial-uniforms',
      tags: ['safety goggles', 'eye protection', 'protective equipment'],
      rating: 4.9,
      reviews: 87
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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Industrial Ear Protection | OSHA-Certified Hearing Protection</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Industrial Ear Protection",
            "image": [
              "https://uneom.com/images/products/safety/ear-protection-1.jpg",
              "https://uneom.com/images/products/safety/ear-protection-2.jpg",
              "https://uneom.com/images/products/safety/ear-protection-3.jpg"
            ],
            "description": "Professional industrial ear protection designed for Saudi industrial environments, featuring 31dB NRR, pressure-distributing headband, and memory foam ear cushions. OSHA and ANSI S3.19 certified.",
            "sku": "UNEOM-EP-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Safety Equipment",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/industrial-uniforms/related-product-3",
              "priceCurrency": "SAR",
              "price": "165",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
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
