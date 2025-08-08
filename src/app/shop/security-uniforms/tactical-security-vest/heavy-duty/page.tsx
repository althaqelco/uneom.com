import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  FireIcon,
  CogIcon,
  BoltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Heavy-Duty Tactical Security Vest | Maximum Protection Gear | UNEOM',
  description: 'UNEOM\'s heavy-duty tactical security vest provides maximum protection and durability for high-risk security operations in Saudi Arabia. Military-grade tactical gear for extreme conditions.',
  keywords: 'heavy duty tactical vest, maximum protection security gear, military grade tactical vest, high-risk security equipment, Saudi tactical gear, heavy duty security vest UNEOM, extreme protection vest',
  openGraph: {
    title: 'Heavy-Duty Tactical Security Vest | UNEOM',
    description: 'Military-grade tactical security vest designed for maximum protection in high-risk security operations across Saudi Arabia.',
    images: ['/images/products/security/heavy-duty-tactical-vest-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Maximum Protection',
    description: 'Military-grade protection with reinforced ballistic panels and multi-threat resistance for extreme security operations.'
  },
  {
    icon: FireIcon,
    title: 'Extreme Durability',
    description: 'Built to withstand harsh conditions with flame-resistant materials and reinforced stress points for long-lasting performance.'
  },
  {
    icon: CogIcon,
    title: 'Modular System',
    description: 'Fully customizable MOLLE system with extensive attachment points for mission-specific equipment configuration.'
  },
  {
    icon: BoltIcon,
    title: 'Rapid Deployment',
    description: 'Quick-don design with emergency release systems for rapid deployment and emergency situations.'
  }
]

const specifications = [
  { label: 'Material Composition', value: 'Military-spec Cordura 1000D with Kevlar reinforcement and flame-resistant coating' },
  { label: 'Protection Level', value: 'NIJ Level IIIA+ compatible, multi-threat protection including stab and spike resistance' },
  { label: 'Weight', value: '2.1-3.2 kg depending on armor configuration and accessories' },
  { label: 'Size Range', value: 'XS - 5XL with fully adjustable torso and shoulder systems' },
  { label: 'Color Options', value: 'Tactical Black, OD Green, Coyote Brown, MultiCam (custom patterns available)' },
  { label: 'Pocket Configuration', value: '12-16 modular pockets, integrated hydration system, communication ports' },
  { label: 'Special Features', value: 'MOLLE/PALS compatible, drag handle, emergency release, night vision compatibility' }
]

const includedItems = [
  'Heavy-Duty Tactical Security Vest',
  'Ballistic Panel Inserts (Level IIIA)',
  'Modular Pocket System',
  'Emergency Release System',
  'Drag Handle Assembly',
  'UNEOM Tactical Gear Manual',
  'Professional Fitting Guide'
]

const idealForOperations = [
  { name: 'High-Risk Security', icon: ExclamationTriangleIcon },
  { name: 'VIP Protection', icon: ShieldCheckIcon },
  { name: 'Counter-Terrorism', icon: BoltIcon },
  { name: 'Special Operations', icon: CogIcon },
  { name: 'Emergency Response', icon: WrenchScrewdriverIcon }
]

const relatedProducts = [
  {
    name: 'Professional Tactical Vest',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'From SAR 350'
  },
  {
    name: 'Tactical Security Jacket',
    image: '/images/products/security/tactical-security-jacket-main.jpg',
    href: '/shop/security-uniforms/security-patrol-jacket/tactical/',
    price: 'From SAR 320'
  },
  {
    name: 'Tactical Accessories Kit',
    image: '/images/products/security/tactical-accessories-kit.jpg',
    href: '/shop/security-accessories/tactical-kit/',
    price: 'From SAR 200'
  }
]

export default function HeavyDutyTacticalVestPage() {
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
            <span className="text-gray-900">Heavy-Duty Tactical Vest</span>
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
                  src="/images/products/security/heavy-duty-tactical-vest-main.jpg"
                  alt="Heavy-Duty Tactical Security Vest"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-red-600 cursor-pointer">
                    <Image
                      src={`/images/products/security/heavy-duty-tactical-vest-detail-${i}.jpg`}
                      alt={`Heavy-duty tactical vest detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Military-Grade Performance)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Heavy-Duty Tactical Security Vest
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dominate high-risk security operations with UNEOM's heavy-duty tactical security vest. Engineered for extreme conditions and maximum protection, this military-grade vest provides uncompromising security for the most demanding operations in Saudi Arabia's security sector.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-red-600">From SAR 450</span>
                <span className="text-lg text-gray-500 ml-2">per vest</span>
              </div>
              
              <div className="p-4 bg-red-50 border-l-4 border-red-600 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Military-Grade Protection:</strong> This vest meets military specifications for high-threat environments. <Link href="/resources/tactical-equipment-standards" className="font-medium underline hover:text-red-800">View tactical equipment standards</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=heavy-duty-tactical-vest"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex-1 text-center"
                >
                  Get Tactical Team Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <FireIcon className="h-5 w-5 mr-2 text-red-600" />
                  Add to Tactical Arsenal
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Tactical Advantages:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Maximum Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Extreme Durability</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Modular System</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Rapid Deployment</span>
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
            Engineered for Extreme Security Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-red-600" />
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
            Built for High-Risk Security Operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForOperations.map((operation, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <operation.icon className="h-10 w-10 text-red-600 mx-auto mb-3" />
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
            Heavy-Duty Tactical Vest Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Military-Grade Features</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Tactical Package Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="text-lg font-semibold text-red-700 mb-2">UNEOM Tactical Guarantee</h4>
                <p className="text-sm text-red-600">
                  Every heavy-duty tactical vest is built to military specifications, ensuring maximum protection and reliability in the most demanding security operations.
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
            Complete Your Tactical Arsenal
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600">{product.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Dominate High-Risk Operations with UNEOM Military-Grade Gear
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Join elite security forces across Saudi Arabia who trust UNEOM for their most critical operations. Experience uncompromising protection and tactical superiority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Tactical+Equipment+Inquiry"
              className="bg-white text-red-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Tactical Equipment Expert
            </Link>
            <Link
              href="/services/tactical-equipment-program"
              className="border-2 border-red-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-600 hover:border-white transition-colors text-lg"
            >
              Tactical Equipment Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}