import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Security Uniform Safety Standards in Saudi Arabia | UNEOM',
  description: 'Comprehensive guide to safety and quality standards required for security uniforms according to Saudi regulations and international occupational safety standards',
  keywords: 'safety standards, security uniform, safety regulations, quality standards, security safety, Saudi Arabia',
  openGraph: {
    title: 'Security Uniform Safety Standards in Saudi Arabia | UNEOM',
    description: 'Comprehensive guide to safety and quality standards required for security uniforms',
    images: ['/images/blog/security-uniform-safety-standards-en.jpg'],
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://uneom.com/blog/security-uniform-safety-standards/',
    languages: {
      'en': 'https://uneom.com/blog/security-uniform-safety-standards/',
      'ar': 'https://uneom.com/ar/blog/security-uniform-safety-standards/',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Security Uniform Safety Standards in Saudi Arabia',
  description: 'Comprehensive guide to safety and quality standards required for security uniforms according to Saudi regulations and international occupational safety standards',
  image: 'https://uneom.com/images/blog/security-uniform-safety-standards-en.jpg',
  author: {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'UNEOM',
    logo: {
      '@type': 'ImageObject',
      url: 'https://uneom.com/images/logo.png',
    },
  },
  datePublished: '2025-05-26',
  dateModified: '2025-05-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://uneom.com/blog/security-uniform-safety-standards/',
  },
  inLanguage: 'en-US',
  about: [
    {
      '@type': 'Thing',
      name: 'Safety Standards',
    },
    {
      '@type': 'Thing', 
      name: 'Security Uniform',
    },
  ],
}

export default function SecurityUniformSafetyStandards() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
          <Image
            src="/images/blog/security-uniform-safety-standards-hero.jpg"
            alt="Security Uniform Safety Standards"
            fill
            className="object-cover -z-10"
            priority
          />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Security Uniform
                <span className="block text-blue-400">Safety Standards</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guide to safety and quality standards required for security uniforms according to Saudi regulations
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">
                  Saudi Standards
                </span>
                <span className="bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">
                  Occupational Safety
                </span>
                <span className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30">
                  High Quality
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                Safety standards in security uniforms play a pivotal role in ensuring the protection of security personnel and enhancing their effectiveness in performing their duties. In Saudi Arabia, security uniforms are subject to strict standards that ensure the highest levels of quality and safety, contributing to achieving the Kingdom's Vision 2030 in the field of security and safety.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Importance of Safety Standards in Security Uniforms
                </h3>
                <p className="text-blue-800">
                  Safety standards ensure protection of security personnel from occupational hazards and enhance their ability to perform their duties efficiently and confidently, positively reflecting on public security in the Kingdom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Standards Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Essential Safety Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn about the essential standards that must be available in security uniforms to ensure safety and protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Material Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <CogIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Material Standards</h3>
                <p className="text-gray-600 mb-4">
                  High-quality materials resistant to tearing and friction with antibacterial properties
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Corrosion and tear resistance</li>
                  <li>• Antimicrobial properties</li>
                  <li>• Proper ventilation</li>
                </ul>
              </div>

              {/* Visibility Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition-colors">
                  <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visibility Standards</h3>
                <p className="text-gray-600 mb-4">
                  Reflective colors and markings ensuring clear visibility in all conditions and times
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• High-quality reflective strips</li>
                  <li>• Clear contrasting colors</li>
                  <li>• Enhanced night visibility</li>
                </ul>
              </div>

              {/* Protection Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <ShieldCheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protection Standards</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive protection from environmental factors and various occupational hazards
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Weather and moisture resistance</li>
                  <li>• UV protection</li>
                  <li>• Moderate heat resistance</li>
                </ul>
              </div>

              {/* Comfort Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <UserGroupIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comfort Standards</h3>
                <p className="text-gray-600 mb-4">
                  Comfortable design allowing freedom of movement and optimal performance for long periods
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Comfortable and flexible cuts</li>
                  <li>• Proper ventilation</li>
                  <li>• Lightweight</li>
                </ul>
              </div>

              {/* Quality Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <DocumentCheckIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Standards</h3>
                <p className="text-gray-600 mb-4">
                  Strict quality tests ensuring durability and long-term performance
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Durability testing</li>
                  <li>• Stitching and finishing inspection</li>
                  <li>• Comprehensive quality assurance</li>
                </ul>
              </div>

              {/* Compliance Standards */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                  <ClipboardDocumentListIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Standards</h3>
                <p className="text-gray-600 mb-4">
                  Compliance with Saudi regulations and international occupational safety standards
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Saudi SASO standards</li>
                  <li>• International ISO standards</li>
                  <li>• Certified quality certificates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Saudi Regulations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Saudi Regulations for Security Uniforms
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Overview of local regulations and standards governing the security uniform industry in the Kingdom
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/blog/saudi-security-regulations.jpg"
                  alt="Saudi Security Uniform Regulations"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Saudi Standards Organization (SASO)</h3>
                  <p className="text-gray-600">
                    Sets basic standards for material quality, manufacturing, and safety in security uniforms
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ministry of Interior</h3>
                  <p className="text-gray-600">
                    Sets specific requirements for appearance and security functions of official uniforms
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">General Organization for Social Insurance</h3>
                  <p className="text-gray-600">
                    Defines occupational safety standards and worker protection in the security sector
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing and Certification */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Required Testing and Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Testing and inspection processes ensuring security uniforms comply with required standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Material Testing</h3>
                <p className="text-gray-600 text-sm">
                  Examining fabric quality and resistance to various factors
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Testing</h3>
                <p className="text-gray-600 text-sm">
                  Evaluating comfort, flexibility, and practical functions
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Safety Testing</h3>
                <p className="text-gray-600 text-sm">
                  Examining required protection and safety levels
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Final Certification</h3>
                <p className="text-gray-600 text-sm">
                  Issuing certified compliance and quality certificates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Best Practices in Security Uniform Selection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Practical guidelines to ensure selection of appropriate and safe security uniforms
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Selection Criteria</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Define Functional Requirements</h4>
                    <p className="text-gray-600">Identify work nature and potential hazards to choose appropriate protection</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Check Certificates and Compliance</h4>
                    <p className="text-gray-600">Ensure the product has required certificates from approved authorities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Test Comfort and Fit</h4>
                    <p className="text-gray-600">Ensure proper sizing and comfort during movement and work</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Evaluate Total Cost</h4>
                    <p className="text-gray-600">Calculate comprehensive cost including maintenance and replacement</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Safety Checklist</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">SASO compliance certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Tear resistance testing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Reflective elements inspection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Comfort and flexibility assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Stitching quality inspection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Weather resistance testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Security Uniforms Meeting Highest Safety Standards
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts for free consultation on the best security solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote/"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/shop/security-uniforms/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Browse Security Uniforms
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/blog/security-uniform-psychology/" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src="/images/blog/security-uniform-psychology.jpg"
                    alt="Security Uniform Psychology"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Security Uniform Psychology and Impact
                    </h3>
                    <p className="text-gray-600">
                      How security uniform design affects public behavior and confidence in security personnel
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/security-equipment-maintenance/" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src="/images/blog/security-equipment-maintenance.jpg"
                    alt="Security Equipment Maintenance"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Security Equipment Maintenance and Management
                    </h3>
                    <p className="text-gray-600">
                      Best practices for maintaining quality and effectiveness of security uniforms and equipment
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/modern-security-technologies/" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src="/images/blog/modern-security-technologies.jpg"
                    alt="Modern Security Technologies"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Modern Security Technologies
                    </h3>
                    <p className="text-gray-600">
                      Latest technological developments in security and protection field
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}