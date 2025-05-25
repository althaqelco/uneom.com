'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredPolos = [
  {
    id: '1',
    name: 'Premium Corporate Polo Shirt',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/casual-polo/premium-corporate/',
    category: 'Premium',
    isNew: true
  },
  {
    id: '2',
    name: 'Classic Business Polo',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/casual-polo/classic-business/',
    category: 'Classic',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Performance Polo Shirt',
    image: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/casual-polo/performance/',
    category: 'Performance'
  }
];

export default function CasualPoloPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Corporate Casual Polo Shirts | Business Casual Attire | Uneom"
        description="Premium corporate polo shirts for business casual environments. Professional polo shirts designed for modern workplaces and corporate teams in Saudi Arabia."
        canonicalUrl="https://uneom.com/shop/corporate/casual-polo/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg"
            alt="Corporate Casual Polo Shirts"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Casual Polo Shirts</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Premium corporate polo shirts designed for business casual environments. Combining professional appearance with comfort and versatility for the modern workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Polo Quote
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
                  Professional Comfort Redefined
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our corporate polo shirt collection bridges the gap between formal business attire and casual comfort. Each polo is designed to maintain professional standards while providing the flexibility and comfort needed in today's dynamic work environment.
                </p>
                <p className="text-gray-600 mb-8">
                  Perfect for business casual offices, team events, and client meetings where a relaxed yet professional appearance is desired. Our polos ensure you look polished while feeling comfortable throughout your workday.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Polo Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Business Casual Professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Polos */}
          <section id="featured-polos" className="mb-16">
            <SectionHeading subtitle="Corporate Polo Collection" centered>
              Business Casual Excellence
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredPolos.map((polo) => (
                <ProductCard key={polo.id} product={polo} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                View All Corporate Attire
              </Button>
            </div>
          </section>

          {/* Polo Features */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Corporate Polo Features" centered>
              Professional Comfort Technology
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Moisture Wicking</h3>
                <p className="text-gray-600 text-sm">Advanced fabric technology keeps you cool and dry</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Professional Fit</h3>
                <p className="text-gray-600 text-sm">Tailored cut that maintains professional silhouette</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Materials</h3>
                <p className="text-gray-600 text-sm">High-quality cotton blends for durability and comfort</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Branding</h3>
                <p className="text-gray-600 text-sm">Company logo embroidery and customization options</p>
              </div>
            </div>
          </section>

          {/* Business Casual Benefits */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                  alt="Business Casual Benefits"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="Business Casual Benefits">
                  Modern Workplace Advantages
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Corporate polo shirts offer the perfect balance between professionalism and comfort, making them ideal for today's flexible work environments.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Versatile for various business settings
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comfortable for all-day wear
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Easy care and maintenance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Cost-effective professional wardrobe solution
                  </li>
                </ul>
                <Button href="/services/custom-design/" variant="primary" size="lg">
                  Customize Corporate Polos
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Embrace Business Casual Excellence?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Upgrade your corporate wardrobe with premium polo shirts that combine professional appearance with modern comfort for today's dynamic workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Corporate Polo Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Team Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}