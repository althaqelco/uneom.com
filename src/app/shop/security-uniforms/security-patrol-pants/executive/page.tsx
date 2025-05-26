import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheckIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  ClockIcon,
  CogIcon,
  UserGroupIcon,
  AdjustmentsHorizontalIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Executive Security Patrol Pants - Premium Security Uniforms | UNEOM',
  description: 'Premium executive security patrol pants designed for high-profile security operations and VIP protection services in Saudi Arabia. Professional appearance with advanced functionality.',
  keywords: 'executive security pants, VIP protection uniform, premium security clothing, patrol pants, security uniforms, Saudi Arabia, Riyadh, Jeddah',
  openGraph: {
    title: 'Executive Security Patrol Pants - Premium Security Uniforms | UNEOM',
    description: 'Premium executive security patrol pants designed for high-profile security operations and VIP protection services',
    images: ['/images/products/security/executive-patrol-pants-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-uniforms/security-patrol-pants/executive/',
    languages: {
      'en': 'https://uneom.com/shop/security-uniforms/security-patrol-pants/executive/',
      'ar': 'https://uneom.com/ar/shop/security-uniforms/security-patrol-pants/executive/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Executive Security Patrol Pants',
  description: 'Premium executive security patrol pants designed for high-profile security operations and VIP protection services',
  image: [
    'https://uneom.com/images/products/security/executive-patrol-pants-main.jpg',
    'https://uneom.com/images/products/security/executive-patrol-pants-details.jpg',
    'https://uneom.com/images/products/security/executive-patrol-pants-professional.jpg'
  ],
  brand: {
    '@type': 'Brand',
    name: 'UNEOM'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com/'
  },
  category: 'Executive Security Uniforms',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM'
    },
    url: 'https://uneom.com/shop/security-uniforms/security-patrol-pants/executive/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '76',
    bestRating: '5',
    worstRating: '1'
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Material',
      value: 'Premium executive-grade fabric blend'
    },
    {
      '@type': 'PropertyValue',
      name: 'Style',
      value: 'Professional executive appearance'
    },
    {
      '@type': 'PropertyValue',
      name: 'Features',
      value: 'Concealed pockets and premium finish'
    }
  ]
}

export default function ExecutivePatrolPants() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/shop/" className="hover:text-blue-600">Shop</Link>
              <span>/</span>
              <Link href="/shop/security-uniforms/" className="hover:text-blue-600">Security Uniforms</Link>
              <span>/</span>
              <span className="text-gray-900">Executive Patrol Pants</span>
            </div>
          </div>
        </nav>

        {/* Product Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/security/executive-patrol-pants-main.jpg"
                    alt="Executive Security Patrol Pants - Main Image"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/executive-patrol-pants-details.jpg"
                      alt="Executive Pants Details"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/executive-patrol-pants-professional.jpg"
                      alt="Professional Executive Look"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/executive-patrol-pants-features.jpg"
                      alt="Executive Features"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <SparklesIcon className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Executive Grade
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Executive Security Patrol Pants
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    Premium executive security patrol pants designed for high-profile security operations, VIP protection, and corporate security environments where professional appearance is paramount.
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(76 reviews)</span>
                  </div>
                </div>

                {/* Executive Features */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Executive Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <SparklesIcon className="w-6 h-6 text-blue-600" />
                      <span className="text-blue-800">Premium Fabric</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SparklesIcon className="w-6 h-6 text-indigo-600" />
                      <span className="text-blue-800">Executive Cut</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">Concealed Pockets</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <AdjustmentsHorizontalIcon className="w-6 h-6 text-indigo-500" />
                      <span className="text-blue-800">Tailored Fit</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                  <div className="grid grid-cols-6 gap-3">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className="border-2 border-gray-300 rounded-lg py-3 text-center font-semibold hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-gray-900 rounded-full border-4 border-gray-300"></button>
                    <button className="w-12 h-12 bg-blue-900 rounded-full border-4 border-transparent hover:border-blue-300"></button>
                    <button className="w-12 h-12 bg-gray-700 rounded-full border-4 border-transparent hover:border-gray-300"></button>
                    <button className="w-12 h-12 bg-green-900 rounded-full border-4 border-transparent hover:border-green-300"></button>
                  </div>
                </div>

                {/* Executive Options */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Executive Customization</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">Premium tailoring service</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">Corporate logo embroidery</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">Executive belt included</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-800">Stain-resistant coating</span>
                    </label>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    Request Executive Quote
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                    Add to Quote List
                  </button>
                </div>

                {/* Premium Services */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                    <TruckIcon className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Express Delivery</p>
                      <p className="text-sm text-green-600">2-3 business days</p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg flex items-center gap-3">
                    <ClockIcon className="w-6 h-6 text-purple-600" />
                    <div>
                      <p className="font-semibold text-purple-800">VIP Support</p>
                      <p className="text-sm text-purple-600">Dedicated account manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Specifications</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Material</span>
                    <span className="text-gray-600">Premium wool blend</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Weight</span>
                    <span className="text-gray-600">280 GSM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Finish</span>
                    <span className="text-gray-600">Wrinkle-resistant</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Pockets</span>
                    <span className="text-gray-600">6 concealed pockets</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Care</span>
                    <span className="text-gray-600">Dry clean preferred</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Standards</span>
                    <span className="text-gray-600">ISO 9001, OEKO-TEX</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Premium Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Executive Appearance</h4>
                      <p className="text-gray-600">Professional look suitable for high-profile environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Concealed Functionality</h4>
                      <p className="text-gray-600">Hidden pockets for discreet equipment storage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Premium Comfort</h4>
                      <p className="text-gray-600">Superior fabric blend for all-day comfort</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tailored Fit</h4>
                      <p className="text-gray-600">Executive cut for professional silhouette</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Stain Resistance</h4>
                      <p className="text-gray-600">Advanced fabric treatment for easy maintenance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Applications</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">VIP Protection</h4>
                    <p className="text-blue-800 text-sm">Personal protection and close protection services</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-900 mb-2">Corporate Security</h4>
                    <p className="text-indigo-800 text-sm">Executive buildings and corporate environments</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Diplomatic Security</h4>
                    <p className="text-purple-800 text-sm">Embassy and diplomatic mission protection</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">High-End Events</h4>
                    <p className="text-gray-800 text-sm">Premium events and exclusive gatherings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Executive Security Reviews</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Exceptional quality and professional appearance. Perfect for VIP protection assignments where discretion and elegance are essential."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">James Mitchell</p>
                  <p>Executive Protection Specialist</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Outstanding comfort and functionality. The concealed pockets are perfectly designed for our equipment needs."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Sarah Al-Rashid</p>
                  <p>Corporate Security Manager</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Premium quality that matches our executive standards. Highly recommended for diplomatic and corporate security."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Ahmed Al-Mansouri</p>
                  <p>Diplomatic Security Chief</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate Your Executive Security Standards
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Equip your team with premium executive patrol pants that combine professional appearance with functional excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <PhoneIcon className="w-6 h-6" />
                Request Executive Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Speak with Security Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}