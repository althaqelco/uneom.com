'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredJackets = [
  {
    id: '1',
    name: 'Professional Security Patrol Jacket',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/security-patrol-jacket/professional/',
    category: 'Professional',
    isNew: true
  },
  {
    id: '2',
    name: 'Tactical Security Jacket',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/security-patrol-jacket/tactical/',
    category: 'Tactical',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Weather-Resistant Patrol Jacket',
    image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/security-patrol-jacket/weather-resistant/',
    category: 'Weather-Resistant'
  }
];

export default function SecurityPatrolJacketPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Security Patrol Jackets | Professional Security Outerwear | Uneom"
        description="Professional security patrol jackets designed for security officers and guards. Durable, functional outerwear with tactical features for security professionals in Saudi Arabia."
        canonicalUrl="https://uneom.com/shop/security-uniforms/security-patrol-jacket/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="Security Patrol Jackets"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              { label: 'Security Uniforms', href: '/shop/security-uniforms' },
              { label: 'Security Patrol Jacket', href: '/shop/security-uniforms/security-patrol-jacket' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security Patrol Jackets</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional security patrol jackets designed for security officers and guards. Combining authority, functionality, and comfort for effective security operations in all conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Security Quote
              </Button>
              <Button 
                href="#featured-jackets"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                View Collection
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Introduction */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="Security Excellence">
                  Professional Patrol Outerwear
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our security patrol jacket collection is designed to provide security professionals with the authority, functionality, and protection needed for effective patrol operations. Each jacket combines professional appearance with tactical functionality.
                </p>
                <p className="text-gray-600 mb-8">
                  From corporate security to outdoor patrols, our jackets ensure security officers maintain a professional image while having access to essential tactical features and weather protection.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Security Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Security Professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Jackets */}
          <section id="featured-jackets" className="mb-16">
            <SectionHeading subtitle="Security Patrol Jacket Collection" centered>
              Professional Security Outerwear
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredJackets.map((jacket) => (
                <ProductCard key={jacket.id} product={jacket} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/security-uniforms/" variant="primary" size="lg">
                View All Security Uniforms
              </Button>
            </div>
          </section>

          {/* Security Features */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Security-Specific Features" centered>
              Built for Professional Security Operations
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tactical Pockets</h3>
                <p className="text-gray-600 text-sm">Multiple secure pockets for equipment and accessories</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Authority Design</h3>
                <p className="text-gray-600 text-sm">Professional appearance that commands respect</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Weather Protection</h3>
                <p className="text-gray-600 text-sm">Water-resistant and wind-proof materials</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reflective Elements</h3>
                <p className="text-gray-600 text-sm">High-visibility features for night operations</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Security Operations?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Equip your security team with professional patrol jackets that combine authority, functionality, and protection for effective security operations in all conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Security Jacket Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Security Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}