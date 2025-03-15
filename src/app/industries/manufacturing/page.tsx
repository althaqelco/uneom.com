'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function ManufacturingPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page
  const manufacturingIndustryData = {
    title: "Industrial & Manufacturing Uniforms in Saudi Arabia",
    subtitle: "Safety-compliant workwear designed for industrial environments with Saudi Arabia's climate in mind",
    heroImage: "/images/banner-placeholder.jpg",
    
    introduction: [
      "In Saudi Arabia's growing manufacturing and industrial sectors, specialized workwear is essential for ensuring safety, compliance, and productivity. UNEOM provides high-quality industrial uniforms designed specifically for Saudi manufacturing environments, combining safety standards with comfort in high-temperature conditions.",
      
      "Our comprehensive industrial collection includes coveralls, high-visibility workwear, flame-resistant clothing, and specialized protective gear crafted from durable fabrics that withstand harsh industrial conditions while maintaining comfort during long shifts. Each garment is engineered to provide maximum protection while enhancing mobility and productivity in demanding industrial settings.",
      
      "Understanding the unique requirements of Saudi industrial facilities, we offer customization options that respect cultural considerations while maintaining international safety standards. From petrochemical plants and construction sites to food processing facilities and automotive plants, our uniforms are tailored to enhance both worker safety and operational efficiency in your industrial facility."
    ],
    
    benefits: [
      {
        title: "Heat Resistance",
        description: "Climate-adaptive fabrics designed to provide comfort and protection in Saudi Arabia's high-temperature industrial environments.",
        icon: "/icons/fire.svg"
      },
      {
        title: "Safety Compliance",
        description: "Workwear that meets Saudi and international safety standards, including OSHA and ISO certifications.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "Enhanced Durability",
        description: "Industrial-grade fabrics and reinforced construction that withstand harsh conditions and frequent industrial laundering.",
        icon: "/icons/adjustments.svg"
      },
      {
        title: "Cultural Adaptability",
        description: "Modified workwear designs that respect Saudi cultural requirements while maintaining safety functionality.",
        icon: "/icons/globe.svg"
      }
    ],
    
    products: [
      {
        id: "industrial-coveralls",
        name: "Premium Industrial Coveralls",
        description: "Durable, full-body protection designed for various industrial environments with heat-resistant and flame-retardant options.",
        image: "/images/banner-placeholder.jpg",
        href: "/shop/industrial-coveralls"
      },
      {
        id: "hi-vis-workwear",
        name: "High-Visibility Workwear",
        description: "ANSI/ISEA-compliant high-visibility clothing with reflective elements for hazardous environments and night work.",
        image: "/images/default-placeholder.jpg",
        href: "/shop/hi-vis-workwear"
      },
      {
        id: "flame-resistant-clothing",
        name: "Flame-Resistant Apparel",
        description: "Specialized FR clothing for oil & gas, chemical, and electrical industries with advanced protection technologies.",
        image: "/images/default-placeholder.jpg",
        href: "/shop/flame-resistant-clothing"
      },
      {
        id: "food-processing-uniforms",
        name: "Food Processing Uniforms",
        description: "Hygienic, antimicrobial workwear for food manufacturing with HACCP compliance and contamination prevention features.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/food-processing-uniforms"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "ThermoRegulate™ Fabric",
        description: "Advanced temperature regulation technology that helps maintain body comfort in high-heat industrial environments.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "DuraTough™ Construction",
        description: "Reinforced stitching and abrasion-resistant fabrics that extend garment life in demanding industrial conditions.",
        icon: "/icons/shield-check.svg"
      },
      {
        name: "FlexWork™ Design",
        description: "Ergonomic garment construction with strategic stretch panels that enhance mobility during industrial tasks.",
        icon: "/icons/refresh.svg"
      },
      {
        name: "ChemShield™ Technology",
        description: "Chemical-resistant fabric treatments that protect against common industrial chemicals, oils, and solvents.",
        icon: "/icons/beaker.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Department Color Coding",
        description: "Systematic color schemes that visually identify different departments and roles within your industrial facility.",
        icon: "/icons/color-swatch.svg"
      },
      {
        name: "Corporate Branding",
        description: "Integration of your company's logo and brand elements across all workwear types with durable application methods.",
        icon: "/icons/template.svg"
      },
      {
        name: "Specialized Pockets & Features",
        description: "Custom pocket configurations and tool holders tailored to specific job functions and equipment needs.",
        icon: "/icons/puzzle.svg"
      },
      {
        name: "Name & Position Identification",
        description: "Heat-sealed or embroidered name tags, position indicators, and certification badges that withstand industrial washing.",
        icon: "/icons/identification.svg"
      }
    ],
    
    testimonials: [
      {
        id: "jubail-industrial",
        quote: "UNEOM transformed our safety program with industrial uniforms that not only meet international standards but are also comfortable in our high-temperature environment. The flame-resistant coveralls have proven exceptionally durable, and our workers report significantly improved comfort during long shifts in challenging conditions.",
        author: "Eng. Mohammed Al-Otaibi",
        position: "Safety Director",
        company: "Jubail Industrial Development",
        image: "/images/avatar-placeholder.jpg"
      }
    ],
    
    cta: {
      title: "Enhance Safety & Efficiency",
      description: "Contact our industrial uniform specialists to develop a comprehensive workwear program tailored to your facility's unique requirements.",
      buttonText: "Request Industrial Consultation",
      buttonUrl: "/contact?industry=manufacturing"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={manufacturingIndustryData}
    />
  );
} 