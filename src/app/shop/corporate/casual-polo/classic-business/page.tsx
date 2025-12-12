import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Classic Business Polo Shirts | Professional Corporate Attire | UNEOM',
  description: 'Premium classic business polo shirts for corporate professionals in Saudi Arabia. High-quality, comfortable, and professional polo shirts designed for business environments.',
  keywords: 'classic business polo, corporate polo shirts Saudi Arabia, professional polo shirts, business casual attire, corporate clothing',
  openGraph: {
    title: 'Classic Business Polo Shirts | Professional Corporate Attire | UNEOM',
    description: 'Premium classic business polo shirts designed for corporate professionals, combining comfort with professional appearance.',
    images: ['/images/products/corporate-polo-shirts.jpg']
  }
}

const poloFeatures = [
  {
    icon: SparklesIcon,
    title: 'Premium Cotton Blend',
    description: 'High-quality cotton blend fabric that provides comfort, breathability, and maintains professional appearance throughout the day.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Wrinkle Resistant',
    description: 'Advanced fabric treatment ensures the polo maintains a crisp, professional look even after long workdays.'
  },
  {
    icon: UserGroupIcon,
    title: 'Professional Fit',
    description: 'Tailored cut designed for business environments, providing comfort while maintaining a polished appearance.'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Corporate Ready',
    description: 'Perfect for business casual environments, client meetings, and professional corporate settings.'
  }
]

const colorOptions = [
  { name: 'Navy Blue', code: '#1e3a8a', description: 'Classic corporate navy for professional settings' },
  { name: 'White', code: '#ffffff', description: 'Clean, crisp white for versatile business wear' },
  { name: 'Light Blue', code: '#3b82f6', description: 'Professional light blue for modern offices' },
  { name: 'Charcoal Gray', code: '#374151', description: 'Sophisticated gray for executive wear' },
  { name: 'Black', code: '#000000', description: 'Elegant black for formal business occasions' },
  { name: 'Burgundy', code: '#7c2d12', description: 'Rich burgundy for distinguished professionals' }
]

const sizeChart = [
  { size: 'S', chest: '96-101 cm', length: '68 cm', shoulder: '44 cm' },
  { size: 'M', chest: '101-106 cm', length: '70 cm', shoulder: '46 cm' },
  { size: 'L', chest: '106-111 cm', length: '72 cm', shoulder: '48 cm' },
  { size: 'XL', chest: '111-116 cm', length: '74 cm', shoulder: '50 cm' },
  { size: 'XXL', chest: '116-121 cm', length: '76 cm', shoulder: '52 cm' },
  { size: 'XXXL', chest: '121-126 cm', length: '78 cm', shoulder: '54 cm' }
]

const careInstructions = [
  'Machine wash cold with like colors',
  'Use mild detergent, avoid bleach',
  'Tumble dry low heat or hang dry',
  'Iron on medium heat if needed',
  'Professional dry cleaning recommended for best results'
]

export default function ClassicBusinessPoloPage() {
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
            <Link href="/shop/corporate/casual-polo/" className="hover:text-blue-600">Casual Polo</Link>
            <span>/</span>
            <span className="text-gray-900">Classic Business</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/corporate-polo-shirts.jpg"
            alt="Classic business polo shirts background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarSolidIcon key={i} className="h-8 w-8 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Classic Business Polo Shirts
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Premium polo shirts designed for the modern business professional. Combining classic style with contemporary comfort for today's corporate environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=classic-business-polo"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Classic Business Polo Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Excellence in Every Detail
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our classic business polo shirts represent the perfect balance between professional appearance and everyday comfort. Crafted from premium cotton blends and designed with the modern business professional in mind, these polos are ideal for business casual environments, client meetings, and corporate events.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Materials</h3>
                    <p className="text-gray-600">High-quality cotton blend for superior comfort and durability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Design</h3>
                    <p className="text-gray-600">Classic collar and button placket for timeless business appeal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Care</h3>
                    <p className="text-gray-600">Machine washable with wrinkle-resistant properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/corporate/polo-shirt-collection.jpg"
                alt="Classic business polo shirt details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Polo Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect designed to provide the perfect business casual experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {poloFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Colors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully selected color palette designed for professional environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorOptions.map((color) => (
              <div key={color.name} className="bg-white border rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-gray-300 mr-4"
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{color.name}</h3>
                    <p className="text-sm text-gray-600">{color.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Chart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Size Chart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive sizing guide.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Size</th>
                  <th className="px-6 py-3 text-left">Chest (cm)</th>
                  <th className="px-6 py-3 text-left">Length (cm)</th>
                  <th className="px-6 py-3 text-left">Shoulder (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((size, index) => (
                  <tr key={size.size} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold">{size.size}</td>
                    <td className="px-6 py-4">{size.chest}</td>
                    <td className="px-6 py-4">{size.length}</td>
                    <td className="px-6 py-4">{size.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Care Instructions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proper care ensures your polo shirts maintain their professional appearance and longevity.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-8 shadow-md">
            <ul className="space-y-4">
              {careInstructions.map((instruction, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Professional Wardrobe
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact our corporate clothing specialists to discuss your business polo shirt needs and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=classic-business-polo"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Corporate Quote
            </Link>
            <Link
              href="/shop/corporate/casual-polo/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View All Polo Shirts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}