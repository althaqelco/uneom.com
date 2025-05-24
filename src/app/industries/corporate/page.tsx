"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SEO from '@/components/SEO';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import CorporateImageFix from './corporate-fix';

export default function CorporateIndustryPage() {
  const locale = 'en';
  
  // Content for the English version
  const content = {
    meta: {
      title: 'Premium Corporate Uniforms & Business Attire in KSA | UNEOM',
      description: 'Elevate your brand image with UNEOM\'s custom corporate uniforms, professional business attire, and executive wear. Tailored for companies in Riyadh, Jeddah, and across Saudi Arabia.',
    },
    hero: {
      headline: 'Dress Your Team for Success: Sophisticated Corporate Uniforms by UNEOM',
      subheadline: 'Custom-designed business attire, executive wear, and branded apparel that project professionalism and reinforce your corporate identity. Serving leading KSA enterprises.',
      cta: 'Enquire About Corporate Attire',
      ctaLink: '/quote?industry=corporate',
      image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg', // Placeholder image
    },
    intro: {
      title: 'Defining Professional Presence Across Saudi Arabia',
      paragraphs: [
        'UNEOM specializes in creating distinguished corporate uniforms and business attire that reflect the prestige and values of your organization. From tailored suits for executives to smart, cohesive uniforms for your entire staff, we deliver quality and style that makes a lasting impression.',
        'We partner with businesses across Saudi Arabia, including in key commercial hubs like Riyadh, Jeddah, and Dammam, to provide workwear solutions that enhance brand image, foster team unity, and ensure your employees look and feel their best.',
      ],
    },
    keyBenefits: {
      title: 'The UNEOM Advantage for Your Corporate Wear',
    benefits: [
      {
          name: 'Enhanced Brand Image',
          description: 'Consistent, high-quality uniforms that create a powerful and professional brand statement.',
          icon: '/images/icons/brand-image.svg', // Placeholder
        },
        {
          name: 'Improved Team Cohesion',
          description: 'Foster a sense of unity and belonging among employees with smart, standardized attire.',
          icon: '/images/icons/team-cohesion.svg', // Placeholder
        },
        {
          name: 'Professionalism & Credibility',
          description: 'Instill confidence in clients and stakeholders with a team that looks polished and professional.',
          icon: '/images/icons/professionalism-alt.svg', // Placeholder
        },
        {
          name: 'Customization & Tailoring',
          description: 'Bespoke designs, quality fabrics, and expert tailoring to meet your exact specifications.',
          icon: '/images/icons/custom-tailoring.svg', // Placeholder
        },
      ],
    },
    featuredProducts: {
      title: 'Our Corporate Attire Collection',
    products: [
      {
          name: 'Executive Suiting Collection',
          description: 'Impeccably tailored suits for men and women, crafted from premium fabrics for a distinguished look.',
          image: '/images/Corporate_Uniforms_Business.png', // Placeholder
          link: '/shop/corporate/executive-suits',
        },
        {
          name: 'Professional Business Shirts & Blouses',
          description: 'A range of high-quality shirts and blouses, customizable with your company logo and colors.',
          image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg', // Placeholder
          link: '/shop/corporate/business-shirts',
        },
        {
          name: 'Branded Polo Shirts & Casual Wear',
          description: 'Comfortable and stylish options for a more casual corporate look, perfect for events and everyday wear.',
          image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg', // Placeholder
          link: '/shop/corporate/casual-polo',
        },
      ],
    },
    customizationOptions: {
      title: 'Tailored Branding & Customization',
      description: 'UNEOM offers extensive customization options, including precise color matching, logo embroidery, and unique design elements to perfectly align your corporate wear with your brand identity. Our experts work with you to create truly bespoke uniform solutions.',
      image: '/images/industries/corporate/customization-corporate.jpg', // Placeholder
    },
    testimonials: {
      title: 'What Our Corporate Clients Say',
      items: [
        {
          quote: "UNEOM transformed our company\'s image with their exceptional corporate uniforms. The quality and service were outstanding.",
          author: 'Ahmed Al-Harbi',
          position: 'CEO, KSA FutureTech Solutions',
        },
      ],
    },
    relatedBlogs: {
      title: 'Corporate Uniform Insights',
      posts: [
        {
          title: 'The Impact of Corporate Uniforms on Brand Perception',
          link: '/blog/corporate-uniforms-brand-perception', // Placeholder
          image: '/images/blog/placeholder-corporate1.jpg',
        },
        {
          title: 'Choosing the Right Fabrics for Professional Attire',
          link: '/blog/fabrics-professional-attire', // Placeholder
          image: '/images/blog/placeholder-corporate2.jpg',
        },
      ],
    },
    finalCta: {
      title: 'Elevate Your Corporate Image with UNEOM',
      description: 'Partner with us to design and deliver corporate attire that speaks volumes about your brand. Contact our specialists in Saudi Arabia today.',
      cta: 'Request a Corporate Consultation',
      ctaLink: '/quote?industry=corporate&focused=true',
    },
  };

  return (
    <>
      <CorporateImageFix />
      
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025
        title={content.meta.title}
        description={content.meta.description}
        keywords={[
          'corporate uniforms Saudi Arabia',
          'business attire KSA',
          'executive wear Riyadh',
          'professional uniforms Jeddah',
          'company uniforms Dammam',
          'branded corporate clothing',
          'office uniforms Saudi',
          'business dress code',
          'corporate identity uniforms'
        ]}
        author="UNEOM Corporate Division"
        expertise="Corporate Uniform Design & Manufacturing"
        contentType="service"
        trustSignals={[
          'Trusted by Fortune 500 companies',
          'Premium fabric sourcing',
          'Custom branding solutions',
          'Saudi corporate market leader'
        ]}
        canonicalUrl="https://uneom.com/industries/corporate/"
        locale="en"
      />
      
      {/* Legacy SEO component for compatibility */}
      <SEO
        title={content.meta.title}
        description={content.meta.description}
        canonicalUrl="https://uneom.com/industries/corporate/"
      />

        {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-700 to-neutral-800 text-white py-20 md:py-32">
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
                {/* Placeholder for icon - Consider using a generic icon or a theme-specific one */}
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* SVG Icon would go here, e.g., <Image src={benefit.icon} alt="" width={24} height={24} /> */}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{benefit.name}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading className="text-center mb-16">{content.featuredProducts.title}</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.featuredProducts.products.map((product) => (
              <div key={product.name} className="border rounded-lg overflow-hidden shadow-lg group">
                <Link href={product.link} className="block">
                  <div className="relative w-full h-72 bg-neutral-100"> {/* Increased height for better product display */}
                    <Image src={product.image} alt={product.name} fill className="object-contain group-hover:scale-105 transition-transform duration-300 p-4" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
                    <span className="text-primary-600 hover:text-primary-700 font-medium">
                      View Collection &rarr;
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
        <Container className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={content.customizationOptions.image} alt={content.customizationOptions.title} width={600} height={450} className="rounded-lg shadow-xl object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.customizationOptions.title}</h2>
            <p className="text-lg text-neutral-300 leading-relaxed">{content.customizationOptions.description}</p>
          </div>
        </Container>
      </section>

      {/* Testimonials Section - Minimalistic Placeholder */}
      {content.testimonials && content.testimonials.items.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <Container>
            <SectionHeading className="text-center mb-12">{content.testimonials.title}</SectionHeading>
            <div className="max-w-2xl mx-auto">
              {content.testimonials.items.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg mb-8">
                  <p className="text-lg text-neutral-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-right font-semibold text-neutral-800">&mdash; {testimonial.author}, {testimonial.position}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Blogs Section - Placeholder */}
      {content.relatedBlogs && content.relatedBlogs.posts.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
        <Container>
            <SectionHeading className="text-center mb-16">{content.relatedBlogs.title}</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              {content.relatedBlogs.posts.map((post) => (
                <Link key={post.title} href={post.link} className="block group border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative w-full h-56 bg-neutral-100"> {/* Adjusted height */}
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                    <span className="text-primary-600 font-medium">Read More &rarr;</span>
                  </div>
            </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-primary-700 text-white"> {/* Slightly different primary color for variety */}
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