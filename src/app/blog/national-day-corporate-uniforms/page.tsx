import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FlagIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  HeartIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'National Day Corporate Uniforms: Celebrating Saudi Pride with Professional Style | UNEOM',
  description: 'Discover how Saudi companies celebrate National Day through corporate uniforms. Expert guide on incorporating national symbols, Vision 2030 themes, green and white color schemes, and patriotic elements while maintaining professional standards.',
  keywords: 'Saudi National Day uniforms, September 23 corporate attire, patriotic business wear KSA, Vision 2030 uniforms, Saudi green uniform, national pride corporate dress, Saudi founding day uniforms, company patriotic clothing, Saudi Arabia celebration uniforms',
  openGraph: {
    title: 'National Day Corporate Uniforms: Celebrating Saudi Pride with Professional Style',
    description: 'How Saudi Arabian companies express national pride through professional uniform programs',
    images: ['/images/corporate/corporate_brand.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-09-01T08:00:00Z',
    authors: ['UNEOM Corporate Team'],
  },
  alternates: {
    canonical: '/blog/national-day-corporate-uniforms/',
    languages: {
      'en': '/blog/national-day-corporate-uniforms/',
      'ar': '/ar/blog/national-day-corporate-uniforms/',
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
  headline: 'National Day Corporate Uniforms: Celebrating Saudi Pride with Professional Style',
  description: 'Comprehensive guide to incorporating Saudi national pride into corporate uniform programs',
  image: 'https://uneom.com/images/corporate/corporate_brand.jpg',
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
  datePublished: '2025-09-01T08:00:00Z',
  dateModified: '2025-09-01T08:00:00Z'
}

const tableOfContents = [
  { id: 'introduction', title: 'Pride in Professional Attire' },
  { id: 'national-symbols', title: 'National Symbols in Design' },
  { id: 'color-psychology', title: 'The Power of Green & White' },
  { id: 'uniform-options', title: 'Uniform Options by Sector' },
  { id: 'vision-2030', title: 'Vision 2030 Integration' },
  { id: 'implementation', title: 'Planning Your Program' },
  { id: 'celebration-calendar', title: 'National Celebration Calendar' },
  { id: 'best-practices', title: 'Best Practices & Ideas' }
]

const nationalPrideStats = [
  {
    stat: '94%',
    description: 'of Saudi employees feel prouder wearing national-themed uniforms',
    source: 'Saudi Workplace Culture Survey 2024'
  },
  {
    stat: '78%',
    description: 'of companies report improved team unity during national celebrations',
    source: 'HR Management KSA Report'
  },
  {
    stat: '89%',
    description: 'of customers appreciate businesses showing national pride',
    source: 'Consumer Sentiment Study'
  },
  {
    stat: '3x',
    description: 'increase in social media engagement with patriotic uniform posts',
    source: 'Saudi Social Media Analytics'
  }
]

const nationalSymbols = [
  {
    symbol: 'The Saudi Flag Colors',
    significance: 'Green represents Islam and prosperity; white symbolizes purity and peace',
    designApplications: [
      'Primary accent colors in uniforms',
      'Tie and scarf options',
      'Embroidery thread colors',
      'Pin and badge designs',
      'Uniform piping details'
    ],
    icon: FlagIcon
  },
  {
    symbol: 'The Shahada & Sword',
    significance: 'The Islamic declaration of faith and the sword of justice',
    designApplications: [
      'Subtle embroidery on formal wear',
      'Pin badges for National Day',
      'Printed scarves and ties',
      'Special event accessories',
      'Commemorative patches'
    ],
    icon: StarIcon
  },
  {
    symbol: 'The Palm & Crossed Swords',
    significance: 'National emblem representing justice, strength, and growth',
    designApplications: [
      'Lapel pins and brooches',
      'Embroidered pocket squares',
      'Cufflink designs',
      'Belt buckle accents',
      'Formal button covers'
    ],
    icon: SparklesIcon
  },
  {
    symbol: 'Vision 2030 Logo',
    significance: 'The Kingdom\'s transformation journey and future aspirations',
    designApplications: [
      'Modern uniform collections',
      'Tech sector attire',
      'Innovation team wear',
      'Special project uniforms',
      'Corporate event clothing'
    ],
    icon: GlobeAltIcon
  }
]

const sectorUniforms = [
  {
    sector: 'Banking & Finance',
    regularUniform: 'Conservative suits in navy, charcoal, or black',
    nationalDayOptions: [
      'Green ties with subtle palm tree patterns',
      'White pocket squares with green embroidery',
      'Green and white striped ties',
      'Saudi flag lapel pins',
      'Green cufflinks with national symbols'
    ],
    specialConsiderations: 'Maintain professional appearance while showing patriotism'
  },
  {
    sector: 'Healthcare',
    regularUniform: 'White coats, scrubs in department colors',
    nationalDayOptions: [
      'Green scrub caps or hijabs',
      'White coats with green trim',
      'National Day badges',
      'Green stethoscope accessories',
      'Patriotic face mask designs'
    ],
    specialConsiderations: 'Infection control compliance must be maintained'
  },
  {
    sector: 'Retail & Hospitality',
    regularUniform: 'Brand-specific uniforms varying by company',
    nationalDayOptions: [
      'Full green and white uniform collections',
      'National flag scarves and accessories',
      'Special edition aprons',
      'Patriotic name badges',
      'Traditional-inspired accents'
    ],
    specialConsiderations: 'High visibility to customers; maximum patriotic expression'
  },
  {
    sector: 'Government & Public Sector',
    regularUniform: 'Formal suits or traditional dress',
    nationalDayOptions: [
      'Traditional Saudi dress encouraged',
      'Green bisht for executives',
      'Formal green accessories',
      'Official celebration attire',
      'Ceremonial elements'
    ],
    specialConsiderations: 'Often leads national celebrations; highest formality'
  },
  {
    sector: 'Technology & Startups',
    regularUniform: 'Smart casual to business casual',
    nationalDayOptions: [
      'Green polo shirts with company logo',
      'Casual green and white t-shirts',
      'Vision 2030 themed wear',
      'Modern Saudi-inspired designs',
      'Tech-meets-tradition fusion'
    ],
    specialConsiderations: 'More creative freedom; innovation-focused designs'
  },
  {
    sector: 'Education',
    regularUniform: 'Professional teacher attire',
    nationalDayOptions: [
      'Green and white themed outfits',
      'Saudi heritage accessories',
      'Special celebration sashes',
      'Patriotic badges for students and staff',
      'Traditional dress days'
    ],
    specialConsiderations: 'Educational opportunity; involves students'
  }
]

const vision2030Integration = [
  {
    theme: 'A Vibrant Society',
    uniformConcept: 'Celebrating cultural heritage while embracing modernity',
    elements: [
      'Traditional patterns with modern cuts',
      'Heritage-inspired color palettes',
      'Quality of life messaging',
      'Arts and entertainment sector uniforms',
      'Tourism and hospitality focus'
    ]
  },
  {
    theme: 'A Thriving Economy',
    uniformConcept: 'Professional excellence and global competitiveness',
    elements: [
      'Premium quality materials',
      'International business standards',
      'Innovation sector designs',
      'Entrepreneurship-themed wear',
      'Investment and finance attire'
    ]
  },
  {
    theme: 'An Ambitious Nation',
    uniformConcept: 'Efficiency, responsibility, and transparency',
    elements: [
      'Government sector modernization',
      'Clean, efficient designs',
      'Sustainability integration',
      'Public service uniforms',
      'National institution attire'
    ]
  }
]

const celebrationCalendar = [
  {
    event: 'Saudi Founding Day',
    date: 'February 22',
    significance: 'Commemorates the establishment of the First Saudi State in 1727',
    uniformTheme: 'Historical heritage focus with traditional elements',
    suggestions: [
      'Traditional Saudi dress encouraged',
      'Heritage-inspired modern designs',
      'Historical color palettes',
      'Traditional craftsmanship accents',
      'Regional heritage elements'
    ]
  },
  {
    event: 'Saudi National Day',
    date: 'September 23',
    significance: 'Celebrates the unification of the Kingdom in 1932',
    uniformTheme: 'Maximum patriotic expression with green and white',
    suggestions: [
      'Full green and white uniforms',
      'National flag accessories',
      'Company-wide coordinated dress',
      'Special edition collections',
      'Public-facing celebrations'
    ]
  },
  {
    event: 'Flag Day',
    date: 'March 11',
    significance: 'Honors the Saudi Arabian flag',
    uniformTheme: 'Flag-focused accessories and accents',
    suggestions: [
      'Flag pin requirements',
      'Green accent emphasis',
      'Flag-patterned accessories',
      'Formal flag presentations',
      'Educational flag activities'
    ]
  }
]

const implementationGuide = [
  {
    phase: 'Planning (3-6 months before)',
    tasks: [
      'Determine budget allocation',
      'Survey employee preferences',
      'Design or select options',
      'Coordinate with uniform supplier',
      'Plan communication strategy'
    ]
  },
  {
    phase: 'Design & Approval (2-3 months before)',
    tasks: [
      'Review design concepts',
      'Ensure cultural appropriateness',
      'Get management approval',
      'Sample production and testing',
      'Finalize quantities and sizes'
    ]
  },
  {
    phase: 'Production (1-2 months before)',
    tasks: [
      'Place bulk orders',
      'Quality control checks',
      'Logistics planning',
      'Storage arrangements',
      'Distribution scheduling'
    ]
  },
  {
    phase: 'Distribution (1-2 weeks before)',
    tasks: [
      'Employee size collection',
      'Distribution by department',
      'Accessory distribution',
      'Care instructions provision',
      'Social media preparation'
    ]
  },
  {
    phase: 'Celebration Day',
    tasks: [
      'Company-wide dress code activation',
      'Social media campaigns',
      'Internal celebrations',
      'Customer-facing events',
      'Photo documentation'
    ]
  }
]

const bestPractices = [
  {
    practice: 'Respect Cultural Symbols',
    description: 'Ensure all national symbols are used respectfully and appropriately',
    tips: [
      'Consult cultural advisors',
      'Follow official guidelines',
      'Avoid placement on inappropriate items',
      'Maintain dignity in all uses'
    ]
  },
  {
    practice: 'Balance Pride & Professionalism',
    description: 'Patriotic expression should enhance, not replace, professional standards',
    tips: [
      'Maintain industry-appropriate dress',
      'Use accents rather than full transformation',
      'Keep customer-facing roles polished',
      'Allow personal expression within guidelines'
    ]
  },
  {
    practice: 'Include All Employees',
    description: 'National celebrations should unite the entire workforce',
    tips: [
      'Provide options for all roles',
      'Consider size inclusivity',
      'Respect individual preferences',
      'Make participation welcoming, not mandatory'
    ]
  },
  {
    practice: 'Quality Over Quantity',
    description: 'Invest in items that represent national pride well',
    tips: [
      'Choose durable materials',
      'Focus on versatile accessories',
      'Select items usable year after year',
      'Avoid cheap, disposable items'
    ]
  },
  {
    practice: 'Document & Share',
    description: 'Capture celebrations for engagement and brand building',
    tips: [
      'Professional photography',
      'Social media campaigns',
      'Internal communications',
      'Year-over-year comparisons'
    ]
  }
]

export default function NationalDayCorporateUniformsPage() {
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
              <li><span className="text-gray-900 font-medium">National Day Corporate Uniforms</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/corporate/corporate_brand.jpg"
              alt="Saudi National Day Corporate Uniforms"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                  🇸🇦 National Pride
                </span>
                <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/30">
                  Corporate Culture
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                National Day Corporate Uniforms: Pride & Professionalism
              </h1>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Celebrate Saudi Arabia's national occasions with corporate uniforms that 
                express patriotic pride while maintaining professional excellence. A complete 
                guide for companies embracing national identity.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-green-200">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Corporate Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span>September 1, 2025</span>
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
                    <TagIcon className="h-5 w-5 text-green-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="mt-6 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Plan Your National Day!</h3>
                  <p className="text-sm text-green-100 mb-4">
                    UNEOM creates patriotic uniform programs for Saudi companies.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-white text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-green-50 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pride in Professional Attire</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  In the Kingdom of Saudi Arabia, national celebrations are more than holidays—they're 
                  expressions of collective identity, shared values, and pride in the nation's 
                  remarkable journey. For companies operating in the Kingdom, these occasions 
                  present a unique opportunity to unite employees around national pride while 
                  strengthening corporate culture.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/corporate/corporate_brand.jpg"
                    alt="Corporate team in national day uniforms"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {nationalPrideStats.map((item, index) => (
                    <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="text-4xl font-bold text-green-600 mb-2">{item.stat}</div>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                      <p className="text-xs text-gray-500">Source: {item.source}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* National Symbols */}
              <section id="national-symbols" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">National Symbols in Design</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Understanding Saudi national symbols and their appropriate use is essential 
                  for creating respectful, impactful patriotic uniforms:
                </p>

                <div className="space-y-6">
                  {nationalSymbols.map((item, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-xl">
                          <item.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">{item.symbol}</h3>
                          <p className="text-gray-600 mb-4">{item.significance}</p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Design Applications:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {item.designApplications.map((app, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span>{app}</span>
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

              {/* Color Psychology */}
              <section id="color-psychology" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Green & White</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-700 text-white rounded-2xl p-8">
                    <h3 className="font-bold text-2xl mb-4">Saudi Green</h3>
                    <p className="text-green-100 mb-4">
                      The distinctive green of the Saudi flag represents Islam, growth, and prosperity. 
                      It's the primary color for national celebrations.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Pantone:</strong> 349 C</p>
                      <p className="text-sm"><strong>Hex:</strong> #006C35</p>
                      <p className="text-sm"><strong>RGB:</strong> 0, 108, 53</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-300">
                    <h3 className="font-bold text-2xl mb-4 text-gray-900">Pure White</h3>
                    <p className="text-gray-700 mb-4">
                      White symbolizes purity, peace, and the bright future of the Kingdom. 
                      It provides contrast and balance in patriotic designs.
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <p className="text-sm"><strong>Usage:</strong> Background, text, accents</p>
                      <p className="text-sm"><strong>Represents:</strong> Purity, peace</p>
                      <p className="text-sm"><strong>Pairing:</strong> Always with Saudi green</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Uniform Options by Sector */}
              <section id="uniform-options" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Uniform Options by Sector</h2>
                
                <div className="space-y-6">
                  {sectorUniforms.map((sector, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <BuildingOfficeIcon className="h-6 w-6 text-green-600" />
                        <h3 className="font-bold text-gray-900 text-lg">{sector.sector}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <strong>Regular Uniform:</strong> {sector.regularUniform}
                      </p>
                      <div className="bg-white rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">National Day Options:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {sector.nationalDayOptions.map((option, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="text-green-500">✓</span>
                              <span>{option}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm text-green-700 bg-green-50 rounded-lg p-3">
                        <strong>Key Consideration:</strong> {sector.specialConsiderations}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Vision 2030 */}
              <section id="vision-2030" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision 2030 Integration</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Saudi Vision 2030 represents the Kingdom's transformation journey. 
                  Corporate uniforms can reflect these aspirations:
                </p>

                <div className="space-y-6">
                  {vision2030Integration.map((theme, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h3 className="font-bold text-green-900 mb-2">{theme.theme}</h3>
                      <p className="text-green-800 mb-4">{theme.uniformConcept}</p>
                      <div className="flex flex-wrap gap-2">
                        {theme.elements.map((element, i) => (
                          <span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-green-700 border border-green-300">
                            {element}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Celebration Calendar */}
              <section id="celebration-calendar" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">National Celebration Calendar</h2>
                
                <div className="space-y-6">
                  {celebrationCalendar.map((event, index) => (
                    <div key={index} className="bg-white rounded-2xl border-2 border-green-200 overflow-hidden">
                      <div className="bg-green-600 text-white px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CalendarIcon className="h-6 w-6" />
                          <h3 className="font-bold text-lg">{event.event}</h3>
                        </div>
                        <span className="bg-white text-green-600 px-4 py-1 rounded-full font-bold">
                          {event.date}
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 mb-4">{event.significance}</p>
                        <p className="text-green-700 font-medium mb-4">
                          <strong>Uniform Theme:</strong> {event.uniformTheme}
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Suggestions:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {event.suggestions.map((suggestion, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span>{suggestion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Guide */}
              <section id="implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Planning Your Program</h2>
                
                <div className="space-y-4">
                  {implementationGuide.map((phase, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <h3 className="font-bold text-gray-900">{phase.phase}</h3>
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

              {/* Best Practices */}
              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices & Ideas</h2>
                
                <div className="space-y-6">
                  {bestPractices.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-2">{item.practice}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <StarIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">🇸🇦 Celebrate Saudi Pride with Your Team</h2>
                  <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                    UNEOM helps Saudi companies create memorable national celebration 
                    uniform programs that unite teams and express patriotic pride.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
                    >
                      Start Planning
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/industries/corporate"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      View Corporate Solutions
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


