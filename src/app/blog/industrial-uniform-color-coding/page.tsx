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
  ExclamationTriangleIcon,
  SwatchIcon,
  EyeSlashIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Industrial Uniform Color Coding: Safety Standards and Best Practices | UNEOM Blog',
  description: 'Comprehensive guide to industrial uniform color coding systems, safety standards, and best practices. Learn how color coding enhances workplace safety and operational efficiency in industrial environments.',
  keywords: 'industrial uniform color coding, safety color standards, workplace safety colors, industrial safety uniforms, color coding systems',
  openGraph: {
    title: 'Industrial Uniform Color Coding: Safety Standards and Best Practices',
    description: 'Complete guide to industrial uniform color coding for enhanced workplace safety',
    images: ['/images/blog/industrial-color-coding.jpg'],
    locale: 'en_US',
  },
  alternates: {
    canonical: '/blog/industrial-uniform-color-coding/',
    languages: {
      'en': '/blog/industrial-uniform-color-coding/',
      'ar': '/ar/blog/industrial-uniform-color-coding/',
    },
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction to Color Coding' },
  { id: 'safety-standards', title: 'International Safety Standards' },
  { id: 'color-meanings', title: 'Color Meanings and Applications' },
  { id: 'industry-specific', title: 'Industry-Specific Color Systems' },
  { id: 'implementation', title: 'Implementation Guidelines' },
  { id: 'benefits', title: 'Benefits and Advantages' },
  { id: 'best-practices', title: 'Best Practices and Recommendations' }
]

const safetyStandards = [
  {
    standard: 'ANSI/ISEA 107',
    title: 'High-Visibility Safety Apparel',
    description: 'Defines color requirements for high-visibility clothing',
    colors: ['Fluorescent Orange-Red', 'Fluorescent Yellow-Green', 'Fluorescent Red']
  },
  {
    standard: 'ISO 20471',
    title: 'High-Visibility Clothing',
    description: 'International standard for high-visibility protective clothing',
    colors: ['Fluorescent Yellow', 'Fluorescent Orange', 'Fluorescent Red']
  },
  {
    standard: 'EN 471',
    title: 'European High-Visibility Standard',
    description: 'European standard for high-visibility warning clothing',
    colors: ['Fluorescent Yellow', 'Fluorescent Orange', 'Fluorescent Red']
  },
  {
    standard: 'AS/NZS 4602',
    title: 'Australian/New Zealand Standard',
    description: 'High-visibility safety garments for Australian and New Zealand markets',
    colors: ['Fluorescent Yellow', 'Fluorescent Orange', 'Fluorescent Red-Orange']
  }
]

const colorMeanings = [
  {
    color: 'High-Visibility Yellow',
    meaning: 'General Safety and Caution',
    applications: [
      'Construction workers',
      'Traffic control personnel',
      'Airport ground crew',
      'General industrial workers'
    ],
    psychology: 'Attracts attention and signals caution'
  },
  {
    color: 'High-Visibility Orange',
    meaning: 'Road Work and Emergency Response',
    applications: [
      'Road construction crews',
      'Emergency responders',
      'Utility workers',
      'Railway maintenance'
    ],
    psychology: 'High visibility and urgency'
  },
  {
    color: 'Red',
    meaning: 'Fire Safety and Emergency',
    applications: [
      'Fire department personnel',
      'Emergency medical services',
      'Safety supervisors',
      'Hazardous material handlers'
    ],
    psychology: 'Immediate attention and danger warning'
  },
  {
    color: 'Blue',
    meaning: 'Maintenance and Technical',
    applications: [
      'Maintenance technicians',
      'Quality control inspectors',
      'Technical specialists',
      'Equipment operators'
    ],
    psychology: 'Trust, reliability, and professionalism'
  },
  {
    color: 'Green',
    meaning: 'Safety and First Aid',
    applications: [
      'Safety officers',
      'First aid responders',
      'Environmental specialists',
      'New employee identification'
    ],
    psychology: 'Safety, go-ahead, and environmental awareness'
  },
  {
    color: 'White',
    meaning: 'Management and Supervision',
    applications: [
      'Site supervisors',
      'Management personnel',
      'Quality assurance',
      'Visitors and contractors'
    ],
    psychology: 'Authority, cleanliness, and leadership'
  }
]

const industrySpecific = [
  {
    industry: 'Oil & Gas',
    colorSystem: {
      'Flame Retardant Orange': 'Field operators and technicians',
      'Flame Retardant Blue': 'Maintenance and engineering',
      'Flame Retardant Red': 'Safety and emergency response',
      'Flame Retardant White': 'Management and supervision'
    },
    specialRequirements: 'All colors must meet flame resistance standards'
  },
  {
    industry: 'Manufacturing',
    colorSystem: {
      'Navy Blue': 'Production workers',
      'Light Blue': 'Quality control',
      'Green': 'Safety personnel',
      'White': 'Management and visitors'
    },
    specialRequirements: 'Colors should hide minor stains while maintaining visibility'
  },
  {
    industry: 'Construction',
    colorSystem: {
      'High-Vis Yellow': 'General construction workers',
      'High-Vis Orange': 'Traffic control and road work',
      'Red': 'Safety supervisors',
      'White': 'Site management'
    },
    specialRequirements: 'Must comply with local high-visibility regulations'
  },
  {
    industry: 'Healthcare Facilities',
    colorSystem: {
      'Light Blue': 'Maintenance staff',
      'Green': 'Environmental services',
      'Navy': 'Security personnel',
      'Gray': 'Technical support'
    },
    specialRequirements: 'Colors must not interfere with medical color coding'
  }
]

const implementationGuidelines = [
  {
    phase: 'Planning and Assessment',
    duration: '2-4 weeks',
    activities: [
      'Assess current safety requirements',
      'Review applicable standards and regulations',
      'Identify different worker categories',
      'Determine color coding needs'
    ]
  },
  {
    phase: 'System Design',
    duration: '3-4 weeks',
    activities: [
      'Develop color coding matrix',
      'Create implementation timeline',
      'Design training materials',
      'Establish procurement procedures'
    ]
  },
  {
    phase: 'Pilot Testing',
    duration: '4-6 weeks',
    activities: [
      'Select pilot group',
      'Distribute color-coded uniforms',
      'Monitor effectiveness',
      'Gather feedback and adjust'
    ]
  },
  {
    phase: 'Full Rollout',
    duration: '8-12 weeks',
    activities: [
      'Train all personnel',
      'Distribute uniforms company-wide',
      'Implement monitoring systems',
      'Establish maintenance procedures'
    ]
  }
]

const benefits = [
  {
    benefit: 'Enhanced Safety',
    description: 'Immediate visual identification of personnel roles and safety requirements',
    impact: '35% reduction in workplace accidents'
  },
  {
    benefit: 'Improved Communication',
    description: 'Clear visual communication of authority levels and responsibilities',
    impact: '28% faster emergency response times'
  },
  {
    benefit: 'Regulatory Compliance',
    description: 'Meets international safety standards and local regulations',
    impact: '100% compliance with safety audits'
  },
  {
    benefit: 'Operational Efficiency',
    description: 'Quick identification of personnel for task assignment and coordination',
    impact: '22% improvement in workflow efficiency'
  },
  {
    benefit: 'Professional Image',
    description: 'Organized and professional appearance enhances company reputation',
    impact: '15% increase in client confidence'
  },
  {
    benefit: 'Cost Effectiveness',
    description: 'Reduced accidents and improved efficiency offset implementation costs',
    impact: 'ROI achieved within 18 months'
  }
]

const bestPractices = [
  'Ensure color choices comply with relevant safety standards',
  'Consider color blindness when selecting color combinations',
  'Maintain consistency across all company locations',
  'Provide clear documentation of color coding system',
  'Train all employees on color meanings and applications',
  'Regular review and update of color coding system',
  'Consider environmental factors affecting color visibility',
  'Implement quality control for color consistency'
]

export default function IndustrialUniformColorCodingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Industrial Uniform Color Coding</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-50 to-red-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Safety Standards
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Color Coding
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Industrial Uniform Color Coding: Safety Standards and Best Practices
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive guide to implementing effective color coding systems in industrial uniforms to enhance workplace safety, improve communication, and ensure regulatory compliance.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Safety Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>5,672 views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/blog/industrial-color-coding.jpg"
                alt="Industrial Uniform Color Coding"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Color Coding</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Industrial uniform color coding is a systematic approach to using specific colors to identify different roles, responsibilities, and safety requirements in industrial environments. This visual communication system enhances workplace safety, improves operational efficiency, and ensures regulatory compliance across various industries.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Effective color coding systems go beyond simple aesthetics – they serve as critical safety tools that can prevent accidents, facilitate emergency response, and streamline daily operations. Understanding and implementing proper color coding standards is essential for any industrial operation committed to safety excellence.
                  </p>
                  
                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <ExclamationTriangleIcon className="h-6 w-6 text-orange-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-orange-900 mb-2">Why Color Coding Matters</h3>
                        <ul className="text-orange-800 space-y-1 text-sm">
                          <li>• Instant visual identification of personnel roles</li>
                          <li>• Enhanced safety through clear communication</li>
                          <li>• Compliance with international safety standards</li>
                          <li>• Improved emergency response coordination</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="safety-standards" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">International Safety Standards</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Several international standards govern the use of colors in industrial safety uniforms:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {safetyStandards.map((standard, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{standard.standard}</h3>
                        <h4 className="text-lg text-blue-600 mb-3">{standard.title}</h4>
                        <p className="text-gray-700 mb-4">{standard.description}</p>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Approved Colors:</h5>
                          <div className="flex flex-wrap gap-2">
                            {standard.colors.map((color, colorIndex) => (
                              <span key={colorIndex} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="color-meanings" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Color Meanings and Applications</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Each color in industrial uniform systems carries specific meanings and applications:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {colorMeanings.map((colorInfo, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start mb-4">
                          <SwatchIcon className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{colorInfo.color}</h3>
                            <p className="text-gray-600 text-sm">{colorInfo.meaning}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Common Applications:</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              {colorInfo.applications.map((app, appIndex) => (
                                <li key={appIndex}>• {app}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Color Psychology:</h4>
                            <p className="text-gray-700 text-sm">{colorInfo.psychology}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="industry-specific" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry-Specific Color Systems</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Different industries have developed specialized color coding systems:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {industrySpecific.map((industry, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">{industry.industry}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {Object.entries(industry.colorSystem).map(([color, role], colorIndex) => (
                            <div key={colorIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                              <span className="font-medium text-gray-900">{color}:</span>
                              <span className="text-gray-600 text-sm">{role}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-blue-800 text-sm"><strong>Special Requirements:</strong> {industry.specialRequirements}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="implementation" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guidelines</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Successful implementation of color coding systems requires careful planning:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {implementationGuidelines.map((phase, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                          <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">{phase.duration}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center">
                              <CogIcon className="h-4 w-4 text-gray-600 mr-2" />
                              <span className="text-gray-700 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="benefits" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits and Advantages</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Implementing color coding systems provides measurable benefits:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-green-50 rounded-lg p-6">
                        <h3 className="font-semibold text-green-900 mb-2">{benefit.benefit}</h3>
                        <p className="text-green-800 mb-3 text-sm">{benefit.description}</p>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-green-900 text-sm font-medium">{benefit.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="best-practices" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices and Recommendations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Follow these best practices for effective color coding implementation:
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-4">Implementation Best Practices:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {bestPractices.map((practice, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-blue-800 text-sm">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Implement Color Coding in Your Facility?</h3>
                  <p className="text-gray-700 mb-4">
                    UNEOM provides comprehensive color-coded uniform solutions that meet international safety standards.
                  </p>
                  <Link 
                    href="/shop/industrial-uniforms"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                  >
                    Explore Industrial Uniforms
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/industrial-safety-compliance-guide" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/industrial-safety-compliance.jpg"
                      alt="Industrial Safety Compliance Guide"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Industrial Safety Compliance Guide</h4>
                      <p className="text-gray-600 text-sm">Complete guide to industrial safety regulations and compliance</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/industrial-protective-clothing-advances" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/protective-clothing-advances.jpg"
                      alt="Industrial Protective Clothing Advances"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Industrial Protective Clothing Advances</h4>
                      <p className="text-gray-600 text-sm">Latest innovations in industrial protective clothing technology</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}