import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  HandRaisedIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Professional Nurse Uniforms | Complete Nursing Scrubs Set | UNEOM',
  description: 'UNEOM\'s professional nurse uniforms provide comfort, durability, and style for nursing professionals in Saudi Arabia. Complete nursing scrubs sets designed for healthcare excellence.',
  keywords: 'nurse uniforms, nursing scrubs, healthcare uniforms, medical nursing attire, Saudi nurse uniforms, professional nursing wear, UNEOM medical scrubs, nursing uniform sets',
  openGraph: {
    title: 'Professional Nurse Uniforms | UNEOM',
    description: 'Complete nursing uniform sets designed for comfort, functionality, and professional appearance in Saudi healthcare facilities.',
    images: ['/images/products/medical/nurse-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: HeartIcon,
    title: 'Patient-Centered Design',
    description: 'Thoughtfully designed with patient care in mind, featuring easy-access pockets and comfortable fit for long shifts.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Infection Control',
    description: 'Antimicrobial fabric treatment and easy-care properties support infection prevention protocols.'
  },
  {
    icon: ClockIcon,
    title: '12-Hour Comfort',
    description: 'Engineered for extended wear with moisture-wicking fabric and ergonomic design for all-day comfort.'
  },
  {
    icon: UserGroupIcon,
    title: 'Team Coordination',
    description: 'Available in coordinated colors and styles to support team identification and professional unity.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Premium Poly-Cotton Blend (65% Polyester, 35% Cotton) with antimicrobial treatment' },
  { label: 'Weight', value: '180-220 GSM for optimal comfort and durability' },
  { label: 'Set Components', value: 'Nursing Top, Nursing Pants, Optional Cardigan, Optional Undershirt' },
  { label: 'Available Styles', value: 'V-neck Top, Round Neck, Mock Wrap, Straight Leg Pants, Jogger Style' },
  { label: 'Colors', value: 'Navy Blue, Ceil Blue, White, Burgundy, Teal (custom colors for facilities)' },
  { label: 'Sizes', value: 'XS - 4XL, with petite, regular, and tall options' },
  { label: 'Special Features', value: 'Side vents, adjustable drawstring, reinforced stress points, fade-resistant' }
]

const includedItems = [
  'Professional Nursing Top',
  'Matching Nursing Pants',
  'UNEOM Healthcare Uniform Care Guide',
  'Professional Sizing and Fit Instructions',
  'Antimicrobial Care Information'
]

const idealForNursingRoles = [
  { name: 'Registered Nurses', icon: HeartIcon },
  { name: 'Licensed Practical Nurses', icon: HandRaisedIcon },
  { name: 'Nursing Students', icon: AcademicCapIcon },
  { name: 'Charge Nurses', icon: UserGroupIcon },
  { name: 'Specialty Nurses', icon: ShieldCheckIcon }
]

const relatedProducts = [
  {
    name: 'Professional Lab Coats',
    image: '/images/products/medical/lab-coats-main.jpg',
    href: '/shop/medical-scrubs/lab-coats/',
    price: 'From SAR 160'
  },
  {
    name: 'Surgical Scrubs',
    image: '/images/products/medical/surgical-scrubs-main.jpg',
    href: '/shop/medical-scrubs/surgical-scrubs/',
    price: 'From SAR 200'
  },
  {
    name: 'Medical Accessories Kit',
    image: '/images/products/medical/medical-accessories-kit.jpg',
    href: '/shop/medical-accessories/professional-kit/',
    price: 'From SAR 120'
  }
]

export default function NurseUniformPage() {
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
            <Link href="/shop/medical-scrubs/" className="hover:text-blue-600">Medical Scrubs</Link>
            <span>/</span>
            <span className="text-gray-900">Nurse Uniform</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/medical/nurse-uniform-main.jpg"
                  alt="Professional Nurse Uniform"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-pink-500 cursor-pointer">
                    <Image
                      src={`/images/products/medical/nurse-uniform-detail-${i}.jpg`}
                      alt={`Nurse uniform detail ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="ml-2 text-sm text-gray-600">(Preferred by Nursing Professionals)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Nurse Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Empower your nursing excellence with UNEOM's professional nurse uniforms. Designed specifically for nursing professionals in Saudi Arabia, our uniforms combine comfort, functionality, and professional appearance to support your dedication to patient care.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-pink-600">From SAR 180</span>
                <span className="text-lg text-gray-500 ml-2">per complete set</span>
              </div>
              
              <div className="p-4 bg-pink-50 border-l-4 border-pink-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <HeartIcon className="h-6 w-6 text-pink-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-pink-700">
                      <strong>Nursing Excellence Support:</strong> Our uniforms are designed to support your professional nursing practice with comfort and functionality. <Link href="/resources/nursing-uniform-guide" className="font-medium underline hover:text-pink-800">View nursing uniform guide</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=nurse-uniform"
                  className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex-1 text-center"
                >
                  Get Nursing Team Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <SparklesIcon className="h-5 w-5 mr-2 text-pink-500" />
                  Add to Nursing Wardrobe
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Nursing Professional Benefits:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Patient-Centered Design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Infection Control</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>12-Hour Comfort</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Team Coordination</span>
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
            Designed for Nursing Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Nursing Roles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for All Nursing Professionals
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForNursingRoles.map((role, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <role.icon className="h-10 w-10 text-pink-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{role.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nurse Uniform Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Material & Design Features</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{spec.label}:</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Complete Nursing Set Includes</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h4 className="text-lg font-semibold text-pink-700 mb-2">UNEOM Nursing Promise</h4>
                <p className="text-sm text-pink-600">
                  Every nurse uniform is designed with the nursing profession in mind, supporting your commitment to patient care with comfort and professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Your Professional Healthcare Wardrobe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600">{product.name}</h3>
                  <p className="text-pink-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
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
      <section className="py-20 bg-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Support Your Nursing Excellence with UNEOM Professional Uniforms
          </h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
            Join thousands of nursing professionals across Saudi Arabia who trust UNEOM for their uniform needs. Experience the perfect combination of comfort, functionality, and professional appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Nurse+Uniform+Inquiry"
              className="bg-white text-pink-700 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Consult Nursing Uniform Specialist
            </Link>
            <Link
              href="/services/healthcare-uniform-program"
              className="border-2 border-pink-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-pink-600 hover:border-white transition-colors text-lg"
            >
              Healthcare Uniform Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}