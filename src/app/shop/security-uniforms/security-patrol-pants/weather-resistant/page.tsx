import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CloudIcon,
  ShieldCheckIcon,
  SunIcon,
  EyeIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  BeakerIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Weather-Resistant Security Patrol Pants | UNEOM Uniforms',
  description: 'Professional weather-resistant patrol pants for security personnel. Waterproof, windproof, and UV-resistant design for all-weather security operations in Saudi Arabia.',
  keywords: 'weather resistant patrol pants, waterproof security pants, outdoor security uniform, all-weather security gear, protective patrol clothing, security uniform Saudi Arabia',
  openGraph: {
    title: 'Weather-Resistant Security Patrol Pants | UNEOM Professional Security Uniforms',
    description: 'Professional weather-resistant patrol pants designed for all-weather security operations',
    images: ['/images/products/security/weather-resistant-patrol-pants-main.svg'],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/security-uniforms/security-patrol-pants/weather-resistant/',
    languages: {
      'en': 'https://uneom.com/shop/security-uniforms/security-patrol-pants/weather-resistant/',
      'ar': 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/weather-resistant/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Weather-Resistant Security Patrol Pants',
  description: 'Professional weather-resistant patrol pants designed for security personnel with waterproof, windproof, and UV-resistant features for all-weather operations.',
  image: [
    'https://uneom.com/images/products/security/weather-resistant-patrol-pants-main.svg',
    'https://uneom.com/images/products/security/weather-resistant-patrol-pants-details.svg'
  ],
  brand: {
    '@type': 'Brand',
    name: 'UNEOM'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'UNEOM Uniforms',
    url: 'https://uneom.com'
  },
  category: 'Security Uniforms',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    priceRange: '280-420',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM Uniforms'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '203'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Waterproof Rating',
      value: '8,000mm'
    },
    {
      '@type': 'PropertyValue',
      name: 'Breathability',
      value: '6,000g/m²/24h'
    },
    {
      '@type': 'PropertyValue',
      name: 'UV Protection',
      value: 'UPF 40+'
    },
    {
      '@type': 'PropertyValue',
      name: 'Material',
      value: 'Weather-Resistant Ripstop Fabric'
    }
  ]
}

export default function WeatherResistantSecurityPatrolPants() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <CloudIcon className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-semibold">All-Weather Security Gear</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Weather-Resistant
                  <span className="text-blue-400 block">Patrol Pants</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Professional weather-resistant patrol pants engineered for security personnel who need reliable protection against rain, wind, and UV exposure during outdoor operations.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-600/30 rounded-full text-sm backdrop-blur-sm">Waterproof 8,000mm</span>
                  <span className="px-4 py-2 bg-green-600/30 rounded-full text-sm backdrop-blur-sm">UV Protection UPF 40+</span>
                  <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm backdrop-blur-sm">Breathable Design</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Request Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/products/security/weather-resistant-patrol-pants-main.svg"
                    alt="Weather-Resistant Security Patrol Pants"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Weather-Proof
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Protection Features */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Weather Protection</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Engineered with cutting-edge weather-resistant technology for reliable protection in all conditions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Waterproof</h3>
                <p className="text-gray-600 text-sm">
                  8,000mm waterproof rating with sealed seams for complete rain protection
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Windproof</h3>
                <p className="text-gray-600 text-sm">
                  Wind-resistant fabric construction with secure closures and adjustments
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SunIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UV Protection</h3>
                <p className="text-gray-600 text-sm">
                  UPF 40+ protection blocks harmful UV rays during outdoor patrols
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BeakerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Breathable</h3>
                <p className="text-gray-600 text-sm">
                  6,000g/m²/24h breathability prevents overheating during active use
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Weather-Resistant Fabric</h3>
                      <p className="text-gray-700">Advanced ripstop fabric with DWR (Durable Water Repellent) coating</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Sealed Seam Construction</h3>
                      <p className="text-gray-700">Fully sealed seams prevent water infiltration at stress points</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Reinforced Construction</h3>
                      <p className="text-gray-700">Double-layer knees and seat for enhanced durability and protection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Adjustable Features</h3>
                      <p className="text-gray-700">Adjustable waist, cuffs, and leg openings for optimal fit and protection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Tactical Pocket System</h3>
                      <p className="text-gray-700">6 weather-sealed pockets with drainage grommets and secure closures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/products/security/weather-resistant-patrol-pants-details.svg"
                  alt="Weather-Resistant Security Patrol Pants - Technical Details"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Weather Conditions Performance */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tested in Saudi Weather Conditions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven performance across the Kingdom's diverse climate zones
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <CloudIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Monsoon Season</h3>
                <p className="text-gray-700 text-sm">
                  Complete protection during heavy rainfall in coastal regions
                </p>
                <div className="mt-3 text-xs text-blue-600 font-semibold">Tested: Jeddah, Dammam</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <SunIcon className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Desert Heat</h3>
                <p className="text-gray-700 text-sm">
                  UV protection and breathability for extreme desert conditions
                </p>
                <div className="mt-3 text-xs text-yellow-600 font-semibold">Tested: Riyadh, NEOM</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <BoltIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sandstorms</h3>
                <p className="text-gray-700 text-sm">
                  Wind resistance and sealed protection against sand infiltration
                </p>
                <div className="mt-3 text-xs text-purple-600 font-semibold">Tested: Northern Regions</div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <BeakerIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">High Humidity</h3>
                <p className="text-gray-700 text-sm">
                  Moisture management in coastal high-humidity environments
                </p>
                <div className="mt-3 text-xs text-green-600 font-semibold">Tested: Eastern Province</div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ideal Applications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Perfect for various outdoor security operations requiring weather protection
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-blue-600">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Patrols</h3>
                <p className="text-gray-700">
                  Extended outdoor security patrols in parks, industrial sites, and perimeter security
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-green-600">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EyeIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Event Security</h3>
                <p className="text-gray-700">
                  Outdoor events, festivals, and public gatherings requiring all-weather coverage
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-purple-600">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Emergency Response</h3>
                <p className="text-gray-700">
                  Emergency and disaster response operations in challenging weather conditions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
              <div className="flex justify-center items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.8/5 (203 reviews)</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent weather protection during the rainy season. Kept completely dry during 12-hour outdoor shifts. The breathability is impressive - no overheating issues."
                </p>
                <div className="font-semibold text-gray-900">Saeed Al-Ghamdi</div>
                <div className="text-sm text-gray-600">Security Officer, Jeddah Port</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Perfect for desert patrols. UV protection is excellent and the fabric holds up well against sand and wind. Comfortable fit with good mobility."
                </p>
                <div className="font-semibold text-gray-900">Hassan Al-Mutairi</div>
                <div className="text-sm text-gray-600">Patrol Supervisor, NEOM Security</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Outstanding durability and weather protection. Our team has been using these for 8 months with excellent results. Highly recommend for outdoor security operations."
                </p>
                <div className="font-semibold text-gray-900">Nasser Al-Dosari</div>
                <div className="text-sm text-gray-600">Security Manager, Industrial Complex</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Order Weather-Resistant Patrol Pants Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Professional weather-resistant patrol pants starting from SAR 280. Bulk discounts available for security companies.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <TruckIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">Fast Delivery</h3>
                  <p className="text-sm opacity-90">2-5 business days across Saudi Arabia</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">Weather Tested</h3>
                  <p className="text-sm opacity-90">Proven in Saudi weather conditions</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">Expert Support</h3>
                  <p className="text-sm opacity-90">Dedicated customer service team</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  Request Bulk Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Sales Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}