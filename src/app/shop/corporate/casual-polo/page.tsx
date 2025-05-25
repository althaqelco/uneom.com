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
  title: 'Corporate Polo Shirts | Business Casual Polo Shirts | Uneom',
  description: 'Premium corporate polo shirts for business casual environments in Saudi Arabia. Professional styling, comfortable fabrics, and customizable designs for modern workplaces.',
  keywords: 'corporate polo shirts, business casual polo, office polo shirts, branded polo shirts, corporate casual wear, business polo Saudi Arabia, professional polo shirts',
  openGraph: {
    title: 'Corporate Polo Shirts | Business Casual Polo Shirts | Uneom',
    description: 'Premium corporate polo shirts for business casual environments in Saudi Arabia.',
    url: 'https://uneom.com/shop/corporate/casual-polo/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/products/corporate-polo-shirts.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Polo Shirts by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/corporate/casual-polo/',
    languages: {
      'en-SA': 'https://uneom.com/shop/corporate/casual-polo/',
      'ar-SA': 'https://uneom.com/ar/shop/corporate/casual-polo/',
      'x-default': 'https://uneom.com/shop/corporate/casual-polo/'
    }
  }
};

export const dynamic = 'force-static';

// Featured polo shirts
const featuredPolos = [
  {
    id: '1',
    name: 'Classic Corporate Polo - Navy',
    image: '/images/products/corporate-polo-shirts.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/casual-polo/classic-navy/',
    category: 'Corporate Polo',
    isNew: true
  },
  {
    id: '2',
    name: 'Premium Business Polo - White',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/casual-polo/premium-white/',
    category: 'Business Polo',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Executive Polo - Charcoal',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/casual-polo/executive-charcoal/',
    category: 'Executive Polo'
  }
];

export default function CasualPoloPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Corporate Polo Shirts | Business Casual Polo Shirts | Uneom"
        description="Premium corporate polo shirts for business casual environments in Saudi Arabia. Professional styling, comfortable fabrics, and customizable designs."
        canonicalUrl="https://uneom.com/shop/corporate/casual-polo/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/products/corporate-polo-shirts.jpg"
            alt="Corporate Polo Shirts by Uneom"
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
              { label: 'Casual Polo', href: '/shop/corporate/casual-polo' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Polo Shirts</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Premium corporate polo shirts designed for business casual environments. Combining professional styling with comfortable fabrics and customizable branding options for the modern workplace.
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
                href="#featured-polos"
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
                <SectionHeading subtitle="Business Casual Excellence">
                  Professional Polo Shirts for Modern Workplaces
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our corporate polo shirt collection bridges the gap between formal business attire and casual comfort. Perfect for business casual environments, team events, and companies embracing modern workplace culture.
                </p>
                <p className="text-gray-600 mb-8">
                  Each polo is crafted from premium fabrics with professional styling that maintains a polished appearance while providing the comfort and flexibility needed for today's dynamic work environments.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Your Brand Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                  alt="Professional in Corporate Polo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Polos */}
          <section id="featured-polos" className="mb-16">
            <SectionHeading subtitle="Our Corporate Polo Collection" centered>
              Business Casual Polo Shirts
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredPolos.map((polo) => (
                <ProductCard key={polo.id} product={polo} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                View All Corporate Wear
              </Button>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Brand Your Team?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create a unified, professional look with custom-branded corporate polo shirts. Perfect for modern workplaces and team events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Request Polo Quote
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