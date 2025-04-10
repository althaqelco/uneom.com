'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function AviationPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page
  const aviationData = {
    title: "Aviation Uniforms & Airline Attire in Saudi Arabia",
    subtitle: "Premium cabin crew, ground staff, and aviation personnel uniforms tailored for Saudi airlines and private operators",
    heroImage: "/images/aviation/aviation_uniform_airline_main_image.jpg",
    
    introduction: [
      "In Saudi Arabia's rapidly expanding aviation sector, professional uniforms play a crucial role in establishing airline identity, ensuring operational efficiency, and projecting the Kingdom's commitment to excellence in global air travel. UNEOM's comprehensive aviation uniform solutions are specifically designed to meet the unique requirements of Saudi airlines and aviation businesses.",
      
      "From cabin crew and flight deck personnel to ground operations and technical staff, we provide premium-quality uniforms that combine sophisticated style, practical functionality, and cultural sensitivity. Our aviation collections incorporate advanced fabric technologies that withstand the rigorous demands of air travel while offering options that respect Islamic dress codes and reflect Saudi heritage elements.",
      
      "As Saudi aviation continues its remarkable global expansion, we partner with airlines to develop uniform programs that enhance brand recognition, boost employee pride, and create memorable passenger experiences that showcase the best of Saudi hospitality and professionalism."
    ],
    
    benefits: [
      {
        title: "GACA Compliance",
        description: "All our designs meet Saudi General Authority of Civil Aviation (GACA) requirements while maintaining the highest standards of comfort and elegance.",
        icon: "/icons/compliance.svg"
      },
      {
        title: "Corporate Identity Integration",
        description: "We integrate your airline brand identity into every uniform detail, enhancing brand recognition and creating a distinctive passenger experience.",
        icon: "/icons/branding.svg"
      },
      {
        title: "Modest Design Options",
        description: "Special designs that respect modest dress requirements for female staff while maintaining an elegant appearance aligned with international aviation standards.",
        icon: "/icons/modest-design.svg"
      },
      {
        title: "High-Performance Fabrics",
        description: "Aviation-specific textiles that offer comfort during long flights, resist wrinkles, and maintain a professional appearance throughout demanding shifts.",
        icon: "/icons/performance.svg"
      },
      {
        title: "Complete Aviation Collections",
        description: "Coordinated uniform programs that cover all personnel from cabin crew and pilots to ground staff, maintenance teams, and airport representatives.",
        icon: "/icons/collection.svg"
      }
    ],
    
    products: [
    {
      id: "airline-crew-uniform",
        name: "Airline Crew Uniforms",
        description: "Premium quality flight attendant uniforms with modest Islamic-compliant options for Saudi airlines and GCC carriers.",
      image: "/images/aviation/flightـattendantsـuniforms.jpg",
        href: "/shop/aviation-uniforms/airline-crew-uniform"
    },
    {
      id: "pilot-uniform-set",
        name: "Professional Pilot Uniform Sets",
        description: "Complete pilot uniform sets designed for Saudi airline captains and officers, featuring premium fabrics and traditional styling.",
      image: "/images/aviation/aviation_captin_uniform.jpg",
        href: "/shop/aviation-uniforms/pilot-uniform-set"
    },
    {
      id: "ground-crew-uniform",
      name: "Ground Staff Uniforms",
        description: "Practical and professional attire for airport ground personnel, featuring durable materials and weather-appropriate designs.",
      image: "/images/aviation/aviation_uniform_airline.jpg",
        href: "/shop/aviation-uniforms/ground-crew-uniform"
      },
      {
        id: "airport-lounge-uniform",
        name: "Airport Lounge & VIP Service Uniforms",
        description: "Elegant uniforms for premium lounge staff and VIP service personnel that reflect luxury hospitality standards.",
      image: "/images/aviation/aviation_uniform_flightـattendants.jpg",
        href: "/shop/aviation-uniforms/airport-lounge-uniform"
      },
      {
        id: "aviation-maintenance-uniform",
        name: "Aviation Maintenance Uniforms",
        description: "Functional workwear for technical and maintenance staff, featuring safety compliance and practical design elements.",
        image: "/images/aviation/aviation_crew_uniform.jpg",
        href: "/shop/aviation-uniforms/maintenance-uniform"
      },
      {
        id: "airline-service-vest",
        name: "Airline Service Vests & Accessories",
        description: "Complementary garments and accessories to complete aviation uniform collections, including vests, scarves, and ties.",
      image: "/images/aviation/flightـattendantsـuniforms_details.jpg",
        href: "/shop/aviation-uniforms/airline-service-vest"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "SkyComfort™ Technology",
        description: "Specialized fabric technology that provides exceptional comfort during long-haul flights with moisture management and stretch properties.",
        icon: "/icons/comfort.svg"
      },
      {
        name: "AeroGuard Antimicrobial",
        description: "Protection against bacteria and odor for uniforms worn during extended international flights and multiple flight segments.",
        icon: "/icons/antimicrobial.svg"
      },
      {
        name: "WrinkleShield Pro",
        description: "Advanced wrinkle resistance that keeps uniforms looking crisp and professional throughout demanding flight schedules.",
        icon: "/icons/wrinkle-resistant.svg"
      },
      {
        name: "ThermalBalance",
        description: "Temperature-regulating properties that provide comfort across varying cabin temperatures and international climate changes.",
        icon: "/icons/thermal-balance.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Airline Branding Integration",
        description: "Incorporate your airline's colors, logo, and brand identity into uniform designs for consistent brand presentation.",
        icon: "/icons/airline-branding.svg"
      },
      {
        name: "Cultural Design Elements",
        description: "Subtle integration of Saudi heritage elements that showcase cultural identity while maintaining professional aviation standards.",
        icon: "/icons/cultural-design.svg"
      },
      {
        name: "Rank & Position Indicators",
        description: "Clear designation of staff ranks and positions through epaulets, badges, and distinctive design elements.",
        icon: "/icons/rank-indicators.svg"
      },
      {
        name: "Seasonal Collection Options",
        description: "Variations for summer and winter operations, especially for ground staff exposed to Saudi Arabia's climate conditions.",
        icon: "/icons/seasonal-options.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM's aviation uniforms have significantly enhanced our airline's brand perception among passengers. Their attention to detail and understanding of both international aviation standards and Saudi cultural requirements resulted in a uniform collection that perfectly represents our identity.",
        author: "Abdullah Al-Qahtani",
        position: "Brand Director",
        company: "Saudi Regional Airlines"
      },
      {
        id: "testimonial-2",
        quote: "Our cabin crew particularly appreciate the comfort and practicality of UNEOM's uniforms during long-haul operations. The modest design options for our female staff have received excellent feedback, striking the perfect balance between professionalism and cultural sensitivity.",
        author: "Noura Al-Sharif",
        position: "Cabin Services Manager",
        company: "Gulf International Airways"
      }
    ],
    
    faq: [
      {
        question: "How do you ensure uniforms meet both international aviation standards and Saudi cultural requirements?",
        answer: "We maintain a specialized aviation design team that includes experts in both international airline uniform standards and Saudi cultural requirements. This dual expertise allows us to create designs that perfectly balance global aviation professionalism with appropriate modest options for Saudi airlines. All designs receive approval from both aviation compliance specialists and cultural consultants."
      },
      {
        question: "Can you create different uniform variations for various roles within our airline?",
        answer: "Absolutely. We specialize in creating comprehensive aviation uniform programs that include distinctive yet coordinated designs for cabin crew, flight deck, ground operations, customer service, lounge staff, maintenance personnel, and administrative teams. These variations maintain your airline's consistent brand identity while clearly distinguishing between different operational roles."
      },
      {
        question: "What is your approach to designing uniforms for female cabin crew in Saudi airlines?",
        answer: "We offer a range of modest design options specifically created for female crew members in Saudi airlines. These include elegantly styled abayas, coordinated head coverings, and modest uniform sets that respect Islamic dress principles while meeting all functional requirements for inflight service. Each design can be customized to incorporate your airline's colors and brand elements."
      },
      {
        question: "How do your aviation uniform fabrics perform in the demanding airline environment?",
        answer: "Our aviation-specific fabrics are selected for their exceptional performance during long-haul flights and extended duty periods. They feature advanced wrinkle resistance to maintain a professional appearance throughout shifts, moisture management for comfort across varying cabin temperatures, antimicrobial properties for freshness during multi-segment flights, and enhanced durability for the rigorous aviation environment."
      }
    ],
    
    cta: {
      title: "Elevate Your Airline's Image with Premium Aviation Uniforms",
      description: "Contact our aviation uniform specialists to discuss how custom uniform solutions can enhance your airline's brand identity and operational excellence.",
      buttonText: "Request Aviation Uniform Consultation",
      buttonUrl: "/contact?industry=aviation"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={aviationData} skipMainLayout={true} />;
} 