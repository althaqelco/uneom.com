'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import TrustSignals from '@/components/sections/TrustSignals';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUneom from '@/components/sections/WhyChooseUneom';
import IndustryGrid from '@/components/sections/IndustryGrid';
import ServicesGrid from '@/components/sections/ServicesGrid';
import BlogPreview from '@/components/sections/BlogPreview';
import { motion } from 'framer-motion';
import HomePageStructuredData from './StructuredData';
import UniformSupplierData from './UniformSupplierData';
import UniformFAQData from './UniformFAQData';
import BreadcrumbData from './BreadcrumbData';

// Import data for the page
import { industries } from '@/lib/data/industries';
import { products } from '@/lib/data/products';

// Import metadata
import { metadata } from './metadata';

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
      title: 'Healthcare Uniforms',
      description: 'High-quality medical uniforms and scrubs designed for healthcare professionals in Saudi Arabia.',
      image: '/images/products/scrubs-set.jpg',
      link: '/shop/medical-scrubs'
    },
    {
      id: 'aviation-uniforms',
      title: 'Aviation Uniforms',
      description: 'Professional airline uniforms for aviation personnel across Saudi Arabia\'s major cities.',
      image: '/images/products/airline-uniform.jpg',
      link: '/shop/aviation-uniforms'
    },
    {
      id: 'hospitality-attire',
      title: 'Hospitality Uniforms',
      description: 'Premium hotel and restaurant uniforms for hospitality teams in Riyadh, Jeddah, and Dammam.',
      image: '/images/products/hotel-uniform.jpg',
      link: '/shop/hospitality-attire'
    },
    {
      id: 'industrial-uniforms',
      title: 'Industrial Uniforms',
      description: 'Durable industrial uniforms and workwear for factories and companies throughout Saudi Arabia.',
      image: '/images/products/industrial-coverall.jpg',
      link: '/shop/industrial-uniforms'
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: "UNEOM's corporate uniforms have transformed our company's professional image across all our Riyadh offices. The quality and attention to detail are exceptional.",
      author: "Ahmed Al-Ghamdi",
      position: "CEO",
      company: "Saudi Tech Solutions",
      image: "/images/clients/modern-arabic-businessman-SBI-300984397.jpg"
    },
    {
      quote: "The durability of UNEOM's industrial uniforms is exceptional. Our factory workers in Dammam operate in demanding conditions, and these uniforms withstand daily wear while keeping our team comfortable.",
      author: "Khalid Ibrahim",
      position: "Operations Manager",
      company: "Saudi Manufacturing Company",
      image: "/images/clients/portrait-of-an-arab-man-sheikh-SBI-300981247.jpg"
    },
    {
      quote: "The airline crew uniforms designed by UNEOM perfectly balance professional appearance with comfort for our Jeddah-based staff. Our team loves wearing them and our passengers notice the difference.",
      author: "Sarah Al-Otaibi",
      position: "Cabin Services Director",
      company: "Royal Arabian Airlines",
      image: "/images/clients/smiling-attractive-stewardess-getting-ready-to-fli-2024-10-18-12-57-27-utc.jpg"
    },
    {
      quote: "For our luxury hotel chain across Saudi Arabia, we required staff uniforms that embody our commitment to sophistication and Arabian hospitality. UNEOM created bespoke designs that perfectly balance elegance with practicality.",
      author: "Nora Al-Zahrani",
      position: "Hospitality Manager",
      company: "Royal Oasis Hotels",
      image: "/images/clients/young-muslim-arab-woman-wearing-hijab-veiling-face-looking-at-camera-outdoors-during-s-SBI-351149151.jpg"
    },
    {
      quote: "As a retail brand with stores across Riyadh, Jeddah and Dammam, consistency in staff uniform appearance is crucial. UNEOM delivered high-quality uniforms with excellent branding integration.",
      author: "Layla Mahmoud",
      position: "Retail Manager",
      company: "AlMajed Department Stores",
      image: "/images/clients/adult-beautiful-muslim-woman-with-hijab-on-head-smiling-for-camera-in-room-SBI-351089408.jpg"
    }
  ];
  
  // Blog posts
  const blogPosts = [
    {
      id: 'sustainable-uniforms-2024-trends',
      title: 'Sustainable Uniform Trends: Saudi Arabia\'s 2024 Market Focus',
      excerpt: 'Discover the latest sustainable uniform technologies and design approaches shaping the future of professional uniforms in Saudi Arabia.',
      date: 'March 15, 2024',
      image: '/images/blog/sustainable-uniforms.jpg',
      category: 'Uniform Trends'
    },
    {
      id: 'hospital-uniform-safety-standards',
      title: 'New Healthcare Uniform Standards in Saudi Arabian Hospitals',
      excerpt: 'An overview of recently updated healthcare uniform regulations for hospitals in Riyadh, Jeddah, and across the Kingdom.',
      date: 'February 28, 2024',
      image: '/images/blog/healthcare-uniforms.jpg',
      category: 'Healthcare Uniforms'
    },
    {
      id: 'airline-uniform-design-cultural-identity',
      title: 'Saudi Airline Uniform Design: Tradition Meets Modern Function',
      excerpt: 'How UNEOM creates airline uniforms that represent Saudi cultural heritage while meeting international standards.',
      date: 'January 22, 2024',
      image: '/images/blog/aviation-uniforms.jpg',
      category: 'Aviation Uniforms'
    }
  ];
  
  // Define custom products with the new images for the shop section
  const featuredProducts = [
    {
      id: "industrial-coverall-pro",
      category: "industrial-uniforms",
      categoryName: "Industrial Uniforms",
      name: "Premium Industrial Uniform Coverall",
      shortDescription: "Durable industrial uniform coveralls suitable for factory environments across Saudi Arabia's industrial cities",
      price: "SAR 289",
      minOrder: 15,
      image: "/images/new-products/heavy_duty_industrial_coverall.png",
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
      categoryName: "Hospitality Uniforms",
      name: "Luxury Hotel Uniform Collection",
      shortDescription: "Elegant hospitality uniforms with design accents for luxury hotels and resorts in Riyadh, Jeddah and tourist destinations",
      price: "SAR 449",
      minOrder: 8,
      image: "/images/new-products/luxury_hotel_staff_uniform.png",
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
      categoryName: "Aviation Uniforms",
      name: "Saudi Airline Crew Uniform",
      shortDescription: "Professional airline uniform collection with customizable logo for aviation staff based in Saudi Arabian airports",
      price: "SAR 399",
      minOrder: 10,
      image: "/images/new-products/airline_crew_uniform.png",
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
      name: "Premium Medical Uniform Scrubs",
      shortDescription: "High-quality medical uniform scrubs for healthcare professionals in hospitals and clinics across all Saudi cities",
      price: "SAR 179",
      minOrder: 20,
      image: "/images/new-products/premiummedicalscrubs.png",
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
    <>
      {/* Schema Markup for SEO */}
      <HomePageStructuredData />
      <UniformSupplierData />
      <UniformFAQData />
      <BreadcrumbData />
      
      {/* Hero Section */}
      <HeroSection locale={locale} />
      
      {/* Saudi Arabia Uniform Provider Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
                Saudi Arabia's #1 Uniform Provider
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                Premium Uniforms for Every Saudi City
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                From Riyadh to Jeddah, Dammam to Mecca, UNEOM delivers high-quality professional uniforms tailored to Saudi Arabian businesses and organizations. Our uniform solutions combine durability, comfort and cultural awareness.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom uniform solutions for all Saudi cities</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Climate-appropriate uniform fabrics for Saudi weather</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Nationwide delivery of uniform orders</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Local uniform specialists in major Saudi cities</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium"
              >
                <span>Find Your Perfect Uniform Solution</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/uniform_saudi_arabia.jpg"
                  alt="UNEOM Premium Uniforms for Every Saudi City"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium mb-2 bg-primary-600/80 rounded-full px-3 py-1 inline-block">
                    Nationwide Uniform Supply
                  </p>
                  <h3 className="text-xl font-bold">
                    Serving Every Saudi Region
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-primary-600 font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-3">
                    <p className="text-xs text-neutral-500 font-medium">
                      Trusted by
                    </p>
                    <p className="text-neutral-800 font-bold">
                      500+ Saudi Companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Why Choose UNEOM Section */}
      <WhyChooseUneom locale={locale} />
      
      {/* Industry Categories */}
      <section className="py-20 bg-white">
        <Container>
          <IndustryGrid locale={locale} />
        </Container>
      </section>
      
      {/* Our Distinguished Services */}
      <ServicesGrid locale={locale} />
      
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
                Premium Uniform Collections
              </div>
              <SectionHeading as="h2" className="mb-3">
                Shop Our Professional Saudi Uniform Collections
              </SectionHeading>
              <p className="text-lg text-neutral-700 max-w-2xl">
                Browse our professional uniform collections, expertly crafted for Saudi Arabian businesses in Riyadh, Jeddah, Dammam and all Kingdom regions. Quality uniform solutions with nationwide delivery.
              </p>
            </div>
            <Link
              href="/shop"
              className="group inline-flex items-center bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 font-medium mt-6 md:mt-0 border border-neutral-100"
            >
              <span>View all uniform collections</span>
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
                        Premium Uniform
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
              <h3 className="text-xl font-bold text-neutral-800 mb-8">Shop Uniform Categories</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Team with Premium Saudi Uniforms?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your uniform requirements and get a custom quote for your organization in any Saudi city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                Request Uniform Quote
              </Link>
              <Link
                href="/shop"
                className="inline-block bg-primary-700 text-white hover:bg-primary-800 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                Explore Uniform Collections
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
