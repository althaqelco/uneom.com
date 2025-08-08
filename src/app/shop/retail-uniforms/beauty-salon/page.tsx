import React from 'react';
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  ClockIcon, 
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
  SparklesIcon,
  HeartIcon,
  ScissorsIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Beauty Salon Uniforms | UNEOM Professional Salon Attire',
  description: 'Premium beauty salon uniforms designed for stylists, beauticians, and salon professionals. Comfortable, stylish, and functional workwear that enhances your professional image in the beauty industry.',
  keywords: 'beauty salon uniforms, salon workwear, beautician uniforms, stylist attire, professional salon clothing, beauty industry uniforms',
  openGraph: {
    title: 'Beauty Salon Uniforms | UNEOM',
    description: 'Stylish and functional uniforms designed specifically for beauty salon professionals',
    images: ['/images/products/beauty-salon-uniforms.jpg'],
    locale: 'en_US'},
  alternates: {
    canonical: '/shop/retail-uniforms/beauty-salon/',
    languages: {
      'en': '/shop/retail-uniforms/beauty-salon/',
      'ar': '/ar/shop/retail-uniforms/beauty-salon/'}}}

const features = [
  {
    icon: SparklesIcon,
    title: 'Stylish Design',
    description: 'Fashion-forward designs that reflect the beauty industry aesthetic'
  },
  {
    icon: HeartIcon,
    title: 'Comfort First',
    description: 'All-day comfort with breathable fabrics and ergonomic design'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Stain Resistant',
    description: 'Advanced fabric treatment resists hair dyes and beauty products'
  },
  {
    icon: ScissorsIcon,
    title: 'Professional Function',
    description: 'Designed with pockets and features for salon tools and accessories'
  }
]

const uniformTypes = [
  {
    name: 'Salon Tunic',
    description: 'Classic tunic style with modern cuts and professional appearance',
    features: [
      'Asymmetrical zipper closure',
      'Multiple tool pockets',
      'Adjustable side ties',
      'Moisture-wicking fabric'
    ],
    colors: ['Black', 'White', 'Navy', 'Burgundy']
  },
  {
    name: 'Salon Dress',
    description: 'Elegant dress design perfect for upscale salon environments',
    features: [
      'A-line silhouette',
      'Hidden pockets',
      'Wrinkle-resistant fabric',
      'Professional length'
    ],
    colors: ['Black', 'Charcoal', 'Deep Purple', 'Emerald']
  },
  {
    name: 'Salon Jacket',
    description: 'Lightweight jacket for layering and professional presentation',
    features: [
      'Snap-front closure',
      'Chest and side pockets',
      'Breathable mesh lining',
      'Easy-care fabric'
    ],
    colors: ['White', 'Black', 'Rose Gold', 'Silver']
  },
  {
    name: 'Salon Pants',
    description: 'Comfortable pants designed for long hours of standing and movement',
    features: [
      'Elastic waistband',
      'Cargo pockets',
      'Stretch fabric',
      'Tapered leg design'
    ],
    colors: ['Black', 'Navy', 'Charcoal', 'Khaki']
  }
]

const specifications = [
  { label: 'Fabric Composition', value: '60% Polyester, 40% Cotton Blend' },
  { label: 'Weight', value: '180 GSM (Lightweight)' },
  { label: 'Care Instructions', value: 'Machine washable, tumble dry low' },
  { label: 'Size Range', value: 'XS to 3XL (Petite and Tall available)' },
  { label: 'Color Fastness', value: 'Grade 4-5 (Excellent)' },
  { label: 'Shrinkage', value: 'Less than 3% after washing' },
  { label: 'UV Protection', value: 'UPF 30+ Sun Protection' },
  { label: 'Antimicrobial', value: 'Built-in odor control technology' }
]

const colorPalette = [
  {
    name: 'Classic Black',
    description: 'Timeless and professional, perfect for any salon environment',
    psychology: 'Conveys sophistication and elegance'
  },
  {
    name: 'Pure White',
    description: 'Clean and fresh appearance, ideal for medical spas',
    psychology: 'Represents cleanliness and purity'
  },
  {
    name: 'Navy Blue',
    description: 'Professional and trustworthy, suitable for upscale salons',
    psychology: 'Projects confidence and reliability'
  },
  {
    name: 'Burgundy',
    description: 'Rich and luxurious, perfect for high-end beauty establishments',
    psychology: 'Suggests luxury and premium service'
  },
  {
    name: 'Deep Purple',
    description: 'Creative and artistic, ideal for trendy salon environments',
    psychology: 'Represents creativity and innovation'
  },
  {
    name: 'Rose Gold',
    description: 'Modern and feminine, perfect for contemporary beauty spaces',
    psychology: 'Conveys warmth and approachability'
  }
]

const applications = [
  {
    icon: PaintBrushIcon,
    title: 'Hair Salons',
    description: 'Perfect for hairstylists, colorists, and salon assistants'
  },
  {
    icon: SparklesIcon,
    title: 'Beauty Spas',
    description: 'Ideal for estheticians, massage therapists, and spa technicians'
  },
  {
    icon: HeartIcon,
    title: 'Nail Salons',
    description: 'Suitable for nail technicians and manicure specialists'
  },
  {
    icon: ScissorsIcon,
    title: 'Barbershops',
    description: 'Designed for barbers and grooming professionals'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Stylist',
    content: 'These uniforms are perfect! They look professional, feel comfortable all day, and the stain resistance is amazing. My clients always compliment the look.',
    rating: 5,
    salon: 'Luxe Hair Studio'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Salon Owner',
    content: 'UNEOM uniforms have elevated our salon\'s professional image. The quality is outstanding and they maintain their appearance wash after wash.',
    rating: 5,
    salon: 'Bella Beauty Salon'
  },
  {
    name: 'Jennifer Lee',
    role: 'Esthetician',
    content: 'Love the comfort and functionality. The pockets are perfectly placed for my tools, and the fabric breathes well during long treatment sessions.',
    rating: 5,
    salon: 'Serenity Spa'
  }
]

const careGuide = [
  'Wash in cold water to preserve color and fabric integrity',
  'Use gentle, color-safe detergent',
  'Avoid bleach and harsh chemicals',
  'Tumble dry on low heat or air dry',
  'Iron on low heat if needed',
  'Store on hangers to maintain shape'
]

const customizationOptions = [
  'Embroidered salon logo and name',
  'Personalized name tags',
  'Custom color combinations',
  'Specialized pocket configurations',
  'Adjustable fit modifications',
  'Seasonal fabric variations'
]

export default function BeautySalonUniformsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-blue-600">Shop</Link>
            <span className="mx-2">/</span>
            <Link href="/shop/retail-uniforms" className="hover:text-blue-600">Retail Uniforms</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Beauty Salon Uniforms</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Beauty Professional
                </span>
                <span className="ml-2 text-sm text-gray-600">Style Meets Function</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Beauty Salon Uniforms
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Elevate your salon's professional image with our stylish and functional beauty salon uniforms. Designed specifically for beauty professionals who demand both style and comfort in their workwear.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(294 reviews)</span>
                <span className="ml-4 text-sm text-green-600 font-medium">97% satisfaction</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                  View Collection
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Customization Options
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/beauty-salon-uniforms.jpg"
                alt="Beauty Salon Uniforms"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <SparklesIcon className="h-8 w-8 text-pink-500" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Style & Comfort</p>
                    <p className="text-sm text-gray-600">Professional Beauty Wear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Beauty Salon Uniforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed with beauty professionals in mind, combining fashion-forward aesthetics with practical functionality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Uniform Types Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Uniform Collection
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our comprehensive range of salon uniform pieces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniformTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.colors.map((color, colorIndex) => (
                      <span key={colorIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Color Palette Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Color Palette
            </h2>
            <p className="text-lg text-gray-600">
              Carefully selected colors that enhance your salon's professional image
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorPalette.map((color, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {color.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {color.description}
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-purple-600">
                    <strong>Psychology:</strong> {color.psychology}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for All Beauty Professionals
            </h2>
            <p className="text-lg text-gray-600">
              Versatile uniforms suitable for various beauty industry roles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <application.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {application.title}
                </h3>
                <p className="text-gray-600">
                  {application.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Quality specifications for our beauty salon uniforms
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-medium text-gray-900">{spec.label}:</span>
                  <span className="text-gray-600 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customization Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Customization Options
            </h2>
            <p className="text-lg text-gray-600">
              Personalize your uniforms to match your salon's unique brand
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizationOptions.map((option, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircleIcon className="h-6 w-6 text-pink-500 mr-3" />
                <span className="text-gray-700">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Beauty Professionals Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from salon owners and beauty professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-pink-600">{testimonial.salon}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Care Guide Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Care Instructions
            </h2>
            <p className="text-lg text-gray-600">
              Keep your uniforms looking professional with proper care
            </p>
          </div>
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careGuide.map((instruction, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{instruction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Salon's Professional Image
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of beauty professionals who trust UNEOM for their uniform needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Catalog
            </button>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Your Professional Look
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop/retail-uniforms/spa-uniforms" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/spa-uniforms.jpg"
                  alt="Spa Uniforms"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Spa Uniforms</h3>
                  <p className="text-gray-600 text-sm">Relaxing and professional spa attire</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/retail-uniforms/wellness-center" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/wellness-uniforms.jpg"
                  alt="Wellness Center Uniforms"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Wellness Center Uniforms</h3>
                  <p className="text-gray-600 text-sm">Professional wellness and therapy attire</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/retail-uniforms/accessories" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/salon-accessories.jpg"
                  alt="Salon Accessories"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Accessories</h3>
                  <p className="text-gray-600 text-sm">Complete your look with professional accessories</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}