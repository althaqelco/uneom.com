'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface ServiceInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function ServicesPage() {
  // For now, we'll just use English as the default locale
  // In a real implementation, we would get this from the URL or cookies
  const locale = 'en';
  
  // Services content
  const featuredServices: ServiceInfo[] = [
    {
      id: 'program-management',
      name: 'Uniform Program Management',
      description: 'End-to-end management of your organization\'s entire uniform program, from design to distribution and inventory tracking.',
      image: '/images/services/program-management.jpg',
      href: '/services/program-management'
    },
    {
      id: 'custom-design',
      name: 'Custom Design & Branding',
      description: 'Professional uniform design services that incorporate your brand identity and meet the specific requirements of your industry.',
      image: '/images/services/custom-design.jpg',
      href: '/services/custom-design'
    },
    {
      id: 'bulk-ordering',
      name: 'Bulk Ordering',
      description: 'Streamlined procurement process for large-scale uniform orders with optimized pricing, quality control, and delivery logistics.',
      image: '/images/services/bulk-ordering.jpg',
      href: '/services/bulk-ordering'
    }
  ];
  
  const additionalServices: ServiceInfo[] = [
    {
      id: 'measurement-services',
      name: 'Measurement Services',
      description: 'On-site professional measurement services to ensure perfect fit for all employees across your organization.',
      image: '/images/services/measurement-services.jpg',
      href: '/services/measurement-services'
    },
    {
      id: 'uniform-policies',
      name: 'Corporate Uniform Policies',
      description: 'Expert consulting to develop comprehensive uniform policies that align with your organizational goals and industry standards.',
      image: '/images/services/uniform-policies.jpg',
      href: '/services/uniform-policies'
    }
  ];
  
  return (
    <MainLayout locale={locale}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <Image
            src="/images/services/services-hero.jpg"
            alt="UNEOM Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comprehensive Uniform Services</h1>
            <p className="text-xl opacity-90 mb-8">
              End-to-end professional services to streamline your organization's uniform program
            </p>
            <Button
              href="/contact?service=consultation"
              variant="secondary"
              size="lg"
            >
              Request Service Consultation
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Comprehensive services that transform your uniform program"
              >
                Beyond Uniform Supply
              </SectionHeading>
              <div className="prose max-w-none">
                <p className="mb-4">
                  At UNEOM, we understand that successful uniform programs require more than just quality garments. Our comprehensive service offerings are designed to simplify the entire uniform lifecycle, from initial concept and design to ongoing management and replacement.
                </p>
                <p>
                  Each of our services can be tailored to meet the specific needs of your organization, whether you're a healthcare network managing thousands of medical uniforms, an airline standardizing crew appearance, or a corporate enterprise establishing a new professional dress code. Our experienced team works as an extension of your organization to deliver solutions that enhance operational efficiency, strengthen brand identity, and improve employee satisfaction.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/service-expertise.jpg"
                  alt="UNEOM Service Expertise"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Service Process Overview */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            subtitle="How we deliver exceptional uniform solutions"
            centered
          >
            Our Service Approach
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold mb-3 pt-2">Consultation</h3>
              <p className="text-neutral-600">
                We begin with a thorough consultation to understand your specific requirements, challenges, and objectives.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold mb-3 pt-2">Solution Design</h3>
              <p className="text-neutral-600">
                Our experts develop a customized service plan tailored to your organization's specific needs and resources.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold mb-3 pt-2">Implementation</h3>
              <p className="text-neutral-600">
                We execute the service plan with meticulous attention to detail and transparent communication throughout.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold mb-3 pt-2">Ongoing Support</h3>
              <p className="text-neutral-600">
                We provide continuous support, regular reviews, and program optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Featured Services */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            subtitle="Our specialized uniform management solutions"
            centered
          >
            Core Service Offerings
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredServices.map((service) => (
              <div 
                key={service.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <Link href={service.href} className="block relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    <Link 
                      href={service.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Learn More
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            subtitle="Specialized solutions for specific uniform needs"
            centered
          >
            Additional Services
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {additionalServices.map((service) => (
              <div 
                key={service.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row h-full"
              >
                <Link href={service.href} className="block relative md:w-2/5">
                  <div className="relative h-64 md:h-full w-full overflow-hidden">
                    <Image 
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow md:w-3/5">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    <Link 
                      href={service.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Learn More
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Client Success */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            subtitle="Real results from our service solutions"
            centered
          >
            Client Success
          </SectionHeading>
          
          <div className="bg-primary-50 rounded-lg p-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-full bg-primary-100 p-4 w-20 h-20 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <blockquote className="text-lg italic text-neutral-700 mb-4">
                  "UNEOM's Uniform Program Management service transformed our healthcare system's approach to staff attire. They simplified our previously complex processes, reduced costs by 22%, and significantly improved staff satisfaction with their uniforms. Their team managed everything from design to distribution, allowing us to focus on patient care."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/images/testimonials/dr-ahmed-al-sayed.jpg"
                      alt="Dr. Ahmed Al-Sayed"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">Dr. Ahmed Al-Sayed</p>
                    <p className="text-sm text-neutral-600">Operations Director, Riyadh Medical Network</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Program Results:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>22% reduction in uniform-related costs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>89% staff satisfaction rate (up from 62%)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Reduced administrative time by 75%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>100% compliance with healthcare regulations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Uniform Program?</h2>
            <p className="text-xl opacity-90 mb-8">
              Our service specialists will work with you to develop a customized solution that meets your organization's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                href="/contact?service=consultation"
                variant="secondary"
                size="lg"
              >
                Request Service Consultation
              </Button>
              <Button
                href="/services/program-management"
                variant="outline"
                size="lg"
              >
                Explore Program Management
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 
