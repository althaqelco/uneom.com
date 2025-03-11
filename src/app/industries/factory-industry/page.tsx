'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function FactoryIndustryPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page
  const factoryIndustryData = {
    title: "Factory & Industrial Workwear Solutions in Saudi Arabia",
    subtitle: "High-performance uniforms designed for safety, durability, and comfort in Saudi Arabia's industrial environments",
    heroImage: "/images/industries/factory-industry-hero.jpg",
    
    introduction: [
      "In Saudi Arabia's rapidly growing industrial sector, the right workwear is essential for maintaining safety standards, enhancing productivity, and ensuring worker comfort. UNEOM specializes in providing factory and industrial uniforms that meet the unique challenges of Saudi industrial environments, from extreme temperatures to specialized safety requirements.",
      
      "Our comprehensive range of industrial workwear includes heat-resistant uniforms, protective coveralls, technical workwear for engineers, and specialized clothing for oil field workers. Each uniform is crafted from high-quality, durable materials designed to withstand harsh industrial conditions while providing optimal comfort during long shifts.",
      
      "We understand the specific needs of Saudi industrial facilities and offer customized solutions that comply with international safety standards while respecting local cultural considerations. Whether you manage a manufacturing plant, oil & gas facility, or construction site, UNEOM provides industrial uniforms that enhance safety, promote professional identity, and improve operational efficiency."
    ],
    
    benefits: [
      {
        title: "Heat & Flame Resistance",
        description: "Specialized fabrics designed to provide protection in high-temperature environments common in Saudi industrial settings.",
        icon: "/icons/fire.svg"
      },
      {
        title: "Enhanced Safety Features",
        description: "High-visibility elements, reinforced seams, and specialized pockets for safety equipment to protect workers in hazardous environments.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "Durability & Longevity",
        description: "Industrial-grade materials and construction techniques that withstand heavy use, frequent washing, and harsh conditions.",
        icon: "/icons/durability.svg"
      },
      {
        title: "Comfort in Extreme Conditions",
        description: "Moisture-wicking, breathable fabrics that keep workers comfortable during long shifts in Saudi Arabia's climate.",
        icon: "/icons/temperature.svg"
      },
      {
        title: "Compliance with Standards",
        description: "All industrial uniforms meet or exceed Saudi and international safety standards and regulations.",
        icon: "/icons/certificate.svg"
      }
    ],
    
    products: [
      {
        id: "factory-uniforms",
        name: "Factory Worker Uniforms",
        description: "Durable, comfortable uniforms designed for general factory environments with reinforced stitching and moisture-wicking fabrics.",
        image: "/images/products/factory-uniforms.jpg",
        href: "/shop/industrial-uniforms/factory-workers"
      },
      {
        id: "engineering-workwear",
        name: "Engineering Workwear",
        description: "Technical uniforms with specialized pockets for tools, reinforced knees and elbows, and static-resistant properties.",
        image: "/images/products/engineering-workwear.jpg",
        href: "/shop/industrial-uniforms/engineering-workwear"
      },
      {
        id: "heat-resistant-uniforms",
        name: "Heat Resistant Uniforms",
        description: "Specialized workwear for high-temperature environments with flame-retardant properties and thermal protection.",
        image: "/images/products/heat-resistant-uniforms.jpg",
        href: "/shop/industrial-uniforms/heat-resistant"
      },
      {
        id: "oil-field-suits",
        name: "Oil Field Worker Suits",
        description: "Comprehensive protection for oil and gas industry workers with chemical resistance, flame retardant properties, and enhanced durability.",
        image: "/images/products/oil-field-suits.jpg",
        href: "/shop/industrial-uniforms/oil-field-workers"
      },
      {
        id: "technician-uniforms",
        name: "Technician Uniforms",
        description: "Smart, functional workwear for technical professionals with multiple pockets, tear-resistant fabrics, and professional appearance.",
        image: "/images/products/technician-uniforms.jpg",
        href: "/shop/industrial-uniforms/technicians"
      },
      {
        id: "protective-workwear",
        name: "Protective Workwear",
        description: "Specialized protective clothing including high-visibility vests, safety harness-compatible designs, and impact-resistant elements.",
        image: "/images/products/protective-workwear.jpg",
        href: "/shop/industrial-uniforms/protective-workwear"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "Flame-Resistant Fabrics",
        description: "Advanced materials that self-extinguish and protect workers in environments with fire hazards.",
        icon: "/icons/flame-resistant.svg"
      },
      {
        name: "Ripstop Technology",
        description: "Reinforced fabric construction that prevents tears from spreading, enhancing durability in rough industrial environments.",
        icon: "/icons/ripstop.svg"
      },
      {
        name: "Moisture Control System",
        description: "Specialized fabrics that wick moisture away from the body, keeping workers dry and comfortable in hot conditions.",
        icon: "/icons/moisture-control.svg"
      },
      {
        name: "Chemical Resistance",
        description: "Protective fabrics that repel oils, chemicals, and hazardous substances commonly found in industrial environments.",
        icon: "/icons/chemical-resistant.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Department Color-Coding",
        description: "Implement color systems to quickly identify different teams or roles within your facility.",
        icon: "/icons/color-palette.svg"
      },
      {
        name: "Safety Compliance Features",
        description: "Add reflective strips, specialized pockets for safety equipment, or other safety-enhancing elements.",
        icon: "/icons/safety-compliance.svg"
      },
      {
        name: "Company Branding",
        description: "Incorporate your logo, company colors, and brand identity into your industrial uniforms.",
        icon: "/icons/branding.svg"
      },
      {
        name: "Name & Position Identification",
        description: "Add embroidered names, positions, or certifications for quick identification of personnel.",
        icon: "/icons/name-tag.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "The heat-resistant uniforms from UNEOM have significantly improved safety conditions in our manufacturing facility. The quality is exceptional, and our workers report much greater comfort during long shifts.",
        author: "Mohammed Al-Harbi",
        position: "Plant Manager",
        company: "Saudi Manufacturing Co."
      },
      {
        id: "testimonial-2",
        quote: "As an oil field services company, we need uniforms that can withstand extreme conditions. UNEOM's industrial workwear has proven to be durable, comfortable, and compliant with all our safety requirements.",
        author: "Abdullah Al-Qahtani",
        position: "HSE Director",
        company: "Riyadh Industrial Services"
      }
    ],
    
    faq: [
      {
        question: "What safety standards do your industrial uniforms comply with?",
        answer: "Our industrial uniforms comply with Saudi SASO standards, as well as international standards including ISO 11612 (heat and flame protection), ISO 20471 (high-visibility clothing), and industry-specific safety requirements."
      },
      {
        question: "Can you provide uniforms for different departments with distinct identification?",
        answer: "Yes, we offer color-coding systems, departmental patches, and various identification methods to distinguish between different teams or roles within your industrial facility."
      },
      {
        question: "How do your uniforms perform in Saudi Arabia's high-temperature environments?",
        answer: "Our industrial workwear is specifically designed for the Saudi climate, featuring heat-resistant fabrics, moisture-wicking technology, and breathable construction to keep workers comfortable in extreme temperatures."
      },
      {
        question: "Do you offer bulk ordering for large industrial facilities?",
        answer: "Yes, we specialize in bulk orders for industrial clients and offer volume-based pricing, managed inventory programs, and regular replacement schedules for large facilities."
      }
    ],
    
    cta: {
      title: "Enhance Safety and Efficiency in Your Industrial Facility",
      description: "Contact our industrial workwear specialists to discuss your facility's unique requirements and discover how UNEOM can provide customized uniform solutions for your workforce.",
      buttonText: "Request Consultation",
      buttonUrl: "/contact?industry=factory-industry"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={factoryIndustryData} />;
} 