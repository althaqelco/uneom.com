'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaHardHat, FaShieldAlt, FaTemperatureHigh, FaTshirt, 
  FaTools, FaUserShield, FaCertificate, FaGlobeAsia, 
  FaIndustry, FaChartLine, FaTruck, FaHandshake, 
  FaArrowRight, FaWhatsapp, FaFire, FaCheckCircle, 
  FaLock, FaUserCog, FaTachometerAlt, FaRegLightbulb, 
  FaAward, FaStar, FaAngleRight
} from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';

export default function ManufacturingPage() {
  const locale = 'en';
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Function to handle WhatsApp contact
  const handleWhatsAppInquiry = () => {
    const message = "Hello UNEOM, I'm interested in industrial uniforms for our manufacturing facility in Saudi Arabia. Could you provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971558164922?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to handle product inquiry
  const handleProductInquiry = (productName: string) => {
    const message = `Hello UNEOM, I'm interested in the ${productName} for our industrial facility in Saudi Arabia. Could you send me more details and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971558164922?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // Products data
  const products = [
    {
      id: "industrial-coverall-pro",
      name: "Industrial Coverall Pro",
      description: "Advanced full-body protection engineered for Saudi Arabia's most demanding industrial environments with multi-hazard protection featuring heat-resistant, flame-retardant, and chemical-resistant technologies.",
      image: "/images/industries/manufacturing/manufacturing_uniform_product1.jpg",
      href: "/shop/industrial-uniforms/industrial-coverall-pro",
      features: [
        "FR Rating: NFPA 2112 & NFPA 70E",
        "Temperature Tolerance: -30°C to +60°C",
        "Anti-Static Properties: EN 1149-5",
        "Chemical Splash Protection: EN 13034"
      ],
      price: "SAR 389 - 529",
      badge: "Bestseller"
    },
    {
      id: "flame-resistant-workwear",
      name: "Premium FR Workwear Set",
      description: "Industry-leading flame-resistant clothing system meeting NFPA 2112 standards, designed specifically for Saudi oil & gas, petrochemical, and electrical industries.",
      image: "/images/industries/manufacturing/manufacturing_uniform_product2.jpg",
      href: "/shop/industrial-uniforms/flame-resistant-workwear",
      features: [
        "Arc Rating: ATPV 12+ cal/cm²",
        "Flash Fire Protection: NFPA 2112 Certified",
        "Heat Transfer Index: HTI₂₄ > 16 seconds",
        "Self-Extinguishing: < 2 seconds"
      ],
      price: "SAR 549 - 749",
      badge: "Safety Certified"
    },
    {
      id: "hi-vis-safety-uniform",
      name: "Hi-Vis Safety Uniform",
      description: "ANSI/ISEA 107 Class 3-compliant high-visibility garments with 360° advanced reflective elements designed for Saudi construction, roadwork, and night shift industrial operations.",
      image: "/images/industries/manufacturing/manufacturing_uniform_product3.jpg",
      href: "/shop/industrial-uniforms/hi-vis-safety-uniform",
      features: [
        "Visibility Range: 300+ meters in darkness",
        "360° Reflective Technology with 5cm+ strips",
        "UV Protection: UPF 40+",
        "Moisture Management Technology"
      ],
      price: "SAR 429 - 549",
      badge: "Enhanced Visibility"
    }
  ];
  
  // Blog posts data
  const blogPosts = [
    {
      title: "2024 Advancements in Industrial Protective Clothing for Saudi Manufacturing",
      description: "Explore the latest cutting-edge innovations in protective workwear technology specifically engineered for Saudi Arabia's manufacturing sector.",
      image: "/images/industries/manufacturing/manufacturing_uniform_variation.jpg",
      link: "/blog/industrial-protective-clothing-advances",
      readTime: "8 min read",
      date: "May 15, 2024"
    },
    {
      title: "Sustainable Manufacturing Uniforms: Meeting Saudi Vision 2030 Goals",
      description: "How next-generation eco-friendly industrial workwear is supporting Saudi Arabia's sustainability objectives while maintaining world-class safety standards.",
      image: "/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg",
      link: "/blog/sustainable-uniforms-2024-trends",
      readTime: "7 min read",
      date: "April 22, 2024"
    },
    {
      title: "Safety Standards and Compliance: Industrial Workwear in Saudi Manufacturing",
      description: "A comprehensive guide to navigating Saudi and international safety regulations for industrial uniforms in manufacturing facilities across the Kingdom.",
      image: "/images/industries/manufacturing/manufacturing_uniform_default.jpg",
      link: "/blog/industrial-safety-compliance-guide",
      readTime: "10 min read",
      date: "March 30, 2024"
    }
  ];
  
  // Technologies data
  const technologies = [
    {
      name: "ThermoRegulate™ Advanced Cooling",
      description: "Patented multi-layer temperature regulation technology specifically engineered for Saudi Arabia's extreme climate.",
      icon: <FaTemperatureHigh className="h-10 w-10 text-primary-600 mb-4" />
    },
    {
      name: "DuraTough™ Reinforcement",
      description: "Revolutionary triple-stitching and advanced abrasion-resistant fabric technology that extends garment life up to 3x longer.",
      icon: <FaShieldAlt className="h-10 w-10 text-primary-600 mb-4" />
    },
    {
      name: "FlexWork™ Pro Mobility System",
      description: "Innovative ergonomic garment architecture with strategically placed 4-way stretch panels that maximize mobility.",
      icon: <FaTools className="h-10 w-10 text-primary-600 mb-4" />
    },
    {
      name: "ChemShield™ Advanced Protection",
      description: "Industry-leading chemical-resistant fabric treatments developed specifically for Saudi petrochemical environments.",
      icon: <FaFire className="h-10 w-10 text-primary-600 mb-4" />
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      content: "UNEOM transformed our safety program with industrial uniforms that not only exceed international standards but are also exceptionally comfortable in Saudi Arabia's high-temperature industrial environments.",
      author: "Eng. Mohammed Al-Otaibi",
      position: "Safety & Compliance Director",
      company: "Jubail Industrial Development Corporation",
      image: "/images/avatar-placeholder.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "After implementing UNEOM's customized industrial uniform program, we've seen a measurable 32% decrease in heat-related incidents and a 28% increase in productivity.",
      author: "Fahad Al-Harbi",
      position: "Operations Manager",
      company: "Saudi Manufacturing Industries",
      image: "/images/avatar-placeholder.jpg",
      logo: "/images/logos/placeholder-logo.png"
    },
    {
      content: "The difference in quality and performance between UNEOM's industrial workwear and our previous supplier is remarkable. Their flame-resistant uniforms have successfully protected our workers during two significant incidents.",
      author: "Dr. Khalid Al-Zahrani",
      position: "HSE Department Head",
      company: "Yanbu Petrochemical Industries",
      image: "/images/avatar-placeholder.jpg",
      logo: "/images/logos/placeholder-logo.png"
    }
  ];
  
  // Statistics data
  const statistics = [
    {
      value: "97%",
      label: "Saudi industries report improved safety with UNEOM workwear",
      icon: <FaShieldAlt className="h-10 w-10 text-primary-600" />
    },
    {
      value: "3x",
      label: "Longer durability than standard industrial uniforms",
      icon: <FaTachometerAlt className="h-10 w-10 text-primary-600" />
    },
    {
      value: "35%",
      label: "Average reduction in heat-related incidents",
      icon: <FaTemperatureHigh className="h-10 w-10 text-primary-600" />
    },
    {
      value: "24/7",
      label: "Technical support for Saudi industrial clients",
      icon: <FaUserCog className="h-10 w-10 text-primary-600" />
    }
  ];
  
  // Sub-Industry data
  const subIndustries = [
    {
      id: "heavy-industrial",
      title: "Uniform Solutions for Heavy Industry",
      description: "UNEOM provides robust and highly durable workwear specifically designed for Saudi Arabia's demanding heavy industry sector, including construction, metal fabrication, and large-scale manufacturing. Our uniforms prioritize safety, resilience against wear and tear, and comfort in challenging physical environments.",
      keyChallenges: [
        "Extreme physical stress and abrasion",
        "Requirement for high-visibility in complex sites",
        "Protection against impact and potential hazards",
        "Comfort during physically demanding tasks"
      ],
      relevantProducts: ["industrial-coverall-pro", "hi-vis-safety-uniform"],
      image: "/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg"
    },
    {
      id: "petrochemical",
      title: "Specialized Uniforms for the Petrochemical Sector",
      description: "Safety is paramount in the petrochemical industry. We offer advanced flame-resistant (FR) and chemical-resistant uniforms that meet stringent international and Saudi safety standards (like NFPA, ISO, SASO), ensuring maximum protection for workers in refineries, processing plants, and labs.",
      keyChallenges: [
        "Risk of flash fire and thermal hazards",
        "Exposure to chemicals and hazardous materials",
        "Need for anti-static properties",
        "Compliance with strict safety regulations"
      ],
      relevantProducts: ["flame-resistant-workwear", "industrial-coverall-pro"],
      image: "/images/industries/manufacturing/manufacturing_uniform_perpare.jpg"
    },
    {
      id: "food-processing",
      title: "Hygienic Uniforms for Food Processing",
      description: "UNEOM supplies hygienic, easy-to-clean, and durable uniforms designed for Saudi Arabia's food and beverage manufacturing sector. Our workwear meets food safety standards, preventing contamination while ensuring employee comfort and professional appearance in production lines, packaging, and quality control.",
      keyChallenges: [
        "Maintaining strict hygiene standards",
        "Preventing cross-contamination",
        "Resistance to food-based stains and frequent washing",
        "Comfort in varying temperature environments (cold storage/hot kitchens)"
      ],
      relevantProducts: [],
      image: "/images/industries/manufacturing/manufacturing_uniform_basic.jpg"
    }
  ];
  
  // Page layout with animation components
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14">
        {/* ... Background elements ... */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <SectionHeading 
              subtitle="Premium-quality uniforms tailored for the manufacturing industry in Saudi Arabia" 
              centered={false}
              as="h1"
            >
              Industrial Manufacturing Uniforms
            </SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              UNEOM specializes in providing durable, safe, and comfortable workwear designed for the unique demands of Saudi Arabia's diverse manufacturing sector.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="#sub-industries" variant="primary">Explore Solutions</Button>
              <Button onClick={handleWhatsAppInquiry} variant="outline">Get Expert Advice <span aria-hidden="true">→</span></Button>
            </div>
          </motion.div>
          <motion.div 
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
             <Image
                src="/images/industries/manufacturing/manufacturing_uniform_overview.jpg"
                alt="Manufacturing uniforms overview in Saudi Arabia"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
          </motion.div>
        </div>
      </section>
      
      {/* Breadcrumbs - CORRECTED PROP NAME */}
      <Container className="my-6">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' }, 
          { label: 'Industries', href: '/industries' }, 
          { label: 'Manufacturing', href: '/industries/manufacturing' }
        ]} />
      </Container>
      
      {/* Why Choose UNEOM Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            subtitle="Tailored uniform solutions for Saudi Arabia's manufacturing powerhouses" 
            centered
          >
            Why Choose UNEOM for Manufacturing Uniforms?
          </SectionHeading>
          <motion.div 
            className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: <FaHardHat className="h-8 w-8 text-white" />, title: 'Industry Specialization', description: 'Deep understanding of manufacturing needs in KSA.' },
              { icon: <FaShieldAlt className="h-8 w-8 text-white" />, title: 'Uncompromising Safety', description: 'Certified FR, chemical-resistant, and high-vis options.' },
              { icon: <FaTemperatureHigh className="h-8 w-8 text-white" />, title: 'Climate Adapted', description: 'Engineered for comfort and performance in extreme heat.' },
              { icon: <FaTshirt className="h-8 w-8 text-white" />, title: 'Superior Durability', description: 'Built to withstand rigorous industrial environments.' },
              { icon: <FaCertificate className="h-8 w-8 text-white" />, title: 'Compliance Guaranteed', description: 'Meeting SASO, ISO, NFPA, and other key standards.' },
              { icon: <FaGlobeAsia className="h-8 w-8 text-white" />, title: 'Saudi Focused Service', description: 'Dedicated support and logistics across the Kingdom.' },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
           <SectionHeading centered> 
            Key Benefits of UNEOM Uniforms 
           </SectionHeading>
           <motion.div 
              className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
           >
              {[
                { icon: <FaUserShield className="h-10 w-10 text-primary-600" />, title: 'Enhanced Worker Safety', description: 'Reduce workplace accidents with certified protective gear designed for specific hazards like heat, fire, chemicals, and low visibility.' },
                { icon: <FaChartLine className="h-10 w-10 text-primary-600" />, title: 'Increased Productivity', description: 'Comfortable, well-fitting uniforms improve focus and efficiency, especially in demanding Saudi climate conditions.' },
                { icon: <FaIndustry className="h-10 w-10 text-primary-600" />, title: 'Professional Brand Image', description: 'Project a unified, professional image that builds trust with clients and boosts employee morale.' },
                { icon: <FaLock className="h-10 w-10 text-primary-600" />, title: 'Long-Term Cost Savings', description: 'Durable materials and construction mean longer uniform life, reducing replacement frequency and overall costs.' },
              ].map((benefit, index) => (
                 <motion.div key={index} variants={fadeInUp} className="flex gap-x-6">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-primary-100">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-gray-900">{benefit.title}</h3>
                      <p className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
              ))}
           </motion.div>
        </Container>
      </section>
      
      {/* Sub-Industry Sections */}
      <div id="sub-industries">
        {subIndustries.map((subIndustry, index) => (
          <section 
            key={subIndustry.id} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}`}
          >
            <Container>
              <motion.div 
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Image */}
                <motion.div variants={index % 2 === 0 ? fadeInLeft : fadeInRight} className={`rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <Image 
                    src={subIndustry.image || '/images/default-placeholder.jpg'} 
                    alt={subIndustry.title} 
                    width={600} 
                    height={450} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                {/* Content */}
                <motion.div variants={index % 2 === 0 ? fadeInRight : fadeInLeft} className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <SectionHeading centered={false}>
                    {subIndustry.title}
                  </SectionHeading>
                  <p className="mt-4 text-lg text-gray-600 mb-6">
                    {subIndustry.description}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Challenges Addressed:</h4>
                  <ul className="space-y-2 mb-6">
                    {subIndustry.keyChallenges.map((challenge, cIndex) => (
                      <li key={cIndex} className="flex items-start">
                        <FaCheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                  {subIndustry.relevantProducts.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Relevant Uniform Solutions:</h4>
                      <div className="flex flex-wrap gap-4">
                        {subIndustry.relevantProducts.map(productId => {
                          const product = products.find(p => p.id === productId);
                          return product ? (
                            <Link key={product.id} href={product.href} legacyBehavior>
                              <a className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                {product.name}
                                <FaArrowRight className="ml-2 h-4 w-4" />
                              </a>
                            </Link>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </Container>
          </section>
        ))}
      </div>
      
      {/* Featured Industrial Uniforms Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            subtitle="Explore our specialized workwear designed for manufacturing environments" 
            centered
          >
            Featured Industrial Uniforms
          </SectionHeading>
          <motion.div 
              className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} locale={locale} /> 
              ))}
          </motion.div>
           <div className="mt-12 text-center">
             <Button 
               href="/shop/industrial-uniforms"
               variant="outline"
               className="flex items-center gap-2 mx-auto"
             >
               View All Industrial Uniforms <FaAngleRight />
             </Button>
           </div>
        </Container>
      </section>
      
      {/* Advanced Technologies Section */}
      <section className="py-16 bg-blue-50/50">
        <Container>
           <SectionHeading 
             subtitle="Leveraging innovation for superior uniform performance and comfort" 
             centered
           >
             Advanced Technologies & Materials
           </SectionHeading>
           <motion.div 
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
           >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
           </motion.div>
        </Container>
      </section>
      
      {/* Success Stories Section - Passing adjusted testimonials data */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading 
            subtitle="See how we've helped Saudi manufacturing leaders enhance safety and image" 
            centered 
          >
            Success Stories & Client Testimonials 
          </SectionHeading>
          <motion.div 
            className="mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TestimonialCarousel testimonials={testimonials} locale={locale}/>
          </motion.div>
        </Container>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <Container>
          <SectionHeading centered className="text-white"> 
            UNEOM Manufacturing Impact: By the Numbers 
          </SectionHeading>
          <motion.dl 
            className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 text-center sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {statistics.map((stat, index) => (
               <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                   {stat.icon}
                 </div>
                 <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.label}</dt>
                 <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
               </motion.div>
            ))}
          </motion.dl>
        </Container>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-neutral-100">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
             <SectionHeading centered>
              Ready to Equip Your Manufacturing Workforce?
             </SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact UNEOM today for a personalized consultation and discover how our specialized industrial uniforms can enhance safety, productivity, and your brand image in Saudi Arabia.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={handleWhatsAppInquiry} variant="primary" size="lg">Request a Consultation</Button>
              <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 