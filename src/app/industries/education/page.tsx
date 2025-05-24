"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function EducationIndustryPage() {
  const locale = 'en';
  
  const content = {
    meta: {
      title: 'Academic & School Uniforms in Saudi Arabia | UNEOM',
      description: 'UNEOM provides high-quality, durable, and comfortable school uniforms, academic attire, and staff wear for educational institutions across KSA (Riyadh, Jeddah, Dammam).',
    },
    hero: {
      headline: 'Inspiring Excellence: Premium Uniforms for the Education Sector by UNEOM',
      subheadline: 'Custom-designed school uniforms, university attire, and staff apparel that promote identity, pride, and a conducive learning environment. Serving educational institutions throughout Saudi Arabia.',
      cta: 'Discuss Your Uniform Needs',
      ctaLink: '/quote?industry=education',
      image: '/images/industries/education/hero-education-uniforms.jpg',
    },
    intro: {
      title: 'Fostering Academic Identity Across Saudi Arabia',
      paragraphs: [
        'UNEOM is dedicated to supplying the education sector in Saudi Arabia with premium-quality uniforms that are both smart and practical. We understand the importance of attire that reflects an institution\'s values, fosters a sense of belonging among students, and presents a professional image for faculty and staff.',
        'From K-12 schools to universities and vocational training centers in Riyadh, Jeddah, Dammam, and beyond, we partner with educational bodies to deliver durable, comfortable, and appropriately designed uniforms that meet the specific needs of students and educators.',
      ],
    },
    keyBenefits: {
      title: 'Why Choose UNEOM for Educational Uniforms?',
      benefits: [
        {
          name: 'Institutional Identity & Pride',
          description: 'Cohesive uniforms that strengthen school spirit and institutional identity.',
          icon: '/images/icons/identity-badge.svg',
        },
        {
          name: 'Durability & Comfort',
          description: 'High-quality, resilient fabrics designed for active students and daily wear.',
          icon: '/images/icons/comfort-fabric.svg',
        },
        {
          name: 'Professional Staff Appearance',
          description: 'Smart and professional attire for teachers and administrative staff, enhancing authority and respect.',
          icon: '/images/icons/teacher-professional.svg',
        },
        {
          name: 'Safety & Easy Identification',
          description: 'Uniforms aid in easy identification of students, contributing to safety and security on campus.',
          icon: '/images/icons/safety-shield.svg',
        },
      ],
    },
    featuredServices: {
      title: 'Our Educational Uniform Solutions',
      services: [
        {
          name: 'Custom School Uniforms (K-12)',
          description: 'Complete uniform sets including shirts, trousers, skirts, blazers, and sportswear, tailored to your school\'s branding and requirements.',
          image: '/images/services/education-school-uniforms.jpg',
          link: '/shop/education/school-uniforms',
        },
        {
          name: 'University & College Attire',
          description: 'Official academic wear, faculty gowns, and departmental uniforms that uphold institutional prestige.',
          image: '/images/services/education-university-attire.jpg',
          link: '/shop/education/university-attire',
        },
        {
          name: 'Staff & Faculty Uniforms',
          description: 'Professional and comfortable uniforms for teaching staff, administrative personnel, and support services.',
          image: '/images/services/education-staff-uniforms.jpg',
          link: '/shop/education/staff-uniforms',
        },
      ],
    },
    customizationOptions: {
      title: 'Bespoke Designs for Your Institution',
      description: 'UNEOM offers full customization, from fabric selection and color matching to logo embroidery and unique design accents, ensuring your educational uniforms are a perfect representation of your institution\'s ethos and brand.',
      image: '/images/industries/education/customization-education.jpg',
    },
    testimonials: {
      title: 'Trusted by Educational Leaders',
      items: [
        {
          quote: "UNEOM delivered exceptional quality and service for our school uniforms. The students look smart, and the parents are very pleased with the durability.",
          author: 'Fatima Al-Mansour',
          position: 'Principal, Bright Future International School, Riyadh',
        },
      ],
    },
    relatedBlogs: {
      title: 'Insights on Educational Attire',
      posts: [
        {
          title: 'The Role of Uniforms in Modern Education',
          link: '/blog/uniforms-modern-education', 
          image: '/images/blog/placeholder-education1.jpg',
        },
        {
          title: 'Choosing Safe and Comfortable Fabrics for Student Uniforms',
          link: '/blog/fabrics-student-uniforms', 
          image: '/images/blog/placeholder-education2.jpg',
        },
      ],
    },
    finalCta: {
      title: 'Partner with UNEOM for Your Educational Uniform Needs',
      description: 'Ensure your students and staff represent your institution with pride and professionalism. Contact our specialists for a consultation on academic and school uniforms in Saudi Arabia.',
      cta: 'Request an Education Sector Consultation',
      ctaLink: '/quote?industry=education&focused=true',
    },
  };
  
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

      <SEO
        title={content.meta.title}
        description={content.meta.description}
        canonicalUrl="https://uneom.com/industries/education/"
        // ogImage={content.meta.ogImage} // Example if you add OG images
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-600 to-blue-800 text-white py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={content.hero.image}
            alt={content.hero.headline}
            fill
            className="object-cover opacity-30"
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
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4"> {/* Adjusted icon bg and size */}
                  <Image src={benefit.icon} alt={benefit.name} width={32} height={32} /> {/* Assuming SVG icons */}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{benefit.name}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
            ))}
            </div>
        </Container>
      </section>
      
      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading className="text-center mb-16">{content.featuredServices.title}</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.featuredServices.services.map((service) => (
              <div key={service.name} className="border rounded-lg overflow-hidden shadow-lg group">
                <Link href={service.link} className="block">
                  <div className="relative w-full h-72 bg-neutral-100">
                    <Image src={service.image} alt={service.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300 p-2" /> {/* Added cover, slight padding for image */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{service.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                    <span className="text-sky-600 hover:text-sky-700 font-medium">
                      Learn More &rarr;
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
        <Container className="md:flex items-center gap-12 flex-row-reverse"> {/* Reversed for variety */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={content.customizationOptions.image} alt={content.customizationOptions.title} width={600} height={450} className="rounded-lg shadow-xl object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.customizationOptions.title}</h2>
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
                  <p className="text-right font-semibold text-sky-700">&mdash; {testimonial.author}, {testimonial.position}</p>
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
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-sky-600 transition-colors">{post.title}</h3>
                    <span className="text-sky-600 font-medium">Read Article &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
        </Container>
      </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-sky-700 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.finalCta.title}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{content.finalCta.description}</p>
          <Button href={content.finalCta.ctaLink} size="lg" variant="secondary">
            {content.finalCta.cta}
              </Button>
        </Container>
      </section>
    </>
  );
} 