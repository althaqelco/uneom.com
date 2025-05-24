import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaGraduationCap, FaAward, FaBriefcase, FaBook, FaLinkedinIn, FaTwitter, FaIndustry, FaThumbsUp } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import { authors } from '@/lib/data/authors';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';
export const metadata: Metadata = {
  title: 'Authors | _old_id | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'authors | _old_id'],
  openGraph: {
    title: 'Authors | _old_id | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/authors/_old_id/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Authors | _old_id - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: AuthorPageProps): Metadata {
  const author = authors.find((author) => author.id === params.slug);
  
  if (!author) {
    return {
      title: 'Author Not Found | UNEOM',
      description: 'The requested author profile could not be found.',
    };
  }
  
  return {
    title: `${author.name} - ${author.title} | UNEOM`,
    description: author.shortBio,
    openGraph: {
      title: `${author.name} - ${author.title} | UNEOM`,
      description: author.shortBio,
      images: [
        {
          url: author.avatar,
          width: 800,
          height: 600,
          alt: author.name,
        }
      ],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} - ${author.title}`,
      description: author.shortBio,
      images: [author.avatar],
    },
  };
}

export function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.id,
  }));
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = authors.find((author) => author.id === params.slug);
  
  if (!author) {
    notFound();
  }
  
  // Schema.org structured data for the person/expert
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.title,
    "description": author.bio,
    "image": author.avatar,
    "sameAs": [
      author.linkedin,
      author.twitter,
    ].filter(Boolean),
    "knowsAbout": author.expertise,
    "worksFor": {
      "@type": "Organization",
      "name": "UNEOM",
      "url": "https://www.uneom.com"
    },
  };

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16 md:py-24 relative overflow-hidden">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Authors | _old_id</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Authors | _old_id</h1>
      
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Authors | _old_id</h1>
      
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        <Container>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Author Image */}
            <div className="md:w-1/3 lg:w-1/4">
              <div className="relative w-48 h-48 md:w-full md:h-auto aspect-square rounded-full md:rounded-lg overflow-hidden border-4 border-white/20">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Author Information */}
            <div className="md:w-2/3 lg:w-3/4 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {author.name}
              </h1>
              <p className="text-xl text-primary-300 font-medium mb-4">{author.title}</p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                {/* Experience Badge */}
                <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <FaBriefcase className="mr-2" />
                  <span>{author.experience}+ years experience</span>
                </div>
                
                {/* Industries Badge */}
                <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <FaIndustry className="mr-2" />
                  <span>{author.industries.length} industries</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 justify-center md:justify-start mb-8">
                {author.linkedin && (
                  <a 
                    href={author.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/10 p-3 rounded-full text-white hover:bg-primary-600 transition-colors"
                    aria-label={`${author.name}'s LinkedIn Profile`}
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                )}
                {author.twitter && (
                  <a 
                    href={author.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white/10 p-3 rounded-full text-white hover:bg-primary-600 transition-colors"
                    aria-label={`${author.name}'s Twitter Profile`}
                  >
                    <FaTwitter size={18} />
                  </a>
                )}
              </div>
              
              <p className="text-lg text-neutral-300 leading-relaxed">{author.shortBio}</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 sticky top-24">
                {/* Expertise */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Areas of Expertise</h3>
                  <div className="space-y-2">
                    {author.expertise.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-1 h-6 bg-primary-600 rounded-r mr-3"></div>
                        <span className="text-neutral-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Industries */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Industry Focus</h3>
                  <div className="flex flex-wrap gap-2">
                    {author.industries.map((industry, index) => (
                      <span 
                        key={index} 
                        className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-md text-sm"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Credentials */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">
                    <FaGraduationCap className="inline-block mr-2" /> 
                    Credentials
                  </h3>
                  <ul className="space-y-3">
                    {author.credentials.map((credential, index) => (
                      <li key={index} className="text-neutral-700 pb-3 border-b border-neutral-100 last:border-0">
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Education (if available) */}
                {author.education && author.education.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">Education</h3>
                    <ul className="space-y-3">
                      {author.education.map((edu, index) => (
                        <li key={index} className="text-neutral-700 pb-3 border-b border-neutral-100 last:border-0">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Contact CTA */}
                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                  <h3 className="text-lg font-bold text-primary-900 mb-2">Request Consultation</h3>
                  <p className="text-neutral-700 text-sm mb-4">
                    Interested in working with {author.name.split(' ')[0]} on your uniform project?
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-primary-600 text-white text-center py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Bio */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-200">About {author.name}</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="whitespace-pre-line text-neutral-700 leading-relaxed">{author.bio}</p>
                </div>
              </div>
              
              {/* Certifications */}
              {author.certifications && author.certifications.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-200">
                    <FaAward className="inline-block mr-2 text-primary-600" />
                    Certifications & Specializations
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {author.certifications.map((cert, index) => (
                      <div 
                        key={index}
                        className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 flex items-start"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mr-3">
                          <FaThumbsUp />
                        </div>
                        <span className="text-neutral-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Publications */}
              {author.publications && author.publications.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-200">
                    <FaBook className="inline-block mr-2 text-primary-600" />
                    Publications & Research
                  </h2>
                  <div className="space-y-6">
                    {author.publications.map((pub, index) => (
                      <div key={index} className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">"{pub.title}"</h3>
                        <div className="flex flex-wrap items-center text-neutral-500 text-sm mb-4">
                          <span className="mr-3">{pub.publisher}</span>
                          <span className="mr-3">•</span>
                          <span>{pub.year}</span>
                          {pub.url && (
                            <>
                              <span className="mr-3">•</span>
                              <a 
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:underline"
                              >
                                Read Publication
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Contributions */}
              {author.contributions && author.contributions.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-neutral-200">
                    Notable Contributions
                  </h2>
                  <ul className="space-y-3 list-disc pl-5">
                    {author.contributions.map((contribution, index) => (
                      <li key={index} className="text-neutral-700">
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Related Experts */}
              <div className="mt-12 pt-12 border-t border-neutral-200">
                <h2 className="text-2xl font-bold mb-6">Related Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {authors
                    .filter(relatedAuthor => 
                      relatedAuthor.id !== author.id && 
                      relatedAuthor.industries.some(industry => 
                        author.industries.includes(industry)
                      )
                    )
                    .slice(0, 2)
                    .map(relatedAuthor => (
                      <Link 
                        key={relatedAuthor.id}
                        href={`/authors/${relatedAuthor.id}`}
                        className="flex items-center p-4 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-primary-300 transition-colors group"
                      >
                        <div className="flex-shrink-0 mr-4">
                          <div className="relative h-16 w-16 rounded-full overflow-hidden">
                            <Image
                              src={relatedAuthor.avatar}
                              alt={relatedAuthor.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                            {relatedAuthor.name}
                          </h3>
                          <p className="text-neutral-600 text-sm">{relatedAuthor.title}</p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Connect with {author.name.split(' ')[0]} and Our Team of Experts
            </h2>
            <p className="text-neutral-600 mb-6">
              Our industry specialists can help you design the perfect uniform program for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Request a Consultation
              </Link>
              <Link
                href="/authors"
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View All Experts
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 