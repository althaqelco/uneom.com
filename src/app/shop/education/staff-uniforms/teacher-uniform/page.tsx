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
  BookOpenIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Teacher Uniforms | Professional Educational Attire | UNEOM',
  description: 'Premium teacher uniforms for schools in Saudi Arabia. Comfortable, professional, and durable uniforms designed specifically for educators.',
  keywords: 'teacher uniforms Saudi Arabia, school teacher clothing, educator uniforms, professional teaching attire',
  openGraph: {
    title: 'Teacher Uniforms | Professional Educational Attire | UNEOM',
    description: 'Professional uniforms designed specifically for teachers, combining comfort with educational authority.',
    images: ['/images/products/corporate-shirts-blouses.jpg'],
  },
}

const uniformFeatures = [
  {
    icon: BookOpenIcon,
    title: 'Educational Professional',
    description: 'Designed to project authority and professionalism while maintaining approachability for students.'
  },
  {
    icon: HeartIcon,
    title: 'Comfort First',
    description: 'All-day comfort with breathable fabrics and ergonomic design for active teaching environments.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Quality',
    description: 'Built to withstand daily wear and frequent washing while maintaining professional appearance.'
  },
  {
    icon: UserGroupIcon,
    title: 'Student-Friendly',
    description: 'Colors and styles that create a welcoming environment while maintaining professional boundaries.'
  }
]

const teacherStyles = [
  {
    title: 'Elementary Teachers',
    description: 'Comfortable and approachable uniforms for primary school educators',
    features: ['Soft, comfortable fabrics', 'Easy-care materials', 'Practical pockets', 'Child-friendly colors'],
    image: '/images/products/corporate-shirts-blouses.jpg',
    colors: ['Soft blue', 'Light green', 'Warm gray', 'Cream']
  },
  {
    title: 'Middle School Teachers',
    description: 'Professional yet approachable attire for intermediate education',
    features: ['Smart casual styling', 'Versatile pieces', 'Professional appearance', 'Comfortable fit'],
    image: '/images/products/corporate-polo-shirts.jpg',
    colors: ['Navy blue', 'Burgundy', 'Forest green', 'Charcoal']
  },
  {
    title: 'High School Teachers',
    description: 'Sophisticated uniforms that command respect and authority',
    features: ['Professional styling', 'Authoritative appearance', 'Quality materials', 'Formal options'],
    image: '/images/products/corporate-suit-executive.jpg',
    colors: ['Black', 'Navy', 'Dark gray', 'Deep blue']
  },
  {
    title: 'Subject Specialists',
    description: 'Specialized uniforms for different teaching subjects and activities',
    features: ['Subject-appropriate styling', 'Functional design', 'Safety considerations', 'Activity-specific'],
    image: '/images/products/corporate-shirts-blouses.jpg',
    colors: ['Department colors', 'Subject-specific', 'Safety colors']
  }
]

const uniformComponents = [
  {
    item: 'Blouses & Shirts',
    description: 'Professional tops in various styles and colors',
    options: ['Button-down shirts', 'Polo shirts', 'Blouses', 'Cardigans']
  },
  {
    item: 'Trousers & Skirts',
    description: 'Comfortable bottoms for professional appearance',
    options: ['Dress pants', 'A-line skirts', 'Pencil skirts', 'Comfortable fits']
  },
  {
    item: 'Dresses',
    description: 'One-piece professional dresses for easy styling',
    options: ['Shift dresses', 'A-line dresses', 'Wrap dresses', 'Midi length']
  },
  {
    item: 'Accessories',
    description: 'Professional accessories to complete the look',
    options: ['Name badges', 'Lanyards', 'Scarves', 'Belts']
  }
]

const fabricBenefits = [
  'Wrinkle-resistant for busy schedules',
  'Stain-resistant for classroom activities',
  'Breathable for all-day comfort',
  'Easy-care machine washable',
  'Color-fast for lasting appearance',
  'Stretch fabrics for movement'
]

export default function TeacherUniformPage() {
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
            <span className="text-gray-900">Teacher Uniform</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/corporate-shirts-blouses.jpg"
            alt="Teacher uniforms background"
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
            Professional Teacher Uniforms
          </h1>
          <p className="text-xl text-green-200 mb-10 max-w-3xl mx-auto">
            Empower educators with professional uniforms that combine comfort, durability, and style. Designed for the dedicated professionals who shape our future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=teacher-uniform"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Teacher Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
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
              Designed for Educators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our teacher uniforms are specifically designed to meet the unique needs of educational professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Styles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniforms for Every Teaching Level
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized uniform designs tailored to different educational levels and teaching environments.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teacherStyles.map((style, index) => (
              <div key={style.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{style.title}</h3>
                  <p className="text-gray-600 mb-4">{style.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {style.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
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
              Complete Uniform Components
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a complete professional teaching wardrobe.
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
              Premium Fabric Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our teacher uniforms are made with high-quality fabrics designed for the demands of education.
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
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Teacher Uniforms?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Authority</h3>
                    <p className="text-gray-600">Establish classroom authority while maintaining approachability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">All-Day Comfort</h3>
                    <p className="text-gray-600">Designed for long teaching days with maximum comfort</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Maintenance</h3>
                    <p className="text-gray-600">Simple care instructions for busy educators</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">School Branding</h3>
                    <p className="text-gray-600">Custom options to incorporate school colors and logos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/products/corporate-polo-shirts.jpg"
                alt="Teachers in professional uniforms"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empower Your Educators
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Contact our education uniform specialists to discuss your teacher uniform needs and create a professional learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=teacher-uniform"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Teacher Uniform Quote
            </Link>
            <Link
              href="/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
            >
              View All Staff Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}