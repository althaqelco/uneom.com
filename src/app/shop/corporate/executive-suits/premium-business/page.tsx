import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  StarIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  CogIcon,
  BuildingOfficeIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Premium Business Executive Suits | Corporate Attire | UNEOM',
  description: 'Discover our premium business executive suit collection. Luxury corporate attire for executives and senior management in Saudi Arabia. Custom tailoring available.',
  keywords: 'premium business suits, executive suits, corporate attire, luxury business wear, executive clothing, Saudi business suits, custom tailoring',
  openGraph: {
    title: 'Premium Business Executive Suits | Corporate Attire',
    description: 'Luxury executive suits for business leaders',
    images: ['/images/products/corporate/premium-business-suits.jpg'],
  },
}

const productFeatures = [
  {
    icon: SparklesIcon,
    title: 'Luxury Fabrics',
    description: 'Premium wool and silk blends for superior comfort'
  },
  {
    icon: CogIcon,
    title: 'Custom Tailoring',
    description: 'Perfect fit with professional tailoring services'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Wrinkle Resistant',
    description: 'Advanced fabric treatment for lasting appearance'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Executive Styling',
    description: 'Sophisticated designs for business leaders'
  }
]

const executiveSuits = [
  {
    id: 'charcoal-executive',
    name: 'Charcoal Executive Premium',
    price: 2899,
    originalPrice: 3499,
    image: '/images/products/corporate/charcoal-executive-suit.jpg',
    features: [
      'Premium charcoal wool blend',
      'Executive cut design',
      'Silk-lined interior',
      'Custom monogramming',
      'Professional tailoring included'
    ],
    sizes: ['38', '40', '42', '44', '46', '48', '50'],
    colors: ['Charcoal Gray', 'Deep Navy', 'Midnight Black'],
    fabric: 'Super 120s Wool'
  },
  {
    id: 'navy-luxury',
    name: 'Navy Luxury Collection',
    price: 3299,
    originalPrice: 3899,
    image: '/images/products/corporate/navy-luxury-suit.jpg',
    features: [
      'Navy blue luxury wool',
      'Peak lapel styling',
      'Hand-finished details',
      'Premium buttons',
      'Exclusive fabric blend'
    ],
    sizes: ['38', '40', '42', '44', '46', '48', '50'],
    colors: ['Navy Blue', 'Royal Blue', 'Midnight Navy'],
    fabric: 'Super 150s Wool'
  },
  {
    id: 'black-prestige',
    name: 'Black Prestige Series',
    price: 3699,
    originalPrice: 4299,
    image: '/images/products/corporate/black-prestige-suit.jpg',
    features: [
      'Premium black wool blend',
      'Prestige styling',
      'Gold-tone hardware',
      'Luxury packaging',
      'Lifetime alterations'
    ],
    sizes: ['38', '40', '42', '44', '46', '48', '50'],
    colors: ['Deep Black', 'Charcoal Black', 'Jet Black'],
    fabric: 'Super 180s Wool'
  }
]

const accessories = [
  {
    name: 'Silk Ties Collection',
    price: 299,
    image: '/images/products/corporate/silk-ties.jpg',
    description: 'Premium silk ties in coordinating colors'
  },
  {
    name: 'Leather Dress Shoes',
    price: 899,
    image: '/images/products/corporate/dress-shoes.jpg',
    description: 'Italian leather shoes for executive wear'
  },
  {
    name: 'Cufflinks & Accessories',
    price: 399,
    image: '/images/products/corporate/cufflinks.jpg',
    description: 'Gold and silver executive accessories'
  },
  {
    name: 'Dress Shirts',
    price: 449,
    image: '/images/products/corporate/dress-shirts.jpg',
    description: 'Premium cotton dress shirts'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '100% Premium Wool' },
  { label: 'Weight', value: '280-320 GSM' },
  { label: 'Construction', value: 'Half-canvas or Full-canvas' },
  { label: 'Care Instructions', value: 'Dry clean only' },
  { label: 'Customization', value: 'Full tailoring and monogramming' },
  { label: 'Delivery Time', value: '14-21 business days' }
]

const businessBenefits = [
  {
    title: 'Executive Presence',
    description: 'Command respect with premium business attire',
    icon: StarIcon
  },
  {
    title: 'Professional Image',
    description: 'Enhance your corporate brand and reputation',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Comfort & Confidence',
    description: 'Feel confident in perfectly fitted luxury suits',
    icon: HeartIcon
  },
  {
    title: 'Investment Quality',
    description: 'Long-lasting suits that maintain their appearance',
    icon: ShieldCheckIcon
  }
]

const testimonials = [
  {
    name: 'Khalid Al-Mansouri',
    position: 'CEO, Riyadh Financial Group',
    content: 'The quality and craftsmanship of these suits are exceptional. They\'ve become an essential part of my executive wardrobe.',
    rating: 5
  },
  {
    name: 'Ahmed Al-Rashid',
    position: 'Managing Director, Jeddah Holdings',
    content: 'Perfect fit and premium quality. The custom tailoring service is outstanding and the suits always look impeccable.',
    rating: 5
  }
]

const sizingGuide = [
  { size: '38', chest: '38"', waist: '32"', jacket: 'Regular' },
  { size: '40', chest: '40"', waist: '34"', jacket: 'Regular' },
  { size: '42', chest: '42"', waist: '36"', jacket: 'Regular' },
  { size: '44', chest: '44"', waist: '38"', jacket: 'Regular' },
  { size: '46', chest: '46"', waist: '40"', jacket: 'Regular' },
  { size: '48', chest: '48"', waist: '42"', jacket: 'Regular' },
  { size: '50', chest: '50"', waist: '44"', jacket: 'Regular' }
]

export default function PremiumBusinessSuitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-blue-900/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Premium Business
                <span className="text-blue-600 block">Executive Suits</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Elevate your executive presence with our premium business suit collection. 
                Crafted from the finest fabrics with meticulous attention to detail, 
                these suits are designed for Saudi Arabia's business leaders.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Premium Wool</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Custom Tailoring</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Executive Styling</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#suits"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Collection
                </Link>
                <Link 
                  href="/quote"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Custom Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/corporate/premium-business-suits.jpg"
                  alt="Premium Business Executive Suits"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Executive</div>
                <div className="text-sm">Premium</div>
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
              Premium Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every detail crafted for executive excellence.
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

      {/* Executive Suits Section */}
      <section id="suits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Suit Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium suits for business leaders and executives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {executiveSuits.map((suit) => (
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
                  <div className="absolute top-4 left-4 bg-gold-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {suit.fabric}
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
                    Schedule Fitting
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why premium business suits matter for executives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
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
              Executive Accessories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your executive look with premium accessories.
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
                <div className="text-xl font-bold text-blue-600 mb-4">
                  {accessory.price} SAR
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">
                  Add to Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Executive Sizing Guide
              </h2>
              <p className="text-gray-600">
                Find your perfect executive fit with our detailed sizing chart.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Size</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Chest</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Waist</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Jacket Length</th>
                  </tr>
                </thead>
                <tbody>
                  {sizingGuide.map((size, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">{size.size}</td>
                      <td className="py-3 px-4 text-gray-600">{size.chest}</td>
                      <td className="py-3 px-4 text-gray-600">{size.waist}</td>
                      <td className="py-3 px-4 text-gray-600">{size.jacket}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Product Specifications
              </h2>
            </div>
            
            <div className="bg-white rounded-xl p-8">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Executive Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from business leaders who trust UNEOM for their executive attire.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-6">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Elevate Your Executive Presence
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Transform your professional image with premium business suits that command 
            respect and confidence. Schedule a consultation with our expert tailors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Schedule Consultation
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Executive Team
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
            <Link href="/shop/corporate/executive-suits/classic" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/corporate/classic-executive-suits.jpg"
                    alt="Classic Executive Suits"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Classic Executive Suits
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Timeless executive suits for traditional business settings.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/corporate/business-shirts/premium-dress" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/corporate/premium-dress-shirts.jpg"
                    alt="Premium Dress Shirts"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Premium Dress Shirts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    High-quality dress shirts to complement your suits.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/corporate" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                  <BuildingOfficeIcon className="h-16 w-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    All Corporate Attire
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore our complete corporate uniform collection.
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