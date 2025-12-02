import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HeartIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BeakerIcon,
  UserGroupIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Evolution of Medical Scrubs: From Function to Professional Elegance | UNEOM Saudi',
  description: 'Comprehensive guide to medical scrubs evolution in Saudi Arabia. Explore the latest innovations in healthcare uniforms, antimicrobial fabrics, modest medical attire, and infection control standards for hospitals and clinics in Riyadh, Jeddah, and across KSA.',
  keywords: 'medical scrubs Saudi Arabia, healthcare uniforms KSA, hospital uniforms Riyadh, nursing scrubs Saudi, doctor uniforms, antimicrobial medical wear, modest healthcare attire, hijab medical uniforms, infection control uniforms, JCI compliant uniforms',
  openGraph: {
    title: 'Evolution of Medical Scrubs: From Function to Professional Elegance',
    description: 'How medical uniforms are transforming patient care and staff professionalism in Saudi healthcare',
    images: ['/images/healthcare/healthcare_medical_uniform.jpg'],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/medical-scrubs-evolution-saudi/',
    languages: {
      'en': '/blog/medical-scrubs-evolution-saudi/',
      'ar': '/ar/blog/medical-scrubs-evolution-saudi/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Healthcare Uniform Revolution' },
  { id: 'history', title: 'Historical Evolution' },
  { id: 'modern-innovations', title: 'Modern Fabric Innovations' },
  { id: 'infection-control', title: 'Infection Control Standards' },
  { id: 'modest-medical', title: 'Modest Medical Attire' },
  { id: 'department-guide', title: 'Department-Specific Guide' },
  { id: 'color-psychology', title: 'Color Psychology in Healthcare' },
  { id: 'future-trends', title: 'Future of Medical Uniforms' }
]

const fabricInnovations = [
  {
    technology: 'Silver Ion Antimicrobial',
    description: 'Embedded silver ions that destroy bacteria and prevent odor',
    benefits: ['Kills 99.9% of bacteria', 'Lasts 75+ wash cycles', 'Reduces infection risk'],
    applications: 'High-contact areas: ER, ICU, Surgery'
  },
  {
    technology: 'Fluid Barrier Technology',
    description: 'Microscopic barriers that repel liquids while maintaining breathability',
    benefits: ['Blocks blood and bodily fluids', 'Stays comfortable', 'Easy to clean'],
    applications: 'Surgery, Labor & Delivery, Trauma'
  },
  {
    technology: 'Moisture-Wicking Performance',
    description: 'Advanced fibers that pull moisture away from skin',
    benefits: ['Keeps staff dry', 'Reduces fatigue', 'Temperature regulation'],
    applications: 'All departments, especially high-activity roles'
  },
  {
    technology: '4-Way Stretch Fabric',
    description: 'Flexible materials that move with the body',
    benefits: ['Freedom of movement', 'Retains shape', 'Reduces strain'],
    applications: 'Nursing, Physical therapy, Emergency'
  },
  {
    technology: 'Wrinkle-Resistant Finish',
    description: 'Treatments that maintain crisp appearance throughout shifts',
    benefits: ['Professional look', 'Less ironing needed', 'Durable'],
    applications: 'Administration, Patient-facing roles'
  }
]

const departmentGuide = [
  {
    department: 'Emergency & Trauma',
    requirements: ['Fluid-resistant materials', 'High visibility colors', 'Reinforced construction', 'Quick-dry properties'],
    recommendedColors: 'Red or burgundy for quick identification',
    specialFeatures: 'Multiple pockets, ID badge loops, reinforced knees',
    image: '/images/healthcare/healthcare_medical_uniform.jpg'
  },
  {
    department: 'Surgery & Operating Theater',
    requirements: ['Sterile-compatible', 'Low-lint fabric', 'Comfortable for long procedures', 'Temperature appropriate'],
    recommendedColors: 'Green or blue to reduce eye strain',
    specialFeatures: 'Close-fit cuffs, disposable options, antimicrobial',
    image: '/images/products/medical/premium-surgical-gowns.jpg'
  },
  {
    department: 'Nursing & Patient Care',
    requirements: ['Comfortable for 12-hour shifts', 'Easy movement', 'Professional appearance', 'Stain resistant'],
    recommendedColors: 'Navy, ceil blue, or department-specific',
    specialFeatures: 'Functional pockets, pen slots, badge holders',
    image: '/images/healthcare/healthcare_nurce_uniform.jpg'
  },
  {
    department: 'Laboratory & Diagnostics',
    requirements: ['Chemical resistant', 'Easy decontamination', 'Full coverage', 'Modest design'],
    recommendedColors: 'White or light colors to show contamination',
    specialFeatures: 'Snap closures, sleeve cuffs, lab coat options',
    image: '/images/products/medical/lab-coat.jpg'
  },
  {
    department: 'Administration & Reception',
    requirements: ['Professional appearance', 'Comfortable for desk work', 'Brand representation', 'Modest options'],
    recommendedColors: 'Corporate colors aligned with hospital brand',
    specialFeatures: 'Tailored fits, modest cuts, elegant details',
    image: '/images/corporate/corporate_uniform_formal.jpg'
  }
]

const modestMedicalOptions = [
  {
    garment: 'Medical Hijab',
    features: ['Antimicrobial fabric', 'Secure fit for procedures', 'Color-matched to scrubs', 'Quick-dry material'],
    considerations: 'Must not interfere with stethoscope or PPE'
  },
  {
    garment: 'Long-Sleeve Underscrubs',
    features: ['Moisture-wicking', 'Form-fitting but modest', 'Complements scrub tops', 'Multiple lengths'],
    considerations: 'Cuffs must allow for proper hand hygiene'
  },
  {
    garment: 'Extended Length Tops',
    features: ['Hip-length coverage', 'Professional cut', 'Functional pockets', 'Variety of necklines'],
    considerations: 'Should not restrict movement or catch on equipment'
  },
  {
    garment: 'Wide-Leg Scrub Pants',
    features: ['Modest fit', 'Comfortable elastic waist', 'Durable fabric', 'Appropriate length'],
    considerations: 'Must be hemmed to prevent tripping hazards'
  }
]

const colorPsychology = [
  {
    color: 'Blue (Ceil/Navy)',
    psychological: 'Trust, calm, professionalism',
    practical: 'Hides stains, reduces anxiety',
    commonUse: 'Nursing, general wards'
  },
  {
    color: 'Green (Sage/Surgical)',
    psychological: 'Healing, balance, nature',
    practical: 'Reduces eye fatigue in surgery',
    commonUse: 'Operating rooms, recovery'
  },
  {
    color: 'White',
    psychological: 'Cleanliness, purity, authority',
    practical: 'Shows contamination clearly',
    commonUse: 'Doctors, lab technicians'
  },
  {
    color: 'Burgundy/Maroon',
    psychological: 'Urgency, importance, strength',
    practical: 'Hides blood stains',
    commonUse: 'Emergency, trauma'
  },
  {
    color: 'Purple',
    psychological: 'Compassion, dignity, specialty',
    practical: 'Distinctive identification',
    commonUse: 'Oncology, palliative care'
  }
]

const infectionControlStandards = [
  {
    standard: 'Fabric Selection',
    requirements: [
      'Tightly woven to prevent pathogen penetration',
      'Smooth surface that doesn\'t harbor bacteria',
      'Withstands high-temperature washing (60°C+)',
      'Compatible with hospital-grade detergents'
    ]
  },
  {
    standard: 'Laundering Protocol',
    requirements: [
      'Daily uniform changes recommended',
      'Hospital laundering preferred over home washing',
      'Segregation of contaminated items',
      'Proper bagging and transport procedures'
    ]
  },
  {
    standard: 'Fit & Coverage',
    requirements: [
      'Appropriate coverage without excess fabric',
      'Sleeves that allow proper hand hygiene',
      'No dangling accessories or loose threads',
      'Secure closures that stay fastened'
    ]
  },
  {
    standard: 'Replacement Schedule',
    requirements: [
      'Regular inspection for wear and damage',
      'Immediate replacement of torn items',
      'Retirement after visible wear',
      'Annual uniform refresh recommended'
    ]
  }
]

const futureTrends = [
  {
    trend: 'Smart Fabrics',
    description: 'Textiles embedded with sensors for health monitoring and contamination detection',
    timeline: '2025-2027',
    impact: 'Real-time safety alerts, patient data collection'
  },
  {
    trend: 'Sustainable Materials',
    description: 'Eco-friendly fabrics from recycled materials with full lifecycle management',
    timeline: '2024-2026',
    impact: 'Reduced environmental footprint, circular economy'
  },
  {
    trend: 'Personalized Fit Technology',
    description: '3D body scanning for perfectly fitted uniforms',
    timeline: '2025-2028',
    impact: 'Better comfort, reduced uniform waste'
  },
  {
    trend: 'Self-Sanitizing Fabrics',
    description: 'Materials that continuously destroy pathogens without washing',
    timeline: '2026-2030',
    impact: 'Constant protection, reduced laundering'
  }
]

export default function MedicalScrubsEvolutionPage() {
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
            <li><span className="text-gray-900 font-medium">Medical Scrubs Evolution</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/healthcare/healthcare_medical_uniform.jpg"
            alt="Medical Scrubs Evolution"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">
                Healthcare
              </span>
              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium border border-cyan-400/30">
                Medical Uniforms
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Evolution of Medical Scrubs: From Function to Professional Elegance
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how medical uniforms have transformed from basic utility wear to 
              sophisticated professional attire that enhances patient care and staff confidence 
              in Saudi Arabia's world-class healthcare facilities.
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
                <EyeIcon className="h-5 w-5" />
                <span>June 1, 2025</span>
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
                  <TagIcon className="h-5 w-5 text-blue-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Healthcare Uniforms?</h3>
                <p className="text-sm text-blue-100 mb-4">
                  UNEOM serves 50+ hospitals across Saudi Arabia with JCI-compliant uniforms.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Request Healthcare Quote
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Healthcare Uniform Revolution</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In Saudi Arabia's rapidly advancing healthcare sector, medical uniforms have evolved 
                from simple protective garments to sophisticated professional attire. Today's scrubs 
                combine cutting-edge fabric technology, infection control features, and professional 
                aesthetics—all while respecting cultural values and promoting patient confidence.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/healthcare/healthcare_medical_uniform.jpg"
                  alt="Modern medical professionals in scrubs"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <HeartIcon className="h-6 w-6" />
                  Saudi Healthcare by Numbers
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Hospitals in KSA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">200K+</div>
                    <div className="text-sm text-gray-600">Healthcare Workers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">45+</div>
                    <div className="text-sm text-gray-600">JCI Accredited Facilities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">SAR 180B</div>
                    <div className="text-sm text-gray-600">Healthcare Spending 2025</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Modern Innovations */}
            <section id="modern-innovations" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modern Fabric Innovations</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Today's medical scrubs incorporate advanced technologies that were unimaginable 
                just a decade ago:
              </p>

              <div className="space-y-6">
                {fabricInnovations.map((innovation, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900 text-lg">{innovation.technology}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {innovation.applications}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{innovation.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {innovation.benefits.map((benefit, i) => (
                        <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Infection Control */}
            <section id="infection-control" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Infection Control Standards</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Medical uniforms play a critical role in infection prevention. Saudi healthcare 
                facilities follow strict protocols aligned with international standards:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {infectionControlStandards.map((standard, index) => (
                  <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                      <ShieldCheckIcon className="h-5 w-5" />
                      {standard.standard}
                    </h3>
                    <ul className="space-y-2">
                      {standard.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                          <CheckCircleIcon className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Modest Medical */}
            <section id="modest-medical" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Modest Medical Attire</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Saudi healthcare facilities offer comprehensive modest options that meet both 
                religious requirements and professional standards:
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/healthcare/healthcare_hijab_doctor.jpg"
                  alt="Modest medical attire"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modestMedicalOptions.map((option, index) => (
                  <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-3">{option.garment}</h3>
                    <ul className="space-y-2 mb-4">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-purple-800">
                          <CheckCircleIcon className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-sm text-purple-700">
                        <strong>Note:</strong> {option.considerations}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Department Guide */}
            <section id="department-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Department-Specific Guide</h2>
              
              <div className="space-y-6">
                {departmentGuide.map((dept, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={dept.image}
                          alt={dept.department}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.department}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                            <ul className="space-y-1">
                              {dept.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm mb-2"><strong>Colors:</strong> {dept.recommendedColors}</p>
                            <p className="text-sm"><strong>Features:</strong> {dept.specialFeatures}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Color Psychology */}
            <section id="color-psychology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Color Psychology in Healthcare</h2>
              
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Color</th>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Psychological Effect</th>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Practical Benefit</th>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {colorPsychology.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.color}</td>
                        <td className="px-6 py-4 text-gray-600">{item.psychological}</td>
                        <td className="px-6 py-4 text-gray-600">{item.practical}</td>
                        <td className="px-6 py-4 text-gray-600">{item.commonUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Future Trends */}
            <section id="future-trends" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Future of Medical Uniforms</h2>
              
              <div className="space-y-4">
                {futureTrends.map((trend, index) => (
                  <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-indigo-900">{trend.trend}</h3>
                      <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">
                        {trend.timeline}
                      </span>
                    </div>
                    <p className="text-indigo-800 mb-3">{trend.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-indigo-700 font-medium">Impact: {trend.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Upgrade Your Healthcare Uniforms</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  UNEOM partners with leading Saudi hospitals to provide JCI-compliant, 
                  infection-control certified uniforms that enhance patient care and staff professionalism.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                  >
                    Request Healthcare Consultation
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
  )
}
