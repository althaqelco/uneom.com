import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Corporate Uniforms & Business Attire | Professional Office Wear | Uneom',
  description: 'Premium corporate uniforms and business attire for Saudi Arabian companies. Professional designs that enhance brand image, promote team unity, and ensure comfort in corporate environments.',
  keywords: 'corporate uniforms, business attire, office uniforms, executive suits, corporate wear, professional clothing, business suits Saudi Arabia, corporate dress code, office wear',
  openGraph: {
    title: 'Corporate Uniforms & Business Attire | Professional Office Wear | Uneom',
    description: 'Premium corporate uniforms and business attire for Saudi Arabian companies.',
    url: 'https://uneom.com/industries/corporate/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/industries/corporate/hero-corporate-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Uniforms by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/industries/corporate/',
    languages: {
      'en-SA': 'https://uneom.com/industries/corporate/',
      'ar-SA': 'https://uneom.com/ar/industries/corporate/',
      'x-default': 'https://uneom.com/industries/corporate/'
    }
  }
};

export const dynamic = 'force-static';

// Featured corporate products
const featuredProducts = [
  {
    id: '1',
    name: 'Executive Business Suits',
    image: '/images/products/corporate-suit-executive.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/executive-suits/',
    category: 'Executive Wear'
  },
  {
    id: '2',
    name: 'Professional Shirts & Blouses',
    image: '/images/products/corporate-shirts-blouses.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/business-shirts/',
    category: 'Business Shirts'
  },
  {
    id: '3',
    name: 'Corporate Polo Shirts',
    image: '/images/products/corporate-polo-shirts.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/casual-polo/',
    category: 'Casual Corporate'
  }
];

// Corporate benefits
const corporateBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Brand Consistency',
    description: 'Unified corporate image that reinforces your brand identity and values across all departments and locations.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Professional Image',
    description: 'Elevate your company\'s professional appearance and create positive first impressions with clients and partners.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Employee Satisfaction',
    description: 'Comfortable, well-fitted uniforms that boost employee confidence and satisfaction in the workplace.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: 'Cost Efficiency',
    description: 'Streamlined procurement process and bulk ordering advantages that reduce overall uniform costs.'
  }
];

// Corporate sectors
const corporateSectors = [
  {
    name: 'Banking & Finance',
    description: 'Professional attire that conveys trust, reliability, and expertise in financial services',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    features: ['Executive suits', 'Conservative styling', 'Premium fabrics', 'Professional appearance']
  },
  {
    name: 'Technology Companies',
    description: 'Modern corporate wear that balances professionalism with contemporary workplace culture',
    image: '/images/diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg',
    features: ['Smart casual options', 'Flexible dress codes', 'Comfortable fits', 'Modern designs']
  },
  {
    name: 'Government Offices',
    description: 'Formal corporate uniforms that reflect the dignity and authority of public service',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    features: ['Formal styling', 'Cultural appropriateness', 'Durable construction', 'Professional standards']
  }
];

export default function CorporateIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Corporate Uniforms & Business Attire | Professional Office Wear | Uneom"
        description="Premium corporate uniforms and business attire for Saudi Arabian companies. Professional designs that enhance brand image, promote team unity, and ensure comfort."
        canonicalUrl="https://uneom.com/industries/corporate/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
            alt="Corporate Uniforms by Uneom"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Corporate', href: '/industries/corporate' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Uniforms & Business Attire</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional corporate uniforms designed to enhance your brand image and promote team unity. Perfect for businesses across Saudi Arabia seeking to establish a consistent, professional appearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Corporate Quote
              </Button>
              <Button 
                href="#featured-products"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                View Collection
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Introduction */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="Professional Corporate Attire">
                  Building Your Brand Through Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Your corporate uniform is more than just clothing—it's a powerful tool for brand building and team unity. Our corporate uniform collection combines professional aesthetics with practical functionality to create attire that represents your company's values and standards.
                </p>
                <p className="text-gray-600 mb-8">
                  From executive boardrooms to customer-facing roles, our uniforms are designed to make a lasting impression while ensuring comfort and confidence for your team.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Your Corporate Needs
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                  alt="Professional Corporate Attire"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose Uneom Corporate Uniforms" centered>
              Excellence in Corporate Branding
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {corporateBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="Our Corporate Collection" centered>
              Featured Corporate Uniforms
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                View All Corporate Products
              </Button>
            </div>
          </section>

          {/* Corporate Sectors */}
          <section className="mb-16">
            <SectionHeading subtitle="Industry-Specific Solutions" centered>
              Uniforms for Every Corporate Sector
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {corporateSectors.map((sector, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{sector.name}</h3>
                    <p className="text-gray-600 mb-4">{sector.description}</p>
                    <ul className="space-y-2">
                      {sector.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg"
                  alt="Custom Corporate Uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="Brand-Aligned Solutions">
                  Custom Corporate Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Every company has a unique culture and brand identity. Our customization services ensure your corporate uniforms perfectly align with your brand guidelines and company values.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom logo embroidery and branding
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Brand color coordination
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Department-specific variations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Executive and staff level distinctions
                  </li>
                </ul>
                <Button href="/services/custom-design/" variant="primary" size="lg">
                  Explore Customization
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Corporate Image?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join leading companies across Saudi Arabia who trust Uneom for their professional corporate uniform needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Corporate Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Brand Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}