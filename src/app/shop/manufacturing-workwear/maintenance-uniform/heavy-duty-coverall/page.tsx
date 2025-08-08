import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  ShieldCheckIcon, 
  CogIcon, // Represents machinery/maintenance
  FireIcon, // For FR options
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  UserGroupIcon // For team aspect
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Heavy-Duty Maintenance Coveralls | Durable Industrial Workwear | UNEOM',
  description: 'UNEOM\'s heavy-duty maintenance coveralls offer maximum protection and durability for demanding industrial jobs in Saudi Arabia. Flame-resistant and reinforced options available.',
  keywords: 'heavy-duty coveralls, maintenance uniforms, industrial workwear, durable coveralls, flame-resistant coveralls, Saudi factory maintenance, protective overalls, UNEOM workwear',
  openGraph: {
    title: 'Heavy-Duty Maintenance Coveralls | UNEOM',
    description: 'Ultimate protection and durability for industrial maintenance professionals in Saudi Arabia.',
    images: ['/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Maximum Full-Body Protection',
    description: 'Offers comprehensive coverage against dirt, grease, grime, and minor workplace hazards.'
  },
  {
    icon: CogIcon,
    title: 'Extreme Durability',
    description: 'Constructed with ultra-strong fabrics and reinforced stitching to withstand the toughest maintenance tasks.'
  },
  {
    icon: FireIcon,
    title: 'Flame-Resistant Options',
    description: 'Available in FR-treated materials meeting industry safety standards for hazardous environments.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Functional for Technicians',
    description: 'Multiple tool pockets, utility loops, and easy-access design for efficient work.'
  }
]

const specifications = [
  { label: 'Fabric Options', value: 'Heavy-Duty Cotton Drill (280-320 GSM), Poly-Cotton Blends, Flame-Resistant Treated Fabrics (e.g., Proban®, Pyrovatex®)' },
  { label: 'Reinforcements', value: 'Double/Triple stitched seams, bar-tacks at stress points, reinforced knee patches, heavy-duty zippers' },
  { label: 'Available Colors', value: 'Navy Blue, Orange, Red, Grey, Khaki (custom colors available for bulk orders)' },
  { label: 'Sizes', value: 'S - 6XL, with regular and tall fit options' },
  { label: 'Key Features', value: 'Action back for flexibility, elasticated waistband, multiple chest, leg, and arm pockets, concealed stud front' },
  { label: 'Safety Compliance', value: 'Options for EN ISO 11612 (FR), EN ISO 20471 (High-Vis), EN 1149 (Anti-Static)' },
  { label: 'Customization', value: 'Embroidery/printing, reflective tape, custom pocket configurations, ID loops' }
]

const includedItems = [
  'Heavy-Duty Maintenance Coverall',
  'Optional Detachable Hood',
  'UNEOM Industrial Workwear Care Guide',
  'Certificate of Conformity (for FR/specialized versions)'
]

const idealForSectors = [
  { name: 'Oil & Gas Maintenance', icon: FireIcon },
  { name: 'Heavy Machinery Repair', icon: CogIcon },
  { name: 'Industrial Plant Maintenance', icon: UserGroupIcon }, // Representing a team in a plant
  { name: 'Welding & Fabrication', icon: ShieldCheckIcon }, // Protection aspect
  { name: 'Automotive & Fleet Maintenance', icon: WrenchScrewdriverIcon }
]

const relatedProducts = [
  {
    name: 'Electrical Maintenance Uniform',
    image: '/images/products/industrial/electrical-maintenance-uniform.jpg',
    href: '/shop/manufacturing-workwear/maintenance-uniform/electrical-maintenance/',
    price: 'From SAR 280'
  },
  {
    name: 'Mechanical Maintenance Uniform Set',
    image: '/images/products/industrial/mechanical-maintenance-set.jpg',
    href: '/shop/manufacturing-workwear/maintenance-uniform/mechanical-set/',
    price: 'From SAR 250'
  },
  {
    name: 'Industrial Safety Boots',
    image: '/images/products/footwear/industrial-safety-boots.jpg', // Placeholder
    href: '/shop/safety-footwear/industrial-boots/', // Placeholder
    price: 'From SAR 180'
  }
]

export default function HeavyDutyCoverallPage() {
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
            <Link href="/shop/manufacturing-workwear/maintenance-uniform/" className="hover:text-blue-600">Maintenance Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Heavy-Duty Coverall</span>
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
                  src="/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg"
                  alt="Heavy-Duty Maintenance Coverall"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-red-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/heavy-duty-coverall-detail-${i}.jpg`}
                      alt={`Heavy-duty coverall detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Top Rated for Toughness & Protection)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Heavy-Duty Maintenance Coverall
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When the job demands ultimate protection and resilience, UNEOM's Heavy-Duty Maintenance Coveralls deliver. Engineered for Saudi Arabia's most challenging industrial maintenance tasks, offering superior durability and safety features.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-red-600">From SAR 290</span>
                <span className="text-lg text-gray-500 ml-2">per unit</span>
              </div>
              
              <div className="p-4 bg-red-50 border-l-4 border-red-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FireIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      <strong>Flame-Resistant Options Available:</strong> Protect your team in high-risk environments. Inquire about our FR-treated coveralls. <Link href="/contact?subject=FR+Coverall+Inquiry" className="font-medium underline hover:text-red-800">Request FR Specs</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=heavy-duty-maintenance-coverall"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex-1 text-center"
                >
                  Get Bulk Order Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to My PPE List
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Key Protective Benefits:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Full-Body Hazard Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Ultra-Durable Construction</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Optional Flame Resistance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Functional for Technicians</span>
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
            Engineered for Extreme Industrial Conditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Sectors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trusted by Maintenance Professionals Across Saudi Sectors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForSectors.map((sector, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <sector.icon className="h-10 w-10 text-red-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{sector.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Heavy-Duty Coverall Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Material & Durability Features</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What You Receive</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="text-lg font-semibold text-orange-700 mb-2">UNEOM Industrial Grade Assurance</h4>
                <p className="text-sm text-orange-600">
                  Our heavy-duty coveralls are built to exceed expectations in toughness and longevity, providing reliable protection day in, day out.
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
            Complete Your Maintenance Team's PPE
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600">{product.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Invest in Uncompromising Protection for Your Maintenance Crew
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            UNEOM's heavy-duty coveralls are the industry standard for safety and durability in Saudi Arabia. Contact us to outfit your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Heavy-Duty+Coverall+Inquiry"
              className="bg-white text-red-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Get a Quote for Your Team
            </Link>
            <Link
              href="/services/ppe-program-management" // Placeholder
              className="border-2 border-red-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-600 hover:border-white transition-colors text-lg"
            >
              Learn About PPE Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}