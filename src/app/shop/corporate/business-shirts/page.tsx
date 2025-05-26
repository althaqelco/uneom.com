import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Corporate Business Shirts | Executive Dress Shirts | UNEOM',
  description: 'Explore our collection of corporate business shirts. Premium quality, comfortable, and stylish dress shirts for executives and professionals in Saudi Arabia. Available in various fits and fabrics.',
  keywords: 'corporate business shirts, executive dress shirts, professional shirts KSA, mens business shirts, womens business shirts, corporate attire Saudi Arabia',
  openGraph: {
    title: 'Corporate Business Shirts | Executive Dress Shirts | UNEOM',
    description: 'Premium quality corporate business shirts for professionals. Stylish and comfortable options available.',
    images: ['/images/products/corporate/business-shirts-collection.jpg'],
  },
}

const shirtCategories = [
  {
    name: 'Classic Fit Shirts',
    description: 'Timeless elegance and comfort for traditional corporate environments.',
    image: '/images/products/corporate/classic-fit-shirts.jpg',
    href: '/shop/corporate/business-shirts/classic/',
    features: ['Generous cut', 'Traditional collar styles', 'Durable fabrics']
  },
  {
    name: 'Modern Fit Shirts',
    description: 'Contemporary styling with a tailored silhouette for a sharp, professional look.',
    image: '/images/products/corporate/modern-fit-shirts.jpg',
    href: '/shop/corporate/business-shirts/modern-fit/',
    features: ['Slightly tapered body', 'Modern collar options', 'Stretch fabrics for mobility']
  },
  {
    name: 'Premium Dress Shirts',
    description: 'Luxurious fabrics and exquisite craftsmanship for discerning executives.',
    image: '/images/products/corporate/premium-dress-shirts.jpg',
    href: '/shop/corporate/business-shirts/premium-dress/',
    features: ['High-thread-count cotton', 'Mother-of-pearl buttons', 'Superior tailoring']
  }
]

const whyChooseUneomShirts = [
  {
    icon: SparklesIcon,
    title: 'Premium Quality Fabrics',
    description: 'We source high-quality cotton, blends, and performance fabrics for maximum comfort and durability.'
  },
  {
    icon: UserIcon,
    title: 'Variety of Fits & Styles',
    description: 'From classic to modern slim-fit, find the perfect shirt to match your corporate image and personal preference.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Durability & Easy Care',
    description: 'Our shirts are designed to withstand daily wear and frequent washing, many with easy-care or wrinkle-resistant properties.'
  },
  {
    icon: TagIcon,
    title: 'Customization Options',
    description: 'Personalize your corporate shirts with logo embroidery, monograms, and specific color choices.'
  }
]

export default function BusinessShirtsPage() {
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
            <span className="text-gray-900">Business Shirts</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/corporate-attire-banner.jpg" 
            alt="Corporate attire background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Corporate Business Shirts
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Elevate your professional image with our premium collection of corporate business shirts. Designed for comfort, style, and durability, our shirts are perfect for today's dynamic business environment in Saudi Arabia.
          </p>
          <Link
            href="/quote/"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Request a Bulk Quote
          </Link>
        </div>
      </section>

      {/* Shirt Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover Our Business Shirt Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect style to suit your company's image and your team's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shirtCategories.map((category) => (
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
                    className="mt-auto bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Explore {category.name}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Uneom Shirts Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose UNEOM for Your Corporate Shirts?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing high-quality, stylish, and comfortable business shirts that meet the demands of modern professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUneomShirts.map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <reason.icon className="h-12 w-12 text-blue-600" />
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
            src="/images/icons/customization-icon.svg" 
            alt="Customization Icon" 
            width={80} 
            height={80} 
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tailored to Your Brand: Custom Business Shirts
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Reinforce your corporate identity with custom business shirts. We offer logo embroidery, monogramming, specific color matching, and unique design details to create shirts that perfectly represent your brand.
          </p>
          <Link
            href="/services/custom-design/"
            className="bg-indigo-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg inline-flex items-center"
          >
            Learn About Customization
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Outfit Your Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our specialists are ready to help you select the perfect business shirts for your organization. Contact us today for a consultation or a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Contact Our Team
            </Link>
            <Link
              href="/faq/"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}