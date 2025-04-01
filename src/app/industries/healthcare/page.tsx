'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { FaStethoscope, FaHospital, FaUserMd, FaClinicMedical, FaHeartbeat, FaBriefcaseMedical, FaShieldVirus, FaMedkit } from 'react-icons/fa';
import QuoteForm from '@/components/forms/QuoteForm';

export default function HealthcarePage() {
  // Define locale for language support
  const locale = 'en';
  
  // Featured products with actual images
  const featuredProducts = [
    {
      id: "premium-scrubs-set",
      name: "Premium Medical Scrubs Set",
      description: "Professional-grade scrubs with antimicrobial properties and Islamic dress compatibility.",
      image: "/images/healthcare/healthcare_medical_uniform.jpg",
      price: "SAR 349",
      href: "/shop/medical-scrubs/premium-scrubs-set"
    },
    {
      id: "medical-lab-coat",
      name: "Executive Lab Coat",
      description: "Premium white lab coat with BioCare antimicrobial technology for healthcare professionals.",
      image: "/images/healthcare/full_clothes_doctor_uniform.jpg",
      price: "SAR 299",
      href: "/shop/medical-scrubs/medical-lab-coat"
    },
    {
      id: "nursing-scrubs",
      name: "Professional Nursing Uniform",
      description: "Comfortable, durable nursing uniforms designed for all-day wear in healthcare settings.",
      image: "/images/healthcare/healthcare_nurce_uniform.jpg",
      price: "SAR 279",
      href: "/shop/medical-scrubs/nursing-scrubs"
    }
  ];
  
  // Blog posts to feature - using actual available posts and adapting them
  const relatedPosts = [
    {
      title: "Sustainable Healthcare Uniforms: 2024 Trends",
      excerpt: "Discover how eco-friendly materials are revolutionizing medical uniforms while maintaining antimicrobial properties.",
      image: "/images/healthcare/healthcare_hijab_doctor.jpg",
      url: "/blog/sustainable-uniforms-2024-trends"
    },
    {
      title: "How Medical Uniforms Impact Patient Trust",
      excerpt: "Research shows professional medical attire significantly increases patient confidence and satisfaction.",
      image: "/images/healthcare/healthcare_medical_doctor_uniform.jpg",
      url: "/blog/corporate-uniform-employee-satisfaction"
    },
    {
      title: "Advances in Protective Medical Clothing",
      excerpt: "New developments in healthcare fabrics are enhancing protection against pathogens while improving comfort.",
      image: "/images/healthcare/medical_hijab_uniform.jpg",
      url: "/blog/industrial-protective-clothing-advances"
    }
  ];
  
  const healthcareData = {
    locale: locale,
    title: 'Premium Medical Scrubs & Healthcare Uniforms in Saudi Arabia',
    subtitle: 'SCHS-compliant, antimicrobial medical attire for Saudi healthcare professionals',
    heroImage: '/images/healthcare/healthcare_medical_doctor_uniform.jpg',
    
    // Enhanced SEO metadata with additional keywords
    metaDescription: 'UNEOM provides premium medical scrubs, lab coats, and nursing uniforms in Saudi Arabia, featuring antimicrobial protection, SCHS compliance, and Islamic dress code compatibility.',
    keywords: ['medical scrubs Saudi Arabia', 'healthcare uniforms KSA', 'hospital uniform supplier', 'Islamic medical attire', 'antimicrobial scrubs', 'SCHS compliant uniforms', 'nursing uniforms Saudi', 'medical lab coats', 'modest medical wear', 'Saudi healthcare apparel', 'hospital staff uniforms', 'Saudi medical dress code', 'doctor uniforms Riyadh', 'medical hijab uniform'],
    canonicalUrl: 'https://uneom.com/industries/healthcare',
    
    // Enhanced introduction with more keywords and benefits
    introduction: [
      "In Saudi Arabia's rapidly evolving healthcare sector, professional medical uniforms are essential for establishing clinical excellence, maintaining SCHS compliance, and building patient trust. UNEOM offers specialized healthcare uniform solutions designed specifically for Saudi medical facilities, addressing the Kingdom's unique cultural requirements and regulatory standards.",
      
      "Our comprehensive range includes premium-quality scrubs, lab coats, nursing uniforms, and departmental attire that combine functionality, durability, and professional presentation. Every UNEOM healthcare garment incorporates advanced antimicrobial fabric technology that withstands rigorous hospital environments while offering modest design options that respect Islamic dress codes and accommodate Saudi Arabia's climate considerations.",
      
      "As the trusted uniform partner to leading healthcare institutions across the Kingdom—including major government hospitals in Riyadh, Jeddah, and Dammam, private healthcare networks, and specialized medical centers—we understand Saudi healthcare uniform requirements better than any other provider. Our dedicated healthcare consultants work directly with medical facility management to develop uniform programs that enhance institutional identity while meeting all compliance standards."
    ],
    
    // Use string paths instead of React components for icon values to match expected type
    benefits: [
      {
        title: "SCHS & MOH Compliance",
        description: "All our medical uniforms comply with Saudi Commission for Health Specialties requirements and Ministry of Health standards for healthcare attire in the Kingdom.",
        icon: "/icons/compliance.svg"
      },
      {
        title: "Islamic Dress Code Options",
        description: "Specialized designs accommodate hijab and modest dress requirements while maintaining professional medical standards and infection control compliance.",
        icon: "/icons/islamic.svg"
      },
      {
        title: "Climate-Optimized Fabrics",
        description: "Breathable, moisture-wicking fabrics selected specifically for Saudi Arabia's climate ensure comfort in hospital environments during long shifts.",
        icon: "/icons/climate.svg"
      },
      {
        title: "BioCare Antimicrobial Protection",
        description: "Advanced antimicrobial technology inhibits bacterial growth by 99.9%, reduces odor development, and maintains freshness throughout demanding clinical shifts.",
        icon: "/icons/antimicrobial.svg"
      },
      {
        title: "Hospital Branding Solutions",
        description: "Enhance facility identity with precision embroidery, department color-coding systems, and customized design elements that reinforce your healthcare brand.",
        icon: "/icons/branding.svg"
      }
    ],
    
    // Products with actual images from the healthcare folder
    products: [
      {
        id: "premium-scrubs-set",
        name: "Premium Medical Scrubs Set",
        description: "Professional-grade antimicrobial scrubs available in both standard and modest Islamic-compatible designs. Features BioCare protection and 4-way stretch fabric.",
        image: "/images/healthcare/healthcare_medical_uniform.jpg",
        href: "/shop/medical-scrubs/premium-scrubs-set"
      },
      {
        id: "antimicrobial-lab-coat",
        name: "Executive Medical Lab Coat",
        description: "Premium white lab coats with BioCare Antimicrobial technology, fluid-resistant finish, and customization options for healthcare professionals.",
        image: "/images/healthcare/full_clothes_doctor_uniform.jpg",
        href: "/shop/medical-scrubs/medical-lab-coat"
      },
      {
        id: "nursing-uniform-set",
        name: "Professional Nursing Uniform",
        description: "Comfortable, durable nursing uniforms designed for all-day comfort, featuring antimicrobial protection and Saudi healthcare facility compliance.",
        image: "/images/healthcare/healthcare_nurce_uniform.jpg",
        href: "/shop/medical-scrubs/nursing-scrubs"
      },
      {
        id: "surgical-scrubs",
        name: "Advanced Surgical Scrubs",
        description: "Specialized surgical attire with enhanced fluid protection, sterility features, and specialized designs for operating room environments.",
        image: "/images/healthcare/2_pices_nurce_uniform.jpg",
        href: "/shop/medical-scrubs/surgical-scrubs"
      },
      {
        id: "modest-medical-uniform",
        name: "Modest Medical Uniforms for Women",
        description: "Specialized healthcare uniforms designed specifically for female Saudi healthcare professionals with full hijab compatibility.",
        image: "/images/healthcare/medical_hijab_uniform.jpg",
        href: "/shop/medical-scrubs/modest-medical-uniform"
      },
      {
        id: "hospital-admin-uniform",
        name: "Hospital Administrative Uniforms",
        description: "Professional attire for reception, administrative, and non-clinical hospital staff that maintains cohesive facility branding.",
        image: "/images/healthcare/healthcare_hijab_doctor.jpg",
        href: "/shop/medical-scrubs/department-admin-uniform"
      }
    ],
    
    // Department section with healthcare images
    departments: [
      {
        name: "Emergency & Trauma Departments",
        description: "High-performance medical attire for emergency medicine, featuring reinforced construction, enhanced mobility, and quick-identification color coding for rapid response teams.",
        image: "/images/healthcare/healthcare_medical_doctor_uniform.jpg",
        productTypes: ["Emergency Scrub Sets", "Trauma Team Uniforms", "Quick-Access Medical Vests"]
      },
      {
        name: "Nursing & Patient Care",
        description: "Comfortable, practical nursing uniforms that combine professional appearance with all-day comfort, including Saudi-specific modest options for female nursing staff.",
        image: "/images/healthcare/healthcare_nurce_uniform.jpg",
        productTypes: ["Modern Nursing Scrubs", "Modest Nursing Uniforms", "Climate-Optimized Sets"]
      },
      {
        name: "Surgical & Operating Room Teams",
        description: "Specialized surgical attire meeting the highest standards for safety and sterility, designed specifically for Saudi operating theaters and surgical departments.",
        image: "/images/healthcare/2_pices_nurce_uniform.jpg",
        productTypes: ["Advanced Surgical Scrubs", "OR-Specific Attire", "Surgical Headwear"]
      },
      {
        name: "Laboratory & Diagnostic Teams",
        description: "Professional lab coats and protective attire for laboratory personnel in Saudi healthcare facilities, with enhanced protection and customization options.",
        image: "/images/healthcare/full_clothes_doctor_uniform.jpg",
        productTypes: ["Premium Lab Coats", "Diagnostic Team Uniforms", "Protective Layering Systems"]
      }
    ],
    
    // Use string paths for fabric technology icons
    fabricTechnologies: [
      {
        name: "BioCare Antimicrobial Protection",
        description: "Advanced fabric treatment that inhibits bacterial growth by 99.9%, reduces odor development, and maintains freshness throughout long hospital shifts.",
        icon: "/icons/biocare.svg"
      },
      {
        name: "ComfortFlex 4-Way Stretch",
        description: "Medical-grade 4-way stretch technology providing exceptional range of motion for healthcare professionals who need mobility during active procedures.",
        icon: "/icons/comfortflex.svg"
      },
      {
        name: "DuraSeal Fluid Protection",
        description: "Hospital-grade fluid-repellent finish that protects against biological spills and splashes while maintaining breathability for all-day comfort.",
        icon: "/icons/duraseal.svg"
      },
      {
        name: "CoolCore Temperature Regulation",
        description: "Innovative fabric technology specifically engineered to regulate body temperature in Saudi hospital environments, preventing overheating during long shifts.",
        icon: "/icons/coolcore.svg"
      }
    ],
    
    // Use string paths for customization option icons
    customizationOptions: [
      {
        name: "Hospital Department Color Coding",
        description: "Implement systematic color coding systems across departments to enhance patient navigation and organizational clarity in Saudi healthcare facilities.",
        icon: "/icons/department-colors.svg"
      },
      {
        name: "Medical Facility Branding",
        description: "Incorporate your Saudi healthcare facility's logo, name, and identity through precision embroidery and consistent design elements.",
        icon: "/icons/institutional-branding.svg"
      },
      {
        name: "Staff Role Identification",
        description: "Clear designation of medical staff roles through specialized uniform elements, helping patients quickly identify doctors, nurses, and support personnel.",
        icon: "/icons/role-identification.svg"
      },
      {
        name: "Modest Design Adaptations",
        description: "Specialized modifications to standard medical uniform designs to accommodate hijab and modest dress preferences for Saudi female healthcare professionals.",
        icon: "/icons/modest-modifications.svg"
      }
    ],
    
    // Enhanced testimonials
    testimonials: [
      {
        id: "testimonial-1",
        quote: "UNEOM's healthcare uniforms have transformed both staff satisfaction and our hospital's professional image. Their deep understanding of Saudi regulatory requirements and SCHS compliance made implementation seamless. The antimicrobial technology has proven invaluable in reducing infection concerns, and their department color-coding system has significantly improved patient navigation throughout our facility.",
        author: "Dr. Alya Al-Harbi",
        position: "Chief Medical Officer",
        company: "Kingdom Medical Center, Riyadh"
      },
      {
        id: "testimonial-2",
        quote: "The modest design options UNEOM provided for our female medical staff have been particularly well-received, offering the perfect balance of professional functionality and Islamic dress code compliance. Their fabrics withstand our rigorous infection control protocols, and the uniforms retain their appearance significantly better than previous suppliers, reducing our replacement costs by nearly 40%.",
        author: "Fahad Al-Qasim",
        position: "Procurement Director",
        company: "Saudi German Hospital Group, Jeddah"
      }
    ],
    
    // Enhanced FAQ
    faq: [
      {
        question: "How do UNEOM's medical uniforms comply with Saudi healthcare regulations?",
        answer: "All our medical uniforms meet or exceed Saudi Commission for Health Specialties (SCHS) requirements and Ministry of Health standards. We provide compliant color options for different medical specialties, appropriate coverage requirements, and antimicrobial properties that satisfy Saudi infection control guidelines. Our compliance team stays updated on regulatory changes to ensure our products remain fully compliant with the latest standards."
      },
      {
        question: "What makes your antimicrobial fabrics essential for Saudi healthcare facilities?",
        answer: "Our BioCare Antimicrobial technology is specifically valuable in Saudi healthcare settings as it inhibits 99.9% of bacterial growth on fabric surfaces, reduces odor development during long shifts in warm environments, maintains freshness throughout demanding clinical work, and provides an additional layer of protection for both staff and patients in high-traffic medical facilities across the Kingdom."
      },
      {
        question: "Can you create customized uniforms for our entire hospital with department-specific designs?",
        answer: "Yes, we specialize in comprehensive healthcare uniform programs for Saudi facilities of all sizes. We implement consistent base designs with department-specific color coding (emergency, nursing, surgical, laboratory, etc.), role identifiers, and hospital branding elements. This creates a cohesive institutional appearance while making it easy for patients to identify different departments and staff roles throughout your facility."
      },
      {
        question: "What options do you offer for female Saudi healthcare professionals requiring modest attire?",
        answer: "We offer an extensive range of modest medical uniform options designed specifically for Saudi female healthcare professionals, including longer tunic-length tops, looser-fitting medical pants, hijab-friendly designs in clinical-appropriate fabrics, and full coverage options that maintain professional medical standards while fully respecting Islamic dress requirements. All modest options maintain the same antimicrobial properties and functional features as our standard lines."
      },
      {
        question: "How quickly can you outfit our entire healthcare facility with custom uniforms?",
        answer: "For Saudi healthcare facilities, we typically implement a complete uniform program within 4-8 weeks, depending on customization requirements and facility size. This includes initial consultation, design approval, size collection, production, and distribution. For urgent needs, we offer expedited programs for critical departments. We maintain Saudi-based inventory of core medical styles to ensure quick replacement and new staff outfitting."
      }
    ],
    
    // Convert relatedContent structure to match the expected type
    relatedContent: [
      {
        title: "Sustainable Healthcare Uniforms: 2024 Trends",
        description: "Discover how eco-friendly materials are revolutionizing medical uniforms while maintaining antimicrobial properties required in Saudi hospitals.",
        image: "/images/healthcare/healthcare_hijab_doctor.jpg",
        link: "/blog/sustainable-uniforms-2024-trends"
      },
      {
        title: "How Medical Uniforms Impact Patient Trust",
        description: "Research shows professional medical attire significantly increases patient confidence and satisfaction in Saudi healthcare settings.",
        image: "/images/healthcare/healthcare_medical_doctor_uniform.jpg",
        link: "/blog/corporate-uniform-employee-satisfaction"
      },
      {
        title: "Advances in Protective Medical Clothing",
        description: "New developments in healthcare fabrics are enhancing protection against pathogens while improving comfort for Saudi medical professionals.",
        image: "/images/healthcare/medical_hijab_uniform.jpg",
        link: "/blog/industrial-protective-clothing-advances"
      },
      {
        title: "Medical Fabric Technology Guide",
        description: "Comprehensive information on antimicrobial and fluid-resistant fabrics for Saudi healthcare environments",
        image: "/icons/fabric-guide.svg",
        link: "/resources/fabric-guide/healthcare"
      },
      {
        title: "Healthcare Uniform Size Guide",
        description: "Detailed sizing information for all medical uniform products with Saudi-specific measurements",
        image: "/icons/size-guide.svg",
        link: "/resources/size-guide/medical"
      },
      {
        title: "SCHS-Compliant Uniform Guide",
        description: "Downloadable guide for creating compliant healthcare uniform policies in Saudi facilities",
        image: "/icons/policy-template.svg",
        link: "/resources/policy-templates/hospital"
      }
    ],
    
    // Use string paths for statistics icons
    statistics: [
      {
        value: "65+",
        label: "Saudi Healthcare Facilities Supplied",
        icon: "/icons/hospital.svg"
      },
      {
        value: "25,000+",
        label: "Medical Professionals Wearing UNEOM Uniforms",
        icon: "/icons/medical-staff.svg"
      },
      {
        value: "98%",
        label: "Client Retention Rate in Healthcare Sector",
        icon: "/icons/retention.svg"
      },
      {
        value: "100%",
        label: "SCHS & MOH Compliance Rate",
        icon: "/icons/compliance-check.svg"
      }
    ],
    
    // Case study with healthcare image
    caseStudy: {
      title: "Unified Healthcare Uniform Program for National Medical Care",
      client: "National Medical Care Company - Saudi Arabia",
      challenge: "Standardizing medical uniforms across 8 diverse healthcare facilities in Riyadh, Jeddah, and Dammam while addressing varying departmental needs, staff preferences, and creating a cohesive brand identity that meets SCHS requirements.",
      solution: "Developed a comprehensive Saudi-specific uniform program with consistent base designs, department-specific color coding, role identifiers, and modest options for female medical staff. Implemented antimicrobial protection across all garments.",
      results: [
        "Achieved 94% staff satisfaction rating with new SCHS-compliant uniforms",
        "Reduced uniform-related procurement costs by 23% through standardization",
        "Improved patient identification of medical staff roles by 46%",
        "Successfully implemented across all Saudi facilities within 90 days"
      ],
      image: "/images/healthcare/healthcare_medical_doctor_uniform.jpg",
      testimonial: {
        quote: "The comprehensive approach UNEOM took to understanding our diverse Saudi medical facility needs resulted in a uniform program that has exceeded our expectations in both functionality and appearance. Their knowledge of SCHS requirements was invaluable.",
        author: "Mohammed Al-Sulaimani",
        position: "Chief Executive Officer",
        company: "National Medical Care Company, Saudi Arabia"
      }
    },
    
    // Enhanced call to action
    cta: {
      title: "Transform Your Saudi Healthcare Facility with Professional Medical Uniforms",
      description: "Contact our healthcare uniform specialists to discuss your facility's specific requirements and discover how our SCHS-compliant medical uniform solutions can enhance your professional image, staff satisfaction, and operational efficiency.",
      buttonText: "Request Healthcare Uniform Consultation",
      buttonUrl: "/contact?industry=healthcare"
    }
  };
  
  // Featured products section (added outside the IndustryPageLayout)
  const FeaturedProducts = () => (
    <section className="py-16 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Featured Healthcare Uniforms</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our most popular medical uniforms designed specifically for Saudi healthcare professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">{product.name}</h3>
                <p className="text-neutral-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-primary-600">{product.price}</span>
                  <Link 
                    href={product.href}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            href="/shop/medical-scrubs"
            variant="outline"
            size="lg"
          >
            View All Medical Uniforms
          </Button>
        </div>
      </Container>
    </section>
  );
  
  // Related blog posts section
  const RelatedBlogPosts = () => (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Medical Uniform Insights</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Latest articles and resources for healthcare professionals in Saudi Arabia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-800 mb-2">{post.title}</h3>
                <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={post.url}
                  className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                >
                  Read Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
  
  // Quick quote form section
  const QuickQuoteSection = () => (
    <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get a Custom Healthcare Uniform Quote</h2>
            <p className="text-lg mb-8 text-primary-100">
              Our medical uniform consultants are ready to help you find the perfect healthcare attire solution for your facility's specific needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaHospital className="w-6 h-6 text-primary-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Complete Facility Solutions</h3>
                  <p>Comprehensive uniform programs for entire hospitals and medical centers</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaShieldVirus className="w-6 h-6 text-primary-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">SCHS-Compliant Designs</h3>
                  <p>All uniforms fully compliant with Saudi healthcare regulations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <FaUserMd className="w-6 h-6 text-primary-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Customized Department Programs</h3>
                  <p>Tailored solutions for each specific medical department</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-xl">
            <QuoteForm locale={locale} />
          </div>
        </div>
      </Container>
    </section>
  );
  
  return (
    <div className="bg-white">
    
      <IndustryPageLayout locale={locale} industryData={healthcareData} skipMainLayout={true} />
      <FeaturedProducts />
      <RelatedBlogPosts />
      <QuickQuoteSection />
    
    </div>
  );
} 