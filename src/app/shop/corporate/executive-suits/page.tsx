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

const featuredSuits = [
  {
    id: '1',
    name: 'Premium Executive Business Suit',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/executive-suits/premium-business/',
    category: 'Premium',
    isNew: true
  },
  {
    id: '2',
    name: 'Classic Executive Suit',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/executive-suits/classic/',
    category: 'Classic',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Modern Executive Suit',
    image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/executive-suits/modern/',
    category: 'Modern'
  }
];

export default function ExecutiveSuitsPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Executive Suits | Premium Corporate Business Attire | Uneom"
        description="Premium executive suits for corporate professionals. High-quality business attire designed for executives, managers, and corporate leaders in Saudi Arabia."
        canonicalUrl="https://uneom.com/shop/corporate/executive-suits/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="Executive Suits"
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
              { label: 'Corporate', href: '/shop/corporate' },
              { label: 'Executive Suits', href: '/shop/corporate/executive-suits' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Executive Suits</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Premium executive suits designed for corporate leaders and professionals. Combining sophisticated styling, superior craftsmanship, and professional excellence for the modern business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Executive Quote
              </Button>
              <Button 
                href="#featured-suits"
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
                <SectionHeading subtitle="Executive Excellence">
                  Suits That Command Respect
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our executive suit collection is crafted for corporate leaders who demand the finest in professional attire. Each suit combines timeless elegance with contemporary styling to create a powerful professional presence.
                </p>
                <p className="text-gray-600 mb-8">
                  From boardroom meetings to client presentations, our executive suits ensure you project confidence, authority, and success in every professional setting.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Executive Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Executive Professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Suits */}
          <section id="featured-suits" className="mb-16">
            <SectionHeading subtitle="Executive Suit Collection" centered>
              Premium Corporate Attire
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredSuits.map((suit) => (
                <ProductCard key={suit.id} product={suit} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                View All Corporate Attire
              </Button>
            </div>
          </section>

          {/* Executive Features */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Executive Features" centered>
              Crafted for Leadership
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Fabrics</h3>
                <p className="text-gray-600 text-sm">Finest wool and luxury fabric blends for superior quality</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tailored Fit</h3>
                <p className="text-gray-600 text-sm">Custom tailoring for perfect fit and professional silhouette</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Timeless Style</h3>
                <p className="text-gray-600 text-sm">Classic designs that remain elegant and professional</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Corporate Branding</h3>
                <p className="text-gray-600 text-sm">Subtle company branding and customization options</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Executive Image?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in premium executive suits that reflect your leadership position and commitment to excellence. Make a powerful impression in every professional setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Executive Suit Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Executive Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}