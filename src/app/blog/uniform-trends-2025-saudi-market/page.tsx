import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  SparklesIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  ChartBarIcon,
  LightBulbIcon,
  GlobeAltIcon,
  CpuChipIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HeartIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Uniform Trends 2025: What\'s New in the Saudi Market | UNEOM Expert Analysis',
  description: 'Comprehensive guide to the latest uniform trends in Saudi Arabia for 2025. Discover innovations in smart fabrics, sustainable materials, and Vision 2030 aligned workwear solutions for healthcare, hospitality, corporate, and industrial sectors.',
  keywords: 'uniform trends 2025, Saudi Arabia uniforms, workwear innovations, smart fabrics Saudi, Vision 2030 uniforms, professional attire KSA, corporate uniforms Riyadh, healthcare uniforms Saudi, hospitality uniforms Jeddah, industrial workwear trends',
  openGraph: {
    title: 'Uniform Trends 2025: What\'s New in the Saudi Market',
    description: 'Expert analysis of the latest uniform trends and innovations transforming the Saudi Arabian market in 2025',
    images: ['/images/blog/textile-innovations.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-01-15T08:00:00Z',
    authors: ['UNEOM Expert Team'],
  },
  alternates: {
    canonical: '/blog/uniform-trends-2025-saudi-market/',
    languages: {
      'en': '/blog/uniform-trends-2025-saudi-market/',
      'ar': '/ar/blog/uniform-trends-2025-saudi-market/',
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
  headline: 'Uniform Trends 2025: What\'s New in the Saudi Market',
  description: 'Comprehensive guide to the latest uniform trends in Saudi Arabia for 2025',
  image: 'https://uneom.com/images/blog/textile-innovations.jpg',
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
  datePublished: '2025-01-15T08:00:00Z',
  dateModified: '2025-01-15T08:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/blog/uniform-trends-2025-saudi-market/'
  }
}

const tableOfContents = [
  { id: 'overview', title: 'Market Overview 2025' },
  { id: 'smart-fabrics', title: 'Smart Fabrics Revolution' },
  { id: 'sustainability', title: 'Sustainability & Eco-Friendly Materials' },
  { id: 'cultural-integration', title: 'Cultural Integration & Modest Fashion' },
  { id: 'sector-trends', title: 'Industry-Specific Trends' },
  { id: 'technology', title: 'Technology Integration' },
  { id: 'vision-2030', title: 'Vision 2030 Alignment' },
  { id: 'implementation', title: 'Implementation Guide' }
]

const keyTrends = [
  {
    icon: CpuChipIcon,
    title: 'Smart Textiles & IoT Integration',
    description: 'Uniforms embedded with sensors for health monitoring, temperature regulation, and real-time performance tracking.',
    growth: '+45%',
    adoption: 'Early Mainstream'
  },
  {
    icon: GlobeAltIcon,
    title: 'Sustainable & Recycled Materials',
    description: 'Bio-based polyester, recycled ocean plastics, and organic cotton becoming standard in premium uniform lines.',
    growth: '+62%',
    adoption: 'Rapid Growth'
  },
  {
    icon: SparklesIcon,
    title: 'Antimicrobial & Self-Cleaning Fabrics',
    description: 'Advanced treatments reducing bacterial growth and odor, extending garment life and improving hygiene.',
    growth: '+38%',
    adoption: 'Mainstream'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enhanced Safety Features',
    description: 'Integrated UV protection, flame resistance, and high-visibility elements meeting international safety standards.',
    growth: '+29%',
    adoption: 'Standard'
  }
]

const sectorTrends = [
  {
    sector: 'Healthcare',
    icon: HeartIcon,
    color: 'blue',
    trends: [
      'Antimicrobial scrubs with silver-ion technology',
      'Fluid-resistant lab coats with breathable membranes',
      'Color-coded department identification systems',
      'Modest-friendly hijab options for female staff',
      'RFID-enabled uniforms for staff tracking'
    ],
    marketSize: 'SAR 850M',
    growth: '+18% YoY',
    image: '/images/healthcare/healthcare_medical_uniform.jpg'
  },
  {
    sector: 'Hospitality',
    icon: BuildingOffice2Icon,
    color: 'amber',
    trends: [
      'Luxury sustainable fabrics for 5-star hotels',
      'Climate-adaptive materials for outdoor staff',
      'Cultural fusion designs reflecting Saudi heritage',
      'Stain-resistant treatments for F&B staff',
      'Quick-dry fabrics for spa and wellness'
    ],
    marketSize: 'SAR 620M',
    growth: '+24% YoY',
    image: '/images/hospitality/hospitality_uniform_hotel_service.jpg'
  },
  {
    sector: 'Corporate',
    icon: BuildingOffice2Icon,
    color: 'gray',
    trends: [
      'Stretch fabrics for all-day comfort',
      'Wrinkle-free performance materials',
      'Customizable modular uniform systems',
      'Sustainable executive wear collections',
      'Smart casual fusion for modern workplaces'
    ],
    marketSize: 'SAR 480M',
    growth: '+15% YoY',
    image: '/images/corporate/corporate_brand.jpg'
  },
  {
    sector: 'Industrial',
    icon: TruckIcon,
    color: 'orange',
    trends: [
      'Cooling technology for extreme heat environments',
      'Arc-flash and flame-resistant innovations',
      'Ergonomic designs reducing workplace fatigue',
      'High-visibility smart materials',
      'Integrated wearable safety devices'
    ],
    marketSize: 'SAR 720M',
    growth: '+21% YoY',
    image: '/images/industrial/saudi-safety-standards.jpg'
  },
  {
    sector: 'Education',
    icon: AcademicCapIcon,
    color: 'green',
    trends: [
      'Durable fabrics with extended warranty programs',
      'Growth-accommodating designs for students',
      'Sustainable school uniform initiatives',
      'UV-protective outdoor wear',
      'Anti-bullying through inclusive sizing'
    ],
    marketSize: 'SAR 380M',
    growth: '+12% YoY',
    image: '/images/education/premium-school-uniforms.jpg'
  }
]

const smartFabricFeatures = [
  {
    feature: 'Temperature Regulation',
    description: 'Phase-change materials that absorb, store, and release heat to maintain optimal body temperature',
    benefit: 'Reduces heat stress by up to 40%',
    applications: ['Industrial workers', 'Outdoor security', 'Kitchen staff']
  },
  {
    feature: 'Moisture Management',
    description: 'Advanced wicking technology that moves sweat away from the body for rapid evaporation',
    benefit: 'Keeps workers dry and comfortable',
    applications: ['Healthcare', 'Hospitality', 'Athletics']
  },
  {
    feature: 'Health Monitoring',
    description: 'Embedded sensors tracking heart rate, body temperature, and fatigue levels',
    benefit: 'Early warning for health issues',
    applications: ['Industrial safety', 'Security', 'Healthcare']
  },
  {
    feature: 'UV Protection',
    description: 'Built-in UPF 50+ protection that remains effective through multiple wash cycles',
    benefit: 'Reduces skin cancer risk for outdoor workers',
    applications: ['Construction', 'Agriculture', 'Events']
  }
]

const sustainabilityInitiatives = [
  {
    initiative: 'Recycled Ocean Plastic',
    description: 'Converting collected ocean waste into high-performance polyester fibers',
    impact: '500+ tons diverted from oceans annually',
    available: 'Q1 2025'
  },
  {
    initiative: 'Organic Cotton Program',
    description: 'Partnership with Saudi agricultural initiatives for locally-grown organic cotton',
    impact: '60% reduction in water usage',
    available: 'Available Now'
  },
  {
    initiative: 'Circular Economy Model',
    description: 'Take-back programs ensuring proper recycling and upcycling of worn uniforms',
    impact: 'Zero landfill commitment by 2027',
    available: 'Pilot Program'
  },
  {
    initiative: 'Carbon-Neutral Production',
    description: 'Manufacturing facilities powered by renewable energy with offset programs',
    impact: 'Net-zero emissions by 2026',
    available: 'In Progress'
  }
]

const vision2030Alignment = [
  {
    goal: 'Economic Diversification',
    contribution: 'Supporting local textile manufacturing and reducing import dependency',
    metric: '40% local content by 2025'
  },
  {
    goal: 'Tourism & Entertainment',
    contribution: 'World-class hospitality uniforms supporting giga-projects',
    metric: 'Serving NEOM, Red Sea, Qiddiya'
  },
  {
    goal: 'Healthcare Transformation',
    contribution: 'Advanced medical uniforms meeting international standards',
    metric: 'JCI-compliant solutions'
  },
  {
    goal: 'Sustainability',
    contribution: 'Eco-friendly materials and circular economy practices',
    metric: '50% sustainable materials by 2026'
  }
]

export default function UniformTrends2025Page() {
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
              <li><span className="text-gray-900 font-medium">Uniform Trends 2025</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/blog/textile-innovations.jpg"
              alt="Uniform Trends 2025"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-400/30">
                  2025 Trends Report
                </span>
                <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                  Industry Analysis
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Uniform Trends 2025: What's New in the Saudi Market
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A comprehensive analysis of the innovations, technologies, and market shifts 
                transforming professional uniforms across Saudi Arabia's key industries in 2025.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Research Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  <span>January 15, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Table of Contents - Sticky Sidebar */}
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

                {/* Quick Stats */}
                <div className="mt-6 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Market Highlights</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">SAR 3.05B</div>
                      <div className="text-sm text-blue-700">Total Market Size 2025</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">+19%</div>
                      <div className="text-sm text-green-700">Year-over-Year Growth</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">45%</div>
                      <div className="text-sm text-purple-700">Smart Fabric Adoption</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Overview Section */}
              <section id="overview" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <ChartBarIcon className="h-8 w-8 text-blue-600" />
                  Market Overview 2025
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Saudi Arabian uniform market is experiencing unprecedented transformation in 2025, 
                  driven by Vision 2030 initiatives, technological advancements, and evolving workforce 
                  expectations. With a total market value exceeding SAR 3 billion, the industry is 
                  witnessing a significant shift towards smart, sustainable, and culturally-integrated 
                  workwear solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  {keyTrends.map((trend, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-xl">
                          <trend.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{trend.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{trend.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              {trend.growth} Growth
                            </span>
                            <span className="text-xs text-gray-500">{trend.adoption}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl my-8">
                  <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                    <LightBulbIcon className="h-5 w-5" />
                    Expert Insight
                  </h4>
                  <p className="text-amber-800">
                    "The convergence of sustainability mandates, digital transformation, and Saudi Arabia's 
                    giga-projects is creating a perfect storm for uniform innovation. Companies that embrace 
                    these trends now will gain significant competitive advantages in the coming years."
                  </p>
                  <p className="text-amber-700 text-sm mt-2">— UNEOM Market Research Team</p>
                </div>
              </section>

              {/* Smart Fabrics Section */}
              <section id="smart-fabrics" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Fabrics Revolution</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  2025 marks the mainstream adoption of smart textiles in professional uniforms. 
                  These advanced materials integrate technology seamlessly into fabric structures, 
                  providing unprecedented functionality while maintaining comfort and professional appearance.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/industrial/smart-safety-clothing.jpg"
                    alt="Smart fabric technology in uniforms"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="space-y-6">
                  {smartFabricFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.feature}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                          ✓ {feature.benefit}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {feature.applications.map((app, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sustainability Section */}
              <section id="sustainability" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainability & Eco-Friendly Materials</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Environmental responsibility has moved from optional to essential in Saudi Arabia's 
                  uniform industry. Driven by Vision 2030 sustainability goals and global corporate 
                  responsibility standards, manufacturers are rapidly adopting eco-friendly practices.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/blog/sustainable-trends.jpg"
                    alt="Sustainable uniform materials"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sustainabilityInitiatives.map((item, index) => (
                    <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-green-900">{item.initiative}</h3>
                        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          {item.available}
                        </span>
                      </div>
                      <p className="text-green-800 text-sm mb-3">{item.description}</p>
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <span className="text-green-700 font-medium text-sm">Impact: {item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cultural Integration Section */}
              <section id="cultural-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural Integration & Modest Fashion</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Saudi Arabia's unique cultural requirements continue to drive innovation in modest 
                  professional wear. 2025 sees significant advances in combining traditional values 
                  with contemporary design and functionality.
                </p>

                <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-900 mb-6">Key Developments in Modest Workwear</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">Healthcare Hijab Solutions</h4>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Antimicrobial hijab options meeting infection control standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Quick-secure designs for emergency situations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Color-coded options for department identification</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-3">Corporate Modest Collections</h4>
                      <ul className="space-y-2 text-purple-700">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Tailored abayas with corporate branding integration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Professional modest suits with modern cuts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span>Climate-adaptive modest wear for outdoor events</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sector Trends Section */}
              <section id="sector-trends" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry-Specific Trends</h2>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  Each sector in Saudi Arabia's economy presents unique challenges and opportunities 
                  for uniform innovation. Here's a detailed breakdown of trends by industry:
                </p>

                <div className="space-y-8">
                  {sectorTrends.map((sector, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={sector.image}
                            alt={`${sector.sector} uniforms`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                              <sector.icon className={`h-7 w-7 text-${sector.color}-600`} />
                              {sector.sector}
                            </h3>
                            <div className="text-right">
                              <div className="text-lg font-bold text-gray-900">{sector.marketSize}</div>
                              <div className="text-sm text-green-600 font-medium">{sector.growth}</div>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {sector.trends.map((trend, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{trend}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Vision 2030 Section */}
              <section id="vision-2030" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision 2030 Alignment</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The uniform industry plays a crucial role in supporting Saudi Arabia's Vision 2030 
                  objectives. Here's how industry trends align with national goals:
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/blog/vision-2030.jpg"
                    alt="Vision 2030 and uniforms"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vision2030Alignment.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h3 className="font-bold text-green-900 mb-2">{item.goal}</h3>
                      <p className="text-green-800 text-sm mb-4">{item.contribution}</p>
                      <div className="bg-white rounded-lg p-3 border border-green-200">
                        <span className="text-green-700 font-bold">{item.metric}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Section */}
              <section id="implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Guide</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  For organizations looking to adopt these 2025 trends, here's a practical 
                  implementation roadmap:
                </p>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Assessment Phase (Month 1-2)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Audit current uniform inventory and lifecycle</li>
                          <li>• Survey employee comfort and functionality needs</li>
                          <li>• Identify sustainability and technology priorities</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Pilot Program (Month 3-4)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Select department for pilot implementation</li>
                          <li>• Test new materials and technologies</li>
                          <li>• Gather feedback and measure performance</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Full Rollout (Month 5-8)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Phase implementation across departments</li>
                          <li>• Train staff on new uniform care and features</li>
                          <li>• Establish monitoring and feedback systems</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">Optimization (Ongoing)</h3>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Regular review and continuous improvement</li>
                          <li>• Track ROI and sustainability metrics</li>
                          <li>• Stay updated on emerging technologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Embrace 2025 Uniform Trends?</h2>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    UNEOM is Saudi Arabia's leading provider of innovative uniform solutions. 
                    Our expert team is ready to help you implement the latest trends tailored 
                    to your industry and requirements.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                    >
                      Request Consultation
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/shop"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      Browse Products
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Sustainable Uniforms 2024 Trends
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Explore eco-friendly workwear innovations and circular economy practices.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/medical-textile-innovation" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/healthcare-uniforms.jpg"
                      alt="Medical Textiles"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Medical Textile Innovation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Advanced healthcare fabrics transforming patient care and staff safety.
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/industrial-protective-clothing-advances" className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="/images/blog/industrial-protective-clothing.jpg"
                      alt="Industrial Workwear"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Industrial Protective Clothing Advances
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Latest safety innovations protecting Saudi Arabia's industrial workforce.
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
