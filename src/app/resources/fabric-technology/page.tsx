import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon, BeakerIcon, ShieldCheckIcon, SparklesIcon, FireIcon, CloudIcon, SunIcon } from '@heroicons/react/24/outline'
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Advanced Fabric Technologies | UNEOM Uniform Resources',
  description: 'Discover cutting-edge fabric technologies for professional uniforms in Saudi Arabia. Antimicrobial, stain-resistant, and moisture-wicking technologies for professionals.',
  keywords: 'fabric technology, advanced uniforms, antimicrobial fabrics, textile innovation, UNEOM Saudi Arabia',
  openGraph: {
    title: 'Advanced Fabric Technologies | UNEOM Resources',
    description: 'Comprehensive guide to the latest fabric technologies used in professional uniform manufacturing',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/resources/fabric-technology/',
    languages: {
      'en': '/resources/fabric-technology/',
      'ar': '/ar/resources/fabric-technology/',
    },
  },
}

const fabricTechnologies = [
  {
    icon: ShieldCheckIcon,
    title: 'Antimicrobial Technologies',
    description: 'Advanced fabric treatments that prevent bacterial and fungal growth, ideal for medical and food service environments.',
    features: ['Long-lasting protection', 'Skin-safe formulations', 'Wash-resistant treatment', 'Medically approved'],
    applications: ['Medical scrubs', 'Food service uniforms', 'Laboratory wear', 'Healthcare attire']
  },
  {
    icon: CloudIcon,
    title: 'Moisture Management',
    description: 'Smart fabrics that wick moisture away from the body and maintain dryness and comfort throughout the day.',
    features: ['Quick-dry technology', 'Excellent breathability', 'All-day comfort', 'Odor resistance'],
    applications: ['Athletic wear', 'Heavy-duty workwear', 'Industrial uniforms', 'Security attire']
  },
  {
    icon: SparklesIcon,
    title: 'Stain & Soil Resistance',
    description: 'Advanced protective coating that prevents liquid and stain absorption, making cleaning and maintenance easier.',
    features: ['Easy cleaning', 'Oil resistance', 'Stain protection', 'Professional appearance'],
    applications: ['Restaurant uniforms', 'Industrial wear', 'Cleaning services', 'Maintenance attire']
  },
  {
    icon: FireIcon,
    title: 'Flame Resistance',
    description: 'Specially designed fabrics that provide protection from heat and flame in high-risk environments.',
    features: ['Flame protection', 'Heat resistance', 'International safety standards', 'Comfortable wear'],
    applications: ['Petrochemical industry', 'Welding & metalwork', 'Electrical work', 'Emergency services']
  },
  {
    icon: SunIcon,
    title: 'UV Protection',
    description: 'Fabrics that provide effective protection from harmful UV rays, perfect for outdoor work environments.',
    features: ['UPF 50+ protection', 'Color fade resistance', 'Lightweight design', 'Excellent ventilation'],
    applications: ['Outdoor work', 'Agriculture', 'Construction', 'Security & patrol']
  },
  {
    icon: BeakerIcon,
    title: 'Smart & Advanced Technologies',
    description: 'Latest innovations in textile science including responsive fabrics and advanced nanomaterials.',
    features: ['Nanotechnology', 'Temperature responsive', 'Interactive properties', 'Eco-friendly'],
    applications: ['Advanced medical wear', 'Professional sports', 'Scientific research', 'Special applications']
  }
]

const sustainabilityFeatures = [
  {
    title: 'Recycled Materials',
    description: 'Using recycled materials to reduce environmental impact',
    icon: '♻️'
  },
  {
    title: 'Sustainable Production',
    description: 'Eco-friendly and energy-efficient manufacturing processes',
    icon: '🌱'
  },
  {
    title: 'Natural Fibers',
    description: 'Combining natural fibers with advanced technologies',
    icon: '🌿'
  },
  {
    title: 'Long Lifecycle',
    description: 'Fabrics designed for long-term use and durability',
    icon: '⏳'
  }
]

export default function FabricTechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <Link href="/resources" className="hover:text-blue-600">Resources</Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">Fabric Technology</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Advanced Fabric Technologies
                <span className="block text-blue-200 text-3xl lg:text-4xl mt-2">
                  for Professional Uniforms
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Discover the latest innovations in fabric technology that make uniforms more comfortable, safer, and more effective for professionals across all industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Free Consultation
                </Link>
                <Link 
                  href="/resources/fabric-guide"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Fabric Guide
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/services/stack-of-rolled-jeans-and-cotton-flowers-on-light-2025-01-29-01-45-01-utc.jpg"
                alt="Advanced fabric technologies"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Technologies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Fabric Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We utilize the latest global technologies to ensure the highest levels of quality and performance in our products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricTechnologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <tech.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.applications.map((app, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sustainability & Environmental Responsibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to sustainable practices throughout all stages of production to protect the environment and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Global Quality Standards
                </h2>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  All our products undergo rigorous testing and comply with the highest international quality and safety standards.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 mr-3" />
                    <span>ISO 9001:2015 Certified</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 mr-3" />
                    <span>Wash resistance testing</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 mr-3" />
                    <span>Safety and health inspection</span>
                  </li>
                  <li className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-300 mr-3" />
                    <span>Long-term quality assurance</span>
                  </li>
                </ul>
                <Link 
                  href="/services/quality-assurance"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
                >
                  Learn About Quality Assurance
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/images/services/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                  alt="Fabric quality inspection"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Expert Consultation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you choose the best fabric technologies suitable for your professional needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore More Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}