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
  title: 'School Uniforms | Premium Educational Attire for Students | Uneom',
  description: 'High-quality school uniforms designed for comfort, durability, and academic excellence. Professional educational attire for schools across Saudi Arabia with customizable options.',
  keywords: 'school uniforms, student uniforms, educational attire, school clothing, uniform suppliers Saudi Arabia, student dress code, school wear',
  openGraph: {
    title: 'School Uniforms | Premium Educational Attire for Students | Uneom',
    description: 'High-quality school uniforms designed for comfort, durability, and academic excellence.',
    url: 'https://uneom.com/shop/education/school-uniforms/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg',
        width: 1200,
        height: 630,
        alt: 'School Uniforms by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/education/school-uniforms/',
    languages: {
      'en-SA': 'https://uneom.com/shop/education/school-uniforms/',
      'ar-SA': 'https://uneom.com/ar/shop/education/school-uniforms/',
      'x-default': 'https://uneom.com/shop/education/school-uniforms/'
    }
  }
};

export const dynamic = 'force-static';

// Featured school uniforms
const featuredUniforms = [
  {
    id: '1',
    name: 'Premium School Uniform Set - Boys',
    image: '/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg',
    price: 'Request Quote',
    href: '/shop/education/school-uniforms/premium-boys-set/',
    category: 'Boys Uniforms',
    isNew: true
  },
  {
    id: '2',
    name: 'Classic School Uniform - Girls',
    image: '/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg',
    price: 'Request Quote',
    href: '/shop/education/school-uniforms/classic-girls-set/',
    category: 'Girls Uniforms',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Sports Uniform Set',
    image: '/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg',
    price: 'Request Quote',
    href: '/shop/education/school-uniforms/sports-set/',
    category: 'Sports Wear'
  }
];

// Uniform features
const uniformFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Durable Materials',
    description: 'High-quality fabrics that withstand daily wear and frequent washing while maintaining their appearance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Comfortable Fit',
    description: 'Ergonomically designed for growing children with comfortable fits that allow freedom of movement.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h2m-2 4h2m-2-8h2m-2-4h2" />
      </svg>
    ),
    title: 'Easy Care',
    description: 'Machine washable fabrics that maintain their quality and appearance with minimal maintenance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Custom Branding',
    description: 'School logo embroidery and customization options to reflect your institution\'s identity.'
  }
];

export default function SchoolUniformsPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="School Uniforms | Premium Educational Attire for Students | Uneom"
        description="High-quality school uniforms designed for comfort, durability, and academic excellence. Professional educational attire for schools across Saudi Arabia."
        canonicalUrl="https://uneom.com/shop/education/school-uniforms/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg"
            alt="School Uniforms by Uneom"
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
              { label: 'School Uniforms', href: '/shop/education/school-uniforms' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Uniforms</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Premium school uniforms designed to promote academic excellence, school pride, and student comfort. Our educational attire combines durability, style, and functionality for the modern learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request School Quote
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
                <SectionHeading subtitle="Educational Excellence">
                  Uniforms That Inspire Learning
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our school uniform collection is designed to create a positive learning environment where students can focus on their education. Each uniform is crafted with attention to comfort, durability, and the unique needs of growing children.
                </p>
                <p className="text-gray-600 mb-8">
                  From elementary to high school, our uniforms promote equality, school pride, and a professional learning atmosphere while ensuring students feel comfortable and confident throughout their school day.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss School Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg"
                  alt="Students in School Uniforms"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose Our School Uniforms" centered>
              Quality That Supports Education
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {uniformFeatures.map((feature, index) => (
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
            <SectionHeading subtitle="Our School Uniform Collection" centered>
              Premium Educational Attire
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

          {/* Benefits for Schools */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg"
                  alt="School Uniform Benefits"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="Educational Benefits">
                  More Than Just Clothing
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  School uniforms provide numerous educational and social benefits that contribute to a positive learning environment and student success.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Promotes equality and reduces social pressure
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Enhances school identity and pride
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Improves focus on learning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Simplifies morning routines for families
                  </li>
                </ul>
                <Button href="/services/custom-design/" variant="primary" size="lg">
                  Customize for Your School
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your School's Image?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join schools across Saudi Arabia who trust Uneom for high-quality, durable, and comfortable school uniforms that promote academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get School Uniform Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule School Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}