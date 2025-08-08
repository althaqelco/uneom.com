import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BoltIcon,
  CloudIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  EyeIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Lightweight Tactical Security Vest | Agile Protection Gear | UNEOM',
  description: 'UNEOM\'s lightweight tactical security vest provides optimal mobility and protection for agile security operations in Saudi Arabia. Advanced lightweight tactical gear for extended missions.',
  keywords: 'lightweight tactical vest, agile security gear, mobile tactical vest, lightweight protection vest, Saudi security equipment, agile tactical gear UNEOM, mobility security vest',
  openGraph: {
    title: 'Lightweight Tactical Security Vest | UNEOM',
    description: 'Advanced lightweight tactical security vest designed for maximum mobility and agility in security operations across Saudi Arabia.',
    images: ['/images/products/security/lightweight-tactical-vest-main.jpg']}}

const productFeatures = [
  {
    icon: CloudIcon,
    title: 'Ultra-Lightweight Design',
    description: 'Advanced materials and engineering provide maximum protection while minimizing weight for enhanced mobility and comfort.'
  },
  {
    icon: BoltIcon,
    title: 'Enhanced Mobility',
    description: 'Ergonomic design and flexible construction allow for unrestricted movement during dynamic security operations.'
  },
  {
    icon: ClockIcon,
    title: 'Extended Comfort',
    description: 'Breathable materials and moisture-wicking technology ensure comfort during long-duration missions and patrols.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Reliable Protection',
    description: 'Lightweight doesn\'t mean compromised protection - maintains essential ballistic and stab resistance capabilities.'
  }
]

const specifications = [
  { label: 'Material Composition', value: 'Ultra-light Cordura 500D with advanced fiber reinforcement and moisture-wicking liner' },
  { label: 'Protection Level', value: 'NIJ Level IIA/II compatible, soft armor inserts, stab-resistant options available' },
  { label: 'Weight', value: '0.8-1.4 kg depending on protection level and configuration' },
  { label: 'Size Range', value: 'XS - 4XL with micro-adjustable fit system and elastic side panels' },
  { label: 'Color Options', value: 'Black, Navy Blue, Gray, Khaki (low-profile colors for covert operations)' },
  { label: 'Pocket Configuration', value: '6-10 streamlined pockets, concealed carry options, minimal profile design' },
  { label: 'Special Features', value: 'Quick-release system, concealment-friendly, breathable mesh panels, low-profile' }
]

const includedItems = [
  'Lightweight Tactical Security Vest',
  'Soft Armor Inserts (Level IIA)',
  'Adjustable Side Panels',
  'Quick-Release Buckles',
  'Concealment Accessories',
  'UNEOM Lightweight Gear Guide',
  'Mobility Training Manual'
]

const idealForOperations = [
  { name: 'Patrol Operations', icon: UserGroupIcon },
  { name: 'Covert Security', icon: EyeIcon },
  { name: 'Event Security', icon: CogIcon },
  { name: 'Mobile Response', icon: BoltIcon },
  { name: 'Extended Missions', icon: ClockIcon }
]

const relatedProducts = [
  {
    name: 'Professional Tactical Vest',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'From SAR 350'
  },
  {
    name: 'Security Patrol Jacket',
    image: '/images/products/security/security-patrol-jacket-main.jpg',
    href: '/shop/security-uniforms/security-patrol-jacket/professional/',
    price: 'From SAR 280'
  },
  {
    name: 'Lightweight Accessories',
    image: '/images/products/security/lightweight-accessories-kit.jpg',
    href: '/shop/security-accessories/lightweight-kit/',
    price: 'From SAR 120'
  }
]

export default function LightweightTacticalVestPage() {
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
            <span className="text-gray-900">Lightweight Tactical Vest</span>
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
                  src="/images/products/security/lightweight-tactical-vest-main.jpg"
                  alt="Lightweight Tactical Security Vest"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-500 cursor-pointer">
                    <Image
                      src={`/images/products/security/lightweight-tactical-vest-detail-${i}.jpg`}
                      alt={`Lightweight tactical vest detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Preferred for Mobile Operations)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lightweight Tactical Security Vest
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Maximize your operational agility with UNEOM's lightweight tactical security vest. Engineered for security professionals who need optimal mobility without compromising protection, this vest is perfect for extended missions and dynamic operations in Saudi Arabia's security sector.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 280</span>
                <span className="text-lg text-gray-500 ml-2">per vest</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CloudIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Mobility-Optimized Protection:</strong> Our lightweight vest provides essential protection while maximizing mobility for agile operations. <Link href="/resources/lightweight-tactical-guide" className="font-medium underline hover:text-blue-800">View lightweight tactical guide</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=lightweight-tactical-vest"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  Get Mobile Team Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <CloudIcon className="h-5 w-5 mr-2 text-blue-500" />
                  Add to Mobile Kit
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Mobility Advantages:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Ultra-Lightweight</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Enhanced Mobility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Extended Comfort</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Reliable Protection</span>
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
            Engineered for Agile Security Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-blue-600" />
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
            Perfect for Mobile Security Operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForOperations.map((operation, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <operation.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
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
            Lightweight Tactical Vest Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Lightweight Features</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Mobility Package Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">UNEOM Mobility Promise</h4>
                <p className="text-sm text-blue-600">
                  Every lightweight tactical vest is designed to maximize operational mobility while maintaining essential protection for dynamic security operations.
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
            Complete Your Mobile Security Kit
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Enhance Your Operational Agility with UNEOM Lightweight Gear
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join mobile security teams across Saudi Arabia who trust UNEOM for their lightweight tactical equipment needs. Experience the perfect balance of protection and mobility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Lightweight+Tactical+Equipment+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Mobility Equipment Specialist
            </Link>
            <Link
              href="/services/lightweight-tactical-program"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              Lightweight Tactical Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}