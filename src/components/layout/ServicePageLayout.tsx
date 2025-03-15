"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from './MainLayout';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

// Define types for all the data that can be passed to the ServicePageLayout
interface ServiceStep {
  title: string;
  description: string;
  icon: string;
}

interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  result: string;
  image: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string[];
  steps: ServiceStep[];
  benefits: ServiceBenefit[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  faqItems?: { question: string; answer: string }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

interface ServicePageLayoutProps {
  locale: string;
  serviceData: ServiceData;
  skipMainLayout?: boolean;
}

export default function ServicePageLayout({ locale, serviceData, skipMainLayout = false }: ServicePageLayoutProps) {
  const isRtl = locale === 'ar';
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Render components with or without MainLayout based on skipMainLayout prop
  const renderContent = () => (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src={serviceData.heroImage || '/images/banner-placeholder.jpg'}
            alt={serviceData.title}
            fill
            className="object-cover"
          />
        </div>
        <Container>
          <motion.div 
            className="relative z-10 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{serviceData.title}</h1>
            <p className="text-xl opacity-90 mb-8">
              {serviceData.subtitle}
            </p>
            <Button
              href={serviceData.cta.buttonUrl || `/contact?service=${encodeURIComponent(serviceData.title)}`}
              variant="secondary"
              size="lg"
            >
              {serviceData.cta.buttonText}
            </Button>
          </motion.div>
        </Container>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading
                centered={false}
                subtitle={isRtl ? "فهم خدماتنا" : "Understanding our service"}
              >
                {isRtl ? "نظرة عامة" : "Overview"}
              </SectionHeading>
              <div className="prose max-w-none">
                {serviceData.overview.map((paragraph, index) => (
                  <p key={index} className={index < serviceData.overview.length - 1 ? "mb-4" : ""}>
                    {paragraph}
                  </p>
                ))}
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
                  src={`/images/default-placeholder.jpg === 'ar' ? 'ar-' : ''}service-overview.jpg`}
                  alt={serviceData.title}
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Service Process Steps */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            centered={true}
            subtitle={isRtl ? "نهجنا المنظم" : "Our systematic approach"}
          >
            {isRtl ? "عملية الخدمة" : "Service Process"}
          </SectionHeading>
          
          <motion.div 
            className="relative mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {serviceData.steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`relative z-10 flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                variants={fadeIn}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-primary-100 p-2 w-10 h-10 flex items-center justify-center mr-3">
                        <Image 
                          src={step.icon} 
                          alt={step.title}
                          width={24}
                          height={24}
                          className="text-primary-600"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900">{step.title}</h3>
                    </div>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                  <div className="rounded-full bg-primary-500 text-white w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            centered={true}
            subtitle={isRtl ? "كيف يمكن أن تساعدك خدماتنا" : "How our service can help you"}
          >
            {isRtl ? "المزايا الرئيسية" : "Key Benefits"}
          </SectionHeading>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {serviceData.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="rounded-full bg-primary-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Image 
                    src={benefit.icon} 
                    alt={benefit.title}
                    width={32}
                    height={32}
                    className="text-primary-600"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            centered={true}
            subtitle={isRtl ? "نتائج ملموسة لعملائنا" : "Tangible results for our clients"}
          >
            {isRtl ? "دراسات الحالة" : "Case Studies"}
          </SectionHeading>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            {serviceData.caseStudies.map((caseStudy) => (
              <motion.div 
                key={caseStudy.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                variants={fadeIn}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={caseStudy.image || '/images/default-placeholder.jpg'}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-neutral-600 mb-4">{caseStudy.description}</p>
                  <div className="mt-auto">
                    <div className="border-t border-neutral-200 pt-4 mt-4">
                      <h4 className="text-lg font-semibold text-primary-600 mb-2">
                        {isRtl ? "النتيجة" : "Result"}
                      </h4>
                      <p className="text-neutral-800">{caseStudy.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      {serviceData.testimonials.length > 0 && (
        <section className="py-16 bg-primary-900 text-white">
          <Container>
            <SectionHeading
              centered={true}
              subtitle={isRtl ? "ماذا يقول عملاؤنا" : "What our clients say"}
              className="text-white"
            >
              {isRtl ? "شهادات العملاء" : "Client Testimonials"}
            </SectionHeading>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {serviceData.testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className="bg-primary-800 rounded-lg p-6 shadow-md"
                  variants={fadeIn}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                    {testimonial.image && (
                      <div className="flex-shrink-0 mr-4 mb-4 md:mb-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || '/images/avatar-placeholder.jpg'}
                            alt={testimonial.author}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-bold">{testimonial.author}</h4>
                      <p className="text-primary-200">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-primary-100 italic">"{testimonial.quote}"</blockquote>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* FAQ Section */}
      {serviceData.faqItems && serviceData.faqItems.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <SectionHeading
              centered={true}
              subtitle={isRtl ? "أسئلة شائعة حول هذه الخدمة" : "Common questions about this service"}
            >
              {isRtl ? "الأسئلة المتكررة" : "Frequently Asked Questions"}
            </SectionHeading>
            
            <motion.div 
              className="max-w-3xl mx-auto mt-12 divide-y divide-neutral-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              style={{ direction: isRtl ? 'rtl' : 'ltr' }}
            >
              {serviceData.faqItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="py-6"
                  variants={fadeIn}
                >
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.question}</h3>
                  <p className="text-neutral-600">{item.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div 
            className="bg-primary-800 text-white rounded-xl p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">{serviceData.cta.title}</h2>
              <p className="text-primary-100 mb-8 text-lg">{serviceData.cta.description}</p>
              <Button
                href={serviceData.cta.buttonUrl || `/contact?service=${encodeURIComponent(serviceData.title)}`}
                variant="secondary"
                size="lg"
              >
                {serviceData.cta.buttonText}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
  
  return skipMainLayout ? renderContent() : (
    <MainLayout locale={locale}>
      {renderContent()}
    </MainLayout>
  );
} 