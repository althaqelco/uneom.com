import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon, // For manufacturing/tools
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon, // For durability/quality
  ShieldCheckIcon, // For protection/safety
  UserGroupIcon, // For team/workforce
  CogIcon // For functionality/industry
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'


export const metadata: Metadata = {
  title: 'General Manufacturing Workwear | Durable Factory Uniforms | UNEOM',
  description: 'Durable and functional workwear for general manufacturing environments. Including work shirts, pants, and light coveralls designed for comfort, safety, and longevity in Saudi Arabia.',
  keywords: 'manufacturing workwear, factory uniforms KSA, industrial work shirts, durable work pants, light coveralls Saudi Arabia, general factory attire',
  openGraph: {
    title: 'General Manufacturing Workwear | Durable Factory Uniforms | UNEOM',
    description: 'Equip your manufacturing workforce with durable, comfortable, and functional workwear designed for daily industrial use.',
    images: ['/images/products/manufacturing/general-workwear-main.jpg'],
  },
}

const workwearTypes = [
  {
    name: 'Durable Work Shirts',
    description: 'Heavy-duty shirts made from cotton drill or poly-cotton blends, offering breathability and resistance to wear and tear.',
    image: '/images/products/manufacturing/work-shirts.jpg',
    features: ['Reinforced seams', 'Utility pockets', 'Variety of colors and weights']
  },
  {
    name: 'Industrial Work Pants',
    description: 'Tough and comfortable work pants with features like cargo pockets, reinforced knees, and durable triple stitching.',
    image: '/images/products/manufacturing/work-pants.jpg',
    features: ['Hard-wearing fabrics', 'Functional pocket design', 'Comfort fit for mobility']
  },
  {
    name: 'Lightweight Coveralls',
    description: 'One-piece coveralls for general protection against dirt, grime, and minor splashes in manufacturing settings.',
    image: '/images/products/manufacturing/light-coveralls.jpg',
    features: ['Easy to wear/remove', 'Breathable poly-cotton', 'Multiple pockets for tools']
  }
]

const whyChooseUneomManufacturingWorkwear = [
  {
    icon: CogIcon,
    title: 'Designed for Industry',
    description: 'Our workwear is specifically designed to meet the demands of manufacturing environments, focusing on durability and functionality.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enhanced Worker Safety',
    description: 'Provides a basic level of protection and can be combined with specialized PPE for higher-risk tasks.'
  },
  {
    icon: SparklesIcon,
    title: 'Comfort & Productivity',
    description: 'Comfortable designs and breathable fabrics help improve worker comfort and can contribute to increased productivity.'
  },
  {
    icon: UserGroupIcon,
    title: 'Professional Team Appearance',
    description: 'Standardized workwear creates a unified and professional image for your manufacturing workforce.'
  }
]

export default function GeneralManufacturingWorkwearPage() {
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
            <Link href="/shop/manufacturing-attire/" className="hover:text-blue-600">Manufacturing Attire</Link>
            <span>/</span>
            <span className="text-gray-900">General Manufacturing Workwear</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-slate-700 to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/manufacturing-banner.jpg" 
            alt="Manufacturing workwear background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <WrenchScrewdriverIcon className="h-20 w-20 text-white mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            General Manufacturing Workwear
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto">
            Outfit your workforce with durable, functional, and comfortable attire designed for the demands of general manufacturing environments in Saudi Arabia.
          </p>
          <Link
            href="/quote/?category=manufacturing-workwear"
            className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Get a Quote for Your Factory
          </Link>
        </div>
      </section>

      {/* Workwear Types Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Workwear for Your Production Line
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A range of garments to ensure your team is equipped for daily tasks in a manufacturing setting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workwearTypes.map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-72 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Link to specific product page if available, or section */}
                  <Link
                    href={`/shop/industrial-uniforms/${item.name.toLowerCase().replace(/\s+/g, '-')}/`} // Example link
                    className="mt-auto bg-gray-700 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                  >
                    View {item.name}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The UNEOM Standard for Manufacturing Workwear
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide robust and reliable workwear solutions that prioritize safety, comfort, and durability for your manufacturing team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomManufacturingWorkwear.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customization & Bulk Orders Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CogIcon className="h-16 w-16 text-gray-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Workwear Tailored to Your Manufacturing Needs
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer customization options such as reinforced stress points, specialized pockets, and company branding (embroidery or heat transfer) to create workwear that perfectly suits your operational requirements and enhances your corporate identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/custom-design/#manufacturing-workwear"
              className="bg-slate-700 text-white px-10 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-lg inline-flex items-center"
            >
              Discuss Custom Workwear
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/shop/industrial-uniforms/industrial-protective-uniforms/"
              className="border-2 border-slate-700 text-slate-700 px-10 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-lg"
            >
              View Protective Uniforms
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Equip Your Workforce for Success
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our industrial workwear specialists to discuss your specific manufacturing attire needs and to receive a competitive quote for your team.
          </p>
          <Link
            href="/contact/"
            className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-lg"
          >
            Contact Industrial Specialists
          </Link>
        </div>
      </section>
    </div>
  )
}