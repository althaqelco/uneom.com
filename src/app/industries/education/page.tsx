'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Education industry blog posts
const educationBlogPosts = [
  {
    title: "How School Uniforms Enhance Academic Performance in Saudi Schools",
    description: "Discover the research-backed benefits of quality school uniforms on student performance, focus, and academic identity in Saudi educational institutions.",
    image: "/images/education/uniform_educations_blog-1.jpg",
    link: "/blog/school-uniforms-academic-performance",
    date: "April 18, 2024"
  },
  {
    title: "Sustainable School Uniform Solutions for Modern Saudi Educational Institutions",
    description: "Exploring eco-friendly fabric innovations and sustainable practices for educational uniforms that align with Saudi Vision 2030 environmental goals.",
    image: "/images/education/uniform_educations_blog-2.jpg",
    link: "/blog/sustainable-school-uniforms-saudi",
    date: "March 24, 2024"
  },
  {
    title: "Cultural Identity in Saudi School Uniforms: Balancing Tradition and Modernity",
    description: "How thoughtfully designed school uniforms can honor Saudi heritage while embracing contemporary educational environments.",
    image: "/images/education/uniform_educations_3.jpg",
    link: "/blog/cultural-identity-saudi-school-uniforms",
    date: "February 12, 2024"
  }
];

// Featured education products
const featuredProducts = [
  {
    id: "premium-school-uniform",
    name: "Premium School Uniform Collection",
    description: "High-quality, durable school uniforms designed specifically for Saudi educational institutions, featuring climate-appropriate fabrics and customizable branding options.",
    image: "/images/education/uniform_school-2.jpg",
    href: "/shop/education-uniforms/premium-school-uniform",
    features: [
      "Reinforced stitching for active students",
      "ClimateComfort™ fabric technology",
      "Customizable school logo integration",
      "Islamic dress code compliant options"
    ],
    price: "SAR 199"
  },
  {
    id: "faculty-professional-attire",
    name: "Faculty Professional Attire",
    description: "Distinguished professional uniforms for teachers and educational administrators that convey authority while providing comfort during long teaching hours.",
    image: "/images/education/uniform_school_product-1.jpg",
    href: "/shop/education-uniforms/faculty-professional-attire",
    features: [
      "Professional styling with comfort features",
      "Department color customization",
      "Modest options for all faculty members",
      "Durable fabrics for daily classroom wear"
    ],
    price: "SAR 349"
  },
  {
    id: "student-athletic-wear",
    name: "Student Athletic & PE Uniform",
    description: "Performance-oriented physical education and sports uniforms designed for Saudi schools, featuring moisture-wicking fabrics and activity-specific designs.",
    image: "/images/education/uniform_school_product-2.jpg",
    href: "/shop/education-uniforms/student-athletic-wear",
    features: [
      "SweatWick™ moisture management",
      "UV protection for outdoor activities",
      "Gender-appropriate athletic designs",
      "Customizable with school athletics branding"
    ],
    price: "SAR 149"
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function EducationPage() {
  // Default to English locale
  const locale = 'en';
  
  // Set background color to ensure consistency
  useEffect(() => {
    // Force white background on the entire document
    document.documentElement.style.background = '#ffffff';
    document.body.style.background = '#ffffff';
    
    return () => {
      document.documentElement.style.background = '';
      document.body.style.background = '';
    };
  }, []);
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Main Title */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-primary-50 to-primary-100">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Professional School & Education Uniforms in Saudi Arabia
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Featured Products Section with Animation */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-6xl mx-auto"
          >
            <SectionHeading>Featured Education Uniform Products</SectionHeading>
            <p className="text-center max-w-3xl mx-auto mb-12 text-neutral-600">
              Discover our premium collection of education uniforms, designed specifically for Saudi Arabian schools and educational institutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-neutral-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-56 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {product.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3">{product.name}</h3>
                    <p className="text-neutral-600 mb-4">{product.description}</p>
                    
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-neutral-600 flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={product.href} className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                      View Product Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button
                href="/shop/education-uniforms"
                variant="outline"
                size="lg"
              >
                View Full Education Collection
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Additional SEO-enhanced sections added below the standard layout */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-5xl mx-auto"
          >
            <SectionHeading>Educational Uniform Expertise</SectionHeading>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Uniform Policy Development</h3>
                <p className="text-neutral-700">
                  Our education consultants work directly with Saudi schools to develop comprehensive uniform policies that 
                  align with institutional values, practical requirements, and Ministry of Education standards. We provide template 
                  policies, parent communication materials, and implementation guidelines customized for your school's specific needs.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Student Measurement Programs</h3>
                <p className="text-neutral-700">
                  UNEOM offers on-site measurement services for Saudi educational institutions, with gender-appropriate staff and 
                  private measurement areas. Our digital sizing systems capture accurate measurements while our specialized educational 
                  software manages class distributions, order tracking, and reorder management.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Seasonal Uniform Transitions</h3>
                <p className="text-neutral-700">
                  For schools requiring distinct summer and winter uniforms, we develop coordinated seasonal collections with 
                  appropriate fabric weights and styles for Saudi Arabia's climate variations. Our transition management program 
                  ensures smooth seasonal changeovers with timely production and distribution.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary-600">
                <h3 className="text-xl font-semibold text-primary-800 mb-3">Educational Identity Consulting</h3>
                <p className="text-neutral-700">
                  Beyond uniform production, we offer specialized consulting on translating educational philosophy and institutional 
                  values into tangible uniform elements. Our design consultants help Saudi schools and universities develop distinctive 
                  uniform programs that authentically reflect their educational approach.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Case Study Section for SEO Enhancement */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-primary-900 text-white px-6 py-4">
                <h3 className="text-xl font-bold">Case Study: Al-Manar International School Uniform Program</h3>
              </div>
              <div className="p-6 bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image 
                      src="/images/education/uniform_school_product-4.jpg"
                      alt="Al-Manar International School Uniform Program"
                      width={300}
                      height={400}
                      className="rounded-md shadow-sm"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-3">Challenge</h4>
                    <p className="mb-4 text-neutral-700">
                      Al-Manar International School, with 2,500+ students across primary and secondary levels, faced challenges with uniform inconsistency, 
                      high replacement rates, and complicated distribution processes affecting both school operations and student appearance.
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-3">Solution</h4>
                    <p className="mb-4 text-neutral-700">
                      UNEOM implemented a comprehensive uniform program featuring:
                    </p>
                    <ul className="list-disc list-inside mb-4 text-neutral-700 space-y-1">
                      <li>Custom-designed uniforms with reinforced construction</li>
                      <li>Distinctive elements for different educational levels</li>
                      <li>Digital measurement and ordering system</li>
                      <li>On-campus uniform store with specialized staff</li>
                      <li>Parent portal for replacement ordering</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold mb-3">Results</h4>
                    <p className="text-neutral-700">
                      Within one academic year, the school experienced a 42% reduction in uniform replacements, 97% parent satisfaction rate, 
                      significantly improved student appearance, and elimination of administrative burden on school staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Educational Blog Posts Preview */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <SectionHeading>Educational Uniform Insights</SectionHeading>
            <p className="text-center max-w-3xl mx-auto mb-12 text-neutral-600">
              Explore our latest research and insights on school uniforms, educational identity, and uniform program management for Saudi Arabian educational institutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationBlogPosts.map((post, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="h-48 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-neutral-500 mb-2">{post.date}</div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">{post.description}</p>
                    <Link href={post.link} className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative z-10 max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate Your Educational Institution's Image with Professional Uniforms
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90">
              Join hundreds of Saudi educational institutions that trust UNEOM for high-quality, compliant, and climate-appropriate school uniforms. Get a custom quote tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact?service=education-uniforms"
                variant="secondary"
                size="lg"
                className="px-8 font-medium"
              >
                Request a Custom Quote
              </Button>
              <Button
                href="/shop/education-uniforms"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700 font-medium"
              >
                Browse Our Education Collection
              </Button>
            </div>
            
            {/* Trust Factors */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-sm opacity-80">Educational Institutions</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">15+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">98%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-80">Customer Support</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
} 