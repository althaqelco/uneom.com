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
  title: 'Hospitality Uniforms & Hotel Staff Attire | Professional Service Uniforms | Uneom',
  description: 'Premium hospitality uniforms for hotels, restaurants, and service industries in Saudi Arabia. Professional designs that enhance brand image while ensuring comfort and durability for hospitality staff.',
  keywords: 'hospitality uniforms, hotel uniforms, restaurant uniforms, chef uniforms, housekeeping uniforms, concierge uniforms, hospitality attire Saudi Arabia, service industry uniforms',
  openGraph: {
    title: 'Hospitality Uniforms & Hotel Staff Attire | Professional Service Uniforms | Uneom',
    description: 'Premium hospitality uniforms for hotels, restaurants, and service industries in Saudi Arabia.',
    url: 'https://uneom.com/industries/hospitality/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/Luxury_Hotel Staff_Uniform.png',
        width: 1200,
        height: 630,
        alt: 'Hospitality Uniforms by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/industries/hospitality/',
    languages: {
      'en-SA': 'https://uneom.com/industries/hospitality/',
      'ar-SA': 'https://uneom.com/ar/industries/hospitality/',
      'x-default': 'https://uneom.com/industries/hospitality/'
    }
  }
};

export const dynamic = 'force-static';

// Featured hospitality products
const featuredProducts = [
  {
    id: '1',
    name: 'Luxury Hotel Staff Uniform',
    image: '/images/Luxury_Hotel Staff_Uniform.png',
    price: 'Request Quote',
    href: '/shop/hospitality-attire/luxury-hotel-uniform/',
    category: 'Hotel Uniforms'
  },
  {
    id: '2',
    name: 'Professional Chef Uniform',
    image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
    price: 'Request Quote',
    href: '/shop/hospitality-attire/chef-uniform/',
    category: 'Chef Uniforms'
  },
  {
    id: '3',
    name: 'Concierge Service Uniform',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg',
    price: 'Request Quote',
    href: '/shop/hospitality-attire/concierge-uniform/',
    category: 'Service Uniforms'
  }
];

// Hospitality benefits
const hospitalityBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Brand Enhancement',
    description: 'Professional uniforms that elevate your brand image and create memorable guest experiences in the hospitality industry.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'All-Day Comfort',
    description: 'Ergonomic designs and breathable fabrics ensure staff comfort during long shifts in demanding hospitality environments.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Easy Maintenance',
    description: 'Stain-resistant and easy-care fabrics that maintain professional appearance with minimal maintenance requirements.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Team Unity',
    description: 'Cohesive uniform designs that promote team identity and professional standards across all hospitality departments.'
  }
];

// Hospitality sectors
const hospitalitySectors = [
  {
    name: 'Luxury Hotels',
    description: 'Elegant uniforms that reflect the sophistication and service excellence of luxury hospitality',
    image: '/images/hospitality/hospitality_uniform_hotel.jpg',
    features: ['Premium fabrics', 'Custom embroidery', 'Elegant designs', 'Comfort fit']
  },
  {
    name: 'Restaurants & Dining',
    description: 'Professional chef and service uniforms designed for kitchen and dining room environments',
    image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
    features: ['Heat resistant', 'Stain protection', 'Functional pockets', 'Easy cleaning']
  },
  {
    name: 'Resort & Spa',
    description: 'Comfortable and stylish uniforms for resort staff and spa professionals',
    image: '/images/hospitality/hospitality_uniform_formal.jpg',
    features: ['Breathable fabrics', 'Moisture wicking', 'Flexible designs', 'Professional appearance']
  }
];

export default function HospitalityIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Hospitality Uniforms & Hotel Staff Attire | Professional Service Uniforms | Uneom"
        description="Premium hospitality uniforms for hotels, restaurants, and service industries in Saudi Arabia. Professional designs that enhance brand image while ensuring comfort and durability."
        canonicalUrl="https://uneom.com/industries/hospitality/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/Luxury_Hotel Staff_Uniform.png"
            alt="Hospitality Uniforms by Uneom"
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
              { label: 'Hospitality', href: '/industries/hospitality' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hospitality Uniforms & Hotel Staff Attire</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional hospitality uniforms designed to enhance your brand image while ensuring staff comfort and durability. Perfect for hotels, restaurants, and service industries across Saudi Arabia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Hospitality Quote
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
                <SectionHeading subtitle="Professional Hospitality Attire">
                  Elevating Service Excellence
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  In the hospitality industry, first impressions matter. Our hospitality uniform collection combines professional aesthetics with practical functionality to create attire that enhances your brand image while ensuring staff comfort throughout their service.
                </p>
                <p className="text-gray-600 mb-8">
                  From luxury hotel lobbies to bustling restaurant kitchens, our uniforms are designed to meet the diverse needs of Saudi Arabia's thriving hospitality sector.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Your Brand Vision
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hospitality/hospitality_uniform_hotel.jpg"
                  alt="Professional Hotel Uniforms"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose Uneom Hospitality Uniforms" centered>
              Excellence in Every Detail
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {hospitalityBenefits.map((benefit, index) => (
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
            <SectionHeading subtitle="Our Hospitality Collection" centered>
              Featured Hospitality Uniforms
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/hospitality-attire/" variant="primary" size="lg">
                View All Hospitality Products
              </Button>
            </div>
          </section>

          {/* Hospitality Sectors */}
          <section className="mb-16">
            <SectionHeading subtitle="Specialized Solutions" centered>
              Uniforms for Every Hospitality Sector
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {hospitalitySectors.map((sector, index) => (
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
                  src="/images/hospitality/hospitality_uniform_custom_logo.jpg"
                  alt="Custom Hospitality Uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="Brand-Aligned Solutions">
                  Custom Hospitality Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Your hospitality uniforms should reflect your brand's unique identity. Our customization services ensure every detail aligns with your brand standards and operational requirements.
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
                    Department-specific color schemes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Functional design modifications
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium fabric selections
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
            <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Hospitality Brand?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join leading hotels, restaurants, and service establishments across Saudi Arabia who trust Uneom for their professional hospitality uniforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Hospitality Quote
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