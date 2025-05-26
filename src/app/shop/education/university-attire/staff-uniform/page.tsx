import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'University Staff Uniforms | Professional Academic Attire | UNEOM',
  description: 'Premium university staff uniforms for academic institutions in Saudi Arabia. Professional, comfortable, and dignified uniforms for university administrative staff.',
  keywords: 'university staff uniforms Saudi Arabia, academic staff clothing, university administrative uniforms, professional education attire',
  openGraph: {
    title: 'University Staff Uniforms | Professional Academic Attire | UNEOM',
    description: 'Professional uniforms designed specifically for university staff, combining academic dignity with modern comfort.',
    images: ['/images/products/corporate-suit-executive.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'Academic Professional',
    description: 'Designed to reflect the dignity and professionalism of academic institutions while maintaining comfort for daily wear.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'High-quality materials and construction ensure uniforms maintain their appearance through frequent use and washing.'
  },
  {
    icon: UserGroupIcon,
    title: 'Versatile Styles',
    description: 'Multiple style options to accommodate different staff roles and departmental requirements.'
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Institution Ready',
    description: 'Perfect for administrative offices, student services, library staff, and other university departments.'
  }
]

const staffCategories = [
  {
    title: 'Administrative Staff',
    description: 'Professional business attire for office staff, registrars, and administrative personnel',
    features: ['Business suits', 'Dress shirts', 'Professional blouses', 'Coordinated accessories'],
    image: '/images/products/corporate-suit-executive.jpg'
  },
  {
    title: 'Student Services',
    description: 'Approachable yet professional uniforms for student-facing staff and counselors',
    features: ['Smart casual options', 'Comfortable fabrics', 'Welcoming appearance', 'Easy identification'],
    image: '/images/products/corporate-shirts-blouses.jpg'
  },
  {
    title: 'Library Staff',
    description: 'Comfortable and practical uniforms for library personnel and information services',
    features: ['Comfortable fits', 'Practical pockets', 'Professional appearance', 'Easy movement'],
    image: '/images/products/corporate-polo-shirts.jpg'
  },
  {
    title: 'Support Services',
    description: 'Durable and functional uniforms for maintenance, security, and support staff',
    features: ['Durable materials', 'Functional design', 'Safety features', 'Easy care'],
    image: '/images/products/corporate-polo-shirts.jpg'
  }
]

const colorSchemes = [
  { name: 'Navy & White', primary: '#1e3a8a', secondary: '#ffffff', description: 'Classic academic colors' },
  { name: 'Burgundy & Gray', primary: '#7c2d12', secondary: '#6b7280', description: 'Traditional university palette' },
  { name: 'Forest Green & Cream', primary: '#166534', secondary: '#fef3c7', description: 'Natural academic tones' },
  { name: 'Charcoal & Light Blue', primary: '#374151', secondary: '#93c5fd', description: 'Modern professional look' }
]

const customizationOptions = [
  'University logo embroidery',
  'Department identification badges',
  'Name tags and titles',
  'Custom color combinations',
  'Seasonal variations',
  'Special occasion attire'
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
            <Link href="/shop/education/" className="hover:text-blue-600">Education</Link>
            <span>/</span>
            <Link href="/shop/education/university-attire/" className="hover:text-blue-600">University Attire</Link>
            <span>/</span>
            <span className="text-gray-900">Staff Uniform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/corporate-suit-executive.jpg"
            alt="University staff uniforms background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarSolidIcon key={i} className="h-8 w-8 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            University Staff Uniforms
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Professional uniforms that reflect the dignity and excellence of academic institutions. Designed for comfort, durability, and professional appearance across all university departments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=university-staff-uniform"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=University Staff Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Excellence in Every Detail
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our university staff uniforms combine professional appearance with practical functionality.
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

      {/* Staff Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniforms for Every Department
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized uniform solutions designed for different university staff roles and departments.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {staffCategories.map((category, index) => (
              <div key={category.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Schemes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Color Schemes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully selected color combinations that reflect academic tradition and professionalism.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorSchemes.map((scheme) => (
              <div key={scheme.name} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="flex justify-center space-x-2 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: scheme.primary }}
                  ></div>
                  <div 
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: scheme.secondary }}
                  ></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{scheme.name}</h3>
                <p className="text-sm text-gray-600">{scheme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Customization Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Personalize your university staff uniforms to reflect your institution's identity and values.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customizationOptions.map((option, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our University Staff Uniforms?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Image</h3>
                    <p className="text-gray-600">Enhance your institution's professional appearance and staff identification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comfort & Durability</h3>
                    <p className="text-gray-600">High-quality materials ensure comfort throughout long working days</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Branding</h3>
                    <p className="text-gray-600">Incorporate your university's logo and colors for brand consistency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Maintenance</h3>
                    <p className="text-gray-600">Designed for easy care and maintenance to reduce operational costs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/products/corporate-suit-executive.jpg"
                alt="University staff in professional uniforms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your University's Professional Image
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact our education uniform specialists to discuss your university staff uniform needs and receive a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=university-staff-uniform"
              className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get University Quote
            </Link>
            <Link
              href="/shop/education/university-attire/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors text-lg"
            >
              View All University Attire
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}