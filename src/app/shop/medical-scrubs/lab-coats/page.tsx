import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BeakerIcon,
  UserIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Professional Lab Coats | Medical Laboratory Uniforms | UNEOM',
  description: 'UNEOM\'s professional lab coats provide superior protection and comfort for medical professionals in Saudi Arabia. High-quality laboratory uniforms designed for healthcare excellence.',
  keywords: 'lab coats, medical laboratory uniforms, healthcare apparel, professional lab wear, Saudi medical uniforms, laboratory clothing, UNEOM medical scrubs, doctor lab coats',
  openGraph: {
    title: 'Professional Lab Coats for Medical Professionals | UNEOM',
    description: 'Premium lab coats designed for medical professionals and laboratory technicians in Saudi healthcare facilities.',
    images: ['/images/products/medical/lab-coats-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Superior Protection',
    description: 'Advanced fabric protection against spills, stains, and contamination in laboratory environments.'
  },
  {
    icon: BeakerIcon,
    title: 'Laboratory Optimized',
    description: 'Specifically designed for laboratory work with chemical-resistant and easy-clean properties.'
  },
  {
    icon: SparklesIcon,
    title: 'Professional Appearance',
    description: 'Crisp, clean appearance that maintains professionalism throughout long shifts.'
  },
  {
    icon: UserIcon,
    title: 'Comfort & Mobility',
    description: 'Ergonomic design allowing full range of motion for precise laboratory procedures.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '100% Cotton or Poly-Cotton Blend (65% Polyester, 35% Cotton)' },
  { label: 'Weight', value: '200-240 GSM for durability and comfort' },
  { label: 'Available Styles', value: 'Traditional Lab Coat, Consultation Coat, Unisex Lab Coat, Women\'s Fitted' },
  { label: 'Length Options', value: 'Knee-length (37"), Mid-thigh (32"), Hip-length (28")' },
  { label: 'Colors', value: 'Classic White, Light Blue, Navy Blue (custom colors available)' },
  { label: 'Sizes', value: 'XS - 5XL, with petite and tall options' },
  { label: 'Key Features', value: 'Multiple pockets, pen slots, tablet pocket, adjustable cuffs, reinforced seams' }
]

const includedItems = [
  'Professional Lab Coat',
  'Care Instructions for Medical Garments',
  'UNEOM Healthcare Uniform Guide',
  'Size Chart and Fitting Guide'
]

const idealForProfessionals = [
  { name: 'Medical Doctors', icon: UserIcon },
  { name: 'Laboratory Technicians', icon: BeakerIcon },
  { name: 'Research Scientists', icon: MagnifyingGlassIcon },
  { name: 'Medical Students', icon: AcademicCapIcon },
  { name: 'Healthcare Professionals', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'Nurse Uniform Set',
    image: '/images/products/medical/nurse-uniform-main.jpg',
    href: '/shop/medical-scrubs/nurse-uniform/',
    price: 'From SAR 180'
  },
  {
    name: 'Premium Medical Scrubs',
    image: '/images/products/medical/premium-medical-scrubs-main.jpg',
    href: '/shop/medical-scrubs/premium-medical-scrubs/',
    price: 'From SAR 220'
  },
  {
    name: 'Surgical Scrubs',
    image: '/images/products/medical/surgical-scrubs-main.jpg',
    href: '/shop/medical-scrubs/surgical-scrubs/',
    price: 'From SAR 200'
  }
]

export default function LabCoatsPage() {
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
            <Link href="/shop/medical-scrubs/" className="hover:text-blue-600">Medical Scrubs</Link>
            <span>/</span>
            <span className="text-gray-900">Lab Coats</span>
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
                  src="/images/products/medical/lab-coats-main.jpg"
                  alt="Professional Lab Coats"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-500 cursor-pointer">
                    <Image
                      src={`/images/products/medical/lab-coat-detail-${i}.jpg`}
                      alt={`Lab coat detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Trusted by Healthcare Professionals)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Lab Coats
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Elevate your professional image with UNEOM's premium lab coats. Designed for medical professionals and laboratory technicians in Saudi Arabia, our lab coats combine superior protection with exceptional comfort and style.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 160</span>
                <span className="text-lg text-gray-500 ml-2">per lab coat</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Healthcare Grade Quality:</strong> Our lab coats meet stringent healthcare standards for safety and hygiene. <Link href="/resources/healthcare-uniform-standards" className="font-medium underline hover:text-blue-800">Learn about medical uniform standards</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=lab-coats"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  Get Healthcare Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Medical Uniform Plan
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Professional Benefits:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Superior Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Laboratory Optimized</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Professional Appearance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Comfort & Mobility</span>
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
            Designed for Healthcare Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Professionals Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trusted by Healthcare Professionals Across Saudi Arabia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForProfessionals.map((professional, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <professional.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{professional.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Lab Coat Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Material & Design Features</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Professional Package Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">UNEOM Healthcare Standard</h4>
                <p className="text-sm text-green-600">
                  Our lab coats are designed to meet the highest standards of healthcare professionalism, combining functionality with a polished appearance.
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
            Complete Your Medical Uniform Collection
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
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
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Elevate Your Professional Image with UNEOM Lab Coats
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of healthcare professionals across Saudi Arabia who trust UNEOM for their medical uniform needs. Experience the perfect blend of protection, comfort, and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Lab+Coat+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Healthcare Specialist
            </Link>
            <Link
              href="/services/healthcare-uniform-program"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              Healthcare Uniform Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}