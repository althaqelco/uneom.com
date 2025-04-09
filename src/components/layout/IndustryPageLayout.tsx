"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from './MainLayout';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import QuoteForm from '../forms/QuoteForm';
import FeaturedProducts from '../sections/FeaturedProducts';

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
  features?: string[];
}

// Add support for featuredProducts with extended properties
interface FeaturedProduct extends Product {
  price?: string;
  badge?: string;
  featured?: boolean;
}

interface RelatedContent {
  title: string;
  description: string;
  image: string;
  link: string;
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
  relatedContent?: RelatedContent[];
  fabricTechnologies?: FabricTechnology[] | FabricTechnologiesObject;
  customizationOptions?: CustomizationOption[];
  customization?: CustomizationObject;  // For hospitality page
  testimonials?: Testimonial[];
  features?: any[];
  faqItems?: any[];
  caseStudy?: any;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl?: string;
    buttonHref?: string;  // Some pages use buttonHref instead of buttonUrl
  };
  seoKeywords?: string;
  featuredProducts?: FeaturedProduct[];
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
  
  // Create CTA section conditionally
  const ctaSection = industryData.cta ? 
    React.createElement(
      "section",
      { className: "py-16 bg-primary-600 text-white" },
      React.createElement(
        Container,
        null,
        React.createElement(
          "div",
          { className: "text-center max-w-3xl mx-auto", style: { direction: isRtl ? 'rtl' : 'ltr' } },
          React.createElement(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeIn
            },
            React.createElement(
              "h2",
              { className: "text-3xl font-bold mb-4" },
              industryData.cta.title
            ),
            React.createElement(
              "p",
              { className: "text-lg mb-8 opacity-90" },
              industryData.cta.description
            ),
            React.createElement(
              Button,
              {
                href: industryData.cta.buttonUrl || industryData.cta.buttonHref || `/contact?industry=${industryData.title.toLowerCase().replace(/ /g, '-')}`,
                variant: "secondary",
                size: "lg",
                children: industryData.cta.buttonText
              }
            )
          )
        )
      )
    ) : null;
  
  // Create Featured Products section
  const createFeaturedProductsSection = () => {
    console.log("featuredProducts:", industryData.featuredProducts);
    if (!industryData.featuredProducts || !Array.isArray(industryData.featuredProducts) || industryData.featuredProducts.length === 0) {
      console.log("No featured products to display");
      return null;
    }
  
    return (
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered={true}>{isRtl ? "منتجاتنا المميزة" : "Featured Products"}</SectionHeading>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {industryData.featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                variants={fadeIn}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image || '/images/default-placeholder.jpg'}
                    alt={product.name || 'Product'}
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
                      href={product.href || `/products/${(product.id || product.name || '').toLowerCase().replace(/ /g, '-')}`}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {product.name || 'Product'}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">
                    {product.description || 'No description available'}
                  </p>
                  {product.price && (
                    <div className="mb-4 text-lg font-bold text-primary-600">
                      {product.price}
                    </div>
                  )}
                  <div className="mt-auto">
                    <Button
                      href={product.href || `/products/${(product.id || product.name || '').toLowerCase().replace(/ /g, '-')}`}
                      variant="primary"
                      size="lg"
                    >
                      {isRtl ? "عرض التفاصيل" : "View Details"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    );
  };
  
  // Create Related Content section
  const createRelatedContentSection = () => {
    console.log("relatedContent:", industryData.relatedContent);
    if (!industryData.relatedContent || !Array.isArray(industryData.relatedContent) || industryData.relatedContent.length === 0) {
      console.log("No related content to display");
      return null;
    }
  
    return (
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered={true}>
              {isRtl ? "محتوى ذو صلة" : "Related Content"}
            </SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {industryData.relatedContent.map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                  variants={fadeIn}
                >
                  <Link href={item.link} className="block relative">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 text-sm">
                        {item.description}
                      </p>
                      <span className="text-primary-600 font-medium flex items-center">
                        {isRtl ? "اقرأ المزيد" : "Read More"}
                        <svg
                          className={`ml-1 ${isRtl ? 'rotate-180' : ''}`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    );
  };
  
  // Define JSX content
  const content = React.createElement(
    React.Fragment,
    null,
    /* Hero Section */
    React.createElement(
      "section",
      {
        className: "relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-24"
      },
      React.createElement(
        "div",
        { className: "absolute inset-0 overflow-hidden opacity-40" },
        React.createElement(
          Image,
          {
            src: industryData.heroImage || '/images/banner-placeholder.jpg',
            alt: industryData.title || 'Industry Overview',
            fill: true,
            className: "object-cover",
            priority: true
          }
        )
      ),
      React.createElement(
        Container,
        null,
        React.createElement(
          motion.div,
          {
            className: "relative z-10 max-w-3xl",
            initial: "hidden",
            animate: "visible",
            variants: fadeIn,
            style: { direction: isRtl ? 'rtl' : 'ltr' }
          },
          React.createElement(
            "h1",
            { className: "text-4xl md:text-5xl font-bold mb-4" },
            industryData.title
          ),
          React.createElement(
            "p",
            { className: "text-xl opacity-90 mb-8" },
            industryData.subtitle
          ),
          industryData.cta && React.createElement(
            Button,
            {
              href: industryData.cta.buttonUrl,
              variant: "primary",
              size: "lg"
            },
            industryData.cta.buttonText
          )
        )
      )
    ),
    
    /* Introduction Section */
    React.createElement(
      "section",
      { className: "py-16 bg-white" },
      React.createElement(
        Container,
        null,
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", style: { direction: isRtl ? 'rtl' : 'ltr' } },
          React.createElement(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeIn
            },
            React.createElement(
              SectionHeading,
              {
                centered: false,
                subtitle: isRtl ? "فهم احتياجات الزي الخاص بك" : "Understanding your uniform needs"
              },
              isRtl ? "نظرة عامة" : "Overview"
            ),
            React.createElement(
              "div",
              { className: "prose max-w-none" },
              /* Handle case where introduction is an array of strings */
              Array.isArray(industryData.introduction) ? (
                industryData.introduction.map((paragraph, index) => (
                  React.createElement(
                    "p",
                    { key: index, className: index < (Array.isArray(industryData.introduction) ? industryData.introduction.length - 1 : 0) ? "mb-4" : "" },
                    paragraph
                  )
                ))
              ) : typeof industryData.introduction === 'string' ? (
                /* Handle case where introduction is a simple string */
                React.createElement(
                  "p",
                  null,
                  industryData.introduction
                )
              ) : typeof industryData.introduction === 'object' && industryData.introduction !== null ? (
                /* Handle case where introduction is an object with title, content, image */
                React.createElement(
                  "div",
                  { className: "introduction-content" },
                  (industryData.introduction as IntroductionObject).title && React.createElement(
                    "h3",
                    { className: "text-xl font-bold mb-4" },
                    (industryData.introduction as IntroductionObject).title
                  ),
                  (industryData.introduction as IntroductionObject).content && React.createElement(
                    "div",
                    { dangerouslySetInnerHTML: { __html: (industryData.introduction as IntroductionObject).content as string } }
                  ),
                  (industryData.introduction as IntroductionObject).image && React.createElement(
                    "div",
                    { className: "mt-6" },
                    React.createElement(
                      Image,
                      {
                        src: (industryData.introduction as IntroductionObject).image as string,
                        alt: industryData.title,
                        width: 800,
                        height: 450,
                        className: "rounded-lg shadow-md"
                      }
                    )
                  )
                )
              ) : (
                /* Fallback for any other case */
                React.createElement(
                  "p",
                  null,
                  "No introduction available"
                )
              )
            )
          ),
          React.createElement(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeIn
            },
            React.createElement(
              "div",
              { className: "rounded-lg overflow-hidden shadow-xl" },
              React.createElement(
                Image,
                {
                  src: locale === 'en' && industryData.title && industryData.title.toLowerCase().includes('healthcare') 
                    ? '/images/healthcare/healthcare_nurce_uniform.jpg'
                    : `/images/${locale === 'ar' ? 'ar-' : ''}${
                      Array.isArray(industryData.products) && industryData.products.length > 0 && industryData.products[0]?.image
                        ? industryData.products[0].image
                        : industryData.heroImage || 'industry-default.jpg'
                    }`,
                  alt: industryData.title,
                  width: 600,
                  height: 450,
                  className: "w-full h-auto"
                }
              )
            )
          )
        )
      )
    ),
    
    /* Key Benefits Section */
    ((industryData.benefits && Array.isArray(industryData.benefits) && industryData.benefits.length > 0) || 
      (industryData.keyBenefits && Array.isArray(industryData.keyBenefits) && industryData.keyBenefits.length > 0)) && (
      React.createElement(
        "section",
        { className: "py-16 bg-neutral-50" },
        React.createElement(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeIn
          },
          React.createElement(
            SectionHeading,
            { 
              centered: false, 
              subtitle: isRtl ? "لماذا تختار زي UNEOM لقطاعك" : "Why Choose UNEOM For Your Industry", 
              children: isRtl ? "المزايا والفوائد" : "Benefits & Advantages" 
            }
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" },
            (industryData.benefits || industryData.keyBenefits || []).map((benefit, index) => (
              React.createElement(
                motion.div,
                {
                  key: index,
                  className: "bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300",
                  variants: fadeIn
                },
                React.createElement(
                  "div",
                  { className: "rounded-full bg-primary-100 p-3 w-16 h-16 flex items-center justify-center mb-4" },
                  React.createElement(
                    Image,
                    {
                      src: typeof benefit.icon === 'string' && !benefit.icon.startsWith('/') && !benefit.icon.startsWith('http') 
                        ? '/images/default-placeholder.jpg' 
                        : benefit.icon,
                      alt: benefit.title,
                      width: 32,
                      height: 32,
                      className: "text-primary-600"
                    }
                  ),
                  React.createElement(
                    "h3",
                    { className: "text-xl font-bold text-neutral-900 mb-2" },
                    benefit.title
                  ),
                  React.createElement(
                    "p",
                    { className: "text-neutral-600" },
                    benefit.description
                  )
                )
              )
            )
          )
        )
      )
    ),
    
    /* Featured Products Section */
    createFeaturedProductsSection(),
    
    /* Products Section */
    industryData.products && Array.isArray(industryData.products) && industryData.products.length > 0 && (
      React.createElement(
        "section",
        { className: "py-16 bg-white" },
        React.createElement(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeIn
          },
          React.createElement(
            SectionHeading,
            { centered: true, children: isRtl ? "منتجاتنا" : "Our Products" }
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" },
            industryData.products.map((product) => {
              // Generate a fallback href if none is provided
              const productHref = product.href || 
                (product.id ? `/products/${product.id.toLowerCase().replace(/ /g, '-')}` : 
                `/products/${product.name.toLowerCase().replace(/ /g, '-')}`);
              
              return React.createElement(
                motion.div,
                {
                  key: product.id || product.name,
                  className: "group bg-neutral-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full",
                  variants: fadeIn
                },
                React.createElement(
                  "div",
                  { className: "relative h-64 w-full overflow-hidden" },
                  React.createElement(
                    Image,
                    {
                      src: product.image,
                      alt: product.name,
                      fill: true,
                      className: "object-cover group-hover:scale-105 transition-transform duration-500"
                    }
                  )
                ),
                React.createElement(
                  "div",
                  { className: "p-6 flex flex-col flex-grow" },
                  React.createElement(
                    "h3",
                    { className: "text-xl font-bold text-neutral-900 mb-2" },
                    React.createElement(
                      Link,
                      {
                        href: productHref,
                        className: "hover:text-primary-600 transition-colors duration-300"
                      },
                      product.name
                    )
                  ),
                  React.createElement(
                    "p",
                    { className: "text-neutral-600 mb-4 flex-grow" },
                    product.description
                  ),
                  product.features && product.features.length > 0 && React.createElement(
                    "div",
                    { className: "mb-4" },
                    React.createElement(
                      "h4",
                      { className: "text-sm font-semibold text-neutral-700 mb-2" },
                      isRtl ? "المميزات:" : "Features:"
                    ),
                    React.createElement(
                      "ul",
                      { className: "grid grid-cols-2 gap-x-2 gap-y-1" },
                      product.features.map((feature, idx) => 
                        React.createElement(
                          "li",
                          { key: idx, className: "text-sm text-neutral-600 flex items-center" },
                          React.createElement(
                            "span",
                            { className: "text-primary-500 mr-1" },
                            "•"
                          ),
                          feature
                        )
                      )
                    )
                  ),
                  React.createElement(
                    Link,
                    {
                      href: productHref,
                      className: "text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                    },
                    isRtl ? 'استكشاف المنتج' : 'Explore Product',
                    isRtl ? (
                      React.createElement(
                        "svg",
                        {
                          className: "mr-2 h-5 w-5 transform rotate-180",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        },
                        React.createElement(
                          "path",
                          {
                            fillRule: "evenodd",
                            d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          }
                        )
                      )
                    ) : (
                      React.createElement(
                        "svg",
                        {
                          className: "ml-2 h-5 w-5",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        },
                        React.createElement(
                          "path",
                          {
                            fillRule: "evenodd",
                            d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          }
                        )
                      )
                    )
                  )
                )
              );
            })
          )
        )
      )
    ),
    
    /* Fabric Technologies Section */
    (industryData.fabricTechnologies && 
      (Array.isArray(industryData.fabricTechnologies) 
        ? industryData.fabricTechnologies.length > 0 
        : (industryData.fabricTechnologies as FabricTechnologiesObject).items?.length > 0)) && (
      React.createElement(
        "section",
        { className: "py-16 bg-neutral-50" },
        React.createElement(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeIn
          },
          React.createElement(
            SectionHeading,
            { centered: true, children: isRtl ? "تقنيات النسيج لدينا" : "Our Fabric Technologies" }
          ),
          /* Show description if it exists in the object format */
          !Array.isArray(industryData.fabricTechnologies) && (industryData.fabricTechnologies as FabricTechnologiesObject).description && (
            React.createElement(
              "p",
              { className: "text-center text-lg text-neutral-600 max-w-3xl mx-auto mb-8" },
              (industryData.fabricTechnologies as FabricTechnologiesObject).description
            )
          ),
          React.createElement(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" },
            Array.isArray(industryData.fabricTechnologies) 
              ? industryData.fabricTechnologies.map((tech, index) => (
                  React.createElement(
                    "div",
                    { key: index, className: "flex items-start" },
                    React.createElement(
                      "div",
                      { className: "rounded-full bg-primary-100 p-2 flex-shrink-0 mr-4" },
                      React.createElement(
                        Image,
                        {
                          src: typeof tech.icon === 'string' && !tech.icon.startsWith('/') && !tech.icon.startsWith('http') 
                            ? '/images/default-placeholder.jpg' 
                            : tech.icon,
                          alt: tech.name,
                          width: 24,
                          height: 24,
                          className: "text-primary-600"
                        }
                      )
                    ),
                    React.createElement(
                      "div",
                      null,
                      React.createElement(
                        "h3",
                        { className: "text-lg font-semibold text-neutral-900 mb-1" },
                        tech.name
                      ),
                      React.createElement(
                        "p",
                        { className: "text-neutral-600" },
                        tech.description
                      )
                    )
                  )
                ))
              : (industryData.fabricTechnologies as FabricTechnologiesObject).items.map((item, index) => (
                  React.createElement(
                    "div",
                    { key: index, className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" },
                    React.createElement(
                      "h3",
                      { className: "text-lg font-semibold text-neutral-900 mb-3" },
                      item.name
                    ),
                    React.createElement(
                      "p",
                      { className: "text-neutral-600 mb-4" },
                      item.description
                    ),
                    item.image && React.createElement(
                      "div",
                      { className: "mt-4 rounded-md overflow-hidden" },
                      React.createElement(
                        Image,
                        {
                          src: item.image,
                          alt: item.name,
                          width: 300,
                          height: 180,
                          className: "w-full h-auto object-cover"
                        }
                      )
                    )
                  )
                ))
          )
        )
      )
    ),
    
    /* Customization Options Section */
    (industryData.customizationOptions || industryData.customization) && (
      (Array.isArray(industryData.customizationOptions) 
        ? industryData.customizationOptions.length > 0 
        : industryData.customization && industryData.customization.options && industryData.customization.options.length > 0) && (
        React.createElement(
          "section",
          { className: "py-16 bg-neutral-50" },
          React.createElement(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeIn
            },
            React.createElement(
              SectionHeading,
              { centered: true, className: "mb-12", children: isRtl ? "خيارات التخصيص" : "Customization Options" }
            ),
            /* Show description if it exists in the object format */
            industryData.customization?.description && (
              React.createElement(
                "p",
                { className: "text-center text-lg text-neutral-600 max-w-3xl mx-auto mb-8" },
                industryData.customization.description
              )
            ),
            React.createElement(
              "div",
              { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12" },
              industryData.customizationOptions && Array.isArray(industryData.customizationOptions) 
                ? industryData.customizationOptions.map((option, index) => (
                    React.createElement(
                      "div",
                      { key: index, className: "flex items-start" },
                      React.createElement(
                        "div",
                        { className: "rounded-full bg-primary-100 p-2 flex-shrink-0 mr-4" },
                        React.createElement(
                          Image,
                          {
                            src: typeof option.icon === 'string' && !option.icon.startsWith('/') && !option.icon.startsWith('http') 
                              ? '/images/default-placeholder.jpg' 
                              : option.icon,
                            alt: option.name,
                            width: 24,
                            height: 24,
                            className: "text-primary-600"
                          }
                        )
                      ),
                      React.createElement(
                        "div",
                        null,
                        React.createElement(
                          "h3",
                          { className: "text-lg font-semibold text-neutral-900 mb-1" },
                          option.name
                        ),
                        React.createElement(
                          "p",
                          { className: "text-neutral-600" },
                          option.description
                        )
                      )
                    )
                  ))
                : industryData.customization?.options.map((option, index) => (
                    React.createElement(
                      "div",
                      { key: index, className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300" },
                      React.createElement(
                        "h3",
                        { className: "text-lg font-semibold text-neutral-900 mb-3" },
                        option.name
                      ),
                      React.createElement(
                        "p",
                        { className: "text-neutral-600 mb-4" },
                        option.description
                      ),
                      option.image && React.createElement(
                        "div",
                        { className: "mt-4 rounded-md overflow-hidden" },
                        React.createElement(
                          Image,
                          {
                            src: option.image,
                            alt: option.name,
                            width: 300,
                            height: 180,
                            className: "w-full h-auto object-cover"
                          }
                        )
                      )
                    )
                  ))
            )
          )
        )
      )
    ),
    
    /* Testimonials Section */
    industryData.testimonials && Array.isArray(industryData.testimonials) && industryData.testimonials.length > 0 && (
      React.createElement(
        "section",
        { className: "py-16 bg-primary-600 text-white" },
        React.createElement(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeIn
          },
          React.createElement(
            SectionHeading,
            { centered: true, className: "text-white" },
            isRtl ? "ماذا يقول عملاؤنا" : "What Our Clients Say"
          ),
          React.createElement(
            "div",
            { className: "mt-12 relative" },
            industryData.testimonials.map((testimonial, index) => (
              React.createElement(
                "div",
                { key: testimonial.id, className: index === 0 ? "" : "hidden" },
                React.createElement(
                  "div",
                  { className: "flex flex-col items-center text-center" },
                  testimonial.image && React.createElement(
                    "div",
                    { className: "w-20 h-20 rounded-full overflow-hidden mb-4" },
                    React.createElement(
                      Image,
                      {
                        src: testimonial.image,
                        alt: testimonial.author,
                        width: 80,
                        height: 80,
                        className: "object-cover w-full h-full"
                      }
                    )
                  ),
                  React.createElement(
                    "blockquote",
                    { className: "text-xl italic text-neutral-700 mb-6" },
                    "&ldquo;",
                    testimonial.quote,
                    "&rdquo;"
                  ),
                  React.createElement(
                    "cite",
                    null,
                    React.createElement(
                      "div",
                      { className: "font-bold text-neutral-900" },
                      testimonial.author
                    ),
                    React.createElement(
                      "div",
                      { className: "text-neutral-600" },
                      testimonial.position,
                      ", ",
                      testimonial.company
                    )
                  )
                )
              )
            ))
          )
        )
      )
    ),
    
    /* Related Content Section */
    createRelatedContentSection(),
    
    /* Features Section */
    industryData.features && Array.isArray(industryData.features) && industryData.features.length > 0 && (
      React.createElement(
        "section",
        { className: "py-16 bg-white" },
        React.createElement(
          Container,
          null,
          React.createElement(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeIn
            },
            React.createElement(
              SectionHeading,
              { centered: true },
              isRtl ? "لماذا تختار يونيوم" : "Why Choose UNEOM"
            ),
            React.createElement(
              "div",
              { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" },
              industryData.features.map((feature, index) => (
                React.createElement(
                  motion.div,
                  {
                    key: index,
                    className: "flex items-start p-4 bg-neutral-50 rounded-lg",
                    variants: fadeIn
                  },
                  feature.icon && React.createElement(
                    "div",
                    { className: "flex-shrink-0 mr-4" },
                    React.createElement(
                      "div",
                      { className: "bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center" },
                      React.createElement(
                        Image,
                        {
                          src: feature.icon,
                          alt: "",
                          width: 24,
                          height: 24,
                          className: "text-primary-600"
                        }
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "h3",
                      { className: "text-lg font-bold text-neutral-900 mb-2" },
                      feature.title
                    ),
                    React.createElement(
                      "p",
                      { className: "text-neutral-600" },
                      feature.description
                    )
                  )
                )
              ))
            )
          )
        )
      )
    ),
    
    /* FAQ Section */
    industryData.faqItems && Array.isArray(industryData.faqItems) && industryData.faqItems.length > 0 && (
      React.createElement(
        "section",
        { className: "py-16 bg-neutral-50" },
        React.createElement(
          Container,
          null,
          React.createElement(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeIn
            },
            React.createElement(
              SectionHeading,
              { centered: true },
              isRtl ? "الأسئلة الشائعة" : "Frequently Asked Questions"
            ),
            React.createElement(
              "div",
              { className: "mt-12 max-w-3xl mx-auto space-y-6" },
              industryData.faqItems.map((faq, index) => (
                React.createElement(
                  motion.div,
                  {
                    key: index,
                    className: "bg-white rounded-lg shadow-md overflow-hidden",
                    variants: fadeIn
                  },
                  React.createElement(
                    "div",
                    { className: "p-6" },
                    React.createElement(
                      "h3",
                      { className: "text-lg font-bold text-neutral-900 mb-3" },
                      faq.question
                    ),
                    React.createElement(
                      "div",
                      { className: "text-neutral-600 prose" },
                      faq.answer
                    )
                  )
                )
              ))
            )
          )
        )
      )
    ),
    
    /* Quote Request Form Section */
    React.createElement(
      "section",
      { className: "py-16 bg-neutral-50" },
      React.createElement(
        Container,
        null,
        React.createElement(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeIn,
            className: "text-center mb-10"
          },
          React.createElement(
            "h2",
            { className: "text-3xl font-bold mb-2" },
            locale === 'ar' ? "طلب عرض سعر سريع" : "Request a Quick Quote"
          ),
          React.createElement(
            "p",
            { className: "text-lg text-neutral-600" },
            locale === 'ar' 
              ? "املأ النموذج أدناه، وسنرد عليك خلال 24 ساعة" 
              : "Fill in the form below, and we'll get back to you within 24 hours"
          )
        ),
        React.createElement(QuoteForm, { locale: locale })
      )
    ),
    
    /* CTA Section - Now using the conditionally created section */
    ctaSection
  ))
  
  // At the end of the component, just before the return statement:
  console.log("Rendering IndustryPageLayout with data:", { 
    title: industryData.title,
    hasFeaturedProducts: !!industryData.featuredProducts,
    featuredProductsCount: industryData.featuredProducts?.length,
    hasRelatedContent: !!industryData.relatedContent,
    relatedContentCount: industryData.relatedContent?.length
  });

  const pageContent = (
    <>
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white">
        {/* Hero image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image 
              src={industryData.heroImage} 
              alt={industryData.title} 
              fill 
              className="object-cover"
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/75 via-neutral-900/50 to-neutral-900/30"></div>
          </div>
        </div>
        
        {/* Hero content */}
        <Container>
          <div className="relative z-10 py-20 md:py-32 lg:py-40 max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {industryData.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 mb-8"
            >
              {industryData.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="/quote" variant="primary" size="xl">
                {isRtl ? "اطلب عرض أسعار" : "Request a Quote"}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {Array.isArray(industryData.introduction) ? 
              industryData.introduction.map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-lg text-neutral-700 mb-6"
                >
                  {paragraph}
                </motion.p>
              )) : 
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-lg text-neutral-700"
              >
                {industryData.introduction}
              </motion.p>
            }
          </div>
        </Container>
      </section>
      
      {/* Featured Products Section */}
      {createFeaturedProductsSection()}
      
      {/* Related Content Section */}
      {createRelatedContentSection()}
      
      {/* Other sections */}
      {industryData.benefits && industryData.benefits.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading centered={true}>
                {isRtl ? "المزايا والفوائد" : "Benefits & Advantages"}
              </SectionHeading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {industryData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
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
              </div>
            </motion.div>
          </Container>
        </section>
      )}
    </>
  );
  
  return skipMainLayout ? (
    pageContent
  ) : (
    <MainLayout locale={locale}>
      {pageContent}
    </MainLayout>
  );
} 