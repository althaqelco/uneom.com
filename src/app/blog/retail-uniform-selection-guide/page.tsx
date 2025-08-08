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
  MagnifyingGlassIcon,
  SwatchIcon,
  CogIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Retail Uniform Selection Guide: How to Choose the Perfect Workwear | UNEOM Blog',
  description: 'Complete guide to selecting the perfect retail uniforms for your business. Learn about fabric choices, design considerations, sizing, and implementation strategies for successful uniform programs.',
  keywords: 'retail uniform selection, uniform buying guide, retail workwear guide, uniform design tips, retail clothing selection',
  openGraph: {
    title: 'Retail Uniform Selection Guide: How to Choose the Perfect Workwear',
    description: 'Expert guide to selecting retail uniforms that enhance your brand and employee satisfaction',
    images: ['/images/blog/retail-uniform-selection.jpg'],
    locale: 'en_US'},
  alternates: {
    canonical: '/blog/retail-uniform-selection-guide/',
    languages: {
      'en': '/blog/retail-uniform-selection-guide/',
      'ar': '/ar/blog/retail-uniform-selection-guide/'}}}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction to Uniform Selection' },
  { id: 'assessment', title: 'Business Needs Assessment' },
  { id: 'fabric-selection', title: 'Fabric and Material Choices' },
  { id: 'design-considerations', title: 'Design and Style Considerations' },
  { id: 'sizing-fit', title: 'Sizing and Fit Guidelines' },
  { id: 'budget-planning', title: 'Budget Planning and ROI' },
  { id: 'implementation', title: 'Implementation Strategy' }
]

const assessmentFactors = [
  {
    category: 'Work Environment',
    considerations: [
      'Indoor vs outdoor work conditions',
      'Temperature and climate control',
      'Physical activity level required',
      'Exposure to stains or chemicals',
      'Safety requirements and regulations'
    ]
  },
  {
    category: 'Brand Identity',
    considerations: [
      'Company colors and logo placement',
      'Target customer demographics',
      'Brand positioning (luxury, casual, professional)',
      'Competitor analysis and differentiation',
      'Marketing and promotional opportunities'
    ]
  },
  {
    category: 'Employee Needs',
    considerations: [
      'Comfort during long shifts',
      'Ease of movement and flexibility',
      'Personal storage requirements',
      'Seasonal variations needed',
      'Employee feedback and preferences'
    ]
  },
  {
    category: 'Operational Requirements',
    considerations: [
      'Washing and maintenance frequency',
      'Durability and replacement cycles',
      'Inventory management needs',
      'Customization and personalization',
      'Compliance with industry standards'
    ]
  }
]

const fabricGuide = [
  {
    fabric: 'Cotton Blends',
    composition: '60% Cotton, 40% Polyester',
    pros: ['Comfortable', 'Breathable', 'Easy to care for', 'Cost-effective'],
    cons: ['May wrinkle', 'Limited stretch', 'Color fading over time'],
    bestFor: 'General retail environments, casual stores'
  },
  {
    fabric: 'Performance Polyester',
    composition: '100% Polyester with moisture-wicking',
    pros: ['Wrinkle-resistant', 'Quick-dry', 'Stain-resistant', 'Durable'],
    cons: ['Less breathable', 'Static buildup', 'Synthetic feel'],
    bestFor: 'Active retail, outdoor stores, high-traffic areas'
  },
  {
    fabric: 'Stretch Fabrics',
    composition: '95% Cotton, 5% Elastane',
    pros: ['Excellent mobility', 'Comfortable fit', 'Shape retention', 'Professional look'],
    cons: ['Higher cost', 'Special care needed', 'Limited color options'],
    bestFor: 'Upscale retail, customer-facing roles'
  },
  {
    fabric: 'Antimicrobial Fabrics',
    composition: 'Various with antimicrobial treatment',
    pros: ['Odor control', 'Hygiene benefits', 'Extended wear', 'Health-conscious'],
    cons: ['Premium pricing', 'Treatment may fade', 'Limited suppliers'],
    bestFor: 'Food retail, health stores, beauty salons'
  }
]

const designPrinciples = [
  {
    principle: 'Brand Consistency',
    description: 'Ensure uniforms align with overall brand identity and values',
    tips: [
      'Use brand colors strategically',
      'Incorporate logo placement thoughtfully',
      'Maintain consistent style across all pieces',
      'Consider seasonal brand campaigns'
    ]
  },
  {
    principle: 'Functionality First',
    description: 'Prioritize practical features that support daily work tasks',
    tips: [
      'Include adequate pocket space',
      'Ensure easy movement and flexibility',
      'Consider tool attachment points',
      'Plan for layering options'
    ]
  },
  {
    principle: 'Professional Appearance',
    description: 'Create a polished look that instills customer confidence',
    tips: [
      'Choose flattering cuts for all body types',
      'Avoid overly trendy designs',
      'Ensure appropriate coverage',
      'Consider wrinkle-resistance'
    ]
  },
  {
    principle: 'Comfort and Fit',
    description: 'Prioritize employee comfort for better performance',
    tips: [
      'Offer multiple size options',
      'Include adjustable features',
      'Test with focus groups',
      'Consider ergonomic design'
    ]
  }
]

const sizingGuidelines = [
  'Conduct comprehensive size surveys of all employees',
  'Offer extended size ranges including petite and tall options',
  'Provide detailed size charts with measurements',
  'Allow for try-on sessions before bulk ordering',
  'Plan for size exchanges and adjustments',
  'Consider seasonal weight fluctuations',
  'Include maternity options if applicable',
  'Document individual preferences and special needs'
]

const budgetConsiderations = [
  {
    factor: 'Initial Investment',
    description: 'Upfront costs for uniform purchase and customization',
    planning: 'Budget 2-3 sets per employee for rotation'
  },
  {
    factor: 'Ongoing Costs',
    description: 'Replacement, cleaning, and maintenance expenses',
    planning: 'Plan for 20-30% annual replacement rate'
  },
  {
    factor: 'ROI Factors',
    description: 'Benefits that offset uniform program costs',
    planning: 'Consider brand value, employee satisfaction, customer perception'
  },
  {
    factor: 'Hidden Costs',
    description: 'Additional expenses often overlooked',
    planning: 'Include storage, distribution, and administration costs'
  }
]

const implementationSteps = [
  {
    phase: 'Planning Phase',
    duration: '4-6 weeks',
    activities: [
      'Conduct needs assessment',
      'Research suppliers and options',
      'Develop design concepts',
      'Create project timeline and budget'
    ]
  },
  {
    phase: 'Design and Sampling',
    duration: '3-4 weeks',
    activities: [
      'Finalize design specifications',
      'Order samples for testing',
      'Conduct employee feedback sessions',
      'Make design refinements'
    ]
  },
  {
    phase: 'Ordering and Production',
    duration: '6-8 weeks',
    activities: [
      'Collect size requirements',
      'Place bulk orders',
      'Monitor production progress',
      'Prepare distribution plan'
    ]
  },
  {
    phase: 'Launch and Rollout',
    duration: '2-3 weeks',
    activities: [
      'Distribute uniforms to employees',
      'Provide care instructions',
      'Monitor initial feedback',
      'Address any issues promptly'
    ]
  }
]

export default function RetailUniformSelectionGuidePage() {
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
            <span className="text-gray-900">Retail Uniform Selection Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Selection Guide
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Expert Tips
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Retail Uniform Selection Guide: How to Choose the Perfect Workwear
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive guide to selecting retail uniforms that enhance your brand, satisfy employees, and drive business success through strategic design and implementation.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Michael Thompson</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>2,156 views</span>
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
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
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
                src="/images/blog/retail-uniform-selection.jpg"
                alt="Retail Uniform Selection Guide"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Uniform Selection</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Selecting the right retail uniforms is a critical business decision that impacts brand image, employee satisfaction, and customer perception. A well-chosen uniform program can enhance professionalism, improve team cohesion, and contribute significantly to business success.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This comprehensive guide walks you through every aspect of retail uniform selection, from initial assessment to successful implementation. Whether you're launching a new uniform program or updating an existing one, these insights will help you make informed decisions that benefit both your business and employees.
                  </p>
                  
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <MagnifyingGlassIcon className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-green-900 mb-2">Key Selection Criteria</h3>
                        <ul className="text-green-800 space-y-1 text-sm">
                          <li>• Brand alignment and visual identity</li>
                          <li>• Employee comfort and functionality</li>
                          <li>• Durability and maintenance requirements</li>
                          <li>• Budget considerations and ROI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="assessment" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Needs Assessment</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Before selecting uniforms, conduct a thorough assessment of your business needs across multiple dimensions:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {assessmentFactors.map((factor, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-4">{factor.category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {factor.considerations.map((consideration, considerationIndex) => (
                            <div key={considerationIndex} className="flex items-center">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                              <span className="text-gray-700 text-sm">{consideration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="fabric-selection" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Fabric and Material Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The fabric choice significantly impacts comfort, durability, and maintenance requirements:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {fabricGuide.map((fabric, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">{fabric.fabric}</h3>
                            <p className="text-sm text-gray-600">{fabric.composition}</p>
                          </div>
                          <SwatchIcon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-green-900 mb-2">Pros:</h4>
                            <ul className="text-green-800 text-sm space-y-1">
                              {fabric.pros.map((pro, proIndex) => (
                                <li key={proIndex}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-red-900 mb-2">Cons:</h4>
                            <ul className="text-red-800 text-sm space-y-1">
                              {fabric.cons.map((con, conIndex) => (
                                <li key={conIndex}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <p className="text-blue-800 text-sm"><strong>Best for:</strong> {fabric.bestFor}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="design-considerations" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Design and Style Considerations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Effective uniform design balances aesthetics, functionality, and brand representation:
                  </p>
                  
                  <div className="space-y-6 mb-6">
                    {designPrinciples.map((principle, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{principle.principle}</h3>
                        <p className="text-gray-700 mb-4">{principle.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {principle.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-center">
                              <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3" />
                              <span className="text-gray-700 text-sm">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="sizing-fit" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sizing and Fit Guidelines</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Proper sizing ensures employee comfort and professional appearance:
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-4">Sizing Best Practices:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sizingGuidelines.map((guideline, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3" />
                          <span className="text-blue-800 text-sm">{guideline}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="budget-planning" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Budget Planning and ROI</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Effective budget planning ensures sustainable uniform program success:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {budgetConsiderations.map((consideration, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-2">{consideration.factor}</h3>
                        <p className="text-gray-700 mb-3 text-sm">{consideration.description}</p>
                        <div className="bg-yellow-50 rounded-lg p-3">
                          <p className="text-yellow-800 text-sm"><strong>Planning tip:</strong> {consideration.planning}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="implementation" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Successful implementation requires careful planning and phased execution:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {implementationSteps.map((step, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-900">{step.phase}</h3>
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">{step.duration}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center">
                              <CogIcon className="h-4 w-4 text-gray-600 mr-2" />
                              <span className="text-gray-700 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Select Your Perfect Retail Uniforms?</h3>
                  <p className="text-gray-700 mb-4">
                    UNEOM's expert team can guide you through every step of the uniform selection process.
                  </p>
                  <Link 
                    href="/shop/retail-uniforms"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Start Your Selection Process
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <p className="text-gray-600 text-sm">Eco-friendly uniform solutions for modern retailers</p>
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