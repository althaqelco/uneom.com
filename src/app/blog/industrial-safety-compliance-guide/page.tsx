import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaTags, FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaShieldAlt, FaHardHat, FaExclamationTriangle, FaCheckCircle, FaFileAlt, FaUsers } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogAuthor from '@/components/blog/BlogAuthor';
import TableOfContents from '@/components/blog/TableOfContents';

// Blog post data
const post = {
  slug: 'industrial-safety-compliance-guide',
  title: 'Industrial Safety Compliance Guide: Essential Uniform Standards in Saudi Arabia',
  excerpt: 'Discover the essential workplace safety compliance requirements for industrial uniforms in Saudi Arabia, including regulations, standards, and best practices for employee protection.',
  coverImage: '/images/industries/manufacturing/manufacturing_uniform_overview.jpg',
  date: 'April 20, 2024',
  readTime: '9 min read',
  author: {
    name: 'Eng. Ahmed Al-Sulaiman',
    avatar: '/images/blog/author-khalid.jpg',
    title: 'Safety Compliance Expert'
  },
  categories: ['Industrial Safety', 'Compliance', 'Workplace Standards'],
  relatedPosts: [
    {
      slug: 'industrial-protective-clothing-advances',
      title: 'Advanced Materials in Industrial Protective Clothing: 2024 Innovations',
      excerpt: 'Exploring the latest innovations in industrial protective clothing materials and technologies.',
      coverImage: '/images/industries/manufacturing/manufacturing_uniform_variation.jpg',
      date: 'March 15, 2024',
      readTime: '7 min read'
    },
    {
      slug: 'sustainable-uniforms-2024-trends',
      title: 'Sustainable Uniform Solutions for Saudi Industries',
      excerpt: 'How Saudi industrial sectors are embracing eco-friendly uniforms without compromising safety standards.',
      coverImage: '/images/blog/sustainable-uniforms.jpg',
      date: 'February 12, 2024',
      readTime: '5 min read'
    },
    {
      slug: 'vision-2030-reshaping-dress-codes',
      title: 'How Vision 2030 is Reshaping Industrial Dress Codes',
      excerpt: 'Saudi Arabia\'s Vision 2030 initiatives are transforming workplace attire requirements while maintaining safety standards.',
      coverImage: '/images/blog/vision-2030.jpg',
      date: 'January 28, 2024',
      readTime: '8 min read'
    }
  ]
};

export const metadata: Metadata = {
  title: 'Industrial Safety Compliance Guide for Saudi Factories | UNEOM',
  description: 'Comprehensive guide to safety standards, regulations, and workwear compliance requirements for manufacturing facilities in Saudi Arabia. Essential information for factory managers and safety officers.',
  keywords: 'Saudi industrial safety, factory safety compliance, Saudi factory regulations, SASO industrial standards, manufacturing safety KSA, workplace safety Saudi Arabia, factory uniform compliance, industrial PPE requirements',
  metadataBase: new URL('https://uneom.com'),
  openGraph: {
    title: 'Industrial Safety Compliance Guide for Saudi Factories | UNEOM',
    description: 'Essential regulations, standards, and best practices for ensuring workplace safety compliance in Saudi Arabia\'s manufacturing sector.',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial safety compliance for Saudi factories',
      }
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Safety Compliance Guide for Saudi Factories',
    description: 'Essential regulations, standards, and best practices for ensuring workplace safety compliance in Saudi Arabia\'s manufacturing sector.',
    images: ['https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp'],
  },
};

export default function IndustrialSafetyComplianceGuidePage() {
  // Static URL helpers for sharing
  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`Check out this article: ${post.title} - https://uneom.com/blog/${post.slug}`)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://uneom.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://uneom.com/blog/${post.slug}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://uneom.com/blog/${post.slug}`)}`
  };

  // Table of contents data
  const tableOfContents = [
    {
      id: 'introduction',
      title: 'Introduction to Industrial Safety in Saudi Arabia',
    },
    {
      id: 'safety-standards',
      title: 'Key Safety Standards and Regulations',
      subItems: [
        { id: 'saso-standards', title: 'SASO Standards' },
        { id: 'international-standards', title: 'International Standards' },
        { id: 'vision-2030', title: 'Vision 2030 Safety Initiatives' },
      ]
    },
    {
      id: 'workwear-requirements',
      title: 'Industrial Workwear Compliance Requirements',
      subItems: [
        { id: 'protective-clothing', title: 'Protective Clothing Standards' },
        { id: 'specialized-environments', title: 'Requirements for Specialized Environments' },
      ]
    },
    {
      id: 'safety-management',
      title: 'Safety Management Systems',
    },
    {
      id: 'compliance-checklist',
      title: 'Factory Safety Compliance Checklist',
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
    },
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Industrial Safety Compliance Guide for Saudi Factories",
    "image": "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp",
    "datePublished": "2023-09-15T08:00:00+03:00",
    "dateModified": "2023-11-20T10:30:00+03:00",
    "author": {
      "@type": "Person",
      "name": "Eng. Khalid Ibrahim",
      "url": "https://www.uneom.com/authors/khalid-ibrahim"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UNEOM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.uneom.com/images/logo.png"
      }
    },
    "description": "Essential regulations, standards, and best practices for ensuring workplace safety compliance in Saudi Arabia's manufacturing sector.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.uneom.com/blog/industrial-safety-compliance-guide"
    }
  };

  return (
    <div className="bg-white pt-6 pb-12">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumbs */}
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` }
          ]}
        />
      </Container>
      
      {/* Blog Post Header */}
      <Container className="mt-8">
        <div className="mx-auto max-w-4xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span 
                key={index}
                className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-700"
              >
                {category}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>
          
          {/* Author and Date Info */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-medium text-neutral-900">{post.author.name}</div>
              <div className="text-sm text-neutral-600">{post.author.title}</div>
            </div>
            <div className="border-l border-neutral-200 h-10 mx-2"></div>
            <div className="flex items-center text-neutral-600 text-sm">
              <FaCalendarAlt className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-neutral-600 text-sm">
              <FaClock className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Cover Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
      
      {/* Blog Post Content */}
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              In Saudi Arabia's rapidly evolving industrial sector, maintaining compliance with safety regulations is not just a legal requirement—it's essential for protecting workers and ensuring operational continuity. This comprehensive guide outlines the key compliance standards for industrial uniforms and workwear in the Kingdom.
            </p>

            <h2>Understanding Saudi Arabia's Industrial Safety Framework</h2>
            
            <p>
              Saudi Arabia's industrial safety regulations are governed by multiple authorities, including the Saudi Standards, Metrology and Quality Organization (SASO), the Ministry of Human Resources and Social Development, and the High Commission for Industrial Security. These bodies collectively establish and enforce standards for workplace safety, including requirements for protective clothing and uniforms.
            </p>
            
            <div className="my-8 bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-bold mb-3">Key Regulatory Frameworks:</h3>
              <ul>
                <li>SASO Standards for Industrial Protective Clothing (SASO GSO EN ISO 11612)</li>
                <li>Saudi Civil Defense Fire Safety Requirements</li>
                <li>Saudi Labor Law Chapter 8: Protection Against Occupational Hazards</li>
                <li>GOSI (General Organization for Social Insurance) Safety Requirements</li>
                <li>Industry-specific regulations from Aramco, SABIC, and other major industrial entities</li>
              </ul>
            </div>
            
            <h2>Essential Uniform Compliance Requirements by Industry</h2>
            
            <h3>Petrochemical and Oil & Gas Industries</h3>
            
            <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
              <Image
                src="/images/industries/manufacturing/manufacturing_uniform_product1.jpg"
                alt="Petrochemical Industry Safety Uniforms"
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              For workers in Saudi's petroleum and chemical processing facilities, uniforms must comply with flame-resistant (FR) standards. Key requirements include:
            </p>
            
            <ul>
              <li>Flame Resistance: All garments must meet NFPA 2112 standards with documented Arc Thermal Performance Value (ATPV)</li>
              <li>Full Coverage: Uniforms must provide complete coverage of the torso, arms, and legs</li>
              <li>Antistatic Properties: Fabrics must include antistatic fibers to prevent spark generation</li>
              <li>Chemical Resistance: Appropriate resistance to common industrial chemicals</li>
              <li>High-Visibility Elements: Reflective striping for areas with vehicle movement</li>
              <li>Proper Identification: Clear company and worker identification</li>
            </ul>
            
            <blockquote>
              "Compliance with Saudi safety standards isn't just about following regulations—it's about creating a culture of safety that protects our most valuable asset: our workforce."
              <footer>— Abdullah Al-Otaibi, Safety Director, Saudi Aramco</footer>
            </blockquote>
            
            <h3>Construction and Manufacturing</h3>
            
            <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
              <Image
                src="/images/industries/manufacturing/manufacturing_uniform_product2.jpg"
                alt="Construction Industry Safety Uniforms"
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Construction and manufacturing environments in Saudi Arabia present unique hazards requiring specific uniform features:
            </p>
            
            <ul>
              <li>Impact Protection: Reinforced areas for high-impact zones</li>
              <li>Cut Resistance: Appropriate cut-resistant materials in high-risk areas</li>
              <li>Weather Adaptation: Materials suitable for Saudi Arabia's extreme temperatures</li>
              <li>Mobility: Design that allows for freedom of movement while maintaining protection</li>
              <li>High-Visibility: ANSI/ISEA 107 compliant visibility features</li>
              <li>Sun Protection: UPF-rated fabrics to prevent sun exposure</li>
            </ul>
            
            <h3>Chemical and Pharmaceutical Industries</h3>
            
            <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
              <Image
                src="/images/industries/manufacturing/manufacturing_uniform_product3.jpg"
                alt="Chemical Industry Safety Uniforms"
                fill
                className="object-cover"
              />
            </div>
            
            <p>
              Workers handling chemicals require specialized protection that meets specific Saudi and international standards:
            </p>
            
            <ul>
              <li>Chemical Permeation Resistance: Documented resistance to specific chemicals used</li>
              <li>Splash Protection: Protection against chemical splashes and spills</li>
              <li>Proper Closure Systems: Sealed seams and secure closures to prevent chemical entry</li>
              <li>Decontamination Compatibility: Materials that can withstand decontamination procedures</li>
              <li>Static Dissipation: Properties that prevent static electricity buildup</li>
            </ul>
            
            <h2>Certification and Documentation Requirements</h2>
            
            <p>
              Proper documentation is crucial for demonstrating compliance with Saudi industrial safety regulations. Required documentation includes:
            </p>
            
            <ol>
              <li><strong>Manufacturer Certification:</strong> Valid certificates showing compliance with relevant standards</li>
              <li><strong>Material Testing Reports:</strong> Documentation of material performance testing</li>
              <li><strong>SASO Conformity Certificates:</strong> Products must have SASO approval</li>
              <li><strong>User Instructions:</strong> Arabic and English instructions for proper use and maintenance</li>
              <li><strong>Traceability Information:</strong> Batch numbers and manufacturing dates</li>
            </ol>
            
            <h2>Implementation Best Practices for Saudi Industrial Facilities</h2>
            
            <div className="bg-primary-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Compliance Implementation Checklist:</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-primary-800 mb-2">Assessment Phase:</h4>
                  <ul className="list-disc list-inside">
                    <li>Conduct workplace hazard assessment</li>
                    <li>Document specific protection requirements</li>
                    <li>Review applicable Saudi regulations</li>
                    <li>Consult with safety authorities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-800 mb-2">Selection Phase:</h4>
                  <ul className="list-disc list-inside">
                    <li>Choose SASO-certified uniforms</li>
                    <li>Verify third-party testing documentation</li>
                    <li>Ensure appropriate size availability</li>
                    <li>Consider climate adaptability</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-800 mb-2">Implementation Phase:</h4>
                  <ul className="list-disc list-inside">
                    <li>Develop clear uniform policies</li>
                    <li>Provide comprehensive training</li>
                    <li>Establish inspection procedures</li>
                    <li>Document issuance and training</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-800 mb-2">Maintenance Phase:</h4>
                  <ul className="list-disc list-inside">
                    <li>Establish cleaning protocols</li>
                    <li>Implement regular inspections</li>
                    <li>Create replacement schedules</li>
                    <li>Document maintenance activities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2>Adapting to Saudi Arabia's Climate Challenges</h2>
            
            <p>
              Saudi Arabia's extreme climate presents unique challenges for industrial uniforms. Compliant uniforms must balance protection with comfort in high-temperature environments:
            </p>
            
            <ul>
              <li><strong>Heat Stress Management:</strong> FR uniforms designed with moisture-wicking technology</li>
              <li><strong>Breathability:</strong> Fabric constructions that allow airflow while maintaining protection</li>
              <li><strong>Lightweight Protection:</strong> Innovative materials that provide protection without excessive weight</li>
              <li><strong>UV Protection:</strong> UPF-rated fabrics for outdoor workers</li>
              <li><strong>Hydration Support:</strong> Design features that accommodate hydration systems</li>
            </ul>
            
            <h2>Religious and Cultural Considerations</h2>
            
            <p>
              Compliant industrial uniforms in Saudi Arabia must also respect cultural and religious requirements:
            </p>
            
            <ul>
              <li>Compatible with traditional Saudi dress preferences</li>
              <li>Options for female workers aligning with modest dress requirements</li>
              <li>Prayer-time accommodation features</li>
              <li>Appropriate head covering options that maintain safety</li>
            </ul>
            
            <h2>Looking Forward: Compliance Trends for 2024-2025</h2>
            
            <p>
              Saudi Arabia's industrial safety regulations continue to evolve, with several emerging trends that will impact uniform compliance:
            </p>
            
            <ol>
              <li><strong>Digitalization of Compliance:</strong> Electronic tracking and verification of PPE certification</li>
              <li><strong>Integration with Vision 2030:</strong> Alignment with Saudi industrial development goals</li>
              <li><strong>Increased Localization:</strong> Greater emphasis on locally manufactured compliant uniforms</li>
              <li><strong>Smart Textiles:</strong> Adoption of monitoring technology in industrial uniforms</li>
              <li><strong>Sustainable Compliance:</strong> Environmentally friendly materials that maintain safety standards</li>
            </ol>
            
            <h2>Conclusion: Building a Culture of Compliance</h2>
            
            <p>
              Implementing compliant industrial uniforms in Saudi Arabia requires more than just purchasing certified garments—it demands a comprehensive approach to workplace safety culture. By understanding and properly implementing the safety standards outlined in this guide, industrial operations can protect their workforce while meeting their regulatory obligations.
            </p>
            
            <p>
              For organizations seeking to ensure full compliance with Saudi industrial uniform regulations, consultation with specialized uniform suppliers who understand both the technical requirements and cultural context is essential for success.
            </p>
          </div>
          
          {/* Social Share Icons */}
          <div className="flex space-x-2 mt-4">
            <Link href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              <FaWhatsapp />
            </Link>
            <Link href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
              <FaTwitter />
            </Link>
            <Link href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
              <FaLinkedin />
            </Link>
            <Link href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              <FaFacebook />
            </Link>
          </div>
          
          {/* Author Bio */}
          <div className="bg-neutral-50 p-6 rounded-xl mb-12">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-24 flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{post.author.name}</h3>
                <p className="text-neutral-600 mb-3">{post.author.title}</p>
                <p className="text-neutral-700">
                  Eng. Ahmed Al-Sulaiman is a certified safety compliance expert with over 15 years of experience in the Saudi industrial sector. He has worked with major organizations including Saudi Aramco and SABIC to develop and implement safety standards that align with both international best practices and local requirements.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="my-12">
            <SectionHeading>Related Articles</SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {post.relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={index} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-neutral-600 text-sm mb-2">
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                        <div className="flex items-center">
                          <FaClock className="mr-1" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Custom CTA Section */}
      <section className="bg-neutral-50 py-16 mt-12">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Need Compliant Industrial Uniforms for Your Saudi Workplace?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
              Contact UNEOM's industrial uniform experts for a personalized consultation on safety-compliant workwear solutions tailored to your specific industry requirements.
            </p>
            <Link href="/contact?inquiry=industrial-safety-compliance">
              <Button size="lg" className="px-8">
                Request Industrial Uniform Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
} 