'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import SEO from '@/components/SEO';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function RetailShopsPage() {
  // Use English locale
  const locale = 'en';
  
  // Content structured according to standard industry page format
  const content = {
    meta: {
      title: "Premium Retail & Shopping Mall Uniforms in Saudi Arabia | UNEOM",
      description: "Elevate your brand with professional retail uniforms that enhance customer engagement and drive sales in Saudi Arabia's shopping malls, stores, and beauty salons."},
    hero: {
      headline: "Premium Retail & Shopping Mall Uniforms in Saudi Arabia",
      subheadline: "Elevate your brand with professional uniforms that enhance customer engagement and drive sales",
      image: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
      cta: "Request Consultation",
      ctaLink: "/contact?industry=retail-shops"},
    intro: {
      title: "Transform Your Retail Brand Presence",
      paragraphs: [
      "In Saudi Arabia's competitive retail landscape, your staff's appearance is a crucial element in brand differentiation and customer experience excellence. Uneom provides premium retail uniforms that combine contemporary design with practical functionality, helping your brand create a memorable shopping environment that enhances customer loyalty and sales.",
      "Our comprehensive uniform solutions are meticulously tailored for diverse retail environments—from luxury shopping malls and flagship stores to specialized boutiques and beauty centers in Riyadh, Jeddah, and all major Saudi cities. Each uniform is professionally designed to reflect your unique brand identity while ensuring staff comfort during extended customer interaction periods.",
      "With our deep understanding of Saudi retail sector requirements and Vision 2030 growth objectives, we offer innovative customization options that perfectly balance modern aesthetics with cultural sensitivity. Transform your retail brand presence with uniforms that embody professionalism, build customer confidence, and contribute to a cohesive shopping experience that drives business success."
    ]},
    keyBenefits: {
      title: "Benefits for Your Retail Business",
    benefits: [
      {
        title: "Enhanced Brand Identity",
        description: "Custom-designed uniforms that perfectly align with your brand's visual identity and elevate customer perception of your business, creating an integrated brand experience.",
        icon: "/images/icons/institutional-branding.svg",
        gradient: "from-blue-500 to-indigo-600"
      },
      {
        title: "Exceptional Customer Experience",
        description: "Professional staff appearance builds instant trust and creates memorable customer service interactions that drive repeat business and positive word-of-mouth.",
        icon: "/images/icons/role-identification.svg",
        gradient: "from-green-500 to-emerald-600"
      },
      {
        title: "Staff Comfort & Performance",
        description: "Ergonomically designed uniforms with premium breathable fabrics enhance staff comfort and productivity during long retail hours, reducing fatigue and improving service quality.",
        icon: "/images/icons/comfortflex.svg",
        gradient: "from-purple-500 to-violet-600"
      },
      {
        title: "Instant Brand Recognition",
        description: "Distinctive and attractive uniforms help customers easily identify staff members, improving service accessibility and creating brand consistency across multiple locations or departments.",
        icon: "/images/icons/role-identification.svg",
        gradient: "from-pink-500 to-rose-600"
      },
      {
        title: "Superior Quality & Durability",
        description: "Premium materials and expert craftsmanship maintain professional appearance through intensive daily use in demanding retail environments, providing excellent cost-efficiency over time.",
        icon: "/images/icons/duraseal.svg",
        gradient: "from-amber-500 to-orange-600"
      }
    ]},
    featuredOfferings: {
      title: "Premium Retail Uniform Collections",
      offerings: [
      {
        id: "mall-staff-uniforms",
        name: "Luxury Mall Staff Uniforms",
        description: "Professional and distinctive attire for reception staff, customer service representatives, and information desks that enhances the mall's commercial image and creates an atmosphere of luxury and professionalism.",
        image: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
        href: "/shop/retail-uniforms/beauty-salon",
        features: ["Advanced stain-resistant fabric", "Contemporary design elements", "Easy maintenance", "Comfortable stretch materials"],
        badge: "Premium Quality",
        price: "From SAR 400"
      }
    ]},
    fabricTechnologies: {
      title: "Advanced Fabric Technologies",
      technologies: [
      {
        name: "Premium Comfort Technology™",
        description: "A blend of advanced fabrics with moisture-wicking properties that provide unparalleled all-day comfort and breathability for retail staff in temperature-controlled environments.",
        icon: "/images/icons/comfortflex.svg",
        animation: "fade-right"
      },
      {
        name: "Advanced Stain Protection™",
        description: "Revolutionary fabric treatment that effectively repels liquids, resists stains, and maintains a crisp, professional appearance throughout challenging retail shifts.",
        icon: "/images/icons/duraseal.svg",
        animation: "fade-up"
      },
      {
        name: "Climate Control Fabric™",
        description: "Specialized fabric construction with adaptive properties that actively regulate temperature in diverse retail environments, from mall concourses to individual stores.",
        icon: "/images/icons/coolcore.svg",
        animation: "fade-left"
      },
      {
        name: "EcoFlex Sustainable Fabric™",
        description: "Environmentally responsible textiles that combine durability with sustainability, helping retail brands achieve environmental responsibility goals while maintaining a distinguished appearance.",
        icon: "/images/icons/biocare.svg",
        animation: "fade-up"
      }
    ]},
    customizationOptions: {
      title: "Tailored to Your Retail Brand",
      options: [
      {
        name: "Precise Brand Integration",
        description: "Perfect Pantone color matching and expert logo application for seamless alignment with overall brand guidelines and marketing materials across all retail touchpoints.",
        icon: "/images/icons/institutional-branding.svg",
        gradient: "from-blue-400 to-blue-600"
      },
      {
        name: "Department Style Variations",
        description: "Carefully coordinated design options that precisely distinguish between different roles and departments while maintaining perfect brand consistency throughout the retail operation.",
        icon: "/images/icons/department-colors.svg",
        gradient: "from-purple-400 to-purple-600"
      },
      {
        name: "Strategic Seasonal Collections",
        description: "Forward-planning uniform programs that adapt to different seasons, special promotions, and retail campaigns while maintaining core brand identity elements.",
        icon: "/images/icons/coolcore.svg",
        gradient: "from-green-400 to-green-600"
      },
      {
        name: "Versatile Accessory Systems",
        description: "Diverse accessory components that can be added to or removed from core uniform pieces to accommodate different seasons, promotions, or retail zones while maintaining brand cohesion.",
        icon: "/images/icons/modest-modifications.svg",
        gradient: "from-amber-400 to-orange-500"
      }
    ]},
    testimonials: {
      title: "What Our Retail Clients Say",
      items: [
        {
          quote: "Uneom transformed our brand presence with retail uniforms that perfectly align with our upscale positioning. Our staff receives constant compliments, and the customer-staff interactions have improved significantly.",
          author: "Sarah Al-Fahad",
          position: "Brand Director",
          company: "Riyadh Luxury Retail Group"
        },
        {
          quote: "The combination of excellent design and practical functionality in our mall staff uniforms has exceeded expectations. Staff report high comfort levels even during busy 10-hour shifts, and customer feedback has been overwhelmingly positive.",
          author: "Ahmed Al-Dosari",
          position: "Operations Manager",
          company: "Premium Mall Jeddah"
        }
      ]},
    stats: {
      title: "Retail Uniform Excellence",
      items: [
      {
        value: "96%",
        label: "Customer Satisfaction",
        description: "Our retail clients report exceptional satisfaction with both our uniform quality and service excellence."
      },
      {
        value: "+15",
        label: "Years Experience",
        description: "Supplying premium uniforms to the finest retail brands and shopping destinations in Saudi Arabia."
      },
      {
        value: "+250",
        label: "Retail Clients",
        description: "From luxury malls to specialized retailers, serving Saudi Arabia's diverse retail landscape."
      },
      {
        value: "+40,000",
        label: "Uniforms Supplied",
        description: "Annually to retail staff across Saudi Arabia, ensuring consistent brand representation."
      }
    ]},
    relatedBlogs: {
      title: "Retail Uniform Insights",
      posts: [
      {
        title: "The Impact of Professional Uniforms on Retail Success",
        description: "Discover how strategically designed uniforms can significantly boost sales, enhance customer experience, and strengthen brand loyalty in the Saudi retail sector",
        image: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
        link: "/blog/retail-uniform-impact"
      },
      {
        title: "Choosing the Right Uniforms for Your Retail Team",
        description: "An expert guide to selecting uniforms that perfectly align with your brand strategy while optimizing staff performance and comfort in retail environments",
        image: "/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg",
        link: "/blog/retail-uniform-selection-guide"
      },
      {
        title: "Sustainable Retail Uniforms: The Future of Fashion",
        description: "How eco-friendly uniform solutions are transforming retail operations while supporting Saudi Vision 2030 sustainability goals",
        image: "/images/industries/retail-shops/retail-shops-uniform-shop-factory.jpg",
        link: "/blog/sustainable-retail-uniforms"
      }
    ]},
    faq: {
      title: "Frequently Asked Questions",
      questions: [
      {
          question: "How can retail uniforms improve customer experience?",
          answer: "Professional retail uniforms enhance customer experience in multiple ways: they create instant staff recognition, allowing customers to easily identify who can assist them; they communicate professionalism and attention to detail, building customer confidence; they reinforce your brand identity visually, strengthening overall brand perception; and they create a cohesive atmosphere that reflects your brand's quality standards throughout the entire shopping journey."
      },
      {
          question: "What factors should we consider when selecting retail uniforms?",
          answer: "Key factors for retail uniform selection include: brand alignment (color, styling, visual elements), comfort for long retail shifts, durability for frequent washing, fabric performance in retail environments, department differentiation requirements, seasonal adaptability, Islamic dress code considerations for Saudi contexts, and cost-effectiveness over the uniform lifecycle. Our consultation process helps systematically address each of these factors."
      },
      {
          question: "How are retail uniforms tailored for Saudi Arabia's unique requirements?",
          answer: "Our retail uniforms for Saudi Arabia incorporate several unique adaptations: modest design options that respect Islamic dress codes while maintaining professional retail functionality; fabric selections optimized for Saudi Arabia's climate combined with air-conditioned retail environments; color and design elements that resonate with Saudi consumers' expectations for premium retail experiences; and customization options that accommodate both traditional Saudi retail contexts and international brand guidelines for global retailers operating in the Kingdom."
      },
      {
        question: "Do you offer design consultation services for retail uniforms?",
        answer: "Absolutely. Our specialized retail uniform design team provides comprehensive consultation services, including brand analysis, retail environment assessment, and custom design development to create uniforms that perfectly align with your brand vision and operational requirements. This collaborative process ensures optimal outcomes for your unique retail context."
      },
      {
        question: "How do your retail uniforms address Saudi Arabian climate conditions?",
        answer: "Our retail uniforms feature fabrics and construction techniques specifically selected and optimized for Saudi Arabia's climate. We utilize breathable, moisture-wicking materials that maintain comfort in air-conditioned environments while providing appropriate coverage and professional appearance aligned with local cultural expectations."
      }
    ]},
    finalCta: {
      title: "Elevate Your Brand with Premium Uniform Solutions",
      description: "Transform your retail brand presence with expertly designed and custom-tailored uniforms that enhance brand identity, boost staff confidence, and create exceptional customer experiences that drive sales and loyalty.",
      cta: "Request Your Free Consultation",
      ctaLink: "/contact?industry=retail-shops",
      secondaryCta: "Explore Retail Catalog",
      secondaryCtaLink: "/shop/retail-uniforms"
    }};

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
        canonicalUrl="https://uneom.com/industries/retail-shops/"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 md:py-32">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.keyBenefits.benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-white`}>
                  <Image src={benefit.icon} alt={benefit.title} width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
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
              <div key={offering.id} className="border rounded-lg overflow-hidden shadow-lg group">
                <Link href={offering.href}>
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={offering.image} 
                      alt={offering.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {offering.badge && (
                      <span className="absolute top-4 right-4 bg-primary-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
                        {offering.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{offering.name}</h3>
                    <p className="text-neutral-600 mb-4 text-sm">{offering.description}</p>
                    {offering.features && (
                      <ul className="space-y-2 mb-4">
                        {offering.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-primary-600 mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {offering.price && (
                      <p className="font-semibold text-primary-600">{offering.price}</p>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fabric Technologies Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <Container>
          <SectionHeading className="text-center mb-16">{content.fabricTechnologies.title}</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.fabricTechnologies.technologies.map((tech) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                </div>
                <h3 className="text-lg font-semibold text-center text-neutral-800 mb-3">{tech.name}</h3>
                <p className="text-neutral-600 text-sm text-center">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Customization Options Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading className="text-center mb-16">{content.customizationOptions.title}</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.customizationOptions.options.map((option) => (
              <div key={option.name} className={`p-6 rounded-lg bg-gradient-to-r ${option.gradient}`}>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Image src={option.icon} alt={option.name} width={32} height={32} />
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-3">{option.name}</h3>
                <p className="text-white/90 text-sm text-center">{option.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      {content.testimonials && content.testimonials.items.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <Container>
            <SectionHeading className="text-center mb-12">{content.testimonials.title}</SectionHeading>
            <div className="max-w-3xl mx-auto">
              {content.testimonials.items.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg mb-6"
                >
                  <p className="text-lg text-neutral-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-right font-semibold text-gray-700">
                    &mdash; {testimonial.author}, {testimonial.position}
                    {testimonial.company && <span>, {testimonial.company}</span>}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Stats Section */}
      {content.stats && content.stats.items.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <Container>
            <SectionHeading className="text-center mb-16 text-white">{content.stats.title}</SectionHeading>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {content.stats.items.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-lg font-semibold mb-2">{stat.label}</p>
                  <p className="text-sm text-white/80">{stat.description}</p>
                </motion.div>
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
            <div className="grid md:grid-cols-3 gap-8">
              {content.relatedBlogs.posts.map((post, index) => (
                <Link key={index} href={post.link} className="group">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                  <p className="text-neutral-600 text-sm">{post.description}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Section */}
      {content.faq && content.faq.questions.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-50">
          <Container>
            <SectionHeading className="text-center mb-16">{content.faq.title}</SectionHeading>
            <div className="max-w-3xl mx-auto divide-y">
              {content.faq.questions.map((faq, index) => (
                <details key={index} className="py-5 group" open={index === 0}>
                  <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg text-neutral-800">
                    {faq.question}
                    <span className="transition-transform transform group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 text-neutral-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <Container className="text-center">
          <SectionHeading className="text-white mb-6">{content.finalCta.title}</SectionHeading>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{content.finalCta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={content.finalCta.ctaLink} size="lg" variant="secondary">
              {content.finalCta.cta}
            </Button>
            {content.finalCta.secondaryCta && (
              <Button href={content.finalCta.secondaryCtaLink} size="lg" variant="outline">
                {content.finalCta.secondaryCta}
              </Button>
            )}
          </div>
        </Container>
      </section>
    </>
  );
} 