'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface ResourceInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function ResourcesPage() {
  const locale = 'en';
  
  // Resources content
  const resourceCategories = [
    {
      title: "UNEOM - Professional Uniforms",
      resources: [
        {
          id: 'fabric-guide',
          name: 'Fabric Guide',
          description: 'A comprehensive guide to uniform fabrics and materials, including performance characteristics and ideal applications.',
          image: '/images/blog/sustainable-uniforms.jpg',
          href: '/resources/fabric-guide'
        },
        {
          id: 'fabric-technology',
          name: 'Fabric Technology',
          description: 'Explore the innovative textile technologies that enhance comfort, durability, and functionality of modern uniforms.',
          image: '/images/avatar-placeholder.jpg',
          href: '/resources/fabric-technology'
        }
      ]
    },
    {
      title: 'Sizing & Fit',
      resources: [
        {
          id: 'size-guide',
          name: 'Size Guide',
          description: 'Detailed sizing charts and measurement instructions to ensure perfect-fitting uniforms for all body types.',
          image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
          href: '/resources/size-guide'
        },
        {
          id: 'fit-optimization',
          name: 'Fit Optimization',
          description: 'Learn how to optimize uniform fit for maximum comfort and professional appearance across your organization.',
          image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
          href: '/resources/fit-optimization'
        }
      ]
    },
    {
      title: 'Procurement & Management',
      resources: [
        {
          id: 'procurement-guide',
          name: 'Procurement Guide',
          description: 'Best practices for efficient uniform procurement, from needs assessment to delivery and implementation.',
          image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
          href: '/resources/procurement-guide'
        },
        {
          id: 'policy-templates',
          name: 'Uniform Policy Templates',
          description: 'Customizable templates for developing comprehensive corporate uniform policies and guidelines.',
          image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
          href: '/resources/policy-templates'
        }
      ]
    }
  ];
  
  const educationalResources = [
    {
      id: 'blog',
      name: 'Industry Blog',
      description: 'Stay updated with the latest trends, insights, and best practices in uniform management and design.',
      image: '/images/blog/healthcare-uniforms.jpg',
      href: '/blog'
    },
    {
      id: 'case-studies',
      name: 'Case Studies',
      description: 'Real-world examples showcasing how our uniform solutions have solved challenges for organizations across industries.',
      image: '/images/product-placeholder.jpg',
      href: '/resources/case-studies'
    },
    {
      id: 'webinars',
      name: 'Webinars & Events',
      description: 'Join our educational webinars and industry events to deepen your knowledge and connect with peers.',
      image: '/images/product-placeholder.jpg',
      href: '/resources/events'
    }
  ];
  
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <Image
            src="/images/blog/sustainable-uniforms.jpg"
            alt="UNEOM Resources"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Uniform Knowledge Center</h1>
            <p className="text-xl opacity-90 mb-8">
              Expert resources to help you optimize your uniform program and make informed decisions
            </p>
          </div>
        </Container>
      </section>
      
      {/* Resources Categories Sections */}
      {resourceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <Container>
            <SectionHeading centered>
              {category.title}
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {category.resources.map((resource) => (
                <div 
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 flex flex-col h-full"
                >
                  <div className="h-48 relative">
                    <Image
                      src={resource.image}
                      alt={resource.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3">{resource.name}</h3>
                    <p className="text-neutral-600 mb-6 flex-grow">{resource.description}</p>
                    <Link 
                      href={resource.href} 
                      className="text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200 inline-block"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}
      
      {/* Educational Resources Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>
            Educational Resources
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {educationalResources.map((resource) => (
              <div 
                key={resource.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-100 flex flex-col h-full"
              >
                <div className="h-48 relative">
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{resource.name}</h3>
                  <p className="text-neutral-600 mb-6 flex-grow">{resource.description}</p>
                  <Link 
                    href={resource.href} 
                    className="text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200 inline-block"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl opacity-90 mb-8">
              Our uniform consultants are ready to answer your specific questions and provide personalized guidance for your organization.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Contact Our Experts
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
} 