'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function HospitalityPage() {
  // Define locale for language support
  const locale = 'en';
  
  const hospitalityData = {
    locale: locale,
    title: 'Premium Hospitality Uniforms & Hotel Staff Attire in Saudi Arabia',
    subtitle: 'Elegant, durable uniforms for hotels, resorts, restaurants, and hospitality venues across the Kingdom',
    heroImage: '/images/industries/hospitality.jpg',
    
    // SEO metadata
    metaDescription: 'UNEOM provides premium hospitality uniforms for Saudi hotels, resorts, and restaurants, combining elegant design with practical durability and Islamic dress options.',
    keywords: ['hospitality uniforms Saudi Arabia', 'hotel staff uniforms', 'restaurant uniforms', 'Saudi hotel attire', 'luxury resort uniforms', 'Islamic hospitality uniforms'],
    canonicalUrl: 'https://uneom.com/industries/hospitality',
    
    introduction: [
      "In Saudi Arabia's rapidly expanding hospitality sector, professional uniforms play a vital role in establishing brand identity, enhancing guest experience, and reflecting the Kingdom's commitment to world-class service. UNEOM's comprehensive hospitality uniform solutions are specifically designed to meet the unique requirements of Saudi hotels, resorts, restaurants, and hospitality venues.",
      
      "From front desk and concierge staff to housekeeping, food service, and management personnel, we provide premium-quality uniforms that combine sophisticated style, practical functionality, and cultural sensitivity. Our hospitality collections incorporate advanced fabric technologies that withstand the rigorous demands of the industry while offering options that respect Islamic dress codes and reflect Saudi hospitality traditions.",
      
      "As a trusted partner to leading Saudi hospitality brands, international hotel chains operating in the Kingdom, and independent luxury properties, we understand the critical importance of uniform programs that enhance your brand identity while meeting the practical needs of diverse staff roles in the Saudi hospitality environment."
    ],
    
    benefits: [
      {
        title: "Saudi Hospitality Expertise",
        description: "Our design team possesses specialized knowledge of Saudi Arabia's hospitality sector requirements, including cultural considerations and service standards.",
        icon: "/images/icons/saudi-expertise.svg"
      },
      {
        title: "Brand-Aligned Design",
        description: "Custom uniform programs that perfectly reflect your property's unique identity, service philosophy, and design aesthetic.",
        icon: "/images/icons/brand-aligned.svg"
      },
      {
        title: "Practical Durability",
        description: "High-performance fabrics and construction techniques that maintain appearance despite frequent laundering and the demands of hospitality environments.",
        icon: "/icons/durability.svg"
      },
      {
        title: "Staff Comfort Focus",
        description: "Ergonomic designs and climate-appropriate fabrics that ensure staff comfort during long shifts in various hotel environments.",
        icon: "/icons/comfort.svg"
      },
      {
        title: "Cultural Sensitivity",
        description: "Thoughtful uniform options that respect Islamic dress requirements while maintaining professional hospitality standards.",
        icon: "/icons/cultural-sensitivity.svg"
      }
    ],
    
    products: [
      {
        id: "front-office-uniforms",
        name: "Front Office & Reception Uniforms",
        description: "Sophisticated, brand-aligned attire for front desk, concierge, and guest relations staff who create crucial first impressions.",
        image: "/images/products/hotel-uniform.jpg",
        href: "/shop/hospitality/front-office-uniforms"
      },
      {
        id: "food-beverage-attire",
        name: "Food & Beverage Service Attire",
        description: "Practical, elegant uniforms for restaurant, café, and banquet staff that balance style with functionality for food service environments.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/hospitality/food-beverage-attire"
      },
      {
        id: "housekeeping-uniforms",
        name: "Housekeeping & Facilities Uniforms",
        description: "Durable, comfortable uniforms for housekeeping, maintenance, and facilities staff with practical features for operational efficiency.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/hospitality/housekeeping-uniforms"
      },
      {
        id: "executive-management-attire",
        name: "Executive & Management Attire",
        description: "Distinguished uniforms for management personnel that convey authority while maintaining brand consistency with other staff attire.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/hospitality/executive-management-attire"
      },
      {
        id: "spa-wellness-uniforms",
        name: "Spa & Wellness Uniforms",
        description: "Serene, comfortable attire for spa therapists and wellness staff that enhances the relaxation experience for guests.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/hospitality/spa-wellness-uniforms"
      },
      {
        id: "valet-doorstaff-uniforms",
        name: "Valet & Door Staff Uniforms",
        description: "Distinctive, weather-appropriate uniforms for door staff, valets, and bellhops who create first and last impressions.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/hospitality/valet-doorstaff-uniforms"
      }
    ],
    
    // Hospitality department roles with specialized products
    departments: [
      {
        name: "Front of House",
        description: "Professional uniforms for guest-facing staff that embody your property's brand identity and service philosophy, featuring elegant designs with practical functionality.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Reception Attire", "Concierge Uniforms", "Guest Relations Sets"]
      },
      {
        name: "Food & Beverage",
        description: "Specialized uniforms for restaurant, café, and banquet staff that balance sophisticated appearance with practical features for food service environments.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Restaurant Server Attire", "Barista Uniforms", "Banquet Staff Sets"]
      },
      {
        name: "Housekeeping & Facilities",
        description: "Durable, practical uniforms for behind-the-scenes operational staff with features designed for comfort during physical tasks and long shifts.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Housekeeping Uniforms", "Maintenance Staff Attire", "Laundry Team Sets"]
      },
      {
        name: "Specialty & Recreation",
        description: "Custom uniforms for specialized roles including spa therapists, fitness instructors, kids club staff, and recreation personnel.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Spa Therapist Attire", "Recreation Staff Uniforms", "Kids Club Team Sets"]
      }
    ],
    
    fabricTechnologies: [
      {
        name: "LuxDurable Premium Fabrics",
        description: "Luxury-grade fabrics with exceptional durability that maintain appearance despite frequent laundering and constant use in demanding hospitality environments.",
        icon: "/icons/luxdurable.svg"
      },
      {
        name: "ComfortFlex Movement System",
        description: "Innovative stretch technology providing exceptional range of motion for staff who need to maintain elegant appearance while performing physical tasks.",
        icon: "/icons/comfortflex.svg"
      },
      {
        name: "StainShield Protection",
        description: "Advanced fabric treatment that repels liquids and resists staining, particularly valuable for food service and housekeeping staff uniforms.",
        icon: "/icons/stainshield.svg"
      },
      {
        name: "ClimateControl Technology",
        description: "Adaptive fabric technology that helps maintain comfort across varying environments from air-conditioned lobbies to outdoor settings and kitchen areas.",
        icon: "/icons/climatecontrol.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Brand Identity Integration",
        description: "Precision incorporation of your property's visual identity elements, including exact color matching, logo placement, and distinctive design features.",
        icon: "/icons/brand-identity.svg"
      },
      {
        name: "Department Distinction",
        description: "Thoughtful design variations that clearly identify different staff departments while maintaining overall brand cohesion across your property.",
        icon: "/icons/department-distinction.svg"
      },
      {
        name: "Cultural Design Elements",
        description: "Incorporation of Saudi heritage elements and cultural motifs into uniform designs for properties seeking to highlight authentic local hospitality.",
        icon: "/icons/cultural-elements.svg"
      },
      {
        name: "Modesty Adaptations",
        description: "Specialized modifications to standard hospitality uniform designs that respect Islamic dress codes while maintaining professional standards.",
        icon: "/icons/modesty-adaptations.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM transformed our hotel's visual identity with uniforms that perfectly balance luxury with practical functionality. Their understanding of Saudi hospitality standards and attention to our brand details has significantly enhanced both our guest experience and staff satisfaction. The durability of the uniforms has also provided excellent value over time.",
        author: "Mohammed Al-Qahtani",
        position: "General Manager",
        company: "Royal Oasis Riyadh Hotel"
      },
      {
        id: "testimonial-2",
        quote: "The modest uniform options UNEOM designed for our female staff have received overwhelmingly positive feedback. The uniforms beautifully represent our luxury positioning while respecting cultural considerations. Their fabric technology has proven exceptional in our demanding environment, with uniforms maintaining appearance despite intensive use and frequent laundering.",
        author: "Layla Al-Otaibi",
        position: "Director of Human Resources",
        company: "Jeddah Luxury Collection"
      }
    ],
    
    // FAQ section for SEO enhancement
    faq: [
      {
        question: "How do UNEOM's hospitality uniforms address the specific needs of Saudi hotels and resorts?",
        answer: "Our hospitality uniforms are specifically designed for Saudi properties, featuring modest options for female staff that conform to Islamic dress codes while maintaining luxury appearance, incorporating Saudi heritage elements for properties seeking authentic local character, using fabrics selected for Saudi climate conditions, and ensuring designs that respect local cultural sensitivities while meeting international hospitality standards."
      },
      {
        question: "Can you create different uniform styles for various hotel departments while maintaining brand consistency?",
        answer: "Yes, we specialize in developing comprehensive hospitality uniform programs that clearly distinguish between different departments (front office, F&B, housekeeping, management) while maintaining overall brand coherence through consistent color palettes, design elements, and branding applications. This approach helps guests identify staff functions while presenting a unified property identity."
      },
      {
        question: "What makes your fabrics suitable for the demanding hospitality environment?",
        answer: "Our hospitality uniform fabrics feature several specialized technologies: LuxDurable construction that withstands frequent industrial laundering without fading or deterioration, StainShield treatments that protect against food and beverage spills, stretch components that allow comfortable movement during physical tasks, and climate-adaptive properties that ensure staff comfort across various hotel environments from kitchens to outdoor areas."
      },
      {
        question: "How do you handle uniform implementation for large hotels with diverse staff roles?",
        answer: "We offer comprehensive implementation programs for properties of all sizes, including on-site measurement sessions, detailed sizing systems with Arabia-specific measurements, phased rollout planning to ensure operational continuity, staff training on uniform care and presentation, and ongoing support for new hires and replacements to maintain consistent appearance across the entire property."
      }
    ],
    
    // Related blog posts for increased internal linking and SEO value
    relatedContent: {
      title: "Hospitality Uniform Resources",
      blogPosts: [
        {
          title: "Luxury Hotel Uniform Trends in Saudi Arabia: Balancing Tradition with Modern Elegance",
          excerpt: "Explore how leading Saudi luxury properties are creating distinctive staff attire that reflects both international standards and local heritage.",
          url: "/blog/saudi-luxury-hotel-uniform-trends",
          image: "/images/default-placeholder.jpg"
        },
        {
          title: "The Impact of Staff Uniforms on Guest Perception and Experience",
          excerpt: "Research insights on how hospitality attire influences guest satisfaction, perceived service quality, and overall brand impression.",
          url: "/blog/uniforms-guest-perception-hospitality",
          image: "/images/default-placeholder.jpg"
        },
        {
          title: "Designing Practical Uniforms for Saudi Arabia's Resort Environments",
          excerpt: "Best practices for developing hospitality uniforms that balance luxury appearance with practical functionality in Saudi resort settings.",
          url: "/blog/saudi-resort-uniform-design",
          image: "/images/product-placeholder.jpg"
        }
      ],
      resources: [
        {
          title: "Hospitality Fabric Performance Guide",
          description: "Technical specifications for fabrics that meet luxury hospitality requirements",
          url: "/resources/fabric-guide/hospitality",
          icon: "/icons/fabric-guide.svg"
        },
        {
          title: "Hotel Staff Uniform Size Guide",
          description: "Detailed sizing information for hospitality personnel uniforms",
          url: "/resources/size-guide/hospitality",
          icon: "/icons/size-guide.svg"
        },
        {
          title: "Hotel Uniform Program Management Guide",
          description: "Comprehensive guide to implementing property-wide uniform programs",
          url: "/resources/management-guide/hotel-uniform-program",
          icon: "/icons/management-guide.svg"
        }
      ]
    },
    
    // Statistical information for credibility and SEO enhancement
    statistics: [
      {
        value: "45+",
        label: "Saudi Hotels & Resorts Supplied",
        icon: "/icons/hotels.svg"
      },
      {
        value: "18,000+",
        label: "Hospitality Staff Wearing UNEOM Uniforms",
        icon: "/icons/hospitality-staff.svg"
      },
      {
        value: "12+",
        label: "International Hotel Brands Served in KSA",
        icon: "/icons/hotel-brands.svg"
      },
      {
        value: "97%",
        label: "Client Retention Rate in Hospitality Sector",
        icon: "/icons/retention.svg"
      }
    ],
    
    // Case study for social proof and credibility
    caseStudy: {
      title: "Comprehensive Uniform Program for Luxury Saudi Hotel Chain",
      client: "Royal Oasis Hotel Collection",
      challenge: "Creating a distinctive uniform program for a new luxury hotel chain launching multiple properties across Saudi Arabia, requiring a cohesive brand identity while accommodating diverse staff roles and cultural considerations.",
      solution: "Developed a comprehensive uniform system with coordinated designs across all hotel departments, featuring distinctive Saudi-inspired elements, practical role-specific adaptations, and both international and modest options for female staff.",
      results: [
        "Guest satisfaction scores 23% higher than industry average for staff appearance",
        "Staff satisfaction rating of 92% with uniform comfort and functionality",
        "Reduced uniform replacement costs by 34% compared to industry benchmarks",
        "Successful implementation across 5 properties with over 2,500 staff members"
      ],
      image: "/images/default-placeholder.jpg",
      testimonial: {
        quote: "The uniform program UNEOM created has become a cornerstone of our brand identity and has significantly contributed to our recognition as a leading luxury hospitality brand in Saudi Arabia.",
        author: "Sultan Al-Saud",
        position: "CEO",
        company: "Royal Oasis Hotel Collection"
      }
    },
    
    // Call to action section
    cta: {
      title: "Elevate Your Property's Image with Professional Uniform Solutions",
      description: "Contact our hospitality uniform specialists to discuss your property's specific requirements and discover how our comprehensive uniform solutions can enhance your brand identity, staff professionalism, and guest experience.",
      buttonText: "Request Hospitality Uniform Consultation",
      buttonUrl: "/contact?industry=hospitality"
    }
  };
  
  return <IndustryPageLayout locale={locale} industryData={hospitalityData} skipMainLayout={true} />;
} 