import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  SunIcon, // For breathability/UV protection
  BoltIcon // For performance/activity
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Performance Polo Shirts | Moisture-Wicking Corporate Polos | UNEOM',
  description: 'High-performance polo shirts for active professionals. Featuring moisture-wicking fabrics, UV protection, and breathable designs for ultimate comfort and style in Saudi Arabia.',
  keywords: 'performance polo shirts, moisture-wicking polos, corporate activewear KSA, UV protection polo shirts, breathable team polos',
  openGraph: {
    title: 'Performance Polo Shirts | Moisture-Wicking Corporate Polos | UNEOM',
    description: 'Stay cool, dry, and professional with our high-performance polo shirts, engineered for active corporate environments.',
    images: ['/images/products/corporate/performance-polo-main.jpg']}}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'Advanced Moisture-Wicking',
    description: 'Keeps you cool and dry by drawing sweat away from the body, perfect for active roles and warm climates.'
  },
  {
    icon: SunIcon,
    title: 'Breathable & Lightweight',
    description: 'Engineered fabrics that allow for maximum airflow and a lightweight feel for all-day comfort.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'UV Protection Options',
    description: 'Select styles offer UPF protection to shield skin from harmful sun rays during outdoor activities.'
  },
  {
    icon: SparklesIcon,
    title: 'Durable & Easy Care',
    description: 'Resistant to shrinking, fading, and wrinkling, ensuring a lasting professional look with minimal upkeep.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '100% Polyester Performance Knit or Polyester-Spandex Blends' },
  { label: 'Technology', value: 'Moisture-wicking, Quick-dry, Anti-odor (in select styles), UPF 30-50+' },
  { label: 'Colors Available', value: 'Vibrant athletic colors, classic corporate shades, custom options' },
  { label: 'Sizes', value: 'S-4XL (Athletic and standard fits available)' },
  { label: 'Features', value: 'Tagless label for comfort, athletic cut, reinforced shoulder seams' },
  { label: 'Care Instructions', value: 'Machine wash cold, tumble dry low, do not use fabric softener' },
  { label: 'Customization', value: 'Performance-friendly embroidery, heat transfer logos, custom color panels' }
]

const includedItems = [
  'Performance Polo Shirt',
  'Technical fabric care guide',
  'Recyclable packaging'
]

const occasions = [
  {
    name: 'Outdoor Corporate Events',
    description: 'Stay comfortable and protected during company outings or golf days.',
    icon: '⛳'
  },
  {
    name: 'Active Team Roles',
    description: 'Ideal for staff who are constantly on the move or work in warm environments.',
    icon: '🏃'
  },
  {
    name: 'Sports Teams & Clubs',
    description: 'Professional and functional apparel for corporate sports teams.',
    icon: '🏅'
  },
  {
    name: 'Promotional Activewear',
    description: 'High-value branded apparel for health and wellness initiatives.',
    icon: '💪'
  }
]

const relatedProducts = [
  {
    name: 'Classic Corporate Polos',
    image: '/images/products/corporate/classic-polo-shirts.jpg',
    href: '/shop/corporate/casual-polo/classic/',
    price: 'From SAR 75'
  },
  {
    name: 'Premium Corporate Polos',
    image: '/images/products/corporate/premium-corporate-polos.jpg',
    href: '/shop/corporate/casual-polo/premium-corporate/',
    price: 'From SAR 120'
  },
  {
    name: 'Performance T-Shirts',
    image: '/images/products/corporate/performance-tshirts.jpg', // Placeholder
    href: '/shop/corporate/performance-wear/', // Placeholder
    price: 'From SAR 60'
  }
]

export default function PerformancePoloPage() {
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
            <Link href="/shop/corporate/" className="hover:text-blue-600">Corporate</Link>
            <span>/</span>
            <Link href="/shop/corporate/casual-polo/" className="hover:text-blue-600">Casual Polo Shirts</Link>
            <span>/</span>
            <span className="text-gray-900">Performance</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/corporate/performance-polo-main.jpg"
                  alt="Performance Polo Shirt"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={`/images/products/corporate/performance-polo-detail-${i}.jpg`}
                      alt={`Performance polo detail ${i}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="ml-2 text-sm text-gray-600">(185 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Performance Polo Shirts
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Engineered for active professionals, our Performance Polo Shirts combine style with advanced fabric technology. Stay cool, dry, and comfortable whether in the office, at an event, or on the go.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 90</span>
                <span className="text-lg text-gray-500 ml-2">per shirt</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
                <div className="flex flex-wrap gap-3">
                  {['Electric Blue', 'Graphite', 'White', 'Red', 'Forest Green', 'Silver'].map(color => (
                    <button key={color} className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color.toLowerCase().replace(' ', '-')}-500 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>Custom Colors...</span>
                    </button>
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
                    <span>Moisture-Wicking Fabric</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Breathable & Lightweight</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>UV Protection Available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Anti-Odor Technology</span>
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
            Engineered for Peak Performance & Comfort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow">
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

      {/* Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ideal for Active Corporate Lifestyles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{occasion.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{occasion.name}</h3>
                <p className="text-gray-600">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="space-y-4 bg-white p-6 rounded-lg shadow">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Performance Branding</h3>
                <p className="text-blue-600 mb-4">
                  Our performance polos are suitable for specialized branding techniques like heat transfer, ensuring your logo looks sharp and stays durable even with active use.
                </p>
                <Link href="/services/custom-design/#performance-branding" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  Explore Performance Branding <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Discover More Corporate Wear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Team's Performance and Style
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Equip your team with our high-performance polo shirts. Ideal for active roles, corporate sports, or a comfortable yet professional daily look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?item=performance-polo"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Performance Polo Quote
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              Consult Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}