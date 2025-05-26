import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  SparklesIcon, // For premium/luxury feel
  ShieldCheckIcon,
  HeartIcon,
  TrophyIcon // For excellence/premium quality
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Premium Dress Shirts | Luxury Corporate Shirts | UNEOM',
  description: 'Indulge in our premium dress shirts collection. Exquisite fabrics, superior craftsmanship, and sophisticated designs for discerning executives in Saudi Arabia.',
  keywords: 'premium dress shirts, luxury corporate shirts, executive shirts KSA, high-quality business shirts, designer corporate attire',
  openGraph: {
    title: 'Premium Dress Shirts | Luxury Corporate Shirts | UNEOM',
    description: 'Experience unparalleled quality and style with our premium dress shirts, crafted for executive presence.',
    images: ['/images/products/corporate/premium-dress-shirts-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: TrophyIcon,
    title: 'Exquisite Fabrics',
    description: 'Crafted from the finest long-staple cotton, such as Egyptian or Supima, for exceptional softness and luster.'
  },
  {
    icon: SparklesIcon,
    title: 'Superior Craftsmanship',
    description: 'Meticulously constructed with high stitch counts, fine seams, and attention to every detail for a flawless finish.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Sophisticated Design',
    description: 'Elegant and timeless designs with refined collars, cuffs, and premium mother-of-pearl buttons.'
  },
  {
    icon: UserIcon,
    title: 'Unmatched Comfort & Fit',
    description: 'Tailored for a perfect drape and exceptional comfort, ensuring you look and feel your best.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '100% Long-Staple Cotton (e.g., Egyptian, Supima, Sea Island)' },
  { label: 'Thread Count', value: '100s two-ply and above' },
  { label: 'Colors Available', value: 'Classic White, Rich Blues, Subtle Pastels, Fine Patterns' },
  { label: 'Sizes', value: 'S-XXL (Tailored Fit - consult size guide)' },
  { label: 'Collar Types', value: 'Windsor Spread, Cutaway, Tab Collar, Semi-Spread' },
  { label: 'Cuff Types', value: 'French Cuffs, Convertible Cuffs, Barrel Cuffs' },
  { label: 'Buttons', value: 'Genuine Mother-of-Pearl' },
  { label: 'Care Instructions', value: 'Professional laundering recommended, or gentle machine wash cold, hang dry' },
  { label: 'Customization', value: 'Monogramming, bespoke tailoring options, choice of collar/cuff style' }
]

const includedItems = [
  'Premium Dress Shirt',
  'High-quality collar stays (metal or mother-of-pearl)',
  'Luxury garment packaging',
  'Certificate of authenticity (for select fabrics)',
  'Detailed care and style guide'
]

const occasions = [
  {
    name: 'Boardroom Meetings',
    description: 'Command respect with impeccable style.',
    icon: '👔'
  },
  {
    name: 'Executive Presentations',
    description: 'Project confidence and authority.',
    icon: '📊'
  },
  {
    name: 'Formal Business Events',
    description: 'Make a lasting impression at high-profile gatherings.',
    icon: '🥂' 
  },
  {
    name: 'VIP Client Interactions',
    description: 'Reflect the premium nature of your services.',
    icon: '🤝'
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
    name: 'Classic Fit Business Shirts',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/shop/corporate/business-shirts/classic/',
    price: 'From SAR 120'
  },
  {
    name: 'Premium Business Suits',
    image: '/images/products/corporate/premium-business-suit.jpg',
    href: '/shop/corporate/executive-suits/premium-business/',
    price: 'From SAR 680'
  }
]

export default function PremiumDressShirtsPage() {
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
            <span className="text-gray-900">Premium Dress</span>
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
                  src="/images/products/corporate/premium-dress-shirts-main.jpg"
                  alt="Premium Dress Shirt"
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
                      src={`/images/products/corporate/premium-shirt-detail-${i}.jpg`}
                      alt={`Premium shirt detail ${i}`}
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
                <span className="ml-2 text-sm text-gray-600">(98 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Premium Dress Shirts
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Experience the pinnacle of corporate shirting with our Premium Dress Shirts. Meticulously crafted from the world's finest cottons, these shirts offer unparalleled softness, luster, and sophisticated style for the discerning executive.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 250</span>
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
                <p className="text-xs text-gray-500 mt-1">Tailored fit. Bespoke options available.</p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color/Pattern</h3>
                <div className="flex flex-wrap gap-3">
                  {['Classic White', 'Rich Blue', 'Subtle Pink', 'Fine Stripe'].map(color => (
                    <button key={color} className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span className={`w-5 h-5 rounded-full bg-${color.toLowerCase().split(' ')[0]}-100 border`}></span>
                      <span>{color}</span>
                    </button>
                  ))}
                   <button className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 hover:border-blue-500">
                      <span>More Options...</span>
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
                    <span>Finest Long-Staple Cotton</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Superior Craftsmanship</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Mother-of-Pearl Buttons</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bespoke Options Available</span>
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
            The Epitome of Shirting Excellence
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
            For Moments That Demand Distinction
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
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Bespoke Tailoring Service</h3>
                <p className="text-blue-600 mb-4">
                  For the ultimate in personalization, inquire about our bespoke tailoring service. Create a shirt that is uniquely yours, from fabric selection to final stitch.
                </p>
                <Link href="/services/custom-design" className="font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center">
                  Discover Bespoke Options <ArrowRightIcon className="ml-1 h-4 w-4" />
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
            Complement Your Executive Style
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
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invest in Uncompromising Quality and Style
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our Premium Dress Shirts are an investment in your professional image. Contact our concierge service for personalized assistance or to arrange a private consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=premium-dress-shirts"
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Premium Consultation
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}