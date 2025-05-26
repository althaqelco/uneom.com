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
  TrophyIcon // For premium/excellence
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Premium Corporate Polo Shirts | Luxury Casual Polos | UNEOM',
  description: 'Elevate your corporate casual wear with our premium polo shirts. Crafted from luxurious fabrics like mercerized cotton, featuring refined details for a sophisticated look in Saudi Arabia.',
  keywords: 'premium polo shirts, luxury corporate polos, mercerized cotton polos KSA, executive casual polos, high-end team polos',
  openGraph: {
    title: 'Premium Corporate Polo Shirts | Luxury Casual Polos | UNEOM',
    description: 'Experience superior quality and refined style with our premium corporate polo shirts, designed for a distinguished casual look.',
    images: ['/images/products/corporate/premium-polo-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: TrophyIcon,
    title: 'Luxurious Fabrics',
    description: 'Made from the finest materials such as mercerized cotton or premium blends for exceptional softness, luster, and feel.'
  },
  {
    icon: SparklesIcon,
    title: 'Refined Detailing',
    description: 'Sophisticated design elements including high-quality buttons, elegant collars, and meticulous stitching.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enhanced Durability & Comfort',
    description: 'Superior construction ensures lasting wear while providing unparalleled comfort for the discerning professional.'
  },
  {
    icon: UserIcon,
    title: 'Elevated Corporate Image',
    description: 'Projects an image of quality and attention to detail, perfect for executive casual wear and VIP events.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '100% Mercerized Cotton, Pima Cotton, or Premium Cotton Blends' },
  { label: 'Weight', value: '160-200 GSM' },
  { label: 'Colors Available', value: 'Rich jewel tones, sophisticated neutrals, classic corporate colors with custom dyeing options' },
  { label: 'Sizes', value: 'S-3XL (Tailored and classic fits available)' },
  { label: 'Features', value: 'Self-fabric collar, premium buttons (e.g., mother-of-pearl effect), fine ribbed cuffs' },
  { label: 'Care Instructions', value: 'Machine wash cold gentle cycle, lay flat to dry or tumble dry low, cool iron' },
  { label: 'Customization', value: 'Subtle logo embroidery, custom placket details, contrast tipping' }
]

const includedItems = [
  'Premium Corporate Polo Shirt',
  'Luxury garment bag (optional)',
  'Fabric care card'
]

const occasions = [
  {
    name: 'Executive Casual Fridays',
    description: 'A sophisticated yet relaxed option for business leaders.',
    icon: '👔'
  },
  {
    name: 'High-Profile Corporate Events',
    description: 'Make a refined statement at important gatherings.',
    icon: '⭐' // Star for high-profile
  },
  {
    name: 'Client Entertainment & Golf Days',
    description: 'Combine comfort with an impression of quality.',
    icon: '⛳'
  },
  {
    name: 'Premium Team Apparel',
    description: 'Outfit your key team members in distinguished casual wear.',
    icon: '🏆'
  }
]

const relatedProducts = [
  {
    name: 'Classic Corporate Polos',
    image: '/images/products/corporate/classic-polo-shirts.jpg',
    href: '/shop/corporate/casual-polo/classic/',
    price: 'From SAR 75'
  },
  {
    name: 'Performance Polo Shirts',
    image: '/images/products/corporate/performance-polo-shirts.jpg',
    href: '/shop/corporate/casual-polo/performance/',
    price: 'From SAR 90'
  },
  {
    name: 'Premium Dress Shirts',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/shop/corporate/business-shirts/premium-dress/',
    price: 'From SAR 250'
  }
]

export default function PremiumPoloPage() {
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
            <span className="text-gray-900">Premium Corporate</span>
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
                  src="/images/products/corporate/premium-polo-main.jpg"
                  alt="Premium Corporate Polo Shirt"
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
                      src={`/images/products/corporate/premium-polo-detail-${i}.jpg`}
                      alt={`Premium polo detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(125 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Premium Corporate Polo Shirts
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Indulge in the superior quality and refined style of our Premium Corporate Polo Shirts. Crafted from luxurious fabrics with meticulous attention to detail, these polos offer an elevated smart casual look for discerning professionals.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 120</span>
                <span className="text-lg text-gray-500 ml-2">per shirt</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '3XL'].map((size) => (
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
                  {['Deep Navy', 'Pearl White', 'Burgundy', 'Charcoal Heather', 'Forest Green'].map(color => (
                    <button key={color} className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color.toLowerCase().replace(' ', '-')}-700 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>Custom Dye Options...</span>
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
                    <span>Luxurious Mercerized Cotton</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Refined Detailing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Superior Comfort & Feel</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Elevated Corporate Style</span>
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
            Experience Uncompromising Quality
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
            Perfect for Distinguished Corporate Settings
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Premium Specifications</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Premium Package</h2>
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Bespoke Branding Options</h3>
                <p className="text-blue-600 mb-4">
                  For a truly exclusive touch, consider subtle monogramming, custom-dyed fabrics, or unique placket details to reflect your brand's premium status.
                </p>
                <Link href="/services/custom-design/#premium-customization" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  Explore Premium Customization <ArrowRightIcon className="ml-1 h-4 w-4" />
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
            Discover Other Corporate Essentials
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
      <section className="py-16 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Define Your Executive Presence with Premium Polos
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Invest in the finest corporate casual wear. Contact our premium apparel specialists for personalized service and to discuss your executive team's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?item=premium-polo"
              className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Premium Quote
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors text-lg"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}