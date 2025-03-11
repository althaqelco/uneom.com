'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function EducationPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page
  const educationIndustryData = {
    title: "Premium Education Uniforms in Saudi Arabia",
    subtitle: "High-quality school and university attire promoting identity and excellence",
    heroImage: "/images/industries/education-hero.jpg",
    
    introduction: [
      "Education uniforms play a vital role in Saudi Arabia's evolving academic landscape, fostering a sense of belonging and institutional pride while encouraging discipline and equality among students. UNEOM provides premium uniform solutions for educational institutions throughout the Kingdom, from primary schools to prestigious universities.",
      
      "Our comprehensive education collection includes school uniforms, academic attire, sportswear, and ceremonial garments designed specifically for Saudi educational environments. Each piece balances durability and comfort while respecting Saudi cultural values and accounting for the Kingdom's climate conditions.",
      
      "Understanding the unique requirements of different educational institutions, we offer customization options that allow schools and universities to incorporate their identity and values into every uniform element. From national schools to international academies and higher education facilities, our tailored approach ensures your institution's uniform reflects your educational philosophy and standards."
    ],
    
    benefits: [
      {
        title: "Identity & Pride",
        description: "Uniforms that reinforce institutional identity and foster pride among students and faculty.",
        icon: "/icons/badge-check.svg"
      },
      {
        title: "Durability & Value",
        description: "High-quality construction that stands up to daily wear and frequent washing throughout the academic year.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "Climate Comfort",
        description: "Breathable, lightweight fabrics designed specifically for Saudi Arabia's hot climate and air-conditioned classrooms.",
        icon: "/icons/thumb-up.svg"
      },
      {
        title: "Cultural Sensitivity",
        description: "Designs that respect Islamic dress codes while providing comfortable, practical academic attire.",
        icon: "/icons/globe.svg"
      }
    ],
    
    products: [
      {
        id: "school-uniforms",
        name: "K-12 School Uniforms",
        description: "Comprehensive uniform collections for primary and secondary schools with gender-specific options.",
        image: "/images/shop/school-uniforms.jpg",
        href: "/shop/school-uniforms"
      },
      {
        id: "university-attire",
        name: "University & College Attire",
        description: "Professional uniform solutions for higher education institutions, including department-specific variations.",
        image: "/images/shop/university-attire.jpg",
        href: "/shop/university-attire"
      },
      {
        id: "pe-sports",
        name: "Physical Education & Sports",
        description: "Performance sportswear for physical education classes and school athletic teams.",
        image: "/images/shop/pe-sports.jpg",
        href: "/shop/pe-sports"
      },
      {
        id: "academic-ceremonies",
        name: "Academic Ceremonial Garments",
        description: "Graduation gowns, caps, and ceremonial attire customized with your institution's colors and emblems.",
        image: "/images/shop/academic-ceremonies.jpg",
        href: "/shop/academic-ceremonies"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "DuraSmart™ Fabrics",
        description: "Long-lasting fabric blends that withstand frequent washing and daily classroom wear.",
        icon: "/icons/shield-check.svg"
      },
      {
        name: "EasyClean™ Technology",
        description: "Stain-resistant treatments that keep uniforms looking fresh despite daily use.",
        icon: "/icons/sparkles.svg"
      },
      {
        name: "ClimateComfort™ Design",
        description: "Lightweight, breathable fabrics that keep students comfortable in Saudi Arabia's climate.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "ColorLock™ Treatment",
        description: "Advanced color fixation that maintains vibrancy even after numerous washing cycles.",
        icon: "/icons/color-swatch.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Institutional Branding",
        description: "Integration of school crests, logos, and colors throughout the uniform collection.",
        icon: "/icons/template.svg"
      },
      {
        name: "Grade & Department Distinction",
        description: "Subtle design elements that differentiate between grade levels or academic departments.",
        icon: "/icons/user-group.svg"
      },
      {
        name: "Islamic Dress Options",
        description: "Uniform designs that accommodate hijabs and modest dress requirements.",
        icon: "/icons/globe.svg"
      },
      {
        name: "Achievement Recognition",
        description: "Custom badges, pins, and elements that recognize student achievements and positions.",
        icon: "/icons/badge-check.svg"
      }
    ],
    
    testimonials: [
      {
        id: "international-academy",
        quote: "UNEOM provided our international academy with uniforms that perfectly balance our modern educational approach with respect for Saudi traditions. The quality is exceptional, and their design team incorporated our school colors and emblem beautifully.",
        author: "Sarah Al-Otaibi",
        position: "School Director",
        company: "International Academy of Riyadh",
        image: "/images/testimonials/sarah-al-otaibi.jpg"
      }
    ],
    
    cta: {
      title: "Elevate Your Educational Institution",
      description: "Contact our education uniform specialists to develop a comprehensive uniform program that reflects your institution's values and enhances student experience.",
      buttonText: "Request Education Consultation",
      buttonUrl: "/contact?industry=education"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={educationIndustryData}
    />
  );
} 