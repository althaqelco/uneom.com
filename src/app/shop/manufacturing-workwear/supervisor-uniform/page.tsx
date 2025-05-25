'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredUniforms = [
  {
    id: '1',
    name: 'Executive Supervisor Uniform',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/supervisor-uniform/executive/',
    category: 'Executive',
    isNew: true
  },
  {
    id: '2',
    name: 'Floor Supervisor Uniform',
    image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/supervisor-uniform/floor-supervisor/',
    category: 'Floor Supervisor',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Safety Supervisor Uniform',
    image: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
    price: 'Request Quote',
    href: '/shop/manufacturing-workwear/supervisor-uniform/safety-supervisor/',
    category: 'Safety Supervisor'
  }
];

export default function SupervisorUniformPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Supervisor Uniforms | Manufacturing Management Attire | Uneom"
        description="Professional supervisor uniforms for manufacturing management. Distinguished attire that combines authority, safety, and functionality for industrial supervisors and managers."
        canonicalUrl="https://uneom.com/shop/manufacturing-workwear/supervisor-uniform/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="Supervisor Uniforms"
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
              { label: 'Manufacturing Workwear', href: '/shop/manufacturing-workwear' },
              { label: 'Supervisor Uniform', href: '/shop/manufacturing-workwear/supervisor-uniform' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Supervisor Uniforms</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Distinguished uniforms for manufacturing supervisors and managers. Professional attire that commands respect while maintaining safety standards and operational functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Supervisor Quote
              </Button>
              <Button 
                href="#featured-uniforms"
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
                <SectionHeading subtitle="Leadership Excellence">
                  Uniforms That Command Respect
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Our supervisor uniform collection is designed to distinguish management personnel while maintaining the safety and functionality required in manufacturing environments. Each uniform reflects authority and professionalism.
                </p>
                <p className="text-gray-600 mb-8">
                  From floor supervisors to executive management, our uniforms provide the perfect balance of professional appearance, safety compliance, and practical functionality for industrial leadership roles.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Supervisor Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                  alt="Manufacturing Supervisor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Uniforms */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="Supervisor Uniform Collection" centered>
              Professional Management Attire
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/manufacturing-workwear/" variant="primary" size="lg">
                View All Manufacturing Workwear
              </Button>
            </div>
          </section>

          {/* Leadership Benefits */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="Leadership Benefits" centered>
              Authority Through Professional Appearance
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Clear Authority</h3>
                <p className="text-gray-600">Distinguished designs that clearly identify supervisory personnel and establish chain of command.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety Compliance</h3>
                <p className="text-gray-600">Maintains all safety standards while providing professional management appearance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Image</h3>
                <p className="text-gray-600">Enhances company image and demonstrates commitment to quality and professionalism.</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Distinguish Your Management Team?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Equip your supervisors and managers with professional uniforms that command respect while maintaining safety and functionality in manufacturing environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Supervisor Uniform Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Management Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}