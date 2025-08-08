import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CloudIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  SunIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Security Winter Jacket | Insulated Security Outerwear | UNEOM',
  description: 'Professional security winter jackets designed for cold weather conditions. Insulated security outerwear with professional styling for outdoor surveillance in Saudi Arabia.',
  keywords: 'security winter jacket, insulated security coat, cold weather security uniform, outdoor security jacket KSA, thermal security wear',
  openGraph: {
    title: 'Security Winter Jacket | Insulated Security Outerwear | UNEOM',
    description: 'Insulated security jackets designed for cold weather conditions with security features and professional styling for outdoor surveillance.',
    images: ['/images/security/advanced-fabrics-hero.jpg']}}

const jacketFeatures = [
  {
    icon: CloudIcon,
    title: 'Weather Protection',
    description: 'Water-resistant outer shell with thermal insulation for protection against cold and wet conditions.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Features',
    description: 'Badge holders, radio clips, and equipment attachment points integrated into the design.'
  },
  {
    icon: SparklesIcon,
    title: 'Professional Styling',
    description: 'Maintains professional security appearance while providing essential cold weather protection.'
  },
  {
    icon: SunIcon,
    title: 'Reflective Elements',
    description: 'Strategically placed reflective strips for enhanced visibility during low-light conditions.'
  }
]

const technicalSpecs = [
  {
    feature: 'Insulation',
    specification: 'Synthetic thermal fill with temperature rating suitable for Saudi winter conditions'
  },
  {
    feature: 'Water Resistance',
    specification: 'DWR (Durable Water Repellent) coating with sealed seams'
  },
  {
    feature: 'Breathability',
    specification: 'Moisture-wicking lining to prevent overheating during active duties'
  },
  {
    feature: 'Durability',
    specification: 'Reinforced stress points and heavy-duty zippers for extended use'
  },
  {
    feature: 'Visibility',
    specification: '3M reflective tape strategically placed for 360-degree visibility'
  },
  {
    feature: 'Storage',
    specification: 'Multiple secure pockets for equipment, documents, and personal items'
  }
]

export default function SecurityWinterJacketPage() {
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
            <Link href="/shop/security-uniforms/" className="hover:text-blue-600">Security Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Security Winter Jacket</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-slate-700 to-blue-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/advanced-fabrics-hero.jpg"
            alt="Security winter jacket background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CloudIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Security Winter Jacket
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto">
            Professional insulated security jackets designed for cold weather conditions, outdoor surveillance, and extended security operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=security-winter-jacket"
              className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Security Winter Jacket Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Cold Weather Security Gear
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our security winter jackets are engineered for security professionals who work in cold weather conditions. Whether conducting outdoor patrols, managing parking areas, or providing perimeter security, these jackets ensure comfort and functionality without compromising professional appearance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Thermal Insulation</h3>
                    <p className="text-gray-600">Advanced synthetic insulation for warmth without bulk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Water Resistant</h3>
                    <p className="text-gray-600">DWR coating protects against rain and moisture</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Visibility</h3>
                    <p className="text-gray-600">Reflective elements for safety during night shifts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/security/advanced-fabrics-hero.jpg"
                alt="Security winter jacket details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features for Cold Weather Security
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect designed to keep security personnel warm, dry, and professional in challenging weather conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jacketFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed specifications ensuring optimal performance in cold weather security operations.
            </p>
          </div>
          <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
            {technicalSpecs.map((spec, index) => (
              <div key={spec.feature} className={`p-6 ${index !== technicalSpecs.length - 1 ? 'border-b' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="sm:w-1/3">
                    <h3 className="font-semibold text-gray-900">{spec.feature}</h3>
                  </div>
                  <div className="sm:w-2/3 mt-2 sm:mt-0">
                    <p className="text-gray-600">{spec.specification}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing and Customization */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sizing & Customization Options
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Available in a full range of sizes with customization options to meet your organization's specific requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Size Range</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• XS to 5XL available</li>
                <li>• Regular and tall lengths</li>
                <li>• Custom sizing for special requirements</li>
                <li>• Fit consultation available</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Company logo embroidery</li>
                <li>• Custom color schemes</li>
                <li>• Additional reflective placement</li>
                <li>• Specialized pocket configurations</li>
              </ul>
            </div>
          </div>
          <Link
            href="/services/custom-design/#security-winter-jacket"
            className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors text-lg inline-flex items-center"
          >
            Discuss Custom Options
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Security Team Year-Round
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact our security uniform specialists to discuss your cold weather gear requirements and receive a customized quote for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=security-winter-jacket"
              className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Winter Gear Quote
            </Link>
            <Link
              href="/shop/security-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition-colors text-lg"
            >
              View All Security Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}