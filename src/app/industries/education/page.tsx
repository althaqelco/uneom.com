import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Education Uniforms | School & University Attire Solutions | UNEOM',
  description: 'Comprehensive education uniform solutions for schools, universities, and educational institutions in Saudi Arabia. Quality student uniforms, faculty attire, and staff clothing designed for comfort and durability.',
  keywords: 'education uniforms, school uniforms Saudi Arabia, university attire, student clothing, faculty uniforms, educational institution clothing',
  openGraph: {
    title: 'Education Uniforms | School & University Attire Solutions | UNEOM',
    description: 'Complete education uniform solutions for all educational levels in Saudi Arabia, from kindergarten to university.',
    images: ['/images/industries/education/hero-education-uniforms.jpg']}}

const educationSegments = [
  {
    icon: BookOpenIcon,
    title: 'School Uniforms',
    description: 'Complete uniform solutions for primary and secondary schools',
    features: ['Student uniforms', 'PE & sports attire', 'Seasonal variations', 'Growth-friendly designs'],
    link: '/shop/education-uniforms/'
  },
  {
    icon: AcademicCapIcon,
    title: 'University Attire',
    description: 'Professional attire for higher education institutions',
    features: ['Faculty blazers', 'Graduate attire', 'Administrative uniforms', 'Ceremonial wear'],
    link: '/shop/education-uniforms/university-attire/'
  },
  {
    icon: UserGroupIcon,
    title: 'Staff Uniforms',
    description: 'Professional uniforms for educational support staff',
    features: ['Teacher uniforms', 'Administrative attire', 'Support staff clothing', 'Maintenance uniforms'],
    link: '/shop/education-uniforms/staff-uniforms/'
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Institutional Branding',
    description: 'Custom branding solutions for educational institutions',
    features: ['Logo embroidery', 'School colors', 'Custom designs', 'Brand consistency'],
    link: '/services/custom-design/#education'
  }
]

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: 'Quality & Durability',
    description: 'High-quality fabrics designed to withstand daily wear and frequent washing while maintaining appearance.'
  },
  {
    icon: SparklesIcon,
    title: 'Comfort & Functionality',
    description: 'Comfortable designs that allow freedom of movement for active learning environments.'
  },
  {
    icon: UserGroupIcon,
    title: 'Inclusive Sizing',
    description: 'Comprehensive size ranges to accommodate all students and staff members comfortably.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Educational Focus',
    description: 'Designs that promote focus on learning while building school pride and community identity.'
  }
]

const caseStudies = [
  {
    title: 'International School Riyadh',
    description: 'Complete uniform program for 1,200 students across all grade levels',
    results: ['95% parent satisfaction', '30% reduction in morning preparation time', 'Enhanced school identity'],
    image: '/images/industries/education/case-study-1.jpg'
  },
  {
    title: 'King Saud University',
    description: 'Faculty and administrative staff uniform implementation',
    results: ['Professional appearance', 'Brand consistency', 'Staff satisfaction improvement'],
    image: '/images/industries/education/case-study-2.jpg'
  }
]

export default function EducationIndustryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/industries/" className="hover:text-blue-600">Industries</Link>
            <span>/</span>
            <span className="text-gray-900">Education</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/industries/education/hero-education-uniforms.jpg"
            alt="Education uniforms background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AcademicCapIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education Uniform Solutions
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Comprehensive uniform solutions for educational institutions across Saudi Arabia, from kindergarten to university level, designed to promote learning and institutional pride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?industry=education"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Education Quote
            </Link>
            <Link
              href="/contact/?subject=Education Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Contact Education Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Education Segments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Education Uniform Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From early childhood education to higher learning institutions, we provide comprehensive uniform solutions for every educational level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationSegments.map((segment) => (
              <div key={segment.title} className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <segment.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{segment.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{segment.description}</p>
                <ul className="space-y-2 mb-6">
                  {segment.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link
                    href={segment.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                  >
                    Explore Options
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose UNEOM for Education Uniforms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of educational institutions and provide solutions that support learning environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Education Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped educational institutions across Saudi Arabia implement successful uniform programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-white border rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Results:</h4>
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact our education uniform specialists to discuss your institution's needs and receive a customized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?industry=education"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Education Quote
            </Link>
            <Link
              href="/shop/education-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Browse Education Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}