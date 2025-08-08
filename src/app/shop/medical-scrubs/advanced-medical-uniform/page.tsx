import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  HeartIcon, 
  BeakerIcon,
  SparklesIcon,
  StarIcon,
  CheckCircleIcon,
  TruckIcon,
  PhoneIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Advanced Medical Uniform - High-Quality Medical Scrubs | UNEOM',
  description: 'Advanced medical uniform specially designed for medical professionals, combining comfort, protection, and professional elegance in Saudi Arabia',
  keywords: 'medical uniform, medical scrubs, medical clothing, hospital uniform, nursing scrubs, medical attire, Saudi Arabia',
  openGraph: {
    title: 'Advanced Medical Uniform - High-Quality Medical Scrubs | UNEOM',
    description: 'Advanced medical uniform specially designed for medical professionals, combining comfort, protection, and professional elegance',
    images: ['/images/products/medical/advanced-medical-uniform-en.jpg'],
    locale: 'en_US',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/shop/medical-scrubs/advanced-medical-uniform/',
    languages: {
      'en': 'https://uneom.com/shop/medical-scrubs/advanced-medical-uniform/',
      'ar': 'https://uneom.com/ar/shop/medical-scrubs/advanced-medical-uniform/'}}}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Advanced Medical Uniform',
  description: 'Advanced medical uniform specially designed for medical professionals, combining comfort, protection, and professional elegance',
  image: [
    'https://uneom.com/images/products/medical/advanced-medical-uniform-main.jpg',
    'https://uneom.com/images/products/medical/advanced-medical-uniform-details.jpg',
    'https://uneom.com/images/products/medical/advanced-medical-uniform-colors.jpg'
  ],
  brand: {
    '@type': 'Brand',
    name: 'UNEOM'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com/'
  },
  category: 'Medical Uniforms',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'SAR',
    seller: {
      '@type': 'Organization',
      name: 'UNEOM'
    },
    url: 'https://uneom.com/shop/medical-scrubs/advanced-medical-uniform/'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Dr. Fatima Al-Zahrani'
      },
      reviewBody: 'Excellent and very comfortable medical uniform, high quality and suitable for long work in the hospital'
    }
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Material',
      value: 'Cotton-Polyester blend'
    },
    {
      '@type': 'PropertyValue',
      name: 'Properties',
      value: 'Antibacterial and stain-resistant'
    },
    {
      '@type': 'PropertyValue',
      name: 'Care',
      value: 'Machine washable'
    }
  ]
}

export default function AdvancedMedicalUniform() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/shop/" className="hover:text-blue-600">Shop</Link>
              <span>/</span>
              <Link href="/shop/medical-scrubs/" className="hover:text-blue-600">Medical Scrubs</Link>
              <span>/</span>
              <span className="text-gray-900">Advanced Medical Uniform</span>
            </div>
          </div>
        </nav>

        {/* Product Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/products/medical/advanced-medical-uniform-main.jpg"
                    alt="Advanced Medical Uniform - Main Image"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/medical/advanced-medical-uniform-details.jpg"
                      alt="Medical Uniform Details"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/medical/advanced-medical-uniform-colors.jpg"
                      alt="Medical Uniform Colors"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src="/images/products/medical/advanced-medical-uniform-features.jpg"
                      alt="Medical Uniform Features"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Advanced Medical Uniform
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    High-quality medical uniform specially designed for medical professionals, combining maximum comfort, advanced protection, and professional elegance
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(156 reviews)</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Advanced Medical Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <BeakerIcon className="w-6 h-6 text-blue-500" />
                      <span className="text-blue-800">Antibacterial</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <SparklesIcon className="w-6 h-6 text-green-500" />
                      <span className="text-blue-800">Stain resistant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HeartIcon className="w-6 h-6 text-red-500" />
                      <span className="text-blue-800">All-day comfort</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShieldCheckIcon className="w-6 h-6 text-purple-500" />
                      <span className="text-blue-800">Advanced protection</span>
                    </div>
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                  <div className="grid grid-cols-6 gap-3">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className="border-2 border-gray-300 rounded-lg py-3 text-center font-semibold hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-blue-500 rounded-full border-4 border-blue-200"></button>
                    <button className="w-12 h-12 bg-green-500 rounded-full border-4 border-transparent hover:border-green-300"></button>
                    <button className="w-12 h-12 bg-purple-500 rounded-full border-4 border-transparent hover:border-purple-300"></button>
                    <button className="w-12 h-12 bg-pink-500 rounded-full border-4 border-transparent hover:border-pink-300"></button>
                    <button className="w-12 h-12 bg-gray-600 rounded-full border-4 border-transparent hover:border-gray-300"></button>
                    <button className="w-12 h-12 bg-white rounded-full border-4 border-transparent hover:border-gray-300 shadow-md"></button>
                  </div>
                </div>

                {/* Set Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Set Options</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="set" className="w-4 h-4 text-blue-600" defaultChecked />
                      <div>
                        <span className="font-medium">Top Only</span>
                        <p className="text-sm text-gray-600">Advanced medical top</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="set" className="w-4 h-4 text-blue-600" />
                      <div>
                        <span className="font-medium">Pants Only</span>
                        <p className="text-sm text-gray-600">Comfortable medical pants</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name="set" className="w-4 h-4 text-blue-600" />
                      <div>
                        <span className="font-medium">Complete Set</span>
                        <p className="text-sm text-gray-600">Top + Pants (15% discount)</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <PhoneIcon className="w-6 h-6" />
                    Request Hospital Quote
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors">
                    Add to Quote List
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Free Shipping</p>
                    <p className="text-sm text-green-600">On orders over 200 SAR</p>
                  </div>
                </div>

                {/* Medical Certification */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
                  <BeakerIcon className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-800">Medically Certified</p>
                    <p className="text-sm text-blue-600">Compliant with Saudi medical standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Specifications</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Material</span>
                    <span className="text-gray-600">65% Cotton + 35% Polyester</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Weight</span>
                    <span className="text-gray-600">180 GSM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Properties</span>
                    <span className="text-gray-600">Antibacterial</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Stain Resistance</span>
                    <span className="text-gray-600">High</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Care</span>
                    <span className="text-gray-600">Machine washable 60°C</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">Available Colors</span>
                    <span className="text-gray-600">6 colors</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Exceptional Comfort</h4>
                      <p className="text-gray-600">Flexible and breathable fabric provides all-day comfort</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Protection</h4>
                      <p className="text-gray-600">Resistant to bacteria, viruses, and stains</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Practical Design</h4>
                      <p className="text-gray-600">Multiple pockets suitable for medical tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Easy Care</h4>
                      <p className="text-gray-600">Machine washable with quality retention</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Appearance</h4>
                      <p className="text-gray-600">Elegant design reflecting medical professionalism</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">General Hospitals</h4>
                    <p className="text-blue-800 text-sm">Suitable for all medical and surgical departments</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Private Clinics</h4>
                    <p className="text-green-800 text-sm">Ideal for clinics and medical centers</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Medical Laboratories</h4>
                    <p className="text-purple-800 text-sm">Additional protection for laboratory work</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-900 mb-2">Dentistry</h4>
                    <p className="text-pink-800 text-sm">Resistant to chemicals used in dental practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Size Guide</h2>
              <p className="text-xl text-gray-600">Choose the right size for optimal comfort</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Top Sizes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3">Size</th>
                        <th className="text-left py-3">Chest (cm)</th>
                        <th className="text-left py-3">Length (cm)</th>
                        <th className="text-left py-3">Sleeve (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XS</td>
                        <td className="py-3">86-90</td>
                        <td className="py-3">62</td>
                        <td className="py-3">58</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">S</td>
                        <td className="py-3">90-94</td>
                        <td className="py-3">64</td>
                        <td className="py-3">60</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">M</td>
                        <td className="py-3">94-98</td>
                        <td className="py-3">66</td>
                        <td className="py-3">62</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">L</td>
                        <td className="py-3">98-102</td>
                        <td className="py-3">68</td>
                        <td className="py-3">64</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XL</td>
                        <td className="py-3">102-106</td>
                        <td className="py-3">70</td>
                        <td className="py-3">66</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">XXL</td>
                        <td className="py-3">106-110</td>
                        <td className="py-3">72</td>
                        <td className="py-3">68</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Pants Sizes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3">Size</th>
                        <th className="text-left py-3">Waist (cm)</th>
                        <th className="text-left py-3">Hip (cm)</th>
                        <th className="text-left py-3">Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XS</td>
                        <td className="py-3">66-70</td>
                        <td className="py-3">90-94</td>
                        <td className="py-3">100</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">S</td>
                        <td className="py-3">70-74</td>
                        <td className="py-3">94-98</td>
                        <td className="py-3">102</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">M</td>
                        <td className="py-3">74-78</td>
                        <td className="py-3">98-102</td>
                        <td className="py-3">104</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">L</td>
                        <td className="py-3">78-82</td>
                        <td className="py-3">102-106</td>
                        <td className="py-3">106</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 font-medium">XL</td>
                        <td className="py-3">82-86</td>
                        <td className="py-3">106-110</td>
                        <td className="py-3">108</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">XXL</td>
                        <td className="py-3">86-90</td>
                        <td className="py-3">110-114</td>
                        <td className="py-3">110</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Medical Professional Reviews</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent and very comfortable medical uniform, high quality and suitable for long work in the hospital. Highly recommend it."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Dr. Fatima Al-Zahrani</p>
                  <p>Internal Medicine - King Faisal Hospital</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent fabric and stain-resistant, easy to clean and maintains its shape after repeated washing."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Sarah Al-Mutairi</p>
                  <p>Senior Nurse - King Abdulaziz Hospital</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Practical and elegant design, very useful pockets and comfortable fabric even in hot weather."
                </p>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold">Dr. Ahmed Al-Ghamdi</p>
                  <p>Emergency Physician - King Khalid Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Equip Your Medical Team with the Best Uniforms
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get high-quality medical uniforms ensuring comfort, protection, and professional appearance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
              <Link
                href="/quote/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Request Hospital Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}