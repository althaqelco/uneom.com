import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Hotel Security Uniform | Professional Hospitality Security Attire | UNEOM',
  description: 'Professional hotel security uniforms designed for hospitality settings. Balancing authority with approachable appearance for guest comfort and security effectiveness in Saudi Arabia.',
  keywords: 'hotel security uniform, hospitality security attire, hotel guard uniform KSA, professional security clothing, guest-friendly security wear',
  openGraph: {
    title: 'Hotel Security Uniform | Professional Hospitality Security Attire | UNEOM',
    description: 'Refined security uniforms designed specifically for hotel and hospitality environments, ensuring professional appearance while maintaining security authority.',
    images: ['/images/security/smart-fabric-technology.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: BuildingOfficeIcon,
    title: 'Hospitality-Focused Design',
    description: 'Designed to blend seamlessly with hotel aesthetics while maintaining clear security identification.'
  },
  {
    icon: UserGroupIcon,
    title: 'Guest-Friendly Appearance',
    description: 'Professional styling that appears approachable to guests while conveying authority and competence.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Functional Security Features',
    description: 'Includes badge holders, radio clips, and discreet pockets for security equipment and communication devices.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Materials',
    description: 'High-quality fabrics that maintain professional appearance throughout long shifts and frequent guest interactions.'
  }
]

const customizationOptions = [
  'Hotel logo embroidery',
  'Custom color schemes to match hotel branding',
  'Seasonal variations (lightweight/heavyweight)',
  'Rank insignia and department identification',
  'Name tags and badge holders',
  'Radio and equipment attachment points'
]

export default function HotelSecurityUniformPage() {
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
            <Link href="/shop/security-uniforms/" className="hover:text-blue-600">Security Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Hotel Security Uniform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-900 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/smart-fabric-technology.jpg"
            alt="Hotel security uniform background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BuildingOfficeIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Hotel Security Uniform
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Professional security attire designed specifically for hospitality environments, balancing authority with approachable guest service aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=hotel-security-uniform"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Hotel Security Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Hotel Security Attire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our hotel security uniforms are specifically designed for the hospitality industry, where security personnel must maintain a professional, approachable appearance while ensuring guest safety and property protection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Refined Professional Appearance</h3>
                    <p className="text-gray-600">Designed to complement hotel aesthetics while maintaining security authority</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Guest-Friendly Design</h3>
                    <p className="text-gray-600">Professional styling that appears approachable to hotel guests</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Functional Features</h3>
                    <p className="text-gray-600">Includes all necessary security equipment attachment points</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/security/smart-fabric-technology.jpg"
                alt="Hotel security uniform details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Features for Hotel Security
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect designed to meet the unique requirements of hotel security operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Customization Options
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tailor your hotel security uniforms to match your brand and operational requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {customizationOptions.map((option, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
          <Link
            href="/services/custom-design/#hotel-security"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg inline-flex items-center"
          >
            Discuss Custom Design
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Enhance Your Hotel Security Team
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact our hospitality uniform specialists to discuss your hotel security uniform requirements and receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=hotel-security-uniform"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Quote Now
            </Link>
            <Link
              href="/shop/security-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View All Security Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}