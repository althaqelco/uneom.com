import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  SunIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hajj & Umrah Staff Uniforms: Serving Pilgrims with Excellence & Elegance | UNEOM',
  description: 'Complete guide to uniforms for Hajj and Umrah service workers in Saudi Arabia. Expert insights on designing functional, respectful, and climate-appropriate uniforms for hotel staff, transport workers, hospitality teams, and service providers in Makkah and Madinah.',
  keywords: 'Hajj staff uniforms, Umrah worker uniforms, Makkah hotel uniforms, Madinah hospitality attire, pilgrim service uniforms, holy city workwear, Islamic hospitality uniforms, Saudi pilgrimage staff, Hajj season workwear, religious tourism uniforms',
  openGraph: {
    title: 'Hajj & Umrah Staff Uniforms: Serving Pilgrims with Excellence & Elegance',
    description: 'Professional uniforms for those serving pilgrims in the Holy Cities',
    images: ['/images/hospitality/hospitality_uniform_hotel.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-05-01T08:00:00Z',
    authors: ['UNEOM Hajj Services Team'],
  },
  alternates: {
    canonical: '/blog/hajj-umrah-staff-uniforms/',
    languages: {
      'en': '/blog/hajj-umrah-staff-uniforms/',
      'ar': '/ar/blog/hajj-umrah-staff-uniforms/',
    }
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hajj & Umrah Staff Uniforms: Serving Pilgrims with Excellence & Elegance',
  description: 'Comprehensive guide to uniforms for Hajj and Umrah service providers in Saudi Arabia',
  image: 'https://uneom.com/images/hospitality/hospitality_uniform_hotel.jpg',
  author: {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com'
  },
  datePublished: '2025-05-01T08:00:00Z',
  dateModified: '2025-05-01T08:00:00Z'
}

const tableOfContents = [
  { id: 'introduction', title: 'The Sacred Responsibility' },
  { id: 'unique-requirements', title: 'Unique Requirements' },
  { id: 'sector-guide', title: 'Sector-Specific Guidelines' },
  { id: 'climate-solutions', title: 'Climate & Comfort Solutions' },
  { id: 'cultural-sensitivity', title: 'Cultural Sensitivity' },
  { id: 'multilingual', title: 'Multilingual Identification' },
  { id: 'implementation', title: 'Implementation Timeline' },
  { id: 'suppliers', title: 'Choosing the Right Supplier' }
]

const uniqueRequirements = [
  {
    requirement: 'Extreme Heat Performance',
    description: 'Staff work in temperatures exceeding 45°C during peak Hajj season',
    solution: 'Advanced cooling fabrics with moisture-wicking and heat-reflective properties',
    icon: SunIcon
  },
  {
    requirement: 'Crowd Navigation',
    description: 'Staff must be easily identifiable among millions of pilgrims',
    solution: 'Distinctive colors, reflective elements, and clear role identification',
    icon: UserGroupIcon
  },
  {
    requirement: 'Religious Respect',
    description: 'Uniforms must respect the sanctity of the Holy Cities',
    solution: 'Modest designs, appropriate colors, no imagery that could be distracting',
    icon: StarIcon
  },
  {
    requirement: 'Multilingual Service',
    description: 'Staff serve pilgrims from 180+ countries speaking different languages',
    solution: 'Language flags, clear department symbols, universal signage',
    icon: GlobeAltIcon
  },
  {
    requirement: 'Extended Shifts',
    description: 'Many staff work 12-16 hour shifts during peak periods',
    solution: 'Comfort-focused designs, supportive footwear, easy-care fabrics',
    icon: ClockIcon
  },
  {
    requirement: 'Hygiene Standards',
    description: 'Close contact with pilgrims requires impeccable hygiene',
    solution: 'Antimicrobial fabrics, multiple uniform sets, quick-dry materials',
    icon: ShieldCheckIcon
  }
]

const sectorGuidelines = [
  {
    sector: 'Hotel & Accommodation',
    roles: ['Reception', 'Housekeeping', 'Concierge', 'Bell Service', 'F&B'],
    keyConsiderations: [
      'Elegant appearance befitting pilgrim expectations',
      'Clear department differentiation',
      'Modesty standards for all staff',
      'Comfortable for long standing periods',
      'Easy identification for guest assistance'
    ],
    colorSchemes: 'Deep greens, whites, golds - colors associated with Islamic heritage',
    image: '/images/hospitality/hospitality_uniform_hotel_service.jpg'
  },
  {
    sector: 'Transport & Logistics',
    roles: ['Bus Drivers', 'Guides', 'Coordinators', 'Logistics Staff'],
    keyConsiderations: [
      'High visibility for safety',
      'Durable for active work',
      'Pockets for communication devices',
      'Sun protection for outdoor work',
      'Reflective elements for night operations'
    ],
    colorSchemes: 'Bright identification colors with reflective elements',
    image: '/images/hospitality/hospitality_full_look.jpg'
  },
  {
    sector: 'Healthcare Support',
    roles: ['First Aid', 'Medical Assistants', 'Wheelchair Services', 'Emergency Support'],
    keyConsiderations: [
      'Immediate recognition as medical personnel',
      'Functional pockets for equipment',
      'Easy to clean and sanitize',
      'Comfortable for physical assistance',
      'Clear language identification'
    ],
    colorSchemes: 'Medical whites with red cross or crescent identification',
    image: '/images/healthcare/healthcare_medical_uniform.jpg'
  },
  {
    sector: 'Guidance & Information',
    roles: ['Pilgrim Guides', 'Information Desk', 'Translators', 'Religious Advisors'],
    keyConsiderations: [
      'Approachable yet authoritative appearance',
      'Multiple language badges',
      'Comfortable for walking tours',
      'Professional appearance for religious guidance',
      'Easy identification at information points'
    ],
    colorSchemes: 'Traditional Saudi colors representing hospitality',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg'
  },
  {
    sector: 'Food & Catering',
    roles: ['Kitchen Staff', 'Servers', 'Food Distribution', 'Catering Managers'],
    keyConsiderations: [
      'Food safety compliance',
      'Heat-resistant for kitchen work',
      'Stain-resistant materials',
      'Hairnets and hygiene accessories',
      'Clear food handling certification display'
    ],
    colorSchemes: 'Clean whites with accent colors for department identification',
    image: '/images/hospitality/hospitality_uniform_chef.jpg'
  },
  {
    sector: 'Security & Crowd Management',
    roles: ['Security Personnel', 'Crowd Controllers', 'Emergency Coordinators'],
    keyConsiderations: [
      'Authoritative but approachable appearance',
      'High visibility in crowds',
      'Functional for active duties',
      'Weather-appropriate options',
      'Clear identification as security'
    ],
    colorSchemes: 'Distinguished colors differentiating from other services',
    image: '/images/security/saudi-events-security.jpg'
  }
]

const climateSolutions = [
  {
    technology: 'Phase Change Materials (PCM)',
    description: 'Microcapsules that absorb and release heat to regulate body temperature',
    benefit: 'Keeps wearer up to 3°C cooler in extreme heat',
    application: 'Outdoor service staff, transport workers, security'
  },
  {
    technology: 'Moisture-Wicking Fabrics',
    description: 'Advanced fibers that pull sweat away from skin for rapid evaporation',
    benefit: 'Reduces sweat-related discomfort by 60%',
    application: 'All staff categories, especially active roles'
  },
  {
    technology: 'UV-Protective Treatments',
    description: 'Fabrics with UPF 50+ protection blocking harmful sun rays',
    benefit: 'Prevents sunburn and reduces skin cancer risk',
    application: 'Outdoor guides, transport staff, security'
  },
  {
    technology: 'Antimicrobial Silver Ion',
    description: 'Silver-embedded fibers that prevent bacterial growth and odor',
    benefit: 'Uniforms stay fresh through extended shifts',
    application: 'All staff, especially high-contact roles'
  },
  {
    technology: 'Lightweight Breathable Weaves',
    description: 'Engineered fabric structures maximizing airflow',
    benefit: 'Improves ventilation without compromising appearance',
    application: 'Hotel staff, guides, administrative roles'
  }
]

const culturalSensitivity = [
  {
    aspect: 'Modest Design Standards',
    guidelines: [
      'Full-length options for all female staff',
      'Loose-fitting cuts that don\'t reveal body shape',
      'Hijab-compatible collar and neckline designs',
      'Appropriate sleeve lengths (full or three-quarter minimum)',
      'No sheer or revealing materials'
    ]
  },
  {
    aspect: 'Color Appropriateness',
    guidelines: [
      'Avoid colors associated with mourning (pure black for uniforms)',
      'Incorporate Islamic heritage colors (green, white, gold)',
      'Respect for the white Ihram worn by male pilgrims',
      'Department differentiation through accent colors',
      'Consider color visibility in crowded environments'
    ]
  },
  {
    aspect: 'Design Elements',
    guidelines: [
      'No images or logos that could be considered idolatrous',
      'Geometric patterns preferred over figurative designs',
      'Islamic calligraphy where appropriate',
      'Respect for the sacred nature of the environment',
      'Avoid flashy or distracting elements'
    ]
  },
  {
    aspect: 'Practical Considerations',
    guidelines: [
      'Easy ritual ablution (wudu) with sleeve designs',
      'Comfortable for prayer times',
      'Durable for the demands of the pilgrimage season',
      'Easy care for maintaining cleanliness',
      'Suitable for both indoor and outdoor environments'
    ]
  }
]

const implementationTimeline = [
  {
    phase: 'Planning (12-18 months before Hajj)',
    activities: [
      'Assess staff numbers and roles',
      'Define uniform requirements by department',
      'Budget allocation and approval',
      'Supplier selection and contracting'
    ]
  },
  {
    phase: 'Design & Development (9-12 months before)',
    activities: [
      'Custom design development',
      'Sample production and testing',
      'Feedback collection from staff',
      'Design refinement and approval'
    ]
  },
  {
    phase: 'Production (6-9 months before)',
    activities: [
      'Bulk production commencement',
      'Quality control processes',
      'Size distribution planning',
      'Accessory and footwear procurement'
    ]
  },
  {
    phase: 'Distribution (2-3 months before)',
    activities: [
      'Individual staff measurements',
      'Uniform fitting sessions',
      'Distribution by department',
      'Spare inventory positioning'
    ]
  },
  {
    phase: 'Hajj Season Operations',
    activities: [
      'Rapid replacement services',
      'Laundry and maintenance support',
      'Emergency uniform supplies',
      'Post-season collection and storage'
    ]
  }
]

export default function HajjUmrahStaffUniformsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><span className="text-gray-900 font-medium">Hajj & Umrah Staff Uniforms</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/hospitality/hospitality_uniform_hotel.jpg"
              alt="Hajj Service Staff"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">
                  Hajj & Umrah
                </span>
                <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                  Pilgrim Services
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hajj & Umrah Staff Uniforms: Serving Pilgrims with Excellence
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A comprehensive guide to designing uniforms that honor the sacred responsibility 
                of serving millions of pilgrims in the Holy Cities of Makkah and Madinah.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Hajj Services Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  <span>May 1, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TagIcon className="h-5 w-5 text-emerald-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA */}
                <div className="mt-6 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Hajj Season Approaching?</h3>
                  <p className="text-sm text-emerald-100 mb-4">
                    Plan your uniform program early. UNEOM has 15+ years serving Hajj organizations.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
                  >
                    Start Planning Now
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Sacred Responsibility</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Serving pilgrims during Hajj and Umrah is among the most honored responsibilities 
                  in the Kingdom of Saudi Arabia. The uniforms worn by service staff are not merely 
                  functional garments—they represent the Kingdom's commitment to hospitality, 
                  respect for the sacred journey, and the highest standards of service excellence.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/hospitality/hospitality_uniform_hotel.jpg"
                    alt="Hajj and Umrah service staff"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <StarIcon className="h-6 w-6" />
                    The Scale of Service
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-600">2M+</div>
                      <div className="text-sm text-gray-600">Hajj Pilgrims Annually</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-600">15M+</div>
                      <div className="text-sm text-gray-600">Umrah Visitors Yearly</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-600">180+</div>
                      <div className="text-sm text-gray-600">Countries Represented</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-600">100K+</div>
                      <div className="text-sm text-gray-600">Service Staff Deployed</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Unique Requirements */}
              <section id="unique-requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Unique Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hajj and Umrah service uniforms face challenges unlike any other hospitality environment:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {uniqueRequirements.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-emerald-100 p-2 rounded-lg">
                          <item.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="font-bold text-gray-900">{item.requirement}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-sm text-emerald-700">
                          <strong>Solution:</strong> {item.solution}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sector Guide */}
              <section id="sector-guide" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sector-Specific Guidelines</h2>
                
                <div className="space-y-8">
                  {sectorGuidelines.map((sector, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={sector.image}
                            alt={sector.sector}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.sector}</h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {sector.roles.map((role, i) => (
                              <span key={i} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                                {role}
                              </span>
                            ))}
                          </div>
                          <ul className="space-y-2 mb-4">
                            {sector.keyConsiderations.map((consideration, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>{consideration}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <span className="text-sm text-gray-700">
                              <strong>Recommended Colors:</strong> {sector.colorSchemes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Climate Solutions */}
              <section id="climate-solutions" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Climate & Comfort Solutions</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Advanced fabric technologies are essential for staff working in extreme Hajj season temperatures:
                </p>

                <div className="space-y-4">
                  {climateSolutions.map((tech, index) => (
                    <div key={index} className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-orange-900">{tech.technology}</h3>
                        <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                          {tech.application}
                        </span>
                      </div>
                      <p className="text-orange-800 mb-3">{tech.description}</p>
                      <div className="bg-white rounded-lg p-3">
                        <span className="text-orange-700 font-medium">✓ {tech.benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cultural Sensitivity */}
              <section id="cultural-sensitivity" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Sensitivity</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Uniforms for Hajj and Umrah services must demonstrate the highest respect for Islamic values 
                  and the sanctity of the Holy Cities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {culturalSensitivity.map((item, index) => (
                    <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h3 className="font-bold text-green-900 mb-4">{item.aspect}</h3>
                      <ul className="space-y-2">
                        {item.guidelines.map((guideline, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                            <CheckCircleIcon className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{guideline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Timeline */}
              <section id="implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Successful Hajj uniform programs require careful advance planning:
                </p>

                <div className="space-y-6">
                  {implementationTimeline.map((phase, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-3">{phase.phase}</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Prepare for Hajj Season 2025</h2>
                  <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                    UNEOM has been the trusted uniform partner for Hajj and Umrah service providers 
                    for over 15 years. Start your planning early to ensure excellence in service.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
                    >
                      Request Hajj Consultation
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/industries/hospitality"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      View Our Portfolio
                    </Link>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </div>
      </div>
    </>
  )
}
