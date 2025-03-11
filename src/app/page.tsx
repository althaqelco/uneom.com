'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import TrustSignals from '@/components/sections/TrustSignals';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUneom from '@/components/sections/WhyChooseUneom';
import IndustryGrid from '@/components/sections/IndustryGrid';
import BlogPreview from '@/components/sections/BlogPreview';
import { motion } from 'framer-motion';

// Import data for the page
import { industries } from '@/lib/data/industries';
import { products } from '@/lib/data/products';

export default function HomePage() {
  const locale = 'en';
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Featured Industries (use first 4 from the data file)
  const featuredIndustries = industries.slice(0, 4).map(industry => ({
    id: industry.id,
    title: industry.name + ' Uniforms',
    description: industry.description.split('.')[0] + '.',
    image: industry.image,
    link: `/industries/${industry.id}`
  }));
  
  // Shop Categories (for the shop section)
  const shopCategories = [
    {
      id: 'medical-scrubs',
      title: 'Healthcare Apparel',
      description: 'High-quality medical scrubs and uniforms designed for comfort during long shifts.',
      image: '/images/products/scrubs-set.jpg',
      link: '/shop/medical-scrubs'
    },
    {
      id: 'aviation-uniforms',
      title: 'Aviation Uniforms',
      description: 'Professional uniforms for airline staff, ground crews, and aviation personnel.',
      image: '/images/products/airline-uniform.jpg',
      link: '/shop/aviation-uniforms'
    },
    {
      id: 'hospitality-attire',
      title: 'Hospitality Attire',
      description: 'Quality uniforms for hotels, resorts, and hospitality teams that blend style and functionality.',
      image: '/images/products/hotel-uniform.jpg',
      link: '/shop/hospitality-attire'
    },
    {
      id: 'industrial-uniforms',
      title: 'Industrial Uniforms',
      description: 'Durable and safety-compliant workwear for industrial settings and demanding environments.',
      image: '/images/products/industrial-coverall.jpg',
      link: '/shop/industrial-uniforms'
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "UNEOM's corporate uniforms have transformed our company's professional image. The quality and attention to detail are exceptional.",
      author: "Ahmed Al-Ghamdi",
      position: "CEO",
      company: "Saudi Tech Solutions",
      image: "/images/testimonials/ahmed.png"
    },
    {
      quote: "Working with UNEOM to develop our healthcare uniforms has been a revelation. Their antimicrobial fabrics and thoughtful designs have received overwhelmingly positive feedback from our medical staff.",
      author: "Layla Mahmoud",
      position: "HR Manager",
      company: "King Faisal Specialist Hospital",
      image: "/images/testimonials/Lyla.png"
    },
    {
      quote: "The durability of UNEOM's uniforms is exceptional. Our factory workers operate in demanding conditions, and these uniforms withstand daily wear while keeping our team comfortable in Saudi Arabia's climate.",
      author: "Khalid Ibrahim",
      position: "Operations Manager",
      company: "Saudi Manufacturing Company",
      image: "/images/testimonials/khalid.png"
    }
  ];
  
  // Blog posts
  const blogPosts = [
    {
      id: 'sustainable-uniforms-2024-trends',
      title: 'Sustainable Uniform Trends: What to Expect in 2024',
      excerpt: 'Discover the latest sustainable fabric technologies and design approaches shaping the future of corporate uniforms.',
      date: 'March 15, 2024',
      image: '/images/blog/sustainable-uniforms.jpg',
      category: 'Industry Trends'
    },
    {
      id: 'hospital-uniform-safety-standards',
      title: 'New Healthcare Uniform Safety Standards in Saudi Arabia',
      excerpt: 'An overview of recently updated healthcare uniform regulations and how they affect hospitals across the Kingdom.',
      date: 'February 28, 2024',
      image: '/images/blog/healthcare-uniforms.jpg',
      category: 'Healthcare'
    },
    {
      id: 'airline-uniform-design-cultural-identity',
      title: 'Balancing Tradition and Modernity in Saudi Airline Uniform Design',
      excerpt: 'How UNEOM creates uniforms that represent Saudi cultural heritage while meeting international standards.',
      date: 'January 22, 2024',
      image: '/images/blog/aviation-uniforms.jpg',
      category: 'Aviation'
    }
  ];
  
  // Define custom products with the new images for the shop section
  const featuredProducts = [
    {
      id: "industrial-coverall-pro",
      category: "industrial-uniforms",
      categoryName: "Industrial Workwear",
      name: "Heavy Duty Industrial Coverall",
      shortDescription: "Durable two-tone coverall suitable for factory environments and industrial settings",
      price: "SAR 289",
      minOrder: 15,
      image: "/images/Heavy_Duty_Industrial_Coverall.png",
      colors: [
        { name: "Black/Gray", value: "#333333" },
        { name: "Navy/Royal", value: "#1a3a5f" },
        { name: "Brown/Khaki", value: "#5d4037" }
      ],
      href: "/shop/industrial-uniforms/industrial-coverall-pro"
    },
    {
      id: "luxury-hotel-uniform",
      category: "hospitality-attire",
      categoryName: "Luxury Hospitality",
      name: "Luxury Hotel Staff Uniform",
      shortDescription: "Elegant front desk attire with design accents for luxury hotels and resorts",
      price: "SAR 449",
      minOrder: 8,
      image: "/images/Luxury_Hotel Staff_Uniform.png",
      colors: [
        { name: "Black", value: "#000000" },
        { name: "Burgundy", value: "#800020" },
        { name: "Navy", value: "#000080" }
      ],
      href: "/shop/hospitality-attire/luxury-hotel-uniform"
    },
    {
      id: "airline-crew-uniform",
      category: "aviation-uniforms",
      categoryName: "Aviation Wear",
      name: "Airline Crew Uniform",
      shortDescription: "Professional airline crew attire with customizable logo for aviation staff",
      price: "SAR 399",
      minOrder: 10,
      image: "/images/Airline_Crew_Uniform.png",
      colors: [
        { name: "Navy", value: "#1c2841" },
        { name: "Black", value: "#000000" },
        { name: "Royal Blue", value: "#4169E1" }
      ],
      href: "/shop/aviation-uniforms/airline-crew-uniform"
    },
    {
      id: "premium-medical-scrubs",
      category: "medical-scrubs",
      categoryName: "Healthcare Uniforms",
      name: "Premium Medical Scrubs",
      shortDescription: "High-quality medical scrubs in various colors for healthcare professionals",
      price: "SAR 179",
      minOrder: 20,
      image: "/images/PremiumـMedicalـScrubs.png",
      colors: [
        { name: "Sky Blue", value: "#87CEEB" },
        { name: "Surgical Green", value: "#168269" },
        { name: "Navy", value: "#000080" },
        { name: "Gray", value: "#808080" }
      ],
      href: "/shop/medical-scrubs/premium-medical-scrubs"
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <MainLayout locale={locale}>
      {/* Hero Section */}
      <HeroSection locale={locale} />
      
      {/* Why Choose UNEOM Section */}
      <WhyChooseUneom locale={locale} />
      
      {/* Industry Categories */}
      <section className="py-20 bg-white">
        <Container>
          <IndustryGrid locale={locale} />
        </Container>
      </section>
      
      {/* Shop Section - Replaces Featured Products */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-[10%] w-64 h-64 rounded-full bg-primary-100/30 blur-3xl"></div>
          <div className="absolute bottom-40 right-[5%] w-80 h-80 rounded-full bg-blue-100/30 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-amber-100/30 blur-2xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-50 to-blue-50 rounded-full text-primary-700 font-medium text-sm mb-4 border border-primary-100">
                Premium Quality Uniforms
              </div>
              <SectionHeading as="h2" className="mb-3">
                Shop Our Premium Collections
              </SectionHeading>
              <p className="text-lg text-neutral-700 max-w-2xl">
                Browse our professional uniform collections, expertly crafted for quality, comfort and brand representation, with exclusive Saudi Arabian market discounts.
              </p>
            </div>
            <Link
              href="/shop"
              className="group inline-flex items-center bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 font-medium mt-6 md:mt-0 border border-neutral-100"
            >
              <span>View all collections</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link href={product.href} className="block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative bg-neutral-50 h-72 overflow-hidden">
                      {/* Product badge */}
                      <div className="absolute top-4 left-4 z-10 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        New Arrival
                      </div>
                      
                      {/* Discount badge */}
                      <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {index % 2 === 0 ? '15% OFF' : '10% OFF'}
                      </div>
                      
                      {/* Product image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={`object-cover transform duration-700 ${hoveredProduct === product.id ? 'scale-110' : 'scale-100'}`}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-2 flex items-center">
                        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium bg-neutral-100 rounded-full px-2.5 py-0.5">
                          {product.categoryName}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mt-1 text-neutral-800 group-hover:text-primary-600 transition-colors duration-200 mb-1">
                        {product.name}
                      </h3>
                      
                      <p className="text-neutral-600 text-sm mt-2 mb-4 line-clamp-2 flex-grow">
                        {product.shortDescription}
                      </p>
                      
                      <div className="mt-auto">
                        {/* Colors */}
                        <div className="flex items-center space-x-1 mb-3">
                          {product.colors.slice(0, 3).map((color, i) => (
                            <div 
                              key={i}
                              className="w-4 h-4 rounded-full border border-white shadow-sm" 
                              style={{ backgroundColor: color.value }}
                              aria-label={color.name}
                            ></div>
                          ))}
                          {product.colors.length > 3 && (
                            <div className="text-xs text-neutral-500">+{product.colors.length - 3} more</div>
                          )}
                        </div>
                        
                        {/* Price and min order */}
                        <div className="flex items-end justify-between mt-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-neutral-900">
                                {product.price}
                              </span>
                              {/* Discounted price */}
                              <span className="text-sm text-neutral-500 line-through">
                                {index % 2 === 0 
                                  ? `SAR ${Math.round(parseInt(product.price.replace('SAR ', '')) * 1.15)}`
                                  : `SAR ${Math.round(parseInt(product.price.replace('SAR ', '')) * 1.10)}`
                                }
                              </span>
                            </div>
                            <div className="text-xs text-neutral-500 mt-1">
                              Min. Order: {product.minOrder} pieces
                            </div>
                          </div>
                          
                          <div className="bg-primary-50 text-primary-700 p-2 rounded-full hover:bg-primary-100 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Category tabs */}
          <div className="mt-16">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-neutral-800 mb-8">Shop by Category</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {shopCategories.map((category, index) => (
                  <Link
                    key={category.id}
                    href={category.link}
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-neutral-700 hover:text-primary-700 border border-neutral-100"
                  >
                    <span>{category.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialCarousel locale={locale} />
      
      {/* Trust Signals Section */}
      <TrustSignals locale={locale} />
      
      {/* Blog Section */}
      <BlogPreview locale={locale} />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Team's Professional Image?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your uniform requirements and get a custom quote for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                Request a Quote
              </Link>
              <Link
                href="/shop"
                className="inline-block bg-primary-700 text-white hover:bg-primary-800 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
