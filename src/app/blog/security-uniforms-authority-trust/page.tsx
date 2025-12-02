import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Security Uniforms That Command Authority & Build Trust | UNEOM Saudi Arabia',
  description: 'Complete guide to security uniforms in Saudi Arabia. Learn how professional security attire builds authority, enhances safety, and creates trust. Covering corporate security, event security, residential guards, and VIP protection uniforms for Saudi facilities.',
  keywords: 'security uniforms Saudi Arabia, guard uniforms KSA, corporate security attire, event security clothing, VIP protection uniforms, security guard dress code, professional security wear, facility security uniforms Riyadh, private security clothing, security officer uniforms',
  openGraph: {
    title: 'Security Uniforms That Command Authority & Build Trust',
    description: 'How professional security uniforms enhance safety and build confidence in Saudi Arabia',
    images: ['/images/security/security_uniform_background.jpg'],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/security-uniforms-authority-trust/',
    languages: {
      'en': '/blog/security-uniforms-authority-trust/',
      'ar': '/ar/blog/security-uniforms-authority-trust/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Psychology of Security Uniforms' },
  { id: 'authority-factors', title: 'Authority-Building Elements' },
  { id: 'sector-guide', title: 'Sector-Specific Requirements' },
  { id: 'design-principles', title: 'Design Principles' },
  { id: 'fabric-technology', title: 'Performance Fabrics' },
  { id: 'saudi-regulations', title: 'Saudi Regulations & Licensing' },
  { id: 'implementation', title: 'Implementation Guide' }
]

const authorityFactors = [
  {
    factor: 'Color Psychology',
    impact: 'Dark colors (navy, black) convey authority and professionalism',
    research: 'Studies show dark uniforms increase compliance rates by 25%',
    application: 'Primary colors: Navy blue, black, dark gray'
  },
  {
    factor: 'Fit & Structure',
    impact: 'Well-fitted, structured uniforms project competence and readiness',
    research: 'Properly fitted uniforms improve perceived professionalism by 40%',
    application: 'Tailored cuts, reinforced shoulders, professional silhouette'
  },
  {
    factor: 'Insignia & Badges',
    impact: 'Official markings establish legitimacy and role clarity',
    research: 'Visible credentials increase public cooperation by 35%',
    application: 'Company badges, rank indicators, certification displays'
  },
  {
    factor: 'Cleanliness & Condition',
    impact: 'Well-maintained uniforms signal attention to detail and discipline',
    research: 'Uniform condition affects trust ratings by up to 50%',
    application: 'Regular replacement schedules, professional cleaning'
  }
]

const sectorRequirements = [
  {
    sector: 'Corporate & Commercial Security',
    description: 'Protecting business facilities, offices, and commercial properties',
    uniformElements: [
      'Professional blazer or suit jacket',
      'Dress shirt with company branding',
      'Formal trousers with belt',
      'Polished dress shoes',
      'ID badge and communication device'
    ],
    colorSchemes: 'Navy blue, charcoal gray, black - corporate colors',
    specialFeatures: 'Discreet design, minimal tactical appearance',
    image: '/images/security/corporate-security-officers.jpg'
  },
  {
    sector: 'Event & Crowd Management',
    description: 'Managing crowds at concerts, sporting events, and gatherings',
    uniformElements: [
      'High-visibility vest or polo',
      'Comfortable tactical pants',
      'Supportive footwear for standing',
      'Communication headset',
      'Weather-appropriate layers'
    ],
    colorSchemes: 'Bright colors for visibility - yellow, orange with black',
    specialFeatures: 'High visibility, comfort for extended standing',
    image: '/images/security/saudi-events-security.jpg'
  },
  {
    sector: 'Residential & Compound Security',
    description: 'Protecting residential communities and private compounds',
    uniformElements: [
      'Smart casual uniform (polo/shirt)',
      'Comfortable duty pants',
      'All-weather outerwear',
      'Gate/patrol equipment',
      'Flashlight and radio'
    ],
    colorSchemes: 'Approachable colors - light blue, khaki with navy accents',
    specialFeatures: 'Approachable yet authoritative appearance',
    image: '/images/security/security_uniform_background.jpg'
  },
  {
    sector: 'VIP & Executive Protection',
    description: 'Close protection for high-profile individuals and executives',
    uniformElements: [
      'Formal business attire (suit)',
      'Concealed communication equipment',
      'Minimal visible security indicators',
      'Professional accessories',
      'Appropriate footwear for mobility'
    ],
    colorSchemes: 'Formal business colors - dark suits, white/blue shirts',
    specialFeatures: 'Blend with executive environment, concealed functionality',
    image: '/images/security/vip-close-protection.jpg'
  },
  {
    sector: 'Industrial & Site Security',
    description: 'Securing industrial facilities, construction sites, oil & gas',
    uniformElements: [
      'High-visibility safety vest',
      'Safety boots (steel toe)',
      'Hard hat where required',
      'Durable work uniform',
      'PPE as per site requirements'
    ],
    colorSchemes: 'High-visibility orange/yellow with reflective strips',
    specialFeatures: 'Safety compliance, durability, weather protection',
    image: '/images/security/industrial-site-security.jpg'
  },
  {
    sector: 'Retail & Loss Prevention',
    description: 'Preventing theft and ensuring safety in retail environments',
    uniformElements: [
      'Plain clothes or store uniform',
      'Discreet communication device',
      'Comfortable footwear',
      'Minimal visible security equipment',
      'Store identification'
    ],
    colorSchemes: 'Matches store uniform or business casual',
    specialFeatures: 'Blend with retail environment, customer-friendly',
    image: '/images/security/mall-retail-security.jpg'
  }
]

const designPrinciples = [
  {
    principle: 'Functionality First',
    description: 'Uniforms must support security duties without restriction',
    elements: [
      'Freedom of movement for response situations',
      'Strategic pocket placement for equipment',
      'Reinforced areas for wear points',
      'Easy access to communication devices',
      'Comfortable for extended shifts'
    ]
  },
  {
    principle: 'Professional Appearance',
    description: 'Project authority while remaining approachable',
    elements: [
      'Clean lines and structured silhouette',
      'Appropriate fit - not too tight or loose',
      'Consistent appearance across team',
      'Quality materials that maintain appearance',
      'Proper grooming standards support'
    ]
  },
  {
    principle: 'Climate Adaptation',
    description: 'Saudi Arabia\'s climate demands specialized consideration',
    elements: [
      'Breathable fabrics for outdoor duty',
      'Moisture-wicking base layers',
      'Sun protection for exposed areas',
      'Layering system for AC transitions',
      'Lightweight yet professional options'
    ]
  },
  {
    principle: 'Safety Integration',
    description: 'Built-in safety features for officer protection',
    elements: [
      'High-visibility options where needed',
      'Reflective elements for night duty',
      'Stab-resistant options available',
      'Radio loops and equipment attachment',
      'Quick-release features if needed'
    ]
  }
]

const fabricTechnologies = [
  {
    technology: 'Moisture-Wicking Polyester Blends',
    benefits: ['Keeps officers dry', 'Quick drying', 'Maintains professional appearance'],
    bestFor: 'All security roles, especially outdoor duty',
    durability: 'High - maintains performance after repeated washing'
  },
  {
    technology: 'Ripstop Fabrics',
    benefits: ['Tear resistant', 'Lightweight', 'Durable construction'],
    bestFor: 'Tactical and patrol uniforms',
    durability: 'Very high - designed for demanding conditions'
  },
  {
    technology: 'Stretch Performance Fabrics',
    benefits: ['Full range of motion', 'Comfortable fit', 'Professional appearance'],
    bestFor: 'Close protection and corporate security',
    durability: 'High - retains shape and stretch'
  },
  {
    technology: 'UV-Protective Treatments',
    benefits: ['Sun protection', 'Reduces heat absorption', 'Protects fabric color'],
    bestFor: 'Outdoor security positions',
    durability: 'Medium - may require reapplication after extended use'
  },
  {
    technology: 'Antimicrobial Finishes',
    benefits: ['Odor control', 'Hygiene enhancement', 'Extended wear comfort'],
    bestFor: 'Long shifts and high-activity roles',
    durability: 'Medium-high - lasts 50+ wash cycles'
  }
]

const saudiRegulations = [
  {
    regulation: 'Security Services Licensing',
    authority: 'Ministry of Interior - Private Security Sector',
    requirements: [
      'Licensed security companies only',
      'Registered security personnel',
      'Approved uniform designs',
      'Visible company identification',
      'No military/police similarity'
    ]
  },
  {
    regulation: 'Uniform Approval Process',
    authority: 'Security Services Commission',
    requirements: [
      'Submit uniform design for approval',
      'Clear distinction from official forces',
      'Company logo/name clearly visible',
      'Color schemes within guidelines',
      'Badge and rank system approval'
    ]
  },
  {
    regulation: 'Equipment Restrictions',
    authority: 'Various regulatory bodies',
    requirements: [
      'Weapons permits where applicable',
      'Communication equipment licensing',
      'Vehicle marking requirements',
      'Protective equipment standards',
      'First aid certification'
    ]
  }
]

const implementationSteps = [
  {
    phase: 'Assessment',
    timeline: '2-4 weeks',
    activities: [
      'Analyze security roles and requirements',
      'Review regulatory compliance needs',
      'Assess climate and duty conditions',
      'Evaluate current uniform performance',
      'Gather staff feedback and sizing data'
    ]
  },
  {
    phase: 'Design & Approval',
    timeline: '4-6 weeks',
    activities: [
      'Develop uniform specifications',
      'Create design mockups',
      'Submit for regulatory approval',
      'Select fabrics and accessories',
      'Finalize color schemes and branding'
    ]
  },
  {
    phase: 'Production & Quality',
    timeline: '6-8 weeks',
    activities: [
      'Sample production and testing',
      'Quality control procedures',
      'Bulk production',
      'Accessory and equipment sourcing',
      'Inventory management setup'
    ]
  },
  {
    phase: 'Rollout & Training',
    timeline: '2-4 weeks',
    activities: [
      'Individual fitting sessions',
      'Uniform care training',
      'Appearance standards briefing',
      'Distribution and documentation',
      'Feedback collection system'
    ]
  }
]

export default function SecurityUniformsAuthorityTrustPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">Security Uniforms Authority & Trust</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/security/security_uniform_background.jpg"
            alt="Security Uniforms"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-slate-500/20 text-slate-300 px-4 py-1.5 rounded-full text-sm font-medium border border-slate-400/30">
                Security
              </span>
              <span className="bg-gray-500/20 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-400/30">
                Professional Authority
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Security Uniforms That Command Authority & Build Trust
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how professional security uniforms enhance safety, 
              project authority, and build confidence across Saudi Arabia's 
              diverse security sectors.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>UNEOM Security Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>August 1, 2025</span>
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
                  <TagIcon className="h-5 w-5 text-slate-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-slate-600 hover:bg-slate-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-slate-700 to-gray-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Security Uniform Partner?</h3>
                <p className="text-sm text-slate-300 mb-4">
                  UNEOM serves 100+ security companies across Saudi Arabia.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-slate-700 px-4 py-2 rounded-lg font-bold hover:bg-slate-50 transition-colors"
                >
                  Get Security Quote
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Psychology of Security Uniforms</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In Saudi Arabia's rapidly growing security sector, uniforms serve a critical function 
                beyond mere identification. They are powerful psychological tools that establish authority, 
                build trust, and enhance the effectiveness of security personnel across every setting—from 
                corporate towers in Riyadh to mega-events in Jeddah.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/security/security_uniform_background.jpg"
                  alt="Professional security uniforms"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheckIcon className="h-6 w-6" />
                  Saudi Security Industry Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-slate-600">150K+</div>
                    <div className="text-sm text-gray-600">Security personnel in KSA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-600">SAR 15B</div>
                    <div className="text-sm text-gray-600">Security market value</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-600">500+</div>
                    <div className="text-sm text-gray-600">Licensed security companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-600">25%</div>
                    <div className="text-sm text-gray-600">Annual growth rate</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Authority Factors */}
            <section id="authority-factors" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Authority-Building Elements</h2>
              
              <div className="space-y-4">
                {authorityFactors.map((factor, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{factor.factor}</h3>
                    <p className="text-gray-600 mb-3">{factor.impact}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <span className="text-sm text-blue-700"><strong>Research:</strong> {factor.research}</span>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <span className="text-sm text-green-700"><strong>Application:</strong> {factor.application}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sector Guide */}
            <section id="sector-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sector-Specific Requirements</h2>
              
              <div className="space-y-8">
                {sectorRequirements.map((sector, index) => (
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
                        <p className="text-gray-600 mb-4">{sector.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Uniform Elements:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                              {sector.uniformElements.map((element, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                                  <span>{element}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <span className="text-xs font-semibold text-gray-500">Colors:</span>
                              <p className="text-sm text-gray-700">{sector.colorSchemes}</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <span className="text-xs font-semibold text-gray-500">Features:</span>
                              <p className="text-sm text-gray-700">{sector.specialFeatures}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Design Principles */}
            <section id="design-principles" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Principles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designPrinciples.map((principle, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">{principle.principle}</h3>
                    <p className="text-sm text-slate-600 mb-4">{principle.description}</p>
                    <ul className="space-y-2">
                      {principle.elements.map((element, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircleIcon className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          <span>{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Fabric Technology */}
            <section id="fabric-technology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Performance Fabrics</h2>
              
              <div className="space-y-4">
                {fabricTechnologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{tech.technology}</h3>
                      <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech.durability}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Best for: {tech.bestFor}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.benefits.map((benefit, i) => (
                        <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Saudi Regulations */}
            <section id="saudi-regulations" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Saudi Regulations & Licensing</h2>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200 mb-6">
                <div className="flex items-start gap-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Important Compliance Notice</h3>
                    <p className="text-sm text-red-800">
                      All security uniforms in Saudi Arabia must be approved by relevant authorities. 
                      Operating with non-compliant uniforms can result in fines and license revocation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {saudiRegulations.map((reg, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{reg.regulation}</h3>
                    <p className="text-sm text-gray-500 mb-4">Authority: {reg.authority}</p>
                    <ul className="space-y-2">
                      {reg.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <LockClosedIcon className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Guide</h2>
              
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">{step.phase}</h3>
                        <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                          {step.timeline}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
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
            <section className="bg-gradient-to-br from-slate-700 to-gray-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Equip Your Security Team for Success</h2>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  UNEOM is Saudi Arabia's trusted security uniform provider, serving major 
                  security companies with compliant, professional, and durable uniform solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors inline-flex items-center gap-2"
                  >
                    Request Security Consultation
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/industries/security"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    View Security Solutions
                  </Link>
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  )
}
