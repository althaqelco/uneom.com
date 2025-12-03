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
  CheckCircleIcon,
  FireIcon,
  BeakerIcon,
  ShieldCheckIcon,
  StarIcon,
  SwatchIcon,
  CogIcon,
  ScaleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Ultimate Chef Uniform Design Guide: From Saudi Kitchens to World-Class Standards | UNEOM',
  description: 'Master chef uniform design with our comprehensive guide. Learn about heat-resistant fabrics, hygiene standards, cultural considerations for Saudi Arabian kitchens, and how to choose the perfect chef attire for hotels, restaurants, and catering services.',
  keywords: 'chef uniform Saudi Arabia, professional chef attire, kitchen uniform design, chef coat standards, culinary uniform KSA, restaurant chef wear, hotel kitchen uniforms, chef hat design, kitchen safety clothing, Saudi restaurant uniforms',
  openGraph: {
    title: 'Ultimate Chef Uniform Design Guide: From Saudi Kitchens to World-Class Standards',
    description: 'Comprehensive guide to designing professional chef uniforms that meet international standards while respecting Saudi Arabian cultural values',
    images: ['/images/hospitality/hospitality_uniform_chef.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-02-15T08:00:00Z',
    authors: ['UNEOM Culinary Team'],
  },
  alternates: {
    canonical: '/blog/chef-uniform-design-guide/',
    languages: {
      'en': '/blog/chef-uniform-design-guide/',
      'ar': '/ar/blog/chef-uniform-design-guide/',
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
  headline: 'Ultimate Chef Uniform Design Guide: From Saudi Kitchens to World-Class Standards',
  description: 'Comprehensive guide to designing professional chef uniforms for Saudi Arabian hospitality industry',
  image: 'https://uneom.com/images/hospitality/hospitality_uniform_chef.jpg',
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
  datePublished: '2025-02-15T08:00:00Z',
  dateModified: '2025-02-15T08:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/blog/chef-uniform-design-guide/'
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Art of Chef Attire' },
  { id: 'history', title: 'History & Tradition' },
  { id: 'components', title: 'Essential Uniform Components' },
  { id: 'fabrics', title: 'Fabric Technology & Safety' },
  { id: 'hierarchy', title: 'Kitchen Hierarchy Through Uniforms' },
  { id: 'saudi-considerations', title: 'Saudi Arabian Considerations' },
  { id: 'hygiene', title: 'Hygiene & Safety Standards' },
  { id: 'selection-guide', title: 'Selection & Sizing Guide' }
]

const chefUniformHistory = [
  {
    era: 'Mid-19th Century',
    milestone: 'Marie-Antoine Carême establishes the white chef coat',
    significance: 'White symbolizes cleanliness and professionalism in the kitchen'
  },
  {
    era: 'Late 19th Century',
    milestone: 'Auguste Escoffier standardizes the kitchen brigade system',
    significance: 'Uniform hierarchy reflects position and expertise'
  },
  {
    era: '20th Century',
    milestone: 'Introduction of heat-resistant and stain-repellent fabrics',
    significance: 'Enhanced safety and practicality in professional kitchens'
  },
  {
    era: '21st Century',
    milestone: 'Modern performance fabrics and cultural adaptations',
    significance: 'Balancing tradition with technology and cultural respect'
  }
]

const uniformComponents = [
  {
    item: 'Chef Coat (Jacket)',
    icon: ShieldCheckIcon,
    description: 'The cornerstone of chef attire, traditionally double-breasted for reversibility and protection',
    features: [
      'Double-breasted design for spill coverage',
      'Thick cotton or poly-cotton blend',
      'Cloth-covered buttons (won\'t melt or chip)',
      'Long sleeves for arm protection',
      'Breathable underarm panels'
    ],
    image: '/images/hospitality/hospitality_uniform_chef.jpg'
  },
  {
    item: 'Chef Pants',
    icon: CogIcon,
    description: 'Designed for comfort during long shifts with safety features',
    features: [
      'Loose fit for mobility and air circulation',
      'Traditional checkered or solid black patterns',
      'Elastic or drawstring waist',
      'Deep pockets for thermometers and tools',
      'Quick-release design for safety'
    ],
    image: '/images/hospitality/chef-uniform-professional.jpg'
  },
  {
    item: 'Chef Hat (Toque)',
    icon: StarIcon,
    description: 'Functional headwear that prevents hair contamination and absorbs sweat',
    features: [
      'Tall pleated toque for executive chefs',
      'Skull caps for line cooks',
      'Disposable caps for food prep',
      'Breathable mesh options',
      'Height indicates rank traditionally'
    ],
    image: '/images/hospitality/premium-chef-uniform.jpg'
  },
  {
    item: 'Apron',
    icon: SwatchIcon,
    description: 'Additional protection layer for the lower body',
    features: [
      'Bib aprons for full coverage',
      'Waist aprons for pastry chefs',
      'Waterproof options available',
      'Multiple pocket designs',
      'Adjustable neck and waist straps'
    ],
    image: '/images/hospitality/hospitality_uniform_resturant.jpg'
  },
  {
    item: 'Kitchen Footwear',
    icon: ShieldCheckIcon,
    description: 'Safety shoes designed for kitchen environments',
    features: [
      'Non-slip soles (essential)',
      'Steel or composite toe protection',
      'Water-resistant materials',
      'Closed-toe design',
      'Comfortable for 12+ hour shifts'
    ],
    image: '/images/hospitality/hospitality_uniform_department.jpg'
  },
  {
    item: 'Neckerchief',
    icon: SparklesIcon,
    description: 'Traditional accessory that absorbs sweat and adds style',
    features: [
      'Cotton or cotton blend',
      'Absorbs perspiration',
      'Color can indicate rank',
      'Easy to wash and replace',
      'Adds professional appearance'
    ],
    image: '/images/hospitality/hospitality_uniform_formal.jpg'
  }
]

const fabricTechnology = [
  {
    fabric: '100% Cotton',
    heatResistance: 'High',
    breathability: 'Excellent',
    durability: 'Moderate',
    care: 'Easy - Machine washable',
    bestFor: 'Traditional fine dining kitchens'
  },
  {
    fabric: 'Poly-Cotton Blend (65/35)',
    heatResistance: 'Moderate-High',
    breathability: 'Good',
    durability: 'High',
    care: 'Very Easy - Wrinkle resistant',
    bestFor: 'High-volume commercial kitchens'
  },
  {
    fabric: 'CoolMax® Technology',
    heatResistance: 'Moderate',
    breathability: 'Superior',
    durability: 'High',
    care: 'Easy - Quick dry',
    bestFor: 'Hot climate kitchens (Saudi Arabia)'
  },
  {
    fabric: 'Flame-Resistant Treated',
    heatResistance: 'Very High',
    breathability: 'Good',
    durability: 'Very High',
    care: 'Special care required',
    bestFor: 'Open flame cooking, grills'
  },
  {
    fabric: 'Bamboo-Cotton Blend',
    heatResistance: 'Moderate',
    breathability: 'Excellent',
    durability: 'Moderate',
    care: 'Easy - Antimicrobial',
    bestFor: 'Eco-conscious establishments'
  }
]

const kitchenHierarchy = [
  {
    position: 'Executive Chef (Chef de Cuisine)',
    uniform: 'Full white with tall toque (100 pleats traditionally)',
    distinguishing: 'Gold or black piping, embroidered name, premium fabric'
  },
  {
    position: 'Sous Chef',
    uniform: 'White coat with medium toque',
    distinguishing: 'Silver piping, slightly shorter toque'
  },
  {
    position: 'Chef de Partie (Station Chef)',
    uniform: 'White coat with skull cap or short toque',
    distinguishing: 'Department color accents (pastry, garde manger, etc.)'
  },
  {
    position: 'Commis Chef (Junior Cook)',
    uniform: 'White coat with skull cap',
    distinguishing: 'Basic design, no embellishments'
  },
  {
    position: 'Kitchen Porter/Prep Cook',
    uniform: 'Colored coat or apron with cap',
    distinguishing: 'Non-white colors to differentiate'
  }
]

const saudiConsiderations = [
  {
    aspect: 'Climate Adaptation',
    challenge: 'Extreme heat in Saudi Arabia increases kitchen temperatures',
    solutions: [
      'Moisture-wicking fabric technology',
      'Lightweight breathable materials',
      'Mesh ventilation panels',
      'Cooling collar inserts',
      'Short-sleeve options for prep areas'
    ]
  },
  {
    aspect: 'Cultural Modesty',
    challenge: 'Respecting Islamic dress codes while maintaining functionality',
    solutions: [
      'Full-length sleeves as standard',
      'Modest neckline designs',
      'Hijab-compatible headwear for women',
      'Loose-fitting designs',
      'Extended length coats available'
    ]
  },
  {
    aspect: 'Halal Kitchen Requirements',
    challenge: 'Visual distinction for halal food preparation',
    solutions: [
      'Color-coded aprons for halal stations',
      'Dedicated uniform sets for halal areas',
      'Clear labeling and identification',
      'Separate storage for halal kitchen uniforms',
      'Training on cross-contamination prevention'
    ]
  },
  {
    aspect: 'Local Cuisine Integration',
    challenge: 'Honoring Saudi culinary traditions',
    solutions: [
      'Traditional embroidery options',
      'Saudi-inspired color accents',
      'Custom designs for Saudi restaurants',
      'Heritage pattern integration',
      'Arabic name embroidery'
    ]
  }
]

const hygieneStandards = [
  {
    standard: 'SFDA (Saudi FDA) Requirements',
    requirements: [
      'Clean uniforms worn only in kitchen',
      'Hair completely covered',
      'No jewelry except plain wedding band',
      'Closed-toe non-slip footwear',
      'Regular uniform changes (minimum daily)'
    ]
  },
  {
    standard: 'HACCP Compliance',
    requirements: [
      'Light-colored uniforms for contamination visibility',
      'Laundering at 60°C minimum',
      'Separate storage from street clothes',
      'Disposable elements where required',
      'Regular uniform inspections'
    ]
  },
  {
    standard: 'International Hotel Standards',
    requirements: [
      'Multiple uniform sets per employee',
      'Professional laundering services',
      'Daily uniform issue system',
      'Grooming standards enforcement',
      'Regular replacement schedule'
    ]
  }
]

const selectionGuide = [
  {
    venue: 'Fine Dining Restaurant',
    recommended: 'Traditional white double-breasted coat, tall toque, premium cotton',
    budget: 'SAR 400-800 per chef',
    replacement: 'Every 6-12 months'
  },
  {
    venue: 'Hotel Kitchen',
    recommended: 'Branded poly-cotton blend, professional headwear, coordinated aprons',
    budget: 'SAR 300-600 per chef',
    replacement: 'Every 6-9 months'
  },
  {
    venue: 'Catering Company',
    recommended: 'Durable easy-care fabrics, portable-friendly designs',
    budget: 'SAR 250-500 per chef',
    replacement: 'Every 4-6 months'
  },
  {
    venue: 'Fast Casual Restaurant',
    recommended: 'Modern chef coats, comfortable caps, branded aprons',
    budget: 'SAR 200-400 per chef',
    replacement: 'Every 3-6 months'
  },
  {
    venue: 'Industrial/Hospital Kitchen',
    recommended: 'High-durability fabrics, safety-focused design, disposable elements',
    budget: 'SAR 300-500 per chef',
    replacement: 'Every 3-4 months'
  }
]

export default function ChefUniformDesignGuidePage() {
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
              <li><span className="text-gray-900 font-medium">Chef Uniform Design Guide</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/hospitality/hospitality_uniform_chef.jpg"
              alt="Professional Chef Uniform"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium border border-orange-400/30">
                  Hospitality
                </span>
                <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium border border-amber-400/30">
                  Culinary
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Ultimate Chef Uniform Design Guide
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Master the art and science of professional chef attire. From traditional 
                white coats to modern performance fabrics, discover how to outfit your 
                culinary team for success in Saudi Arabian kitchens.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Culinary Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <TagIcon className="h-5 w-5" />
                  <span>February 15, 2025</span>
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
                    <TagIcon className="h-5 w-5 text-orange-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="mt-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Need Chef Uniforms?</h3>
                  <p className="text-sm text-orange-100 mb-4">
                    UNEOM supplies professional chef attire to Saudi Arabia's finest restaurants and hotels.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-white text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Art of Chef Attire</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The chef's uniform is more than just clothing—it's a symbol of culinary excellence, 
                  a practical tool for kitchen safety, and a visual representation of professionalism 
                  that has evolved over centuries. In Saudi Arabia's rapidly growing hospitality sector, 
                  understanding the nuances of chef uniform design is essential for any establishment 
                  that takes its culinary program seriously.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/hospitality/hospitality_uniform_chef.jpg"
                    alt="Professional chef in traditional white uniform"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="font-bold text-gray-900 mb-3">Why Chef Uniforms Matter</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <FireIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-700"><strong>Safety</strong><br/>Protection from burns, spills, and kitchen hazards</p>
                    </div>
                    <div className="text-center">
                      <BeakerIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-700"><strong>Hygiene</strong><br/>Meeting food safety standards and regulations</p>
                    </div>
                    <div className="text-center">
                      <StarIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-700"><strong>Professionalism</strong><br/>Projecting expertise and culinary excellence</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">History & Tradition</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The modern chef uniform has a rich history dating back to the mid-19th century. 
                  Understanding this heritage helps us appreciate why certain elements remain 
                  standard in professional kitchens worldwide.
                </p>

                <div className="space-y-4">
                  {chefUniformHistory.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap">
                        {item.era}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.milestone}</p>
                        <p className="text-sm text-gray-600">{item.significance}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-slate-900 text-white rounded-xl p-6">
                  <h3 className="font-bold mb-3">Did You Know?</h3>
                  <p className="text-gray-300">
                    The traditional tall chef's hat (toque) was said to have 100 pleats, 
                    representing the 100 ways a chef can prepare an egg. While this is largely 
                    symbolic today, the toque remains a powerful symbol of culinary mastery.
                  </p>
                </div>
              </section>

              {/* Components Section */}
              <section id="components" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Uniform Components</h2>
                
                <div className="space-y-8">
                  {uniformComponents.map((component, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={component.image}
                            alt={component.item}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-orange-100 p-2 rounded-lg">
                              <component.icon className="h-6 w-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{component.item}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{component.description}</p>
                          <ul className="space-y-2">
                            {component.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Fabrics Section */}
              <section id="fabrics" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fabric Technology & Safety</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The right fabric choice can make the difference between a comfortable, 
                  productive kitchen team and one struggling with heat and discomfort. 
                  Here's a comprehensive comparison of fabric options:
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Fabric</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Heat Resistance</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Breathability</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Durability</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {fabricTechnology.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-900">{item.fabric}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              item.heatResistance === 'Very High' ? 'bg-red-100 text-red-700' :
                              item.heatResistance === 'High' ? 'bg-orange-100 text-orange-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {item.heatResistance}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              item.breathability === 'Superior' || item.breathability === 'Excellent' ? 'bg-green-100 text-green-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {item.breathability}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-sm">{item.durability}</td>
                          <td className="px-4 py-3 text-gray-600 text-sm">{item.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Hierarchy Section */}
              <section id="hierarchy" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kitchen Hierarchy Through Uniforms</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  In professional kitchens, uniforms communicate rank and responsibility at a glance. 
                  This visual hierarchy helps maintain order during the intense pace of service.
                </p>

                <div className="space-y-4">
                  {kitchenHierarchy.map((role, index) => (
                    <div key={index} className={`rounded-xl p-6 border ${
                      index === 0 ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' :
                      index === 1 ? 'bg-gray-50 border-gray-300' :
                      'bg-white border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          index === 0 ? 'bg-amber-500 text-white' :
                          index === 1 ? 'bg-gray-400 text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {index + 1}
                        </span>
                        <h3 className="font-bold text-gray-900">{role.position}</h3>
                      </div>
                      <p className="text-gray-700 mb-1"><strong>Uniform:</strong> {role.uniform}</p>
                      <p className="text-gray-600 text-sm"><strong>Distinguishing Features:</strong> {role.distinguishing}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Saudi Considerations */}
              <section id="saudi-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Saudi Arabian Considerations</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Operating kitchens in Saudi Arabia presents unique challenges and opportunities. 
                  Here's how to adapt chef uniforms for the local context:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {saudiConsiderations.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h3 className="font-bold text-green-900 mb-2">{item.aspect}</h3>
                      <p className="text-green-800 text-sm mb-4">{item.challenge}</p>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Solutions:</h4>
                        <ul className="space-y-1">
                          {item.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Hygiene Standards */}
              <section id="hygiene" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hygiene & Safety Standards</h2>
                
                <div className="space-y-6">
                  {hygieneStandards.map((standard, index) => (
                    <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="font-bold text-blue-900 mb-4">{standard.standard}</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {standard.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                            <ShieldCheckIcon className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Selection Guide */}
              <section id="selection-guide" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Selection & Sizing Guide</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choose the right chef uniforms based on your venue type, budget, and operational needs:
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Venue Type</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Recommended Style</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Budget/Chef</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Replacement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectionGuide.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-900">{item.venue}</td>
                          <td className="px-4 py-3 text-gray-600 text-sm">{item.recommended}</td>
                          <td className="px-4 py-3">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                              {item.budget}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-sm">{item.replacement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Outfit Your Kitchen Team for Success</h2>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    UNEOM provides premium chef uniforms to Saudi Arabia's finest hotels, restaurants, 
                    and catering companies. From traditional white coats to modern performance wear, 
                    we deliver quality that meets international standards.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
                    >
                      Request Consultation
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/industries/hospitality"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      View Hospitality Solutions
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


