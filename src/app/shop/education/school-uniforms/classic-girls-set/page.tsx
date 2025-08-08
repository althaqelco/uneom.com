import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  UserIcon,
  SunIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Classic Girls School Uniform Set | Modest & Comfortable Student Attire | UNEOM',
  description: 'Classic school uniform set for girls featuring modest designs, breathable fabrics, and cultural appropriateness. Perfect for Saudi schools with comfortable, durable materials.',
  keywords: 'girls school uniform Saudi Arabia, modest student attire, classic school uniform girls, educational uniforms modest, student clothing KSA, Islamic school uniforms',
  openGraph: {
    title: 'Classic Girls School Uniform Set | Modest & Comfortable Student Attire | UNEOM',
    description: 'Classic school uniform set for girls featuring modest designs, breathable fabrics, and cultural appropriateness. Perfect for Saudi schools.',
    images: ['/images/products/education/classic-girls-school-set.jpg']}}

const productFeatures = [
  {
    icon: UserIcon,
    title: 'Modest Design',
    description: 'Culturally appropriate designs that meet Islamic modesty requirements while maintaining style and comfort.'
  },
  {
    icon: SunIcon,
    title: 'Breathable Fabrics',
    description: 'Lightweight, breathable materials perfect for the Saudi climate, ensuring comfort throughout the school day.'
  },
  {
    icon: SparklesIcon,
    title: 'Color-Fast Materials',
    description: 'High-quality dyes and fabrics that maintain their vibrant colors wash after wash.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durable Construction',
    description: 'Reinforced seams and quality stitching ensure long-lasting wear for active students.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '70% Cotton, 30% Polyester blend' },
  { label: 'Weight', value: '160 GSM' },
  { label: 'Colors Available', value: 'Navy Blue, Burgundy, Forest Green, White' },
  { label: 'Sizes', value: 'Age 6-18 years (Size 26-44)' },
  { label: 'Care Instructions', value: 'Machine wash warm, line dry recommended' },
  { label: 'Modesty Features', value: 'Long sleeves, appropriate length, loose fit' }
]

const includedItems = [
  'Long-sleeve modest blouse with school collar',
  'Full-length skirt with comfortable waistband',
  'Matching hijab with school colors (optional)',
  'School cardigan for layering',
  'Care instruction card',
  'Size adjustment guide'
]

const relatedProducts = [
  {
    name: 'Premium Boys School Set',
    image: '/images/products/education/premium-boys-school-set.jpg',
    href: '/shop/education/school-uniforms/premium-boys-set/',
    price: 'From SAR 220'
  },
  {
    name: 'Sports Uniform Set',
    image: '/images/products/education/sports-uniform-set.jpg',
    href: '/shop/education/school-uniforms/sports-set/',
    price: 'From SAR 120'
  },
  {
    name: 'Faculty Professional Blazer',
    image: '/images/products/education/faculty-professional-blazer.jpg',
    href: '/shop/education/university-attire/faculty-blazer/',
    price: 'From SAR 350'
  }
]

export default function ClassicGirlsSchoolSetPage() {
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
            <span className="text-gray-900">Classic Girls Set</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/products/education/classic-girls-school-set.jpg"
                  alt="Classic Girls School Uniform Set"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-1.jpg"
                    alt="Blouse detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-2.jpg"
                    alt="Skirt detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-3.jpg"
                    alt="Cardigan detail"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/education/girls-set-detail-4.jpg"
                    alt="Full set"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(89 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Classic Girls School Uniform Set
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                Elegant and modest school uniform set designed specifically for female students. 
                Features culturally appropriate designs with breathable fabrics perfect for the Saudi climate.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 180</span>
                <span className="text-lg text-gray-500 ml-2">per set</span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['26', '28', '30', '32', '34', '36', '38', '40', '42', '44'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 rounded-lg py-2 px-3 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Color</h3>
                <div className="flex space-x-3">
                  <button className="w-8 h-8 rounded-full bg-blue-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-red-900 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-green-800 border-2 border-gray-300 hover:border-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-blue-500"></button>
                </div>
              </div>

              {/* Hijab Option */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hijab Option</h3>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="hijab" className="mr-2" />
                    <span>Include matching hijab</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="hijab" className="mr-2" defaultChecked />
                    <span>Without hijab</span>
                  </label>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">-</button>
                  <span className="text-lg font-semibold">1</span>
                  <button className="border border-gray-300 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-gray-50">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1">
                  Add to Quote
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex-1">
                  <HeartIcon className="h-5 w-5 inline mr-2" />
                  Save for Later
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Modest design certified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Climate-appropriate fabric</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Cultural compliance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Bulk discounts available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Classic Girls School Set
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{spec.label}</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Compliance Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Culturally Appropriate Design
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our classic girls school uniforms are designed with deep respect for Islamic values and Saudi cultural norms, 
              ensuring modesty without compromising on style or comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modest Coverage</h3>
              <p className="text-gray-600">
                Full coverage design with appropriate sleeve length and skirt length that meets Islamic modesty requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SunIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Climate Suitable</h3>
              <p className="text-gray-600">
                Breathable cotton-blend fabrics that provide comfort in the Saudi climate while maintaining modesty.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                High-quality fabrics and construction that maintain their appearance and modesty through regular wear and washing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Related Educational Uniforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    View Details
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order Classic School Uniforms?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our education specialists for bulk pricing and customization options. 
            We ensure all uniforms meet cultural and educational requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Get Bulk Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}