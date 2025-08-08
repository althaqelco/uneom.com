import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Luxury Salon Evolution Case Study | Premium Spa Uniforms | UNEOM Saudi Arabia',
  description: 'How UNEOM helped transform a high-end Riyadh salon with bespoke staff uniforms that elevated brand perception and staff professionalism while maintaining Saudi cultural standards.',
  keywords: 'luxury beauty salon uniforms, premium spa staff attire Saudi, high-end salon branding Riyadh, custom beauty uniforms Saudi Arabia, salon staff professional appearance, luxury aesthetics clinic uniforms'};

export default function LuxurySalonEvolutionCaseStudy() {
  return (
    <main className="bg-white">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Luxury Salon Evolution Case Study | Premium Spa Uniforms</h1>
      
      {/* Schema.org structured data */}
      <Script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Luxury Salon Evolution: UNEOM Transforms High-End Riyadh Beauty Destination",
            "description": "Case study on how UNEOM elevated a premium Riyadh salon's brand through custom-designed staff uniforms that balanced luxury aesthetics with Saudi cultural requirements.",
            "image": "https://uneom.com/images/corporate/corporate_uniform_formal.jpg",
            "datePublished": "2023-10-22T08:00:00+03:00",
            "author": {
              "@type": "Organization",
              "name": "UNEOM Professional Uniforms"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm uppercase tracking-wider font-semibold text-indigo-300">Case Study</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Luxury Salon Evolution</h1>
            <p className="text-xl mb-8 text-white/90">How UNEOM transformed a high-end Riyadh beauty salon with bespoke uniforms reflecting premium positioning</p>
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Industry</span>
                <span className="block text-lg">Luxury Beauty & Spa</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Location</span>
                <span className="block text-lg">Riyadh, Saudi Arabia</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Project Duration</span>
                <span className="block text-lg">3 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Client Overview</h2>
              <p className="text-gray-700 mb-4">
                An exclusive beauty salon and spa in Riyadh's most prestigious district, catering to high-net-worth 
                clientele seeking premium beauty services. With 35 staff members providing services 
                ranging from hair styling to advanced aesthetic treatments, the salon needed to refresh its 
                staff uniforms to match its recent interior redesign and elevated brand positioning.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Premium clientele with high expectations for service and aesthetics</li>
                <li>Recently underwent a complete interior redesign with luxury finishes</li>
                <li>Offers both traditional beauty services and advanced aesthetic treatments</li>
                <li>Competes with international luxury salon brands in the Saudi market</li>
                <li>Strong emphasis on creating a discreet, refined client experience</li>
              </ul>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-900">Key Challenge</h3>
                <p className="text-gray-700">
                  The existing staff uniforms failed to reflect the salon's premium positioning and new interior design.
                  They needed uniforms that balanced luxury aesthetics with practical requirements for beauty professionals,
                  while maintaining modesty standards essential for the Saudi market.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              <Image 
                src="/images/corporate/corporate_uniform_formal.jpg" 
                alt="Luxury salon staff in premium uniforms" 
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-700 font-medium">New bespoke uniforms reflecting the salon's luxury positioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Brand Immersion & Design Analysis</h3>
                <p className="text-gray-700">
                  We conducted in-depth sessions with salon management to understand their brand values,
                  aesthetic vision, and client expectations. We also analyzed the new interior design elements,
                  color palette, and materials to ensure uniform harmony with the space.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Material Selection</h3>
                <p className="text-gray-700">
                  We curated a selection of luxury fabrics that balanced opulent appearance with
                  practical performance requirements for beauty professionals, including silk blends,
                  premium cotton, and specialized technical fabrics with elegant draping.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Bespoke Design Development</h3>
                <p className="text-gray-700">
                  Rather than offering standard templates, we created fully custom designs for each staff role,
                  with elegant silhouettes inspired by high fashion while maintaining cultural appropriateness 
                  and functional requirements for beauty professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">The Solution</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Tiered Luxury Uniform System</h3>
                <p className="text-gray-700 mb-6">
                  We created a hierarchical uniform system where each staff tier received progressively more refined detailing:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Master Stylists & Aestheticians:</span>
                      <p className="text-gray-700">Black silk-blend tunics with custom gold embroidery and tailored design elements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Senior Staff:</span>
                      <p className="text-gray-700">Charcoal gray tunics with silver detailing and subtle branding elements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Junior Stylists & Support Staff:</span>
                      <p className="text-gray-700">Elegant black uniforms with clean lines and minimalist design features</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Reception & Client Services:</span>
                      <p className="text-gray-700">Custom-tailored blazers and skirts in signature salon colors with luxury fabric blends</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <Image 
                  src="/images/retail-shops/retail-shops-uniform-brands-logo.jpg" 
                  alt="Tiered luxury salon uniform system" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96">
                <Image 
                  src="/images/corporate/corporate_brand.jpg" 
                  alt="Premium detailing in luxury salon uniforms" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Luxury Details & Customization</h3>
                <p className="text-gray-700 mb-6">
                  Every element of the uniform collection was crafted to convey luxury and exclusivity:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Bespoke Embroidery:</span>
                      <p className="text-gray-700">Custom embroidered salon logo using metallic threads and subtle crystal elements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Premium Hardware:</span>
                      <p className="text-gray-700">Custom-designed buttons and closures in polished gold and silver finishes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Modest Yet Elegant Designs:</span>
                      <p className="text-gray-700">Sophisticated cuts that maintained Saudi modesty requirements while conveying high fashion influence</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Personalized Name Embroidery:</span>
                      <p className="text-gray-700">Each staff member's name elegantly embroidered in script lettering to enhance the personalized service feeling</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">41%</div>
                <p className="text-gray-700">Increase in client satisfaction scores</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">28%</div>
                <p className="text-gray-700">Growth in premium service bookings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                <p className="text-gray-700">Staff approval of new uniforms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">35%</div>
                <p className="text-gray-700">Increase in social media mentions</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Key Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Elevated Brand Perception:</span>
                        <p className="text-gray-700">Clients commented on the heightened sense of luxury and professionalism in the salon environment</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Increased Staff Confidence:</span>
                        <p className="text-gray-700">Beauty professionals reported feeling more confident and professional in their premium attire</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Clear Role Recognition:</span>
                        <p className="text-gray-700">The tiered uniform system helped clients identify staff expertise levels, increasing trust in senior staff</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Social Media Presence:</span>
                        <p className="text-gray-700">Increased client photos in the salon featuring staff in their new uniforms, extending brand reach</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Career Progression Incentive:</span>
                        <p className="text-gray-700">Junior staff reported increased motivation to progress in their careers to access the premium tier uniforms</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Competitive Differentiation:</span>
                        <p className="text-gray-700">Established a visual distinction from competitors, reinforcing the salon's exclusive positioning</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-indigo-50 p-8 md:p-12 rounded-xl relative">
            <svg className="absolute text-indigo-200 h-24 w-24 -top-6 -left-6 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.2.237-.347.537-.444.902-.097.364-.145.77-.145 1.22 0 .657.148 1.15.443 1.48.294.333.747.5 1.358.5.61 0 1.08-.167 1.414-.5.332-.332.498-.824.498-1.48zm9.94 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.2.237-.347.537-.444.902-.097.364-.145.77-.145 1.22 0 .657.148 1.15.443 1.48.294.333.747.5 1.358.5.61 0 1.08-.167 1.414-.5.332-.332.498-.824.498-1.48zM9.838 14.375c0-.089.032-.17.097-.242.064-.073.153-.109.266-.109h.993c.113 0 .202.036.266.11.064.07.097.151.097.24v.635c0 .089-.033.17-.097.242-.064.072-.153.11-.266.11H10.2c-.113 0-.202-.038-.266-.11-.065-.072-.097-.153-.097-.242v-.635zm9.94 0c0-.089.032-.17.097-.242.064-.073.153-.109.266-.109h.993c.113 0 .202.036.266.11.064.07.097.151.097.24v.635c0 .089-.033.17-.097.242-.064.072-.153.11-.266.11h-.993c-.113 0-.202-.038-.266-.11-.065-.072-.097-.153-.097-.242v-.635z" />
            </svg>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                "Working with UNEOM transformed not just our staff appearance but the entire client experience. The bespoke uniforms perfectly complement our salon's interior design and luxury positioning. Our staff feel proud to wear such beautifully crafted garments, and our clients have noticed the elevated level of professionalism. The investment in custom uniforms has paid dividends in client perception and loyalty."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold text-gray-900">Lama Al-Saud</p>
                  <p className="text-gray-600">Founder & Creative Director, Luxury Salon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Elevate Your Beauty Brand with UNEOM</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            UNEOM specializes in creating bespoke uniform solutions for luxury salons and spas 
            across Saudi Arabia, balancing premium aesthetics with cultural appropriateness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Request Consultation
            </Link>
            <Link href="/industries/beauty-salons" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Explore Luxury Salon Uniforms
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/case-studies/beauty-chain-standardization" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/hospitality/hospitality_uniform_hotel_service.jpg" 
                    alt="Beauty Chain Standardization Case Study" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">Beauty Chain Standardization</h3>
                  <p className="text-gray-700 mb-4">
                    How we unified a leading Saudi beauty salon chain with consistent staff uniforms across multiple locations
                  </p>
                  <span className="text-indigo-600 font-medium">Read Case Study →</span>
                </div>
              </div>
            </Link>
            <Link href="/case-studies/hospital-aesthetic-clinic" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/healthcare/healthcare_medical_doctor_uniform.jpg" 
                    alt="Hospital Aesthetic Clinic Case Study" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">Hospital Aesthetic Clinic</h3>
                  <p className="text-gray-700 mb-4">
                    Creating medical-grade uniforms with a luxury aesthetic for a hospital's beauty department
                  </p>
                  <span className="text-indigo-600 font-medium">Read Case Study →</span>
                </div>
              </div>
            </Link>
            <Link href="/case-studies/5-star-hotel-spa" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/hospitality/hospitality_uniform_receiption_hotel.jpg" 
                    alt="5-Star Hotel Spa Case Study" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">5-Star Hotel Spa</h3>
                  <p className="text-gray-700 mb-4">
                    Designing spa uniforms that complemented the hotel's luxury branding while enhancing staff comfort
                  </p>
                  <span className="text-indigo-600 font-medium">Read Case Study →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 