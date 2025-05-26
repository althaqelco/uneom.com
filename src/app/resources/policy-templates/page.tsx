import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  DocumentTextIcon,
  ArrowDownTrayIcon as DownloadIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  HeartIcon,
  CogIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Uniform Policy Templates | Free Downloads | UNEOM Resources',
  description: 'Download free uniform policy templates for healthcare, corporate, hospitality, and industrial sectors. Comprehensive guidelines and implementation checklists for Saudi Arabian organizations.',
  keywords: 'uniform policy templates, healthcare uniform policy, corporate dress code, hospitality uniform guidelines, industrial uniform policy, Saudi Arabia uniform standards',
  openGraph: {
    title: 'Free Uniform Policy Templates | UNEOM Resources',
    description: 'Download comprehensive uniform policy templates for your organization',
    images: ['/images/resources/policy-templates-preview.jpg'],
  },
}

const policyTemplates = [
  {
    id: 'healthcare',
    title: 'Healthcare Uniform Policy',
    description: 'Comprehensive policy template for hospitals, clinics, and medical facilities',
    icon: HeartIcon,
    features: [
      'Infection control guidelines',
      'Color coding systems',
      'Antimicrobial requirements',
      'Maintenance protocols',
      'Compliance standards'
    ],
    fileSize: '2.3 MB',
    pages: 24,
    downloadUrl: '/downloads/policy-templates/healthcare-uniform-policy.pdf',
    previewImage: '/images/resources/healthcare-policy-preview.jpg'
  },
  {
    id: 'corporate',
    title: 'Corporate Office Policy',
    description: 'Professional dress code guidelines for corporate environments',
    icon: BuildingOfficeIcon,
    features: [
      'Business attire standards',
      'Seasonal guidelines',
      'Cultural considerations',
      'Brand representation',
      'Remote work policies'
    ],
    fileSize: '1.8 MB',
    pages: 18,
    downloadUrl: '/downloads/policy-templates/corporate-office-policy.pdf',
    previewImage: '/images/resources/corporate-policy-preview.jpg'
  },
  {
    id: 'hospitality',
    title: 'Hospitality Uniform Policy',
    description: 'Guidelines for hotels, restaurants, and service industries',
    icon: UserGroupIcon,
    features: [
      'Department-specific uniforms',
      'Guest interaction standards',
      'Hygiene requirements',
      'Seasonal variations',
      'Brand consistency'
    ],
    fileSize: '2.1 MB',
    pages: 20,
    downloadUrl: '/downloads/policy-templates/hospitality-uniform-policy.pdf',
    previewImage: '/images/resources/hospitality-policy-preview.jpg'
  },
  {
    id: 'industrial',
    title: 'Industrial Manufacturing Policy',
    description: 'Safety-focused uniform policies for manufacturing and industrial settings',
    icon: CogIcon,
    features: [
      'Safety requirements',
      'PPE integration',
      'Hazard-specific guidelines',
      'Maintenance schedules',
      'Compliance tracking'
    ],
    fileSize: '2.7 MB',
    pages: 28,
    downloadUrl: '/downloads/policy-templates/industrial-manufacturing-policy.pdf',
    previewImage: '/images/resources/industrial-policy-preview.jpg'
  }
]

const implementationResources = [
  {
    title: 'Implementation Checklist',
    description: 'Step-by-step guide to implementing uniform policies',
    downloadUrl: '/downloads/policy-templates/uniform-policy-implementation-checklist.pdf',
    fileSize: '1.2 MB',
    icon: ClipboardDocumentListIcon
  },
  {
    title: 'General Policy Template',
    description: 'Customizable template for any organization type',
    downloadUrl: '/downloads/policy-templates/general-uniform-policy-template.pdf',
    fileSize: '1.5 MB',
    icon: DocumentTextIcon
  }
]

const benefits = [
  {
    title: 'Legal Compliance',
    description: 'Ensure your policies meet Saudi labor law requirements and international standards',
    icon: ShieldCheckIcon
  },
  {
    title: 'Professional Standards',
    description: 'Maintain consistent professional appearance across your organization',
    icon: CheckCircleIcon
  },
  {
    title: 'Cost Management',
    description: 'Clear guidelines help control uniform costs and replacement schedules',
    icon: CogIcon
  },
  {
    title: 'Employee Clarity',
    description: 'Eliminate confusion with clear, comprehensive uniform guidelines',
    icon: UserGroupIcon
  }
]

const customizationTips = [
  {
    step: '1',
    title: 'Review Your Industry Requirements',
    description: 'Consider specific regulations and standards for your sector'
  },
  {
    step: '2',
    title: 'Adapt to Local Culture',
    description: 'Ensure policies respect Saudi cultural norms and preferences'
  },
  {
    step: '3',
    title: 'Include Your Branding',
    description: 'Incorporate your company logo, colors, and brand guidelines'
  },
  {
    step: '4',
    title: 'Set Clear Consequences',
    description: 'Define enforcement procedures and consequences for non-compliance'
  },
  {
    step: '5',
    title: 'Plan for Updates',
    description: 'Establish a review schedule to keep policies current'
  }
]

export default function PolicyTemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Free Uniform Policy
              <span className="text-blue-600 block">Templates</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Download comprehensive, ready-to-use uniform policy templates designed specifically 
              for Saudi Arabian organizations. Save time and ensure compliance with professional, 
              legally-sound policies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#templates"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Browse Templates
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Custom Policy Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use Professional Policy Templates?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Well-crafted uniform policies protect your organization and create clear expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Templates Section */}
      <section id="templates" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Policy Templates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of professionally crafted templates tailored 
              to different industries and organizational needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {policyTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <template.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {template.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {template.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {template.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{template.pages} pages</span>
                      <span>{template.fileSize}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={template.downloadUrl}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center flex items-center justify-center"
                    download
                  >
                    <DownloadIcon className="h-5 w-5 mr-2" />
                    Download Template
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Additional resources to help you successfully implement your uniform policies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {implementationResources.map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.fileSize}</span>
                      <Link
                        href={resource.downloadUrl}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                        download
                      >
                        <DownloadIcon className="h-4 w-4 mr-1" />
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Customize Your Policy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to adapt our templates to your organization's specific needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {customizationTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {tip.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Arabia Specific Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Saudi Arabia Specific Considerations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our templates include important considerations for operating in Saudi Arabia.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Cultural Sensitivity
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Modest dress requirements
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Gender-appropriate guidelines
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Religious observance considerations
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Climate Considerations
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Heat-resistant materials
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Breathable fabric requirements
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Seasonal variations
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Legal Compliance
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Saudi Labor Law alignment
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Ministry of Health requirements
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Industry-specific regulations
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Local Sourcing
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Saudi supplier preferences
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Vision 2030 alignment
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Local content requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Policy Solution?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our experts can create tailored uniform policies specific to your organization's 
            unique requirements and industry standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Request Custom Policy
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/services/corporate-programs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Corporate Services
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
            <Link href="/blog/healthcare-compliance-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="Healthcare compliance guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Healthcare Compliance Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Essential compliance requirements for medical uniform policies.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/fabric-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <DocumentTextIcon className="h-16 w-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Fabric Selection Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Choose the right materials for your uniform requirements.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/services/corporate-programs" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="Corporate uniform programs"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Corporate Programs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive uniform solutions for corporate organizations.
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