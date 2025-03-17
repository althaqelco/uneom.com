'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { metadata } from './metadata';

// Author type definition
interface Author {
  id: string;
  name: string;
  image: string;
  title: string;
  bio: string;
  posts: number;
  expertise: string[];
}

// Sample authors data - in production this would be fetched from an API or CMS
const authors = [
  {
    id: 'john-doe',
    name: 'John Doe',
    image: '/images/team/john-doe.jpg',
    title: 'Chief Design Officer',
    bio: 'John is a seasoned uniform designer with over 15 years of experience in the industry. He specializes in corporate and hospitality uniforms.',
    expertise: ['Corporate Uniform Design', 'Hospitality Uniform Programs', 'Sustainable Textile Selection']
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    image: '/images/team/jane-smith.jpg',
    title: 'Head of Technical Development',
    bio: 'Jane specializes in technical fabrics and performance workwear, with particular expertise in uniforms for extreme environments.',
    expertise: ['Technical Fabric Development', 'Performance Workwear', 'Heat-Resistant Uniforms']
  },
  {
    id: 'ahmed-abdullah',
    name: 'Ahmed Abdullah',
    image: '/images/avatar-placeholder.jpg',
    title: 'Healthcare Uniform Specialist',
    bio: 'Ahmed leads our healthcare division, focusing on antimicrobial fabrics and designs that meet the rigorous demands of medical environments.',
    expertise: ['Healthcare Uniforms', 'Antimicrobial Fabrics', 'Medical Compliance Standards']
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    image: '/images/default-placeholder.jpg',
    title: 'Sustainability Director',
    bio: 'Sarah focuses on developing eco-friendly uniform solutions that reduce environmental impact without compromising on quality or performance.',
    expertise: ['Sustainable Materials', 'Circular Fashion Economy', 'Environmental Compliance']
  },
  {
    id: 'mohammed-al-farsi',
    name: 'Mohammed Al-Farsi',
    image: '/images/default-placeholder.jpg',
    title: 'Regional Sales Director',
    bio: 'Mohammed works with major clients across the GCC, helping organizations implement comprehensive uniform programs aligned with their brand identity.',
    expertise: ['Corporate Programs', 'Regional Requirements', 'Brand Integration']
  },
  {
    id: 'fatima-khan',
    name: 'Fatima Khan',
    image: '/images/default-placeholder.jpg',
    title: 'Manufacturing Operations Manager',
    bio: 'Fatima oversees our production facilities, ensuring quality control and efficient manufacturing processes for all our uniform products.',
    expertise: ['Quality Control', 'Production Efficiency', 'Supply Chain Management']
  },
  {
    id: 'david-wilson',
    name: 'David Wilson',
    image: '/images/default-placeholder.jpg',
    title: 'Hospitality Sector Specialist',
    bio: 'David brings extensive experience in luxury hotel uniforms, having worked with five-star properties throughout the Middle East and Europe.',
    expertise: ['Luxury Hospitality', 'Front-of-House Uniforms', 'Hospitality Standards']
  },
  {
    id: 'layla-hassan',
    name: 'Layla Hassan',
    image: '/images/default-placeholder.jpg',
    title: 'Industrial Uniform Researcher',
    bio: 'Layla specializes in protective workwear for industrial environments, with expertise in heat-resistant, flame-retardant, and chemical-resistant fabrics.',
    expertise: ['Industrial Safety', 'Protective Fabrics', 'Hazard Protection']
  },
  {
    id: 'omar-ibrahim',
    name: 'Omar Ibrahim',
    image: '/images/default-placeholder.jpg',
    title: 'Supply Chain Director',
    bio: 'Omar manages our global supply chain, ensuring sustainable sourcing and ethical manufacturing practices across all our production facilities.',
    expertise: ['Global Sourcing', 'Ethical Manufacturing', 'Logistics Optimization']
  },
  {
    id: 'nora-ahmed',
    name: 'Nora Ahmed',
    image: '/images/default-placeholder.jpg',
    title: 'Cultural Design Consultant',
    bio: 'Nora specializes in integrating traditional Saudi design elements into modern uniform collections, preserving cultural heritage in contemporary workwear.',
    expertise: ['Cultural Integration', 'Saudi Heritage', 'Modern Traditionalism']
  }
];

export default function AuthorsPage() {
  const locale = 'en';

  return (
    <MainLayout locale={locale}>
      {/* Hero Section */}
      <section className="py-20 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Industry leaders and specialists committed to delivering exceptional uniform solutions throughout Saudi Arabia and beyond
            </p>
          </div>
        </Container>
      </section>

      {/* Team Description */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Industry Expertise</h2>
            <p className="text-xl text-neutral-600 mb-6">Our team combines technical knowledge, design excellence, and industry insight</p>
            <p className="mt-6 text-neutral-600">
              At UNEOM, our strength lies in our diverse team of experts. From technical fabric specialists and sustainable textile researchers to industry-specific consultants, our team brings together decades of experience in the uniform industry. Each team member contributes unique insights to help create uniform solutions that align perfectly with our clients' needs, industry requirements, and Saudi Arabia's unique climate and cultural context.
            </p>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/authors/${author.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 bg-neutral-100">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">{author.title}</p>
                    <p className="text-neutral-600 mb-4 line-clamp-2">{author.bio}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {author.expertise.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                      {author.expertise.length > 2 && (
                        <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                          +{author.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Work With Our Experts</h2>
            <p className="text-xl text-neutral-600 mb-6">Get in touch to discuss your uniform requirements</p>
            <p className="mt-6 text-neutral-600 mb-8">
              Our team is ready to help you create the perfect uniform solution for your organization. Whether you're looking for custom designs, technical expertise, or comprehensive uniform programs, our specialists are here to support you every step of the way.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 