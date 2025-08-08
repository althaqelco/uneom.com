import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon, 
  FireIcon,
  BoltIcon,
  UserGroupIcon,
  CubeTransparentIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid' // For filled star

export const metadata: Metadata = {
  title: 'Heavy-Duty Production Line Uniforms | Durable Factory Workwear | UNEOM',
  description: 'Equip your workforce with UNEOM\'s heavy-duty production line uniforms. Designed for durability, safety, and comfort in demanding Saudi Arabian factory environments. Customizable options available.',
  keywords: 'heavy-duty uniforms, production line workwear, factory uniforms, industrial clothing, durable workwear, Saudi manufacturing, safety apparel, UNEOM industrial',
  openGraph: {
    title: 'Heavy-Duty Production Line Uniforms | UNEOM',
    description: 'Robust and reliable uniforms for demanding production line tasks in Saudi factories.',
    images: ['/images/products/industrial/heavy-duty-production-line-uniform-main.jpg']}}

const productFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Superior Durability',
    description: 'Constructed from reinforced fabrics to withstand rigorous daily wear and tear in industrial settings.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Enhanced Worker Safety',
    description: 'Features like reinforced seams, high-visibility options, and protection against minor workplace hazards.'
  },
  {
    icon: FireIcon, // Example, can be more specific
    title: 'Resistant to Industrial Elements',
    description: 'Treated to resist common industrial substances like oil, grease, and certain chemicals (specify based on actual product).'
  },
  {
    icon: UserGroupIcon,
    title: 'Comfort for Long Shifts',
    description: 'Ergonomically designed for ease of movement and breathability, ensuring comfort throughout demanding workdays.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Heavy-duty Poly-Cotton Blend (e.g., 65% Polyester, 35% Cotton, 245-280 GSM)' },
  { label: 'Reinforcements', value: 'Triple-stitched seams, bar-tacked stress points, reinforced knee/elbow patches (optional)' },
  { label: 'Available Colors', value: 'Navy Blue, Charcoal Grey, Khaki, Orange (High-Vis), Royal Blue' },
  { label: 'Sizes', value: 'S - 5XL, with options for custom sizing' },
  { label: 'Key Features', value: 'Multiple utility pockets, concealed stud/zip front, action back for flexibility' },
  { label: 'Safety Standards Met', value: 'Specify relevant EN/ISO standards if applicable (e.g., EN ISO 13688)' },
  { label: 'Customization', value: 'Logo embroidery/printing, reflective tape addition, specific pocket configurations' }
]

const includedItems = [
  'Heavy-Duty Production Line Uniform (Coverall/Two-Piece Set)',
  'Detachable/Integrated Knee Pads (if applicable)',
  'UNEOM Quality Guarantee Card',
  'Detailed Care Instructions'
]

// Placeholder for CogIcon and BuildingOffice2Icon if not directly available
const CogIcon = WrenchScrewdriverIcon;
const BuildingOffice2Icon = CubeTransparentIcon;

const idealForIndustries = [
  { name: 'Heavy Manufacturing', icon: CogIcon },
  { name: 'Automotive Assembly', icon: WrenchScrewdriverIcon },
  { name: 'Construction Material Production', icon: BuildingOffice2Icon },
  { name: 'Metal Fabrication', icon: FireIcon },
  { name: 'Logistics & Warehousing (Heavy Goods)', icon: CubeTransparentIcon }
]

const relatedProducts = [
  {
    name: 'Standard Production Line Uniform',
    image: '/images/products/industrial/standard-production-line-uniform.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/standard/',
    price: 'From SAR 180'
  },
  {
    name: 'Clean Room Production Uniform',
    image: '/images/products/industrial/clean-room-production-uniform.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/clean-room/',
    price: 'From SAR 250'
  },
  {
    name: 'Industrial Safety Vest',
    image: '/images/products/industrial/industrial-safety-vest.jpg',
    href: '/shop/high-visibility-clothing/industrial-safety-vest/',
    price: 'From SAR 75'
  }
]

export default function HeavyDutyProductionUniformPage() {
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
            <span className="text-gray-900">Heavy-Duty</span>
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
                  src="/images/products/industrial/heavy-duty-production-line-uniform-main.jpg"
                  alt="Heavy-Duty Production Line Uniform"
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
                      src={`/images/products/industrial/heavy-duty-uniform-detail-${i}.jpg`}
                      alt={`Heavy-duty uniform detail ${i}`}
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
                  <StarIcon className="h-5 w-5 text-yellow-400" /> {/* Example for 4.x stars */}
                </div>
                <span className="ml-2 text-sm text-gray-600">(Based on 78 durability tests)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Heavy-Duty Production Line Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Engineered for the toughest industrial environments, our Heavy-Duty Production Line Uniforms offer unparalleled durability, safety, and comfort. Built to last and protect your workforce in demanding Saudi factory conditions.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 220</span>
                <span className="text-lg text-gray-500 ml-2">per set (Jacket & Trousers / Coverall)</span>
              </div>
              
              {/* Customization Note */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <TagIcon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Fully Customizable:</strong> Tailor these uniforms to your exact specifications including color, logo placement, pocket design, and specialized protective features. <Link href="/services/custom-design" className="font-medium underline hover:text-blue-800">Learn more</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=heavy-duty-production-uniform"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  Request Bulk Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Wishlist
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Key Highlights:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Reinforced for Extreme Durability</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Enhanced Worker Protection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Comfort for Extended Wear</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Customizable to Brand Needs</span>
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
            Built for the Toughest Jobs
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

      {/* Ideal For Industries Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ideal for Demanding Saudi Industries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForIndustries.map((industry, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <industry.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Tabs (Simplified for now) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Specifications & What's Included
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Specifications</h3>
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What's Included in Your Order</h3>
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
                  All our heavy-duty uniforms undergo rigorous quality checks to ensure they meet the highest standards of durability and safety for Saudi industrial environments.
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
            Complementary Industrial Workwear
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
            Upgrade to UNEOM's Heavy-Duty Uniforms Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Protect your workforce and enhance productivity with uniforms built for the rigors of Saudi industry. Contact us for a personalized consultation and bulk order pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Heavy-Duty+Uniform+Inquiry"
              className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Contact Our Industrial Team
            </Link>
            <Link
              href="/services/uniform-program-management"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:border-white transition-colors text-lg"
            >
              Learn About Uniform Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}