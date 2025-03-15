"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from './MainLayout';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

// Define types for all the data that can be passed to the ResourcePageLayout
interface ResourceSection {
  title: string;
  content: string;
  image?: string;
}

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  properties?: {
    [key: string]: string;
  };
}

interface RelatedResource {
  title: string;
  description: string;
  link: string;
  icon: string;
}

interface ResourceData {
  locale: string;
  title: string;
  subtitle: string;
  heroImage: string;
  
  overview: {
    title: string;
    content: string;
  };
  
  sections: ResourceSection[];
  items?: ResourceItem[];
  relatedResources?: RelatedResource[];
  
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
  };
}

interface ResourcePageLayoutProps {
  resourceData: ResourceData;
  skipMainLayout?: boolean;
}

export default function ResourcePageLayout({ resourceData, skipMainLayout = false }: ResourcePageLayoutProps) {
  const isRtl = resourceData.locale === 'ar';
  
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
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image
            src={resourceData.heroImage || '/images/banner-placeholder.jpg'}
            alt={resourceData.title}
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
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{resourceData.title}</h1>
            <p className="text-xl opacity-90 mb-8">
              {resourceData.subtitle}
            </p>
          </motion.div>
        </Container>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered>
                {resourceData.overview.title}
              </SectionHeading>
              <div className="prose max-w-none mx-auto" dangerouslySetInnerHTML={{ __html: resourceData.overview.content }} />
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Content Sections */}
      {resourceData.sections.map((section, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
        >
          <Container>
            <div className={`grid grid-cols-1 ${section.image ? 'md:grid-cols-2 gap-12 items-center' : ''}`} style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={section.image && index % 2 !== 0 ? 'md:order-2' : ''}
              >
                <SectionHeading centered={!section.image}>
                  {section.title}
                </SectionHeading>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
              </motion.div>
              
              {section.image && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className={index % 2 !== 0 ? 'md:order-1' : ''}
                >
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={section.image || '/images/default-placeholder.jpg'}
                      alt={section.title}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </Container>
        </section>
      ))}
      
      {/* Resource Items Grid (if applicable) */}
      {resourceData.items && resourceData.items.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeading centered>
                {isRtl ? 'الموارد المتاحة' : 'Available Resources'}
              </SectionHeading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {resourceData.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={fadeIn}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100"
                  >
                    {item.image && (
                      <div className="h-48 relative overflow-hidden">
                        <Image
                          src={item.image || '/images/product-placeholder.jpg'}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-neutral-600 mb-4">{item.description}</p>
                      
                      {item.properties && Object.keys(item.properties).length > 0 && (
                        <div className="mt-4 pt-4 border-t border-neutral-100">
                          <h4 className="font-medium text-sm text-neutral-500 mb-2">
                            {isRtl ? 'الخصائص' : 'Properties'}
                          </h4>
                          <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {Object.entries(item.properties).map(([key, value]) => (
                              <React.Fragment key={key}>
                                <dt className="text-sm font-medium text-neutral-500">{key}</dt>
                                <dd className="text-sm text-neutral-800">{value}</dd>
                              </React.Fragment>
                            ))}
                          </dl>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* Related Resources (if applicable) */}
      {resourceData.relatedResources && resourceData.relatedResources.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeading centered>
                {isRtl ? 'موارد ذات صلة' : 'Related Resources'}
              </SectionHeading>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {resourceData.relatedResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 text-primary-600">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                    <p className="text-neutral-600 mb-6">
                      {resource.description}
                    </p>
                    <Link 
                      href={resource.link || `/resources`} 
                      className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
                    >
                      {isRtl ? 'عرض المزيد' : 'Learn More'}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{resourceData.cta.title}</h2>
            <p className="text-xl opacity-90 mb-8">{resourceData.cta.description}</p>
            <Button
              href={resourceData.cta.buttonUrl || `/contact?resource=${encodeURIComponent(resourceData.title)}`}
              variant="secondary"
              size="lg"
            >
              {resourceData.cta.buttonText}
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
  
  return skipMainLayout ? renderContent() : (
    <MainLayout locale={resourceData.locale}>
      {renderContent()}
    </MainLayout>
  );
} 