import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  ChartBarIcon,
  TrophyIcon,
  ClockIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Nationwide Retail Chain Branding Success | UNEOM Case Study',
  description: 'Discover how UNEOM transformed a nationwide retail chain\'s brand identity through strategic uniform design, achieving 40% increase in brand recognition and customer satisfaction.',
  keywords: 'retail uniform branding, nationwide retail chain, brand transformation, uniform design case study, retail brand identity, customer satisfaction improvement',
  openGraph: {
    title: 'Nationwide Retail Chain Branding Success | UNEOM Case Study',
    description: 'Strategic uniform branding transformation achieving 40% increase in brand recognition',
    images: ['/images/case-studies/nationwide-retail-branding.jpg'],
    locale: 'en_US',
    type: 'article'},
  alternates: {
    canonical: 'https://uneom.com/case-studies/nationwide-retail-branding/',
    languages: {
      'en': 'https://uneom.com/case-studies/nationwide-retail-branding/',
      'ar': 'https://uneom.com/ar/case-studies/nationwide-retail-branding/'}}}

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CaseStudy',
  headline: 'Nationwide Retail Chain Branding Success Story',
  description: 'Complete brand transformation of a major retail chain through strategic uniform design and implementation',
  image: [
    'https://uneom.com/images/case-studies/nationwide-retail-branding.jpg',
    'https://uneom.com/images/case-studies/retail-before-after.jpg',
    'https://uneom.com/images/case-studies/retail-team-uniforms.jpg'
  ],
  author: {
    '@type': 'Organization',
    name: 'UNEOM Uniforms',
    url: 'https://uneom.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'UNEOM Uniforms',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/logos/uneom-logo-en.png'
    }
  },
  datePublished: '2025-05-26',
  dateModified: '2025-05-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/case-studies/nationwide-retail-branding/'
  },
  about: {
    '@type': 'Thing',
    name: 'Retail Uniform Branding'
  },
  inLanguage: 'en-US'
}

export default function NationwideRetailBrandingCaseStudy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      
      <article className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full backdrop-blur-sm">
                  <BuildingStorefrontIcon className="w-16 h-16 text-blue-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Nationwide Retail Chain
                <span className="text-blue-300 block">Branding Transformation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                How strategic uniform design transformed a major retail chain's brand identity, achieving 40% increase in brand recognition and exceptional customer satisfaction
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-blue-600/30 rounded-full backdrop-blur-sm">Brand Transformation</span>
                <span className="px-4 py-2 bg-green-600/30 rounded-full backdrop-blur-sm">Customer Satisfaction</span>
                <span className="px-4 py-2 bg-purple-600/30 rounded-full backdrop-blur-sm">Nationwide Implementation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A leading retail chain with over 150 locations across Saudi Arabia approached UNEOM to completely redesign their brand identity through strategic uniform implementation. The challenge was to create a cohesive brand experience that would enhance customer recognition while maintaining operational efficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <BuildingStorefrontIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">150+</div>
                      <div className="text-sm text-gray-600">Store Locations</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <UserGroupIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">2,500+</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg"
                    alt="Retail chain store overview"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Challenge</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Inconsistency Issues</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Inconsistent uniform appearance across locations
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Low brand recognition among customers
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Outdated design not reflecting modern brand values
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Poor employee satisfaction with current uniforms
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Challenges</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Complex logistics for nationwide distribution
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Varying climate conditions across regions
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Different role requirements per department
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Budget constraints for large-scale implementation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Exceptional Results</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowTrendingUpIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-gray-700 font-medium">Brand Recognition Increase</div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrophyIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">Employee Satisfaction</div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
                  <div className="text-gray-700 font-medium">Faster Customer Service</div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-700 font-medium">On-Time Delivery</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Success Metrics</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Brand Impact</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Increased customer brand recall by 40%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Enhanced professional image perception</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Improved customer trust and confidence</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Operational Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Streamlined employee identification</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Reduced uniform management costs</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">Enhanced team cohesion and pride</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Brand with Strategic Uniform Design
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ready to elevate your brand identity and create a lasting impression? Let our experts develop a customized uniform strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
