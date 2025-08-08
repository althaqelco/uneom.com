import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  SparklesIcon as LeafIcon,
  ArrowPathIcon as RecycleIcon,
  SunIcon,
  BeakerIcon as WaterDropIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sustainable Healthcare Uniforms: Eco-Friendly Medical Attire | UNEOM Blog',
  description: 'Discover how sustainable healthcare uniforms are transforming the medical industry. Learn about eco-friendly fabrics, sustainable manufacturing, and environmental benefits in Saudi Arabia.',
  keywords: 'sustainable healthcare uniforms, eco-friendly medical attire, green healthcare, sustainable medical scrubs, environmental healthcare, eco medical uniforms, Saudi Arabia sustainability',
  openGraph: {
    title: 'Sustainable Healthcare Uniforms: Eco-Friendly Medical Attire',
    description: 'How eco-friendly materials are shaping the future of medical attire',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg']}}

const sustainabilityFeatures = [
  {
    icon: LeafIcon,
    title: 'Organic Cotton Fabrics',
    description: 'GOTS-certified organic cotton that reduces environmental impact by 91%',
    benefits: ['Pesticide-free cultivation', 'Biodegradable material', 'Soil health preservation', 'Water conservation']
  },
  {
    icon: RecycleIcon,
    title: 'Recycled Polyester',
    description: 'Made from recycled plastic bottles, reducing waste and energy consumption',
    benefits: ['Waste reduction', 'Energy savings', 'Durability enhancement', 'Cost effectiveness']
  },
  {
    icon: WaterDropIcon,
    title: 'Water-Efficient Production',
    description: 'Advanced dyeing processes that use 70% less water than traditional methods',
    benefits: ['Water conservation', 'Reduced pollution', 'Energy efficiency', 'Chemical reduction']
  },
  {
    icon: SunIcon,
    title: 'Solar-Powered Manufacturing',
    description: 'Production facilities powered by renewable energy sources',
    benefits: ['Carbon footprint reduction', 'Clean energy use', 'Cost savings', 'Environmental protection']
  }
]

const environmentalImpact = [
  {
    metric: 'Water Savings',
    value: '2,700 liters',
    description: 'per uniform compared to conventional production',
    icon: WaterDropIcon
  },
  {
    metric: 'CO2 Reduction',
    value: '75%',
    description: 'lower carbon emissions in manufacturing',
    icon: LeafIcon
  },
  {
    metric: 'Waste Reduction',
    value: '12 bottles',
    description: 'recycled plastic bottles per uniform',
    icon: RecycleIcon
  },
  {
    metric: 'Energy Savings',
    value: '60%',
    description: 'less energy consumption in production',
    icon: SunIcon
  }
]

const sustainableMaterials = [
  {
    name: 'Organic Cotton',
    properties: ['Breathable', 'Hypoallergenic', 'Biodegradable', 'Pesticide-free'],
    applications: ['Scrub tops', 'Lab coats', 'Undergarments', 'Accessories'],
    sustainability: 'GOTS certified, supports soil health and farmer welfare'
  },
  {
    name: 'Recycled Polyester',
    properties: ['Durable', 'Moisture-wicking', 'Stain-resistant', 'Quick-dry'],
    applications: ['Scrub pants', 'Jackets', 'Activewear', 'Outerwear'],
    sustainability: 'Made from recycled plastic bottles, reduces landfill waste'
  },
  {
    name: 'Bamboo Fiber',
    properties: ['Antimicrobial', 'UV-resistant', 'Soft texture', 'Temperature-regulating'],
    applications: ['Undergarments', 'Socks', 'Base layers', 'Comfort wear'],
    sustainability: 'Fast-growing renewable resource, naturally antimicrobial'
  },
  {
    name: 'Hemp Blend',
    properties: ['Strong', 'Durable', 'Breathable', 'Naturally resistant'],
    applications: ['Heavy-duty uniforms', 'Workwear', 'Protective gear', 'Accessories'],
    sustainability: 'Requires minimal water, improves soil quality'
  }
]

const saudiInitiatives = [
  {
    title: 'Vision 2030 Sustainability Goals',
    description: 'Aligning healthcare sustainability with national environmental objectives',
    impact: 'Supporting Saudi Arabia\'s commitment to reduce carbon emissions by 278 million tons annually'
  },
  {
    title: 'Green Healthcare Program',
    description: 'Ministry of Health initiative promoting sustainable practices in healthcare facilities',
    impact: 'Over 200 hospitals participating in sustainable uniform adoption programs'
  },
  {
    title: 'Circular Economy Initiative',
    description: 'Promoting recycling and waste reduction in healthcare supply chains',
    impact: 'Targeting 30% reduction in healthcare textile waste by 2030'
  }
]

const certifications = [
  {
    name: 'GOTS (Global Organic Textile Standard)',
    description: 'Ensures organic fiber content and environmental criteria',
    logo: '/images/certifications/gots-logo.svg'
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Tests for harmful substances in textiles',
    logo: '/images/certifications/oeko-tex-logo.svg'
  },
  {
    name: 'Cradle to Cradle Certified',
    description: 'Assesses products for safety and sustainability',
    logo: '/images/certifications/c2c-logo.svg'
  },
  {
    name: 'bluesign® approved',
    description: 'Ensures responsible resource use and worker safety',
    logo: '/images/certifications/bluesign-logo.svg'
  }
]

export default function SustainableHealthcareUniformsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
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
              <span className="text-sm font-medium">UNEOM Sustainability Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Sustainable Healthcare Uniforms:
              <span className="text-green-600 block">The Future is Green</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover how eco-friendly materials and sustainable manufacturing are revolutionizing 
              healthcare uniforms, creating a healthier planet while maintaining the highest 
              standards of medical care in Saudi Arabia.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/shop/medical-scrubs"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Sustainable Uniforms
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Environmental Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the measurable difference sustainable healthcare uniforms make for our planet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {environmentalImpact.map((impact, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {impact.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {impact.metric}
                </h3>
                <p className="text-gray-600 text-sm">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainable Innovation Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced eco-friendly technologies that don't compromise on quality or performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Benefits:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainable Materials Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the eco-friendly materials revolutionizing healthcare uniforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sustainableMaterials.map((material, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {material.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Properties:</p>
                    <div className="flex flex-wrap gap-2">
                      {material.properties.map((property, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {property}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Applications:</p>
                    <div className="flex flex-wrap gap-2">
                      {material.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Sustainability:</p>
                    <p className="text-sm text-gray-600">{material.sustainability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Arabia Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Saudi Arabia's Green Healthcare Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How the Kingdom is leading sustainable healthcare transformation in the region.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {saudiInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {initiative.description}
                </p>
                <p className="text-sm text-green-700 font-medium">
                  Impact: {initiative.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainability Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              International standards ensuring the highest levels of environmental responsibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <GlobeAltIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Healthcare Facilities */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Benefits for Healthcare Facilities
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Sustainable uniforms offer multiple advantages beyond environmental protection.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LeafIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cost Savings
                </h3>
                <p className="text-gray-600 text-sm">
                  Durable materials reduce replacement frequency, lowering long-term costs by up to 40%.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Staff Satisfaction
                </h3>
                <p className="text-gray-600 text-sm">
                  Comfortable, breathable fabrics improve staff comfort and job satisfaction.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Brand Reputation
                </h3>
                <p className="text-gray-600 text-sm">
                  Demonstrate environmental responsibility and attract eco-conscious patients and staff.
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
            Join the Sustainable Healthcare Revolution
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with UNEOM to implement sustainable uniform solutions that benefit your facility, 
            staff, and the environment. Make a positive impact today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Sustainable Quote
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              View Eco Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Articles
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
                    Explore cutting-edge innovations in medical textiles and sustainability.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/healthcare-compliance-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="Healthcare compliance guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Healthcare Compliance Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Essential compliance requirements including sustainability standards.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/sustainability-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <LeafIcon className="h-16 w-16 text-green-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Sustainability Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive guide to implementing sustainable practices in healthcare.
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