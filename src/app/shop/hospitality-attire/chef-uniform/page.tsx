import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon,
  FireIcon,
  BeakerIcon,
  SparklesIcon,
  UserGroupIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Chef Uniform Collection | Professional Kitchen Attire | UNEOM',
  description: 'Discover our comprehensive chef uniform collection. Professional kitchen attire including chef jackets, pants, hats, and aprons for restaurants and hotels in Saudi Arabia.',
  keywords: 'chef uniform, kitchen uniform, chef jacket, chef pants, culinary attire, restaurant uniform, professional chef wear, Saudi chef uniforms',
  openGraph: {
    title: 'Chef Uniform Collection | Professional Kitchen Attire',
    description: 'Complete chef uniform solutions for professional kitchens',
    images: ['/images/products/hospitality/chef-uniform-collection.jpg']}}

const productFeatures = [
  {
    icon: FireIcon,
    title: 'Heat Protection',
    description: 'Advanced heat-resistant fabrics for kitchen safety'
  },
  {
    icon: BeakerIcon,
    title: 'Stain Resistant',
    description: 'Easy-clean technology repels oils and stains'
  },
  {
    icon: SparklesIcon,
    title: 'Antimicrobial',
    description: 'Treated fabrics prevent bacteria and odor'
  },
  {
    icon: CogIcon,
    title: 'Comfort Design',
    description: 'Ergonomic fit for long kitchen shifts'
  }
]

const chefUniforms = [
  {
    id: 'traditional-white',
    name: 'Traditional White Chef Set',
    price: 549,
    originalPrice: 699,
    image: '/images/products/hospitality/traditional-chef-uniform.jpg',
    features: [
      'Classic double-breasted jacket',
      'Traditional white color',
      'Matching chef pants',
      'Traditional chef hat',
      'Cotton-polyester blend'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Classic White', 'Off White']
  },
  {
    id: 'modern-black',
    name: 'Modern Black Chef Uniform',
    price: 649,
    originalPrice: 799,
    image: '/images/products/hospitality/modern-chef-uniform.jpg',
    features: [
      'Contemporary black design',
      'Single-breasted style',
      'Moisture-wicking fabric',
      'Modern skull cap',
      'Reinforced stress points'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Chef Black', 'Charcoal Gray', 'Navy Blue']
  },
  {
    id: 'executive-chef',
    name: 'Executive Chef Premium',
    price: 899,
    originalPrice: 1099,
    image: '/images/products/hospitality/executive-chef-set.jpg',
    features: [
      'Premium fabric blend',
      'Executive styling',
      'Custom embroidery options',
      'Professional accessories',
      'Heat-resistant coating'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Executive White', 'Professional Black', 'Chef Gray']
  }
]

const accessories = [
  {
    name: 'Chef Hats & Caps',
    price: 79,
    image: '/images/products/hospitality/chef-hats-collection.jpg',
    description: 'Traditional and modern chef headwear'
  },
  {
    name: 'Kitchen Aprons',
    price: 129,
    image: '/images/products/hospitality/kitchen-aprons-set.jpg',
    description: 'Waterproof and heat-resistant aprons'
  },
  {
    name: 'Chef Neckerchiefs',
    price: 49,
    image: '/images/products/hospitality/chef-neckerchiefs.jpg',
    description: 'Professional neckerchiefs in various colors'
  },
  {
    name: 'Kitchen Gloves',
    price: 89,
    image: '/images/products/hospitality/kitchen-gloves.jpg',
    description: 'Heat-resistant and cut-proof gloves'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '60% Cotton, 40% Polyester' },
  { label: 'Weight', value: '200-240 GSM' },
  { label: 'Heat Resistance', value: 'Up to 160°C' },
  { label: 'Care Instructions', value: 'Machine washable at 60°C' },
  { label: 'Customization', value: 'Embroidery and printing available' },
  { label: 'Delivery Time', value: '3-5 business days' }
]

const kitchenTypes = [
  {
    title: 'Restaurant Kitchens',
    description: 'Professional uniforms for fine dining and casual restaurants',
    icon: UserGroupIcon,
    features: ['Elegant appearance', 'Stain resistance', 'Comfort fit']
  },
  {
    title: 'Hotel Kitchens',
    description: 'Premium uniforms for hotel culinary teams',
    icon: StarIcon,
    features: ['Luxury styling', 'Brand integration', 'Durability']
  },
  {
    title: 'Catering Services',
    description: 'Practical uniforms for mobile catering operations',
    icon: CogIcon,
    features: ['Easy care', 'Mobility', 'Professional look']
  },
  {
    title: 'Culinary Schools',
    description: 'Educational uniforms for culinary training programs',
    icon: BeakerIcon,
    features: ['Student-friendly', 'Cost-effective', 'Easy maintenance']
  }
]

const testimonials = [
  {
    name: 'Chef Abdullah Al-Rashid',
    position: 'Head Chef, Riyadh Fine Dining',
    content: 'These uniforms have transformed our kitchen team\'s professional image. The heat resistance and comfort are outstanding.',
    rating: 5
  },
  {
    name: 'Chef Nora Al-Zahra',
    position: 'Executive Chef, Jeddah Resort',
    content: 'Perfect for our busy kitchen. The stain resistance saves us time and the staff loves the comfortable fit.',
    rating: 5
  }
]

export default function ChefUniformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Chef Uniform
                <span className="text-orange-600 block">Collection</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Equip your culinary team with professional chef uniforms designed for 
                comfort, safety, and style. From traditional white to modern designs, 
                find the perfect uniforms for your kitchen in Saudi Arabia.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Heat Resistant</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Easy Care</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Professional Look</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#uniforms"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Shop Collection
                </Link>
                <Link 
                  href="/quote"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/hospitality/chef-uniform-collection.jpg"
                  alt="Chef Uniform Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Kitchen</div>
                <div className="text-sm">Ready</div>
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
              Professional Kitchen Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every detail designed for the demanding kitchen environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-orange-600" />
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

      {/* Chef Uniforms Section */}
      <section id="uniforms" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chef Uniform Styles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From traditional to modern designs for every kitchen style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {chefUniforms.map((uniform) => (
              <div key={uniform.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={uniform.image}
                    alt={uniform.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    Save {Math.round(((uniform.originalPrice - uniform.price) / uniform.originalPrice) * 100)}%
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {uniform.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-orange-600">
                      {uniform.price.toLocaleString()} SAR
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {uniform.originalPrice.toLocaleString()} SAR
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {uniform.features.map((feature, idx) => (
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
                        {uniform.sizes.map((size) => (
                          <span key={size} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Available Colors:</p>
                      <div className="flex flex-wrap gap-2">
                        {uniform.colors.map((color) => (
                          <span key={color} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                    Add to Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Every Kitchen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our chef uniforms are designed for various culinary environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {kitchenTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {type.description}
                </p>
                <ul className="space-y-1">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chef Accessories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your professional kitchen look with our accessories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {accessories.map((accessory, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {accessory.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {accessory.description}
                </p>
                <div className="text-xl font-bold text-orange-600 mb-4">
                  {accessory.price} SAR
                </div>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300">
                  Add to Quote
                </button>
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
                Technical Specifications
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
              Chef Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from culinary professionals who trust UNEOM for their kitchen uniforms.
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your Kitchen Team
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Transform your kitchen with professional chef uniforms that combine safety, 
            comfort, and style. Contact us for bulk orders and custom branding.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Kitchen Quote
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
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
            <Link href="/shop/hospitality-attire/chef-uniform" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/hospitality/premium-chef-uniform.jpg"
                    alt="Premium Chef Uniform"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    Premium Chef Uniform
                  </h3>
                  <p className="text-gray-600 text-sm">
                    High-end chef uniforms for luxury establishments.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/hospitality-attire/concierge-uniform" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/hospitality/concierge-uniform-set.jpg"
                    alt="Concierge Uniform Set"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    Concierge Uniform Set
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional uniforms for front desk excellence.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/hospitality-attire" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                  <UserGroupIcon className="h-16 w-16 text-orange-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    All Hospitality Uniforms
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore our complete hospitality uniform collection.
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