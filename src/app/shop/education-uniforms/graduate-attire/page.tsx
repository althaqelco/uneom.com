import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon, // Main icon for graduation
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon, // For quality/premium feel
  ShieldCheckIcon, // For durability/tradition
  UserGroupIcon, // For group/ceremony
  CalendarDaysIcon // For occasion
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Graduate Attire | Graduation Gowns, Caps & Hoods | UNEOM',
  description: 'High-quality graduation attire including gowns, caps, tassels, and hoods for universities, colleges, and schools in Saudi Arabia. Celebrate achievements with distinguished academic regalia.',
  keywords: 'graduation attire, graduate gowns KSA, academic caps Saudi Arabia, graduation hoods, university regalia, school graduation ceremony',
  openGraph: {
    title: 'Graduate Attire | Graduation Gowns, Caps & Hoods | UNEOM',
    description: 'Celebrate academic milestones with our premium graduation attire. Gowns, caps, hoods, and accessories available.',
    images: ['/images/products/education/graduate-attire-main.jpg']}}

const attireComponents = [
  {
    name: 'Graduation Gowns',
    description: 'High-quality matte or satin finish gowns available in various colors to match institutional branding. Options for different academic levels.',
    image: '/images/products/education/graduation-gowns.jpg',
    features: ['Durable, comfortable fabrics', 'Pleated yokes and full sleeves', 'Variety of colors and finishes']
  },
  {
    name: 'Caps & Tassels (Mortarboards)',
    description: 'Classic mortarboard caps with color-coordinated tassels. Options for year charms and custom tassel colors.',
    image: '/images/products/education/graduation-caps-tassels.jpg',
    features: ['Sturdy construction', 'Comfortable fit', 'Wide range of tassel colors']
  },
  {
    name: 'Academic Hoods & Stoles',
    description: 'Degree-specific hoods and stoles lined with institutional colors and velvet indicating field of study. Honor stoles also available.',
    image: '/images/products/education/academic-hoods-stoles.jpg',
    features: ['Accurate degree color representation', 'Premium velvet and satin', 'Custom embroidery options']
  }
]

const whyChooseUneomGraduationAttire = [
  {
    icon: AcademicCapIcon,
    title: 'Authentic Academic Regalia',
    description: 'Our attire adheres to traditional academic standards, ensuring a distinguished and appropriate look for your graduates.'
  },
  {
    icon: SparklesIcon,
    title: 'Premium Quality Materials',
    description: 'We use high-quality fabrics and construction techniques for gowns and accessories that look great and last as keepsakes.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Customization & Branding',
    description: 'Tailor your graduation attire with institutional colors, logos, and custom embroidery to reflect your school\'s identity.'
  },
  {
    icon: UserGroupIcon,
    title: 'Bulk Order & Program Management',
    description: 'Efficient solutions for large orders, including individual packaging and distribution assistance for institutions.'
  }
]

export default function GraduateAttirePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/shop/" className="hover:text-blue-600">Shop</Link>
            <span>/</span>
            <Link href="/shop/education-uniforms/" className="hover:text-blue-600">Education Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Graduate Attire</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/banners/graduation-ceremony-banner.jpg" 
            alt="Graduation ceremony background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AcademicCapIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Distinguished Graduate Attire
          </h1>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Celebrate academic achievements with our premium collection of graduation gowns, caps, hoods, and accessories. Perfect for universities, colleges, and schools across Saudi Arabia.
          </p>
          <Link
            href="/quote/?category=graduate-attire"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Request Institutional Quote
          </Link>
        </div>
      </section>

      {/* Attire Components Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Academic Regalia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything your graduates need to mark their special milestone with pride and dignity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attireComponents.map((component) => (
              <div key={component.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-72 w-full">
                  <Image
                    src={component.image}
                    alt={component.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{component.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{component.description}</p>
                  <ul className="space-y-2 mb-6">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Optional: Add a link to a more specific page if needed */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The UNEOM Standard for Graduation Attire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide high-quality, authentic academic regalia to make every graduation ceremony memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomGraduationAttire.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customization & Bulk Orders Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarDaysIcon className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Customized Regalia for Your Institution
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ensure your institution's identity is perfectly represented. We offer comprehensive customization for gowns, hoods, stoles, and tassels, including specific color matching, embroidery of crests or logos, and unique design elements. Our team can manage bulk orders efficiently, providing a seamless experience for your school or university.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/custom-design/#academic-regalia"
              className="bg-indigo-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg inline-flex items-center"
            >
              Discuss Customization
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/quote/?category=bulk-graduation-attire"
              className="border-2 border-indigo-600 text-indigo-600 px-10 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-lg"
            >
              Request Bulk Order Info
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Celebrate Your Graduates in Style
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our specialists are ready to assist you in selecting or designing the perfect graduation attire for your institution. Contact us for a consultation or a detailed quote.
          </p>
          <Link
            href="/contact/"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
          >
            Contact Our Graduation Specialists
          </Link>
        </div>
      </section>
    </div>
  )
}