import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  StarIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  HeartIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CogIcon,
  BeakerIcon,
  MagnifyingGlassIcon,
  AcademicCapIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Medical Kit | UNEOM Premium Healthcare Equipment',
  description: 'Discover UNEOM\'s Professional Medical Kit - comprehensive medical tools and equipment for healthcare professionals in Saudi Arabia. High-quality, sterile, and organized medical supplies for hospitals and clinics.',
  keywords: 'professional medical kit, medical equipment Saudi Arabia, healthcare tools, medical supplies, hospital equipment, clinic supplies',
  openGraph: {
    title: 'Professional Medical Kit | UNEOM',
    description: 'Comprehensive professional medical kit for healthcare professionals',
    images: ['/images/products/medical-professional-kit.jpg'],
    locale: 'en_US',
  },
  alternates: {
    canonical: '/shop/medical-accessories/professional-kit/',
    languages: {
      'en': '/shop/medical-accessories/professional-kit/',
      'ar': '/ar/shop/medical-accessories/professional-kit/',
    },
  },
}

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Medical Grade Quality',
    description: 'All tools meet international medical standards and certifications'
  },
  {
    icon: SparklesIcon,
    title: 'Sterile & Safe',
    description: 'Pre-sterilized tools with antimicrobial properties for safety'
  },
  {
    icon: CogIcon,
    title: 'Complete Organization',
    description: 'Systematically organized for quick access during emergencies'
  },
  {
    icon: TruckIcon,
    title: 'Portable Design',
    description: 'Lightweight and portable for mobile healthcare services'
  }
]

const kitContents = [
  'Digital thermometer with disposable covers',
  'Professional stethoscope',
  'Blood pressure monitor (manual)',
  'Pulse oximeter',
  'Otoscope with disposable specula',
  'Ophthalmoscope',
  'Reflex hammer',
  'Penlight with pupil gauge',
  'Disposable gloves (various sizes)',
  'Alcohol swabs and antiseptic wipes',
  'Disposable syringes and needles',
  'Bandages and gauze pads',
  'Medical scissors and tweezers',
  'Tongue depressors',
  'Medical tape',
  'Emergency medications (basic)',
  'Organized carrying case'
]

const specifications = [
  { label: 'Kit Weight', value: '3.2 kg (fully loaded)' },
  { label: 'Case Dimensions', value: '45 x 35 x 15 cm' },
  { label: 'Case Material', value: 'Medical-grade ABS plastic' },
  { label: 'Sterilization', value: 'Gamma sterilized components' },
  { label: 'Certifications', value: 'CE, FDA, ISO 13485' },
  { label: 'Shelf Life', value: '5 years for sterile components' },
  { label: 'Temperature Range', value: '-10°C to +50°C storage' },
  { label: 'Warranty', value: '24-month comprehensive warranty' }
]

const testimonials = [
  {
    name: 'Dr. Sarah Al-Mutairi',
    role: 'Emergency Medicine Physician',
    content: 'Excellent kit with everything I need for initial patient assessment. The organization is perfect and saves valuable time during emergencies.',
    rating: 5,
    hospital: 'King Fahd Hospital'
  },
  {
    name: 'Ahmed Al-Zahrani',
    role: 'Paramedic Team Leader',
    content: 'Best investment for our ambulance service. High-quality tools that are reliable and well-organized. Highly recommended.',
    rating: 5,
    hospital: 'Saudi Red Crescent'
  }
]

const applications = [
  {
    icon: AcademicCapIcon,
    title: 'Emergency Medicine',
    description: 'Essential tools for emergency departments and ambulance services'
  },
  {
    icon: HeartIcon,
    title: 'Primary Care',
    description: 'Complete kit for general practitioners and family medicine'
  },
  {
    icon: UserGroupIcon,
    title: 'Home Healthcare',
    description: 'Perfect for home visits and mobile healthcare services'
  },
  {
    icon: BeakerIcon,
    title: 'Medical Training',
    description: 'Ideal for medical schools and training institutions'
  }
]

const qualityFeatures = [
  'All instruments calibrated and tested',
  'Sterile packaging for single-use items',
  'Durable construction for repeated use',
  'Easy-to-clean surfaces',
  'Shock-resistant carrying case',
  'Clear labeling and organization system'
]

export default function ProfessionalMedicalKitPage() {
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
            <Link href="/shop/medical-accessories" className="hover:text-blue-600">Medical Accessories</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Professional Medical Kit</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Complete Kit
                </span>
                <span className="ml-2 text-sm text-gray-600">17 Essential Tools</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Medical Kit
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive medical kit designed for healthcare professionals in Saudi Arabia. Contains all essential diagnostic and treatment tools in a portable, organized case. Perfect for emergency medicine, primary care, and mobile healthcare services.
              </p>
              <div className="flex items-center mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(312 reviews)</span>
                <span className="ml-4 text-sm text-green-600 font-medium">99% satisfaction</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Request Quote
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download Catalog
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/medical-professional-kit.jpg"
                alt="Professional Medical Kit"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <SparklesIcon className="h-8 w-8 text-blue-500" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Sterile & Safe</p>
                    <p className="text-sm text-gray-600">Medical grade quality</p>
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
              Professional Medical Kit Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed with healthcare professionals in mind, featuring medical-grade quality and systematic organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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

      {/* Kit Contents Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Kit Contents
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our professional medical kit includes all essential tools for comprehensive patient care and diagnosis
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {kitContents.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> All sterile components are individually packaged and have extended shelf life for maximum safety and reliability.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/products/medical-kit-contents.jpg"
                alt="Medical Kit Contents"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Medical Applications
            </h2>
            <p className="text-lg text-gray-600">
              Versatile kit suitable for various healthcare settings and specialties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <application.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
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

      {/* Quality Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-gray-600">
              Every component meets the highest medical standards for safety and reliability
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">{feature}</span>
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
              Detailed specifications for the professional medical kit
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

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Healthcare Professional Reviews
            </h2>
            <p className="text-lg text-gray-600">
              What medical professionals say about our professional medical kit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
                  <p className="text-xs text-blue-600">{testimonial.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your Medical Practice Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of healthcare professionals who trust UNEOM for their medical equipment needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Custom Quote
            </button>
            <Link 
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Medical Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop/medical-scrubs/professional-lab-coat" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/professional-lab-coat.jpg"
                  alt="Professional Lab Coat"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Lab Coat</h3>
                  <p className="text-gray-600 text-sm">High-quality lab coats for medical professionals</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/medical-scrubs/clinical-uniform-set" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/clinical-uniform-set.jpg"
                  alt="Clinical Uniform Set"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Clinical Uniform Set</h3>
                  <p className="text-gray-600 text-sm">Complete clinical uniform for healthcare workers</p>
                </div>
              </div>
            </Link>
            <Link href="/shop/healthcare-accessories" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src="/images/products/healthcare-accessories.jpg"
                  alt="Healthcare Accessories"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Healthcare Accessories</h3>
                  <p className="text-gray-600 text-sm">Complete range of healthcare accessories</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}