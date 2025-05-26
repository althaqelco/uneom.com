import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ClipboardDocumentListIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  WrenchIcon, // Placeholder for practical/hands-on
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Floor Supervisor Uniforms | Practical Manufacturing Workwear | UNEOM',
  description: 'UNEOM\'s floor supervisor uniforms are designed for active leaders in Saudi Arabian factories. Durable, functional, and comfortable for hands-on supervision and team management.',
  keywords: 'floor supervisor uniforms, manufacturing workwear, factory supervisor apparel, practical industrial uniforms, durable supervisor clothing, Saudi factory leadership',
  openGraph: {
    title: 'Floor Supervisor Uniforms for Manufacturing | UNEOM',
    description: 'Functional and durable uniforms for active floor supervisors in manufacturing settings.',
    images: ['/images/products/industrial/floor-supervisor-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: ClipboardDocumentListIcon,
    title: 'Functional & Practical Design',
    description: 'Equipped with strategically placed pockets and utility loops for tools and devices.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable for Daily Demands',
    description: 'Made from hard-wearing fabrics that resist tears, stains, and fading in active environments.'
  },
  {
    icon: UserGroupIcon,
    title: 'Comfort for Active Roles',
    description: 'Breathable materials and designs that allow for a full range of motion during on-floor supervision.'
  },
  {
    icon: WrenchIcon,
    title: 'Easy Identification',
    description: 'Distinctive styling or color options to make supervisors easily identifiable on the busy factory floor.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Durable Poly-Cotton Blend (e.g., 60% Cotton, 40% Polyester, 220-245 GSM) or Ripstop Fabric' },
  { label: 'Design Styles', value: 'Utility Shirts/Polo Shirts, Cargo Trousers, Multi-Pocket Vests, Light Jackets' },
  { label: 'Available Colors', value: 'Navy Blue, Grey, Khaki, Black, with options for high-visibility accents' },
  { label: 'Sizes', value: 'M - 4XL, with options for larger or custom sizes' },
  { label: 'Key Features', value: 'Reinforced stress points, multiple secure pockets (zipped/buttoned), pen slots, radio loops' },
  { label: 'Wash & Wear', value: 'Easy-care, machine washable, maintains professional look after repeated laundering' },
  { label: 'Customization', value: 'Embroidery/printing of "Supervisor" title, company logo, department identification' }
]

const includedItems = [
  'Floor Supervisor Shirt/Polo',
  'Floor Supervisor Trousers/Cargo Pants',
  'Optional Utility Vest or Light Jacket (if ordered)',
  'UNEOM Workwear Durability Guide'
]

const idealForTasks = [
  { name: 'Directing Workflow', icon: ArrowRightIcon }, // Using ArrowRightIcon as placeholder
  { name: 'On-the-Spot Problem Solving', icon: WrenchIcon },
  { name: 'Team Coordination', icon: UserGroupIcon },
  { name: 'Quality Checks & Inspections', icon: CheckCircleIcon }, // Using CheckCircleIcon
  { name: 'Ensuring Safety Compliance', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'Executive Supervisor Uniform',
    image: '/images/products/industrial/executive-supervisor-uniform-main.jpg',
    href: '/shop/manufacturing-workwear/supervisor-uniform/executive/',
    price: 'From SAR 350'
  },
  {
    name: 'Safety Supervisor Uniform',
    image: '/images/products/industrial/safety-supervisor-uniform.jpg',
    href: '/shop/manufacturing-workwear/supervisor-uniform/safety-supervisor/',
    price: 'From SAR 210'
  },
  {
    name: 'Standard Production Line Uniform',
    image: '/images/products/industrial/standard-production-line-uniform.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/standard/',
    price: 'From SAR 180'
  }
]


export default function FloorSupervisorUniformPage() {
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
            <span className="text-gray-900">Floor Supervisor</span>
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
                  src="/images/products/industrial/floor-supervisor-uniform-main.jpg"
                  alt="Floor Supervisor Uniform"
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
                      src={`/images/products/industrial/floor-supervisor-detail-${i}.jpg`}
                      alt={`Floor supervisor uniform detail ${i}`}
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
                  {[...Array(4)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
                <span className="ml-2 text-sm text-gray-600">(Highly rated for functionality)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Floor Supervisor Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Designed for the dynamic environment of the factory floor, UNEOM's Floor Supervisor Uniforms combine practicality, durability, and comfort. Empower your supervisors to lead effectively and manage operations hands-on.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 190</span>
                <span className="text-lg text-gray-500 ml-2">per set (e.g., Shirt & Trousers)</span>
              </div>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ClipboardDocumentListIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Built for Action:</strong> These uniforms are tailored for supervisors who are actively involved in daily operations, requiring both resilience and ease of movement. <Link href="/services/custom-design" className="font-medium underline hover:text-green-800">Customize for your team</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=floor-supervisor-uniform"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  Request Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Wishlist
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Key Advantages:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Highly Functional Design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Hard-Wearing & Durable</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Comfort for Active Roles</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Clear Supervisor Identification</span>
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
            Practicality and Performance for Floor Leadership
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
            Optimized for Key Supervisory Tasks
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
            Floor Supervisor Uniform Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Material & Construction</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What's Included</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-700 mb-2">UNEOM Work-Ready Guarantee</h4>
                <p className="text-sm text-yellow-600">
                  Our floor supervisor uniforms are built to withstand the daily challenges of a busy factory, ensuring reliability and a professional appearance shift after shift.
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
            Explore Other Supervisor Uniforms
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
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Equip Your Floor Supervisors for Success
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Provide your on-floor leadership with uniforms that match their demanding roles. Contact UNEOM for durable, functional, and comfortable supervisor workwear solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Floor+Supervisor+Uniform+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Discuss Your Needs
            </Link>
            <Link
              href="/shop/manufacturing-workwear/"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              View All Manufacturing Workwear
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}