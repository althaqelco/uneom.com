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
  title: 'Corporate Uniforms & Business Attire in Saudi Arabia | UNEOM',
  description: 'Premium corporate uniforms and professional business attire for companies in Saudi Arabia. Enhance your brand identity with quality uniforms that reflect professionalism.',
  keywords: 'corporate uniforms Saudi Arabia, business attire Riyadh, office uniforms, professional workwear, company uniforms KSA, executive suits',
  openGraph: {
    title: 'Corporate Uniforms & Business Attire in Saudi Arabia | UNEOM',
    description: 'Premium corporate uniforms that enhance brand identity and reflect professionalism in the workplace.',
    url: 'https://uneom.com/industries/corporate/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/hero-corporate-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Corporate Uniforms'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/industries/corporate/',
    languages: {
      'en': 'https://uneom.com/industries/corporate/',
      'ar': 'https://uneom.com/ar/industries/corporate/',
    }
  }
};

export const dynamic = 'force-static';

const featuredProducts = [
  {
    id: '1',
    name: 'Executive Business Suits',
    description: 'Premium suits for executives and management',
    image: '/images/products/corporate-suit-executive.jpg',
    price: 'From SAR 799',
    href: '/shop/corporate-attire/business-suits/',
    category: 'Executive Wear'
  },
  {
    id: '2',
    name: 'Professional Office Uniforms',
    description: 'Elegant office attire for all staff levels',
    image: '/images/products/corporate-office-uniform.jpg',
    price: 'From SAR 299',
    href: '/shop/corporate-attire/office-uniforms/',
    category: 'Office Uniforms'
  },
  {
    id: '3',
    name: 'Corporate Polo Collection',
    description: 'Smart casual corporate wear for modern workplaces',
    image: '/images/products/corporate-polo.jpg',
    price: 'From SAR 149',
    href: '/shop/corporate-attire/',
    category: 'Smart Casual'
  }
];

const corporateBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Brand Consistency',
    description: 'Unified corporate appearance that strengthens your brand identity and creates a professional impression.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Professional Image',
    description: 'Enhance your company\'s professional image with high-quality uniforms that reflect excellence.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Employee Satisfaction',
    description: 'Quality uniforms that employees are proud to wear, boosting morale and team unity.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cost Efficiency',
    description: 'Bulk ordering options and durable materials provide long-term cost savings for your organization.'
  }
];

export default function CorporateIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Corporate Uniforms & Business Attire in Saudi Arabia | UNEOM"
        description="Premium corporate uniforms and professional business attire for companies in Saudi Arabia."
        keywords={[
          'corporate uniforms Saudi Arabia',
          'business attire Riyadh',
          'office uniforms',
          'professional workwear',
          'company uniforms KSA'
        ]}
        author="UNEOM Corporate Solutions Team"
        expertise="Corporate Uniforms & Business Attire"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/corporate/"
        locale="en"
        trustSignals={[
          'Trusted by 500+ Companies in Saudi Arabia',
          'Premium Quality Materials',
          'Custom Branding Options',
          'Fast Delivery Across the Kingdom'
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries/' },
              { label: 'Corporate', href: '/industries/corporate/' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Corporate Uniforms & Professional Business Attire
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                Elevate Your Brand with Premium Corporate Wear
              </h2>
              
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                UNEOM delivers high-quality corporate uniforms that enhance your company's professional image. 
                From executive suits to office attire, we help Saudi businesses create a unified, professional appearance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">👔</span>
                  <h3 className="font-semibold mb-1">Executive Quality</h3>
                  <p className="text-sm text-gray-300">Premium fabrics & tailoring</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">🏢</span>
                  <h3 className="font-semibold mb-1">Brand Integration</h3>
                  <p className="text-sm text-gray-300">Custom logos & colors</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">⚡</span>
                  <h3 className="font-semibold mb-1">Fast Delivery</h3>
                  <p className="text-sm text-gray-300">Quick turnaround times</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote/?industry=corporate"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  Get Free Corporate Quote
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Browse Corporate Collection
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Business professionals wearing UNEOM corporate uniforms"
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
                <SectionHeading subtitle="Professional Corporate Attire">
                  Excellence in Corporate Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  At UNEOM, we understand that corporate uniforms are more than just clothing—they're a reflection 
                  of your company's values, professionalism, and brand identity. Our corporate collection is designed 
                  to help Saudi businesses make a lasting impression.
                </p>
                <p className="text-gray-600 mb-8">
                  From boardroom-ready executive suits to comfortable yet professional office wear, 
                  every piece in our collection is crafted with attention to detail, quality materials, 
                  and the unique needs of Saudi businesses.
                </p>
                <Button href="/contact/" variant="primary" size="lg">
                  Discuss Your Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/corporate-suit-executive.jpg"
                  alt="Premium corporate uniforms from UNEOM"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose UNEOM Corporate Uniforms" centered>
              Benefits for Your Business
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {corporateBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
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
            <SectionHeading subtitle="Our Corporate Collection" centered>
              Featured Corporate Uniforms
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
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                      <Link href={product.href} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate-attire/" variant="primary" size="lg">
                View All Corporate Products
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-gray-800 to-blue-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Corporate Image?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a free consultation and custom quote for your corporate uniform needs. 
              Join over 500 companies across Saudi Arabia that trust UNEOM for their professional attire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote/?industry=corporate" 
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact/" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-lg transition-all duration-300"
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
