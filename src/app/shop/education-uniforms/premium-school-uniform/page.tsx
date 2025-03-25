'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheck, FaShippingFast } from 'react-icons/fa';
import Head from 'next/head';
import { Metadata } from 'next';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function PremiumSchoolUniformPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('complete-set');
  
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
      
      <div className="bg-white pt-24 pb-16">
        <Container>
          {/* Breadcrumbs with structured data */}
          <nav className="text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-neutral-500 hover:text-primary-600" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li><span className="text-neutral-400 mx-2">/</span></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/shop" className="text-neutral-500 hover:text-primary-600" itemProp="item">
                  <span itemProp="name">Shop</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li><span className="text-neutral-400 mx-2">/</span></li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/shop/education-uniforms" className="text-neutral-500 hover:text-primary-600" itemProp="item">
                  <span itemProp="name">Education Uniforms</span>
                </Link>
                <meta itemProp="position" content="3" />
              </li>
              <li><span className="text-neutral-400 mx-2">/</span></li>
              <li className="text-primary-600 font-medium truncate max-w-[200px] sm:max-w-none" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Premium School Uniform</span>
                <meta itemProp="position" content="4" />
              </li>
            </ol>
          </nav>
          
          {/* Rest of the component remains the same */}
          {/* ... keep existing product content ... */}
        </Container>
      </div>
    </>
  );
} 