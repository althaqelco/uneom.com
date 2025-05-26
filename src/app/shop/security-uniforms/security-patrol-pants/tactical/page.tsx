import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheckIcon,
  BoltIcon,
  EyeIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Tactical Security Patrol Pants - Professional Grade | UNEOM Uniforms',
  description: 'Premium tactical security patrol pants designed for professional security personnel. Durable, comfortable, and feature-rich for demanding security operations in Saudi Arabia.',
  keywords: 'tactical security pants, patrol uniform pants, security guard clothing, professional security wear, tactical gear Saudi Arabia, security uniform pants',
  openGraph: {
    title: 'Tactical Security Patrol Pants | UNEOM Professional Security Uniforms',
    description: 'Professional-grade tactical patrol pants for security personnel with advanced features and superior durability',
    images: ['/images/products/security/tactical-patrol-pants-main.svg'],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-uniforms/security-patrol-pants/tactical/',
    languages: {
      'en': 'https://uneom.com/shop/security-uniforms/security-patrol-pants/tactical/',
      'ar': 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/tactical/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Tactical Security Patrol Pants',
  description: 'Professional-grade tactical patrol pants designed for security personnel with advanced features, multiple pockets, and superior durability for demanding security operations.',
  image: [
    'https://uneom.com/images/products/security/tactical-patrol-pants-main.svg',
    'https://uneom.com/images/products/security/tactical-patrol-pants-details.svg'
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
    priceRange: '180-320',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM Uniforms'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Material',
      value: 'Ripstop Cotton Blend'
    },
    {
      '@type': 'PropertyValue',
      name: 'Features',
      value: 'Multiple Tactical Pockets, Reinforced Knees, Adjustable Waist'
    },
    {
      '@type': 'PropertyValue',
      name: 'Colors',
      value: 'Black, Navy Blue, Khaki, Olive Green'
    }
  ]
}

export default function TacticalSecurityPatrolPants() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-blue-400 font-semibold">Professional Security Gear</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Tactical Security
                  <span className="text-blue-400 block">Patrol Pants</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Professional-grade tactical patrol pants engineered for security personnel who demand superior performance, durability, and functionality in challenging environments.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-blue-600/30 rounded-full text-sm backdrop-blur-sm">Tactical Design</span>
                  <span className="px-4 py-2 bg-green-600/30 rounded-full text-sm backdrop-blur-sm">Reinforced Construction</span>
                  <span className="px-4 py-2 bg-purple-600/30 rounded-full text-sm backdrop-blur-sm">Multi-Pocket System</span>
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
                    src="/images/products/security/tactical-patrol-pants-main.svg"
                    alt="Tactical Security Patrol Pants - Professional Grade"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    In Stock
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Tactical Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Engineered with cutting-edge features to meet the demanding requirements of professional security operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ripstop Fabric</h3>
                <p className="text-gray-600 text-sm">
                  Tear-resistant ripstop cotton blend that withstands demanding tactical operations
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multiple Pockets</h3>
                <p className="text-gray-600 text-sm">
                  Strategic pocket placement for tactical gear, radio, and essential equipment
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reinforced Knees</h3>
                <p className="text-gray-600 text-sm">
                  Double-layer knee reinforcement for extended durability and protection
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Adjustable Fit</h3>
                <p className="text-gray-600 text-sm">
                  Adjustable waist and cuffs for optimal comfort and professional appearance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Premium Material Composition</h3>
                      <p className="text-gray-700">65% Cotton, 35% Polyester ripstop blend for optimal durability and comfort</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Advanced Pocket System</h3>
                      <p className="text-gray-700">8 strategically placed pockets including cargo, side, and secure radio pockets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Professional Color Options</h3>
                      <p className="text-gray-700">Available in Black, Navy Blue, Khaki, and Olive Green</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Size Range</h3>
                      <p className="text-gray-700">Comprehensive sizing from XS to 5XL with custom tailoring available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Care Instructions</h3>
                      <p className="text-gray-700">Machine washable, colorfast, and maintains shape after repeated washing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/products/security/tactical-patrol-pants-details.svg"
                  alt="Tactical Security Patrol Pants - Detailed Features"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ideal Applications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Perfect for various security and tactical operations across different environments
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Security</h3>
                <p className="text-gray-700">
                  Professional appearance for corporate buildings, banks, and business facilities requiring high-end security presence
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EyeIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Event Security</h3>
                <p className="text-gray-700">
                  Tactical functionality for large events, concerts, and public gatherings requiring mobile security teams
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Security</h3>
                <p className="text-gray-700">
                  Durable construction for industrial facilities, ports, and manufacturing plants with demanding environments
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
                <span className="ml-2 text-gray-600">4.8/5 (127 reviews)</span>
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
                  "Excellent quality and durability. The tactical pockets are perfectly positioned for our security equipment. Highly recommended for professional security teams."
                </p>
                <div className="font-semibold text-gray-900">Ahmed Al-Rashid</div>
                <div className="text-sm text-gray-600">Security Supervisor, Riyadh</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Perfect fit and professional appearance. The reinforced knees have proven their worth during extended patrol duties. Great value for money."
                </p>
                <div className="font-semibold text-gray-900">Mohammed Al-Fahad</div>
                <div className="text-sm text-gray-600">Security Manager, Jeddah</div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Outstanding comfort and functionality. The adjustable features ensure a perfect fit for our entire security team. Will definitely reorder."
                </p>
                <div className="font-semibold text-gray-900">Khalid Al-Mutairi</div>
                <div className="text-sm text-gray-600">Operations Director, Dammam</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Order Your Tactical Security Pants Today</h2>
              <p className="text-xl mb-8 opacity-90">
                Professional-grade tactical patrol pants starting from SAR 180. Bulk discounts available for security companies.
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