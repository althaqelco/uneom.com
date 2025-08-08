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
  AcademicCapIcon,
  BookOpenIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Teacher Uniforms | Professional Educational Attire | UNEOM KSA',
  description: 'Discover premium teacher uniforms in Saudi Arabia by UNEOM. Comfortable, professional, and durable attire designed for educators at all school levels. Request a quote today!',
  keywords: 'teacher uniforms Saudi Arabia, school teacher clothing KSA, educator uniforms Riyadh, professional teaching attire Jeddah, school staff uniforms Dammam',
  openGraph: {
    title: 'UNEOM Teacher Uniforms | Inspiring Professionalism in Saudi Education',
    description: 'Elevate your teaching staff with UNEOM\'s specialized teacher uniforms. Quality, comfort, and professional designs for schools across KSA.',
    images: ['/images/education/teacher-uniforms-og.jpg'], // Updated OG Image
  },
  alternates: {
    canonical: '/shop/education/staff-uniforms/teacher-uniform/',
    languages: {
      'en-US': '/shop/education/staff-uniforms/teacher-uniform/',
      'ar-SA': '/ar/shop/education/staff-uniforms/teacher-uniform/'}}}

const uniformFeatures = [
  {
    icon: BookOpenIcon,
    title: 'Educational Professional',
    description: 'Designed to project authority and professionalism while maintaining approachability for students.'
  },
  {
    icon: HeartIcon,
    title: 'Comfort First',
    description: 'All-day comfort with breathable fabrics and ergonomic design for active teaching environments.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Quality',
    description: 'Built to withstand daily wear and frequent washing while maintaining professional appearance.'
  },
  {
    icon: UserGroupIcon,
    title: 'Student-Friendly',
    description: 'Colors and styles that create a welcoming environment while maintaining professional boundaries.'
  }
]

const teacherStyles = [
  {
    title: 'Elementary Teachers',
    description: 'Comfortable and approachable uniforms for primary school educators',
    features: ['Soft, breathable fabrics for active engagement', 'Easy-care & stain-resistant materials', 'Ample, reinforced pocket space', 'Warm, inviting, and child-friendly color palettes'],
    image: '/images/education/teacher-elementary.jpg', // Updated Image
    colors: ['Pastel Blue', 'Mint Green', 'Light Peach', 'Cream']
  },
  {
    title: 'Middle School Teachers',
    description: 'Professional yet approachable attire for intermediate education, fostering respect and engagement.',
    features: ['Smart-casual, contemporary styling', 'Durable, wrinkle-resistant fabrics', 'Versatile layering options', 'Age-appropriate professional colors'],
    image: '/images/education/teacher-middle-school.jpg', // Updated Image
    colors: ['Classic Navy', 'Deep Burgundy', 'Olive Green', 'Charcoal Grey']
  },
  {
    title: 'High School Teachers',
    description: 'Sophisticated and authoritative uniforms that command respect and reflect academic leadership.',
    features: ['Tailored, professional silhouettes', 'Premium, lasting quality materials', 'Formal and semi-formal options', 'Colors that convey expertise'],
    image: '/images/education/teacher-high-school.jpg', // Updated Image
    colors: ['Jet Black', 'Deep Navy', 'Graphite Grey', 'Rich Sapphire']
  },
  {
    title: 'Subject Specialists (e.g., Lab, Arts, Sports)',
    description: 'Functional and specialized uniforms tailored to the unique demands of different teaching subjects and activities.',
    features: ['Subject-appropriate design (e.g., lab coats, aprons, athletic wear)', 'Enhanced functionality and safety features', 'Durable materials for specific environments', 'Optional department-specific branding'],
    image: '/images/education/teacher-specialist.jpg', // Updated Image
    colors: ['Clinical White (Lab)', 'Creative Hues (Arts)', 'Sporty Team Colors (PE)']
  }
]

const uniformComponents = [
  {
    item: 'Blouses & Shirts',
    description: 'Professional tops in various styles and colors',
    options: ['Button-down shirts', 'Polo shirts', 'Blouses', 'Cardigans']
  },
  {
    item: 'Trousers & Skirts',
    description: 'Comfortable bottoms for professional appearance',
    options: ['Dress pants', 'A-line skirts', 'Pencil skirts', 'Comfortable fits']
  },
  {
    item: 'Dresses',
    description: 'One-piece professional dresses for easy styling',
    options: ['Shift dresses', 'A-line dresses', 'Wrap dresses', 'Midi length']
  },
  {
    item: 'Accessories',
    description: 'Professional accessories to complete the look',
    options: ['Name badges', 'Lanyards', 'Scarves', 'Belts']
  }
]

const fabricBenefits = [
  'Wrinkle-resistant for busy schedules',
  'Stain-resistant for classroom activities',
  'Breathable for all-day comfort',
  'Easy-care machine washable',
  'Color-fast for lasting appearance',
  'Stretch fabrics for movement'
]

export default function TeacherUniformPage() {
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
            <li><span className="text-gray-900" aria-current="page">Teacher Uniforms</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-green-600 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/teacher-hero-background.jpg" // Updated Image
            alt="Professional teacher uniforms for schools in Saudi Arabia" // Improved Alt Text
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
            Professional Teacher Uniforms
          </h1>
          <p className="text-xl text-green-200 mb-10 max-w-3xl mx-auto">
            Empower educators with professional uniforms that combine comfort, durability, and style. Designed for the dedicated professionals who shape our future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=teacher-uniform"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Teacher Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
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
              Designed for Educators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our teacher uniforms are specifically designed to meet the unique needs of educational professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Styles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniforms for Every Teaching Level
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized uniform designs tailored to different educational levels and teaching environments.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teacherStyles.map((style, index) => (
              <div key={style.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={style.image}
                    alt={`Professional uniform style for ${style.title}`} // Improved Alt Text
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{style.title}</h3>
                  <p className="text-gray-600 mb-4">{style.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {style.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.colors.map((color, colorIndex) => (
                        <span key={colorIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
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
              Complete Uniform Components
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for a complete professional teaching wardrobe.
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
              Premium Fabric Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our teacher uniforms are made with high-quality fabrics designed for the demands of education.
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
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Teacher Uniforms?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Authority</h3>
                    <p className="text-gray-600">Establish classroom authority while maintaining approachability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">All-Day Comfort</h3>
                    <p className="text-gray-600">Designed for long teaching days with maximum comfort</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Maintenance</h3>
                    <p className="text-gray-600">Simple care instructions for busy educators</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">School Branding</h3>
                    <p className="text-gray-600">Custom options to incorporate school colors and logos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/teacher-benefits-showcase.jpg" // Updated Image
                alt="UNEOM teacher uniforms showcasing benefits like comfort and professionalism" // Improved Alt Text
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Voices from the Classroom</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what educators in Saudi Arabia are saying about UNEOM Teacher Uniforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/images/authors/avatar-placeholder.jpg" alt={`Testimonial author ${i}`} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Educator Name {i}</p>
                    <p className="text-sm text-gray-500">School Name, City</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"[Placeholder: Positive testimonial about the comfort, professionalism, and durability of UNEOM teacher uniforms. Specific to Saudi context if possible.]"</p>
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

      {/* Related Articles Section Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Further Reading for Educators</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore insights and tips on professional attire in education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Impact of Teacher Attire on Student Perception", slug: "teacher-attire-student-perception", image: "/images/blog/placeholder1.jpg" },
              { title: "Choosing Durable and Comfortable Fabrics for Daily Teaching", slug: "fabrics-for-teaching", image: "/images/blog/placeholder2.jpg" },
              { title: "Maintaining a Professional Image in Saudi Schools", slug: "professional-image-saudi-schools", image: "/images/blog/placeholder-corporate1.jpg" },
            ].map((article) => (
              <div key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={`/blog/${article.slug}/`} className="block">
                  <div className="relative h-40">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 hover:text-green-600">{article.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">Read more &rarr;</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empower Your Educators with UNEOM
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Contact our education uniform specialists today to discuss your school's specific teacher uniform needs and create an inspiring, professional learning environment in Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=teacher-uniforms"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Teacher Uniform Quote
            </Link>
            <Link
              href="/shop/education/staff-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-lg"
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
          "@type": "CollectionPage",
          "name": "Professional Teacher Uniforms | UNEOM Saudi Arabia",
          "description": "Explore UNEOM's collection of professional teacher uniforms, designed for comfort, durability, and a commanding presence in Saudi Arabian schools.",
          "url": "https://uneom.com/shop/education/staff-uniforms/teacher-uniform/",
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
              { "@type": "ListItem", "position": 5, "name": "Teacher Uniforms", "item": "https://uneom.com/shop/education/staff-uniforms/teacher-uniform/" }
            ]
          },
          // Add mainEntity or hasPart if listing individual uniform styles as products
        }) }}
      />
    </div>
  )
}