import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'School Staff Uniforms | Admin & Support Staff Attire | UNEOM',
  description: 'Professional and comfortable uniforms for all school staff, including administration, support personnel, and faculty. Durable, stylish, and customizable options for educational institutions in Saudi Arabia.',
  keywords: 'school staff uniforms, education admin attire, support staff uniforms KSA, faculty uniforms, school administrative clothing',
  openGraph: {
    title: 'School Staff Uniforms | Admin & Support Staff Attire | UNEOM',
    description: 'Outfit your entire school team with professional and comfortable uniforms. Options for admin, support, and faculty.',
    images: ['/images/products/education/school-staff-uniforms-main.jpg'],
  },
}

const staffUniformTypes = [
  {
    name: 'Administrative Staff Attire',
    description: 'Professional suits, blazers, shirts, and dresses for office and administrative personnel, projecting authority and competence.',
    image: '/images/products/education/admin-staff-uniforms.jpg',
    features: ['Tailored fits', 'Durable, professional fabrics', 'Wide range of formal styles'],
    link: '#admin-attire' // Link to a section or specific products
  },
  {
    name: 'Support Staff Uniforms',
    description: 'Practical and comfortable uniforms for maintenance, cafeteria, security, and other support roles, ensuring functionality and a neat appearance.',
    image: '/images/products/education/support-staff-uniforms.jpg',
    features: ['Easy-care fabrics', 'Functional designs', 'Options for high-visibility'],
    link: '#support-uniforms'
  },
  {
    name: 'Faculty & Teacher Uniforms',
    description: 'Smart and comfortable attire for educators, including professional shirts, blouses, trousers, skirts, and modest options.',
    image: '/images/products/education/faculty-uniforms.jpg', // Consider using faculty-professional-attire image
    features: ['Comfortable for all-day wear', 'Professional and approachable look', 'Variety of styles'],
    link: '/shop/education-uniforms/faculty-professional-attire/'
  }
]

const whyChooseUneomStaffUniforms = [
  {
    icon: UserGroupIcon,
    title: 'Unified School Image',
    description: 'Create a cohesive and professional appearance across all departments, reinforcing your school\'s brand and values.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durability & Practicality',
    description: 'Our uniforms are made from high-quality, durable materials designed to withstand daily wear and maintain a smart look.'
  },
  {
    icon: SparklesIcon,
    title: 'Comfort & Style',
    description: 'We balance professionalism with comfort, ensuring staff feel good and look their best throughout the school day.'
  },
  {
    icon: AcademicCapIcon, // Representing education
    title: 'Customization for Your School',
    description: 'Extensive customization options including logo embroidery, color matching, and specific design requirements to meet your school\'s unique identity.'
  }
]

export default function SchoolStaffUniformsPage() {
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
            <Link href="/shop/education-uniforms/" className="hover:text-blue-600">Education Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">School Staff Uniforms</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/education-banner.jpg" 
            alt="Education uniforms background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Professional School Staff Uniforms
          </h1>
          <p className="text-xl text-green-50 mb-10 max-w-3xl mx-auto">
            Equip your entire school team – from administration and support staff to faculty – with high-quality, comfortable, and professional uniforms that reflect your institution's standards.
          </p>
          <Link
            href="/quote/?category=school-staff-uniforms"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Request a Quote for Your School
          </Link>
        </div>
      </section>

      {/* Staff Uniform Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Uniform Solutions for Every School Role
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide tailored uniform solutions for all members of your educational community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffUniformTypes.map((uniformType) => (
              <div key={uniformType.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={uniformType.image}
                    alt={uniformType.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{uniformType.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{uniformType.description}</p>
                  <ul className="space-y-2 mb-6">
                    {uniformType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={uniformType.link}
                    className="mt-auto bg-emerald-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center"
                  >
                    {uniformType.link.startsWith('/') ? 'View Options' : 'Learn More'}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why UNEOM for Your School Staff Uniforms?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner with us to create a professional, comfortable, and unified look for your entire school staff.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomStaffUniforms.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization & Consultation Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image 
            src="/images/icons/education-customization.svg" // Placeholder
            alt="School Uniform Customization Icon" 
            width={80} 
            height={80} 
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tailored Uniform Programs for Educational Institutions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We understand that every school has unique needs. Our team works closely with educational institutions to develop comprehensive uniform programs that cater to all staff members, ensuring brand consistency, comfort, and professionalism. From initial design consultation to final delivery, we are your trusted partner.
          </p>
          <Link
            href="/services/custom-design/"
            className="bg-green-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg inline-flex items-center"
          >
            Discuss Your School's Needs
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Started with Your School Staff Uniforms
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our education uniform specialists today for a consultation, to view samples, or to receive a detailed quote for your school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-lg"
            >
              Contact Education Specialist
            </Link>
            <Link
              href="/shop/education-uniforms/premium-school-uniform/" // Link to student uniforms as related
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-lg"
            >
              View Student Uniforms
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}