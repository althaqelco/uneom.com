'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredShirts = [
  {
    id: '1',
    name: 'Premium Business Dress Shirt',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/business-shirts/premium-dress/',
    category: 'Dress Shirts',
    isNew: true
  },
  {
    id: '2',
    name: 'Classic Business Shirt',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/business-shirts/classic/',
    category: 'Classic',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Modern Fit Business Shirt',
    image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
    price: 'Request Quote',
    href: '/shop/corporate/business-shirts/modern-fit/',
    category: 'Modern Fit'
  }
];

export default function BusinessShirtsPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Business Shirts | Professional Corporate Dress Shirts | Uneom"
        description="Premium business shirts for corporate professionals. High-quality dress shirts designed for executives, managers, and business professionals in Saudi Arabia."
        canonicalUrl="https://uneom.com/shop/corporate/business-shirts/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="Business Shirts"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Shirts</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Premium business shirts designed for corporate professionals. Combining classic elegance with modern functionality for the contemporary business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Shirt Quote
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
                <SectionHeading subtitle="Professional Excellence">
                  Shirts That Define Success
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our business shirt collection is crafted for professionals who understand that attention to detail makes all the difference. Each shirt combines superior fabrics with expert tailoring for a polished professional appearance.
                </p>
                <p className="text-gray-600 mb-8">
                  From daily office wear to important presentations, our business shirts ensure you maintain a crisp, professional image that reflects your commitment to excellence.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Shirt Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Business Professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Shirts */}
          <section id="featured-shirts" className="mb-16">
            <SectionHeading subtitle="Business Shirt Collection" centered>
              Professional Corporate Attire
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredShirts.map((shirt) => (
                <ProductCard key={shirt.id} product={shirt} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/corporate/" variant="primary" size="lg">
                View All Corporate Attire
              </Button>
            </div>
          </section>

          {/* Shirt Features */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Business Shirt Features" centered>
              Crafted for Professional Excellence
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Cotton</h3>
                <p className="text-gray-600 text-sm">High-quality cotton fabrics for comfort and durability</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Wrinkle Resistant</h3>
                <p className="text-gray-600 text-sm">Advanced fabric treatment for all-day crisp appearance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comfort Fit</h3>
                <p className="text-gray-600 text-sm">Tailored for comfort and professional silhouette</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h2m-2 4h2m-2-8h2m-2-4h2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy Care</h3>
                <p className="text-gray-600 text-sm">Machine washable with minimal ironing required</p>
              </div>
            </div>
          </section>

          {/* Shirt Styles */}
          <section className="mb-16">
            <SectionHeading subtitle="Available Styles" centered>
              Professional Options for Every Occasion
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Dress Shirts</h3>
                <p className="text-gray-600 mb-4">Formal dress shirts for executive meetings and formal occasions.</p>
                <Button href="/shop/corporate/business-shirts/dress/" variant="outline" size="sm">
                  View Dress Shirts
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Business Casual</h3>
                <p className="text-gray-600 mb-4">Versatile shirts for daily office wear and business casual environments.</p>
                <Button href="/shop/corporate/business-shirts/casual/" variant="outline" size="sm">
                  View Casual Shirts
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Shirts</h3>
                <p className="text-gray-600 mb-4">Moisture-wicking shirts for active professionals and warm climates.</p>
                <Button href="/shop/corporate/business-shirts/performance/" variant="outline" size="sm">
                  View Performance Shirts
                </Button>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Professional Wardrobe?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Invest in premium business shirts that reflect your professionalism and attention to detail. Make a lasting impression with every interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Business Shirt Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Fitting Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}