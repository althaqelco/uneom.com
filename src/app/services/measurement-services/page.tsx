'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function MeasurementServicesPage() {
  const locale = 'en';
  const serviceData = {
    title: "UNEOM - Professional Uniforms",
    subtitle: 'Professional fitting solutions for perfect-fit uniforms',
    heroImage: '/images/banner-placeholder.jpg',
    
    overview: [
      "UNEOM's Measurement Services provide professional fitting solutions to ensure every employee receives precisely fitted uniforms that enhance comfort, appearance, and functionality. Our expert fitting specialists use advanced measurement techniques and technologies to capture accurate sizing data, eliminating the guesswork and inconsistency often associated with self-measurement.",
      "Whether you need on-site fitting sessions for large teams, individual appointments for executive staff, or remote measurement solutions, our comprehensive service ensures consistent sizing across your entire organization. We understand that properly fitted uniforms not only look more professional but also improve employee satisfaction and extend garment lifespan."
    ],
    
    steps: [
      {
        icon: '/images/icons/consultation-icon.svg',
        title: 'Measurement Planning',
        description: 'We begin by developing a customized measurement plan based on your organizational structure, locations, and scheduling requirements. This includes determining the most appropriate measurement methods and technologies for your specific needs.'
      },
      {
        icon: '/images/icons/comprehensive-support.svg',
        title: 'Employee Communication',
        description: 'We provide comprehensive communication materials to prepare your team for the measurement process, including scheduling information, what to expect, and preparation guidelines to ensure efficient and accurate measurements.'
      },
      {
        icon: '/images/icons/premium-quality.svg',
        title: 'Professional Measurement',
        description: 'Our trained fitting specialists conduct measurements using standardized techniques and digital tools to ensure accuracy and consistency. We create individual fit profiles for each employee with comprehensive measurement data.'
      },
      {
        icon: '/images/icons/customization-icon.svg',
        title: 'Data Management & Analysis',
        description: 'All measurement data is securely stored in our system and analyzed to create size distribution reports, identify trends, and optimize inventory planning. This data becomes a valuable reference for future uniform orders.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/icons/premium-quality.svg',
        title: 'Superior Fit Accuracy',
        description: 'Professional measurements result in significantly higher fit accuracy than self-measurement, reducing exchanges and alterations by up to 85%.'
      },
      {
        icon: '/images/icons/timely-delivery.svg',
        title: 'Time Efficiency',
        description: 'Our streamlined process can measure up to 40 employees per hour, minimizing workplace disruption while maximizing accuracy.'
      },
      {
        icon: '/images/images/icons/brand-aligned.svg',
        title: 'Consistent Sizing',
        description: 'Standardized measurement techniques ensure uniform sizing consistency across departments and locations.'
      },
      {
        icon: '/images/icons/culturally-appropriate.svg',
        title: 'Enhanced Comfort',
        description: 'Precisely fitted uniforms improve comfort, mobility, and function, increasing daily wear satisfaction.'
      },
      {
        icon: '/images/images/icons/saudi-expertise.svg',
        title: 'Professional Appearance',
        description: "Properly fitted uniforms create a more polished, cohesive appearance that enhances your organization's image."
      },
      {
        icon: '/images/icons/comprehensive-support.svg',
        title: 'Valuable Sizing Data',
        description: 'Comprehensive measurement data provides insights for future uniform programs and inventory optimization.'
      }
    ],
    
    caseStudies: [
      {
        id: "hospitality-measurement",
        title: 'Hospitality Chain Measurement Program',
        description: 'Measuring 1,200+ staff across 4 properties with diverse uniform requirements, limited time windows, and previous issues with inconsistent fitting that affected professional appearance.',
        result: 'Reduced exchange rate from 32% to just 4% and improved uniform appearance ratings in guest feedback by 27%.',
        image: '/images/products/hotel-uniform.jpg'
      },
      {
        id: "healthcare-measurement",
        title: 'Healthcare Network Measurement Solution',
        description: 'Coordinating measurements for 3,500 healthcare professionals across 12 facilities with 24/7 operations, strict hygiene protocols, and minimal disruption to patient care.',
        result: 'Measured 100% of staff with zero impact on patient care and improved functional fit ratings from 68% to 94%.',
        image: '/images/healthcare/healthcare_medical_uniform.jpg'
      }
    ],
    
    testimonials: [
      {
        id: "hotel-hr-director",
        quote: "UNEOM's measurement service transformed our uniform program. Their professional team measured our entire staff across four properties with remarkable efficiency and accuracy. The difference in fit quality was immediately noticeable, with our staff looking significantly more polished and reporting much higher comfort levels. The detailed sizing data has also proven invaluable for our ongoing uniform management.",
        author: 'Fatima Al-Saud',
        position: 'HR Director',
        company: 'Al-Mamlaka Luxury Hotels',
        image: '/images/avatar-placeholder.jpg'
      },
      {
        id: "medical-coo",
        quote: "The level of expertise and organization that UNEOM brought to our measurement process was exceptional. Their team understood the unique challenges of measuring healthcare staff and created solutions that worked within our operational constraints. The precision of the measurements has made a remarkable difference in how our uniforms fit and function, which is critical in a healthcare environment.",
        author: 'Dr. Khalid Al-Omari',
        position: 'Chief Operating Officer',
        company: 'Riyadh Medical Network',
        image: '/images/avatar-placeholder.jpg'
      }
    ],
    
    faqs: [
      {
        question: 'How does the on-site measurement process work?',
        answer: 'Our on-site measurement service follows a structured process designed for efficiency and accuracy. First, we work with your team to schedule measurement sessions based on your operational requirements. On the scheduled dates, our measurement specialists arrive with all necessary equipment and set up fitting stations in designated areas. Employees attend their appointments at assigned times, where our specialists take comprehensive measurements using standardized techniques and digital tools. Each measurement session typically takes 5-7 minutes per person. Employees receive a confirmation of their measurements, and all data is securely uploaded to our system in real-time. We provide daily progress reports during multi-day assignments and a comprehensive summary upon completion.'
      },
      {
        question: 'What measurement technologies do you use?',
        answer: 'We employ a range of measurement technologies depending on project requirements and budget. For standard projects, our specialists use digital measuring tools that provide accuracy to within 1/8 inch (3mm). For larger programs, we offer 3D body scanning technology that captures comprehensive measurements in seconds with exceptional accuracy. Our premium service includes advanced body scanning that creates detailed digital profiles for perfect-fit garments. All measurement data is processed through our proprietary software that identifies potential inconsistencies and ensures measurement accuracy. For specialized garments like safety equipment or tailored formalwear, we employ supplementary measurement techniques specific to those garment types.'
      },
      {
        question: 'How many employees can you measure in a day?',
        answer: 'Our capacity depends on the measurement method and level of detail required. With our standard measurement process, each specialist can accurately measure approximately 40-50 employees per hour. For a full day with multiple specialists, we can typically measure 300-500 employees. With 3D scanning technology, throughput increases to 60-80 employees per hour per scanner. For large organizations, we can deploy multiple measurement teams and stations simultaneously across different areas or shifts to minimize operational disruption. We work with your scheduling team to create an efficient measurement plan that accommodates your workforce size and operational constraints.'
      },
      {
        question: 'Do you offer measurement services for remote employees?',
        answer: "Yes, we offer several solutions for remote employees. Our primary remote option is our guided self-measurement program, which includes detailed instruction videos, specialized measuring tools shipped to the employee, and virtual guidance sessions with our fitting specialists. For executive or specialized roles, we offer individual traveling measurement services where a specialist travels to the employee's location. We also partner with tailoring establishments across Saudi Arabia and the GCC region for in-person measurements following our protocols. All remote measurement data is verified through our quality check system to identify potential inconsistencies, and we have follow-up procedures to resolve any measurement concerns."
      },
      {
        question: 'How do you ensure measurement accuracy and consistency?',
        answer: "Measurement accuracy and consistency are ensured through multiple approaches. All our fitting specialists undergo comprehensive training in standardized measurement techniques and must achieve certification before working independently. We use calibrated measurement tools that are checked daily for accuracy. Our process includes built-in verification steps where critical measurements are taken twice to confirm consistency. For projects with multiple specialists, we conduct regular cross-checks to ensure consistency between different team members. All measurement data undergoes algorithmic review to flag unusual measurements or patterns that might indicate errors. Additionally, we maintain detailed records that allow us to refine an individual's measurements based on feedback after uniform delivery."
      }
    ],
    
    cta: {
      title: 'Ready to ensure perfect-fitting uniforms for your team?',
      description: 'Our measurement specialists can help you implement a professional fitting solution for your organization.',
      buttonText: 'Schedule a Measurement Consultation',
      buttonUrl: '/contact?service=measurement-services'
    },
    
    secondaryCta: {
      title: 'Learn about our corporate uniform policies',
      buttonText: 'Corporate Uniform Policies',
      buttonUrl: '/services/uniform-policies'
    }
  };
  
  return <ServicePageLayout locale={locale} serviceData={serviceData} skipMainLayout={true} />;
} 
