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
  variable: '--font-poppins'});

const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'});

export default function ManufacturingPage() {
  const locale = 'en';
  
  // Manufacturing Capabilities
  const manufacturingCapabilities = [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'Computer-controlled cutting systems that ensure accuracy and consistency across all uniform pieces',
      icon: '✂️'},
    {
      title: 'Advanced Sewing',
      description: 'High-performance sewing technologies for superior seam strength and durability',
      icon: '🧵'},
    {
      title: 'Embroidery & Branding',
      description: 'State-of-the-art embroidery machines for precise logo application and personalization',
      icon: '🧶'},
    {
      title: 'Screen Printing',
      description: 'Industrial printing systems for vibrant, long-lasting graphics and identifiers on uniforms',
      icon: '🖌️'},
    {
      title: 'Finishing Processes',
      description: 'Advanced finishing treatments to enhance comfort, durability, and appearance',
      icon: '✨'},
    {
      title: 'Quality Control',
      description: 'Rigorous inspection processes at every stage to ensure consistent quality',
      icon: '✓'},
  ];
  
  // Manufacturing Process
  const manufacturingProcess = [
    {
      name: 'Design & Pattern Development',
      description: 'Translating design concepts into detailed patterns and specifications for production.',
      steps: [
        'Design finalization with client approval',
        'Digital pattern creation and grading',
        'Technical specification development',
        'Sample pattern testing and adjustment',
        'Production-ready pattern preparation'
      ],
      image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg'},
    {
      name: 'Material Preparation',
      description: 'Preparing fabrics and materials for the cutting process, ensuring quality and consistency.',
      steps: [
        'Material quality inspection',
        'Fabric relaxing and conditioning',
        'Shrinkage testing and pre-treatment',
        'Spreading and layering for cutting',
        'Material alignment and verification'
      ],
      image: '/images/fabric-material-2024-12-06-03-35-02-utc.jpg'},
    {
      name: 'Precision Cutting',
      description: 'Cutting fabrics with precision to ensure consistent sizing and optimal material utilization.',
      steps: [
        'Computer-assisted cutting plan creation',
        'Automated or manual cutting based on complexity',
        'Piece marking and bundling',
        'Cut quality inspection',
        'Sorting and preparation for sewing'
      ],
      image: '/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg'},
    {
      name: 'Expert Assembly',
      description: 'Skilled craftspeople assembling uniform components with precision and attention to detail.',
      steps: [
        'Initial component preparation',
        'Sequential assembly operations',
        'Specialized seam construction',
        'In-line quality checks',
        'Structural integrity verification'
      ],
      image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg'},
    {
      name: 'Branding & Detailing',
      description: 'Adding logos, insignias, and specific details that complete the uniform\'s identity.',
      steps: [
        'Logo digitization and preparation',
        'Embroidery or screen printing application',
        'Badge and patch attachment',
        'Detail finishing and reinforcement',
        'Branding quality verification'
      ],
      image: '/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg'},
    {
      name: 'Finishing & Quality Control',
      description: 'Final touches and comprehensive quality checks to ensure all uniforms meet our exacting standards.',
      steps: [
        'Thread trimming and cleanup',
        'Pressing and shape setting',
        'Final inspection against specifications',
        'Measurement verification',
        'Packaging and preparation for delivery'
      ],
      image: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg'},
  ];
  
  // Production Options
  const productionOptions = [
    {
      title: 'Standard Production',
      description: 'Efficient manufacturing for uniform orders of standard quantities with predictable timelines.',
      features: [
        'Minimum order quantities from 50 pieces per style',
        'Standard lead times of 4-6 weeks',
        'Cost-effective production for medium to large orders',
        'Regular quality control checkpoints',
        'Standard packaging and delivery options'
      ],
      suitableFor: 'Medium to large organizations with consistent uniform requirements'},
    {
      title: 'Fast-Track Production',
      description: 'Accelerated manufacturing process for time-sensitive uniform requirements without compromising quality.',
      features: [
        'Expedited production schedule',
        'Priority material sourcing',
        'Dedicated production line allocation',
        'Enhanced progress monitoring',
        'Expedited quality control process',
        'Rush delivery coordination'
      ],
      suitableFor: 'Organizations with urgent uniform needs or tight deadlines'},
    {
      title: 'Small Batch Production',
      description: 'Specialized manufacturing service for smaller organizations or specific department needs.',
      features: [
        'Low minimum order quantities (starting from 20 pieces)',
        'Flexible production scheduling',
        'Same high-quality production methods',
        'Cost-optimized for smaller quantities',
        'Ability to test designs before larger orders'
      ],
      suitableFor: 'Small businesses, startups, or departments requiring limited quantities'},
    {
      title: 'Custom Development',
      description: 'End-to-end manufacturing service for organizations requiring unique, custom-designed uniforms.',
      features: [
        'Collaborative design development',
        'Prototype creation and refinement',
        'Material selection assistance',
        'Comprehensive sampling process',
        'Full production following approval',
        'Detailed documentation for future production'
      ],
      suitableFor: 'Organizations requiring unique uniform designs tailored to specific requirements'},
  ];
  
  // Manufacturing Benefits
  const manufacturingBenefits = [
    {
      title: 'Superior Quality Control',
      description: 'Our in-house manufacturing ensures rigorous quality standards at every production stage',
      icon: '🛠️'},
    {
      title: 'Faster Turnaround Times',
      description: 'Direct control over production scheduling allows for more efficient delivery timelines',
      icon: '⏱️'},
    {
      title: 'Production Flexibility',
      description: 'Ability to accommodate both large-scale orders and smaller specialized batches',
      icon: '🔄'},
    {
      title: 'Cost Efficiency',
      description: 'Streamlined production processes and material optimization reduce overall costs',
      icon: '💰'},
  ];

  return (
    <div className={`${poppinsFont.variable} ${interFont.variable}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src="/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg"
            alt="Professional Uniform Manufacturing"
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
                  Precision Uniform Manufacturing
                </h1>
                <p className={`${interFont.className} text-xl mb-8 text-white/90 leading-relaxed max-w-2xl`}>
                  State-of-the-art manufacturing facilities and skilled craftspeople producing high-quality professional uniforms. From design to delivery, we maintain exacting standards at every stage of production.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    href="/quote?service=manufacturing" 
                    variant="secondary" 
                    size="lg"
                  >
                    Request Manufacturing Quote
                  </Button>
                  <Button 
                    href="#manufacturing-process" 
                    variant="outline" 
                    size="lg"
                  >
                    Explore Our Process
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
                <h2 className={`${poppinsFont.className} text-xl font-bold mb-4`}>Manufacturing Excellence</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Advanced production facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Skilled craftspeople with years of experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Rigorous quality control standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Flexible production capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">✓</span>
                    <span>Compliance with international standards</span>
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
              <SectionHeading>State-of-the-Art Manufacturing Capabilities</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                At UNEOM, we combine advanced manufacturing technology with skilled craftsmanship to produce professional uniforms of exceptional quality. Our manufacturing facilities are equipped with the latest production technologies to ensure precision, consistency, and superior finish in every garment we produce.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a focus on both quality and efficiency, our manufacturing process is designed to deliver uniforms that meet the highest standards while providing flexibility in production volumes and timelines to accommodate diverse client requirements.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Made for Saudi Arabia</h3>
                <p className="text-gray-700">
                  Our manufacturing facilities and processes are specifically optimized to produce uniforms suited to Saudi Arabia's climate, cultural requirements, and industry standards, ensuring optimal performance in local conditions.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
                  alt="Advanced uniform manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Manufacturing Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Our Manufacturing Capabilities</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We have invested in cutting-edge manufacturing technologies to ensure the highest quality uniform production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 text-primary-800 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{capability.title}</h3>
                <p className="text-gray-700 text-center">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Manufacturing Process Section */}
      <section id="manufacturing-process" className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Our Manufacturing Process</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a comprehensive production process to ensure every uniform meets our exacting quality standards.
            </p>
          </div>
          
          <div className="space-y-16">
            {manufacturingProcess.map((process, index) => (
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
                      src={process.image}
                      alt={process.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-full text-white font-bold mb-2">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-4">{process.name}</h3>
                  <p className="text-gray-700 mb-6">{process.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Key Steps:</h4>
                    <ul className="space-y-1">
                      {process.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 flex-shrink-0">•</span>
                          <span>{step}</span>
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
      
      {/* Production Options Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Production Options</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer flexible manufacturing options to meet diverse client requirements and timelines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productionOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="bg-primary-900 p-4 text-white">
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{option.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 flex-shrink-0">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-primary-900 mb-2">Best For:</h4>
                    <p className="bg-primary-50 text-primary-800 px-4 py-2 rounded text-center">{option.suitableFor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Quality Control Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <SectionHeading>Rigorous Quality Control</SectionHeading>
              <p className="text-lg text-gray-700 mb-6">
                Quality is at the heart of our manufacturing process. We implement comprehensive quality control measures at every stage of production to ensure each uniform meets our exacting standards.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Material Inspection</h3>
                    <p className="text-gray-700">Thorough testing of all fabrics and materials before they enter the production process</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">In-Process Checks</h3>
                    <p className="text-gray-700">Regular quality verifications during all stages of manufacturing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Construction Verification</h3>
                    <p className="text-gray-700">Detailed inspection of seams, stitching, and structural elements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sizing Accuracy</h3>
                    <p className="text-gray-700">Precise measurement verification to ensure consistent sizing across all uniform pieces</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Final Inspection</h3>
                    <p className="text-gray-700">Comprehensive examination of finished uniforms before packaging and dispatch</p>
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
                    <div className="bg-amber-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900">
                      Our defect rate is less than 0.5%, significantly below industry averages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <SectionHeading>Benefits of Our Manufacturing Service</SectionHeading>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our in-house manufacturing capabilities provide significant advantages for your organization's uniform program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 text-primary-800 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-700 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              href="/quote?service=manufacturing" 
              variant="primary" 
              size="lg"
            >
              Request Manufacturing Quote
            </Button>
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
                  alt="Client testimonial about uniform manufacturing"
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
                  The quality of UNEOM's manufacturing is exceptional. We ordered 500 custom uniforms for our airline staff, and the attention to detail was impressive. The fast-track production option meant we received all uniforms two weeks ahead of our launch date, and the quality exceeded our expectations.
                </p>
                <div>
                  <p className="font-bold text-gray-900">Layla Al-Mansour</p>
                  <p className="text-gray-600">Procurement Director, SkyLink Airlines</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Technology Showcase Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-xl overflow-hidden p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <SectionHeading>Advanced Manufacturing Technology</SectionHeading>
                <p className="text-lg text-gray-700 mb-6">
                  Our manufacturing facilities are equipped with cutting-edge technology that combines precision automation with skilled craftsmanship to produce uniforms of exceptional quality.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From computer-controlled cutting systems to advanced sewing machinery and digital quality inspection tools, we invest in the latest technologies to ensure consistency, efficiency, and superior finish in every uniform we produce.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary-800 mb-4">Technology Highlights:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <span>Digital pattern systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <span>Automated cutting technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <span>Precision sewing equipment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <span>Advanced embroidery machines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <span>Digital quality verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <span>Production tracking software</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
                      alt="Precision cutting technology"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg"
                      alt="Advanced sewing machinery"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/fabric-material-2024-12-06-03-35-02-utc.jpg"
                      alt="Material inspection system"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src="/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg"
                      alt="Finished uniform quality check"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Manufacture Your Professional Uniforms?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our manufacturing team today to discuss your uniform production requirements and explore our capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quote?service=manufacturing" 
                variant="secondary" 
                size="lg"
              >
                Request Manufacturing Quote
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
}
