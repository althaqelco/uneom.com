import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'University Attire | Academic Professional Wear | Uneom',
  description: 'Premium university attire and academic professional wear for faculty, staff, and students. High-quality educational uniforms designed for higher education institutions in Saudi Arabia.',
  keywords: 'university attire, academic wear, faculty uniforms, university staff uniforms, higher education clothing, academic professional wear',
  openGraph: {
    title: 'University Attire | Academic Professional Wear | Uneom',
    description: 'Premium university attire and academic professional wear for faculty, staff, and students.',
    url: 'https://uneom.com/shop/education/university-attire/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
        width: 1200,
        height: 630,
        alt: 'University Attire by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/education/university-attire/',
    languages: {
      'en-SA': 'https://uneom.com/shop/education/university-attire/',
      'ar-SA': 'https://uneom.com/ar/shop/education/university-attire/',
      'x-default': 'https://uneom.com/shop/education/university-attire/'
    }
  }
};

export const dynamic = 'force-static';

// Featured university attire
const featuredAttire = [
  {
    id: '1',
    name: 'Faculty Professional Blazer',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/education/university-attire/faculty-blazer/',
    category: 'Faculty Wear',
    isNew: true
  },
  {
    id: '2',
    name: 'Academic Staff Uniform Set',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/education/university-attire/staff-uniform/',
    category: 'Staff Uniforms',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Graduate Student Attire',
    image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
    price: 'Request Quote',
    href: '/shop/education/university-attire/graduate-attire/',
    category: 'Student Wear'
  }
];

// University attire features
const attireFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Academic Excellence',
    description: 'Professional attire that reflects the prestige and academic standards of higher education institutions.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Professional Identity',
    description: 'Distinctive designs that establish clear professional identity for faculty, staff, and students.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Premium Quality',
    description: 'High-quality fabrics and construction that maintain professional appearance in academic settings.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Custom Branding',
    description: 'University logo integration and customization options to reflect institutional identity and values.'
  }
];

export default function UniversityAttirePage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="University Attire | Academic Professional Wear | Uneom"
        description="Premium university attire and academic professional wear for faculty, staff, and students. High-quality educational uniforms designed for higher education institutions."
        canonicalUrl="https://uneom.com/shop/education/university-attire/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="University Attire by Uneom"
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
              { label: 'University Attire', href: '/shop/education/university-attire' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">University Attire</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional academic attire designed for higher education institutions. Our university collection combines scholarly tradition with modern functionality for faculty, staff, and students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request University Quote
              </Button>
              <Button 
                href="#featured-attire"
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
                <SectionHeading subtitle="Academic Excellence">
                  Professional Attire for Higher Education
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our university attire collection is designed to reflect the prestige and academic excellence of higher education institutions. Each piece combines traditional academic values with contemporary professional styling.
                </p>
                <p className="text-gray-600 mb-8">
                  From faculty blazers to administrative uniforms, our collection ensures that every member of the university community presents a professional image that honors the institution's reputation and academic mission.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss University Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="University Professional Attire"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose Our University Attire" centered>
              Excellence in Academic Professional Wear
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {attireFeatures.map((feature, index) => (
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

          {/* Featured Attire */}
          <section id="featured-attire" className="mb-16">
            <SectionHeading subtitle="Our University Attire Collection" centered>
              Academic Professional Wear
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredAttire.map((attire) => (
                <ProductCard key={attire.id} product={attire} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/education/" variant="primary" size="lg">
                View All Educational Attire
              </Button>
            </div>
          </section>

          {/* University Categories */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="University Attire Categories" centered>
              Professional Wear for Every Role
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Faculty Attire</h3>
                <p className="text-gray-600 mb-4">Professional blazers, academic robes, and formal wear for professors and lecturers.</p>
                <Button href="/shop/education/university-attire/faculty/" variant="outline" size="sm">
                  View Faculty Wear
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Administrative Staff</h3>
                <p className="text-gray-600 mb-4">Professional uniforms for administrative and support staff across all departments.</p>
                <Button href="/shop/education/university-attire/staff/" variant="outline" size="sm">
                  View Staff Uniforms
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Student Attire</h3>
                <p className="text-gray-600 mb-4">Professional attire for graduate students, research assistants, and student representatives.</p>
                <Button href="/shop/education/university-attire/students/" variant="outline" size="sm">
                  View Student Wear
                </Button>
              </div>
            </div>
          </section>

          {/* Benefits for Universities */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg"
                  alt="University Professional Benefits"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="University Benefits">
                  Enhancing Academic Reputation
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Professional university attire contributes to institutional prestige and creates a cohesive academic environment that reflects excellence and professionalism.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enhances institutional prestige and reputation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Creates professional academic environment
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Promotes unity across departments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Supports recruitment and retention efforts
                  </li>
                </ul>
                <Button href="/services/custom-design/" variant="primary" size="lg">
                  Customize for Your University
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your University's Image?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join leading universities across Saudi Arabia who trust Uneom for professional academic attire that reflects excellence and institutional pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get University Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule University Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}