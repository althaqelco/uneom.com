'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

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

export default function AviationUniformsPage() {
  const locale = 'en';
  
  // Aviation uniforms products
  const products: Product[] = [
    {
      id: 'airline-crew-uniform',
      name: 'Airline Crew Uniform',
      description: 'Professional and elegant airline uniform for cabin crew, designed with premium fabric for comfort during long flights.',
      price: 'From SAR 1,299',
      image: '/images/default-placeholder.jpg',
      href: '/shop/aviation-uniforms/airline-crew-uniform',
      features: ['Wrinkle-resistant', 'Comfort stretch', 'Moisture-wicking', 'Stain-resistant'],
      colors: ['Navy Blue', 'Burgundy', 'Charcoal Grey'],
      isBestseller: true
    },
    {
      id: 'pilot-uniform',
      name: 'Professional Pilot Uniform',
      description: 'Premium quality pilot uniform with gold embellishments, designed for comfort and a distinguished professional appearance.',
      price: 'From SAR 1,599',
      image: '/images/default-placeholder.jpg',
      href: '/shop/aviation-uniforms/pilot-uniform',
      features: ['Premium wool blend', 'Crisp appearance', 'Comfort fit', 'Gold-tone buttons'],
      colors: ['Navy Blue', 'Black']
    },
    {
      id: 'ground-crew-uniform',
      name: 'Ground Crew Uniform',
      description: 'Durable and practical uniform for airport ground crew personnel, designed for visibility and weather protection.',
      price: 'From SAR 899',
      image: '/images/default-placeholder.jpg',
      href: '/shop/aviation-uniforms/ground-crew-uniform',
      features: ['High-visibility elements', 'Weather-resistant', 'Durable fabric', 'Multiple pockets'],
      colors: ['Hi-Vis Orange/Navy', 'Hi-Vis Yellow/Black']
    },
    {
      id: 'flight-attendant-dress',
      name: 'Flight Attendant Dress',
      description: 'Elegant and professional dress uniform for female flight attendants, featuring modest design with premium fabric.',
      price: 'From SAR 1,199',
      image: '/images/default-placeholder.jpg',
      href: '/shop/aviation-uniforms/flight-attendant-dress',
      features: ['Elegant design', 'Wrinkle-resistant', 'Easy movement', 'Professional look'],
      colors: ['Navy Blue', 'Burgundy', 'Charcoal Grey'],
      isNew: true
    },
    {
      id: 'aviation-blazer',
      name: 'Premium Aviation Blazer',
      description: 'Premium quality blazer for aviation professionals, featuring a tailored fit and durable construction.',
      price: 'From SAR 999',
      image: '/images/default-placeholder.jpg',
      href: '/shop/aviation-uniforms/aviation-blazer',
      features: ['Tailored fit', 'Premium materials', 'Professional appearance', 'Comfort stretch'],
      colors: ['Navy Blue', 'Burgundy', 'Black', 'Charcoal Grey']
    },
    {
      id: 'airline-service-vest',
      name: 'Airline Service Vest',
      description: 'Practical and stylish vest for airline service personnel, designed for a professional look with practical features.',
      price: 'From SAR 499',
      image: '/images/default-placeholder.jpg',
      href: '/shop/aviation-uniforms/airline-service-vest',
      features: ['Multiple pockets', 'Easy care fabric', 'Professional look', 'Easy movement'],
      colors: ['Navy Blue', 'Black', 'Grey', 'Burgundy']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'cabin-crew', name: 'Cabin Crew' },
    { id: 'pilot', name: 'Pilots' },
    { id: 'ground-crew', name: 'Ground Crew' },
    { id: 'customer-service', name: 'Customer Service' }
  ];
  
  // Features filters
  const featureFilters = [
    { id: 'wrinkle-resistant', name: 'Wrinkle Resistant' },
    { id: 'moisture-wicking', name: 'Moisture Wicking' },
    { id: 'stain-resistant', name: 'Stain Resistant' },
    { id: 'comfort-stretch', name: 'Comfort Stretch' },
    { id: 'premium-fabric', name: 'Premium Fabric' }
  ];
  
  return (
    <MainLayout locale={locale}>
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
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">Aviation Uniforms</span>
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
            src="/images/default-placeholder.jpg"
            alt="Aviation Uniforms"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviation Uniforms</h1>
            <p className="text-xl mb-8">
              Premium quality uniforms designed for comfort, style, and professionalism in the aviation industry. UNEOM offers uniforms for pilots, cabin crew, ground staff, and all aviation personnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#products">
                View Collection
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" href="/contact?subject=Aviation%20Uniforms">
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
                <h2 className="text-xl font-bold">Aviation Uniforms ({products.length})</h2>
                
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
      
      {/* Related Categories */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>Related Categories</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Link href="/shop/corporate-workwear" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/default-placeholder.jpg"
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
            <Link href="/shop/hospitality-attire" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/products/hotel-uniform.jpg"
                    alt="Hospitality Attire"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    Hospitality Attire
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
              <h2 className="text-3xl font-bold mb-4">Need Custom Aviation Uniforms?</h2>
              <p className="text-lg mb-6">
                UNEOM offers custom uniform design and manufacturing services for airlines and aviation companies. Our team will work with you to create uniforms that match your brand identity and meet industry requirements.
              </p>
              <Button
                variant="outline"
                href="/contact?subject=Custom%20Aviation%20Uniforms"
                className="inline-block bg-white text-primary-600 hover:bg-gray-100"
              >
                Request Consultation
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="Aviation Uniform Design Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 