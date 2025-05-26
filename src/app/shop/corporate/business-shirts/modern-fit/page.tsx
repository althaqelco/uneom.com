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
  BoltIcon // For modern/dynamic feel
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Modern Fit Business Shirts | Contemporary Corporate Shirts | UNEOM',
  description: 'Sharp and stylish modern fit business shirts. Tailored silhouette, stretch fabrics, and contemporary designs for a progressive professional look in Saudi Arabia.',
  keywords: 'modern fit business shirts, contemporary corporate shirts, slim fit dress shirts, professional shirts KSA, stylish business attire',
  openGraph: {
    title: 'Modern Fit Business Shirts | Contemporary Corporate Shirts | UNEOM',
    description: 'Achieve a sharp, professional look with our modern fit business shirts. Tailored for today\'s progressive executives.',
    images: ['/images/products/corporate/modern-fit-shirts-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'Tailored Modern Silhouette',
    description: 'A contemporary, slightly tapered fit that offers a sharp and polished appearance without being restrictive.'
  },
  {
    icon: SparklesIcon,
    title: 'Performance Stretch Fabrics',
    description: 'Crafted from innovative cotton blends with stretch for enhanced comfort, mobility, and all-day performance.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Contemporary Design Details',
    description: 'Features modern collar styles, refined cuffs, and subtle design elements for a sophisticated look.'
  },
  {
    icon: UserIcon,
    title: 'Versatile Professionalism',
    description: 'Perfect for a range of corporate settings, from daily office wear to important client presentations.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '97% Cotton, 3% Elastane (varies by style)' },
  { label: 'Weight', value: '110-130 GSM' },
  { label: 'Colors Available', value: 'White, Sky Blue, Navy, Charcoal, Black, Micro-Patterns, Fine Stripes' },
  { label: 'Sizes', value: 'S-XXL (Slimmer Cut - check size chart)' },
  { label: 'Collar Types', value: 'Spread, Cutaway, Hidden Button-Down' },
  { label: 'Care Instructions', value: 'Machine wash cold, tumble dry low or hang dry, light iron if needed' },
  { label: 'Customization', value: 'Logo embroidery, contrast button stitching, custom labels' }
]

const includedItems = [
  'Modern Fit Business Shirt',
  'Removable collar stays',
  'Eco-friendly packaging',
  'Style guide for modern corporate looks'
]

const occasions = [
  {
    name: 'Dynamic Office Environments',
    description: 'Stay sharp and comfortable in fast-paced workplaces.',
    icon: '🏢'
  },
  {
    name: 'Client-Facing Roles',
    description: 'Make a strong, contemporary impression.',
    icon: '🤝'
  },
  {
    name: 'Business Casual Settings',
    description: 'Easily transitions from formal to smart casual.',
    icon: '🕶️' 
  },
  {
    name: 'Networking Events',
    description: 'Look polished and approachable.',
    icon: '💬'
  }
]

const relatedProducts = [
  {
    name: 'Classic Fit Business Shirts',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/shop/corporate/business-shirts/classic/',
    price: 'From SAR 120'
  },
  {
    name: 'Premium Dress Shirts',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/shop/corporate/business-shirts/premium-dress/',
    price: 'From SAR 250'
  },
  {
    name: 'Modern Executive Suits',
    image: '/images/products/corporate/modern-executive-suits.jpg',
    href: '/shop/corporate/executive-suits/modern/',
    price: 'From SAR 620'
  }
]

export default function ModernFitShirtsPage() {
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
            <span className="text-gray-900">Modern Fit</span>
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
                  src="/images/products/corporate/modern-fit-shirts-main.jpg"
                  alt="Modern Fit Business Shirt"
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
                      src={`/images/products/corporate/modern-shirt-detail-${i}.jpg`}
                      alt={`Modern shirt detail ${i}`}
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
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="ml-2 text-sm text-gray-600">(212 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern Fit Business Shirts
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Elevate your professional wardrobe with our Modern Fit Business Shirts. Designed with a contemporary silhouette and performance stretch fabrics for a look that's sharp, stylish, and comfortable all day long.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 150</span>
                <span className="text-lg text-gray-500 ml-2">per shirt</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 px-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">Note: Modern fit is a slimmer cut. Refer to size chart.</p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
                <div className="flex flex-wrap gap-3">
                  {['White', 'Sky Blue', 'Navy', 'Charcoal', 'Black'].map(color => (
                    <button key={color} className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color.toLowerCase().replace(' ', '-')}-500 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>Micro-Patterns...</span>
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
                    <span>Tailored Modern Fit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Performance Stretch Fabric</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Contemporary Styling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Ideal for Dynamic Professionals</span>
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
            Key Features of Our Modern Fit Shirts
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
            Designed for the Modern Professional Landscape
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Pair with Modern Suits</h3>
                <p className="text-blue-600 mb-4">
                  Complete your contemporary professional look by pairing these modern fit shirts with our range of Modern Executive Suits for a cohesive and stylish ensemble.
                </p>
                <Link href="/shop/corporate/executive-suits/modern/" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  Explore Modern Suits <ArrowRightIcon className="ml-1 h-4 w-4" />
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
            Complete Your Corporate Wardrobe
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
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Upgrade to Modern Professionalism Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your corporate image with our Modern Fit Business Shirts? Contact us for bulk orders, customization, or expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get a Corporate Quote
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              Speak to a Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}