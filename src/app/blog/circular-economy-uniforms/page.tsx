import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowPathIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  SparklesIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Circular Economy in Uniform Industry: Recycling, Reuse & Sustainability | UNEOM',
  description: 'Comprehensive guide to circular economy practices in the uniform industry. Learn about textile recycling, uniform take-back programs, sustainable materials, and how Saudi Arabian companies are embracing circular fashion principles.',
  keywords: 'circular economy uniforms, textile recycling Saudi Arabia, sustainable workwear, uniform recycling programs, eco-friendly uniforms KSA, sustainable corporate clothing, Vision 2030 sustainability, green uniform solutions, uniform waste reduction',
  openGraph: {
    title: 'Circular Economy in Uniform Industry: Recycling, Reuse & Sustainability',
    description: 'How Saudi Arabian companies are revolutionizing uniform management through circular economy principles',
    images: ['/images/blog/sustainable-uniform.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-11-01T08:00:00Z',
    authors: ['UNEOM Sustainability Team'],
  },
  alternates: {
    canonical: '/blog/circular-economy-uniforms/',
    languages: {
      'en': '/blog/circular-economy-uniforms/',
      'ar': '/ar/blog/circular-economy-uniforms/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Circular Revolution' },
  { id: 'principles', title: 'Core Circular Principles' },
  { id: 'lifecycle', title: 'Uniform Lifecycle Management' },
  { id: 'materials', title: 'Sustainable Materials' },
  { id: 'programs', title: 'Take-Back & Recycling Programs' },
  { id: 'business-case', title: 'Business Case for Circularity' },
  { id: 'implementation', title: 'Implementation Guide' },
  { id: 'vision-2030', title: 'Vision 2030 Alignment' }
]

const circularStats = [
  { stat: '92%', description: 'of textile waste could be diverted from landfills through circular practices', source: 'Ellen MacArthur Foundation' },
  { stat: '70%', description: 'reduction in carbon footprint possible with recycled uniform materials', source: 'Textile Exchange Report' },
  { stat: 'SAR 2.4B', description: 'potential annual savings in Saudi textile industry through circularity', source: 'Saudi Industrial Development Fund' },
  { stat: '5x', description: 'longer useful life of uniforms with proper maintenance programs', source: 'UNEOM Lifecycle Study' }
]

const circularPrinciples = [
  { principle: 'Design for Longevity', description: 'Creating uniforms that last longer through quality materials and timeless design', practices: ['Reinforced stress points', 'Quality stitching standards', 'Durable fabric selection', 'Classic, timeless styles'] },
  { principle: 'Design for Recyclability', description: 'Using materials and construction methods that enable end-of-life recycling', practices: ['Mono-material construction', 'Easily separable components', 'Natural or recyclable fibers', 'Minimal mixed materials'] },
  { principle: 'Repair & Maintain', description: 'Extending uniform life through professional care and repair services', practices: ['Regular maintenance programs', 'Professional repair services', 'Button and zipper replacement', 'Alterations for fit changes'] },
  { principle: 'Reuse & Redistribute', description: 'Finding second lives for uniforms no longer needed by original users', practices: ['Inter-department transfers', 'Donation to charities', 'Upcycling programs', 'Resale platforms'] },
  { principle: 'Recycle & Regenerate', description: 'Transforming end-of-life uniforms into new materials or products', practices: ['Fiber-to-fiber recycling', 'Downcycling to insulation', 'Industrial rags', 'New product creation'] }
]

const lifecycleStages = [
  { stage: 'Design', actions: ['Specify durable materials', 'Plan for disassembly', 'Minimize material diversity', 'Include recycled content targets'] },
  { stage: 'Production', actions: ['Zero-waste cutting techniques', 'Renewable energy use', 'Water recycling', 'Ethical labor practices'] },
  { stage: 'Distribution', actions: ['Optimized logistics', 'Reusable packaging', 'Carbon-neutral shipping options', 'Local sourcing when possible'] },
  { stage: 'Use Phase', actions: ['Care instruction education', 'Professional laundering programs', 'Repair services availability', 'Proper storage guidance'] },
  { stage: 'End of Life', actions: ['Take-back collection', 'Sorting and grading', 'Recycling processing', 'Responsible disposal'] }
]

const sustainableMaterials = [
  { material: 'Recycled Polyester (rPET)', source: 'Post-consumer plastic bottles', benefits: ['Reduces plastic waste', 'Lower carbon footprint', 'Equivalent performance', 'Widely available'], bestFor: 'Corporate uniforms, outerwear' },
  { material: 'Organic Cotton', source: 'Certified organic farming', benefits: ['No harmful pesticides', 'Soil health improvement', 'Worker safety', 'Biodegradable'], bestFor: 'Healthcare, hospitality' },
  { material: 'TENCEL™ Lyocell', source: 'Sustainably harvested wood', benefits: ['Closed-loop production', 'Biodegradable', 'Soft and breathable', 'Moisture management'], bestFor: 'Formal wear, hospitality' },
  { material: 'Recycled Cotton', source: 'Pre/post-consumer cotton waste', benefits: ['Diverts textile waste', 'Saves water', 'Reduces virgin demand', 'Authentic cotton feel'], bestFor: 'Casual uniforms, workwear' },
  { material: 'Hemp Blends', source: 'Industrial hemp plants', benefits: ['Minimal water needs', 'No pesticides required', 'Naturally durable', 'Gets softer with wear'], bestFor: 'Industrial, outdoor uniforms' }
]

const recyclingPrograms = [
  { program: 'In-House Collection', description: 'Company-managed uniform collection points', benefits: ['Direct control', 'Easy tracking', 'Employee engagement'], implementation: 'Set up collection bins, establish schedule, track volumes' },
  { program: 'Supplier Take-Back', description: 'Return programs managed by uniform suppliers', benefits: ['Expert handling', 'Guaranteed recycling', 'Simplified logistics'], implementation: 'Partner agreement, pickup scheduling, reporting' },
  { program: 'Industry Consortiums', description: 'Collaborative recycling with other companies', benefits: ['Shared costs', 'Greater volumes', 'Better recycling rates'], implementation: 'Join or form consortium, share infrastructure, split costs' },
  { program: 'Charity Partnerships', description: 'Donation of usable uniforms to charitable causes', benefits: ['Social impact', 'Tax benefits', 'Brand reputation'], implementation: 'Partner selection, quality standards, logistics' }
]

const businessCase = [
  { benefit: 'Cost Reduction', metrics: ['15-25% lower total cost of ownership', 'Reduced disposal costs', 'Potential recycling revenue', 'Lower material costs with recycled content'] },
  { benefit: 'Brand Value', metrics: ['Enhanced corporate reputation', 'ESG score improvement', 'Employee pride and retention', 'Customer preference alignment'] },
  { benefit: 'Compliance', metrics: ['Ahead of regulations', 'Extended Producer Responsibility readiness', 'Government tender advantages', 'International standards alignment'] },
  { benefit: 'Risk Mitigation', metrics: ['Supply chain resilience', 'Price volatility protection', 'Resource security', 'Regulatory risk reduction'] }
]

const vision2030Alignment = [
  { goal: 'Environmental Sustainability', connection: 'Circular uniform practices directly support Saudi Green Initiative targets for waste reduction and carbon neutrality' },
  { goal: 'Economic Diversification', connection: 'Local recycling infrastructure creates jobs and reduces import dependency for raw materials' },
  { goal: 'Quality of Life', connection: 'Cleaner environment and reduced landfill waste improve community health and well-being' }
]

export default function CircularEconomyUniformsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">Circular Economy in Uniforms</span></li>
          </ol>
        </div>
      </nav>

      <header className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog/sustainable-uniform.jpg" alt="Sustainable Uniforms" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">♻️ Sustainability</span>
              <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-medium border border-teal-400/30">Circular Economy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Circular Economy in Uniform Industry</h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">Revolutionizing uniform management through recycling, reuse, and sustainable practices. A comprehensive guide for Saudi Arabian organizations embracing circularity.</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-emerald-200">
              <div className="flex items-center gap-2"><UserIcon className="h-5 w-5" /><span>UNEOM Sustainability Team</span></div>
              <div className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /><span>15 min read</span></div>
              <div className="flex items-center gap-2"><TagIcon className="h-5 w-5" /><span>November 1, 2025</span></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><TagIcon className="h-5 w-5 text-emerald-600" />Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a key={index} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg px-3 py-2 transition-all">{item.title}</a>
                  ))}
                </nav>
              </div>
              <div className="mt-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Go Circular Today</h3>
                <p className="text-sm text-emerald-100 mb-4">UNEOM helps organizations implement circular uniform programs.</p>
                <Link href="/contact" className="block text-center bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-colors">Get Started</Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-3 prose prose-lg max-w-none">
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Circular Revolution</h2>
              <p className="text-gray-700 leading-relaxed mb-6">The traditional "take-make-dispose" model of uniform management is no longer sustainable. With growing environmental awareness and Saudi Arabia's Vision 2030 sustainability commitments, organizations are embracing circular economy principles to transform how uniforms are designed, used, and managed at end of life.</p>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image src="/images/blog/sustainable-uniform.jpg" alt="Circular economy uniforms" width={800} height={450} className="w-full object-cover" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {circularStats.map((item, index) => (
                  <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">{item.stat}</div>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">Source: {item.source}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="principles" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Circular Principles</h2>
              <div className="space-y-6">
                {circularPrinciples.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-emerald-100 p-2 rounded-lg"><ArrowPathIcon className="h-6 w-6 text-emerald-600" /></div>
                      <h3 className="font-bold text-gray-900">{item.principle}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.practices.map((practice, i) => (<span key={i} className="bg-emerald-50 px-3 py-1 rounded-full text-xs text-emerald-700 border border-emerald-200">{practice}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="lifecycle" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Uniform Lifecycle Management</h2>
              <div className="space-y-4">
                {lifecycleStages.map((stage, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">{index + 1}</span>
                      <h3 className="font-bold text-gray-900">{stage.stage}</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {stage.actions.map((action, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircleIcon className="h-4 w-4 text-emerald-500 flex-shrink-0" /><span>{action}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="materials" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Materials</h2>
              <div className="space-y-6">
                {sustainableMaterials.map((mat, index) => (
                  <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-emerald-900">{mat.material}</h3>
                      <span className="bg-white px-3 py-1 rounded-full text-xs text-emerald-700 border border-emerald-300">{mat.source}</span>
                    </div>
                    <p className="text-emerald-800 mb-4"><strong>Best For:</strong> {mat.bestFor}</p>
                    <div className="flex flex-wrap gap-2">
                      {mat.benefits.map((benefit, i) => (<span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-emerald-700">{benefit}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="programs" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Take-Back & Recycling Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recyclingPrograms.map((prog, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">{prog.program}</h3>
                    <p className="text-gray-600 text-sm mb-4">{prog.description}</p>
                    <ul className="space-y-2 mb-4">
                      {prog.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircleIcon className="h-4 w-4 text-emerald-500 flex-shrink-0" /><span>{benefit}</span></li>
                      ))}
                    </ul>
                    <p className="text-sm text-emerald-700 bg-emerald-50 rounded-lg p-3">{prog.implementation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="business-case" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Case for Circularity</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessCase.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <CurrencyDollarIcon className="h-6 w-6 text-emerald-600" />
                      <h3 className="font-bold text-gray-900">{item.benefit}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.metrics.map((metric, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircleIcon className="h-4 w-4 text-emerald-500 flex-shrink-0" /><span>{metric}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="vision-2030" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision 2030 Alignment</h2>
              <div className="space-y-6">
                {vision2030Alignment.map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-bold text-green-900 mb-2">{item.goal}</h3>
                    <p className="text-green-800">{item.connection}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">♻️ Start Your Circular Journey</h2>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">UNEOM helps Saudi Arabian organizations implement circular uniform programs that reduce environmental impact while improving bottom line.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2">Request Consultation<ArrowRightIcon className="h-5 w-5" /></Link>
                  <Link href="/services/sustainable-uniforms" className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">Learn About Sustainability</Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}


