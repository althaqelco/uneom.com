import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Manufacturing Workwear | Industrial Uniforms & Safety Clothing | UNEOM',
  description: 'Professional manufacturing workwear and industrial uniforms for factories, production lines, and manufacturing facilities in Saudi Arabia. Safety-focused, durable, and comfortable work clothing solutions.',
  keywords: 'manufacturing workwear, industrial uniforms Saudi Arabia, factory clothing, production line uniforms, safety workwear, manufacturing attire',
  openGraph: {
    title: 'Manufacturing Workwear | Industrial Uniforms & Safety Clothing | UNEOM',
    description: 'Complete manufacturing workwear solutions designed for safety, durability, and comfort in industrial environments.',
    images: ['/images/manufacturing/hero-manufacturing-workwear.jpg']}}

const workwearCategories = [
  {
    icon: CogIcon,
    title: 'Production Line Uniforms',
    description: 'Specialized uniforms for production line workers and operators',
    features: ['Machine-safe designs', 'Easy movement', 'Pocket configurations', 'Identification systems'],
    link: '/shop/manufacturing-workwear/production-line-uniforms/',
    image: '/images/manufacturing/production-line-uniforms.jpg'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Maintenance Workwear',
    description: 'Durable clothing for maintenance and technical staff',
    features: ['Tool pockets', 'Reinforced areas', 'Stain resistance', 'Comfort fit'],
    link: '/shop/manufacturing-workwear/maintenance-uniforms/',
    image: '/images/manufacturing/maintenance-workwear.jpg'
  },
  {
    icon: UserGroupIcon,
    title: 'Supervisor Attire',
    description: 'Professional attire for supervisors and management',
    features: ['Professional appearance', 'Comfort for long shifts', 'Identification features', 'Quality materials'],
    link: '/shop/manufacturing-workwear/supervisor-uniforms/',
    image: '/images/manufacturing/supervisor-attire.jpg'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Safety Workwear',
    description: 'High-visibility and protective clothing for safety compliance',
    features: ['High-visibility materials', 'Safety compliance', 'Reflective strips', 'Protective features'],
    link: '/shop/manufacturing-workwear/safety-workwear/',
    image: '/images/manufacturing/safety-workwear.jpg'
  }
]

const safetyFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Safety Compliance',
    description: 'All workwear meets international safety standards and regulations for manufacturing environments.'
  },
  {
    icon: CogIcon,
    title: 'Durability',
    description: 'Heavy-duty construction designed to withstand the demands of industrial work environments.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Functionality',
    description: 'Practical designs with tool pockets, reinforced areas, and features that support daily work tasks.'
  },
  {
    icon: UserGroupIcon,
    title: 'Comfort',
    description: 'Ergonomic designs that provide comfort during long shifts and physical work activities.'
  }
]

const industries = [
  {
    name: 'Automotive Manufacturing',
    description: 'Specialized workwear for automotive production facilities',
    applications: ['Assembly lines', 'Quality control', 'Maintenance', 'Management']
  },
  {
    name: 'Food Processing',
    description: 'Hygienic workwear for food manufacturing environments',
    applications: ['Production areas', 'Packaging', 'Quality assurance', 'Cleaning staff']
  },
  {
    name: 'Chemical Manufacturing',
    description: 'Protective workwear for chemical processing facilities',
    applications: ['Chemical handling', 'Laboratory work', 'Safety protocols', 'Emergency response']
  },
  {
    name: 'Electronics Manufacturing',
    description: 'Anti-static and clean room compatible workwear',
    applications: ['Clean rooms', 'Assembly', 'Testing', 'Packaging']
  }
]

export default function ManufacturingWorkwearPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/shop/" className="hover:text-blue-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900">Manufacturing Workwear</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-gray-800 to-blue-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/manufacturing/hero-manufacturing-workwear.jpg"
            alt="Manufacturing workwear background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CogIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Manufacturing Workwear Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Professional workwear designed for manufacturing environments, combining safety, durability, and comfort for industrial workers across Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=manufacturing-workwear"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Manufacturing Quote
            </Link>
            <Link
              href="/contact/?subject=Manufacturing Workwear Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Workwear Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Manufacturing Workwear Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From production line workers to management, we provide specialized workwear for every role in manufacturing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workwearCategories.map((category) => (
              <div key={category.title} className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <category.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{category.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Link
                      href={category.link}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                    >
                      Explore Category
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Safety & Quality Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every piece of manufacturing workwear is designed with safety, durability, and worker comfort in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized workwear solutions for various manufacturing sectors across Saudi Arabia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Applications:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.applications.map((app, index) => (
                      <div key={index} className="flex items-center text-gray-700 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {app}
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
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your Manufacturing Team
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our manufacturing workwear specialists to discuss your facility's needs and receive a customized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=manufacturing-workwear"
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Manufacturing Quote
            </Link>
            <Link
              href="/industries/manufacturing/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              Learn About Manufacturing Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}