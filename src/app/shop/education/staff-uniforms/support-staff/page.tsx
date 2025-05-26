import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Support Staff Uniforms | Educational Support Attire | UNEOM',
  description: 'Professional uniforms for educational support staff in Saudi Arabia. Durable, comfortable, and functional uniforms for maintenance, security, and support personnel.',
  keywords: 'support staff uniforms Saudi Arabia, school maintenance uniforms, educational support clothing, institutional support attire',
  openGraph: {
    title: 'Support Staff Uniforms | Educational Support Attire | UNEOM',
    description: 'Functional and professional uniforms designed for educational support staff and maintenance personnel.',
    images: ['/images/products/corporate-polo-shirts.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Functional Design',
    description: 'Practical features including multiple pockets, tool loops, and reinforced areas for daily work tasks.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'Heavy-duty materials and reinforced stitching to withstand demanding work environments.'
  },
  {
    icon: HeartIcon,
    title: 'Comfort Focus',
    description: 'Ergonomic design and breathable fabrics for all-day comfort during physical work.'
  },
  {
    icon: UserGroupIcon,
    title: 'Professional Identity',
    description: 'Clear identification and professional appearance that reflects institutional standards.'
  }
]

const supportRoles = [
  {
    title: 'Maintenance Staff',
    description: 'Durable uniforms for facility maintenance and repair personnel',
    features: ['Heavy-duty fabrics', 'Multiple tool pockets', 'Reinforced knees', 'Stain-resistant'],
    image: '/images/products/corporate-polo-shirts.jpg',
    workAreas: ['Facility maintenance', 'Electrical work', 'Plumbing', 'General repairs'],
    colors: ['Navy blue', 'Gray', 'Khaki', 'Dark green']
  },
  {
    title: 'Security Personnel',
    description: 'Professional security uniforms for campus safety and protection',
    features: ['Professional appearance', 'Badge attachments', 'Radio loops', 'Comfortable fit'],
    image: '/images/products/corporate-shirts-blouses.jpg',
    workAreas: ['Campus security', 'Access control', 'Emergency response', 'Patrol duties'],
    colors: ['Navy blue', 'Black', 'Dark gray', 'Security blue']
  },
  {
    title: 'Custodial Staff',
    description: 'Practical uniforms for cleaning and custodial services',
    features: ['Easy-care fabrics', 'Stain resistance', 'Comfortable movement', 'Professional look'],
    image: '/images/products/corporate-polo-shirts.jpg',
    workAreas: ['Classroom cleaning', 'Facility sanitation', 'Waste management', 'Floor care'],
    colors: ['Light blue', 'Gray', 'Green', 'Khaki']
  },
  {
    title: 'Food Service',
    description: 'Hygienic uniforms for cafeteria and food service personnel',
    features: ['Food-safe materials', 'Easy washing', 'Stain resistant', 'Hygienic design'],
    image: '/images/products/corporate-shirts-blouses.jpg',
    workAreas: ['Kitchen operations', 'Food preparation', 'Serving', 'Cleaning'],
    colors: ['White', 'Light blue', 'Gray', 'Food service colors']
  },
  {
    title: 'Transportation',
    description: 'Professional uniforms for bus drivers and transportation staff',
    features: ['Comfortable seating', 'Professional appearance', 'Weather protection', 'Easy movement'],
    image: '/images/products/corporate-polo-shirts.jpg',
    workAreas: ['Student transportation', 'Vehicle maintenance', 'Route management', 'Safety protocols'],
    colors: ['Navy blue', 'Transportation colors', 'Safety yellow', 'Reflective options']
  },
  {
    title: 'Groundskeeping',
    description: 'Outdoor work uniforms for landscaping and grounds maintenance',
    features: ['Weather resistant', 'UV protection', 'Durable materials', 'Practical pockets'],
    image: '/images/products/corporate-polo-shirts.jpg',
    workAreas: ['Landscaping', 'Sports field maintenance', 'Outdoor facilities', 'Seasonal work'],
    colors: ['Forest green', 'Khaki', 'Brown', 'Outdoor colors']
  }
]

const uniformComponents = [
  {
    item: 'Work Shirts',
    description: 'Durable shirts designed for active work environments',
    options: ['Polo shirts', 'Button-down work shirts', 'Long sleeve options', 'Moisture-wicking']
  },
  {
    item: 'Work Pants',
    description: 'Comfortable and durable work trousers',
    options: ['Cargo pants', 'Work trousers', 'Reinforced knees', 'Multiple pockets']
  },
  {
    item: 'Coveralls',
    description: 'Full-body protection for maintenance and technical work',
    options: ['Standard coveralls', 'Insulated options', 'Breathable materials', 'Tool attachments']
  },
  {
    item: 'Safety Gear',
    description: 'Safety accessories and protective equipment',
    options: ['High-visibility vests', 'Hard hats', 'Safety glasses', 'Work gloves']
  }
]

const fabricBenefits = [
  'Stain and soil resistant treatments',
  'Reinforced stress points and seams',
  'Moisture-wicking for comfort',
  'Easy-care machine washable',
  'Fade-resistant colors',
  'Antimicrobial treatments available'
]

export default function SupportStaffPage() {
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
            <Link href="/shop/education/staff-uniforms/" className="hover:text-blue-600">Staff Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Support Staff</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/corporate-polo-shirts.jpg"
            alt="Support staff uniforms background"
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
            Support Staff Uniforms
          </h1>
          <p className="text-xl text-orange-200 mb-10 max-w-3xl mx-auto">
            Professional uniforms designed for the dedicated support staff who keep educational institutions running smoothly. Combining functionality, durability, and professional appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=support-staff-uniform"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Support Staff Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
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
              Built for Hard Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our support staff uniforms are designed to meet the demanding needs of educational support personnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Roles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniforms for Every Support Role
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized uniforms designed for different support staff positions and work environments.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportRoles.map((role, index) => (
              <div key={role.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {role.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Work Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.workAreas.map((area, areaIndex) => (
                        <span key={areaIndex} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uniform Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Uniform Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your support staff needs for professional and functional work attire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformComponents.map((component) => (
              <div key={component.item} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.item}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <ul className="space-y-2">
                  {component.options.map((option, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industrial-Grade Fabric Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our support staff uniforms feature advanced fabric technologies designed for demanding work environments.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fabricBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Support Staff Uniforms?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Functional Design</h3>
                    <p className="text-gray-600">Practical features that enhance work efficiency and comfort</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Exceptional Durability</h3>
                    <p className="text-gray-600">Built to withstand the toughest work environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Appearance</h3>
                    <p className="text-gray-600">Maintain institutional standards while working</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost-Effective</h3>
                    <p className="text-gray-600">Long-lasting uniforms that provide excellent value</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/products/corporate-shirts-blouses.jpg"
                alt="Support staff in professional uniforms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety and Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Safety and Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our uniforms meet safety standards and compliance requirements for educational institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <ShieldCheckIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Standards</h3>
              <p className="text-gray-600">Compliant with workplace safety regulations and standards</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <ClipboardDocumentListIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality control and testing procedures</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <SparklesIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Standards</h3>
              <p className="text-gray-600">Maintains institutional image and professional appearance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your Support Team
          </h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Contact our uniform specialists to discuss your support staff uniform needs and ensure your team has the professional, functional attire they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=support-staff-uniform"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Support Staff Quote
            </Link>
            <Link
              href="/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              View All Staff Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}