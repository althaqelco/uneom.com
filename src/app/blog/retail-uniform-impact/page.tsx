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
  ChartBarIcon,
  UserGroupIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'The Impact of Retail Uniforms on Business Success | UNEOM Blog',
  description: 'Discover how retail uniforms impact customer perception, employee performance, and business success. Comprehensive analysis of uniform benefits in retail environments and their effect on sales and brand image.',
  keywords: 'retail uniforms impact, business success uniforms, customer perception retail, employee performance uniforms, retail branding uniforms',
  openGraph: {
    title: 'The Impact of Retail Uniforms on Business Success',
    description: 'How retail uniforms drive customer trust, employee performance, and business growth',
    images: ['/images/blog/retail-uniform-impact.jpg'],
    locale: 'en_US',
  },
  alternates: {
    canonical: '/blog/retail-uniform-impact/',
    languages: {
      'en': '/blog/retail-uniform-impact/',
      'ar': '/ar/blog/retail-uniform-impact/',
    },
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction to Retail Uniform Impact' },
  { id: 'customer-perception', title: 'Customer Perception and Trust' },
  { id: 'employee-performance', title: 'Employee Performance and Morale' },
  { id: 'brand-identity', title: 'Brand Identity and Recognition' },
  { id: 'sales-impact', title: 'Direct Impact on Sales' },
  { id: 'case-studies', title: 'Real-World Case Studies' },
  { id: 'implementation', title: 'Implementation Best Practices' }
]

export default function RetailUniformImpactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">The Impact of Retail Uniforms on Business Success</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Business Impact
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Research Study
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Impact of Retail Uniforms on Business Success
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive analysis of how retail uniforms influence customer perception, employee performance, and overall business success in the competitive retail landscape.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Dr. Emily Carter</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                <span>3,847 views</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/blog/retail-uniform-impact.jpg"
                alt="The Impact of Retail Uniforms on Business Success"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <section id="introduction" className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to Retail Uniform Impact</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In today's competitive retail landscape, every detail matters when it comes to creating a successful business. One often overlooked but incredibly powerful tool is the strategic use of retail uniforms. Far from being just clothing, well-designed retail uniforms serve as a cornerstone of brand identity, customer trust, and employee performance.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Recent studies have shown that retail uniforms can significantly impact various aspects of business performance, from customer perception and sales conversion rates to employee satisfaction and brand recognition. This comprehensive analysis explores the multifaceted benefits of implementing a strategic uniform program in retail environments.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <BuildingStorefrontIcon className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-2">Key Benefits of Retail Uniforms</h3>
                        <ul className="text-blue-800 space-y-1 text-sm">
                          <li>• Enhanced professional appearance and credibility</li>
                          <li>• Improved customer service identification</li>
                          <li>• Strengthened brand identity and recognition</li>
                          <li>• Increased employee pride and team cohesion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Call to Action */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Transform Your Retail Business?</h3>
                  <p className="text-gray-700 mb-4">
                    UNEOM provides comprehensive retail uniform solutions that drive customer trust and business success.
                  </p>
                  <Link 
                    href="/shop/retail-uniforms"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Explore Retail Uniforms
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}