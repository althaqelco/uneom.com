import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserGroupIcon, // For team/casual corporate
  SunIcon // For comfort/breathability
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Corporate Casual Polo Shirts | Premium & Performance Polos | UNEOM',
  description: 'Discover our range of corporate casual polo shirts. Comfortable, stylish, and customizable polos perfect for a smart casual corporate look, team events, and promotional wear in Saudi Arabia.',
  keywords: 'corporate polo shirts, casual polo KSA, performance polo shirts, premium corporate polos, team polo shirts, embroidered polos Saudi Arabia',
  openGraph: {
    title: 'Corporate Casual Polo Shirts | Premium & Performance Polos | UNEOM',
    description: 'Stylish and comfortable corporate casual polo shirts. Ideal for smart casual work environments and team branding.',
    images: ['/images/products/corporate/casual-polo-collection.jpg'],
  },
}

const poloCategories = [
  {
    name: 'Classic Corporate Polos',
    description: 'Timeless polo designs with durable fabrics, perfect for everyday smart casual wear.',
    image: '/images/products/corporate/classic-polo-shirts.jpg',
    href: '/shop/corporate/casual-polo/classic/',
    features: ['Pique cotton blends', 'Traditional collar & placket', 'Wide color range']
  },
  {
    name: 'Performance Polo Shirts',
    description: 'Engineered with moisture-wicking and breathable fabrics for active professionals.',
    image: '/images/products/corporate/performance-polo-shirts.jpg',
    href: '/shop/corporate/casual-polo/performance/',
    features: ['Moisture-wicking technology', 'UV protection options', 'Lightweight & breathable']
  },
  {
    name: 'Premium Corporate Polos',
    description: 'Luxurious materials and refined details for an elevated smart casual statement.',
    image: '/images/products/corporate/premium-corporate-polos.jpg',
    href: '/shop/corporate/casual-polo/premium-corporate/',
    features: ['Mercerized cotton or fine blends', 'Sophisticated detailing', 'Enhanced durability & feel']
  }
]

const whyChooseUneomPolos = [
  {
    icon: SparklesIcon,
    title: 'Versatile Styles',
    description: 'A wide selection of polo shirts, from classic to performance-oriented, to suit various corporate needs and preferences.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality & Durability',
    description: 'Constructed with high-quality materials and techniques to ensure longevity and maintain a professional appearance.'
  },
  {
    icon: SunIcon,
    title: 'Comfort & Wearability',
    description: 'Designed for all-day comfort, with options for breathability, moisture-wicking, and stretch for active roles.'
  },
  {
    icon: UserGroupIcon,
    title: 'Excellent for Branding',
    description: 'Ideal canvas for embroidery or printing, making them perfect for team uniforms and promotional activities.'
  }
]

export default function CasualPoloPage() {
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
            <Link href="/shop/corporate/" className="hover:text-blue-600">Corporate</Link>
            <span>/</span>
            <span className="text-gray-900">Casual Polo Shirts</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/polo-shirts-banner.jpg" 
            alt="Casual polo shirts background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Corporate Casual Polo Shirts
          </h1>
          <p className="text-xl text-teal-50 mb-10 max-w-3xl mx-auto">
            Achieve a smart, relaxed, and professional look with our versatile collection of corporate casual polo shirts. Perfect for team branding, events, or everyday comfort in Saudi Arabia.
          </p>
          <Link
            href="/quote/?category=polo-shirts"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Quote for Your Team
          </Link>
        </div>
      </section>

      {/* Polo Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Polo Shirt Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From classic comfort to high-performance wear, find the ideal polo for your corporate needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {poloCategories.map((category) => (
              <div key={category.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.href}
                    className="mt-auto bg-teal-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center"
                  >
                    Discover {category.name}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Polos Section */}
      <section className="py-16 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The UNEOM Advantage for Corporate Polos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide polo shirts that combine style, comfort, and practicality, perfectly suited for the modern corporate environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomPolos.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Image 
            src="/icons/embroidery-machine.svg" 
            alt="Embroidery Icon" 
            width={80} 
            height={80} 
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Brand Your Polos: Custom Embroidery & Printing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Make your mark with custom-branded polo shirts. We offer high-quality embroidery and printing services to showcase your company logo, team name, or event branding with precision and style.
          </p>
          <Link
            href="/services/custom-design/#embroidery-printing"
            className="bg-cyan-700 text-white px-10 py-3 rounded-lg font-semibold hover:bg-cyan-800 transition-colors text-lg inline-flex items-center"
          >
            Explore Branding Options
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find the Perfect Polo Solution for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether for daily wear, corporate events, or promotional activities, our team can help you select or create the ideal polo shirts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg"
            >
              Discuss Your Polo Needs
            </Link>
            <Link
              href="/industries/corporate/"
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-lg"
            >
              View Corporate Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}