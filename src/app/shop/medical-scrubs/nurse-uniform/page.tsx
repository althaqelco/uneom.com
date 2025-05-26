import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Nurse Uniforms | Medical Scrubs for Nurses | UNEOM',
  description: 'Discover UNEOM\'s premium nurse uniforms designed for comfort, durability, and professional appearance. Perfect for nurses in Saudi Arabia\'s healthcare facilities.',
  keywords: 'nurse uniforms, nursing scrubs, medical uniforms, healthcare attire, professional nursing wear, antimicrobial scrubs, Saudi Arabia nurse uniforms',
  openGraph: {
    title: 'Professional Nurse Uniforms | UNEOM',
    description: 'Premium nurse uniforms for healthcare excellence in Saudi Arabia',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'],
  },
}

const features = [
  {
    icon: HeartIcon,
    title: 'Comfort First',
    description: 'Designed for 12+ hour shifts with breathable fabrics and ergonomic fit'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Antimicrobial Protection',
    description: 'Advanced fabric treatment prevents bacterial growth and odor'
  },
  {
    icon: ClockIcon,
    title: 'Durable Construction',
    description: 'Reinforced seams and high-quality materials for long-lasting wear'
  },
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Perfect Fit',
    description: 'Multiple sizes and cuts to ensure comfort for every body type'
  }
]

const products = [
  {
    id: 1,
    name: 'Classic Nursing Scrub Set',
    price: 'From SAR 220',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['V-neck top', 'Elastic waist pants', 'Multiple pockets', 'Easy care fabric'],
    colors: ['Navy Blue', 'Ceil Blue', 'White', 'Teal']
  },
  {
    id: 2,
    name: 'Premium Antimicrobial Set',
    price: 'From SAR 280',
    image: '/images/doctor-SBI-300813580.jpg',
    features: ['Antimicrobial treatment', 'Moisture-wicking', 'Stain resistant', 'Professional fit'],
    colors: ['Royal Blue', 'Hunter Green', 'Wine', 'Black']
  },
  {
    id: 3,
    name: 'Executive Nursing Uniform',
    price: 'From SAR 350',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['Tailored fit', 'Premium fabric', 'Embroidered details', 'Professional styling'],
    colors: ['Charcoal', 'Deep Purple', 'Forest Green', 'Burgundy']
  }
]

const testimonials = [
  {
    name: 'Nurse Sarah Al-Mahmoud',
    role: 'ICU Nurse',
    hospital: 'King Abdulaziz Medical City',
    content: 'These uniforms are incredibly comfortable during long shifts. The fabric breathes well and maintains its professional appearance.',
    rating: 5
  },
  {
    name: 'Nurse Amal Al-Rashid',
    role: 'Pediatric Nurse',
    hospital: 'King Faisal Specialist Hospital',
    content: 'The antimicrobial properties give me confidence in infection control. Plus, they look professional and feel great.',
    rating: 5
  }
]

const sizingGuide = [
  { size: 'XS', chest: '32-34"', waist: '24-26"', hip: '34-36"' },
  { size: 'S', chest: '34-36"', waist: '26-28"', hip: '36-38"' },
  { size: 'M', chest: '36-38"', waist: '28-30"', hip: '38-40"' },
  { size: 'L', chest: '38-40"', waist: '30-32"', hip: '40-42"' },
  { size: 'XL', chest: '40-42"', waist: '32-34"', hip: '42-44"' },
  { size: 'XXL', chest: '42-44"', waist: '34-36"', hip: '44-46"' }
]

export default function NurseUniformPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Professional
                  <span className="text-teal-600 block">Nurse Uniforms</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Designed for the heroes of healthcare. Our nurse uniforms combine comfort, 
                  durability, and professional appearance to support you through every shift.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/quote"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Quote
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                  alt="Professional nurse uniform for healthcare professionals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <HeartIcon className="h-6 w-6 text-red-500" />
                  <span className="font-semibold text-gray-900">Nurse Approved</span>
                </div>
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
              Why Nurses Choose UNEOM
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our nurse uniforms are specifically designed to meet the demanding needs 
              of healthcare professionals in Saudi Arabia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-teal-600" />
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Nurse Uniform Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional nurse uniforms, each designed 
              for comfort, durability, and style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-teal-600 mb-4">
                    {product.price}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Colors:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/quote"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sizing Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive sizing guide.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Size</th>
                  <th className="px-6 py-4 text-left">Chest</th>
                  <th className="px-6 py-4 text-left">Waist</th>
                  <th className="px-6 py-4 text-left">Hip</th>
                </tr>
              </thead>
              <tbody>
                {sizingGuide.map((size, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold">{size.size}</td>
                    <td className="px-6 py-4">{size.chest}</td>
                    <td className="px-6 py-4">{size.waist}</td>
                    <td className="px-6 py-4">{size.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Nurses Say About Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from nursing professionals across Saudi Arabia who trust UNEOM uniforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
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
                  <p className="text-sm text-teal-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your Nursing Uniforms?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of nurses who trust UNEOM for comfortable, professional, 
            and durable uniforms. Get your custom quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              View All Medical Scrubs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}