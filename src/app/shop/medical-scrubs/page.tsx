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

export default function MedicalScrubsPage() {
  const locale = 'en';
  
  // Medical scrubs products
  const products: Product[] = [
    {
      id: 'premium-scrubs-set',
      name: 'Premium Scrubs Set',
      description: 'High-performance medical scrubs designed for healthcare professionals who require comfort, durability, and a professional appearance.',
      price: 'From SAR 249',
      image: '/images/default-placeholder.jpg',
      href: '/shop/medical-scrubs/premium-scrubs-set',
      features: ['Antimicrobial', 'Moisture-wicking', 'Wrinkle-resistant', 'Multiple pockets'],
      colors: ['Teal', 'Navy', 'Burgundy', 'Grey', 'Black'],
      isBestseller: true
    },
    {
      id: 'antimicrobial-scrubs',
      name: 'Antimicrobial Scrubs',
      description: 'Advanced medical scrubs with enhanced antimicrobial properties for healthcare environments where infection control is paramount.',
      price: 'From SAR 279',
      image: '/images/default-placeholder.jpg',
      href: '/shop/medical-scrubs/antimicrobial-scrubs',
      features: ['Enhanced hygiene', 'Odor control', 'Fluid-resistant', 'Durable construction'],
      colors: ['Light Blue', 'Navy', 'White', 'Green'],
      isNew: true
    },
    {
      id: 'nursing-scrubs',
      name: 'Nursing Scrubs Set',
      description: 'Comfortable and practical scrubs specifically designed for nursing professionals with functional features for daily hospital tasks.',
      price: 'From SAR 229',
      image: '/images/default-placeholder.jpg',
      href: '/shop/medical-scrubs/nursing-scrubs',
      features: ['Stretch fabric', 'Ergonomic design', 'Easy care', 'Stain resistant'],
      colors: ['Ceil Blue', 'Navy', 'Pink', 'Burgundy']
    },
    {
      id: 'surgical-scrubs',
      name: 'Surgical Scrubs',
      description: 'Specialized medical scrubs designed for the surgical environment with heightened considerations for sterility and comfort.',
      price: 'From SAR 269',
      image: '/images/default-placeholder.jpg',
      href: '/shop/medical-scrubs/surgical-scrubs',
      features: ['Sterile compatible', 'Specialized fabric', 'Optimal fit', 'Quick-dry material'],
      colors: ['Light Green', 'Light Blue', 'Navy', 'Light Grey']
    },
    {
      id: 'medical-lab-coat',
      name: 'Professional Lab Coat',
      description: 'High-quality medical lab coat with modern fit and practical features designed for healthcare and laboratory professionals.',
      price: 'From SAR 199',
      image: '/images/default-placeholder.jpg',
      href: '/shop/medical-scrubs/medical-lab-coat',
      features: ['Professional look', 'Stain resistant', 'Durable fabric', 'Multiple pockets'],
      colors: ['White', 'Light Blue']
    },
    {
      id: 'executive-medical-uniform',
      name: 'Executive Medical Uniform',
      description: 'Premium medical uniform designed for healthcare executives and administrators, balancing professional appearance with comfort.',
      price: 'From SAR 349',
      image: '/images/avatar-placeholder.jpg',
      href: '/shop/medical-scrubs/executive-medical-uniform',
      features: ['Premium fabric', 'Executive styling', 'Comfortable fit', 'Professional look'],
      colors: ['Navy', 'Black', 'Grey', 'White']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'nurses', name: 'Nursing' },
    { id: 'doctors', name: 'Physicians' },
    { id: 'surgeons', name: 'Surgical' },
    { id: 'lab', name: 'Laboratory' }
  ];
  
  // Features filters
  const featureFilters = [
    { id: 'antimicrobial', name: 'Antimicrobial' },
    { id: 'moisture-wicking', name: 'Moisture Wicking' },
    { id: 'wrinkle-resistant', name: 'Wrinkle Resistant' },
    { id: 'stretch-fabric', name: 'Stretch Fabric' },
    { id: 'stain-resistant', name: 'Stain Resistant' }
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
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">Medical Scrubs</span>
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
            alt="Medical Scrubs"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Scrubs & Healthcare Uniforms</h1>
            <p className="text-xl mb-8">
              Professional-grade medical uniforms designed for comfort and functionality. UNEOM provides high-quality scrubs, lab coats, and healthcare attire for medical professionals throughout Saudi Arabia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#products">
                View Collection
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" href="/contact?subject=Medical%20Scrubs">
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
                <h2 className="text-xl font-bold">Medical Scrubs ({products.length})</h2>
                
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
          <SectionHeading centered>Why Choose UNEOM Medical Uniforms</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Antimicrobial Protection</h3>
              <p className="text-gray-600">
                Our medical uniforms feature advanced antimicrobial treatments that help reduce bacterial growth and maintain hygiene in healthcare environments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Designed for Comfort</h3>
              <p className="text-gray-600">
                Healthcare professionals work long shifts, so our uniforms are engineered with moisture-wicking fabrics, ergonomic designs, and comfort features.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customization Options</h3>
              <p className="text-gray-600">
                We offer extensive customization for healthcare facilities, including logo embroidery, color-coding by department, and name embroidery.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Related Categories */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>Related Categories</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Link href="/shop/healthcare-accessories" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/avatar-placeholder.jpg"
                    alt="Healthcare Accessories"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    Healthcare Accessories
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
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Custom Medical Uniforms?</h2>
              <p className="text-lg mb-6">
                UNEOM specializes in outfitting healthcare facilities with custom uniform programs. From color-coded departments to branded embroidery, we can create a uniform solution tailored to your healthcare facility's specific needs.
              </p>
              <Button
                variant="outline"
                href="/contact?subject=Custom%20Medical%20Uniforms"
                className="inline-block bg-white text-primary-600 hover:bg-gray-100"
              >
                Request Consultation
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/default-placeholder.jpg"
                  alt="Custom Medical Uniform Design Service"
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