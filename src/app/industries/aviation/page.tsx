'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Link from 'next/link';

// Define animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function AviationPage() {
  // Define locale for language support
  const locale = 'en';
  
  // Sample data from our original aviation data
  const featuredProducts = [
    {
      id: "airline-crew-uniform",
      name: "Airline Crew Uniform",
      description: "Premium flight attendant uniforms with Islamic-compliant options for Saudi airlines",
      image: "/images/aviation/flightـattendantsـuniforms.jpg",
      price: "SAR 1,299",
      href: "/shop/aviation-uniforms/airline-crew-uniform",
      featured: true,
      badge: "Best Seller"
    },
    {
      id: "pilot-uniform-set",
      name: "Professional Pilot Uniform Set",
      description: "Complete pilot uniform sets designed for Saudi airline captains and officers",
      image: "/images/aviation/aviation_captin_uniform.jpg",
      price: "SAR 1,799",
      href: "/shop/aviation-uniforms/pilot-uniform-set",
      featured: true,
      badge: "Premium"
    },
    {
      id: "ground-crew-uniform",
      name: "Ground Staff Uniforms",
      description: "Practical and professional attire for airport ground personnel in Saudi aviation",
      image: "/images/aviation/aviation_uniform_airline.jpg",
      price: "SAR 999",
      href: "/shop/aviation-uniforms/ground-crew-uniform",
      featured: true,
      badge: "Popular"
    }
  ];

  // Related blog posts data
  const relatedPosts = [
    {
      title: "Evolving Trends in Gulf Airline Uniforms",
      excerpt: "Discover how Saudi and Gulf airlines are balancing tradition with contemporary design in their crew uniforms while maintaining cultural sensitivity.",
      image: "/images/aviation/aviation_uniform_flightـattendants.jpg",
      date: "May 15, 2023",
      author: "Nora Al-Rashid",
      href: "/blog/evolving-trends-gulf-airline-uniforms"
    },
    {
      title: "The Role of Uniforms in Airline Brand Identity",
      excerpt: "How Saudi airlines use distinctive uniform designs to strengthen brand recognition and create memorable passenger experiences.",
      image: "/images/aviation/aviation_captin_uniform.jpg",
      date: "March 22, 2023",
      author: "Mohammed Tariq",
      href: "/blog/uniforms-airline-brand-identity"
    },
    {
      title: "Islamic-Compliant Design in Modern Aviation Attire",
      excerpt: "Exploring innovative approaches to designing modest yet functional uniforms for female flight attendants in Saudi Arabian airlines.",
      image: "/images/aviation/flightـattendantsـuniforms_details.jpg",
      date: "January 10, 2023",
      author: "Layla Al-Otaibi",
      href: "/blog/islamic-compliant-aviation-attire"
    }
  ];

  // تحتوي على محتوى الصفحة
  const pageContent = (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image
            src="/images/aviation/aviation_uniform_airline_main_image.jpg"
            alt="Aviation Uniforms"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <motion.div
            className="relative z-10 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Aviation Uniforms & Airline Attire in Saudi Arabia
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Premium cabin crew, ground staff, and aviation personnel uniforms tailored for Saudi airlines and private operators
            </p>
            <Link 
              href="/contact?industry=aviation"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded hover:bg-primary-700 transition-all duration-300"
            >
              Request a Quote
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Understanding Your Airline Uniform Needs</h2>
              <div className="prose max-w-none">
                <p>
                  In Saudi Arabia's rapidly expanding aviation sector, professional uniforms play a crucial role in establishing airline identity, ensuring operational efficiency, and projecting the Kingdom's commitment to excellence in global air travel. UNEOM's comprehensive aviation uniform solutions are specifically designed to meet the unique requirements of Saudi airlines and aviation businesses.
                </p>
                <p>
                  From cabin crew and flight deck personnel to ground operations and technical staff, we provide premium-quality uniforms that combine sophisticated style, practical functionality, and cultural sensitivity. Our aviation collections incorporate advanced fabric technologies that withstand the rigorous demands of air travel while offering options that respect Islamic dress codes and reflect Saudi heritage elements.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/aviation/aviation_uniform_flightـattendants.jpg"
                  alt="Saudi flight attendants in professional blue uniforms with coordinated head coverings"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section with Animation */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-blue-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Us for Aviation Uniforms?
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We offer unique uniform solutions that combine Saudi cultural requirements with global quality standards for the aviation sector
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* First Feature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-blue-800">
                GACA Compliance
              </h3>
              <p className="text-neutral-600 text-center">
                All our designs meet Saudi General Authority of Civil Aviation (GACA) requirements 100% while maintaining the highest standards of comfort and elegance.
              </p>
            </motion.div>
            
            {/* Second Feature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="rounded-full bg-indigo-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-indigo-800">
                Corporate Identity Customization
              </h3>
              <p className="text-neutral-600 text-center">
                We integrate your brand identity into every detail of your flight crew uniforms, enhancing brand recognition and creating a distinctive experience for travelers.
              </p>
            </motion.div>
            
            {/* Third Feature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="rounded-full bg-rose-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-rose-800">
                Modest Designs
              </h3>
              <p className="text-neutral-600 text-center">
                Special designs that respect modest dress requirements for female staff while maintaining an elegant appearance aligned with international aviation standards.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                variants={fadeIn}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    <Link
                      href={product.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {product.description}
                  </p>
                  {product.price && (
                    <div className="mb-4 text-lg font-bold text-primary-600">
                      {product.price}
                    </div>
                  )}
                  <div className="mt-auto">
                    <Link
                      href={product.href}
                      className="inline-block bg-primary-600 text-white px-4 py-2 rounded text-center w-full hover:bg-primary-700 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">Related Articles</h2>
            <p className="text-neutral-600">Latest insights and perspectives on aviation uniforms and their developments</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-neutral-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary-600 transition-colors">
                    <Link href={post.href}>{post.title}</Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link 
                    href={post.href} 
                    className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brief Overview Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/aviation/flightـattendantsـuniforms_details.jpg"
                  alt="Close-up details of flight attendant uniforms"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose UNEOM</h2>
              <div className="prose max-w-none">
                <p>
                  Our specialized designs for female flight attendants incorporate modest elements that respect Islamic values while maintaining a sophisticated, professional appearance aligned with international aviation standards.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span>Saudi Aviation Industry Expertise with GACA standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span>Islamic-Compliant Design Options for female staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span>International-Standard Fabrics with high performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span>Brand Identity Enhancement for Saudi airlines</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Airline's Appearance?</h2>
              <p className="text-lg mb-8 opacity-90">
                Contact our aviation uniform specialists to discuss your requirements and discover how UNEOM can enhance your airline's professional image.
              </p>
              <Link
                href="/contact?industry=aviation"
                className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors duration-300"
              >
                Request Consultation
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );

  // إرجاع الصفحة مغلفة بـ MainLayout
  return (
    <div className="bg-white">
    
      {pageContent}
    
      </div>
  );
} 