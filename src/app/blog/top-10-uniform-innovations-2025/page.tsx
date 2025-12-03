import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  LightBulbIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  CpuChipIcon,
  BeakerIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  FireIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Top 10 Uniform Industry Innovations of 2025: Year in Review | UNEOM',
  description: 'Comprehensive review of the most impactful innovations in the uniform industry for 2025. From smart fabrics and AI-powered design to sustainable materials and climate-adaptive technology transforming workwear in Saudi Arabia.',
  keywords: 'uniform innovations 2025, smart fabric technology, AI uniform design, sustainable workwear innovation, Saudi Arabia uniform trends, wearable technology uniforms, climate-adaptive clothing, antimicrobial fabric innovation',
  openGraph: {
    title: 'Top 10 Uniform Industry Innovations of 2025: Year in Review',
    description: 'The breakthrough technologies and trends that transformed the uniform industry in 2025',
    images: ['/images/blog/textile-innovations.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-12-01T08:00:00Z',
    authors: ['UNEOM Innovation Team'],
  },
  alternates: {
    canonical: '/blog/top-10-uniform-innovations-2025/',
    languages: {
      'en': '/blog/top-10-uniform-innovations-2025/',
      'ar': '/ar/blog/top-10-uniform-innovations-2025/',
    }
  }
}

const innovations = [
  {
    rank: 1,
    title: 'AI-Powered Custom Fit Technology',
    category: 'Design & Manufacturing',
    icon: CpuChipIcon,
    description: 'Artificial intelligence systems that analyze body measurements from smartphone photos to create perfectly fitting uniforms with 98% accuracy.',
    impact: 'Revolutionary',
    saudiRelevance: 'Reducing returns by 60% and improving employee satisfaction',
    keyFeatures: ['3D body scanning via smartphone', 'Machine learning pattern adjustment', 'Real-time size recommendations', 'Virtual try-on capabilities'],
    companies: 'Leading Saudi retailers and corporate clients adopting this technology'
  },
  {
    rank: 2,
    title: 'Phase-Change Material (PCM) Fabrics',
    category: 'Climate Adaptation',
    icon: FireIcon,
    description: 'Advanced fabrics with embedded microcapsules that absorb, store, and release heat to maintain optimal body temperature.',
    impact: 'Game-Changing',
    saudiRelevance: 'Critical for outdoor workers in 50°C+ Saudi summers',
    keyFeatures: ['Temperature regulation 18-35°C', 'No external power required', 'Lasts 200+ wash cycles', 'Lightweight integration'],
    companies: 'Industrial and construction sector early adopters'
  },
  {
    rank: 3,
    title: 'Graphene-Enhanced Protective Fabrics',
    category: 'Safety Innovation',
    icon: ShieldCheckIcon,
    description: 'Graphene-infused textiles offering unprecedented strength, conductivity, and protection in lightweight form.',
    impact: 'Breakthrough',
    saudiRelevance: 'Transforming oil & gas, construction safety wear',
    keyFeatures: ['200x stronger than steel', 'Antibacterial properties', 'UV protection', 'Static dissipation'],
    companies: 'ARAMCO and SABIC pilot programs underway'
  },
  {
    rank: 4,
    title: 'Bio-Based Antimicrobial Treatments',
    category: 'Healthcare & Hygiene',
    icon: BeakerIcon,
    description: 'Plant-derived antimicrobial treatments that provide hospital-grade protection without harmful chemicals.',
    impact: 'Significant',
    saudiRelevance: 'Meeting Vision 2030 healthcare expansion needs',
    keyFeatures: ['99.9% bacterial reduction', 'Non-toxic formulation', '100+ wash durability', 'Odor control'],
    companies: 'Major Saudi hospital groups implementing'
  },
  {
    rank: 5,
    title: 'Digital Identity Integration',
    category: 'Smart Uniforms',
    icon: CpuChipIcon,
    description: 'NFC and RFID chips seamlessly integrated into uniforms for access control, attendance, and asset tracking.',
    impact: 'Transformative',
    saudiRelevance: 'Supporting digital transformation across sectors',
    keyFeatures: ['Contactless building access', 'Automatic attendance logging', 'Asset tracking', 'Emergency identification'],
    companies: 'Government sector and major corporations adopting'
  },
  {
    rank: 6,
    title: 'Recycled Ocean Plastic Uniforms',
    category: 'Sustainability',
    icon: GlobeAltIcon,
    description: 'High-performance uniform fabrics made from 100% recycled ocean-bound plastic with premium quality.',
    impact: 'High',
    saudiRelevance: 'Aligning with Saudi Green Initiative goals',
    keyFeatures: ['12 bottles per uniform', 'Equivalent performance', 'Full traceability', 'End-of-life recyclability'],
    companies: 'Hospitality and tourism sector leaders'
  },
  {
    rank: 7,
    title: 'Biometric Health Monitoring Fabrics',
    category: 'Wearable Technology',
    icon: SparklesIcon,
    description: 'Conductive fibers woven into uniforms that monitor vital signs and alert to health risks.',
    impact: 'Emerging',
    saudiRelevance: 'Protecting workers in extreme conditions',
    keyFeatures: ['Heart rate monitoring', 'Heat stress alerts', 'Fatigue detection', 'Emergency SOS'],
    companies: 'Industrial safety programs piloting'
  },
  {
    rank: 8,
    title: 'Modular Uniform Systems',
    category: 'Design Innovation',
    icon: LightBulbIcon,
    description: 'Interchangeable component-based uniform systems reducing inventory needs and extending useful life.',
    impact: 'Practical',
    saudiRelevance: 'Cost optimization for large organizations',
    keyFeatures: ['Interchangeable parts', 'Easy repair/replacement', 'Seasonal adaptability', 'Reduced inventory'],
    companies: 'Large retail and hospitality chains implementing'
  },
  {
    rank: 9,
    title: 'Photocatalytic Self-Cleaning Fabrics',
    category: 'Maintenance Innovation',
    icon: SparklesIcon,
    description: 'Titanium dioxide coatings that use light to break down organic matter and maintain freshness.',
    impact: 'Growing',
    saudiRelevance: 'Reducing water usage in laundry operations',
    keyFeatures: ['Light-activated cleaning', 'Odor elimination', 'Stain breakdown', 'Reduced washing frequency'],
    companies: 'Food service and healthcare testing'
  },
  {
    rank: 10,
    title: 'Carbon-Negative Fabric Production',
    category: 'Environmental',
    icon: GlobeAltIcon,
    description: 'Manufacturing processes that capture more CO2 than emitted, creating climate-positive uniforms.',
    impact: 'Pioneering',
    saudiRelevance: 'Supporting Saudi 2060 net-zero commitment',
    keyFeatures: ['Negative carbon footprint', 'Algae-based materials', 'Carbon capture integration', 'Full lifecycle accounting'],
    companies: 'Early adopter programs launching'
  }
]

export default function TopUniformInnovations2025Page() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
            <li><span className="text-gray-400">/</span></li>
            <li><span className="text-gray-900 font-medium">Top 10 Uniform Innovations 2025</span></li>
          </ol>
        </div>
      </nav>

      <header className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog/textile-innovations.jpg" alt="Uniform Innovations" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-indigo-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-violet-500/20 text-violet-300 px-4 py-1.5 rounded-full text-sm font-medium border border-violet-400/30">🏆 Year in Review</span>
              <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-400/30">Innovation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Top 10 Uniform Innovations of 2025</h1>
            <p className="text-xl text-violet-100 mb-8 leading-relaxed">A comprehensive review of the breakthrough technologies and trends that transformed the uniform industry this year.</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-violet-200">
              <div className="flex items-center gap-2"><UserIcon className="h-5 w-5" /><span>UNEOM Innovation Team</span></div>
              <div className="flex items-center gap-2"><ClockIcon className="h-5 w-5" /><span>18 min read</span></div>
              <div className="flex items-center gap-2"><TagIcon className="h-5 w-5" /><span>December 1, 2025</span></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-1">
                  {innovations.map((item) => (
                    <a key={item.rank} href={`#innovation-${item.rank}`} className="block text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg px-3 py-2 transition-all">
                      #{item.rank} {item.title.split(' ').slice(0, 3).join(' ')}...
                    </a>
                  ))}
                </nav>
              </div>
              <div className="mt-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Stay Innovative</h3>
                <p className="text-sm text-violet-100 mb-4">UNEOM brings cutting-edge innovations to Saudi Arabian organizations.</p>
                <Link href="/contact" className="block text-center bg-white text-violet-600 px-4 py-2 rounded-lg font-bold hover:bg-violet-50 transition-colors">Explore Solutions</Link>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-3 prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-gray-700 leading-relaxed text-lg">2025 has been a landmark year for the uniform industry. From AI-powered customization to climate-adaptive materials, innovations are transforming how we think about workwear. Here are the top 10 innovations making the biggest impact, with special focus on relevance to Saudi Arabia's diverse industries.</p>
            </section>

            {innovations.map((innovation) => (
              <section key={innovation.rank} id={`innovation-${innovation.rank}`} className="mb-12">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`px-6 py-4 ${
                    innovation.rank === 1 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
                    innovation.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                    innovation.rank === 3 ? 'bg-gradient-to-r from-amber-600 to-amber-700' :
                    'bg-gradient-to-r from-violet-500 to-indigo-600'
                  } text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold">#{innovation.rank}</span>
                        <div>
                          <h3 className="font-bold text-xl">{innovation.title}</h3>
                          <p className="text-sm opacity-90">{innovation.category}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        innovation.impact === 'Revolutionary' ? 'bg-red-500' :
                        innovation.impact === 'Game-Changing' ? 'bg-orange-500' :
                        innovation.impact === 'Breakthrough' ? 'bg-yellow-500 text-gray-900' :
                        'bg-white/20'
                      }`}>{innovation.impact}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{innovation.description}</p>
                    
                    <div className="bg-violet-50 rounded-lg p-4 mb-4">
                      <h4 className="font-bold text-violet-900 mb-2">🇸🇦 Saudi Relevance</h4>
                      <p className="text-violet-800">{innovation.saudiRelevance}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {innovation.keyFeatures.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 italic">{innovation.companies}</p>
                  </div>
                </div>
              </section>
            ))}

            <section className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">🚀 Ready to Innovate?</h2>
                <p className="text-violet-100 mb-6 max-w-2xl mx-auto">UNEOM brings the latest uniform innovations to Saudi Arabian organizations. Let's explore how these technologies can transform your workforce.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="bg-white text-violet-600 px-8 py-3 rounded-xl font-bold hover:bg-violet-50 transition-colors inline-flex items-center gap-2">Request Demo<ArrowRightIcon className="h-5 w-5" /></Link>
                  <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">View All Services</Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}


