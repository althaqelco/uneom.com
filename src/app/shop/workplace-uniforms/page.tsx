'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SearchBar from '@/components/shop/SearchBar';
import { FilterIcon, GridIcon, ListIcon } from '@/components/ui/Icons';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function WorkplaceUniformsPage() {
  const locale = 'en';
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    priceRange: [0, 3000],
    colors: [],
    sizes: [],
    inStock: true
  });
  
  // Workplace uniforms products
  const products = [
    {
      id: 'executive-suits',
      name: 'Executive Tailored Suits',
      price: 'From SAR 1,299',
      image: '/images/products/corporate-suit-executive.jpg',
      rating: 4.9,
      reviews: 87,
      description: 'Premium tailored suits designed for corporate executives who require sophistication, comfort, and a distinguished professional appearance.',
      href: '/images/products/corporate-shirts-blouses.jpg',
      rating: 4.7,
      reviews: 124,
      description: 'High-quality corporate shirts in a variety of colors, featuring moisture-wicking fabric and easy-care properties for professional daily wear.',
      href: '/images/products/corporate-polo-shirts.jpg',
      rating: 4.6,
      reviews: 58,
      description: 'Elegant yet comfortable blazers for business professionals, available in various styles suitable for Saudi corporate environments.',
      href: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
      rating: 4.8,
      reviews: 92,
      description: 'Professional abayas designed specifically for corporate settings, combining traditional modesty with contemporary business aesthetics.',
      href: '/images/avatar-placeholder.jpg',
      rating: 4.5,
      reviews: 77,
      description: 'Durable formal trousers with comfortable stretch fabric, designed for long days in the office environment.',
      href: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
      rating: 4.6,
      reviews: 64,
      description: 'Professional length skirts designed for corporate settings, maintaining modesty while offering a polished business appearance.',
      href: '/shop/workplace-uniforms/corporate-skirts'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Workplace Uniforms', url: '#', current: true }
  ];

  const toggleView = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  return (
    <div className="bg-white">
      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs.map(item => ({
          label: item.name,
          href: item.url
        }))} />
        
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">Workplace Uniforms</h1>
          <p className="mt-3 text-lg text-neutral-700">
            Professional corporate attire for Saudi businesses, from executive suits to daily office wear.
            Our workplace uniforms combine professional appearance with comfort for long office hours.
          </p>
        </div>
        
        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="w-full sm:w-auto flex gap-2">
            <button 
              className={`p-2 rounded ${view === 'grid' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-500'}`}
              onClick={() => toggleView('grid')}
              aria-label="Grid view"
            >
              <GridIcon className="w-5 h-5" />
            </button>
            <button 
              className={`p-2 rounded ${view === 'list' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-500'}`}
              onClick={() => toggleView('list')}
              aria-label="List view"
            >
              <ListIcon className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1 px-3 py-2 border border-neutral-300 rounded bg-white text-neutral-700">
              <FilterIcon className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
          <div className="w-full sm:w-64">
            <SearchBar placeholder="Search workplace uniforms..." />
          </div>
        </div>
        
        {/* Featured Product Banner */}
        <div className="mt-8 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/40 z-10"></div>
          <Image 
            src="/images/avatar-placeholder.jpg"
            alt="Corporate team wearing professional uniforms"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Complete Corporate Uniform Solutions</h2>
            <p className="text-white/90 max-w-lg mb-4">
              Comprehensive workplace uniform programs designed for Saudi businesses, 
              from executive management to office staff. Create a cohesive corporate image with our premium quality uniforms.
            </p>
            <div>
              <Link href="/contact">
                <Button variant="secondary">Request Corporate Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Products Grid/List */}
        <div className="mt-12">
          <SectionHeading>Workplace Uniform Collection</SectionHeading>
          
          {view === 'grid' ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={{
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    href: product.href
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="flex flex-col sm:flex-row gap-6 p-4 border border-neutral-200 rounded-lg"
                >
                  <div className="sm:w-48 h-48 relative rounded-md overflow-hidden">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      <Link href={product.href} className="text-neutral-900 hover:text-primary-700">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-primary-700 font-medium mt-1">{product.price}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-neutral-600 ml-2 text-sm">{product.rating} ({product.reviews} reviews)</span>
                      </div>
                    </div>
                    <p className="mt-3 text-neutral-600">{product.description}</p>
                    <div className="mt-4">
                      <Link href={product.href}>
                        <Button variant="outline">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Corporate Program Section */}
        <div className="mt-16 bg-neutral-50 p-6 md:p-8 rounded-lg">
          <SectionHeading>Corporate Uniform Programs</SectionHeading>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-neutral-700">
                Our corporate uniform programs offer comprehensive solutions for Saudi businesses looking to establish 
                a professional and consistent visual identity. From executive leadership to frontline staff, 
                we create cohesive uniform collections that reflect your corporate values and brand identity.
              </p>
              <h3 className="font-semibold text-lg mt-6 mb-3">Program Benefits</h3>
              <ul className="space-y-2">
                {[
                  'Consistent professional appearance across all departments',
                  'Bulk ordering discounts for company-wide implementation',
                  'Custom branding and embroidery options',
                  'Regular replenishment scheduling',
                  'On-site measurement services for your team',
                  'Specialized solutions for Saudi corporate environments'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/services/program-management">
                  <Button variant="primary">Learn About Our Programs</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image 
                src="/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg"
                alt="Corporate uniform program" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Customization Options */}
        <div className="mt-16">
          <SectionHeading>Workplace Uniform Customization</SectionHeading>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "UNEOM - Professional Uniforms",
                description: 'Custom embroidery and printing of company logos and identifiers.',
                icon: '🏢'
              },
              {
                title: 'Fabric Selection',
                description: 'Choose from premium fabrics suitable for Saudi climate and office environments.',
                icon: '🧵'
              },
              {
                title: 'Color Matching',
                description: 'Match uniforms to your corporate color palette for brand consistency.',
                icon: '🎨'
              },
              {
                title: 'Custom Sizing',
                description: 'Tailored measurements for perfect fit across all staff members.',
                icon: '📏'
              }
            ].map((option, index) => (
              <div key={index} className="p-6 border border-neutral-200 rounded-lg">
                <div className="text-3xl mb-3">{option.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-neutral-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact">
              <Button variant="secondary">Request Customization Options</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
} 