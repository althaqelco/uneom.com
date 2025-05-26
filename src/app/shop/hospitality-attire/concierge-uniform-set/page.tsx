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
  TrophyIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Luxury Concierge Uniform Set | Premium Hotel Staff Attire | Executive Hospitality Wear | UNEOM',
  description: 'Premium concierge uniform set for luxury hotels and hospitality venues. Sophisticated design with gold accents, perfect for front desk, guest services, and VIP hospitality staff.',
  keywords: 'concierge uniform Saudi Arabia, luxury hotel staff attire, premium hospitality uniforms KSA, executive concierge wear, hotel front desk uniform, VIP service attire',
  openGraph: {
    title: 'Luxury Concierge Uniform Set | Premium Hotel Staff Attire | Executive Hospitality Wear | UNEOM',
    description: 'Premium concierge uniform set for luxury hotels and hospitality venues. Sophisticated design with gold accents for VIP hospitality staff.',
    images: ['/images/products/hospitality/luxury-concierge-uniform-set.jpg'],
  },
}

const productFeatures = [
  {
    icon: TrophyIcon,
    title: 'Luxury Design',
    description: 'Sophisticated styling with premium gold accents and elegant details that reflect the prestige of luxury hospitality.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Materials',
    description: 'High-quality wool blend fabric with superior drape and comfort for all-day professional wear.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Executive Tailoring',
    description: 'Expertly tailored for a distinguished silhouette that commands respect and projects authority.'
  },
  {
    icon: UserIcon,
    title: 'Guest-Focused Design',
    description: 'Professional appearance designed to enhance guest confidence and create memorable service experiences.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '65% Wool, 30% Polyester, 5% Elastane' },
  { label: 'Weight', value: '260 GSM' },
  { label: 'Colors Available', value: 'Navy with Gold, Charcoal with Silver, Burgundy with Gold, Black with Gold' },
  { label: 'Sizes', value: 'XS-4XL (European sizing)' },
  { label: 'Care Instructions', value: 'Dry clean only, professional pressing recommended' },
  { label: 'Customization', value: 'Hotel logo, name badges, department insignia, gold/silver accents' }
]

const includedItems = [
  'Premium wool blend blazer with gold accents',
  'Matching dress trousers with side stripe',
  'Crisp white dress shirt with French cuffs',
  'Silk tie with hotel colors',
  'Gold-plated name badge and pins',
  'Professional garment bag',
  'Care instruction card',
  'White pocket square'
]

const serviceAreas = [
  {
    name: 'Front Desk Reception',
    description: 'Perfect for luxury hotel front desk and check-in services',
    icon: '🏨'
  },
  {
    name: 'Guest Relations',
    description: 'Ideal for guest services and VIP hospitality management',
    icon: '👥'
  },
  {
    name: 'Concierge Services',
    description: 'Sophisticated attire for concierge and guest assistance',
    icon: '🎩'
  },
  {
    name: 'Executive Events',
    description: 'Professional appearance for high-end events and functions',
    icon: '🎭'
  }
]

const relatedProducts = [
  {
    name: 'Executive Hospitality Suit',
    image: '/images/products/hospitality/executive-hospitality-suit.jpg',
    href: '/shop/hospitality-attire/executive-hospitality-suit/',
    price: 'From SAR 420'
  },
  {
    name: 'Premium Chef Uniform',
    image: '/images/products/hospitality/premium-chef-uniform.jpg',
    href: '/shop/hospitality-attire/premium-chef-uniform/',
    price: 'From SAR 280'
  },
  {
    name: 'Luxury Hotel Uniform',
    image: '/images/products/hospitality/luxury-hotel-uniform.jpg',
    href: '/shop/hospitality-attire/luxury-hotel-uniform/',
    price: 'From SAR 320'
  }
]

export default function ConciergeUniformSetPage() {
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
            <Link href="/shop/hospitality-attire/" className="hover:text-blue-600">Hospitality Attire</Link>
            <span>/</span>
            <span className="text-gray-900">Concierge Uniform Set</span>
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
                  src="/images/products/hospitality/luxury-concierge-uniform-set.jpg"
                  alt="Luxury Concierge Uniform Set"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-blazer-detail.jpg"
                    alt="Blazer with gold accents"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-trousers-detail.jpg"
                    alt="Dress trousers detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-accessories.jpg"
                    alt="Accessories and badges"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/hospitality/concierge-full-set.jpg"
                    alt="Complete uniform set"
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
                <span className="ml-2 text-sm text-gray-600">(89 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Luxury Concierge Uniform Set
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Premium concierge uniform set designed for luxury hotels and high-end hospitality venues. 
                Features sophisticated styling with gold accents and premium wool blend construction for the ultimate in professional elegance.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 480</span>
                <span className="text-lg text-gray-500 ml-2">per complete set</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'].map((size) => (
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color & Accent</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" defaultChecked />
                    <span>Navy Blue with Gold Accents</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" />
                    <span>Charcoal Gray with Silver Accents</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" />
                    <span>Burgundy with Gold Accents</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="color" className="mr-2" />
                    <span>Black with Gold Accents</span>
                  </label>
                </div>
              </div>

              {/* Customization Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customization</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span>Hotel logo embroidery</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Personalized name badge</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Department insignia</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Custom tie with hotel colors</span>
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
                    <span>Premium wool blend</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Gold accent details</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Complete set included</span>
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
            Designed for Luxury Hospitality Excellence
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

      {/* Service Areas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Premium Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-gray-600">{area.description}</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Set Includes</h2>
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

      {/* Luxury Experience Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Elevate Your Guest Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our luxury concierge uniform set is designed to create an immediate impression of sophistication and professionalism. 
              Every detail reflects the premium standards your guests expect from luxury hospitality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Presence</h3>
              <p className="text-gray-600">
                Premium styling that immediately communicates the luxury standards of your establishment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Excellence</h3>
              <p className="text-gray-600">
                Sophisticated design that enhances your hotel's brand image and guest confidence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Craftsmanship</h3>
              <p className="text-gray-600">
                Exceptional materials and expert tailoring ensure lasting quality and timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Your Hospitality Collection
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
            Outfit Your Luxury Hotel with Premium Concierge Uniforms
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our hospitality specialists for bulk pricing and customization options for your luxury hotel. 
            Create an unforgettable first impression with premium concierge attire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Luxury Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Contact Hospitality Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
