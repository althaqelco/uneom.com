import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Import components (to be created)
const HeroSection = ({ title, subtitle, image }) => (
  <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white">
    <div className="absolute inset-0 opacity-30">
      <Image 
        src={image} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        priority 
      />
    </div>
    <div className="relative container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-primary-100">{subtitle}</p>
        <div className="mt-8">
          <Link href="/contact?industry=hospitality-hotels" legacyBehavior>
            <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-6 rounded-md text-lg transition duration-300 inline-block">
              Request Hotel Uniform Consultation
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
      <span className="text-primary-600 text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProductCard = ({ name, image, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-64">
      <Image 
        src={image} 
        alt={name} 
        layout="fill" 
        objectFit="cover" 
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} legacyBehavior>
        <a className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
          Learn More <span className="ml-1">→</span>
        </a>
      </Link>
    </div>
  </div>
);

const TestimonialCard = ({ text, author, position, company, logo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4">
      <Image src={logo} alt={company} width={120} height={40} objectFit="contain" />
    </div>
    <p className="text-gray-600 italic mb-4">"{text}"</p>
    <div>
      <p className="font-bold text-gray-800">{author}</p>
      <p className="text-gray-600">{position}, {company}</p>
    </div>
  </div>
);

export default function HotelsIndustryPage() {
  const router = useRouter();
  const { locale } = router;
  
  const hotelIndustryData = {
    title: "Premium Hotel Uniforms & Staff Attire in Saudi Arabia",
    subtitle: "Elevate your hotel's image with professional, comfortable uniforms designed for Saudi Arabia's hospitality standards",
    heroImage: "/images/industries/hospitality/hotel-staff.jpg",
    introduction: `
      In Saudi Arabia's competitive hospitality landscape, staff presentation is a critical component of your hotel's brand identity. 
      UNEOM provides premium, tailored uniform solutions for hotels across the Kingdom, from luxury international chains to boutique local establishments.
      
      Our hotel uniform collections combine professional elegance with practicality, designed specifically for the unique requirements of Saudi hospitality.
    `,
    benefits: [
      {
        icon: "✓",
        title: "Saudi-Compliant Designs",
        description: "All uniforms designed with respect for Saudi cultural standards and Islamic dress requirements where needed."
      },
      {
        icon: "✓",
        title: "Climate-Optimized Fabrics",
        description: "Breathable, comfortable materials suitable for Saudi Arabia's hot climate and air-conditioned indoor environments."
      },
      {
        icon: "✓",
        title: "Customized Branding",
        description: "Incorporate your hotel's colors, logos, and design elements for a cohesive brand identity across all staff."
      },
      {
        icon: "✓",
        title: "Departmental Coordination",
        description: "Coordinated designs across front desk, housekeeping, F&B, management, and other departments."
      }
    ],
    departments: [
      {
        name: "Front Office & Reception",
        products: [
          {
            name: "Reception Staff Attire",
            image: "/images/industries/hospitality/reception-uniform.jpg",
            description: "Professional, branded uniforms for front desk staff, concierge, and guest relations.",
            link: "/shop/hospitality/reception-uniforms"
          },
          {
            name: "Bellhop & Porter Uniforms",
            image: "/images/industries/hospitality/bellhop-uniform.jpg",
            description: "Distinctive, practical uniforms for staff handling guest luggage and front-door services.",
            link: "/shop/hospitality/bellhop-uniforms"
          }
        ]
      },
      {
        name: "Food & Beverage",
        products: [
          {
            name: "Waitstaff Uniforms",
            image: "/images/industries/hospitality/waiter-uniform.jpg",
            description: "Elegant, practical attire for restaurant, café, and room service staff.",
            link: "/shop/hospitality/waitstaff-uniforms"
          },
          {
            name: "Chef & Kitchen Attire",
            image: "/images/industries/hospitality/chef-uniform.jpg",
            description: "Professional culinary uniforms meeting safety and hygiene standards.",
            link: "/shop/hospitality/chef-uniforms"
          }
        ]
      },
      {
        name: "Housekeeping & Maintenance",
        products: [
          {
            name: "Housekeeping Uniforms",
            image: "/images/industries/hospitality/housekeeping-uniform.jpg",
            description: "Practical, modest uniforms for housekeeping staff with optimal comfort for movement.",
            link: "/shop/hospitality/housekeeping-uniforms"
          },
          {
            name: "Maintenance Staff Attire",
            image: "/images/industries/hospitality/maintenance-uniform.jpg",
            description: "Durable workwear for maintenance and engineering staff with practical features.",
            link: "/shop/hospitality/maintenance-uniforms"
          }
        ]
      }
    ],
    fabricTechnologies: [
      {
        name: "StainGuard™ Protection",
        description: "Specialized fabric treatment that repels liquids and prevents staining - ideal for food service and housekeeping uniforms."
      },
      {
        name: "ComfortWeave™ Technology",
        description: "Advanced fabric construction providing comfort during long shifts with enhanced breathability and stretch."
      },
      {
        name: "DuraBrand™ Colors",
        description: "Color-fast technology ensuring your branded colors remain vibrant through numerous industrial washes."
      }
    ],
    testimonials: [
      {
        text: "UNEOM has been our exclusive uniform provider for over 5 years. Their attention to detail and understanding of our brand has resulted in staff uniforms that perfectly represent our luxury positioning in the Saudi market.",
        author: "Mohammed Al-Harbi",
        position: "Executive Manager",
        company: "Royal Oasis Hotel Riyadh",
        logo: "/images/clients/royal-oasis-logo.png"
      },
      {
        text: "The quality and durability of UNEOM's hotel uniforms have significantly reduced our replacement cycles, resulting in better cost efficiency. Their uniform program management takes the burden off our HR team.",
        author: "Sarah Johnson",
        position: "HR Director",
        company: "International Grand Hotel Jeddah",
        logo: "/images/clients/grand-hotel-logo.png"
      }
    ],
    ctaTitle: "Elevate Your Hotel Staff Presentation",
    ctaDescription: "Contact our hospitality uniform specialists for a consultation tailored to your hotel's specific requirements.",
    ctaButtonText: "Request Hotel Uniform Consultation",
    ctaButtonUrl: "/contact?industry=hospitality-hotels"
  };

  return (
    <>
      <Head>
        <title>{hotelIndustryData.title} | UNEOM</title>
        <meta 
          name="description" 
          content="Professional hotel uniforms designed for Saudi Arabian hospitality standards. Custom uniforms for front desk, housekeeping, F&B, and all hotel departments." 
        />
        <meta 
          property="og:title" 
          content={hotelIndustryData.title} 
        />
        <meta 
          property="og:description" 
          content="Professional hotel uniforms designed for Saudi Arabian hospitality standards. Custom uniforms for all hotel departments." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/hotel-uniforms-saudi.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/industries/hospitality/hotels" 
        />
        {locale === 'ar' && (
          <link 
            rel="alternate" 
            hreflang="en" 
            href="https://uneom.com/industries/hospitality/hotels" 
          />
        )}
        {locale === 'en' && (
          <link 
            rel="alternate" 
            hreflang="ar" 
            href="https://uneom.com/ar/industries/hospitality/hotels" 
          />
        )}
      </Head>

      <main>
        {/* Hero Section */}
        <HeroSection 
          title={hotelIndustryData.title}
          subtitle={hotelIndustryData.subtitle}
          image={hotelIndustryData.heroImage}
        />
        
        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Hotel Uniform Excellence in Saudi Arabia</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>{hotelIndustryData.introduction}</p>
                <p className="mt-4">
                  With years of experience serving Saudi Arabia's top hotels, we understand the unique requirements of the hospitality industry in the Kingdom, from international luxury chains to local boutique establishments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">The UNEOM Hotel Uniform Advantage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hotelIndustryData.benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Products by Department */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Hotel Uniforms by Department</h2>
            
            {hotelIndustryData.departments.map((department, deptIndex) => (
              <div key={deptIndex} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-primary-500 pl-4">{department.name}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {department.products.map((product, prodIndex) => (
                    <ProductCard 
                      key={prodIndex}
                      name={product.name}
                      image={product.image}
                      description={product.description}
                      link={product.link}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fabric Technology */}
        <section className="py-16 bg-primary-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Advanced Fabric Technologies</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {hotelIndustryData.fabricTechnologies.map((tech, index) => (
                <div key={index} className="bg-primary-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                  <p className="text-primary-100">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Trusted by Saudi Arabia's Top Hotels</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {hotelIndustryData.testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  text={testimonial.text}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  logo={testimonial.logo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{hotelIndustryData.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{hotelIndustryData.ctaDescription}</p>
            <Link href={hotelIndustryData.ctaButtonUrl} legacyBehavior>
              <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block">
                {hotelIndustryData.ctaButtonText}
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 