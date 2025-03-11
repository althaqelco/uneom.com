"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SearchBar from '@/components/shop/SearchBar';

export default function ShopPage() {
  const locale = 'en';
  
  // Product Categories
  const categories = [
    {
      id: 'medical-scrubs',
      name: 'Healthcare Apparel',
      description: 'Professional medical scrubs, lab coats, and healthcare uniforms designed for comfort and functionality.',
      image: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg',
      href: '/shop/medical-scrubs',
    },
    {
      id: 'aviation-uniforms',
      name: 'Aviation Uniforms',
      description: 'Professional uniforms for pilots, flight attendants, and ground staff with elegant designs.',
      image: '/images/cheerful-flight-attendant-standing-outdoors-at-air-2023-11-27-05-13-43-utc.jpg',
      href: '/shop/aviation-uniforms',
    },
    {
      id: 'culinary-uniforms',
      name: 'Culinary Uniforms',
      description: 'Chef coats, kitchen uniforms, and culinary apparel for restaurants and food service.',
      image: '/images/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg',
      href: '/shop/culinary-uniforms',
    },
    {
      id: 'corporate-workwear',
      name: 'Corporate Workwear',
      description: 'Professional business attire and corporate uniforms for a polished workplace appearance.',
      image: '/images/corporate-office-workers-in-uniforms.jpg',
      href: '/shop/corporate-workwear',
    },
    {
      id: 'hospitality-attire',
      name: 'Hospitality Attire',
      description: 'Uniforms for hotels, resorts, and hospitality staff designed for comfort and elegance.',
      image: '/images/products/hotel-uniform.jpg',
      href: '/shop/hospitality-attire',
    },
    {
      id: 'industrial-uniforms',
      name: 'Industrial Uniforms',
      description: 'Durable workwear for industrial environments with safety and functionality in mind.',
      image: '/images/products/industrial-coverall.jpg',
      href: '/shop/industrial-uniforms',
    },
    {
      id: 'security-uniforms',
      name: 'Security Uniforms',
      description: 'Professional uniforms for security personnel with a commanding and authoritative appearance.',
      image: '/images/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg',
      href: '/shop/security-uniforms',
    },
  ];
  
  // Featured Products
  const featuredProducts = [
    {
      id: 'premium-scrubs-set',
      name: 'Premium Scrubs Set',
      price: 'SAR 249',
      rating: 4.8,
      reviews: 124,
      image: '/images/products/scrubs-set.jpg',
      href: '/shop/medical-scrubs/premium-scrubs-set',
    },
    {
      id: 'airline-crew-uniform',
      name: 'Airline Crew Uniform',
      price: 'SAR 1,299',
      rating: 4.9,
      reviews: 87,
      image: '/images/products/airline-uniform.jpg',
      href: '/shop/aviation-uniforms/airline-crew-uniform',
    },
    {
      id: 'antimicrobial-scrubs',
      name: 'Antimicrobial Scrubs',
      price: 'SAR 279',
      rating: 4.7,
      reviews: 98,
      image: '/images/products/scrubs-set.jpg',
      href: '/shop/medical-scrubs/antimicrobial-scrubs',
    },
    {
      id: 'industrial-coverall',
      name: 'Industrial Coverall',
      price: 'SAR 399',
      rating: 4.6,
      reviews: 52,
      image: '/images/products/industrial-coverall.jpg',
      href: '/shop/industrial-uniforms/industrial-coverall',
    },
  ];
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedSorting, setSelectedSorting] = React.useState('popularity');
  const [searchTerm, setSearchTerm] = React.useState('');
  
  return (
    <MainLayout locale={locale}>
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Professional Uniforms & Workwear</h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse our collection of high-quality uniforms and professional attire for various industries.
            </p>
            
            {/* Search Bar */}
            <SearchBar 
              placeholder="Search for uniforms, scrubs, workwear..." 
              className="max-w-xl mx-auto"
              locale={locale}
            />
          </div>
        </Container>
      </section>
      
      {/* Categories Section */}
      <section className="py-12">
        <Container>
          <SectionHeading>Browse Categories</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={category.href}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <Container>
          <SectionHeading>Featured Products</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={product.href}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-primary-600 font-medium">View Details</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              href="/shop/all-products" 
              className="inline-block px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-600 hover:text-white transition-colors"
            >
              View All Products
            </Link>
          </div>
        </Container>
      </section>
      
      {/* Quick Quote CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Bulk Order?</h2>
            <p className="text-lg opacity-90 mb-8">
              Get a custom quote for bulk orders or custom uniform requirements for your organization.
            </p>
            <Link 
              href="/quote" 
              className="inline-block px-8 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 