import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  ClockIcon,
  CogIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  LockClosedIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Professional Security Kit - Complete Security Equipment | UNEOM',
  description: 'Comprehensive professional security kit containing all essential equipment and accessories for security personnel and guards in Saudi Arabia',
  keywords: 'security kit, security equipment, security accessories, guard equipment, security gear, protection equipment, Saudi Arabia',
  openGraph: {
    title: 'Professional Security Kit - Complete Security Equipment | UNEOM',
    description: 'Comprehensive professional security kit containing all essential equipment and accessories for security personnel and guards',
    images: ['/images/products/security/professional-security-kit-en.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-accessories/professional-kit/',
    languages: {
      'en': 'https://uneom.com/shop/security-accessories/professional-kit/',
      'ar': 'https://uneom.com/ar/shop/security-accessories/professional-kit/',
    },
  },
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Professional Security Kit',
  description: 'Comprehensive professional security kit containing all essential equipment and accessories for security personnel and guards',
  image: [
    'https://uneom.com/images/products/security/professional-security-kit-main.jpg',
    'https://uneom.com/images/products/security/professional-security-kit-contents.jpg',
    'https://uneom.com/images/products/security/professional-security-kit-features.jpg'
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
  category: 'Security Equipment and Accessories',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM'
    },
    url: 'https://uneom.com/shop/security-accessories/professional-kit/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89',
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
        name: 'Saad Al-Ghamdi'
      },
      reviewBody: 'Excellent and comprehensive kit, high quality and all equipment necessary for security work'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Number of Pieces',
      value: '12 pieces'
    },
    {
      '@type': 'PropertyValue',
      name: 'Materials',
      value: 'Genuine leather and stainless steel'
    },
    {
      '@type': 'PropertyValue',
      name: 'Warranty',
      value: 'Two years'
    }
  ]
}

export default function ProfessionalSecurityKit() {
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
              <span className="text-gray-900">Professional Security Kit</span>
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
                    src="/images/products/security/professional-security-kit-main.jpg"
                    alt="Professional Security Kit - Main Image"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/professional-security-kit-contents.jpg"
                      alt="Security Kit Contents"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/professional-security-kit-features.jpg"
                      alt="Security Kit Features"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/security/professional-security-kit-case.jpg"
                      alt="Security Kit Case"
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
                    Professional Security Kit
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    Comprehensive and complete kit containing all essential equipment and accessories for professional security personnel and guards
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
                    <span className="text-sm text-gray-600">(89 reviews)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">12 complete pieces</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <LockClosedIcon className="w-6 h-6 text-green-500" />
                      <span className="text-blue-800">High professional quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-6 h-6 text-purple-500" />
                      <span className="text-blue-800">Practical and comfortable design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BoltIcon className="w-6 h-6 text-yellow-500" />
                      <span className="text-blue-800">Heavy-duty resistant</span>
                    </div>
                  </div>
                </div>

                {/* Kit Contents */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Kit Contents</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Leather security belt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Radio holster</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Key holder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Flashlight holster</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Pen holder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Notebook holder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>ID card holder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Plastic bag holder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Metal key rings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Multi-purpose clips</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>Resistant carrying case</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span>User manual</span>
                    </div>
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
                    <p className="text-sm text-green-600">On orders over 300 SAR</p>
                  </div>
                </div>

                {/* Warranty Info */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-800">Two Year Warranty</p>
                    <p className="text-sm text-blue-600">Comprehensive warranty on all pieces</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Number of Pieces</span>
                    <span className="text-gray-600">12 pieces</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Belt Material</span>
                    <span className="text-gray-600">High-quality genuine leather</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Hardware</span>
                    <span className="text-gray-600">Stainless steel</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Color</span>
                    <span className="text-gray-600">Professional black</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Sizes</span>
                    <span className="text-gray-600">Adjustable</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Warranty</span>
                    <span className="text-gray-600">Two years comprehensive</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Design</h4>
                      <p className="text-gray-600">Elegant and professional appearance suitable for all security work environments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Comfort in Use</h4>
                      <p className="text-gray-600">Comfortable design allows freedom of movement during work</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Perfect Organization</h4>
                      <p className="text-gray-600">Organized holders for all necessary equipment and tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">High Durability</h4>
                      <p className="text-gray-600">High-quality materials withstand intensive use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Easy Maintenance</h4>
                      <p className="text-gray-600">Easy to clean and maintain while preserving appearance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Private Security</h4>
                    <p className="text-blue-800 text-sm">Ideal for private security and guard companies</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Facility Security</h4>
                    <p className="text-green-800 text-sm">Building and commercial complex security</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Industrial Security</h4>
                    <p className="text-purple-800 text-sm">Protection of factories and industrial facilities</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Event Security</h4>
                    <p className="text-orange-800 text-sm">Securing conferences and special events</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Reviews</h2>
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
                  "Excellent and comprehensive kit, high quality and all equipment necessary for security work. Highly recommend it."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Saad Al-Ghamdi</p>
                  <p>Security Officer - Al Rajhi Company</p>
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
                  "Great organization and excellent quality. The belt is very comfortable and the holders are practical and useful."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Fahd Al-Otaibi</p>
                  <p>Security Chief - Al Othaim Mall</p>
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
                  "Excellent investment for security workers. Professional quality and reasonable price."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Khalid Al-Shehri</p>
                  <p>Security Manager - King Fahd Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Equip Your Security Team with the Best Equipment
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a professional security kit to ensure outstanding performance and effective protection
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