'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function SupplyManufacturingPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page
  const supplyManufacturingData = {
    title: "Uniform Supply & Manufacturing Solutions in Saudi Arabia",
    subtitle: "Comprehensive uniform production and supply services for businesses across Saudi Arabia with local and international sourcing capabilities",
    heroImage: "/images/banner-placeholder.jpg",
    
    introduction: [
      "UNEOM is a leading uniform manufacturing and supply company in Saudi Arabia, providing end-to-end uniform solutions for organizations of all sizes across the Kingdom. With manufacturing facilities in Riyadh, Jeddah, and the Eastern Province, combined with strategic international partnerships, we deliver high-quality uniforms that meet the specific requirements of Saudi businesses.",
      
      "Our comprehensive supply chain infrastructure enables us to offer a wide range of options, from locally produced uniforms that support Saudi Vision 2030's localization goals to premium imported workwear from trusted international suppliers. This flexibility allows us to balance quality, cost, and delivery timelines to best serve our clients' specific needs.",
      
      "Whether you require wholesale uniform production for large-scale organizations, specialized manufacturing for unique requirements, or custom uniform tailoring services, UNEOM provides reliable, consistent, and high-quality uniform supply solutions with excellent customer service throughout the procurement process."
    ],
    
    benefits: [
      {
        title: "Local Manufacturing Capability",
        description: "Saudi-based production facilities ensure faster delivery times, reduced shipping costs, and support for local industry development.",
        icon: "/icons/local-manufacturing.svg"
      },
      {
        title: "International Sourcing Network",
        description: "Strategic partnerships with premium uniform suppliers in Turkey, China, and Europe for specialized requirements and innovative materials.",
        icon: "/icons/global-network.svg"
      },
      {
        title: "Quality Assurance Systems",
        description: "Rigorous quality control processes at every stage of production, ensuring consistent high standards across all orders.",
        icon: "/icons/quality-control.svg"
      },
      {
        title: "Scalable Production Capacity",
        description: "Flexible manufacturing capabilities to handle orders of any size, from small businesses to government-scale contracts.",
        icon: "/icons/scalability.svg"
      },
      {
        title: "Supply Chain Transparency",
        description: "Complete visibility into production stages, materials sourcing, and delivery timelines for better planning and peace of mind.",
        icon: "/icons/transparency.svg"
      }
    ],
    
    products: [
      {
        id: "uniform-manufacturing",
        name: "Uniform Manufacturing Services",
        description: "Full-scale production of uniforms in our Saudi facilities with advanced machinery and skilled craftsmanship for consistent quality.",
        image: "/images/product-placeholder.jpg",
        href: "/services/manufacturing"
      },
      {
        id: "uniform-suppliers-riyadh",
        name: "Uniform Supply Riyadh",
        description: "Comprehensive uniform supply services for organizations in Riyadh and Central Province, with rapid delivery capabilities.",
        image: "/images/product-placeholder.jpg",
        href: "/services/supply/riyadh"
      },
      {
        id: "uniform-suppliers-jeddah",
        name: "Uniform Supply Jeddah",
        description: "Dedicated uniform supply operations serving Jeddah and the Western Region with customized delivery schedules.",
        image: "/images/product-placeholder.jpg",
        href: "/services/supply/jeddah"
      },
      {
        id: "uniform-suppliers-dammam",
        name: "Uniform Supply Dammam",
        description: "Specialized uniform supply services for the Eastern Province, including oil & gas industries and manufacturing sectors.",
        image: "/images/product-placeholder.jpg",
        href: "/services/supply/eastern-province"
      },
      {
        id: "wholesale-uniform-tailoring",
        name: "Wholesale Uniform Tailoring",
        description: "Large-scale tailoring services for uniform programs requiring perfect fit and consistent quality across numerous employees.",
        image: "/images/product-placeholder.jpg",
        href: "/services/wholesale-tailoring"
      },
      {
        id: "government-uniform-suppliers",
        name: "Government Uniform Supply",
        description: "Specialized supply programs for government entities with compliance documentation, security clearances, and tender capabilities.",
        image: "/images/product-placeholder.jpg",
        href: "/services/government-supply"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "Local Fabric Production",
        description: "Saudi-manufactured fabrics that meet international quality standards while supporting the Kingdom's textile industry development.",
        icon: "/icons/local-fabric.svg"
      },
      {
        name: "Import Quality Control",
        description: "Rigorous testing and verification processes for imported materials to ensure they meet our quality standards before production.",
        icon: "/icons/import-verification.svg"
      },
      {
        name: "Advanced Manufacturing Equipment",
        description: "State-of-the-art production machinery that ensures precision cutting, stitching, and finishing for superior quality uniforms.",
        icon: "/icons/manufacturing-tech.svg"
      },
      {
        name: "Sustainable Production Practices",
        description: "Environmentally conscious manufacturing processes that reduce waste, conserve energy, and minimize environmental impact.",
        icon: "/icons/sustainable-production.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Production Volume Flexibility",
        description: "Customizable order quantities from small batches to large-scale production runs with consistent quality across all volumes.",
        icon: "/icons/volume-flexibility.svg"
      },
      {
        name: "Material Selection Options",
        description: "Extensive fabric library with options ranging from locally sourced to premium imported materials for different requirements and budgets.",
        icon: "/icons/material-selection.svg"
      },
      {
        name: "Delivery Program Customization",
        description: "Tailored delivery schedules and distribution plans based on your organization's specific rollout requirements.",
        icon: "/icons/delivery-customization.svg"
      },
      {
        name: "Quality Tier Options",
        description: "Multiple quality tiers available to match different budget requirements while maintaining appropriate standards for each use case.",
        icon: "/icons/quality-tiers.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM's manufacturing capabilities have been instrumental in supplying our hospital network with consistent, high-quality medical uniforms. Their local production facilities ensure quick turnaround times even for our largest orders.",
        author: "Dr. Khalid Al-Zahrani",
        position: "Procurement Director",
        company: "National Healthcare Group"
      },
      {
        id: "testimonial-2",
        quote: "As a government contractor, we appreciate UNEOM's ability to handle large-scale uniform requirements with perfect documentation and consistency. Their transparent supply chain and quality assurance processes give us complete confidence.",
        author: "Ibrahim Al-Otaibi",
        position: "Supply Chain Manager",
        company: "Saudi Government Services"
      }
    ],
    
    faq: [
      {
        question: "What is your manufacturing capacity and typical lead time?",
        answer: "Our facilities can produce up to 50,000 uniform pieces monthly. Standard lead times range from 2-4 weeks for regular orders, with expedited production available for urgent requirements. Large volume orders typically require 6-8 weeks for complete fulfillment."
      },
      {
        question: "Do you source materials locally or internationally?",
        answer: "We maintain a hybrid approach, sourcing fabrics and materials both locally from Saudi suppliers and internationally from trusted partners in Turkey, China, and Europe. This flexibility allows us to balance quality, cost, and specific requirements for each client's needs."
      },
      {
        question: "How do you ensure consistent quality across large orders?",
        answer: "We implement a comprehensive quality management system that includes material testing, production line inspections, random sampling, and final quality verification before shipping. Our digital tracking system ensures every piece meets our established quality standards."
      },
      {
        question: "Can you fulfill government tender requirements?",
        answer: "Yes, we have extensive experience with government contracts and tenders. Our documentation, security clearances, Saudization levels, and quality certifications meet all requirements for government procurement processes."
      }
    ],
    
    cta: {
      title: "Discover Our Uniform Manufacturing & Supply Solutions",
      description: "Contact our supply team to discuss your organization's uniform requirements and learn how UNEOM can provide reliable, high-quality production and delivery services.",
      buttonText: "Request Supply Consultation",
      buttonUrl: "/contact?industry=supply-manufacturing"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={supplyManufacturingData} skipMainLayout={true} />;
} 