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
  title: 'Aviation Uniforms & Airline Attire in Saudi Arabia | UNEOM',
  description: 'Premium aviation uniforms for airlines and aviation companies in Saudi Arabia. Professional pilot uniforms, cabin crew attire, and ground staff workwear.',
  keywords: 'aviation uniforms Saudi Arabia, airline uniforms, pilot uniforms, cabin crew attire, flight attendant uniforms, airline workwear KSA',
  openGraph: {
    title: 'Aviation Uniforms & Airline Attire in Saudi Arabia | UNEOM',
    description: 'Premium aviation uniforms that reflect professionalism and Saudi Arabian identity for airlines and aviation companies.',
    url: 'https://uneom.com/industries/aviation/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/hero-aviation-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Aviation Uniforms'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/industries/aviation/',
    languages: {
      'en': 'https://uneom.com/industries/aviation/',
      'ar': 'https://uneom.com/ar/industries/aviation/',
    }
  }
};

export const dynamic = 'force-static';

const featuredProducts = [
  {
    id: '1',
    name: 'Captain Pilot Uniform',
    description: 'Premium uniforms for pilots with classic elegant details',
    image: '/images/portrait-of-an-adult-male-pilot-in-uniform-posing-2024-09-04-02-33-44-utc.jpg',
    price: 'From SAR 1,299',
    href: '/shop/aviation-uniforms/',
    category: 'Pilot Uniforms'
  },
  {
    id: '2',
    name: 'Flight Attendant Uniform',
    description: 'Elegant cabin crew uniforms combining comfort and style',
    image: '/images/aviation_cabin_crew_formal.jpg',
    price: 'From SAR 699',
    href: '/shop/aviation-uniforms/',
    category: 'Cabin Crew'
  },
  {
    id: '3',
    name: 'Complete Aviation Crew Set',
    description: 'Coordinated sets for all aviation crew members',
    image: '/images/aviation_airport_staff.jpg',
    price: 'From SAR 499',
    href: '/shop/aviation-uniforms/',
    category: 'Ground Staff'
  }
];

const aviationBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'International Aviation Standards',
    description: 'Uniforms designed to meet international aviation authority requirements and safety regulations.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Premium Wrinkle-Resistant Fabrics',
    description: 'High-quality fabrics that maintain a crisp, professional appearance throughout long flights.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Saudi Identity Design',
    description: 'Uniforms that reflect Saudi Arabian heritage and cultural identity with international elegance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Airline Customization',
    description: 'Full customization options including embroidery, custom colors, and unique design elements for your airline brand.'
  }
];

export default function AviationIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Aviation Uniforms & Airline Attire in Saudi Arabia | UNEOM"
        description="Premium aviation uniforms for airlines and aviation companies in Saudi Arabia."
        keywords={[
          'aviation uniforms Saudi Arabia',
          'airline uniforms',
          'pilot uniforms',
          'cabin crew attire',
          'flight attendant uniforms'
        ]}
        author="UNEOM Aviation Team"
        expertise="Aviation Uniforms & Airline Attire"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/aviation/"
        locale="en"
        trustSignals={[
          'Trusted by Leading Airlines',
          'International Aviation Standards',
          'Premium Quality Materials',
          'Custom Design Services'
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries/' },
              { label: 'Aviation', href: '/industries/aviation/' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Aviation Uniforms for Saudi Airlines
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-sky-200">
                Elevate Your Airline's Image with Premium Attire
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                UNEOM designs premium aviation uniforms that reflect Saudi Arabian identity 
                while meeting international aviation standards. We serve major and private 
                airlines across the Kingdom with elegance, comfort, and professionalism.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">✈️</span>
                  <h3 className="font-semibold mb-1">Aviation Standards</h3>
                  <p className="text-sm text-blue-200">International compliance</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">👔</span>
                  <h3 className="font-semibold mb-1">Premium Fabrics</h3>
                  <p className="text-sm text-blue-200">Wrinkle-resistant quality</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">🎨</span>
                  <h3 className="font-semibold mb-1">Custom Design</h3>
                  <p className="text-sm text-blue-200">Unique airline branding</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote/?industry=aviation"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  Get Free Aviation Quote
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-sky-900"
                >
                  Browse Aviation Uniforms
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/portrait-of-an-adult-male-pilot-in-uniform-posing-2024-09-04-02-33-44-utc.jpg"
                  alt="Professional pilot wearing UNEOM aviation uniform"
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
                <SectionHeading subtitle="Professional Aviation Attire">
                  Excellence in Aviation Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  At UNEOM, we understand that aviation uniforms reflect your company's image 
                  and contribute to the passenger experience. We design premium aviation attire 
                  that combines international elegance with distinctive Saudi Arabian character, 
                  while ensuring compliance with civil aviation standards.
                </p>
                <p className="text-gray-600 mb-8">
                  From wrinkle-resistant premium fabrics to precise embroidery and design details, 
                  every element is crafted to reflect the high level of service and 
                  distinguished Saudi hospitality.
                </p>
                <Button href="/contact/" variant="primary" size="lg">
                  Discuss Your Aviation Project
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/aviation_cabin_crew_formal.jpg"
                  alt="Premium aviation uniforms from UNEOM"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose UNEOM Aviation Uniforms" centered>
              Excellence for Aviation Professionals
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {aviationBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
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
            <SectionHeading subtitle="Our Aviation Collection" centered>
              Featured Aviation Uniforms
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
                      <span className="text-lg font-bold text-sky-600">{product.price}</span>
                      <Link href={product.href} className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/aviation-uniforms/" variant="primary" size="lg">
                View All Aviation Uniforms
              </Button>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-sky-700 to-indigo-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Airline's Brand?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a free consultation and custom quote for your aviation uniform project. 
              Join over 25 airlines across Saudi Arabia that trust UNEOM for their crew attire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote/?industry=aviation" 
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300"
              >
                Get Free Aviation Quote
              </Link>
              <Link 
                href="/contact/" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-sky-900 font-bold rounded-lg transition-all duration-300"
              >
                Contact Aviation Experts
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
