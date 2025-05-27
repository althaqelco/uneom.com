'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaHardHat, FaShieldAlt, FaTemperatureHigh, FaTshirt, 
  FaTools, FaUserShield, FaCertificate, FaGlobeAsia, 
  FaIndustry, FaChartLine, FaTruck, FaHandshake, 
  FaArrowRight, FaWhatsapp, FaFire, FaCheckCircle, 
  FaLock, FaUserCog, FaTachometerAlt, FaRegLightbulb, 
  FaAward, FaStar, FaAngleRight
} from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import SEO from '@/components/SEO';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ManufacturingIndustryPage() {
  const locale = 'en';
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Function to handle WhatsApp contact
  const handleWhatsAppInquiry = () => {
    const message = "Hello UNEOM, I'm interested in industrial uniforms for our manufacturing facility in Saudi Arabia. Could you provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971558164922?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to handle product inquiry
  const handleProductInquiry = (productName: string) => {
    const message = `Hello UNEOM, I'm interested in the ${productName} for our industrial facility in Saudi Arabia. Could you send me more details and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971558164922?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // Products data
  const products = [
    {
      id: "industrial-coverall-pro",
      name: "Industrial Coverall Pro",
      description: "Advanced full-body protection engineered for Saudi Arabia's most demanding industrial environments with multi-hazard protection featuring heat-resistant, flame-retardant, and chemical-resistant technologies.",
      image: "/images/industries/manufacturing/manufacturing_uniform_product1.jpg", // Main product image
      imageGallery: [
        "/images/industries/manufacturing/manufacturing_uniform_product2.jpg"
      ],
      href: "/shop/industrial-uniforms/flame-resistant-workwear", // Main navigation link
      features: [
        "Arc Rating: ATPV 12+ cal/cm²",
        "Flash Fire Protection: NFPA 2112 Certified",
        "Heat Transfer Index: HTI₂₄ > 16 seconds",
        "Self-Extinguishing: < 2 seconds"
      ],
      price: "SAR 549 - 749",
      badge: "Safety Certified"
    },
    {
      id: "hi-vis-safety-uniform",
      name: "Hi-Vis Safety Uniform",
      description: "ANSI/ISEA 107 Class 3-compliant high-visibility garments with 360° advanced reflective elements designed for Saudi construction, roadwork, and night shift industrial operations.",
      image: "/images/industries/manufacturing/manufacturing_uniform_product3.jpg",
      href: "/shop/industrial-uniforms/hi-vis-safety-uniform",
      features: [
        "Visibility Range: 300+ meters in darkness",
        "360° Reflective Technology with 5cm+ strips",
        "UV Protection: UPF 40+",
        "Moisture Management Technology"
      ],
      price: "SAR 429 - 549",
      badge: "Enhanced Visibility"
    }
  ];
  
  // Blog posts data
  const blogPosts = [
    {
      title: "2024 Advancements in Industrial Protective Clothing for Saudi Manufacturing",
      description: "Explore the latest cutting-edge innovations in protective workwear technology specifically engineered for Saudi Arabia's manufacturing sector.",
      image: "/images/industries/manufacturing/manufacturing_uniform_variation.jpg",
      link: "/blog/industrial-protective-clothing-advances",
      readTime: "8 min read",
      date: "May 15, 2024"
    },
    {
      title: "Sustainable Manufacturing Uniforms: Meeting Saudi Vision 2030 Goals",
      description: "How next-generation eco-friendly industrial workwear is supporting Saudi Arabia's sustainability objectives while maintaining world-class safety standards.",
      image: "/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg",
      link: "/blog/sustainable-uniforms-2024-trends",
      readTime: "7 min read",
      date: "April 22, 2024"
    },
    {
      title: "Safety Standards and Compliance: Industrial Workwear in Saudi Manufacturing",
      description: "A comprehensive guide to navigating Saudi and international safety regulations for industrial uniforms in manufacturing facilities across the Kingdom.",
      image: "/images/industries/manufacturing/manufacturing_uniform_default.jpg",
      link: "/blog/industrial-safety-compliance-guide",
      readTime: "10 min read",
      date: "March 30, 2024"
    }
  ];
  
  // Technologies data
  const technologies = [
    {
      name: "ThermoRegulate™ Advanced Cooling",
      description: "Patented multi-layer temperature regulation technology specifically engineered for Saudi Arabia's extreme climate.",
      icon: <FaTemperatureHigh className="h-10 w-10 text-primary-600 mb-4" />
    },
    {
      name: "DuraTough™ Reinforcement",
      description: "Revolutionary triple-stitching and advanced abrasion-resistant fabric technology that extends garment life up to 3x longer.",
      icon: <FaShieldAlt className="h-10 w-10 text-primary-600 mb-4" />
    },
    {
      name: "FlexWork™ Pro Mobility System",
      description: "Innovative ergonomic garment architecture with strategically placed 4-way stretch panels that maximize mobility.",
      icon: <FaTools className="h-10 w-10 text-primary-600 mb-4" />
    },
    {
      name: "ChemShield™ Advanced Protection",
      description: "Industry-leading chemical-resistant fabric treatments developed specifically for Saudi petrochemical environments.",
      icon: <FaFire className="h-10 w-10 text-primary-600 mb-4" />
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      content: "UNEOM transformed our safety program with industrial uniforms that not only exceed international standards but are also exceptionally comfortable in Saudi Arabia's high-temperature industrial environments.",
      author: "Eng. Mohammed Al-Otaibi",
      position: "Safety & Compliance Director",
      company: "Jubail Industrial Development Corporation",
      image: "/images/avatar-placeholder.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "After implementing UNEOM's customized industrial uniform program, we've seen a measurable 32% decrease in heat-related incidents and a 28% increase in productivity.",
      author: "Fahad Al-Harbi",
      position: "Operations Manager",
      company: "Saudi Manufacturing Industries",
      image: "/images/avatar-placeholder.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "The difference in quality and performance between UNEOM's industrial workwear and our previous supplier is remarkable. Their flame-resistant uniforms have successfully protected our workers during two significant incidents.",
      author: "Dr. Khalid Al-Zahrani",
      position: "HSE Department Head",
      company: "Yanbu Petrochemical Industries",
      image: "/images/avatar-placeholder.jpg",
      logo: "/images/logos/placeholder-logo.png"
    }
  ];
  
  // Statistics data
  const statistics = [
    {
      value: "97%",
      label: "Saudi industries report improved safety with UNEOM workwear",
      icon: <FaShieldAlt className="h-10 w-10 text-primary-600" />
    },
    {
      value: "3x",
      label: "Longer durability than standard industrial uniforms",
      icon: <FaTachometerAlt className="h-10 w-10 text-primary-600" />
    },
    {
      value: "35%",
      label: "Average reduction in heat-related incidents",
      icon: <FaTemperatureHigh className="h-10 w-10 text-primary-600" />
    },
    {
      value: "24/7",
      label: "Technical support for Saudi industrial clients",
      icon: <FaUserCog className="h-10 w-10 text-primary-600" />
    }
  ];
  
  // Sub-Industry data
  const subIndustries = [
    {
      id: "heavy-industrial",
      title: "Uniform Solutions for Heavy Industry",
      description: "UNEOM provides robust and highly durable workwear specifically designed for Saudi Arabia's demanding heavy industry sector, including construction, metal fabrication, and large-scale manufacturing. Our uniforms prioritize safety, resilience against wear and tear, and comfort in challenging physical environments.",
      keyChallenges: [
        "Extreme physical stress and abrasion",
        "Requirement for high-visibility in complex sites",
        "Protection against impact and potential hazards",
        "Comfort during physically demanding tasks"
      ],
      relevantProducts: ["industrial-coverall-pro", "hi-vis-safety-uniform"],
      image: "/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg"
    },
    {
      id: "petrochemical",
      title: "Specialized Uniforms for the Petrochemical Sector",
      description: "Safety is paramount in the petrochemical industry. We offer advanced flame-resistant (FR) and chemical-resistant uniforms that meet stringent international and Saudi safety standards (like NFPA, ISO, SASO), ensuring maximum protection for workers in refineries, processing plants, and labs.",
      keyChallenges: [
        "Risk of flash fire and thermal hazards",
        "Exposure to chemicals and hazardous materials",
        "Need for anti-static properties",
        "Compliance with strict safety regulations"
      ],
      relevantProducts: ["flame-resistant-workwear", "industrial-coverall-pro"],
      image: "/images/industries/manufacturing/manufacturing_uniform_perpare.jpg"
    },
    {
      id: "food-processing",
      title: "Hygienic Uniforms for Food Processing",
      description: "UNEOM supplies hygienic, easy-to-clean, and durable uniforms designed for Saudi Arabia's food and beverage manufacturing sector. Our workwear meets food safety standards, preventing contamination while ensuring employee comfort and professional appearance in production lines, packaging, and quality control.",
      keyChallenges: [
        "Maintaining strict hygiene standards",
        "Preventing cross-contamination",
        "Resistance to food-based stains and frequent washing",
        "Comfort in varying temperature environments (cold storage/hot kitchens)"
      ],
      relevantProducts: [],
      image: "/images/industries/manufacturing/manufacturing_uniform_basic.jpg"
    }
  ];
  
  const content = {
    meta: {
      title: "Manufacturing Uniforms & Workwear in Saudi Arabia | UNEOM",
      description: "Premium industrial workwear and manufacturing uniforms tailored for Saudi factories, ensuring safety, durability, and compliance with Saudi industrial standards.",
    },
    hero: {
      headline: "Manufacturing Uniforms & Industrial Workwear in Saudi Arabia",
      subheadline: "Premium workwear for production facilities, factories, and industrial operations in the Kingdom, combining safety compliance, durability, and professional identity.",
      cta: "Request Manufacturing Workwear Quote",
      ctaLink: '/quote?industry=manufacturing',
      image: "/images/manufacturing/manufacturing_facility_workers_main.jpg", 
    },
    intro: {
      title: "Industrial Excellence Through Professional Workwear",
      paragraphs: [
        "In Saudi Arabia's rapidly growing manufacturing sector, professional workwear plays a crucial role in workplace safety, operational efficiency, and projecting a modern industrial identity. UNEOM's comprehensive manufacturing uniform solutions are specifically designed to meet the unique requirements of Saudi factories and industrial facilities.",
        "From production line personnel and machine operators to supervisors, quality control teams, and maintenance staff, we provide premium-quality workwear that combines practical functionality, maximum protection, and professional appearance. Our manufacturing collections incorporate advanced fabric technologies that withstand the rigorous demands of industrial environments while offering design options that respect Islamic dress codes and reflect Saudi industrial standards.",
        "As Saudi manufacturing continues its remarkable growth under Vision 2030, we partner with factories and industrial operations to develop uniform programs that enhance workplace safety, boost employee morale, and create a professional corporate identity that showcases Saudi Arabia's industrial capabilities."
      ],
    },
    keyBenefits: {
      title: "The UNEOM Advantage in Manufacturing Workwear",
      benefits: [
        {
          name: "Saudi Safety Compliance",
          description: "All our workwear meets or exceeds Saudi Occupational Safety and Health (SOSH) standards and international safety certifications applicable to various manufacturing environments.",
          icon: "/images/icons/safety-compliance-shield.svg"
        },
        {
          name: "Enhanced Corporate Identity",
          description: "We integrate your company branding into every uniform detail, creating a consistent professional appearance that strengthens your industrial brand identity.",
          icon: "/images/icons/corporate-identity-manufacturing.svg"
        },
        {
          name: "Modest & Practical Designs",
          description: "Special designs that respect modest dress requirements for female staff while maintaining practical functionality for industrial work environments.",
          icon: "/images/icons/modest-design-industrial.svg"
        },
        {
          name: "High-Performance Fabrics",
          description: "Manufacturing-specific textiles that offer durability, heat resistance, chemical protection, and comfort during long shifts in challenging industrial environments.",
          icon: "/images/icons/fabric-tech-industrial.svg"
        },
      ],
    },
    featuredOfferings: {
      title: "Comprehensive Manufacturing Workwear Collections",
      offerings: [
        {
          name: "Production Line Uniforms",
          description: "Durable and comfortable workwear designed for production line personnel, with features for movement flexibility and protection against common manufacturing hazards.",
          image: "/images/manufacturing/production_line_uniforms.jpg", // Main image
          link: "/shop/industrial-uniforms", // Main navigation link
          imageGallery: [
            "/images/manufacturing/supervisor_workwear.jpg",
            "/images/manufacturing/maintenance_technical_uniform.jpg",
            "/images/industries/manufacturing/customization-manufacturing-workwear.jpg"
          ]
        } // Closes the "Production Line Uniforms" object
      ] // Closes the "offerings" array
    }, // Closes the "featuredOfferings" object
    testimonials: {
      title: "Trusted by Leading Saudi Manufacturers",
      items: [
        {
          quote: "UNEOM's manufacturing workwear has significantly improved our workplace safety metrics and streamlined our uniform management process. Their attention to safety standards while maintaining comfort is exceptional.",
          author: "Mohammed Al-Harbi",
          position: "Operations Director, Saudi Advanced Industries",
        },
        {
          quote: "The durability and practicality of UNEOM's workwear has been impressive. Our employees appreciate the comfort during long shifts, and the modest options for our female engineers have been perfectly designed for industrial environments.",
          author: "Fatima Al-Otaibi",
          position: "HR Manager, Riyadh Manufacturing Complex",
        }
      ],
    },
    customizationOptions: {
      title: "Custom Workwear for Manufacturing Needs",
      description: "UNEOM provides fully customizable workwear solutions for the manufacturing sector, including options for high-visibility, flame resistance, and specific industry requirements. Enhance safety and brand identity with our tailored uniform programs.",
      image: "/images/industries/manufacturing/customization-manufacturing-workwear.jpg", // Placeholder image
      cta: "Discuss Your Requirements",
      ctaLink: "/services/custom-design"
    },
    relatedBlogs: {
      title: "Manufacturing Workwear Insights",
      posts: [
        {
          title: "Safety Standards for Saudi Manufacturing Facilities",
          link: "/blog/safety-standards-saudi-manufacturing",
          image: "/images/blog/placeholder-manufacturing1.jpg",
        },
        {
          title: "Workwear Innovations for Modern Saudi Factories",
          link: "/blog/workwear-innovations-saudi-factories",
          image: "/images/blog/placeholder-manufacturing2.jpg",
        }
      ],
    },
    finalCta: {
      title: "Elevate Your Manufacturing Operation with UNEOM",
      description: "Partner with UNEOM to design and deliver manufacturing workwear that prioritizes safety, durability, and professional identity. Contact our specialists today.",
      cta: "Get a Manufacturing Workwear Quote",
      ctaLink: '/quote?industry=manufacturing&focused=true',
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
        canonicalUrl="https://uneom.com/industries/manufacturing/"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20 md:py-32">
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
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <SectionHeading className="text-left mb-6 !text-3xl md:!text-4xl">{content.customizationOptions.title}</SectionHeading>
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
                  <p className="text-right font-semibold text-gray-700">&mdash; {testimonial.author}, {testimonial.position}</p>
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
      <section className="py-20 md:py-32 bg-gray-800 text-white">
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