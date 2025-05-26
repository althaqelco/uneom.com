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
  title: 'Weather Protection Kit for Security Personnel | UNEOM Uniforms',
  description: 'Complete weather protection kit designed for security personnel working in harsh weather conditions. Waterproof, windproof, and UV-resistant gear for all-season security operations in Saudi Arabia.',
  keywords: 'weather protection kit, security rain gear, waterproof security uniform, outdoor security equipment, all-weather security gear, protective clothing Saudi Arabia',
  openGraph: {
    title: 'Weather Protection Kit for Security | UNEOM Professional Security Gear',
    description: 'Complete all-weather protection kit for security personnel with advanced weatherproof technology',
    images: ['/images/products/security/weather-protection-kit-main.svg'],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-accessories/weather-protection-kit/',
    languages: {
      'en': 'https://uneom.com/shop/security-accessories/weather-protection-kit/',
      'ar': 'https://uneom.com/ar/shop/security-accessories/weather-protection-kit/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Weather Protection Kit for Security Personnel',
  description: 'Complete weather protection kit including waterproof jacket, pants, and accessories designed for security personnel working in harsh weather conditions.',
  image: [
    'https://uneom.com/images/products/security/weather-protection-kit-main.svg',
    'https://uneom.com/images/products/security/weather-protection-kit-components.svg'
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
  category: 'Security Accessories',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    priceRange: '450-750',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM Uniforms'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '156'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Waterproof Rating',
      value: '10,000mm'
    },
    {
      '@type': 'PropertyValue',
      name: 'Breathability',
      value: '8,000g/m²/24h'
    },
    {
      '@type': 'PropertyValue',
      name: 'UV Protection',
      value: 'UPF 50+'
    },
    {
      '@type': 'PropertyValue',
      name: 'Kit Includes',
      value: 'Jacket, Pants, Hat, Gloves, Storage Bag'
    }
  ]
}

export default function WeatherProtectionKit() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 via-gray-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <CloudIcon className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-semibold">All-Weather Security Gear</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Weather Protection
                  <span className="text-blue-400 block">Kit</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Complete all-weather protection system designed for security personnel operating in challenging weather conditions. Waterproof, breathable, and built to withstand the elements.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-600/30 rounded-full text-sm backdrop-blur-sm">Waterproof 10,000mm</span>
                  <span className="px-4 py-2 bg-green-600/30 rounded-full text-sm backdrop-blur-sm">UV Protection UPF 50+</span>
                  <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm backdrop-blur-sm">Complete Kit</span>
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
                    src="/images/products/security/weather-protection-kit-main.svg"
                    alt="Weather Protection Kit for Security Personnel"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Complete Kit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kit Components */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Protection System</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for comprehensive weather protection during security operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Waterproof Jacket</h3>
                <p className="text-gray-600 text-sm">
                  High-performance waterproof jacket with sealed seams and adjustable hood
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Rain Pants</h3>
                <p className="text-gray-600 text-sm">
                  Lightweight, breathable rain pants with reinforced knees and adjustable waist
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SunIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">UV Protection Hat</h3>
                <p className="text-gray-600 text-sm">
                  Wide-brim hat with UPF 50+ protection and moisture-wicking sweatband
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tactical Gloves</h3>
                <p className="text-gray-600 text-sm">
                  Waterproof tactical gloves with grip enhancement and touchscreen compatibility
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BeakerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Storage Bag</h3>
                <p className="text-gray-600 text-sm">
                  Compact, waterproof storage bag for easy transport and organization
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Accessories</h3>
                <p className="text-gray-600 text-sm">
                  Additional accessories including neck gaiter and equipment covers
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Weather Technology</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Waterproof Performance</h3>
                      <p className="text-gray-700">10,000mm waterproof rating with fully sealed seams for complete protection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Breathable Comfort</h3>
                      <p className="text-gray-700">8,000g/m²/24h breathability rating prevents overheating during active use</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">UV Protection</h3>
                      <p className="text-gray-700">UPF 50+ protection blocks 98% of harmful UV rays</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Durability</h3>
                      <p className="text-gray-700">Ripstop fabric construction with reinforced stress points for extended use</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Temperature Range</h3>
                      <p className="text-gray-700">Effective protection from -10°C to +50°C with layering system compatibility</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/products/security/weather-protection-kit-components.svg"
                  alt="Weather Protection Kit Components and Features"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Weather Conditions */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">All-Weather Performance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed to protect security personnel in Saudi Arabia's diverse weather conditions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <CloudIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Heavy Rain</h3>
                <p className="text-gray-700 text-sm">
                  Complete protection during monsoon seasons and heavy downpours
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <SunIcon className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Extreme Heat</h3>
                <p className="text-gray-700 text-sm">
                  UV protection and cooling features for desert conditions
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <BoltIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Strong Winds</h3>
                <p className="text-gray-700 text-sm">
                  Wind-resistant design with secure closures and adjustments
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <BeakerIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dust Storms</h3>
                <p className="text-gray-700 text-sm">
                  Sealed protection against sand and dust infiltration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
              <div className="flex justify-center items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.7/5 (156 reviews)</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent protection during the rainy season. The kit kept our security team completely dry during extended outdoor patrols. Highly recommended for all-weather operations."
                </p>
                <div className="font-semibold text-gray-900">Omar Al-Zahrani</div>
                <div className="text-sm text-gray-600">Security Manager, Jeddah</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Perfect for our outdoor security posts. The UV protection is excellent for desert conditions, and the breathable fabric prevents overheating. Great value for money."
                </p>
                <div className="font-semibold text-gray-900">Fahad Al-Otaibi</div>
                <div className="text-sm text-gray-600">Operations Director, Riyadh</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Comprehensive kit with everything needed for weather protection. The storage bag is convenient for quick deployment. Our team loves the comfort and functionality."
                </p>
                <div className="font-semibold text-gray-900">Abdullah Al-Rashid</div>
                <div className="text-sm text-gray-600">Security Supervisor, Dammam</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Order Your Weather Protection Kit Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Complete weather protection kit starting from SAR 450. Bulk discounts available for security companies.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <TruckIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">Fast Delivery</h3>
                  <p className="text-sm opacity-90">2-5 business days across Saudi Arabia</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircleIcon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold mb-1">Quality Guarantee</h3>
                  <p className="text-sm opacity-90">30-day satisfaction guarantee</p>
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