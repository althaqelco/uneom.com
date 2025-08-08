import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Faculty Professional Blazer | Academic Staff Uniform | University Attire | UNEOM',
  description: 'Premium faculty blazer for university professors and academic staff. Sophisticated design with luxury wool blend, perfect for lectures, conferences, and formal academic events.',
  keywords: 'faculty blazer Saudi Arabia, university professor uniform, academic staff attire, professional blazer KSA, university clothing, academic formal wear',
  openGraph: {
    title: 'Faculty Professional Blazer | Academic Staff Uniform | University Attire | UNEOM',
    description: 'Premium faculty blazer for university professors and academic staff. Sophisticated design with luxury wool blend, perfect for academic events.',
    images: ['/images/products/education/faculty-professional-blazer.jpg']}}

const productFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'Academic Excellence',
    description: 'Designed to reflect the prestige and professionalism of higher education institutions.'
  },
  {
    icon: SparklesIcon,
    title: 'Luxury Materials',
    description: 'Premium wool blend fabric with superior drape and comfort for all-day wear.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Tailored Fit',
    description: 'Expertly tailored for a sophisticated silhouette that commands respect and authority.'
  },
  {
    icon: UserIcon,
    title: 'Professional Design',
    description: 'Classic academic styling suitable for lectures, conferences, and formal university events.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '70% Wool, 25% Polyester, 5% Elastane' },
  { label: 'Weight', value: '280 GSM' },
  { label: 'Colors Available', value: 'Navy Blue, Charcoal Gray, Black, Burgundy' },
  { label: 'Sizes', value: 'XS-4XL (European sizing)' },
  { label: 'Care Instructions', value: 'Dry clean only, professional pressing recommended' },
  { label: 'Customization', value: 'University emblem, department badges, personalization' }
]

const includedItems = [
  'Premium wool blend blazer with university styling',
  'Matching pocket square (optional)',
  'University emblem embroidery',
  'Professional garment bag',
  'Care instruction card',
  'Tailoring adjustment guide'
]

const academicOccasions = [
  {
    name: 'Lectures & Seminars',
    description: 'Perfect for daily teaching and academic presentations',
    icon: '👨‍🏫'
  },
  {
    name: 'Conferences',
    description: 'Ideal for academic conferences and symposiums',
    icon: '🎓'
  },
  {
    name: 'Graduation Ceremonies',
    description: 'Sophisticated attire for commencement events',
    icon: '🎓'
  },
  {
    name: 'Board Meetings',
    description: 'Professional appearance for administrative meetings',
    icon: '📋'
  }
]

const relatedProducts = [
  {
    name: 'Academic Dress Shirt',
    image: '/images/products/education/academic-dress-shirt.jpg',
    href: '/shop/education/university-attire/dress-shirt/',
    price: 'From SAR 180'
  },
  {
    name: 'University Tie Collection',
    image: '/images/products/education/university-tie-collection.jpg',
    href: '/shop/education/university-attire/tie-collection/',
    price: 'From SAR 85'
  },
  {
    name: 'Academic Trousers',
    image: '/images/products/education/academic-trousers.jpg',
    href: '/shop/education/university-attire/trousers/',
    price: 'From SAR 220'
  }
]

export default function FacultyBlazerPage() {
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
            <Link href="/shop/education/university-attire/" className="hover:text-blue-600">University Attire</Link>
            <span>/</span>
            <span className="text-gray-900">Faculty Blazer</span>
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
                  src="/images/products/education/faculty-professional-blazer.jpg"
                  alt="Faculty Professional Blazer"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-1.jpg"
                    alt="Blazer front detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-2.jpg"
                    alt="Lapel and buttons"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-3.jpg"
                    alt="University emblem"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/blazer-detail-4.jpg"
                    alt="Back view"
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
                <span className="ml-2 text-sm text-gray-600">(73 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Faculty Professional Blazer
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Sophisticated academic blazer crafted for university faculty and academic professionals. 
                Features premium wool blend construction and classic styling perfect for lectures, conferences, and formal academic events.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 350</span>
                <span className="text-lg text-gray-500 ml-2">per piece</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
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
                <div className="flex space-x-3">
                  <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-red-900 border-2 border-gray-300 hover:border-blue-500"></button>
                </div>
              </div>

              {/* Customization Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customization</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>University emblem embroidery</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Department badge</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Personal name embroidery</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Matching pocket square</span>
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
                    <span>Premium wool blend</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Professional tailoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom embroidery</span>
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
            Designed for Academic Excellence
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

      {/* Academic Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Every Academic Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicOccasions.map((occasion, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
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

      {/* Academic Prestige Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Elevate Your Academic Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty blazer is more than just clothing—it's a symbol of academic achievement and professional excellence. 
              Designed to command respect in lecture halls, boardrooms, and academic conferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingLibraryIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">University Heritage</h3>
              <p className="text-gray-600">
                Classic academic styling that honors the traditions and prestige of higher education institutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Authority</h3>
              <p className="text-gray-600">
                Sophisticated design that enhances your professional presence and academic credibility.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Craftsmanship</h3>
              <p className="text-gray-600">
                Premium materials and expert tailoring ensure lasting quality and timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Your Academic Wardrobe
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
            Outfit Your Faculty with Professional Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our academic specialists for bulk pricing and customization options for your university faculty. 
            Enhance your institution's professional image with premium academic attire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Faculty Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Contact Academic Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}