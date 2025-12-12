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
    name: 'Heavy Duty Maintenance Coverall',
    image: '/images/strong-female-industrial-worker-at-a-factory-examini-SBI-335602991.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/maintenance-uniform/heavy-duty-coverall/',
    category: 'Coveralls',
    isNew: true
  },
  {
    id: '2',
    name: 'Electrical Maintenance Uniform',
    image: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/maintenance-uniform/electrical-maintenance/',
    category: 'Electrical',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Mechanical Maintenance Set',
    image: '/images/strong-female-industrial-worker-at-a-factory-examini-SBI-335602991.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/maintenance-uniform/mechanical-set/',
    category: 'Mechanical'
  }
];

export default function MaintenanceUniformPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Maintenance Uniforms | Industrial Maintenance Workwear | Uneom"
        description="Professional maintenance uniforms for industrial technicians and maintenance workers. Durable workwear designed for mechanical, electrical, and facility maintenance operations."
        canonicalUrl="https://uneom.com/shop/manufacturing-workwear/maintenance-uniform/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/strong-female-industrial-worker-at-a-factory-examini-SBI-335602991.jpg"
            alt="Maintenance Uniforms"
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
              { label: 'Manufacturing Workwear', href: '/shop/manufacturing-workwear' },
              { label: 'Maintenance Uniform', href: '/shop/manufacturing-workwear/maintenance-uniform' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Maintenance Uniforms</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional maintenance uniforms designed for industrial technicians and maintenance workers. Combining durability, functionality, and safety for demanding maintenance operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Maintenance Quote
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
                <SectionHeading subtitle="Technical Excellence">
                  Uniforms Built for Maintenance Professionals
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our maintenance uniform collection is engineered for the demanding requirements of industrial maintenance work. Each uniform provides the durability, functionality, and protection needed for technical operations.
                </p>
                <p className="text-gray-600 mb-8">
                  From electrical maintenance to mechanical repairs, our uniforms support maintenance professionals with practical features, safety compliance, and long-lasting construction.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Maintenance Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                  alt="Maintenance Professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Uniforms */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="Maintenance Uniform Collection" centered>
              Professional Technical Workwear
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/manufacturing-workwear/" variant="primary" size="lg">
                View All Manufacturing Workwear
              </Button>
            </div>
          </section>

          {/* Maintenance Features */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Maintenance-Specific Features" centered>
              Built for Technical Operations
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tool Pockets</h3>
                <p className="text-gray-600 text-sm">Multiple specialized pockets for tools and equipment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reinforced Areas</h3>
                <p className="text-gray-600 text-sm">Extra reinforcement in high-wear areas</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Electrical Safety</h3>
                <p className="text-gray-600 text-sm">Arc flash and electrical hazard protection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Chemical Resistance</h3>
                <p className="text-gray-600 text-sm">Protection against oils, chemicals, and solvents</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Equip Your Maintenance Team?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Provide your maintenance professionals with uniforms that support their technical expertise while ensuring safety and durability in demanding industrial environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Maintenance Uniform Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Technical Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}