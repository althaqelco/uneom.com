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
  title: 'Premium Chef Uniform | Professional Kitchen Attire | UNEOM',
  description: 'Discover our premium chef uniform collection designed for culinary professionals. Heat-resistant, stain-proof, and comfortable chef jackets, pants, and accessories.',
  keywords: 'premium chef uniform, professional chef jacket, kitchen uniform, culinary attire, chef clothing, restaurant uniform, Saudi chef uniforms',
  openGraph: {
    title: 'Premium Chef Uniform | Professional Kitchen Attire',
    description: 'Professional chef uniforms for culinary excellence',
    images: ['/images/products/hospitality/premium-chef-uniform.jpg'],
  },
}

const productFeatures = [
  {
    icon: FireIcon,
    title: 'Heat Resistant',
    description: 'Advanced fabric technology for kitchen safety'
  },
  {
    icon: BeakerIcon,
    title: 'Stain Resistant',
    description: 'Easy-clean fabric repels oils and stains'
  },
  {
    icon: SparklesIcon,
    title: 'Antimicrobial',
    description: 'Treated fabric prevents bacteria growth'
  },
  {
    icon: CogIcon,
    title: 'Ergonomic Design',
    description: 'Comfortable fit for long kitchen shifts'
  }
]

const chefUniforms = [
  {
    id: 'executive-chef',
    name: 'Executive Chef Uniform',
    price: 899,
    originalPrice: 1099,
    image: '/images/products/hospitality/executive-chef-uniform.jpg',
    features: [
      'Double-breasted chef jacket',
      'Heat-resistant fabric blend',
      'Professional black pants',
      'Chef hat included',
      'Custom embroidery available'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Classic White', 'Chef Black', 'Charcoal Gray']
  },
  {
    id: 'sous-chef',
    name: 'Sous Chef Professional',
    price: 749,
    originalPrice: 899,
    image: '/images/products/hospitality/sous-chef-uniform.jpg',
    features: [
      'Single-breasted design',
      'Moisture-wicking interior',
      'Reinforced stress points',
      'Multiple pockets',
      'Stain-resistant coating'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Classic White', 'Light Gray', 'Navy Blue']
  },
  {
    id: 'line-cook',
    name: 'Line Cook Essential',
    price: 599,
    originalPrice: 749,
    image: '/images/products/hospitality/line-cook-uniform.jpg',
    features: [
      'Durable cotton blend',
      'Easy-care fabric',
      'Comfortable fit',
      'Basic chef hat',
      'Value pricing'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: ['Classic White', 'Kitchen Gray']
  }
]

const accessories = [
  {
    name: 'Chef Hat Collection',
    price: 89,
    image: '/images/products/hospitality/chef-hats.jpg',
    description: 'Traditional and modern chef hat styles'
  },
  {
    name: 'Kitchen Aprons',
    price: 149,
    image: '/images/products/hospitality/kitchen-aprons.jpg',
    description: 'Waterproof and stain-resistant aprons'
  },
  {
    name: 'Chef Neckerchiefs',
    price: 59,
    image: '/images/products/hospitality/chef-neckerchiefs.jpg',
    description: 'Professional neckerchiefs in various colors'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '65% Cotton, 35% Polyester' },
  { label: 'Weight', value: '220 GSM' },
  { label: 'Heat Resistance', value: 'Up to 180°C' },
  { label: 'Care Instructions', value: 'Machine washable' },
  { label: 'Customization', value: 'Embroidery and printing available' },
  { label: 'Delivery Time', value: '5-7 business days' }
]

const kitchenBenefits = [
  {
    title: 'Professional Appearance',
    description: 'Maintain high standards with crisp, clean uniforms',
    icon: StarIcon
  },
  {
    title: 'Kitchen Safety',
    description: 'Heat and stain resistant fabrics for safer cooking',
    icon: ShieldCheckIcon
  },
  {
    title: 'Comfort & Mobility',
    description: 'Ergonomic design for long shifts and active work',
    icon: UserGroupIcon
  },
  {
    title: 'Easy Maintenance',
    description: 'Machine washable with stain-resistant properties',
    icon: CogIcon
  }
]

const testimonials = [
  {
    name: 'Chef Mohammed Al-Zahrani',
    position: 'Executive Chef, Riyadh Palace Hotel',
    content: 'These uniforms have transformed our kitchen team\'s professional image. The heat resistance and comfort are exceptional.',
    rating: 5
  },
  {
    name: 'Chef Fatima Al-Rashid',
    position: 'Head Chef, Jeddah Culinary Institute',
    content: 'Perfect for our training kitchen. Students love the professional look and the uniforms hold up well to daily use.',
    rating: 5
  }
]

export default function PremiumChefUniformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Premium Chef
                <span className="text-orange-600 block">Uniform Collection</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Elevate your culinary team with our professional chef uniforms. 
                Designed for comfort, safety, and style in the demanding kitchen environment. 
                Perfect for restaurants, hotels, and culinary institutions across Saudi Arabia.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Heat Resistant</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Stain Proof</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircleIcon className="h-5 w-5" />
                  <span className="text-sm font-medium">Antimicrobial</span>
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
                  Bulk Order Quote
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/hospitality/premium-chef-uniform.jpg"
                  alt="Premium Chef Uniform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Professional</div>
                <div className="text-sm">Kitchen Ready</div>
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
              Chef Uniform Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional uniforms for every level of culinary expertise.
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

      {/* Accessories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Chef Accessories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your professional kitchen look with our accessories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {accessories.map((accessory, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
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

      {/* Kitchen Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kitchen Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why professional chef uniforms matter in your kitchen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {kitchenBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-orange-600" />
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
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
              Contact Culinary Team
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
            <Link href="/shop/hospitality-attire/executive-hospitality-suit" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/hospitality/executive-hospitality-suit.jpg"
                    alt="Executive Hospitality Suit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    Executive Hospitality Suit
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Premium suits for hospitality management teams.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/hospitality-attire/concierge-uniform-set" className="group">
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
                <div className="aspect-video relative bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
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