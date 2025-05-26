import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  BoltIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  LockClosedIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Advanced Tactical Kit - Professional Tactical Equipment | UNEOM',
  description: 'Advanced tactical kit for special security operations and tactical units, featuring the latest tactical equipment and accessories in Saudi Arabia',
  keywords: 'tactical kit, tactical equipment, tactical security, special operations, advanced security equipment, Saudi Arabia',
  openGraph: {
    title: 'Advanced Tactical Kit - Professional Tactical Equipment | UNEOM',
    description: 'Advanced tactical kit for special security operations and tactical units',
    images: ['/images/products/security/tactical-kit-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-accessories/tactical-kit/',
    languages: {
      'en': 'https://uneom.com/shop/security-accessories/tactical-kit/',
      'ar': 'https://uneom.com/ar/shop/security-accessories/tactical-kit/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Advanced Tactical Kit',
  description: 'Advanced tactical kit for special security operations and tactical units, featuring the latest tactical equipment and accessories',
  image: [
    'https://uneom.com/images/products/security/tactical-kit-main.jpg',
    'https://uneom.com/images/products/security/tactical-kit-contents.jpg',
    'https://uneom.com/images/products/security/tactical-kit-features.jpg'
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
  category: 'Tactical Security Equipment',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM'
    },
    url: 'https://uneom.com/shop/security-accessories/tactical-kit/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '67',
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
        name: 'Majed Al-Harbi'
      },
      reviewBody: 'Excellent and comprehensive tactical kit, military quality and all equipment necessary for tactical operations'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Number of Pieces',
      value: '15 pieces'
    },
    {
      '@type': 'PropertyValue',
      name: 'Materials',
      value: 'Tactical nylon and resistant metals'
    },
    {
      '@type': 'PropertyValue',
      name: 'Standards',
      value: 'Military standards'
    }
  ]
}

export default function TacticalKit() {
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
              <Link href="/shop/security-accessories/" className="hover:text-blue-600">Security Accessories</Link>
              <span>/</span>
              <span className="text-gray-900">Advanced Tactical Kit</span>
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
                    src="/images/products/security/tactical-kit-main.jpg"
                    alt="Advanced Tactical Kit - Main Image"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-kit-contents.jpg"
                      alt="Tactical Kit Contents"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-kit-features.jpg"
                      alt="Tactical Kit Features"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/tactical-kit-vest.jpg"
                      alt="Tactical Vest"
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
                    Advanced Tactical Kit
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    Comprehensive and advanced tactical kit designed for special security operations and professional tactical units
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
                    <span className="text-sm text-gray-600">(67 reviews)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Tactical Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-slate-600" />
                      <span className="text-slate-800">15 tactical pieces</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FireIcon className="w-6 h-6 text-red-500" />
                      <span className="text-slate-800">Heat and fire resistant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BoltIcon className="w-6 h-6 text-yellow-500" />
                      <span className="text-slate-800">Impact resistant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-6 h-6 text-green-500" />
                      <span className="text-slate-800">Enhanced night vision</span>
                    </div>
                  </div>
                </div>

                {/* Tactical Contents */}
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tactical Kit Contents</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Resistant tactical vest</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Multi-pocket tactical belt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Tactical pistol holster</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Double magazine pouch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>LED tactical flashlight</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Multi-purpose tactical knife</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Resistant tactical gloves</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>First aid kit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Resistant tactical rope</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Protection masks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Tactical protection glasses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Wireless communication device</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Waterproof carrying bag</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Tactical operations manual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Specialized identification badges</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    Request Quote for Tactical Units
                  </button>
                  <button className="w-full border-2 border-slate-800 text-slate-800 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-colors">
                    Add to Quote List
                  </button>
                </div>

                {/* Special Notice */}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-3">
                    <LockClosedIcon className="w-6 h-6 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-amber-800">Important Notice</p>
                      <p className="text-sm text-amber-700">This product is exclusively for licensed security and military agencies</p>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Secure Specialized Shipping</p>
                    <p className="text-sm text-green-600">Direct delivery to licensed agencies</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tactical Specifications</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Number of Pieces</span>
                    <span className="text-gray-600">15 tactical pieces</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Vest Material</span>
                    <span className="text-gray-600">1000D tactical nylon</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Ballistic Resistance</span>
                    <span className="text-gray-600">Level IIIA</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Color</span>
                    <span className="text-gray-600">Tactical black</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Standards</span>
                    <span className="text-gray-600">NIJ 0101.06</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Warranty</span>
                    <span className="text-gray-600">3 years</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tactical Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Protection</h4>
                      <p className="text-gray-600">Comprehensive protection from various threats and projectiles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tactical Flexibility</h4>
                      <p className="text-gray-600">Design allows freedom of movement during operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Organization</h4>
                      <p className="text-gray-600">Organized pockets and holders for all tactical equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Military Durability</h4>
                      <p className="text-gray-600">Military-grade materials withstand harsh conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Technologies</h4>
                      <p className="text-gray-600">Latest technologies in tactical equipment field</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Special Units</h4>
                    <p className="text-slate-800 text-sm">Tactical operations and special missions</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Counter-Terrorism</h4>
                    <p className="text-blue-800 text-sm">Counter-terrorism operations and threat response</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Government Security</h4>
                    <p className="text-green-800 text-sm">Protection of sensitive government facilities</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Military Operations</h4>
                    <p className="text-red-800 text-sm">Military and defense missions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Unit Reviews</h2>
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
                  "Excellent and comprehensive tactical kit, military quality and all equipment necessary for tactical operations."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Majed Al-Harbi</p>
                  <p>Special Unit Commander - National Guard</p>
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
                  "Professional equipment and high durability. Meets all requirements for complex tactical operations."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Abdullah Al-Qahtani</p>
                  <p>Tactical Officer - Ministry of Interior</p>
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
                  "Excellent investment for tactical units. Military quality and reliable field performance."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Faisal Al-Dosari</p>
                  <p>Tactical Trainer - King Fahd Security College</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Equip Your Tactical Unit with Latest Equipment
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get an advanced tactical kit to ensure success of sensitive security operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Contact Specialists
              </Link>
              <Link
                href="/quote/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center"
              >
                Request Specialized Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}