import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
  CogIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Supervisor Industrial Uniform | UNEOM Premium Industrial Workwear',
  description: 'Professional supervisor industrial uniforms designed for leadership roles in manufacturing and industrial environments. High-quality, durable, and safety-compliant workwear for supervisors in Saudi Arabia.',
  keywords: 'supervisor industrial uniform, industrial workwear, manufacturing supervisor clothing, industrial safety uniforms, supervisor attire Saudi Arabia',
  openGraph: {
    title: 'Supervisor Industrial Uniform | UNEOM',
    description: 'Premium industrial uniforms designed specifically for supervisors and management roles',
    images: ['/images/products/supervisor-industrial-uniform.jpg'],
    locale: 'en_US',
  },
  alternates: {
    canonical: '/shop/industrial-uniforms/supervisor-industrial-uniform/',
    languages: {
      'en': '/shop/industrial-uniforms/supervisor-industrial-uniform/',
      'ar': '/ar/shop/industrial-uniforms/supervisor-industrial-uniform/',
    },
  },
}

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Safety Compliance',
    description: 'Meets all international industrial safety standards and regulations'
  },
  {
    icon: UserGroupIcon,
    title: 'Leadership Design',
    description: 'Distinguished design that reflects authority and professionalism'
  },
  {
    icon: CogIcon,
    title: 'Functional Excellence',
    description: 'Multiple pockets and features designed for supervisory tasks'
  },
  {
    icon: AcademicCapIcon,
    title: 'Professional Appearance',
    description: 'Maintains professional look while ensuring industrial functionality'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '65% Polyester, 35% Cotton Twill' },
  { label: 'Weight', value: '245 GSM (Grams per Square Meter)' },
  { label: 'Color Options', value: 'Navy Blue, Charcoal Grey, Khaki' },
  { label: 'Size Range', value: 'XS to 5XL (Custom sizes available)' },
  { label: 'Safety Standards', value: 'ANSI/ISEA 107, EN ISO 20471' },
  { label: 'Flame Resistance', value: 'NFPA 2112 Compliant' },
  { label: 'Durability Rating', value: '50+ Industrial wash cycles' },
  { label: 'UV Protection', value: 'UPF 50+ Sun Protection' }
]

const designFeatures = [
  'Reinforced stress points for extended durability',
  'Moisture-wicking fabric technology',
  'Stain-resistant finish for easy maintenance',
  'Ergonomic cut for comfortable movement',
  'Reflective tape for enhanced visibility',
  'Multiple cargo pockets with secure closures',
  'Pen holders and tool loops',
  'Adjustable cuffs and waistband'
]

const applications = [
  {
    icon: BuildingOfficeIcon,
    title: 'Manufacturing Plants',
    description: 'Perfect for supervisors in automotive, electronics, and heavy machinery manufacturing'
  },
  {
    icon: CogIcon,
    title: 'Oil & Gas Facilities',
    description: 'Designed for supervisory roles in petrochemical and refinery operations'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Construction Sites',
    description: 'Ideal for construction supervisors and site managers'
  },
  {
    icon: UserGroupIcon,
    title: 'Logistics Centers',
    description: 'Suitable for warehouse and distribution center supervisors'
  }
]

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Production Supervisor',
    content: 'Excellent quality uniform that maintains its professional appearance even after months of use. The functionality is outstanding.',
    rating: 5,
    company: 'SABIC Manufacturing'
  },
  {
    name: 'Mohammad Al-Qahtani',
    role: 'Site Manager',
    content: 'Perfect balance between professional appearance and industrial functionality. Highly recommend for supervisory roles.',
    rating: 5,
    company: 'Saudi Aramco'
  }
]

const colorOptions = [
  {
    name: 'Navy Blue',
    description: 'Classic professional color, ideal for corporate industrial environments',
    suitability: 'Manufacturing, Office-based supervision'
  },
  {
    name: 'Charcoal Grey',
    description: 'Modern and sophisticated, excellent for hiding stains',
    suitability: 'Heavy industry, Construction supervision'
  },
  {
    name: 'Khaki',
    description: 'Versatile earth tone, perfect for outdoor industrial work',
    suitability: 'Oil & Gas, Mining, Outdoor facilities'
  }
]

const careInstructions = [
  'Machine wash in cold water (30°C maximum)',
  'Use mild industrial detergent',
  'Avoid bleach and fabric softeners',
  'Tumble dry on low heat setting',
  'Iron on medium heat if needed',
  'Professional cleaning recommended for flame-resistant variants'
]

export default function SupervisorIndustrialUniformPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-blue-600">Shop</Link>
            <span className="mx-2">/</span>
            <Link href="/shop/industrial-uniforms" className="hover:text-blue-600">Industrial Uniforms</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Supervisor Industrial Uniform</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Supervisor Grade
                </span>
                <span className="ml-2 text-sm text-gray-600">Professional Leadership Attire</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Supervisor Industrial Uniform
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Premium industrial uniforms designed specifically for supervisors and management roles in manufacturing and industrial environments. Combines professional appearance with industrial functionality and safety compliance.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(187 reviews)</span>
                <span className="ml-4 text-sm text-green-600 font-medium">98% satisfaction</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Request Quote
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Size Guide
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/supervisor-industrial-uniform.jpg"
                alt="Supervisor Industrial Uniform"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <UserGroupIcon className="h-8 w-8 text-blue-500" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Leadership Ready</p>
                    <p className="text-sm text-gray-600">Professional & Functional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supervisor Uniform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed for industrial leaders who need to maintain professional appearance while ensuring safety and functionality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Design Features
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every detail is carefully designed to meet the unique needs of industrial supervisors
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {designFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/supervisor-uniform-details.jpg"
                alt="Supervisor Uniform Details"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Color Options Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Color Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the color that best fits your industrial environment and corporate identity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colorOptions.map((color, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {color.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {color.description}
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-blue-600"><strong>Best for:</strong> {color.suitability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industrial Applications
            </h2>
            <p className="text-lg text-gray-600">
              Suitable for supervisory roles across various industrial sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <application.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {application.title}
                </h3>
                <p className="text-gray-600">
                  {application.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed specifications for the supervisor industrial uniform
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-900">{spec.label}:</span>
                  <span className="text-gray-600 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Care Instructions
            </h2>
            <p className="text-lg text-gray-600">
              Proper care ensures longevity and maintains professional appearance
            </p>
          </div>
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careInstructions.map((instruction, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{instruction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Supervisors Say
            </h2>
            <p className="text-lg text-gray-600">
              Feedback from industrial supervisors who trust UNEOM uniforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Supervisory Presence
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of industrial supervisors who trust UNEOM for their professional uniform needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Custom Quote
            </button>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Industrial Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop/industrial-uniforms/safety-coveralls" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/safety-coveralls.jpg"
                  alt="Safety Coveralls"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Safety Coveralls</h3>
                  <p className="text-gray-600 text-sm">Complete protection for industrial workers</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/industrial-uniforms/high-visibility-vest" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/high-visibility-vest.jpg"
                  alt="High Visibility Vest"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">High Visibility Vest</h3>
                  <p className="text-gray-600 text-sm">Enhanced visibility for safety compliance</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/industrial-uniforms/work-boots" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/industrial-work-boots.jpg"
                  alt="Industrial Work Boots"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Industrial Work Boots</h3>
                  <p className="text-gray-600 text-sm">Safety footwear for industrial environments</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
