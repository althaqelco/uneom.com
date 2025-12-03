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
  CheckCircleIcon,
  BeakerIcon,
  HeartIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Medical Hijab Design: Balancing Religious Requirements with Healthcare Standards | UNEOM',
  description: 'Comprehensive guide to medical hijab design that meets infection control standards while respecting Islamic dress requirements. Learn about antimicrobial fabrics, safety features, and best practices for healthcare hijabs in Saudi Arabian hospitals and clinics.',
  keywords: 'medical hijab Saudi Arabia, healthcare hijab design, infection control hijab, hospital modest wear, antimicrobial hijab, nurse hijab KSA, doctor hijab standards, Islamic medical attire, healthcare modest uniform, SFDA hijab guidelines',
  openGraph: {
    title: 'Medical Hijab Design: Balancing Religious Requirements with Healthcare Standards',
    description: 'Expert guide to designing medical hijabs that meet infection control and safety standards for Saudi Arabian healthcare professionals',
    images: ['/images/healthcare/healthcare_hijab_doctor.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-06-01T08:00:00Z',
    authors: ['UNEOM Healthcare Team'],
  },
  alternates: {
    canonical: '/blog/medical-hijab-healthcare-standards/',
    languages: {
      'en': '/blog/medical-hijab-healthcare-standards/',
      'ar': '/ar/blog/medical-hijab-healthcare-standards/',
    }
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Medical Hijab Design: Balancing Religious Requirements with Healthcare Standards',
  description: 'Comprehensive guide to medical hijab design for Saudi Arabian healthcare professionals',
  image: 'https://uneom.com/images/healthcare/healthcare_hijab_doctor.jpg',
  author: {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'UNEOM',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/uneom-logo.png'
    }
  },
  datePublished: '2025-06-01T08:00:00Z',
  dateModified: '2025-06-01T08:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/blog/medical-hijab-healthcare-standards/'
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'Faith Meets Healthcare' },
  { id: 'infection-control', title: 'Infection Control Requirements' },
  { id: 'design-features', title: 'Essential Design Features' },
  { id: 'fabric-technology', title: 'Antimicrobial Fabric Technology' },
  { id: 'department-guidelines', title: 'Department-Specific Guidelines' },
  { id: 'safety-standards', title: 'Safety & Compliance Standards' },
  { id: 'implementation', title: 'Hospital Implementation' },
  { id: 'care-maintenance', title: 'Care & Maintenance' }
]

const infectionControlStats = [
  {
    stat: '80%',
    description: 'of healthcare-associated infections are transmitted via hands and clothing',
    source: 'WHO Healthcare Infection Guidelines'
  },
  {
    stat: '99.9%',
    description: 'bacterial reduction possible with properly treated antimicrobial fabrics',
    source: 'Journal of Hospital Infection'
  },
  {
    stat: '47%',
    description: 'reduction in contamination when using disposable vs. reusable head coverings in OR',
    source: 'American Journal of Infection Control'
  },
  {
    stat: '100%',
    description: 'of Saudi healthcare facilities require head covering for female staff',
    source: 'Saudi Ministry of Health'
  }
]

const designFeatures = [
  {
    feature: 'Secure Fastening System',
    icon: ShieldCheckIcon,
    description: 'No-pin designs that eliminate sharps risks and maintain position during procedures',
    options: [
      'Magnetic closures (non-MRI areas)',
      'Snap buttons with fabric covers',
      'Integrated tie-back systems',
      'Velcro with soft backing',
      'Elastic under-cap designs'
    ],
    importance: 'Critical'
  },
  {
    feature: 'Full Coverage Design',
    icon: HeartIcon,
    description: 'Designs that provide complete coverage while meeting clinical requirements',
    options: [
      'Extended neck coverage',
      'Chin coverage options',
      'No gaps during movement',
      'Secure under-scrub integration',
      'Layered systems for OR'
    ],
    importance: 'Essential'
  },
  {
    feature: 'Breathability Zones',
    icon: SparklesIcon,
    description: 'Strategic ventilation that maintains comfort during long shifts',
    options: [
      'Mesh panels in non-clinical areas',
      'Moisture-wicking inner layers',
      'Breathable crown sections',
      'Temperature-regulating fabrics',
      'Sweat-absorbing bands'
    ],
    importance: 'High'
  },
  {
    feature: 'Easy Don/Doff Design',
    icon: ClockIcon,
    description: 'Quick removal for emergencies or when leaving contaminated areas',
    options: [
      'Single-pull release systems',
      'Pre-formed shapes',
      'Stretch fabric integration',
      'Clear front/back indicators',
      'Color-coded sizing'
    ],
    importance: 'Critical'
  },
  {
    feature: 'Fluid Resistance',
    icon: BeakerIcon,
    description: 'Protection against blood, bodily fluids, and chemical splashes',
    options: [
      'Fluid-repellent outer layer',
      'Sealed seam construction',
      'Splash guard integration',
      'Waterproof options for surgery',
      'Easy-clean surfaces'
    ],
    importance: 'Essential'
  }
]

const fabricTechnology = [
  {
    fabric: 'Antimicrobial Polyester Blend',
    protection: 'Excellent',
    comfort: 'Good',
    durability: '200+ washes',
    features: [
      'Silver-ion technology',
      'Odor resistance',
      'Quick-dry properties',
      'Color retention'
    ],
    bestFor: 'General ward nursing, outpatient clinics'
  },
  {
    fabric: 'Medical-Grade Cotton Blend',
    protection: 'Good',
    comfort: 'Excellent',
    durability: '150+ washes',
    features: [
      'Natural breathability',
      'Soft against skin',
      'Antimicrobial treatment',
      'Hypoallergenic'
    ],
    bestFor: 'Long-shift staff, sensitive skin'
  },
  {
    fabric: 'Barrier Fabric Technology',
    protection: 'Superior',
    comfort: 'Moderate',
    durability: '100+ washes',
    features: [
      'Fluid-impermeable layer',
      'Viral barrier protection',
      'Splash resistance',
      'Sterilization compatible'
    ],
    bestFor: 'Operating rooms, ICU, emergency'
  },
  {
    fabric: 'Disposable SMS Fabric',
    protection: 'Maximum',
    comfort: 'Basic',
    durability: 'Single use',
    features: [
      'Complete sterility',
      'No laundering required',
      'Consistent protection',
      'Easy disposal'
    ],
    bestFor: 'Surgery, isolation units, high-risk procedures'
  }
]

const departmentGuidelines = [
  {
    department: 'Operating Room (OR)',
    requirements: [
      'Disposable or sterilizable hijab required',
      'Full tuck under surgical cap',
      'No loose fabric allowed',
      'Color coordination with OR scrubs',
      'Change between procedures'
    ],
    restrictions: [
      'No metal fasteners',
      'No flowing fabric',
      'Must fit under surgical hood',
      'No personal hijabs allowed'
    ],
    recommended: 'Disposable surgical hijab or sterilizable under-cap system'
  },
  {
    department: 'Intensive Care Unit (ICU)',
    requirements: [
      'Fluid-resistant fabric mandatory',
      'Antimicrobial treatment required',
      'Easy don/doff for emergencies',
      'Multiple daily changes available',
      'Secure fit during CPR'
    ],
    restrictions: [
      'No loose ends',
      'Minimal draping',
      'No decorative elements',
      'Must not interfere with stethoscope'
    ],
    recommended: 'Fitted antimicrobial hijab with snap closures'
  },
  {
    department: 'Emergency Department (ED)',
    requirements: [
      'Quick-release design for trauma',
      'Fluid-resistant properties',
      'High visibility in chaos',
      'Durable for physical demands',
      'Easy to clean between patients'
    ],
    restrictions: [
      'No long draping styles',
      'Secure during rapid movement',
      'Must allow face shield wear',
      'No trip hazards'
    ],
    recommended: 'Sporty fitted style with fluid-resistant coating'
  },
  {
    department: 'General Wards',
    requirements: [
      'Professional appearance',
      'Comfort for 8-12 hour shifts',
      'Antimicrobial fabric',
      'Easy laundering',
      'Multiple color options'
    ],
    restrictions: [
      'Must be hospital-provided or approved',
      'Neutral or department colors',
      'No excessive decoration',
      'Pins discouraged'
    ],
    recommended: 'Standard medical hijab with antimicrobial treatment'
  },
  {
    department: 'Outpatient Clinics',
    requirements: [
      'Professional, welcoming appearance',
      'Patient-friendly colors',
      'Comfortable for desk work',
      'Easy care fabric',
      'Brand consistency'
    ],
    restrictions: [
      'Within hospital dress code',
      'Coordinated with uniform',
      'Clean and pressed',
      'No clinical wear outside clinic'
    ],
    recommended: 'Elegant professional hijab in clinic colors'
  },
  {
    department: 'Pediatrics',
    requirements: [
      'Child-friendly appearance',
      'Easy to clean (kids touch!)',
      'Non-threatening colors',
      'Secure fit for active work',
      'Stain-resistant'
    ],
    restrictions: [
      'No small detachable parts',
      'No sharp edges',
      'Wash after each shift',
      'Dedicated pediatric set'
    ],
    recommended: 'Colorful, secure-fit hijab with antimicrobial coating'
  }
]

const safetyStandards = [
  {
    standard: 'SFDA Healthcare Textile Requirements',
    requirements: [
      'Registered medical textile classification',
      'Antimicrobial efficacy testing',
      'Biocompatibility certification',
      'Flammability standards compliance',
      'Quality management certification'
    ]
  },
  {
    standard: 'CBAHI Accreditation Standards',
    requirements: [
      'Infection prevention compliance',
      'Personal protective equipment policies',
      'Staff dress code documentation',
      'Regular uniform audits',
      'Training on proper use'
    ]
  },
  {
    standard: 'JCI International Standards',
    requirements: [
      'Evidence-based infection control',
      'Staff safety protocols',
      'Documentation of PPE policies',
      'Regular compliance monitoring',
      'Incident reporting systems'
    ]
  }
]

const implementationSteps = [
  {
    phase: 'Assessment Phase',
    duration: '4-6 weeks',
    tasks: [
      'Survey current hijab practices',
      'Identify department-specific needs',
      'Consult with infection control',
      'Gather staff input and concerns',
      'Review budget constraints'
    ]
  },
  {
    phase: 'Design & Procurement',
    duration: '8-12 weeks',
    tasks: [
      'Develop department-specific designs',
      'Source compliant fabrics',
      'Create size range specifications',
      'Sample testing with staff',
      'Finalize supplier contracts'
    ]
  },
  {
    phase: 'Policy Development',
    duration: '4-6 weeks',
    tasks: [
      'Write comprehensive hijab policy',
      'Define department requirements',
      'Establish laundering protocols',
      'Create compliance procedures',
      'Develop training materials'
    ]
  },
  {
    phase: 'Training & Rollout',
    duration: '4-8 weeks',
    tasks: [
      'Train infection control champions',
      'Department-by-department rollout',
      'Individual fitting sessions',
      'Compliance monitoring setup',
      'Feedback collection system'
    ]
  },
  {
    phase: 'Monitoring & Improvement',
    duration: 'Ongoing',
    tasks: [
      'Regular compliance audits',
      'Staff satisfaction surveys',
      'Infection rate monitoring',
      'Product quality tracking',
      'Continuous improvement'
    ]
  }
]

const careMaintenance = [
  {
    aspect: 'Daily Care',
    guidelines: [
      'Change hijab daily minimum, more if contaminated',
      'Store in clean, dry location when not in use',
      'Do not share hijabs between staff members',
      'Inspect for damage before each use',
      'Remove immediately if contamination occurs'
    ]
  },
  {
    aspect: 'Laundering',
    guidelines: [
      'Wash at 60°C minimum (healthcare standard)',
      'Use hospital-approved detergent',
      'Do not mix with home laundry',
      'Tumble dry on high heat when fabric allows',
      'Iron on appropriate setting for disinfection'
    ]
  },
  {
    aspect: 'Replacement',
    guidelines: [
      'Replace every 6-12 months depending on use',
      'Immediate replacement if damaged or stained',
      'Track wash cycles for antimicrobial fabrics',
      'Maintain minimum 5 hijabs per staff member',
      'Budget for regular replacement cycle'
    ]
  },
  {
    aspect: 'Storage',
    guidelines: [
      'Store in designated clean area',
      'Use individual labeled bags or lockers',
      'Keep away from contaminated items',
      'Ensure proper ventilation',
      'Separate clean from soiled'
    ]
  }
]

export default function MedicalHijabHealthcareStandardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4 border-b" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><span className="text-gray-900 font-medium">Medical Hijab Healthcare Standards</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-teal-900 via-cyan-800 to-teal-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/healthcare/healthcare_hijab_doctor.jpg"
              alt="Medical Hijab Professional"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-cyan-900/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-400/30">
                  Healthcare
                </span>
                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium border border-cyan-400/30">
                  Infection Control
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Medical Hijab: Where Faith Meets Healthcare Safety
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A comprehensive guide to designing medical hijabs that honor Islamic dress 
                requirements while meeting stringent infection control and safety standards 
                in Saudi Arabian healthcare facilities.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Healthcare Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>14 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-5 w-5" />
                  <span>June 1, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TagIcon className="h-5 w-5 text-teal-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="mt-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Need Medical Hijabs?</h3>
                  <p className="text-sm text-teal-100 mb-4">
                    UNEOM provides compliant medical hijabs for Saudi Arabia's leading hospitals.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-white text-teal-600 px-4 py-2 rounded-lg font-bold hover:bg-teal-50 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Faith Meets Healthcare Safety</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  In Saudi Arabian healthcare facilities, the hijab is not just a religious 
                  requirement—it's an integral part of professional medical attire that must 
                  meet the same rigorous safety and infection control standards as any other 
                  piece of medical clothing. Designing medical hijabs that honor both faith 
                  and safety is a challenge that requires expertise, innovation, and deep 
                  understanding of both domains.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/healthcare/healthcare_hijab_doctor.jpg"
                    alt="Healthcare professional wearing medical hijab"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="font-bold text-gray-900 mb-3">The Dual Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    Medical hijabs must simultaneously achieve two critical objectives:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-teal-700 mb-2">Religious Compliance</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Complete hair coverage</li>
                        <li>• Neck and chest coverage</li>
                        <li>• Modest, dignified appearance</li>
                        <li>• Comfortable for prayer times</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-cyan-700 mb-2">Clinical Safety</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Infection control compliance</li>
                        <li>• No contamination risk</li>
                        <li>• Safe fastening systems</li>
                        <li>• Easy emergency removal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Infection Control */}
              <section id="infection-control" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Infection Control Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Understanding infection control is fundamental to medical hijab design. 
                  Head coverings in healthcare settings are potential vectors for pathogen 
                  transmission if not properly designed and managed.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {infectionControlStats.map((item, index) => (
                    <div key={index} className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                      <div className="text-4xl font-bold text-teal-600 mb-2">{item.stat}</div>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                      <p className="text-xs text-gray-500">Source: {item.source}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <div className="flex items-start gap-3">
                    <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-amber-900 mb-2">Critical Consideration</h3>
                      <p className="text-amber-800">
                        Standard fashion hijabs are NOT suitable for clinical environments. 
                        Medical hijabs must be specifically designed with antimicrobial properties, 
                        proper fastening systems, and appropriate fabric technology to prevent 
                        healthcare-associated infections.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Design Features */}
              <section id="design-features" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Design Features</h2>
                
                <div className="space-y-6">
                  {designFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-teal-100 p-3 rounded-xl">
                          <feature.icon className="h-6 w-6 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-900">{feature.feature}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              feature.importance === 'Critical' ? 'bg-red-100 text-red-700' :
                              feature.importance === 'Essential' ? 'bg-orange-100 text-orange-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {feature.importance}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">{feature.description}</p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Design Options:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {feature.options.map((option, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-teal-500 flex-shrink-0" />
                                  <span>{option}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Fabric Technology */}
              <section id="fabric-technology" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Antimicrobial Fabric Technology</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The fabric choice for medical hijabs directly impacts infection control 
                  effectiveness, wearer comfort, and product longevity:
                </p>

                <div className="space-y-6">
                  {fabricTechnology.map((fabric, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900">{fabric.fabric}</h3>
                        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                          {fabric.durability}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <span className="text-xs text-gray-500">Protection</span>
                          <p className={`font-bold ${
                            fabric.protection === 'Maximum' || fabric.protection === 'Superior' ? 'text-green-600' :
                            fabric.protection === 'Excellent' ? 'text-teal-600' :
                            'text-blue-600'
                          }`}>{fabric.protection}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">Comfort</span>
                          <p className={`font-bold ${
                            fabric.comfort === 'Excellent' ? 'text-green-600' :
                            fabric.comfort === 'Good' ? 'text-blue-600' :
                            'text-gray-600'
                          }`}>{fabric.comfort}</p>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">Best For</span>
                          <p className="font-medium text-gray-700 text-sm">{fabric.bestFor}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {fabric.features.map((feature, i) => (
                          <span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Department Guidelines */}
              <section id="department-guidelines" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Department-Specific Guidelines</h2>
                
                <div className="space-y-6">
                  {departmentGuidelines.map((dept, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-4">
                        <h3 className="font-bold text-white text-lg">{dept.department}</h3>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                              <CheckCircleIcon className="h-5 w-5 text-green-500" />
                              Requirements
                            </h4>
                            <ul className="space-y-1">
                              {dept.requirements.map((req, i) => (
                                <li key={i} className="text-sm text-gray-600">• {req}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                              <ExclamationTriangleIcon className="h-5 w-5 text-amber-500" />
                              Restrictions
                            </h4>
                            <ul className="space-y-1">
                              {dept.restrictions.map((res, i) => (
                                <li key={i} className="text-sm text-gray-600">• {res}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-4">
                          <span className="text-sm font-bold text-teal-800">Recommended: </span>
                          <span className="text-sm text-teal-700">{dept.recommended}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Safety Standards */}
              <section id="safety-standards" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Compliance Standards</h2>
                
                <div className="space-y-6">
                  {safetyStandards.map((standard, index) => (
                    <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <DocumentCheckIcon className="h-6 w-6 text-blue-600" />
                        <h3 className="font-bold text-blue-900">{standard.standard}</h3>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {standard.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                            <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hospital Implementation Guide</h2>
                
                <div className="space-y-6">
                  {implementationSteps.map((phase, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                          <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                        </div>
                        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Care & Maintenance */}
              <section id="care-maintenance" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Care & Maintenance</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {careMaintenance.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <SparklesIcon className="h-5 w-5 text-teal-600" />
                        {item.aspect}
                      </h3>
                      <ul className="space-y-2">
                        {item.guidelines.map((guideline, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            <span>{guideline}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Equip Your Healthcare Team with Compliant Medical Hijabs</h2>
                  <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                    UNEOM partners with Saudi Arabia's leading hospitals to provide medical hijabs 
                    that meet the highest standards of infection control while honoring religious requirements.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-white text-teal-600 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors inline-flex items-center gap-2"
                    >
                      Request Consultation
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/industries/healthcare"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      View Healthcare Solutions
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


