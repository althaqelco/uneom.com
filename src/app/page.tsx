import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import TrustSignals from '@/components/sections/TrustSignals';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUneom from '@/components/sections/WhyChooseUneom';
import IndustryGrid from '@/components/sections/IndustryGrid';
import ServicesGrid from '@/components/sections/ServicesGrid';
import BlogPreview from '@/components/sections/BlogPreview';
import HomePageStructuredData from './StructuredData';
import UniformSupplierData from './UniformSupplierData';
import UniformFAQData from './UniformFAQData';
import BreadcrumbData from './BreadcrumbData';
import FeaturedProductsClientSection from './FeaturedProductsClientSection';
import SEO from '@/components/SEO';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';
import { Metadata } from 'next';

// Import metadata
import { metadata } from './metadata';

// Export metadata for Next.js to use
export { metadata };

export default function HomePage() {
  const locale = 'en';
  
  // Featured Industries defined directly in the server component instead of importing from client component
  const featuredIndustries = [
    {
      id: "healthcare",
      title: "UNEOM | Leading Uniform Manufacturer in Saudi Arabia",
      description: "High-quality medical uniforms designed for comfort and functionality in Saudi healthcare settings. Compliant with local regulations and suitable for the Kingdom's climate.",
      image: "/images/industries/healthcare.jpg",
      link: "/industries/healthcare",
      imageGallery: [
        "/images/industries/aviation.jpg",
        "/images/industries/hospitality.jpg",
        "/images/industries/corporate/corporate-square.jpg"
      ]
    }
  ];
  
  // Shop Categories (for the shop section)
  const shopCategories = [
    {
      id: 'medical-scrubs',
      title: 'Healthcare Uniforms',
      description: 'High-quality medical uniforms and scrubs designed for healthcare professionals in Saudi Arabia.',
      image: '/images/products/scrubs-set.jpg',
      link: '/shop/medical-scrubs'
    },
    {
      id: 'aviation-uniforms',
      title: 'Aviation Uniforms',
      description: 'Professional airline uniforms for aviation personnel across Saudi Arabia\'s major cities.',
      image: '/images/products/airline-uniform.jpg',
      link: '/shop/aviation-uniforms'
    },
    {
      id: 'hospitality-attire',
      title: 'Hospitality Uniforms',
      description: 'Premium hotel and restaurant uniforms for hospitality teams in Riyadh, Jeddah, and Dammam.',
      image: '/images/products/hotel-uniform.jpg',
      link: '/shop/hospitality-attire'
    },
    {
      id: 'industrial-uniforms',
      title: 'Industrial Uniforms',
      description: 'Durable industrial uniforms and workwear for factories and companies throughout Saudi Arabia.',
      image: '/images/products/industrial-coverall.jpg',
      link: '/shop/industrial-uniforms'
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      content: "UNEOM's corporate uniforms have transformed our company's professional image across all our Riyadh offices. The quality and attention to detail are exceptional.",
      author: "Ahmed Al-Ghamdi",
      position: "CEO",
      company: "Saudi Tech Solutions",
      image: "/images/clients/modern-arabic-businessman-SBI-300984397.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "The durability of UNEOM's industrial uniforms is exceptional. Our factory workers in Dammam operate in demanding conditions, and these uniforms withstand daily wear while keeping our team comfortable.",
      author: "Khalid Ibrahim",
      position: "Operations Manager",
      company: "Saudi Manufacturing Company",
      image: "/images/clients/portrait-of-an-arab-man-sheikh-SBI-300981247.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "The airline crew uniforms designed by UNEOM perfectly balance professional appearance with comfort for our Jeddah-based staff. Our team loves wearing them and our passengers notice the difference.",
      author: "Sarah Al-Otaibi",
      position: "Cabin Services Director",
      company: "Royal Arabian Airlines",
      image: "/images/clients/smiling-attractive-stewardess-getting-ready-to-fli-2024-10-18-12-57-27-utc.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "For our luxury hotel chain across Saudi Arabia, we required staff uniforms that embody our commitment to sophistication and Arabian hospitality. UNEOM created bespoke designs that perfectly balance elegance with practicality.",
      author: "Nora Al-Zahrani",
      position: "Hospitality Manager",
      company: "Royal Oasis Hotels",
      image: "/images/clients/young-muslim-arab-woman-wearing-hijab-veiling-face-looking-at-camera-outdoors-during-s-SBI-351149151.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "As a retail brand with stores across Riyadh, Jeddah and Dammam, consistency in staff uniform appearance is crucial. UNEOM delivered high-quality uniforms with excellent branding integration.",
      author: "Layla Mahmoud",
      position: "Retail Manager",
      company: "AlMajed Department Stores",
      image: "/images/clients/adult-beautiful-muslim-woman-with-hijab-on-head-smiling-for-camera-in-room-SBI-351089408.jpg",
      logo: "/images/logos/placeholder-logo.png"
    }
  ];
  
  // Blog posts
  const blogPosts = [
    {
      slug: 'sustainable-uniforms-2024-trends',
      title: 'Sustainable Uniform Trends: Saudi Arabia\'s 2024 Market Focus',
      excerpt: 'Discover the latest sustainable uniform technologies and design approaches shaping the future of professional uniforms in Saudi Arabia.',
      date: '2024-03-15',
      image: '/images/blog/sustainable-uniforms.jpg',
      author: 'UNEOM Editorial Team',
      category: 'Uniform Trends'
    },
    {
      slug: 'hospital-uniform-safety-standards',
      title: 'New Healthcare Uniform Standards in Saudi Arabian Hospitals',
      excerpt: 'An overview of recently updated healthcare uniform regulations for hospitals in Riyadh, Jeddah, and across the Kingdom.',
      date: '2024-02-28',
      image: '/images/blog/healthcare-uniforms.jpg',
      author: 'UNEOM Healthcare Division',
      category: 'Healthcare Uniforms'
    },
    {
      slug: 'airline-uniform-design-cultural-identity',
      title: 'Saudi Airline Uniform Design: Tradition Meets Modern Function',
      excerpt: 'How UNEOM creates airline uniforms that represent Saudi cultural heritage while meeting international standards.',
      date: '2024-01-22',
      image: '/images/blog/aviation-uniforms.jpg',
      author: 'UNEOM Aviation Specialists',
      category: 'Aviation Uniforms'
    }
  ];
  
  // Define custom products with the new images for the shop section
  const featuredProducts = [
    {
      id: "industrial-coverall-pro",
      category: "industrial-uniforms",
      categoryName: "Industrial Uniforms",
      name: "Premium Industrial Uniform Coverall",
      shortDescription: "Durable industrial uniform coveralls suitable for factory environments across Saudi Arabia's industrial cities",
      price: "SAR 289",
      minOrder: 15,
      image: "/images/new-products/heavy_duty_industrial_coverall.png",
      colors: [
        { name: "Black/Gray", value: "#333333" },
        { name: "Navy/Royal", value: "#1a3a5f" },
        { name: "Brown/Khaki", value: "#5d4037" }
      ],
      href: "/shop/industrial-uniforms/industrial-coverall-pro"
    },
    {
      id: "luxury-hotel-uniform",
      category: "hospitality-attire",
      categoryName: "Hospitality Uniforms",
      name: "Luxury Hotel Staff Uniform",
      shortDescription: "Elegant hotel staff uniforms for premium hospitality establishments",
      price: "SAR 349",
      minOrder: 10,
      image: "/images/new-products/luxury_hotel_staff_uniform.png",
      colors: [
        { name: "Black", value: "#000000" },
        { name: "Burgundy", value: "#800020" },
        { name: "Navy", value: "#000080" }
      ],
      href: "/shop/hospitality-attire/luxury-hotel-uniform"
    },
    {
      id: "airline-crew-uniform",
      category: "aviation-uniforms",
      categoryName: "Aviation Uniforms",
      name: "Airline Crew Uniform",
      shortDescription: "Professional airline crew uniforms meeting international aviation standards",
      price: "SAR 459",
      minOrder: 8,
      image: "/images/new-products/airline_crew_uniform.png",
      colors: [
        { name: "Navy", value: "#1c2841" },
        { name: "Black", value: "#000000" },
        { name: "Royal Blue", value: "#4169E1" }
      ],
      href: "/shop/aviation-uniforms/airline-crew-uniform"
    },
    {
      id: "premium-medical-scrubs",
      category: "medical-scrubs",
      categoryName: "Medical Scrubs",
      name: "Premium Medical Scrubs",
      shortDescription: "High-quality medical scrubs for healthcare professionals",
      price: "SAR 199",
      minOrder: 12,
      image: "/images/new-products/premiummedicalscrubs.png",
      colors: [
        { name: "Sky Blue", value: "#87CEEB" },
        { name: "Surgical Green", value: "#168269" },
        { name: "Navy", value: "#000080" },
        { name: "Gray", value: "#808080" }
      ],
      href: "/shop/medical-scrubs/premium-medical-scrubs"
    }
  ];

  // SEO title and description for the homepage
  const seoTitle = "Premium Uniform Manufacturing & Supply in Saudi Arabia | UNEOM";
  const seoDescription = "UNEOM is Saudi Arabia's leading provider of premium uniforms for healthcare, corporate, aviation, hospitality, and industrial sectors. Custom-designed professional workwear for Riyadh, Jeddah, and all Kingdom regions.";

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025
        title={seoTitle}
        description={seoDescription}
        keywords={[
          'uniform Saudi Arabia',
          'uniform manufacturer',
          'corporate uniforms',
          'medical uniforms',
          'hospitality uniforms',
          'industrial uniforms',
          'custom uniforms Saudi',
          'professional workwear',
          'uniform supplier Riyadh',
          'uniform Jeddah',
          'uniform Dammam'
        ]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Government approved supplier',
          'Trusted by 500+ companies',
          'Saudi Arabia market leader'
        ]}
        canonicalUrl="https://uneom.com/"
      />
      
      {/* Legacy SEO component for compatibility */}
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl="https://uneom.com/"
        ogImage="/images/uneom-og-image.jpg"
        ogType="website"
      />
    
      {/* Schema Markup for SEO */}
      <HomePageStructuredData />
      <UniformSupplierData />
      <UniformFAQData />
      <BreadcrumbData />
      
      {/* Hero Section */}
      <HeroSection locale={locale} />

      {/* Explicit H1 tag that will be present in the HTML */}
      <h1 className="sr-only">Premium Uniform Manufacturing & Supply in Saudi Arabia | UNEOM</h1>

      {/* Enhanced Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
              Your Trusted Uniform Partner in Saudi Arabia
            </h2>
            <p className="text-lg text-neutral-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              From Riyadh's corporate towers to Jeddah's healthcare facilities and Dammam's industrial hubs, UNEOM delivers premium, customized uniform solutions across Saudi Arabia. We blend quality craftsmanship with innovative designs to enhance your brand identity and ensure professional team appearance.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Saudi Arabia Uniform Provider Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
                Saudi Arabia's #1 Uniform Provider
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                Premium Uniforms for Every Saudi City
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                From Riyadh to Jeddah, Dammam to Mecca, UNEOM delivers high-quality professional uniforms tailored to Saudi Arabian businesses and organizations. Our uniform solutions combine durability, comfort and cultural awareness.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom uniform solutions for all Saudi cities</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Climate-appropriate uniform fabrics for Saudi weather</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Nationwide delivery of uniform orders</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Local uniform specialists in major Saudi cities</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium"
              >
                <span>Find Your Perfect Uniform Solution</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/uniform_saudi_arabia.jpg"
                  alt="UNEOM Premium Uniforms for Every Saudi City"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium mb-2 bg-primary-600/80 rounded-full px-3 py-1 inline-block">
                    Nationwide Uniform Supply
                  </p>
                  <h3 className="text-xl font-bold">
                    Serving Every Saudi Region
                  </h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-primary-600 font-bold">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-3">
                    <p className="text-xs text-neutral-500 font-medium">
                      Trusted by
                    </p>
                    <p className="text-neutral-800 font-bold">
                      500+ Saudi Companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Why Choose UNEOM Section */}
      <WhyChooseUneom locale={locale} />
      
      {/* Industry Categories */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">Uniform Solutions Across Key Industries</SectionHeading>
          <IndustryGrid items={featuredIndustries} locale={locale} />
          <div className="text-center mt-12">
            <Link href="/industries" className="text-primary-600 hover:text-primary-800 font-semibold transition-colors">
              Explore All Industries &rarr;
            </Link>
          </div>
        </Container>
      </section>
      
      {/* Featured Products Section - USE CLIENT COMPONENT */}
      <FeaturedProductsClientSection products={featuredProducts} />
      
      {/* Shop by Category Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">Shop Uniforms by Category</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {shopCategories.map((category) => (
              <Link 
                key={category.id} 
                href={category.link} 
                className="group block border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-800 mb-1 group-hover:text-primary-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop" className="text-primary-600 hover:text-primary-800 font-semibold transition-colors">
              Visit Full Uniform Shop &rarr;
            </Link>
          </div>
        </Container>
      </section>
      
      {/* Services Section */}
      <ServicesGrid locale={locale} />
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <Container>
          <SectionHeading className="text-center mb-12 text-white">Trusted by Leading Saudi Organizations</SectionHeading>
          <TestimonialCarousel locale={locale} testimonials={testimonials} />
        </Container>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <SectionHeading className="text-center mb-12">Latest Insights & Uniform News</SectionHeading>
          <BlogPreview locale={locale} posts={blogPosts} />
          <div className="text-center mt-12">
            <Link href="/blog" className="text-primary-600 hover:text-primary-800 font-semibold transition-colors">
              Read More on Our Blog &rarr;
            </Link>
          </div>
        </Container>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Ready to Elevate Your Brand with Premium Uniforms?</h2>
          <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
            Partner with UNEOM, Saudi Arabia's leading uniform supplier. Request a personalized consultation today to discuss your specific needs.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
          >
            Request a Free Consultation
          </Link>
        </Container>
      </section>
    </>
  );
}
