import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  SunIcon,
  ShieldCheckIcon,
  HeartIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Sports Uniform Set | Athletic School Wear | Performance PE Kit | UNEOM',
  description: 'High-performance sports uniform set for school athletics. Moisture-wicking, breathable fabrics perfect for PE classes and sports activities in Saudi schools.',
  keywords: 'sports uniform Saudi Arabia, PE kit school, athletic wear students, school sports clothing, performance sportswear KSA, student athletic uniforms',
  openGraph: {
    title: 'Sports Uniform Set | Athletic School Wear | Performance PE Kit | UNEOM',
    description: 'High-performance sports uniform set for school athletics. Moisture-wicking, breathable fabrics perfect for PE classes and sports activities.',
    images: ['/images/products/education/sports-uniform-set.jpg']}}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'Performance Fabric',
    description: 'Advanced moisture-wicking technology keeps students dry and comfortable during intense physical activities.'
  },
  {
    icon: SunIcon,
    title: 'UV Protection',
    description: 'Built-in UV protection shields students from harmful sun rays during outdoor sports and activities.'
  },
  {
    icon: FireIcon,
    title: 'Quick-Dry Technology',
    description: 'Fast-drying materials ensure comfort and hygiene throughout extended physical education sessions.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Design',
    description: 'Reinforced construction withstands rigorous sports activities and frequent washing cycles.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '85% Polyester, 15% Elastane blend' },
  { label: 'Weight', value: '140 GSM' },
  { label: 'Colors Available', value: 'Navy/White, Red/White, Green/White, Black/Gray' },
  { label: 'Sizes', value: 'Age 6-18 years (XS-XL)' },
  { label: 'Care Instructions', value: 'Machine wash cold, air dry recommended' },
  { label: 'Special Features', value: 'Moisture-wicking, UV protection, anti-odor' }
]

const includedItems = [
  'Performance polo shirt with school logo',
  'Athletic shorts with elastic waistband',
  'Moisture-wicking sports socks',
  'Optional track jacket for cooler weather',
  'Care instruction card',
  'Size guide for optimal fit'
]

const sportsActivities = [
  {
    name: 'Football/Soccer',
    description: 'Perfect for outdoor football training and matches',
    icon: '⚽'
  },
  {
    name: 'Basketball',
    description: 'Ideal for indoor basketball courts and training',
    icon: '🏀'
  },
  {
    name: 'Track & Field',
    description: 'Optimized for running and athletic competitions',
    icon: '🏃'
  },
  {
    name: 'General PE',
    description: 'Suitable for all physical education activities',
    icon: '🏃‍♀️'
  }
]

const relatedProducts = [
  {
    name: 'Premium Boys School Set',
    image: '/images/products/education/premium-boys-school-set.jpg',
    href: '/shop/education/school-uniforms/premium-boys-set/',
    price: 'From SAR 220'
  },
  {
    name: 'Classic Girls School Set',
    image: '/images/products/education/classic-girls-school-set.jpg',
    href: '/shop/education/school-uniforms/classic-girls-set/',
    price: 'From SAR 180'
  },
  {
    name: 'Athletic Training Gear',
    image: '/images/products/education/athletic-training-gear.jpg',
    href: '/shop/education/sports-equipment/training-gear/',
    price: 'From SAR 95'
  }
]

export default function SportsUniformSetPage() {
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
            <Link href="/shop/education/" className="hover:text-blue-600">Education</Link>
            <span>/</span>
            <Link href="/shop/education/school-uniforms/" className="hover:text-blue-600">School Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Sports Set</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/education/sports-uniform-set.jpg"
                  alt="Sports Uniform Set"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-1.jpg"
                    alt="Polo shirt detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-2.jpg"
                    alt="Shorts detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-3.jpg"
                    alt="Track jacket"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/sports-set-detail-4.jpg"
                    alt="Full athletic set"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(156 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sports Uniform Set
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                High-performance athletic uniform designed for school sports and PE activities. 
                Features advanced moisture-wicking technology and UV protection for optimal comfort and safety.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 120</span>
                <span className="text-lg text-gray-500 ml-2">per set</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 px-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color Combination</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" defaultChecked />
                    <span>Navy Blue / White</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" />
                    <span>Red / White</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" />
                    <span>Green / White</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" />
                    <span>Black / Gray</span>
                  </label>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">-</button>
                  <span className="text-lg font-semibold">1</span>
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1">
                  Add to Quote
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex-1">
                  <HeartIcon className="h-5 w-5 inline mr-2" />
                  Save for Later
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Moisture-wicking fabric</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>UV protection included</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Anti-odor technology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bulk discounts available</span>
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
            Performance Features for Active Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for All Sports Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsActivities.map((activity, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.name}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Your School Uniform Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    View Details
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your School with Performance Sports Uniforms
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our education specialists for bulk pricing on high-performance sports uniforms. 
            Keep your students comfortable and protected during all athletic activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Sports Uniform Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Contact PE Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}