'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function HealthcarePage() {
  // Define locale for language support
  const locale = 'en';
  
  // All content for this industry page
  const healthcareData = {
    title: 'Premium Medical Scrubs & Healthcare Uniforms in Saudi Arabia',
    subtitle: 'SCHS-compliant, antimicrobial medical attire for Saudi healthcare professionals',
    heroImage: '/images/healthcare/healthcare_medical_doctor_uniform.jpg',
    
    // Enhanced introduction with more keywords and benefits
    introduction: [
      "In Saudi Arabia's rapidly evolving healthcare sector, professional medical uniforms are essential for establishing clinical excellence, maintaining SCHS compliance, and building patient trust. UNEOM offers specialized healthcare uniform solutions designed specifically for Saudi medical facilities, addressing the Kingdom's unique cultural requirements and regulatory standards.",
      
      "Our comprehensive range includes premium-quality scrubs, lab coats, nursing uniforms, and departmental attire that combine functionality, durability, and professional presentation. Every UNEOM healthcare garment incorporates advanced antimicrobial fabric technology that withstands rigorous hospital environments while offering modest design options that respect Islamic dress codes and accommodate Saudi Arabia's climate considerations.",
      
      "As the trusted uniform partner to leading healthcare institutions across the Kingdom—including major government hospitals in Riyadh, Jeddah, and Dammam, private healthcare networks, and specialized medical centers—we understand Saudi healthcare uniform requirements better than any other provider. Our dedicated healthcare consultants work directly with medical facility management to develop uniform programs that enhance institutional identity while meeting all compliance standards."
    ],
    
    // Use string paths instead of React components for icon values to match expected type
    benefits: [
      {
        title: "SCHS & MOH Compliance",
        description: "All our medical uniforms comply with Saudi Commission for Health Specialties requirements and Ministry of Health standards for healthcare attire in the Kingdom.",
        icon: "/icons/compliance.svg"
      },
      {
        title: "Islamic Dress Code Options",
        description: "Specialized designs accommodate hijab and modest dress requirements while maintaining professional medical standards and infection control compliance.",
        icon: "/icons/islamic.svg"
      },
      {
        title: "Climate-Optimized Fabrics",
        description: "Breathable, moisture-wicking fabrics selected specifically for Saudi Arabia's climate ensure comfort in hospital environments during long shifts.",
        icon: "/icons/climate.svg"
      },
      {
        title: "BioCare Antimicrobial Protection",
        description: "Advanced antimicrobial technology inhibits bacterial growth by 99.9%, reduces odor development, and maintains freshness throughout demanding clinical shifts.",
        icon: "/icons/antimicrobial.svg"
      },
      {
        title: "Hospital Branding Solutions",
        description: "Enhance facility identity with precision embroidery, department color-coding systems, and customized design elements that reinforce your healthcare brand.",
        icon: "/icons/branding.svg"
      }
    ],
    
    // Products with actual images from the healthcare folder
    products: [
      {
        id: "premium-scrubs-set",
        name: "Premium Medical Scrubs Set",
        description: "Professional-grade antimicrobial scrubs available in both standard and modest Islamic-compatible designs. Features BioCare protection and 4-way stretch fabric.",
        image: "/images/healthcare/healthcare_medical_uniform.jpg",
        href: "/shop/medical-scrubs/premium-scrubs-set"
      },
      {
        id: "antimicrobial-lab-coat",
        name: "Executive Medical Lab Coat",
        description: "Premium white lab coats with BioCare Antimicrobial technology, fluid-resistant finish, and customization options for healthcare professionals.",
        image: "/images/healthcare/full_clothes_doctor_uniform.jpg",
        href: "/shop/medical-scrubs/medical-lab-coat"
      },
      {
        id: "nursing-uniform-set",
        name: "Professional Nursing Uniform",
        description: "Comfortable, durable nursing uniforms designed for all-day comfort, featuring antimicrobial protection and Saudi healthcare facility compliance.",
        image: "/images/healthcare/healthcare_nurce_uniform.jpg",
        href: "/shop/medical-scrubs/nursing-scrubs"
      },
      {
        id: "surgical-scrubs",
        name: "Advanced Surgical Scrubs",
        description: "Specialized surgical attire with enhanced fluid protection, sterility features, and specialized designs for operating room environments.",
        image: "/images/healthcare/2_pices_nurce_uniform.jpg",
        href: "/shop/medical-scrubs/surgical-scrubs"
      },
      {
        id: "modest-medical-uniform",
        name: "Modest Medical Uniforms for Women",
        description: "Specialized healthcare uniforms designed specifically for female Saudi healthcare professionals with full hijab compatibility.",
        image: "/images/healthcare/medical_hijab_uniform.jpg",
        href: "/shop/medical-scrubs/modest-medical-uniform"
      },
      {
        id: "hospital-admin-uniform",
        name: "Hospital Administrative Uniforms",
        description: "Professional attire for reception, administrative, and non-clinical hospital staff that maintains cohesive facility branding.",
        image: "/images/healthcare/healthcare_hijab_doctor.jpg",
        href: "/shop/medical-scrubs/department-admin-uniform"
      }
    ],
    
    // Use string paths for fabric technology icons
    fabricTechnologies: [
      {
        name: "BioCare Antimicrobial Protection",
        description: "Advanced fabric treatment that inhibits bacterial growth by 99.9%, reduces odor development, and maintains freshness throughout long hospital shifts.",
        icon: "/icons/biocare.svg"
      },
      {
        name: "ComfortFlex 4-Way Stretch",
        description: "Medical-grade 4-way stretch technology providing exceptional range of motion for healthcare professionals who need mobility during active procedures.",
        icon: "/icons/comfortflex.svg"
      },
      {
        name: "DuraSeal Fluid Protection",
        description: "Hospital-grade fluid-repellent finish that protects against biological spills and splashes while maintaining breathability for all-day comfort.",
        icon: "/icons/duraseal.svg"
      },
      {
        name: "CoolCore Temperature Regulation",
        description: "Innovative fabric technology specifically engineered to regulate body temperature in Saudi hospital environments, preventing overheating during long shifts.",
        icon: "/icons/coolcore.svg"
      }
    ],
    
    // Use string paths for customization option icons
    customizationOptions: [
      {
        name: "Hospital Department Color Coding",
        description: "Implement systematic color coding systems across departments to enhance patient navigation and organizational clarity in Saudi healthcare facilities.",
        icon: "/icons/department-colors.svg"
      },
      {
        name: "Medical Facility Branding",
        description: "Incorporate your Saudi healthcare facility's logo, name, and identity through precision embroidery and consistent design elements.",
        icon: "/icons/institutional-branding.svg"
      },
      {
        name: "Staff Role Identification",
        description: "Clear designation of medical staff roles through specialized uniform elements, helping patients quickly identify doctors, nurses, and support personnel.",
        icon: "/icons/role-identification.svg"
      },
      {
        name: "Modest Design Adaptations",
        description: "Specialized modifications to standard medical uniform designs to accommodate hijab and modest dress preferences for Saudi female healthcare professionals.",
        icon: "/icons/modest-modifications.svg"
      }
    ],
    
    // Enhanced testimonials
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM's healthcare uniforms have transformed both staff satisfaction and our hospital's professional image. Their deep understanding of Saudi regulatory requirements and SCHS compliance made implementation seamless. The antimicrobial technology has proven invaluable in reducing infection concerns, and their department color-coding system has significantly improved patient navigation throughout our facility.",
        author: "Dr. Alya Al-Harbi",
        position: "Chief Medical Officer",
        company: "Kingdom Medical Center, Riyadh"
      },
      {
        id: "testimonial-2",
        quote: "The modest design options UNEOM provided for our female medical staff have been particularly well-received, offering the perfect balance of professional functionality and Islamic dress code compliance. Their fabrics withstand our rigorous infection control protocols, and the uniforms retain their appearance significantly better than previous suppliers, reducing our replacement costs by nearly 40%.",
        author: "Fahad Al-Qasim",
        position: "Supply Chain Director",
        company: "International Medical Group"
      }
    ],
    
    // Enhanced FAQ
    faq: [
      {
        question: "How do your healthcare uniforms meet Saudi infection control standards?",
        answer: "Our medical uniforms incorporate BioCare Antimicrobial Technology that eliminates 99.9% of bacteria, is effective through 100+ industrial washes, and complies with all Saudi Ministry of Health infection control guidelines. Additionally, our fabrics feature DuraSeal fluid protection to prevent cross-contamination in clinical settings."
      },
      {
        question: "Do you offer modest medical uniform options for female healthcare professionals?",
        answer: "Yes, we provide a comprehensive range of modest medical attire specifically designed for female healthcare professionals in Saudi Arabia. These include hijab-compatible scrub designs, longer lab coat options, and specialized modest nursing uniforms that maintain full compliance with both Islamic dress requirements and medical standards."
      },
      {
        question: "Can you implement custom color coding for different hospital departments?",
        answer: "Absolutely. We specialize in creating comprehensive department color coding systems for Saudi healthcare facilities. This includes consistent color application across all uniform items, departmental identification elements, and complementary accessories that help patients and staff quickly identify different medical specialties and services."
      },
      {
        question: "What is your delivery timeframe for large hospital uniform orders?",
        answer: "For standard healthcare uniform orders, we typically deliver within 2-3 weeks across Saudi Arabia. For large hospital-wide implementations, we create a phased delivery schedule based on departmental priority, typically completing full facility rollout within 4-6 weeks, with express options available for urgent requirements."
      }
    ],
    
    // Enhanced call to action
    cta: {
      title: "Enhance Your Healthcare Facility with Professional Medical Uniforms",
      description: "Contact our healthcare uniform specialists to discuss how UNEOM can provide SCHS-compliant, antimicrobial medical attire for your Saudi healthcare facility.",
      buttonText: "Request Healthcare Uniform Consultation",
      buttonUrl: "/contact?industry=healthcare"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={healthcareData} />;
} 