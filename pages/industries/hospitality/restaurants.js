import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Import components (to be created or reused)
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
          <Link href="/contact?industry=hospitality-restaurants" legacyBehavior>
            <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-6 rounded-md text-lg transition duration-300 inline-block">
              Request Restaurant Uniform Consultation
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
          Learn more <span className="ml-1">→</span>
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

export default function RestaurantsIndustryPage() {
  const router = useRouter();
  const { locale } = router;
  
  const restaurantIndustryData = {
    title: "Restaurant Uniforms & Staff Attire in Saudi Arabia",
    subtitle: "Elevate your dining establishment with professional, comfortable uniforms designed specifically for Saudi Arabia's restaurant standards",
    heroImage: "/images/industries/hospitality/restaurant-staff.jpg",
    introduction: `
      In Saudi Arabia's competitive dining landscape, staff appearance is a critical component of your restaurant's brand identity.
      UNEOM provides distinctive, customized uniform solutions for restaurants throughout the Kingdom, from international fine dining establishments to local specialty eateries.
      
      Our restaurant uniform collections blend professional elegance with practicality, specifically designed to meet the unique requirements of Saudi Arabia's hospitality sector.
    `,
    benefits: [
      {
        icon: "✓",
        title: "Saudi-Compliant Designs",
        description: "All uniforms are designed with respect for Saudi cultural standards and Islamic dress requirements where needed."
      },
      {
        icon: "✓",
        title: "Climate-Appropriate Fabrics",
        description: "Comfortable, breathable materials suitable for Saudi Arabia's hot climate and air-conditioned indoor environments."
      },
      {
        icon: "✓",
        title: "Brand-Customized Design",
        description: "Incorporate your restaurant's colors, logos, and design elements for a consistent identity across all staff."
      },
      {
        icon: "✓",
        title: "Stain-Resistant Technology",
        description: "Advanced fabrics with stain-resistant properties ideal for the food service environment."
      }
    ],
    departments: [
      {
        name: "Front of House",
        products: [
          {
            name: "Waitstaff Uniforms",
            image: "/images/industries/hospitality/waiter-uniform.jpg",
            description: "Professional and branded uniforms for servers, hosts, and front-of-house staff that complement your restaurant's aesthetic.",
            link: "/shop/hospitality/waitstaff-uniforms"
          },
          {
            name: "Manager & Maître d' Attire",
            image: "/images/industries/hospitality/maitre-d-uniform.jpg",
            description: "Distinguished, formal attire for management staff that conveys authority and professionalism.",
            link: "/shop/hospitality/management-uniforms"
          }
        ]
      },
      {
        name: "Kitchen & Back of House",
        products: [
          {
            name: "Chef & Cook Uniforms",
            image: "/images/industries/hospitality/chef-uniform.jpg",
            description: "Professional chef coats, pants, and accessories that meet safety and hygiene standards while providing comfort.",
            link: "/shop/hospitality/chef-uniforms"
          },
          {
            name: "Kitchen Support Staff Attire",
            image: "/images/industries/hospitality/kitchen-staff-uniform.jpg",
            description: "Practical, durable uniforms for dishwashers, prep cooks, and kitchen assistants.",
            link: "/shop/hospitality/kitchen-staff-uniforms"
          }
        ]
      },
      {
        name: "Specialty Restaurant Types",
        products: [
          {
            name: "Café & Casual Dining Uniforms",
            image: "/images/industries/hospitality/cafe-uniform.jpg",
            description: "Relaxed yet professional uniforms for casual dining establishments and cafés.",
            link: "/shop/hospitality/cafe-uniforms"
          },
          {
            name: "Fine Dining Staff Attire",
            image: "/images/industries/hospitality/fine-dining-uniform.jpg",
            description: "Elegant, sophisticated uniforms for high-end restaurants that enhance the luxury dining experience.",
            link: "/shop/hospitality/fine-dining-uniforms"
          }
        ]
      }
    ],
    fabricTechnologies: [
      {
        name: "StainGuard™ Technology",
        description: "Special fabric treatment that repels liquids and prevents stains - ideal for food service uniforms."
      },
      {
        name: "ComfortWeave™ Technology",
        description: "Advanced fabric structure providing comfort during long shifts with enhanced breathability and flexibility."
      },
      {
        name: "DuraBrand™ Color Technology",
        description: "Color fastness technology ensuring your brand colors stay vibrant through multiple industrial wash cycles."
      }
    ],
    testimonials: [
      {
        text: "UNEOM's restaurant uniforms have been instrumental in elevating our brand image. The staff love the comfort, and our customers frequently comment on how professional our team looks. The Saudi-specific designs perfectly match our needs.",
        author: "Abdullah Al-Qahtani",
        position: "Owner",
        company: "Bayt Al-Mandi Restaurant Group, Riyadh",
        logo: "/images/clients/bayt-al-mandi-logo.png"
      },
      {
        text: "The durability of UNEOM's chef uniforms has significantly reduced our replacement cycles. Their understanding of the specific needs of Saudi restaurants - from cultural considerations to practical kitchen requirements - makes them our exclusive uniform provider.",
        author: "Sarah Johnson",
        position: "Executive Chef",
        company: "The Royal Table, Jeddah",
        logo: "/images/clients/royal-table-logo.png"
      }
    ],
    ctaTitle: "Elevate Your Restaurant Staff Appearance",
    ctaDescription: "Connect with our restaurant uniform specialists for a consultation tailored to your specific establishment's requirements.",
    ctaButtonText: "Request Restaurant Uniform Consultation",
    ctaButtonUrl: "/contact?industry=hospitality-restaurants"
  };

  return (
    <>
      <Head>
        <title>{restaurantIndustryData.title} | UNEOM</title>
        <meta 
          name="description" 
          content="Professional restaurant uniforms designed to Saudi Arabian hospitality standards. Custom uniforms for waitstaff, chefs, managers, and all restaurant departments." 
        />
        <meta 
          property="og:title" 
          content={restaurantIndustryData.title} 
        />
        <meta 
          property="og:description" 
          content="Professional restaurant uniforms designed to Saudi Arabian hospitality standards. Custom uniforms for all restaurant staff roles." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/restaurant-uniforms-saudi.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/industries/hospitality/restaurants" 
        />
        <link 
          rel="alternate" 
          hreflang="ar" 
          href="https://uneom.com/ar/industries/hospitality/restaurants" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        {/* Hero Section */}
        <HeroSection 
          title={restaurantIndustryData.title}
          subtitle={restaurantIndustryData.subtitle}
          image={restaurantIndustryData.heroImage}
        />
        
        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Restaurant Uniform Excellence in Saudi Arabia</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>{restaurantIndustryData.introduction}</p>
                <p className="mt-4">
                  With years of experience serving Saudi Arabia's finest restaurants, we understand the unique requirements of the Kingdom's food service industry, from international fine dining chains to local specialty restaurants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">UNEOM Restaurant Uniform Advantages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {restaurantIndustryData.benefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Restaurant Uniforms by Department</h2>
            
            {restaurantIndustryData.departments.map((department, deptIndex) => (
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
              {restaurantIndustryData.fabricTechnologies.map((tech, index) => (
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
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Trusted by Saudi Arabia's Top Restaurants</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {restaurantIndustryData.testimonials.map((testimonial, index) => (
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
            <h2 className="text-3xl font-bold mb-4">{restaurantIndustryData.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{restaurantIndustryData.ctaDescription}</p>
            <Link href={restaurantIndustryData.ctaButtonUrl} legacyBehavior>
              <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block">
                {restaurantIndustryData.ctaButtonText}
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 