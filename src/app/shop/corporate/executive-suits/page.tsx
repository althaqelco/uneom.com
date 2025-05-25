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
  title: 'Executive Suits | Premium Corporate Business Suits | Uneom',
  description: 'Premium executive suits and business attire for corporate professionals in Saudi Arabia. Tailored designs, luxury fabrics, and professional styling for executives and business leaders.',
  keywords: 'executive suits, business suits, corporate suits, premium suits, executive wear, business attire, professional suits Saudi Arabia, luxury business wear',
  openGraph: {
    title: 'Executive Suits | Premium Corporate Business Suits | Uneom',
    description: 'Premium executive suits and business attire for corporate professionals in Saudi Arabia.',
    url: 'https://uneom.com/shop/corporate/executive-suits/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/products/corporate-suit-executive.jpg',
        width: 1200,
        height: 630,
        alt: 'Executive Suits by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/corporate/executive-suits/',
    languages: {
      'en-SA': 'https://uneom.com/shop/corporate/executive-suits/',
      'ar-SA': 'https://uneom.com/ar/shop/corporate/executive-suits/',
      'x-default': 'https://uneom.com/shop/corporate/executive-suits/'
    }
  }
};

export const dynamic = 'force-static';

// Featured executive suits
const featuredSuits = [
  {
    id: '1',
    name: 'Premium Executive Suit - Navy',
    image: '/images/products/corporate-suit-executive.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/executive-suits/premium-navy/',
    category: 'Executive Suits',
    isNew: true
  },
  {
    id: '2',
    name: 'Classic Business Suit - Charcoal',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/executive-suits/classic-charcoal/',
    category: 'Executive Suits',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Modern Executive Suit - Black',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/executive-suits/modern-black/',
    category: 'Executive Suits'
  }
];

// Suit features
const suitFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Premium Fabrics',
    description: 'High-quality wool blends and luxury fabrics that maintain their shape and appearance over time.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h2m-2 4h2m-2-8h2m-2-4h2" />
      </svg>
    ),
    title: 'Tailored Fit',
    description: 'Expert tailoring and custom fitting services to ensure perfect fit and professional appearance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Executive Styling',
    description: 'Contemporary designs that reflect modern business aesthetics while maintaining classic elegance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Durability',
    description: 'Reinforced construction and quality materials ensure long-lasting wear and professional appearance.'
  }
];

export default function ExecutiveSuitsPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Executive Suits | Premium Corporate Business Suits | Uneom"
        description="Premium executive suits and business attire for corporate professionals in Saudi Arabia. Tailored designs, luxury fabrics, and professional styling."
        canonicalUrl="https://uneom.com/shop/corporate/executive-suits/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/products/corporate-suit-executive.jpg"
            alt="Executive Suits by Uneom"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              { label: 'Corporate', href: '/shop/corporate' },
              { label: 'Executive Suits', href: '/shop/corporate/executive-suits' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Executive Suits</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Premium executive suits designed for corporate leaders and business professionals. Featuring luxury fabrics, expert tailoring, and contemporary styling that commands respect and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Custom Quote
              </Button>
              <Button 
                href="#featured-suits"
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
                <SectionHeading subtitle="Premium Executive Wear">
                  Suits That Define Leadership
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our executive suit collection represents the pinnacle of corporate fashion. Each suit is meticulously crafted using premium fabrics and expert tailoring techniques to create attire that reflects the stature and professionalism of today's business leaders.
                </p>
                <p className="text-gray-600 mb-8">
                  From boardroom presentations to client meetings, our executive suits ensure you make a powerful impression while maintaining comfort throughout your demanding schedule.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Schedule Fitting Consultation
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                  alt="Executive in Premium Suit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose Our Executive Suits" centered>
              Uncompromising Quality and Style
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {suitFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Suits */}
          <section id="featured-suits" className="mb-16">
            <SectionHeading subtitle="Our Executive Collection" centered>
              Premium Business Suits
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredSuits.map((suit) => (
                <ProductCard key={suit.id} product={suit} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                View All Corporate Wear
              </Button>
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Custom Executive Suits"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="Bespoke Tailoring">
                  Custom Executive Suits
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Every executive has unique requirements and preferences. Our bespoke tailoring service ensures your suit is perfectly fitted and styled to your specifications.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personal fitting consultations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium fabric selection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom styling options
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Perfect fit guarantee
                  </li>
                </ul>
                <Button href="/services/custom-design/" variant="primary" size="lg">
                  Start Custom Order
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Executive Wardrobe?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in premium executive suits that reflect your leadership and professionalism. Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Request Executive Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Book Fitting Appointment
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}