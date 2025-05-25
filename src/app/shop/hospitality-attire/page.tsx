'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
  features?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function HospitalityAttirePage() {
  const locale = 'en';
  
  // Hospitality attire products
  const products: Product[] = [
    {
      id: 'luxury-hotel-uniform',
      name: 'Luxury Hotel Uniform',
      description: 'Premium hospitality uniform designed for luxury hotels and resorts, featuring refined styling and exceptional comfort for front-of-house staff.',
      price: 'From SAR 399',
      image: '/images/products/hotel-uniform.jpg',
      href: '/shop/hospitality-attire/luxury-hotel-uniform',
      features: ['Premium fabric', 'Tailored fit', 'Professional styling', 'Breathable material'],
      colors: ['Black', 'Navy', 'Burgundy', 'White'],
      isBestseller: true
    },
    {
      id: 'reception-staff-uniform',
      name: 'Reception Staff Uniform',
      description: 'Professional reception uniforms designed for hotel front desk and customer-facing staff with a polished, approachable appearance.',
      price: 'From SAR 329',
      image: '/images/product-placeholder.jpg',
      href: '/shop/hospitality-attire/reception-staff-uniform',
      features: ['Refined styling', 'Comfortable fabric', 'Easy-care material', 'Corporate branding option'],
      colors: ['White', 'Black', 'Navy', 'Grey'],
      isNew: true
    },
    {
      id: 'housekeeping-uniform',
      name: 'Housekeeping Uniform',
      description: 'Practical and comfortable housekeeping uniforms designed for hotel room attendants and cleaning staff, balancing professionalism with functionality.',
      price: 'From SAR 199',
      image: '/images/product-placeholder.jpg',
      href: '/shop/hospitality-attire/housekeeping-uniform',
      features: ['Durable fabric', 'Stain-resistant', 'Multiple pockets', 'Comfortable fit'],
      colors: ['Navy', 'Black', 'Grey', 'Light Blue']
    },
    {
      id: 'concierge-uniform',
      name: 'Concierge Uniform',
      description: 'Distinguished concierge uniform designed for luxury hotels and high-end establishments, conveying authority and professional service.',
      price: 'From SAR 449',
      image: '/images/product-placeholder.jpg',
      href: '/shop/hospitality-attire/concierge-uniform',
      features: ['Premium tailoring', 'Distinctive styling', 'Professional details', 'Comfortable design'],
      colors: ['Navy', 'Black', 'Burgundy', 'Forest Green']
    },
    {
      id: 'resort-staff-attire',
      name: 'Resort Staff Attire',
      description: 'Stylish and comfortable resort uniforms designed for warm climate hospitality venues, combining professionalism with a relaxed aesthetic.',
      price: 'From SAR 279',
      image: '/images/product-placeholder.jpg',
      href: '/shop/hospitality-attire/resort-staff-attire',
      features: ['Lightweight fabric', 'Breathable design', 'Sun protection', 'Resort branding'],
      colors: ['White', 'Light Blue', 'Beige', 'Pastel colors']
    },
    {
      id: 'restaurant-staff-uniform',
      name: 'Restaurant Staff Uniform',
      description: 'Professional restaurant uniforms designed for fine dining establishments, balancing elegance with practical features for service staff.',
      price: 'From SAR 259',
      image: '/images/categories/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg',
      href: '/shop/hospitality-attire/restaurant-staff-uniform',
      features: ['Stain-resistant', 'Comfortable design', 'Professional appearance', 'Easy care'],
      colors: ['Black', 'White', 'Burgundy', 'Grey']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'hotel', name: 'Hotel & Resort' },
    { id: 'restaurant', name: 'Restaurant & Dining' },
    { id: 'housekeeping', name: 'Housekeeping' },
    { id: 'reception', name: 'Reception & Front Desk' }
  ];
  
  // Features filters
  const featureFilters = [
    { id: 'premium-fabric', name: 'Premium Fabric' },
    { id: 'professional-look', name: 'Professional Look' },
    { id: 'comfort-design', name: 'Comfort Design' },
    { id: 'stain-resistant', name: 'Stain Resistant' },
    { id: 'breathable', name: 'Breathable Material' }
  ];
  
  return (
    <div className="bg-white">
    
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm text-gray-700 hover:text-primary-600">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/shop" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">Shop</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">Hospitality Attire</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* Category Hero */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/hotel-uniform.jpg"
            alt="Hospitality Attire"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hospitality Attire</h1>
            <p className="text-xl mb-8">
              Elegant and professional uniforms designed for the hospitality industry. UNEOM provides premium quality attire for hotels, restaurants, and resorts that balances style with comfort and functionality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#products">
                View Collection
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" href="/contact?subject=Hospitality%20Attire">
                Request Custom Design
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Shop Section */}
      <section className="py-16" id="products">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
                
                {/* Department Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Department</h3>
                  <div className="space-y-2">
                    {departments.map((department) => (
                      <div key={department.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`department-${department.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`department-${department.id}`} className="ml-2 text-sm text-gray-700">
                          {department.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Features</h3>
                  <div className="space-y-2">
                    {featureFilters.map((feature) => (
                      <div key={feature.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`feature-${feature.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`feature-${feature.id}`} className="ml-2 text-sm text-gray-700">
                          {feature.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="min-price" className="sr-only">Minimum Price</label>
                      <input
                        type="number"
                        id="min-price"
                        placeholder="Min"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="sr-only">Maximum Price</label>
                      <input
                        type="number"
                        id="max-price"
                        placeholder="Max"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 text-white rounded py-2 text-sm font-medium hover:bg-primary-700 transition">
                  Apply Filters
                </button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Hospitality Attire ({products.length})</h2>
                
                <div className="flex items-center space-x-4">
                  <label htmlFor="sort" className="text-sm text-gray-700">Sort by:</label>
                  <select
                    id="sort"
                    className="border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
              
              {/* Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link key={product.id} href={product.href} className="group">
                    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="relative h-64 overflow-hidden bg-gray-200">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            NEW
                          </div>
                        )}
                        {product.isBestseller && (
                          <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                            BESTSELLER
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-medium text-gray-900">{product.price}</span>
                          <span className="text-primary-600 text-sm font-medium group-hover:underline">View Details</span>
                        </div>
                        {product.features && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 2 && (
                              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                +{product.features.length - 2} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>Why Choose UNEOM Hospitality Uniforms</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Our hospitality uniforms are crafted from premium fabrics that maintain their appearance through daily wear and frequent washings.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comfort-Focused</h3>
              <p className="text-gray-600">
                We design with all-day comfort in mind, ensuring your staff can perform at their best throughout their shift without discomfort.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Brand Integration</h3>
              <p className="text-gray-600">
                Our designs incorporate your brand identity seamlessly, creating a cohesive look that reinforces your establishment's unique character.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Design Elements Section */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>Hospitality Design Elements</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg"
                  alt="Premium Fabrics"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Fabrics</h3>
                <p className="text-gray-600">
                  Our hospitality uniforms use high-grade fabrics that maintain an elegant appearance while providing comfort during long shifts. Each material is selected for its durability, easy-care properties, and professional presentation.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg"
                  alt="Expert Tailoring"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Tailoring</h3>
                <p className="text-gray-600">
                  Each hospitality uniform features precision tailoring that creates a refined silhouette while allowing comfortable movement. Our attention to fit ensures your staff presents a consistently professional appearance.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/services/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
                  alt="Brand Customization"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Brand Customization</h3>
                <p className="text-gray-600">
                  Our hospitality attire incorporates your brand identity through color matching, logo embroidery, and design elements that align with your establishment's aesthetic, creating a cohesive visual experience for your guests.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/hotel-uniform.jpg"
                  alt="Practical Performance"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Practical Performance</h3>
                <p className="text-gray-600">
                  We integrate practical features like stain-resistant treatments, strategic pocket placement, and breathable panels to enhance functionality while maintaining a sophisticated appearance suitable for customer-facing roles.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Related Categories */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>Related Categories</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Link href="/shop/corporate-workwear" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/products/corporate-suit-executive.jpg"
                    alt="Corporate Workwear"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    Corporate Workwear
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/shop/culinary-uniforms" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/categories/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg"
                    alt="Culinary Uniforms"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    Culinary Uniforms
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/shop/security-uniforms" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/product-placeholder.jpg"
                    alt="Security Uniforms"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    Security Uniforms
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Custom Hospitality Uniforms?</h2>
              <p className="text-lg mb-6">
                UNEOM specializes in creating custom hospitality uniform programs tailored to your establishment's unique brand and requirements. From luxury hotels to fine dining restaurants, we can design and produce hospitality attire that elevates your staff's appearance.
              </p>
              <Button
                variant="outline"
                href="/contact?subject=Custom%20Hospitality%20Uniforms"
                className="inline-block bg-white text-primary-600 hover:bg-gray-100"
              >
                Request Consultation
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/product-placeholder.jpg"
                  alt="Hospitality Uniform Design Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    
      </div>
  );
} 