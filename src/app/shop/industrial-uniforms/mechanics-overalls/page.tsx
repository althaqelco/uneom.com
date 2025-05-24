import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaTools, 
  FaCog, 
  FaIndustry, 
  FaCheckCircle, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';
import { 
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  FireIcon,
  EyeIcon,
  HandRaisedIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Premium Mechanics Overalls - Industrial Workwear | UNEOM Saudi Arabia',
  description: 'Professional mechanics overalls and industrial coveralls designed for Saudi Arabian workshops and factories. Durable, comfortable, and safety-compliant workwear solutions from UNEOM.',
  keywords: [
    'mechanics overalls Saudi Arabia',
    'industrial coveralls',
    'workshop uniforms',
    'safety workwear',
    'UNEOM mechanics clothing',
    'professional overalls',
    'factory uniforms',
    'automotive workwear',
    'دبل ميكانيكي',
    'ملابس عمل صناعية'
  ],
  openGraph: {
    title: 'Premium Mechanics Overalls - Industrial Workwear | UNEOM',
    description: 'Professional mechanics overalls designed for Saudi Arabian workshops. Durable, comfortable, and safety-compliant.',
    url: 'https://uneom.com/shop/industrial-uniforms/mechanics-overalls/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/mechanic-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Mechanics Overalls - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/mechanics-overalls/',
    languages: {
      'ar-SA': 'https://uneom.com/ar/shop/industrial-uniforms/mechanics-overalls/',
      'en-US': 'https://uneom.com/shop/industrial-uniforms/mechanics-overalls/'
    }
  }
};

// Structured Data for Product
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Mechanics Overalls",
  "description": "Professional mechanics overalls designed for Saudi Arabian workshops and industrial facilities. Features durable construction, multiple pockets, and safety compliance.",
  "brand": {
    "@type": "Brand",
    "name": "UNEOM"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "United Uniform Manufacturing Company",
    "url": "https://uneom.com"
  },
  "image": [
    "https://uneom.com/images/products/industrial/mechanic-1.jpg",
    "https://uneom.com/images/products/industrial/mechanic-2.jpg",
    "https://uneom.com/images/products/industrial-coverall.jpg"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "SAR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "UNEOM"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "category": "Industrial Workwear",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Material",
      "value": "Heavy-duty cotton blend"
    },
    {
      "@type": "PropertyValue", 
      "name": "Safety Standards",
      "value": "SASO compliant"
    },
    {
      "@type": "PropertyValue",
      "name": "Origin",
      "value": "Made in Saudi Arabia"
    }
  ]
};

export default function MechanicsOverallsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/shop/" className="text-gray-500 hover:text-gray-700">
                    Shop
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/shop/industrial-uniforms/" className="text-gray-500 hover:text-gray-700">
                    Industrial Uniforms
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <span className="text-gray-900 font-medium">Mechanics Overalls</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <FaTools className="h-6 w-6 text-blue-400" />
                  <span className="text-blue-400 font-semibold">Professional Workwear</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Premium Mechanics Overalls
                  <span className="block text-blue-400">Built for Saudi Workshops</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Engineered for the demanding conditions of Saudi Arabian industrial environments. 
                  Our mechanics overalls combine durability, comfort, and safety compliance to keep 
                  your workforce protected and productive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <FaPhone className="h-5 w-5" />
                    <span>Request Quote</span>
                  </button>
                  <Link 
                    href="/contact/"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                  >
                    Contact Sales Team
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/products/industrial/mechanic-1.jpg"
                  alt="Premium Mechanics Overalls - UNEOM Saudi Arabia"
                  width={600}
                  height={700}
                  className="rounded-xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <FaStar className="h-5 w-5 text-yellow-400" />
                    <span className="font-bold">4.8/5</span>
                  </div>
                  <p className="text-sm">127+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose UNEOM Mechanics Overalls?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed specifically for the harsh conditions of Saudi Arabian workshops, 
                our overalls meet international safety standards while ensuring maximum comfort.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Compliant</h3>
                <p className="text-gray-600">
                  Meets SASO safety standards and international workplace safety requirements. 
                  Flame-resistant options available for high-risk environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Design</h3>
                <p className="text-gray-600">
                  Multiple reinforced pockets, tool loops, and knee pad inserts. 
                  Designed by mechanics for mechanics working in Saudi conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FireIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Heat Resistant</h3>
                <p className="text-gray-600">
                  Special fabric treatment for extreme heat resistance, perfect for 
                  Saudi Arabia's challenging climate and hot workshop environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <EyeIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">High Visibility</h3>
                <p className="text-gray-600">
                  Reflective strips and high-visibility color options ensure worker 
                  safety in low-light industrial environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <HandRaisedIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comfort Fit</h3>
                <p className="text-gray-600">
                  Ergonomic design with reinforced stress points and breathable fabric 
                  for all-day comfort during intensive mechanical work.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TruckIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick turnaround times across Saudi Arabia with bulk order capabilities 
                  for large industrial facilities and workshops.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Gallery
              </h2>
              <p className="text-xl text-gray-600">
                See our mechanics overalls in action across Saudi Arabian workshops
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/products/industrial/mechanic-2.jpg"
                  alt="Mechanics Overall - Side View"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Side View Details</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/products/industrial-coverall.jpg"
                  alt="Industrial Coverall Full Body"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Full Body Coverage</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="/images/new-products/heavy_duty_industrial_coverall.png"
                  alt="Heavy Duty Industrial Coverall"
                  width={400}
                  height={500}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Heavy Duty Option</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Technical Specifications
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Material Composition</h3>
                      <p className="text-gray-600">65% Cotton, 35% Polyester blend for optimal durability and comfort</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Weight & Thickness</h3>
                      <p className="text-gray-600">280 GSM fabric weight, 0.8mm thickness for industrial protection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Size Range</h3>
                      <p className="text-gray-600">Available in sizes S to 5XL, custom sizing available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Color Options</h3>
                      <p className="text-gray-600">Navy Blue, Gray, Khaki, High-Vis Orange, Custom colors available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaCheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Care Instructions</h3>
                      <p className="text-gray-600">Machine washable up to 60°C, industrial laundry compatible</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Image
                  src="/images/case-studies/dammam-industrial.jpg"
                  alt="UNEOM Mechanics Overalls in Saudi Workshop"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <div className="mt-6 bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-3">Saudi Arabia Compliance</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="h-4 w-4 text-blue-600" />
                      <span>SASO certified for workplace safety</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Ministry of Labor approved</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaCheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Vision 2030 manufacturing standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Equip Your Workshop?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of Saudi Arabian businesses who trust UNEOM for their industrial workwear needs. 
              Get a custom quote for your mechanics overalls today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <FaPhone className="h-5 w-5" />
                <span>Call +966 13 123 4567</span>
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <FaWhatsapp className="h-5 w-5" />
                <span>WhatsApp Quote</span>
              </button>
              <Link 
                href="/contact/"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <FaEnvelope className="h-5 w-5" />
                <span>Email Us</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Industrial Products
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/shop/industrial-uniforms/" className="group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow">
                  <FaIndustry className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial Uniforms</h3>
                  <p className="text-gray-600">Complete range of industrial workwear solutions</p>
                </div>
              </Link>
              
              <Link href="/shop/industrial-uniforms/safety-vests/" className="group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow">
                  <FaShieldAlt className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Vests</h3>
                  <p className="text-gray-600">High-visibility safety vests for industrial sites</p>
                </div>
              </Link>
              
              <Link href="/shop/industrial-uniforms/work-boots/" className="group">
                <div className="bg-gray-50 rounded-xl p-6 group-hover:shadow-lg transition-shadow">
                  <FaCog className="h-12 w-12 text-gray-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Boots</h3>
                  <p className="text-gray-600">Steel-toe boots and safety footwear</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}