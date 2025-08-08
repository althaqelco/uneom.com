import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Premium Retail Store Associate Uniform Set | Stylish Staff Attire | UNEOM Saudi Arabia',
  description: 'Elevate your retail brand with UNEOM\'s premium Store Associate Uniform Set. Professional, Saudi-appropriate designs with breathable fabrics and customization options. Perfect for luxury retail environments in Riyadh, Jeddah, and across KSA.',
  keywords: 'retail store uniforms Saudi, premium retail staff attire, store associate uniforms, luxury retail clothing Saudi, branded retail uniforms Riyadh, professional retail wear, Saudi retail staff solutions',
  openGraph: {
    title: 'Premium Retail Store Associate Uniform Set | Elevate Your Brand Identity',
    description: 'Specifically designed for premium retail environments in Saudi Arabia. Sophisticated, comfortable and professionally tailored uniforms that enhance staff productivity and brand perception. Multiple customization options available.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Premium Retail Store Associate Uniform'
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/retail-uniforms/related-product-1',
    languages: {
      'ar': 'https://uneom.com/ar/shop/retail-uniforms/related-product-1'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function RetailStoreUniformPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-1'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-1',
    name: 'Premium Retail Store Associate Uniform Set',
    description: 'Elevate your retail brand with our premium Store Associate Uniform Set, specifically designed for upscale retail environments in Saudi Arabia. This sophisticated ensemble combines professional appearance with exceptional comfort, featuring breathable fabrics ideal for mall environments with extended hours. Each uniform can be customized with your brand colors and logo placement, creating a cohesive staff appearance that reinforces your brand identity and enhances customer trust.',
    features: [
      'Tailored fit with modern silhouette appropriate for Saudi retail environments',
      'Premium breathable fabric blend (65% cotton, 35% polyester) for all-day comfort',
      'Wrinkle-resistant and easy-care properties for consistent professional appearance',
      'Multiple customization options including embroidery and color matching',
      'Modest design options suitable for Saudi cultural requirements',
      'Available with matching accessories (name badges, scarves/ties)'
    ],
    price: 450,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-identity.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg'
    ],
    colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    category: 'retail-uniforms',
    tags: ['retail uniform', 'store associate attire', 'premium retail wear', 'professional uniform', 'branded retail clothing'],
    rating: 4.9,
    reviews: 78
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
      id: 'store-staff',
      name: 'Store Staff Complete Uniform Kit',
      description: 'Complete uniform kit for general retail store staff with multiple options',
      features: ['Versatile designs', 'Multiple pieces included', 'Various style options'],
      price: 520,
      images: ['/images/industries/retail-shops/retail-shops-uniform.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['retail staff', 'store uniform', 'sales associate attire'],
      rating: 4.8,
      reviews: 85
    }
  ];
  
  const locale = 'en';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Premium Retail Store Associate Uniform Set | Stylish Staff Attire</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Premium Retail Store Associate Uniform Set",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg"
            ],
            "description": "Premium store associate uniform set designed for Saudi retail environments, featuring breathable fabrics, modern silhouette, and customization options for brand identity enhancement.",
            "sku": "UNEOM-RT-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Apparel",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/retail-uniforms/related-product-1",
              "priceCurrency": "SAR",
              "price": "450",
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
        </main>
  );
} 