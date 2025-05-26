import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  FireIcon, 
  BeakerIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Heavy Duty Industrial Coverall - Advanced Protection | UNEOM',
  description: 'High-quality heavy duty industrial coverall resistant to heat and chemicals, specially designed for harsh industrial environments in Saudi Arabia',
  keywords: 'industrial coverall, protective clothing, heavy duty coverall, workwear, industrial protection, safety equipment, Saudi Arabia',
  openGraph: {
    title: 'Heavy Duty Industrial Coverall - Advanced Protection | UNEOM',
    description: 'High-quality heavy duty industrial coverall resistant to heat and chemicals',
    images: ['/images/products/industrial/heavy-duty-coverall-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/heavy-duty-coverall/',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/heavy-duty-coverall/',
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/heavy-duty-coverall/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Heavy Duty Industrial Coverall',
  description: 'High-quality heavy duty industrial coverall resistant to heat and chemicals, specially designed for harsh industrial environments',
  image: [
    'https://uneom.com/images/products/industrial/heavy-duty-coverall-main.jpg',
    'https://uneom.com/images/products/industrial/heavy-duty-coverall-details.jpg',
    'https://uneom.com/images/products/industrial/heavy-duty-coverall-features.jpg'
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
  category: 'Industrial Protective Clothing',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM'
    },
    url: 'https://uneom.com/shop/industrial-uniforms/heavy-duty-coverall/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Ahmed Al-Mutairi'
      },
      reviewBody: 'Excellent and very practical coverall, high quality and resistant to harsh conditions'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Heat Resistance',
      value: 'Up to 300°C'
    },
    {
      '@type': 'PropertyValue',
      name: 'Chemical Resistance',
      value: 'Resistant to acids and alkalis'
    },
    {
      '@type': 'PropertyValue',
      name: 'Material',
      value: 'Cotton-Polyester blend'
    }
  ]
}

export default function HeavyDutyCoverall() {
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
              <Link href="/shop/industrial-uniforms/" className="hover:text-blue-600">Industrial Uniforms</Link>
              <span>/</span>
              <span className="text-gray-900">Heavy Duty Coverall</span>
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
                    src="/images/products/industrial/heavy-duty-coverall-main.jpg"
                    alt="Heavy Duty Industrial Coverall - Main Image"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/industrial/heavy-duty-coverall-details.jpg"
                      alt="Industrial Coverall Details"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/industrial/heavy-duty-coverall-features.jpg"
                      alt="Industrial Coverall Features"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/industrial/heavy-duty-coverall-colors.jpg"
                      alt="Available Coverall Colors"
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Heavy Duty Industrial Coverall
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    High-quality coverall specially designed for harsh industrial environments with superior protection from heat and chemicals
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(127 reviews)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <FireIcon className="w-6 h-6 text-red-500" />
                      <span className="text-blue-800">Heat resistant up to 300°C</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BeakerIcon className="w-6 h-6 text-green-500" />
                      <span className="text-blue-800">Chemical resistant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">Full body protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CogIcon className="w-6 h-6 text-purple-500" />
                      <span className="text-blue-800">Practical and comfortable design</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
                    <button className="w-12 h-12 bg-blue-600 rounded-full border-4 border-blue-200"></button>
                    <button className="w-12 h-12 bg-gray-600 rounded-full border-4 border-transparent hover:border-gray-300"></button>
                    <button className="w-12 h-12 bg-orange-500 rounded-full border-4 border-transparent hover:border-orange-300"></button>
                    <button className="w-12 h-12 bg-green-600 rounded-full border-4 border-transparent hover:border-green-300"></button>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    Request Custom Quote
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                    Add to Quote List
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Free Shipping</p>
                    <p className="text-sm text-green-600">On orders over 500 SAR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Consultation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts for the best industrial protection solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
              <Link
                href="/quote/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}