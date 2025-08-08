import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import AddToQuoteButton from '@/components/shop/AddToQuoteButton'
import RelatedProducts from '@/components/shop/RelatedProducts'
import ColorSwatches from '@/components/shop/ColorSwatches'
import SizeSelector from '@/components/shop/SizeSelector'
import FeaturesGrid from '@/components/shop/FeaturesGrid'

export const metadata: Metadata = {
  title: 'University Attire Collection | Premium Academic Uniforms | UNEOM',
  description: 'Discover our premium university attire collection featuring faculty blazers, graduation gowns, and staff uniforms. Professional academic wear designed for Saudi universities and educational institutions.',
  keywords: 'university attire, academic uniforms, faculty blazers, graduation gowns, university staff uniforms, educational institution wear, premium academic clothing',
  openGraph: {
    title: 'University Attire Collection | Premium Academic Uniforms | UNEOM',
    description: 'Premium university attire for faculty, staff, and graduates. Professional academic wear for Saudi educational institutions.',
    images: ['/images/products/university-attire-collection.jpg']}}

const universityProducts = [
  {
    id: 'faculty-blazer',
    name: 'Faculty Professional Blazer',
    price: 'SAR 450',
    image: '/images/products/faculty-blazer.jpg',
    rating: 4.9,
    reviews: 127,
    description: 'Premium tailored blazer for university faculty members',
    features: ['Wool blend fabric', 'Custom embroidery', 'Professional fit', 'Wrinkle resistant']
  },
  {
    id: 'graduation-gown',
    name: 'Graduation Ceremony Gown',
    price: 'SAR 320',
    image: '/images/products/graduation-gown.jpg',
    rating: 4.8,
    reviews: 89,
    description: 'Traditional academic gown for graduation ceremonies',
    features: ['Polyester fabric', 'Traditional design', 'Multiple sizes', 'Ceremonial quality']
  },
  {
    id: 'staff-uniform',
    name: 'University Staff Uniform',
    price: 'SAR 280',
    image: '/images/products/university-staff-uniform.jpg',
    rating: 4.7,
    reviews: 156,
    description: 'Professional uniform for university administrative staff',
    features: ['Comfortable fabric', 'Modern design', 'Easy care', 'Durable construction']
  }
]

const colors = [
  { name: 'Navy Blue', value: '#1e3a8a', available: true },
  { name: 'Charcoal Gray', value: '#374151', available: true },
  { name: 'Burgundy', value: '#7c2d12', available: true },
  { name: 'Forest Green', value: '#166534', available: false }
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']

const features = [
  {
    icon: AcademicCapIcon,
    title: 'Academic Excellence',
    description: 'Designed specifically for university environments with attention to academic traditions'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Assurance',
    description: 'Premium materials and construction ensuring long-lasting professional appearance'
  },
  {
    icon: SparklesIcon,
    title: 'Custom Embroidery',
    description: 'University logos and departmental insignia professionally embroidered'
  },
  {
    icon: CheckCircleIcon,
    title: 'Comfort Fit',
    description: 'Ergonomically designed for all-day comfort during lectures and ceremonies'
  }
]

export default function UniversityAttirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumbs */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <li>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <Link href="/shop" className="text-gray-500 hover:text-gray-700">Shop</Link>
              </li>
              <li>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <Link href="/shop/education-uniforms" className="text-gray-500 hover:text-gray-700">Education Uniforms</Link>
              </li>
              <li>
                <ArrowRightIcon className="h-4 w-4 text-gray-400" />
              </li>
              <li>
                <span className="text-gray-900 font-medium">University Attire</span>
              </li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 mb-12 text-white">
            <div className="max-w-4xl">
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-12 w-12 text-blue-300 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">University Attire Collection</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Premium academic wear designed for Saudi universities and educational institutions. 
                From faculty blazers to graduation gowns, we provide professional attire that reflects academic excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Faculty Attire</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Graduation Gowns</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium">Staff Uniforms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured University Attire</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universityProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIconSolid
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <AddToQuoteButton 
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Customization Options</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Available Colors</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className={`w-8 h-8 rounded-full border-2 border-gray-300 ${
                          !color.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-gray-500'
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 mt-8">Size Range</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium hover:border-gray-500 cursor-pointer"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Custom Embroidery</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">University Logo</h4>
                      <p className="text-gray-600 text-sm">Official university crest and name embroidered on chest or sleeve</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Department Insignia</h4>
                      <p className="text-gray-600 text-sm">Faculty or department specific badges and symbols</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Individual Names</h4>
                      <p className="text-gray-600 text-sm">Personalized name embroidery for faculty and staff</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Why Choose Our University Attire</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* University Partnerships */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Trusted by Leading Universities</h2>
              <p className="text-lg text-gray-700 mb-8">
                We proudly serve prestigious educational institutions across Saudi Arabia, 
                providing high-quality academic attire that meets the highest standards of excellence.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">50+ Universities</h3>
                  <p className="text-gray-600">Serving educational institutions nationwide</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <StarIcon className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">15+ Years</h3>
                  <p className="text-gray-600">Experience in academic uniform design</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
                  <p className="text-gray-600">Guaranteed quality and service</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your University's Image?</h2>
              <p className="text-xl mb-8 text-primary-100">
                Contact our academic uniform specialists for a personalized consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Custom Quote
                </Link>
                <Link 
                  href="/resources/size-guide" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Size Guide
                </Link>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">School Staff Uniforms</h3>
                  <p className="text-gray-600 text-sm mb-4">Professional attire for school administrative staff</p>
                  <Link href="/shop/education-uniforms/school-staff-uniforms" className="text-primary-600 hover:text-primary-700 font-medium">
                    View Details →
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Premium School Uniforms</h3>
                  <p className="text-gray-600 text-sm mb-4">High-quality student uniforms for all grade levels</p>
                  <Link href="/shop/education-uniforms/premium-school-uniform" className="text-primary-600 hover:text-primary-700 font-medium">
                    View Details →
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Faculty Professional Attire</h3>
                  <p className="text-gray-600 text-sm mb-4">Elegant professional wear for faculty members</p>
                  <Link href="/shop/education-uniforms/faculty-professional-attire" className="text-primary-600 hover:text-primary-700 font-medium">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}