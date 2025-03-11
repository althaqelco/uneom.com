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
  
  const content = (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image
            src={industryData.heroImage || '/images/industries/default-hero.jpg'}
            alt={industryData.title || 'Industry Overview'}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{industryData.title}</h1>
            <p className="text-xl opacity-90 mb-8">
              {industryData.subtitle}
            </p>
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
                  // Handle case where introduction is a simple string
                  <p>{industryData.introduction}</p>
                ) : typeof industryData.introduction === 'object' && industryData.introduction !== null ? (
                  // Handle case where introduction is an object with title, content, image
                  <div className="introduction-content">
                    {(industryData.introduction as IntroductionObject).title && (
                      <h3 className="text-xl font-bold mb-4">{(industryData.introduction as IntroductionObject).title}</h3>
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
                  // Fallback for any other case
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
                  src={`/images/industries/${locale === 'ar' ? 'ar-' : ''}${
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
      
      {/* Key Benefits Section */}
      {((industryData.benefits && Array.isArray(industryData.benefits) && industryData.benefits.length > 0) || 
        (industryData.keyBenefits && Array.isArray(industryData.keyBenefits) && industryData.keyBenefits.length > 0)) && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered>
                {isRtl ? "فوائد زي يونيوم" : "Benefits of UNEOM Uniforms"}
              </SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {(industryData.benefits || industryData.keyBenefits || []).map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    variants={fadeIn}
                  >
                    <div className="rounded-full bg-primary-100 p-3 w-16 h-16 flex items-center justify-center mb-4">
                      <Image 
                        src={typeof benefit.icon === 'string' && !benefit.icon.startsWith('/') && !benefit.icon.startsWith('http') 
                          ? `/images/icons/${benefit.icon}.svg` 
                          : benefit.icon} 
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
              </div>
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* Products Section */}
      {industryData.products && Array.isArray(industryData.products) && industryData.products.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered>
                {isRtl ? "منتجات الزي الموحد لدينا" : "Our Uniform Products"}
              </SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {industryData.products.map((product) => {
                  // Generate a fallback href if none is provided
                  const productHref = product.href || 
                    (product.id ? `/products/${product.id.toLowerCase().replace(/ /g, '-')}` : 
                    `/products/${product.name.toLowerCase().replace(/ /g, '-')}`);
                  
                  return (
                    <motion.div 
                      key={product.id || product.name}
                      className="group bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                      variants={fadeIn}
                    >
                      <Link href={productHref} className="block relative">
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </Link>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          <Link 
                            href={productHref}
                            className="hover:text-primary-600 transition-colors duration-300"
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="text-neutral-600 mb-4 flex-grow">{product.description}</p>
                        <Link 
                          href={productHref}
                          className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                        >
                          {isRtl ? 'استكشاف المنتج' : 'Explore Product'}
                          {isRtl ? (
                            <svg 
                              className="mr-2 h-5 w-5 transform rotate-180"
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path 
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg 
                              className="ml-2 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path 
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* Fabric Technologies Section */}
      {(industryData.fabricTechnologies && 
        (Array.isArray(industryData.fabricTechnologies) 
          ? industryData.fabricTechnologies.length > 0 
          : (industryData.fabricTechnologies as FabricTechnologiesObject).items?.length > 0)) && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered>
                {isRtl 
                  ? "تقنيات النسيج المتطورة" 
                  : ((industryData.fabricTechnologies as FabricTechnologiesObject).title || "Advanced Fabric Technologies")}
              </SectionHeading>
              {/* Show description if it exists in the object format */}
              {!Array.isArray(industryData.fabricTechnologies) && (industryData.fabricTechnologies as FabricTechnologiesObject).description && (
                <p className="text-center text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
                  {(industryData.fabricTechnologies as FabricTechnologiesObject).description}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {Array.isArray(industryData.fabricTechnologies) 
                  ? industryData.fabricTechnologies.map((tech, index) => (
                      <div key={index} className="flex items-start">
                        <div className="rounded-full bg-primary-100 p-2 flex-shrink-0 mr-4">
                          <Image 
                            src={typeof tech.icon === 'string' && !tech.icon.startsWith('/') && !tech.icon.startsWith('http') 
                              ? `/images/icons/${tech.icon}.svg` 
                              : tech.icon} 
                            alt={tech.name}
                            width={24}
                            height={24}
                            className="text-primary-600"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 mb-1">{tech.name}</h3>
                          <p className="text-neutral-600">{tech.description}</p>
                        </div>
                      </div>
                    ))
                  : (industryData.fabricTechnologies as FabricTechnologiesObject).items.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">{item.name}</h3>
                        <p className="text-neutral-600 mb-4">{item.description}</p>
                        {item.image && (
                          <div className="mt-4 rounded-md overflow-hidden">
                            <Image 
                              src={item.image}
                              alt={item.name}
                              width={300}
                              height={180}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))
                }
              </div>
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* Customization Options Section */}
      {(industryData.customizationOptions || industryData.customization) && (
        (Array.isArray(industryData.customizationOptions) 
          ? industryData.customizationOptions.length > 0 
          : industryData.customization && industryData.customization.options && industryData.customization.options.length > 0) && (
        <section className="py-16">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered>
                {isRtl 
                  ? "خيارات التخصيص" 
                  : (industryData.customization?.title || "Customization Options")}
              </SectionHeading>
              {/* Show description if it exists in the object format */}
              {industryData.customization?.description && (
                <p className="text-center text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
                  {industryData.customization.description}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {industryData.customizationOptions && Array.isArray(industryData.customizationOptions) 
                  ? industryData.customizationOptions.map((option, index) => (
                      <div key={index} className="flex items-start">
                        <div className="rounded-full bg-primary-100 p-2 flex-shrink-0 mr-4">
                          <Image 
                            src={typeof option.icon === 'string' && !option.icon.startsWith('/') && !option.icon.startsWith('http') 
                              ? `/images/icons/${option.icon}.svg` 
                              : option.icon} 
                            alt={option.name}
                            width={24}
                            height={24}
                            className="text-primary-600"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900 mb-1">{option.name}</h3>
                          <p className="text-neutral-600">{option.description}</p>
                        </div>
                      </div>
                    ))
                  : industryData.customization?.options.map((option, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">{option.name}</h3>
                        <p className="text-neutral-600 mb-4">{option.description}</p>
                        {option.image && (
                          <div className="mt-4 rounded-md overflow-hidden">
                            <Image 
                              src={option.image}
                              alt={option.name}
                              width={300}
                              height={180}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))
                }
              </div>
            </motion.div>
          </Container>
        </section>
      ))}
      
      {/* Testimonials Section */}
      {industryData.testimonials && Array.isArray(industryData.testimonials) && industryData.testimonials.length > 0 && (
        <section className="py-16 bg-primary-600 text-white">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered className="text-white">
                {isRtl ? "ما يقوله عملاؤنا" : "What Our Clients Say"}
              </SectionHeading>
              
              <div className="mt-12 relative">
                {industryData.testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className={index === 0 ? "" : "hidden"}>
                    <div className="flex flex-col items-center text-center">
                      {testimonial.image && (
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <Image 
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <blockquote className="text-xl italic text-neutral-700 mb-6">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                      <cite className="not-italic">
                        <div className="font-bold text-neutral-900">{testimonial.author}</div>
                        <div className="text-neutral-600">{testimonial.position}, {testimonial.company}</div>
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      )}
      
      {/* CTA Section */}
      {industryData.cta && (
        <section className="py-16 bg-primary-600 text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-4">{industryData.cta.title}</h2>
                <p className="text-lg mb-8 opacity-90">
                  {industryData.cta.description}
                </p>
                <Button
                  href={industryData.cta.buttonUrl || industryData.cta.buttonHref || `/contact?industry=${industryData.title.toLowerCase().replace(/ /g, '-')}`}
                  variant="secondary"
                  size="lg"
                >
                  {industryData.cta.buttonText}
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
  
  // Return with or without MainLayout based on skipMainLayout parameter
  return skipMainLayout ? content : <MainLayout locale={locale}>{content}</MainLayout>;
} 