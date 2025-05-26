import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon,
  TagIcon,
  BriefcaseIcon, // UserTieIcon is not available, using BriefcaseIcon
  BuildingStorefrontIcon, // This is available
  UserGroupIcon // Added UserGroupIcon as it's used
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Executive Supervisor Uniforms | Premium Manufacturing Workwear | UNEOM',
  description: 'Elevate your manufacturing supervisors with UNEOM\'s executive uniforms. Combining authority, comfort, and durability for leadership roles in Saudi Arabian industrial settings. Custom branding available.',
  keywords: 'executive supervisor uniforms, manufacturing supervisor apparel, industrial leadership workwear, premium factory uniforms, Saudi supervisor clothing, UNEOM executive line',
  openGraph: {
    title: 'Executive Supervisor Uniforms for Manufacturing | UNEOM',
    description: 'Professional and durable uniforms designed for supervisors in demanding manufacturing environments.',
    images: ['/images/products/industrial/executive-supervisor-uniform-main.jpg'],
  },
}

const productFeatures = [
  {
    icon: BriefcaseIcon, // Replaced UserTieIcon with BriefcaseIcon
    title: 'Authoritative & Professional Look',
    description: 'Tailored designs that project leadership and competence on the factory floor.'
  },
  {
    icon: SparklesIcon, // Represents premium quality/finish
    title: 'Premium, Durable Fabrics',
    description: 'Utilizing high-quality materials that offer both a sophisticated appearance and resilience to industrial wear.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enhanced Comfort & Mobility',
    description: 'Ergonomic cuts and breathable fabrics ensuring comfort for supervisors who are often on the move.'
  },
  {
    icon: TagIcon, // Represents branding/customization
    title: 'Custom Branding Options',
    description: 'Prominent logo placement and color coordination to align with your company\'s brand identity.'
  }
]

const specifications = [
  { label: 'Fabric Composition', value: 'Premium Poly-Viscose or Poly-Cotton Twill (e.g., 65% Polyester, 35% Viscose/Cotton, 220-260 GSM)' },
  { label: 'Design Styles', value: 'Tailored Shirts/Polo Shirts, Smart Trousers/Chinos, Optional Coordinated Jackets/Vests' },
  { label: 'Available Colors', value: 'Navy, Charcoal Grey, Black, Light Blue, White, with options for contrast piping/details' },
  { label: 'Sizes', value: 'S - 4XL, with bespoke tailoring options available' },
  { label: 'Key Features', value: 'Wrinkle-resistant finish, soil-release treatment, functional pockets, reinforced stress points' },
  { label: 'Durability', value: 'Excellent color fastness and shape retention after multiple washes' },
  { label: 'Customization', value: 'Embroidered logos, custom buttons, contrast collars/cuffs, name tags' }
]

const includedItems = [
  'Executive Supervisor Shirt/Polo',
  'Executive Supervisor Trousers/Chinos',
  'Optional Matching Jacket or Vest (if ordered)',
  'Premium Garment Bag & Hanger'
]

const idealForRoles = [
  { name: 'Production Supervisors', icon: BriefcaseIcon }, // Replaced UserTieIcon
  { name: 'Factory Floor Managers', icon: BuildingStorefrontIcon }, // Used imported BuildingStorefrontIcon
  { name: 'Quality Control Leads', icon: ShieldCheckIcon },
  { name: 'Shift Superintendents', icon: UserGroupIcon },
  { name: 'Operations Managers (On-Floor)', icon: BriefcaseIcon }
]

const relatedProducts = [
  {
    name: 'Floor Supervisor Uniform',
    image: '/images/products/industrial/floor-supervisor-uniform.jpg',
    href: '/shop/manufacturing-workwear/supervisor-uniform/floor-supervisor/',
    price: 'From SAR 190'
  },
  {
    name: 'Safety Supervisor Uniform',
    image: '/images/products/industrial/safety-supervisor-uniform.jpg',
    href: '/shop/manufacturing-workwear/supervisor-uniform/safety-supervisor/',
    price: 'From SAR 210'
  },
  {
    name: 'Heavy-Duty Production Line Uniform',
    image: '/images/products/industrial/heavy-duty-production-line-uniform-main.jpg',
    href: '/shop/manufacturing-workwear/production-line-uniform/heavy-duty/',
    price: 'From SAR 220'
  }
]
export default function ExecutiveSupervisorUniformPage() {
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
            <Link href="/shop/manufacturing-workwear/" className="hover:text-blue-600">Manufacturing Workwear</Link>
            <span>/</span>
            <Link href="/shop/manufacturing-workwear/supervisor-uniform/" className="hover:text-blue-600">Supervisor Uniforms</Link>
            <span>/</span>
            <span className="text-gray-900">Executive</span>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/products/industrial/executive-supervisor-uniform-main.jpg"
                  alt="Executive Supervisor Uniform"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden border hover:border-blue-500 cursor-pointer">
                    <Image
                      src={`/images/products/industrial/executive-supervisor-detail-${i}.jpg`}
                      alt={`Executive supervisor uniform detail ${i}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarSolidIcon key={i} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="ml-2 text-sm text-gray-600">(Premium Line - Highly Rated)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Executive Supervisor Uniform
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Command respect and ensure operational excellence with UNEOM's Executive Supervisor Uniforms. Meticulously crafted for leaders in Saudi Arabia's manufacturing sector, blending sophisticated style with industrial-grade performance.
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">From SAR 350</span>
                <span className="text-lg text-gray-500 ml-2">per set (e.g., Shirt & Trousers)</span>
              </div>
              
              <div className="p-4 bg-teal-50 border-l-4 border-teal-500 mb-6 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <BriefcaseIcon className="h-6 w-6 text-teal-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-teal-700">
                      <strong>Leadership Attire:</strong> Designed to distinguish your supervisory staff, enhancing authority and professionalism on the factory floor. <Link href="/services/corporate-programs" className="font-medium underline hover:text-teal-800">Explore Corporate Programs</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote?product=executive-supervisor-uniform"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex-1 text-center"
                >
                  Request Premium Quote
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:border-gray-400 transition-colors flex-1 flex items-center justify-center">
                  <HeartIcon className="h-5 w-5 mr-2 text-red-500" />
                  Add to Collection
                </button>
              </div>

              {/* Quick Info */}
              <div className="border-t pt-6">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Distinctive Features:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Authoritative, Tailored Fit</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Premium Resilient Fabrics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>All-Day Comfort & Mobility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>Full Custom Branding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Defining Executive Presence in Manufacturing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Roles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect for Leadership Roles in Saudi Manufacturing
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {idealForRoles.map((role, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white">
                <role.icon className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                <h4 className="text-md font-semibold text-gray-800">{role.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Executive Uniform Specifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Material & Design Details</h3>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{spec.label}:</span>
                    <span className="text-gray-600 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Your Executive Team Receives</h3>
              <ul className="space-y-3">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-700 mb-2">UNEOM Executive Standard</h4>
                <p className="text-sm text-green-600">
                  Each executive uniform set is crafted with meticulous attention to detail, ensuring a superior finish that reflects the importance of your supervisory staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Other Supervisor & Industrial Uniforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">{product.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                  <Link
                    href={product.href}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-flex items-center justify-center w-full text-sm"
                  >
                    View Details
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Outfit Your Manufacturing Leadership with Distinction
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Invest in UNEOM's Executive Supervisor Uniforms to enhance professionalism and authority within your Saudi industrial operations. Contact us for a bespoke consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?subject=Executive+Supervisor+Uniform+Inquiry"
              className="bg-white text-blue-800 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-md"
            >
              Speak to a Uniform Specialist
            </Link>
            <Link
              href="/industries/manufacturing"
              className="border-2 border-blue-300 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:border-white transition-colors text-lg"
            >
              More Manufacturing Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}