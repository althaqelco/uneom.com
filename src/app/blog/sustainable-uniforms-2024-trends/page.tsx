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
  GlobeAltIcon,
  BeakerIcon,
  ArrowPathIcon,
  SunIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sustainable Uniforms 2024 Trends: The Future of Eco-Friendly Workwear | UNEOM Blog',
  description: 'Discover the latest trends in sustainable uniforms for 2024. From innovative eco-friendly materials to circular economy practices, explore how workwear is becoming more environmentally responsible.',
  keywords: 'sustainable uniforms 2024, eco-friendly workwear trends, sustainable fashion 2024, green uniform innovations, circular economy uniforms',
  openGraph: {
    title: 'Sustainable Uniforms 2024 Trends: The Future of Eco-Friendly Workwear',
    description: 'Latest trends and innovations in sustainable uniform design and manufacturing',
    images: ['/images/blog/sustainable-uniforms-2024.jpg'],
    locale: 'en_US',
  },
  alternates: {
    canonical: '/blog/sustainable-uniforms-2024-trends/',
    languages: {
      'en': '/blog/sustainable-uniforms-2024-trends/',
      'ar': '/ar/blog/sustainable-uniforms-2024-trends/',
    },
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction to 2024 Sustainability Trends' },
  { id: 'material-innovations', title: 'Revolutionary Material Innovations' },
  { id: 'circular-economy', title: 'Circular Economy Practices' },
  { id: 'technology-integration', title: 'Technology and Sustainability' },
  { id: 'industry-adoption', title: 'Industry Adoption and Case Studies' },
  { id: 'future-outlook', title: 'Future Outlook and Predictions' },
  { id: 'implementation', title: 'Implementation Strategies for 2024' }
]

const materialInnovations = [
  {
    material: 'Bio-Based Polyester',
    description: 'Made from plant-based materials like corn starch and sugarcane',
    benefits: [
      '60% lower carbon footprint than traditional polyester',
      'Biodegradable under industrial composting conditions',
      'Maintains performance characteristics',
      'Renewable resource base'
    ],
    applications: 'Performance uniforms, outdoor workwear, athletic uniforms',
    availability: 'Commercial production starting Q2 2024'
  },
  {
    material: 'Mushroom Leather (Mycelium)',
    description: 'Leather alternative grown from mushroom root structures',
    benefits: [
      'Completely biodegradable',
      'No animal products required',
      'Customizable texture and properties',
      'Carbon negative production process'
    ],
    applications: 'Premium uniforms, accessories, protective gear',
    availability: 'Limited commercial availability, expanding 2024'
  },
  {
    material: 'Algae-Based Fibers',
    description: 'Textiles created from algae biomass and waste',
    benefits: [
      'Absorbs CO2 during production',
      'Naturally antimicrobial',
      'Moisture-wicking properties',
      'Renewable and fast-growing source'
    ],
    applications: 'Healthcare uniforms, hospitality wear, activewear',
    availability: 'Pilot programs launching throughout 2024'
  },
  {
    material: 'Recycled Ocean Plastic',
    description: 'Polyester fibers made from collected ocean plastic waste',
    benefits: [
      'Removes plastic pollution from oceans',
      'Durable and performance-oriented',
      'Traceable supply chain',
      'Supports marine conservation'
    ],
    applications: 'Outdoor uniforms, marine industry, environmental services',
    availability: 'Widely available, scaling up in 2024'
  }
]

const circularEconomyPractices = [
  {
    practice: 'Take-Back Programs',
    description: 'Manufacturers collect worn uniforms for recycling or upcycling',
    benefits: [
      'Reduces textile waste',
      'Creates closed-loop systems',
      'Provides raw materials for new products',
      'Builds customer loyalty'
    ],
    implementation: 'Partnership with uniform suppliers for collection and processing'
  },
  {
    practice: 'Modular Design Systems',
    description: 'Uniforms designed with replaceable components',
    benefits: [
      'Extends garment lifespan',
      'Reduces replacement costs',
      'Allows for easy repairs',
      'Customizable functionality'
    ],
    implementation: 'Design uniforms with detachable sleeves, collars, and panels'
  },
  {
    practice: 'Rental and Leasing Models',
    description: 'Service-based uniform provision instead of ownership',
    benefits: [
      'Reduces upfront costs',
      'Ensures proper maintenance',
      'Guarantees end-of-life processing',
      'Provides consistent quality'
    ],
    implementation: 'Partner with uniform service providers offering sustainable options'
  },
  {
    practice: 'Digital Passports',
    description: 'QR codes tracking garment lifecycle and sustainability metrics',
    benefits: [
      'Transparency in supply chain',
      'Tracks environmental impact',
      'Enables proper recycling',
      'Builds consumer trust'
    ],
    implementation: 'Integrate tracking technology into uniform labels'
  }
]

const technologyIntegration = [
  {
    technology: 'AI-Powered Design',
    description: 'Artificial intelligence optimizing sustainable design choices',
    impact: 'Reduces material waste by 30% through optimized pattern layouts',
    timeline: 'Mainstream adoption by mid-2024'
  },
  {
    technology: 'Blockchain Traceability',
    description: 'Immutable records of sustainable sourcing and production',
    impact: 'Provides 100% supply chain transparency',
    timeline: 'Pilot programs expanding throughout 2024'
  },
  {
    technology: '3D Knitting Technology',
    description: 'Seamless garment production reducing waste',
    impact: 'Eliminates up to 40% of textile waste in production',
    timeline: 'Commercial availability increasing in 2024'
  },
  {
    technology: 'Smart Fabric Sensors',
    description: 'Embedded sensors monitoring garment condition and usage',
    impact: 'Optimizes replacement timing and extends garment life',
    timeline: 'Early adoption in premium uniform segments'
  }
]

const industryAdoption = [
  {
    industry: 'Healthcare',
    adoptionRate: '45%',
    keyDrivers: [
      'Infection control requirements',
      'Regulatory compliance',
      'Corporate sustainability goals',
      'Cost reduction initiatives'
    ],
    leadingPractices: [
      'Antimicrobial sustainable fabrics',
      'Single-use biodegradable items',
      'Closed-loop laundering systems',
      'Renewable energy in production'
    ]
  },
  {
    industry: 'Hospitality',
    adoptionRate: '38%',
    keyDrivers: [
      'Guest environmental expectations',
      'Brand differentiation',
      'Operational cost savings',
      'Employee satisfaction'
    ],
    leadingPractices: [
      'Organic cotton uniforms',
      'Local sourcing initiatives',
      'Uniform rental programs',
      'Eco-friendly laundering'
    ]
  },
  {
    industry: 'Corporate',
    adoptionRate: '52%',
    keyDrivers: [
      'ESG reporting requirements',
      'Employee recruitment',
      'Investor expectations',
      'Regulatory compliance'
    ],
    leadingPractices: [
      'Carbon-neutral uniform programs',
      'Circular economy partnerships',
      'Sustainable material mandates',
      'Lifecycle assessment tracking'
    ]
  },
  {
    industry: 'Manufacturing',
    adoptionRate: '29%',
    keyDrivers: [
      'Safety regulation compliance',
      'Operational efficiency',
      'Worker satisfaction',
      'Environmental regulations'
    ],
    leadingPractices: [
      'Recycled safety gear',
      'Durable sustainable fabrics',
      'Take-back programs',
      'Local production networks'
    ]
  }
]

const futureOutlook = [
  {
    trend: 'Carbon Negative Textiles',
    description: 'Materials that actively remove CO2 from the atmosphere',
    timeline: '2025-2027',
    impact: 'Could offset 15% of fashion industry emissions'
  },
  {
    trend: 'Lab-Grown Materials',
    description: 'Biofabricated materials grown in controlled environments',
    timeline: '2024-2026',
    impact: 'Eliminates agricultural land use for textile production'
  },
  {
    trend: 'Molecular Recycling',
    description: 'Breaking down textiles to molecular level for infinite recycling',
    timeline: '2026-2028',
    impact: 'Enables true circular economy for synthetic materials'
  },
  {
    trend: 'Smart Sustainable Fabrics',
    description: 'Integration of technology with eco-friendly materials',
    timeline: '2024-2025',
    impact: 'Combines functionality with environmental responsibility'
  }
]

const implementationStrategies = [
  {
    strategy: 'Phased Transition Approach',
    description: 'Gradual replacement of existing uniforms with sustainable alternatives',
    timeline: '12-18 months',
    steps: [
      'Assess current uniform inventory',
      'Identify priority replacement categories',
      'Pilot sustainable options with select groups',
      'Scale successful implementations'
    ]
  },
  {
    strategy: 'Partnership Development',
    description: 'Collaborate with sustainable uniform suppliers and service providers',
    timeline: '6-9 months',
    steps: [
      'Research certified sustainable suppliers',
      'Evaluate partnership opportunities',
      'Negotiate sustainable service agreements',
      'Establish performance metrics'
    ]
  },
  {
    strategy: 'Employee Engagement',
    description: 'Involve employees in sustainability initiatives and education',
    timeline: '3-6 months',
    steps: [
      'Conduct sustainability awareness training',
      'Gather employee feedback and preferences',
      'Create sustainability champions program',
      'Implement feedback mechanisms'
    ]
  },
  {
    strategy: 'Measurement and Reporting',
    description: 'Track and communicate sustainability progress',
    timeline: 'Ongoing',
    steps: [
      'Establish baseline measurements',
      'Implement tracking systems',
      'Regular progress reporting',
      'Continuous improvement processes'
    ]
  }
]

export default function SustainableUniforms2024TrendsPage() {
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
            <span className="text-gray-900">Sustainable Uniforms 2024 Trends</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                2024 Trends
              </span>
              <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Innovation
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sustainable Uniforms 2024 Trends: The Future of Eco-Friendly Workwear
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Explore the cutting-edge trends and innovations shaping the future of sustainable uniforms in 2024, from revolutionary materials to circular economy practices.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Sustainability Research Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>18 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>6,834 views</span>
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
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
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
                src="/images/blog/sustainable-uniforms-2024.jpg"
                alt="Sustainable Uniforms 2024 Trends"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to 2024 Sustainability Trends</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The year 2024 marks a pivotal moment in the evolution of sustainable uniforms, with groundbreaking innovations and widespread industry adoption transforming how we think about workwear. From revolutionary bio-based materials to comprehensive circular economy practices, the uniform industry is experiencing unprecedented change driven by environmental necessity and technological advancement.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This comprehensive analysis explores the most significant trends shaping sustainable uniforms in 2024, providing insights into emerging technologies, industry adoption patterns, and practical implementation strategies for organizations looking to embrace eco-friendly workwear solutions.
                  </p>
                  
                  <div className="bg-emerald-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <SparklesIcon className="h-6 w-6 text-emerald-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-emerald-900 mb-2">2024 Sustainability Highlights</h3>
                        <ul className="text-emerald-800 space-y-1 text-sm">
                          <li>• 40% increase in sustainable material options</li>
                          <li>• Circular economy practices becoming mainstream</li>
                          <li>• AI and technology driving efficiency gains</li>
                          <li>• Industry adoption rates exceeding 35% across sectors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="material-innovations" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Revolutionary Material Innovations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    2024 has introduced remarkable material innovations that are reshaping the sustainable uniform landscape:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {materialInnovations.map((material, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start mb-4">
                          <BeakerIcon className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{material.material}</h3>
                            <p className="text-gray-600 text-sm">{material.description}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-green-900 mb-2">Key Benefits:</h4>
                            <ul className="text-green-800 text-sm space-y-1">
                              {material.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex}>• {benefit}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900 mb-2">Applications:</h4>
                            <p className="text-blue-800 text-sm mb-3">{material.applications}</p>
                            <div className="bg-white rounded-lg p-2">
                              <p className="text-purple-800 text-xs"><strong>Availability:</strong> {material.availability}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="circular-economy" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Circular Economy Practices</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Circular economy principles are becoming central to sustainable uniform programs:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {circularEconomyPractices.map((practice, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start mb-4">
                          <ArrowPathIcon className="h-6 w-6 text-green-600 mt-1 mr-3" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{practice.practice}</h3>
                            <p className="text-gray-600 text-sm">{practice.description}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-green-900 mb-2">Benefits:</h4>
                            <ul className="text-green-800 text-sm space-y-1">
                              {practice.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex}>• {benefit}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900 mb-2">Implementation:</h4>
                            <p className="text-blue-800 text-sm">{practice.implementation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="technology-integration" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology and Sustainability</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Technology integration is accelerating sustainability improvements in uniform production:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {technologyIntegration.map((tech, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-900 mb-2">{tech.technology}</h3>
                        <p className="text-purple-800 mb-3 text-sm">{tech.description}</p>
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-3">
                            <p className="text-purple-900 text-sm"><strong>Impact:</strong> {tech.impact}</p>
                          </div>
                          <div className="bg-purple-100 rounded-lg p-2">
                            <p className="text-purple-800 text-xs"><strong>Timeline:</strong> {tech.timeline}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="industry-adoption" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Adoption and Case Studies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Different industries are adopting sustainable uniform practices at varying rates:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {industryAdoption.map((industry, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-900">{industry.industry}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {industry.adoptionRate} Adoption
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Key Drivers:</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              {industry.keyDrivers.map((driver, driverIndex) => (
                                <li key={driverIndex}>• {driver}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Leading Practices:</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              {industry.leadingPractices.map((practice, practiceIndex) => (
                                <li key={practiceIndex}>• {practice}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="future-outlook" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Outlook and Predictions</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Looking beyond 2024, several emerging trends will shape the future of sustainable uniforms:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {futureOutlook.map((trend, index) => (
                      <div key={index} className="bg-indigo-50 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-indigo-900">{trend.trend}</h3>
                          <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded">{trend.timeline}</span>
                        </div>
                        <p className="text-indigo-800 text-sm mb-3">{trend.description}</p>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-indigo-900 text-sm"><strong>Potential Impact:</strong> {trend.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="implementation" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategies for 2024</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Organizations can adopt these strategies to implement sustainable uniform programs:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {implementationStrategies.map((strategy, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-900">{strategy.strategy}</h3>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{strategy.timeline}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{strategy.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {strategy.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700 text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Embrace 2024 Sustainability Trends?</h3>
                  <p className="text-gray-700 mb-4">
                    UNEOM is at the forefront of sustainable uniform innovation, offering cutting-edge eco-friendly solutions.
                  </p>
                  <Link 
                    href="/shop"
                    className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Explore Sustainable Options
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/sustainable-retail-uniforms" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/sustainable-retail-uniforms.jpg"
                      alt="Sustainable Retail Uniforms"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Sustainable Retail Uniforms</h4>
                      <p className="text-gray-600 text-sm">Eco-friendly solutions for modern retail businesses</p>
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
                      <p className="text-gray-600 text-sm">Latest innovations in protective workwear technology</p>
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