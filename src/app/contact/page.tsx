'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import QuoteForm from '@/components/forms/QuoteForm';

interface OfficeLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  googleMapsUrl: string;
  image: string;
}

interface SocialMedia {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export default function ContactPage() {
  const locale = 'en';
  
  // Office locations
  const officeLocations: OfficeLocation[] = [
    {
      id: 'riyadh',
      city: 'Riyadh',
      address: 'Al Olaya St, Al Olaya District, Riyadh 12213, Saudi Arabia',
      phone: '+971 55 816 4922',
      email: 'info@uneom.com',
      googleMapsUrl: 'https://maps.app.goo.gl/YourActualGoogleMapsLink',
      image: '/images/default-placeholder.jpg'
    },
    {
      id: 'jeddah',
      city: 'Jeddah',
      address: 'Prince Mohammed Bin Abdulaziz St, Al Rawdah, Jeddah 23432, Saudi Arabia',
      phone: '+971 55 816 4922',
      email: 'info@uneom.com',
      googleMapsUrl: 'https://maps.app.goo.gl/YourActualGoogleMapsLink',
      image: '/images/default-placeholder.jpg'
    },
    {
      id: 'dammam',
      city: 'Dammam',
      address: 'King Saud Street, Al Aqrabiyah, Dammam 32241, Saudi Arabia',
      phone: '+971558164922',
      email: 'dammam@uneom.com',
      googleMapsUrl: 'https://maps.app.goo.gl/987654',
      image: '/images/default-placeholder.jpg'
    }
  ];

  // Social media links
  const socialMedia: SocialMedia[] = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/company/uneom',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/uneom',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/+971558164922',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      )
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/uneom',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-24 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              Contact UNEOM
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our uniform specialists to discuss your business needs, request quotes, or learn more about our products and services.
            </p>
          </div>
        </Container>
      </div>
      
      {/* Main Contact Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div>
              <SectionHeading as="h2">
                Our Offices
              </SectionHeading>
              <p className="text-lg text-neutral-700 mb-8">
                UNEOM operates across major cities in Saudi Arabia. Feel free to visit our offices or contact us via phone or email.
              </p>
              
              <div className="space-y-8 mb-12">
                {officeLocations.map((office) => (
                  <div key={office.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 overflow-hidden rounded-full mr-4">
                        <Image
                          src={office.image}
                          alt={`${office.city} Office`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{office.city} Office</h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{office.email}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={office.googleMapsUrl} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                      onClick={(e) => {
                        // Prevent the default behavior
                        e.preventDefault();
                        
                        // Open in a new window/tab with a small delay to avoid popup blockers
                        setTimeout(() => {
                          window.open(office.googleMapsUrl, '_blank', 'noopener,noreferrer');
                        }, 100);
                      }}
                    >
                      View on Google Maps
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Social Media */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social) => (
                    <a 
                      key={social.platform} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-100 hover:bg-neutral-200 p-3 rounded-full text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-neutral-500">Sunday - Thursday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-500">Friday</span>
                    <span className="font-medium">Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-500">Saturday</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-neutral-500">
                  All times are in Saudi Arabia Standard Time (GMT+3)
                </p>
              </div>
            </div>
            
            {/* Right: Contact Form */}
            <div>
              <SectionHeading as="h2">
                Get in Touch
              </SectionHeading>
              <p className="text-lg text-neutral-700 mb-8">
                Whether you need a quote for bulk uniforms, have questions about our products, or want to discuss a custom solution, we're here to help.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <QuoteForm locale={locale} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-neutral-50">
        <Container>
          <SectionHeading centered>
            Find Us in Saudi Arabia
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-8">
            With offices in major cities across the Kingdom, UNEOM is strategically positioned to serve businesses throughout Saudi Arabia.
          </p>
          
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7249.504499556513!2d46.680808!3d24.701042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f033b6b026437%3A0xa912ef63d592ccdb!2sSilverShadow%20Media%20Production!5e0!3m2!1sen!2seg!4v1741650574107!5m2!1sen!2seg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="UNEOM Office Location in Riyadh"
              aria-label="Map showing UNEOM's office location in Riyadh"
            />
            <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <h3 className="font-bold text-primary-800 text-lg mb-2">Our Main Office</h3>
              <p className="text-gray-700">
                Al Olaya St, Al Olaya District<br />
                Riyadh 12213<br />
                Saudi Arabia
              </p>
              <div className="mt-3 text-sm text-gray-600">
                <div className="flex items-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+971 55 816 4922</span>
                </div>
                <Link 
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500 flex items-center"
                  href="https://wa.me/+971558164922"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>WhatsApp Us</span>
                </Link>
              </div>
              <a 
                href="https://goo.gl/maps/YourActualGoogleMapsLink" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-primary-600 hover:text-primary-800"
              >
                <span>Get Directions</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Industries We Serve Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>
            Industries We Serve
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-2xl mx-auto mb-12">
            UNEOM provides uniform solutions across various sectors. Explore our industry-specific offerings.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Link href="/industries/healthcare" className="group p-6 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Healthcare</h3>
              <p className="text-sm text-neutral-600">Medical scrubs, lab coats, and healthcare attire</p>
            </Link>
            
            <Link href="/industries/aviation" className="group p-6 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Aviation</h3>
              <p className="text-sm text-neutral-600">Pilot and cabin crew uniforms</p>
            </Link>
            
            <Link href="/industries/hospitality" className="group p-6 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Hospitality</h3>
              <p className="text-sm text-neutral-600">Hotel, restaurant, and hospitality attire</p>
            </Link>
            
            <Link href="/industries/corporate" className="group p-6 bg-neutral-50 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center bg-primary-100 rounded-full text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-1">Corporate</h3>
              <p className="text-sm text-neutral-600">Professional workwear and corporate attire</p>
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/industries"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View All Industries
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Outfit Your Team?</h2>
            <p className="text-lg mb-8 opacity-90">
              Browse our extensive catalog of professional uniforms designed specifically for Saudi businesses. From medical scrubs to corporate attire, we have solutions for all industries.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
            >
              Explore Our Shop
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
} 