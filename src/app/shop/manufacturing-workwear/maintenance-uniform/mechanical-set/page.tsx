import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  ShieldCheckIcon, 
  CogIcon,
  UserIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Mechanical Maintenance Uniform Set | Durable Workwear for Technicians | UNEOM',
  description: 'UNEOM\'s mechanical maintenance uniform sets provide comfort, durability, and functionality for mechanical technicians in Saudi Arabia. Professional workwear designed for demanding industrial environments.',
  keywords: 'mechanical maintenance uniforms, technician workwear, industrial maintenance clothing, durable work uniforms, Saudi mechanical technicians, UNEOM workwear, maintenance uniform set',
  openGraph: {
    title: 'Mechanical Maintenance Uniform Set | UNEOM',
    description: 'Professional uniform sets designed specifically for mechanical maintenance technicians in Saudi industrial facilities.',
    images: ['/images/products/industrial/mechanical-maintenance-set-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Tool-Friendly Design',
    description: 'Multiple pockets, tool loops, and reinforced areas designed specifically for mechanical maintenance work.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enhanced Durability',
    description: 'Heavy-duty construction with reinforced stress points to withstand the demands of mechanical work.'
  },
  {
    icon: CogIcon,
    title: 'Functional Mobility',
    description: 'Ergonomic design allowing full range of motion for complex mechanical tasks and equipment access.'
  },
  {
    icon: UserIcon,
    title: 'Professional Appearance',
    description: 'Clean, professional look that maintains technician credibility while providing maximum functionality.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Poly-Cotton Blend (65% Polyester, 35% Cotton), 245-280 GSM' },
  { label: 'Set Components', value: 'Work Shirt, Work Trousers, Optional Coverall, Optional Vest' },
  { label: 'Reinforcement Areas', value: 'Knees, elbows, pocket corners, stress points with bar-tack stitching' },
  { label: 'Available Colors', value: 'Navy Blue, Charcoal Grey, Khaki, Orange (custom colors for bulk orders)' },
  { label: 'Sizes', value: 'S - 5XL, with regular and tall fit options' },
  { label: 'Pocket Configuration', value: 'Chest pockets with pen slots, side cargo pockets, back pockets, tool loops' },
  { label: 'Care Instructions', value: 'Industrial wash compatible, colorfast, shrink-resistant' }
]

const includedItems = [
  'Mechanical Maintenance Work Shirt',
  'Matching Work Trousers',
  'UNEOM Care and Maintenance Guide',
  'Size Chart and Fitting Instructions'
]

const idealForTasks = [
  { name: 'Equipment Maintenance', icon: CogIcon },
  { name: 'Machinery Repair', icon: WrenchScrewdriverIcon },
  { name: 'Preventive Maintenance', icon: AdjustmentsHorizontalIcon },
  { name: 'Technical Inspections', icon: ShieldCheckIcon },
  { name: 'Field Service Work', icon: UserIcon }
]

const relatedProducts = [
  {
    name: 'Heavy-Duty Maintenance Coverall',
    image: '/images/products/industrial/heavy-duty-maintenance-coverall-main.jpg',
    href: '/shop/manufacturing-workwear/maintenance-uniform/heavy-duty-coverall/',
    price: 'From SAR 290'
  },
  {
    name: 'Electrical Maintenance Uniform',
    image: '/images/products/industrial/electrical-maintenance-uniform-main.jpg',
    href: '/shop/manufacturing-workwear/maintenance-uniform/electrical-maintenance/',
    price: 'From SAR 280'
  },
  {
    name: 'Industrial Safety Boots',
    image: '/images/products/footwear/industrial-safety-boots.jpg',
    href: '/shop/safety-footwear/industrial-boots/',
    price: 'From SAR 180'
  }
]

export default function MechanicalMaintenanceSetPage() {
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
            <span className="text-gray-900">Mechanical Set</span>
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
                  src="/images/products/industrial/mechanical-maintenance-set-main.jpg"
                  alt="Mechanical Maintenance Uniform Set"
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
                      src={`/images/products/industrial/mechanical-set-detail-${i}.jpg`}
                      alt={`Mechanical maintenance set detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Preferred by Mechanical Technicians)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Mechanical Maintenance Uniform Set
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Equip your mechanical maintenance team with UNEOM's professional uniform sets. Designed for comfort, durability, and functionality, these uniforms meet the demanding requirements of mechanical technicians in Saudi Arabia's industrial sector.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 250</span>
                <span className="text-lg text-gray-500 ml-2">per complete set</span>
              </div>
              
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CogIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Complete Professional Set:</strong> Everything your mechanical team needs for a professional, functional appearance. <Link href="/contact?subject=Mechanical+Uniform+Customization" className="font-medium underline hover:text-blue-800">Customize for your facility</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=mechanical-maintenance-set"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  Get Team Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Uniform Plan
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Key Benefits:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Tool-Friendly Design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Enhanced Durability</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Functional Mobility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Professional Appearance</span>
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
            Designed for Mechanical Professionals
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

      {/* Ideal For Tasks Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Essential Mechanical Tasks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForTasks.map((task, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <task.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
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
            Mechanical Maintenance Set Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Material & Construction Details</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Set Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">UNEOM Quality Assurance</h4>
                <p className="text-sm text-green-600">
                  Every mechanical maintenance uniform set is quality-tested to ensure it meets the demanding requirements of industrial maintenance work.
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
            Complete Your Maintenance Team's Gear
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
            Outfit Your Mechanical Team with Professional UNEOM Uniforms
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Enhance your team's professionalism and efficiency with our specially designed mechanical maintenance uniform sets. Contact UNEOM for bulk pricing and customization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Mechanical+Maintenance+Uniform+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Get Team Pricing
            </Link>
            <Link
              href="/services/uniform-program-management"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              Uniform Program Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}