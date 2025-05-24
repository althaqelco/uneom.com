'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserSecret, FaUsers, FaBullseye, FaSun, FaIdCard, FaCheckCircle, FaGlobe } from 'react-icons/fa';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function SecurityPage() {
  // Default to English locale
  const locale = 'en';
  
  // All content for this industry page with enhanced SEO keywords and content
  const securityIndustryData = {
    title: "Professional Security Uniforms & Guard Attire in Saudi Arabia",
    subtitle: "Premium, Authoritative & Climate-Adaptive Security Workwear for Saudi Security Personnel",
    heroImage: "/images/industries/security/security-uniform-1",
    seoKeywords: "security uniforms Saudi Arabia, professional guard attire, security officer uniform, tactical security wear, Saudi security company uniforms, protective security clothing, corporate security uniforms, executive protection apparel, event security uniforms, Saudi Arabia security workwear",
    
    introduction: [
      "In Saudi Arabia's rapidly expanding security sector, professional appearance is a critical aspect of authority projection, public trust, and operational effectiveness. UNEOM delivers premium security uniforms specifically engineered for Saudi security environments, combining commanding presence with tactical functionality and climate-appropriate design.",
      
      "Our comprehensive Saudi security collection includes professional guard uniforms, executive protection attire, elite event security workwear, and specialized tactical gear. Each security garment is crafted from professional-grade fabrics that withstand intensive daily use while maintaining a professional, authoritative appearance in challenging environments.",
      
      "Understanding the unique requirements of Saudi Arabia's security providers, we offer advanced customization options that respect cultural considerations while maintaining international security standards. From government facilities and corporate headquarters to special event venues and residential complexes, our premium security uniforms are meticulously tailored to enhance both personnel effectiveness and public confidence in your security operations."
    ],
    
    benefits: [
      {
        title: "Professional Authority Projection",
        description: "Meticulously designed security uniforms that instantly convey authority and establish respect across diverse Saudi operational environments.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "Advanced Tactical Functionality",
        description: "Specialized security features including reinforced pockets, concealed equipment attachments, and strategic seam placement for optimal operational movement.",
        icon: "/icons/lightning-bolt.svg"
      },
      {
        title: "Saudi Climate Adaptability",
        description: "Advanced breathable, moisture-wicking performance fabrics engineered for comfort during extended security operations in Saudi Arabia's high-temperature climate.",
        icon: "/icons/sun.svg"
      },
      {
        title: "Professional Brand Identity",
        description: "Consistent, brand-aligned security uniforms that reinforce your organization's professional identity and security standards across all personnel levels.",
        icon: "/icons/identification.svg"
      },
      {
        title: "Enhanced Visibility Options",
        description: "Strategic high-visibility elements for nighttime security operations and special event management without compromising professional appearance.",
        icon: "/icons/eye.svg"
      }
    ],
    
    products: [
      {
        id: "professional-security-officer",
        name: "Professional Security Officer Uniform",
        description: "Premium-grade security officer attire designed for Saudi corporate facilities, government buildings, and high-profile locations requiring authoritative presence and climate comfort.",
        image: "/images/industries/security/security-uniform-product-1.jpg",
        href: "/shop/security-uniforms/security-officer-uniform",
        features: [
          "Professional command-presence design",
          "Premium moisture-wicking fabric",
          "Reinforced tactical pockets",
          "Saudi climate optimization",
          "Extended durability construction"
        ]
      },
      {
        id: "tactical-security",
        name: "Elite Tactical Security Wear",
        description: "Advanced tactical security uniforms with specialized functionality for active security personnel requiring enhanced mobility and equipment accommodation.",
        image: "/images/industries/security/security-uniform-product-2.jpg",
        href: "/shop/security-uniforms/tactical-security-uniforms",
        features: [
          "360° stretch fabric technology",
          "Reinforced articulated joints",
          "Concealed equipment attachments",
          "Abrasion-resistant construction",
          "Heat-management system"
        ]
      },
      {
        id: "executive-protection",
        name: "Executive Protection Apparel",
        description: "Sophisticated, discreet protection officer attire balancing professional appearance with tactical capability for executive security details and VIP protection.",
        image: "/images/industries/security/security-uniform-product-3.jpg",
        href: "/shop/security-uniforms/executive-protection",
        features: [
          "Professional tailored appearance",
          "Concealed tactical features",
          "Premium stretch performance fabric",
          "Enhanced range-of-motion design",
          "Professional color options"
        ]
      }
    ],
    
    // Related blog posts section to engage customers with relevant content
    relatedContent: [
      {
        title: "Security Uniform Psychology: Impact on Authority Perception",
        description: "Research-based insights into how security uniform design influences public perception of authority and affects compliance in security situations.",
        image: "/images/industries/security/security-uniform-post-1.jpg",
        link: "/blog/security-uniform-psychology"
      },
      {
        title: "Advanced Fabrics in Modern Security Uniforms",
        description: "Explore how cutting-edge textile technologies are enhancing security personnel comfort and effectiveness in Saudi Arabia's challenging climate.",
        image: "/images/industries/security/security-uniform-post-2.jpg",
        link: "/blog/advanced-fabrics-security-uniforms"
      },
      {
        title: "Corporate Security Branding Through Uniform Design",
        description: "How leading Saudi organizations leverage security uniform design to reinforce corporate identity while maintaining security functionality.",
        image: "/images/industries/security/security-uniform-post-3.jpg",
        link: "/blog/corporate-security-branding"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "DuraGuard™ Premium Fabric",
        description: "Military-grade woven fabric with enhanced tear and abrasion resistance specifically engineered for intensive security operations in demanding environments.",
        icon: "/icons/shield-check.svg"
      },
      {
        name: "ClimaCool™ Adaptive Technology",
        description: "Advanced moisture-wicking technology with temperature regulation that enhances comfort during extended security shifts in Saudi Arabia's high-temperature environments.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "FlexTac™ Professional Construction",
        description: "Strategic mechanical stretch panels and articulated joint construction that enhance movement during security interventions and active engagement scenarios.",
        icon: "/icons/refresh.svg"
      },
      {
        name: "NightVis™ Safety Elements",
        description: "Reflective and phosphorescent visual elements that enhance security personnel visibility during nighttime operations without compromising professional appearance.",
        icon: "/icons/eye.svg"
      },
      {
        name: "AridCore™ Desert-Optimized Fabric",
        description: "Specialized fabric technology developed specifically for Saudi Arabia's desert climate conditions with enhanced breathing and cooling properties.",
        icon: "/icons/sun.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "Professional Rank & Position Indicators",
        description: "Customizable epaulets, badges, and insignia that clearly identify security personnel hierarchy and authority levels within your organization.",
        icon: "/icons/badge-check.svg"
      },
      {
        name: "Corporate Identity Integration",
        description: "Professionally applied logos, emblems, and corporate identity elements across all security uniform components for consistent brand representation.",
        icon: "/icons/template.svg"
      },
      {
        name: "Tactical Feature Customization",
        description: "Modified pocket configurations, equipment attachments, and function-specific design elements based on your exact operational requirements and gear specifications.",
        icon: "/icons/adjustments.svg"
      },
      {
        name: "Saudi Cultural Adaptations",
        description: "Security uniform designs that respectfully incorporate Saudi cultural and religious requirements while maintaining professional security standards.",
        icon: "/icons/globe.svg"
      },
      {
        name: "Climate-Specific Modifications",
        description: "Customized adjustments for specific regional climate variations within Saudi Arabia, from coastal humidity to desert conditions.",
        icon: "/icons/temperature.svg"
      }
    ],
    
    testimonials: [
      {
        id: "riyadh-security",
        quote: "UNEOM has revolutionized our security division's professional image while providing uniforms that actually function in our demanding environment. Our guards report significantly improved comfort during 12-hour shifts, and the authoritative appearance has noticeably enhanced compliance from visitors to our facilities.",
        author: "Abdullah Al-Qahtani",
        position: "Security Operations Director",
        company: "Royal Security Services",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        id: "jeddah-facility",
        quote: "The advanced fabric technology in UNEOM's security uniforms has dramatically improved our team's performance during summer months. The professional appearance projects exactly the right level of authority while the climate-adaptive materials keep our personnel comfortable and alert.",
        author: "Ibrahim Al-Harbi",
        position: "Facility Security Manager",
        company: "Jeddah Commercial Center",
        image: "/images/avatar-placeholder.jpg"
      }
    ],
    
    // FAQs section to address common customer questions and improve SEO
    faqItems: [
      {
        question: "What makes security uniforms different from standard workwear?",
        answer: "Professional security uniforms incorporate specialized design elements that project authority and accommodate tactical requirements. These include durable construction methods, strategic pocket placement, equipment accommodation features, and psychological color considerations that standard workwear doesn't address."
      },
      {
        question: "How important is uniform quality for security effectiveness?",
        answer: "Uniform quality directly impacts security effectiveness through multiple mechanisms: psychological authority projection that enhances compliance, comfort features that maintain alertness during long shifts, durability that ensures consistent professional appearance, and specific design elements that accommodate security equipment and operational movements."
      },
      {
        question: "Can security uniforms be customized for Saudi weather conditions?",
        answer: "Yes, we specialize in adapting security uniforms for Saudi Arabia's unique climate conditions. Our fabrics and construction methods specifically address high temperature challenges through moisture-wicking technology, breathable materials, weight optimization, and UV protection features that maintain professional appearance in extreme conditions."
      },
      {
        question: "What customization options are available for security companies?",
        answer: "Our security uniform customization options include corporate branding integration, rank identification systems, departmental color coding, specialized pocket and feature configurations, fabric selection for specific deployment environments, and Saudi cultural adaptations while maintaining security functionality."
      }
    ],
    
    // Call to action with compelling copy to motivate orders
    cta: {
      title: "Elevate Your Security Operations with Professional Uniforms",
      description: "Contact our security uniform specialists today to develop a comprehensive security attire program tailored to your specific operational requirements and Saudi deployment environment.",
      buttonText: "Request Security Uniform Consultation",
      buttonUrl: "/contact?industry=security"
    },
    
    // Featured Products section to directly promote ordering
    featuredProducts: [
      {
        id: "security-officer-premium",
        name: "Premium Security Officer Uniform Set",
        description: "Complete professional security officer uniform set with premium moisture-wicking shirt, tactical pants with reinforced knees, duty belt, and cap.",
        image: "/images/industries/security/security-uniform-product-1.jpg",
        price: "SAR 950",
        href: "/shop/security-uniforms/security-officer-uniform",
        badge: "Best Seller",
        featured: true
      },
      {
        id: "tactical-security-elite",
        name: "Elite Tactical Security Uniform",
        description: "Advanced tactical security uniform with stretch fabric technology, reinforced construction, and multiple equipment attachment points.",
        image: "/images/industries/security/security-uniform-product-2.jpg",
        price: "SAR 1,250",
        href: "/shop/security-uniforms/tactical-security-uniforms",
        badge: "Professional Grade",
        featured: true
      },
      {
        id: "executive-protection-suit",
        name: "Executive Protection Suit",
        description: "Sophisticated protection officer attire with concealed tactical features in a professional tailored design for executive security details.",
        image: "/images/industries/security/security-uniform-product-3.jpg",
        price: "SAR 1,850",
        href: "/shop/security-uniforms/executive-protection",
        badge: "Premium",
        featured: true
      }
    ]
  };
  
  // Custom rendering components to enhance the visual presentation
  const CustomIntroSection = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-neutral-50 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary-600 relative overflow-hidden">
                {/* Decorative security elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-bl-full z-0"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-600/10 to-transparent rounded-tr-full z-0"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                    Professional Security Excellence
                  </h2>
                  
                  {securityIndustryData.introduction.map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                      className="mb-4 text-neutral-700 leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href="/contact?industry=security" 
                        className="inline-block px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                      >
                        Request Consultation
                      </Link>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href="/shop/security-uniforms" 
                        className="inline-block px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg shadow-md border border-primary-600 hover:bg-primary-50 transition duration-300 ease-in-out"
                      >
                        View Security Products
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent z-10"></div>
                <Image 
                  src="/images/industries/security/security-uniform-3.jpg" 
                  alt="Professional Security Personnel in Saudi Arabia" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">
                    Professional Authority Through Premium Uniforms
                  </h3>
                  <p className="text-neutral-100 mt-2 drop-shadow-md">
                    Engineered specifically for Saudi Arabia's security environment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const CustomBenefitsSection = () => {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent inline-block">
              Security Uniform Advantages
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our professional security uniforms deliver multiple operational benefits that enhance security effectiveness
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityIndustryData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-600 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-100 to-transparent rounded-bl-full z-0 group-hover:w-32 group-hover:h-32 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 text-primary-600">
                    {benefit.title === "Professional Authority Projection" && <FaShieldAlt size={32} />}
                    {benefit.title === "Advanced Tactical Functionality" && <FaUserSecret size={32} />}
                    {benefit.title === "Saudi Climate Adaptability" && <FaSun size={32} />}
                    {benefit.title === "Professional Brand Identity" && <FaIdCard size={32} />}
                    {benefit.title === "Enhanced Visibility Options" && <FaBullseye size={32} />}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-neutral-800 group-hover:text-primary-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const CustomFeaturedProductsSection = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Premium Security Uniforms
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300"></div>
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Professional-grade security attire designed specifically for Saudi Arabia's security requirements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityIndustryData.featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg overflow-hidden shadow-lg group relative"
              >
                {product.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10 opacity-70"></div>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={500} 
                    height={300} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-neutral-400 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-primary-300 font-bold">
                      {product.price}
                    </span>
                    
                    <Link 
                      href={product.href} 
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                
                <div className="h-1 w-full bg-gradient-to-r from-primary-600 to-primary-400"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/shop/security-uniforms" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                View All Security Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const CustomFAQSection = () => {
    return (
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent inline-block">
              Security Uniform FAQs
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Common questions about professional security uniforms in Saudi Arabia
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {securityIndustryData.faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-6"
              >
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-600">
                  <h3 className="text-xl font-bold mb-3 text-neutral-800">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const CustomRelatedContentSection = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-neutral-100 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent inline-block">
              Security Uniform Insights
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Expert articles on security uniform design, functionality, and implementation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityIndustryData.relatedContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={content.image} 
                    alt={content.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                    {content.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 text-sm">
                    {content.description}
                  </p>
                  
                  <Link 
                    href={content.link} 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors duration-300"
                  >
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  // Add the custom sections to the page
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <CustomIntroSection />
      <CustomBenefitsSection />
      <CustomFeaturedProductsSection />
      <CustomFAQSection />
      <CustomRelatedContentSection />
    <IndustryPageLayout 
      locale={locale}
      industryData={securityIndustryData}
        skipMainLayout={true}
    />
    </>
  );
} 