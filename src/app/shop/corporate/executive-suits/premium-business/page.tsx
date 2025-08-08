import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  StarIcon,
  CogIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ClockIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Premium Business Executive Suits | Luxury Corporate Attire | UNEOM',
  description: 'Discover UNEOM\'s premium business executive suits collection. Luxury corporate attire designed specifically for executive leaders in Saudi Arabia. Exceptional quality and contemporary design reflecting distinguished professional identity.',
  keywords: 'premium executive suits, luxury corporate attire, Saudi business suits, professional executive clothing, executive manager suits, UNEOM corporate wear, luxury business suits Riyadh',
  openGraph: {
    title: 'Premium Business Executive Suits | UNEOM',
    description: 'Premium executive suits designed specifically for executive leaders in Saudi Arabia. Exceptional quality and contemporary design.',
    images: ['/images/products/corporate/premium-business-suits-main.jpg']}}

const productFeatures = [
  {
    icon: SparklesIcon,
    title: 'Exclusive Luxury Design',
    description: 'Exclusive designs inspired by the latest global fashion trends, specifically crafted for distinguished executive leaders in the Kingdom.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Exceptional Quality',
    description: 'Luxury fabrics imported from the finest global mills, with precise hand-tailoring ensuring durability and elegance for years to come.'
  },
  {
    icon: CogIcon,
    title: 'Custom Tailoring',
    description: 'Personal tailoring service ensuring perfect fit for each client, with complete customization options for colors and details.'
  },
  {
    icon: UserGroupIcon,
    title: 'Distinguished Corporate Identity',
    description: 'Designs that reflect corporate identity and enhance the professional presence of executives in all formal occasions.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '100% luxury wool or wool-cashmere blend, imported Italian and English fabrics' },
  { label: 'Suit Types', value: 'Two-piece suit, three-piece suit, executive tuxedo, formal evening suit' },
  { label: 'Tailoring Options', value: 'Complete custom tailoring, precise alterations, personal measurements' },
  { label: 'Size Range', value: 'All sizes from S to 5XL with custom tailoring service' },
  { label: 'Color Options', value: 'Classic black, dark navy, charcoal gray, chocolate brown, custom colors' },
  { label: 'Luxury Details', value: 'Luxury metal buttons, silk lining, hidden pockets, logo embroidery' },
  { label: 'Accessories', value: 'Silk tie, luxury cufflinks, pocket square, Italian leather belt' }
]

const includedItems = [
  'Premium Executive Suit (Jacket + Trousers)',
  'Luxury Vest (for three-piece suit)',
  'Matching Silk Tie',
  'Elegant Pocket Square',
  'Luxury Cufflinks',
  'Premium Storage Bag',
  'Care and Maintenance Guide',
  'Two-Year Quality Guarantee'
]

const idealForOccasions = [
  { name: 'Executive Meetings', icon: BuildingOfficeIcon },
  { name: 'International Conferences', icon: UserGroupIcon },
  { name: 'Formal Events', icon: StarIcon },
  { name: 'Formal Dinners', icon: ClockIcon },
  { name: 'Award Ceremonies', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'Classic Executive Suits',
    image: '/images/products/corporate/classic-executive-suits-main.jpg',
    href: '/shop/corporate/executive-suits/classic/',
    price: 'From SAR 1,200'
  },
  {
    name: 'Premium Executive Shirts',
    image: '/images/products/corporate/premium-executive-shirts-main.jpg',
    href: '/shop/corporate/executive-shirts/premium/',
    price: 'From SAR 350'
  },
  {
    name: 'Executive Accessories',
    image: '/images/products/corporate/executive-accessories-main.jpg',
    href: '/shop/corporate/executive-accessories/',
    price: 'From SAR 150'
  }
]

export default function PremiumBusinessSuitsPage() {
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
            <Link href="/shop/corporate/" className="hover:text-blue-600">Corporate Attire</Link>
            <span>/</span>
            <Link href="/shop/corporate/executive-suits/" className="hover:text-blue-600">Executive Suits</Link>
            <span>/</span>
            <span className="text-gray-900">Premium Business</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-yellow-400" />)}
                </div>
                <span className="ml-3 text-yellow-400 font-medium">Excellent Customer Rating</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Business
                <span className="text-yellow-400 block">Executive Suits</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover our premium executive suits collection designed specifically for distinguished leaders. Exceptional quality and contemporary design reflecting sophisticated professional identity in Saudi Arabia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote?product=premium-business-suits"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors text-center"
                >
                  Contact Tailoring Expert
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/corporate/premium-business-suits-hero.jpg"
                  alt="Premium Business Executive Suits"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Premium Executive Suits?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the finest executive suits carefully designed to meet the needs of distinguished leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Premium Executive Suits Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/corporate/premium-business-suit-${i}.jpg`}
                    alt={`Premium executive suit ${i}`}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Perfect for Formal and Executive Occasions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {idealForOccasions.map((occasion, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <occasion.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{occasion.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Premium Suit Specifications</h3>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-800 text-lg">{spec.label}:</span>
                      <span className="text-gray-600 text-right max-w-md">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 p-10 rounded-xl border border-yellow-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Premium Package Includes</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-yellow-100 rounded-lg border border-yellow-300">
                <h4 className="text-xl font-bold text-yellow-800 mb-3">Premium Quality Guarantee</h4>
                <p className="text-yellow-700">
                  We guarantee exceptional quality for two full years, with free maintenance service and alteration options as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Invest in Your Distinguished Professional Appearance
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">From SAR 1,800</div>
              <div className="text-xl text-gray-600">per suit with custom tailoring</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">Two-Piece Suit</div>
                <div className="text-lg text-gray-600">SAR 1,800 - 2,500</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">Three-Piece Suit</div>
                <div className="text-lg text-gray-600">SAR 2,200 - 3,000</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">Luxury Tuxedo</div>
                <div className="text-lg text-gray-600">SAR 2,800 - 4,000</div>
              </div>
            </div>
            
            <Link
              href="/quote?product=premium-business-suits"
              className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-colors inline-block"
            >
              Book Free Consultation Now
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Complete Your Executive Look
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600">{product.name}</h3>
                  <p className="text-yellow-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-20 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Begin Your Journey to Professional Excellence
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            Book a free consultation with our tailoring experts and discover how our premium suits can enhance your professional presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Premium+Business+Suits+Consultation"
              className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/shop/corporate/"
              className="border-2 border-black text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}