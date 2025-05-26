import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BoltIcon,
  ShieldCheckIcon,
  FireIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  LightBulbIcon,
  UserIcon, // Using UserIcon as a substitute for UserCogIcon
  CogIcon // Added CogIcon for use
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Electrical Maintenance Uniforms | Arc Flash & Shock Protection | UNEOM',
  description: 'UNEOM\'s electrical maintenance uniforms provide critical protection against arc flash and electrical shock. Designed for safety and compliance in Saudi Arabian industrial and utility sectors.',
  keywords: 'electrical maintenance uniforms, arc flash clothing, shock protection workwear, FR uniforms, electrical safety apparel, Saudi electricians, NFPA 70E compliant, UNEOM safety',
  openGraph: {
    title: 'Electrical Maintenance Uniforms with Arc Flash Protection | UNEOM',
    description: 'Specialized protective uniforms for electricians and maintenance personnel working with high-voltage equipment in Saudi Arabia.',
    images: ['/images/products/industrial/electrical-maintenance-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'Arc Flash Rated Protection',
    description: 'Constructed with materials rated for specific ATPV (Arc Thermal Performance Value) levels to protect against arc flash hazards.'
  },
  {
    icon: FireIcon,
    title: 'Flame Resistant (FR)',
    description: 'Inherently flame-resistant or FR-treated fabrics that do not ignite, melt, or drip when exposed to flames or high heat.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Electrical Shock Hazard Reduction',
    description: 'Designed to minimize conductivity, with non-metallic closures and appropriate layering systems.'
  },
  {
    icon: UserIcon, // Replaced UserCogIcon with UserIcon
    title: 'Comfort & Mobility for Electricians',
    description: 'Ergonomic design allowing for the dexterity and range of motion required for complex electrical work.'
  }
]

const specifications = [
  { label: 'Fabric Options', value: 'Inherent FR Blends (e.g., Nomex®, Kermel®, Protera®), FR Treated Cotton/Nylon Blends' },
  { label: 'Arc Rating (ATPV)', value: 'Available in various ratings (e.g., 8 cal/cm², 12 cal/cm², 25 cal/cm², 40 cal/cm² and higher)' },
  { label: 'Compliance Standards', value: 'NFPA 70E, ASTM F1506, EN ISO 11612, IEC 61482-2' },
  { label: 'Available Styles', value: 'Coveralls, Shirts & Trousers, Jackets, Hoods, Balaclavas, Switching Coats' },
  { label: 'Colors', value: 'Typically Navy Blue, Khaki, Grey, Orange (High-Vis FR options available)' },
  { label: 'Sizes', value: 'S - 5XL, with specific sizing charts for FR garments' },
  { label: 'Key Safety Features', value: 'Non-metallic zippers/buttons, FR thread, reinforced stress points, visibility enhancements' }
]

const includedItems = [
  'Electrical Maintenance FR Garment (Shirt/Trousers/Coverall)',
  'Detailed Safety & Compliance Information',
  'Care Instructions for FR Fabrics',
  'UNEOM Electrical Safety Workwear Guide'
]

const idealForApplications = [
  { name: 'Substation Maintenance', icon: BoltIcon },
  { name: 'Industrial Electrical Repair', icon: CogIcon }, // Now CogIcon is imported
  { name: 'Utility Line Work (LV/MV)', icon: UserIcon }, // Replaced UserCogIcon
  { name: 'Panel Building & Commissioning', icon: ShieldCheckIcon },
  { name: 'Emergency Electrical Response', icon: FireIcon }
]

const relatedProducts = [
  {
    name: 'Heavy-Duty Maintenance Coverall (Non-FR)',
    image: '/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg',
    href: '/shop/manufacturing-workwear/maintenance-uniform/heavy-duty-coverall/',
    price: 'From SAR 290'
  },
  {
    name: 'Mechanical Maintenance Uniform Set',
    image: '/images/products/industrial/mechanical-maintenance-set.jpg',
    href: '/shop/manufacturing-workwear/maintenance-uniform/mechanical-set/',
    price: 'From SAR 250'
  },
  {
    name: 'Insulated Electrical Safety Gloves',
    image: '/images/products/ppe/electrical-safety-gloves.jpg', // Placeholder
    href: '/shop/ppe/electrical-gloves/', // Placeholder
    price: 'Contact for Pricing'
  }
]

export default function ElectricalMaintenanceUniformPage() {
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
            <span className="text-gray-900">Electrical Maintenance</span>
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
                  src="/images/products/industrial/electrical-maintenance-uniform-main.jpg"
                  alt="Electrical Maintenance Uniform with Arc Flash Protection"
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
                      src={`/images/products/industrial/electrical-uniform-detail-${i}.jpg`}
                      alt={`Electrical maintenance uniform detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(NFPA 70E Compliant Options)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Electrical Maintenance Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Protect your electricians and maintenance personnel with UNEOM's specialized Electrical Maintenance Uniforms. Engineered for arc flash and electrical shock protection, ensuring safety and compliance in Saudi Arabia's high-risk electrical environments.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-yellow-600">From SAR 280</span>
                <span className="text-lg text-gray-500 ml-2">per FR Set</span>
              </div>
              
              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BoltIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Critical Protection:</strong> Our electrical safety apparel is designed to meet stringent international standards. <Link href="/resources/electrical-safety-ppe-guide" className="font-medium underline hover:text-yellow-800">Learn about Electrical PPE Categories</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=electrical-maintenance-uniform"
                  className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex-1 text-center"
                >
                  Request Safety Uniform Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Electrical PPE Plan
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Essential Safety Attributes:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Arc Flash Rated Materials</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Flame Resistant (FR)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Reduces Shock Hazard</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>NFPA 70E Compliant Options</span>
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
            Uncompromising Protection for Electrical Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Applications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Crucial for High-Voltage Applications in Saudi Arabia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForApplications.map((app, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <app.icon className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{app.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Electrical Maintenance Uniform Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Protective Material & Compliance</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Electrical Safety Kit Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">UNEOM Electrical Safety Standard</h4>
                <p className="text-sm text-blue-600">
                  All our electrical safety uniforms are rigorously tested and certified to provide reliable protection against specified electrical hazards.
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
            Complete Your Electrical Safety PPE
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">{product.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-yellow-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prioritize Electrical Safety with UNEOM Protective Uniforms
          </h2>
          <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
            Don't compromise on safety. Equip your electrical maintenance teams with industry-leading protective apparel. Contact UNEOM for a consultation on your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Electrical+Maintenance+Uniform+Inquiry"
              className="bg-white text-yellow-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Electrical Safety Expert
            </Link>
            <Link
              href="/resources/nfpa70e-guide" // Placeholder
              className="border-2 border-yellow-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 hover:border-white transition-colors text-lg"
            >
              NFPA 70E Compliance Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}