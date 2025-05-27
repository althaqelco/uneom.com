'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function UniformPoliciesPage() {
  const locale = 'en';
  const serviceData = {
    title: "UNEOM - Professional Uniforms",
    subtitle: 'Comprehensive guidelines for effective uniform program governance',
    heroImage: '/images/product-placeholder.jpg',
    
    overview: [
      "UNEOM's Corporate Uniform Policies service provides expert guidance in developing comprehensive, effective governance frameworks for your uniform program. We create customized policies that align with your organizational culture, industry requirements, and operational needs while ensuring compliance with relevant regulations.",
      "Well-crafted uniform policies do more than standardize appearance—they establish clear expectations, streamline administration, enhance your brand identity, and create a foundation for consistently professional presentation. Our experienced consultants work with your stakeholders to develop practical, enforceable policies that are readily embraced by your team."
    ],
    
    steps: [
      {
        icon: '/images/icons/consultation-icon.svg',
        title: 'Needs Assessment',
        description: 'We begin with a thorough assessment of your organizational structure, culture, industry requirements, and existing uniform-related procedures to identify policy needs and objectives.'
      },
      {
        icon: '/images/icons/customization-icon.svg',
        title: 'Policy Development',
        description: 'Our specialists draft comprehensive uniform policies addressing all aspects of your program, from design standards and wearing guidelines to procurement procedures and compliance measures.'
      },
      {
        icon: '/images/icons/comprehensive-support.svg',
        title: 'Stakeholder Review',
        description: 'We facilitate collaborative review sessions with key stakeholders to gather feedback, address concerns, and refine policy elements to ensure organizational alignment and practical implementation.'
      },
      {
        icon: '/images/icons/timely-delivery.svg',
        title: 'Implementation Planning',
        description: 'We develop detailed implementation strategies, communication plans, training materials, and administrative procedures to ensure successful policy adoption throughout your organization.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/compliance-shield.svg',
        title: 'Clear Governance',
        description: 'Establish transparent, well-defined guidelines that eliminate confusion and inconsistency in uniform program management.'
      },
      {
        icon: '/images/images/icons/saudi-expertise.svg',
        title: 'Regulatory Compliance',
        description: 'Ensure your uniform program adheres to industry regulations, safety standards, and relevant labor laws.'
      },
      {
        icon: '/images/images/icons/brand-aligned.svg',
        title: 'Brand Consistency',
        description: 'Maintain uniform standards that accurately and consistently represent your brand identity across all locations and departments.'
      },
      {
        icon: '/images/icons/premium-quality.svg',
        title: 'Administrative Efficiency',
        description: 'Streamline decision-making processes and reduce administrative burden with clear protocols for all uniform-related matters.'
      },
      {
        icon: '/images/icons/culturally-appropriate.svg',
        title: 'Conflict Resolution',
        description: 'Provide clear frameworks for addressing uniform-related issues, accommodations, and special circumstances.'
      },
      {
        icon: '/images/icons/comprehensive-support.svg',
        title: 'Operational Integration',
        description: 'Align uniform policies with other organizational systems including onboarding, HR processes, and corporate governance.'
      }
    ],
    
    caseStudies: [
      {
        id: "banking-policy",
        title: 'Banking Network Policy Standardization',
        description: 'Unifying inconsistent uniform practices across 75+ branches with varying interpretations of dress codes, leading to brand inconsistency and enforcement challenges.',
        result: 'Achieved 94% policy compliance within 3 months and reduced uniform-related HR incidents by 78%.',
        image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg'
      },
      {
        id: "industrial-safety",
        title: 'Industrial Safety Uniform Policy',
        description: 'Balancing safety compliance, cultural considerations, and practical functionality in a multi-facility operation with diverse workforce demographics and varying hazard levels.',
        result: 'Achieved full regulatory compliance across all facilities and reduced uniform-related safety incidents by 64%.',
        image: '/images/products/industrial-coverall.jpg'
      }
    ],
    
    testimonials: [
      {
        id: "banking-director",
        quote: "UNEOM transformed our fragmented approach to uniform management into a coherent policy framework that's both comprehensive and practical. Their team skillfully navigated our complex organizational structure and varying stakeholder interests to develop guidelines that gained widespread acceptance. The implementation support was exceptional, with training and communication materials that ensured smooth adoption across all our branches.",
        author: 'Nawaf Al-Harbi',
        position: 'Operations Director',
        company: 'National Commercial Bank Group',
        image: '/images/avatar-placeholder.jpg'
      },
      {
        id: "safety-manager",
        quote: "Creating uniform policies that address both safety regulations and cultural considerations was a challenge we struggled with for years. UNEOM's expertise in both areas was evident in the thoughtful, detailed policy framework they developed for us. Their approach was methodical and inclusive, resulting in policies that are clear, enforceable, and embraced by our diverse workforce. The detailed implementation roadmap they provided made the rollout remarkably smooth.",
        author: 'Eng. Saad Al-Qahtani',
        position: 'HSE Compliance Manager',
        company: 'Saudi Petrochemical Industries',
        image: '/images/avatar-placeholder.jpg'
      }
    ],
    
    faqs: [
      {
        question: 'What elements are typically included in corporate uniform policies?',
        answer: "Comprehensive uniform policies typically address several key areas: appearance standards (detailing specific uniform components, wearing instructions, and presentation requirements); compliance guidelines (outlining enforcement procedures and consequences for non-compliance); procurement protocols (establishing ordering processes, budget allocation, and replacement schedules); maintenance standards (providing care instructions and quality expectations); accommodation procedures (addressing religious, medical, or other exceptional circumstances); and administrative responsibilities (defining roles for managing the uniform program). Each policy we develop is customized to the organization's specific needs, industry requirements, and operational structure, but these core elements provide the foundation for effective uniform governance."
      },
      {
        question: 'How do you ensure uniform policies comply with labor regulations?',
        answer: 'Our policy development process includes a comprehensive regulatory compliance review specific to your industry and regions of operation. We have specialists familiar with Saudi labor laws, industry-specific regulations (including healthcare, hospitality, and industrial safety requirements), and religious accommodation standards. We conduct detailed analyses of relevant legal frameworks, incorporating appropriate provisions for gender considerations, religious practices, and disability accommodations. All policies undergo review by our compliance team, and for specialized industries, we can arrange additional review by sector-specific legal experts. We also establish monitoring mechanisms to track regulatory changes that might affect your uniform policies and recommend updates accordingly.'
      },
      {
        question: 'What is your process for policy implementation and employee acceptance?',
        answer: 'Successful implementation begins during policy development, where we incorporate stakeholder input to ensure practical, acceptable guidelines. Our implementation approach includes several key components: a clearly defined timeline with milestone objectives; targeted communication strategies for different organizational levels; comprehensive training for managers and supervisors on policy enforcement; accessible resources including visual guides, FAQs, and decision frameworks; clearly defined exemption and accommodation procedures; and a structured feedback mechanism to identify and address implementation challenges. We emphasize transparent communication about the purpose and benefits of the uniform policy, focusing on positive aspects rather than punitive enforcement. This approach has proven highly effective in achieving rapid compliance and employee acceptance.'
      },
      {
        question: 'How do you address cultural and religious considerations in uniform policies?',
        answer: 'Cultural and religious sensitivity is central to our policy development process, particularly in the Saudi context. We begin by identifying specific religious and cultural factors relevant to your workforce through stakeholder consultation and demographic analysis. Our policies incorporate flexible frameworks for religious accommodations, including hijab options for women, beard accommodations for men, modified uniforms for prayer times, and appropriate coverage requirements. We develop specific guidelines for Ramadan and other religious periods when uniform adjustments may be needed. Each accommodation is designed to maintain your brand identity and professional standards while respecting religious practices. Our approach ensures compliance with religious freedom provisions in labor regulations while providing clear, consistent guidelines for managers and employees.'
      },
      {
        question: 'Can uniform policies be customized for different departments or locations?',
        answer: 'Yes, we specialize in developing tiered policy frameworks that maintain overall consistency while accommodating legitimate variations between departments, roles, or locations. Our modular approach creates a core policy foundation that applies organization-wide, with specific addendums or modifications for different functional areas. For multi-location organizations, we can develop location-specific guidelines that address regional climate differences, local customer expectations, or facility-specific requirements. For organizations with diverse functions, we create role-based policy variations that reflect different levels of customer contact, safety requirements, or operational needs. This approach ensures your uniform program maintains a cohesive brand identity while providing appropriate flexibility where needed.'
      }
    ],
    
    cta: {
      title: 'Ready to establish effective uniform governance?',
      description: 'Our policy specialists can help you develop comprehensive guidelines for your uniform program.',
      buttonText: 'Request a Policy Consultation',
      buttonUrl: '/contact?service=uniform-policies'
    },
    
    secondaryCta: {
      title: 'Learn about our measurement services',
      buttonText: 'Measurement Services',
      buttonUrl: '/services/measurement-services'
    }
  };
  
  return <ServicePageLayout locale={locale} serviceData={serviceData} skipMainLayout={true} />;
} 
