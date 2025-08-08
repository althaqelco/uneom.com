import React from 'react';
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
  SunIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sustainable Retail Uniforms: Eco-Friendly Solutions for Modern Businesses | UNEOM Blog',
  description: 'Discover sustainable retail uniform solutions that reduce environmental impact while maintaining quality and style. Learn about eco-friendly fabrics, ethical manufacturing, and green business practices.',
  keywords: 'sustainable retail uniforms, eco-friendly uniforms, green business practices, sustainable fashion retail, ethical uniform manufacturing',
  openGraph: {
    title: 'Sustainable Retail Uniforms: Eco-Friendly Solutions for Modern Businesses',
    description: 'How sustainable uniforms benefit your business and the environment',
    images: ['/images/blog/sustainable-retail-uniforms.jpg'],
    locale: 'en_US'},
  alternates: {
    canonical: '/blog/sustainable-retail-uniforms/',
    languages: {
      'en': '/blog/sustainable-retail-uniforms/',
      'ar': '/ar/blog/sustainable-retail-uniforms/'}}}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction to Sustainable Uniforms' },
  { id: 'environmental-impact', title: 'Environmental Impact of Traditional Uniforms' },
  { id: 'sustainable-materials', title: 'Sustainable Materials and Fabrics' },
  { id: 'manufacturing-practices', title: 'Ethical Manufacturing Practices' },
  { id: 'business-benefits', title: 'Business Benefits of Going Green' },
  { id: 'implementation', title: 'Implementation Strategies' },
  { id: 'future-trends', title: 'Future of Sustainable Workwear' }
]

const environmentalImpacts = [
  {
    issue: 'Water Consumption',
    traditional: '2,700 liters per cotton t-shirt',
    sustainable: '70% reduction with organic cotton',
    solution: 'Water-efficient production methods and organic materials'
  },
  {
    issue: 'Chemical Usage',
    traditional: 'Heavy pesticides and synthetic dyes',
    sustainable: 'Natural dyes and organic processes',
    solution: 'OEKO-TEX certified fabrics and low-impact dyes'
  },
  {
    issue: 'Carbon Footprint',
    traditional: '15-20 kg CO2 per garment',
    sustainable: '40-60% reduction possible',
    solution: 'Local sourcing and renewable energy manufacturing'
  },
  {
    issue: 'Waste Generation',
    traditional: '92 million tons textile waste annually',
    sustainable: 'Circular economy approach',
    solution: 'Recycling programs and biodegradable materials'
  }
]

const sustainableMaterials = [
  {
    material: 'Organic Cotton',
    description: 'Grown without harmful pesticides or synthetic fertilizers',
    benefits: [
      '91% less water than conventional cotton',
      'No toxic chemicals in production',
      'Biodegradable and renewable',
      'Softer and more durable'
    ],
    applications: 'Casual retail uniforms, t-shirts, polo shirts'
  },
  {
    material: 'Recycled Polyester',
    description: 'Made from recycled plastic bottles and textile waste',
    benefits: [
      'Reduces plastic waste in landfills',
      '75% less energy than virgin polyester',
      'Maintains performance properties',
      'Cost-effective solution'
    ],
    applications: 'Performance uniforms, outerwear, activewear'
  },
  {
    material: 'Tencel/Lyocell',
    description: 'Made from sustainably sourced wood pulp',
    benefits: [
      'Closed-loop production process',
      'Naturally antibacterial',
      'Moisture-wicking properties',
      'Completely biodegradable'
    ],
    applications: 'Premium retail uniforms, hospitality wear'
  },
  {
    material: 'Hemp Blends',
    description: 'Fast-growing crop requiring minimal water and pesticides',
    benefits: [
      'Extremely durable and long-lasting',
      'UV resistant and antimicrobial',
      'Improves soil health',
      'Carbon negative crop'
    ],
    applications: 'Outdoor retail, workwear, casual uniforms'
  }
]

const ethicalPractices = [
  {
    practice: 'Fair Labor Standards',
    description: 'Ensuring safe working conditions and fair wages',
    certifications: ['Fair Trade Certified', 'SA8000', 'WRAP Certified']
  },
  {
    practice: 'Local Sourcing',
    description: 'Reducing transportation emissions and supporting local economies',
    certifications: ['Local First', 'Made in USA', 'Regional Sourcing']
  },
  {
    practice: 'Waste Reduction',
    description: 'Minimizing production waste and implementing recycling programs',
    certifications: ['Zero Waste to Landfill', 'Cradle to Cradle', 'GRS Certified']
  },
  {
    practice: 'Energy Efficiency',
    description: 'Using renewable energy and efficient production methods',
    certifications: ['LEED Certified', 'Carbon Neutral', 'Renewable Energy']
  }
]

const businessBenefits = [
  {
    benefit: 'Brand Differentiation',
    description: 'Stand out from competitors with environmental leadership',
    impact: '73% of consumers willing to pay more for sustainable products'
  },
  {
    benefit: 'Employee Satisfaction',
    description: 'Attract and retain environmentally conscious employees',
    impact: '83% of millennials consider company values when job hunting'
  },
  {
    benefit: 'Cost Savings',
    description: 'Long-term savings through durability and efficiency',
    impact: '20-30% reduction in replacement costs over 3 years'
  },
  {
    benefit: 'Regulatory Compliance',
    description: 'Stay ahead of environmental regulations',
    impact: 'Avoid future compliance costs and penalties'
  },
  {
    benefit: 'Customer Loyalty',
    description: 'Build stronger relationships with eco-conscious customers',
    impact: '66% of consumers consider sustainability in purchases'
  },
  {
    benefit: 'Investor Appeal',
    description: 'Attract ESG-focused investors and funding',
    impact: '$30 trillion in global ESG assets under management'
  }
]

const implementationSteps = [
  {
    step: 'Assessment and Goal Setting',
    description: 'Evaluate current uniform program and set sustainability targets',
    timeline: '2-4 weeks',
    actions: [
      'Audit existing uniform inventory',
      'Calculate current environmental impact',
      'Set measurable sustainability goals',
      'Identify key stakeholders'
    ]
  },
  {
    step: 'Supplier Research and Selection',
    description: 'Find certified sustainable uniform suppliers',
    timeline: '4-6 weeks',
    actions: [
      'Research sustainable fabric options',
      'Verify supplier certifications',
      'Request samples and testing',
      'Evaluate cost-benefit analysis'
    ]
  },
  {
    step: 'Pilot Program Launch',
    description: 'Test sustainable uniforms with select employees',
    timeline: '8-12 weeks',
    actions: [
      'Select pilot group participants',
      'Distribute sustainable uniforms',
      'Collect feedback and performance data',
      'Monitor durability and satisfaction'
    ]
  },
  {
    step: 'Full Implementation',
    description: 'Roll out sustainable uniforms company-wide',
    timeline: '12-16 weeks',
    actions: [
      'Place bulk orders for all employees',
      'Implement care and maintenance programs',
      'Train staff on sustainability benefits',
      'Launch internal and external communications'
    ]
  }
]

const futureTrends = [
  {
    trend: 'Circular Economy Models',
    description: 'Take-back programs and uniform recycling initiatives',
    timeline: '2024-2026'
  },
  {
    trend: 'Bio-based Materials',
    description: 'Fabrics made from algae, mushrooms, and other organic sources',
    timeline: '2025-2027'
  },
  {
    trend: 'Smart Sustainable Fabrics',
    description: 'Integration of technology with eco-friendly materials',
    timeline: '2026-2028'
  },
  {
    trend: 'Carbon Negative Textiles',
    description: 'Materials that actually remove CO2 from the atmosphere',
    timeline: '2027-2030'
  }
]

export default function SustainableRetailUniformsPage() {
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
            <span className="text-gray-900">Sustainable Retail Uniforms</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Sustainability
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Eco-Friendly
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sustainable Retail Uniforms: Eco-Friendly Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover how sustainable retail uniforms can reduce your environmental impact while enhancing brand reputation and employee satisfaction in today's eco-conscious marketplace.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Dr. Sarah Green</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>14 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>4,293 views</span>
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
                      className="block text-sm text-gray-600 hover:text-green-600 transition-colors"
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
                src="/images/blog/sustainable-retail-uniforms.jpg"
                alt="Sustainable Retail Uniforms"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Sustainable Uniforms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As environmental consciousness continues to grow among consumers and businesses alike, sustainable retail uniforms have emerged as a powerful way for companies to demonstrate their commitment to environmental responsibility while maintaining professional standards and brand identity.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sustainable uniforms go beyond just using eco-friendly materials – they encompass the entire lifecycle of the garment, from ethical sourcing and manufacturing to end-of-life disposal or recycling. This holistic approach not only benefits the environment but also creates tangible business advantages.
                  </p>
                  
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <BeakerIcon className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-green-900 mb-2">Why Sustainability Matters</h3>
                        <ul className="text-green-800 space-y-1 text-sm">
                          <li>• 10% of global carbon emissions come from fashion industry</li>
                          <li>• 73% of consumers willing to pay more for sustainable products</li>
                          <li>• Sustainable practices reduce long-term operational costs</li>
                          <li>• Environmental responsibility attracts top talent</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="environmental-impact" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Environmental Impact of Traditional Uniforms</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding the environmental impact of traditional uniform production helps illustrate the importance of sustainable alternatives:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {environmentalImpacts.map((impact, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{impact.issue}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-red-50 rounded-lg p-3">
                            <p className="text-red-900 font-medium text-sm">Traditional Impact:</p>
                            <p className="text-red-800 text-sm">{impact.traditional}</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <p className="text-green-900 font-medium text-sm">Sustainable Alternative:</p>
                            <p className="text-green-800 text-sm">{impact.sustainable}</p>
                          </div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3">
                          <p className="text-blue-800 text-sm"><strong>Solution:</strong> {impact.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="sustainable-materials" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Materials and Fabrics</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The foundation of sustainable uniforms lies in the materials used. Here are the leading eco-friendly fabric options:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {sustainableMaterials.map((material, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start mb-4">
                          <ArrowPathIcon className="h-6 w-6 text-green-600 mt-1 mr-3" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{material.material}</h3>
                            <p className="text-gray-600 text-sm">{material.description}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-green-900 mb-2">Benefits:</h4>
                            <ul className="text-green-800 text-sm space-y-1">
                              {material.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex}>• {benefit}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900 mb-2">Best Applications:</h4>
                            <p className="text-blue-800 text-sm">{material.applications}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="manufacturing-practices" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethical Manufacturing Practices</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sustainable uniforms require ethical manufacturing practices that prioritize both environmental and social responsibility:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {ethicalPractices.map((practice, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{practice.practice}</h3>
                        <p className="text-gray-700 mb-4 text-sm">{practice.description}</p>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Key Certifications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {practice.certifications.map((cert, certIndex) => (
                              <span key={certIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="business-benefits" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Benefits of Going Green</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sustainable uniforms offer compelling business advantages beyond environmental benefits:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {businessBenefits.map((benefit, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-900 mb-2">{benefit.benefit}</h3>
                        <p className="text-blue-800 mb-3 text-sm">{benefit.description}</p>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-blue-900 text-sm font-medium">{benefit.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="implementation" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Successfully transitioning to sustainable uniforms requires a structured approach:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {implementationSteps.map((step, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-900">{step.step}</h3>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{step.timeline}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-gray-700 text-sm">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="future-trends" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Future of Sustainable Workwear</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The future of sustainable uniforms promises even more innovative solutions:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {futureTrends.map((trend, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-purple-900">{trend.trend}</h3>
                          <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">{trend.timeline}</span>
                        </div>
                        <p className="text-purple-800 text-sm">{trend.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Make the Switch to Sustainable Uniforms?</h3>
                  <p className="text-gray-700 mb-4">
                    UNEOM offers a comprehensive range of sustainable uniform solutions that benefit your business and the environment.
                  </p>
                  <Link 
                    href="/shop/retail-uniforms"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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
                <Link href="/blog/retail-uniform-selection-guide" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/retail-uniform-selection.jpg"
                      alt="Retail Uniform Selection Guide"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Retail Uniform Selection Guide</h4>
                      <p className="text-gray-600 text-sm">How to choose the perfect workwear for your business</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/retail-uniform-impact" className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src="/images/blog/retail-uniform-impact.jpg"
                      alt="The Impact of Retail Uniforms on Business Success"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">The Impact of Retail Uniforms on Business Success</h4>
                      <p className="text-gray-600 text-sm">How uniforms drive customer trust and business growth</p>
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