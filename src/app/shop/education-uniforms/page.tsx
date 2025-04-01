'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
  features?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function EducationUniformsPage() {
  const locale = 'en';
  
  // Education uniform products
  const products: Product[] = [
    {
      id: 'premium-school-uniform',
      name: 'Premium School Uniform',
      description: 'High-quality school uniform designed for comfort, durability, and professional appearance, perfect for schools and educational institutions.',
      price: 'From SAR 249',
      image: '/images/education/uniform_school_product-1.jpg',
      href: '/shop/education-uniforms/premium-school-uniform',
      features: ['Durable fabric', 'Easy care', 'Professional look', 'Comfortable fit'],
      colors: ['Navy', 'White', 'Grey', 'Burgundy'],
      isBestseller: true
    },
    {
      id: 'university-attire',
      name: 'University Attire',
      description: 'Professional university attire designed for staff, faculty, and administrators in higher education institutions.',
      price: 'From SAR 329',
      image: '/images/education/uniform_school_product-2.jpg',
      href: '/shop/education-uniforms/university-attire',
      features: ['Professional design', 'Breathable fabric', 'Institutional branding', 'Custom options'],
      colors: ['Navy', 'Black', 'Grey', 'Maroon'],
      isNew: true
    },
    {
      id: 'student-sports-kit',
      name: 'Student Sports Kit',
      description: 'Complete sports kit designed for school and university athletic programs, featuring performance fabrics and school branding options.',
      price: 'From SAR 199',
      image: '/images/education/uniform_school_product-4.jpg',
      href: '/shop/education-uniforms/student-sports-kit',
      features: ['Performance fabric', 'Moisture-wicking', 'Custom branding', 'Team options'],
      colors: ['Multiple options available']
    },
    {
      id: 'faculty-uniform',
      name: 'Faculty Uniform',
      description: 'Professional attire designed for teachers and faculty members, balancing comfort with a professional appearance.',
      price: 'From SAR 289',
      image: '/images/education/uniform_school_product-5.jpg',
      href: '/shop/education-uniforms/faculty-uniform',
      features: ['Professional design', 'All-day comfort', 'Easy care', 'Institutional branding'],
      colors: ['Navy', 'Grey', 'Black', 'White']
    },
    {
      id: 'primary-school-uniform',
      name: 'Primary School Uniform',
      description: 'Durable and practical uniform designed specifically for primary/elementary school students, featuring child-friendly design and materials.',
      price: 'From SAR 169',
      image: '/images/education/uniform_school_product-6.jpg',
      href: '/shop/education-uniforms/primary-school-uniform',
      features: ['Child-friendly', 'Reinforced knees', 'Easy care', 'Comfortable design'],
      colors: ['Navy', 'Green', 'Burgundy', 'Grey/Red']
    },
    {
      id: 'graduation-attire',
      name: 'Graduation Attire',
      description: 'Complete graduation attire including caps, gowns, and accessories for schools, colleges, and universities.',
      price: 'From SAR 299',
      image: '/images/education/uniform_school_product-7.jpg',
      href: '/shop/education-uniforms/graduation-attire',
      features: ['Traditional design', 'Premium fabric', 'Customizable', 'Complete set'],
      colors: ['Black', 'Blue', 'Red', 'Green']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'schools', name: 'Schools' },
    { id: 'universities', name: 'Universities' },
    { id: 'faculty', name: 'Faculty' },
    { id: 'sports', name: 'Sports' },
    { id: 'graduation', name: 'Graduation' }
  ];
  
  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "UNEOM's school uniforms have significantly improved our institution's image and student pride. The quality and durability are exceptional, and their customer service is outstanding.",
      name: "Dr. Abdullah Al-Qahtani",
      position: "Principal, Al-Manar International School",
      image: "/images/education/school-uniforms/school-uniforms-students-classroom-saudi-arabia-01.webp"
    },
    {
      id: 2,
      quote: "We've been using UNEOM for our university staff uniforms for over three years. Their attention to detail and ability to incorporate our branding has been invaluable.",
      name: "Prof. Sarah Al-Harbi",
      position: "Dean of Student Affairs, Riyadh University",
      image: "/images/education/school-uniforms/school-uniforms-students-classroom-saudi-arabia-05.webp"
    }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <SectionHeading centered>Education Uniforms</SectionHeading>
              <p className="mt-4 text-lg text-gray-600">
                Professional and durable education uniforms designed for schools, universities, and educational institutions.
                Our education collection offers quality, comfort, and a professional appearance for students and staff.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/education/school-uniforms/school-uniforms-students-classroom-saudi-arabia-03.webp"
                  alt="Education Uniforms Collection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quality Education Attire</h2>
                    <p className="text-white/90 text-lg mb-6">
                      Elevate your educational institution with our premium quality uniforms,
                      designed for comfort, durability, and professional appearance.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="/quote" variant="primary">
                        Request Quote
                      </Button>
                      <Button href="/contact" variant="outline">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Products Section */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Departments</h3>
                <ul className="space-y-2">
                  {departments.map((dept) => (
                    <li key={dept.id}>
                      <button className="text-gray-700 hover:text-primary-600 transition w-full text-left py-1">
                        {dept.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our education uniform specialists are ready to assist you with bulk orders and customization options.
                  </p>
                  <Button href="/contact" fullWidth variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Education Collection</h2>
                
                {/* Mobile Filters Button */}
                <button className="md:hidden bg-white rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700">
                  Filters
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Link 
                    href={product.href} 
                    key={product.id}
                    className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                          BESTSELLER
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{product.price}</span>
                        <span className="text-primary-600 group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading centered>What Our Clients Say</SectionHeading>
            <p className="mt-4 text-gray-600">
              Discover how our education uniforms have transformed educational institutions across Saudi Arabia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-full min-h-[200px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Custom Education Uniforms?</h2>
            <p className="text-lg text-white/80 mb-8">
              We offer custom design and bulk ordering options for educational institutions of all sizes.
              Contact our team to discuss your specific requirements and branding needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="primary">
                Request Quote
              </Button>
              <Button href="/services/custom-design" variant="outline">
                Custom Design Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 