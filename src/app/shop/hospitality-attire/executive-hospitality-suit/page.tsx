import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon,
  SparklesIcon,
  TruckIcon,
  HeartIcon,
  UserGroupIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Executive Hospitality Suit | Premium Hotel Management Uniforms | UNEOM',
  description: 'Discover our executive hospitality suit collection designed for hotel managers and senior staff. Premium fabrics, professional styling, and Saudi Arabian hospitality standards.',
  keywords: 'executive hospitality suit, hotel manager uniform, premium hospitality attire, luxury hotel uniforms, executive hotel wear, Saudi hospitality uniforms',
  openGraph: {
    title: 'Executive Hospitality Suit | Premium Hotel Management Uniforms',
    description: 'Premium executive suits for hospitality industry leaders',
    images: ['/images/products/hospitality/executive-hospitality-suit.jpg'],
  },
}

const productFeatures = [
  {
    icon: SparklesIcon,
    title: 'Premium Fabric Blend',
    description: 'Luxurious wool-polyester blend for comfort and durability'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Stain Resistant',
    description: 'Advanced fabric treatment for easy maintenance'
  },
  {
    icon: CogIcon,
    title: 'Custom Tailoring',
    description: 'Perfect fit with professional tailoring services'
  },
  {
    icon: UserGroupIcon,
    title: 'Brand Integration',
    description: 'Customizable with hotel logos and branding'
  }
]

const suitOptions = [
  {
    id: 'classic-navy',
    name: 'Classic Navy Executive',
    price: 1899,
    originalPrice: 2299,
    image: '/images/products/hospitality/executive-suit-navy.jpg',
    features: [
      'Navy blue premium wool blend',
      'Classic lapel design',
      'Two-button closure',
      'Side vents',
      'Custom embroidery included'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy Blue', 'Charcoal Gray']
  },
  {
    id: 'charcoal-modern',
    name: 'Modern Charcoal Executive',
    price: 1999,
    originalPrice: 2399,
    image: '/images/products/hospitality/executive-suit-charcoal.jpg',
    features: [
      'Charcoal gray premium blend',
      'Modern slim fit',
      'Three-button closure',
      'Functional pockets',
      'Moisture-wicking lining'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Charcoal Gray', 'Deep Black']
  },
  {
    id: 'luxury-black',
    name: 'Luxury Black Executive',
    price: 2199,
    originalPrice: 2599,
    image: '/images/products/hospitality/executive-suit-black.jpg',
    features: [
      'Premium black wool blend',
      'Executive cut design',
      'Peak lapel styling',
      'Silk-lined interior',
      'Gold-tone buttons'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Deep Black', 'Midnight Blue']
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '65% Wool, 35% Polyester' },
  { label: 'Weight', value: '280 GSM' },
  { label: 'Care Instructions', value: 'Dry clean only' },
  { label: 'Customization', value: 'Logo embroidery available' },
  { label: 'Delivery Time', value: '7-10 business days' },
  { label: 'Warranty', value: '1 year manufacturing defects' }
]

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    position: 'General Manager, Riyadh Grand Hotel',
    content: 'The executive suits from UNEOM have elevated our management team\'s professional appearance. The quality and fit are exceptional.',
    rating: 5
  },
  {
    name: 'Sarah Al-Mahmoud',
    position: 'Hotel Operations Director, Jeddah Resort',
    content: 'Perfect blend of comfort and elegance. Our guests frequently compliment our staff\'s professional appearance.',
    rating: 5
  }
]

export default function ExecutiveHospitalitySuitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-blue-900/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Executive Hospitality
                <span className="text-blue-600 block">Suit Collection</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Elevate your hospitality management team with our premium executive suits. 
                Designed for hotel managers, directors, and senior staff who represent 
                the pinnacle of Saudi Arabian hospitality excellence.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Premium Wool Blend</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Custom Tailoring</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Brand Integration</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#products"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Collection
                </Link>
                <Link 
                  href="/quote"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/hospitality/executive-hospitality-suit.jpg"
                  alt="Executive Hospitality Suit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Premium</div>
                <div className="text-sm">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every detail crafted for hospitality industry leaders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Suit Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of executive hospitality suits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {suitOptions.map((suit) => (
              <div key={suit.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={suit.image}
                    alt={suit.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    Save {Math.round(((suit.originalPrice - suit.price) / suit.originalPrice) * 100)}%
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {suit.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {suit.price.toLocaleString()} SAR
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {suit.originalPrice.toLocaleString()} SAR
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {suit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Available Sizes:</p>
                      <div className="flex flex-wrap gap-2">
                        {suit.sizes.map((size) => (
                          <span key={size} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Available Colors:</p>
                      <div className="flex flex-wrap gap-2">
                        {suit.colors.map((color) => (
                          <span key={color} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Add to Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Specifications
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{spec.label}:</span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from hospitality leaders who trust UNEOM for their executive attire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Hospitality Team
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Transform your management team's professional image with our executive hospitality suits. 
            Contact us for bulk orders and custom branding options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Custom Quote
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Products
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/shop/hospitality-attire/concierge-uniform" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/hospitality/concierge-uniform.jpg"
                    alt="Concierge Uniform Set"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Concierge Uniform Set
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional concierge uniforms for front desk excellence.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/hospitality-attire/chef-uniform" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/hospitality/chef-uniform.jpg"
                    alt="Premium Chef Uniform"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Premium Chef Uniform
                  </h3>
                  <p className="text-gray-600 text-sm">
                    High-quality chef uniforms for culinary professionals.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/corporate/executive-suits" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/corporate/executive-suits.jpg"
                    alt="Corporate Executive Suits"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Corporate Executive Suits
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Premium business suits for corporate executives.
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