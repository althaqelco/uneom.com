import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  HandRaisedIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Electrical Safety Gloves | Professional PPE Protection | UNEOM KSA',
  description: 'UNEOM provides high-quality electrical safety gloves for professionals in Saudi Arabia. Class 0, 1, and 2 rated gloves meeting international safety standards. Request a quote!',
  keywords: 'electrical safety gloves Saudi Arabia, PPE gloves KSA, electrical protection gloves Riyadh, insulated safety gloves Jeddah, electrical work gloves Dammam',
  openGraph: {
    title: 'UNEOM Electrical Safety Gloves | Professional PPE Protection',
    description: 'Protect your electrical workers with certified safety gloves from UNEOM. Meeting international standards for electrical protection in Saudi Arabia.',
    images: ['/images/ppe/electrical-gloves-og.jpg']},
  alternates: {
    canonical: '/shop/ppe/electrical-gloves/',
    languages: {
      'en-US': '/shop/ppe/electrical-gloves/',
      'ar-SA': '/ar/shop/ppe/electrical-gloves/'}}}

const safetyFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Certified Protection',
    description: 'Meets ASTM D120 and IEC 60903 international safety standards for electrical protection.'
  },
  {
    icon: BoltIcon,
    title: 'Voltage Rated',
    description: 'Available in Class 0, 1, and 2 ratings for different voltage protection levels.'
  },
  {
    icon: HandRaisedIcon,
    title: 'Ergonomic Design',
    description: 'Comfortable fit and dexterity for precise electrical work and extended wear.'
  },
  {
    icon: CogIcon,
    title: 'Durable Construction',
    description: 'High-quality rubber materials resistant to ozone, acids, and other chemicals.'
  }
]

const gloveClasses = [
  {
    class: 'Class 0',
    voltage: 'Up to 1,000V AC / 1,500V DC',
    applications: ['Low voltage electrical work', 'Residential electrical systems', 'Basic electrical maintenance'],
    image: '/images/ppe/electrical-gloves-class0.jpg',
    color: 'Red',
    thickness: '0.5mm minimum'
  },
  {
    class: 'Class 1',
    voltage: 'Up to 7,500V AC / 11,250V DC',
    applications: ['Medium voltage electrical work', 'Industrial electrical systems', 'Power distribution work'],
    image: '/images/ppe/electrical-gloves-class1.jpg',
    color: 'White',
    thickness: '1.0mm minimum'
  },
  {
    class: 'Class 2',
    voltage: 'Up to 17,000V AC / 25,500V DC',
    applications: ['High voltage electrical work', 'Utility power lines', 'Substation maintenance'],
    image: '/images/ppe/electrical-gloves-class2.jpg',
    color: 'Yellow',
    thickness: '1.5mm minimum'
  }
]

const safetyStandards = [
  'ASTM D120 - Standard Specification for Rubber Insulating Gloves',
  'IEC 60903 - Live working - Gloves of insulating material',
  'OSHA 1910.137 - Electrical Protective Equipment',
  'NFPA 70E - Standard for Electrical Safety in the Workplace',
  'Saudi SASO Standards for Personal Protective Equipment'
]

const inspectionChecklist = [
  'Visual inspection for cuts, punctures, or embedded foreign objects',
  'Air inflation test to check for leaks or weak spots',
  'Verification of proper voltage class marking',
  'Check expiration date and testing certification',
  'Ensure proper storage conditions have been maintained'
]

export default function ElectricalGlovesPage() {
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
            <li><Link href="/shop/ppe/" className="hover:text-blue-600">PPE</Link></li>
            <li><span aria-hidden="true">/</span></li>
            <li><span className="text-gray-900" aria-current="page">Electrical Safety Gloves</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-yellow-600 to-orange-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/ppe/electrical-gloves-hero.jpg"
            alt="Professional electrical safety gloves for workplace protection in Saudi Arabia"
            fill
            priority
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
            Electrical Safety Gloves
          </h1>
          <p className="text-xl text-yellow-200 mb-10 max-w-3xl mx-auto">
            Professional-grade electrical safety gloves designed to protect workers from electrical hazards. Certified to international standards and available in multiple voltage classes for comprehensive electrical protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=electrical-safety-gloves"
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Electrical Safety Gloves Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors text-lg"
            >
              Contact Safety Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Safety Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our electrical safety gloves incorporate cutting-edge safety technology to provide maximum protection for electrical workers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glove Classes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Electrical Glove Classifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the right protection level for your electrical work environment with our range of certified glove classes.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gloveClasses.map((glove) => (
              <div key={glove.class} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={glove.image}
                    alt={`${glove.class} electrical safety gloves for ${glove.voltage} protection`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{glove.class}</h3>
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {glove.voltage}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {glove.applications.map((app, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Color:</span>
                      <p className="text-gray-600">{glove.color}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Thickness:</span>
                      <p className="text-gray-600">{glove.thickness}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Compliance with International Safety Standards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our electrical safety gloves meet and exceed the most stringent international safety standards, ensuring maximum protection for electrical workers in Saudi Arabia.
              </p>
              <ul className="space-y-3">
                {safetyStandards.map((standard, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ppe/electrical-safety-standards.jpg"
                alt="International electrical safety standards certification for PPE gloves"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Guidelines */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pre-Use Inspection Guidelines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proper inspection of electrical safety gloves before each use is critical for worker safety and compliance.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Required Safety Checks</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inspectionChecklist.map((item, index) => (
                <div key={index} className="flex items-start">
                  <ClipboardDocumentListIcon className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Electrical safety gloves must be tested every 6 months by a qualified testing laboratory. 
                Never use gloves that have exceeded their testing period or show any signs of damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Safety Professionals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See why electrical professionals across Saudi Arabia trust UNEOM for their safety equipment needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Eng. Mohammed Al-Rashid", company: "Saudi Electricity Company, Riyadh", quote: "[Placeholder: Testimonial about the reliability and quality of UNEOM electrical safety gloves in high-voltage work environments.]" },
              { name: "Ahmad Al-Zahrani", company: "SABIC Industrial Maintenance, Jubail", quote: "[Placeholder: Testimonial focusing on the comfort and dexterity of the gloves during extended electrical maintenance work.]" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src="/images/authors/avatar-placeholder.jpg" alt={`Testimonial from ${testimonial.name}`} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
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
      <section className="py-16 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Protect Your Electrical Workers with UNEOM
          </h2>
          <p className="text-xl text-yellow-200 mb-8 max-w-2xl mx-auto">
            Ensure workplace safety with our certified electrical safety gloves. Contact our PPE specialists to find the right protection for your electrical work environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=electrical-safety-gloves"
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get PPE Quote
            </Link>
            <Link
              href="/shop/ppe/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors text-lg"
            >
              View All PPE Products
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Electrical Safety Gloves",
          "description": "Professional-grade electrical safety gloves designed to protect workers from electrical hazards. Available in Class 0, 1, and 2 voltage ratings.",
          "brand": {
            "@type": "Brand",
            "name": "UNEOM"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "UNEOM",
            "url": "https://uneom.com"
          },
          "category": "Personal Protective Equipment",
          "image": "https://uneom.com/images/ppe/electrical-gloves-og.jpg",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "SAR",
            "seller": {
              "@type": "Organization",
              "name": "UNEOM"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          }
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uneom.com/" },
            { "@type": "ListItem", "position": 2, "name": "Shop", "item": "https://uneom.com/shop/" },
            { "@type": "ListItem", "position": 3, "name": "PPE", "item": "https://uneom.com/shop/ppe/" },
            { "@type": "ListItem", "position": 4, "name": "Electrical Safety Gloves", "item": "https://uneom.com/shop/ppe/electrical-gloves/" }
          ]
        }) }}
      />
    </div>
  )
}