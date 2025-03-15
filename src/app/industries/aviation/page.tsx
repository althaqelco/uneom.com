'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function AviationPage() {
  // Define locale for language support
  const locale = 'en';
  
  const aviationData = {
    locale: locale,
    title: 'Professional Aviation Uniforms & Airline Attire in Saudi Arabia',
    subtitle: 'Premium cabin crew, ground staff, and aviation personnel uniforms tailored for Saudi airlines',
    heroImage: '/images/industries/aviation.jpg',
    
    // SEO metadata
    metaDescription: 'UNEOM provides professional aviation uniforms for Saudi airlines, including cabin crew, ground staff, and maintenance personnel attire with Islamic dress options.',
    keywords: ['aviation uniforms Saudi Arabia', 'airline uniforms', 'cabin crew attire', 'Saudi airline uniforms', 'ground staff uniforms', 'Islamic flight attendant uniforms'],
    canonicalUrl: 'https://uneom.com/industries/aviation',
    
    introduction: [
      "In Saudi Arabia's rapidly growing aviation sector, professional uniforms play a crucial role in establishing airline identity, ensuring operational efficiency, and projecting the Kingdom's commitment to excellence in global air travel. UNEOM's comprehensive aviation uniform solutions are specifically designed to meet the unique requirements of Saudi airlines and aviation businesses.",
      
      "From cabin crew and flight deck personnel to ground operations and technical staff, we provide premium-quality uniforms that combine sophisticated style, practical functionality, and cultural sensitivity. Our aviation collections incorporate advanced fabric technologies that withstand the rigorous demands of air travel while offering options that respect Islamic dress codes and reflect Saudi heritage elements.",
      
      "As a trusted partner to leading Saudi airlines and aviation service companies, we understand the critical importance of uniform programs that enhance your brand identity while meeting international aviation standards and local cultural considerations."
    ],
    
    benefits: [
      {
        title: "Saudi Aviation Industry Expertise",
        description: "Our design team possesses specialized knowledge of Saudi Arabia's aviation sector requirements, including GACA standards and airline-specific protocols.",
        icon: "/icons/industry-expertise.svg"
      },
      {
        title: "Islamic-Compliant Design Options",
        description: "Specialized uniform designs that respect modest dress requirements while meeting international aviation standards and operational functionality needs.",
        icon: "/icons/islamic-design.svg"
      },
      {
        title: "International-Standard Fabrics",
        description: "High-performance textiles that maintain appearance during long-haul flights, resist wrinkles, provide comfort in varying cabin conditions, and meet safety requirements.",
        icon: "/icons/international-standard.svg"
      },
      {
        title: "Brand Identity Enhancement",
        description: "Distinctive uniforms that reinforce your airline's visual identity, with careful attention to color matching, logo integration, and unique design elements.",
        icon: "/icons/brand-identity.svg"
      },
      {
        title: "Comprehensive Role-Based Designs",
        description: "Coordinated uniform systems that clearly distinguish between different aviation roles while maintaining overall brand cohesion across your organization.",
        icon: "/icons/role-based.svg"
      }
    ],
    
    products: [
      {
        id: "cabin-crew-uniform",
        name: "Cabin Crew Uniform Collection",
        description: "Complete flight attendant uniform sets featuring elegant design, practical functionality, and options for both traditional and international styling.",
        image: "/images/products/airline-uniform.jpg",
        href: "/shop/aviation/cabin-crew-uniform"
      },
      {
        id: "pilot-uniform",
        name: "Professional Pilot Uniforms",
        description: "Distinguished pilot attire with precision tailoring, premium fabrics, and details that reflect aviation authority and professionalism.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/aviation/pilot-uniform"
      },
      {
        id: "ground-staff-uniform",
        name: "Ground Staff Uniforms",
        description: "Functional and professional uniforms for check-in, gate agents, and passenger service personnel that balance style with practical operational needs.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/aviation/ground-staff-uniform"
      },
      {
        id: "technical-crew-attire",
        name: "Technical Crew Attire",
        description: "Specialized uniforms for technical and maintenance staff featuring durable construction, safety features, and practical design for engineering tasks.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/aviation/technical-crew-attire"
      },
      {
        id: "modest-aviation-uniform",
        name: "Modest Aviation Uniforms",
        description: "Specially designed aviation attire for female staff that combines modest Islamic dress requirements with international aviation standards.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/aviation/modest-aviation-uniform"
      },
      {
        id: "vip-lounge-attire",
        name: "VIP Lounge & Premium Service Attire",
        description: "Sophisticated uniforms for staff serving premium and VIP passengers, featuring elevated design elements and luxury fabric options.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/aviation/vip-lounge-attire"
      }
    ],
    
    // Aviation department roles with specialized products
    departments: [
      {
        name: "Cabin Services",
        description: "Professional uniforms for cabin crew that combine sophisticated appearance with practical functionality for in-flight service, featuring options for both international and Saudi-specific styling.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Flight Attendant Sets", "Pursers & Cabin Managers", "Saudi-Styled Cabin Attire"]
      },
      {
        name: "Flight Deck",
        description: "Distinguished pilot uniforms that convey authority and professionalism while meeting international aviation standards and Saudi airline regulations.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Captain & First Officer Uniforms", "Flight Engineer Attire", "Pilot Accessories"]
      },
      {
        name: "Ground Operations",
        description: "Practical, professional uniforms for ground staff involved in passenger services, featuring weather-appropriate options and clear role identification.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Check-in Counter Uniforms", "Boarding Gate Attire", "Passenger Service Sets"]
      },
      {
        name: "Technical & Maintenance",
        description: "Durable, functional uniforms designed for technical personnel with appropriate safety features, tool accessibility, and weather considerations.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Aircraft Maintenance Uniforms", "Engineering Staff Attire", "Ramp Operations Wear"]
      }
    ],
    
    fabricTechnologies: [
      {
        name: "TravelFresh Antimicrobial",
        description: "Advanced fabric treatment that maintains freshness during long-haul flights, inhibits odor development, and extends the life of aviation uniforms.",
        icon: "/icons/travelfresh.svg"
      },
      {
        name: "AeroFlex Comfort System",
        description: "Innovative stretch technology providing exceptional range of motion and comfort during extended flights and active service periods.",
        icon: "/icons/aeroflex.svg"
      },
      {
        name: "WrinkleFree Travel Tech",
        description: "Specialized fabric engineering that resists creasing and maintains a professional appearance throughout long duty periods and international travel.",
        icon: "/icons/wrinklefree.svg"
      },
      {
        name: "ThermoRegulate Cabin Control",
        description: "Adaptive fabric technology that helps maintain comfort across varying cabin temperatures and climate conditions encountered during international flights.",
        icon: "/icons/thermoregulate.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Airline Branding Integration",
        description: "Precision incorporation of your airline's visual identity elements, including exact color matching, logo placement, and distinctive design features.",
        icon: "/icons/airline-branding.svg"
      },
      {
        name: "Role Distinction Systems",
        description: "Clear visual indicators to differentiate between staff roles, service levels, and personnel seniority through thoughtful design elements.",
        icon: "/icons/role-distinction.svg"
      },
      {
        name: "Cultural Design Elements",
        description: "Thoughtful incorporation of Saudi heritage elements and cultural motifs into uniform designs, creating a distinctive Saudi identity.",
        icon: "/icons/cultural-elements.svg"
      },
      {
        name: "Modesty Adaptations",
        description: "Specialized modifications to standard aviation uniform designs that respect Islamic dress codes while maintaining professional international standards.",
        icon: "/icons/modesty-adaptations.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM transformed our airline's visual identity with uniforms that perfectly balance our Saudi heritage with international aviation standards. Their attention to detail in incorporating our branding elements while considering the practical needs of our diverse staff roles has significantly enhanced both our image and operational functionality.",
        author: "Capt. Abdullah Al-Zahrani",
        position: "Operations Director",
        company: "Royal Sky Airlines"
      },
      {
        id: "testimonial-2",
        quote: "The modest uniform options UNEOM designed for our female cabin crew have received overwhelmingly positive feedback from staff and passengers alike. The uniforms beautifully represent our company's values while meeting all practical requirements for in-flight service. The fabric quality has proven exceptional, maintaining appearance even on our longest international routes.",
        author: "Norah Al-Saud",
        position: "Head of Cabin Services",
        company: "Saudi Wings Aviation"
      }
    ],
    
    // FAQ section for SEO enhancement
    faq: [
      {
        question: "How do UNEOM's aviation uniforms meet the specific needs of Saudi airlines?",
        answer: "Our aviation uniforms are specially designed for Saudi airlines, featuring modest options for female staff that conform to Islamic dress codes while meeting international aviation standards, incorporating Saudi heritage elements for distinctive brand identity, using fabrics selected for the rigors of Saudi aviation routes including desert conditions, and ensuring compliance with GACA and international safety standards."
      },
      {
        question: "Can you create different uniform styles for various staff roles while maintaining brand consistency?",
        answer: "Yes, we specialize in developing comprehensive aviation uniform programs that clearly distinguish between different staff roles (cabin crew, pilots, ground staff, technical personnel) while maintaining overall brand coherence through consistent color palettes, design elements, and branding applications. This approach helps passengers identify staff functions while presenting a unified airline identity."
      },
      {
        question: "What fabric technologies are important for aviation uniforms in Saudi Arabia's climate?",
        answer: "For Saudi aviation environments, we incorporate several specialized fabric technologies: ThermoRegulate systems that adapt to varying conditions between aircraft and ground environments, antimicrobial treatments that ensure freshness during long duty periods in warm conditions, moisture-wicking properties for comfort in Saudi's hot climate, and advanced wrinkle-resistance to maintain professional appearance throughout extended shifts."
      },
      {
        question: "How do you handle uniform implementation for airlines with large and diverse staff numbers?",
        answer: "We offer comprehensive implementation programs for airlines of all sizes, including fit sessions at multiple locations, detailed sizing systems with Arabia-specific measurements, phased rollout planning to ensure operational continuity, staff training on uniform care and presentation, and ongoing support for new hires and replacements to maintain consistent appearance across the entire organization."
      }
    ],
    
    // Related blog posts for increased internal linking and SEO value
    relatedContent: {
      title: "Aviation Uniform Resources",
      blogPosts: [
        {
          title: "Evolving Trends in Gulf Airline Uniforms: Tradition Meets International Standards",
          excerpt: "Explore how leading Gulf carriers are balancing cultural identity with global aviation standards in their uniform programs.",
          url: "/blog/gulf-airline-uniform-trends",
          image: "/images/default-placeholder.jpg"
        },
        {
          title: "The Role of Uniforms in Airline Brand Identity and Passenger Perception",
          excerpt: "Research insights on how crew attire influences passenger confidence, loyalty, and overall brand perception in the aviation industry.",
          url: "/blog/uniforms-airline-brand-identity",
          image: "/images/default-placeholder.jpg"
        },
        {
          title: "Implementing Practical Modest Uniform Options for Female Aviation Staff",
          excerpt: "Best practices for developing flight attendant and ground staff uniforms that respect Islamic dress codes while meeting operational needs.",
          url: "/blog/modest-aviation-uniforms-female-staff",
          image: "/images/default-placeholder.jpg"
        }
      ],
      resources: [
        {
          title: "Aviation Fabric Performance Guide",
          description: "Technical specifications for fabrics that meet aviation industry requirements",
          url: "/resources/fabric-guide/aviation",
          icon: "/icons/fabric-guide.svg"
        },
        {
          title: "Airline Uniform Size Guide",
          description: "Detailed sizing information for aviation personnel uniforms",
          url: "/resources/size-guide/aviation",
          icon: "/icons/size-guide.svg"
        },
        {
          title: "Airline Uniform Program Management Guide",
          description: "Comprehensive guide to implementing airline-wide uniform programs",
          url: "/resources/management-guide/airline-uniform-program",
          icon: "/icons/management-guide.svg"
        }
      ]
    },
    
    // Statistical information for credibility and SEO enhancement
    statistics: [
      {
        value: "12+",
        label: "Saudi & Gulf Airlines Supplied",
        icon: "/icons/airlines.svg"
      },
      {
        value: "15,000+",
        label: "Aviation Personnel Wearing UNEOM Uniforms",
        icon: "/icons/aviation-staff.svg"
      },
      {
        value: "100%",
        label: "GACA Compliance Rate",
        icon: "/icons/compliance-check.svg"
      },
      {
        value: "35+",
        label: "International Destinations Represented",
        icon: "/icons/destinations.svg"
      }
    ],
    
    // Case study for social proof and credibility
    caseStudy: {
      title: "Comprehensive Uniform Redesign for Expanding Saudi Airline",
      client: "Saudi Wings Aviation",
      challenge: "Creating a distinctive uniform program for a rapidly growing airline that needed to establish a strong brand identity while accommodating diverse staff roles and Saudi cultural considerations.",
      solution: "Developed a comprehensive uniform system with coordinated designs across all aviation roles, featuring distinctive Saudi-inspired elements, practical role-specific adaptations, and both international and modest options for female staff.",
      results: [
        "92% passenger recognition improvement in brand identity surveys",
        "Staff satisfaction rating of 89% with new uniforms compared to 62% with previous attire",
        "Increased practical functionality resulting in 28% fewer uniform-related issues",
        "Successful implementation across 3,500+ staff members in multiple locations"
      ],
      image: "/images/default-placeholder.jpg",
      testimonial: {
        quote: "The uniform program UNEOM created has become a cornerstone of our brand identity and has significantly contributed to our recognition as a premium Saudi carrier in international markets.",
        author: "Faisal Al-Otaibi",
        position: "CEO",
        company: "Saudi Wings Aviation"
      }
    },
    
    // Call to action section
    cta: {
      title: "Elevate Your Airline's Image with Professional Uniform Solutions",
      description: "Contact our aviation uniform specialists to discuss your airline's specific requirements and discover how our comprehensive uniform solutions can enhance your brand identity, staff professionalism, and operational efficiency.",
      buttonText: "Request Aviation Uniform Consultation",
      buttonUrl: "/contact?industry=aviation"
    }
  };
  
  return <IndustryPageLayout locale={locale} industryData={aviationData} />;
} 