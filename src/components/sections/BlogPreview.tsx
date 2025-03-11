"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { motion, useInView } from 'framer-motion';

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  image: string;
  author: string;
  category?: string;
  categoryLabel?: string;
  readTime?: string;
}

interface BlogPreviewProps {
  locale: string;
  title?: string;
  description?: string;
  posts?: BlogPost[];
}

type ContentType = {
  en: {
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
    readTime: string;
    dateFormat: (date: string) => string;
  };
  ar: {
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
    readTime: string;
    dateFormat: (date: string) => string;
  };
};

const BlogPreview: React.FC<BlogPreviewProps> = ({ locale, title, description, posts: customPosts }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // Ensure locale is either 'en' or 'ar' for type safety
  const safeLocale = locale === 'ar' ? 'ar' : 'en';
  
  // Content based on locale
  const content: ContentType = {
    en: {
      title: title || 'Latest Insights',
      subtitle: description || 'Expert perspectives on uniform industry trends, innovations, and best practices',
      readMore: 'Continue Reading',
      viewAll: 'Explore All Articles',
      readTime: 'min read',
      dateFormat: (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    },
    ar: {
      title: title || 'أحدث الرؤى',
      subtitle: description || 'وجهات نظر خبراء حول اتجاهات صناعة الزي الموحد والابتكارات وأفضل الممارسات',
      readMore: 'متابعة القراءة',
      viewAll: 'استكشاف جميع المقالات',
      readTime: 'دقائق للقراءة',
      dateFormat: (date: string) => {
        return new Date(date).toLocaleDateString('ar-SA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    }
  };

  // Updated blog posts data with enhanced details
  const defaultPosts: Record<string, BlogPost[]> = {
    en: [
      {
        title: 'How Saudi Vision 2030 is Reshaping Professional Dress Code Standards',
        excerpt: 'An in-depth analysis of how Vision 2030 initiatives are influencing corporate and institutional uniform standards across Saudi Arabia, balancing tradition with progressive modernization.',
        slug: 'vision-2030-reshaping-dress-codes',
        date: '2023-07-12',
        image: '/images/blog/vision-2030.jpg',
        author: 'Mohammed Al-Harbi',
        category: 'industry-trends',
        categoryLabel: 'Industry Trends',
        readTime: '7'
      },
      {
        title: 'Advanced Fabrics: Next Generation Materials for Saudi Healthcare Uniforms',
        excerpt: 'Exploring innovative antimicrobial and performance fabrics that are revolutionizing healthcare uniforms in Saudi hospitals, enhancing both staff comfort and patient safety.',
        slug: 'advanced-fabrics-healthcare-uniforms',
        date: '2023-06-23',
        image: '/images/blog/healthcare-uniforms.jpg',
        author: 'Dr. Sarah Al-Qahtani',
        category: 'healthcare',
        categoryLabel: 'Healthcare',
        readTime: '5'
      },
      {
        title: 'Sustainable Uniform Solutions for Eco-Conscious Saudi Corporations',
        excerpt: 'How leading Saudi organizations are embracing sustainable uniform solutions that reduce environmental impact while maintaining professional standards and cultural values.',
        slug: 'sustainable-uniform-solutions',
        date: '2023-05-18',
        image: '/images/blog/sustainable-uniforms.jpg',
        author: 'Khalid Al-Otaibi',
        category: 'sustainability',
        categoryLabel: 'Sustainability',
        readTime: '6'
      }
    ],
    ar: [
      {
        title: 'كيف تعيد رؤية 2030 السعودية تشكيل معايير قواعد الزي المهني',
        excerpt: 'تحليل متعمق لكيفية تأثير مبادرات رؤية 2030 على معايير الزي الموحد للشركات والمؤسسات في جميع أنحاء المملكة العربية السعودية، مع موازنة التقاليد مع التحديث التقدمي.',
        slug: 'vision-2030-reshaping-dress-codes',
        date: '2023-07-12',
        image: '/images/blog/vision-2030.jpg',
        author: 'محمد الحربي',
        category: 'industry-trends',
        categoryLabel: 'اتجاهات الصناعة',
        readTime: '7'
      },
      {
        title: 'الأقمشة المتطورة: مواد الجيل التالي للزي الموحد للرعاية الصحية السعودية',
        excerpt: 'استكشاف الأقمشة المبتكرة المضادة للميكروبات وأقمشة الأداء التي تحدث ثورة في الزي الموحد للرعاية الصحية في المستشفيات السعودية، وتعزيز راحة الموظفين وسلامة المرضى.',
        slug: 'advanced-fabrics-healthcare-uniforms',
        date: '2023-06-23',
        image: '/images/blog/healthcare-uniforms.jpg',
        author: 'د. سارة القحطاني',
        category: 'healthcare',
        categoryLabel: 'الرعاية الصحية',
        readTime: '5'
      },
      {
        title: 'حلول الزي الموحد المستدامة للشركات السعودية الواعية بيئيًا',
        excerpt: 'كيف تتبنى المؤسسات السعودية الرائدة حلول الزي الموحد المستدامة التي تقلل من التأثير البيئي مع الحفاظ على المعايير المهنية والقيم الثقافية.',
        slug: 'sustainable-uniform-solutions',
        date: '2023-05-18',
        image: '/images/blog/sustainable-uniforms.jpg',
        author: 'خالد العتيبي',
        category: 'sustainability',
        categoryLabel: 'الاستدامة',
        readTime: '6'
      }
    ]
  };

  const postsToDisplay = customPosts || defaultPosts[safeLocale];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 font-medium text-sm rounded-full mb-4 border border-primary-100"
          >
            {safeLocale === 'ar' ? 'معرفة الخبراء' : 'Expert Knowledge'}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
              {content[safeLocale].title}
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {content[safeLocale].subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 w-24 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto mt-6 rounded-full"
            style={{ transformOrigin: 'center' }}
          ></motion.div>
        </div>
        
        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-neutral-100">
            <div className="grid md:grid-cols-2 items-stretch">
              {/* Image Section */}
              <div className="relative h-80 md:h-full overflow-hidden">
                <Image 
                  src={postsToDisplay[0].image}
                  alt={postsToDisplay[0].title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {postsToDisplay[0].categoryLabel}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-3 flex items-center text-neutral-500 text-sm">
                  <span className="font-medium">{content[safeLocale].dateFormat(postsToDisplay[0].date)}</span>
                  <span className="mx-2">•</span>
                  <span>{postsToDisplay[0].readTime} {content[safeLocale].readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 leading-tight">
                  <Link 
                    href={`/${safeLocale === 'ar' ? 'ar/' : ''}blog/${postsToDisplay[0].slug}`}
                    className="hover:text-primary-600 transition-colors duration-200"
                  >
                    {postsToDisplay[0].title}
                  </Link>
                </h3>
                
                <p className="text-neutral-600 text-lg mb-6">
                  {postsToDisplay[0].excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 w-10 h-10 rounded-full overflow-hidden relative bg-neutral-100">
                      <Image 
                        src="/images/blog/author-khalid.jpg"
                        alt={postsToDisplay[0].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium text-neutral-800">{postsToDisplay[0].author}</span>
                  </div>
                  
                  <Link 
                    href={`/${safeLocale === 'ar' ? 'ar/' : ''}blog/${postsToDisplay[0].slug}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group"
                  >
                    <span>{content[safeLocale].readMore}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 ${safeLocale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Articles */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {postsToDisplay.slice(1).map((post, index) => (
            <motion.article 
              key={index} 
              variants={itemVariants}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Blog Image */}
              <Link href={`/${safeLocale === 'ar' ? 'ar/' : ''}blog/${post.slug}`} className="block">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {post.categoryLabel}
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Blog Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="mb-3 flex items-center text-neutral-500 text-sm">
                  <span className="font-medium">{content[safeLocale].dateFormat(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} {content[safeLocale].readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-neutral-900">
                  <Link 
                    href={`/${safeLocale === 'ar' ? 'ar/' : ''}blog/${post.slug}`}
                    className="hover:text-primary-600 transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-neutral-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 w-8 h-8 rounded-full overflow-hidden relative bg-neutral-100">
                      <Image 
                        src="/images/blog/author-khalid.jpg"
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">{post.author}</span>
                  </div>
                  
                  <Link 
                    href={`/${safeLocale === 'ar' ? 'ar/' : ''}blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group"
                  >
                    <span>{content[safeLocale].readMore}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 ${safeLocale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* View All Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href={`/${safeLocale === 'ar' ? 'ar/' : ''}blog`}
            className="inline-flex items-center bg-white px-8 py-4 border border-neutral-200 rounded-full text-primary-700 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-200 hover:bg-primary-50 group"
          >
            <span>{content[safeLocale].viewAll}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 ${safeLocale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogPreview; 