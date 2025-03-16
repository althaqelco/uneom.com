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

const QualityAssurancePage = () => {
  const locale = 'en';
  
  // Quality Assurance Processes
  const qaProcesses = [
    {
      title: 'Material Inspection',
      description: 'Rigorous testing of all fabrics and materials before production to ensure they meet our quality standards',
      icon: '🧵',
    },
    {
      title: 'Production Monitoring',
      description: 'Continuous oversight of the manufacturing process with quality checks at each production stage',
      icon: '👁️',
    },
    {
      title: 'Sampling & Testing',
      description: 'Regular random sampling and comprehensive testing of uniform components throughout production',
      icon: '🔍',
    },
    {
      title: 'Final Inspection',
      description: 'Thorough examination of completed uniforms for defects, consistency, and adherence to specifications',
      icon: '✅',
    },
    {
      title: 'Performance Verification',
      description: 'Testing of finished uniforms under simulated real-world conditions to ensure they meet performance requirements',
      icon: '⚡',
    },
    {
      title: 'Customer Feedback Integration',
      description: 'Systematic incorporation of customer feedback into our quality improvement processes',
      icon: '💬',
    },
  ];
  
  // Quality Standards
  const qualityStandards = [
    {
      name: 'ISO 9001:2015',
      description: 'International standard for quality management systems, ensuring consistent processes and continuous improvement.',
      coverageAreas: [
        'Documentation and record-keeping',
        'Management commitment',
        'Resource management',
        'Product realization',
        'Measurement, analysis, and improvement'
      ],
      image: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg',
    },
    {
      name: 'OEKO-TEX® Standard 100',
      description: 'Certification system for raw, semi-finished, and finished textile products, ensuring they are free from harmful substances.',
      coverageAreas: [
        'Testing for harmful substances',
        'Chemical safety',
        'Environmental considerations',
        'Human-ecological requirements',
        'Ongoing verification'
      ],
      image: '/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg',
    },
    {
      name: 'SASO Quality Mark',
      description: 'Saudi quality certification demonstrating compliance with the Kingdom\'s stringent quality and safety requirements.',
      coverageAreas: [
        'Saudi market-specific standards',
        'Local regulatory compliance',
        'Product safety requirements',
        'Performance criteria',
        'Consumer protection'
      ],
      image: '/images/arabic-businessman-in-the-middle-east-SBI-300984430.jpg',
    },
  ];
  
  // Testing Methods
  const testingMethods = [
    {
      name: 'Colorfastness Testing',
      description: 'Evaluation of color retention after washing, exposure to light, perspiration, and rubbing',
      icon: '🎨',
    },
    {
      name: 'Fabric Durability Testing',
      description: 'Assessment of tensile strength, tear resistance, abrasion resistance, and pilling performance',
      icon: '💪',
    },
    {
      name: 'Dimensional Stability Testing',
      description: 'Measurement of shrinkage and shape retention after washing and drying cycles',
      icon: '📏',
    },
    {
      name: 'Climate Performance Testing',
      description: 'Evaluation of fabric performance in Saudi Arabia\'s unique climate conditions, including heat resistance and moisture management',
      icon: '🌡️',
    },
    {
      name: 'Seam Strength Testing',
      description: 'Assessment of seam integrity and strength under various stress conditions',
      icon: '🧷',
    },
    {
      name: 'Functional Testing',
      description: 'Verification of specialized features like water resistance, flame retardancy, and antimicrobial properties',
      icon: '🛡️',
    },
  ];
  
  // Program Benefits
  const qaBenefits = [
    {
      title: 'Consistent Quality',
      description: 'Reliable, high-quality uniforms that maintain their appearance and performance throughout their lifecycle',
      icon: '⭐',
    },
    {
      title: 'Extended Uniform Lifespan',
      description: 'Longer-lasting garments that reduce replacement frequency and total ownership costs',
      icon: '⏱️',
    },
    {
      title: 'Enhanced Professional Image',
      description: 'Impeccable uniforms that present a consistently professional appearance for your organization',
      icon: '👔',
    },
    {
      title: 'Improved Employee Satisfaction',
      description: 'Comfortable, well-fitting uniforms that enhance employee morale and productivity',
      icon: '😊',
    },
  ];

  return (
    <div className={`${poppinsFont.variable} ${interFont.variable}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg"
            alt="Quality Assurance for Professional Uniforms"
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
                  Quality Assurance for Professional Uniforms
                </h1>
                <p className={`${interFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                  Comprehensive quality control processes that ensure every uniform meets our exacting standards. From material selection to final delivery, we maintain rigorous quality at every step.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    href="/quote?service=quality-assurance" 
                    variant="secondary" 
                    size="lg"
                  >
                    Request Quality Consultation
                  </Button>
                  <Button 
                    href="#standards" 
                    variant="outline" 
                    size="lg"
                  >
                    Explore Our Standards
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
                <h2 className={`${poppinsFont.className} text-xl font-bold mb-4`}>Why Quality Assurance Matters</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Ensures consistent appearance across all uniform items</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Extends uniform lifespan, reducing total ownership costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Improves employee comfort and satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Ensures uniforms perform as expected in Saudi Arabia's climate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Prevents defects that could impact your professional image</span>
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
              <SectionHeading>Our Commitment to Excellence</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                At UNEOM, quality is not just a department – it's a core value that permeates every aspect of our operations. Our comprehensive quality assurance program ensures that every uniform we produce meets the highest standards of craftsmanship, durability, and performance.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From careful selection of raw materials to rigorous testing of finished products, our quality control processes are designed to identify and prevent defects before they reach you. We maintain strict adherence to international quality standards while adapting our testing to address the unique challenges of Saudi Arabia's climate and working conditions.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Quality by the Numbers</h3>
                <p className="text-gray-700">
                  Our extensive quality control system includes over 50 inspection points throughout the production process, with less than 0.5% defect rate across all uniform categories. We conduct more than 15 different performance tests on each fabric type to ensure optimal performance in Saudi working environments.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
                  alt="Quality assurance in uniform production"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* QA Processes Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Our Quality Assurance Process</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We implement a comprehensive quality control system that covers every aspect of uniform production, from raw materials to final delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qaProcesses.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="bg-primary-100 text-primary-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
                    {process.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-700">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Quality Standards Section */}
      <section id="standards" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Quality Standards & Certifications</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We adhere to rigorous international and local quality standards, ensuring our uniforms meet or exceed industry requirements.
            </p>
          </div>
          
          <div className="space-y-16">
            {qualityStandards.map((standard, index) => (
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
                      src={standard.image}
                      alt={standard.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-4">{standard.name}</h3>
                  <p className="text-gray-700 mb-6">{standard.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Coverage Areas:</h4>
                    <ul className="space-y-1">
                      {standard.coverageAreas.map((area, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 flex-shrink-0">•</span>
                          <span>{area}</span>
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
      
      {/* Testing Methods Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Comprehensive Testing Methods</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We employ a wide range of testing methodologies to ensure our uniforms perform optimally in real-world conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors"
              >
                <div className="text-3xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-900 text-white rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg"
                alt="Advanced testing equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4">State-of-the-Art Testing Facilities</h2>
              <p className="text-white/90 mb-6">
                Our in-house testing laboratory is equipped with advanced technology to simulate real-world conditions and verify uniform performance. From climate chambers that recreate Saudi Arabia's extreme temperatures to specialized equipment for measuring fabric durability, our facilities ensure that every uniform is thoroughly tested before delivery.
              </p>
              <Button
                href="/quote?service=quality-assurance&focus=testing"
                variant="secondary"
                size="lg"
              >
                Learn About Our Testing Process
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Benefits of Our Quality Assurance</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our rigorous quality control processes deliver significant advantages for your organization and employees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-5 p-6 bg-gray-50 rounded-xl"
              >
                <div className="bg-primary-100 text-primary-800 w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Quality Control Visual Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-xl overflow-hidden p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <SectionHeading>Our Quality Control Process</SectionHeading>
                <p className="text-lg text-gray-700 mb-6">
                  Our quality control process follows a systematic approach to ensure that every uniform meets our exacting standards before reaching our clients.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Incoming Material Inspection</h3>
                      <p className="text-gray-600">Testing of all fabrics and materials against our quality specifications</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-dashed border-primary-200 h-6 ml-5"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">In-Process Quality Checks</h3>
                      <p className="text-gray-600">Regular inspections during cutting, sewing, and assembly phases</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-dashed border-primary-200 h-6 ml-5"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Performance Testing</h3>
                      <p className="text-gray-600">Evaluation of finished uniforms for durability, comfort, and functionality</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-dashed border-primary-200 h-6 ml-5"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Final Inspection</h3>
                      <p className="text-gray-600">Comprehensive checks of completed uniforms before packaging</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-dashed border-primary-200 h-6 ml-5"></div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 text-primary-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Pre-Delivery Verification</h3>
                      <p className="text-gray-600">Final checks to ensure order accuracy and quality before shipping</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg"
                      alt="Quality control inspection"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                      </div>
                      <p className="font-medium text-gray-900">
                        Our inspection standards exceed industry averages, with up to 40% more quality checkpoints.
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
                  src="/images/portrait-of-an-arab-man-sheikh-SBI-300981247.jpg"
                  alt="Client testimonial about quality uniforms"
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
                  The quality of UNEOM's uniforms is exceptional. After switching to them for our hotel staff uniforms, we've seen a significant reduction in replacement costs and a marked improvement in appearance consistency. Their attention to detail and quality control processes ensure that every uniform we receive meets our exacting standards.
                </p>
                <div>
                  <p className="font-bold text-gray-900">Ibrahim Al-Ghamdi</p>
                  <p className="text-gray-600">Procurement Director, Luxury Hotels Group</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the UNEOM Quality Difference</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our quality assurance team today to discuss how our commitment to excellence can benefit your organization's uniform program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quote?service=quality-assurance" 
                variant="secondary" 
                size="lg"
              >
                Request Quality Consultation
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

export default QualityAssurancePage; 