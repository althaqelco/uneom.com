'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheck, FaShippingFast, FaWhatsapp } from 'react-icons/fa';
import Head from 'next/head';
import { Metadata } from 'next';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateProductWhatsAppUrl, generateQuoteWhatsAppUrl } from '@/utils/whatsapp';

export default function PremiumSchoolUniformPage() {
  const locale = 'en';
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('complete-set');
  
  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Education Uniforms', href: '/shop/education-uniforms' },
    { label: 'Premium School Uniform', href: '#' },
  ];
  
  // Function to handle contact button clicks
  const handleContactClick = (messageType: 'product' | 'quote', details?: string) => {
    const productName = "Premium School Uniform";
    const variant = variants.find(v => v.id === selectedVariant)?.name || 'Complete Set';
    
    let whatsappUrl;
    if (messageType === 'product') {
      whatsappUrl = generateProductWhatsAppUrl(productName, variant, quantity);
    } else {
      const detailsMsg = details || `Variant: ${variant}, Quantity: ${quantity}, Additional Requirements: ${details || "None"}`;
      whatsappUrl = generateQuoteWhatsAppUrl(productName, detailsMsg);
    }
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  
  // Product images for the gallery
  const images = [
    {
      src: '/images/industries/education/school-uniform-01.webp',
      alt: 'Premium quality school uniform complete set'
    },
    {
      src: '/images/industries/education/school-uniform-02.webp',
      alt: 'Male student wearing premium uniform'
    },
    {
      src: '/images/industries/education/school-uniform-03.webp',
      alt: 'Female student wearing premium uniform'
    },
    {
      src: '/images/industries/education/school-uniform-04.webp',
      alt: 'Close-up of premium fabric used in uniform'
    },
    {
      src: '/images/industries/education/students/school-uniform-students-01.webp',
      alt: 'Students wearing premium uniforms in a classroom setting'
    }
  ];
  
  // Product variants
  const variants = [
    {
      id: 'complete-set',
      name: 'Complete Set',
      price: 499
    },
    {
      id: 'shirt-only',
      name: 'Shirt Only',
      price: 199
    },
    {
      id: 'pants-only',
      name: 'Pants/Skirt Only',
      price: 179
    },
    {
      id: 'blazer-only',
      name: 'Blazer Only',
      price: 249
    }
  ];
  
  // Customization options
  const customizationOptions = [
    {
      id: 'logo-printing',
      name: 'School Logo Printing',
      price: 30
    },
    {
      id: 'logo-embroidery',
      name: 'School Logo Embroidery',
      price: 50
    },
    {
      id: 'name-embroidery',
      name: 'Name Embroidery',
      price: 40
    },
    {
      id: 'special-size',
      name: 'Special Size Customization',
      price: 100
    }
  ];
  
  // Find the currently selected variant
  const currentVariant = variants.find(v => v.id === selectedVariant) || variants[0];
  
  // JSON-LD Product Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Premium School Uniform',
    image: images.map(img => `https://uneom.com${img.src}`),
    description: 'High-quality premium school uniforms designed for Saudi Arabian schools with superior comfort, durability, and perfect fit. Available in various styles and customization options.',
    sku: 'EDU-PSU-001',
    brand: {
      '@type': 'Brand',
      name: 'Uneom'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '179',
      highPrice: '499',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Uneom'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '124'
    }
  };

  return (
    <>
      <Head>
        <title>Premium School Uniforms for Saudi Educational Institutions | Uneom</title>
        <meta name="description" content="High-quality premium school uniforms designed for Saudi Arabian schools with superior comfort, durability, and perfect fit. Available in various styles and customization options." />
        <link rel="canonical" href="https://uneom.com/shop/education-uniforms/premium-school-uniform" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Premium School Uniforms for Saudi Educational Institutions" />
        <meta property="og:description" content="High-quality school uniforms with superior comfort, durability, and customization options designed for Saudi Arabian schools." />
        <meta property="og:url" content="https://uneom.com/shop/education-uniforms/premium-school-uniform" />
        <meta property="og:image" content="https://uneom.com/images/industries/education/school-uniform-01.webp" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />
        <meta property="product:price:amount" content={currentVariant.price.toString()} />
        <meta property="product:price:currency" content="SAR" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium School Uniforms for Saudi Educational Institutions" />
        <meta name="twitter:description" content="High-quality school uniforms designed for Saudi Arabian schools." />
        <meta name="twitter:image" content="https://uneom.com/images/industries/education/school-uniform-01.webp" />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>
      
      <div className="bg-white pt-8 pb-16">
        <Container>
          {/* Breadcrumbs with structured data */}
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          
          {/* Product main section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product images */}
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <div className="relative w-full h-0" style={{ paddingBottom: index === 0 ? "75%" : "100%" }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Product info */}
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">Premium School Uniform</h1>
              
              {/* Rating */}
              <div className="flex items-center mt-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="ml-2 text-neutral-500">4.9 (124 reviews)</span>
              </div>
              
              <p className="text-2xl font-bold text-primary-600 mb-6">
                SAR {currentVariant.price}
              </p>
              
              <div className="prose max-w-none mb-6">
                <p>
                  Our Premium School Uniforms are specifically designed for Saudi Arabian educational institutions, 
                  featuring superior quality materials that ensure maximum comfort, durability, and a perfect fit.
                  Each uniform is crafted to meet the highest standards while respecting cultural values and school identity.
                </p>
              </div>
              
              {/* Variants selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Options</h3>
                <div className="grid grid-cols-2 gap-3">
                  {variants.map((variant) => (
                    <button
                      key={variant.id}
                      className={`py-2 px-4 text-sm border rounded-md transition ${
                        selectedVariant === variant.id
                          ? "border-primary-600 bg-primary-50 text-primary-700"
                          : "border-neutral-300 hover:border-neutral-400"
                      }`}
                      onClick={() => setSelectedVariant(variant.id)}
                    >
                      {variant.name} - SAR {variant.price}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Customization options */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Customization Options</h3>
                <div className="space-y-2 bg-neutral-50 p-4 rounded-md">
                  {customizationOptions.map((option) => (
                    <div key={option.id} className="flex justify-between text-sm">
                      <span>{option.name}</span>
                      <span className="font-medium">+SAR {option.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Contact buttons */}
              <div className="flex items-center mb-6">
                <div className="border border-neutral-300 rounded-md flex items-center mr-4">
                  <button
                    className="px-3 py-2 text-neutral-600 hover:text-primary-600 transition"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-neutral-300 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-2 text-neutral-600 hover:text-primary-600 transition"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1 justify-center items-center gap-2"
                  onClick={() => handleContactClick('product')}
                >
                  <FaWhatsapp /> Contact Now
                </Button>
              </div>
              
              {/* Features */}
              <div className="border-t border-b border-neutral-200 py-4 mb-6">
                <h3 className="font-medium mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">Premium poly-cotton blend for comfort and durability</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">Wrinkle and stain resistant fabric</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">Ethically manufactured in Saudi Arabia</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">School logo customization available</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">Design compliant with Saudi educational standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Quote Request Section */}
          <div className="mt-16 bg-neutral-50 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Request Institutional Quote
              </h3>
              <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                For bulk orders or institutional requirements, contact us directly for a customized quote.
                Our team specializes in providing tailored uniform solutions for Saudi educational institutions.
              </p>
              <Button 
                variant="primary" 
                size="lg"
                className="flex items-center gap-2 mx-auto"
                onClick={() => handleContactClick('quote', 'Institutional bulk order inquiry')}
              >
                <FaWhatsapp /> Request via WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Customization Section */}
          <div className="mt-16">
            <SectionHeading>School Identity Program</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-neutral-700 mb-4">
                  We offer comprehensive school identity programs that go beyond basic uniforms. Our team works
                  closely with educational institutions to create distinctive uniform solutions that reinforce
                  school values and create a sense of belonging and pride.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Custom Designs</h4>
                    <p className="text-sm">Unique designs that reflect your school's heritage and values</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Easy Ordering</h4>
                    <p className="text-sm">Simplified procurement process for schools with regular orders</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Quality Guarantee</h4>
                    <p className="text-sm">Extended durability warranty for institutional purchases</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Size Flexibility</h4>
                    <p className="text-sm">Special sizing available for all student requirements</p>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  className="mt-6 flex items-center gap-2"
                  onClick={() => handleContactClick('quote', 'School Identity Program inquiry')}
                >
                  <FaWhatsapp /> Discuss Your School's Needs
                </Button>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
                <Image 
                  src="/images/industries/education/school-uniform-04.webp"
                  alt="School Identity Program"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 