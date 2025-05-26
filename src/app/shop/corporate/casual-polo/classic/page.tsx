import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon, // For classic/traditional feel
  SparklesIcon, // For quality fabric
  ShieldCheckIcon, // For durability
  HeartIcon, // For comfort
  TagIcon // For customization/branding
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Classic Corporate Polo Shirts | Traditional Pique Polos | UNEOM',
  description: 'Timeless classic corporate polo shirts. Made from durable pique cotton blends, offering comfort and a professional smart casual look for teams in Saudi Arabia.',
  keywords: 'classic polo shirts, corporate pique polos, traditional polo shirts KSA, team polo shirts, comfortable casual polos',
  openGraph: {
    title: 'Classic Corporate Polo Shirts | Traditional Pique Polos | UNEOM',
    description: 'Durable and comfortable classic pique polo shirts, perfect for a timeless corporate smart casual look.',
    images: ['/images/products/corporate/classic-polo-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: UserIcon,
    title: 'Timeless Classic Design',
    description: 'Traditional polo styling with a comfortable fit, ribbed collar and cuffs, and a classic two or three-button placket.'
  },
  {
    icon: SparklesIcon,
    title: 'Durable Pique Fabric',
    description: 'Crafted from quality pique cotton or cotton-polyester blends for breathability, comfort, and lasting wear.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Built for Longevity',
    description: 'Reinforced stitching and quality construction ensure these polos withstand regular wear and washing.'
  },
  {
    icon: TagIcon,
    title: 'Excellent for Branding',
    description: 'A perfect canvas for embroidery or screen printing, ideal for corporate identity and team uniforms.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '65% Cotton, 35% Polyester Pique (typical, varies by style)' },
  { label: 'Weight', value: '180-220 GSM' },
  { label: 'Colors Available', value: 'Wide range including Navy, Black, White, Royal Blue, Red, Green, Grey, etc.' },
  { label: 'Sizes', value: 'XS-5XL (Unisex and gender-specific fits available)' },
  { label: 'Features', value: 'Ribbed collar and cuffs, side vents, taped neck seam' },
  { label: 'Care Instructions', value: 'Machine wash warm, tumble dry medium, cool iron if needed' },
  { label: 'Customization', value: 'Embroidery, screen printing, custom color matching for large orders' }
]

const includedItems = [
  'Classic Corporate Polo Shirt',
  'Optional spare button',
  'Standard polybag packaging'
]

const occasions = [
  {
    name: 'Daily Smart Casual Wear',
    description: 'Comfortable and professional for everyday office attire.',
    icon: '👔'
  },
  {
    name: 'Team Uniforms',
    description: 'Create a unified and branded look for your staff.',
    icon: '👥'
  },
  {
    name: 'Corporate Events & Trade Shows',
    description: 'Professional and approachable for representing your company.',
    icon: '🏢'
  },
  {
    name: 'Promotional Giveaways',
    description: 'High-quality branded apparel for marketing.',
    icon: '🎁'
  }
]

const relatedProducts = [
  {
    name: 'Performance Polo Shirts',
    image: '/images/products/corporate/performance-polo-shirts.jpg',
    href: '/shop/corporate/casual-polo/performance/',
    price: 'From SAR 90'
  },
  {
    name: 'Premium Corporate Polos',
    image: '/images/products/corporate/premium-corporate-polos.jpg',
    href: '/shop/corporate/casual-polo/premium-corporate/',
    price: 'From SAR 120'
  },
  {
    name: 'Classic Business Shirts',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/shop/corporate/business-shirts/classic/',
    price: 'From SAR 120'
  }
]

export default function ClassicPoloPage() {
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
            <Link href="/shop/corporate/" className="hover:text-blue-600">Corporate</Link>
            <span>/</span>
            <Link href="/shop/corporate/casual-polo/" className="hover:text-blue-600">Casual Polo Shirts</Link>
            <span>/</span>
            <span className="text-gray-900">Classic</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/corporate/classic-polo-main.jpg"
                  alt="Classic Corporate Polo Shirt"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={`/images/products/corporate/classic-polo-detail-${i}.jpg`}
                      alt={`Classic polo detail ${i}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                  <StarIcon className="h-5 w-5 text-yellow-400" /> 
                </div>
                <span className="ml-2 text-sm text-gray-600">(320 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Classic Corporate Polo Shirts
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Our Classic Corporate Polo Shirts offer a timeless smart casual look. Made from comfortable and durable pique fabrics, they are perfect for team uniforms, corporate events, and everyday professional wear.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 75</span>
                <span className="text-lg text-gray-500 ml-2">per shirt</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 px-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
                <div className="flex flex-wrap gap-3">
                  {['Navy', 'Black', 'White', 'Royal Blue', 'Red', 'Grey'].map(color => (
                    <button key={color} className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color.toLowerCase().replace(' ', '-')}-500 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>More Colors...</span>
                    </button>
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">-</button>
                  <span className="text-lg font-semibold">1</span>
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1">
                  Add to Quote
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex-1">
                  <HeartIcon className="h-5 w-5 inline mr-2" />
                  Save for Later
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Durable Pique Fabric</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Comfortable Classic Fit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wide Color Selection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Ideal for Embroidery</span>
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
            Why Our Classic Polos Stand Out
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Versatile for Various Corporate Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{occasion.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{occasion.name}</h3>
                <p className="text-gray-600">{occasion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Specifications</h2>
              <div className="space-y-4 bg-white p-6 rounded-lg shadow">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Receive</h2>
              <div className="bg-white p-6 rounded-lg shadow">
                <ul className="space-y-3">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Custom Branding Options</h3>
                <p className="text-blue-600 mb-4">
                  Enhance your corporate identity by adding your logo or custom text through our professional embroidery or screen printing services.
                </p>
                <Link href="/services/custom-design/#embroidery-printing" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  Learn About Branding <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Other Polo & Corporate Styles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Outfit Your Team with Classic, Professional Polos
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our Classic Corporate Polos are a reliable choice for a smart and unified team appearance. Contact us for bulk pricing and customization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?item=classic-polo"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Bulk Quote
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors text-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}