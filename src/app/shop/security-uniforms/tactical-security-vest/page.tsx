'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredVests = [
  {
    id: '1',
    name: 'Professional Tactical Security Vest',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/tactical-security-vest/professional/',
    category: 'Professional',
    isNew: true
  },
  {
    id: '2',
    name: 'Heavy Duty Tactical Vest',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/tactical-security-vest/heavy-duty/',
    category: 'Heavy Duty',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Lightweight Security Vest',
    image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
    price: 'Request Quote',
    href: '/shop/security-uniforms/tactical-security-vest/lightweight/',
    category: 'Lightweight'
  }
];

export default function TacticalSecurityVestPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Tactical Security Vests | Professional Security Gear | Uneom"
        description="Professional tactical security vests designed for security officers and guards. Multi-pocket tactical vests with equipment organization for security professionals in Saudi Arabia."
        canonicalUrl="https://uneom.com/shop/security-uniforms/tactical-security-vest/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="Tactical Security Vests"
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
              { label: 'Tactical Security Vest', href: '/shop/security-uniforms/tactical-security-vest' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tactical Security Vests</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional tactical security vests designed for security officers and guards. Multi-pocket tactical gear with equipment organization and professional appearance for effective security operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Tactical Quote
              </Button>
              <Button 
                href="#featured-vests"
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
                <SectionHeading subtitle="Tactical Excellence">
                  Professional Security Equipment Organization
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our tactical security vest collection is designed to provide security professionals with organized equipment storage and professional appearance. Each vest combines functionality with authority for effective security operations.
                </p>
                <p className="text-gray-600 mb-8">
                  From corporate security to event management, our tactical vests ensure security officers have quick access to essential equipment while maintaining a professional and authoritative presence.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Tactical Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Security Professional with Tactical Vest"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Vests */}
          <section id="featured-vests" className="mb-16">
            <SectionHeading subtitle="Tactical Security Vest Collection" centered>
              Professional Security Equipment
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredVests.map((vest) => (
                <ProductCard key={vest.id} product={vest} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/security-uniforms/" variant="primary" size="lg">
                View All Security Uniforms
              </Button>
            </div>
          </section>

          {/* Tactical Features */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Tactical Features" centered>
              Built for Security Professionals
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Multiple Pockets</h3>
                <p className="text-gray-600 text-sm">Organized storage for radio, flashlight, and equipment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Closures</h3>
                <p className="text-gray-600 text-sm">Velcro and zipper closures for equipment security</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comfort Fit</h3>
                <p className="text-gray-600 text-sm">Adjustable straps for comfortable all-day wear</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">ID Display</h3>
                <p className="text-gray-600 text-sm">Clear ID badge holders and name tape areas</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Security Equipment Organization?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Equip your security team with professional tactical vests that provide organized equipment storage and enhance operational efficiency while maintaining professional appearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Tactical Vest Quote
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