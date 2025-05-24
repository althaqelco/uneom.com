'use client';

import React from 'react';
import SEO from '@/components/SEO';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Placeholder data - in a real scenario, this would come from a CMS or dedicated data files
const healthcarePageData = {
  en: {
    meta: {
      title: 'Healthcare Uniforms & Medical Scrubs in Saudi Arabia | UNEOM',
      description: 'UNEOM provides high-quality, hygienic healthcare uniforms, medical scrubs, and lab coats tailored for hospitals and clinics across Saudi Arabia. Durability & comfort guaranteed.',
    },
    hero: {
      headline: 'Advanced Healthcare Uniforms for Saudi Arabia\'s Medical Professionals',
      subheadline: 'Hygienic, Durable, and Comfortable Medical Scrubs, Lab Coats, and Staff Attire. Designed for KSA\'s leading hospitals and clinics in Riyadh, Jeddah, Dammam.',
      cta: 'Request a Quote for Healthcare Uniforms',
      ctaLink: '/quote',
      image: '/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg', // Placeholder image
    },
    intro: {
      title: 'Setting the Standard for Medical Workwear in KSA',
      paragraphs: [
        'UNEOM is dedicated to supplying the Saudi healthcare sector with superior quality medical uniforms that meet the stringent demands of hospitals, clinics, and laboratories. Our range includes meticulously designed scrubs, lab coats, and specialized attire, ensuring comfort, functionality, and a professional appearance for all medical staff.',
        'We understand the critical importance of hygiene and durability in medical environments. That\'s why our healthcare uniforms are crafted from advanced, breathable fabrics with antimicrobial properties, suitable for the Saudi climate and compliant with local and international healthcare standards.',
      ],
    },
    keyBenefits: {
      title: 'Key Benefits of UNEOM Healthcare Uniforms',
    benefits: [
      {
          name: 'Enhanced Hygiene & Safety',
          description: 'Utilizing antimicrobial fabrics and designs that minimize contamination risks, crucial for patient and staff safety.',
          icon: '/images/icons/hygiene.svg', // Placeholder
        },
        {
          name: 'Superior Comfort & Durability',
          description: 'Ergonomically designed for long shifts, made from durable materials that withstand frequent industrial laundering.',
          icon: '/images/icons/comfort.svg', // Placeholder
        },
        {
          name: 'Professional Image & Team Cohesion',
          description: 'Smart, consistent uniforms that enhance your institution\'s professional image and foster team identity.',
          icon: '/images/icons/professionalism.svg', // Placeholder
        },
        {
          name: 'Customization & Branding',
          description: 'Options for embroidery and branding to reflect your healthcare facility\'s identity.',
          icon: '/images/icons/customization.svg', // Placeholder
        },
      ],
    },
    featuredProducts: {
      title: 'Featured Healthcare Uniform Products',
    products: [
      {
          name: 'Premium Medical Scrub Set',
          description: 'Unisex scrub set made from soft, breathable, antimicrobial fabric. Available in various colors.',
          image: '/images/products/scrubs-set.jpg', // Placeholder
          link: '/shop/medical-scrubs/premium-scrubs-set',
        },
        {
          name: 'Professional Lab Coat',
          description: 'Durable and stain-resistant lab coat with multiple pockets, offering a professional look.',
          image: '/images/doctor-SBI-300813580.jpg', // Placeholder
          link: '/shop/medical-scrubs/medical-lab-coat',
        },
        {
          name: 'Comfort Nursing Uniform',
          description: 'Specially designed nursing uniforms focusing on comfort and ease of movement.',
          image: '/images/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg', // Placeholder
          link: '/shop/medical-scrubs/nursing-scrubs',
        },
      ],
    },
    fabricTech: {
      title: 'Advanced Fabrics & Technology',
      description: 'Our healthcare uniforms incorporate the latest in fabric technology to ensure optimal performance, including moisture-wicking, stain resistance, and flexible materials for enhanced mobility.',
      image: '/images/services/stack-of-rolled-jeans-and-cotton-flowers-on-light-2025-01-29-01-45-01-utc.jpg', // Placeholder
    },
    customization: {
      title: 'Tailored to Your Needs',
      description: 'From specific color requirements to logo embroidery and departmental badging, UNEOM offers comprehensive customization options to meet the unique needs of your healthcare institution.',
      image: '/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg', // Placeholder
    },
    testimonials: {
      title: 'What Our Healthcare Clients Say',
      // Add 1-2 placeholder testimonials specific to healthcare if available, or general ones
      items: [
        {
          quote: "UNEOM\'s medical scrubs are top-notch. Our staff in Riyadh find them comfortable and durable for long shifts.",
          author: 'Dr. Fatima Al-Salem',
          position: 'Chief of Medicine, Riyadh Central Hospital',
        },
      ],
    },
    relatedBlogs: {
      title: 'Insights on Healthcare Uniforms',
      posts: [
        {
          title: 'Choosing the Right Medical Scrubs for Your Team',
          link: '/blog/choosing-medical-scrubs', // Placeholder
          image: '/images/blog/placeholder1.jpg',
        },
        {
          title: 'The Importance of Hygienic Uniforms in Hospitals',
          link: '/blog/hygienic-uniforms-hospitals', // Placeholder
          image: '/images/blog/placeholder2.jpg',
        },
      ],
    },
    finalCta: {
      title: 'Partner with UNEOM for Your Healthcare Uniform Needs',
      description: 'Ensure your medical team is equipped with the best. Contact us today for a consultation and quote tailored to your specific requirements in Saudi Arabia.',
      cta: 'Get Your Custom Quote Now',
      ctaLink: '/quote',
    },
  },
};

export default function HealthcareIndustryPage() {
  const content = healthcarePageData.en;
  const locale = 'en'; // Explicitly set for this page

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="Healthcare Uniforms & Medical Scrubs | UNEOM Saudi Arabia"
        description="Professional healthcare uniforms and medical scrubs for hospitals and clinics across Saudi Arabia."
        keywords={["healthcare uniforms","medical scrubs","hospital uniforms","nursing uniforms"]}
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
        canonicalUrl="https://uneom.com/industries/healthcare/"
        // Add other SEO props like ogImage if available
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 md:py-32">
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
          <Button href={content.hero.ctaLink} size="lg" variant="secondary">
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
                {/* Placeholder for icon */}
                {/* <Image src={benefit.icon} alt="" width={48} height={48} className="mx-auto mb-4" /> */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {/* Icon would go here */}
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
                  <div className="relative w-full h-64 bg-neutral-100">
                    <Image src={product.image} alt={product.name} fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{product.name}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
                    <span className="text-primary-600 hover:text-primary-700 font-medium">
                      View Product &rarr;
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fabric & Technology Section */}
      <section className="py-16 md:py-24 bg-neutral-800 text-white">
        <Container className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={content.fabricTech.image} alt={content.fabricTech.title} width={600} height={400} className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.fabricTech.title}</h2>
            <p className="text-lg text-neutral-300 leading-relaxed">{content.fabricTech.description}</p>
          </div>
        </Container>
      </section>

      {/* Customization Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="md:flex flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={content.customization.image} alt={content.customization.title} width={600} height={400} className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">{content.customization.title}</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">{content.customization.description}</p>
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
                  <div className="relative w-full h-48 bg-neutral-100">
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
      <section className="py-20 md:py-32 bg-primary-600 text-white">
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