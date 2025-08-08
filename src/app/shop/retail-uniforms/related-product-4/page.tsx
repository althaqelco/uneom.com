import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Retail Brand Ambassador Uniform Kit | Promotional Staff Attire | UNEOM Saudi Arabia',
  description: 'High-impact retail brand ambassador uniforms for Saudi promotional events. Eye-catching, customizable designs with comfort for long promotional hours. Elevate your brand representation in malls and retail environments across Riyadh, Jeddah, and KSA.',
  keywords: 'retail brand ambassador uniform Saudi, promotional staff attire, event marketing uniforms, mall promotion clothing Saudi, retail demonstration uniforms Riyadh, Saudi brand representation attire, retail event staff solutions',
  openGraph: {
    title: 'Retail Brand Ambassador Uniform Kit | Stand Out in Saudi Promotional Events',
    description: 'Designed for maximum brand visibility in Saudi Arabian retail promotional events. Eye-catching, comfortable uniforms that help your ambassadors make an impact while maintaining cultural appropriateness. Multiple customization options for perfect brand alignment.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Retail Brand Ambassador Uniform Kit'
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/retail-uniforms/related-product-4',
    languages: {
      'ar': 'https://uneom.com/ar/shop/retail-uniforms/related-product-4'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function BrandAmbassadorUniformPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-4'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-4',
    name: 'Retail Brand Ambassador Uniform Kit',
    description: 'Make a powerful brand impression with our Retail Brand Ambassador Uniform Kit, engineered specifically for promotional events in Saudi Arabian retail environments. This versatile ensemble combines eye-catching design with practical functionality, ensuring your brand ambassadors remain comfortable throughout long promotional shifts while maximizing brand visibility. Each component can be fully customized with your brand colors, logos, and promotional messaging, creating an integrated promotional experience that draws customer attention.',
    features: [
      'Lightweight, breathable performance fabrics (60% cotton, 40% polyester) ideal for active promotional work',
      'High visibility design elements with ample customization space for logos and messaging',
      'Quick-dry technology for comfort during long mall promotional events',
      'Mix-and-match components including branded polo/shirt, optional overlay vest/jacket, and coordinated bottoms',
      'Modest design options suitable for Saudi promotional environments',
      'Durable construction to withstand frequent use across multiple promotional events'
    ],
    price: 480,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg'
    ],
    colors: ['#2c3e50', '#e74c3c', '#3498db', '#f1c40f', '#ecf0f1'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'retail-uniforms',
    tags: ['brand ambassador uniform', 'promotional staff attire', 'event marketing clothing', 'mall promotion uniform', 'retail demonstration attire'],
    rating: 4.8,
    reviews: 47
  };
  
  // Create related products
  const relatedProducts = [
    {
      id: 'luxury-retail-collection',
      name: 'Luxury Retail Collection Ensemble',
      description: 'Complete luxury retail uniform collection for high-end stores and boutiques',
      features: ['Premium fabrics', 'Tailored fit', 'Customizable color schemes'],
      price: 795,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['luxury retail', 'boutique uniform', 'high-end store attire'],
      rating: 4.9,
      reviews: 92
    },
    {
      id: 'related-product-1',
      name: 'Premium Retail Store Associate Uniform Set',
      description: 'Elevate your retail brand with our premium Store Associate Uniform Set',
      features: ['Tailored fit', 'Premium breathable fabric blend', 'Customization options'],
      price: 450,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      category: 'retail-uniforms',
      tags: ['retail uniform', 'store associate attire', 'premium retail wear'],
      rating: 4.9,
      reviews: 78
    },
    {
      id: 'customer-service',
      name: 'Customer Service Desk Uniform',
      description: 'Professional attire designed specifically for customer service representatives',
      features: ['Professional appearance', 'Comfort for long shifts', 'Brand customization'],
      price: 380,
      images: ['/images/industries/retail-shops/retail-shops-uniform-brand.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      category: 'retail-uniforms',
      tags: ['customer service', 'help desk', 'retail support staff'],
      rating: 4.7,
      reviews: 63
    }
  ];
  
  const locale = 'en';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Retail Brand Ambassador Uniform Kit | Promotional Staff Attire</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Retail Brand Ambassador Uniform Kit",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg"
            ],
            "description": "High-impact retail brand ambassador uniform kit designed for Saudi promotional events, featuring lightweight performance fabrics, high-visibility design elements, and extensive customization options for brand messaging.",
            "sku": "UNEOM-RT-AMB-04",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Apparel",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/retail-uniforms/related-product-4",
              "priceCurrency": "SAR",
              "price": "480",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "47"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
} 