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
  FireIcon,
  BoltIcon,
  BeakerIcon,
  SunIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Industrial Safety Workwear in Saudi Arabia: Complete Compliance Guide 2025 | UNEOM',
  description: 'Comprehensive guide to industrial safety uniforms and workwear in Saudi Arabia. Learn about SASO standards, flame-resistant clothing, high-visibility gear, PPE requirements, and compliance for oil & gas, petrochemical, manufacturing, and construction sectors.',
  keywords: 'industrial safety uniforms Saudi Arabia, FR workwear KSA, flame resistant clothing, high visibility uniforms, PPE Saudi Arabia, SASO safety standards, oil gas workwear, petrochemical uniforms, construction safety gear, manufacturing safety clothing',
  openGraph: {
    title: 'Industrial Safety Workwear in Saudi Arabia: Complete Compliance Guide 2025',
    description: 'Essential guide to safety workwear compliance and best practices for Saudi industries',
    images: ['/images/industrial/saudi-safety-standards.jpg'],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/industrial-safety-workwear-saudi/',
    languages: {
      'en': '/blog/industrial-safety-workwear-saudi/',
      'ar': '/ar/blog/industrial-safety-workwear-saudi/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'Industrial Safety in Vision 2030' },
  { id: 'standards', title: 'Saudi & International Standards' },
  { id: 'hazard-protection', title: 'Hazard-Specific Protection' },
  { id: 'industry-guide', title: 'Industry-Specific Requirements' },
  { id: 'fabric-technology', title: 'Safety Fabric Technologies' },
  { id: 'compliance', title: 'Compliance & Certification' },
  { id: 'implementation', title: 'Implementation Best Practices' },
  { id: 'cost-benefit', title: 'Cost-Benefit Analysis' }
]

const safetyStandards = [
  {
    standard: 'SASO GSO ISO 11612',
    description: 'Protective clothing against heat and flame',
    application: 'Oil & gas, petrochemical, welding',
    requirement: 'Mandatory for flash fire environments'
  },
  {
    standard: 'SASO GSO ISO 20471',
    description: 'High-visibility warning clothing',
    application: 'Construction, roadwork, logistics',
    requirement: 'Required for work near vehicles/equipment'
  },
  {
    standard: 'SASO GSO IEC 61482',
    description: 'Protection against electric arc hazards',
    application: 'Electrical work, power stations',
    requirement: 'Mandatory for arc flash risk areas'
  },
  {
    standard: 'SASO GSO ISO 13688',
    description: 'General requirements for protective clothing',
    application: 'All industrial sectors',
    requirement: 'Base standard for all workwear'
  },
  {
    standard: 'ARAMCO Engineering Standards',
    description: 'Additional requirements for oil sector',
    application: 'Saudi Aramco operations',
    requirement: 'Contractor compliance mandatory'
  }
]

const hazardProtection = [
  {
    hazard: 'Flash Fire & Flame',
    icon: FireIcon,
    risks: ['Burns', 'Fatal injuries', 'Long-term scarring'],
    protection: [
      'Flame-resistant (FR) fabrics',
      'Self-extinguishing materials',
      'No synthetic melting risk',
      'Full body coverage'
    ],
    industries: 'Oil & Gas, Petrochemical, Welding',
    standards: 'NFPA 2112, ISO 11612'
  },
  {
    hazard: 'Electric Arc Flash',
    icon: BoltIcon,
    risks: ['Severe burns', 'Electric shock', 'Cardiac arrest'],
    protection: [
      'Arc-rated (AR) fabrics',
      'Appropriate ATPV rating',
      'No conductive elements',
      'FR undergarments'
    ],
    industries: 'Power Generation, Electrical, Utilities',
    standards: 'NFPA 70E, IEC 61482'
  },
  {
    hazard: 'Chemical Exposure',
    icon: BeakerIcon,
    risks: ['Skin burns', 'Respiratory issues', 'Long-term illness'],
    protection: [
      'Chemical-resistant barriers',
      'Appropriate permeation resistance',
      'Sealed seams where needed',
      'Compatible gloves and boots'
    ],
    industries: 'Petrochemical, Pharmaceutical, Agriculture',
    standards: 'ISO 16602, EN 13034'
  },
  {
    hazard: 'Heat Stress',
    icon: SunIcon,
    risks: ['Heat exhaustion', 'Reduced alertness', 'Accidents'],
    protection: [
      'Breathable FR fabrics',
      'Moisture-wicking technology',
      'Lightweight construction',
      'Cooling accessories'
    ],
    industries: 'All outdoor/hot environment work',
    standards: 'OSHA guidelines, local regulations'
  },
  {
    hazard: 'Low Visibility',
    icon: EyeIcon,
    risks: ['Vehicle strikes', 'Equipment collision', 'Falls'],
    protection: [
      'High-visibility colors',
      'Retroreflective tape',
      'Class 2/3 compliance',
      '360° visibility'
    ],
    industries: 'Construction, Logistics, Roadwork',
    standards: 'ISO 20471, ANSI 107'
  },
  {
    hazard: 'Mechanical Hazards',
    icon: WrenchScrewdriverIcon,
    risks: ['Cuts', 'Abrasions', 'Punctures'],
    protection: [
      'Reinforced construction',
      'Cut-resistant materials',
      'Padded impact zones',
      'Secure closures'
    ],
    industries: 'Manufacturing, Construction, Maintenance',
    standards: 'EN 388, ISO 13997'
  }
]

const industryRequirements = [
  {
    industry: 'Oil & Gas',
    description: 'Saudi Arabia\'s largest industrial sector with the most stringent safety requirements',
    mandatoryItems: [
      'FR coveralls (ATPV 8+ cal/cm²)',
      'FR hard hat liner',
      'Safety boots (steel toe, static dissipative)',
      'FR gloves for specific tasks',
      'Safety glasses/goggles',
      'H2S detection equipment (where required)'
    ],
    specialConsiderations: [
      'Saudi Aramco approval required for contractor uniforms',
      'Daily uniform inspection protocols',
      'No personal clothing under FR wear',
      'Specific color coding by contractor/role'
    ],
    image: '/images/industrial/saudi-petrochemical-workers.jpg'
  },
  {
    industry: 'Petrochemical',
    description: 'Complex chemical processing requiring multi-hazard protection',
    mandatoryItems: [
      'Chemical-resistant FR coveralls',
      'Chemical splash goggles',
      'Nitrile/chemical gloves',
      'Chemical-resistant boots',
      'Respiratory protection (task-specific)',
      'Emergency escape equipment'
    ],
    specialConsiderations: [
      'Chemical compatibility assessment required',
      'Breakthrough time documentation',
      'Decontamination procedures',
      'Medical surveillance programs'
    ],
    image: '/images/industrial/saudi-petrochemical-plant.jpg'
  },
  {
    industry: 'Construction',
    description: 'Dynamic environments with multiple hazard types',
    mandatoryItems: [
      'High-visibility vest/shirt (Class 2+)',
      'Hard hat with chin strap',
      'Safety boots (steel toe)',
      'Safety glasses',
      'Work gloves',
      'Fall protection (height work)'
    ],
    specialConsiderations: [
      'Heat stress management in summer',
      'Dust protection in desert conditions',
      'Night work visibility requirements',
      'Multiple contractor coordination'
    ],
    image: '/images/products/industrial/construction-1.jpg'
  },
  {
    industry: 'Manufacturing',
    description: 'Varied hazards depending on production type',
    mandatoryItems: [
      'Industry-appropriate coveralls',
      'Safety footwear',
      'Hearing protection',
      'Eye protection',
      'Machine-specific guards',
      'ESD protection (electronics)'
    ],
    specialConsiderations: [
      'Machine entanglement prevention',
      'Noise level assessments',
      'Ergonomic considerations',
      'Quality/safety color coding'
    ],
    image: '/images/industries/manufacturing/manufacturing_uniform_main.jpg'
  },
  {
    industry: 'Electrical & Utilities',
    description: 'Arc flash and electrical shock protection critical',
    mandatoryItems: [
      'Arc-rated clothing (appropriate ATPV)',
      'Insulated gloves (voltage rated)',
      'Dielectric footwear',
      'Arc-rated face shield',
      'Insulated tools',
      'Grounding equipment'
    ],
    specialConsiderations: [
      'Arc flash hazard analysis required',
      'Approach boundary definitions',
      'Daily PPE inspection',
      'Electrical work permits'
    ],
    image: '/images/products/industrial/electrical-maintenance-uniform-main.jpg'
  }
]

const fabricTechnologies = [
  {
    technology: 'Inherent FR Fabrics',
    description: 'Flame resistance built into the fiber structure',
    benefits: ['Permanent protection', 'Cannot wash out', 'Consistent performance'],
    materials: 'Nomex®, Kevlar®, PBI, FR Rayon blends',
    durability: 'Garment lifetime'
  },
  {
    technology: 'Treated FR Fabrics',
    description: 'Chemical treatments applied to base fabrics',
    benefits: ['Lower cost', 'Comfortable feel', 'Good protection'],
    materials: 'FR-treated cotton, FR cotton/nylon blends',
    durability: '50-100 wash cycles (industrial laundering)'
  },
  {
    technology: 'Moisture Management',
    description: 'Integrated wicking for comfort in Saudi heat',
    benefits: ['Reduces heat stress', 'Improves comfort', 'Extends wear time'],
    materials: 'FR fabrics with moisture-wicking finishes',
    durability: 'Garment lifetime'
  },
  {
    technology: 'Arc-Rated Technology',
    description: 'Specific protection against electrical arc flash',
    benefits: ['Quantified protection (ATPV)', 'Clear safety ratings', 'Compliance assurance'],
    materials: 'AR-rated FR fabrics with tested ATPV values',
    durability: 'Per manufacturer specifications'
  },
  {
    technology: 'High-Visibility Integration',
    description: 'Retroreflective materials in FR garments',
    benefits: ['Dual protection', 'Reduced layering', 'Better compliance'],
    materials: 'FR fabrics with FR-rated reflective tape',
    durability: '50+ wash cycles for reflectivity'
  }
]

const complianceChecklist = [
  {
    category: 'Documentation',
    items: [
      'Certificates of conformity for all PPE',
      'Test reports from accredited laboratories',
      'SASO registration documentation',
      'Manufacturer warranties and specifications',
      'Training records for PPE users'
    ]
  },
  {
    category: 'Selection Process',
    items: [
      'Hazard assessment documentation',
      'Risk evaluation for each job role',
      'PPE selection justification',
      'Compatibility assessment (multiple hazards)',
      'Comfort and usability evaluation'
    ]
  },
  {
    category: 'Maintenance Program',
    items: [
      'Inspection schedules and checklists',
      'Laundering protocols (FR certification)',
      'Repair vs. replacement criteria',
      'Storage requirements',
      'Retirement schedules'
    ]
  },
  {
    category: 'Training Requirements',
    items: [
      'Proper donning and doffing procedures',
      'Inspection before each use',
      'Limitations of protection',
      'Care and maintenance responsibilities',
      'Emergency procedures'
    ]
  }
]

const costBenefitData = [
  {
    factor: 'Quality FR Workwear',
    initialCost: 'Higher',
    longTermValue: 'Lower total cost of ownership',
    safetyImpact: 'Maximum protection',
    notes: 'Premium FR lasts 2-3x longer than budget options'
  },
  {
    factor: 'Proper Fit Programs',
    initialCost: 'Moderate',
    longTermValue: 'Reduced replacement, better compliance',
    safetyImpact: 'Optimal protection',
    notes: 'Ill-fitting PPE compromises safety'
  },
  {
    factor: 'Industrial Laundering',
    initialCost: 'Ongoing',
    longTermValue: 'Extends garment life, maintains FR properties',
    safetyImpact: 'Consistent protection',
    notes: 'Home washing can damage FR treatments'
  },
  {
    factor: 'Training Investment',
    initialCost: 'Moderate',
    longTermValue: 'Reduced incidents, better compliance',
    safetyImpact: 'Critical for effectiveness',
    notes: 'Untrained workers misuse PPE'
  }
]

export default function IndustrialSafetyWorkwearPage() {
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
            <li><span className="text-gray-900 font-medium">Industrial Safety Workwear</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/industrial/saudi-safety-standards.jpg"
            alt="Industrial Safety Workwear"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium border border-orange-400/30">
                Industrial Safety
              </span>
              <span className="bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full text-sm font-medium border border-red-400/30">
                Compliance Guide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Industrial Safety Workwear: Complete Saudi Compliance Guide 2025
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Essential guide to industrial safety uniforms, FR workwear, and PPE compliance 
              for Saudi Arabia's oil & gas, petrochemical, manufacturing, and construction sectors.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>UNEOM Industrial Safety Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>16 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>April 1, 2025</span>
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
                  <TagIcon className="h-5 w-5 text-orange-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Safety Alert */}
              <div className="mt-6 bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-5 w-5" />
                  Safety First
                </h3>
                <p className="text-sm text-red-700 mb-4">
                  Non-compliant workwear puts lives at risk. Always verify certifications.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors"
                >
                  Get Compliance Review
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industrial Safety in Vision 2030</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                As Saudi Arabia expands its industrial base under Vision 2030, workplace safety has 
                become a national priority. The Kingdom's industrial sector—spanning oil & gas, 
                petrochemicals, manufacturing, and construction—employs millions of workers who 
                depend on proper safety workwear to protect them from serious hazards.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/industrial/saudi-safety-standards.jpg"
                  alt="Saudi industrial safety standards"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-bold text-orange-900 mb-4">Saudi Industrial Safety Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">40%</div>
                    <div className="text-sm text-gray-600">Injury reduction with proper PPE</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">SAR 2B+</div>
                    <div className="text-sm text-gray-600">Annual PPE market value</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">15+</div>
                    <div className="text-sm text-gray-600">SASO safety standards</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">5M+</div>
                    <div className="text-sm text-gray-600">Industrial workers in KSA</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Standards */}
            <section id="standards" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Saudi & International Standards</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Saudi Arabia has adopted international safety standards through SASO (Saudi Standards, 
                Metrology and Quality Organization), with additional requirements from major operators 
                like Saudi Aramco:
              </p>

              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Standard</th>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Description</th>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {safetyStandards.map((std, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{std.standard}</td>
                        <td className="px-6 py-4 text-gray-600">{std.description}</td>
                        <td className="px-6 py-4 text-gray-600">{std.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Hazard Protection */}
            <section id="hazard-protection" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hazard-Specific Protection</h2>
              
              <div className="space-y-6">
                {hazardProtection.map((hazard, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-red-100 p-3 rounded-xl">
                        <hazard.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{hazard.hazard}</h3>
                        <p className="text-sm text-gray-500">{hazard.industries}</p>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                        {hazard.standards}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Risks:</h4>
                        <ul className="space-y-1">
                          {hazard.risks.map((risk, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-red-700">
                              <ExclamationTriangleIcon className="h-4 w-4" />
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Protection:</h4>
                        <ul className="space-y-1">
                          {hazard.protection.map((prot, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-green-700">
                              <CheckCircleIcon className="h-4 w-4" />
                              {prot}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Industry Guide */}
            <section id="industry-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry-Specific Requirements</h2>
              
              <div className="space-y-8">
                {industryRequirements.map((industry, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={industry.image}
                          alt={industry.industry}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.industry}</h3>
                        <p className="text-gray-600 mb-4">{industry.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Mandatory Items:</h4>
                            <ul className="space-y-1">
                              {industry.mandatoryItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Special Considerations:</h4>
                            <ul className="space-y-1">
                              {industry.specialConsiderations.map((consideration, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <ExclamationTriangleIcon className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span>{consideration}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Fabric Technology */}
            <section id="fabric-technology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Fabric Technologies</h2>
              
              <div className="space-y-4">
                {fabricTechnologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{tech.technology}</h3>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech.durability}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{tech.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-700">Materials: </span>
                        <span className="text-sm text-gray-600">{tech.materials}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tech.benefits.map((benefit, i) => (
                          <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            ✓ {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Compliance Checklist */}
            <section id="compliance" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance & Certification</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {complianceChecklist.map((category, index) => (
                  <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                          <CheckCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Ensure Your Workforce is Protected</h2>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                  UNEOM is Saudi Arabia's trusted industrial safety workwear provider, serving 
                  major oil & gas, petrochemical, and manufacturing companies with certified, 
                  compliant safety solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors inline-flex items-center gap-2"
                  >
                    Request Safety Assessment
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/industries/manufacturing"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    View Industrial Solutions
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
