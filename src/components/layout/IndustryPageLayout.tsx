"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from './MainLayout';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

// Define types for all the data that can be passed to the IndustryPageLayout
interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

interface FabricTechnology {
  name: string;
  description: string;
  icon: string;
}

// For pages that use a different format
interface FabricTechnologiesObject {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    image: string;
  }[];
}

interface CustomizationOption {
  name: string;
  description: string;
  icon: string;
}

// For pages that use a different format
interface CustomizationObject {
  title: string;
  description: string;
  options: {
    name: string;
    description: string;
    image: string;
  }[];
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

// Add interface for Introduction object
interface IntroductionObject {
  title?: string;
  content?: string;
  image?: string;
}

interface IndustryData {
  title: string;
  subtitle: string;
  heroImage: string;
  introduction: string[] | string | IntroductionObject;
  benefits?: Benefit[];
  keyBenefits?: Benefit[];
  products?: Product[];
  departmentCategories?: any[];
  fabricTechnologies?: FabricTechnology[] | FabricTechnologiesObject;
  customizationOptions?: CustomizationOption[];
  customization?: CustomizationObject;  // For hospitality page
  testimonials?: Testimonial[];
  caseStudy?: any;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl?: string;
    buttonHref?: string;  // Some pages use buttonHref instead of buttonUrl
  };
}

interface IndustryPageLayoutProps {
  locale: string;
  industryData: IndustryData;
  skipMainLayout?: boolean; // Optional parameter to skip MainLayout wrapper
}

export default function IndustryPageLayout({ 
  locale, 
  industryData,
  skipMainLayout = false 
}: IndustryPageLayoutProps) {
  const isRtl = locale === 'ar';
  
  // Safety check if industryData is not provided
  if (!industryData) {
    return skipMainLayout ? (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-6">Industry Information Not Available</h1>
          <p className="mb-8">The requested industry information could not be found.</p>
          <Link href={locale === 'ar' ? '/ar/industries' : '/industries'} className="inline-block bg-primary-600 text-white px-4 py-2 rounded">
            {locale === 'ar' ? 'العودة إلى صفحة القطاعات' : 'Go back to Industries'}
          </Link>
        </div>
      </Container>
    ) : (
      <MainLayout locale={locale}>
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold mb-6">Industry Information Not Available</h1>
            <p className="mb-8">The requested industry information could not be found.</p>
            <Link href={locale === 'ar' ? '/ar/industries' : '/industries'} className="inline-block bg-primary-600 text-white px-4 py-2 rounded">
              {locale === 'ar' ? 'العودة إلى صفحة القطاعات' : 'Go back to Industries'}
            </Link>
          </div>
        </Container>
      </MainLayout>
    );
  }
  
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
  
  // Create content as a JSX element
  const content = (
    <React.Fragment>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image
            src={industryData.heroImage || '/images/banner-placeholder.jpg'}
            alt={industryData.title || 'Industry Overview'}
            fill={true}
            className="object-cover"
            priority={true}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{industryData.title}</h1>
            <p className="text-xl opacity-90 mb-8">{industryData.subtitle}</p>
            {industryData.cta && (
              <Button
                href={industryData.cta.buttonUrl}
                variant="primary"
                size="lg"
              >
                {industryData.cta.buttonText}
              </Button>
            )}
          </motion.div>
        </Container>
      </section>
      
      {/* Introduction Section */}
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
                subtitle={isRtl ? "فهم احتياجات الزي الخاص بك" : "Understanding your uniform needs"}
              >
                {isRtl ? "نظرة عامة" : "Overview"}
              </SectionHeading>
              <div className="prose max-w-none">
                {/* Handle case where introduction is an array of strings */}
                {Array.isArray(industryData.introduction) ? (
                  industryData.introduction.map((paragraph, index) => (
                    <p key={index} className={index < (Array.isArray(industryData.introduction) ? industryData.introduction.length - 1 : 0) ? "mb-4" : ""}>
                      {paragraph}
                    </p>
                  ))
                ) : typeof industryData.introduction === 'string' ? (
                  <p>{industryData.introduction}</p>
                ) : typeof industryData.introduction === 'object' && industryData.introduction !== null ? (
                  <div className="introduction-content">
                    {(industryData.introduction as IntroductionObject).title && (
                      <h3 className="text-xl font-bold mb-4">
                        {(industryData.introduction as IntroductionObject).title}
                      </h3>
                    )}
                    {(industryData.introduction as IntroductionObject).content && (
                      <div dangerouslySetInnerHTML={{ __html: (industryData.introduction as IntroductionObject).content as string }} />
                    )}
                    {(industryData.introduction as IntroductionObject).image && (
                      <div className="mt-6">
                        <Image
                          src={(industryData.introduction as IntroductionObject).image as string}
                          alt={industryData.title}
                          width={800}
                          height={450}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <p>No introduction available</p>
                )}
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
                  src={`/images/${locale === 'ar' ? 'ar-' : ''}${
                    Array.isArray(industryData.products) && industryData.products.length > 0 && industryData.products[0]?.image
                      ? industryData.products[0].image
                      : industryData.heroImage || 'industry-default.jpg'
                  }`}
                  alt={industryData.title}
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
  
  // Return with or without MainLayout based on skipMainLayout parameter
  return skipMainLayout ? content : (
    <MainLayout locale={locale}>
      {content}
    </MainLayout>
  );
} 