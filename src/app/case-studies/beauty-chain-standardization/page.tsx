import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Beauty Chain Standardization Case Study | UNEOM Salon Uniforms | Saudi Arabia',
  description: 'How UNEOM helped a leading Saudi beauty salon chain standardize staff uniforms across 25+ locations, improving brand consistency and professional appearance while accommodating Saudi cultural requirements.',
  keywords: 'beauty salon uniforms Saudi, salon staff standardization, beauty chain branding, aesthetic clinic uniforms Riyadh, Saudi salon staff attire, beauty professional uniforms, salon brand consistency',
};

export default function BeautyChainStandardizationCaseStudy() {
  return (
    <main className="bg-white">
      {/* Schema.org structured data */}
      <Script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Beauty Chain Standardization: How UNEOM Unified 25+ Salon Locations with Professional Uniforms",
            "description": "Case study on how UNEOM helped a leading Saudi beauty salon chain implement a standardized uniform system across multiple locations, enhancing brand identity and staff professionalism.",
            "image": "https://uneom.com/images/hospitality/hospitality_uniform_hotel_service.jpg",
            "datePublished": "2023-09-15T08:00:00+03:00",
            "author": {
              "@type": "Organization",
              "name": "UNEOM Professional Uniforms"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm uppercase tracking-wider font-semibold text-pink-200">Case Study</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Beauty Chain Standardization</h1>
            <p className="text-xl mb-8 text-white/90">How UNEOM unified a leading Saudi beauty salon chain with professional uniforms across 25+ locations</p>
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Industry</span>
                <span className="block text-lg">Beauty & Aesthetics</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Location</span>
                <span className="block text-lg">Multiple cities across KSA</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Project Duration</span>
                <span className="block text-lg">4 months</span>
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
                A prominent Saudi beauty salon chain with 25+ locations across Riyadh, Jeddah, and other major Saudi cities. 
                With over 300 staff members across various roles including beauticians, aestheticians, hair stylists, nail technicians, 
                and reception staff, the chain needed a uniform solution that would:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Create a consistent brand image across all locations</li>
                <li>Distinguish between different staff roles</li>
                <li>Accommodate Saudi cultural considerations</li>
                <li>Provide comfort for long working hours</li>
                <li>Maintain a premium aesthetic aligned with their high-end positioning</li>
              </ul>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">Key Challenge</h3>
                <p className="text-gray-700">
                  Prior to partnering with UNEOM, each location had its own approach to staff attire, resulting in 
                  inconsistent brand representation and varying levels of professionalism across the chain.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              <Image 
                src="/images/hospitality/hospitality_uniform_hotel_service.jpg" 
                alt="Beauty salon staff in professional uniforms" 
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-700 font-medium">New standardized uniforms improved brand consistency across locations</p>
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
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Comprehensive Assessment</h3>
                <p className="text-gray-700">
                  We conducted a thorough analysis of the client's brand identity, salon environments, 
                  staff activities, and cultural considerations. This included on-site visits to multiple locations 
                  to understand the unique needs of different roles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Role-Specific Design</h3>
                <p className="text-gray-700">
                  We developed distinctive yet cohesive uniform designs for each role, ensuring they met 
                  both functional requirements (comfort, ease of movement, stain resistance) and aesthetic 
                  standards aligned with the premium brand position.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Culturally-Appropriate Solutions</h3>
                <p className="text-gray-700">
                  We designed options that respected Saudi cultural norms while maintaining style and function, 
                  including hijab-friendly designs, modest fits, and appropriate length options for all staff members.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Fabric Selection</h3>
                <p className="text-gray-700">
                  We selected high-quality, durable fabrics that could withstand the rigors of salon environments, 
                  including exposure to beauty products, frequent washing, and extended wear throughout long shifts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 text-xl font-bold">5</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Prototype Testing</h3>
                <p className="text-gray-700">
                  Before full implementation, we conducted wear tests with staff members across different roles 
                  to gather feedback and make necessary adjustments to ensure comfort and functionality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4 text-xl font-bold">6</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Phased Implementation</h3>
                <p className="text-gray-700">
                  We developed a rollout plan that ensured minimal disruption to operations, with training 
                  for staff on proper wear and care of new uniforms, and a system for replacements and new hires.
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
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Role-Differentiated Uniform System</h3>
                <p className="text-gray-700 mb-6">
                  We created a comprehensive uniform system with clear role differentiation while maintaining 
                  visual cohesion across the entire staff:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Beauticians & Aestheticians:</span>
                      <p className="text-gray-700">Modern tunics in the brand's signature purple with ergonomic design for ease of movement</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Hair Stylists:</span>
                      <p className="text-gray-700">Stylish black aprons with brand embroidery over color-coded shirts indicating experience level</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Nail Technicians:</span>
                      <p className="text-gray-700">Stain-resistant tops with specially designed sleeves that could be easily adjusted during detailed work</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Reception & Front Desk:</span>
                      <p className="text-gray-700">Elegant blazers and blouses in brand colors, creating a sophisticated first impression</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <Image 
                  src="/images/retail-shops/retail-shops-uniform-identity-2.jpg" 
                  alt="Role-differentiated beauty salon uniforms" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96">
                <Image 
                  src="/images/retail-shops/retail-shops-uniform-identity.jpg" 
                  alt="Culturally appropriate beauty salon uniforms" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cultural Considerations & Brand Integration</h3>
                <p className="text-gray-700 mb-6">
                  Our designs thoughtfully incorporated Saudi cultural expectations while maintaining the brand's premium aesthetic:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Hijab-Friendly Designs:</span>
                      <p className="text-gray-700">Custom-designed hijabs in brand colors with moisture-wicking fabrics for comfort during long shifts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Modest Yet Functional:</span>
                      <p className="text-gray-700">Appropriate coverage while maintaining ease of movement for technical beauty procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Brand Identity Integration:</span>
                      <p className="text-gray-700">Consistent use of brand colors, refined embroidery of logos, and custom buttons with brand insignia</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-pink-100 text-pink-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Premium Finishing:</span>
                      <p className="text-gray-700">High-quality stitching, reinforced seams, and premium fabrics that maintained appearance after repeated washing</p>
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
                <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
                <p className="text-gray-700">Staff satisfaction with new uniforms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">32%</div>
                <p className="text-gray-700">Increase in brand recognition</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
                <p className="text-gray-700">Locations with consistent branding</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">28%</div>
                <p className="text-gray-700">Reduction in uniform replacement costs</p>
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
                        <span className="font-semibold text-gray-900">Enhanced Brand Consistency:</span>
                        <p className="text-gray-700">Uniform application of brand identity across all locations created a coherent visual experience for customers</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Improved Staff Identification:</span>
                        <p className="text-gray-700">Customers could easily identify staff roles, enhancing the service experience</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Higher Staff Satisfaction:</span>
                        <p className="text-gray-700">Comfortable, culturally-appropriate uniforms boosted employee morale and sense of professionalism</p>
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
                        <span className="font-semibold text-gray-900">Streamlined Operations:</span>
                        <p className="text-gray-700">Centralized uniform management reduced administration time and costs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Long-Term Durability:</span>
                        <p className="text-gray-700">Premium fabrics and construction resulted in longer-lasting uniforms, reducing replacement frequency</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <span className="font-semibold text-gray-900">Scalable System:</span>
                        <p className="text-gray-700">The standardized system easily accommodated new locations as the chain continued to expand</p>
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
          <div className="max-w-4xl mx-auto bg-purple-50 p-8 md:p-12 rounded-xl relative">
            <svg className="absolute text-purple-200 h-24 w-24 -top-6 -left-6 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.2.237-.347.537-.444.902-.097.364-.145.77-.145 1.22 0 .657.148 1.15.443 1.48.294.333.747.5 1.358.5.61 0 1.08-.167 1.414-.5.332-.332.498-.824.498-1.48zm9.94 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.2.237-.347.537-.444.902-.097.364-.145.77-.145 1.22 0 .657.148 1.15.443 1.48.294.333.747.5 1.358.5.61 0 1.08-.167 1.414-.5.332-.332.498-.824.498-1.48zM9.838 14.375c0-.089.032-.17.097-.242.064-.073.153-.109.266-.109h.993c.113 0 .202.036.266.11.064.07.097.151.097.24v.635c0 .089-.033.17-.097.242-.064.072-.153.11-.266.11H10.2c-.113 0-.202-.038-.266-.11-.065-.072-.097-.153-.097-.242v-.635zm9.94 0c0-.089.032-.17.097-.242.064-.073.153-.109.266-.109h.993c.113 0 .202.036.266.11.064.07.097.151.097.24v.635c0 .089-.033.17-.097.242-.064.072-.153.11-.266.11h-.993c-.113 0-.202-.038-.266-.11-.065-.072-.097-.153-.097-.242v-.635z" />
            </svg>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                "The uniform standardization project with UNEOM transformed how our clients perceive our brand. We now have a cohesive visual identity across all our locations, and our staff feel more professional and proud to represent our company. The attention to cultural details and functional requirements has been particularly impressive."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold text-gray-900">Nora Al-Qahtani</p>
                  <p className="text-gray-600">Operations Director, Beauty Chain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Standardize Your Beauty Brand's Image?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            UNEOM specializes in creating cohesive, culturally-appropriate uniform solutions for beauty salons 
            and aesthetic clinics across Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Request Consultation
            </Link>
            <Link href="/industries/beauty-salons" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Learn More About Beauty Salon Uniforms
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/case-studies/luxury-salon-evolution" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/corporate/corporate_uniform_formal.jpg" 
                    alt="Luxury Salon Evolution Case Study" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Luxury Salon Evolution</h3>
                  <p className="text-gray-700 mb-4">
                    How we helped a premium salon rebrand with elegant staff uniforms reflecting their luxury positioning
                  </p>
                  <span className="text-purple-600 font-medium">Read Case Study →</span>
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
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Hospital Aesthetic Clinic</h3>
                  <p className="text-gray-700 mb-4">
                    Creating medical-grade uniforms with a luxury aesthetic for a hospital's beauty department
                  </p>
                  <span className="text-purple-600 font-medium">Read Case Study →</span>
                </div>
              </div>
            </Link>
            <Link href="/case-studies/spa-chain-rebranding" className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/hospitality/hospitality_uniform.jpg" 
                    alt="Spa Chain Rebranding Case Study" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Spa Chain Rebranding</h3>
                  <p className="text-gray-700 mb-4">
                    Uniform redesign for a wellness spa chain emphasizing comfort and natural aesthetics
                  </p>
                  <span className="text-purple-600 font-medium">Read Case Study →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 