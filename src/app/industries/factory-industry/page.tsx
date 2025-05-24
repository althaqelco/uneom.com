"use client";

import React, { useEffect } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaShieldAlt, FaTools, FaHardHat, FaTemperatureHigh, FaWind, FaIndustry, FaUsers, FaTshirt, FaStar, FaThumbsUp, FaChartLine, FaHistory, FaFire, FaCheck, FaSun, FaLock, FaEye, FaIdBadge } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function FactoryIndustryPage() {
  // Default to English locale
  const locale = 'en';
  
  // Effect for scroll animations
  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      const animatedElements = document.querySelectorAll('.benefit-card');
      
      animatedElements.forEach((element, index) => {
        if (isInViewport(element) && !element.classList.contains('animated')) {
          // Add animation with delay based on index
          setTimeout(() => {
            element.classList.add('animated', 'fade-in-up');
          }, index * 150);
        }
      });
    };

    // Setup hover animations for benefits cards
    const setupHoverEffects = () => {
      const cards = document.querySelectorAll('.benefit-card');
      
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          const icon = card.querySelector('.benefit-icon');
          if (icon) icon.classList.add('icon-pulse');
        });
        
        card.addEventListener('mouseleave', () => {
          const icon = card.querySelector('.benefit-icon');
          if (icon) icon.classList.remove('icon-pulse');
        });
      });
    };

    // Initial check and scroll event listener
    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Setup hover effects once elements are loaded
    setTimeout(setupHoverEffects, 1000);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  // All content for this industry page
  const factoryIndustryData = {
    title: "Factory & Industrial Workwear Solutions in Saudi Arabia",
    subtitle: "High-performance, safety-compliant uniforms engineered for Saudi Arabia's industrial sector",
    heroImage: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_2.jpg",
    seoKeywords: "Saudi industrial workwear, factory safety uniforms, manufacturing PPE, Saudi factory dress code, industrial protective clothing, Saudi Arabia workplace safety, flame-resistant coveralls, high-visibility workwear, Saudi industrial safety standards, SASO workwear compliance",
    
    introduction: [
      "In Saudi Arabia's rapidly expanding industrial landscape, choosing the right workwear isn't just about appearance—it's a critical investment in safety, productivity, and operational excellence. UNEOM proudly leads the Saudi market in delivering factory and industrial uniforms that meet both international safety standards and the unique requirements of the Kingdom's dynamic industrial sectors.",
      
      "Our comprehensive industrial workwear solutions are engineered specifically for Saudi Arabia's demanding industrial environments—from petrochemical plants operating in extreme heat to manufacturing facilities requiring precision and protection. Each uniform is crafted using advanced technical fabrics that provide superior protection against hazards while ensuring all-day comfort in the Saudi climate.",
      
      "With Vision 2030 driving unprecedented industrial growth across the Kingdom, UNEOM partners with Saudi manufacturers and industrial leaders to develop customized uniform programs that enhance safety culture, streamline operations, and strengthen corporate identity while complying with all Saudi and global safety regulations."
    ],
    
    benefits: [
      {
        title: "Advanced Thermal Protection",
        description: "Specialized heat-resistant and flame-retardant fabrics that provide critical protection in high-temperature environments common in Saudi petrochemical and manufacturing operations.",
        icon: "/icons/fire.svg",
        reactIcon: "fire",
        color: "from-orange-500 to-red-600"
      },
      {
        title: "Comprehensive Safety Compliance",
        description: "All workwear meets or exceeds Saudi SASO standards, GCC specifications, and international safety certifications including ISO 11612, ISO 20471, and industry-specific requirements.",
        icon: "/icons/shield-check.svg",
        reactIcon: "shield",
        color: "from-teal-500 to-green-600"
      },
      {
        title: "Climate-Optimized Performance",
        description: "Innovative fabric technologies that maintain protection while providing enhanced breathability and moisture management, designed specifically for Saudi Arabia's hot climate conditions.",
        icon: "/icons/temperature.svg",
        reactIcon: "temperature",
        color: "from-blue-500 to-blue-700"
      },
      {
        title: "Extended Durability",
        description: "Industrial-grade construction with reinforced stress points, specialized stitching techniques, and abrasion-resistant materials that withstand the demands of Saudi industrial environments.",
        icon: "/icons/durability.svg",
        reactIcon: "lock",
        color: "from-gray-600 to-gray-800"
      },
      {
        title: "Enhanced Visibility & Safety",
        description: "Strategic placement of high-visibility elements and reflective materials to maximize worker safety in low-light conditions across industrial facilities.",
        icon: "/icons/certificate.svg",
        reactIcon: "eye",
        color: "from-amber-500 to-amber-700"
      },
      {
        title: "Streamlined Identity Management",
        description: "Customized department color-coding systems, role identification features, and integrated access control compatibility for improved facility security and management.",
        icon: "/icons/branding.svg",
        reactIcon: "badge",
        color: "from-purple-500 to-purple-700"
      }
    ],
    
    relatedContent: [
      {
        title: "Industrial Safety Compliance Guide for Saudi Factories",
        description: "Essential regulations, standards, and best practices for ensuring workplace safety compliance in Saudi Arabia's manufacturing sector.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp",
        link: "/blog/industrial-safety-compliance-guide"
      },
      {
        title: "Advanced Protective Clothing Technologies for Industrial Safety",
        description: "Exploring breakthrough fabric innovations and protective technologies transforming industrial workwear safety in Saudi manufacturing facilities.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_2.webp",
        link: "/blog/industrial-protective-clothing-advances"
      },
      {
        title: "How Corporate Uniform Programs Impact Employee Satisfaction",
        description: "Research-backed insights on how well-designed industrial uniform programs improve safety culture, productivity and worker satisfaction.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_3.webp",
        link: "/blog/corporate-uniform-employee-satisfaction"
      },
      {
        title: "Electrostatic Protection in High-Risk Industrial Environments",
        description: "Understanding anti-static technology implementation in Saudi petrochemical and electronics manufacturing facilities to prevent hazardous discharge events.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Anti_Static.webp",
        link: "/blog/industrial-electrostatic-protection"
      },
      {
        title: "Heat Stress Management Through Advanced Workwear Design",
        description: "Innovative approaches to managing heat stress in Saudi industrial settings through climate-optimized workwear for improved safety and productivity.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Heat_Management.webp",
        link: "/blog/industrial-heat-stress-management"
      },
      {
        title: "Industrial Uniform Color-Coding: Safety and Efficiency Benefits",
        description: "How strategic color-coding systems in industrial uniforms enhance operational efficiency, emergency response, and worker safety across manufacturing facilities.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Color_Coding.webp",
        link: "/blog/industrial-uniform-color-coding"
      }
    ],
    
    featuredProducts: [
      {
        id: "industrial-coverall",
        name: "Premium Industrial Coverall",
        description: "Our flagship industrial coverall combines advanced protection with Saudi climate optimization. Features include flame-resistant treatment, reinforced stress points, multiple tool pockets, and strategically placed ventilation zones.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_1.webp",
        href: "/shop/industrial-uniforms/industrial-coverall",
        featured: true,
        price: "SAR 349",
        badge: "Best Seller"
      },
      {
        id: "flame-resistant-workwear",
        name: "Flame-Resistant Workwear Set",
        description: "Specialized for high-risk environments, this FR-certified workwear set provides maximum protection in petrochemical plants and high-temperature manufacturing environments while maintaining comfort in Saudi Arabia's climate.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_2.webp",
        href: "/shop/industrial-uniforms/flame-resistant-workwear",
        price: "SAR 499",
        badge: "Safety Certified"
      },
      {
        id: "hi-vis-safety-uniform",
        name: "High-Visibility Safety Uniform",
        description: "Engineered for maximum visibility in low-light industrial environments, featuring Class 3 reflective elements, durable moisture-wicking fabric, and Saudi climate adaptations for all-day comfort and protection.",
        image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_3.webp",
        href: "/shop/industrial-uniforms/hi-vis-safety-uniform",
        price: "SAR 399",
        badge: "Enhanced Visibility"
      },
      {
        id: "industrial-coverall-pro",
        name: "Industrial Coverall Pro with Cooling Technology",
        description: "Next-generation coverall featuring integrated cooling technology designed for extreme Saudi temperatures. Includes moisture-activated cooling zones, antimicrobial treatment, and enhanced abrasion resistance for demanding industrial environments.",
        image: "/images/industries/Factory_Industrial/industrial-coverall-pro.webp",
        href: "/shop/industrial-uniforms/industrial-coverall-pro",
        price: "SAR 549",
        badge: "Cooling Technology"
      },
      {
        id: "anti-static-industrial-uniform",
        name: "Anti-Static Industrial Uniform Set",
        description: "Specialized workwear with permanent anti-static properties for hazardous environments. Meets ATEX standards with carbon fiber grid technology, chemical splash protection, and flame resistance for petrochemical and electronics manufacturing.",
        image: "/images/industries/Factory_Industrial/anti-static-uniform.webp",
        href: "/shop/industrial-uniforms/anti-static-industrial-uniform",
        price: "SAR 479",
        badge: "Hazardous Environment"
      },
      {
        id: "supervisor-industrial-uniform",
        name: "Supervisor Industrial Uniform Package",
        description: "Distinguished uniform set for production supervisors and team leaders featuring specialized color-coding, enhanced durability, integrated tablet pocket, and communication device compatibility while maintaining full safety compliance.",
        image: "/images/industries/Factory_Industrial/supervisor-uniform.webp",
        href: "/shop/industrial-uniforms/supervisor-industrial-uniform",
        price: "SAR 629",
        badge: "Management Standard"
      }
    ],
  };

  // Function to get the appropriate icon component
  const getBenefitIcon = (iconType: string) => {
    switch(iconType) {
      case 'fire': return <FaFire className="text-primary-600 h-8 w-8 benefit-icon" />;
      case 'shield': return <FaShieldAlt className="text-primary-600 h-8 w-8 benefit-icon" />;
      case 'temperature': return <FaTemperatureHigh className="text-primary-600 h-8 w-8 benefit-icon" />;
      case 'lock': return <FaLock className="text-primary-600 h-8 w-8 benefit-icon" />;
      case 'eye': return <FaEye className="text-primary-600 h-8 w-8 benefit-icon" />;
      case 'badge': return <FaIdBadge className="text-primary-600 h-8 w-8 benefit-icon" />;
      default: return <FaStar className="text-primary-600 h-8 w-8 benefit-icon" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white h-[60vh] min-h-[400px] header-spacing">
        <div className="absolute inset-0">
          <Image 
            src={factoryIndustryData.heroImage} 
            alt={factoryIndustryData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/50 to-neutral-900/30"></div>
        </div>
        
        <Container>
          <div className="relative pt-24 pb-16 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{factoryIndustryData.title}</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">{factoryIndustryData.subtitle}</p>
            <Button href="/quote?industry=factory-industry" variant="primary" size="lg">Request a Quote</Button>
          </div>
        </Container>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {Array.isArray(factoryIndustryData.introduction) ? 
              factoryIndustryData.introduction.map((paragraph, index) => (
                <p key={index} className="text-lg text-neutral-700 mb-6">
                  {paragraph}
                </p>
              )) : 
              <p className="text-lg text-neutral-700">
                {factoryIndustryData.introduction}
              </p>
            }
          </div>
        </Container>
      </section>
      
      {/* Benefits Section - Enhanced with hover effects */}
      <section className="py-16 bg-neutral-50 overflow-hidden">
        <Container>
          {/* Enhanced section heading with animation */}
          <div className="text-center mb-12 relative">
            <div className="animate-ping absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-75">
              <FaStar className="text-primary-300 h-6 w-6" />
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-primary-500 mr-4"></div>
              <span className="text-primary-600 uppercase tracking-wider text-sm font-bold">Why Choose Us</span>
              <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-primary-500 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
              Benefits & Advantages
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100 animated-underline"></div>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
              Our industrial workwear solutions offer unmatched protection, comfort, and compliance for Saudi Arabia's demanding work environments
            </p>
          </div>
          
          {/* Added animation styles */}
          <style jsx global>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .benefit-card {
              opacity: 0;
            }
            
            .fade-in-up {
              animation: fadeInUp 0.8s ease forwards;
            }
            
            .icon-pulse {
              animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
              100% {
                transform: scale(1);
              }
            }
            
            .icon-rotate {
              transition: transform 0.5s ease;
            }
            
            .benefit-card:hover .icon-rotate {
              transform: rotate(15deg);
            }
            
            .benefit-card:hover .highlight-effect {
              opacity: 0.8;
            }
            
            .highlight-effect {
              opacity: 0;
              transition: opacity 0.5s ease;
            }
            
            .benefit-card:hover {
              z-index: 10;
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            }
            
            .animated-underline {
              animation: expandWidth 1.5s ease-in-out forwards 0.5s;
            }
            
            @keyframes expandWidth {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }
          `}</style>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {factoryIndustryData.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient highlight effect on hover */}
                <div className={`highlight-effect absolute inset-0 bg-gradient-to-br ${benefit.color || 'from-primary-500 to-primary-700'} opacity-0 -z-10`}></div>
                
                {/* Animated background accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full -mr-8 -mt-8 z-0"></div>
                
                <div className="relative z-10">
                  <div className="icon-rotate rounded-full bg-primary-100 p-4 w-20 h-20 flex items-center justify-center mb-4">
                    {getBenefitIcon(benefit.reactIcon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-neutral-600">{benefit.description}</p>
                </div>
                
                {/* Animated hover effect */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary-500 transition-all duration-300 w-0 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>Featured Products</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {factoryIndustryData.featuredProducts.map((product, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    <Link href={product.href} className="hover:text-primary-600 transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4">{product.description}</p>
                  {product.price && (
                    <div className="mb-4 font-bold text-primary-600">
                      {product.price}
                    </div>
                  )}
                  <Button href={product.href} variant="primary">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Related Content Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered>Related Content</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {factoryIndustryData.relatedContent.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Link href={item.link} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 text-sm">
                      {item.description}
                    </p>
                    <span className="text-primary-600 font-medium flex items-center">
                      Read More
                      <svg
                        className="ml-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
} 