'use client';

import React, { useState } from 'react';
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

export default function FacultyProfessionalAttirePage() {
  const locale = 'en';
  
  // Product details
  const product = {
    id: 'faculty-professional-attire',
    name: 'Faculty Professional Attire',
    price: 'From SAR 349',
    basePrice: "349",
    rating: 4.9,
    reviews: 94,
    description: 'Distinguished professional uniforms for teachers and educational administrators that convey authority while providing comfort during long teaching hours.',
    longDescription: 'Our Faculty Professional Attire is specially designed for educators in Saudi Arabian schools and universities. These garments strike the perfect balance between professional appearance and all-day comfort necessary for teaching environments. Each piece is tailored to project authority and expertise while allowing freedom of movement for classroom activities. The collection features wrinkle-resistant, easy-care fabrics that maintain a polished appearance throughout demanding academic days. Available in departmental color options and with institutional branding possibilities, our faculty attire helps establish a cohesive professional identity for your educational staff.',
    features: [
      'Premium poly-cotton twill (60/40) for professional appearance and comfort',
      'Wrinkle-resistant technology for all-day polished look',
      'Strategic stretch panels for classroom movement and comfort',
      'Breathable construction for Saudi teaching environments',
      'Fade-resistant colorfastness for long-lasting appearance',
      'Professional styling with modest design options',
      'Reinforced stitching for extended durability'
    ],
    specifications: [
      { name: 'Material', value: '60% Cotton, 40% Polyester professional twill' },
      { name: 'Weight', value: 'Medium weight (200-220 gsm)' },
      { name: 'Care Instructions', value: 'Machine washable, tumble dry low, minimal ironing' },
      { name: 'Available Sizes', value: 'XS to 3XL (men\'s and women\'s cuts)' },
      { name: 'Colors', value: 'Navy, Black, Grey, Burgundy, Forest Green, Royal Blue' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'Institutional logos, department color coding, name embroidery' }
    ],
    images: [
      { src: '/images/industries/education/teachers/school-uniform-teacher-01.webp', alt: 'Faculty professional attire - front view' },
      { src: '/images/industries/education/school-uniform-05.webp', alt: 'Faculty professional attire in educational setting' },
      { src: '/images/industries/education/school-uniform-03.webp', alt: 'Faculty professional attire detail' },
      { src: '/images/industries/education/school-uniform-02.webp', alt: 'Faculty professional attire group' }
    ],
    variants: [
      { name: 'Men\'s Faculty Shirt', price: 'SAR 349' },
      { name: 'Women\'s Faculty Blouse', price: 'SAR 349' },
      { name: 'Men\'s Faculty Trousers', price: 'SAR 299' },
      { name: 'Women\'s Faculty Trousers', price: 'SAR 299' },
      { name: 'Women\'s Faculty Skirt', price: 'SAR 289' },
      { name: 'Faculty Blazer', price: 'SAR 449' },
      { name: 'Complete Faculty Set', price: 'From SAR 849' }
    ],
    customizationOptions: [
      { name: 'Institutional Logo Embroidery', price: '+SAR 40' },
      { name: 'Name Embroidery', price: '+SAR 30' },
      { name: 'Department Color Coding', price: 'No additional charge' },
      { name: 'Custom Size Adjustments', price: '+SAR 50' }
    ]
  };
  
  // State for selected variant and quantity
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // JSON-LD Product Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Faculty Professional Attire',
    image: product.images.map(img => `https://uneom.com${img.src}`),
    description: 'Premium professional attire for faculty members in Saudi Arabian educational institutions. Tailored with high-quality fabrics for comfort, durability, and a professional appearance that commands respect in the classroom.',
    sku: 'EDU-FAC-001',
    brand: {
      '@type': 'Brand',
      name: 'Uneom'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '249',
      highPrice: '899',
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
      reviewCount: '98'
    }
  };

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Education Uniforms', href: '/shop/education-uniforms' },
    { label: 'Faculty Professional Attire', href: '#' },
  ];

  // Function to handle contact button clicks
  const handleContactClick = (messageType: 'general' | 'quote', details?: string) => {
    const productName = product.name;
    const variant = product.variants ? product.variants[selectedVariant].name : '';
    
    let whatsappUrl;
    if (messageType === 'general') {
      whatsappUrl = generateProductWhatsAppUrl(productName, variant, quantity);
    } else {
      const detailsMsg = details || `Variant: ${variant}, Quantity: ${quantity}`;
      whatsappUrl = generateQuoteWhatsAppUrl(productName, detailsMsg);
    }
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white">
    
      <Head>
        <title>Faculty Professional Attire for Saudi Educational Institutions | Uneom</title>
        <meta name="description" content="Premium professional attire for faculty members in Saudi Arabian educational institutions. Elegant, durable, and comfortable designs that reflect educational excellence." />
        <link rel="canonical" href="https://uneom.com/shop/education-uniforms/faculty-professional-attire" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Faculty Professional Attire for Saudi Educational Institutions" />
        <meta property="og:description" content="Premium professional attire for faculty members in Saudi Arabian educational institutions. Tailored with quality fabrics for comfort and durability." />
        <meta property="og:url" content="https://uneom.com/shop/education-uniforms/faculty-professional-attire" />
        <meta property="og:image" content="https://uneom.com/images/industries/education/teachers/school-uniform-teacher-01.webp" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />
        <meta property="product:price:amount" content={product.variants ? product.variants[selectedVariant].price : product.price} />
        <meta property="product:price:currency" content="SAR" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faculty Professional Attire for Saudi Educational Institutions" />
        <meta name="twitter:description" content="Premium professional attire for faculty members in Saudi Arabian educational institutions." />
        <meta name="twitter:image" content="https://uneom.com/images/industries/education/teachers/school-uniform-teacher-01.webp" />
        
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
            <div>
              {/* <ProductGallery images={product.images} /> */}
            </div>
            
            {/* Product info */}
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mt-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => {
                    if (product.rating >= i + 1) {
                      return <FaStar key={i} className="w-5 h-5" />;
                    } else if (product.rating >= i + 0.5) {
                      return <FaStarHalfAlt key={i} className="w-5 h-5" />;
                    } else {
                      return <FaRegStar key={i} className="w-5 h-5" />;
                    }
                  })}
                </div>
                <span className="ml-2 text-neutral-500">{product.rating} ({product.reviews} reviews)</span>
              </div>
              
              <p className="text-2xl font-bold text-primary-600 mb-6">{product.variants ? product.variants[selectedVariant].price : product.price}</p>
              
              <div className="prose max-w-none mb-6">
                <p>{product.longDescription}</p>
              </div>
              
              {/* Variants selection */}
              {product.variants && (
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Options</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        className={`py-2 px-4 text-sm border rounded-md transition ${
                          selectedVariant === index
                            ? "border-primary-600 bg-primary-50 text-primary-700"
                            : "border-neutral-300 hover:border-neutral-400"
                        }`}
                        onClick={() => setSelectedVariant(index)}
                      >
                        {variant.name} - {variant.price}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Customization options */}
              {product.customizationOptions && (
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Customization Options</h3>
                  <div className="space-y-2 bg-neutral-50 p-4 rounded-md">
                    {product.customizationOptions.map((option, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{option.name}</span>
                        <span className="font-medium">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity and Add to cart */}
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
                  onClick={() => handleContactClick('general')}
                >
                  <FaWhatsapp /> Contact Now
                </Button>
              </div>
              
              {/* Features */}
              <div className="border-t border-b border-neutral-200 py-4 mb-6">
                <h3 className="font-medium mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Specifications */}
              <div>
                <h3 className="font-medium mb-3">Specifications</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="grid grid-cols-3 py-2 border-b border-neutral-100">
                      <span className="text-neutral-600 font-medium">{spec.name}</span>
                      <span className="text-neutral-800 col-span-2">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Excellence Section */}
          <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
            <SectionHeading>Professional Excellence for Educators</SectionHeading>
            <div className="mt-4">
              <p className="text-neutral-700 mb-4">
                Our Faculty Professional Attire is designed specifically for educational environments, meeting the
                unique needs of teachers and administrators in Saudi educational institutions. Every aspect of our 
                faculty attire is crafted to support the important work of educators.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">Professional Authority</h4>
                  <p className="text-sm text-neutral-600">Attire designed to convey professionalism and authority while creating appropriate teacher-student dynamics.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">All-Day Comfort</h4>
                  <p className="text-sm text-neutral-600">Engineered for the unique movement patterns and long hours of teaching, with breathable fabrics and strategic flexibility.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">Institutional Identity</h4>
                  <p className="text-sm text-neutral-600">Customization options that reinforce your institution's identity and create visual cohesion among faculty.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Institutional Program Section */}
          <div className="mt-16">
            <SectionHeading>Faculty Attire Program</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-neutral-700 mb-4">
                  We offer comprehensive faculty attire programs for educational institutions across Saudi Arabia. From individual
                  faculty members to complete institutional outfitting, our team works closely with administrators to create professional
                  attire solutions that reflect your institution's standards and identity.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Department Coding</h4>
                    <p className="text-sm">Color schemes and style variations that visually distinguish between academic departments and faculty roles.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">On-Site Measurement</h4>
                    <p className="text-sm">Convenient on-site measurement services at your institution to ensure perfect fit for all faculty members.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Cultural Consideration</h4>
                    <p className="text-sm">Appropriate professional options that respect Saudi cultural values while maintaining contemporary educational professionalism.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Replacement Program</h4>
                    <p className="text-sm">Easy reordering processes and stock management for consistent faculty appearance throughout the academic year.</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
                <Image 
                  src="/images/industries/education/school-uniform-04.webp"
                  alt="Faculty Professional Attire Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/20 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="flex items-center gap-2"
                    onClick={() => handleContactClick('quote', 'Requesting an institutional quote for faculty attire program')}
                  >
                    <FaWhatsapp /> Request Institution Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reviews section */}
          <div className="mt-16">
            <SectionHeading>Customer Reviews</SectionHeading>
            {/* <ProductReviews reviews={product.reviews} /> */}
          </div>
          
          {/* Contact form */}
          <div className="mt-16" id="contact">
            <SectionHeading>Request a Custom Quote</SectionHeading>
            <div className="mt-8 bg-neutral-50 p-6 rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Contact Us Directly</h3>
                <p className="mb-6">
                  Get in touch with our education uniform specialists directly through WhatsApp for a personalized quote.
                  Our team is ready to assist with your specific requirements.
                </p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="flex items-center justify-center gap-2 mx-auto"
                  onClick={() => handleContactClick('quote')}
                >
                  <FaWhatsapp className="text-xl" /> Contact via WhatsApp
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related products */}
          <div className="mt-16">
            <SectionHeading>Related Products</SectionHeading>
            {/* <RelatedProducts currentProductId={product.id} category="education-uniforms" /> */}
          </div>
        </Container>
      </div>
    </div>
  );
} 