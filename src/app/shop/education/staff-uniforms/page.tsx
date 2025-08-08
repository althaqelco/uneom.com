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

const featuredUniforms = [
  {
    id: '1',
    name: 'Teacher Professional Uniform',
    image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
    price: 'Request Quote',
    href: '/shop/education/staff-uniforms/teacher-uniform/',
    category: 'Teacher Wear',
    isNew: true
  },
  {
    id: '2',
    name: 'Administrator Suit Set',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/education/staff-uniforms/admin-suit/',
    category: 'Administrative',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Support Staff Uniform',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/education/staff-uniforms/support-staff/',
    category: 'Support Staff'
  }
];

export default function StaffUniformsPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Educational Staff Uniforms | Professional School Staff Attire | Uneom"
        description="Professional uniforms for educational staff including teachers, administrators, and support personnel. High-quality staff attire designed for schools and educational institutions."
        canonicalUrl="https://uneom.com/shop/education/staff-uniforms/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg"
            alt="Educational Staff Uniforms"
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
              { label: 'Education', href: '/shop/education' },
              { label: 'Staff Uniforms', href: '/shop/education/staff-uniforms' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Educational Staff Uniforms</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional uniforms designed for educational staff including teachers, administrators, and support personnel. Creating a unified, professional appearance that reflects educational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Staff Quote
              </Button>
              <Button 
                href="#featured-uniforms"
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
                <SectionHeading subtitle="Professional Excellence">
                  Uniforms That Inspire Confidence
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our educational staff uniform collection is designed to create a professional environment where educators can focus on teaching and learning. Each uniform reflects the dignity and importance of the educational profession.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Staff Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Professional Educational Staff"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Uniforms */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="Our Staff Uniform Collection" centered>
              Professional Educational Attire
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/education/" variant="primary" size="lg">
                View All Educational Uniforms
              </Button>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Staff's Professional Image?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join educational institutions across Saudi Arabia who trust Uneom for professional staff uniforms that reflect educational excellence and institutional pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Staff Uniform Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}