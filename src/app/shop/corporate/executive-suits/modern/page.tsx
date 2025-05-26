import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  HeartIcon,
  BoltIcon,
  UserIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Modern Executive Suits | Contemporary Business Attire | Slim Fit Corporate Suits | UNEOM',
  description: 'Modern executive suits with contemporary styling and slim fit design. Perfect for progressive business leaders and modern corporate environments in Saudi Arabia.',
  keywords: 'modern executive suits Saudi Arabia, contemporary business suits KSA, slim fit corporate attire, modern business wear, progressive executive clothing',
  openGraph: {
    title: 'Modern Executive Suits | Contemporary Business Attire | Slim Fit Corporate Suits | UNEOM',
    description: 'Modern executive suits with contemporary styling and slim fit design. Perfect for progressive business leaders and modern corporate environments.',
    images: ['/images/products/corporate/modern-executive-suits.jpg'],
  },
}

const productFeatures = [
  {
    icon: BoltIcon,
    title: 'Contemporary Design',
    description: 'Modern styling with clean lines and contemporary silhouettes that reflect progressive business leadership.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Fabrics',
    description: 'High-performance wool blends with stretch technology for comfort and mobility in dynamic work environments.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Slim Fit Tailoring',
    description: 'Expertly tailored slim fit design that creates a sharp, modern silhouette without compromising comfort.'
  },
  {
    icon: UserIcon,
    title: 'Versatile Styling',
    description: 'Adaptable design suitable for boardrooms, client meetings, and modern business networking events.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '60% Wool, 35% Polyester, 5% Elastane' },
  { label: 'Weight', value: '240 GSM' },
  { label: 'Colors Available', value: 'Charcoal Gray, Navy Blue, Dark Gray, Midnight Blue' },
  { label: 'Sizes', value: '46-60 (European sizing)' },
  { label: 'Fit Type', value: 'Slim Fit with stretch technology' },
  { label: 'Care Instructions', value: 'Dry clean recommended, wrinkle-resistant' },
  { label: 'Customization', value: 'Company logo, monogramming, color variations' }
]

const includedItems = [
  'Modern slim-fit suit jacket with contemporary lapels',
  'Matching flat-front trousers with stretch waistband',
  'Premium dress shirt with modern collar',
  'Contemporary silk tie with geometric pattern',
  'Luxury garment bag with company branding',
  'Care instruction card',
  'Professional fitting guide',
  'Modern cufflinks (optional upgrade)'
]

const businessOccasions = [
  {
    name: 'Executive Meetings',
    description: 'Perfect for high-level business meetings and presentations',
    icon: '💼'
  },
  {
    name: 'Client Presentations',
    description: 'Ideal for impressing clients and closing important deals',
    icon: '📊'
  },
  {
    name: 'Corporate Events',
    description: 'Sophisticated attire for company functions and networking',
    icon: '🏢'
  },
  {
    name: 'Business Travel',
    description: 'Wrinkle-resistant design perfect for business trips',
    icon: '✈️'
  }
]

const relatedProducts = [
  {
    name: 'Premium Business Suit',
    image: '/images/products/corporate/premium-business-suit.jpg',
    href: '/shop/corporate/executive-suits/premium-business/',
    price: 'From SAR 680'
  },
  {
    name: 'Classic Executive Suit',
    image: '/images/products/corporate/classic-executive-suit.jpg',
    href: '/shop/corporate/executive-suits/classic/',
    price: 'From SAR 580'
  },
  {
    name: 'Modern Dress Shirt',
    image: '/images/products/corporate/modern-dress-shirt.jpg',
    href: '/shop/corporate/business-shirts/modern-fit/',
    price: 'From SAR 180'
  }
]

export default function ModernExecutiveSuitsPage() {
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
            <Link href="/shop/corporate/executive-suits/" className="hover:text-blue-600">Executive Suits</Link>
            <span>/</span>
            <span className="text-gray-900">Modern</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/corporate/modern-executive-suits.jpg"
                  alt="Modern Executive Suits"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-jacket.jpg"
                    alt="Modern suit jacket detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-trousers.jpg"
                    alt="Slim fit trousers"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-details.jpg"
                    alt="Contemporary details"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/corporate/modern-suit-full.jpg"
                    alt="Complete modern suit"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(127 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern Executive Suits
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Contemporary executive suits designed for the modern business leader. 
                Features slim-fit tailoring, stretch technology, and contemporary styling perfect for dynamic corporate environments.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 620</span>
                <span className="text-lg text-gray-500 ml-2">per complete suit</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['46', '48', '50', '52', '54', '56', '58', '60'].map((size) => (
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
                <div className="flex space-x-3">
                  <button className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-950 border-2 border-gray-300 hover:border-blue-500"></button>
                </div>
              </div>

              {/* Fit Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fit Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="fit" className="mr-2" defaultChecked />
                    <span>Slim Fit (Recommended)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="fit" className="mr-2" />
                    <span>Modern Fit</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="fit" className="mr-2" />
                    <span>Tailored Fit</span>
                  </label>
                </div>
              </div>

              {/* Customization Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customization</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Company logo embroidery</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Personal monogramming</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Custom lining color</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Premium cufflinks upgrade</span>
                  </label>
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
                    <span>Stretch technology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wrinkle-resistant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Slim fit design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bulk discounts available</span>
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
            Designed for Modern Business Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center">
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

      {/* Business Occasions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Every Business Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessOccasions.map((occasion, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Suit Includes</h2>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Business Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Redefine Modern Business Style
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modern executive suits combine contemporary design with traditional craftsmanship. 
              Perfect for progressive business leaders who value both style and performance in their professional attire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dynamic Performance</h3>
              <p className="text-gray-600">
                Stretch technology and modern fit ensure comfort and mobility in fast-paced business environments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contemporary Excellence</h3>
              <p className="text-gray-600">
                Modern styling that reflects progressive leadership and forward-thinking business approach.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                High-performance fabrics and expert tailoring ensure lasting quality and professional appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Your Executive Wardrobe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
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
            Outfit Your Executive Team with Modern Business Suits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our corporate specialists for bulk pricing and customization options for your executive team. 
            Elevate your company's professional image with contemporary business attire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Executive Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Contact Corporate Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}