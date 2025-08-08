import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  CloudIcon,
  SunIcon,
  BeakerIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  CogIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Weather-Resistant Security Patrol Jacket | All-Weather Protection | UNEOM',
  description: 'UNEOM\'s weather-resistant security patrol jacket provides superior protection against harsh weather conditions for security patrol operations in Saudi Arabia. Advanced all-weather security outerwear.',
  keywords: 'weather resistant security jacket, all weather patrol jacket, waterproof security jacket, weather protection security gear, Saudi weather resistant uniforms, all weather security clothing UNEOM',
  openGraph: {
    title: 'Weather-Resistant Security Patrol Jacket | UNEOM',
    description: 'Advanced weather-resistant security patrol jacket designed for all-weather protection in security patrol operations across Saudi Arabia.',
    images: ['/images/products/security/weather-resistant-jacket-main.jpg']}}

const productFeatures = [
  {
    icon: CloudIcon,
    title: 'Weather Protection',
    description: 'Advanced waterproof and windproof materials providing complete protection against rain, wind, and harsh weather conditions.'
  },
  {
    icon: SunIcon,
    title: 'UV Resistance',
    description: 'Built-in UV protection and heat-resistant materials designed for Saudi Arabia\'s intense sun and high temperatures.'
  },
  {
    icon: BeakerIcon,
    title: 'Breathable Technology',
    description: 'Advanced moisture-wicking and ventilation systems maintaining comfort in extreme weather while ensuring protection.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'Reinforced seams and heavy-duty materials built to withstand extreme weather conditions and intensive use.'
  }
]

const specifications = [
  { label: 'Material Composition', value: 'Waterproof ripstop fabric with sealed seams and breathable membrane technology' },
  { label: 'Weather Protection', value: 'Waterproof (10,000mm), windproof, UV resistant (UPF 50+), temperature range -10°C to +50°C' },
  { label: 'Weight', value: '1.1-1.6 kg depending on size and insulation level' },
  { label: 'Size Range', value: 'XS - 4XL with adjustable storm cuffs and drawstring hem' },
  { label: 'Color Options', value: 'Storm Black, Weather Gray, Desert Tan, High-Vis Yellow (reflective options available)' },
  { label: 'Pocket Configuration', value: '8-10 weather-sealed pockets, storm flaps, waterproof zippers' },
  { label: 'Special Features', value: 'Removable hood, ventilation zippers, storm cuffs, reflective strips, radio loops' }
]

const includedItems = [
  'Weather-Resistant Security Patrol Jacket',
  'Removable Insulated Hood',
  'Storm Cuff Adjusters',
  'Waterproof Pocket Covers',
  'Reflective Safety Elements',
  'UNEOM Weather Gear Guide',
  'Maintenance Instructions'
]

const weatherConditions = [
  { name: 'Heavy Rain', icon: CloudIcon },
  { name: 'Strong Winds', icon: BeakerIcon },
  { name: 'Extreme Heat', icon: SunIcon },
  { name: 'Dust Storms', icon: CogIcon },
  { name: 'Cold Weather', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'Professional Tactical Vest',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'From SAR 350'
  },
  {
    name: 'Weather-Resistant Pants',
    image: '/images/products/security/weather-resistant-pants-main.jpg',
    href: '/shop/security-uniforms/security-patrol-pants/weather-resistant/',
    price: 'From SAR 200'
  },
  {
    name: 'Weather Protection Kit',
    image: '/images/products/security/weather-protection-kit.jpg',
    href: '/shop/security-accessories/weather-protection-kit/',
    price: 'From SAR 150'
  }
]

export default function WeatherResistantSecurityPatrolJacketPage() {
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
            <span className="text-gray-900">Weather-Resistant Security Patrol Jacket</span>
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
                  src="/images/products/security/weather-resistant-jacket-main.jpg"
                  alt="Weather-Resistant Security Patrol Jacket"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-green-600 cursor-pointer">
                    <Image
                      src={`/images/products/security/weather-resistant-jacket-detail-${i}.jpg`}
                      alt={`Weather-resistant jacket detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(All-Weather Performance Tested)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Weather-Resistant Security Patrol Jacket
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Conquer any weather condition with UNEOM's weather-resistant security patrol jacket. Engineered for Saudi Arabia's extreme climate variations, this advanced all-weather jacket provides uncompromising protection while maintaining comfort and functionality for security professionals.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">From SAR 380</span>
                <span className="text-lg text-gray-500 ml-2">per jacket</span>
              </div>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-600 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CloudIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>All-Weather Protection:</strong> Our weather-resistant jacket provides complete protection against Saudi Arabia's extreme weather conditions. <Link href="/resources/weather-protection-guide" className="font-medium underline hover:text-green-800">View weather protection guide</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=weather-resistant-security-patrol-jacket"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex-1 text-center"
                >
                  Get Weather Protection Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <CloudIcon className="h-5 w-5 mr-2 text-green-600" />
                  Add to Weather Kit
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Weather Protection Features:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Weather Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>UV Resistance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Breathable Technology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Durable Construction</span>
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
            Engineered for Extreme Weather Conditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Conditions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Protection Against All Weather Conditions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {weatherConditions.map((condition, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <condition.icon className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{condition.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Weather-Resistant Jacket Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Weather Protection Features</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Weather Protection Package Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">UNEOM Weather Protection Promise</h4>
                <p className="text-sm text-green-600">
                  Every weather-resistant jacket is tested in extreme conditions to ensure reliable protection against Saudi Arabia's harshest weather challenges.
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
            Complete Your Weather Protection Kit
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">{product.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Conquer Any Weather with UNEOM All-Weather Protection
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join security professionals across Saudi Arabia who trust UNEOM for their weather protection needs. Experience uncompromising protection against extreme weather conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Weather+Protection+Equipment+Inquiry"
              className="bg-white text-green-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Weather Protection Specialist
            </Link>
            <Link
              href="/services/weather-protection-program"
              className="border-2 border-green-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 hover:border-white transition-colors text-lg"
            >
              Weather Protection Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}