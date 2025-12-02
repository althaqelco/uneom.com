import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BuildingOffice2Icon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  SparklesIcon,
  UserGroupIcon,
  ChartBarIcon,
  FlagIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Corporate Uniforms & Brand Culture: Building Identity in Saudi Workplaces | UNEOM',
  description: 'Comprehensive guide to corporate uniforms and brand culture in Saudi Arabia. Learn how professional work attire strengthens company identity, boosts employee morale, and creates cohesive brand experiences. Special feature on Saudi National Day celebrations.',
  keywords: 'corporate uniforms Saudi Arabia, company uniforms KSA, business attire Riyadh, employee uniforms, brand identity workwear, Saudi National Day uniforms, professional dress code, corporate branding, workplace culture, office uniforms',
  openGraph: {
    title: 'Corporate Uniforms & Brand Culture: Building Identity in Saudi Workplaces',
    description: 'How strategic uniform programs strengthen brand identity and workplace culture',
    images: ['/images/corporate/corporate_uniform_formal.jpg'],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/corporate-uniforms-brand-culture/',
    languages: {
      'en': '/blog/corporate-uniforms-brand-culture/',
      'ar': '/ar/blog/corporate-uniforms-brand-culture/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Power of Corporate Uniforms' },
  { id: 'brand-benefits', title: 'Brand Identity Benefits' },
  { id: 'employee-impact', title: 'Impact on Employees' },
  { id: 'design-guide', title: 'Design & Style Guide' },
  { id: 'national-day', title: 'Saudi National Day Special' },
  { id: 'implementation', title: 'Implementation Strategy' },
  { id: 'roi', title: 'ROI & Business Case' }
]

const brandBenefits = [
  {
    benefit: 'Visual Brand Consistency',
    description: 'Uniforms create a cohesive visual identity across all customer touchpoints',
    impact: '78% of customers associate uniform quality with service quality',
    examples: 'Reception, sales teams, service staff, management'
  },
  {
    benefit: 'Professional Image',
    description: 'Well-designed uniforms project competence, trustworthiness, and attention to detail',
    impact: '65% higher trust ratings for uniformed staff vs. casual dress',
    examples: 'Client meetings, trade shows, customer service'
  },
  {
    benefit: 'Brand Differentiation',
    description: 'Distinctive uniforms help companies stand out in competitive markets',
    impact: '40% better brand recall with consistent uniform programs',
    examples: 'Retail, hospitality, financial services'
  },
  {
    benefit: 'Culture Communication',
    description: 'Uniforms reflect and reinforce company values and culture',
    impact: '55% of employees feel more connected to company mission when uniformed',
    examples: 'Innovation-focused, traditional, customer-centric'
  }
]

const employeeImpacts = [
  {
    category: 'Psychological Benefits',
    impacts: [
      { item: 'Reduced decision fatigue', stat: '15 min saved daily' },
      { item: 'Increased confidence', stat: '42% improvement' },
      { item: 'Stronger team identity', stat: '60% feel more connected' },
      { item: 'Equality across roles', stat: '85% appreciate equal treatment' }
    ]
  },
  {
    category: 'Practical Benefits',
    impacts: [
      { item: 'Clothing cost savings', stat: 'SAR 3,000+ annually' },
      { item: 'Less morning stress', stat: '73% report easier mornings' },
      { item: 'Professional appearance', stat: '100% consistent look' },
      { item: 'Clear role identification', stat: 'Improved customer service' }
    ]
  },
  {
    category: 'Cultural Benefits',
    impacts: [
      { item: 'Modest dress options', stat: 'Hijab-compatible designs' },
      { item: 'Cultural appropriateness', stat: 'Saudi business standards' },
      { item: 'National pride integration', stat: 'Special occasion options' },
      { item: 'Inclusive sizing', stat: 'Full range available' }
    ]
  }
]

const styleGuide = [
  {
    category: 'Executive & Management',
    description: 'Premium business attire reflecting leadership and authority',
    elements: [
      'Tailored suits in dark colors (navy, charcoal, black)',
      'High-quality dress shirts (white, light blue)',
      'Silk ties with subtle company colors',
      'Quality leather accessories',
      'Modest options for female executives'
    ],
    image: '/images/corporate/corporate_uniform_formal.jpg'
  },
  {
    category: 'Customer-Facing Staff',
    description: 'Professional yet approachable attire for client interactions',
    elements: [
      'Branded blazers or vests',
      'Company-colored dress shirts or blouses',
      'Quality trousers or skirts',
      'Name badges and company pins',
      'Comfortable yet professional footwear'
    ],
    image: '/images/corporate/corporate_uniform_professional.jpg'
  },
  {
    category: 'Administrative & Support',
    description: 'Smart business casual promoting productivity and comfort',
    elements: [
      'Polo shirts with company logo',
      'Khaki or dark dress pants',
      'Optional cardigan or vest',
      'Comfortable shoes',
      'Practical pocket placement'
    ],
    image: '/images/corporate/corporate_uniform_service.jpg'
  },
  {
    category: 'Technical & Operations',
    description: 'Functional workwear maintaining brand standards',
    elements: [
      'Durable branded work shirts',
      'Functional cargo or work pants',
      'Safety footwear where required',
      'High-visibility options if needed',
      'Weather-appropriate layers'
    ],
    image: '/images/corporate/corporate_uniform_work.jpg'
  }
]

const nationalDayFeatures = [
  {
    element: 'Green Theme Integration',
    description: 'Saudi green incorporated respectfully into uniform elements',
    options: ['Green ties/scarves', 'Green pocket squares', 'Green accent pins', 'Green-trimmed name badges']
  },
  {
    element: 'National Symbols',
    description: 'Tasteful display of Saudi national pride',
    options: ['Saudi flag pins', 'Vision 2030 badges', 'National emblem accessories', '"I ❤️ Saudi" elements']
  },
  {
    element: 'Traditional Elements',
    description: 'Options for incorporating traditional Saudi dress',
    options: ['Thobe option for male staff', 'Abaya options for female staff', 'Traditional patterns in accessories', 'Bisht-inspired jackets']
  },
  {
    element: 'Special Collections',
    description: 'Limited edition National Day uniform items',
    options: ['Commemorative polo shirts', 'Special edition scarves', 'National Day badges', 'Team celebration kits']
  }
]

const implementationPhases = [
  {
    phase: 'Discovery & Planning',
    duration: '2-4 weeks',
    activities: [
      'Stakeholder interviews and requirement gathering',
      'Current uniform assessment (if applicable)',
      'Employee feedback collection',
      'Budget and timeline establishment',
      'Vendor selection criteria development'
    ]
  },
  {
    phase: 'Design Development',
    duration: '4-6 weeks',
    activities: [
      'Brand alignment and style exploration',
      'Fabric selection and testing',
      'Size range development',
      'Prototype creation and feedback',
      'Final design approval'
    ]
  },
  {
    phase: 'Production & Quality',
    duration: '6-8 weeks',
    activities: [
      'Sample production and approval',
      'Bulk production with quality checks',
      'Size sorting and packaging',
      'Inventory management setup',
      'Distribution planning'
    ]
  },
  {
    phase: 'Rollout & Training',
    duration: '2-4 weeks',
    activities: [
      'Employee measurement sessions',
      'Uniform fitting and adjustments',
      'Care and maintenance training',
      'Policy communication',
      'Feedback mechanism establishment'
    ]
  },
  {
    phase: 'Ongoing Management',
    duration: 'Continuous',
    activities: [
      'New employee onboarding',
      'Replacement and refresh cycles',
      'Quality monitoring',
      'Employee feedback integration',
      'Annual program review'
    ]
  }
]

const roiFactors = [
  {
    factor: 'Marketing Value',
    calculation: 'Uniformed staff create 1000s of brand impressions daily',
    annualValue: 'SAR 50,000+ equivalent advertising value',
    notes: 'Based on customer exposure calculations'
  },
  {
    factor: 'Employee Retention',
    calculation: 'Reduced turnover from stronger company identity',
    annualValue: 'SAR 30,000+ saved per retained employee',
    notes: 'Recruitment and training cost savings'
  },
  {
    factor: 'Time Efficiency',
    calculation: '15 minutes saved per employee daily',
    annualValue: 'SAR 15,000+ productivity value per employee',
    notes: 'Based on reduced decision fatigue'
  },
  {
    factor: 'Customer Trust',
    calculation: 'Higher conversion rates from professional appearance',
    annualValue: '5-15% sales improvement potential',
    notes: 'Particularly in customer-facing roles'
  }
]

export default function CorporateUniformsBrandCulturePage() {
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
            <li><span className="text-gray-900 font-medium">Corporate Uniforms & Brand Culture</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/corporate/corporate_uniform_formal.jpg"
            alt="Corporate Uniforms"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">
                Corporate
              </span>
              <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                🇸🇦 National Day Special
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Corporate Uniforms & Brand Culture: Building Identity in Saudi Workplaces
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how strategic uniform programs strengthen company identity, 
              boost employee morale, and create powerful brand experiences—with special 
              Saudi National Day celebration ideas.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>UNEOM Corporate Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>September 1, 2025</span>
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
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Corporate Uniform Partner?</h3>
                <p className="text-sm text-blue-100 mb-4">
                  UNEOM serves leading Saudi corporations with custom uniform programs.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Get Corporate Quote
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Corporate Uniforms</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In Saudi Arabia's dynamic business landscape, corporate uniforms have evolved from 
                simple dress codes to strategic brand assets. As Vision 2030 transforms the Kingdom's 
                economy, companies are recognizing that well-designed uniform programs create lasting 
                impressions, strengthen workplace culture, and drive measurable business results.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/corporate/corporate_uniform_formal.jpg"
                  alt="Professional corporate uniforms"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <BuildingOffice2Icon className="h-6 w-6" />
                  Saudi Corporate Sector Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">1M+</div>
                    <div className="text-sm text-gray-600">Companies in KSA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">13M</div>
                    <div className="text-sm text-gray-600">Private sector workers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">72%</div>
                    <div className="text-sm text-gray-600">With uniform programs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">SAR 2B</div>
                    <div className="text-sm text-gray-600">Corporate uniform market</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Benefits */}
            <section id="brand-benefits" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Brand Identity Benefits</h2>
              
              <div className="space-y-4">
                {brandBenefits.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.benefit}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-3">
                        <span className="text-sm text-green-700"><strong>Impact:</strong> {item.impact}</span>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <span className="text-sm text-blue-700"><strong>Examples:</strong> {item.examples}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Employee Impact */}
            <section id="employee-impact" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Employees</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {employeeImpacts.map((category, index) => (
                  <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <h3 className="font-bold text-indigo-900 mb-4">{category.category}</h3>
                    <div className="space-y-3">
                      {category.impacts.map((impact, i) => (
                        <div key={i} className="bg-white rounded-lg p-3">
                          <div className="font-medium text-gray-800">{impact.item}</div>
                          <div className="text-sm text-indigo-600">{impact.stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Style Guide */}
            <section id="design-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Design & Style Guide</h2>
              
              <div className="space-y-8">
                {styleGuide.map((style, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={style.image}
                          alt={style.category}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{style.category}</h3>
                        <p className="text-gray-600 mb-4">{style.description}</p>
                        <ul className="space-y-2">
                          {style.elements.map((element, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span>{element}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* National Day Special */}
            <section id="national-day" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FlagIcon className="h-8 w-8 text-green-600" />
                Saudi National Day Special 🇸🇦
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  September 23rd is a time of national pride and celebration. Corporate uniforms can 
                  honor this special day while maintaining professionalism. Here's how to incorporate 
                  Saudi National Day spirit into your uniform program.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {nationalDayFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="font-bold text-green-900 mb-2">{feature.element}</h3>
                      <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.options.map((option, i) => (
                          <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Strategy</h2>
              
              <div className="space-y-6">
                {implementationPhases.map((phase, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                        <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ROI */}
            <section id="roi" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI & Business Case</h2>
              
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Factor</th>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Calculation</th>
                      <th className="text-left px-6 py-4 font-bold text-gray-900">Annual Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {roiFactors.map((factor, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{factor.factor}</td>
                        <td className="px-6 py-4 text-gray-600">{factor.calculation}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">{factor.annualValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Transform Your Corporate Image</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  UNEOM partners with leading Saudi corporations to create uniform programs 
                  that strengthen brand identity and boost employee satisfaction.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                  >
                    Request Corporate Consultation
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
  )
}
