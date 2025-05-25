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

export default function CulinaryUniformsPage() {
  const locale = 'en';
  
  // Culinary uniforms products
  const products: Product[] = [
    {
      id: 'premium-chef-coat',
      name: 'Premium Chef Coat',
      description: 'Professional chef coat made with premium fabric, designed for comfort and style in the kitchen environment.',
      price: 'From SAR 189',
      image: '/images/healthcare/medical_hijab_uniform.jpg',
      href: '/shop/culinary-uniforms/premium-chef-coat',
      features: ['Stain-resistant', 'Double-breasted design', 'Breathable fabric', 'Easy-care'],
      colors: ['White', 'Black', 'Navy'],
      isBestseller: true
    },
    {
      id: 'executive-chef-set',
      name: 'Executive Chef Set',
      description: 'Complete chef uniform set including premium coat, pants, and hat for professional kitchen staff.',
      price: 'From SAR 349',
      image: '/images/healthcare/medical_hijab_uniform.jpg',
      href: '/shop/culinary-uniforms/executive-chef-set',
      features: ['Full set', 'Premium materials', 'Professional look', 'Restaurant standard'],
      colors: ['White', 'Black'],
      isNew: true
    },
    {
      id: 'kitchen-staff-uniform',
      name: 'Kitchen Staff Uniform',
      description: 'Practical and comfortable uniform designed for all kitchen staff, including cooks and assistants.',
      price: 'From SAR 279',
      image: '/images/healthcare/medical_hijab_uniform.jpg',
      href: '/shop/culinary-uniforms/kitchen-staff-uniform',
      features: ['Durable fabric', 'Heat-resistant', 'Comfort fit', 'Easy maintenance'],
      colors: ['White', 'Black', 'Grey']
    },
    {
      id: 'professional-chef-apron',
      name: 'Professional Chef Apron',
      description: 'Heavy-duty professional apron with adjustable neck strap and waist ties for perfect fit in busy kitchens.',
      price: 'From SAR 99',
      image: '/images/healthcare/medical_hijab_uniform.jpg',
      href: '/shop/culinary-uniforms/professional-chef-apron',
      features: ['Heavy-duty fabric', 'Multiple pockets', 'Adjustable fit', 'Stain-resistant'],
      colors: ['Black', 'White', 'Burgundy', 'Navy']
    },
    {
      id: 'kitchen-manager-uniform',
      name: 'Kitchen Manager Uniform',
      description: 'Distinguished uniform for kitchen managers and head chefs, designed for a professional appearance.',
      price: 'From SAR 449',
      image: '/images/healthcare/medical_hijab_uniform.jpg',
      href: '/shop/culinary-uniforms/kitchen-manager-uniform',
      features: ['Premium fabric', 'Distinctive design', 'Comfortable fit', 'Professional look'],
      colors: ['Black', 'White', 'Grey']
    },
    {
      id: 'culinary-student-uniform',
      name: 'Culinary Student Uniform',
      description: 'Affordable yet high-quality uniform set for culinary students and training establishments.',
      price: 'From SAR 219',
      image: '/images/healthcare/medical_hijab_uniform.jpg',
      href: '/shop/culinary-uniforms/culinary-student-uniform',
      features: ['Cost-effective', 'Durable', 'Easy-care', 'Complete set'],
      colors: ['White']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'executive-chef', name: 'Executive Chef' },
    { id: 'sous-chef', name: 'Sous Chef' },
    { id: 'line-cook', name: 'Line Cook' },
    { id: 'pastry-chef', name: 'Pastry Chef' }
  ];
  
  // Features filters
  const featureFilters = [
    { id: 'stain-resistant', name: 'Stain Resistant' },
    { id: 'breathable', name: 'Breathable Fabric' },
    { id: 'premium-fabric', name: 'Premium Fabric' },
    { id: 'heat-resistant', name: 'Heat Resistant' },
    { id: 'easy-care', name: 'Easy Care' }
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
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">Culinary Uniforms</span>
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
            src="/images/healthcare/medical_hijab_uniform.jpg"
            alt="Culinary Uniforms"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Culinary Uniforms</h1>
            <p className="text-xl mb-8">
              Professional kitchen attire designed for comfort, functionality, and style. UNEOM provides high-quality chef coats, kitchen uniforms, and culinary wear for restaurants and hospitality businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#products">
                View Collection
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" href="/contact?subject=Culinary%20Uniforms">
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
                <h2 className="text-xl font-bold">Culinary Uniforms ({products.length})</h2>
                
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
                    src="/images/healthcare/medical_hijab_uniform.jpg"
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
                    src="/images/healthcare/medical_hijab_uniform.jpg"
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
              <h2 className="text-3xl font-bold mb-4">Need Custom Culinary Uniforms?</h2>
              <p className="text-lg mb-6">
                UNEOM offers custom culinary uniform solutions tailored to your restaurant or establishment's specific requirements. Our team can design and manufacture uniforms that represent your culinary team with style and professionalism.
              </p>
              <Button
                variant="outline"
                href="/contact?subject=Custom%20Culinary%20Uniforms"
                className="inline-block bg-white text-primary-600 hover:bg-gray-100"
              >
                Request Consultation
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="Culinary Uniform Design Service"
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