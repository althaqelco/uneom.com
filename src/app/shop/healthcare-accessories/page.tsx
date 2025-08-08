import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  TruckIcon, 
  CheckCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  BeakerIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Healthcare Accessories | UNEOM Premium Medical Equipment',
  description: 'Discover UNEOM\'s comprehensive collection of healthcare accessories - high-quality medical equipment and tools for healthcare professionals in Saudi Arabia. Professional grade accessories for hospitals and clinics.',
  keywords: 'healthcare accessories, medical equipment, healthcare tools Saudi Arabia, medical accessories, hospital equipment, clinic supplies',
  openGraph: {
    title: 'Healthcare Accessories | UNEOM',
    description: 'Comprehensive collection of high-quality healthcare accessories for medical professionals',
    images: ['/images/products/healthcare-accessories.jpg'],
    locale: 'en_US'},
  alternates: {
    canonical: '/shop/healthcare-accessories/',
    languages: {
      'en': '/shop/healthcare-accessories/',
      'ar': '/ar/shop/healthcare-accessories/'}}}

const categories = [
  {
    title: 'Professional Medical Kits',
    description: 'Comprehensive medical tool kits for healthcare professionals',
    image: '/images/products/medical-professional-kit.jpg',
    link: '/shop/medical-accessories/professional-kit',
    items: '12+ items'
  },
  {
    title: 'Diagnostic Equipment',
    description: 'High-quality diagnostic tools and equipment',
    image: '/images/products/diagnostic-equipment.jpg',
    link: '/shop/healthcare-accessories/diagnostic-equipment',
    items: '25+ items'
  },
  {
    title: 'Safety & Protection',
    description: 'Personal protective equipment for healthcare workers',
    image: '/images/products/medical-ppe.jpg',
    link: '/shop/healthcare-accessories/safety-protection',
    items: '18+ items'
  },
  {
    title: 'Storage Solutions',
    description: 'Organized storage for medical supplies and equipment',
    image: '/images/products/medical-storage.jpg',
    link: '/shop/healthcare-accessories/storage-solutions',
    items: '15+ items'
  }
]

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Medical Grade Quality',
    description: 'All accessories meet international medical standards and certifications'
  },
  {
    icon: BeakerIcon,
    title: 'Sterile & Safe',
    description: 'Designed for sterile environments with antimicrobial properties'
  },
  {
    icon: CogIcon,
    title: 'Easy to Use',
    description: 'Ergonomic design for comfortable daily use by healthcare professionals'
  },
  {
    icon: TruckIcon,
    title: 'Fast Delivery',
    description: 'Quick delivery across Saudi Arabia with tracking'
  }
]

const popularProducts = [
  {
    name: 'Professional Medical Kit',
    description: 'Complete medical tool kit for healthcare professionals',
    image: '/images/products/medical-professional-kit.jpg',
    link: '/shop/medical-accessories/professional-kit',
    rating: 5,
    reviews: 127
  },
  {
    name: 'Digital Stethoscope',
    description: 'Advanced digital stethoscope with noise cancellation',
    image: '/images/products/digital-stethoscope.jpg',
    link: '/shop/healthcare-accessories/digital-stethoscope',
    rating: 5,
    reviews: 89
  },
  {
    name: 'Medical Storage Case',
    description: 'Waterproof storage case for medical equipment',
    image: '/images/products/medical-storage-case.jpg',
    link: '/shop/healthcare-accessories/storage-case',
    rating: 4,
    reviews: 156
  }
]

const testimonials = [
  {
    name: 'Dr. Sarah Al-Mutairi',
    role: 'Internal Medicine Consultant',
    content: 'Excellent quality accessories that have improved our daily workflow. The professional kit is comprehensive and well-organized.',
    rating: 5,
    hospital: 'King Fahd Hospital'
  },
  {
    name: 'Ahmed Al-Zahrani',
    role: 'Laboratory Technician',
    content: 'Best investment for our lab. The quality is outstanding and the equipment is very reliable.',
    rating: 5,
    hospital: 'King Salman Medical Complex'
  }
]

export default function HealthcareAccessoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-blue-600">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Healthcare Accessories</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Healthcare Accessories
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of high-quality healthcare accessories designed for medical professionals in Saudi Arabia. From diagnostic tools to storage solutions, we provide everything you need for efficient healthcare delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Browse Catalog
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search healthcare accessories..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
                Filters
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accessory Categories
            </h2>
            <p className="text-lg text-gray-600">
              Browse our organized categories to find exactly what you need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium">{category.items}</span>
                      <span className="text-blue-600 group-hover:text-blue-700">
                        View All →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Healthcare Accessories
            </h2>
            <p className="text-lg text-gray-600">
              Quality, reliability, and professional standards in every product
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Healthcare Accessories
            </h2>
            <p className="text-lg text-gray-600">
              Most trusted products by healthcare professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularProducts.map((product, index) => (
              <Link key={index} href={product.link} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(product.rating)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                      </div>
                      <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Healthcare Professionals Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by medical professionals across Saudi Arabia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your Healthcare Facility Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of healthcare professionals who trust UNEOM for their medical accessories needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Custom Quote
            </button>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop/medical-scrubs" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/medical-scrubs.jpg"
                  alt="Medical Scrubs"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Medical Scrubs</h3>
                  <p className="text-gray-600 text-sm">Professional medical uniforms and scrubs</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/healthcare-uniforms" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/healthcare-uniforms.jpg"
                  alt="Healthcare Uniforms"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Healthcare Uniforms</h3>
                  <p className="text-gray-600 text-sm">Complete healthcare uniform solutions</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/ppe" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/medical-ppe.jpg"
                  alt="Personal Protective Equipment"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Protective Equipment</h3>
                  <p className="text-gray-600 text-sm">Safety equipment for healthcare workers</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}