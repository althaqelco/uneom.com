import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Premium Boys School Uniform Set | High-Quality Student Attire | UNEOM',
  description: 'Premium school uniform sets for boys featuring high-quality fabrics, durable construction, and comfortable fit. Complete uniform solutions for Saudi Arabian schools with modern designs and traditional values.',
  keywords: 'premium boys school uniform, student uniform set Saudi Arabia, boys school attire, quality school clothing, educational uniforms',
  openGraph: {
    title: 'Premium Boys School Uniform Set | High-Quality Student Attire | UNEOM',
    description: 'Premium quality school uniform sets designed specifically for boys, combining comfort, durability, and style.',
    images: ['/images/education/premium-boys-uniform.jpg']}}

const uniformFeatures = [
  {
    icon: SparklesIcon,
    title: 'Premium Quality Fabrics',
    description: 'High-grade cotton blends that are soft, breathable, and maintain their appearance after multiple washes.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'Reinforced seams and quality stitching designed to withstand active school life and frequent washing.'
  },
  {
    icon: AcademicCapIcon,
    title: 'School-Ready Design',
    description: 'Professional appearance that meets school dress codes while allowing comfortable movement for learning activities.'
  },
  {
    icon: StarIcon,
    title: 'Growth-Friendly Fit',
    description: 'Thoughtful sizing and adjustable features to accommodate growing students throughout the school year.'
  }
]

const setIncludes = [
  {
    item: 'Dress Shirt',
    description: 'Premium cotton blend shirt with proper collar and button closure',
    features: ['Wrinkle-resistant fabric', 'Easy-care material', 'Comfortable fit', 'School logo placement']
  },
  {
    item: 'Formal Trousers',
    description: 'Well-tailored trousers with proper fit and professional appearance',
    features: ['Adjustable waist', 'Reinforced knees', 'Pocket design', 'Hem adjustability']
  },
  {
    item: 'School Tie',
    description: 'Coordinated tie with school colors and pattern',
    features: ['Pre-tied option available', 'Durable fabric', 'Easy maintenance', 'Proper length']
  },
  {
    item: 'Optional Blazer',
    description: 'Matching blazer for formal occasions and cooler weather',
    features: ['School crest embroidery', 'Quality lining', 'Proper fit', 'Seasonal wear']
  }
]

const sizeGuide = [
  { age: '6-7 years', chest: '66-71 cm', waist: '58-61 cm', height: '116-122 cm' },
  { age: '8-9 years', chest: '71-76 cm', waist: '61-64 cm', height: '122-128 cm' },
  { age: '10-11 years', chest: '76-81 cm', waist: '64-67 cm', height: '128-134 cm' },
  { age: '12-13 years', chest: '81-86 cm', waist: '67-70 cm', height: '134-140 cm' },
  { age: '14-15 years', chest: '86-91 cm', waist: '70-73 cm', height: '140-146 cm' },
  { age: '16-17 years', chest: '91-96 cm', waist: '73-76 cm', height: '146-152 cm' }
]

export default function PremiumBoysSetPage() {
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
            <Link href="/shop/education/" className="hover:text-blue-600">Education</Link>
            <span>/</span>
            <Link href="/shop/education/school-uniforms/" className="hover:text-blue-600">School Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Premium Boys Set</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/education/premium-boys-uniform.jpg"
            alt="Premium boys school uniform background"
            fill
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
            Premium Boys School Uniform Set
          </h1>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            High-quality school uniform sets designed for boys, combining premium materials, durable construction, and comfortable fit for the modern student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=premium-boys-uniform"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/contact/?subject=Premium Boys Uniform Inquiry"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Excellence in School Uniform Design
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our premium boys school uniform sets are crafted with attention to detail and quality that parents and schools trust. Each set is designed to provide comfort, durability, and a professional appearance that supports the learning environment while allowing boys to move freely and confidently throughout their school day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Materials</h3>
                    <p className="text-gray-600">High-quality cotton blends for comfort and durability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Appearance</h3>
                    <p className="text-gray-600">Smart, well-tailored design that meets school standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Care</h3>
                    <p className="text-gray-600">Machine washable with wrinkle-resistant properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/education/premium-boys-uniform.jpg"
                alt="Premium boys school uniform details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Uniform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every aspect designed to provide the best school uniform experience for boys.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniformFeatures.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Set Includes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Uniform Set Includes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything needed for a complete, professional school uniform appearance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {setIncludes.map((item) => (
              <div key={item.item} className="bg-white border rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.item}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Size Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect fit for your student with our comprehensive size guide.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Age Range</th>
                  <th className="px-6 py-3 text-left">Chest (cm)</th>
                  <th className="px-6 py-3 text-left">Waist (cm)</th>
                  <th className="px-6 py-3 text-left">Height (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((size, index) => (
                  <tr key={size.age} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold">{size.age}</td>
                    <td className="px-6 py-4">{size.chest}</td>
                    <td className="px-6 py-4">{size.waist}</td>
                    <td className="px-6 py-4">{size.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invest in Quality Education Uniforms
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact our education uniform specialists to discuss your school's needs and receive a customized quote for premium boys uniform sets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/?category=premium-boys-uniform"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get School Quote
            </Link>
            <Link
              href="/shop/education/school-uniforms/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View All School Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}