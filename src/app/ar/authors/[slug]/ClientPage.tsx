'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

// Author type definition
interface Author {
  id: string;
  name: string;
  image: string;
  title: string;
  bio: string;
  fullBio?: string;
  education?: string[];
  experience?: {
    position: string;
    company: string;
    period: string;
    description: string;
  }[];
  expertise: string[];
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Blog post type definition
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  readTime: number;
}

interface ClientPageProps {
  author: Author;
  authorPosts: BlogPost[];
}

export default function ClientPage({ author, authorPosts }: ClientPageProps) {
  // Social Media Icons Components
  const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126-2.126-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );

  return (
    <>
      {/* Author Hero Section */}
      <div dir="rtl" className="relative py-24 bg-primary-700 text-white">
        <Container>
          <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8">
            <div className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-lg overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-3">
                {author.name}
              </h1>
              <p className="text-xl text-white/90 mb-4">{author.title}</p>
              <div className="flex flex-wrap gap-2 mb-6 justify-end">
                {author.expertise.map((skill, idx) => (
                  <span key={idx} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              {author.socialMedia && (
                <div className="flex gap-4 justify-end">
                  {author.socialMedia.twitter && (
                    <a href={author.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <TwitterIcon />
                    </a>
                  )}
                  {author.socialMedia.linkedin && (
                    <a href={author.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <LinkedinIcon />
                    </a>
                  )}
                  {author.socialMedia.instagram && (
                    <a href={author.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <InstagramIcon />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      
      <section dir="rtl" className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Author Bio and Experience */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-right">
                <h2 className="text-2xl font-bold mb-4">عن {author.name}</h2>
                <p className="text-neutral-600 mb-6">{author.fullBio || author.bio}</p>
                
                {author.education && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-3">التعليم</h3>
                    <ul className="space-y-2">
                      {author.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start">
                          <span>{edu}</span>
                          <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2"></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {author.experience && (
                  <div>
                    <h3 className="text-lg font-bold mb-3">الخبرة العملية</h3>
                    <div className="space-y-4">
                      {author.experience.map((exp, idx) => (
                        <div key={idx} className="border-r-2 border-primary-200 pr-4">
                          <h4 className="font-bold">{exp.position}</h4>
                          <div className="text-primary-600 text-sm mb-1">{exp.company}</div>
                          <div className="text-neutral-500 text-sm mb-2">{exp.period}</div>
                          <p className="text-neutral-600 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-right">
                <h2 className="text-2xl font-bold mb-4">المجالات</h2>
                <div className="flex flex-wrap gap-2 justify-end">
                  {author.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Author Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-right">أحدث المقالات بقلم {author.name}</h2>
              
              <div className="space-y-8">
                {authorPosts.map((post, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row-reverse">
                    <div className="relative md:w-1/3 h-56 md:h-auto">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3 text-right">
                      <div className="mb-2">
                        <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full ml-2">
                          {post.category}
                        </span>
                        <span className="text-neutral-500 text-xs">
                          {post.date} • {post.readTime} دقائق قراءة
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-primary-600 transition-colors duration-200">
                        <Link href={`/ar/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/ar/blog/${post.id}`}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-right inline-block"
                      >
                        قراءة المقال ←
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Author CTA */}
              <div className="mt-12 bg-neutral-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">تعاون مع {author.name}</h3>
                <p className="text-neutral-600 mb-6">مهتم بفرص الاستشارة أو التعاون؟ تواصل مع فريقنا.</p>
                <Link 
                  href="/ar/contact" 
                  className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 