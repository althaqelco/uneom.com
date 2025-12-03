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
  CheckCircleIcon,
  BookOpenIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  StarIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'The Ideal Teacher Uniform: Professionalism & Comfort in Educational Settings | UNEOM',
  description: 'Complete guide to teacher uniforms in Saudi Arabia. Learn about professional dress codes, fabric choices for classroom comfort, cultural considerations, and how teacher attire impacts student respect and learning outcomes in schools and universities.',
  keywords: 'teacher uniforms Saudi Arabia, educator dress code KSA, professional teacher attire, school staff uniforms, academic dress standards, teacher clothing guidelines, Saudi education uniforms, classroom appropriate dress, faculty uniforms, administrative staff attire',
  openGraph: {
    title: 'The Ideal Teacher Uniform: Professionalism & Comfort in Educational Settings',
    description: 'Comprehensive guide to designing professional teacher uniforms that enhance authority and comfort in Saudi Arabian educational institutions',
    images: ['/images/education/teacher-hero-background.jpg'],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-03-01T08:00:00Z',
    authors: ['UNEOM Education Team'],
  },
  alternates: {
    canonical: '/blog/teacher-uniform-professional-guide/',
    languages: {
      'en': '/blog/teacher-uniform-professional-guide/',
      'ar': '/ar/blog/teacher-uniform-professional-guide/',
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
  headline: 'The Ideal Teacher Uniform: Professionalism & Comfort in Educational Settings',
  description: 'Complete guide to teacher uniforms in Saudi Arabian educational institutions',
  image: 'https://uneom.com/images/education/teacher-hero-background.jpg',
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
  datePublished: '2025-03-01T08:00:00Z',
  dateModified: '2025-03-01T08:00:00Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/blog/teacher-uniform-professional-guide/'
  }
}

const tableOfContents = [
  { id: 'introduction', title: 'The Role of Teacher Attire' },
  { id: 'psychology', title: 'Psychology of Professional Dress' },
  { id: 'education-levels', title: 'Uniforms by Education Level' },
  { id: 'cultural-design', title: 'Cultural & Modest Design' },
  { id: 'fabric-comfort', title: 'Fabric Choices for Comfort' },
  { id: 'administrative', title: 'Administrative Staff Attire' },
  { id: 'implementation', title: 'School Implementation Guide' },
  { id: 'best-practices', title: 'Best Practices & Standards' }
]

const teacherAttireImpact = [
  {
    stat: '87%',
    description: 'of students report higher respect for professionally dressed teachers',
    source: 'Journal of Educational Psychology'
  },
  {
    stat: '23%',
    description: 'improvement in classroom discipline with standardized teacher dress codes',
    source: 'Saudi Ministry of Education Study'
  },
  {
    stat: '91%',
    description: 'of parents associate teacher appearance with school quality',
    source: 'KPMG Education Survey 2024'
  },
  {
    stat: '76%',
    description: 'of teachers feel more confident when wearing professional uniforms',
    source: 'Educator Wellbeing Research'
  }
]

const educationLevels = [
  {
    level: 'Early Childhood & Kindergarten',
    icon: HeartIcon,
    color: 'pink',
    image: '/images/education/teacher-elementary.jpg',
    requirements: [
      'Comfortable, movement-friendly designs',
      'Stain-resistant fabrics',
      'Bright, welcoming colors acceptable',
      'Closed-toe comfortable shoes',
      'Minimal jewelry for safety'
    ],
    recommendations: [
      'Polo shirts with school logo',
      'Comfortable cotton pants or skirts',
      'Cardigans for layering',
      'Practical aprons for activities',
      'Soft-soled shoes for movement'
    ],
    considerations: 'Teachers spend significant time on the floor, bending, and engaging in physical activities with young children.'
  },
  {
    level: 'Elementary School',
    icon: BookOpenIcon,
    color: 'blue',
    image: '/images/education/teacher-elementary.jpg',
    requirements: [
      'Professional yet approachable appearance',
      'Durable fabrics for active days',
      'Modest necklines and hemlines',
      'Practical pockets for supplies',
      'Easy-care materials'
    ],
    recommendations: [
      'Collared shirts or blouses',
      'Dress pants or modest skirts',
      'Light blazers for formal occasions',
      'Comfortable professional footwear',
      'School-branded accessories'
    ],
    considerations: 'Balance between authority and approachability is key at this level.'
  },
  {
    level: 'Middle School (Intermediate)',
    icon: AcademicCapIcon,
    color: 'purple',
    image: '/images/education/teacher-middle-school.jpg',
    requirements: [
      'More formal professional appearance',
      'Clear authority-projecting attire',
      'Consistent dress code adherence',
      'Quality fabrics and construction',
      'Appropriate coverage'
    ],
    recommendations: [
      'Formal shirts with ties (men)',
      'Professional blouses and blazers (women)',
      'Dress pants or formal skirts',
      'Polished leather footwear',
      'Subtle school colors integration'
    ],
    considerations: 'Students at this age test boundaries; teacher appearance reinforces professional authority.'
  },
  {
    level: 'High School (Secondary)',
    icon: StarIcon,
    color: 'amber',
    image: '/images/education/teacher-high-school.jpg',
    requirements: [
      'Formal business professional standard',
      'Role model appearance',
      'Subject-appropriate variations',
      'High-quality materials',
      'Impeccable grooming'
    ],
    recommendations: [
      'Full suits for male teachers',
      'Formal business attire for women',
      'Lab coats for science teachers',
      'PE uniforms for sports staff',
      'Department color coordination'
    ],
    considerations: 'Preparing students for professional world; teachers model workplace dress expectations.'
  },
  {
    level: 'University & Higher Education',
    icon: LightBulbIcon,
    color: 'green',
    image: '/images/education/admin-suit-modern.jpg',
    requirements: [
      'Academic professional attire',
      'Department-appropriate dress',
      'Formal for lectures, practical for labs',
      'Cultural sensitivity',
      'Individual expression within guidelines'
    ],
    recommendations: [
      'Business formal for lectures',
      'Smart casual for office hours',
      'Academic regalia for ceremonies',
      'Practical attire for fieldwork',
      'Cultural dress integration'
    ],
    considerations: 'Balance academic tradition with contemporary professional standards.'
  }
]

const culturalConsiderations = [
  {
    aspect: 'Women\'s Professional Modest Attire',
    description: 'Designing professional teacher uniforms that respect Islamic dress requirements',
    solutions: [
      'Full-length sleeves as standard option',
      'Hijab-friendly collar and neckline designs',
      'Below-knee or full-length skirts and dresses',
      'Loose-fitting blazers and jackets',
      'Coordinated hijab options in school colors',
      'Layering pieces for modesty'
    ]
  },
  {
    aspect: 'Men\'s Traditional Integration',
    description: 'Options for incorporating traditional Saudi elements in professional context',
    solutions: [
      'Formal thobe options for special occasions',
      'Traditional elements with modern professional cuts',
      'Gutrah/Shemagh coordination guidelines',
      'Western suit options with Saudi accents',
      'Seasonal variations respecting traditions'
    ]
  },
  {
    aspect: 'Gender-Segregated Schools',
    description: 'Specific considerations for boys\' and girls\' school environments',
    solutions: [
      'All-female staff uniforms for girls\' schools',
      'Comfort-focused designs for single-gender environments',
      'Appropriate coverage standards',
      'Professional yet practical approaches',
      'Clear guidelines for each environment'
    ]
  }
]

const fabricRecommendations = [
  {
    fabric: 'Premium Cotton Blends (60/40)',
    breathability: 'Excellent',
    durability: 'High',
    comfort: 'Very High',
    maintenance: 'Easy - Machine washable',
    bestFor: 'Daily classroom wear, all seasons',
    priceRange: 'SAR 150-300/piece'
  },
  {
    fabric: 'Poly-Viscose Blend',
    breathability: 'Good',
    durability: 'Very High',
    comfort: 'Good',
    maintenance: 'Very Easy - Wrinkle-free',
    bestFor: 'Formal occasions, administrative staff',
    priceRange: 'SAR 200-400/piece'
  },
  {
    fabric: 'Stretch Cotton Twill',
    breathability: 'Good',
    durability: 'High',
    comfort: 'Excellent',
    maintenance: 'Easy',
    bestFor: 'Active teachers, PE instructors',
    priceRange: 'SAR 120-250/piece'
  },
  {
    fabric: 'Linen-Cotton Blend',
    breathability: 'Superior',
    durability: 'Moderate',
    comfort: 'Excellent',
    maintenance: 'Requires ironing',
    bestFor: 'Summer months, hot classrooms',
    priceRange: 'SAR 180-350/piece'
  },
  {
    fabric: 'Performance Knit',
    breathability: 'Excellent',
    durability: 'High',
    comfort: 'Very High',
    maintenance: 'Very Easy - Quick dry',
    bestFor: 'Sports teachers, outdoor activities',
    priceRange: 'SAR 100-200/piece'
  }
]

const administrativeStaff = [
  {
    role: 'School Principal/Head',
    attire: 'Executive business formal',
    details: [
      'High-quality suits or traditional formal wear',
      'Premium fabrics reflecting leadership',
      'School colors in accessories',
      'Impeccable grooming standards',
      'Formal footwear'
    ]
  },
  {
    role: 'Vice Principal/Deputy',
    attire: 'Business formal',
    details: [
      'Professional suits or coordinated separates',
      'Slightly less formal than principal',
      'Department identification',
      'Professional accessories',
      'Quality leather footwear'
    ]
  },
  {
    role: 'Department Heads',
    attire: 'Smart business professional',
    details: [
      'Blazers with coordinated pants/skirts',
      'Department color coding',
      'Name and title badges',
      'Professional but approachable',
      'Comfortable for teaching duties'
    ]
  },
  {
    role: 'Administrative Assistants',
    attire: 'Business casual to professional',
    details: [
      'Coordinated uniforms with school branding',
      'Comfortable for desk work',
      'Professional appearance for parent interaction',
      'Practical for varied duties',
      'Consistent team appearance'
    ]
  },
  {
    role: 'Support Staff',
    attire: 'Practical uniforms',
    details: [
      'Role-appropriate workwear',
      'School-branded polos or shirts',
      'Comfortable practical pants',
      'Safety footwear where required',
      'Clear identification'
    ]
  }
]

const implementationGuide = [
  {
    phase: 'Phase 1: Assessment',
    duration: '2-4 weeks',
    tasks: [
      'Survey current staff dress practices',
      'Identify cultural and religious requirements',
      'Assess budget and procurement options',
      'Review competitor/peer school standards',
      'Consult with staff representatives'
    ]
  },
  {
    phase: 'Phase 2: Policy Development',
    duration: '4-6 weeks',
    tasks: [
      'Draft comprehensive dress code policy',
      'Define standards by role and department',
      'Establish exceptions and accommodations',
      'Create visual guides and examples',
      'Legal review and approval'
    ]
  },
  {
    phase: 'Phase 3: Procurement',
    duration: '6-8 weeks',
    tasks: [
      'Request quotes from uniform suppliers',
      'Sample testing and staff feedback',
      'Bulk order with size variations',
      'Quality assurance checks',
      'Delivery and distribution planning'
    ]
  },
  {
    phase: 'Phase 4: Rollout',
    duration: '2-4 weeks',
    tasks: [
      'Staff communication and training',
      'Individual sizing and fitting',
      'Uniform distribution',
      'Grace period for transition',
      'Address questions and concerns'
    ]
  },
  {
    phase: 'Phase 5: Maintenance',
    duration: 'Ongoing',
    tasks: [
      'Regular compliance monitoring',
      'Replacement ordering system',
      'Annual policy review',
      'Staff feedback collection',
      'Supplier relationship management'
    ]
  }
]

const bestPractices = [
  {
    practice: 'Provide Adequate Quantities',
    description: 'Each teacher should have at least 5 sets to maintain freshness throughout the work week',
    icon: ShieldCheckIcon
  },
  {
    practice: 'Offer Size Inclusivity',
    description: 'Ensure uniforms are available in a wide range of sizes with proper fitting options',
    icon: UserGroupIcon
  },
  {
    practice: 'Consider Climate Control',
    description: 'Provide seasonal variations for Saudi Arabia\'s hot summers and mild winters',
    icon: SparklesIcon
  },
  {
    practice: 'Allow Personal Expression',
    description: 'Within guidelines, allow some accessories or variations that maintain individuality',
    icon: StarIcon
  },
  {
    practice: 'Establish Care Guidelines',
    description: 'Provide clear laundering instructions to maintain uniform appearance and longevity',
    icon: BookOpenIcon
  },
  {
    practice: 'Create Feedback Channels',
    description: 'Regular opportunities for staff to provide input on comfort and functionality',
    icon: HeartIcon
  }
]

export default function TeacherUniformProfessionalGuidePage() {
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
              <li><span className="text-gray-900 font-medium">Teacher Uniform Professional Guide</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 text-white py-16 lg:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/education/teacher-hero-background.jpg"
              alt="Professional Teachers"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-400/30">
                  Education
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium border border-purple-400/30">
                  Professional Development
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Ideal Teacher Uniform: Professionalism Meets Comfort
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover how professional teacher attire enhances classroom authority, 
                student respect, and educator confidence. A comprehensive guide for 
                Saudi Arabian educational institutions.
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
                  <TagIcon className="h-5 w-5" />
                  <span>March 1, 2025</span>
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
                    <TagIcon className="h-5 w-5 text-indigo-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg px-3 py-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="mt-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">Need Education Uniforms?</h3>
                  <p className="text-sm text-indigo-100 mb-4">
                    UNEOM provides professional uniforms for Saudi Arabia's leading schools and universities.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-white text-indigo-600 px-4 py-2 rounded-lg font-bold hover:bg-indigo-50 transition-colors"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Role of Teacher Attire in Education</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  In Saudi Arabia's evolving educational landscape, teacher professionalism extends 
                  beyond pedagogical skills to encompass appearance and presentation. As schools 
                  compete for excellence and parents become increasingly discerning, the visual 
                  impression teachers make has never been more important.
                </p>

                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/education/teacher-hero-background.jpg"
                    alt="Professional teachers in educational setting"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                  <h3 className="font-bold text-gray-900 mb-3">Why Teacher Uniforms Matter</h3>
                  <p className="text-gray-700">
                    Professional teacher attire creates a visual distinction that reinforces 
                    authority, builds trust with parents, and establishes a culture of respect 
                    within the school community. When teachers dress professionally, it signals 
                    to students that education is a serious endeavor deserving of respect.
                  </p>
                </div>
              </section>

              {/* Psychology Section */}
              <section id="psychology" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Psychology of Professional Dress</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Research consistently demonstrates the impact of teacher appearance on 
                  educational outcomes and classroom dynamics:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {teacherAttireImpact.map((item, index) => (
                    <div key={index} className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                      <div className="text-4xl font-bold text-indigo-600 mb-2">{item.stat}</div>
                      <p className="text-gray-700 mb-2">{item.description}</p>
                      <p className="text-xs text-gray-500">Source: {item.source}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">The "Enclothed Cognition" Effect</h3>
                  <p className="text-gray-700">
                    Studies show that wearing professional attire doesn't just affect how others 
                    perceive us—it affects our own cognitive processes. Teachers who dress 
                    professionally report feeling more authoritative, confident, and focused. 
                    This psychological boost translates to better classroom management and 
                    teaching effectiveness.
                  </p>
                </div>
              </section>

              {/* Education Levels Section */}
              <section id="education-levels" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Uniforms by Education Level</h2>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  Different educational stages require different approaches to teacher attire. 
                  Here's a comprehensive guide for each level:
                </p>

                <div className="space-y-8">
                  {educationLevels.map((level, index) => (
                    <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={level.image}
                            alt={`${level.level} teacher uniforms`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`bg-${level.color}-100 p-2 rounded-lg`}>
                              <level.icon className={`h-6 w-6 text-${level.color}-600`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{level.level}</h3>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                              <ul className="space-y-1">
                                {level.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Recommendations:</h4>
                              <ul className="space-y-1">
                                {level.recommendations.map((rec, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-indigo-500">•</span>
                                    <span>{rec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-3">
                            <span className="text-sm text-gray-700">
                              <strong>Key Consideration:</strong> {level.considerations}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cultural Considerations */}
              <section id="cultural-design" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cultural & Modest Design</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Saudi Arabian educational institutions must balance international 
                  professional standards with local cultural and religious values:
                </p>

                <div className="space-y-6">
                  {culturalConsiderations.map((item, index) => (
                    <div key={index} className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="font-bold text-purple-900 mb-2">{item.aspect}</h3>
                      <p className="text-purple-800 mb-4">{item.description}</p>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Design Solutions:</h4>
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

              {/* Fabric Choices */}
              <section id="fabric-comfort" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fabric Choices for Comfort</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Teachers spend 6-8 hours on their feet, often in classrooms with variable 
                  climate control. Choosing the right fabrics is essential for all-day comfort:
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Fabric</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Breathability</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Comfort</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Best For</th>
                        <th className="text-left px-4 py-3 font-bold text-gray-900">Price Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {fabricRecommendations.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-gray-900">{item.fabric}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              item.breathability === 'Superior' || item.breathability === 'Excellent' ? 'bg-green-100 text-green-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {item.breathability}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              item.comfort === 'Excellent' || item.comfort === 'Very High' ? 'bg-green-100 text-green-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {item.comfort}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-gray-600 text-sm">{item.bestFor}</td>
                          <td className="px-4 py-3">
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                              {item.priceRange}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Administrative Staff */}
              <section id="administrative" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Administrative Staff Attire</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Non-teaching staff also contribute to the school's professional image. 
                  Here are guidelines by role:
                </p>

                <div className="space-y-4">
                  {administrativeStaff.map((staff, index) => (
                    <div key={index} className={`rounded-xl p-6 border ${
                      index === 0 ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300' :
                      'bg-white border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          index === 0 ? 'bg-amber-500 text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {staff.attire}
                        </span>
                        <h3 className="font-bold text-gray-900">{staff.role}</h3>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {staff.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Guide */}
              <section id="implementation" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">School Implementation Guide</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Successfully implementing a teacher uniform program requires careful planning. 
                  Follow this phased approach:
                </p>

                <div className="space-y-6">
                  {implementationGuide.map((phase, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900">{phase.phase}</h3>
                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Best Practices */}
              <section id="best-practices" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices & Standards</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bestPractices.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <item.icon className="h-6 w-6 text-indigo-600" />
                        </div>
                        <h3 className="font-bold text-gray-900">{item.practice}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Elevate Your School's Professional Image</h2>
                  <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    UNEOM partners with leading Saudi Arabian schools to create comprehensive 
                    teacher uniform programs that enhance professionalism and comfort.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/contact"
                      className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
                    >
                      Request Consultation
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


