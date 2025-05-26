import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  CogIcon,
  ClockIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Standard Production Line Uniforms | Manufacturing Workwear | UNEOM',
  description: 'Standard production line uniforms for manufacturing facilities in Saudi Arabia. Comfortable, durable, and functional workwear for production workers.',
  keywords: 'production line uniforms Saudi Arabia, manufacturing workwear, factory uniforms, industrial clothing',
  openGraph: {
    title: 'Standard Production Line Uniforms | Manufacturing Workwear | UNEOM',
    description: 'Professional uniforms designed for standard production line workers in manufacturing environments.',
    images: ['/images/products/corporate-polo-shirts.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: CogIcon,
    title: 'Production Ready',
    description: 'Designed specifically for production line environments with practical features and comfortable fit.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Materials',
    description: 'High-quality fabrics that withstand daily wear and frequent washing in industrial settings.'
  },
  {
    icon: ClockIcon,
    title: 'All-Day Comfort',
    description: 'Ergonomic design and breathable materials for comfort during long production shifts.'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Functional Design',
    description: 'Practical pockets, reinforced areas, and features that enhance productivity and safety.'
  }
]

const productionAreas = [
  {
    area: 'Assembly Lines',
    description: 'Uniforms for workers on assembly and production lines',
    features: ['Comfortable movement', 'Pocket placement', 'Easy identification', 'Shift-friendly'],
    requirements: ['Moderate durability', 'Comfort focus', 'Team identification', 'Easy care']
  },
  {
    area: 'Quality Control',
    description: 'Professional attire for quality control and inspection staff',
    features: ['Clean appearance', 'Pocket organization', 'Professional look', 'Detail access'],
    requirements: ['Lint-free materials', 'Professional appearance', 'Functional pockets', 'Easy movement']
  },
  {
    area: 'Packaging',
    description: 'Practical uniforms for packaging and shipping departments',
    features: ['Flexible materials', 'Reinforced areas', 'Comfortable fit', 'Easy cleaning'],
    requirements: ['Flexibility', 'Durability', 'Comfort', 'Hygiene standards']
  },
  {
    area: 'Material Handling',
    description: 'Durable workwear for material handling and logistics',
    features: ['Reinforced construction', 'Safety features', 'Comfortable fit', 'Visibility options'],
    requirements: ['High durability', 'Safety compliance', 'Comfort', 'Visibility']
  }
]

const uniformComponents = [
  {
    item: 'Work Shirts',
    description: 'Comfortable shirts designed for production environments',
    options: ['Polo shirts', 'Button-down shirts', 'T-shirts', 'Long sleeve options'],
    features: ['Moisture-wicking', 'Easy care', 'Comfortable fit', 'Durable construction']
  },
  {
    item: 'Work Pants',
    description: 'Durable trousers for production line work',
    options: ['Standard work pants', 'Cargo pants', 'Elastic waist', 'Reinforced knees'],
    features: ['Flexible materials', 'Multiple pockets', 'Comfortable fit', 'Easy movement']
  },
  {
    item: 'Safety Accessories',
    description: 'Essential safety gear for production environments',
    options: ['Safety glasses', 'Hair nets', 'Shoe covers', 'Gloves'],
    features: ['Safety compliance', 'Comfort', 'Durability', 'Easy use']
  },
  {
    item: 'Identification',
    description: 'Clear identification for production staff',
    options: ['Name badges', 'Department tags', 'Shift indicators', 'Role identification'],
    features: ['Clear visibility', 'Secure attachment', 'Professional appearance', 'Easy reading']
  }
]

const fabricBenefits = [
  'Moisture-wicking for comfort during shifts',
  'Stain-resistant treatments for easy maintenance',
  'Wrinkle-resistant for professional appearance',
  'Breathable materials for temperature control',
  'Color-fast dyes for lasting appearance',
  'Easy-care machine washable fabrics'
]

export default function StandardProductionUniformPage() {
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
            <Link href="/shop/manufacturing-workwear/" className="hover:text-blue-600">Manufacturing Workwear</Link>
            <span>/</span>
            <Link href="/shop/manufacturing-workwear/production-line-uniform/" className="hover:text-blue-600">Production Line Uniform</Link>
            <span>/</span>
            <span className="text-gray-900">Standard</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/corporate-polo-shirts.jpg"
            alt="Standard production line uniforms background"
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
            Standard Production Line Uniforms
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Professional uniforms designed for standard production line environments. Combining comfort, functionality, and durability for optimal worker performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=standard-production-uniform"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Standard Production Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
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
              Designed for Production Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our standard production line uniforms are engineered to meet the specific needs of manufacturing environments.
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

      {/* Production Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniforms for Every Production Area
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized uniform solutions designed for different production environments and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productionAreas.map((area, index) => (
              <div key={area.area} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.area}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.requirements.map((requirement, reqIndex) => (
                      <span key={reqIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {requirement}
                      </span>
                    ))}
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
              Everything needed for a complete production line uniform program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformComponents.map((component) => (
              <div key={component.item} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.item}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Options:</h4>
                  <ul className="space-y-1">
                    {component.options.map((option, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {component.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
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
              Advanced Fabric Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our production uniforms feature advanced fabric technologies designed for manufacturing environments.
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
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Standard Production Uniforms?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Productivity</h3>
                    <p className="text-gray-600">Comfortable uniforms that don't restrict movement or cause distraction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost-Effective</h3>
                    <p className="text-gray-600">Durable construction reduces replacement costs and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Image</h3>
                    <p className="text-gray-600">Maintain a professional appearance throughout the production process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Management</h3>
                    <p className="text-gray-600">Simple care instructions and bulk ordering options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/products/corporate-shirts-blouses.jpg"
                alt="Production workers in standard uniforms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Optimize Your Production Line
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact our manufacturing uniform specialists to discuss your production line uniform needs and improve worker comfort and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=standard-production-uniform"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Production Quote
            </Link>
            <Link
              href="/shop/manufacturing-workwear/production-line-uniform/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View All Production Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}