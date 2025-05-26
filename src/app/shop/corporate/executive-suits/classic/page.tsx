import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  StarIcon,
  CogIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Classic Executive Suits | Elegant Corporate Attire | UNEOM',
  description: 'Discover UNEOM\'s classic executive suits collection. Elegant and practical designs for professionals and leaders in Saudi Arabia. High quality and competitive prices suitable for all professional occasions.',
  keywords: 'classic executive suits, elegant corporate attire, classic business suits, Saudi professional clothing, elegant office suits, UNEOM executive wear, classic mens suits',
  openGraph: {
    title: 'Classic Executive Suits | UNEOM',
    description: 'Classic executive suits that are elegant and practical for professionals and leaders in Saudi Arabia.',
    images: ['/images/products/corporate/classic-executive-suits-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: ClockIcon,
    title: 'Timeless Classic Design',
    description: 'Elegant classic designs unaffected by fashion changes, suitable for all professional and formal occasions.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Reliable Quality',
    description: 'High-quality fabrics and precise tailoring ensuring durability and comfort in daily use.'
  },
  {
    icon: CogIcon,
    title: 'Versatile Usage',
    description: 'Suitable for daily work, important meetings, and various formal occasions.'
  },
  {
    icon: UserGroupIcon,
    title: 'Suitable for All Professions',
    description: 'Diverse designs suitable for lawyers, managers, accountants, and professionals in all sectors.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '70-80% natural wool, 20-30% polyester, wrinkle-resistant fabrics' },
  { label: 'Suit Types', value: 'Two-piece suit, three-piece suit, daily work suit, formal suit' },
  { label: 'Cut Options', value: 'Classic cut, modern cut, comfortable cut, slim cut' },
  { label: 'Size Range', value: 'All sizes from XS to 4XL with alteration options' },
  { label: 'Color Options', value: 'Black, navy, gray, brown, dark blue, seasonal colors' },
  { label: 'Details', value: 'Classic buttons, functional pockets, comfortable lining, elegant finishes' },
  { label: 'Care', value: 'Easy to clean, wrinkle-resistant, easy to iron' }
]

const includedItems = [
  'Classic Executive Suit (Jacket + Trousers)',
  'Classic Vest (for three-piece suit)',
  'Classic Tie',
  'Premium Wooden Hanger',
  'Fabric Storage Bag',
  'Care and Maintenance Guide',
  'One-Year Quality Guarantee'
]

const idealForProfessions = [
  { name: 'Lawyers', icon: BriefcaseIcon },
  { name: 'Executive Managers', icon: BuildingOfficeIcon },
  { name: 'Accountants', icon: UserGroupIcon },
  { name: 'Academics', icon: AcademicCapIcon },
  { name: 'Business Professionals', icon: StarIcon }
]

const relatedProducts = [
  {
    name: 'Premium Executive Suits',
    image: '/images/products/corporate/premium-business-suits-main.jpg',
    href: '/shop/corporate/executive-suits/premium-business/',
    price: 'From SAR 1,800'
  },
  {
    name: 'Classic Corporate Shirts',
    image: '/images/products/corporate/classic-corporate-shirts-main.jpg',
    href: '/shop/corporate/corporate-shirts/classic/',
    price: 'From SAR 180'
  },
  {
    name: 'Classic Ties',
    image: '/images/products/corporate/classic-ties-main.jpg',
    href: '/shop/corporate/accessories/classic-ties/',
    price: 'From SAR 80'
  }
]

export default function ClassicExecutiveSuitsPage() {
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
            <Link href="/shop/corporate/" className="hover:text-blue-600">Corporate Attire</Link>
            <span>/</span>
            <Link href="/shop/corporate/executive-suits/" className="hover:text-blue-600">Executive Suits</Link>
            <span>/</span>
            <span className="text-gray-900">Classic</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-blue-400" />)}
                </div>
                <span className="ml-3 text-blue-400 font-medium">Preferred Choice for Professionals</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Classic Executive
                <span className="text-blue-400 block">Elegant Suits</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover our classic executive suits collection that combines timeless elegance with practicality. Designs suitable for all professionals and leaders in Saudi Arabia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote?product=classic-executive-suits"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-400 transition-colors text-center"
                >
                  Get Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/corporate/classic-executive-suits-hero.jpg"
                  alt="Classic Executive Suits"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Classic Suits?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Timeless classic designs that combine elegance and practicality for all professional occasions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Classic Suits Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/corporate/classic-executive-suit-${i}.jpg`}
                    alt={`Classic executive suit ${i}`}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Professions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Perfect for All Professions and Specializations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {idealForProfessions.map((profession, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <profession.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{profession.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Classic Suit Specifications</h3>
              <div className="space-y-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-gray-800 text-lg">{spec.label}:</span>
                      <span className="text-gray-600 text-right max-w-md">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-10 rounded-xl border border-blue-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Classic Package Includes</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-blue-100 rounded-lg border border-blue-300">
                <h4 className="text-xl font-bold text-blue-800 mb-3">Classic Quality Guarantee</h4>
                <p className="text-blue-700">
                  We guarantee high quality and durability for one full year, with free maintenance and alteration services during the warranty period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Competitive Prices for Classic Quality
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">From SAR 1,200</div>
              <div className="text-xl text-gray-600">per suit including alterations</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Two-Piece Suit</div>
                <div className="text-lg text-gray-600">SAR 1,200 - 1,600</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Three-Piece Suit</div>
                <div className="text-lg text-gray-600">SAR 1,500 - 2,000</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Formal Suit</div>
                <div className="text-lg text-gray-600">SAR 1,400 - 1,800</div>
              </div>
            </div>
            
            <Link
              href="/quote?product=classic-executive-suits"
              className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors inline-block"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Complete Your Professional Look
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">{product.name}</h3>
                  <p className="text-blue-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Choose Timeless Classic Elegance
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a free consultation from our experts and discover how our classic suits can enhance your professional presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Classic+Executive+Suits+Consultation"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Free Consultation
            </Link>
            <Link
              href="/shop/corporate/"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}