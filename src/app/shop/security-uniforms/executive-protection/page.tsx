import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  EyeIcon, 
  CheckCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  SwatchIcon,
  ScissorsIcon,
  BuildingOfficeIcon,
  UserIcon,
  LockClosedIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Executive Protection Uniforms | UNEOM Professional Security Attire',
  description: 'Discover UNEOM\'s Executive Protection Uniforms - professional, discreet security attire for VIP protection, corporate security, and executive bodyguards in Saudi Arabia. High-quality, tactical-ready uniforms.',
  keywords: 'executive protection uniforms, VIP security uniforms, bodyguard uniforms Saudi Arabia, corporate security attire, professional security uniforms',
  openGraph: {
    title: 'Executive Protection Uniforms | UNEOM',
    description: 'Professional executive protection uniforms for VIP security and corporate protection',
    images: ['/images/products/executive-protection-uniform.jpg'],
    locale: 'en_US',
  },
  alternates: {
    canonical: '/shop/security-uniforms/executive-protection/',
    languages: {
      'en': '/shop/security-uniforms/executive-protection/',
      'ar': '/ar/shop/security-uniforms/executive-protection/',
    },
  },
}

const features = [
  {
    icon: EyeIcon,
    title: 'Discreet Professional Design',
    description: 'Subtle, professional appearance that blends seamlessly in corporate environments'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Tactical Functionality',
    description: 'Hidden pockets and tactical features for equipment without compromising appearance'
  },
  {
    icon: BoltIcon,
    title: 'Enhanced Mobility',
    description: 'Designed for unrestricted movement during protection duties'
  },
  {
    icon: LockClosedIcon,
    title: 'Secure Storage',
    description: 'Multiple concealed pockets for communication devices and security equipment'
  }
]

const uniformComponents = [
  'Professional blazer with tactical features',
  'Matching dress pants with reinforced knees',
  'Formal dress shirt (white or light blue)',
  'Professional tie or tactical tie clip',
  'Concealed equipment vest (optional)',
  'Tactical belt with discrete buckle',
  'Professional dress shoes (recommended)',
  'ID badge and security credentials holder'
]

const specifications = [
  { label: 'Outer Material', value: 'Premium wool blend 70% wool, 30% polyester' },
  { label: 'Lining', value: 'Moisture-wicking synthetic blend' },
  { label: 'Weight', value: '280 grams/square meter' },
  { label: 'Sizes Available', value: 'XS to 4XL with custom tailoring available' },
  { label: 'Colors', value: 'Navy blue, charcoal gray, black, dark brown' },
  { label: 'Tactical Features', value: 'Hidden pockets, reinforced stress points' },
  { label: 'Buttons', value: 'Professional metal buttons with security design' },
  { label: 'Care Instructions', value: 'Dry clean recommended for longevity' },
  { label: 'Warranty', value: '24-month quality guarantee' }
]

const testimonials = [
  {
    name: 'Captain Ahmed Al-Rashid',
    role: 'Executive Protection Team Leader',
    content: 'Excellent balance between professional appearance and tactical functionality. Our team looks professional while maintaining full operational capability.',
    rating: 5,
    company: 'Royal Guard Security Services'
  },
  {
    name: 'Mohammad Al-Zahrani',
    role: 'Corporate Security Manager',
    content: 'Perfect for our executive protection needs. The uniforms are discreet yet functional, exactly what we needed for VIP protection.',
    rating: 5,
    company: 'Elite Protection Group'
  }
]

const colors = [
  { name: 'Navy Blue Professional', code: '#1e3a8a', popular: true, description: 'Classic choice for corporate environments' },
  { name: 'Charcoal Gray', code: '#374151', popular: true, description: 'Versatile and professional' },
  { name: 'Executive Black', code: '#000000', popular: false, description: 'For formal and evening protection' },
  { name: 'Dark Brown', code: '#7c2d12', popular: false, description: 'Alternative professional option' }
]

const protectionTypes = [
  {
    icon: UserIcon,
    title: 'VIP Protection',
    description: 'Ideal for protecting high-profile individuals and executives'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Corporate Security',
    description: 'Perfect for corporate headquarters and business environments'
  },
  {
    icon: UserGroupIcon,
    title: 'Event Security',
    description: 'Suitable for formal events and business gatherings'
  },
  {
    icon: LockClosedIcon,
    title: 'Close Protection',
    description: 'Designed for personal protection and bodyguard services'
  }
]

const tacticalFeatures = [
  'Concealed radio pocket with earpiece routing',
  'Hidden weapon holster compatibility',
  'Reinforced stress points for durability',
  'Quick-access document pockets',
  'Tactical pen holder integration',
  'Emergency equipment storage options'
]

export default function ExecutiveProtectionUniformPage() {
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
            <Link href="/shop/security-uniforms" className="hover:text-blue-600">Security Uniforms</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Executive Protection</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-slate-100 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Professional Grade
                </span>
                <span className="ml-2 text-sm text-gray-600">Tactical Ready</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Executive Protection Uniforms
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional executive protection uniforms designed for VIP security, corporate protection, and bodyguard services in Saudi Arabia. Combining discreet professional appearance with tactical functionality for optimal performance in high-stakes environments.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(94 reviews)</span>
                <span className="ml-4 text-sm text-green-600 font-medium">98% satisfaction</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
                  Request Quote
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Catalog
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/executive-protection-uniform.jpg"
                alt="Executive Protection Uniform"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <EyeIcon className="h-8 w-8 text-slate-500" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Discreet Design</p>
                    <p className="text-sm text-gray-600">Professional appearance</p>
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
              Executive Protection Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed specifically for professional protection services with tactical functionality hidden beneath a professional exterior
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-slate-600 mx-auto mb-4" />
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

      {/* Uniform Components Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Uniform Components
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete executive protection uniform includes all essential components for professional appearance and tactical readiness
              </p>
              <div className="space-y-4">
                {uniformComponents.map((component, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-slate-500 mr-3" />
                    <span className="text-gray-700">{component}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-800">
                  <strong>Note:</strong> All components can be customized with company logos and specific tactical requirements
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/executive-protection-details.jpg"
                alt="Executive Protection Uniform Details"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Protection Types Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Protection Applications
            </h2>
            <p className="text-lg text-gray-600">
              Versatile uniforms suitable for various executive protection scenarios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionTypes.map((type, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <type.icon className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Colors Available
            </h2>
            <p className="text-lg text-gray-600">
              Choose from professional colors that blend seamlessly in corporate environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colors.map((color, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <div 
                  className="w-20 h-20 rounded-full border-4 border-gray-300 mx-auto mb-4"
                  style={{ backgroundColor: color.code }}
                ></div>
                <h3 className="font-semibold text-gray-900 mb-2">{color.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{color.description}</p>
                {color.popular && (
                  <span className="text-xs text-slate-600 font-medium bg-slate-100 px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tactical Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tactical Features
            </h2>
            <p className="text-lg text-gray-600">
              Hidden tactical functionality that doesn't compromise professional appearance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tacticalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <BoltIcon className="h-6 w-6 text-slate-500 mr-3" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Detailed specifications for executive protection uniforms
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
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

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Professional Reviews
            </h2>
            <p className="text-lg text-gray-600">
              What security professionals say about our executive protection uniforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
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
                  <p className="text-xs text-slate-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Protection Services
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto">
            Equip your executive protection team with professional uniforms that maintain tactical readiness while projecting authority and competence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Custom Quote
            </button>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Security Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop/security-uniforms/security-officer-uniform" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/security-officer-uniform.jpg"
                  alt="Security Officer Uniform"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Security Officer Uniform</h3>
                  <p className="text-gray-600 text-sm">Professional uniforms for security officers</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/security-uniforms/tactical-gear" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/tactical-gear.jpg"
                  alt="Tactical Gear"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Tactical Gear</h3>
                  <p className="text-gray-600 text-sm">Professional tactical equipment and accessories</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/security-accessories" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/security-accessories.jpg"
                  alt="Security Accessories"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Security Accessories</h3>
                  <p className="text-gray-600 text-sm">Complete range of security accessories</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}