import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Hospitality Uniforms | Hotel & Restaurant Attire in Saudi Arabia | UNEOM',
  description: 'Premium hospitality uniforms for hotels and restaurants in Saudi Arabia. Elegant designs that enhance your brand while ensuring staff comfort and functionality.',
  keywords: 'hospitality uniforms Saudi Arabia, hotel uniforms Riyadh, restaurant uniforms, hotel staff attire, hospitality workwear KSA',
  openGraph: {
    title: 'Hospitality Uniforms | Hotel & Restaurant Attire in Saudi Arabia | UNEOM',
    description: 'Premium hospitality uniforms that enhance your brand and ensure staff comfort in Saudi Arabia\'s hospitality sector.',
    url: 'https://uneom.com/industries/hospitality/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/hero-hospitality-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Hospitality Uniforms'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/industries/hospitality/',
    languages: {
      'en': 'https://uneom.com/industries/hospitality/',
      'ar': 'https://uneom.com/ar/industries/hospitality/',
    }
  }
};

export const dynamic = 'force-static';

const featuredProducts = [
  {
    id: '1',
    name: 'Luxury Hotel Uniforms',
    description: 'Elegant uniforms for 5-star hotels and luxury resorts',
    image: '/images/hospitality_uniform_formal.jpg',
    price: 'From SAR 399',
    href: '/shop/hospitality-attire/luxury-hotel-uniform/',
    category: 'Hotel Uniforms'
  },
  {
    id: '2',
    name: 'Restaurant Staff Uniforms',
    description: 'Professional attire for restaurant and F&B service',
    image: '/images/hospitality_uniform_waiter.jpg',
    price: 'From SAR 249',
    href: '/shop/hospitality-attire/restaurant-uniform/',
    category: 'Restaurant Uniforms'
  },
  {
    id: '3',
    name: 'Concierge & Front Desk',
    description: 'Sophisticated uniforms for guest-facing staff',
    image: '/images/hospitality_uniform_concierge.jpg',
    price: 'From SAR 349',
    href: '/shop/hospitality-attire/concierge-uniform/',
    category: 'Front Desk'
  }
];

const hospitalityBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Brand Enhancement',
    description: 'Uniforms that reflect your establishment\'s unique style and elevate your brand presence.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'All-Day Comfort',
    description: 'Breathable fabrics and ergonomic designs ensure comfort during long service hours.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Easy Maintenance',
    description: 'Stain-resistant fabrics and easy-care materials that maintain appearance throughout service.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Team Unity',
    description: 'Coordinated uniforms that create a cohesive team identity and professional appearance.'
  }
];

export default function HospitalityIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Hospitality Uniforms | Hotel & Restaurant Attire in Saudi Arabia | UNEOM"
        description="Premium hospitality uniforms for hotels and restaurants in Saudi Arabia."
        keywords={[
          'hospitality uniforms Saudi Arabia',
          'hotel uniforms Riyadh',
          'restaurant uniforms',
          'hotel staff attire',
          'hospitality workwear KSA'
        ]}
        author="UNEOM Hospitality Team"
        expertise="Hospitality Uniforms & Hotel Attire"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/hospitality/"
        locale="en"
        trustSignals={[
          'Trusted by Leading Hotels in Saudi Arabia',
          'Premium Quality Materials',
          'Custom Design Services',
          'Fast Delivery Nationwide'
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries/' },
              { label: 'Hospitality', href: '/industries/hospitality/' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hospitality Uniforms for Hotels & Restaurants
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-amber-200">
                Elevate Your Guest Experience with Premium Staff Attire
              </h2>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                UNEOM provides exceptional hospitality uniforms that reflect Saudi Arabian hospitality 
                and international elegance. From luxury hotels to fine dining restaurants, 
                we help you create memorable guest experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">⭐</span>
                  <h3 className="font-semibold mb-1">Luxury Designs</h3>
                  <p className="text-sm text-orange-200">Premium aesthetics</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">👔</span>
                  <h3 className="font-semibold mb-1">Custom Branding</h3>
                  <p className="text-sm text-orange-200">Your identity, our craft</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">✨</span>
                  <h3 className="font-semibold mb-1">Stain Resistant</h3>
                  <p className="text-sm text-orange-200">Always looking fresh</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote/?industry=hospitality"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  Get Free Hospitality Quote
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-amber-900"
                >
                  Browse Collection
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hospitality_uniform_formal.jpg"
                  alt="Hospitality staff wearing UNEOM premium uniforms"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Introduction Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="Premium Hospitality Attire">
                  Excellence in Hospitality Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  At UNEOM, we understand that hospitality uniforms are a crucial part of your guest experience. 
                  Our collection combines Saudi Arabian elegance with international hospitality standards, 
                  creating uniforms that make a lasting impression.
                </p>
                <p className="text-gray-600 mb-8">
                  From five-star hotels to boutique restaurants, we provide customized uniform solutions 
                  that reflect your establishment's unique character while ensuring staff comfort 
                  and functionality throughout their service.
                </p>
                <Button href="/contact/" variant="primary" size="lg">
                  Discuss Your Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hospitality_uniform_concierge.jpg"
                  alt="Premium hospitality uniforms from UNEOM"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose UNEOM Hospitality Uniforms" centered>
              Benefits for Your Establishment
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {hospitalityBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="Our Hospitality Collection" centered>
              Featured Hospitality Uniforms
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-amber-600">{product.price}</span>
                      <Link href={product.href} className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/hospitality-attire/" variant="primary" size="lg">
                View All Hospitality Products
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-amber-700 to-orange-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Hospitality Team?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a free consultation and custom quote for your hospitality uniform needs. 
              Join leading hotels and restaurants across Saudi Arabia that trust UNEOM.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote/?industry=hospitality" 
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact/" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-900 font-bold rounded-lg transition-all duration-300"
              >
                Contact Us Now
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
