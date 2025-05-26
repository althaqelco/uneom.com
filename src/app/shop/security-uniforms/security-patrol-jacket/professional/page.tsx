import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  EyeIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CogIcon,
  BoltIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Professional Security Patrol Jacket | Premium Security Outerwear | UNEOM',
  description: 'UNEOM\'s professional security patrol jacket provides premium protection and professional appearance for security patrol operations in Saudi Arabia. High-quality security outerwear for professional teams.',
  keywords: 'professional security jacket, security patrol jacket, premium security outerwear, professional security clothing, Saudi security jackets, professional security gear UNEOM, executive security jacket',
  openGraph: {
    title: 'Professional Security Patrol Jacket | UNEOM',
    description: 'Premium professional security patrol jacket designed for high-standard security patrol operations in Saudi Arabia\'s security sector.',
    images: ['/images/products/security/professional-security-jacket-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Professional Protection',
    description: 'Premium-grade materials and construction providing reliable protection while maintaining a professional executive appearance.'
  },
  {
    icon: UserGroupIcon,
    title: 'Executive Appearance',
    description: 'Sophisticated design and premium finishes that project authority and professionalism in corporate and high-end environments.'
  },
  {
    icon: EyeIcon,
    title: 'Discreet Functionality',
    description: 'Concealed pockets and low-profile features for equipment storage without compromising the professional aesthetic.'
  },
  {
    icon: ClockIcon,
    title: 'All-Day Comfort',
    description: 'Ergonomic design and breathable materials ensure comfort during extended patrol shifts and long-duration assignments.'
  }
]

const specifications = [
  { label: 'Material Composition', value: 'Premium wool blend with water-resistant treatment and reinforced seams' },
  { label: 'Protection Features', value: 'Weather-resistant, stain-resistant, UV protection, professional-grade durability' },
  { label: 'Weight', value: '0.7-1.1 kg depending on size and seasonal configuration' },
  { label: 'Size Range', value: 'XS - 4XL with tailored fit options and professional alterations available' },
  { label: 'Color Options', value: 'Executive Black, Navy Blue, Charcoal Gray, Corporate Brown (custom colors available)' },
  { label: 'Pocket Configuration', value: '6-8 concealed pockets, radio pocket, badge placement, professional accessories' },
  { label: 'Special Features', value: 'Concealed carry compatible, removable liner, professional buttons, executive styling' }
]

const includedItems = [
  'Professional Security Patrol Jacket',
  'Removable Seasonal Liner',
  'Professional Badge Placement',
  'Concealed Equipment Pockets',
  'Executive Styling Elements',
  'UNEOM Professional Care Guide',
  'Tailoring Consultation Voucher'
]

const idealForEnvironments = [
  { name: 'Corporate Security', icon: BuildingOfficeIcon },
  { name: 'Executive Protection', icon: ShieldCheckIcon },
  { name: 'Hotel Security', icon: UserGroupIcon },
  { name: 'Event Security', icon: EyeIcon },
  { name: 'VIP Services', icon: CogIcon }
]

const relatedProducts = [
  {
    name: 'Professional Tactical Vest',
    image: '/images/products/security/professional-tactical-vest-main.jpg',
    href: '/shop/security-uniforms/tactical-security-vest/professional/',
    price: 'From SAR 350'
  },
  {
    name: 'Executive Security Pants',
    image: '/images/products/security/executive-security-pants-main.jpg',
    href: '/shop/security-uniforms/security-patrol-pants/executive/',
    price: 'From SAR 220'
  },
  {
    name: 'Professional Accessories',
    image: '/images/products/security/professional-accessories-kit.jpg',
    href: '/shop/security-accessories/professional-kit/',
    price: 'From SAR 180'
  }
]

export default function ProfessionalSecurityPatrolJacketPage() {
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
            <Link href="/shop/security-uniforms/" className="hover:text-blue-600">Security Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Professional Security Patrol Jacket</span>
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
                  src="/images/products/security/professional-security-jacket-main.jpg"
                  alt="Professional Security Patrol Jacket"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-600 cursor-pointer">
                    <Image
                      src={`/images/products/security/professional-security-jacket-detail-${i}.jpg`}
                      alt={`Professional security jacket detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Executive Professional Standard)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Security Patrol Jacket
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Project authority and professionalism with UNEOM's professional security patrol jacket. Designed for security professionals operating in corporate and high-end environments in Saudi Arabia, this premium outerwear combines executive styling with practical security functionality.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 280</span>
                <span className="text-lg text-gray-500 ml-2">per jacket</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Executive Professional Grade:</strong> Our professional jacket meets executive standards for high-end security operations. <Link href="/resources/professional-security-standards" className="font-medium underline hover:text-blue-800">View professional security standards</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=professional-security-patrol-jacket"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  Get Professional Team Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Add to Executive Kit
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Professional Advantages:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Professional Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Executive Appearance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Discreet Functionality</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>All-Day Comfort</span>
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
            Designed for Executive Security Operations
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

      {/* Ideal For Environments Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Professional Security Environments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForEnvironments.map((environment, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <environment.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{environment.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Professional Security Jacket Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Executive Design Features</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Professional Package Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">UNEOM Professional Promise</h4>
                <p className="text-sm text-blue-600">
                  Every professional security jacket is designed to meet executive standards, providing the perfect balance of professional appearance and security functionality.
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
            Complete Your Professional Security Kit
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
            Elevate Your Professional Security Operations with UNEOM Executive Gear
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join executive security teams across Saudi Arabia who trust UNEOM for their professional security outerwear needs. Experience the perfect combination of executive styling and security functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Professional+Security+Equipment+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Professional Equipment Specialist
            </Link>
            <Link
              href="/services/professional-security-program"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              Professional Security Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}