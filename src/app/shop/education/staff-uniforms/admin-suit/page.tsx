import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Education Admin Suits | Executive Attire for School Leadership | UNEOM KSA',
  description: 'UNEOM offers premium administrative suits for school principals, vice-principals, and university executives in Saudi Arabia. Command respect with our professional attire.',
  keywords: 'education admin suits Saudi Arabia, school leadership attire KSA, principal suits Riyadh, university executive clothing Jeddah, school administrator uniforms Dammam',
  openGraph: {
    title: 'UNEOM Education Admin Suits | Professional Leadership Attire in KSA',
    description: 'Discover executive suits tailored for educational administrators by UNEOM. Perfect for principals, department heads, and university leadership in Saudi Arabia.',
    images: ['/images/education/admin-suit-og.jpg'], // Updated OG Image
  },
  alternates: {
    canonical: '/shop/education/staff-uniforms/admin-suit/',
    languages: {
      'en-US': '/shop/education/staff-uniforms/admin-suit/',
      'ar-SA': '/ar/shop/education/staff-uniforms/admin-suit/',
    },
  },
}

const suitFeatures = [
  {
    icon: BriefcaseIcon,
    title: 'Executive Presence',
    description: 'Commanding professional appearance that reflects leadership authority and educational excellence.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Quality',
    description: 'High-end materials and expert tailoring for a distinguished and polished appearance.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'Built to maintain professional appearance through frequent wear and formal occasions.'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Versatile Styling',
    description: 'Suitable for board meetings, ceremonies, conferences, and daily administrative duties.'
  }
]

const administrativeRoles = [
  {
    title: 'School Principals',
    description: 'Distinguished suits for school leadership and administrative excellence',
    features: ['Impeccable executive styling', 'Projects clear authority and vision', 'Suitable for all formal school occasions', 'Comfortable for daily leadership tasks'],
    image: '/images/education/admin-suit-classic.jpg', // Updated Image
    occasions: ['Board meetings', 'Parent-teacher conferences', 'School assemblies', 'Official ceremonies & events']
  },
  {
    title: 'Vice Principals & Deans',
    description: 'Professional and approachable attire for assistant administrators, deans, and key academic staff.',
    features: ['Sharp, professional appearance', 'Maintains approachable authority', 'Versatile for diverse responsibilities', 'All-day comfort and fit'],
    image: '/images/education/admin-suit-modern.jpg', // Updated Image
    occasions: ['Staff coordination meetings', 'Student disciplinary hearings', 'Departmental oversight', 'School functions']
  },
  {
    title: 'Department Heads & Coordinators',
    description: 'Smart, academic leadership attire for department chairs, curriculum coordinators, and program leaders.',
    features: ['Reflects academic professionalism', 'Strong leadership presence', 'Polished and scholarly appearance', 'Always meeting-ready and presentable'],
    image: '/images/education/admin-suit-modern.jpg', // Updated Image
    occasions: ['Faculty meetings & workshops', 'Academic planning sessions', 'Curriculum development', 'Student academic advisement']
  },
  {
    title: 'University & College Executives',
    description: 'Premium, prestigious executive suits designed for higher education administration and institutional leadership.',
    features: ['Unmistakably prestigious appearance', 'Crafted with executive-quality materials', 'Formal and sophisticated styling', 'Creates a distinguished leadership presence'],
    image: '/images/education/admin-suit-classic.jpg', // Updated Image
    occasions: ['University board presentations', 'Donor and stakeholder meetings', 'Graduation & convocation ceremonies', 'High-profile official functions']
  }
]

const suitStyles = [
  {
    style: 'Classic Business Suit',
    description: 'Traditional two-piece suit with timeless styling',
    components: ['Tailored jacket', 'Matching trousers', 'Professional fit', 'Classic lapels'],
    colors: ['Navy blue', 'Charcoal gray', 'Black', 'Dark brown']
  },
  {
    style: 'Executive Three-Piece',
    description: 'Distinguished three-piece suit with vest for formal occasions',
    components: ['Structured jacket', 'Matching vest', 'Tailored trousers', 'Premium finish'],
    colors: ['Navy pinstripe', 'Charcoal', 'Dark gray', 'Midnight blue']
  },
  {
    style: 'Modern Slim Fit',
    description: 'Contemporary styling with modern proportions',
    components: ['Slim-fit jacket', 'Tapered trousers', 'Modern lapels', 'Clean lines'],
    colors: ['Navy', 'Charcoal', 'Dark gray', 'Black']
  },
  {
    style: 'Formal Ceremonial',
    description: 'Premium suits for graduation and formal ceremonies',
    components: ['Formal styling', 'Ceremonial details', 'Premium materials', 'Distinguished finish'],
    colors: ['Black', 'Midnight navy', 'Formal gray', 'Traditional colors']
  }
]

const customizationOptions = [
  'School logo embroidery',
  'Custom color combinations',
  'Personalized name tags',
  'Institutional insignia',
  'Rank indicators',
  'Special occasion variations',
  'Seasonal adaptations',
  'Formal ceremony options'
]

const fabricOptions = [
  {
    name: 'Premium Wool',
    description: 'High-quality wool blend for superior comfort and appearance',
    benefits: ['Excellent drape', 'Breathable', 'Wrinkle resistant', 'Professional finish']
  },
  {
    name: 'Wool-Polyester Blend',
    description: 'Durable blend combining comfort with easy maintenance',
    benefits: ['Easy care', 'Durable', 'Color retention', 'Cost-effective']
  },
  {
    name: 'Luxury Gabardine',
    description: 'Premium fabric for the most distinguished occasions',
    benefits: ['Elegant appearance', 'Superior quality', 'Formal finish', 'Long-lasting']
  }
]

export default function AdminSuitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><Link href="/shop/" className="hover:text-blue-600">Shop</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><Link href="/shop/education/" className="hover:text-blue-600">Education Uniforms</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><Link href="/shop/education/staff-uniforms/" className="hover:text-blue-600">Staff Uniforms</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><span className="text-gray-900" aria-current="page">Admin Suits</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-gray-800 to-blue-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/admin-suit-hero.jpg" // Updated Image
            alt="Executive administrative suits for educational leadership in Saudi Arabia" // Improved Alt Text
            fill
            priority // Added Priority for LCP
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarSolidIcon key={i} className="h-8 w-8 text-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Administrative Executive Suits
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Distinguished executive suits designed for educational leaders. Project authority, professionalism, and excellence in every administrative role.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=admin-suit"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Administrative Suit Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Excellence in Every Detail
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our administrative suits are designed to reflect the leadership and professionalism of educational executives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {suitFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Roles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Suits for Educational Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized executive attire designed for different administrative roles and leadership positions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {administrativeRoles.map((role, index) => (
              <div key={role.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={role.image}
                    alt={`Professional admin suit for ${role.title}`} // Improved Alt Text
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {role.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Suitable Occasions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.occasions.map((occasion, occasionIndex) => (
                        <span key={occasionIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suit Styles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Suit Styles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional suit styles designed for educational leadership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {suitStyles.map((suit) => (
              <div key={suit.style} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{suit.style}</h3>
                <p className="text-gray-600 mb-4">{suit.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Components:</h4>
                  <ul className="space-y-1">
                    {suit.components.map((component, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {suit.colors.map((color, colorIndex) => (
                      <span key={colorIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Fabric Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select from our range of high-quality fabrics designed for executive wear.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fabricOptions.map((fabric) => (
              <div key={fabric.name} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fabric.name}</h3>
                <p className="text-gray-600 mb-4">{fabric.description}</p>
                <ul className="space-y-2">
                  {fabric.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Customization Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Personalize your administrative suits to reflect your institution's identity and your leadership role.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customizationOptions.map((option, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Administrative Suits?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Executive Presence</h3>
                    <p className="text-gray-600">Command respect and authority in educational leadership roles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                    <p className="text-gray-600">High-end materials and expert tailoring for lasting impression</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Versatile Styling</h3>
                    <p className="text-gray-600">Suitable for various administrative occasions and meetings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Branding</h3>
                    <p className="text-gray-600">Incorporate institutional identity and leadership indicators</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/admin-suit-benefits.jpg" // Updated Image
                alt="UNEOM education admin suits highlighting quality and professionalism" // Improved Alt Text
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Educational Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from school administrators in Saudi Arabia who chose UNEOM for their executive attire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Mr. Abdullah Al-Fahad", school: "Riyadh International School", quote: "[Placeholder: Testimonial about the quality, fit, and professional image projected by UNEOM admin suits.]" },
              { name: "Ms. Fatima Al-Zahrani", school: "Jeddah Academy for Girls", quote: "[Placeholder: Testimonial highlighting the comfort and durability for long administrative days, and the positive impression on staff and parents.]" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/images/authors/avatar-placeholder.jpg" alt={`Testimonial from ${testimonial.name}`} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.school}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <StarSolidIcon key={starIndex} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Lead with Distinguished Style & Confidence
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Equip your educational leadership team with UNEOM's executive administrative suits. Contact our specialists to tailor a solution for your institution in Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=admin-suits-education"
              className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Admin Suit Quote
            </Link>
            <Link
              href="/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors text-lg"
            >
              Explore All Education Staff Uniforms
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage", // Or Product if this page focuses on ONE specific admin suit model
          "name": "Executive Admin Suits for Education | UNEOM Saudi Arabia",
          "description": "UNEOM provides high-quality administrative suits for school and university leadership in Saudi Arabia, ensuring a professional and authoritative appearance.",
          "url": "https://uneom.com/shop/education/staff-uniforms/admin-suit/",
          "isPartOf": {
            "@type": "WebSite",
            "name": "UNEOM",
            "url": "https://uneom.com"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uneom.com/" },
              { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://uneom.com/shop/" },
              { "@type": "ListItem", "position": 3, "name": "Education Uniforms", "item": "https://uneom.com/shop/education/" },
              { "@type": "ListItem", "position": 4, "name": "Staff Uniforms", "item": "https://uneom.com/shop/education/staff-uniforms/" },
              { "@type": "ListItem", "position": 5, "name": "Admin Suits", "item": "https://uneom.com/shop/education/staff-uniforms/admin-suit/" }
            ]
          }
          // If treated as a Product page, add specific product details here
          // If CollectionPage, could list items or types of admin suits offered.
        }) }}
      />
    </div>
  )
}