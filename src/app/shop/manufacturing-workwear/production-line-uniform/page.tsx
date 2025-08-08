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
    name: 'Standard Production Line Uniform',
    image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/production-line-uniform/standard/',
    category: 'Production Line',
    isNew: true
  },
  {
    id: '2',
    name: 'Heavy Duty Production Uniform',
    image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/production-line-uniform/heavy-duty/',
    category: 'Heavy Duty',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Clean Room Production Uniform',
    image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/production-line-uniform/clean-room/',
    category: 'Clean Room'
  }
];

const safetyFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
      </svg>
    ),
    title: 'Safety Compliance',
    description: 'Meets all industrial safety standards and regulations for manufacturing environments.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Durability',
    description: 'Heavy-duty construction designed to withstand demanding production line conditions.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Protection',
    description: 'Advanced protective features including chemical resistance and flame retardancy.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Comfort',
    description: 'Ergonomic design with moisture-wicking properties for all-day comfort during shifts.'
  }
];

export default function ProductionLineUniformPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Production Line Uniforms | Manufacturing Workwear | Uneom"
        description="Professional production line uniforms designed for manufacturing environments. Safety-compliant workwear with durability and comfort for industrial workers."
        canonicalUrl="https://uneom.com/shop/manufacturing-workwear/production-line-uniform/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
            alt="Production Line Uniforms"
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
              { label: 'Production Line Uniform', href: '/shop/manufacturing-workwear/production-line-uniform' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Production Line Uniforms</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional manufacturing uniforms designed for production line workers. Combining safety compliance, durability, and comfort for demanding industrial environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Manufacturing Quote
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
                <SectionHeading subtitle="Industrial Excellence">
                  Safety-First Manufacturing Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our production line uniforms are engineered for the demanding requirements of manufacturing environments. Each uniform combines advanced safety features with practical functionality and worker comfort.
                </p>
                <p className="text-gray-600 mb-8">
                  From automotive assembly to electronics manufacturing, our uniforms provide the protection and durability needed for safe, efficient production operations.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Manufacturing Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
                  alt="Manufacturing Worker in Uniform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Safety Features */}
          <section className="mb-16">
            <SectionHeading subtitle="Safety & Performance Features" centered>
              Built for Manufacturing Excellence
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Uniforms */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="Production Line Uniform Collection" centered>
              Professional Manufacturing Workwear
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

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Production Line Safety?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Equip your manufacturing team with professional uniforms that prioritize safety, durability, and worker comfort for optimal production efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Manufacturing Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Safety Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}