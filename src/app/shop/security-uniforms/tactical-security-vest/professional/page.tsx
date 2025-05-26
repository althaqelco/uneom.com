import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BoltIcon,
  EyeIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  CogIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Professional Tactical Security Vest | High-Performance Security Gear | UNEOM',
  description: 'UNEOM\'s professional tactical security vest provides superior protection and functionality for security professionals in Saudi Arabia. Advanced tactical gear designed for professional security operations.',
  keywords: 'professional tactical vest, security gear, tactical security equipment, professional security vest, Saudi security uniforms, tactical security gear UNEOM, security protection vest',
  openGraph: {
    title: 'Professional Tactical Security Vest | UNEOM',
    description: 'Advanced tactical security vest designed for professional security operations in Saudi Arabia\'s security sector.',
    images: ['/images/products/security/professional-tactical-vest-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Advanced Protection',
    description: 'Multi-layer protection system with ballistic panels and impact-resistant materials for maximum security.'
  },
  {
    icon: BoltIcon,
    title: 'Quick Access Design',
    description: 'Strategic pocket placement and quick-release systems for rapid equipment access during operations.'
  },
  {
    icon: EyeIcon,
    title: 'Enhanced Visibility',
    description: 'Reflective strips and high-visibility elements for improved identification and safety in low-light conditions.'
  },
  {
    icon: UserGroupIcon,
    title: 'Team Coordination',
    description: 'Color-coded options and identification panels to support team coordination and command structure.'
  }
]

const specifications = [
  { label: 'Material Composition', value: 'High-strength Cordura nylon with reinforced stitching and ballistic panel compatibility' },
  { label: 'Protection Level', value: 'NIJ Level IIIA compatible (panels sold separately), stab-resistant options available' },
  { label: 'Weight', value: '1.2-1.8 kg depending on configuration and protection level' },
  { label: 'Size Range', value: 'XS - 4XL with adjustable side panels and shoulder straps' },
  { label: 'Color Options', value: 'Black, Navy Blue, Tactical Green, Desert Tan (custom colors available)' },
  { label: 'Pocket Configuration', value: '8-12 modular pockets, radio loops, pen holders, utility attachments' },
  { label: 'Special Features', value: 'MOLLE compatible, quick-release buckles, breathable mesh panels, ID panel' }
]

const includedItems = [
  'Professional Tactical Security Vest',
  'Adjustable Side Panels',
  'MOLLE Attachment System',
  'Identification Panel',
  'UNEOM Security Gear Care Guide',
  'Professional Sizing Instructions'
]

const idealForSecurityRoles = [
  { name: 'Corporate Security', icon: UserGroupIcon },
  { name: 'Event Security', icon: EyeIcon },
  { name: 'VIP Protection', icon: ShieldCheckIcon },
  { name: 'Facility Security', icon: CogIcon },
  { name: 'Emergency Response', icon: ExclamationTriangleIcon }
]

const relatedProducts = [
  {
    name: 'Heavy-Duty Tactical Vest',
    image: '/images/products/security/heavy-duty-tactical-vest-main.jpg',
    href: '/shop/security-uniforms/tactical-security-vest/heavy-duty/',
    price: 'From SAR 450'
  },
  {
    name: 'Security Patrol Jacket',
    image: '/images/products/security/security-patrol-jacket-main.jpg',
    href: '/shop/security-uniforms/security-patrol-jacket/professional/',
    price: 'From SAR 280'
  },
  {
    name: 'Security Accessories Kit',
    image: '/images/products/security/security-accessories-kit.jpg',
    href: '/shop/security-accessories/professional-kit/',
    price: 'From SAR 150'
  }
]

export default function ProfessionalTacticalVestPage() {
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
            <span className="text-gray-900">Professional Tactical Vest</span>
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
                  src="/images/products/security/professional-tactical-vest-main.jpg"
                  alt="Professional Tactical Security Vest"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-gray-800 cursor-pointer">
                    <Image
                      src={`/images/products/security/professional-tactical-vest-detail-${i}.jpg`}
                      alt={`Professional tactical vest detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Trusted by Security Professionals)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Tactical Security Vest
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Enhance your security operations with UNEOM's professional tactical security vest. Designed for security professionals in Saudi Arabia, our vest combines advanced protection, tactical functionality, and professional appearance to support your mission-critical operations.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">From SAR 350</span>
                <span className="text-lg text-gray-500 ml-2">per vest</span>
              </div>
              
              <div className="p-4 bg-gray-50 border-l-4 border-gray-800 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      <strong>Professional Security Grade:</strong> Our tactical vests meet international security standards for professional operations. <Link href="/resources/security-equipment-standards" className="font-medium underline hover:text-gray-900">View security equipment standards</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=professional-tactical-vest"
                  className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex-1 text-center"
                >
                  Get Security Team Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-gray-600" />
                  Add to Security Kit
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Professional Security Benefits:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Quick Access Design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Enhanced Visibility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Team Coordination</span>
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
            Designed for Professional Security Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Security Roles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Professional Security Operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForSecurityRoles.map((role, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <role.icon className="h-10 w-10 text-gray-800 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{role.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tactical Vest Specifications
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Security Package Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">UNEOM Security Promise</h4>
                <p className="text-sm text-gray-600">
                  Every tactical vest is designed with professional security operations in mind, supporting your mission with reliable protection and functionality.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">{product.name}</h3>
                  <p className="text-gray-800 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Enhance Your Security Operations with UNEOM Professional Gear
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join security professionals across Saudi Arabia who trust UNEOM for their tactical equipment needs. Experience the perfect combination of protection, functionality, and professional appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Security+Equipment+Inquiry"
              className="bg-white text-gray-800 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Security Equipment Specialist
            </Link>
            <Link
              href="/services/security-uniform-program"
              className="border-2 border-gray-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 hover:border-white transition-colors text-lg"
            >
              Security Uniform Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}