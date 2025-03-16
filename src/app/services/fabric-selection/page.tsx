'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { motion } from 'framer-motion';
import { Poppins, Inter } from 'next/font/google';

// Define the fonts
const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
});

const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const FabricSelectionPage = () => {
  const locale = 'en';
  
  // Process Steps
  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'We meet with your team to understand your specific needs, industry requirements, and brand identity',
      icon: '🤝',
    },
    {
      title: 'Needs Analysis',
      description: 'Our fabric experts analyze your specific requirements, including climate adaptation, functional needs, and compliance standards',
      icon: '🔍',
    },
    {
      title: 'Sample Selection',
      description: 'Based on your requirements, we present a curated selection of appropriate fabric samples for evaluation',
      icon: '👕',
    },
    {
      title: 'Fabric Testing',
      description: 'Selected fabrics undergo rigorous testing to ensure they meet performance standards in real-world conditions',
      icon: '⚗️',
    },
    {
      title: 'Final Recommendations',
      description: 'We provide detailed recommendations along with comprehensive fabric specifications and care instructions',
      icon: '📋',
    },
  ];
  
  // Fabric Types
  const fabricTypes = [
    {
      name: 'Cotton Blends',
      description: 'Optimal balance of natural comfort and durability, ideal for everyday professional uniforms in Saudi Arabia\'s climate.',
      benefits: [
        'Natural breathability',
        'Excellent moisture absorption',
        'Soft and comfortable feel',
        'Durable with proper care',
        'Good drape and appearance'
      ],
      applications: ['Corporate office uniforms', 'Hospitality staff attire', 'Healthcare uniforms', 'School uniforms'],
      image: '/images/fabric-cotton-blends.webp',
    },
    {
      name: 'Polyester Performance Fabrics',
      description: 'Engineered synthetic fabrics that deliver exceptional durability, wrinkle resistance, and color retention.',
      benefits: [
        'Superior wrinkle resistance',
        'Excellent color retention',
        'Quick drying properties',
        'High durability',
        'Shape retention'
      ],
      applications: ['Formal business attire', 'Front desk staff', 'Security uniforms', 'Airline staff uniforms'],
      image: '/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg',
    },
    {
      name: 'Waterproof & Weather-Resistant Fabrics',
      description: 'Specialized fabrics designed to protect against rain, wind, and harsh weather conditions while maintaining comfort.',
      benefits: [
        'Water and wind protection',
        'Breathable membranes',
        'Durable water repellency',
        'Lightweight protection',
        'Adaptable to weather changes'
      ],
      applications: ['Outdoor security personnel', 'Delivery staff', 'Facilities management', 'Landscaping teams'],
      image: '/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg',
    },
    {
      name: 'Fire-Resistant & Protective Fabrics',
      description: 'Specialized fabrics engineered to protect wearers in hazardous environments, meeting rigorous safety standards.',
      benefits: [
        'Flame and fire resistance',
        'Compliance with safety standards',
        'Protection from workplace hazards',
        'Durable performance',
        'Balanced protection and comfort'
      ],
      applications: ['Industrial settings', 'Oil and gas personnel', 'Kitchen staff', 'Electrical workers'],
      image: '/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg',
    },
  ];
  
  // Fabric Technologies
  const fabricTechnologies = [
    {
      name: 'UV Protection',
      description: 'Fabrics with built-in UPF (Ultraviolet Protection Factor) that blocks harmful UV rays',
      icon: '☀️',
    },
    {
      name: 'Antimicrobial Treatment',
      description: 'Technology that inhibits the growth of bacteria and microorganisms on fabric surfaces',
      icon: '🛡️',
    },
    {
      name: 'Stain Resistance',
      description: 'Treatments that repel liquids and prevent stains from setting into fabric fibers',
      icon: '💧',
    },
    {
      name: 'Stretch Technology',
      description: 'Fabrics engineered with elastane or mechanical stretch for improved mobility and comfort',
      icon: '🔄',
    },
    {
      name: 'Temperature Control',
      description: 'Advanced fabrics that help regulate body temperature in varying environmental conditions',
      icon: '🌡️',
    },
    {
      name: 'Quick-Dry Treatment',
      description: 'Fabrics designed to wick moisture away from the body and dry rapidly',
      icon: '💨',
    },
  ];
  
  // Service Features
  const serviceFeatures = [
    {
      title: 'Specialized Expertise',
      description: 'Access to fabric specialists with extensive knowledge of textile properties, performance characteristics, and industry applications',
      icon: '👔',
    },
    {
      title: 'Saudi Climate Understanding',
      description: 'Expert knowledge of how different fabrics perform in Saudi Arabia\'s unique climate conditions, from intense heat to coastal humidity',
      icon: '☀️',
    },
    {
      title: 'Quality Testing',
      description: 'Comprehensive fabric testing for durability, comfort, and performance under real-world conditions before final selection',
      icon: '🔍',
    },
    {
      title: 'Budget Compliance',
      description: 'Fabric recommendations that balance performance requirements with cost considerations to meet your budget objectives',
      icon: '💰',
    },
  ];

  return (
    <div className={`${poppinsFont.variable} ${interFont.variable}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/fabric-cotton-blends.webp"
            alt="Professional Fabric Selection Service"
            fill
            className="object-cover"
          />
        </div>
        
        <Container>
          <Breadcrumbs locale={locale} className="mb-8 text-white/80" />
          
          <div className="flex flex-col md:flex-row gap-12 relative z-10">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className={`${poppinsFont.className} text-3xl md:text-5xl font-bold mb-6`}>
                  Professional Fabric Selection Service
                </h1>
                <p className={`${interFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                  Expert consultation to identify the ideal fabrics for your professional uniforms. We match performance characteristics with your specific industry requirements, environmental conditions, and brand identity.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    href="/quote?service=fabric-selection" 
                    variant="secondary" 
                    size="lg"
                  >
                    Request Free Consultation
                  </Button>
                  <Button 
                    href="#fabric-types" 
                    variant="outline" 
                    size="lg"
                  >
                    Explore Fabric Types
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <h2 className={`${poppinsFont.className} text-xl font-bold mb-4`}>Why Fabric Selection Matters</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Directly impacts wearer comfort and productivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Determines uniform durability and lifespan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Affects maintenance requirements and costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Influences professional appearance and brand image</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Essential for climate adaptation in Saudi Arabia</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <SectionHeading>Expert Fabric Consultation for Optimal Uniform Performance</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                At UNEOM, we understand that selecting the right fabric is the foundation of a successful uniform program. Our fabric selection service provides expert guidance to ensure your uniforms meet the specific requirements of your industry, work environment, and brand standards.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With thousands of fabric options available, choosing the optimal material can be overwhelming. Our specialized team removes the guesswork by analyzing your specific needs and recommending fabrics that deliver the perfect balance of comfort, functionality, durability, and appearance for your organization.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Saudi Climate Expertise</h3>
                <p className="text-gray-700">
                  Our fabric recommendations are specifically tailored for Saudi Arabia's unique climate conditions, ensuring your uniforms remain comfortable and professional throughout the year, from intense summer heat to air-conditioned indoor environments.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                  alt="Fabric selection consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Process Steps Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Our Fabric Selection Process</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a structured approach to identify and recommend the ideal fabrics for your uniform requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {index + 1}
                  </div>
                  <div className="bg-primary-100 text-primary-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl absolute -bottom-2 -right-2">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-700 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Fabric Types Section */}
      <section id="fabric-types" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Main Fabric Types</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a wide range of fabric options, each with specific performance characteristics suited to different uniform requirements.
            </p>
          </div>
          
          <div className="space-y-16">
            {fabricTypes.map((fabric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-2/5">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={fabric.image}
                      alt={fabric.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-4">{fabric.name}</h3>
                  <p className="text-gray-700 mb-6">{fabric.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {fabric.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 flex-shrink-0">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Common Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {fabric.applications.map((application, i) => (
                        <span key={i} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Fabric Technologies Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Specialized Fabric Technologies</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Beyond basic fabric types, we offer access to advanced fabric technologies that enhance performance for specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricTechnologies.map((technology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors"
              >
                <div className="text-3xl mb-4">{technology.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{technology.name}</h3>
                <p className="text-gray-600">{technology.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-900 text-white rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
                alt="Advanced fabric technologies"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4">Custom Fabric Development</h2>
              <p className="text-white/90 mb-6">
                For organizations with specialized requirements, we offer custom fabric development services. Our team works with leading textile mills to create proprietary fabrics that meet your exact specifications, from performance characteristics to custom colors.
              </p>
              <Button
                href="/quote?service=fabric-selection&custom=true"
                variant="secondary"
                size="lg"
              >
                Inquire About Custom Fabric Development
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Service Features Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Features of Our Fabric Selection Service</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              What sets our fabric selection service apart from standard textile suppliers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-5 p-6 bg-gray-50 rounded-xl"
              >
                <div className="bg-primary-100 text-primary-800 w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Swatch Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-xl overflow-hidden p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <SectionHeading>Extensive Fabric Library</SectionHeading>
                <p className="text-lg text-gray-700 mb-6">
                  Our fabric selection service gives you access to UNEOM's extensive fabric library, featuring thousands of options from leading textile mills around the world.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  During your consultation, our fabric specialists will present carefully curated selections based on your specific requirements, allowing you to evaluate options firsthand through fabric swatches and samples.
                </p>
                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">Cotton Blends</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Performance Polyester</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Stretch Fabrics</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Antimicrobial</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Flame Resistant</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Moisture Wicking</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">And Many More...</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="aspect-square bg-blue-200 rounded-lg"></div>
                    <div className="aspect-square bg-gray-200 rounded-lg"></div>
                    <div className="aspect-square bg-amber-200 rounded-lg"></div>
                    <div className="aspect-square bg-green-200 rounded-lg"></div>
                    <div className="aspect-square bg-red-200 rounded-lg"></div>
                    <div className="aspect-square bg-indigo-200 rounded-lg"></div>
                    <div className="aspect-square bg-yellow-200 rounded-lg"></div>
                    <div className="aspect-square bg-purple-200 rounded-lg"></div>
                    <div className="aspect-square bg-pink-200 rounded-lg"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-900">
                        We add new fabrics to our library regularly to keep pace with textile innovations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <Image
                  src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                  alt="Client testimonial about fabric selection service"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-amber-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                  </svg>
                </div>
                <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                  UNEOM's fabric selection service was a game-changer for our hotel chain. Their experts recommended moisture-wicking, stain-resistant fabrics that have dramatically improved our staff comfort and uniform appearance. The fabrics they selected have performed exceptionally well in our coastal location's humid climate.
                </p>
                <div>
                  <p className="font-bold text-gray-900">Khalid Al-Mansour</p>
                  <p className="text-gray-600">Operations Director, Coastal Luxury Hotels</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose the Right Fabrics for Your Uniforms</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our fabric specialists today for a free consultation to discuss your uniform fabric requirements and discover the ideal materials for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quote?service=fabric-selection" 
                variant="secondary" 
                size="lg"
              >
                Request Free Consultation
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FabricSelectionPage; 