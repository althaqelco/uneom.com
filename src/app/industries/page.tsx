import React from 'react';
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { 
  BuildingOfficeIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  PaperAirplaneIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve | Professional Uniforms for Every Sector | UNEOM',
  description: 'Discover specialized uniform solutions for healthcare, corporate, security, manufacturing, education, hospitality, aviation, and retail sectors across Saudi Arabia.',
  keywords: 'professional uniforms by industry, healthcare uniforms, corporate attire, security uniforms, manufacturing workwear, school uniforms Saudi Arabia',
  openGraph: {
    title: 'Industries We Serve | Professional Uniforms | UNEOM',
    description: 'Specialized uniform solutions tailored for every industry sector across Saudi Arabia.',
    url: 'https://uneom.com/industries/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og/industries-overview.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industries Overview'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Professional Uniforms | UNEOM',
    description: 'Specialized uniform solutions for every industry sector across Saudi Arabia.',
    images: ['https://uneom.com/images/og/industries-overview.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/',
    languages: {
      'ar-SA': 'https://uneom.com/ar/industries/',
      'en-US': 'https://uneom.com/industries/'
    }
  }
}

import { industries as industriesData } from '@/lib/data/industries'

const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '500+', label: 'Companies Served' },
  { number: '10', label: 'Industry Sectors' },
  { number: '50,000+', label: 'Uniforms Delivered' }
]

const iconMap: Record<string, any> = {
  'healthcare': HeartIcon,
  'hospitality': HomeModernIcon,
  'aviation': PaperAirplaneIcon,
  'corporate': BuildingOfficeIcon,
  'education': AcademicCapIcon,
  'manufacturing': WrenchScrewdriverIcon,
  'security': ShieldCheckIcon,
  'factory-industry': BuildingStorefrontIcon,
  'retail-shops': BuildingStorefrontIcon,
  'supply-manufacturing': PaperAirplaneIcon,
};

const colorMap: Record<string, string> = {
  'healthcare': 'bg-red-50 hover:bg-red-100 border-red-200',
  'hospitality': 'bg-purple-50 hover:bg-purple-100 border-purple-200',
  'aviation': 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200',
  'corporate': 'bg-blue-50 hover:bg-blue-100 border-blue-200',
  'education': 'bg-green-50 hover:bg-green-100 border-green-200',
  'manufacturing': 'bg-orange-50 hover:bg-orange-100 border-orange-200',
  'security': 'bg-gray-50 hover:bg-gray-100 border-gray-200',
  'factory-industry': 'bg-yellow-50 hover:bg-yellow-100 border-yellow-200',
  'retail-shops': 'bg-pink-50 hover:bg-pink-100 border-pink-200',
  'supply-manufacturing': 'bg-blue-50 hover:bg-blue-100 border-blue-200',
};

const iconColorMap: Record<string, string> = {
  'healthcare': 'text-red-600',
  'hospitality': 'text-purple-600',
  'aviation': 'text-indigo-600',
  'corporate': 'text-blue-600',
  'education': 'text-green-600',
  'manufacturing': 'text-orange-600',
  'security': 'text-gray-600',
  'factory-industry': 'text-yellow-600',
  'retail-shops': 'text-pink-600',
  'supply-manufacturing': 'text-blue-600',
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Specialized uniform solutions tailored for every industry sector across Saudi Arabia
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Uniforms for Every Sector
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From healthcare to hospitality, we understand the unique requirements of each industry 
              and deliver uniforms that meet the highest standards of quality, comfort, and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industriesData.map((industry, index) => {
              const Icon = iconMap[industry.id] || BuildingOfficeIcon;
              const colorClass = colorMap[industry.id] || 'bg-blue-50 border-blue-200';
              const iconColor = iconColorMap[industry.id] || 'text-blue-600';
              
              return (
                <Link key={index} href={`/industries/${industry.id}/`}>
                  <Card className={`p-8 h-full transition-all duration-300 border-2 ${colorClass} group cursor-pointer`}>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow`}>
                        <Icon className={`h-8 w-8 ${iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {industry.nameEn}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {industry.descriptionEn}
                        </p>
                        <ul className="space-y-2">
                          {industry.featuresEn.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                          Learn More
                          <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose UNEOM Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose UNEOM for Your Industry?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of each industry's unique requirements and regulations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WrenchScrewdriverIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
                <p className="text-gray-600">
                  Tailored uniform programs designed specifically for your business needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  ISO certified manufacturing ensuring consistent quality and durability.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Team's Appearance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a custom quote for your industry-specific uniform requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote/"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/contact/"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}