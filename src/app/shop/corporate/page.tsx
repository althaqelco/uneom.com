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

export default function CorporatePage() {
  const locale = 'en';
  
  // Corporate products
  const products: Product[] = [
    {
      id: 'executive-office-attire',
      name: 'Executive Office Attire',
      description: 'Premium tailored attire for corporate executives and management personnel, featuring sophisticated design and premium fabric.',
      price: 'From SAR 599',
      image: '/images/Corporate_Uniforms_Business.png',
      href: '/images/confident-man-in-uniform-2025-02-12-01-27-59-utc.jpg',
      href: '/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg',
      href: '/images/modern-arabic-businessman-SBI-300984397.jpg',
      href: '/images/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg',
      href: '/images/arabian-businessman-wearing-traditional-clothes-while-using-smartphone-at-home-SBI-350765162.jpg',
      href: '/shop/corporate/corporate-event-attire',
      features: ['Premium materials', 'Elegant design', 'Professional look', 'Custom sizing'],
      colors: ['Navy', 'Black', 'Burgundy', 'Custom colors available']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'executive', name: 'Executive' },
    { id: 'management', name: 'Management' },
    { id: 'office-staff', name: 'Office Staff' },
    { id: 'reception', name: 'Reception & Front Desk' },
    { id: 'delivery', name: 'Delivery Staff' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <SectionHeading centered>Corporate Uniforms</SectionHeading>
              <p className="mt-4 text-lg text-gray-600">
                Professional and stylish corporate uniforms designed for various business environments. 
                From executive attire to office staff uniforms, our corporate collection offers premium quality, 
                comfort, and a professional appearance.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/Corporate_Uniforms_Business.png"
                  alt="Corporate Uniforms Collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Corporate Attire</h2>
                    <p className="text-white/90 text-lg mb-6">
                      Elevate your corporate image with our premium quality business uniforms, 
                      designed for comfort and professional appearance.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="/quote" variant="primary">
                        Request Quote
                      </Button>
                      <Button href="/contact" variant="outline">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Products Section */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Departments</h3>
                <ul className="space-y-2">
                  {departments.map((dept) => (
                    <li key={dept.id}>
                      <button className="text-gray-700 hover:text-primary-600 transition w-full text-left py-1">
                        {dept.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our corporate uniform specialists are ready to assist you with bulk orders and customization options.
                  </p>
                  <Button href="/contact" fullWidth variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Corporate Collection</h2>
                
                {/* Mobile Filters Button */}
                <button className="md:hidden bg-white rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700">
                  Filters
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Link 
                    href={product.href} 
                    key={product.id}
                    className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                          BESTSELLER
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{product.price}</span>
                        <span className="text-primary-600 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Custom Corporate Uniforms?</h2>
            <p className="text-lg text-white/80 mb-8">
              We offer custom design and bulk ordering options for businesses of all sizes.
              Contact our team to discuss your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="primary">
                Request Quote
              </Button>
              <Button href="/services/custom-design" variant="outline">
                Custom Design Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 