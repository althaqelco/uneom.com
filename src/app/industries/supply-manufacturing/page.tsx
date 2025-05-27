'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function SupplyManufacturingPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page with enhanced SEO and design elements
  const supplyManufacturingData = {
    title: "Premium Uniform Manufacturing & Supply Solutions in Saudi Arabia",
    subtitle: "End-to-end uniform production and supply services with local manufacturing excellence and global sourcing capabilities",
    heroImage: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-1.jpg",
    seoKeywords: "uniform manufacturing Saudi Arabia, uniform production Riyadh, uniform supply chain, custom uniform manufacturing, Saudi uniform suppliers, industrial uniform production, workwear manufacturing KSA, uniform sourcing solutions",
    
    introduction: [
      "UNEOM is Saudi Arabia's leading uniform manufacturing and supply partner, delivering complete end-to-end solutions from design and production to delivery and program management. Our state-of-the-art manufacturing facilities in Riyadh, Jeddah, and Dammam combine with our global sourcing network to provide unmatched capabilities in uniform production.",
      
      "Our comprehensive manufacturing and supply infrastructure enables us to offer exceptional flexibility in quality, cost, and delivery timelines. Whether you need locally produced uniforms supporting Saudi Vision 2030's localization goals or premium imported workwear from our trusted international partners, our solutions are tailored to your specific requirements.",
      
      "With a focus on quality assurance, manufacturing excellence, and supply chain transparency, UNEOM provides reliable and consistent uniform solutions for organizations of all sizes across the Kingdom. From small businesses to large enterprises and government institutions, our manufacturing and supply capabilities ensure your uniform requirements are met with precision and expertise."
    ],
    
    benefits: [
      {
        title: "Local Manufacturing Excellence",
        description: "Saudi-based production facilities equipped with cutting-edge technology, ensuring faster delivery times, reduced shipping costs, and support for local industry development.",
        icon: "/images/icons/premium-quality.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.1,
          duration: 0.8,
          hoverEffect: "pulse"
        },
        iconBackground: "linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)",
        highlight: true
      },
      {
        title: "Global Sourcing Network",
        description: "Strategic partnerships with premium uniform suppliers in Turkey, UAE, China, and Europe for specialized requirements and innovative materials.",
        icon: "/images/icons/comprehensive-support.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.2,
          duration: 0.8,
          hoverEffect: "grow"
        },
        iconBackground: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
        highlight: false
      },
      {
        title: "Advanced Quality Assurance",
        description: "ISO 9001-certified quality control processes at every production stage, with rigorous testing to ensure consistent high standards across all orders.",
        icon: "/images/icons/custom-branding.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.3,
          duration: 0.8,
          hoverEffect: "pulse"
        },
        iconBackground: "linear-gradient(135deg, #36D1DC 0%, #5B86E5 100%)",
        highlight: false
      },
      {
        title: "Scalable Production Capacity",
        description: "Flexible manufacturing capabilities to handle orders of any size, from small businesses to government-scale contracts requiring thousands of uniforms.",
        icon: "/images/icons/timely-delivery.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.4,
          duration: 0.8,
          hoverEffect: "grow"
        },
        iconBackground: "linear-gradient(135deg, #38ef7d 0%, #11998e 100%)",
        highlight: false
      },
      {
        title: "Complete Supply Chain Transparency",
        description: "End-to-end visibility into production stages, materials sourcing, and delivery timelines for better planning and peace of mind.",
        icon: "/images/icons/climate-adapted.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.5,
          duration: 0.8,
          hoverEffect: "pulse"
        },
        iconBackground: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)",
        highlight: false
      }
    ],
    
    // Add a configuration for how to display the benefits section
    benefitsDisplay: {
      layout: "grid",
      iconSize: "large",
      animationEnabled: true,
      style: "premium",
      title: "Manufacturing & Supply Advantages",
      subtitle: "Our end-to-end manufacturing and supply capabilities deliver exceptional value through these key advantages:",
      callToAction: {
        text: "Explore our manufacturing facilities",
        link: "/images/services/industries/supply-manufacturing/supply-manufacturing-uniform-product-1.jpg" // Reverted to 'link' as per type definition
      },
      keyAdvantages: [
        {
          name: "Precision Digital Cutting",
          description: "Computer-controlled cutting machines ensuring perfect precision and minimal waste in the manufacturing process for consistent sizing and fit.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-custom-workers.jpg"
        },
        {
          name: "Advanced Embroidery & Branding",
          description: "High-definition digital embroidery and branding techniques for flawless corporate identity application on all uniform items.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-logos.jpg"
        },
        {
          name: "Quality Control Technology",
          description: "Automated quality inspection systems combined with expert human verification to ensure every uniform meets our stringent quality standards.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-identity.jpg"
        }
      ]
    },
    
    customization: {
      title: "Tailored Manufacturing Solutions",
      description: "Our flexible manufacturing and supply approach allows us to customize every aspect of your uniform program to meet specific organizational requirements.",
      options: [
        {
          name: "Production Volume Flexibility",
          description: "Customizable order quantities from small batches to large-scale production runs with consistent quality across all volumes.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-1.jpg"
        },
        {
          name: "Premium Material Selection",
          description: "Extensive fabric library with options ranging from locally sourced to premium imported materials for different requirements and environments.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-2.jpg"
        },
        {
          name: "Customized Delivery Programs",
          description: "Tailored delivery schedules and distribution plans based on your organization's specific rollout requirements and timeline needs.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-3.jpg"
        },
        {
          name: "Quality Tier Options",
          description: "Multiple quality tiers available to match different budget requirements while maintaining appropriate standards for each use case.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-accesories.jpg"
        }
      ]
    },
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM's manufacturing capabilities have revolutionized our uniform program. Their local production facilities ensure quick turnarounds for our 3,000+ employees, while their quality control processes guarantee consistent excellence. Their ability to scale production while maintaining precision is remarkable.",
        author: "Dr. Khalid Al-Zahrani",
        position: "Procurement Director",
        company: "National Healthcare Group"
      },
      {
        id: "testimonial-2",
        quote: "As a government contractor, we appreciate UNEOM's comprehensive approach to uniform manufacturing and supply. Their transparent documentation, quality assurance processes, and on-time delivery have made them our trusted partner for all uniform requirements across our operations.",
        author: "Ibrahim Al-Otaibi",
        position: "Supply Chain Manager",
        company: "Saudi Government Services"
      }
    ],
    
    relatedContent: [
      {
        title: "Industrial Heat-Resistant Workwear Manufacturing",
        description: "How innovative manufacturing techniques are creating advanced heat-resistant workwear for Saudi industrial environments",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-1.jpg",
        link: "/blog/industrial-heat-stress-management"
      },
      {
        title: "Sustainable Uniform Manufacturing Practices",
        description: "Exploring eco-friendly manufacturing processes and materials in Saudi Arabia's uniform production industry",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-2.jpg",
        link: "/blog/sustainable-uniforms-2024-trends"
      },
      {
        title: "Anti-Static Uniform Manufacturing Technologies",
        description: "Advanced production techniques for creating electrostatic protection uniforms for high-risk industrial environments",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-3.jpg",
        link: "/blog/industrial-electrostatic-protection"
      }
    ],
    
    featuredProducts: [
      {
        id: "industrial-coverall-pro",
        name: "Premium Industrial Coverall",
        description: "Heavy-duty industrial coverall manufactured with flame-resistant fabric and reinforced seams for maximum protection and durability.",
        price: "From SAR 289",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-1.jpg",
        href: "/shop/industrial-uniforms/supervisor-industrial-uniform",
        features: ["Professional design", "Durable materials", "Management visibility", "Comfort-focused"],
        badge: "Management Quality"
      }
    ],
    
    faq: [
      {
        question: "What is your manufacturing capacity and typical lead time?",
        answer: "Our state-of-the-art facilities can produce up to 75,000 uniform pieces monthly across our Saudi manufacturing locations. Standard lead times range from 2-3 weeks for regular orders, with expedited production available for urgent requirements. Large volume orders typically require 4-6 weeks for complete fulfillment, depending on specifications and customization requirements."
      },
      {
        question: "Do you source materials locally or internationally?",
        answer: "We maintain a strategic hybrid approach, sourcing premium fabrics and materials both locally from Saudi suppliers and internationally from trusted partners in Turkey, UAE, China, and Europe. This flexibility allows us to balance quality, cost, and specific requirements for each client's unique needs, while supporting Saudi Vision 2030 localization goals whenever possible."
      },
      {
        question: "How do you ensure consistent quality across large manufacturing orders?",
        answer: "We implement a comprehensive ISO 9001-certified quality management system that includes material testing, production line inspections, statistical quality control, random sampling, and final quality verification before shipping. Our digital tracking system ensures every piece meets our established quality standards across all stages of the manufacturing process."
      },
      {
        question: "Can you fulfill government tender requirements for uniform manufacturing?",
        answer: "Yes, we have extensive experience with government contracts and tenders for uniform manufacturing and supply. Our documentation, security clearances, Saudization levels, and quality certifications meet all requirements for government procurement processes. Our dedicated government services team specializes in tender preparation and fulfillment."
      }
    ],
    
    cta: {
      title: "Transform Your Uniform Program with Premium Manufacturing & Supply",
      description: "Contact our expert team to discuss your organization's uniform manufacturing and supply requirements. From design and production to delivery and program management, UNEOM delivers excellence at every stage.",
      buttonText: "Request Manufacturing Consultation",
      buttonUrl: "/contact?industry=supply-manufacturing"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={supplyManufacturingData} skipMainLayout={true} />;
} 