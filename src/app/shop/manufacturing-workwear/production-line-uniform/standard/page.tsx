import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  UserGroupIcon,
  ShieldCheckIcon, 
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Standard Production Line Uniform | Reliable Workwear for Manufacturing | UNEOM',
  description: 'UNEOM\'s standard production line uniforms offer reliable protection and comfort for manufacturing workers in Saudi Arabia. Cost-effective solution for large-scale production facilities.',
  keywords: 'standard production uniforms, manufacturing workwear, production line clothing, factory uniforms, Saudi manufacturing, cost-effective workwear, UNEOM industrial uniforms',
  openGraph: {
    title: 'Standard Production Line Uniform | UNEOM',
    description: 'Reliable and cost-effective uniforms designed for standard production line operations in Saudi manufacturing facilities.',
    images: ['/images/products/industrial/standard-production-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: CurrencyDollarIcon,
    title: 'Cost-Effective Solution',
    description: 'Excellent value for money without compromising on essential quality and safety features.'
  },
  {
    icon: UserGroupIcon,
    title: 'Designed for Teams',
    description: 'Perfect for large production teams with consistent sizing and bulk order advantages.'
  },
  {
    icon: ClockIcon,
    title: 'All-Day Comfort',
    description: 'Comfortable fit designed for extended wear during long production shifts.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Essential Protection',
    description: 'Provides fundamental protection against workplace hazards and contamination.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Poly-Cotton Blend (65% Polyester, 35% Cotton), 200-220 GSM' },
  { label: 'Available Styles', value: 'Work Shirt, Work Trousers, Coverall, Apron, Hair Net' },
  { label: 'Color Options', value: 'Navy Blue, Grey, White, Khaki (custom colors available for large orders)' },
  { label: 'Sizes', value: 'XS - 4XL, standard fit with adjustable features' },
  { label: 'Key Features', value: 'Chest pockets, side pockets, reinforced seams, easy-care fabric' },
  { label: 'Compliance', value: 'Meets basic industrial safety standards, suitable for general manufacturing' },
  { label: 'Customization', value: 'Logo embroidery, name tags, reflective strips (optional)' }
]

const includedItems = [
  'Standard Production Line Uniform (Shirt/Trousers or Coverall)',
  'Basic Care Instructions',
  'UNEOM Standard Workwear Guide',
  'Bulk Order Sizing Chart'
]

const idealForIndustries = [
  { name: 'General Manufacturing', icon: UserGroupIcon },
  { name: 'Assembly Lines', icon: AdjustmentsHorizontalIcon },
  { name: 'Packaging Operations', icon: TagIcon },
  { name: 'Quality Control', icon: ShieldCheckIcon },
  { name: 'Warehouse Operations', icon: ClockIcon }
]

const relatedProducts = [
  {
    name: 'Heavy-Duty Production Line Uniform',
    image: '/images/products/industrial/heavy-duty-production-uniform-main.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/heavy-duty/',
    price: 'From SAR 180'
  },
  {
    name: 'Clean Room Production Uniform',
    image: '/images/products/industrial/clean-room-uniform-main.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/clean-room/',
    price: 'From SAR 220'
  },
  {
    name: 'Industrial Safety Vest',
    image: '/images/products/industrial/industrial-safety-vest.jpg',
    href: '/shop/high-visibility-clothing/industrial-safety-vest/',
    price: 'From SAR 75'
  }
]

export default function StandardProductionUniformPage() {
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
            <span className="text-gray-900">Standard</span>
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
                  src="/images/products/industrial/standard-production-uniform-main.jpg"
                  alt="Standard Production Line Uniform"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-green-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/standard-production-detail-${i}.jpg`}
                      alt={`Standard production uniform detail ${i}`}
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
                  <StarIcon className="h-5 w-5 text-gray-300" />
                </div>
                <span className="ml-2 text-sm text-gray-600">(Reliable & Cost-Effective)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Standard Production Line Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Outfit your production team with UNEOM's reliable standard uniforms. Designed for general manufacturing operations, these uniforms provide essential protection and comfort at an excellent value for Saudi production facilities.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-green-600">From SAR 120</span>
                <span className="text-lg text-gray-500 ml-2">per uniform</span>
              </div>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CurrencyDollarIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Bulk Order Savings:</strong> Significant discounts available for large production teams. <Link href="/contact?subject=Bulk+Production+Uniform+Pricing" className="font-medium underline hover:text-green-800">Get volume pricing</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=standard-production-uniform"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex-1 text-center"
                >
                  Get Bulk Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Production Plan
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Key Advantages:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cost-Effective Solution</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Team-Friendly Design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>All-Day Comfort</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Essential Protection</span>
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
            Reliable Protection for Standard Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-green-600" />
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
            Perfect for Standard Manufacturing Operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForIndustries.map((industry, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <industry.icon className="h-10 w-10 text-green-500 mx-auto mb-3" />
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
            Standard Production Uniform Specifications
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Order Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">UNEOM Value Promise</h4>
                <p className="text-sm text-blue-600">
                  Our standard production uniforms deliver reliable quality and comfort at competitive prices, perfect for large-scale manufacturing operations.
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
            Upgrade Your Production Line Uniforms
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">{product.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{product.price}</p>
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
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Equip Your Production Team with Reliable UNEOM Uniforms
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Get the best value for your production line uniform needs. Contact UNEOM for competitive bulk pricing and fast delivery across Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Standard+Production+Uniform+Inquiry"
              className="bg-white text-green-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Get Bulk Pricing
            </Link>
            <Link
              href="/services/uniform-program-management"
              className="border-2 border-green-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-600 hover:border-white transition-colors text-lg"
            >
              Uniform Program Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}