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
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

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

const CorporateProgramsPage = () => {
  const locale = 'en';
  
  // Program Benefits
  const programBenefits = [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'Establish a unified and consistent brand image across all departments and locations',
      icon: '🏢',
    },
    {
      title: 'Simplified Management',
      description: 'Streamlined ordering, inventory control, and distribution processes',
      icon: '⚙️',
    },
    {
      title: 'Cost Efficiency',
      description: 'Volume discounts, optimized inventory, and reduced administrative overhead',
      icon: '💰',
    },
    {
      title: 'Quality Consistency',
      description: 'Standardized quality across all uniform items, ensuring all employees look equally professional',
      icon: '✓',
    },
    {
      title: 'Employee Satisfaction',
      description: 'Comfortable, functional, and professional uniforms that enhance employee pride and performance',
      icon: '😊',
    },
    {
      title: 'Compliance Assurance',
      description: 'Ensure all uniforms meet industry regulations and Saudi Arabian standards',
      icon: '📜',
    },
  ];
  
  // Program Components
  const programComponents = [
    {
      title: 'Needs Assessment',
      description: 'Comprehensive analysis of your organizational structure, brand identity, and uniform requirements',
      features: [
        'Department-specific requirements analysis',
        'Work environment evaluation',
        'Brand alignment consultation',
        'Budget planning assistance',
        'Timeline development'
      ],
      image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
    },
    {
      title: 'Custom Design & Development',
      description: 'Creation of uniform designs that reflect your brand while meeting functional requirements',
      features: [
        'Brand-aligned color palette selection',
        'Style development for different positions',
        'Fabric technology consultation',
        'Mockup creation and revision process',
        'Prototype development and testing'
      ],
      image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
    },
    {
      title: 'Implementation Strategy',
      description: 'Structured rollout plan tailored to your organization\'s size and requirements',
      features: [
        'Phased deployment planning',
        'Employee communication materials',
        'Sizing event coordination',
        'Distribution logistics',
        'Training for uniform policy compliance'
      ],
      image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
    },
    {
      title: 'Ongoing Management',
      description: 'Continuous support for your uniform program with regular evaluations and updates',
      features: [
        'Inventory management system',
        'Replacement ordering process',
        'New employee onboarding',
        'Periodic quality assessment',
        'Program optimization recommendations'
      ],
      image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    },
  ];

  // Program Process Steps
  const processSteps = [
    {
      title: 'Initial Consultation',
      description: 'We meet with your key stakeholders to understand your organization\'s structure, culture, and uniform needs',
      icon: '🤝',
    },
    {
      title: 'Needs Analysis',
      description: 'Our team conducts a thorough analysis of department-specific requirements, work environments, and branding guidelines',
      icon: '🔍',
    },
    {
      title: 'Program Design',
      description: 'We create a comprehensive uniform program with style guides, procurement processes, and management protocols',
      icon: '✏️',
    },
    {
      title: 'Sample Development',
      description: 'Prototype uniform items are created for approval, ensuring quality, fit, and alignment with your brand',
      icon: '👔',
    },
    {
      title: 'Implementation Plan',
      description: 'A detailed rollout strategy is developed, including measurement sessions, distribution logistics, and employee communication',
      icon: '📋',
    },
    {
      title: 'Program Launch',
      description: 'Coordinated distribution of uniforms with employee orientation and guidelines for care and usage',
      icon: '🚀',
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous management of your uniform program with regular evaluations and updates as needed',
      icon: '⚙️',
    },
  ];
  
  // Case Studies
  const caseStudies = [
    {
      title: 'National Bank Corporate Uniform Program',
      description: 'Implemented a multi-tier uniform program for 5,000+ employees across 120 branches throughout Saudi Arabia, resulting in 30% cost savings and improved brand recognition.',
      metrics: [
        '5,000+ employees outfitted',
        '120 branches covered',
        '30% cost reduction from previous program',
        '94% employee satisfaction rating'
      ],
      image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    },
    {
      title: 'Luxury Hospitality Chain Refresh',
      description: 'Redesigned and implemented new uniform program for a luxury hotel chain with 12 properties, creating a cohesive brand image while accommodating position-specific functionality.',
      metrics: [
        '2,800 staff members across 12 properties',
        '18 distinct position-specific designs',
        '40% improvement in uniform longevity',
        'Significant increase in guest satisfaction scores'
      ],
      image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    },
  ];

  return (
    <div className={`${poppinsFont.variable} ${interFont.variable}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
            alt="Corporate Uniform Programs"
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
                  Corporate Uniform Programs
                </h1>
                <p className={`${interFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                  Comprehensive uniform solutions designed to enhance your brand image, streamline management, and ensure consistency across your organization. From design to ongoing maintenance, we handle every aspect of your corporate uniform program.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    href="/quote?service=corporate-programs" 
                    variant="secondary" 
                    size="lg"
                  >
                    Request Program Consultation
                  </Button>
                  <Button 
                    href="#program-components" 
                    variant="outline" 
                    size="lg"
                  >
                    Explore Program Features
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
                <h2 className={`${poppinsFont.className} text-xl font-bold mb-4`}>Why Choose UNEOM Corporate Programs</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>End-to-end uniform program management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Tailored solutions for Saudi Arabian businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Significant cost savings through efficient management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Proven experience with major Saudi corporations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Dedicated program manager for your organization</span>
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
              <SectionHeading>Streamlined Uniform Management for Your Organization</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                UNEOM's Corporate Uniform Programs provide comprehensive solutions for organizations of all sizes across Saudi Arabia. We understand that managing uniforms for a large workforce can be challenging, time-consuming, and expensive when handled internally.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our managed uniform programs help you maintain a consistent professional image, simplify procurement processes, reduce administrative burden, and ensure cost-effective uniform management. From initial design to ongoing replenishment, we handle every aspect of your uniform program.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Program Success Metrics</h3>
                <p className="text-gray-700">
                  Our corporate clients experience an average of 28% reduction in uniform-related costs, 45% decrease in administrative time spent on uniform management, and 92% employee satisfaction with uniform comfort and functionality.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg"
                  alt="Corporate uniform program management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Key Benefits of Our Corporate Programs</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive uniform programs deliver multiple advantages for your organization, from brand enhancement to operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 text-primary-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Program Components Section */}
      <section id="program-components" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Corporate Program Components</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our corporate uniform programs include comprehensive components designed to address every aspect of uniform management.
            </p>
          </div>
          
          <div className="space-y-16">
            {programComponents.map((component, index) => (
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
                      src={component.image}
                      alt={component.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-4">{component.title}</h3>
                  <p className="text-gray-700 mb-6">{component.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {component.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Process Timeline Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Our Program Implementation Process</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a structured approach to develop and implement your corporate uniform program, ensuring a smooth transition and successful adoption.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-200"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="hidden md:block absolute left-1/2 top-5 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 z-10"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary-100 text-primary-800 w-10 h-10 rounded-full flex items-center justify-center text-xl md:hidden">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className={`hidden md:flex md:w-1/2 items-center justify-center ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                    <div className="bg-primary-100 text-primary-800 w-16 h-16 rounded-full flex items-center justify-center text-3xl">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Success Stories</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how our corporate uniform programs have helped leading Saudi organizations enhance their brand image and streamline operations.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      width={600}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10">
                    <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-700 mb-6">{caseStudy.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {caseStudy.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className="font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              href="/case-studies?category=corporate-programs" 
              variant="outline" 
              size="lg"
            >
              View More Case Studies
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Program Management Dashboard Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <SectionHeading>Advanced Program Management Tools</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                Our corporate uniform programs include access to UNEOM's advanced management dashboard, providing real-time visibility into your uniform program's performance and status.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Real-time Inventory Tracking</h3>
                    <p className="text-gray-600">Monitor current stock levels across all uniform items, sizes, and locations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Employee Allocation Tracking</h3>
                    <p className="text-gray-600">Track uniform distribution by department, location, and individual employee</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Budget Monitoring</h3>
                    <p className="text-gray-600">Review spending patterns and forecast future uniform expenses</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-600 p-1 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Automated Reordering</h3>
                    <p className="text-gray-600">Set inventory thresholds for automatic replenishment requests</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border-8 border-white">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="Corporate Uniform Program Management Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white text-lg font-medium">UNEOM Program Management Dashboard</p>
                  <p className="text-white/80">Real-time insights into your uniform program performance</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="bg-primary-900 rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative">
                <Image
                  src="/images/arabic-businessman-in-the-middle-east-SBI-300984430.jpg"
                  alt="Client testimonial about corporate uniform program"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-white">
                <div className="text-amber-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                  </svg>
                </div>
                <p className="text-xl md:text-2xl font-medium text-white mb-6">
                  UNEOM's corporate uniform program has transformed how we manage uniforms across our 28 branches. The implementation was smooth, and the ongoing management has reduced our administrative burden significantly. Their team consistently goes above and beyond to ensure our staff always looks professional.
                </p>
                <div>
                  <p className="font-bold text-white">Abdullah Al-Saud</p>
                  <p className="text-white/80">Operations Director, Al Rajhi Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about our corporate uniform programs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">What size organizations do you work with?</h3>
              <p className="text-gray-700">
                UNEOM corporate programs are scalable and designed to serve organizations of all sizes, from companies with 50 employees to large corporations with thousands of staff members across multiple locations in Saudi Arabia.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">How long does implementation typically take?</h3>
              <p className="text-gray-700">
                Implementation timelines vary based on your organization's size and complexity. A typical corporate program can be fully implemented within 2-3 months from initial consultation to full deployment. For large enterprises, we often recommend a phased implementation approach.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Can you accommodate organization-specific requirements?</h3>
              <p className="text-gray-700">
                Absolutely. Our corporate programs are fully customizable to meet your organization's specific needs, including department variations, climate considerations, religious requirements, and branding guidelines. We work closely with your team to ensure all requirements are met.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">How do you handle employee turnover?</h3>
              <p className="text-gray-700">
                Our programs include processes for onboarding new employees and collecting uniforms from departing staff. We maintain inventory buffers to accommodate new hires quickly, and our tracking system helps you manage uniform returns during offboarding procedures.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Uniform Management?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our corporate programs team today to discuss how we can streamline your uniform management, enhance your brand image, and reduce administrative overhead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quote?service=corporate-programs" 
                variant="secondary" 
                size="lg"
              >
                Request Program Consultation
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

export default CorporateProgramsPage; 