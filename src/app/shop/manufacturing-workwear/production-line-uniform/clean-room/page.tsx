import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  BeakerIcon,
  UserGroupIcon,
  CpuChipIcon, // Added CpuChipIcon here
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Clean Room Production Uniforms | Contamination Control Apparel | UNEOM',
  description: 'Specialized clean room uniforms from UNEOM for contamination-sensitive production lines in Saudi Arabia. Anti-static, low-linting, and designed for pharmaceutical, electronics, and biotech industries.',
  keywords: 'clean room uniforms, contamination control, anti-static apparel, low-linting garments, pharmaceutical uniforms, electronics manufacturing workwear, biotech clothing, Saudi clean room',
  openGraph: {
    title: 'Clean Room Production Uniforms | UNEOM',
    description: 'High-performance uniforms for maintaining sterile and controlled production environments.',
    images: ['/images/products/industrial/clean-room-production-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: SparklesIcon,
    title: 'Low-Linting Materials',
    description: 'Constructed from specialized non-shedding fabrics to minimize particle generation and contamination.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Anti-Static Properties',
    description: 'ESD (Electrostatic Discharge) safe materials to protect sensitive electronic components and prevent static buildup.'
  },
  {
    icon: CubeTransparentIcon, // Represents controlled environment
    title: 'Contamination Control Design',
    description: 'Features like covered zippers, elasticated cuffs/ankles, and minimal pockets to prevent particle trapping.'
  },
  {
    icon: UserGroupIcon,
    title: 'Comfort & Breathability',
    description: 'Designed for extended wear in controlled environments, offering comfort without compromising sterility.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Specialized Polyester with Carbon Fiber Grid (e.g., 98% Polyester, 2% Carbon Fiber)' },
  { label: 'Cleanroom Class Compatibility', value: 'Suitable for ISO Class 5-8 (Specify based on product variants)' },
  { label: 'Sterilization Compatibility', value: 'Autoclavable or Gamma Irradiation compatible options available' },
  { label: 'Available Styles', value: 'Coveralls (with or without hood/boots), Frocks, Hoods, Boot Covers' },
  { label: 'Colors', value: 'Typically White, Light Blue, Light Grey (for particle visibility)' },
  { label: 'Sizes', value: 'S - 3XL, with options for custom fitting' },
  { label: 'Certifications', value: 'Specify relevant IEST, ISO, or ASTM standards met' }
]

const includedItems = [
  'Clean Room Uniform (Coverall/Frock)',
  'Integrated or Separate Hood (as per style)',
  'Optional Integrated/Separate Boot Covers',
  'Packaging suitable for cleanroom entry protocols'
]

const idealForIndustries = [
  { name: 'Pharmaceutical Manufacturing', icon: BeakerIcon }, // Using BeakerIcon
  { name: 'Electronics & Semiconductor Assembly', icon: CpuChipIcon },
  { name: 'Biotechnology & Life Sciences', icon: SparklesIcon },
  { name: 'Aerospace & Precision Engineering', icon: CubeTransparentIcon },
  { name: 'Food Processing (Sterile Zones)', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'Standard Production Line Uniform',
    image: '/images/products/industrial/standard-production-line-uniform.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/standard/',
    price: 'From SAR 180'
  },
  {
    name: 'Heavy-Duty Production Line Uniform',
    image: '/images/products/industrial/heavy-duty-production-line-uniform-main.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/heavy-duty/',
    price: 'From SAR 220'
  },
  {
    name: 'Disposable Clean Room Gowns',
    image: '/images/products/industrial/disposable-clean-room-gowns.jpg', // Placeholder image
    href: '/shop/disposable-workwear/clean-room-gowns/', // Placeholder link
    price: 'Contact for Pricing'
  }
]

export default function CleanRoomProductionUniformPage() {
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
            <Link href="/shop/manufacturing-workwear/production-line-uniform/" className="hover:text-blue-600">Production Line Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Clean Room</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/industrial/clean-room-production-uniform-main.jpg"
                  alt="Clean Room Production Uniform"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/clean-room-uniform-detail-${i}.jpg`}
                      alt={`Clean room uniform detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(Certified for ISO Class 5)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Clean Room Production Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Maintain the highest standards of cleanliness and contamination control with UNEOM's specialized Clean Room Uniforms. Engineered for critical environments in Saudi Arabia's advanced manufacturing sectors.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 250</span>
                <span className="text-lg text-gray-500 ml-2">per set (Coverall with Hood & Boots)</span>
              </div>
              
              <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BeakerIcon className="h-6 w-6 text-indigo-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-indigo-700">
                      <strong>Specialized Design:</strong> Our clean room apparel meets stringent industry standards for particle control, ESD protection, and sterility. <Link href="/contact?subject=Clean+Room+Uniform+Technical+Specs" className="font-medium underline hover:text-indigo-800">Request Technical Data Sheet</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=clean-room-production-uniform"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex-1 text-center"
                >
                  Get Specialized Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Save Specification
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Key Attributes:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Low-Particle Shedding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>ESD Safe Options</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Sterilization Compatible</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Designed for Critical Environments</span>
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
            Engineered for Contamination Control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Essential for Saudi Arabia's High-Tech Industries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForIndustries.map((industry, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <industry.icon className="h-10 w-10 text-indigo-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Clean Room Uniform Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Details</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Package Contents</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h4 className="text-lg font-semibold text-teal-700 mb-2">UNEOM Clean Room Protocol</h4>
                <p className="text-sm text-teal-600">
                  Our clean room uniforms are manufactured and packaged under strict protocols to ensure they arrive ready for your controlled environment.
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
            Other Production Line Uniforms
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">{product.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ensure Contamination Control with UNEOM Clean Room Apparel
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Contact our specialists to discuss your specific clean room requirements and how our uniforms can help you maintain the highest standards of sterility and safety in your Saudi facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Clean+Room+Uniform+Inquiry"
              className="bg-white text-indigo-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Clean Room Specialist
            </Link>
            <Link
              href="/resources/cleanroom-best-practices" // Placeholder link
              className="border-2 border-indigo-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:border-white transition-colors text-lg"
            >
              Clean Room Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}