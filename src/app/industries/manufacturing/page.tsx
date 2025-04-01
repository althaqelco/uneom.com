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
      id: "jubail-industrial",
      quote: "UNEOM transformed our safety program with industrial uniforms that not only exceed international standards but are also exceptionally comfortable in Saudi Arabia's high-temperature industrial environments.",
      author: "Eng. Mohammed Al-Otaibi",
      position: "Safety & Compliance Director",
      company: "Jubail Industrial Development Corporation",
      image: "/images/avatar-placeholder.jpg"
    },
    {
      id: "saudi-manufacturing",
      quote: "After implementing UNEOM's customized industrial uniform program, we've seen a measurable 32% decrease in heat-related incidents and a 28% increase in productivity.",
      author: "Fahad Al-Harbi",
      position: "Operations Manager",
      company: "Saudi Manufacturing Industries",
      image: "/images/avatar-placeholder.jpg"
    },
    {
      id: "yanbu-petrochemical",
      quote: "The difference in quality and performance between UNEOM's industrial workwear and our previous supplier is remarkable. Their flame-resistant uniforms have successfully protected our workers during two significant incidents.",
      author: "Dr. Khalid Al-Zahrani",
      position: "HSE Department Head",
      company: "Yanbu Petrochemical Industries",
      image: "/images/avatar-placeholder.jpg"
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
  
  // Page layout with animation components
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-blue-50 to-slate-100">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Industrial Manufacturing Uniforms
            </h1>
            <p className="text-xl text-blue-700">
              Premium-quality uniforms tailored for the manufacturing industry in Saudi Arabia
            </p>
          </motion.div>
        </Container>
      </section>
      
      {/* Introduction Section */}
      <Container className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="md:w-1/2"
          >
            <SectionHeading
              title="Industrial Excellence Through Advanced Workwear"
              subtitle="Redefining Saudi Manufacturing Safety & Performance"
              alignment="left"
            />
            
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                In Saudi Arabia's rapidly expanding industrial landscape under Vision 2030, premium-quality workwear isn't merely about compliance—it's the cornerstone of workplace safety, operational efficiency, and manufacturing excellence.
              </p>
              <p>
                UNEOM leads the Kingdom's industrial uniform sector by delivering meticulously engineered workwear solutions tailored specifically for Saudi Arabia's unique industrial environments, extreme climate conditions, and cultural considerations.
              </p>
              <p>
                Our comprehensive industrial collection features advanced flame-resistant coveralls, high-visibility safety garments, chemical-protective clothing, and specialized technical workwear—all constructed using cutting-edge fabrics and technologies.
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                href="#products"
                variant="primary"
                className="flex items-center gap-2"
              >
                Explore Our Products <FaAngleRight />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="md:w-1/2"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/industries/manufacturing/manufacturing_uniform_main.jpg"
                alt="Industrial manufacturing uniforms in Saudi Arabia"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <div className="font-bold text-lg mb-1">SASO & International Certified</div>
                  <p className="text-sm opacity-90">Exceeding all Saudi and global safety standards</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Key Benefits Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Advanced Technologies for Saudi Industrial Environments"
            subtitle="Engineered for Performance in Extreme Conditions"
            alignment="center"
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {tech.icon}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
      
      {/* Products Section */}
      <div id="products" className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Premium Industrial Uniforms for Saudi Manufacturing"
            subtitle="Safety-Certified Solutions for Every Industrial Application"
            alignment="center"
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                variants={scaleIn}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="font-medium text-gray-700 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-lg font-bold text-primary-700 mb-5">
                    {product.price}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      href={product.href}
                      className="flex-1"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => handleProductInquiry(product.name.split('|')[0].trim())}
                      variant="outline"
                      className="flex-1 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp /> Inquire
                    </Button>
                  </div>
                </div>
              </motion.div>
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
      </div>
      
      {/* Statistics Section */}
      <div className="bg-primary-900 text-white py-16">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statistics.map((stat, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="Trusted by Leading Saudi Industrial Companies"
            subtitle="Real Results in Saudi Manufacturing Environments"
            alignment="center"
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 relative"
          >
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
              <div className="text-5xl text-primary-200 mb-6">"</div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                {testimonials[activeTestimonial].quote}
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonials[activeTestimonial].image} 
                    alt={testimonials[activeTestimonial].author}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[activeTestimonial].author}</div>
                  <div className="text-gray-600">{testimonials[activeTestimonial].position}</div>
                  <div className="text-primary-600 text-sm">{testimonials[activeTestimonial].company}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
      
      {/* Blog Section */}
      <div className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title="Industrial Uniform Insights"
            subtitle="Latest Trends in Saudi Manufacturing Workwear"
            alignment="center"
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={post.link} className="block">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link href={post.link} className="block">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  
                  <Link href={post.link} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                    Read More <FaAngleRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button 
              href="/blog?category=industrial"
              variant="outline"
              className="flex items-center gap-2 mx-auto"
            >
              View All Industrial Articles <FaAngleRight />
            </Button>
          </div>
        </Container>
      </div>
      
      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image 
            src="/images/industries/manufacturing/manufacturing_uniform_full.jpg" 
            alt="Industrial Uniforms" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Elevate Your Industrial Safety & Workforce Performance
              </h2>
              
              <p className="text-xl opacity-90 mb-8">
                Contact our Saudi industrial workwear specialists today for a comprehensive uniform program tailored to your facility's unique requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={handleWhatsAppInquiry}
                  className="flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> Start WhatsApp Consultation
                </Button>
                
                <Button
                  href="/quote?industry=manufacturing"
                  variant="outline"
                  className="text-primary-700 bg-white hover:bg-gray-100"
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Featured Applications Section */}
      <div className="py-16 md:py-24 bg-gray-50">
        <Container>
          <SectionHeading
            title="Industrial Applications"
            subtitle="Specialized Uniforms for Every Manufacturing Environment"
            alignment="center"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-56">
                <Image 
                  src="/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg"
                  alt="Heavy Industry Uniforms"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Heavy Industry</h3>
                <p className="text-gray-600 mb-4">High-durability workwear designed for the most demanding industrial environments with enhanced protection against heat, impacts, and chemicals.</p>
                <Button href="/industries/manufacturing/heavy-industry" variant="outline" className="w-full">
                  Explore Solutions
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-56">
                <Image 
                  src="/images/industries/manufacturing/manufacturing_uniform_perpare.jpg"
                  alt="Petrochemical Uniforms"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Petrochemical</h3>
                <p className="text-gray-600 mb-4">Specialized flame-resistant and chemical-protective clothing systems engineered specifically for oil & gas and petrochemical facilities.</p>
                <Button href="/industries/manufacturing/petrochemical" variant="outline" className="w-full">
                  Explore Solutions
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-56">
                <Image 
                  src="/images/industries/manufacturing/manufacturing_uniform_basic.jpg"
                  alt="Food Processing Uniforms"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Food Processing</h3>
                <p className="text-gray-600 mb-4">Hygienic and antimicrobial workwear solutions that meet all food safety standards while providing comfort and durability in processing environments.</p>
                <Button href="/industries/manufacturing/food-processing" variant="outline" className="w-full">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
} 