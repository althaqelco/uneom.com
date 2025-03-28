'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function SecurityPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page
  const securityIndustryData = {
    title: "Professional Security Uniforms in Saudi Arabia",
    subtitle: "Authoritative and functional workwear designed for Saudi security personnel and facilities",
    heroImage: "/images/banner-placeholder.jpg",
    
    introduction: [
      "In Saudi Arabia's expanding security sector, professional appearance is a critical aspect of authority, trustworthiness, and operational effectiveness. UNEOM provides premium security uniforms designed specifically for Saudi security environments, combining a commanding presence with practical functionality and climate-appropriate design.",
      
      "Our comprehensive security collection includes guard uniforms, executive protection attire, event security workwear, and specialized tactical gear crafted from durable fabrics that withstand daily use while maintaining a professional appearance. Each garment is engineered to provide comfort during long shifts while conveying the authority and professionalism required in security operations.",
      
      "Understanding the unique requirements of Saudi security providers, we offer customization options that respect cultural considerations while maintaining international security standards. From government facilities and corporate headquarters to special events and residential complexes, our uniforms are tailored to enhance both security personnel effectiveness and public confidence in your security operations."
    ],
    
    benefits: [
      {
        title: "Authority Projection",
        description: "Professional designs that instantly convey security authority and establish respect in various scenarios and environments.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "Tactical Functionality",
        description: "Specialized features including reinforced pockets, equipment attachments, and strategic seam placement for operational movements.",
        icon: "/icons/lightning-bolt.svg"
      },
      {
        title: "Climate Adaptability",
        description: "Breathable, moisture-wicking fabrics engineered for comfort during security operations in Saudi Arabia's high-temperature climate.",
        icon: "/icons/sun.svg"
      },
      {
        title: "Institutional Identity",
        description: "Consistent, brand-aligned security uniforms that reinforce your organization's identity and professional standards.",
        icon: "/icons/identification.svg"
      }
    ],
    
    products: [
      {
        id: "formal-security",
        name: "Formal Security Uniforms",
        description: "Professional grade security attire for corporate facilities, government buildings, and high-profile locations requiring authoritative presence.",
        image: "/images/default-placeholder.jpg",
        href: "/shop/formal-security"
      },
      {
        id: "tactical-security",
        name: "Tactical Security Wear",
        description: "Enhanced durability uniforms with specialized pockets, reinforcement, and tactical features for active security personnel.",
        image: "/images/default-placeholder.jpg",
        href: "/shop/tactical-security"
      },
      {
        id: "event-security",
        name: "Event Security Attire",
        description: "Highly visible, easily identifiable uniforms for event staff, crowd management, and public venue security operations.",
        image: "/images/default-placeholder.jpg",
        href: "/shop/event-security"
      },
      {
        id: "executive-protection",
        name: "Executive Protection Apparel",
        description: "Discreet yet professional attire for close protection officers and executive security details with concealed tactical features.",
        image: "/images/default-placeholder.jpg",
        href: "/shop/executive-protection"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "DuraGuard™ Fabric",
        description: "High-density woven fabric with enhanced tear and abrasion resistance specifically engineered for security operations.",
        icon: "/icons/shield-check.svg"
      },
      {
        name: "ClimaCool™ Technology",
        description: "Advanced moisture-wicking technology that increases comfort during extended security shifts in high-temperature environments.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "FlexTac™ Construction",
        description: "Strategic flex panels and articulated joints that enhance movement during security interventions and active duties.",
        icon: "/icons/refresh.svg"
      },
      {
        name: "NightVis™ Elements",
        description: "Reflective and phosphorescent elements that enhance visibility during nighttime security operations without compromising professional appearance.",
        icon: "/icons/eye.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Rank & Position Indicators",
        description: "Customizable epaulets, badges, and insignia that clearly identify security personnel rank and authority level.",
        icon: "/icons/badge-check.svg"
      },
      {
        name: "Corporate Security Branding",
        description: "Professionally applied logos, emblems, and corporate identity elements across all security uniform components.",
        icon: "/icons/template.svg"
      },
      {
        name: "Tactical Customization",
        description: "Modified pocket configurations, equipment attachments, and function-specific design elements based on operational requirements.",
        icon: "/icons/adjustments.svg"
      },
      {
        name: "Cultural Adaptations",
        description: "Security uniform designs that respect Saudi cultural requirements while maintaining professional security standards.",
        icon: "/icons/globe.svg"
      }
    ],
    
    testimonials: [
      {
        id: "riyadh-security",
        quote: "UNEOM has revolutionized our security division's professional image while providing uniforms that actually function in our demanding environment. Our guards report significantly improved comfort during 12-hour shifts, and the authoritative appearance has noticeably enhanced compliance from visitors to our facilities.",
        author: "Abdullah Al-Qahtani",
        position: "Security Operations Director",
        company: "Royal Security Services",
        image: "/images/avatar-placeholder.jpg"
      }
    ],
    
    cta: {
      title: "Elevate Your Security Operations",
      description: "Contact our security uniform specialists to develop a comprehensive security attire program tailored to your operational requirements.",
      buttonText: "Request Security Consultation",
      buttonUrl: "/contact?industry=security"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={securityIndustryData}
    />
  );
} 