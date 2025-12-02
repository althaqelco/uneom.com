import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  CheckCircleIcon,
  FlagIcon,
  HeartIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'School Uniforms & National Identity: How Saudi Schools Foster Belonging | UNEOM',
  description: 'Explore how school uniforms in Saudi Arabia promote national identity, cultural values, and student belonging. Comprehensive guide on uniform design principles, cultural elements, and educational benefits for Saudi schools aligned with Vision 2030.',
  keywords: 'Saudi school uniforms, national identity education, school dress code KSA, Saudi student uniforms, educational uniforms Riyadh, school attire guidelines, Vision 2030 education, cultural school uniforms, private school uniforms Saudi, international school uniforms KSA',
  openGraph: {
    title: 'School Uniforms & National Identity: How Saudi Schools Foster Belonging',
    description: 'How Saudi Arabian schools use uniforms to promote national pride and student unity',
    images: ['/images/education/premium-school-uniforms.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-03-01T08:00:00Z',
    authors: ['UNEOM Education Team'],
  },
  alternates: {
    canonical: '/blog/school-uniforms-national-identity-saudi/',
    languages: {
      'en': '/blog/school-uniforms-national-identity-saudi/',
      'ar': '/ar/blog/school-uniforms-national-identity-saudi/',
    }
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'School Uniforms & National Identity: How Saudi Schools Foster Belonging',
  description: 'Comprehensive guide on school uniforms and national identity in Saudi Arabian education',
  image: 'https://uneom.com/images/education/premium-school-uniforms.jpg',
  author: {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com'
  },
  datePublished: '2025-03-01T08:00:00Z',
  dateModified: '2025-03-01T08:00:00Z'
}

const tableOfContents = [
  { id: 'introduction', title: 'The Power of Uniform in Education' },
  { id: 'national-identity', title: 'Uniforms & National Identity' },
  { id: 'psychological-benefits', title: 'Psychological Benefits' },
  { id: 'design-principles', title: 'Design Principles for Saudi Schools' },
  { id: 'cultural-elements', title: 'Integrating Cultural Elements' },
  { id: 'vision-2030', title: 'Vision 2030 Alignment' },
  { id: 'implementation', title: 'Implementation Guidelines' },
  { id: 'case-studies', title: 'Success Stories' }
]

const psychologicalBenefits = [
  {
    benefit: 'Sense of Belonging',
    description: 'Uniforms create visual unity, helping students feel part of a larger community',
    research: 'Studies show 78% of students report stronger school connection when wearing uniforms',
    icon: HeartIcon
  },
  {
    benefit: 'Reduced Social Pressure',
    description: 'Eliminates clothing-based competition and socioeconomic distinctions',
    research: 'Schools report 45% decrease in clothing-related bullying after uniform implementation',
    icon: ShieldCheckIcon
  },
  {
    benefit: 'Enhanced Focus',
    description: 'Reduces decision fatigue and morning stress, allowing focus on academics',
    research: 'Students in uniform schools show 12% improvement in academic engagement',
    icon: AcademicCapIcon
  },
  {
    benefit: 'Pride & Discipline',
    description: 'Wearing a uniform instills pride in the institution and promotes self-discipline',
    research: '67% of educators observe improved student behavior in uniform environments',
    icon: StarIcon
  }
]

const nationalIdentityElements = [
  {
    element: 'Color Symbolism',
    traditional: 'Saudi green represents Islamic heritage and national identity',
    modern: 'White symbolizes purity and the Saudi flag',
    application: 'Primary colors in uniform design with accent details'
  },
  {
    element: 'Traditional Patterns',
    traditional: 'Geometric patterns from Islamic art and Saudi architecture',
    modern: 'Subtle incorporation in embroidery, buttons, or trims',
    application: 'School crests and badges featuring traditional motifs'
  },
  {
    element: 'Modest Design',
    traditional: 'Respect for Islamic dress codes and cultural values',
    modern: 'Contemporary cuts that balance modesty with comfort',
    application: 'Appropriate lengths, coverage, and loose-fitting options'
  },
  {
    element: 'Quality Materials',
    traditional: 'Excellence reflecting Saudi Arabia\'s global standing',
    modern: 'Premium fabrics suitable for the climate',
    application: 'Durable, comfortable materials that last the school year'
  }
]

const designPrinciples = [
  {
    principle: 'Climate Adaptation',
    description: 'Designs must accommodate Saudi Arabia\'s hot climate',
    guidelines: [
      'Breathable, moisture-wicking fabrics',
      'Lightweight materials for most of the year',
      'Optional layers for air-conditioned classrooms',
      'UV-protective fabrics for outdoor activities'
    ]
  },
  {
    principle: 'Modesty Standards',
    description: 'Uniforms should respect Islamic dress requirements',
    guidelines: [
      'Appropriate sleeve lengths (options for full or three-quarter)',
      'Knee-length or longer skirts/dresses for girls',
      'Loose-fitting cuts that don\'t reveal body shape',
      'Hijab-compatible collar designs for female students'
    ]
  },
  {
    principle: 'Durability & Practicality',
    description: 'School uniforms must withstand active student life',
    guidelines: [
      'Reinforced seams and stress points',
      'Stain-resistant and easy-care fabrics',
      'Machine washable materials',
      'Color-fast dyes that won\'t fade'
    ]
  },
  {
    principle: 'Age-Appropriate Design',
    description: 'Uniforms should suit different developmental stages',
    guidelines: [
      'Comfortable, flexible designs for primary students',
      'Slightly more structured looks for middle school',
      'Professional appearance for high school students',
      'Easy closures for younger children (velcro, elastic)'
    ]
  }
]

const vision2030Alignment = [
  {
    pillar: 'Quality of Life',
    uniformContribution: 'Comfortable, well-designed uniforms support student wellbeing and confidence',
    outcome: 'Improved educational experience and student satisfaction'
  },
  {
    pillar: 'National Identity',
    uniformContribution: 'Uniforms that incorporate Saudi cultural elements reinforce heritage pride',
    outcome: 'Students develop strong sense of national belonging'
  },
  {
    pillar: 'Economic Development',
    uniformContribution: 'Support for local textile manufacturing and employment',
    outcome: 'Contribution to Saudi industrial diversification'
  },
  {
    pillar: 'Education Excellence',
    uniformContribution: 'Professional appearance standards support academic focus',
    outcome: 'Enhanced learning environment and outcomes'
  }
]

const schoolTypeGuidelines = [
  {
    type: 'Government Schools',
    characteristics: [
      'Standardized designs across the Kingdom',
      'Ministry of Education specifications',
      'Cost-effective, durable materials',
      'Traditional color schemes'
    ],
    image: '/images/education/uniform_school-2.jpg'
  },
  {
    type: 'Private Schools',
    characteristics: [
      'Distinctive designs reflecting school identity',
      'Higher quality fabrics and finishes',
      'Custom colors and branding',
      'Multiple uniform options (formal, PE, events)'
    ],
    image: '/images/education/premium-school-uniforms.jpg'
  },
  {
    type: 'International Schools',
    characteristics: [
      'Balance of global and local design elements',
      'Cultural sensitivity with international standards',
      'Multiple climate-appropriate options',
      'Integration of school nationality and Saudi context'
    ],
    image: '/images/education/modern-education-uniforms.jpg'
  }
]

const successStories = [
  {
    school: 'Leading Private School, Riyadh',
    challenge: 'Creating uniforms that balanced Saudi heritage with modern educational environment',
    solution: 'Developed a uniform line featuring subtle Saudi geometric patterns in modern silhouettes',
    result: '92% parent satisfaction, featured as model program by education ministry',
    image: '/images/education/uniform_educations_blog-1.jpg'
  },
  {
    school: 'International School Group, Jeddah',
    challenge: 'Unifying 5 campuses with different cultural backgrounds',
    solution: 'Created base uniform with interchangeable cultural elements and house colors',
    result: 'Improved school community cohesion, 30% reduction in uniform-related complaints',
    image: '/images/education/uniform_educations_blog-2.jpg'
  }
]

export default function SchoolUniformsNationalIdentityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link></li>
              <li><span className="text-gray-400">/</span></li>
              <li><span className="text-gray-900 font-medium">School Uniforms & National Identity</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/education/premium-school-uniforms.jpg"
              alt="Saudi School Uniforms"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium border border-green-400/30">
                  Education
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium border border-emerald-400/30">
                  National Identity
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                School Uniforms & National Identity: How Saudi Schools Foster Belonging
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Explore the profound role of school uniforms in building national pride, 
                cultural connection, and student unity in Saudi Arabian education.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>UNEOM Education Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  <span>March 1, 2025</span>
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
                    <TagIcon className="h-5 w-5 text-green-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA */}
                <div className="mt-6 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Need School Uniforms?</h3>
                  <p className="text-sm text-green-100 mb-4">
                    UNEOM serves 200+ schools across Saudi Arabia with quality uniforms.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-white text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-green-50 transition-colors"
                  >
                    Get School Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Uniform in Education</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  In Saudi Arabia's evolving educational landscape, school uniforms serve a purpose far 
                  beyond dress code compliance. They are powerful tools for building national identity, 
                  fostering belonging, and creating equitable learning environments where students can 
                  focus on what matters most—their education.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/education/premium-school-uniforms.jpg"
                    alt="Saudi students in school uniforms"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed">
                  As the Kingdom advances its Vision 2030 educational goals, the design and implementation 
                  of school uniforms has become an integral part of creating world-class educational 
                  experiences that honor Saudi heritage while preparing students for global citizenship.
                </p>
              </section>

              {/* Psychological Benefits */}
              <section id="psychological-benefits" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Psychological Benefits</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Research consistently demonstrates the positive psychological impact of well-implemented 
                  school uniform policies:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {psychologicalBenefits.map((item, index) => (
                    <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <item.icon className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-bold text-green-900">{item.benefit}</h3>
                      </div>
                      <p className="text-gray-700 mb-3">{item.description}</p>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-green-700">{item.research}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* National Identity Elements */}
              <section id="national-identity" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Uniforms & National Identity</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Saudi school uniforms can thoughtfully incorporate elements that reinforce national 
                  identity and cultural pride:
                </p>

                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Element</th>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Traditional Meaning</th>
                        <th className="text-left px-6 py-4 font-bold text-gray-900">Modern Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {nationalIdentityElements.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">{item.element}</td>
                          <td className="px-6 py-4 text-gray-600">{item.traditional}</td>
                          <td className="px-6 py-4 text-gray-600">{item.application}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Design Principles */}
              <section id="design-principles" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Principles for Saudi Schools</h2>
                
                <div className="space-y-6">
                  {designPrinciples.map((principle, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.principle}</h3>
                      <p className="text-gray-600 mb-4">{principle.description}</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Guidelines:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {principle.guidelines.map((guideline, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Vision 2030 */}
              <section id="vision-2030" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision 2030 Alignment</h2>
                
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/blog/vision-2030.jpg"
                    alt="Vision 2030 and Education"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vision2030Alignment.map((item, index) => (
                    <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                      <h3 className="font-bold text-emerald-900 mb-2">{item.pillar}</h3>
                      <p className="text-emerald-800 text-sm mb-3">{item.uniformContribution}</p>
                      <div className="bg-white rounded-lg p-3">
                        <span className="text-emerald-700 text-sm font-medium">
                          Outcome: {item.outcome}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* School Type Guidelines */}
              <section id="implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Guidelines by School Type</h2>
                
                <div className="space-y-6">
                  {schoolTypeGuidelines.map((school, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-48 md:h-auto">
                          <Image
                            src={school.image}
                            alt={school.type}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{school.type}</h3>
                          <ul className="space-y-2">
                            {school.characteristics.map((char, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{char}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Success Stories */}
              <section id="case-studies" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
                
                <div className="space-y-6">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <h3 className="font-bold text-gray-900 mb-4">{story.school}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <span className="text-sm font-semibold text-gray-500">Challenge:</span>
                          <p className="text-gray-700">{story.challenge}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-500">Solution:</span>
                          <p className="text-gray-700">{story.solution}</p>
                        </div>
                        <div className="bg-green-100 rounded-lg p-3">
                          <span className="text-sm font-semibold text-green-800">Result:</span>
                          <p className="text-green-700">{story.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Design Uniforms That Inspire Pride</h2>
                  <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                    UNEOM partners with Saudi schools to create uniform programs that balance 
                    cultural values, student comfort, and educational excellence.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
                    >
                      Request School Consultation
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link 
                      href="/industries/education"
                      className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      View Education Solutions
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
