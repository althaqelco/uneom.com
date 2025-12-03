import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShoppingBagIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Mall & Retail Uniforms in Saudi Arabia: Standards of Excellence | UNEOM',
  description: 'Complete guide to retail and mall uniforms in Saudi Arabia. Learn about brand representation, customer experience enhancement, seasonal adaptations, and uniform standards for shopping centers, boutiques, and retail chains in Riyadh, Jeddah, and across KSA.',
  keywords: 'mall uniforms Saudi Arabia, retail staff uniforms KSA, shopping center employee attire, boutique uniforms Riyadh, retail workwear Jeddah, sales associate uniforms, mall employee dress code, Saudi retail fashion, brand uniform design',
  openGraph: {
    title: 'Mall & Retail Uniforms in Saudi Arabia: Standards of Excellence',
    description: 'How Saudi Arabian malls and retail establishments create exceptional customer experiences through professional uniforms',
    images: ['/images/industries/retail-shops/retail-shops-uniform.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-10-01T08:00:00Z',
    authors: ['UNEOM Retail Team'],
  },
  alternates: {
    canonical: '/blog/mall-retail-uniforms-excellence/',
    languages: {
      'en': '/blog/mall-retail-uniforms-excellence/',
      'ar': '/ar/blog/mall-retail-uniforms-excellence/',
    }
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Retail Uniform Advantage' },
  { id: 'customer-impact', title: 'Impact on Customer Experience' },
  { id: 'mall-standards', title: 'Saudi Mall Standards' },
  { id: 'retail-categories', title: 'Uniforms by Retail Category' },
  { id: 'brand-integration', title: 'Brand Identity Integration' },
  { id: 'seasonal-adaptation', title: 'Seasonal & Campaign Adaptations' },
  { id: 'practical-guide', title: 'Practical Implementation' },
  { id: 'trends', title: 'Future Trends' }
]

const customerImpactStats = [
  { stat: '76%', description: 'of customers find uniformed staff more approachable', source: 'Saudi Retail Association' },
  { stat: '68%', description: 'faster staff identification in uniformed stores', source: 'Mall Customer Experience Study' },
  { stat: '84%', description: 'associate professional uniforms with quality products', source: 'Consumer Trust Index 2024' },
  { stat: '45%', description: 'increase in customer assistance requests with branded uniforms', source: 'Retail Performance Metrics' }
]

const mallStandards = [
  {
    mall: 'Premium/Luxury Malls',
    examples: 'Kingdom Centre, Mall of Arabia, Red Sea Mall',
    requirements: [
      'High-end fabric requirements',
      'Strict grooming standards',
      'Brand color coordination mandatory',
      'Professional footwear standards',
      'Jewelry and accessory guidelines'
    ],
    uniformStyle: 'Formal business professional with luxury touches'
  },
  {
    mall: 'Family Entertainment Malls',
    examples: 'Riyadh Park, Al Nakheel Mall',
    requirements: [
      'Family-friendly appearance',
      'Comfortable for active service',
      'Bright, welcoming colors allowed',
      'Practical for varied activities',
      'Easy identification for families'
    ],
    uniformStyle: 'Smart casual with brand personality'
  },
  {
    mall: 'Outlet & Value Malls',
    examples: 'Outlet Mall Riyadh, Othaim Mall',
    requirements: [
      'Durable, cost-effective uniforms',
      'High visibility for assistance',
      'Practical pocket designs',
      'Easy-care fabrics',
      'Clear brand identification'
    ],
    uniformStyle: 'Practical professional with bold branding'
  }
]

const retailCategories = [
  {
    category: 'Fashion & Apparel',
    icon: SwatchIcon,
    uniformFeatures: ['Trendy designs reflecting brand aesthetic', 'Seasonal style updates', 'High-quality fabrics', 'Fashion-forward accessories'],
    keyConsiderations: 'Staff uniforms should complement, not compete with, merchandise'
  },
  {
    category: 'Electronics & Technology',
    icon: SparklesIcon,
    uniformFeatures: ['Modern, tech-inspired designs', 'Functional pockets for tools', 'Easy movement for demonstrations', 'Professional yet approachable'],
    keyConsiderations: 'Clean, modern look that conveys technical expertise'
  },
  {
    category: 'Food & Beverage Retail',
    icon: ShoppingBagIcon,
    uniformFeatures: ['Food safety compliant', 'Stain-resistant materials', 'Hygiene-focused design', 'Temperature-appropriate options'],
    keyConsiderations: 'Balance between brand style and food safety requirements'
  },
  {
    category: 'Beauty & Cosmetics',
    icon: StarIcon,
    uniformFeatures: ['Elegant, polished appearance', 'Makeup-friendly colors', 'Easy-clean fabrics', 'Sophisticated accessories'],
    keyConsiderations: 'Staff should embody the beauty standards they promote'
  },
  {
    category: 'Home & Furniture',
    icon: BuildingStorefrontIcon,
    uniformFeatures: ['Professional yet comfortable', 'Durable for physical work', 'Practical for demonstrations', 'Mature, trustworthy appearance'],
    keyConsiderations: 'Convey expertise and reliability for major purchases'
  }
]

const brandIntegration = [
  { element: 'Color Palette', description: 'Primary brand colors in main uniform pieces, secondary colors in accents', tips: ['Use brand primary for tops/shirts', 'Neutral bottoms for versatility', 'Accent colors in accessories'] },
  { element: 'Logo Placement', description: 'Strategic positioning for visibility without overwhelming', tips: ['Left chest embroidery standard', 'Sleeve patches for casual wear', 'Subtle patterns incorporating logo'] },
  { element: 'Design Language', description: 'Uniform silhouettes that match brand personality', tips: ['Luxury brands: tailored, premium fabrics', 'Youth brands: modern, relaxed fits', 'Traditional brands: classic, conservative styles'] }
]

const seasonalAdaptations = [
  { season: 'Summer (May-September)', considerations: 'Peak shopping and tourism season', adaptations: ['Lightweight breathable fabrics', 'Short-sleeve options', 'Moisture-wicking materials', 'Light colors to reflect heat'] },
  { season: 'Winter (November-February)', considerations: 'Cooler temperatures, holiday shopping', adaptations: ['Layering options available', 'Long-sleeve alternatives', 'Warmer fabric blends', 'Holiday-themed accessories'] },
  { season: 'Ramadan & Eid', considerations: 'Major retail events, extended hours', adaptations: ['Comfortable for long shifts', 'Modest design emphasis', 'Special occasion variations', 'Eid-themed accessories'] },
  { season: 'Saudi National Day', considerations: 'Patriotic celebration period', adaptations: ['Green and white options', 'National symbol accessories', 'Special edition pieces', 'Coordinated team looks'] }
]

export default function MallRetailUniformsExcellencePage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">Mall & Retail Uniforms Excellence</span></li>
          </ol>
        </div>
      </nav>

      <header className="relative bg-gradient-to-br from-rose-900 via-pink-800 to-rose-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/industries/retail-shops/retail-shops-uniform.jpg" alt="Retail Uniforms" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 to-pink-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-rose-500/20 text-rose-300 px-4 py-1.5 rounded-full text-sm font-medium border border-rose-400/30">Retail</span>
              <span className="bg-pink-500/20 text-pink-300 px-4 py-1.5 rounded-full text-sm font-medium border border-pink-400/30">Customer Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Mall & Retail Uniforms: Standards of Excellence</h1>
            <p className="text-xl text-rose-100 mb-8 leading-relaxed">How Saudi Arabia's premier shopping destinations and retail brands create memorable customer experiences through professional uniform programs.</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-rose-200">
              <div className="flex items-center gap-2"><UserIcon className="h-5 w-5" /><span>UNEOM Retail Team</span></div>
              <div className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /><span>12 min read</span></div>
              <div className="flex items-center gap-2"><TagIcon className="h-5 w-5" /><span>October 1, 2025</span></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><TagIcon className="h-5 w-5 text-rose-600" />Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a key={index} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg px-3 py-2 transition-all">{item.title}</a>
                  ))}
                </nav>
              </div>
              <div className="mt-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Need Retail Uniforms?</h3>
                <p className="text-sm text-rose-100 mb-4">UNEOM creates exceptional retail uniform programs for Saudi Arabia's leading brands.</p>
                <Link href="/contact" className="block text-center bg-white text-rose-600 px-4 py-2 rounded-lg font-bold hover:bg-rose-50 transition-colors">Get a Quote</Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-3 prose prose-lg max-w-none">
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Retail Uniform Advantage</h2>
              <p className="text-gray-700 leading-relaxed mb-6">In Saudi Arabia's competitive retail landscape, where world-class malls and shopping destinations compete for discerning customers, the uniform your staff wears is a powerful tool for brand differentiation and customer experience enhancement.</p>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image src="/images/industries/retail-shops/retail-shops-uniform.jpg" alt="Professional retail uniforms" width={800} height={450} className="w-full object-cover" />
              </div>
            </section>

            <section id="customer-impact" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Customer Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {customerImpactStats.map((item, index) => (
                  <div key={index} className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                    <div className="text-4xl font-bold text-rose-600 mb-2">{item.stat}</div>
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    <p className="text-xs text-gray-500">Source: {item.source}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="mall-standards" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Saudi Mall Standards</h2>
              <div className="space-y-6">
                {mallStandards.map((mall, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{mall.mall}</h3>
                    <p className="text-gray-600 text-sm mb-4">Examples: {mall.examples}</p>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {mall.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><CheckCircleIcon className="h-4 w-4 text-rose-500 flex-shrink-0" /><span>{req}</span></li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-rose-700 bg-rose-50 rounded-lg p-3"><strong>Uniform Style:</strong> {mall.uniformStyle}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="retail-categories" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Uniforms by Retail Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {retailCategories.map((cat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-rose-100 p-2 rounded-lg"><cat.icon className="h-6 w-6 text-rose-600" /></div>
                      <h3 className="font-bold text-gray-900">{cat.category}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {cat.uniformFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600"><CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span>{feature}</span></li>
                      ))}
                    </ul>
                    <p className="text-sm text-rose-700 bg-rose-50 rounded-lg p-3">{cat.keyConsiderations}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="brand-integration" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Brand Identity Integration</h2>
              <div className="space-y-6">
                {brandIntegration.map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200">
                    <h3 className="font-bold text-rose-900 mb-2">{item.element}</h3>
                    <p className="text-rose-800 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tips.map((tip, i) => (<span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-rose-700 border border-rose-300">{tip}</span>))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="seasonal-adaptation" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Seasonal & Campaign Adaptations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seasonalAdaptations.map((season, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-2">{season.season}</h3>
                    <p className="text-gray-600 text-sm mb-4">{season.considerations}</p>
                    <ul className="space-y-2">
                      {season.adaptations.map((adapt, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600"><StarIcon className="h-4 w-4 text-rose-500 flex-shrink-0" /><span>{adapt}</span></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Elevate Your Retail Brand</h2>
                <p className="text-rose-100 mb-6 max-w-2xl mx-auto">UNEOM partners with Saudi Arabia's leading retailers and malls to create uniform programs that enhance brand identity and customer experience.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-white text-rose-600 px-8 py-3 rounded-xl font-bold hover:bg-rose-50 transition-colors inline-flex items-center gap-2">Request Consultation<ArrowRightIcon className="h-5 w-5" /></Link>
                  <Link href="/industries/retail" className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">View Retail Solutions</Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}


