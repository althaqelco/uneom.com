'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Event data
const upcomingEvents = [
  {
    id: 'saudi-uniform-expo-2024',
    title: 'Saudi Uniform Expo 2024',
    date: 'September 15-17, 2024',
    location: 'Riyadh Front Exhibition & Conference Center',
    description: 'Join us at the largest uniform industry exhibition in the Kingdom. Experience our latest designs and meet our expert team to discuss your uniform program needs.',
    image: '/images/corporate/corporate_team_meeting.jpg',
    registrationLink: '/resources/events/saudi-uniform-expo-registration'
  },
  {
    id: 'healthcare-uniform-conference',
    title: 'Healthcare Uniform Innovation Conference',
    date: 'October 8-9, 2024',
    location: 'King Fahd Medical City, Riyadh',
    description: 'Learn about the latest advancements in medical uniforms, including antimicrobial fabrics and designs optimized for healthcare environments.',
    image: '/images/healthcare/healthcare_doctor_consultation.jpg',
    registrationLink: '/resources/events/healthcare-uniform-conference-registration'
  },
  {
    id: 'hospitality-uniform-workshop',
    title: 'Hospitality Uniform Design Workshop',
    date: 'November 12, 2024',
    location: 'Jeddah Hilton Hotel',
    description: 'A hands-on workshop for hospitality managers focusing on creating distinctive uniform programs that enhance guest experience while maintaining practical functionality.',
    image: '/images/hospitality/hospitality_hotel_reception.jpg',
    registrationLink: '/resources/events/hospitality-workshop-registration'
  }
];

const pastEvents = [
  {
    id: 'corporate-identity-seminar',
    title: 'Corporate Identity Through Uniforms Seminar',
    date: 'March 15, 2024',
    location: 'King Abdullah Financial District, Riyadh',
    description: 'A seminar exploring how corporate uniforms contribute to brand identity and corporate culture, featuring case studies from leading Saudi companies.',
    image: '/images/corporate/corporate_uniform_office.jpg',
    resourceLink: '/resources/events/corporate-identity-seminar-recording'
  },
  {
    id: 'sustainable-uniforms-forum',
    title: 'Sustainable Uniforms Forum',
    date: 'February 8, 2024',
    location: 'King Abdulaziz Convention Center, Riyadh',
    description: 'Industry leaders discussed sustainable practices in uniform production, focusing on recycled materials and reducing the carbon footprint in the textile industry.',
    image: '/images/sustainable_fabrics.jpg',
    resourceLink: '/resources/events/sustainable-uniforms-forum-materials'
  }
];

// Filter options
const eventTypes = [
  { value: 'all', label: 'All Events' },
  { value: 'exhibitions', label: 'Exhibitions' },
  { value: 'workshops', label: 'Workshops & Training' },
  { value: 'conferences', label: 'Conferences' },
  { value: 'webinars', label: 'Webinars' }
];

const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'riyadh', label: 'Riyadh' },
  { value: 'jeddah', label: 'Jeddah' },
  { value: 'dammam', label: 'Dammam' },
  { value: 'online', label: 'Online' }
];

export default function EventsPage() {
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  return (
    <>
      <div className="bg-neutral-50">
        {/* Hero Section */}
        <section className="bg-primary-700 text-white py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Uneom Events
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Join us for industry-leading events, workshops, and exhibitions focused on uniform innovation and best practices across Saudi Arabia
              </p>
              <Link href="#upcoming-events">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
                  View Upcoming Events
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading>
                  Connect, Learn, and Grow with Industry Experts
                </SectionHeading>
                <p className="text-lg text-neutral-700 mb-6">
                  At Uneom, we're committed to fostering knowledge exchange and industry advancement through high-quality events. Our workshops, exhibitions, and conferences bring together professionals from across Saudi Arabia to discuss the latest trends, innovations, and best practices in uniform programs.
                </p>
                <p className="text-neutral-700 mb-6">
                  Whether you're looking to network with peers, gain insights from industry leaders, or explore the latest uniform solutions, our events offer valuable opportunities for professional development and business growth.
                </p>
              </div>
              <div className="relative h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="/images/professional-business-seminar-with-audience-2022-12-16-07-11-04-utc.jpg" 
                  alt="Uneom Professional Event" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Upcoming Events */}
        <section id="upcoming-events" className="py-16 bg-white">
          <Container>
            <SectionHeading centered>
              Upcoming Events
            </SectionHeading>
            <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
              Join us at these upcoming events to gain insights, connect with industry professionals, and discover the latest innovations in uniform solutions
            </p>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
              <div className="flex items-center">
                <span className="mr-3 text-neutral-600 font-medium">Event Type:</span>
                <select 
                  className="rounded-md border-neutral-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all"
                  value={eventTypeFilter}
                  onChange={(e) => setEventTypeFilter(e.target.value)}
                >
                  {eventTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-neutral-600 font-medium">Location:</span>
                <select 
                  className="rounded-md border-neutral-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location.value} value={location.value}>{location.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-56">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="mb-4">
                      <div className="flex items-center text-neutral-600 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-neutral-600 mb-6">
                      {event.description}
                    </p>
                    <Link href={event.registrationLink}>
                      <Button className="w-full">Register Now</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-neutral-50">
          <Container>
            <SectionHeading centered>
              Past Events
            </SectionHeading>
            <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
              Explore recordings, presentations, and resources from our previous events
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image 
                      src={event.image} 
                      alt={event.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <div className="mb-3">
                      <div className="flex items-center text-neutral-600 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-neutral-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-neutral-600 mb-4 text-sm">
                      {event.description}
                    </p>
                    <Link href={event.resourceLink}>
                      <Button variant="outline" size="sm">Access Resources</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/resources/events/archive">
                <Button variant="outline">View All Past Events</Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Host an Event */}
        <section className="py-16 bg-primary-50">
          <Container>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Host a Uniform Industry Event</h2>
                <p className="text-neutral-700">
                  Interested in collaborating with Uneom on an industry event? We partner with organizations across Saudi Arabia to host workshops, training sessions, and speaking engagements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-neutral-50 p-5 rounded-lg text-center">
                  <div className="bg-primary-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expert Speakers</h3>
                  <p className="text-sm text-neutral-600">
                    Access our team of industry experts for speaking engagements on uniform design, management, and innovation.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-lg text-center">
                  <div className="bg-primary-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Customized Workshops</h3>
                  <p className="text-sm text-neutral-600">
                    We can design tailored workshops for your team on topics like uniform program management and fabric selection.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-5 rounded-lg text-center">
                  <div className="bg-primary-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Industry Networking</h3>
                  <p className="text-sm text-neutral-600">
                    Connect with our network of uniform industry professionals, manufacturers, and consultants for your event.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/contact">
                  <Button size="lg">Inquire About Event Collaboration</Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-neutral-800 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Future Events</h2>
              <p className="text-neutral-300 mb-8">
                Subscribe to our events newsletter to receive notifications about upcoming workshops, exhibitions, and industry gatherings across Saudi Arabia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow rounded-md px-4 py-3 text-neutral-800 focus:ring focus:ring-primary-300 focus:border-primary-500 transition-all"
                />
                <Button>Subscribe</Button>
              </div>
              
              <p className="text-sm text-neutral-400 mt-4">
                By subscribing, you agree to receive event-related communications from Uneom. You can unsubscribe at any time.
              </p>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
} 