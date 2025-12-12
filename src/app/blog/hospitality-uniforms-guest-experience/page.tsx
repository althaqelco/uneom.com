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
  StarIcon,
  BuildingOfficeIcon,
  HeartIcon,
  GlobeAltIcon,
  UserGroupIcon,
  SunIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hospitality Uniforms in Saudi Arabia: Creating Unforgettable Guest Experiences | UNEOM',
  description: 'Discover how hospitality uniforms impact guest experience in Saudi hotels and restaurants. Expert guide on uniform design, cultural considerations, staff appearance standards, and brand identity for 5-star hotels, resorts, and restaurants in Riyadh, Jeddah, and across KSA.',
  keywords: 'hospitality uniforms Saudi Arabia, hotel staff uniforms KSA, restaurant uniforms Riyadh, 5-star hotel uniforms, concierge uniform design, front desk attire, housekeeping uniforms, F&B staff uniforms, luxury hotel workwear, Saudi hospitality industry',
  openGraph: {
    title: 'Hospitality Uniforms in Saudi Arabia: Creating Unforgettable Guest Experiences',
    description: 'How professional uniforms transform guest experience in Saudi hospitality sector',
    images: ['/images/hospitality/hospitality_uniform_hotel_service.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-02-01T08:00:00Z',
    authors: ['UNEOM Hospitality Team'],
  },
  alternates: {
    canonical: '/blog/hospitality-uniforms-guest-experience/',
    languages: {
      'en': '/blog/hospitality-uniforms-guest-experience/',
      'ar': '/ar/blog/hospitality-uniforms-guest-experience/',
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
  headline: 'Hospitality Uniforms in Saudi Arabia: Creating Unforgettable Guest Experiences',
  description: 'Comprehensive guide on hospitality uniforms and their impact on guest experience in Saudi Arabia',
  image: 'https://uneom.com/images/hospitality/hospitality_uniform_hotel_service.jpg',
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
  datePublished: '2025-02-01T08:00:00Z',
  dateModified: '2025-02-01T08:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/blog/hospitality-uniforms-guest-experience/'
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Power of First Impressions' },
  { id: 'guest-psychology', title: 'Guest Psychology & Uniform Impact' },
  { id: 'department-guide', title: 'Department-Specific Uniform Guide' },
  { id: 'cultural-considerations', title: 'Cultural & Modest Design' },
  { id: 'fabric-technology', title: 'Fabric Technology for Hospitality' },
  { id: 'brand-integration', title: 'Brand Identity Integration' },
  { id: 'implementation', title: 'Implementation Best Practices' },
  { id: 'case-studies', title: 'Saudi Success Stories' }
]

const guestPsychologyStats = [
  {
    stat: '94%',
    description: 'of guests form their first impression within 7 seconds of interaction',
    source: 'Cornell Hospitality Research'
  },
  {
    stat: '73%',
    description: 'of guests associate staff appearance with overall service quality',
    source: 'J.D. Power Hotel Study'
  },
  {
    stat: '68%',
    description: 'higher trust level when staff wear professional, well-fitted uniforms',
    source: 'Hospitality Net Survey'
  },
  {
    stat: '45%',
    description: 'increase in positive reviews mentioning "professional staff appearance"',
    source: 'TripAdvisor Analysis 2024'
  }
]

const departmentUniforms = [
  {
    department: 'Front Desk & Reception',
    icon: BuildingOfficeIcon,
    color: 'blue',
    image: '/images/hospitality/hospitality_reception.jpg',
    keyElements: [
      'Tailored blazers or suits in brand colors',
      'Crisp, pressed dress shirts',
      'Name badges with title and language flags',
      'Elegant scarves or ties as accent pieces',
      'Polished professional footwear'
    ],
    considerations: [
      'Must convey authority and approachability',
      'Standing for extended periods - comfort essential',
      'Brand colors prominent for recognition',
      'Pockets for essential tools (pens, keys)'
    ],
    fabrics: 'Wool blends, premium polyester, wrinkle-resistant materials'
  },
  {
    department: 'Concierge Services',
    icon: StarIcon,
    color: 'amber',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg',
    keyElements: [
      'Distinctive uniform differentiating from front desk',
      'Premium fabrics conveying exclusivity',
      'Signature accessories (lapel pins, cufflinks)',
      'Optional traditional elements for local flavor',
      'Comfortable yet elegant footwear'
    ],
    considerations: [
      'Represents the highest service level',
      'Must be memorable and recognizable',
      'Often photographed with guests',
      'Needs to work for indoor/outdoor movement'
    ],
    fabrics: 'Fine wool, silk accents, luxury cotton blends'
  },
  {
    department: 'Housekeeping',
    icon: SparklesIcon,
    color: 'teal',
    image: '/images/hospitality/hospitality_uniform_department.jpg',
    keyElements: [
      'Functional tunics or dresses',
      'Comfortable, supportive footwear',
      'Deep pockets for supplies',
      'Easy-care, stain-resistant fabrics',
      'Modest designs respecting cultural values'
    ],
    considerations: [
      'Heavy physical work - mobility essential',
      'Frequent bending and reaching',
      'Exposure to cleaning chemicals',
      'Must look fresh throughout shift'
    ],
    fabrics: 'Poly-cotton blends, antimicrobial treatments, stretch fabrics'
  },
  {
    department: 'Food & Beverage Service',
    icon: HeartIcon,
    color: 'purple',
    image: '/images/hospitality/hospitality_uniform_resturant.jpg',
    keyElements: [
      'Elegant vests or waistcoats',
      'Crisp white or colored dress shirts',
      'Aprons for wine service or casual dining',
      'Bow ties or neckties',
      'Non-slip, comfortable footwear'
    ],
    considerations: [
      'Constant movement and carrying items',
      'Food and beverage spill resistance',
      'Fine dining vs. casual venue differentiation',
      'Temperature variations (kitchen to dining)'
    ],
    fabrics: 'Stain-resistant poly blends, breathable materials, easy-wash fabrics'
  },
  {
    department: 'Spa & Wellness',
    icon: SunIcon,
    color: 'green',
    image: '/images/hospitality/hospitality_spa_uniform.jpg',
    keyElements: [
      'Relaxed, flowing tunics or wrap tops',
      'Comfortable pants or loose trousers',
      'Soft, natural color palettes',
      'Minimal accessories',
      'Quiet, comfortable footwear'
    ],
    considerations: [
      'Creates calm, relaxing atmosphere',
      'Physical treatments require mobility',
      'Oil and product resistance needed',
      'Must maintain serene appearance'
    ],
    fabrics: 'Natural fibers, bamboo blends, soft cotton, moisture-wicking materials'
  },
  {
    department: 'Management & Executive',
    icon: UserGroupIcon,
    color: 'gray',
    image: '/images/hospitality/hospitality_uniform_management.jpg',
    keyElements: [
      'Distinguished suits or executive attire',
      'Premium quality fabrics',
      'Subtle brand identification',
      'Professional accessories',
      'Impeccable grooming standards'
    ],
    considerations: [
      'Must command respect and authority',
      'Represents brand at highest level',
      'Often in guest-facing situations',
      'Needs to transition between venues'
    ],
    fabrics: 'Premium wool, cashmere blends, fine cotton shirting'
  }
]

const culturalConsiderations = [
  {
    aspect: 'Modest Female Attire',
    description: 'Designs that respect Islamic dress codes while maintaining professional elegance',
    solutions: [
      'Longer sleeve options (full or three-quarter)',
      'Higher necklines with elegant detailing',
      'Longer hemlines (below knee or full length)',
      'Hijab-friendly collar designs',
      'Loose-fitting cuts that don\'t compromise style'
    ]
  },
  {
    aspect: 'Traditional Elements',
    description: 'Incorporating Saudi heritage into uniform design for authentic local identity',
    solutions: [
      'Subtle geometric patterns inspired by Islamic art',
      'Traditional Saudi color palettes (gold, green, white)',
      'Optional thobe-inspired elements for male staff',
      'Embroidery featuring local motifs',
      'Accessories reflecting regional craftsmanship'
    ]
  },
  {
    aspect: 'International Guest Expectations',
    description: 'Balancing local culture with international hospitality standards',
    solutions: [
      'Universal professional appearance standards',
      'Multi-language name badges',
      'Culturally neutral core uniforms with local accents',
      'Seasonal variations for international events',
      'Flexibility for diverse staff backgrounds'
    ]
  }
]

const fabricTechnology = [
  {
    technology: 'Stain-Shield Treatment',
    benefit: 'Repels liquids and prevents staining from spills',
    application: 'F&B service, housekeeping, kitchen staff',
    durability: '50+ washes'
  },
  {
    technology: 'Antimicrobial Finish',
    benefit: 'Prevents odor-causing bacteria, keeps uniforms fresh',
    application: 'All departments, especially housekeeping and F&B',
    durability: 'Garment lifetime'
  },
  {
    technology: 'Climate Control Fabrics',
    benefit: 'Temperature regulation for indoor/outdoor transitions',
    application: 'Valet, bellhop, outdoor event staff',
    durability: 'Inherent to fabric'
  },
  {
    technology: 'Wrinkle-Resistant Finish',
    benefit: 'Maintains crisp appearance throughout long shifts',
    application: 'Front desk, management, F&B service',
    durability: '100+ washes'
  },
  {
    technology: 'Stretch Comfort Blend',
    benefit: 'Allows freedom of movement without losing shape',
    application: 'Housekeeping, spa, active service roles',
    durability: 'Inherent to fabric'
  },
  {
    technology: 'UV Protection',
    benefit: 'Protects outdoor staff from harmful sun exposure',
    application: 'Pool attendants, valet, outdoor events',
    durability: 'Garment lifetime'
  }
]

const brandIntegrationElements = [
  {
    element: 'Color Coordination',
    description: 'Uniforms that incorporate brand color palette while maintaining versatility',
    tips: [
      'Use primary brand color for accent pieces',
      'Neutral base colors for easy coordination',
      'Department differentiation through color coding',
      'Consider seasonal color variations'
    ]
  },
  {
    element: 'Logo Placement',
    description: 'Strategic positioning of brand identity elements',
    tips: [
      'Embroidered logos on chest or sleeve',
      'Subtle woven patterns featuring brand motifs',
      'Name badges with consistent brand styling',
      'Belt buckles or cufflinks with brand elements'
    ]
  },
  {
    element: 'Design Language',
    description: 'Uniform silhouettes that reflect brand positioning',
    tips: [
      'Modern cuts for contemporary brands',
      'Classic tailoring for traditional luxury',
      'Relaxed elegance for resort properties',
      'Cultural fusion for authentic local brands'
    ]
  }
]

const saudiSuccessStories = [
  {
    property: 'Luxury Resort, Red Sea',
    challenge: 'Creating distinctive uniforms for a new eco-luxury destination',
    solution: 'Developed sustainable uniforms using recycled ocean plastic, featuring Red Sea-inspired colors and patterns',
    result: '98% staff satisfaction, featured in international hospitality publications',
    image: '/images/hospitality/hospitality_uniform_hotel.jpg'
  },
  {
    property: '5-Star Hotel, Riyadh',
    challenge: 'Unifying brand identity across 8 food & beverage outlets',
    solution: 'Created modular uniform system with shared base pieces and outlet-specific accessories',
    result: '30% reduction in uniform costs, improved brand cohesion',
    image: '/images/hospitality/luxury-hotel-uniforms.jpg'
  },
  {
    property: 'Heritage Boutique Hotel, Jeddah',
    challenge: 'Reflecting Saudi heritage while meeting international standards',
    solution: 'Incorporated traditional Al-Balad architectural patterns into contemporary uniform designs',
    result: 'TripAdvisor "Staff Appearance" mentions increased 45%',
    image: '/images/hospitality/hospitality_full_look.jpg'
  }
]

export default function HospitalityUniformsGuestExperiencePage() {
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
              <li><span className="text-gray-900 font-medium">Hospitality Uniforms & Guest Experience</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/hospitality/hospitality_uniform_hotel_service.jpg"
              alt="Hospitality Uniforms"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium border border-amber-400/30">
                  Hospitality
                </span>
                <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-medium border border-orange-400/30">
                  Guest Experience
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hospitality Uniforms: Creating Unforgettable Guest Experiences
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover how professional uniforms transform guest perceptions and elevate
                service quality in Saudi Arabia's thriving hospitality sector. From luxury
                hotels to boutique restaurants.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Hospitality Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>14 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  <span>February 1, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Table of Contents */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TagIcon className="h-5 w-5 text-amber-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="mt-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Need Hospitality Uniforms?</h3>
                  <p className="text-sm text-amber-100 mb-4">
                    UNEOM serves Saudi Arabia's finest hotels, resorts, and restaurants.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-white text-amber-600 px-4 py-2 rounded-lg font-bold hover:bg-amber-50 transition-colors"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of First Impressions</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  In Saudi Arabia's rapidly expanding hospitality sector, the uniform your staff wears is
                  far more than a dress code—it's a powerful statement of your brand's commitment to
                  excellence. As the Kingdom welcomes millions of visitors for tourism, business, and
                  religious pilgrimage, the competition for exceptional guest experiences has never been
                  more intense.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/hospitality/executive-hospitality-suit.jpg"
                    alt="Professional hospitality staff in uniforms"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed">
                  From the moment a guest steps through your doors, every visual cue shapes their
                  perception. Staff uniforms communicate professionalism, attention to detail, and
                  the level of service they can expect. This guide explores how to leverage uniform
                  design to create memorable guest experiences that drive loyalty and positive reviews.
                </p>
              </section>

              {/* Guest Psychology */}
              <section id="guest-psychology" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Guest Psychology & Uniform Impact</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Research consistently demonstrates the profound psychological impact of staff
                  appearance on guest perceptions and behavior:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {guestPsychologyStats.map((item, index) => (
                    <div key={index} className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                      <div className="text-4xl font-bold text-amber-600 mb-2">{item.stat}</div>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                      <p className="text-xs text-gray-500">Source: {item.source}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">The Halo Effect in Hospitality</h3>
                  <p className="text-gray-700">
                    When guests perceive staff as professionally dressed, they unconsciously attribute
                    other positive qualities—competence, trustworthiness, attention to detail—to the
                    entire organization. This "halo effect" extends to their perception of room
                    cleanliness, food quality, and overall value. Conversely, poorly maintained or
                    ill-fitting uniforms can trigger negative assumptions about service quality.
                  </p>
                </div>
              </section>

              {/* Department Guide */}
              <section id="department-guide" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Department-Specific Uniform Guide</h2>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Each department has unique functional requirements and guest interaction patterns.
                  Here's a comprehensive guide to uniform design by department:
                </p>

                <div className="space-y-8">
                  {departmentUniforms.map((dept, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={dept.image}
                            alt={`${dept.department} uniforms`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`bg-${dept.color}-100 p-2 rounded-lg`}>
                              <dept.icon className={`h-6 w-6 text-${dept.color}-600`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{dept.department}</h3>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Key Elements:</h4>
                              <ul className="space-y-1">
                                {dept.keyElements.map((element, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{element}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Considerations:</h4>
                              <ul className="space-y-1">
                                {dept.considerations.map((consideration, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-amber-500">•</span>
                                    <span>{consideration}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-3">
                            <span className="text-sm text-gray-700">
                              <strong>Recommended Fabrics:</strong> {dept.fabrics}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cultural Considerations */}
              <section id="cultural-considerations" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural & Modest Design</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Saudi Arabia's hospitality sector uniquely balances international luxury standards
                  with cultural values. Successful uniform programs respect these considerations while
                  creating world-class guest experiences:
                </p>

                <div className="space-y-6">
                  {culturalConsiderations.map((item, index) => (
                    <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="font-bold text-purple-900 mb-2">{item.aspect}</h3>
                      <p className="text-purple-800 mb-4">{item.description}</p>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Solutions:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {item.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Fabric Technology */}
              <section id="fabric-technology" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fabric Technology for Hospitality</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Modern fabric technologies solve the unique challenges of hospitality environments,
                  keeping staff comfortable and uniforms looking professional throughout demanding shifts:
                </p>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Technology</th>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Benefit</th>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Best For</th>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Durability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {fabricTechnology.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">{item.technology}</td>
                          <td className="px-6 py-4 text-gray-600">{item.benefit}</td>
                          <td className="px-6 py-4 text-gray-600 text-sm">{item.application}</td>
                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                              {item.durability}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Brand Integration */}
              <section id="brand-integration" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Brand Identity Integration</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Uniforms are one of the most visible expressions of your brand. Strategic design
                  ensures they reinforce your brand identity at every guest touchpoint:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {brandIntegrationElements.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <SwatchIcon className="h-5 w-5 text-amber-600" />
                        <h3 className="font-bold text-gray-900">{item.element}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Case Studies */}
              <section id="case-studies" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Saudi Success Stories</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  See how leading Saudi hospitality properties have transformed their guest experience
                  through strategic uniform programs:
                </p>

                <div className="space-y-6">
                  {saudiSuccessStories.map((story, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-48 md:h-auto">
                          <Image
                            src={story.image}
                            alt={story.property}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <h3 className="font-bold text-gray-900 mb-3">{story.property}</h3>
                          <div className="space-y-3">
                            <div>
                              <span className="text-sm font-semibold text-gray-500">Challenge:</span>
                              <p className="text-gray-700">{story.challenge}</p>
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-gray-500">Solution:</span>
                              <p className="text-gray-700">{story.solution}</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3">
                              <span className="text-sm font-semibold text-green-800">Result:</span>
                              <p className="text-green-700">{story.result}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Elevate Your Guest Experience</h2>
                  <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
                    UNEOM partners with Saudi Arabia's leading hotels, resorts, and restaurants to create
                    distinctive uniform programs that enhance brand identity and guest satisfaction.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/contact"
                      className="bg-white text-amber-600 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors inline-flex items-center gap-2"
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
