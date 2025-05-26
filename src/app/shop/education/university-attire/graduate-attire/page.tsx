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
  TrophyIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Graduate Attire & Graduation Gowns | Academic Ceremonial Wear | UNEOM',
  description: 'Premium graduation gowns and academic attire for universities in Saudi Arabia. High-quality ceremonial wear for graduation ceremonies and academic events.',
  keywords: 'graduation gowns Saudi Arabia, academic graduation attire, university graduation wear, ceremonial academic clothing',
  openGraph: {
    title: 'Graduate Attire & Graduation Gowns | Academic Ceremonial Wear | UNEOM',
    description: 'Elegant graduation gowns and academic attire designed for the most important moments in academic achievement.',
    images: ['/images/products/lab-coat.jpg'],
  },
}

const attireFeatures = [
  {
    icon: AcademicCapIcon,
    title: 'Traditional Academic Style',
    description: 'Classic graduation gown designs that honor academic tradition while incorporating modern comfort and quality.'
  },
  {
    icon: TrophyIcon,
    title: 'Premium Quality',
    description: 'High-quality fabrics and construction ensure your graduation attire looks perfect for this milestone moment.'
  },
  {
    icon: SparklesIcon,
    title: 'Elegant Finish',
    description: 'Attention to detail in every aspect, from fabric selection to finishing touches for a distinguished appearance.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'Built to last, suitable for multiple ceremonies and long-term institutional use.'
  }
]

const graduationLevels = [
  {
    level: 'Bachelor\'s Degree',
    description: 'Classic black graduation gowns with appropriate sleeve styling for undergraduate ceremonies',
    features: ['Traditional black gown', 'Pointed sleeves', 'Mortarboard cap', 'Tassel in school colors'],
    colors: ['Black with colored trim', 'School-specific colors'],
    image: '/images/products/lab-coat.jpg'
  },
  {
    level: 'Master\'s Degree',
    description: 'Distinguished gowns with oblong sleeves and hood representing field of study',
    features: ['Black gown with oblong sleeves', 'Academic hood', 'Mortarboard cap', 'Field-specific colors'],
    colors: ['Black with colored hood', 'Discipline-specific trim'],
    image: '/images/products/nursing-uniform.jpg'
  },
  {
    level: 'Doctoral Degree',
    description: 'Prestigious doctoral gowns with velvet panels and distinctive academic regalia',
    features: ['Velvet-trimmed gown', 'Bell sleeves', 'Doctoral hood', 'Tam or mortarboard'],
    colors: ['Black with velvet trim', 'Gold accents', 'University colors'],
    image: '/images/products/lab-coat.jpg'
  },
  {
    level: 'Faculty Regalia',
    description: 'Distinguished academic regalia for faculty members and university officials',
    features: ['Premium materials', 'Institutional colors', 'Rank indicators', 'Custom embroidery'],
    colors: ['University-specific', 'Traditional academic colors'],
    image: '/images/products/nursing-uniform.jpg'
  }
]

const customizationOptions = [
  'University logo embroidery',
  'School colors and trim',
  'Degree-specific styling',
  'Custom hood linings',
  'Personalized name embroidery',
  'Special ceremony variations',
  'Faculty rank indicators',
  'Institutional insignia'
]

const fabricOptions = [
  {
    name: 'Premium Polyester',
    description: 'Durable, wrinkle-resistant fabric perfect for multiple ceremonies',
    benefits: ['Easy care', 'Wrinkle resistant', 'Color retention', 'Affordable']
  },
  {
    name: 'Cotton Blend',
    description: 'Natural comfort with enhanced durability for special occasions',
    benefits: ['Breathable', 'Comfortable', 'Natural feel', 'Premium appearance']
  },
  {
    name: 'Luxury Gabardine',
    description: 'Premium fabric for the most distinguished ceremonies',
    benefits: ['Elegant drape', 'Superior quality', 'Professional finish', 'Long-lasting']
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
            <Link href="/shop/education/" className="hover:text-blue-600">Education</Link>
            <span>/</span>
            <Link href="/shop/education/university-attire/" className="hover:text-blue-600">University Attire</Link>
            <span>/</span>
            <span className="text-gray-900">Graduate Attire</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-purple-800 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/lab-coat.jpg"
            alt="Graduate attire and graduation gowns background"
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
            Graduate Attire & Graduation Gowns
          </h1>
          <p className="text-xl text-purple-200 mb-10 max-w-3xl mx-auto">
            Celebrate academic achievement with our premium graduation gowns and ceremonial attire. Designed to honor tradition while ensuring comfort and elegance for your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=graduate-attire"
              className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Graduate Attire Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors text-lg"
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
              Excellence in Academic Ceremonial Wear
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our graduation attire combines traditional academic elegance with modern quality and comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attireFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation Levels */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Attire for Every Academic Level
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized graduation attire designed for different academic degrees and ceremonial requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {graduationLevels.map((level, index) => (
              <div key={level.level} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={level.image}
                    alt={level.level}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{level.level}</h3>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {level.features.map((feature, featureIndex) => (
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
                      {level.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
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

      {/* Fabric Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Fabric Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of high-quality fabrics designed for comfort and elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricOptions.map((fabric) => (
              <div key={fabric.name} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fabric.name}</h3>
                <p className="text-gray-600 mb-4">{fabric.description}</p>
                <ul className="space-y-2">
                  {fabric.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Personalize your graduation attire to reflect your institution's identity and academic traditions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Graduate Attire?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Academic Tradition</h3>
                    <p className="text-gray-600">Honor academic traditions with authentic ceremonial designs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                    <p className="text-gray-600">High-quality materials and construction for lasting memories</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Perfect Fit</h3>
                    <p className="text-gray-600">Comprehensive sizing and fitting services for comfort</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Branding</h3>
                    <p className="text-gray-600">Incorporate university logos and colors for institutional pride</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/products/nursing-uniform.jpg"
                alt="Graduates in ceremonial attire"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Make Your Graduation Ceremony Memorable
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Contact our academic attire specialists to discuss your graduation ceremony needs and create the perfect ceremonial experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=graduate-attire"
              className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Graduation Quote
            </Link>
            <Link
              href="/shop/education/university-attire/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-800 transition-colors text-lg"
            >
              View All University Attire
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}