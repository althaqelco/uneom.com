import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  PaperAirplaneIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  SparklesIcon,
  GlobeAltIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Aviation Uniforms & Brand Identity: How Airlines Create Memorable Impressions | UNEOM',
  description: 'Explore how aviation uniforms shape airline brand identity in Saudi Arabia. Comprehensive guide covering cabin crew attire, pilot uniforms, ground staff wear, and how Saudi airlines like Saudia and flynas use uniforms for brand differentiation.',
  keywords: 'aviation uniforms Saudi Arabia, airline uniforms KSA, cabin crew attire, pilot uniforms, Saudia uniforms, flynas uniforms, flight attendant dress code, airline brand identity, aircraft crew clothing, aviation dress standards',
  openGraph: {
    title: 'Aviation Uniforms & Brand Identity: How Airlines Create Memorable Impressions',
    description: 'The strategic role of uniforms in building powerful airline brands',
    images: ['/images/aviation/aviation_airline_ground_staff_uniform.jpg'],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: '/blog/aviation-uniforms-brand-identity/',
    languages: {
      'en': '/blog/aviation-uniforms-brand-identity/',
      'ar': '/ar/blog/aviation-uniforms-brand-identity/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Power of Aviation Uniforms' },
  { id: 'brand-psychology', title: 'Psychology of Airline Branding' },
  { id: 'role-specific', title: 'Role-Specific Requirements' },
  { id: 'saudi-airlines', title: 'Saudi Airlines Case Studies' },
  { id: 'design-elements', title: 'Essential Design Elements' },
  { id: 'cultural-integration', title: 'Cultural Integration' },
  { id: 'fabric-innovation', title: 'Fabric Innovation' },
  { id: 'future-trends', title: 'Future of Aviation Uniforms' }
]

const brandElements = [
  {
    element: 'Color Psychology',
    description: 'Strategic color choices that evoke specific emotions and associations',
    examples: [
      { airline: 'Saudia', approach: 'Deep green & gold - Saudi heritage, premium service' },
      { airline: 'flynas', approach: 'Purple & white - Modern, youthful, innovative' },
      { airline: 'Emirates', approach: 'Beige & red - Warmth, Arabian hospitality' }
    ]
  },
  {
    element: 'Design Language',
    description: 'Visual elements that communicate brand personality',
    examples: [
      { airline: 'Traditional carriers', approach: 'Structured silhouettes, formal details' },
      { airline: 'Low-cost carriers', approach: 'Relaxed fits, practical features' },
      { airline: 'Premium airlines', approach: 'Designer collaborations, luxurious fabrics' }
    ]
  },
  {
    element: 'Cultural Signifiers',
    description: 'Design elements that connect to national and cultural identity',
    examples: [
      { airline: 'Gulf carriers', approach: 'Islamic-inspired patterns, modest designs' },
      { airline: 'Asian airlines', approach: 'Traditional textiles, regional motifs' },
      { airline: 'European carriers', approach: 'Contemporary minimalism, subtle elegance' }
    ]
  }
]

const roleRequirements = [
  {
    role: 'Cabin Crew',
    primaryFunction: 'Customer service, safety demonstrations, passenger care',
    uniformRequirements: [
      'Professional yet approachable appearance',
      'Freedom of movement for safety duties',
      'Comfortable for 12+ hour flights',
      'Easy care for international layovers',
      'Modest options meeting cultural requirements'
    ],
    specialConsiderations: [
      'Multiple climate zones',
      'Food service duties',
      'Emergency evacuation capability',
      'Visible brand representation'
    ],
    image: '/images/aviation/aviation_flight_attendant_uniforms.jpg'
  },
  {
    role: 'Flight Deck Crew (Pilots)',
    primaryFunction: 'Aircraft operation, passenger confidence, professional authority',
    uniformRequirements: [
      'Authoritative professional appearance',
      'Rank distinction through insignia',
      'Functional pockets for documentation',
      'Comfortable for long cockpit hours',
      'Temperature regulation for varying cockpit conditions'
    ],
    specialConsiderations: [
      'Formal appearance expectations',
      'Epaulet and stripe protocols',
      'Hat and jacket traditions',
      'International recognition standards'
    ],
    image: '/images/aviation/pilot-airline-uniform.jpg'
  },
  {
    role: 'Ground Staff',
    primaryFunction: 'Check-in, gate operations, passenger assistance',
    uniformRequirements: [
      'Brand-aligned appearance',
      'Practical for active roles',
      'Weather-appropriate options',
      'Clear identification',
      'Comfortable footwear requirements'
    ],
    specialConsiderations: [
      'Indoor/outdoor transitions',
      'Heavy lifting activities',
      'Customer-facing interactions',
      'Airport security compliance'
    ],
    image: '/images/aviation/aviation_airline_ground_staff_uniform.jpg'
  },
  {
    role: 'Maintenance & Technical',
    primaryFunction: 'Aircraft maintenance, technical operations, safety compliance',
    uniformRequirements: [
      'Safety-compliant materials',
      'Functional design with tool access',
      'High-visibility elements',
      'Durable construction',
      'FOD-free design (no loose items)'
    ],
    specialConsiderations: [
      'Aircraft proximity safety',
      'Ramp conditions',
      'Technical certification visibility',
      'Safety equipment compatibility'
    ],
    image: '/images/aviation/pilot-aviation-maintenance-uniforms.jpg'
  }
]

const saudiAirlinesAnalysis = [
  {
    airline: 'Saudi Arabian Airlines (Saudia)',
    brandPosition: 'National flag carrier, premium full-service',
    uniformPhilosophy: 'Heritage meets modern elegance',
    keyElements: [
      'Deep green representing Saudi national color',
      'Gold accents symbolizing premium service',
      'Traditional elements in modern silhouettes',
      'Islamic-compliant designs for all staff',
      'Designer collaboration for current collection'
    ],
    designHighlights: [
      'Female crew: Green abaya-inspired dresses, optional hijab',
      'Male crew: Tailored green suits with gold details',
      'Pilots: Classic navy with Saudi insignia',
      'Ground staff: Coordinated green palette'
    ],
    image: '/images/aviation/saudia-airlines-crew.jpg'
  },
  {
    airline: 'flynas',
    brandPosition: 'Low-cost carrier, youthful and dynamic',
    uniformPhilosophy: 'Modern, approachable, distinctively Saudi',
    keyElements: [
      'Vibrant purple as primary color',
      'Contemporary, relaxed silhouettes',
      'Practical yet stylish designs',
      'Strong brand color consistency',
      'Modest options integrated naturally'
    ],
    designHighlights: [
      'Female crew: Purple dresses with white accents',
      'Male crew: Purple polo shirts or blazers',
      'Pilots: Traditional styling with purple ties',
      'Ground staff: Casual purple branded wear'
    ],
    image: '/images/aviation/flynas-cabin-crew.jpg'
  },
  {
    airline: 'Riyadh Air (Launching)',
    brandPosition: 'New premium carrier, modern Saudi identity',
    uniformPhilosophy: 'Bold, innovative, future-focused',
    keyElements: [
      'Contemporary Saudi aesthetic',
      'Sustainable fabric innovations',
      'Gender-equal design approach',
      'Technology integration potential',
      'Global appeal with Saudi roots'
    ],
    designHighlights: [
      'Expected to set new industry standards',
      'Likely designer collaboration',
      'Sustainable materials emphasis',
      'Modern interpretation of Saudi elements'
    ],
    image: '/images/aviation/riyadh-air-concept.jpg'
  }
]

const designElements = [
  {
    category: 'Silhouette & Cut',
    importance: 'Defines overall brand personality and staff mobility',
    considerations: [
      'Structured vs. relaxed based on brand positioning',
      'Freedom of movement for safety duties',
      'Flattering across diverse body types',
      'Cultural appropriateness in all markets'
    ]
  },
  {
    category: 'Color & Pattern',
    importance: 'Primary brand recognition and emotional response',
    considerations: [
      'Main brand colors prominently featured',
      'Accent colors for hierarchy/departments',
      'Pattern use for visual interest',
      'Color consistency across all touchpoints'
    ]
  },
  {
    category: 'Accessories & Details',
    importance: 'Elevates basic uniform to complete brand experience',
    considerations: [
      'Scarves, ties, pins with brand elements',
      'Quality hardware (buttons, zippers)',
      'Bag and shoe coordination',
      'Name badges and wing pins'
    ]
  },
  {
    category: 'Modest Design Options',
    importance: 'Essential for Saudi and Gulf carriers',
    considerations: [
      'Hijab options matching uniform colors',
      'Long-sleeve alternatives',
      'Trouser options for female staff',
      'Longer hemlines without compromising style'
    ]
  }
]

const fabricInnovations = [
  {
    innovation: 'Temperature-Regulating Fabrics',
    description: 'Phase-change materials that adapt to body temperature',
    benefit: 'Comfort across cabin temperature variations and destinations',
    application: 'Cabin crew uniforms, pilot shirts'
  },
  {
    innovation: 'Antimicrobial Treatments',
    description: 'Silver-ion and other treatments preventing bacterial growth',
    benefit: 'Fresher uniforms during long international flights',
    application: 'All crew uniforms, especially shirts and blouses'
  },
  {
    innovation: 'Stretch-Recovery Blends',
    description: 'Fabrics that stretch with movement and recover shape',
    benefit: 'Professional appearance maintained throughout shifts',
    application: 'Trousers, skirts, dresses'
  },
  {
    innovation: 'Stain-Release Finishes',
    description: 'Nano-coatings that repel liquids and release stains',
    benefit: 'Easy maintenance during multi-day trips',
    application: 'All visible uniform components'
  },
  {
    innovation: 'Sustainable Materials',
    description: 'Recycled polyester, organic cotton, innovative eco-fabrics',
    benefit: 'Reduced environmental impact, aligns with Vision 2030 goals',
    application: 'Increasingly across entire uniform programs'
  }
]

const futureTrends = [
  {
    trend: 'Personalized Fit Technology',
    timeline: '2024-2026',
    description: '3D body scanning for perfectly fitted uniforms for each crew member',
    impact: 'Better comfort, reduced alterations, less waste'
  },
  {
    trend: 'Smart Uniform Integration',
    timeline: '2025-2028',
    description: 'Embedded technology for health monitoring, communication, identification',
    impact: 'Enhanced crew wellbeing, streamlined operations'
  },
  {
    trend: 'Circular Design Programs',
    timeline: '2024-2027',
    description: 'Complete lifecycle management with recycling and upcycling',
    impact: 'Zero-waste goals, sustainable brand positioning'
  },
  {
    trend: 'Modular Uniform Systems',
    timeline: '2025-2030',
    description: 'Interchangeable components for weather, role, and preference',
    impact: 'Flexibility, reduced inventory, crew satisfaction'
  }
]

export default function AviationUniformsBrandIdentityPage() {
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
            <li><span className="text-gray-900 font-medium">Aviation Uniforms & Brand Identity</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/aviation/aviation_airline_ground_staff_uniform.jpg"
            alt="Aviation Uniforms"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-sky-500/20 text-sky-300 px-4 py-1.5 rounded-full text-sm font-medium border border-sky-400/30">
                Aviation
              </span>
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-400/30">
                Brand Identity
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Aviation Uniforms & Brand Identity: Creating Memorable Impressions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how airlines use uniforms as powerful brand ambassadors, 
              with special focus on Saudi carriers leading innovation in the industry.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                <span>UNEOM Aviation Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                <span>July 1, 2025</span>
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
                  <TagIcon className="h-5 w-5 text-sky-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg px-3 py-2 transition-all"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA */}
              <div className="mt-6 bg-gradient-to-br from-sky-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Aviation Uniform Partner?</h3>
                <p className="text-sm text-sky-100 mb-4">
                  UNEOM designs premium uniforms for leading Saudi airlines.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-sky-600 px-4 py-2 rounded-lg font-bold hover:bg-sky-50 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Aviation Uniforms</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                In the competitive aviation industry, uniforms serve as the most visible and consistent 
                expression of an airline's brand identity. From the moment passengers enter an airport 
                to their final destination, airline staff in distinctive uniforms create countless 
                brand impressions that shape perceptions of quality, safety, and service.
              </p>

              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/aviation/aviation_flight_attendant_uniforms.jpg"
                  alt="Airline cabin crew uniforms"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
                <h3 className="font-bold text-sky-900 mb-4 flex items-center gap-2">
                  <PaperAirplaneIcon className="h-6 w-6" />
                  Saudi Aviation by Numbers
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-sky-600">100M+</div>
                    <div className="text-sm text-gray-600">Annual passengers (2025)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">30+</div>
                    <div className="text-sm text-gray-600">Airlines operating in KSA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">50K+</div>
                    <div className="text-sm text-gray-600">Aviation employees</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">SAR 100B</div>
                    <div className="text-sm text-gray-600">Aviation sector investment</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Psychology */}
            <section id="brand-psychology" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Psychology of Airline Branding</h2>
              
              <div className="space-y-6">
                {brandElements.map((element, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{element.element}</h3>
                    <p className="text-gray-600 mb-4">{element.description}</p>
                    <div className="space-y-3">
                      {element.examples.map((ex, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-3">
                          <span className="font-semibold text-sky-700">{ex.airline}:</span>
                          <span className="text-gray-600 ml-2">{ex.approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Role-Specific Requirements */}
            <section id="role-specific" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Role-Specific Requirements</h2>
              
              <div className="space-y-8">
                {roleRequirements.map((role, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={role.image}
                          alt={role.role}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{role.role}</h3>
                        <p className="text-sm text-sky-600 mb-4">{role.primaryFunction}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Uniform Requirements:</h4>
                            <ul className="space-y-1">
                              {role.uniformRequirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircleIcon className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Special Considerations:</h4>
                            <ul className="space-y-1">
                              {role.specialConsiderations.map((consideration, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <StarIcon className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
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

            {/* Saudi Airlines */}
            <section id="saudi-airlines" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Saudi Airlines Case Studies</h2>
              
              <div className="space-y-6">
                {saudiAirlinesAnalysis.map((airline, index) => (
                  <div key={index} className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">{airline.airline}</h3>
                    <p className="text-sm text-indigo-600 mb-4">{airline.brandPosition}</p>
                    <p className="text-indigo-800 mb-4"><strong>Philosophy:</strong> {airline.uniformPhilosophy}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-2">Key Elements:</h4>
                        <ul className="space-y-1">
                          {airline.keyElements.map((elem, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-indigo-800">
                              <CheckCircleIcon className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span>{elem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-900 mb-2">Design Highlights:</h4>
                        <ul className="space-y-1">
                          {airline.designHighlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-indigo-800">
                              <SparklesIcon className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Design Elements */}
            <section id="design-elements" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Design Elements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designElements.map((element, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{element.category}</h3>
                    <p className="text-sm text-gray-500 mb-4">{element.importance}</p>
                    <ul className="space-y-2">
                      {element.considerations.map((consideration, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Fabric Innovation */}
            <section id="fabric-innovation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fabric Innovation</h2>
              
              <div className="space-y-4">
                {fabricInnovations.map((innovation, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{innovation.innovation}</h3>
                      <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium">
                        {innovation.application}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{innovation.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-sky-700 font-medium">Benefit: {innovation.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Trends */}
            <section id="future-trends" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Future of Aviation Uniforms</h2>
              
              <div className="space-y-4">
                {futureTrends.map((trend, index) => (
                  <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-purple-900">{trend.trend}</h3>
                      <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                        {trend.timeline}
                      </span>
                    </div>
                    <p className="text-purple-800 mb-3">{trend.description}</p>
                    <div className="bg-white rounded-lg p-3">
                      <span className="text-purple-700 font-medium">Impact: {trend.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Elevate Your Airline's Brand Identity</h2>
                <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                  UNEOM partners with leading airlines to create distinctive uniform programs 
                  that strengthen brand identity and enhance crew performance.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/contact"
                    className="bg-white text-sky-600 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-colors inline-flex items-center gap-2"
                  >
                    Request Aviation Consultation
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                  <Link 
                    href="/industries/aviation"
                    className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                  >
                    View Aviation Solutions
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
