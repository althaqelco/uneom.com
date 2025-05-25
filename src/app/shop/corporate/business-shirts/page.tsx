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
  title: 'Business Shirts & Professional Blouses | Corporate Dress Shirts | Uneom',
  description: 'Premium business shirts and professional blouses for corporate professionals in Saudi Arabia. High-quality fabrics, professional styling, and comfortable fits for the modern workplace.',
  keywords: 'business shirts, dress shirts, professional blouses, corporate shirts, office shirts, business attire, professional clothing Saudi Arabia, work shirts',
  openGraph: {
    title: 'Business Shirts & Professional Blouses | Corporate Dress Shirts | Uneom',
    description: 'Premium business shirts and professional blouses for corporate professionals in Saudi Arabia.',
    url: 'https://uneom.com/shop/corporate/business-shirts/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/products/corporate-shirts-blouses.jpg',
        width: 1200,
        height: 630,
        alt: 'Business Shirts by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/corporate/business-shirts/',
    languages: {
      'en-SA': 'https://uneom.com/shop/corporate/business-shirts/',
      'ar-SA': 'https://uneom.com/ar/shop/corporate/business-shirts/',
      'x-default': 'https://uneom.com/shop/corporate/business-shirts/'
    }
  }
};

export const dynamic = 'force-static';

// Featured business shirts
const featuredShirts = [
  {
    id: '1',
    name: 'Classic White Dress Shirt',
    image: '/images/products/corporate-shirts-blouses.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/business-shirts/classic-white/',
    category: 'Dress Shirts',
    isNew: true
  },
  {
    id: '2',
    name: 'Professional Blue Shirt',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/business-shirts/professional-blue/',
    category: 'Business Shirts',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Executive Striped Shirt',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/business-shirts/executive-striped/',
    category: 'Executive Shirts'
  }
];

// Shirt features
const shirtFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Premium Cotton',
    description: 'High-quality cotton fabrics that are breathable, comfortable, and maintain their crisp appearance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Wrinkle Resistant',
    description: 'Advanced fabric treatments that reduce wrinkles and maintain professional appearance all day.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h2m-2 4h2m-2-8h2m-2-4h2" />
      </svg>
    ),
    title: 'Perfect Fit',
    description: 'Multiple size options and tailoring services to ensure the perfect fit for every body type.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Easy Care',
    description: 'Machine washable fabrics that maintain their quality and appearance with minimal maintenance.'
  }
];

// Shirt styles
const shirtStyles = [
  {
    name: 'Classic Dress Shirts',
    description: 'Timeless designs perfect for formal business environments and executive meetings',
    image: '/images/products/corporate-shirts-blouses.jpg',
    features: ['French cuffs', 'Spread collar', 'Tailored fit', 'Premium cotton']
  },
  {
    name: 'Modern Business Shirts',
    description: 'Contemporary styling that balances professionalism with modern workplace comfort',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    features: ['Slim fit', 'Button cuffs', 'Point collar', 'Stretch fabric']
  },
  {
    name: 'Professional Blouses',
    description: 'Elegant blouses designed for professional women in corporate environments',
    image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
    features: ['Feminine cut', 'Professional styling', 'Quality fabrics', 'Versatile designs']
  }
];

export default function BusinessShirtsPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Business Shirts & Professional Blouses | Corporate Dress Shirts | Uneom"
        description="Premium business shirts and professional blouses for corporate professionals in Saudi Arabia. High-quality fabrics, professional styling, and comfortable fits."
        canonicalUrl="https://uneom.com/shop/corporate/business-shirts/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/products/corporate-shirts-blouses.jpg"
            alt="Business Shirts by Uneom"
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
              { label: 'Business Shirts', href: '/shop/corporate/business-shirts' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Shirts & Professional Blouses</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Premium business shirts and professional blouses designed for the modern workplace. Featuring high-quality fabrics, professional styling, and comfortable fits that maintain their appearance throughout your workday.
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
                href="#featured-shirts"
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
                <SectionHeading subtitle="Professional Business Attire">
                  Shirts That Define Professionalism
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our business shirt collection combines classic styling with modern functionality. Each shirt is crafted from premium fabrics and designed to provide comfort, durability, and a professional appearance that lasts throughout your demanding workday.
                </p>
                <p className="text-gray-600 mb-8">
                  From boardroom presentations to client meetings, our shirts ensure you maintain a polished, professional image while feeling comfortable and confident.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Your Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg"
                  alt="Professional Business Attire"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose Our Business Shirts" centered>
              Quality and Comfort Combined
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {shirtFeatures.map((feature, index) => (
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

          {/* Featured Shirts */}
          <section id="featured-shirts" className="mb-16">
            <SectionHeading subtitle="Our Business Shirt Collection" centered>
              Professional Dress Shirts
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredShirts.map((shirt) => (
                <ProductCard key={shirt.id} product={shirt} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                View All Corporate Wear
              </Button>
            </div>
          </section>

          {/* Shirt Styles */}
          <section className="mb-16">
            <SectionHeading subtitle="Professional Styles" centered>
              Shirts for Every Business Need
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {shirtStyles.map((style, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{style.name}</h3>
                    <p className="text-gray-600 mb-4">{style.description}</p>
                    <ul className="space-y-2">
                      {style.features.map((feature, featureIndex) => (
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
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Custom Business Shirts"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="Custom Tailoring">
                  Personalized Business Shirts
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Every professional has unique style preferences and fit requirements. Our custom tailoring service ensures your business shirts are perfectly fitted and styled to your specifications.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom measurements and fitting
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fabric and color selection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Collar and cuff styling options
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Monogramming and personalization
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
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Professional Wardrobe?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in premium business shirts that enhance your professional image and provide all-day comfort. Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Request Shirt Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}