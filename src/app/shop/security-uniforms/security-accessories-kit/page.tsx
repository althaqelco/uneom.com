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

const featuredKits = [
  {
    id: '1',
    name: 'Complete Security Accessories Kit',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/security-accessories-kit/complete/',
    category: 'Complete Kit',
    isNew: true
  },
  {
    id: '2',
    name: 'Basic Security Accessories',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/security-accessories-kit/basic/',
    category: 'Basic Kit',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Premium Security Kit',
    image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/security-accessories-kit/premium/',
    category: 'Premium Kit'
  }
];

export default function SecurityAccessoriesKitPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Security Accessories Kit | Professional Security Equipment | Uneom"
        description="Complete security accessories kits for security officers and guards. Professional security equipment including belts, badges, and essential accessories for security professionals in Saudi Arabia."
        canonicalUrl="https://uneom.com/shop/security-uniforms/security-accessories-kit/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="Security Accessories Kit"
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
              { label: 'Security Accessories Kit', href: '/shop/security-uniforms/security-accessories-kit' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security Accessories Kit</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Complete security accessories kits for security officers and guards. Professional equipment packages including belts, badges, and essential accessories for comprehensive security operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Accessories Quote
              </Button>
              <Button 
                href="#featured-kits"
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
                <SectionHeading subtitle="Complete Equipment">
                  Professional Security Accessories
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our security accessories kit collection provides security professionals with complete equipment packages. Each kit includes essential accessories needed for professional security operations and maintaining authority.
                </p>
                <p className="text-gray-600 mb-8">
                  From duty belts to identification badges, our accessory kits ensure security officers have all the professional equipment needed to perform their duties effectively and maintain a professional appearance.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Accessory Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Security Professional with Accessories"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Kits */}
          <section id="featured-kits" className="mb-16">
            <SectionHeading subtitle="Security Accessories Kit Collection" centered>
              Complete Professional Equipment
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredKits.map((kit) => (
                <ProductCard key={kit.id} product={kit} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/security-uniforms/" variant="primary" size="lg">
                View All Security Uniforms
              </Button>
            </div>
          </section>

          {/* Kit Contents */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Kit Contents" centered>
              Essential Security Equipment
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-center">ID & Badges</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Professional ID badge holders</li>
                  <li>• Security officer badges</li>
                  <li>• Name plates and tags</li>
                  <li>• Retractable badge reels</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-center">Duty Belts</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Heavy-duty security belts</li>
                  <li>• Equipment holsters</li>
                  <li>• Radio holders</li>
                  <li>• Key chains and clips</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-center">Professional Accessories</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Security ties and clips</li>
                  <li>• Shoulder patches</li>
                  <li>• Rank insignia</li>
                  <li>• Professional pins</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Complete Your Security Equipment?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Equip your security team with complete accessory kits that provide all essential equipment for professional security operations and maintaining authority in the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Accessories Kit Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Equipment Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}