'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const caseStudies = [
  {
    id: 'nationwide-retail-branding',
    title: 'Nationwide Retail Branding Success',
    description: 'Complete brand transformation for a major Saudi retail chain resulting in 45% sales increase across 150+ stores.',
    image: '/images/case-studies/retail-transformation.jpg',
    category: 'Retail',
    results: ['45% Sales Increase', '150+ Stores', '8 Months'],
    link: '/case-studies/nationwide-retail-branding',
    featured: true
  },
  {
    id: 'retail-brand-transformation',
    title: 'Retail Brand Transformation',
    description: 'Strategic uniform redesign and visual identity development for enhanced customer experience and employee satisfaction.',
    image: '/images/case-studies/retail-brand-transformation.jpg',
    category: 'Retail',
    results: ['78% Customer Satisfaction', '92% Employee Satisfaction', '45% Sales Growth'],
    link: '/case-studies/retail-brand-transformation',
    featured: true
  },
  {
    id: 'luxury-salon-evolution',
    title: 'Luxury Salon Evolution',
    description: 'Premium salon chain uniform redesign enhancing brand perception and customer experience across multiple locations.',
    image: '/images/case-studies/luxury-salon.jpg',
    category: 'Beauty & Wellness',
    results: ['60% Brand Recognition', '35% Customer Retention', '25% Revenue Growth'],
    link: '/case-studies/luxury-salon-evolution',
    featured: false
  },
  {
    id: 'hospital-aesthetic-clinic',
    title: 'Hospital & Aesthetic Clinic',
    description: 'Medical uniform standardization improving patient confidence and staff professionalism in healthcare settings.',
    image: '/images/case-studies/healthcare-transformation.jpg',
    category: 'Healthcare',
    results: ['85% Patient Satisfaction', '40% Staff Confidence', '30% Efficiency Gain'],
    link: '/case-studies/hospital-aesthetic-clinic',
    featured: false
  },
  {
    id: '5-star-hotel-spa',
    title: '5-Star Hotel & Spa',
    description: 'Luxury hospitality uniform program elevating guest experience and staff pride in premium hotel environment.',
    image: '/images/case-studies/hotel-spa.jpg',
    category: 'Hospitality',
    results: ['95% Guest Satisfaction', '50% Staff Pride', '20% Service Quality'],
    link: '/case-studies/5-star-hotel-spa',
    featured: false
  },
  {
    id: 'beauty-chain-standardization',
    title: 'Beauty Chain Standardization',
    description: 'Multi-location beauty chain uniform standardization creating consistent brand experience across all outlets.',
    image: '/images/case-studies/beauty-chain.jpg',
    category: 'Beauty & Wellness',
    results: ['70% Brand Consistency', '45% Customer Recognition', '30% Staff Satisfaction'],
    link: '/case-studies/beauty-chain-standardization',
    featured: false
  }
];

const categories = ['All', 'Retail', 'Healthcare', 'Hospitality', 'Beauty & Wellness'];

export default function CaseStudiesResourcePage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Uniform Success Case Studies | Real Results & Transformations | Uneom Resources"
        description="Explore real-world uniform transformation case studies. See how organizations achieved measurable results with professional uniform solutions from Uneom."
        canonicalUrl="https://uneom.com/resources/case-studies/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/resources/case-studies-hero.jpg"
            alt="Uniform Case Studies"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Resources', href: '/resources' },
              { label: 'Case Studies', href: '/resources/case-studies' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Success Stories & Case Studies
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-3xl">
              Discover how organizations across Saudi Arabia have transformed their brand image and achieved measurable results through strategic uniform solutions.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <span>Real Results</span>
              <span>•</span>
              <span>Proven Success</span>
              <span>•</span>
              <span>Measurable Impact</span>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading 
                subtitle="Real transformations, measurable results, and proven success stories"
                centered
              >
                Transforming Organizations Through Professional Uniforms
              </SectionHeading>
              
              <p className="text-gray-700 mb-8">
                Our case studies showcase the tangible impact of professional uniform solutions across various industries. 
                From retail transformations to healthcare improvements, see how strategic uniform programs drive real business results.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-gray-700">Successful Projects</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">45%</div>
                  <div className="text-gray-700">Average Sales Increase</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">90%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
                  <div className="text-gray-700">Industries Served</div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="mb-16">
            <SectionHeading 
              subtitle="Our most impactful transformations with exceptional results"
            >
              Featured Success Stories
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {caseStudies.filter(study => study.featured).map((study) => (
                <Link 
                  key={study.id}
                  href={study.link}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.results.map((result, index) => (
                        <span 
                          key={index}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary-600 font-medium">
                      Read Case Study
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* All Case Studies */}
          <section className="mb-16">
            <SectionHeading 
              subtitle="Comprehensive collection of transformation stories across industries"
            >
              All Case Studies
            </SectionHeading>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 hover:border-primary-500 hover:text-primary-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Link 
                  key={study.id}
                  href={study.link}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {study.results.slice(0, 2).map((result, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      View Details
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Industry Impact */}
          <section className="mb-16">
            <SectionHeading 
              subtitle="Measurable results across different industry sectors"
            >
              Industry Impact Overview
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">Retail</h3>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">45%</div>
                  <div className="text-blue-700 text-sm">Average Sales Increase</div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-green-900">Healthcare</h3>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-green-700 text-sm">Patient Satisfaction</div>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-purple-900">Hospitality</h3>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-green-700 text-sm">Guest Satisfaction</div>
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3 text-orange-900">Beauty</h3>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-orange-600">70%</div>
                  <div className="text-orange-700 text-sm">Brand Consistency</div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Factors */}
          <section className="mb-16">
            <SectionHeading 
              subtitle="Key elements that drive successful uniform transformations"
            >
              What Makes These Transformations Successful
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                <p className="text-gray-700">
                  Comprehensive analysis and strategic approach ensure alignment with business objectives and brand values.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Employee Engagement</h3>
                <p className="text-gray-700">
                  Active involvement of staff throughout the process ensures buy-in and successful adoption of new uniforms.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
                <p className="text-gray-700">
                  Premium materials and superior construction ensure durability and maintain professional appearance over time.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <SectionHeading 
              subtitle="What our clients say about their transformation experience"
            >
              Client Testimonials
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">Ahmed Al-Rashid</div>
                    <div className="text-gray-600 text-sm">Retail Chain Director</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The transformation exceeded our expectations. Our sales increased by 45% and employee satisfaction reached an all-time high. Uneom's strategic approach made all the difference."
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">Dr. Sarah Al-Mahmoud</div>
                    <div className="text-gray-600 text-sm">Healthcare Administrator</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Patient confidence improved dramatically after implementing the new uniform program. Our staff feels more professional and the overall atmosphere is much more positive."
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12">
            <div className="bg-primary-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Join the organizations that have transformed their brand image and achieved measurable results. Let's discuss how we can help you achieve similar success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Start Your Transformation
                </Button>
                <Button href="/quote" variant="outline" size="lg">
                  Request a Quote
                </Button>
              </div>
            </div>
          </section>

        </Container>
      </main>
    </div>
  );
}