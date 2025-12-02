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
  title: 'Healthcare Uniforms & Medical Scrubs in Saudi Arabia | UNEOM',
  description: 'Premium healthcare uniforms and medical scrubs for hospitals and clinics in Saudi Arabia. Antimicrobial fabrics, comfortable designs, and fast delivery across the Kingdom.',
  keywords: 'healthcare uniforms Saudi Arabia, medical scrubs Riyadh, hospital uniforms, nursing uniforms, lab coats, antimicrobial medical wear, healthcare workwear KSA',
  openGraph: {
    title: 'Healthcare Uniforms & Medical Scrubs in Saudi Arabia | UNEOM',
    description: 'Premium healthcare uniforms designed for Saudi Arabia\'s medical professionals. Quality, comfort, and antimicrobial protection.',
    url: 'https://uneom.com/industries/healthcare/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/hero-healthcare-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Healthcare Uniforms'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/industries/healthcare/',
    languages: {
      'en': 'https://uneom.com/industries/healthcare/',
      'ar': 'https://uneom.com/ar/industries/healthcare/',
    }
  }
};

export const dynamic = 'force-static';

const featuredProducts = [
  {
    id: '1',
    name: 'Premium Medical Scrubs',
    description: 'Comfortable and functional designs for nurses and medical staff',
    image: '/images/products/scrubs-set.jpg',
    price: 'From SAR 189',
    href: '/shop/medical-scrubs/premium-medical-scrubs/',
    category: 'Medical Scrubs'
  },
  {
    id: '2',
    name: 'Professional Lab Coats',
    description: 'Premium lab coats for doctors and consultants',
    image: '/images/products/lab-coat.jpg',
    price: 'From SAR 249',
    href: '/shop/medical-scrubs/professional-lab-coat/',
    category: 'Lab Coats'
  },
  {
    id: '3',
    name: 'Nursing Uniforms',
    description: 'Elegant and practical nursing uniforms',
    image: '/images/products/nursing-uniform.jpg',
    price: 'From SAR 169',
    href: '/shop/medical-scrubs/nursing-scrubs/',
    category: 'Nursing Uniforms'
  }
];

const healthcareBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Antimicrobial Protection',
    description: 'Advanced antimicrobial treatments that inhibit bacterial growth and maintain hygiene standards in healthcare environments.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Moisture Management',
    description: 'Moisture-wicking fabrics keep healthcare professionals dry and comfortable during demanding shifts.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Comfort & Durability',
    description: 'Ergonomic designs with reinforced stress points ensure lasting comfort and professional appearance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Compliance Ready',
    description: 'All uniforms meet Saudi healthcare regulations and international standards for medical environments.'
  }
];

const fabricTechnologies = [
  {
    name: 'Antimicrobial Treatment',
    description: 'Silver-ion technology provides lasting protection against bacteria and odors',
    image: '/images/uneom_antimicrobial_treatment.webp'
  },
  {
    name: 'Moisture Wicking',
    description: 'Advanced polyester blends that move moisture away from the skin',
    image: '/images/uneom_moisture_wicking.webp'
  },
  {
    name: 'Stain Release',
    description: 'Special fabric treatments for easier cleaning and maintained appearance',
    image: '/images/fabric-cotton-blends.webp'
  }
];

export default function HealthcareIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Healthcare Uniforms & Medical Scrubs in Saudi Arabia | UNEOM"
        description="Premium healthcare uniforms and medical scrubs for hospitals and clinics in Saudi Arabia. Antimicrobial fabrics and comfortable designs."
        keywords={[
          'healthcare uniforms Saudi Arabia',
          'medical scrubs Riyadh',
          'hospital uniforms',
          'nursing uniforms',
          'lab coats',
          'antimicrobial medical wear'
        ]}
        author="UNEOM Healthcare Team"
        expertise="Healthcare Uniforms & Medical Scrubs"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/healthcare/"
        locale="en"
        trustSignals={[
          'ISO 9001 Certified for Medical Quality',
          'Trusted by 200+ Healthcare Facilities',
          'Certified Antimicrobial Fabrics',
          'Fast Delivery Across Saudi Arabia'
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-teal-800 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries/' },
              { label: 'Healthcare', href: '/industries/healthcare/' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Healthcare Uniforms & Medical Scrubs in Saudi Arabia
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                The Most Trusted Medical Uniforms in the Kingdom
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                UNEOM provides comprehensive healthcare uniforms designed specifically for Saudi Arabia's climate 
                and strict healthcare standards. We serve over 200 hospitals and clinics across the Kingdom.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">🦠</span>
                  <h3 className="font-semibold mb-1">Antimicrobial Fabrics</h3>
                  <p className="text-sm text-blue-200">Advanced infection protection</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">💧</span>
                  <h3 className="font-semibold mb-1">Moisture Wicking</h3>
                  <p className="text-sm text-blue-200">Comfort in Saudi climate</p>
                </div>
                
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mb-2 block">🧽</span>
                  <h3 className="font-semibold mb-1">Easy Care</h3>
                  <p className="text-sm text-blue-200">Stain resistant & quick dry</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote/?industry=healthcare"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  Get Free Healthcare Quote
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Browse Medical Products
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-healthcare-uniforms.jpg"
                  alt="Healthcare professionals wearing UNEOM medical uniforms"
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
                <SectionHeading subtitle="Professional Medical Attire">
                  Excellence in Healthcare Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  At UNEOM, we understand that healthcare professionals need uniforms that work as hard as they do. 
                  Our healthcare uniform collection combines advanced fabric technology with professional design 
                  to create medical attire that meets the demanding requirements of Saudi healthcare facilities.
                </p>
                <p className="text-gray-600 mb-8">
                  From antimicrobial treatments that maintain hygiene standards to moisture-wicking fabrics 
                  that ensure comfort during long shifts, every detail is designed with healthcare professionals in mind.
                </p>
                <Button href="/contact/" variant="primary" size="lg">
                  Discuss Your Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/scrubs-set.jpg"
                  alt="Premium medical scrubs from UNEOM"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose UNEOM Healthcare Uniforms" centered>
              Advanced Features for Healthcare Professionals
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {healthcareBenefits.map((benefit, index) => (
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
            <SectionHeading subtitle="Our Healthcare Collection" centered>
              Featured Medical Uniforms
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
              <Button href="/shop/medical-scrubs/" variant="primary" size="lg">
                View All Healthcare Products
              </Button>
            </div>
          </section>

          {/* Fabric Technologies */}
          <section className="mb-16">
            <SectionHeading subtitle="Advanced Fabric Technology" centered>
              Innovation in Medical Textiles
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {fabricTechnologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Healthcare Uniforms?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a free consultation and custom quote for your healthcare facility. 
              Join hundreds of healthcare facilities across Saudi Arabia that trust UNEOM.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote/?industry=healthcare" 
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <Link 
                href="/contact/" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-lg transition-all duration-300"
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
