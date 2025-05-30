import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define location data
const locationData = {
  slug: 'riyadh',
  name: 'Riyadh',
  heroImage: '/images/locations/riyadh-cityscape.jpg',
  mapImage: '/images/locations/riyadh-map.jpg',
  description: 'Our headquarters in Riyadh serves as the central hub for UNEOM\'s operations across Saudi Arabia, offering comprehensive uniform solutions for healthcare, corporate, hospitality, and educational institutions.',
  introduction: 'As the capital of Saudi Arabia, Riyadh represents the heart of our operations. Our flagship location houses our design studios, production facilities, and main showroom. From here, we serve the largest concentration of corporate, healthcare, and educational institutions in the Kingdom, providing tailored uniform solutions that meet the specific needs of the Central Region\'s climate and business environment.',
  address: 'King Fahd Road, Al Olaya District, Riyadh 12214, Saudi Arabia',
  phone: '+966 11 234 5678',
  email: 'riyadh@uneom.com',
  workingHours: 'Sunday to Thursday: 8:30 AM - 5:30 PM',
  googleMapsUrl: 'https://maps.google.com/?q=24.7136,46.6753',
  team: [
    {
      name: 'Ahmed Al-Saud',
      position: 'Regional Manager',
      image: '/images/team/ahmed-al-saud.jpg',
      bio: 'Ahmed has over 15 years of experience in the uniform industry, specializing in corporate and healthcare solutions.'
    },
    {
      name: 'Fatima Al-Qahtani',
      position: 'Senior Design Consultant',
      image: '/images/team/fatima-al-qahtani.jpg',
      bio: 'Fatima leads our design team, creating innovative uniform solutions that blend functionality with modern aesthetics.'
    }
  ],
  specializedServices: [
    {
      title: "UNEOM - Professional Uniforms",
      description: 'Tailored uniform solutions for Riyadh\'s corporate sector, including banks, telecommunications, and government institutions.',
      icon: '/images/icons/corporate-design.svg'
    },
    {
      title: 'Healthcare Uniform Consultation',
      description: 'Specialized consultation services for hospitals and clinics in Riyadh, focusing on antimicrobial fabrics and comfort-optimized designs.',
      icon: '/images/icons/healthcare-consultation.svg'
    },
    {
      title: 'Educational Institution Programs',
      description: 'Comprehensive uniform programs for Riyadh\'s schools and universities, including design, production, and distribution solutions.',
      icon: '/images/icons/education-programs.svg'
    },
    {
      title: 'Rush Production Services',
      description: 'Fast-track production services available exclusively at our Riyadh headquarters for urgent uniform needs.',
      icon: '/images/icons/rush-production.svg'
    }
  ],
  caseStudies: [
    {
      title: 'King Saud Medical City Uniform Redesign',
      description: 'Complete redesign of medical uniforms for 3,000+ staff, incorporating advanced antimicrobial fabrics and enhanced functionality.',
      image: '/images/case-studies/king-saud-medical.jpg',
      results: '98% staff satisfaction, 15% reduction in uniform-related issues.'
    },
    {
      title: 'Riyadh Bank Corporate Identity Program',
      description: 'Development of a unified corporate identity through carefully designed uniforms for 120 branches across the Central Region.',
      image: '/images/case-studies/riyadh-bank.jpg',
      results: 'Enhanced brand recognition, 22% increase in customer trust metrics.'
    }
  ],
  faqs: [
    {
      question: 'What is the typical lead time for corporate uniform orders in Riyadh?',
      answer: 'For standard corporate orders, our lead time is 2-3 weeks from design approval. For rush orders, we offer an expedited service that can deliver within 7-10 business days for an additional fee.'
    },
    {
      question: 'Do you offer on-site measurement services for Riyadh-based companies?',
      answer: 'Yes, our Riyadh headquarters offers complimentary on-site measurement services for corporate orders of 50 uniforms or more within the city limits. For smaller orders or locations outside Riyadh, a nominal fee may apply.'
    },
    {
      question: 'Can I visit your Riyadh showroom to see fabric samples and uniform options?',
      answer: 'Absolutely! Our Riyadh showroom welcomes visitors during business hours. We recommend scheduling an appointment with our design consultants for a personalized experience tailored to your industry and requirements.'
    },
    {
      question: 'What industries do you primarily serve from your Riyadh location?',
      answer: 'Our Riyadh location serves all major industries, with particular expertise in healthcare, banking and finance, government institutions, hospitality, and education. Our design team has specialized knowledge of the requirements and regulations specific to these sectors in the Central Region.'
    }
  ],
  relatedIndustries: ['healthcare', 'corporate', 'education', 'hospitality'] as const
};

export const metadata: Metadata = {
  title: 'UNEOM Riyadh | Premium Uniform Manufacturer & Supplier in the Capital',
  description: 'Visit UNEOM\'s headquarters in Riyadh for premium uniform manufacturing and design services. We offer custom corporate, healthcare, hospitality, and educational uniforms, with specialized services for the Central Region of Saudi Arabia.',
  keywords: ['Riyadh uniforms', 'uniform supplier Riyadh', 'corporate uniforms Saudi Arabia', 'healthcare uniforms Riyadh', 'educational uniforms', 'hospitality uniforms', 'UNEOM Riyadh', 'professional workwear Saudi Arabia', 'uniform manufacturing Riyadh'],
  alternates: {
    canonical: 'https://uneom.com/locations/riyadh/',
    languages: {
      'en': 'https://uneom.com/locations/riyadh/',
      'ar': 'https://uneom.com/ar/locations/riyadh/'
    }
  },
  openGraph: {
    title: 'UNEOM Riyadh | Premium Uniform Manufacturer & Supplier in the Capital',
    description: 'Visit UNEOM\'s headquarters in Riyadh for premium uniform manufacturing and design services. We offer custom corporate, healthcare, hospitality, and educational uniforms, with specialized services for the Central Region of Saudi Arabia.',
    url: 'https://uneom.com/locations/riyadh/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/locations/riyadh-cityscape.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Riyadh Headquarters'
      }
    ],
    locale: 'en'
  }
};

export default function RiyadhLocationPage() {
  // Translations (English only)
  const translations = {
    visitUs: 'Visit Us',
    contactInfo: 'Contact Information',
    workingHours: 'Working Hours',
    getDirections: 'Get Directions',
    ourTeam: 'Our Riyadh Team',
    teamDescription: 'Specialized experts ready to help you achieve your uniform vision. Meet our dedicated team in Riyadh.',
    specializedServices: 'Specialized Services in Riyadh',
    servicesDescription: 'We offer a range of services tailored to meet the unique needs of businesses and institutions in Riyadh and the Central Region.',
    successStories: 'Local Success Stories',
    successDescription: 'Discover how we\'ve helped clients in Riyadh enhance their corporate identity and improve employee experience through innovative uniform solutions.',
    results: 'Results',
    commonQuestions: 'Common Questions',
    questionsDescription: 'Answers to common inquiries from our Riyadh clients about our services and products.',
    exploreIndustries: 'Explore Industry Solutions in Riyadh',
    industriesDescription: 'We provide specialized uniform solutions designed for the unique challenges and requirements of each industry in the Central Region.',
    viewIndustry: 'View Industry Solutions',
    getQuote: 'Request a Quote',
    ctaHeading: 'Ready to Elevate Your Uniform Experience in Riyadh?',
    ctaDescription: 'Contact our Riyadh team today to discuss your uniform requirements and get customized solutions for your organization.'
  };

  // Industry mappings
  type IndustryKey = typeof locationData.relatedIndustries[number];
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    healthcare: {
      name: 'Healthcare',
      image: '/images/industries/healthcare/healthcare-professional.jpg'
    },
    corporate: {
      name: 'Corporate',
      image: '/images/industries/corporate/corporate-team.jpg'
    },
    education: {
      name: 'Education',
      image: '/images/industries/education/education-uniforms.jpg'
    },
    hospitality: {
      name: 'Hospitality',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    }
  };

  return (
    <main className="min-h-screen ltr text-left">
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025
        title="UNEOM Riyadh | Premium Uniform Manufacturer & Supplier in the Capital"
        description="Visit UNEOM's headquarters in Riyadh for premium uniform manufacturing and design services. We offer custom corporate, healthcare, hospitality, and educational uniforms, with specialized services for the Central Region of Saudi Arabia."
        keywords={[
          'uniforms Riyadh',
          'uniform supplier Riyadh',
          'corporate uniforms Riyadh',
          'healthcare uniforms Riyadh',
          'hospitality uniforms Riyadh',
          'educational uniforms Riyadh',
          'professional workwear Riyadh',
          'uniform manufacturing Riyadh',
          'custom uniforms Saudi Arabia',
          'UNEOM Riyadh headquarters',
          'Central Region uniforms',
          'Riyadh uniform showroom'
        ]}
        author="UNEOM Riyadh Team"
        expertise="Uniform Manufacturing & Design in Riyadh"
        contentType="location"
        trustSignals={[
          'Headquarters location in Riyadh',
          'Serving 500+ companies in Central Region',
          'On-site measurement services',
          'Rush production available',
          'Specialized design consultants'
        ]}
        canonicalUrl="https://uneom.com/locations/riyadh/"
        locale="en"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src={locationData.heroImage}
            alt={locationData.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            UNEOM Premium Uniform Solutions in Riyadh, Saudi Arabia
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            {locationData.description}
          </p>
        </div>
      </section>

      {/* Introduction & Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Introduction */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {`Our Headquarters in ${locationData.name}`}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {locationData.introduction}
              </p>
            </div>
            {/* Contact Information */}
            <div className="lg:col-span-1 bg-gray-50 rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {translations.visitUs}
              </h2>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  {translations.contactInfo}
                </h3>
                <p className="text-gray-700 mb-1">{locationData.address}</p>
                <p className="text-gray-700 mb-1">{locationData.phone}</p>
                <p className="text-gray-700 mb-4">{locationData.email}</p>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  {translations.workingHours}
                </h3>
                <p className="text-gray-700 mb-4">{locationData.workingHours}</p>
                <a 
                  href={locationData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                >
                  {translations.getDirections}
                </a>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src={locationData.mapImage}
                  alt={`${locationData.name} map`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {translations.ourTeam}
            </h2>
            <p className="text-lg text-gray-600">
              {translations.teamDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locationData.team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {translations.specializedServices}
            </h2>
            <p className="text-lg text-gray-600">
              {translations.servicesDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locationData.specializedServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <Image 
                    src={service.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {translations.successStories}
            </h2>
            <p className="text-lg text-gray-600">
              {translations.successDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {locationData.caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-800 uppercase mb-2">
                      {translations.results}
                    </h4>
                    <p className="text-gray-700">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.commonQuestions}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.questionsDescription}
              </p>
            </div>
            <div className="space-y-6">
              {locationData.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {translations.exploreIndustries}
            </h2>
            <p className="text-lg text-gray-600">
              {translations.industriesDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {locationData.relatedIndustries.map((industry) => (
              <div key={industry} className="relative rounded-lg overflow-hidden shadow-lg group">
                <div className="relative h-64">
                  <Image 
                    src={industryMapping[industry].image}
                    alt={industryMapping[industry].name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {industryMapping[industry].name}
                  </h3>
                  <Link 
                    href={`/industries/${industry}`}
                    className="inline-block bg-white/90 hover:bg-white text-blue-700 text-sm font-semibold py-2 px-4 rounded transition-colors duration-200"
                  >
                    {translations.viewIndustry}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {translations.ctaHeading}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {translations.ctaDescription}
          </p>
          <Link 
            href={`/quote?location=riyadh`}
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {translations.getQuote}
          </Link>
        </div>
      </section>
    </main>
  );
} 