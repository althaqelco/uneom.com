import React from 'react';
import { Metadata } from 'next';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// SEO metadata
export const metadata: Metadata = {
  title: 'Industrial & Factory Security Uniforms in Saudi Arabia | UNEOM',
  description: 'Premium security uniforms for industrial facilities and factories in Saudi Arabia. Professional, durable workwear designed for maximum protection and comfort.',
  keywords: 'factory security uniforms, industrial security workwear, Saudi Arabia security uniforms, protective security gear, factory safety uniforms, industrial facility security',
  openGraph: {
    title: 'Industrial & Factory Security Uniforms in Saudi Arabia | UNEOM',
    description: 'Premium security uniforms for industrial facilities and factories in Saudi Arabia. Professional, durable workwear designed for maximum protection and comfort.',
    images: ['/images/industries/factory_industry/factory-security-uniform-main.jpg'],
  }
};

export default function FactorySecurityPage() {
  const locale = 'en';
  
  const factorySecurityData = {
    title: "Industrial & Factory Security Uniforms",
    subtitle: "Professional Security Solutions for Industrial Environments",
    heroImage: "/images/industries/factory_industry/factory-security-uniform-main.jpg",
    
    introduction: [
      "In the demanding environment of industrial facilities and factories, security personnel require uniforms that combine durability, functionality, and professional appearance. UNEOM delivers premium security uniforms specifically designed for the unique challenges of industrial security operations.",
      
      "Our comprehensive range of industrial security uniforms incorporates advanced materials and thoughtful design features that enhance performance while maintaining a commanding presence. From high-visibility elements to flame-resistant properties, every detail is engineered for safety and effectiveness.",
      
      "With deep expertise in Saudi Arabia's industrial sector requirements, we provide customized security uniform solutions that meet international safety standards while respecting local cultural values."
    ],
    
    benefits: [
      {
        title: "Enhanced Safety Features",
        description: "High-visibility elements and flame-resistant materials for maximum protection.",
        icon: "/images/icons/safety.svg",
        gradient: "from-yellow-500 to-amber-600"
      },
      {
        title: "Professional Authority",
        description: "Commanding presence that establishes security personnel authority and credibility.",
        icon: "/images/icons/authority.svg",
        gradient: "from-blue-600 to-indigo-700"
      },
      {
        title: "Durability & Comfort",
        description: "Premium materials that withstand industrial conditions while ensuring all-day comfort.",
        icon: "/images/icons/durability.svg",
        gradient: "from-green-600 to-emerald-700"
      },
      {
        title: "Weather Adaptation",
        description: "Climate-smart designs for both indoor and outdoor security operations.",
        icon: "/images/icons/weather.svg",
        gradient: "from-cyan-500 to-blue-600"
      },
      {
        title: "Identification & Access",
        description: "Integrated features for badges, access cards, and communication devices.",
        icon: "/images/icons/identification.svg",
        gradient: "from-purple-600 to-violet-700"
      }
    ],
    
    products: [
      {
        id: "industrial-security-uniform",
        name: "Industrial Security Uniform Set",
        description: "Complete security uniform set designed for industrial environments, featuring high-visibility elements and durable construction.",
        image: "/images/industries/factory_industry/factory-security-uniform-1.jpg",
        href: "/images/industries/factory_industry/factory-security-uniform-2.jpg",
        href: "/images/industries/factory_industry/factory-security-uniform-3.jpg",
        href: "/shop/security-uniforms/supervisor-set",
        features: ["Professional design", "Premium materials", "Supervisor insignia"]
      }
    ],
    
    fabricTechnologies: [
      {
        name: "DuraTough™ Protection",
        description: "Advanced fabric technology providing superior durability and protection in industrial environments.",
        icon: "/images/icons/protection.svg",
        animation: "fade-right"
      },
      {
        name: "ClimateControl Comfort",
        description: "Innovative temperature regulation for optimal comfort in varying conditions.",
        icon: "/images/icons/temperature.svg",
        animation: "fade-up"
      },
      {
        name: "SafetyFlex Technology",
        description: "Enhanced mobility features without compromising on protection and durability.",
        icon: "/images/icons/flexibility.svg",
        animation: "fade-left"
      }
    ],
    
    customizationOptions: [
      {
        name: "Company Branding",
        description: "Professional logo application and color matching to align with company identity.",
        icon: "/images/icons/branding.svg",
        gradient: "from-blue-500 to-blue-700"
      },
      {
        name: "Rank Distinction",
        description: "Clear visual hierarchy through thoughtful design elements and insignias.",
        icon: "/images/icons/rank.svg",
        gradient: "from-purple-500 to-purple-700"
      },
      {
        name: "Safety Integration",
        description: "Customizable safety features based on specific facility requirements.",
        icon: "/images/icons/safety-custom.svg",
        gradient: "from-green-500 to-green-700"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM's industrial security uniforms have significantly improved our team's effectiveness and professional image. The quality and attention to safety features are outstanding.",
        author: "Ahmed Al-Rashid",
        position: "Security Operations Manager",
        company: "Major Industrial Complex, Dammam",
        image: "/images/testimonials/ahmed.jpg"
      },
      {
        id: "testimonial-2",
        quote: "The durability and comfort of these uniforms have made a real difference in our security team's performance, especially during long shifts.",
        author: "Fahad Al-Harbi",
        position: "Facility Security Director",
        company: "Leading Manufacturing Plant, Riyadh",
        image: "/images/testimonials/fahad.jpg"
      }
    ],
    
    relatedProducts: [
      {
        name: "Premium Industrial Security Set",
        description: "Complete uniform solution with enhanced safety features",
        image: "/images/industries/factory_industry/factory-security-premium-set.jpg",
        href: "/images/industries/factory_industry/factory-security-patrol-kit.jpg",
        href: "/images/industries/factory_industry/factory-security-command.jpg",
        href: "/images/industries/factory_industry/factory-security-features.jpg",
        href: "/blog/industrial-security-uniform-features"
      },
      {
        title: "Enhancing Security Operations Through Professional Uniforms",
        excerpt: "How the right uniforms can improve security team performance and authority",
        image: "/images/industries/factory_industry/factory-security-operations.jpg",
        href: "/blog/security-uniform-impact"
      },
      {
        title: "Modern Safety Features in Security Workwear",
        excerpt: "Latest innovations in security uniform safety technology",
        image: "/images/industries/factory_industry/factory-security-safety.jpg",
        href: "/blog/security-uniform-safety"
      }
    ],
    
    faq: [
      {
        question: "What safety certifications do your security uniforms meet?",
        answer: "Our industrial security uniforms comply with international safety standards including ISO 11612 for flame resistance and EN ISO 20471 for high-visibility requirements."
      },
      {
        question: "Can uniforms be customized for different security roles?",
        answer: "Yes, we offer comprehensive customization options including rank insignias, department identification, and role-specific features while maintaining consistent branding."
      },
      {
        question: "What is the typical durability of your security uniforms?",
        answer: "Our industrial security uniforms are designed to maintain their professional appearance and protective properties for at least 12-18 months of regular use with proper care."
      },
      {
        question: "Do you provide uniforms for specific industrial environments?",
        answer: "Yes, we customize our security uniforms based on specific industry requirements, including additional protective features for chemical plants, oil & gas facilities, or manufacturing units."
      }
    ],
    
    cta: {
      title: "Elevate Your Industrial Security Standards",
      description: "Transform your security team's effectiveness with professional uniforms designed for industrial environments.",
      buttonText: "Request Consultation",
      buttonUrl: "/contact?industry=factory-security",
      secondaryButton: {
        text: "View Catalog",
        url: "/shop/security-uniforms"
      }
    }
  };

  return (
    <IndustryPageLayout 
      locale={locale} 
      industryData={factorySecurityData} 
      skipMainLayout={true}
    />
  );
} 