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
  title: 'Classic Executive Suits | Traditional Business Attire | UNEOM',
  description: 'Discover our classic executive suit collection. Timeless business attire for professionals and executives in Saudi Arabia. Traditional styling with modern comfort.',
  keywords: 'classic executive suits, traditional business suits, professional attire, executive clothing, business wear, Saudi executive suits, classic styling',
  openGraph: {
    title: 'Classic Executive Suits | Traditional Business Attire',
    description: 'Timeless executive suits for professional excellence',
    images: ['/images/products/corporate/classic-executive-suits.jpg'],
  },
}

const productFeatures = [
  {
    icon: SparklesIcon,
    title: 'Timeless Design',
    description: 'Classic styling that never goes out of fashion'
  },
  {
    icon: CogIcon,
    title: 'Professional Fit',
    description: 'Traditional tailoring with modern comfort'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Fabrics',
    description: 'Premium wool blends for durability and comfort'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Business Ready',
    description: 'Perfect for corporate and formal occasions'
  }
]

const classicSuits = [
  {
    id: 'navy-classic',
    name: 'Navy Classic Executive',
    price: 1899,
    originalPrice: 2299,
    image: '/images/products/corporate/navy-classic-suit.jpg',
    features: [
      'Classic navy wool blend',
      'Traditional two-button design',
      'Notched lapel styling',
      'Side vents',
      'Professional tailoring'
    ],
    sizes: ['38', '40', '42', '44', '46', '48', '50'],
    colors: ['Navy Blue', 'Deep Navy', 'Classic Blue'],
    fabric: 'Super 110s Wool'
  },
  {
    id: 'charcoal-traditional',
    name: 'Charcoal Traditional',
    price: 1799,
    originalPrice: 2199,
    image: '/images/products/corporate/charcoal-traditional-suit.jpg',
    features: [
      'Charcoal gray premium fabric',
      'Classic three-button style',
      'Traditional fit',
      'Functional pockets',
      'Timeless design'
    ],
    sizes: ['38', '40', '42', '44', '46', '48', '50'],
    colors: ['Charcoal Gray', 'Medium Gray', 'Light Gray'],
    fabric: 'Super 100s Wool'
  },
  {
    id: 'black-formal',
    name: 'Black Formal Classic',
    price: 1999,
    originalPrice: 2399,
    image: '/images/products/corporate/black-formal-suit.jpg',
    features: [
      'Classic black wool blend',
      'Formal styling',
      'Peak lapel option',
      'Silk-lined interior',
      'Executive buttons'
    ],
    sizes: ['38', '40', '42', '44', '46', '48', '50'],
    colors: ['Classic Black', 'Jet Black', 'Midnight Black'],
    fabric: 'Super 120s Wool'
  }
]

const accessories = [
  {
    name: 'Classic Ties',
    price: 199,
    image: '/images/products/corporate/classic-ties.jpg',
    description: 'Traditional silk ties in classic patterns'
  },
  {
    name: 'Dress Shirts',
    price: 349,
    image: '/images/products/corporate/classic-dress-shirts.jpg',
    description: 'Classic white and blue dress shirts'
  },
  {
    name: 'Leather Belts',
    price: 299,
    image: '/images/products/corporate/leather-belts.jpg',
    description: 'Premium leather belts in black and brown'
  },
  {
    name: 'Pocket Watches',
    price: 599,
    image: '/images/products/corporate/pocket-watches.jpg',
    description: 'Classic pocket watches for formal occasions'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '100% Wool or Wool Blend' },
  { label: 'Weight', value: '260-300 GSM' },
  { label: 'Construction', value: 'Half-canvas construction' },
  { label: 'Care Instructions', value: 'Dry clean recommended' },
  { label: 'Customization', value: 'Basic alterations included' },
  { label: 'Delivery Time', value: '7-14 business days' }
]

const businessOccasions = [
  {
    title: 'Board Meetings',
    description: 'Command respect in important business meetings',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Formal Events',
    description: 'Perfect for corporate galas and formal occasions',
    icon: StarIcon
  },
  {
    title: 'Client Presentations',
    description: 'Make a professional impression with clients',
    icon: UserGroupIcon
  },
  {
    title: 'Daily Business',
    description: 'Comfortable for everyday professional wear',
    icon: HeartIcon
  }
]

const testimonials = [
  {
    name: 'Mohammed Al-Zahrani',
    position: 'Senior Manager, Riyadh Bank',
    content: 'These classic suits are perfect for my daily business needs. The quality is excellent and the fit is very comfortable.',
    rating: 5
  },
  {
    name: 'Faisal Al-Rashid',
    position: 'Director, Jeddah Corporation',
    content: 'I appreciate the timeless design and professional appearance. These suits have become my go-to choice for important meetings.',
    rating: 5
  }
]

const careInstructions = [
  {
    title: 'Dry Cleaning',
    description: 'Professional dry cleaning recommended every 4-6 wears',
    icon: SparklesIcon
  },
  {
    title: 'Proper Storage',
    description: 'Hang on quality hangers to maintain shape',
    icon: CogIcon
  },
  {
    title: 'Rotation',
    description: 'Allow 24 hours rest between wears',
    icon: ShieldCheckIcon
  },
  {
    title: 'Pressing',
    description: 'Professional pressing for best appearance',
    icon: HeartIcon
  }
]

export default function ClassicExecutiveSuitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-slate-900/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Classic Executive
                <span className="text-slate-600 block">Suit Collection</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Embrace timeless elegance with our classic executive suit collection. 
                Traditional styling meets modern comfort, perfect for Saudi Arabia's 
                business professionals who value classic sophistication.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Timeless Design</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Quality Fabrics</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Professional Fit</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#suits"
                  className="bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Collection
                </Link>
                <Link 
                  href="/quote"
                  className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/corporate/classic-executive-suits.jpg"
                  alt="Classic Executive Suits"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Classic</div>
                <div className="text-sm">Timeless</div>
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
              Classic Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Timeless design elements that define classic executive style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-slate-600" />
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

      {/* Classic Suits Section */}
      <section id="suits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Classic Suit Styles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Traditional executive suits for timeless professional style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {classicSuits.map((suit) => (
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
                  <div className="absolute top-4 left-4 bg-slate-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {suit.fabric}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {suit.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-slate-600">
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
                          <span key={color} className="bg-slate-100 text-slate-800 text-xs px-2 py-1 rounded">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-300">
                    Add to Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Occasions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Every Occasion
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Classic suits suitable for all professional settings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {businessOccasions.map((occasion, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <occasion.icon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {occasion.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {occasion.description}
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
              Classic Accessories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your classic look with traditional accessories.
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
                <div className="text-xl font-bold text-slate-600 mb-4">
                  {accessory.price} SAR
                </div>
                <button className="bg-slate-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors duration-300">
                  Add to Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Suit Care Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proper care ensures your classic suits maintain their appearance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {careInstructions.map((instruction, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <instruction.icon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {instruction.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {instruction.description}
                </p>
              </div>
            ))}
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
              Professional Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who choose classic executive suits.
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
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Embrace Timeless Style
          </h2>
          <p className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto">
            Invest in classic executive suits that never go out of style. 
            Perfect for the professional who values traditional elegance and quality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-slate-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Quote
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-600 transition-all duration-300"
            >
              Contact Sales
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
            <Link href="/shop/corporate/executive-suits/premium-business" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/corporate/premium-business-suits.jpg"
                    alt="Premium Business Suits"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">
                    Premium Business Suits
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Luxury executive suits for premium business settings.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/corporate/business-shirts/classic" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/corporate/classic-dress-shirts.jpg"
                    alt="Classic Dress Shirts"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">
                    Classic Dress Shirts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Traditional dress shirts to complement your suits.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/corporate" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                  <BuildingOfficeIcon className="h-16 w-16 text-slate-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors">
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