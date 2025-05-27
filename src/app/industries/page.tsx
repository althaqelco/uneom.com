'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import IndustryGrid from '@/components/sections/IndustryGrid';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface IndustryInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export default function IndustriesPage() {
  // For now, we'll just use English as the default locale
  // In a real implementation, we would get this from the URL or cookies
  const locale = 'en';
  
  // Additional industries content beyond what's in IndustryGrid
  const featuredIndustries: IndustryInfo[] = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'High-quality medical scrubs and healthcare uniforms designed for Saudi hospitals, clinics, and medical facilities.',
      image: '/images/industries/healthcare.jpg',
      href: '/images/industries/aviation/aviation_uniform_main.jpg',
      href: '/images/industries/hospitality/hospitality_uniform.jpg',
      href: '/images/industries/industries/corporate.jpg',
      href: '/images/industries/education/education_uniform_main.jpg',
      href: '/images/industries/industrial/industrial_uniform_main.jpg',
      href: '/images/industries/security/security_uniform_main.jpg',
      href: '/industries/security'
    }
  ];
  
  return (
    <div className="bg-white">
    
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-25">
          <Image
            src="/images/services/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg"
            alt="UNEOM Industries"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
            <p className="text-xl opacity-90 mb-8">
              Specialized uniform solutions tailored to the unique needs of various industries across Saudi Arabia
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
            >
              Request Industry Consultation
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
                subtitle="Designed for Saudi workplaces and climate"
                className="text-left"
              >
                Industry-Specific Uniform Solutions
              </SectionHeading>
              <div className="prose max-w-none">
                <p className="mb-4">
                  At UNEOM, we understand that different industries have unique uniform requirements. That's why we've developed specialized collections for each sector we serve, taking into consideration not only professional standards but also the specific needs of Saudi Arabia's workplaces and climate conditions.
                </p>
                <p>
                  Our team has extensive experience working with organizations across healthcare, aviation, hospitality, corporate, education, manufacturing, and security sectors. We combine global best practices with local expertise to deliver uniform solutions that are perfectly tailored to your industry's requirements.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg"
                  alt="UNEOM Industry Expertise"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Featured Industries */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            subtitle="Our specialized uniform collections for key sectors"
            centered
          >
            Featured Industries
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredIndustries.map((industry) => (
              <div 
                key={industry.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <Link href={industry.href} className="block relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    <Link 
                      href={industry.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {industry.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{industry.description}</p>
                  <Link 
                    href={industry.href}
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Explore Solutions
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
      
      {/* All Industries Grid */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            subtitle="Comprehensive uniform solutions for every sector"
            centered
          >
            More Industries We Serve
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {additionalIndustries.map((industry) => (
              <div 
                key={industry.id}
                className="group bg-neutral-50 rounded-lg overflow-hidden hover:bg-neutral-100 transition-colors duration-300 flex flex-col h-full"
              >
                <Link href={industry.href} className="block relative">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    <Link 
                      href={industry.href}
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {industry.name}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{industry.description}</p>
                  <Link 
                    href={industry.href}
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    View Details
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
      
      {/* Industry Comparison */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading
            subtitle="Find the best uniform program for your specific sector"
            centered
          >
            Compare Industry Solutions
          </SectionHeading>
          
          <div className="overflow-hidden shadow-lg rounded-lg mt-12">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="py-4 px-6 text-left">Industry</th>
                    <th className="py-4 px-6 text-left">Key Features</th>
                    <th className="py-4 px-6 text-left">Materials</th>
                    <th className="py-4 px-6 text-left">Customization</th>
                    <th className="py-4 px-6 text-left">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-4 px-6 font-medium">Healthcare</td>
                    <td className="py-4 px-6">Antimicrobial, fluid-resistant, comfort focus</td>
                    <td className="py-4 px-6">Medical-grade polyester blends, cotton</td>
                    <td className="py-4 px-6">Department color coding, embroidered logos</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/industries/healthcare"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Aviation</td>
                    <td className="py-4 px-6">Professional appearance, wrinkle-resistant</td>
                    <td className="py-4 px-6">Premium wool blends, polyester</td>
                    <td className="py-4 px-6">Airline branding, rank insignias</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/industries/aviation"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Hospitality</td>
                    <td className="py-4 px-6">Elegant, stain-resistant, easy care</td>
                    <td className="py-4 px-6">Comfort-stretch fabrics, luxury blends</td>
                    <td className="py-4 px-6">Brand color matching, custom accessories</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/industries/hospitality"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-4 px-6 font-medium">Corporate</td>
                    <td className="py-4 px-6">Professional, breathable, office-appropriate</td>
                    <td className="py-4 px-6">Business-grade cotton blends, performance fabrics</td>
                    <td className="py-4 px-6">Corporate identity integration, executive styling</td>
                    <td className="py-4 px-6">
                      <Link 
                        href="/industries/corporate"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Can't Find Your Industry?</h2>
            <p className="text-lg mb-8 opacity-90">
              We develop custom uniform solutions for all types of businesses in Saudi Arabia. Contact our team to discuss your specific industry requirements.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Request Custom Industry Solution
            </Button>
          </div>
        </Container>
      </section>
    
      </div>
  );
} 