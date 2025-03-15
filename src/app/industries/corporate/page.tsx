'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function CorporatePage() {
  // Define locale for language support
  const locale = 'en';
  
  const corporateData = {
    locale: locale,
    title: "Professional Corporate Uniforms & Business Attire in Saudi Arabia",
    subtitle: "Tailored business attire for corporate environments that balance professionalism with Saudi workplace culture",
    heroImage: "/images/default-placeholder.jpg",
    
    // SEO metadata
    metaDescription: "UNEOM provides premium corporate uniforms and business attire for Saudi companies, combining professional design with cultural sensitivity and comfort for the Saudi workplace.",
    keywords: ['corporate uniforms Saudi Arabia', 'business attire', 'office uniforms', 'Saudi corporate wear', 'Islamic business attire', 'professional uniforms Riyadh'],
    canonicalUrl: 'https://uneom.com/industries/corporate',
    
    introduction: [
      "In Saudi Arabia's rapidly evolving business landscape, corporate attire plays a crucial role in establishing professional credibility and reinforcing brand identity. UNEOM delivers premium corporate uniform solutions that help organizations maintain a polished and consistent image while respecting Saudi cultural values.",
      
      "Our corporate collections include tailored suits, business shirts, blouses, formal dresses, and workplace accessories designed to project professionalism while ensuring comfort throughout the workday. Each piece is crafted from high-quality fabrics selected specifically for Saudi Arabia's climate and corporate environments.",
      
      "As a trusted partner to leading Saudi businesses, multinational corporations operating in the Kingdom, and government entities, we understand the importance of corporate attire that balances international business standards with local cultural considerations and workplace requirements."
    ],
    
    benefits: [
      {
        title: "Professional Brand Representation",
        description: "Cohesive corporate attire that reinforces your organization's visual identity and projects a unified professional image to clients and partners.",
        icon: "/icons/brand-representation.svg"
      },
      {
        title: "Saudi Business Culture Expertise",
        description: "Designs that respect Saudi workplace norms and cultural values while maintaining international business standards.",
        icon: "/icons/saudi-expertise.svg"
      },
      {
        title: "Climate-Appropriate Fabrics",
        description: "Premium materials selected for comfort in Saudi Arabia's climate and air-conditioned office environments.",
        icon: "/icons/climate-appropriate.svg"
      },
      {
        title: "Modest Professional Options",
        description: "Elegant business attire options that respect Islamic dress preferences while maintaining professional appearance.",
        icon: "/icons/modest-professional.svg"
      },
      {
        title: "Durability & Easy Maintenance",
        description: "High-performance fabrics and construction that withstand daily wear while requiring minimal maintenance.",
        icon: "/icons/durability.svg"
      }
    ],
    
    products: [
      {
        id: "executive-suits",
        name: "Executive Suit Collections",
        description: "Premium tailored suits for management and executive staff that project authority and professionalism in corporate settings.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/corporate/executive-suits"
      },
      {
        id: "business-shirts-blouses",
        name: "Business Shirts & Blouses",
        description: "Professional shirts and blouses in various styles, including modest options for female staff that respect Islamic dress preferences.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/corporate/business-shirts-blouses"
      },
      {
        id: "corporate-dresses",
        name: "Professional Corporate Dresses",
        description: "Elegant, modest dresses designed for female professionals in Saudi corporate environments.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/corporate/corporate-dresses"
      },
      {
        id: "front-office-attire",
        name: "Front Office & Reception Attire",
        description: "Distinctive uniforms for reception staff and client-facing personnel who represent your company's first impression.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/corporate/front-office-attire"
      },
      {
        id: "corporate-abayas",
        name: "Professional Corporate Abayas",
        description: "Elegant, business-appropriate abayas designed specifically for professional women in Saudi corporate environments.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/corporate/corporate-abayas"
      },
      {
        id: "corporate-accessories",
        name: "Corporate Accessories & Complements",
        description: "Professional accessories including scarves, ties, pins, and other elements that complete the corporate uniform look.",
        image: "/images/product-placeholder.jpg",
        href: "/shop/corporate/corporate-accessories"
      }
    ],
    
    // Corporate department roles with specialized products
    departments: [
      {
        name: "Executive & Management",
        description: "Distinguished attire for leadership personnel that conveys authority and professionalism while maintaining brand consistency with other corporate attire.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Executive Suit Collections", "Premium Business Shirts", "Management Accessories"]
      },
      {
        name: "Client-Facing Roles",
        description: "Professional uniforms for sales, customer service, and client relations staff that project competence and reinforce brand identity during client interactions.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Sales Team Attire", "Customer Service Uniforms", "Client Relations Sets"]
      },
      {
        name: "Administrative & Support",
        description: "Practical, professional attire for administrative and support staff that maintains corporate image while providing comfort for daily office tasks.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Administrative Staff Uniforms", "Office Support Attire", "Practical Business Wear"]
      },
      {
        name: "Technical & Specialized",
        description: "Specialized corporate attire for technical roles that balances professional appearance with practical functionality for specialized work environments.",
        image: "/images/default-placeholder.jpg",
        productTypes: ["Technical Staff Uniforms", "IT Department Attire", "Specialized Role Uniforms"]
      }
    ],
    
    fabricTechnologies: [
      {
        name: "CorpComfort Premium Fabrics",
        description: "Business-grade fabrics with exceptional comfort properties designed specifically for long days in office environments.",
        icon: "/icons/corpcomfort.svg"
      },
      {
        name: "EasyPress Technology",
        description: "Advanced wrinkle-resistant fabric treatment that maintains a crisp, professional appearance throughout the workday.",
        icon: "/icons/easypress.svg"
      },
      {
        name: "FlexMove Office Design",
        description: "Innovative tailoring with strategic stretch elements that allow comfortable movement while maintaining structured professional appearance.",
        icon: "/icons/flexmove.svg"
      },
      {
        name: "ClimateBalance System",
        description: "Adaptive fabric technology that helps maintain comfort in varying office temperatures and during transitions between outdoor and indoor environments.",
        icon: "/icons/climatebalance.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Corporate Identity Integration",
        description: "Precision incorporation of your company's visual identity elements, including exact color matching, logo placement, and distinctive design features.",
        icon: "/icons/corporate-identity.svg"
      },
      {
        name: "Department Differentiation",
        description: "Subtle design variations that distinguish between different corporate departments while maintaining overall brand cohesion.",
        icon: "/icons/department-differentiation.svg"
      },
      {
        name: "Hierarchy Indication",
        description: "Thoughtful design elements that subtly indicate organizational hierarchy while maintaining a cohesive corporate appearance.",
        icon: "/icons/hierarchy-indication.svg"
      },
      {
        name: "Cultural Adaptations",
        description: "Specialized modifications to standard corporate uniform designs that respect Saudi cultural preferences while maintaining professional standards.",
        icon: "/icons/cultural-adaptations.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM transformed our corporate image with uniforms that perfectly balance international business standards with Saudi cultural considerations. The attention to detail in incorporating our brand elements has created a distinctive professional identity that has strengthened both our market presence and internal cohesion.",
        author: "Ibrahim Al-Saud",
        position: "Chief Executive Officer",
        company: "Saudi Financial Group"
      },
      {
        id: "testimonial-2",
        quote: "The corporate attire UNEOM designed for our diverse workforce has received overwhelmingly positive feedback. Their understanding of the specific needs of different departments, from client-facing roles to technical teams, resulted in a uniform program that enhances professionalism while providing practical functionality for daily work activities.",
        author: "Nora Al-Qahtani",
        position: "Human Resources Director",
        company: "Riyadh Commercial Holdings"
      }
    ],
    
    // FAQ section for SEO enhancement
    faq: [
      {
        question: "How do UNEOM's corporate uniforms address the specific needs of Saudi businesses?",
        answer: "Our corporate uniforms are specifically designed for Saudi business environments, featuring modest options for female staff that conform to Islamic dress codes while maintaining professional appearance, incorporating design elements that respect Saudi business culture, using fabrics selected for Saudi climate conditions and air-conditioned offices, and ensuring designs that balance international business standards with local cultural considerations."
      },
      {
        question: "Can you create different uniform styles for various corporate departments while maintaining brand consistency?",
        answer: "Yes, we specialize in developing comprehensive corporate uniform programs that subtly distinguish between different departments and hierarchical levels while maintaining overall brand coherence through consistent color palettes, design elements, and branding applications. This approach helps reinforce organizational structure while presenting a unified corporate identity."
      },
      {
        question: "What makes your fabrics suitable for Saudi corporate environments?",
        answer: "Our corporate uniform fabrics feature several specialized technologies: ClimateBalance systems that adapt to varying conditions between outdoor heat and air-conditioned offices, EasyPress treatments that maintain a crisp professional appearance throughout long workdays, comfort-stretch components that allow natural movement during office activities, and premium materials that combine professional appearance with practical durability."
      },
      {
        question: "How do you handle uniform implementation for large corporations with diverse staff roles?",
        answer: "We offer comprehensive implementation programs for organizations of all sizes, including on-site measurement sessions, detailed sizing systems with Arabia-specific measurements, phased rollout planning to ensure business continuity, staff training on uniform care and presentation, and ongoing support for new hires and replacements to maintain consistent appearance across the entire organization."
      }
    ],
    
    // Related blog posts for increased internal linking and SEO value
    relatedContent: {
      title: "Corporate Uniform Resources",
      blogPosts: [
        {
          title: "Corporate Uniform Trends in Saudi Arabia: Balancing Tradition with Modern Business Standards",
          excerpt: "Explore how leading Saudi companies are creating distinctive corporate attire that reflects both international standards and local business culture.",
          url: "/blog/saudi-corporate-uniform-trends",
          image: "/images/default-placeholder.jpg"
        },
        {
          title: "The Impact of Corporate Uniforms on Employee Performance and Brand Perception",
          excerpt: "Research insights on how professional attire influences workplace productivity, client trust, and overall brand impression.",
          url: "/blog/uniforms-employee-performance-brand-perception",
          image: "/images/default-placeholder.jpg"
        },
        {
          title: "Implementing Effective Corporate Uniform Programs in Saudi Organizations",
          excerpt: "Best practices for developing and rolling out corporate attire programs that enhance professional image while respecting cultural considerations.",
          url: "/blog/corporate-uniform-program-implementation",
          image: "/images/default-placeholder.jpg"
        }
      ],
      resources: [
        {
          title: "Corporate Fabric Performance Guide",
          description: "Technical specifications for fabrics that meet professional business requirements",
          url: "/resources/fabric-guide/corporate",
          icon: "/icons/fabric-guide.svg"
        },
        {
          title: "Business Attire Size Guide",
          description: "Detailed sizing information for corporate uniform collections",
          url: "/resources/size-guide/corporate",
          icon: "/icons/size-guide.svg"
        },
        {
          title: "Corporate Uniform Policy Template",
          description: "Downloadable template for creating effective corporate attire policies",
          url: "/resources/policy-templates/corporate",
          icon: "/icons/policy-template.svg"
        }
      ]
    },
    
    // Statistical information for credibility and SEO enhancement
    statistics: [
      {
        value: "85+",
        label: "Saudi Corporations Supplied",
        icon: "/icons/corporations.svg"
      },
      {
        value: "30,000+",
        label: "Corporate Professionals Wearing UNEOM Attire",
        icon: "/icons/professionals.svg"
      },
      {
        value: "12+",
        label: "Industries Served Across Saudi Arabia",
        icon: "/icons/industries.svg"
      },
      {
        value: "96%",
        label: "Client Retention Rate in Corporate Sector",
        icon: "/icons/retention.svg"
      }
    ],
    
    // Case study for social proof and credibility
    caseStudy: {
      title: "Comprehensive Corporate Uniform Program for Leading Saudi Financial Institution",
      client: "Saudi Financial Group",
      challenge: "Creating a distinctive corporate uniform program for a major financial institution with 2,500+ employees across multiple departments, branches, and hierarchical levels.",
      solution: "Developed a comprehensive corporate attire system with subtle variations across departments and roles, featuring distinctive Saudi-inspired elements, practical adaptations for different work functions, and both international and modest options for female staff.",
      results: [
        "Client satisfaction scores increased by 18% following uniform implementation",
        "Employee satisfaction rating of 91% with new corporate attire",
        "Brand recognition improved by 23% in market research studies",
        "Successful implementation across 15 branches with over 2,500 staff members"
      ],
      image: "/images/default-placeholder.jpg",
      testimonial: {
        quote: "The corporate uniform program UNEOM created has become a cornerstone of our professional identity and has significantly contributed to our reputation as a leading financial institution in Saudi Arabia.",
        author: "Khalid Al-Otaibi",
        position: "Chief Marketing Officer",
        company: "Saudi Financial Group"
      }
    },
    
    // Call to action section
    cta: {
      title: "Elevate Your Corporate Image with Professional Uniform Solutions",
      description: "Contact our corporate uniform specialists to discuss your organization's specific requirements and discover how our comprehensive business attire solutions can enhance your brand identity, employee professionalism, and market presence.",
      buttonText: "Request Corporate Uniform Consultation",
      buttonUrl: "/contact?industry=corporate"
    }
  };
  
  return <IndustryPageLayout locale={locale} industryData={corporateData} />;
} 