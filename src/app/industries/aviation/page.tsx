'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function AviationIndustryPage() {
  const locale = 'en';
  
  const content = {
    meta: {
      title: "Aviation Uniforms & Airline Attire in Saudi Arabia | UNEOM",
      description: "Discover UNEOM's premium aviation uniforms for cabin crew, pilots, and ground staff. Tailored for Saudi airlines, ensuring comfort, GACA compliance, and brand identity.",
    },
    hero: {
      headline: "Aviation Uniforms & Airline Attire in Saudi Arabia",
      subheadline: "Premium cabin crew, ground staff, and aviation personnel uniforms tailored for Saudi airlines and private operators, combining style, functionality, and GACA compliance.",
      cta: "Request Aviation Uniform Consultation",
      ctaLink: '/quote?industry=aviation',
      image: "/images/aviation/aviation_uniform_airline_main_image.jpg", 
    },
    intro: {
      title: "Soaring Standards: UNEOM Aviation Uniforms",
      paragraphs: [
      "In Saudi Arabia's rapidly expanding aviation sector, professional uniforms play a crucial role in establishing airline identity, ensuring operational efficiency, and projecting the Kingdom's commitment to excellence in global air travel. UNEOM's comprehensive aviation uniform solutions are specifically designed to meet the unique requirements of Saudi airlines and aviation businesses.",
      "From cabin crew and flight deck personnel to ground operations and technical staff, we provide premium-quality uniforms that combine sophisticated style, practical functionality, and cultural sensitivity. Our aviation collections incorporate advanced fabric technologies that withstand the rigorous demands of air travel while offering options that respect Islamic dress codes and reflect Saudi heritage elements.",
      "As Saudi aviation continues its remarkable global expansion, we partner with airlines to develop uniform programs that enhance brand recognition, boost employee pride, and create memorable passenger experiences that showcase the best of Saudi hospitality and professionalism."
    ],
    },
    keyBenefits: {
      title: "The UNEOM Advantage in Aviation Attire",
    benefits: [
      {
          name: "GACA Compliance & Safety",
          description: "All our designs meet Saudi General Authority of Civil Aviation (GACA) requirements while maintaining the highest standards of comfort, safety, and elegance.",
          icon: "/images/icons/compliance-shield.svg"
        },
        {
          name: "Enhanced Brand Identity",
        description: "We integrate your airline brand identity into every uniform detail, enhancing brand recognition and creating a distinctive passenger experience.",
          icon: "/images/icons/brand-identity-aviation.svg"
      },
      {
          name: "Modest & Culturally Aware Designs",
        description: "Special designs that respect modest dress requirements for female staff while maintaining an elegant appearance aligned with international aviation standards.",
          icon: "/images/icons/modest-design-saudi.svg"
      },
      {
          name: "High-Performance Fabrics",
        description: "Aviation-specific textiles that offer comfort during long flights, resist wrinkles, and maintain a professional appearance throughout demanding shifts.",
          icon: "/images/icons/fabric-tech-performance.svg"
        },
      ],
    },
    featuredOfferings: {
      title: "Comprehensive Aviation Uniform Collections",
      offerings: [
        {
        name: "Airline Crew Uniforms",
        description: "Premium quality flight attendant uniforms with modest Islamic-compliant options for Saudi airlines and GCC carriers.",
      image: "/images/aviation/flightـattendantsـuniforms.jpg",
          link: "/shop/aviation-uniforms/airline-crew-uniform"
    },
    {
        name: "Professional Pilot Uniform Sets",
        description: "Complete pilot uniform sets designed for Saudi airline captains and officers, featuring premium fabrics and traditional styling.",
      image: "/images/aviation/aviation_captin_uniform.jpg",
          link: "/shop/aviation-uniforms/pilot-uniform-set"
    },
    {
          name: "Ground Staff & Operations Uniforms",
          description: "Practical and professional attire for airport ground personnel, featuring durable materials and weather-appropriate designs for all Saudi climates.",
      image: "/images/aviation/aviation_uniform_airline.jpg",
          link: "/shop/aviation-uniforms/ground-crew-uniform"
        }
      ],
    },
    customizationOptions: {
      title: "Tailored to Your Airline's Exact Specifications",
      description: "UNEOM provides extensive customization, from fabric technology selection (SkyComfort™, AeroGuard™) and cultural design element integration (Saudi heritage motifs) to precise rank and position indicators, ensuring your airline's uniforms are truly unique and representative.",
      image: "/images/aviation/aviation_uniform_main.jpg", 
    },
    testimonials: {
      title: "Trusted by Leading Aviation Partners",
      items: [
        {
          quote: "UNEOM's aviation uniforms have significantly enhanced our airline's brand perception. Their attention to detail and understanding of both international aviation standards and Saudi cultural requirements is impeccable.",
          author: "Abdullah Al-Qahtani",
          position: "Brand Director, Saudi Regional Airlines",
        },
        {
          quote: "Our cabin crew appreciate the comfort and practicality of UNEOM's uniforms. The modest design options for our female staff have received excellent feedback, striking the perfect balance.",
          author: "Noura Al-Sharif",
          position: "Cabin Services Manager, Gulf International Airways",
        }
      ],
    },
    relatedBlogs: {
      title: "Aviation Uniform Insights",
      posts: [
        {
          title: "The Future of Aviation Uniforms in the GCC",
          link: "/blog/future-aviation-uniforms-gcc",
          image: "/images/blog/placeholder-aviation1.jpg",
        },
        {
          title: "Material Innovations for Pilot and Cabin Crew Attire",
          link: "/blog/material-innovations-aviation-attire",
          image: "/images/blog/placeholder-aviation2.jpg",
        }
      ],
    },
    finalCta: {
      title: "Elevate Your Airline's Image with UNEOM",
      description: "Partner with UNEOM to design and deliver aviation uniforms that embody excellence and Saudi hospitality. Contact our specialists today.",
      cta: "Get an Aviation Uniform Quote",
      ctaLink: '/quote?industry=aviation&focused=true',
    },
  };

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="Aviation Uniforms & Airline Attire | UNEOM Saudi Arabia"
        description="Professional aviation uniforms for airlines, pilots, and ground staff in Saudi Arabia."
        keywords={["aviation uniforms","airline uniforms","pilot uniforms","flight attendant uniforms"]}
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

      <SEO
        title={content.meta.title}
        description={content.meta.description}
        canonicalUrl="https://uneom.com/industries/aviation/"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-sky-600 text-white py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={content.hero.image}
            alt={content.hero.headline}
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <Container className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {content.hero.headline}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            {content.hero.subheadline}
          </p>
          <Button href={content.hero.ctaLink} size="lg" variant="primary">
            {content.hero.cta}
          </Button>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">{content.intro.title}</SectionHeading>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-neutral-700">
            {content.intro.paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </Container>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <SectionHeading className="text-center mb-16">{content.keyBenefits.title}</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.keyBenefits.benefits.map((benefit) => (
              <div key={benefit.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image src={benefit.icon} alt={benefit.name} width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{benefit.name}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Offerings Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading className="text-center mb-16">{content.featuredOfferings.title}</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.featuredOfferings.offerings.map((offering) => (
              <div key={offering.name} className="border rounded-lg overflow-hidden shadow-lg group">
                <Link href={offering.link} className="block">
                  <div className="relative w-full h-72 bg-neutral-100">
                    <Image src={offering.image} alt={offering.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300 p-2" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{offering.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{offering.description}</p>
                    <span className="text-blue-600 hover:text-blue-700 font-medium">
                      View Details &rarr;
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Customization Options Section */}
      <section className="py-16 md:py-24 bg-neutral-800 text-white">
        <Container className="md:flex items-center gap-12 flex-row-reverse">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={content.customizationOptions.image} alt={content.customizationOptions.title} width={600} height={450} className="rounded-lg shadow-xl object-cover" />
          </div>
          <div className="md:w-1/2">
            <SectionHeading className="text-left mb-6 !text-3xl md:!text-4xl">{content.customizationOptions.title}</SectionHeading> {/* Ensure SectionHeading takes text children */}
            <p className="text-lg text-neutral-300 leading-relaxed">{content.customizationOptions.description}</p>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      {content.testimonials && content.testimonials.items.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <Container>
            <SectionHeading className="text-center mb-12">{content.testimonials.title}</SectionHeading>
            <div className="max-w-2xl mx-auto">
              {content.testimonials.items.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg mb-8">
                  <p className="text-lg text-neutral-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-right font-semibold text-blue-700">&mdash; {testimonial.author}, {testimonial.position}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Blogs Section */}
      {content.relatedBlogs && content.relatedBlogs.posts.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <SectionHeading className="text-center mb-16">{content.relatedBlogs.title}</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              {content.relatedBlogs.posts.map((post) => (
                <Link key={post.title} href={post.link} className="block group border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative w-full h-56 bg-neutral-100">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <span className="text-blue-600 font-medium">Read Article &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-blue-700 text-white">
        <Container className="text-center">
          <SectionHeading className="mb-6 !text-3xl md:!text-4xl">{content.finalCta.title}</SectionHeading>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{content.finalCta.description}</p>
          <Button href={content.finalCta.ctaLink} size="lg" variant="secondary">
            {content.finalCta.cta}
          </Button>
        </Container>
      </section>
    </>
  );
} 