import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  ArrowLeftIcon,
  CalendarIcon,
  UserIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Best Student Uniform Fabrics: Complete Guide for School Attire | UNEOM',
  description: 'Discover the best fabric types for student uniforms in Saudi Arabia. Comprehensive guide covering comfort, durability, easy care, and health standards for school fabrics.',
  keywords: 'student uniform fabrics, high-quality school fabrics, comfortable school uniforms, stain-resistant fabrics, Saudi school uniforms, educational textiles',
  openGraph: {
    title: 'Best Student Uniform Fabrics: Complete Selection Guide',
    description: 'Expert guide to choosing the best student uniform fabrics that combine comfort and durability',
    images: ['/images/education/school-uniform-fabric-guide.jpg'],
  },
}

const fabricTypes = [
  {
    icon: ShieldCheckIcon,
    title: 'Premium Cotton Blends',
    description: 'Perfect combination of cotton and polyester providing comfort and durability together',
    benefits: ['Excellent breathability', 'Wrinkle resistant', 'Easy care', 'Durable and long-lasting'],
    percentage: '60% Cotton, 40% Polyester',
    color: 'blue'
  },
  {
    icon: SparklesIcon,
    title: 'Stain-Resistant Fabrics',
    description: 'Advanced technology that protects uniforms from daily stains and dirt',
    benefits: ['Stain protection', 'Easy cleaning', 'Color retention', 'Water resistant'],
    percentage: 'Advanced protective coating',
    color: 'green'
  },
  {
    icon: BeakerIcon,
    title: 'Antimicrobial Fabrics',
    description: 'Special treatment that prevents bacterial growth and maintains hygiene',
    benefits: ['Antibacterial', 'Odor prevention', 'Healthy and safe', 'Allergy-friendly'],
    percentage: 'Silver nanoparticle treatment',
    color: 'purple'
  },
  {
    icon: CpuChipIcon,
    title: 'Smart Adaptive Fabrics',
    description: 'Modern technology that adapts to body temperature and weather conditions',
    benefits: ['Temperature regulation', 'Moisture absorption', 'Quick dry', 'All-day comfort'],
    percentage: 'Advanced smart fibers',
    color: 'indigo'
  }
]

const ageGroups = [
  {
    age: 'Elementary Level (6-11 years)',
    requirements: ['Soft fabrics on skin', 'High stain resistance', 'Bright stable colors', 'Easy movement and play'],
    recommendedFabric: 'Cotton blend with stain-resistant treatment',
    icon: '🎒'
  },
  {
    age: 'Middle School (12-14 years)',
    requirements: ['High durability for activities', 'Tear resistance', 'Easy care', 'Smart and neat appearance'],
    recommendedFabric: 'Reinforced cotton-polyester blend',
    icon: '📚'
  },
  {
    age: 'High School (15-18 years)',
    requirements: ['Professional appearance', 'All-day comfort', 'Wrinkle resistance', 'Color fastness'],
    recommendedFabric: 'Smart adaptive fabrics',
    icon: '🎓'
  }
]

const careInstructions = [
  {
    title: 'Proper Washing',
    steps: ['Use cold or lukewarm water', 'Turn garment inside out before washing', 'Use gentle detergent', 'Avoid strong bleach'],
    icon: '🧺'
  },
  {
    title: 'Appropriate Drying',
    steps: ['Air dry outdoors', 'Avoid direct sunlight', 'Use dryer on low heat', 'Remove items while slightly damp'],
    icon: '☀️'
  },
  {
    title: 'Ironing and Storage',
    steps: ['Iron on medium heat', 'Use protective cloth for prints', 'Hang items after ironing', 'Store in dry, ventilated place'],
    icon: '👔'
  }
]

const saudiStandards = [
  {
    title: 'Saudi Quality Standards',
    description: 'All our fabrics comply with Saudi quality standards SASO',
    icon: '🏆'
  },
  {
    title: 'Saudi Climate',
    description: 'Fabrics specially designed to suit hot and dry climate conditions',
    icon: '🌡️'
  },
  {
    title: 'Cultural Values',
    description: 'Designs that respect authentic Saudi values and traditions',
    icon: '🕌'
  }
]

export default function FabricsStudentUniformsPageAR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-blue-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">May 25, 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">UNEOM Expert Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Best Student Uniform Fabrics:
              <span className="text-blue-600 block">Complete Selection Guide</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover how to choose the best fabric types for school uniforms that combine comfort, durability, and elegance, 
              while considering Saudi climate conditions and modern educational standards.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/ar/shop/education-uniforms"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Browse School Uniforms
              </Link>
              <Link 
                href="/ar/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Free Consultation
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
                  Why Does Choosing the Right Fabric Matter?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Students spend long hours in their school uniforms, so the fabric must be comfortable, durable, and healthy. 
                  The right fabric choice affects student comfort, academic performance, and self-confidence.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  In Saudi Arabia's hot climate, fabric properties become even more important, as we need fabrics that breathe well 
                  and keep the body cool while maintaining an elegant appearance throughout the school day.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/education/school-uniform-fabric-guide.jpg"
                    alt="High-quality school uniform fabric guide"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Fabric Types for School Uniforms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern technologies in fabric manufacturing ensure the best experience for students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {fabricTypes.map((fabric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <fabric.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {fabric.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {fabric.description}
                    </p>
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {fabric.percentage}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Key Benefits:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {fabric.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fabric Selection by Age Group
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each age group has specific fabric requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{group.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {group.age}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
                    <ul className="space-y-1">
                      {group.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-700 mb-1">Recommended Fabric:</p>
                    <p className="text-sm text-gray-700">{group.recommendedFabric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              School Fabric Care Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important tips for maintaining quality and appearance of school uniforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {careInstructions.map((instruction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{instruction.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {instruction.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {instruction.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold ml-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quality Standards in Saudi Arabia
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to the highest quality standards suitable for the Saudi environment
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {saudiStandards.map((standard, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{standard.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get the Best School Uniform Fabrics
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact our experts for free consultation and choose the best fabrics 
            that suit your school's needs and student requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ar/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Price Quote
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
            </Link>
            <Link
              href="/ar/shop/education-uniforms"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Browse Educational Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/ar/blog/uniforms-modern-education" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/education/modern-education-uniforms.jpg"
                    alt="School uniforms in modern education"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    School Uniforms in Modern Education
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How school uniforms contribute to improving educational environment and academic performance.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/blog/sustainable-school-uniforms-saudi" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/education/sustainable-school-uniforms.jpg"
                    alt="Sustainable school uniforms in Saudi Arabia"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Sustainable School Uniforms
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The trend towards eco-friendly fabrics in school uniform manufacturing.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/ar/shop/education-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/education/premium-school-uniforms.jpg"
                    alt="Premium school uniforms"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Premium School Uniform Collection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover our distinguished collection of high-quality school uniforms.
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