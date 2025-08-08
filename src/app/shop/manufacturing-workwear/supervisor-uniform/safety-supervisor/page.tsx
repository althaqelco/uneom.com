import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldExclamationIcon, // More specific for safety
  EyeIcon, // For high visibility
  ClipboardDocumentCheckIcon, // For compliance/reporting
  MegaphoneIcon, // For communication/authority
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Safety Supervisor Uniforms | High-Visibility & Protective Workwear | UNEOM',
  description: 'UNEOM\'s safety supervisor uniforms ensure visibility and protection for those overseeing safety in Saudi Arabian factories. Durable, compliant, and designed for authority.',
  keywords: 'safety supervisor uniforms, high-visibility workwear, protective supervisor clothing, factory safety apparel, industrial safety uniforms, Saudi manufacturing safety, UNEOM safety line',
  openGraph: {
    title: 'Safety Supervisor Uniforms for Manufacturing | UNEOM',
    description: 'Ensure visibility and authority with specialized uniforms for safety supervisors in industrial settings.',
    images: ['/images/products/industrial/safety-supervisor-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: EyeIcon,
    title: 'Maximum Visibility',
    description: 'Bright, contrasting colors and high-quality reflective tape for easy identification in all factory conditions.'
  },
  {
    icon: ShieldExclamationIcon,
    title: 'Enhanced Protection Features',
    description: 'Durable fabrics with options for flame resistance, anti-static properties, or chemical splash protection as needed.'
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Functional for Safety Tasks',
    description: 'Designed with pockets for safety equipment, checklists, and communication devices.'
  },
  {
    icon: MegaphoneIcon, // Represents authority and communication
    title: 'Authoritative Appearance',
    description: 'Professional design that clearly distinguishes safety personnel and reinforces their authority.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'High-Visibility Polyester, Modacrylic Blends (for FR), or treated Cotton/Poly blends' },
  { label: 'Visibility Standards', value: 'Compliant with EN ISO 20471 (Class 2 or 3), ANSI/ISEA 107 options' },
  { label: 'Reflective Material', value: 'Premium quality retroreflective tape (e.g., 3M Scotchlite™)' },
  { label: 'Available Styles', value: 'High-Vis Vests, Shirts, Jackets, Trousers, Coveralls' },
  { label: 'Colors', value: 'Fluorescent Yellow, Fluorescent Orange, with contrasting navy/black panels' },
  { label: 'Sizes', value: 'S - 5XL, designed to be worn over other clothing if necessary' },
  { label: 'Additional Features', value: 'Radio loops, ID badge holders, reinforced stress points, breathable mesh panels (optional)' }
]

const includedItems = [
  'Safety Supervisor High-Visibility Garment (Vest/Shirt/Jacket)',
  'Optional Matching Trousers or Coverall',
  'UNEOM Safety Compliance Information Sheet',
  'Care and Maintenance Guide for High-Visibility Apparel'
]

const idealForResponsibilities = [
  { name: 'Enforcing Safety Protocols', icon: ShieldExclamationIcon },
  { name: 'Conducting Site Inspections', icon: ClipboardDocumentCheckIcon },
  { name: 'Emergency Response Coordination', icon: MegaphoneIcon },
  { name: 'Incident Investigation', icon: EyeIcon }, // For observation
  { name: 'Safety Training & Briefings', icon: UserGroupIcon } // Assuming UserGroupIcon is imported
]

const relatedProducts = [
  {
    name: 'Executive Supervisor Uniform',
    image: '/images/products/industrial/executive-supervisor-uniform-main.jpg',
    href: '/shop/manufacturing-workwear/supervisor-uniform/executive/',
    price: 'From SAR 350'
  },
  {
    name: 'Floor Supervisor Uniform',
    image: '/images/products/industrial/floor-supervisor-uniform.jpg',
    href: '/shop/manufacturing-workwear/supervisor-uniform/floor-supervisor/',
    price: 'From SAR 190'
  },
  {
    name: 'Industrial Safety Vest (Standard)',
    image: '/images/products/industrial/industrial-safety-vest.jpg',
    href: '/shop/high-visibility-clothing/industrial-safety-vest/',
    price: 'From SAR 75'
  }
]
// Ensure UserGroupIcon is imported if used in idealForResponsibilities
import { UserGroupIcon } from '@heroicons/react/24/outline';

export default function SafetySupervisorUniformPage() {
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
            <Link href="/shop/manufacturing-workwear/" className="hover:text-blue-600">Manufacturing Workwear</Link>
            <span>/</span>
            <Link href="/shop/manufacturing-workwear/supervisor-uniform/" className="hover:text-blue-600">Supervisor Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Safety Supervisor</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/industrial/safety-supervisor-uniform-main.jpg"
                  alt="Safety Supervisor Uniform"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-yellow-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/safety-supervisor-detail-${i}.jpg`}
                      alt={`Safety supervisor uniform detail ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="ml-2 text-sm text-gray-600">(Certified High-Visibility & Protection)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Safety Supervisor Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Empower your safety supervisors with UNEOM's specialized uniforms. Designed for maximum visibility, protection, and authority, ensuring your safety leaders stand out and stay safe in demanding Saudi industrial environments.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-orange-600">From SAR 210</span>
                <span className="text-lg text-gray-500 ml-2">per set (e.g., High-Vis Shirt & Trousers)</span>
              </div>
              
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldExclamationIcon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Safety First Design:</strong> Compliant with relevant safety standards, offering peace of mind and enhanced protection for your key safety personnel. <Link href="/resources/safety-standards-guide" className="font-medium underline hover:text-yellow-800">View Safety Standards</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=safety-supervisor-uniform"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex-1 text-center"
                >
                  Request Safety Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Safety Plan
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Critical Safety Features:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>High-Visibility Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Protective Material Options</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Functional for Safety Duties</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Clear Authority Indication</span>
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
            Prioritizing Safety and Visibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Responsibilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tailored for Key Safety Responsibilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForResponsibilities.map((task, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <task.icon className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{task.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Safety Supervisor Uniform Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical & Safety Details</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{spec.label}:</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Your Safety Team Gets</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="text-lg font-semibold text-red-700 mb-2">UNEOM Safety Commitment</h4>
                <p className="text-sm text-red-600">
                  Our safety supervisor uniforms are designed and manufactured with the utmost attention to protection and compliance, supporting your commitment to a safe workplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Other Essential Safety & Supervisor Apparel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600">{product.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
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
      <section className="py-20 bg-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prioritize Safety with UNEOM's Specialized Supervisor Uniforms
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Ensure your safety supervisors are well-equipped, highly visible, and clearly identifiable. Contact UNEOM to discuss your factory's specific safety apparel needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Safety+Supervisor+Uniform+Inquiry"
              className="bg-white text-orange-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult a Safety Apparel Expert
            </Link>
            <Link
              href="/industries/manufacturing#safety"
              className="border-2 border-orange-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:border-white transition-colors text-lg"
            >
              Manufacturing Safety Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}