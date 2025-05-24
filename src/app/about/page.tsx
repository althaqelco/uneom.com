'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function AboutPage() {
  const locale = 'en';
  
  // Team members data
  const teamMembers = [
    {
      name: 'Abdullah Al-Qahtani',
      role: 'CEO & Founder',
      image: '/images/about/Team/Abdullah_Al-Qahtani-2.png',
      bio: 'With over 20 years in the textile industry, Abdullah founded UNEOM with a vision to revolutionize professional uniforms in Saudi Arabia. His expertise in both local market needs and international standards has positioned UNEOM as an industry leader.'
    },
    {
      name: 'Sara Al-Harbi',
      role: 'Chief Design Officer',
      image: '/images/about/Team/Sara_Al-Harbi.png',
      bio: 'Sara brings over 15 years of fashion design experience, with specialized training in uniform design. Her innovative approach merges functionality, comfort, and style, creating uniforms that meet the unique demands of Saudi Arabia\'s climate and cultural requirements.'
    },
    {
      name: 'Mohammed Al-Otaibi',
      role: 'Operations Director',
      image: '/images/about/Team/Mohammed_Al-Otaibi.png',
      bio: 'Mohammed oversees UNEOM\'s production facilities and supply chain. His background in textile manufacturing ensures that our uniforms are produced to the highest quality standards while meeting demanding delivery timelines.'
    },
    {
      name: 'Lina Al-Rashid',
      role: 'Client Relations Manager',
      image: '/images/about/Team/Lina_Al-Rashid.png',
      bio: 'Lina leads our client relations team, ensuring that every customer receives personalized attention. With experience in hospitality and healthcare sectors, she understands the unique uniform requirements of different industries.'
    }
  ];
  
  // Industry partnerships
  const partners = [
    {
      name: 'Saudi Hospitals Association',
      logo: '/images/about/Saudi_Hospitals_Association.png',
      description: 'Official uniform provider for member hospitals'
    },
    {
      name: 'Saudi Aviation Academy',
      logo: '/images/about/Saudi_Aviation_Academy.png',
      description: 'Exclusive supplier of cadet uniforms'
    },
    {
      name: 'Riyadh Chamber of Commerce',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      description: 'Recognized industry leader in B2B uniform solutions'
    },
    {
      name: 'Saudi Hotel Association',
      logo: '/images/about/Saudi_Hotel_Association.png',
      description: 'Preferred uniform partner for luxury hotels'
    }
  ];
  
  // Quality standards and certifications
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      logo: '/images/certificate/ISO_90012015.png'
    },
    {
      name: 'OEKO-TEX® Standard 100',
      description: 'Tested for harmful substances',
      logo: '/images/certificate/OEKO-TEX.png'
    },
    {
      name: 'Saudi Quality Mark',
      description: 'Meets Saudi standards for textile products',
      logo: '/images/certificate/Saudi_Quality_Mark.png'
    },
    {
      name: 'GOTS Certified',
      description: 'Global Organic Textile Standard for organic fabrics',
      logo: '/images/certificate/GOTS_Certified.png'
    }
  ];
  
  // Company values
  const values = [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'We are committed to delivering uniforms of uncompromising quality that exceed industry standards and client expectations.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Cultural Sensitivity',
      description: 'We design with respect for Saudi Arabian culture and Islamic values, ensuring our uniforms meet both professional standards and cultural requirements.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We continuously pursue innovative fabrics, designs, and technologies that enhance comfort, functionality, and sustainability.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Client Partnership',
      description: 'We build long-term relationships based on understanding each client\'s unique needs and delivering tailored uniform solutions.',
      icon: (
        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];
  
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Hero Section */}
      <div className="relative py-24 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              About UNEOM
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Saudi Arabia's leading provider of premium uniforms, tailoring excellence for diverse industries since 2005.
            </p>
          </div>
        </Container>
      </div>
      
      {/* Company Overview Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading as="h2">
                Our Story
              </SectionHeading>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  Founded in 2005 in Riyadh, UNEOM began with a simple mission: to provide Saudi Arabia's growing professional sectors with uniforms that combine international quality standards with designs suited to local needs.
                </p>
                <p>
                  What started as a small operation serving local hospitals has grown into the Kingdom's premier uniform provider, with production facilities in Riyadh and Jeddah, and a client base spanning healthcare, aviation, hospitality, education, and corporate sectors throughout Saudi Arabia and the Gulf region.
                </p>
                <p>
                  Our name, UNEOM, comes from "Uniform Excellence Optimized for the Middle East" – reflecting our commitment to creating professional attire specifically designed for the region's unique climate, cultural considerations, and workplace requirements.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/company-headquarters.jpg"
                alt="UNEOM Headquarters in Riyadh"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading centered>
              Our Mission & Values
            </SectionHeading>
            <p className="text-lg text-neutral-700">
              At UNEOM, our mission is to elevate the professional image of Saudi businesses through high-quality, culturally appropriate uniforms that enhance brand identity and employee experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{value.title}</h3>
                <p className="text-neutral-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered>
            Our Leadership Team
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            Meet the experienced professionals driving UNEOM's commitment to excellence in uniform design, manufacturing, and service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-80 w-full md:w-2/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center md:w-3/5">
                  <h3 className="text-2xl font-bold mb-1 text-primary-700">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-lg mb-4">{member.role}</p>
                  <div className="w-16 h-1 bg-primary-500 mb-4 rounded-full"></div>
                  <p className="text-neutral-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Saudi Market Expertise */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading as="h2">
                Saudi Market Expertise
              </SectionHeading>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  UNEOM's deep understanding of the Saudi Arabian market sets us apart in the uniform industry. We recognize that Saudi workplaces have unique requirements that differ from international standards.
                </p>
                <p>
                  Our designs account for the Kingdom's climate, with breathable fabrics that maintain professional appearance even in extreme heat. We provide options that respect Islamic dress codes, including appropriately modest designs and hijab-friendly uniforms across all sectors.
                </p>
                <p>
                  In line with Saudi Vision 2030, we're committed to localization, with over 70% of our workforce being Saudi nationals. Our manufacturing facilities in the Kingdom ensure quick turnaround times and responsiveness to local client needs.
                </p>
                <p>
                  Our dedication to understanding sector-specific requirements in Saudi Arabia has made us the trusted uniform partner for healthcare institutions, airlines, hospitality groups, and corporations throughout the Kingdom.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
              <Image
                src="/images/about/Saudi_Market_Expertise.jpg"
                alt="UNEOM's Saudi Market Expertise"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* Industry Partnerships */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>
            Industry Partnerships
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            UNEOM collaborates with leading organizations to set new standards in professional uniforms across Saudi Arabia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl">
                <div className="h-24 flex items-center justify-center mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={90}
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary-700">{partner.name}</h3>
                <p className="text-neutral-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Quality Standards */}
      <section className="py-16 bg-primary-50">
        <Container>
          <SectionHeading centered>
            Quality Standards & Compliance
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            Every UNEOM uniform is manufactured to meet the highest international and Saudi quality standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-neutral-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Quality Commitment</h3>
            <div className="space-y-4 text-neutral-700">
              <p>
                At UNEOM, quality isn't just a characteristic of our products—it's the foundation of our business. Every uniform undergoes rigorous testing at multiple stages:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fabric testing for durability, colorfastness, and comfort</li>
                <li>Construction inspection for seam strength and finishing</li>
                <li>Fit testing across diverse body types</li>
                <li>Wash testing to ensure longevity through industrial laundering</li>
                <li>Compliance verification with industry-specific safety standards</li>
              </ul>
              <p>
                Our quality management system ensures consistency across all production runs, whether for a small clinic or a nationwide hotel chain. We stand behind our products with comprehensive warranties and responsive customer support.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Partner With UNEOM for Your Uniform Needs</h2>
            <p className="text-lg mb-8 opacity-90">
              Experience the difference that specialized knowledge, quality craftsmanship, and dedicated service can make for your organization's uniform program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/shop"
                className="inline-block bg-primary-700 text-white hover:bg-primary-800 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                Browse Our Products
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 