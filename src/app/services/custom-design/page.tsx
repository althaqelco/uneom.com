'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function CustomDesignServicePage() {
  const locale = 'en';
  const serviceData = {
    title: "UNEOM - Professional Uniforms",
    subtitle: 'Distinctive uniform solutions that elevate your brand identity',
    heroImage: '/images/banner-placeholder.jpg',
    
    overview: [
      "UNEOM's Custom Design & Branding service delivers unique uniform solutions that reflect your organization's distinct identity and values. Our expert design team works closely with you to create uniforms that not only meet functional requirements but also serve as powerful brand ambassadors for your organization.",
      "From subtle brand elements to completely bespoke designs, we combine artistic creativity with practical expertise to develop uniforms that your employees will be proud to wear. Whether you're looking to refresh your current uniform program or develop entirely new designs, our comprehensive approach ensures a solution that aligns perfectly with your brand vision and operational needs."
    ],
    
    steps: [
      {
        icon: '/images/banner-placeholder.jpg',
        title: 'Brand Discovery',
        description: 'We begin with a comprehensive discovery phase to understand your brand values, identity elements, and design preferences. Our team analyzes your existing visual identity, target audience, and industry positioning to establish clear design objectives.'
      },
      {
        icon: '/images/icons/custom-branding.svg',
        title: 'Concept Development',
        description: 'Our design team creates initial concepts that blend aesthetic appeal with functional requirements. We present multiple design directions with mood boards, color palettes, and preliminary sketches to visualize different approaches.'
      },
      {
        icon: '/images/icons/customization-icon.svg',
        title: 'Refinement & Prototyping',
        description: 'Based on your feedback, we refine selected concepts and develop detailed designs. Prototypes are created for key uniform pieces, allowing for fit testing, material evaluation, and further design adjustments.'
      },
      {
        icon: '/images/product-placeholder.jpg',
        title: 'Production & Implementation',
        description: 'Once designs are approved, we manage the production process with rigorous quality control standards. Our team coordinates sizing, manufacturing, and delivery to ensure a smooth rollout of your custom uniform program.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/images/icons/brand-aligned.svg',
        title: 'Strengthened Brand Identity',
        description: 'Custom uniforms reinforce your visual identity and create immediate brand recognition both internally and with customers or clients.'
      },
      {
        icon: '/images/icons/premium-quality.svg',
        title: 'Competitive Differentiation',
        description: 'Stand out from competitors with distinctive uniforms that communicate your unique positioning and values in the marketplace.'
      },
      {
        icon: '/images/icons/culturally-appropriate.svg',
        title: 'Enhanced Company Culture',
        description: 'Well-designed uniforms foster a sense of belonging and pride among employees, strengthening your organizational culture.'
      },
      {
        icon: '/images/icons/comprehensive-support.svg',
        title: 'Visual Consistency',
        description: 'Ensure consistent brand presentation across all locations, departments, and customer touchpoints.'
      },
      {
        icon: '/images/icons/consultation-icon.svg',
        title: 'Optimized Functionality',
        description: 'Custom designs allow for industry-specific features and adaptations that improve comfort and performance for your specific work environment.'
      },
      {
        icon: '/images/icons/timely-delivery.svg',
        title: 'Elevated Customer Perception',
        description: 'Professional, branded uniforms elevate customer perception of your service quality and organizational professionalism.'
      }
    ],
    
    caseStudies: [
      {
        id: "luxury-hotel",
        title: 'Luxury Hotel Brand Transformation',
        description: 'Creating a distinctive uniform collection for a new luxury hotel brand launching in Saudi Arabia that needed to blend contemporary elegance with subtle cultural elements.',
        result: '92% of guests surveyed mentioned the distinctive staff appearance as a memorable element of their stay, and the designs were featured in Hospitality Design magazine.',
        image: '/images/products/hotel-uniform.jpg'
      },
      {
        id: "banking-refresh",
        title: 'Corporate Banking Identity Refresh',
        description: 'Modernizing an outdated corporate uniform program for a leading financial institution with 1,200+ customer-facing employees while maintaining professionalism and brand heritage.',
        result: '86% increase in employee satisfaction with uniform program and customer perception metrics for "professionalism" increased by 18%.',
        image: '/images/products/corporate-suit-executive.jpg'
      }
    ],
    
    testimonials: [
      {
        id: "hotel-brand-director",
        quote: "Working with UNEOM's design team transformed our staff appearance beyond our expectations. They captured the essence of our brand while creating highly functional uniforms that our team loves wearing. The custom elements they developed have become signature details that both our staff and guests immediately recognize as uniquely ours.",
        author: 'Nora Al-Faisal',
        position: 'Brand Director',
        company: 'Al Mamlaka Hotels & Resorts',
        image: '/images/avatar-placeholder.jpg'
      },
      {
        id: "financial-cmo",
        quote: "The UNEOM design process was thorough and collaborative from start to finish. They understood our need to respect our heritage while modernizing our appearance. The custom uniform program they developed strikes the perfect balance between innovation and tradition, and has significantly contributed to our brand rejuvenation efforts.",
        author: 'Fahad Al-Otaibi',
        position: 'Chief Marketing Officer',
        company: 'Riyadh Financial Group',
        image: '/images/avatar-placeholder.jpg'
      }
    ],
    
    faqs: [
      {
        question: 'How does the custom design process work and how long does it typically take?',
        answer: 'Our custom design process follows a structured methodology from initial discovery through concept development, refinement, and production. A typical timeline for a comprehensive custom program is 12-16 weeks, though this can vary based on project complexity, number of uniform items, and whether custom fabric development is required. For clients with accelerated needs, we offer expedited design services that can deliver custom solutions in as little as 8 weeks.'
      },
      {
        question: 'Can you incorporate our existing brand elements into custom uniform designs?',
        answer: 'Absolutely. Our design team specializes in thoughtfully integrating your existing brand elements—from color palettes and logos to more subtle brand characteristics—into uniform designs. We take a strategic approach to brand integration, ensuring elements are incorporated in ways that are both visually appealing and practical for everyday wear. The level of brand visibility can be adjusted based on your preferences, from subtle brand cues to more prominent identity statements.'
      },
      {
        question: 'Do you create completely custom garments or modify existing uniform styles?',
        answer: 'We offer both approaches depending on your needs and budget. For many clients, we create completely custom-designed garments built from the ground up to your specifications. For others, we modify our extensive collection of base designs with custom colors, fabrics, and brand elements. Many successful programs utilize a hybrid approach, with key customer-facing positions receiving fully custom pieces while support roles leverage modified standard designs for cost efficiency.'
      },
      {
        question: 'What types of customization options are available for uniforms?',
        answer: 'Our customization options are extensive and include: custom fabric development with proprietary colors, patterns or performance features; bespoke garment designs with unique silhouettes and styling details; custom embroidery, printing, and appliqué techniques; specialized buttons, trims, and hardware with brand elements; custom labels and internal branding; specialized fit adjustments for diverse body types; and modular design systems that allow for seasonal variations or employee personalization within brand guidelines.'
      },
      {
        question: 'How do you ensure custom designs are both attractive and functional for daily use?',
        answer: 'Balancing aesthetics with functionality is central to our design philosophy. We achieve this through a collaborative process that includes input from both management and the employees who will wear the uniforms. All designs undergo wear testing in actual work environments before final approval. Our technical design team has extensive experience in creating garments that accommodate movement, climate considerations, and job-specific requirements while maintaining a polished appearance throughout the workday.'
      }
    ],
    
    cta: {
      title: 'Ready to transform your brand through custom uniforms?',
      description: 'Our design team can help you create distinctive uniforms that elevate your brand identity.',
      buttonText: 'Request a Design Consultation',
      buttonUrl: '/contact?service=custom-design'
    },
    
    secondaryCta: {
      title: 'Learn about our bulk ordering services',
      buttonText: 'Bulk Ordering Services',
      buttonUrl: '/services/bulk-ordering'
    }
  };
  
  return <ServicePageLayout locale={locale} serviceData={serviceData} skipMainLayout={true} />;
} 
