import { Metadata } from 'next'
import QuoteForm from '@/components/forms/QuoteForm'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Request a Quote | Professional Uniforms & Workwear | UNEOM',
  description: 'Get a custom quote for professional uniforms, medical scrubs, security attire, and industrial workwear. Fast delivery across Saudi Arabia with competitive pricing.',
  keywords: 'uniform quote, custom uniforms Saudi Arabia, professional workwear pricing, medical scrubs quote, security uniform cost',
  openGraph: {
    title: 'Request a Quote | Professional Uniforms | UNEOM',
    description: 'Get competitive pricing for professional uniforms and workwear. Custom solutions for healthcare, corporate, security, and industrial sectors.',
    url: 'https://uneom.com/quote/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og/quote-page.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Quote Request'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Quote | Professional Uniforms | UNEOM',
    description: 'Get competitive pricing for professional uniforms and workwear across Saudi Arabia.',
    images: ['https://uneom.com/images/og/quote-page.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/quote/',
    languages: {
      'ar-SA': 'https://uneom.com/ar/quote/',
      'en-US': 'https://uneom.com/quote/'
    }
  }
}

const benefits = [
  {
    icon: CheckCircleIcon,
    title: 'Competitive Pricing',
    description: 'Best rates for bulk orders and long-term contracts'
  },
  {
    icon: ClockIcon,
    title: 'Fast Response',
    description: 'Quote delivered within 24 hours'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Guarantee',
    description: 'ISO certified materials and manufacturing'
  },
  {
    icon: TruckIcon,
    title: 'Free Delivery',
    description: 'Complimentary delivery across Saudi Arabia'
  }
]

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request Your Custom Quote
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Get competitive pricing for professional uniforms tailored to your business needs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
                  <p className="text-xs text-blue-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tell Us About Your Requirements
                  </h2>
                  <QuoteForm />
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Why Choose UNEOM?
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>15+ years of experience in professional uniforms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>ISO 9001:2015 certified manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom design and branding services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Nationwide delivery across Saudi Arabia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dedicated account management</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p>+966 11 234 5678</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p>quotes@uneom.com</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p>Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-blue-50">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    Need Help?
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Our uniform specialists are ready to assist you with your requirements.
                  </p>
                  <a
                    href="/contact/"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Contact Our Team
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized uniform solutions for various sectors across Saudi Arabia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Healthcare', href: '/industries/healthcare/', icon: '🏥' },
              { name: 'Corporate', href: '/industries/corporate/', icon: '🏢' },
              { name: 'Security', href: '/industries/security/', icon: '🛡️' },
              { name: 'Manufacturing', href: '/industries/manufacturing/', icon: '🏭' },
              { name: 'Education', href: '/industries/education/', icon: '🎓' },
              { name: 'Hospitality', href: '/industries/hospitality/', icon: '🏨' },
              { name: 'Aviation', href: '/industries/aviation/', icon: '✈️' },
              { name: 'Retail', href: '/industries/retail-shops/', icon: '🛍️' }
            ].map((industry, index) => (
              <a
                key={index}
                href={industry.href}
                className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {industry.name}
                </h3>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}