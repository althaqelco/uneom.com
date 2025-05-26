import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  TrophyIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  GiftIcon,
  CameraIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'University Graduate Attire | Academic Graduation Clothing | UNEOM',
  description: 'Discover UNEOM\'s university graduate attire collection. Luxury academic graduation clothing for university celebrations in Saudi Arabia. Graduation gowns and academic caps of the highest quality to immortalize distinguished moments of success.',
  keywords: 'university graduate attire, academic graduation clothing, Saudi graduation gowns, university graduation caps, graduation ceremony attire, UNEOM graduation wear, luxury academic gowns',
  openGraph: {
    title: 'University Graduate Attire | UNEOM',
    description: 'Luxury academic graduation clothing for university celebrations in Saudi Arabia.',
    images: ['/images/products/education/graduate-attire-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'Traditional Academic Design',
    description: 'Graduation gowns and caps designed according to global academic traditions with touches suitable for Saudi culture.'
  },
  {
    icon: TrophyIcon,
    title: 'Luxury Ceremonial Quality',
    description: 'Luxury fabrics and elegant finishes befitting the importance of graduation moments and ensuring a distinguished appearance in commemorative photos.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Precise and Comfortable Sizing',
    description: 'Precise and studied measurements ensuring comfort and elegance throughout the graduation ceremony with complete freedom of movement.'
  },
  {
    icon: SparklesIcon,
    title: 'University Customization',
    description: 'Ability to customize colors, logos, and details according to each university, college, and graduation degree.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Luxury wrinkle-resistant polyester, traditional academic fabrics, silk lining' },
  { label: 'Attire Components', value: 'Graduation gown, academic cap, graduation tassel, head covering (for women)' },
  { label: 'Graduation Degrees', value: 'Bachelor\'s, Master\'s, Doctorate, Higher Diploma, Professional Certificates' },
  { label: 'Size Range', value: 'All sizes from XS to 4XL for men and women' },
  { label: 'Color Options', value: 'Official university colors, traditional black, navy, different college colors' },
  { label: 'Academic Details', value: 'Embroidered university logo, college colors, degree symbols' },
  { label: 'Accessories', value: 'Colored tassel, university pin, certificate of appreciation, luxury storage bag' }
]

const includedItems = [
  'Luxury Academic Graduation Gown',
  'Traditional Academic Graduation Cap',
  'College-Colored Graduation Tassel',
  'Academic Head Covering (for women)',
  'Commemorative University Pin',
  'Luxury Storage Bag',
  'Academic Dress Code Guide',
  'UNEOM Certificate of Appreciation'
]

const graduationLevels = [
  { name: 'Bachelor\'s Degree', icon: StarIcon },
  { name: 'Master\'s Degree', icon: TrophyIcon },
  { name: 'Doctorate Degree', icon: AcademicCapIcon },
  { name: 'Higher Diploma', icon: GiftIcon },
  { name: 'Professional Certificates', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'University Staff Uniforms',
    image: '/images/products/education/university-staff-uniform-main.jpg',
    href: '/shop/education/university-attire/staff-uniform/',
    price: 'From SAR 320'
  },
  {
    name: 'Graduation Accessories',
    image: '/images/products/education/graduation-accessories-main.jpg',
    href: '/shop/education/graduation-accessories/',
    price: 'From SAR 80'
  },
  {
    name: 'Special Academic Attire',
    image: '/images/products/education/special-academic-attire-main.jpg',
    href: '/shop/education/special-academic-attire/',
    price: 'From SAR 500'
  }
]

export default function GraduateAttirePage() {
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
            <Link href="/shop/education/" className="hover:text-blue-600">Educational Attire</Link>
            <span>/</span>
            <Link href="/shop/education/university-attire/" className="hover:text-blue-600">University Attire</Link>
            <span>/</span>
            <span className="text-gray-900">Graduate Attire</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-amber-400" />)}
                </div>
                <span className="ml-3 text-amber-400 font-medium">First Choice for Graduation Ceremonies</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Luxury Academic
                <span className="text-amber-400 block">Graduate Attire</span>
              </h1>
              
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                Celebrate your academic achievement with UNEOM's luxury graduation attire collection. Elegant graduation gowns and caps designed to immortalize distinguished moments of success in Saudi universities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote?product=graduate-attire"
                  className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors text-center"
                >
                  Book Graduation Attire
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-colors text-center"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/education/graduate-attire-hero.jpg"
                  alt="Luxury Academic Graduate Attire"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-500 text-black p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm">Happy Graduates</div>
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
              Why Choose UNEOM Graduation Attire?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury academic designs befitting the importance of graduation moments and immortalizing memories of success forever
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-amber-600" />
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
            Luxury Graduation Attire Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/education/graduate-attire-${i}.jpg`}
                    alt={`Academic graduation attire ${i}`}
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

      {/* Graduation Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Attire for All Academic Degrees
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {graduationLevels.map((level, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <level.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{level.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Moments Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unforgettable Moments Deserve the Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Graduation day is the culmination of years of effort and dedication, and deserves attire befitting this great achievement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CameraIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Perfect Commemorative Photos</h3>
              <p className="text-gray-600">Elegant attire ensuring a distinguished appearance in all commemorative photos</p>
            </div>
            <div className="text-center">
              <HeartIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Eternal Family Memories</h3>
              <p className="text-gray-600">Moments of pride and honor shared with family and friends</p>
            </div>
            <div className="text-center">
              <TrophyIcon className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Celebration of Achievement</h3>
              <p className="text-gray-600">Well-deserved crowning of years of study and academic excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Graduation Attire Specifications</h3>
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
            
            <div className="bg-amber-50 p-10 rounded-xl border border-amber-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Luxury Graduation Package Includes</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-amber-100 rounded-lg border border-amber-300">
                <h4 className="text-xl font-bold text-amber-800 mb-3">Perfect Moment Guarantee</h4>
                <p className="text-amber-700">
                  We guarantee exceptional quality and perfect appearance on your graduation day, with specialized customer service to ensure your complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Invest in Unforgettable Memories
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">From SAR 400</div>
              <div className="text-xl text-gray-600">for complete attire with all accessories</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">Bachelor's</div>
                <div className="text-lg text-gray-600">SAR 400 - 550</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">Master's</div>
                <div className="text-lg text-gray-600">SAR 500 - 650</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600 mb-2">Doctorate</div>
                <div className="text-lg text-gray-600">SAR 600 - 800</div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold text-amber-800 mb-2">Special University Offers</h4>
              <p className="text-amber-700">20% discount for group orders over 20 graduates | Free delivery service to universities</p>
            </div>
            
            <Link
              href="/quote?product=graduate-attire"
              className="bg-amber-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-amber-700 transition-colors inline-block"
            >
              Book Graduation Attire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Complete Your Academic Celebration
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600">{product.name}</h3>
                  <p className="text-amber-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Make Your Graduation Day Unforgettable
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Book luxury graduation attire now and celebrate your academic achievement with elegance and pride befitting this special moment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Graduate+Attire+Booking"
              className="bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/shop/education/"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              Browse Educational Attire
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}