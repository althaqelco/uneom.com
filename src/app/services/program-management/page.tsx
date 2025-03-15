'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

export default function ProgramManagementServicePage() {
  const locale = 'en';
  const serviceData = {
    title: 'Uniform Program Management',
    subtitle: 'Comprehensive solutions for enterprise-level uniform programs',
    heroImage: '/images/banner-placeholder.jpg',
    
    overview: [
      "UNEOM's Uniform Program Management service provides a comprehensive solution for organizations looking to streamline and optimize their uniform programs. From inventory management to employee onboarding, our expert team takes care of every aspect of your uniform program, allowing you to focus on your core business operations.",
      "Our approach integrates cutting-edge technology with personalized service to deliver a uniform program that enhances operational efficiency, strengthens brand identity, and improves employee satisfaction. Whether you're a healthcare network with thousands of medical scrubs to manage or a corporate enterprise establishing new professional standards, our program management solution scales to meet your specific needs."
    ],
    
    steps: [
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Assessment & Planning',
        description: 'We begin with a thorough assessment of your current uniform program, identifying pain points, inefficiencies, and opportunities for improvement. Our team then develops a customized program management plan aligned with your organizational goals and budget.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Design & Development',
        description: 'Our design team works closely with you to develop uniform solutions that meet your functional requirements while reinforcing your brand identity. We consider factors such as industry regulations, work environment, and employee preferences.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Implementation & Rollout',
        description: 'We handle all aspects of program implementation, from procurement and inventory setup to employee fitting sessions and distribution. Our phased rollout approach ensures a smooth transition with minimal disruption to your operations.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Ongoing Management',
        description: 'Once your program is live, we provide continuous management services including inventory tracking, employee allocation, replacement handling, and regular program reviews to identify opportunities for optimization.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Operational Efficiency',
        description: 'Reduce administrative burden and streamline processes with our centralized management system, saving valuable time and resources.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Cost Control',
        description: 'Optimize spending through bulk purchasing, inventory management, and controlled distribution, typically reducing uniform-related costs by 15-25%.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Brand Consistency',
        description: 'Ensure uniform consistency across all locations and departments, strengthening your brand identity and professional image.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Employee Satisfaction',
        description: 'Improve employee experience with properly fitted, high-quality uniforms and simplified replacement processes.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Compliance Management',
        description: 'Stay up-to-date with industry regulations and standards through our compliance monitoring and updating services.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'Data-Driven Insights',
        description: 'Gain valuable insights into uniform usage patterns, allowing for continuous program optimization and forecasting.'
      }
    ],
    
    caseStudies: [
      {
        id: "healthcare-transformation",
        title: 'Healthcare Network Transformation',
        description: 'Managing uniforms for 3,000+ healthcare professionals across 12 facilities with inconsistent processes, high costs, and staff dissatisfaction.',
        result: '22% reduction in uniform-related costs and employee satisfaction rating increased from 62% to 89%.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: "hospitality-overhaul",
        title: 'Hospitality Chain Program Overhaul',
        description: 'Coordinating uniforms for 1,500+ staff across 5 luxury properties with inconsistent brand presentation and high replacement rates.',
        result: '30% reduction in annual replacement costs and brand consistency score improved from 68% to 95%.',
        image: '/images/default-placeholder.jpg'
      }
    ],
    
    testimonials: [
      {
        id: "medical-director",
        quote: "UNEOM's program management has transformed how we handle our medical uniforms. The centralized system has dramatically reduced administrative workload while ensuring our staff always have the appropriate attire. The cost savings have been substantial, but the real value is in the time saved and professional consistency achieved.",
        author: 'Dr. Ahmed Al-Sayed',
        position: 'Operations Director',
        company: 'Riyadh Medical Network',
        image: '/images/avatar-placeholder.jpg'
      },
      {
        id: "hotel-hr-director",
        quote: "Working with UNEOM to manage our hotel staff uniforms has been remarkable. Their attention to detail and proactive approach has eliminated the uniform problems we previously faced. Our staff look consistently professional, and the simplified replacement process keeps everything running smoothly even during our busiest seasons.",
        author: 'Layla Mahmoud',
        position: 'HR Director',
        company: 'Najd Luxury Hotels',
        image: '/images/avatar-placeholder.jpg'
      }
    ],
    
    faqs: [
      {
        question: "How does UNEOM's uniform program management differ from simply purchasing uniforms from a supplier?",
        answer: 'Our program management offers an end-to-end solution that goes far beyond just supplying garments. We handle everything from initial assessment and design to ongoing inventory management, distribution, employee onboarding, replacement handling, and program optimization. This comprehensive approach eliminates administrative burden, ensures consistency, and provides significant cost savings compared to self-managed programs.'
      },
      {
        question: 'Can UNEOM manage uniform programs for organizations with multiple locations?',
        answer: 'Absolutely. Our program management solutions are specifically designed to handle the complexities of multi-location organizations. We implement centralized management systems with location-specific inventory controls, ensuring consistent uniform standards while accommodating local needs. Our experience includes managing programs for organizations with facilities throughout Saudi Arabia and the broader GCC region.'
      },
      {
        question: 'How does the implementation process work?',
        answer: 'Implementation follows a structured approach beginning with program design and planning, followed by a phased rollout. We typically start with employee measurement sessions, initial inventory establishment, and staff training. The transition to the new program is carefully managed to minimize disruption, with continuous support throughout the process. For larger organizations, we often implement a pilot program at one location before expanding to others.'
      },
      {
        question: 'What technology does UNEOM use to manage uniform programs?',
        answer: 'We utilize a proprietary uniform management platform that includes inventory tracking, employee allocation, automated reordering, reporting, and analytics functions. This system integrates with mobile applications for easy employee access to request replacements or additional items. For enterprise clients, we can also integrate with existing HR systems to streamline employee onboarding and departures.'
      },
      {
        question: 'How are replacements and new employee uniforms handled?',
        answer: "Replacement processes are streamlined through our management platform. Employees or managers can submit requests through the system, which are then reviewed and fulfilled according to your organization's policies. For new employees, we integrate with your onboarding process to ensure uniform provision is handled efficiently before their start date. Many clients maintain a core inventory of common sizes to accommodate immediate needs."
      }
    ],
    
    cta: {
      title: 'Ready to transform your uniform program?',
      description: 'Our program management specialists can help you implement a comprehensive uniform solution tailored to your organization.',
      buttonText: 'Request a Consultation',
      buttonUrl: '/contact?service=program-management'
    },
    
    secondaryCta: {
      title: 'Learn about our measurement services',
      buttonText: 'Measurement Services',
      buttonUrl: '/services/measurement-services'
    }
  };
  
  return <ServicePageLayout locale={locale} serviceData={serviceData} />;
} 
