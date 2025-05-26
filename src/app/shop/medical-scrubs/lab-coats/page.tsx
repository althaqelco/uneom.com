import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Premium Medical Lab Coats | Professional Healthcare Attire | UNEOM',
  description: 'Discover UNEOM\'s premium medical lab coats designed for healthcare professionals in Saudi Arabia. Antimicrobial, comfortable, and professionally tailored for doctors, nurses, and medical staff.',
  keywords: 'medical lab coats, healthcare uniforms, doctor coats, medical attire, antimicrobial lab coats, professional medical wear, Saudi Arabia medical uniforms',
  openGraph: {
    title: 'Premium Medical Lab Coats | UNEOM',
    description: 'Professional medical lab coats for healthcare excellence in Saudi Arabia',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'],
  },
}

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Antimicrobial Protection',
    description: 'Advanced fabric treatment prevents bacterial growth and maintains hygiene standards'
  },
  {
    icon: BeakerIcon,
    title: 'Chemical Resistant',
    description: 'Specially treated fabric resists stains and chemical spills in laboratory environments'
  },
  {
    icon: SparklesIcon,
    title: 'Easy Care',
    description: 'Machine washable with color-fast properties and wrinkle resistance'
  },
  {
    icon: UserGroupIcon,
    title: 'Professional Fit',
    description: 'Tailored cuts for both men and women with comfortable movement'
  }
]

const products = [
  {
    id: 1,
    name: 'Classic White Lab Coat',
    price: 'From SAR 180',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['100% Cotton', 'Three Pockets', 'Button Closure', 'Knee Length']
  },
  {
    id: 2,
    name: 'Premium Antimicrobial Coat',
    price: 'From SAR 250',
    image: '/images/doctor-SBI-300813580.jpg',
    features: ['Antimicrobial Treatment', 'Stain Resistant', 'Four Pockets', 'Adjustable Cuffs']
  },
  {
    id: 3,
    name: 'Executive Lab Coat',
    price: 'From SAR 320',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    features: ['Premium Fabric', 'Embroidered Logo', 'Five Pockets', 'Tailored Fit']
  }
]

const testimonials = [
  {
    name: 'Dr. Ahmed Al-Rashid',
    role: 'Chief Medical Officer',
    hospital: 'King Faisal Specialist Hospital',
    content: 'The quality and comfort of UNEOM lab coats are exceptional. Perfect for long shifts.',
    rating: 5
  },
  {
    name: 'Dr. Fatima Al-Zahra',
    role: 'Laboratory Director',
    hospital: 'National Guard Hospital',
    content: 'Antimicrobial properties and professional appearance make these coats ideal for our lab.',
    rating: 5
  }
]

export default function LabCoatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Premium Medical
                  <span className="text-blue-600 block">Lab Coats</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional healthcare attire designed for excellence. Antimicrobial protection, 
                  superior comfort, and professional appearance for medical professionals across Saudi Arabia.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/quote"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Request Quote
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                  alt="Professional medical lab coat for healthcare professionals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <span className="font-semibold text-gray-900">ISO Certified</span>
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
              Why Choose Our Lab Coats?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Engineered for healthcare professionals who demand the highest standards 
              of quality, comfort, and protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Lab Coat Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional lab coats, each designed to meet 
              specific healthcare requirements and preferences.
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
                  <p className="text-2xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/quote"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what medical professionals across Saudi Arabia say about our lab coats.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
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
                  <p className="text-sm text-blue-600">{testimonial.hospital}</p>
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
            Ready to Upgrade Your Medical Attire?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust UNEOM for their medical uniforms. 
            Get a custom quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View All Medical Scrubs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}