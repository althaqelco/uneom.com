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

const TechnicalFinishesPage = () => {
  const locale = 'en';
  
  // Technical Finishes Categories
  const finishCategories = [
    {
      title: 'Protective Finishes',
      description: 'Specialized treatments that enhance the protective qualities of uniform fabrics',
      icon: '🛡️',
    },
    {
      title: 'Performance Finishes',
      description: 'Treatments that improve the functional performance of fabrics in various conditions',
      icon: '⚡',
    },
    {
      title: 'Comfort Finishes',
      description: 'Applications that enhance wearer comfort and fabric feel',
      icon: '😊',
    },
    {
      title: 'Aesthetic Finishes',
      description: 'Treatments that improve fabric appearance and visual appeal',
      icon: '✨',
    },
  ];
  
  // Technical Finish Types
  const finishTypes = [
    {
      name: 'Water Repellent Finish',
      description: 'Advanced treatments that repel water and liquid spills while maintaining fabric breathability.',
      benefits: [
        'Protection from rain and liquid spills',
        'Maintains fabric breathability',
        'Preserves natural fabric feel',
        'Reduces staining and extends garment life'
      ],
      applications: ['Outdoor uniforms', 'Security personnel', 'Delivery staff', 'Healthcare uniforms'],
      image: '/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg',
    },
    {
      name: 'Stain Resistant Finish',
      description: 'Specialized treatments that prevent stains from setting into fabric fibers, making cleaning easier and maintaining uniform appearance.',
      benefits: [
        'Repels oil, water, and food-based stains',
        'Easier cleaning and stain removal',
        'Maintains professional appearance longer',
        'Reduces replacement frequency'
      ],
      applications: ['Food service uniforms', 'Hospitality staff', 'Healthcare garments', 'Office attire'],
      image: '/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg',
    },
    {
      name: 'UV Protection Finish',
      description: 'Treatments that block harmful ultraviolet rays, protecting both the wearer and preventing fabric degradation.',
      benefits: [
        'Protects wearer from harmful UV radiation',
        'Prevents fabric color fading',
        'Preserves fabric strength and integrity',
        'Extends uniform lifespan'
      ],
      applications: ['Outdoor workwear', 'Security personnel', 'Landscaping uniforms', 'Construction attire'],
      image: '/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg',
    },
    {
      name: 'Antimicrobial Finish',
      description: 'Specialized treatments that inhibit the growth of bacteria, fungi, and other microorganisms on fabric surfaces.',
      benefits: [
        'Reduces odor development',
        'Controls microbial growth',
        'Extends time between washes',
        'Improves hygiene in critical environments'
      ],
      applications: ['Healthcare uniforms', 'Food service attire', 'Hospitality staff', 'Fitness center staff'],
      image: '/images/uneom_antimicrobial_treatment.webp',
    },
    {
      name: 'Flame Retardant Finish',
      description: 'Treatments that reduce fabric flammability and slow the spread of flames in case of fire exposure.',
      benefits: [
        'Improves safety in high-risk environments',
        'Prevents rapid flame spread',
        'Provides critical reaction time in emergencies',
        'Meets safety regulations for specific industries'
      ],
      applications: ['Industrial workers', 'Kitchen staff', 'Oil and gas personnel', 'Electrical workers'],
      image: '/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg',
    },
    {
      name: 'Moisture Wicking Finish',
      description: 'Treatments that enhance the fabric\'s ability to move moisture away from the body, keeping the wearer dry and comfortable.',
      benefits: [
        'Improves comfort in hot environments',
        'Keeps skin dry during physical activity',
        'Reduces fabric clinging to skin',
        'Enhances overall uniform comfort'
      ],
      applications: ['Physical security uniforms', 'Kitchen staff', 'Outdoor workers', 'Fitness staff'],
      image: '/images/uneom_moisture_wicking.webp',
    },
  ];
  
  // Special Treatments
  const specialTreatments = [
    {
      name: 'Easy Care Finish',
      description: 'Treatments that reduce wrinkles, make garments easier to clean, and reduce ironing needs',
      icon: '👕',
    },
    {
      name: 'Soft Touch Finish',
      description: 'Enhances fabric hand-feel, making uniforms more comfortable to wear for extended periods',
      icon: '🧸',
    },
    {
      name: 'Static Control Finish',
      description: 'Reduces static electricity buildup in fabrics, particularly important in electronic environments',
      icon: '⚡',
    },
    {
      name: 'Temperature Regulating Finish',
      description: 'Advanced treatments that help regulate body temperature in varying environmental conditions',
      icon: '🌡️',
    },
    {
      name: 'Sustainable Eco-Finishes',
      description: 'Environmentally friendly treatments that achieve desired performance with reduced environmental impact',
      icon: '🌿',
    },
    {
      name: 'Custom Combination Finishes',
      description: 'Specialized multi-function treatments tailored for specific uniform requirements and conditions',
      icon: '🧩',
    },
  ];
  
  // Benefits of Technical Finishes
  const finishBenefits = [
    {
      title: 'Enhanced Uniform Performance',
      description: 'Technical finishes significantly improve how uniforms perform in specific work environments',
      icon: '⚡',
    },
    {
      title: 'Extended Garment Lifespan',
      description: 'Protective finishes help uniforms last longer, reducing replacement frequency and costs',
      icon: '⏱️',
    },
    {
      title: 'Improved Employee Comfort',
      description: 'Performance-enhancing treatments make uniforms more comfortable to wear throughout long shifts',
      icon: '😊',
    },
    {
      title: 'Specialized Protection',
      description: 'Technical finishes provide specific protections against workplace hazards and environmental conditions',
      icon: '🛡️',
    },
  ];

  return (
    <div className={`${poppinsFont.variable} ${interFont.variable}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg"
            alt="Technical Finishes for Professional Uniforms"
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
                  Technical Finishes for Professional Uniforms
                </h1>
                <p className={`${interFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                  Advanced treatments that enhance uniform performance, durability, and comfort. Our specialized technical finishes are designed for Saudi Arabia's unique climate and various industry requirements.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    href="/quote?service=technical-finishes" 
                    variant="secondary" 
                    size="lg"
                  >
                    Request Technical Consultation
                  </Button>
                  <Button 
                    href="#finish-types" 
                    variant="outline" 
                    size="lg"
                  >
                    Explore Finish Types
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
                <h2 className={`${poppinsFont.className} text-xl font-bold mb-4`}>Why Technical Finishes Matter</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Extends uniform lifespan, reducing replacement costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Enhances wearer comfort in Saudi Arabia's climate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Provides specialized protection for specific work environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Improves uniform appearance and professional presentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Reduces maintenance requirements and cleaning costs</span>
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
              <SectionHeading>Advanced Fabric Treatments for Enhanced Performance</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                At UNEOM, we understand that the performance of professional uniforms extends beyond basic design and fabric selection. Our technical finishes add specialized properties to garments, enhancing their functionality, durability, and comfort in specific work environments.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From protective treatments that guard against environmental conditions to performance finishes that improve comfort and functionality, we offer a comprehensive range of technical solutions that address the unique challenges faced by various industries.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Saudi Climate Optimized</h3>
                <p className="text-gray-700">
                  Our technical finishes are specifically formulated to perform in Saudi Arabia's challenging climate conditions, from intense heat and aridity to coastal humidity, ensuring optimal uniform performance year-round.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg"
                  alt="Technical fabric treatment demonstration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Finish Categories Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Technical Finish Categories</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our technical finishes are grouped into four main categories, each addressing specific aspects of uniform performance and functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {finishCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 text-primary-800 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{category.title}</h3>
                <p className="text-gray-700 text-center">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Finish Types Section */}
      <section id="finish-types" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Our Technical Finish Options</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a wide range of specialized technical finishes, each designed to address specific uniform performance requirements.
            </p>
          </div>
          
          <div className="space-y-16">
            {finishTypes.map((finish, index) => (
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
                      src={finish.image}
                      alt={finish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-4">{finish.name}</h3>
                  <p className="text-gray-700 mb-6">{finish.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {finish.benefits.map((benefit, i) => (
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
                      {finish.applications.map((application, i) => (
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
      
      {/* Special Treatments Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Specialized & Custom Treatments</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Beyond our standard finishes, we offer specialized and custom treatments for unique uniform requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialTreatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors"
              >
                <div className="text-3xl mb-4">{treatment.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{treatment.name}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-primary-900 text-white rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
                alt="Custom technical finishes"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 md:w-3/4">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-white/90 mb-6">
                Our technical experts can develop custom finish combinations to address your specific uniform requirements. Whether you need protection against particular environmental conditions or enhanced performance in specialized work settings, we can create a solution tailored to your needs.
              </p>
              <Button
                href="/quote?service=technical-finishes&custom=true"
                variant="secondary"
                size="lg"
              >
                Request Custom Finish Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Benefits of Our Technical Finishes</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Incorporating technical finishes into your uniform program delivers substantial benefits to your organization and employees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {finishBenefits.map((benefit, index) => (
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
      
      {/* Application Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <SectionHeading>The Technical Finish Application Process</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                Our technical finishes are applied using advanced methods that ensure consistent performance and durability. The process begins with a thorough assessment of your specific requirements, followed by expert recommendations on the most suitable treatments.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Needs Assessment</h3>
                    <p className="text-gray-700">Thorough evaluation of your specific environment, industry requirements, and performance needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Finish Selection</h3>
                    <p className="text-gray-700">Expert recommendations on the most suitable technical finishes for your specific requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Application Process</h3>
                    <p className="text-gray-700">Precision application of technical finishes using advanced methods and quality control</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Testing & Verification</h3>
                    <p className="text-gray-700">Comprehensive testing to ensure finish effectiveness and performance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg"
                    alt="Technical finish application process"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900">
                      All our technical finishes are tested to verify effectiveness in Saudi Arabia's climate conditions.
                    </p>
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
                  src="/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg"
                  alt="Client with technically enhanced uniforms"
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
                  The technical finishes UNEOM applied to our outdoor security uniforms have made a remarkable difference. Our team now stays comfortable even during the hottest summer days, and the stain-resistant treatment has dramatically improved uniform appearance and reduced our replacement costs by nearly 40%.
                </p>
                <div>
                  <p className="font-bold text-gray-900">Fahad Al-Otaibi</p>
                  <p className="text-gray-600">Operations Manager, Royal Security Services</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enhance Your Uniform Performance</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our technical finishes team today to discuss how specialized treatments can improve your uniform program's performance, durability, and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quote?service=technical-finishes" 
                variant="secondary" 
                size="lg"
              >
                Request Technical Consultation
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

export default TechnicalFinishesPage; 