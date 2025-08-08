import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BoltIcon,
  EyeIcon,
  CloudIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  CogIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Tactical Security Patrol Jacket | Advanced Security Outerwear | UNEOM',
  description: 'UNEOM\'s tactical security patrol jacket provides superior protection and functionality for security patrol operations in Saudi Arabia. Advanced tactical outerwear designed for professional security teams.',
  keywords: 'tactical security jacket, security patrol jacket, tactical outerwear, security patrol gear, Saudi security jackets, tactical security clothing UNEOM, professional security jacket',
  openGraph: {
    title: 'Tactical Security Patrol Jacket | UNEOM',
    description: 'Advanced tactical security patrol jacket designed for professional security patrol operations in Saudi Arabia\'s security sector.',
    images: ['/images/products/security/tactical-security-jacket-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Tactical Protection',
    description: 'Reinforced construction with tactical-grade materials providing protection against environmental hazards and operational risks.'
  },
  {
    icon: BoltIcon,
    title: 'Rapid Access',
    description: 'Strategic pocket placement and quick-access features for essential equipment and communication devices during patrols.'
  },
  {
    icon: EyeIcon,
    title: 'Professional Visibility',
    description: 'High-visibility elements and professional appearance maintaining authority while ensuring safety in various lighting conditions.'
  },
  {
    icon: CloudIcon,
    title: 'All-Weather Performance',
    description: 'Weather-resistant materials and breathable design for comfort and protection in Saudi Arabia\'s diverse climate conditions.'
  }
]

const specifications = [
  { label: 'Material Composition', value: 'Tactical-grade ripstop fabric with water-resistant coating and reinforced stress points' },
  { label: 'Protection Features', value: 'Wind and water resistant, UV protection, abrasion-resistant panels' },
  { label: 'Weight', value: '0.9-1.3 kg depending on size and configuration' },
  { label: 'Size Range', value: 'XS - 4XL with adjustable cuffs and hem for optimal fit' },
  { label: 'Color Options', value: 'Tactical Black, Navy Blue, Charcoal Gray, Olive Drab (custom colors available)' },
  { label: 'Pocket Configuration', value: '8-12 tactical pockets, radio loops, pen holders, badge attachments' },
  { label: 'Special Features', value: 'Concealed carry compatible, removable patches, ventilation zippers, reflective strips' }
]

const includedItems = [
  'Tactical Security Patrol Jacket',
  'Removable Patch System',
  'Adjustable Cuff Straps',
  'Reflective Safety Strips',
  'Radio Loop Attachments',
  'UNEOM Tactical Care Guide',
  'Professional Sizing Chart'
]

const idealForOperations = [
  { name: 'Security Patrols', icon: EyeIcon },
  { name: 'Mobile Security', icon: BoltIcon },
  { name: 'Event Security', icon: CogIcon },
  { name: 'Facility Security', icon: ShieldCheckIcon },
  { name: 'Emergency Response', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'Professional Tactical Vest',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'From SAR 350'
  },
  {
    name: 'Security Patrol Pants',
    image: '/images/products/security/security-patrol-pants-main.jpg',
    href: '/shop/security-uniforms/security-patrol-pants/tactical/',
    price: 'From SAR 180'
  },
  {
    name: 'Tactical Accessories Kit',
    image: '/images/products/security/tactical-accessories-kit.jpg',
    href: '/shop/security-accessories/tactical-kit/',
    price: 'From SAR 200'
  }
]

export default function TacticalSecurityPatrolJacketPage() {
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
            <span className="text-gray-900">Tactical Security Patrol Jacket</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/security/tactical-security-jacket-main.jpg"
                  alt="Tactical Security Patrol Jacket"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-gray-800 cursor-pointer">
                    <Image
                      src={`/images/products/security/tactical-security-jacket-detail-${i}.jpg`}
                      alt={`Tactical security jacket detail ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="ml-2 text-sm text-gray-600">(Tactical Performance Proven)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tactical Security Patrol Jacket
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Elevate your security patrol operations with UNEOM's tactical security patrol jacket. Designed for professional security teams in Saudi Arabia, this advanced tactical outerwear combines superior protection, functionality, and professional appearance for demanding patrol duties.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">From SAR 320</span>
                <span className="text-lg text-gray-500 ml-2">per jacket</span>
              </div>
              
              <div className="p-4 bg-gray-50 border-l-4 border-gray-800 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      <strong>Tactical-Grade Performance:</strong> Our patrol jacket meets tactical standards for professional security operations. <Link href="/resources/tactical-outerwear-standards" className="font-medium underline hover:text-gray-900">View tactical outerwear standards</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=tactical-security-patrol-jacket"
                  className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex-1 text-center"
                >
                  Get Patrol Team Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-gray-600" />
                  Add to Patrol Kit
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Tactical Advantages:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Tactical Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Rapid Access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Professional Visibility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>All-Weather Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Designed for Professional Security Patrols
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Operations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Security Patrol Operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForOperations.map((operation, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <operation.icon className="h-10 w-10 text-gray-800 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{operation.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tactical Patrol Jacket Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tactical Design Features</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{spec.label}:</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Patrol Package Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">UNEOM Tactical Promise</h4>
                <p className="text-sm text-gray-600">
                  Every tactical patrol jacket is designed with professional security operations in mind, providing reliable protection and functionality for demanding patrol duties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Your Tactical Patrol Kit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">{product.name}</h3>
                  <p className="text-gray-800 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
                  >
                    View Product
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Enhance Your Security Patrol Operations with UNEOM Tactical Gear
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join security patrol teams across Saudi Arabia who trust UNEOM for their tactical outerwear needs. Experience the perfect combination of protection, functionality, and professional appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Tactical+Patrol+Equipment+Inquiry"
              className="bg-white text-gray-800 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Tactical Equipment Specialist
            </Link>
            <Link
              href="/services/tactical-patrol-program"
              className="border-2 border-gray-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 hover:border-white transition-colors text-lg"
            >
              Tactical Patrol Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}