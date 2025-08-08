import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Education Support Staff Uniforms | Durable & Professional | UNEOM KSA',
  description: 'UNEOM provides high-quality uniforms for school support staff in Saudi Arabia, including maintenance, security, custodial, and food service teams. Request a quote!',
  keywords: 'education support staff uniforms Saudi Arabia, school maintenance uniforms KSA, school security uniforms Riyadh, custodial staff attire Jeddah, food service uniforms Dammam',
  openGraph: {
    title: 'UNEOM Education Support Staff Uniforms | Reliable & Professional',
    description: 'Equip your school\'s support teams with durable, functional, and professional uniforms from UNEOM. Serving educational institutions across Saudi Arabia.',
    images: ['/images/education/support-staff-og.jpg'], // Updated OG Image
  },
  alternates: {
    canonical: '/shop/education/staff-uniforms/support-staff/',
    languages: {
      'en-US': '/shop/education/staff-uniforms/support-staff/',
      'ar-SA': '/ar/shop/education/staff-uniforms/support-staff/'}}}

const uniformFeatures = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Functional Design',
    description: 'Practical features including multiple pockets, tool loops, and reinforced areas for daily work tasks.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'Heavy-duty materials and reinforced stitching to withstand demanding work environments.'
  },
  {
    icon: HeartIcon,
    title: 'Comfort Focus',
    description: 'Ergonomic design and breathable fabrics for all-day comfort during physical work.'
  },
  {
    icon: UserGroupIcon,
    title: 'Professional Identity',
    description: 'Clear identification and professional appearance that reflects institutional standards.'
  }
]

const supportRoles = [
  {
    title: 'Maintenance Staff',
    description: 'Durable uniforms for facility maintenance and repair personnel',
    features: ['Robust, heavy-duty fabrics', 'Multiple reinforced tool pockets & loops', 'Double-stitched seams & reinforced knees', 'Oil and stain-resistant finishes'],
    image: '/images/education/support-staff-maintenance.jpg', // Updated Image
    workAreas: ['School facility maintenance', 'Electrical & HVAC repairs', 'Plumbing solutions', 'General building repairs & upkeep'],
    colors: ['Utility Navy', 'Workshop Grey', 'Durable Khaki', 'Forest Green']
  },
  {
    title: 'Security Personnel',
    description: 'Authoritative and professional security uniforms for ensuring campus safety and student protection.',
    features: ['Clear professional appearance', 'Secure badge and ID attachments', 'Integrated radio loops and utility belts', 'Comfortable for extended patrols'],
    image: '/images/education/support-staff-security.jpg', // Updated Image
    workAreas: ['Campus-wide security patrols', 'Access control & visitor management', 'Emergency response coordination', 'Event security & crowd control'],
    colors: ['Security Navy', 'Tactical Black', 'Command Grey', 'High-Visibility Blue accents']
  },
  {
    title: 'Custodial & Janitorial Staff',
    description: 'Practical, hygienic, and easy-to-maintain uniforms for cleaning and custodial services.',
    features: ['Easy-care, bleach-resistant fabrics', 'Excellent stain and soil release properties', 'Designed for comfortable movement', 'Maintains a clean, professional look'],
    image: '/images/education/support-staff-custodial.jpg', // Updated Image
    workAreas: ['Classroom & hallway cleaning', 'Facility sanitation & hygiene', 'Waste management & recycling', 'Floor care & maintenance'],
    colors: ['Sanitary Light Blue', 'Clean Grey', 'Service Green', 'Practical Khaki']
  },
  {
    title: 'Food Service & Cafeteria Staff',
    description: 'Hygienic and professional uniforms for school cafeteria, kitchen, and food service personnel.',
    features: ['Food-grade safe materials', 'Easy to launder at high temperatures', 'Superior stain and grease resistance', 'Neat, hygienic, and professional design'],
    image: '/images/education/support-staff-food-service.jpg', // Updated Image
    workAreas: ['School kitchen operations', 'Student meal preparation', 'Cafeteria serving lines', 'Kitchen cleaning & sanitation'],
    colors: ['Classic White', 'Hygienic Light Blue', 'Service Grey', 'Optional aprons in school colors']
  },
  {
    title: 'Transportation Staff (Bus Drivers)',
    description: 'Comfortable and professional uniforms for school bus drivers and transportation coordinators.',
    features: ['Designed for comfortable seating during long routes', 'Clear professional identification', 'Optional weather protection elements', 'Allows for easy movement and safety checks'],
    image: '/images/education/support-staff-transport.jpg', // Updated Image
    workAreas: ['Student transportation routes', 'School vehicle maintenance checks', 'Route planning & coordination', 'Ensuring student safety protocols'],
    colors: ['Transport Navy', 'Driver Blue', 'Safety Yellow accents', 'Optional reflective strips']
  },
  {
    title: 'Groundskeeping & Landscaping Staff',
    description: 'Durable outdoor work uniforms designed for school landscaping and grounds maintenance tasks.',
    features: ['Weather-resistant and UV protective fabrics', 'Highly durable materials for outdoor work', 'Practical pockets for tools and essentials', 'Comfortable for physical labor'],
    image: '/images/education/support-staff-grounds.jpg', // Updated Image
    workAreas: ['School grounds landscaping', 'Sports field maintenance & preparation', 'Outdoor facility upkeep', 'Seasonal planting and grounds work'],
    colors: ['Groundskeep Green', 'Earth Khaki', 'Workwear Brown', 'Outdoor Utility Blue']
  }
]

const uniformComponents = [
  {
    item: 'Work Shirts',
    description: 'Durable shirts designed for active work environments',
    options: ['Polo shirts', 'Button-down work shirts', 'Long sleeve options', 'Moisture-wicking']
  },
  {
    item: 'Work Pants',
    description: 'Comfortable and durable work trousers',
    options: ['Cargo pants', 'Work trousers', 'Reinforced knees', 'Multiple pockets']
  },
  {
    item: 'Coveralls',
    description: 'Full-body protection for maintenance and technical work',
    options: ['Standard coveralls', 'Insulated options', 'Breathable materials', 'Tool attachments']
  },
  {
    item: 'Safety Gear',
    description: 'Safety accessories and protective equipment',
    options: ['High-visibility vests', 'Hard hats', 'Safety glasses', 'Work gloves']
  }
]

const fabricBenefits = [
  'Stain and soil resistant treatments',
  'Reinforced stress points and seams',
  'Moisture-wicking for comfort',
  'Easy-care machine washable',
  'Fade-resistant colors',
  'Antimicrobial treatments available'
]

export default function SupportStaffPage() {
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
            <li><span className="text-gray-900" aria-current="page">Support Staff Uniforms</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/support-staff-hero.jpg" // Updated Image
            alt="Professional uniforms for education support staff in Saudi Arabia" // Improved Alt Text
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
            Support Staff Uniforms
          </h1>
          <p className="text-xl text-orange-200 mb-10 max-w-3xl mx-auto">
            Professional uniforms designed for the dedicated support staff who keep educational institutions running smoothly. Combining functionality, durability, and professional appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=support-staff-uniform"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Support Staff Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
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
              Built for Hard Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our support staff uniforms are designed to meet the demanding needs of educational support personnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Roles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniforms for Every Support Role
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized uniforms designed for different support staff positions and work environments.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportRoles.map((role, index) => (
              <div key={role.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={role.image}
                    alt={`Professional uniform for ${role.title} in educational institutions`} // Improved Alt Text
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
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Work Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.workAreas.map((area, areaIndex) => (
                        <span key={areaIndex} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          {color}
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

      {/* Uniform Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Uniform Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your support staff needs for professional and functional work attire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformComponents.map((component) => (
              <div key={component.item} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{component.item}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <ul className="space-y-2">
                  {component.options.map((option, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industrial-Grade Fabric Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our support staff uniforms feature advanced fabric technologies designed for demanding work environments.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fabricBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Support Staff Uniforms?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Functional Design</h3>
                    <p className="text-gray-600">Practical features that enhance work efficiency and comfort</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Exceptional Durability</h3>
                    <p className="text-gray-600">Built to withstand the toughest work environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Appearance</h3>
                    <p className="text-gray-600">Maintain institutional standards while working</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost-Effective</h3>
                    <p className="text-gray-600">Long-lasting uniforms that provide excellent value</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/support-staff-benefits.jpg" // Updated Image
                alt="UNEOM education support staff uniforms demonstrating durability and comfort" // Improved Alt Text
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Valued by School Operations Teams</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See why educational institutions in Saudi Arabia trust UNEOM for their support staff uniforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Mr. Ibrahim Al-Harbi", school: "King Fahd Model School, Riyadh", quote: "[Placeholder: Testimonial on the durability and functionality of maintenance and security uniforms provided by UNEOM.]" },
              { name: "Ms. Aisha Al-Ghamdi", school: "Jeddah International Preparatory School", quote: "[Placeholder: Testimonial focusing on the professional appearance and comfort of custodial and food service staff uniforms.]" },
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

      {/* Safety and Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prioritizing Safety and Institutional Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our support staff uniforms are designed to meet rigorous safety standards and uphold the professional image of your educational institution in Saudi Arabia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <ShieldCheckIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adherence to Safety Standards</h3>
              <p className="text-gray-600">Uniforms compliant with relevant KSA workplace safety regulations for various support roles.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <ClipboardDocumentListIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Assured Quality & Durability</h3>
              <p className="text-gray-600">Subjected to rigorous quality control and testing to ensure long-lasting performance.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <SparklesIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upholding Professional Image</h3>
              <p className="text-gray-600">Contributes to a consistent and professional institutional image across all staff levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your Essential Support Team with UNEOM
          </h2>
          <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
            Ensure your educational institution's support staff in Saudi Arabia are equipped with professional, durable, and functional uniforms. Contact UNEOM's specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=education-support-staff"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Support Staff Uniform Quote
            </Link>
            <Link
              href="/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-lg"
            >
              View All Education Staff Uniforms
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Education Support Staff Uniforms | UNEOM Saudi Arabia",
          "description": "UNEOM offers a comprehensive range of durable and professional uniforms for education support staff in Saudi Arabia, including maintenance, security, custodial, and food service teams.",
          "url": "https://uneom.com/shop/education/staff-uniforms/support-staff/",
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
              { "@type": "ListItem", "position": 5, "name": "Support Staff Uniforms", "item": "https://uneom.com/shop/education/staff-uniforms/support-staff/" }
            ]
          }
        }) }}
      />
    </div>
  )
}