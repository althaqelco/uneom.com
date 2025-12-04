import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Boutique Sales Consultant Uniform | Designer Retail Attire | UNEOM Saudi Arabia',
  description: 'Sophisticated boutique sales consultant uniforms designed for high-end Saudi retail. Professional, elegant attire with premium fabrics and modest design options. Elevate your luxury boutique staff in Riyadh, Jeddah and across KSA.',
  keywords: 'boutique sales uniform Saudi, luxury retail staff attire, high-end store uniform, fashion boutique clothing Saudi, designer retail uniforms Riyadh, premium consultant attire, Saudi luxury retail solutions',
  openGraph: {
    title: 'Boutique Sales Consultant Uniform | Elevate Your Luxury Retail Experience',
    description: 'Meticulously designed for high-end boutiques and designer retail environments in Saudi Arabia. Sophisticated, elegant uniforms that enhance your brand prestige and customer experience. Multiple customization options with premium fabrics.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Boutique Sales Consultant Uniform'
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/retail-uniforms/related-product-2',
    languages: {
      'ar': 'https://uneom.com/ar/shop/retail-uniforms/related-product-2'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function BoutiqueSalesConsultantUniformPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-2'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-2',
    name: 'Boutique Sales Consultant Uniform',
    description: 'Elevate your boutique brand with our sophisticated Sales Consultant Uniform, specifically tailored for high-end retail environments in Saudi Arabia. This elegant ensemble projects luxury and attention to detail, crafted from premium fabrics that provide exceptional comfort during customer consultations. The refined silhouette and subtle design details signal quality and expertise to discerning clientele, perfectly complementing luxury retail environments.',
    features: [
      'Crafted from premium Italian blend fabrics (80% wool, 20% polyester) for sophisticated drape and comfort',
      'Elegant silhouette with subtle brand-specific customization options',
      'Available in boutique-appropriate color palettes to complement retail interiors',
      'Modest design variations suitable for Saudi luxury retail environments',
      'Wrinkle-resistant properties to maintain impeccable appearance throughout long shifts',
      'Optional coordinating accessories (scarves, pocket squares, jewelry) for complete brand cohesion'
    ],
    price: 680,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg'
    ],
    colors: ['#2c3e50', '#34495e', '#8e44ad', '#ecf0f1'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'retail-uniforms',
    tags: ['luxury boutique uniform', 'designer store attire', 'premium retail wear', 'high-end sales consultant', 'fashion boutique clothing'],
    rating: 4.9,
    reviews: 65
  };
  
  // Create related products
  const relatedProducts = [
    {
      id: 'luxury-retail-collection',
      name: 'Luxury Retail Collection Ensemble',
      description: 'Complete luxury retail uniform collection for high-end stores and boutiques',
      features: ['Premium fabrics', 'Tailored fit', 'Customizable color schemes'],
      price: 795,
      images: ['/images/industries/retail-shops/retail-shops-uniform-brand.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['luxury retail', 'boutique uniform', 'high-end store attire'],
      rating: 4.9,
      reviews: 92
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
    }
  ];
  
  const locale = 'en';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Boutique Sales Consultant Uniform | Designer Retail Attire</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Boutique Sales Consultant Uniform",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg"
            ],
            "description": "Sophisticated boutique sales consultant uniform designed for high-end Saudi retail environments, featuring premium Italian blend fabrics, elegant silhouette, and customization options.",
            "sku": "UNEOM-RT-BTQ-02",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Apparel",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/retail-uniforms/related-product-2",
              "priceCurrency": "SAR",
              "price": "680",
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
        </main>
  );
} 