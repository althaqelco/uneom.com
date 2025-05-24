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

export default function IndustrialUniformsPage() {
  const locale = 'en';
  
  // Industrial uniforms products
  const products: Product[] = [
    {
      id: 'industrial-coverall',
      name: 'Industrial Coverall',
      description: 'Durable full-body coverall designed for industrial environments with safety features and comfort for all-day wear.',
      price: 'From SAR 199',
      image: '/images/products/industrial-coverall.jpg',
      href: '/shop/industrial-uniforms/industrial-coverall',
      features: ['Heavy-duty fabric', 'Multiple pockets', 'Reinforced seams', 'Safety reflectors'],
      colors: ['Navy', 'Royal Blue', 'Grey', 'Black'],
      isBestseller: true
    },
    {
      id: 'safety-vest',
      name: 'High-Visibility Safety Vest',
      description: 'High-visibility safety vest with reflective strips designed for construction sites and industrial environments requiring visibility.',
      price: 'From SAR 79',
      image: '/images/default-placeholder.jpg',
      href: '/shop/industrial-uniforms/safety-vest',
      features: ['High-visibility material', 'Reflective strips', 'Adjustable fit', 'Pocket design'],
      colors: ['Hi-Vis Yellow', 'Hi-Vis Orange'],
      isNew: true
    },
    {
      id: 'factory-workwear',
      name: 'Factory Workwear Set',
      description: 'Complete workwear set designed for factory workers, with durable construction and comfort features for production environments.',
      price: 'From SAR 259',
      image: '/images/default-placeholder.jpg',
      href: '/shop/industrial-uniforms/factory-workwear',
      features: ['Durable fabric', 'Stain-resistant', 'Multiple pockets', 'Comfort design'],
      colors: ['Navy', 'Grey', 'Black', 'Khaki']
    },
    {
      id: 'construction-uniform',
      name: 'Construction Uniform',
      description: 'Heavy-duty construction uniform designed for durability and safety in building sites and construction environments.',
      price: 'From SAR 219',
      image: '/images/product-placeholder.jpg',
      href: '/shop/industrial-uniforms/construction-uniform',
      features: ['Reinforced construction', 'Safety elements', 'Weather-resistant', 'Tool pockets'],
      colors: ['High-Vis combinations', 'Grey/Black', 'Navy/Orange']
    },
    {
      id: 'industrial-jacket',
      name: 'Industrial Safety Jacket',
      description: 'Heavy-duty safety jacket for industrial environments with weather protection and high-visibility features.',
      price: 'From SAR 299',
      image: '/images/default-placeholder.jpg',
      href: '/shop/industrial-uniforms/industrial-jacket',
      features: ['Weather-resistant', 'Safety reflectors', 'Durable construction', 'Multiple pockets'],
      colors: ['Yellow/Navy', 'Orange/Navy', 'Black/Hi-Vis']
    },
    {
      id: 'maintenance-uniform',
      name: 'Maintenance Uniform',
      description: 'Practical maintenance uniform designed for technical staff with functional features for tools and equipment.',
      price: 'From SAR 189',
      image: '/images/default-placeholder.jpg',
      href: '/shop/industrial-uniforms/maintenance-uniform',
      features: ['Durable fabric', 'Multiple tool pockets', 'Reinforced knees', 'Stain-resistant'],
      colors: ['Grey', 'Navy', 'Black', 'Royal Blue']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'factory', name: 'Factory Workers' },
    { id: 'construction', name: 'Construction' },
    { id: 'warehouse', name: 'Warehouse' },
    { id: 'maintenance', name: 'Maintenance' }
  ];
  
  // Features filters
  const featureFilters = [
    { id: 'safety-features', name: 'Safety Features' },
    { id: 'durable-fabric', name: 'Durable Fabric' },
    { id: 'weather-resistant', name: 'Weather Resistant' },
    { id: 'reinforced', name: 'Reinforced Construction' },
    { id: 'high-visibility', name: 'High Visibility' }
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
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">Industrial Uniforms</span>
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
            src="/images/product-placeholder.jpg"
            alt="Industrial Uniforms"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Uniforms</h1>
            <p className="text-xl mb-8">
              Heavy-duty workwear designed for industrial environments. UNEOM provides durable, functional, and safety-compliant uniforms for manufacturing, construction, and industrial sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#products">
                View Collection
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" href="/contact?subject=Industrial%20Uniforms">
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
                <h2 className="text-xl font-bold">Industrial Uniforms ({products.length})</h2>
                
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
          <SectionHeading centered>Why Choose UNEOM Industrial Uniforms</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Safety Compliant</h3>
              <p className="text-gray-600">
                Our industrial uniforms meet safety standards and regulations, with features like high-visibility elements and flame-resistant options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Extreme Durability</h3>
              <p className="text-gray-600">
                Built for the toughest environments, our industrial uniforms feature reinforced seams, heavy-duty fabrics, and wear-resistant construction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Identity</h3>
              <p className="text-gray-600">
                Even in industrial settings, we incorporate your company branding with logo embroidery, company colors, and custom design elements.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Fabric Technologies Section */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>Advanced Fabric Technologies</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="Ripstop Fabric"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ripstop Fabric</h3>
                <p className="text-gray-600">
                  Our ripstop fabric technology prevents small tears from spreading, using a special reinforcement technique that creates a grid pattern in the material, significantly enhancing durability in demanding industrial environments.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="WeatherShield Technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">WeatherShield™ Technology</h3>
                <p className="text-gray-600">
                  Our proprietary WeatherShield™ treatment creates a water-resistant barrier that keeps workers dry in wet conditions while maintaining breathability, perfect for outdoor industrial work in variable weather conditions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="DuraTwill Fabric"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">DuraTwill Fabric</h3>
                <p className="text-gray-600">
                  Our DuraTwill fabric combines polyester and cotton in a special twill weave that provides exceptional durability, stain resistance, and comfort - ideal for uniforms that need to withstand industrial wear and tear.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="ReinforceTech"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">ReinforceTech™ Construction</h3>
                <p className="text-gray-600">
                  Our ReinforceTech™ construction method uses triple-stitched seams and bar tacking at stress points to create industrial uniforms that withstand extreme conditions and heavy use without tearing or coming apart.
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
            <Link href="/shop/medical-scrubs" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/default-placeholder.jpg"
                    alt="Medical Scrubs"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    Medical Scrubs
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
              <h2 className="text-3xl font-bold mb-4">Need Custom Industrial Uniforms?</h2>
              <p className="text-lg mb-6">
                UNEOM specializes in creating industrial uniform programs tailored to your specific workplace requirements. From safety specifications to branding integration, we can design and produce workwear that meets the demands of your industrial environment.
              </p>
              <Button
                variant="outline"
                href="/contact?subject=Custom%20Industrial%20Uniforms"
                className="inline-block bg-white text-primary-600 hover:bg-gray-100"
              >
                Request Consultation
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="Industrial Uniform Design Service"
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