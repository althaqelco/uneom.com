import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  UserIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Healthcare Compliance Guide: Medical Uniform Standards in Saudi Arabia | UNEOM',
  description: 'Complete guide to healthcare compliance and medical uniform standards in Saudi Arabia. Learn about regulations, quality requirements, and best practices for healthcare facilities.',
  keywords: 'healthcare compliance, medical uniform standards, Saudi Arabia healthcare regulations, medical attire compliance, healthcare quality standards, medical uniform guidelines',
  openGraph: {
    title: 'Healthcare Compliance Guide: Medical Uniform Standards in Saudi Arabia',
    description: 'Essential compliance requirements for medical uniforms in Saudi healthcare facilities',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'],
  },
}

const complianceAreas = [
  {
    icon: ShieldCheckIcon,
    title: 'Infection Control Standards',
    description: 'Antimicrobial treatments, fabric specifications, and contamination prevention protocols',
    requirements: [
      'Antimicrobial fabric treatment certification',
      'Fluid-resistant material specifications',
      'Color-coding for different departments',
      'Regular testing and validation protocols'
    ]
  },
  {
    icon: DocumentCheckIcon,
    title: 'Quality Certifications',
    description: 'International and local quality standards for medical textiles and manufacturing',
    requirements: [
      'ISO 13485 Medical Device Quality Management',
      'OEKO-TEX Standard 100 certification',
      'Saudi Standards Organization (SASO) compliance',
      'CE marking for medical devices'
    ]
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Documentation Requirements',
    description: 'Proper documentation and traceability for compliance audits',
    requirements: [
      'Material composition certificates',
      'Manufacturing process documentation',
      'Quality control test results',
      'Supplier qualification records'
    ]
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Safety Protocols',
    description: 'Worker safety and patient protection standards',
    requirements: [
      'Chemical safety data sheets',
      'Allergen-free material certification',
      'Fire retardant specifications',
      'Ergonomic design validation'
    ]
  }
]

const regulatoryBodies = [
  {
    name: 'Ministry of Health (MOH)',
    role: 'Primary healthcare regulator',
    requirements: 'Healthcare facility licensing and operational standards',
    contact: 'www.moh.gov.sa'
  },
  {
    name: 'Saudi Food and Drug Authority (SFDA)',
    role: 'Medical device regulation',
    requirements: 'Medical textile classification and approval',
    contact: 'www.sfda.gov.sa'
  },
  {
    name: 'Saudi Standards Organization (SASO)',
    role: 'National standards development',
    requirements: 'Quality standards and conformity assessment',
    contact: 'www.saso.gov.sa'
  },
  {
    name: 'Central Board for Accreditation of Healthcare Institutions (CBAHI)',
    role: 'Healthcare accreditation',
    requirements: 'Quality and safety standards for healthcare facilities',
    contact: 'www.cbahi.gov.sa'
  }
]

const complianceChecklist = [
  {
    category: 'Material Specifications',
    items: [
      'Antimicrobial treatment certification',
      'Fabric composition documentation',
      'Colorfastness test results',
      'Shrinkage and durability testing',
      'Chemical safety compliance'
    ]
  },
  {
    category: 'Manufacturing Standards',
    items: [
      'ISO 13485 certification',
      'Good Manufacturing Practices (GMP)',
      'Quality control procedures',
      'Traceability systems',
      'Supplier qualification'
    ]
  },
  {
    category: 'Design Requirements',
    items: [
      'Ergonomic design validation',
      'Functional pocket placement',
      'Appropriate coverage standards',
      'Cultural sensitivity compliance',
      'Size range adequacy'
    ]
  },
  {
    category: 'Testing and Validation',
    items: [
      'Antimicrobial efficacy testing',
      'Fluid resistance testing',
      'Comfort and breathability assessment',
      'Durability and wash testing',
      'User acceptance validation'
    ]
  }
]

const bestPractices = [
  {
    title: 'Regular Compliance Audits',
    description: 'Conduct quarterly compliance reviews to ensure ongoing adherence to standards',
    implementation: 'Schedule regular internal audits and third-party assessments'
  },
  {
    title: 'Staff Training Programs',
    description: 'Educate healthcare staff on proper uniform usage and compliance requirements',
    implementation: 'Develop comprehensive training modules and certification programs'
  },
  {
    title: 'Supplier Qualification',
    description: 'Maintain rigorous supplier qualification and monitoring processes',
    implementation: 'Establish supplier scorecards and regular performance reviews'
  },
  {
    title: 'Documentation Management',
    description: 'Implement robust documentation systems for compliance tracking',
    implementation: 'Use digital systems for document control and audit trails'
  }
]

export default function HealthcareComplianceGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">May 25, 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">UNEOM Compliance Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Healthcare Compliance Guide:
              <span className="text-green-600 block">Medical Uniform Standards</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Navigate the complex landscape of healthcare compliance in Saudi Arabia. 
              Your comprehensive guide to medical uniform standards, regulations, and best practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/quote"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Compliant Uniforms
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Compliance Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Compliance Matters
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Healthcare compliance isn't just about meeting regulations—it's about ensuring 
                  patient safety, staff protection, and operational excellence. In Saudi Arabia's 
                  evolving healthcare landscape, compliance with medical uniform standards is 
                  critical for maintaining accreditation and delivering quality care.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  This comprehensive guide covers everything healthcare administrators need to know 
                  about medical uniform compliance, from regulatory requirements to implementation 
                  best practices.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="Healthcare professional in compliant medical uniform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Compliance Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the four pillars of healthcare uniform compliance in Saudi Arabia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <area.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Requirements:</p>
                  <ul className="space-y-2">
                    {area.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Regulatory Bodies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the regulatory landscape in Saudi Arabia's healthcare sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {regulatoryBodies.map((body, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {body.name}
                </h3>
                <p className="text-sm text-green-600 font-medium mb-2">
                  {body.role}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {body.requirements}
                </p>
                <p className="text-xs text-blue-600">
                  {body.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance Checklist
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use this comprehensive checklist to ensure your medical uniforms meet all requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {complianceChecklist.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <input 
                        type="checkbox" 
                        className="mt-1 mr-3 h-4 w-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Best Practices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven strategies for successful compliance implementation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {practice.description}
                </p>
                <p className="text-sm text-green-700 font-medium">
                  Implementation: {practice.implementation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNEOM Compliance Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              UNEOM Compliance Support
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We understand the complexity of healthcare compliance. That's why UNEOM provides 
              comprehensive support to ensure your medical uniforms meet all regulatory requirements.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentCheckIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Documentation Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete documentation packages including certificates, test results, and compliance reports.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600 text-sm">
                  Rigorous quality control processes ensuring every uniform meets compliance standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardDocumentListIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ongoing Monitoring
                </h3>
                <p className="text-gray-600 text-sm">
                  Continuous monitoring of regulatory changes and proactive compliance updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ensure Your Compliance Today
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't risk non-compliance. Partner with UNEOM for medical uniforms that meet 
            all Saudi healthcare standards and regulations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Compliance Quote
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/blog/medical-textile-innovation" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="Medical textile innovation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Medical Textile Innovation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover the latest innovations in medical textiles and compliance standards.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/policy-templates" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <DocumentCheckIcon className="h-16 w-16 text-green-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Policy Templates
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Download ready-to-use compliance policy templates for your facility.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/medical-scrubs" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="Compliant medical scrubs"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Compliant Medical Scrubs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore our collection of fully compliant medical uniforms.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}