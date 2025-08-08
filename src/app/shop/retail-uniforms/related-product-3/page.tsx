import React from 'react';
import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Department Manager Uniform Set | Professional Retail Leadership Attire | UNEOM Saudi Arabia',
  description: 'Distinguished department manager uniforms designed for Saudi retail leadership. Professional, authoritative attire with premium fabrics and subtle branding. Establish management presence in retail environments across Riyadh, Jeddah, and KSA.',
  keywords: 'department manager uniform Saudi, retail management attire, professional leadership clothing, executive retail uniforms Saudi, store manager uniforms Riyadh, retail supervisor attire, Saudi management solutions',
  openGraph: {
    title: 'Department Manager Uniform Set | Establish Retail Leadership Presence',
    description: 'Specially designed for retail management and leadership roles in Saudi Arabian retail environments. Distinguished, professional attire that establishes authority while maintaining approachability. Premium fabrics with subtle customization options.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Department Manager Uniform Set'
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/retail-uniforms/related-product-3',
    languages: {
      'ar': 'https://uneom.com/ar/shop/retail-uniforms/related-product-3'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function DepartmentManagerUniformPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-3'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-3',
    name: 'Department Manager Uniform Set',
    description: 'Establish clear leadership presence with our Department Manager Uniform Set, specifically designed for retail management roles in Saudi Arabian shopping environments. This distinguished ensemble strikes the perfect balance between authority and approachability, featuring premium fabrics and subtle executive styling that sets management apart while maintaining brand cohesion with staff uniforms. The tailored fit and quality details signal professionalism to both customers and employees.',
    features: [
      'Premium fabric blend (75% wool, 25% polyester) with subtle executive-level finish',
      'Tailored silhouette with refined details that distinguish management from standard staff',
      'Subtle branding elements including optional management insignia',
      'Professional color palette designed to coordinate with staff uniforms while standing apart',
      'High durability construction for active retail management responsibilities',
      'Optional executive accessories including branded tie/scarf and lapel pin'
    ],
    price: 750,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-shop.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brand.jpg'
    ],
    colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'retail-uniforms',
    tags: ['department manager uniform', 'retail management attire', 'professional leadership clothing', 'executive retail wear', 'store supervisor uniform'],
    rating: 4.8,
    reviews: 52
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
      id: 'related-product-2',
      name: 'Boutique Sales Consultant Uniform',
      description: 'Sophisticated boutique sales consultant uniforms designed for high-end retail',
      features: ['Premium fabrics', 'Elegant silhouette', 'Boutique-appropriate color palettes'],
      price: 680,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg'],
      colors: ['#2c3e50', '#34495e', '#8e44ad', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['boutique uniform', 'luxury retail', 'high-end sales'],
      rating: 4.9,
      reviews: 65
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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Department Manager Uniform Set | Professional Retail Leadership Attire</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Department Manager Uniform Set",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-2.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brand.jpg"
            ],
            "description": "Distinguished department manager uniform set designed for retail leadership in Saudi environments, featuring premium wool blend fabric, tailored silhouette, and subtle branding elements.",
            "sku": "UNEOM-RT-MGR-03",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Apparel",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/shop/retail-uniforms/related-product-3",
              "priceCurrency": "SAR",
              "price": "750",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "52"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
} 