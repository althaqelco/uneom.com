import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CogIcon,
  CalendarIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Medical Textile Innovation: Revolutionizing Healthcare Uniforms in Saudi Arabia | UNEOM Blog',
  description: 'Explore the latest innovations in medical textiles and how they are transforming healthcare uniforms in Saudi Arabia. From antimicrobial fabrics to smart textiles, discover the future of medical apparel.',
  keywords: 'medical textile innovation, healthcare uniforms, antimicrobial fabrics, smart textiles, Saudi healthcare, medical apparel technology, UNEOM innovation, healthcare textile trends',
  openGraph: {
    title: 'Medical Textile Innovation: Revolutionizing Healthcare Uniforms',
    description: 'Discover how cutting-edge textile innovations are transforming healthcare uniforms in Saudi Arabia medical facilities.',
    images: ['/images/blog/medical-textile-innovation-hero.jpg']}}

const innovations = [
  {
    icon: ShieldCheckIcon,
    title: 'Antimicrobial Technology',
    description: 'Advanced silver-ion and copper-infused fabrics that actively fight bacteria and viruses',
    benefits: ['99.9% pathogen reduction', 'Long-lasting protection', 'Odor control']
  },
  {
    icon: SparklesIcon,
    title: 'Moisture Management',
    description: 'Intelligent fabric systems that regulate temperature and moisture for optimal comfort',
    benefits: ['Enhanced breathability', 'Quick-dry properties', 'Temperature regulation']
  },
  {
    icon: CogIcon,
    title: 'Smart Textiles',
    description: 'Fabrics embedded with sensors and technology for health monitoring and safety',
    benefits: ['Vital sign monitoring', 'Environmental alerts', 'Data integration']
  },
  {
    icon: BeakerIcon,
    title: 'Sustainable Materials',
    description: 'Eco-friendly fabrics made from recycled materials and sustainable processes',
    benefits: ['Reduced environmental impact', 'Biodegradable options', 'Circular economy support']
  }
]

export default function MedicalTextileInnovationBlog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Medical Textile Innovation: Revolutionizing Healthcare Uniforms
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how cutting-edge textile technologies are transforming healthcare uniforms in Saudi Arabia, enhancing safety, comfort, and performance for medical professionals.
          </p>
          <div className="flex items-center justify-center space-x-6 text-blue-200 text-sm">
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 mr-2" />
              <span>UNEOM Research Team</span>
            </div>
            <div className="flex items-center">
              <TagIcon className="h-5 w-5 mr-2" />
              <span>Healthcare Innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The healthcare industry in Saudi Arabia is experiencing a technological revolution, and medical textiles are at the forefront of this transformation. As the Kingdom continues to invest in world-class healthcare infrastructure through Vision 2030, the demand for innovative medical uniforms that enhance safety, comfort, and performance has never been higher.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-md">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Key Insight</h3>
            <p className="text-blue-700">
              Medical textile innovations are not just about comfort—they are about creating a safer, more efficient healthcare environment that protects both patients and healthcare workers while supporting Saudi Arabia healthcare excellence goals.
            </p>
          </div>
        </div>

        {/* Innovation Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Revolutionary Textile Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <innovation.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{innovation.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{innovation.description}</p>
                <ul className="space-y-2">
                  {innovation.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Future of Medical Textiles in Saudi Arabia</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              As Saudi Arabia continues to position itself as a global healthcare leader, several emerging trends are shaping the future of medical textiles:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Integration with Digital Health</h3>
            <p className="text-gray-700 mb-6">
              Smart textiles embedded with IoT sensors will enable real-time health monitoring, allowing healthcare facilities to track staff wellness and environmental conditions continuously.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Personalized Medical Uniforms</h3>
            <p className="text-gray-700 mb-6">
              Advanced manufacturing techniques will enable custom-fitted uniforms tailored to individual healthcare workers needs, improving comfort and performance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Sustainable Healthcare Textiles</h3>
            <p className="text-gray-700 mb-6">
              In line with Saudi Arabia sustainability goals, eco-friendly medical textiles made from recycled materials and designed for circular economy principles will become standard.
            </p>
          </div>
        </section>

        {/* UNEOM Innovation */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">UNEOM Commitment to Innovation</h2>
            <p className="text-blue-100 mb-6">
              At UNEOM, we are not just following these trends—we are helping to create them. Our research and development team works closely with Saudi healthcare facilities to develop cutting-edge uniform solutions that meet the unique needs of the Kingdom medical professionals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Innovative Fabric Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200">Antimicrobial Effectiveness</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Innovate Your Healthcare Uniforms?</h3>
          <p className="text-gray-700 mb-6">
            Discover how UNEOM innovative medical textile solutions can transform your healthcare facility uniform program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Medical+Textile+Innovation+Inquiry"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Innovation Consultation
            </Link>
            <Link
              href="/shop/medical-scrubs/"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Medical Uniforms
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}