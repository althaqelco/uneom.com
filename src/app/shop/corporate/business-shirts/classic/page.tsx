import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Classic Fit Business Shirts | Traditional Corporate Shirts | UNEOM',
  description: 'Discover our classic fit business shirts. Timeless style, comfortable fabrics, and durable construction for a professional look in traditional corporate settings in Saudi Arabia.',
  keywords: 'classic fit business shirts, traditional corporate shirts, mens classic dress shirts, professional attire KSA, comfortable business shirts',
  openGraph: {
    title: 'Classic Fit Business Shirts | Traditional Corporate Shirts | UNEOM',
    description: 'Timeless style and comfort with our classic fit business shirts. Perfect for traditional corporate environments.',
    images: ['/images/products/corporate/classic-fit-shirts-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: UserIcon,
    title: 'Generous Classic Fit',
    description: 'A comfortable, traditional cut that allows for ease of movement throughout the workday.'
  },
  {
    icon: SparklesIcon,
    title: 'Quality Fabrics',
    description: 'Crafted from durable and breathable cotton blends, ensuring comfort and longevity.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Timeless Styling',
    description: 'Traditional collar styles and classic design details suitable for any professional setting.'
  },
  {
    icon: TagIcon,
    title: 'Easy Care Options',
    description: 'Many shirts feature easy-care or wrinkle-resistant finishes for convenience.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '60% Cotton, 40% Polyester (varies by style)' },
  { label: 'Weight', value: '120-140 GSM' },
  { label: 'Colors Available', value: 'White, Light Blue, Navy, Charcoal, Black, Striped & Checked patterns' },
  { label: 'Sizes', value: 'S-5XL (Standard US Sizing)' },
  { label: 'Collar Types', value: 'Point, Spread, Button-Down' },
  { label: 'Care Instructions', value: 'Machine wash warm, tumble dry low, or dry clean' },
  { label: 'Customization', value: 'Logo embroidery, monogramming, contrast stitching' }
]

const includedItems = [
  'Classic Fit Business Shirt',
  'Collar stays (where applicable)',
  'Professional packaging',
  'Care instruction card'
]

const occasions = [
  {
    name: 'Daily Office Wear',
    description: 'Comfortable and professional for everyday work.',
    icon: '👔'
  },
  {
    name: 'Client Meetings',
    description: 'Presents a polished and reliable image.',
    icon: '🤝'
  },
  {
    name: 'Corporate Events',
    description: 'Suitable for formal business gatherings and conferences.',
    icon: '🏢'
  },
  {
    name: 'Team Uniforms',
    description: 'Consistent and professional look for your entire team.',
    icon: '👥'
  }
]

const relatedProducts = [
  {
    name: 'Modern Fit Business Shirts',
    image: '/images/products/corporate/modern-fit-shirts.jpg',
    href: '/shop/corporate/business-shirts/modern-fit/',
    price: 'From SAR 150'
  },
  {
    name: 'Premium Dress Shirts',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/shop/corporate/business-shirts/premium-dress/',
    price: 'From SAR 250'
  },
  {
    name: 'Classic Executive Suits',
    image: '/images/products/corporate/classic-executive-suit.jpg',
    href: '/shop/corporate/executive-suits/classic/',
    price: 'From SAR 580'
  }
]

export default function ClassicFitShirtsPage() {
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
            <Link href="/shop/corporate/business-shirts/" className="hover:text-blue-600">Business Shirts</Link>
            <span>/</span>
            <span className="text-gray-900">Classic Fit</span>
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
                  src="/images/products/corporate/classic-fit-shirts-main.jpg"
                  alt="Classic Fit Business Shirt"
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
                      src={`/images/products/corporate/classic-shirt-detail-${i}.jpg`}
                      alt={`Classic shirt detail ${i}`}
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
                  <StarIcon className="h-5 w-5 text-yellow-400" /> {/* Example for 4.5 stars */}
                </div>
                <span className="ml-2 text-sm text-gray-600">(158 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Classic Fit Business Shirts
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Experience timeless style and exceptional comfort with our Classic Fit Business Shirts. Designed for the discerning professional who values traditional elegance and a comfortable fit.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 120</span>
                <span className="text-lg text-gray-500 ml-2">per shirt</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'].map((size) => (
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
                  {['White', 'Light Blue', 'Navy', 'Charcoal'].map(color => (
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
                    <span>Comfortable Classic Fit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Durable Cotton Blends</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Easy Care Options</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bulk Discounts Available</span>
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
            The Hallmarks of Our Classic Fit Shirts
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
            Perfect for Every Professional Occasion
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Customization Available</h3>
                <p className="text-blue-600 mb-4">
                  Make these classic shirts truly your own. We offer logo embroidery, monogramming, and options for contrast stitching or unique button choices to align with your brand.
                </p>
                <Link href="/services/custom-design" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  Learn More About Customization <ArrowRightIcon className="ml-1 h-4 w-4" />
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
            Explore Other Business Shirt Styles
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
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invest in Timeless Professionalism with Classic Fit Shirts
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ensure your team looks polished and professional. Contact us for bulk orders, customization, or to discuss your specific corporate attire needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}