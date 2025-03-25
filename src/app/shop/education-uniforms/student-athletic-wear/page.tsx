'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaStarHalfAlt, FaRegStar, FaShippingFast } from 'react-icons/fa';
import Head from 'next/head';
import { Metadata } from 'next';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function StudentAthleticWearPage() {
  const locale = 'en';
  
  // Product details
  const product = {
    id: 'student-athletic-wear',
    name: 'Student Athletic & PE Uniform',
    price: 'From SAR 249',
    basePrice: "249",
    rating: 4.8,
    reviews: 116,
    description: 'High-performance athletic wear designed specifically for Saudi Arabian school PE programs and sports activities.',
    longDescription: 'Our Student Athletic & PE Uniform collection is engineered to meet the specific needs of educational institutions across Saudi Arabia. These garments combine durability with comfort and modesty, making them ideal for physical education classes and sports activities. Each piece is crafted from high-performance fabrics that withstand regular use while providing moisture management and freedom of movement. Available in a variety of configurations to meet different school requirements and sporting activities, our athletic uniforms are designed to promote physical activity while maintaining appropriate standards for school environments.',
    features: [
      'Performance moisture-wicking polyester (100%) for comfort during activity',
      'Reinforced seams for extended durability in high-movement areas',
      'UV protection (UPF 30+) for outdoor activities',
      'Antimicrobial treatment to reduce odor development',
      'Available in modest designs suitable for Saudi educational settings',
      'Quick-dry technology for multi-class wear',
      'Customizable with school logos and colors'
    ],
    specifications: [
      { name: 'Material', value: '100% Performance Polyester with moisture-wicking technology' },
      { name: 'Weight', value: 'Lightweight (140-160 gsm)' },
      { name: 'Care Instructions', value: 'Machine washable, tumble dry low, no fabric softener' },
      { name: 'Available Sizes', value: 'Children\'s 6-16, Adult XS to 2XL' },
      { name: 'Colors', value: 'School colors available; standard options include Navy, Black, Red, Green, Royal Blue' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'School logo printing/embroidery, name printing, class/house identification' }
    ],
    images: [
      { src: '/images/industries/education/students/school-uniform-students-02.webp', alt: 'Student athletic uniform - front view' },
      { src: '/images/industries/education/students/school-uniform-students-03.webp', alt: 'Student athletic uniform in action' },
      { src: '/images/industries/education/students/school-uniform-students-04.webp', alt: 'Student athletic uniform detail' },
      { src: '/images/industries/education/students/school-uniform-students-01.webp', alt: 'Student athletic uniform group' }
    ],
    variants: [
      { name: 'PE T-Shirt', price: 'SAR 89' },
      { name: 'PE Shorts', price: 'SAR 79' },
      { name: 'PE Track Pants', price: 'SAR 109' },
      { name: 'Sports Jacket', price: 'SAR 159' },
      { name: 'Complete PE Set (Shirt + Shorts/Pants)', price: 'From SAR 149' },
      { name: 'Complete Sports Set (Full Tracksuit)', price: 'SAR 249' }
    ],
    customizationOptions: [
      { name: 'School Logo Printing', price: '+SAR 20' },
      { name: 'School Logo Embroidery', price: '+SAR 35' },
      { name: 'Name Printing', price: '+SAR 15' },
      { name: 'Class/House Identification', price: '+SAR 10' }
    ]
  };
  
  // State for selected variant and quantity
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Product images for the gallery
  const images = [
    {
      src: '/images/industries/education/athletic-uniform-01.webp',
      alt: 'Student athletic PE uniform complete set'
    },
    {
      src: '/images/industries/education/athletic-uniform-02.webp',
      alt: 'Student wearing athletic uniform during sports activity'
    },
    {
      src: '/images/industries/education/athletic-uniform-03.webp',
      alt: 'Close-up of athletic uniform fabric showing moisture-wicking properties'
    },
    {
      src: '/images/industries/education/students/athletic-uniform-students-01.webp',
      alt: 'Students participating in PE class wearing Uneom athletic uniforms'
    }
  ];
  
  // Find the currently selected variant
  const currentVariant = product.variants[selectedVariant] || product.variants[0];
  
  // JSON-LD Product Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: 'Student Athletic & PE Uniform',
    image: images.map(img => `https://uneom.com${img.src}`),
    description: 'High-performance athletic and PE uniforms designed specifically for Saudi Arabian schools. Features moisture-wicking polyester, reinforced seams, UV protection, and modest designs appropriate for school environments.',
    sku: 'EDU-ATH-001',
    brand: {
      '@type': 'Brand',
      name: 'Uneom'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '89',
      highPrice: '249',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Uneom'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '116'
    }
  };

  return (
    <>
      <Head>
        <title>Student Athletic & PE Uniforms for Saudi Schools | Uneom</title>
        <meta name="description" content="High-performance athletic and PE uniforms designed for Saudi Arabian schools. Durable, comfortable and modest designs with customization options." />
        <link rel="canonical" href="https://uneom.com/shop/education-uniforms/student-athletic-wear" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Student Athletic & PE Uniforms for Saudi Schools" />
        <meta property="og:description" content="High-performance athletic and PE uniforms designed for Saudi Arabian schools with moisture-wicking, quick-dry materials and modest designs." />
        <meta property="og:url" content="https://uneom.com/shop/education-uniforms/student-athletic-wear" />
        <meta property="og:image" content="https://uneom.com/images/industries/education/athletic-uniform-01.webp" />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="en_US" />
        <meta property="product:price:amount" content={currentVariant.price.toString()} />
        <meta property="product:price:currency" content="SAR" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Athletic & PE Uniforms for Saudi Schools" />
        <meta name="twitter:description" content="High-performance athletic and PE uniforms designed for Saudi Arabian schools." />
        <meta name="twitter:image" content="https://uneom.com/images/industries/education/athletic-uniform-01.webp" />
        
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
                <span itemProp="name">Student Athletic & PE Uniform</span>
                <meta itemProp="position" content="4" />
              </li>
            </ol>
          </nav>
          
          {/* Product main section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product images */}
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 bg-neutral-100 rounded-lg overflow-hidden">
                <Image 
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {product.images.map((image, index) => (
                  <div key={index} className="aspect-w-1 aspect-h-1 bg-neutral-100 rounded-md overflow-hidden">
                    <Image 
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
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
                  className="flex-1 justify-center"
                  href="#contact"
                >
                  Request Quote
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
          
          {/* Performance Features Section */}
          <div className="mt-16 bg-neutral-50 p-6 rounded-lg">
            <SectionHeading>Performance Features for Physical Education</SectionHeading>
            <div className="mt-4">
              <p className="text-neutral-700 mb-4">
                Our Student Athletic & PE Uniform is designed specifically for school physical education programs and sports activities. 
                Every component is engineered with performance, durability, and appropriateness for educational settings in mind.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">Movement Optimization</h4>
                  <p className="text-sm text-neutral-600">Strategic 4-way stretch construction allows free movement for all physical activities while maintaining appropriate coverage.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">Climate Control</h4>
                  <p className="text-sm text-neutral-600">Moisture-wicking technology and breathable panels regulate body temperature during activity, ideal for Saudi Arabia's climate.</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold mb-2">School Identity</h4>
                  <p className="text-sm text-neutral-600">Customizable with school colors, logos, and class identifiers to reinforce school spirit and organization.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* School Program Section */}
          <div className="mt-16">
            <SectionHeading>School Athletic Program</SectionHeading>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-neutral-700 mb-4">
                  We offer comprehensive athletic uniform programs for schools across Saudi Arabia. Our team works closely with physical 
                  education departments and athletic directors to create uniform solutions that meet the specific needs of your institution
                  while supporting student performance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Bulk Ordering</h4>
                    <p className="text-sm">Streamlined process for ordering complete sets for entire classes or grade levels with consistent sizing.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Sport-Specific Options</h4>
                    <p className="text-sm">Specialized uniform variants for different sports activities in addition to standard PE uniforms.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Cultural Considerations</h4>
                    <p className="text-sm">Modest design options that accommodate physical activity while respecting cultural requirements.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-md p-4">
                    <h4 className="font-semibold text-primary-700 mb-2">Replacement Program</h4>
                    <p className="text-sm">Fast-track replacement systems for growing students or damaged garments throughout the school year.</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-80">
                <Image 
                  src="/images/industries/education/school-uniform-04.webp"
                  alt="School Athletic Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/20 flex items-center justify-center">
                  <Button variant="secondary" size="lg" href="#contact">
                    Request School Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reviews section */}
          <div className="mt-16">
            <SectionHeading>Customer Reviews</SectionHeading>
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
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
                <span className="text-lg font-medium">{product.rating} out of 5</span>
                <span className="ml-2 text-neutral-500">({product.reviews} reviews)</span>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    name: "Fatima Al-Rashid",
                    position: "PE Department Head",
                    institution: "International School of Jeddah",
                    rating: 5,
                    date: "2024-03-10",
                    comment: "We've been using these PE uniforms for our entire school for two years now, and they've proven to be excellent. The durability is outstanding - they withstand multiple washings and constant use. The modest design options were particularly important for our school, and these uniforms provide the perfect balance of appropriate coverage while allowing full range of motion for activities."
                  },
                  {
                    name: "Mohammed Al-Harbi",
                    position: "Sports Coach",
                    institution: "Riyadh Academy",
                    rating: 5,
                    date: "2024-01-15",
                    comment: "The quality of these athletic uniforms is exceptional. Our students participate in multiple sports, and these garments perform well across all activities. The moisture-wicking feature is especially valuable in our climate. The option to have different color coding for different grade levels has also helped with organizing large PE classes."
                  },
                  {
                    name: "Sarah Al-Otaibi",
                    position: "School Administrator",
                    institution: "Modern Education Schools",
                    rating: 4,
                    date: "2023-11-20",
                    comment: "We appreciate the durability and performance of these PE uniforms. Our students find them comfortable and the parents approve of the modest design. The only suggestion would be to expand the size range for some of our younger students. The customization with our school logo looks professional and has helped promote school spirit."
                  }
                ].map((review, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{review.name}</h4>
                        <p className="text-sm text-neutral-600">{review.position}, {review.institution}</p>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={`w-4 h-4 ${i < review.rating ? "" : "opacity-30"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-neutral-700 mb-1">{review.comment}</p>
                    <p className="text-xs text-neutral-500">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="mt-16" id="contact">
            <SectionHeading>Request a Custom Quote</SectionHeading>
            <div className="mt-8 bg-neutral-50 p-6 rounded-lg">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-neutral-700 mb-1">School/Institution</label>
                    <input type="text" id="institution" className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="product-interest" className="block text-sm font-medium text-neutral-700 mb-1">Interested In</label>
                  <select id="product-interest" className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select an option</option>
                    {product.variants.map((variant, index) => (
                      <option key={index} value={variant.name}>{variant.name}</option>
                    ))}
                    <option value="custom">Custom Requirement</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1">Estimated Quantity</label>
                  <select id="quantity" className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select quantity range</option>
                    <option value="1-50">1-50 sets</option>
                    <option value="51-100">51-100 sets</option>
                    <option value="101-250">101-250 sets</option>
                    <option value="251-500">251-500 sets</option>
                    <option value="501+">501+ sets</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Additional Requirements</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Please include any specific requirements, customization needs, or questions..."></textarea>
                </div>
                
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Submit Quote Request
                </Button>
              </form>
            </div>
          </div>
          
          {/* Related products */}
          <div className="mt-16">
            <SectionHeading>Related Products</SectionHeading>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  id: 'premium-school-uniform',
                  name: 'Premium School Uniform Collection',
                  price: 'From SAR 299',
                  image: '/images/industries/education/school-uniform-02.webp',
                  link: '/shop/education-uniforms/premium-school-uniform'
                },
                {
                  id: 'faculty-professional-attire',
                  name: 'Faculty Professional Attire',
                  price: 'From SAR 349',
                  image: '/images/industries/education/teachers/school-uniform-teacher-01.webp',
                  link: '/shop/education-uniforms/faculty-professional-attire'
                },
                {
                  id: 'school-accessories',
                  name: 'School Uniform Accessories',
                  price: 'From SAR 49',
                  image: '/images/industries/education/school-uniform-01.webp',
                  link: '/shop/education-uniforms/school-accessories'
                }
              ].map((relatedProduct) => (
                <Link href={relatedProduct.link} key={relatedProduct.id} className="group">
                  <div className="bg-neutral-100 rounded-lg overflow-hidden aspect-w-1 aspect-h-1 mb-3">
                    <div className="relative w-full h-64">
                      <Image 
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-primary-600 font-medium mt-1">{relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 