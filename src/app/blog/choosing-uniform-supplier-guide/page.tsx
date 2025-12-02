import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckBadgeIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  StarIcon,
  CurrencyDollarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ScaleIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'How to Choose the Perfect Uniform Supplier for Your Company in 2025 | UNEOM Guide',
  description: 'Complete guide to selecting the ideal uniform supplier in Saudi Arabia. Learn about quality standards, pricing factors, delivery reliability, customization options, and key evaluation criteria for corporate, healthcare, hospitality, and industrial uniforms.',
  keywords: 'uniform supplier Saudi Arabia, workwear vendor selection, corporate uniform procurement, best uniform company KSA, uniform quality standards, bulk uniform ordering, custom uniform manufacturer, professional attire supplier Riyadh Jeddah Dammam',
  openGraph: {
    title: 'How to Choose the Perfect Uniform Supplier for Your Company in 2025',
    description: 'Expert guide to evaluating and selecting uniform suppliers in Saudi Arabia',
    images: ['/images/services/consultation-meeting.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-20T08:00:00Z',
    authors: ['UNEOM Procurement Team'],
  },
  alternates: {
    canonical: '/blog/choosing-uniform-supplier-guide/',
    languages: {
      'en': '/blog/choosing-uniform-supplier-guide/',
      'ar': '/ar/blog/choosing-uniform-supplier-guide/',
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
  '@type': 'HowTo',
  name: 'How to Choose the Perfect Uniform Supplier',
  description: 'Step-by-step guide to selecting the ideal uniform supplier for your business in Saudi Arabia',
  image: 'https://uneom.com/images/services/consultation-meeting.jpg',
  totalTime: 'P2W',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'SAR',
    value: 'Varies'
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Define Your Requirements',
      text: 'Identify your uniform needs including quantity, quality standards, and customization requirements'
    },
    {
      '@type': 'HowToStep',
      name: 'Research Potential Suppliers',
      text: 'Create a shortlist of suppliers based on reputation, certifications, and industry experience'
    },
    {
      '@type': 'HowToStep',
      name: 'Request and Compare Quotes',
      text: 'Obtain detailed quotes and compare pricing, quality, and value-added services'
    },
    {
      '@type': 'HowToStep',
      name: 'Evaluate Samples',
      text: 'Request and test product samples for quality, comfort, and durability'
    },
    {
      '@type': 'HowToStep',
      name: 'Make Your Decision',
      text: 'Select the supplier that best meets your criteria and negotiate final terms'
    }
  ]
}

const tableOfContents = [
  { id: 'introduction', title: 'Why Supplier Selection Matters' },
  { id: 'requirements', title: 'Defining Your Requirements' },
  { id: 'evaluation-criteria', title: 'Key Evaluation Criteria' },
  { id: 'quality-standards', title: 'Quality Standards & Certifications' },
  { id: 'pricing', title: 'Understanding Pricing Factors' },
  { id: 'red-flags', title: 'Red Flags to Watch For' },
  { id: 'checklist', title: 'Supplier Evaluation Checklist' },
  { id: 'negotiation', title: 'Negotiation Tips' }
]

const evaluationCriteria = [
  {
    icon: CheckBadgeIcon,
    title: 'Quality & Craftsmanship',
    weight: '30%',
    description: 'The foundation of a good uniform program. Poor quality leads to frequent replacements, employee complaints, and brand damage.',
    checkpoints: [
      'Fabric quality and durability testing',
      'Stitching and construction standards',
      'Color fastness after multiple washes',
      'Size consistency across batches',
      'Finishing details and overall presentation'
    ]
  },
  {
    icon: TruckIcon,
    title: 'Delivery & Reliability',
    weight: '25%',
    description: 'Consistent, on-time delivery is crucial for maintaining uniform inventory and meeting operational needs.',
    checkpoints: [
      'Average lead time for standard orders',
      'Rush order capabilities and costs',
      'Track record of on-time delivery',
      'Inventory management options',
      'Delivery coverage across Saudi Arabia'
    ]
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Pricing & Value',
    weight: '20%',
    description: 'While cost matters, the cheapest option rarely provides the best value. Consider total cost of ownership.',
    checkpoints: [
      'Transparent pricing structure',
      'Volume discount programs',
      'Hidden costs (setup, shipping, etc.)',
      'Payment terms flexibility',
      'Long-term pricing stability'
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Service & Support',
    weight: '15%',
    description: 'Excellent customer service ensures smooth operations and quick resolution of any issues.',
    checkpoints: [
      'Dedicated account management',
      'Response time to inquiries',
      'After-sales support quality',
      'Returns and exchange policies',
      'Technical consultation availability'
    ]
  },
  {
    icon: ScaleIcon,
    title: 'Customization Capabilities',
    weight: '10%',
    description: 'The ability to customize uniforms to your brand specifications sets your organization apart.',
    checkpoints: [
      'Logo embroidery and printing options',
      'Custom color matching abilities',
      'Bespoke design services',
      'Modification flexibility',
      'Sample development process'
    ]
  }
]

const qualityCertifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System certification ensuring consistent quality processes',
    importance: 'Critical',
    what_it_means: 'The supplier has documented quality procedures and continuous improvement processes'
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Certification that textiles are free from harmful substances',
    importance: 'High',
    what_it_means: 'Fabrics are safe for prolonged skin contact and meet health standards'
  },
  {
    name: 'SASO Certification',
    description: 'Saudi Standards, Metrology and Quality Organization compliance',
    importance: 'Required',
    what_it_means: 'Products meet Saudi Arabian regulatory requirements for sale in the Kingdom'
  },
  {
    name: 'ISO 14001',
    description: 'Environmental Management System certification',
    importance: 'Growing',
    what_it_means: 'Supplier demonstrates commitment to environmental responsibility and sustainability'
  },
  {
    name: 'WRAP Certification',
    description: 'Worldwide Responsible Accredited Production',
    importance: 'Important',
    what_it_means: 'Ethical manufacturing practices including fair labor and safe working conditions'
  }
]

const pricingFactors = [
  {
    factor: 'Fabric Type & Quality',
    impact: 'High',
    description: 'Premium fabrics like organic cotton, performance blends, or specialty materials significantly affect pricing.',
    tip: 'Request fabric specifications and compare GSM (grams per square meter) across suppliers'
  },
  {
    factor: 'Order Volume',
    impact: 'High',
    description: 'Larger orders typically receive better per-unit pricing due to economies of scale.',
    tip: 'Negotiate volume tiers and consider consolidating orders across departments'
  },
  {
    factor: 'Customization Level',
    impact: 'Medium-High',
    description: 'Embroidery, printing, custom colors, and bespoke designs add to the base cost.',
    tip: 'Get itemized quotes showing base cost vs. customization costs'
  },
  {
    factor: 'Delivery Speed',
    impact: 'Medium',
    description: 'Rush orders and expedited shipping increase costs significantly.',
    tip: 'Plan orders in advance to avoid rush fees - standard lead times save money'
  },
  {
    factor: 'Value-Added Services',
    impact: 'Medium',
    description: 'Services like inventory management, individual packaging, or direct employee delivery.',
    tip: 'Evaluate which services provide genuine value vs. unnecessary costs'
  },
  {
    factor: 'Contract Length',
    impact: 'Medium',
    description: 'Longer-term commitments often unlock better pricing and priority service.',
    tip: 'Balance commitment length with flexibility needs and supplier performance'
  }
]

const redFlags = [
  {
    flag: 'No Physical Presence in Saudi Arabia',
    severity: 'High',
    explanation: 'Without local operations, resolving issues, ensuring quality, and meeting deadlines becomes problematic.',
    alternative: 'Choose suppliers with showrooms, warehouses, or offices in the Kingdom'
  },
  {
    flag: 'Reluctance to Provide Samples',
    severity: 'High',
    explanation: 'Quality suppliers are confident in their products and readily provide samples for evaluation.',
    alternative: 'Request samples before placing bulk orders - preferably in multiple sizes'
  },
  {
    flag: 'Unclear Pricing or Hidden Fees',
    severity: 'High',
    explanation: 'Lack of transparency often leads to unexpected costs and budget overruns.',
    alternative: 'Demand detailed, itemized quotes including all fees, taxes, and shipping costs'
  },
  {
    flag: 'No References or Case Studies',
    severity: 'Medium-High',
    explanation: 'Established suppliers should have a portfolio of successful client relationships.',
    alternative: 'Request references from similar companies in your industry'
  },
  {
    flag: 'Extremely Low Prices',
    severity: 'Medium',
    explanation: 'Prices significantly below market rates often indicate quality compromises.',
    alternative: 'Compare quotes from multiple suppliers and investigate unusually low bids'
  },
  {
    flag: 'Poor Communication',
    severity: 'Medium',
    explanation: 'Slow responses during sales often predict worse service after purchase.',
    alternative: 'Evaluate response times and communication quality during the evaluation phase'
  },
  {
    flag: 'No Quality Guarantee',
    severity: 'Medium-High',
    explanation: 'Reputable suppliers stand behind their products with clear warranty terms.',
    alternative: 'Ensure written guarantees covering defects, color consistency, and sizing'
  }
]

const supplierChecklist = [
  {
    category: 'Company Credentials',
    items: [
      'Valid Commercial Registration (CR) in Saudi Arabia',
      'Relevant industry certifications (ISO, SASO, etc.)',
      'Minimum 3-5 years of operational history',
      'Insurance coverage for products and operations',
      'Membership in industry associations'
    ]
  },
  {
    category: 'Production Capabilities',
    items: [
      'In-house manufacturing or vetted factory partnerships',
      'Capacity to handle your volume requirements',
      'Quality control processes documented',
      'Ability to scale with your growth',
      'Technology and equipment standards'
    ]
  },
  {
    category: 'Product Quality',
    items: [
      'Sample quality meets expectations',
      'Fabric testing reports available',
      'Consistent sizing across samples',
      'Wash testing results provided',
      'Color matching capabilities demonstrated'
    ]
  },
  {
    category: 'Service Standards',
    items: [
      'Dedicated account manager assigned',
      'Clear communication channels established',
      'Order tracking system available',
      'Returns/exchange policy documented',
      'After-sales support structure in place'
    ]
  },
  {
    category: 'Commercial Terms',
    items: [
      'Pricing transparent and competitive',
      'Payment terms acceptable',
      'Delivery timelines realistic',
      'Contract terms fair and balanced',
      'Volume discount program available'
    ]
  }
]

const negotiationTips = [
  {
    tip: 'Come Prepared with Market Research',
    description: 'Know typical pricing ranges and what competitors offer. This knowledge gives you leverage and ensures fair negotiations.'
  },
  {
    tip: 'Bundle Services for Better Value',
    description: 'Negotiate package deals including design, production, inventory management, and delivery for comprehensive discounts.'
  },
  {
    tip: 'Discuss Long-Term Partnership Benefits',
    description: 'Suppliers often offer better terms for committed, long-term relationships. Express your interest in ongoing partnership.'
  },
  {
    tip: 'Request Trial Orders',
    description: 'Before committing to large volumes, negotiate smaller trial orders to validate quality and service.'
  },
  {
    tip: 'Include Performance Clauses',
    description: 'Build in delivery guarantees, quality standards, and remedies for non-compliance to protect your interests.'
  },
  {
    tip: 'Don\'t Sacrifice Quality for Price',
    description: 'Focus on total value including quality, reliability, and service. The cheapest option often costs more long-term.'
  }
]

export default function ChoosingUniformSupplierGuidePage() {
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
              <li><span className="text-gray-900 font-medium">Choosing Uniform Supplier Guide</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/services/consultation-meeting.jpg"
              alt="Choosing Uniform Supplier"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">
                  Procurement Guide
                </span>
                <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-400/30">
                  Expert Tips
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                How to Choose the Perfect Uniform Supplier for Your Company
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A comprehensive guide to evaluating, selecting, and partnering with the right 
                uniform supplier in Saudi Arabia. Make informed decisions that impact quality, 
                cost, and employee satisfaction.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Procurement Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  <span>January 20, 2025</span>
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

                {/* Quick Download */}
                <div className="mt-6 bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="text-lg font-bold text-emerald-900 mb-3">Free Resource</h3>
                  <p className="text-sm text-emerald-700 mb-4">
                    Download our comprehensive Supplier Evaluation Scorecard
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    Get Free Template
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BuildingOfficeIcon className="h-8 w-8 text-emerald-600" />
                  Why Supplier Selection Matters
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing the right uniform supplier is one of the most impactful procurement decisions 
                  your organization will make. The uniforms your employees wear represent your brand, 
                  affect employee morale and productivity, and significantly impact your operational budget.
                </p>

                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mb-8">
                  <h3 className="font-bold text-emerald-900 mb-4">The True Cost of Poor Supplier Selection</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">Higher replacement costs with low-quality uniforms</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">25%</div>
                      <div className="text-sm text-gray-600">Productivity loss from uncomfortable workwear</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">3x</div>
                      <div className="text-sm text-gray-600">More time spent managing poor suppliers</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  This guide provides a systematic approach to evaluating uniform suppliers, helping 
                  you avoid common pitfalls and build a partnership that delivers long-term value.
                </p>
              </section>

              {/* Requirements Section */}
              <section id="requirements" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Defining Your Requirements</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Before approaching suppliers, clearly define what you need. Well-documented 
                  requirements lead to better quotes, fewer misunderstandings, and more successful outcomes.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Requirements Checklist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Quantitative Needs</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Total number of employees requiring uniforms</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Number of uniform sets per employee</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Size distribution across your workforce</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Annual replacement rate estimate</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Budget range and payment preferences</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Qualitative Needs</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Specific style or design requirements</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Brand colors and customization needs</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Fabric preferences and performance requirements</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Industry-specific compliance needs</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Sustainability and ethical sourcing priorities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Evaluation Criteria */}
              <section id="evaluation-criteria" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Evaluation Criteria</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Use these weighted criteria to objectively evaluate potential suppliers. 
                  Adjust weights based on your organization's specific priorities.
                </p>

                <div className="space-y-6">
                  {evaluationCriteria.map((criteria, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-emerald-100 p-3 rounded-xl">
                          <criteria.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-900">{criteria.title}</h3>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold">
                              Weight: {criteria.weight}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-2">{criteria.description}</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Evaluation Checkpoints:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {criteria.checkpoints.map((checkpoint, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                              <CheckCircleIcon className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                              <span>{checkpoint}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quality Standards */}
              <section id="quality-standards" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Standards & Certifications</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Certifications provide independent validation of supplier capabilities. 
                  Look for these key certifications when evaluating uniform suppliers:
                </p>

                <div className="space-y-4">
                  {qualityCertifications.map((cert, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{cert.name}</h3>
                          <p className="text-gray-600 text-sm">{cert.description}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          cert.importance === 'Critical' ? 'bg-red-100 text-red-700' :
                          cert.importance === 'Required' ? 'bg-orange-100 text-orange-700' :
                          cert.importance === 'High' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {cert.importance}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-gray-700 text-sm">
                          <strong>What it means:</strong> {cert.what_it_means}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing Section */}
              <section id="pricing" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Pricing Factors</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Uniform pricing involves multiple variables. Understanding these factors helps 
                  you compare quotes accurately and negotiate effectively.
                </p>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Factor</th>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Impact</th>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Pro Tip</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {pricingFactors.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="font-semibold text-gray-900">{item.factor}</div>
                            <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.impact === 'High' ? 'bg-red-100 text-red-700' :
                              item.impact === 'Medium-High' ? 'bg-orange-100 text-orange-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {item.impact}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{item.tip}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Red Flags */}
              <section id="red-flags" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
                  Red Flags to Watch For
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Protect your organization by watching for these warning signs during supplier evaluation:
                </p>

                <div className="space-y-4">
                  {redFlags.map((item, index) => (
                    <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-red-900">{item.flag}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.severity === 'High' ? 'bg-red-200 text-red-800' :
                          'bg-orange-200 text-orange-800'
                        }`}>
                          {item.severity} Risk
                        </span>
                      </div>
                      <p className="text-red-800 text-sm mb-3">{item.explanation}</p>
                      <div className="bg-white rounded-lg p-3 border border-red-200">
                        <span className="text-green-700 text-sm">
                          <strong>✓ Instead:</strong> {item.alternative}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Checklist */}
              <section id="checklist" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ClipboardDocumentCheckIcon className="h-8 w-8 text-emerald-600" />
                  Supplier Evaluation Checklist
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Use this comprehensive checklist when evaluating potential uniform suppliers:
                </p>

                <div className="space-y-6">
                  {supplierChecklist.map((category, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-4 text-lg">{category.category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.items.map((item, i) => (
                          <label key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-emerald-300 transition-colors">
                            <input type="checkbox" className="mt-1 h-4 w-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Negotiation Tips */}
              <section id="negotiation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Negotiation Tips</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Once you've identified potential suppliers, use these strategies to negotiate 
                  the best terms:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {negotiationTips.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{item.tip}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Find Your Ideal Uniform Partner?</h2>
                  <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                    UNEOM has been Saudi Arabia's trusted uniform supplier for over 15 years, 
                    serving 500+ organizations across healthcare, hospitality, corporate, and 
                    industrial sectors. Let us show you why we're the right choice.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
                    >
                      Request a Quote
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/about"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      Why Choose UNEOM
                    </Link>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </div>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog/uniform-trends-2025-saudi-market" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/textile-innovations.jpg"
                      alt="Uniform Trends 2025"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      Uniform Trends 2025: Saudi Market
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Stay ahead with the latest innovations transforming the industry.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/corporate-uniforms-brand-perception" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/corporate-uniforms.jpg"
                      alt="Corporate Uniforms"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      Corporate Uniforms & Brand Perception
                    </h3>
                    <p className="text-gray-600 text-sm">
                      How professional attire impacts your company's image.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/sustainable-uniforms-2024-trends" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/sustainable-uniforms-2024.jpg"
                      alt="Sustainable Uniforms"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      Sustainable Uniforms Guide
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Eco-friendly options for environmentally conscious organizations.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
