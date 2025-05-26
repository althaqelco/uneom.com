import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'University Staff Uniforms | Professional Academic Attire | UNEOM',
  description: 'Discover UNEOM\'s university staff uniforms collection. Professional academic attire designed specifically for university staff and educational institutions in Saudi Arabia. High quality and elegant design reflecting distinguished academic identity.',
  keywords: 'university staff uniforms, professional academic attire, Saudi university uniforms, higher education staff clothing, university administrative attire, UNEOM academic wear, educational institution uniforms',
  openGraph: {
    title: 'University Staff Uniforms | UNEOM',
    description: 'Professional academic attire designed specifically for university staff and educational institutions in Saudi Arabia.',
    images: ['/images/products/education/university-staff-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'Distinguished Academic Design',
    description: 'Elegant and professional designs that reflect the distinguished academic character and enhance the institutional identity of universities and educational institutions.'
  },
  {
    icon: UserGroupIcon,
    title: 'Suitable for All Departments',
    description: 'Diverse designs suitable for administrative staff, libraries, student services, and various academic departments.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Superior Quality and Comfort',
    description: 'High-quality fabrics comfortable for daily use, wrinkle-resistant and easy to care for and maintain.'
  },
  {
    icon: SparklesIcon,
    title: 'Customization Options',
    description: 'Various customization options including university logo, institutional colors, and specific details for each department or college.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'High-quality cotton blend, wrinkle-resistant polyester, breathable fabrics' },
  { label: 'Uniform Types', value: 'Formal shirts, elegant blouses, administrative suits, academic jackets, professional dresses' },
  { label: 'Design Options', value: 'Classic design, modern, conservative, suitable for Saudi culture' },
  { label: 'Size Range', value: 'All sizes for men and women from XS to 4XL' },
  { label: 'Color Options', value: 'Official university colors, academic blue, gray, white, custom colors' },
  { label: 'Distinguished Details', value: 'Embroidered university logo, custom buttons, functional pockets, academic details' },
  { label: 'Care and Maintenance', value: 'Machine washable, stain-resistant, easy to iron' }
]

const includedItems = [
  'Complete University Staff Uniform (Shirt/Blouse + Trousers/Skirt)',
  'Academic Jacket (according to position)',
  'Embroidered University Badge',
  'Official Dress Code Guide',
  'Custom Storage Bag',
  'Care and Maintenance Guide',
  'One-Year Quality Guarantee'
]

const universityDepartments = [
  { name: 'Academic Administration', icon: BuildingLibraryIcon },
  { name: 'University Libraries', icon: BookOpenIcon },
  { name: 'Student Services', icon: UserGroupIcon },
  { name: 'Information Technology', icon: ComputerDesktopIcon },
  { name: 'Administrative Affairs', icon: ClipboardDocumentListIcon }
]

const relatedProducts = [
  {
    name: 'University Graduate Attire',
    image: '/images/products/education/graduate-attire-main.jpg',
    href: '/shop/education/university-attire/graduate-attire/',
    price: 'From SAR 400'
  },
  {
    name: 'Teacher Uniforms',
    image: '/images/products/education/teacher-uniform-main.jpg',
    href: '/shop/education/staff-uniforms/teacher-uniform/',
    price: 'From SAR 250'
  },
  {
    name: 'Educational Administrative Suits',
    image: '/images/products/education/admin-suit-main.jpg',
    href: '/shop/education/staff-uniforms/admin-suit/',
    price: 'From SAR 600'
  }
]

export default function UniversityStaffUniformPage() {
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
            <span className="text-gray-900">Staff Uniform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-6 w-6 text-purple-400" />)}
                </div>
                <span className="ml-3 text-purple-400 font-medium">First Choice for Saudi Universities</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional University
                <span className="text-purple-400 block">Staff Uniforms</span>
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Discover our distinguished academic attire collection designed specifically for university staff and educational institutions. Elegant and professional designs that reflect the distinguished academic identity in Saudi Arabia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote?product=university-staff-uniform"
                  className="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-400 transition-colors text-center"
                >
                  Get University Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-center"
                >
                  Free Academic Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/education/university-staff-uniform-hero.jpg"
                  alt="Professional University Staff Uniforms"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-purple-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Universities & Institutions</div>
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
              Why Choose Our Academic Attire?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished professional designs that reflect the academic character and enhance the institutional identity of universities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-purple-600" />
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
            Academic Attire Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={`/images/products/education/university-staff-uniform-${i}.jpg`}
                    alt={`University staff uniform ${i}`}
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

      {/* University Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Suitable for All University Departments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {universityDepartments.map((department, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <department.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{department.name}</h4>
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
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Academic Attire Specifications</h3>
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
            
            <div className="bg-purple-50 p-10 rounded-xl border border-purple-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Academic Package Includes</h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-purple-100 rounded-lg border border-purple-300">
                <h4 className="text-xl font-bold text-purple-800 mb-3">Academic Quality Guarantee</h4>
                <p className="text-purple-700">
                  We guarantee high quality and durability for one full year, with free maintenance service and alteration options as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Competitive Prices for Educational Institutions
          </h2>
          <div className="bg-white rounded-xl p-10 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">From SAR 320</div>
              <div className="text-xl text-gray-600">per uniform including customization</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Administrative Uniform</div>
                <div className="text-lg text-gray-600">SAR 320 - 450</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Academic Uniform</div>
                <div className="text-lg text-gray-600">SAR 380 - 520</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Executive Uniform</div>
                <div className="text-lg text-gray-600">SAR 450 - 600</div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold text-purple-800 mb-2">Special University Discounts</h4>
              <p className="text-purple-700">15% discount for orders over 50 pieces | 25% discount for orders over 100 pieces</p>
            </div>
            
            <Link
              href="/quote?product=university-staff-uniform"
              className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-purple-700 transition-colors inline-block"
            >
              Get University Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Complete Your Academic Identity
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">{product.name}</h3>
                  <p className="text-purple-600 font-bold text-lg mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center w-full"
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
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Enhance Your University's Academic Identity
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Contact our experts for a free consultation and design custom academic attire that reflects your university's distinguished identity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=University+Staff+Uniform+Consultation"
              className="bg-white text-purple-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Free Academic Consultation
            </Link>
            <Link
              href="/shop/education/"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse Educational Attire
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}