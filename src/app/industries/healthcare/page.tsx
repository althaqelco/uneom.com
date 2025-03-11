'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function HealthcarePage() {
  // Define locale for language support
  const locale = 'en';
  
  const healthcareData = {
    locale: locale,
    title: 'Professional Medical Scrubs & Healthcare Uniforms in Saudi Arabia',
    subtitle: 'High-quality, compliant medical attire for healthcare professionals across the Kingdom',
    heroImage: '/images/industries/healthcare.jpg',
    
    // SEO metadata
    metaDescription: 'UNEOM provides premium medical scrubs and healthcare uniforms in Saudi Arabia, designed for comfort, compliance, and Islamic dress code requirements.',
    keywords: ['medical scrubs Saudi Arabia', 'healthcare uniforms', 'hospital uniform supplier', 'Islamic medical attire', 'antimicrobial scrubs', 'Saudi healthcare compliance'],
    canonicalUrl: 'https://uneom.com/industries/healthcare',
    
    introduction: [
      "In Saudi Arabia's rapidly evolving healthcare sector, professional medical uniforms play a crucial role in establishing clinical excellence, maintaining compliance, and enhancing patient confidence. UNEOM's comprehensive healthcare uniform solutions are specifically designed to meet the unique needs of Saudi medical facilities while addressing the Kingdom's specific cultural and regulatory requirements.",
      
      "From hospitals and clinics to specialized medical centers, we provide premium-quality scrubs, lab coats, and departmental uniforms that combine functionality, comfort, and professional presentation. Our healthcare collections incorporate advanced fabric technologies that withstand the rigorous demands of medical environments while offering options that respect Islamic dress codes and accommodate Saudi Arabia's climate considerations.",
      
      "As a leading supplier to major healthcare institutions across the Kingdom, including government hospitals, private healthcare networks, and specialized medical centers, we understand the critical requirements of the Saudi healthcare uniform market better than any other provider."
    ],
    
    benefits: [
      {
        title: "Saudi Healthcare Compliance",
        description: "All our medical uniforms meet Saudi Commission for Health Specialties (SCHS) requirements and align with Ministry of Health standards for healthcare attire.",
        icon: "/icons/compliance.svg"
      },
      {
        title: "Islamic Dress Code Options",
        description: "We offer specialized designs that accommodate hijab and modest dress requirements while maintaining professional medical standards and functionality.",
        icon: "/icons/islamic.svg"
      },
      {
        title: "Climate-Appropriate Fabrics",
        description: "Our fabrics are selected specifically for Saudi Arabia's climate, with breathable, moisture-wicking properties that ensure comfort in air-conditioned facilities and during longer shifts.",
        icon: "/icons/climate.svg"
      },
      {
        title: "Advanced Antimicrobial Protection",
        description: "Premium healthcare uniforms featuring built-in antimicrobial technology that reduces bacterial colonization and maintains freshness throughout demanding shifts.",
        icon: "/icons/antimicrobial.svg"
      },
      {
        title: "Custom Branding Solutions",
        description: "Enhance your healthcare facility's identity with custom embroidery, color-coding by department, and specialized design elements that reinforce your brand.",
        icon: "/icons/branding.svg"
      }
    ],
    
    products: [
      {
        id: "premium-scrubs-set",
        name: "Premium Medical Scrubs Set",
        description: "Professional-grade scrubs with antimicrobial properties, available in configurations that meet both Western and Islamic dress requirements.",
        image: "/images/products/scrubs-set.jpg",
        href: "/shop/medical-scrubs/premium-scrubs-set"
      },
      {
        id: "antimicrobial-lab-coat",
        name: "Antimicrobial Laboratory Coat",
        description: "High-performance lab coats featuring BioCare Antimicrobial technology, fluid-resistant properties, and customization options.",
        image: "/images/products/lab-coat.jpg",
        href: "/shop/medical-scrubs/antimicrobial-lab-coat"
      },
      {
        id: "nursing-uniform-set",
        name: "Nursing Uniform Set",
        description: "Complete nursing attire solutions designed for all-day comfort, professional appearance, and Saudi healthcare facility requirements.",
        image: "/images/products/nursing-uniform.jpg",
        href: "/shop/medical-scrubs/nursing-uniform-set"
      },
      {
        id: "surgical-scrubs",
        name: "Specialized Surgical Scrubs",
        description: "Advanced surgical attire with enhanced protection, sterility features, and specialized designs for operating theater environments.",
        image: "/images/products/surgical-scrubs.jpg",
        href: "/shop/medical-scrubs/surgical-scrubs"
      },
      {
        id: "modest-medical-uniform",
        name: "Modest Medical Uniforms",
        description: "Specialized healthcare uniforms designed specifically for female healthcare professionals preferring modest attire options.",
        image: "/images/products/modest-uniform.jpg",
        href: "/shop/medical-scrubs/modest-medical-uniform"
      },
      {
        id: "department-admin-uniform",
        name: "Department & Administrative Uniforms",
        description: "Professional attire solutions for administrative, reception, and non-clinical staff within healthcare facilities.",
        image: "/images/products/admin-uniform.jpg",
        href: "/shop/medical-scrubs/department-admin-uniform"
      }
    ],
    
    // Featured departments with specialized products
    departments: [
      {
        name: "Emergency Department",
        description: "High-performance scrubs and attire designed for the demanding environment of emergency medicine, featuring reinforced construction, enhanced mobility, and quick-identification color coding.",
        image: "/images/industries/healthcare-emergency.jpg",
        productTypes: ["Premium Scrub Sets", "Quick-Release Lab Coats", "Trauma Team Vests"]
      },
      {
        name: "Nursing & Patient Care",
        description: "Comfortable, practical uniforms for nursing staff that combine professional appearance with all-day comfort and functionality, including Saudi-specific modest options for female nursing staff.",
        image: "/images/industries/healthcare-nursing.jpg",
        productTypes: ["Modern Nursing Scrubs", "Modest Nursing Tunics", "Climate-Adapted Scrub Sets"]
      },
      {
        name: "Surgical Teams",
        description: "Specialized surgical attire meeting the highest standards for safety and sterility, with options for different surgical environments and team identification systems.",
        image: "/images/industries/healthcare-surgical.jpg",
        productTypes: ["Advanced Surgical Scrubs", "Surgeon-Specific Attire", "Surgical Headwear Options"]
      },
      {
        name: "Laboratory & Diagnostics",
        description: "Professional lab coats and protective attire for laboratory personnel, featuring enhanced protection, comfort for extended wear, and customization options.",
        image: "/images/industries/healthcare-laboratory.jpg",
        productTypes: ["Premium Lab Coats", "Diagnostic Department Uniforms", "Protective Layering Systems"]
      }
    ],
    
    fabricTechnologies: [
      {
        name: "BioCare Antimicrobial",
        description: "Fabric treatment that inhibits bacterial growth, reduces odor, and maintains freshness throughout long shifts in demanding healthcare environments.",
        icon: "/icons/biocare.svg"
      },
      {
        name: "ComfortFlex 4-Way Stretch",
        description: "Advanced 4-way stretch technology providing exceptional freedom of movement for healthcare professionals who need mobility and comfort during active shifts.",
        icon: "/icons/comfortflex.svg"
      },
      {
        name: "DuraSeal Fluid Protection",
        description: "Specialized fluid-repellent finish that protects against spills and splashes while maintaining breathability and comfort.",
        icon: "/icons/duraseal.svg"
      },
      {
        name: "CoolCore Temperature Regulation",
        description: "Innovative fabric technology that helps regulate body temperature in varying hospital environments, ideal for Saudi Arabia's climate considerations.",
        icon: "/icons/coolcore.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Department Color Coding",
        description: "Implement systematic color coding across departments to enhance identification and organizational clarity.",
        icon: "/icons/department-colors.svg"
      },
      {
        name: "Institutional Branding",
        description: "Incorporate your healthcare facility's logo, name, and brand colors through precision embroidery and color matching.",
        icon: "/icons/institutional-branding.svg"
      },
      {
        name: "Role Identification",
        description: "Clear designation of staff roles through specialized uniform elements, helping patients and colleagues quickly identify personnel.",
        icon: "/icons/role-identification.svg"
      },
      {
        name: "Modest Design Modifications",
        description: "Specialized adaptations to standard medical uniform designs to accommodate modest dress preferences while maintaining functionality.",
        icon: "/icons/modest-modifications.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM's healthcare uniforms have significantly improved both staff satisfaction and our facility's professional image. Their attention to Saudi regulatory requirements and understanding of our unique needs made the transition to new uniforms remarkably smooth. The antimicrobial fabrics have proven their value, and the custom departmental color system has enhanced operational efficiency.",
        author: "Dr. Alya Al-Harbi",
        position: "Chief Medical Officer",
        company: "Kingdom Medical Center"
      },
      {
        id: "testimonial-2",
        quote: "The modest design options UNEOM provided for our female staff have been particularly well-received, offering the perfect balance of professional functionality and cultural appropriateness. Their fabric technology stands up to our rigorous infection control laundering protocols, and the uniforms maintain their appearance significantly better than our previous supplier's products.",
        author: "Fahad Al-Qasim",
        position: "Procurement Director",
        company: "Saudi German Hospital Group"
      }
    ],
    
    // FAQ section for SEO enhancement
    faq: [
      {
        question: "What makes UNEOM's medical uniforms suitable for Saudi Arabian healthcare facilities?",
        answer: "Our medical uniforms are specifically designed for Saudi healthcare environments, with features including compliance with Saudi Commission for Health Specialties requirements, modest options that respect Islamic dress codes, climate-appropriate fabrics for Saudi Arabia's conditions, and customization options for facility branding and departmental differentiation."
      },
      {
        question: "How do your antimicrobial fabrics benefit healthcare professionals?",
        answer: "Our BioCare Antimicrobial technology provides multiple benefits: it inhibits the growth of bacteria on the fabric, reduces odor development during long shifts, maintains freshness in demanding healthcare environments, and adds an additional layer of hygiene protection for both staff and patients."
      },
      {
        question: "Can you provide uniforms for our entire healthcare facility with department-specific customizations?",
        answer: "Yes, we specialize in comprehensive uniform programs for healthcare facilities of all sizes. We can implement consistent base designs with department-specific color coding, role identifiers, and customization elements, ensuring a cohesive institutional appearance while making it easy to distinguish between departments and staff roles."
      },
      {
        question: "What options do you offer for female healthcare professionals who prefer modest attire?",
        answer: "We offer a wide range of modest medical uniform options designed specifically for the Saudi Arabian market, including longer tunic-style tops, looser-fitting scrub pants, hijab-friendly designs, and full coverage options that maintain professional standards and functionality while respecting personal and cultural preferences."
      }
    ],
    
    // Related blog posts for increased internal linking and SEO value
    relatedContent: {
      title: "Healthcare Uniform Resources",
      blogPosts: [
        {
          title: "Best Practices for Healthcare Uniform Programs in Saudi Arabia",
          excerpt: "Learn how leading Saudi healthcare facilities are implementing effective uniform programs that enhance professional image while meeting regulatory requirements.",
          url: "/blog/healthcare-uniform-best-practices-saudi-arabia",
          image: "/images/blog/healthcare-best-practices.jpg"
        },
        {
          title: "Antimicrobial Fabrics: The Science Behind Healthcare Uniform Technology",
          excerpt: "Explore the advanced antimicrobial technologies being incorporated into modern medical uniforms and their impact on healthcare environments.",
          url: "/blog/antimicrobial-fabric-technology-healthcare-uniforms",
          image: "/images/blog/antimicrobial-technology.jpg"
        },
        {
          title: "Implementing Department Color Coding in Saudi Healthcare Facilities",
          excerpt: "A comprehensive guide to creating effective color-coding systems that improve patient experience and operational efficiency.",
          url: "/blog/department-color-coding-saudi-healthcare",
          image: "/images/blog/color-coding-guide.jpg"
        }
      ],
      resources: [
        {
          title: "Healthcare Fabric Guide",
          description: "Comprehensive information on fabric options for medical environments",
          url: "/resources/fabric-guide/healthcare",
          icon: "/icons/fabric-guide.svg"
        },
        {
          title: "Medical Uniform Size Guide",
          description: "Detailed sizing information for all healthcare uniform products",
          url: "/resources/size-guide/medical",
          icon: "/icons/size-guide.svg"
        },
        {
          title: "Hospital Uniform Policy Template",
          description: "Downloadable template for creating compliant healthcare uniform policies",
          url: "/resources/policy-templates/hospital",
          icon: "/icons/policy-template.svg"
        }
      ]
    },
    
    // Statistical information for credibility and SEO enhancement
    statistics: [
      {
        value: "65+",
        label: "Saudi Healthcare Facilities Supplied",
        icon: "/icons/hospital.svg"
      },
      {
        value: "25,000+",
        label: "Healthcare Professionals Wearing UNEOM Uniforms",
        icon: "/icons/medical-staff.svg"
      },
      {
        value: "98%",
        label: "Client Retention Rate in Healthcare Sector",
        icon: "/icons/retention.svg"
      },
      {
        value: "100%",
        label: "Ministry of Health Compliance Rate",
        icon: "/icons/compliance-check.svg"
      }
    ],
    
    // Case study for social proof and credibility
    caseStudy: {
      title: "Unified Uniform Program for Multi-Facility Healthcare Network",
      client: "National Medical Care Company",
      challenge: "Standardizing uniforms across 8 diverse healthcare facilities while addressing varying departmental needs, staff preferences, and creating a cohesive brand identity.",
      solution: "Developed a comprehensive uniform program with consistent base designs, departmental color coding, role-specific variations, and modest options for female staff.",
      results: [
        "Achieved 94% staff satisfaction rating with new uniforms",
        "Reduced uniform-related procurement costs by 23%",
        "Improved patient identification of staff roles by 46%",
        "Successfully implemented across all facilities within 90 days"
      ],
      image: "/images/case-studies/healthcare-case-study.jpg",
      testimonial: {
        quote: "The comprehensive approach UNEOM took to understanding our diverse facility needs resulted in a uniform program that has exceeded our expectations in both functionality and appearance.",
        author: "Mohammed Al-Sulaimani",
        position: "CEO",
        company: "National Medical Care Company"
      }
    },
    
    // Call to action section
    cta: {
      title: "Elevate Your Healthcare Facility with Professional Uniform Solutions",
      description: "Contact our healthcare uniform specialists to discuss your facility's unique requirements and discover how our comprehensive medical uniform solutions can enhance your professional image, staff satisfaction, and operational efficiency.",
      buttonText: "Request Healthcare Uniform Consultation",
      buttonUrl: "/contact?industry=healthcare"
    }
  };
  
  return <IndustryPageLayout locale={locale} industryData={healthcareData} />;
} 