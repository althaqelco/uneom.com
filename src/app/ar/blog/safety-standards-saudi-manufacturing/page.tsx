import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  CogIcon, 
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowLeftIcon,
  CalendarIcon,
  UserIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Safety Standards in Saudi Manufacturing: Complete Compliance and Quality Guide | UNEOM',
  description: 'Specialized guide to safety standards in Saudi manufacturing sector. Learn about SASO requirements, quality standards, and best practices for ensuring occupational safety.',
  keywords: 'Saudi safety standards, SASO, safe manufacturing, occupational safety, Saudi quality standards, manufacturing in Saudi Arabia, Vision 2030',
  openGraph: {
    title: 'Safety Standards in Saudi Manufacturing: Complete Compliance Guide',
    description: 'Specialized guide to safety and quality standards in Saudi manufacturing sector',
    images: ['/images/manufacturing/saudi-safety-standards.jpg'],
  },
}

const safetyStandards = [
  {
    icon: ShieldCheckIcon,
    title: 'SASO Basic Standards',
    description: 'Saudi Standards, Metrology and Quality Organization sets fundamental safety standards',
    requirements: [
      'Certified quality certificates',
      'Periodic safety testing',
      'Manufacturing process documentation',
      'Continuous quality monitoring'
    ],
    color: 'blue'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Occupational Safety',
    description: 'Worker protection and ensuring safe work environment in all manufacturing stages',
    requirements: [
      'Personal protective equipment',
      'Continuous safety training',
      'Emergency procedures',
      'Periodic equipment inspection'
    ],
    color: 'red'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Quality Assurance',
    description: 'Comprehensive systems to ensure product quality according to international standards',
    requirements: [
      'ISO 9001 quality management system',
      'Raw material testing',
      'Production process monitoring',
      'Final product inspection'
    ],
    color: 'green'
  },
  {
    icon: CogIcon,
    title: 'Equipment Safety',
    description: 'Maintenance and operation of industrial equipment according to highest safety standards',
    requirements: [
      'Regular preventive maintenance',
      'Equipment calibration',
      'Operator training',
      'Early warning systems'
    ],
    color: 'purple'
  }
]

const complianceFramework = [
  {
    category: 'Licenses and Permits',
    items: [
      'Factory license from Ministry of Industry',
      'Safety certificate from Civil Defense',
      'Environmental permit from General Authority for Meteorology',
      'Work permit from Ministry of Human Resources'
    ],
    icon: '📋'
  },
  {
    category: 'Technical Standards',
    items: [
      'Saudi specifications compliance',
      'Accredited laboratory certification',
      'Product conformity certificates',
      'Periodic test reports'
    ],
    icon: '⚙️'
  },
  {
    category: 'Environmental Safety',
    items: [
      'Industrial waste management',
      'Emissions monitoring',
      'Industrial water treatment',
      'Use of eco-friendly materials'
    ],
    icon: '🌱'
  },
  {
    category: 'Training and Qualification',
    items: [
      'Safety training programs',
      'Professional competency certificates',
      'Emergency training',
      'Continuous skill development'
    ],
    icon: '🎓'
  }
]

const vision2030Impact = [
  {
    title: 'Digital Transformation',
    description: 'Integration of modern technologies in safety and monitoring systems',
    benefits: ['Real-time process monitoring', 'Advanced data analysis', 'AI in safety'],
    icon: '💻'
  },
  {
    title: 'Sustainability',
    description: 'Focus on sustainable and environmentally friendly practices',
    benefits: ['Waste reduction', 'Energy efficiency', 'Recycled materials'],
    icon: '♻️'
  },
  {
    title: 'Innovation',
    description: 'Encouraging innovation in safety and manufacturing technologies',
    benefits: ['New safety technologies', 'Process automation', 'Smart solutions'],
    icon: '💡'
  }
]

const bestPractices = [
  {
    title: 'Risk Management',
    practices: [
      'Regular risk identification and assessment',
      'Develop risk mitigation plans',
      'Review and update safety procedures',
      'Train employees on risk management'
    ]
  },
  {
    title: 'Continuous Improvement',
    practices: [
      'Periodic review of safety systems',
      'Analyze incidents and learn from them',
      'Apply global best practices',
      'Invest in modern technologies'
    ]
  },
  {
    title: 'Organizational Culture',
    practices: [
      'Build safety culture in organization',
      'Encourage risk reporting',
      'Reward safe behavior',
      'Lead by example in safety'
    ]
  }
]

export default function SafetyStandardsSaudiManufacturingPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-gray-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">May 25, 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Safety Experts - UNEOM</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Safety Standards in
              <span className="text-blue-600 block">Saudi Manufacturing</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive guide to safety and quality standards in Saudi manufacturing sector, covering SASO requirements, 
              best practices, and how to achieve full compliance with Saudi Vision 2030.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ar/industries/manufacturing"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Manufacturing Solutions
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Importance of Safety Standards in Manufacturing
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Safety standards play a pivotal role in the success of Saudi industrial sector. With Saudi Vision 2030 
                  and the direction towards economic diversification, commitment to highest safety and quality standards has become essential.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Saudi Standards, Metrology and Quality Organization (SASO) sets the regulatory framework that ensures 
                  product safety and consumer protection, enhancing the competitiveness of Saudi industries locally and globally.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/manufacturing/saudi-safety-standards.jpg"
                    alt="Safety standards in Saudi manufacturing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fundamental Safety Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four main pillars that form the foundation of safety in Saudi manufacturing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {safetyStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <standard.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {standard.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Basic Requirements:</p>
                      <ul className="space-y-2">
                        {standard.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Compliance Framework
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential requirements for full compliance with Saudi safety standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {complianceFramework.map((framework, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{framework.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {framework.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {framework.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vision 2030 Impact on Safety Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How Saudi Vision 2030 shapes the future of manufacturing safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {vision2030Impact.map((impact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{impact.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {impact.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Benefits:</p>
                  <ul className="space-y-2">
                    {impact.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Best Practices in Safety
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven strategies to achieve highest safety standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {practice.title}
                </h3>
                <ul className="space-y-4">
                  {practice.practices.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold ml-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Expert Consultation on Safety Standards
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you achieve full compliance with Saudi safety standards 
            and ensure the highest quality levels in your products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Free Consultation
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/ar/industries/manufacturing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Manufacturing Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/ar/blog/workwear-innovations-saudi-factories" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/manufacturing/workwear-innovations.jpg"
                    alt="Workwear innovations in Saudi factories"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Workwear Innovations in Factories
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Latest developments in industrial workwear technologies and their impact on safety.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/blog/industrial-protective-clothing-advances" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/manufacturing/protective-clothing.jpg"
                    alt="Industrial protective clothing advances"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Industrial Protective Clothing Advances
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How modern technologies contribute to improving protective clothing effectiveness.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/shop/manufacturing-attire" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/manufacturing/manufacturing-uniforms.jpg"
                    alt="Specialized manufacturing attire"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Manufacturing Attire Collection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover our specialized collection of safe industrial workwear.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}