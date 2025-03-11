'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

export default function BulkOrderingServicePage() {
  const locale = 'en';
  const serviceData = {
    title: 'Bulk Ordering',
    subtitle: 'Streamlined procurement solutions for large-scale uniform requirements',
    heroImage: '/images/services/bulk-ordering-hero.jpg',
    
    overview: [
      "UNEOM's Bulk Ordering service provides a streamlined solution for organizations requiring large quantities of uniforms across multiple departments or locations. Our specialized procurement team works with you to coordinate complex orders, manage logistics, and ensure consistent quality across your entire uniform program.",
      "We understand the challenges of large-scale uniform procurement and have developed systems and processes specifically designed to handle high-volume orders efficiently. From manufacturing optimization to inventory management and delivery coordination, our comprehensive approach ensures your organization receives exactly what it needs, when it needs it, at the most competitive price point possible."
    ],
    
    steps: [
      {
        icon: '/images/icons/requirements.svg',
        title: 'Requirements Assessment',
        description: 'We begin by conducting a thorough assessment of your uniform requirements, including quantities, styles, sizes, customization needs, and delivery timelines. This detailed understanding forms the foundation for an optimized procurement plan.'
      },
      {
        icon: '/images/icons/proposal.svg',
        title: 'Proposal & Optimization',
        description: 'Our team develops a comprehensive proposal with volume-based pricing tiers and identifies opportunities for cost optimization without compromising quality. We work with you to refine the proposal until it perfectly aligns with your needs and budget.'
      },
      {
        icon: '/images/icons/production.svg',
        title: 'Production & Quality Control',
        description: 'Once approved, we coordinate the production process with rigorous quality control standards at every stage. Our dedicated teams ensure consistent sizing, correct customization, and adherence to all specifications across your entire order.'
      },
      {
        icon: '/images/icons/logistics.svg',
        title: 'Logistics & Delivery',
        description: 'We manage all aspects of order fulfillment, including inventory management, packaging, shipping, and delivery coordination. For multi-location orders, we ensure each site receives the correct items on schedule.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/icons/savings.svg',
        title: 'Cost Efficiency',
        description: 'Benefit from significant volume discounts, optimized production processes, and efficient logistics management that can reduce overall uniform costs by 15-30%.'
      },
      {
        icon: '/images/icons/quality.svg',
        title: 'Consistent Quality',
        description: 'Our stringent quality control protocols ensure uniform consistency across your entire order, regardless of quantity or complexity.'
      },
      {
        icon: '/images/icons/time.svg',
        title: 'Time Savings',
        description: 'Eliminate the administrative burden of managing multiple vendors or orders with our single-source solution for all uniform requirements.'
      },
      {
        icon: '/images/icons/flexibility.svg',
        title: 'Flexible Ordering Options',
        description: 'Choose from one-time bulk procurement, scheduled recurring orders, or on-demand ordering systems based on your operational needs.'
      },
      {
        icon: '/images/icons/logistics.svg',
        title: 'Simplified Logistics',
        description: 'Our sophisticated logistics management handles complex distribution requirements, ensuring the right uniforms reach the right locations at the right time.'
      },
      {
        icon: '/images/icons/reports.svg',
        title: 'Detailed Reporting',
        description: 'Receive comprehensive order tracking, inventory reports, and cost analysis to maintain complete visibility throughout the procurement process.'
      }
    ],
    
    caseStudies: [
      {
        id: "hotel-chain",
        title: "Luxury Hotel Chain Uniform Rollout",
        description: "A leading luxury hotel chain needed to outfit 2,500 staff members across 12 locations with new uniforms as part of a brand refresh.",
        result: "Reduced procurement costs by 22% while ensuring consistent quality and on-time delivery to all locations.",
        image: "/images/case-studies/hotel-uniform-case.jpg"
      },
      {
        id: "airline-rebrand",
        title: "International Airline Rebrand",
        description: "A major airline required 10,000+ new uniforms for flight attendants, ground crew, and administrative staff following a complete brand redesign.",
        result: "Successfully delivered the entire order within a tight 3-month timeline while maintaining impeccable quality standards.",
        image: "/images/case-studies/airline-uniform-case.jpg"
      },
      {
        id: "hospital-network",
        title: "Hospital Network Standardization",
        description: "A network of 8 hospitals needed to standardize staff uniforms across all facilities while accommodating different department requirements.",
        result: "Implemented a comprehensive uniform program with color-coding by department, reducing annual uniform costs by 18%.",
        image: "/images/case-studies/hospital-uniform-case.jpg"
      }
    ],
    
    testimonials: [
      {
        id: "healthcare-director",
        quote: "UNEOM's bulk ordering capabilities transformed our uniform procurement process from a constant headache to a streamlined operation. Their attention to detail in managing our complex order across multiple facilities ensured every team member received the right items on schedule. The cost savings were significant, but the time and stress saved by our administrative team was even more valuable.",
        author: 'Dr. Ibrahim Al-Harbi',
        position: 'Operations Director',
        company: 'National Healthcare Group',
        image: '/images/testimonials/testimonial1.jpg'
      },
      {
        id: "education-manager",
        quote: "When managing uniforms for thousands of students across multiple campuses, accuracy and reliability are essential. UNEOM's bulk ordering service delivered both, plus significant cost savings. Their forecasting approach and phased delivery system ensured we were fully prepared for each academic year, and their quality consistency ensured every uniform perfectly represented our institution's standards.",
        author: 'Nadia Al-Faisal',
        position: 'Procurement Manager',
        company: 'Al-Faisal Educational Foundation',
        image: '/images/testimonials/testimonial2.jpg'
      }
    ],
    
    faqs: [
      {
        question: 'What minimum order quantities are required for bulk ordering?',
        answer: "Our bulk ordering service is designed for organizations requiring 100+ uniform items, though the specific minimum can vary based on the complexity of the items and customization requirements. We offer tiered pricing structures with increasing discounts typically at 100, 250, 500, 1,000, and 5,000+ units. For orders that don't meet our standard bulk thresholds, we still offer competitive pricing and can recommend optimization strategies to help you reach higher discount tiers."
      },
      {
        question: 'How do you handle size distribution for large orders?',
        answer: 'We offer several approaches to size distribution for bulk orders. For organizations with existing uniform programs, we can utilize historical data to create accurate size profiles. For new programs, we can provide size forecasting based on industry standards or conduct on-site measurement sessions. We also offer flexible sizing allocations that allow for adjustments after the initial order and can maintain a buffer stock of common sizes for quick replacements or new hires. All bulk orders include detailed size distribution reporting.'
      },
      {
        question: 'What is the typical lead time for bulk uniform orders?',
        answer: 'Standard lead times for bulk orders typically range from 4-8 weeks depending on order volume, customization requirements, and current production capacity. For clients with urgent needs, we offer expedited production options that can reduce lead times to 2-3 weeks for an additional fee. We also provide scheduled ordering programs that plan production around your predetermined needs, ensuring availability without rush charges. For recurring uniform requirements, we recommend our forecasting service that schedules production well in advance of needs.'
      },
      {
        question: 'How do you ensure quality consistency across large orders?',
        answer: 'Quality consistency is ensured through our multi-stage quality control process. For bulk orders, we implement batch control systems that track production lots, conduct regular sampling inspections throughout the manufacturing process, and perform comprehensive pre-shipment inspections. Our quality teams use standardized measurement specifications and color matching protocols to maintain consistency. For very large orders, we often produce a pre-production sample lot for approval before full production begins, and we maintain reference samples throughout production to ensure consistency.'
      },
      {
        question: 'Can you handle delivery to multiple locations for bulk orders?',
        answer: 'Yes, our logistics system is specifically designed to handle complex multi-location distributions. We offer several distribution options: centralized delivery to your main distribution center; direct shipment to each location with customized packing lists; staged deliveries based on priority or implementation schedule; and individual pick-and-pack services for named-employee distributions. Our system tracks each shipment component and provides detailed reporting on delivery status. We can also integrate with your internal distribution systems or provide RFID tracking for high-value or sensitive shipments.'
      }
    ],
    
    cta: {
      title: 'Ready to streamline your large-scale uniform procurement?',
      description: 'Our bulk ordering specialists can help you optimize your uniform program for efficiency and cost savings.',
      buttonText: 'Request a Bulk Order Consultation',
      buttonUrl: '/contact?service=bulk-ordering'
    },
    
    secondaryCta: {
      title: 'Learn about our measurement services',
      buttonText: 'Measurement Services',
      buttonUrl: '/services/measurement-services'
    }
  };
  
  return <ServicePageLayout locale={locale} serviceData={serviceData} />;
} 
