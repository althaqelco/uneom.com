import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: '5-Star Hotel Spa Uniform Case Study | Luxury Spa Workwear | UNEOM Saudi Arabia',
  description: 'How UNEOM transformed a prestigious 5-star hotel spa in Riyadh with custom luxury uniforms that elevated staff confidence, guest experiences, and brand identity',
  keywords: 'luxury spa uniforms, 5-star hotel spa workwear, Saudi Arabia hotel uniforms, spa staff uniforms Riyadh, luxury hospitality uniforms, wellness center staff clothing, hotel spa branding'};

export default function FiveStarHotelSpaCaseStudy() {
  return (
    <main className="bg-white">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">5-Star Hotel Spa Uniform Case Study | Luxury Spa Workwear</h1>
      
      {/* Schema.org structured data */}
      <Script
        id="case-study-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "5-Star Hotel Spa Transformation: Luxury Uniform Design by UNEOM",
            "description": "A case study on how UNEOM transformed a prestigious 5-star hotel spa in Riyadh with custom luxury uniforms that elevated the guest experience and staff confidence.",
            "image": "https://uneom.com/images/hospitality/hospitality_spa_uniform.jpg",
            "datePublished": "2024-05-01T08:00:00+03:00",
            "author": {
              "@type": "Organization",
              "name": "UNEOM Professional Uniforms"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm uppercase tracking-wider font-semibold text-indigo-300">Case Study</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">5-Star Hotel Spa Transformation</h1>
            <p className="text-xl mb-8 text-white/90">How UNEOM elevated a prestigious hotel spa in Riyadh with luxury uniforms that embodied wellness, sophistication, and cultural sensitivity</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Sector</span>
                <span className="block text-lg">Luxury Hospitality</span>
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
                One of Riyadh's most prestigious 5-star hotels, featuring an award-winning spa and wellness center 
                that offers a comprehensive range of treatments and experiences. The spa caters to discerning guests 
                from around the world who expect unparalleled luxury and service excellence.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>30,000 square foot spa and wellness facility</li>
                <li>Team of 40+ specialized wellness practitioners and support staff</li>
                <li>Diverse treatment offerings from traditional Arabian rituals to cutting-edge wellness therapies</li>
                <li>Separate male and female facilities with shared luxury relaxation areas</li>
                <li>Multiple international awards for spa excellence</li>
              </ul>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-900">The Key Challenge</h3>
                <p className="text-gray-700">
                  The spa needed to balance luxury with functionality, creating uniforms that 
                  reflected the hotel's prestigious brand while providing comfort and modesty for staff 
                  performing a wide range of treatments. The uniforms needed to be suitable for Saudi 
                  Arabia's cultural context while maintaining the international luxury standards 
                  expected by global travelers.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              <Image 
                src="/images/hospitality/hospitality_spa_uniform.jpg" 
                alt="Luxury spa staff in custom designer uniforms" 
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-700 font-medium">Luxury spa reception staff in UNEOM uniforms</p>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Immersive Brand Experience</h3>
                <p className="text-gray-700">
                  Our team immersed themselves in the hotel spa experience, 
                  understanding the unique atmosphere, service flow, and brand positioning
                  to ensure our designs would harmonize with the overall guest journey.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Staff Role Analysis</h3>
                <p className="text-gray-700">
                  We conducted a detailed analysis of each staff role, 
                  from therapists and aestheticians to reception and management,
                  to understand their specific movement requirements, treatment protocols,
                  and client interaction patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Cultural Adaptation</h3>
                <p className="text-gray-700">
                  We integrated modern luxury design principles while respecting
                  Saudi cultural expectations, developing options suitable for
                  both local and international staff in a way that honored local values
                  without compromising on elegance.
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
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Therapist Collection</h3>
                <p className="text-gray-700 mb-6">
                  We developed a premium collection of treatment uniforms that balanced practical needs with luxury aesthetics:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Moisture-wicking luxury fabrics</span>
                      <p className="text-gray-700">High-end performance textiles with antimicrobial properties and comfort stretch</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Modular design system</span>
                      <p className="text-gray-700">Layering elements allowing staff to adapt attire to different treatment types</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Hijab-friendly options</span>
                      <p className="text-gray-700">Elegant designs incorporating modest alternatives for female staff preferring hijab coverage</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <Image 
                  src="/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg" 
                  alt="Luxury hotel spa therapist uniform" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96">
                <Image 
                  src="/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg" 
                  alt="5-star hotel spa reception uniform" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Front-of-House Elegance</h3>
                <p className="text-gray-700 mb-6">
                  For the guest-facing roles, we created a collection that embodied the hotel's luxury positioning:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Signature silhouettes</span>
                      <p className="text-gray-700">Contemporary cuts with subtle nods to traditional Arabian fashion elements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Premium natural textiles</span>
                      <p className="text-gray-700">Soft-touch cotton blends and silk accents in the hotel's signature color palette</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Bespoke accessories</span>
                      <p className="text-gray-700">Custom-designed pins, scarves, and pocket squares featuring subtle brand elements</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Results & Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">32%</div>
                <p className="text-gray-700">Increase in treatment bookings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">96%</div>
                <p className="text-gray-700">Staff satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">28%</div>
                <p className="text-gray-700">Boost in spa retail sales</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 text-4xl font-bold mb-2">4.9/5</div>
                <p className="text-gray-700">Average guest rating</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Key Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700">Significant improvement in brand perception and perceived luxury value</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700">Enhanced staff confidence when interacting with VIP clientele</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700">More frequent mentions of staff presentation in positive guest reviews</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-gray-700">Improved employee retention rates among spa therapists and specialists</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-indigo-300 mx-auto mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <blockquote className="text-2xl font-light mb-10">
              UNEOM understood the unique challenges of creating spa uniforms that would represent our luxury positioning while meeting the practical needs of our therapists. The results have exceeded our expectations, with both staff and guests commenting on how the uniforms enhance the overall wellness experience.
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">Sarah Al-Farsi</p>
              <p className="text-indigo-300">Spa Director, 5-Star Hotel Riyadh</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/case-studies/luxury-salon-evolution" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg border border-gray-100">
                  <div className="relative h-48">
                    <Image 
                      src="/images/corporate/corporate_uniform_formal.jpg" 
                      alt="Luxury Salon Evolution Case Study" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">Luxury Salon Evolution</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">How UNEOM transformed a high-end Riyadh beauty salon with bespoke uniforms reflecting premium positioning</p>
                    <span className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors flex items-center mt-2">
                      Read Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/hospital-aesthetic-clinic" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg border border-gray-100">
                  <div className="relative h-48">
                    <Image 
                      src="/images/healthcare/healthcare_medical_uniform.jpg" 
                      alt="Hospital Aesthetic Clinic Case Study" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">Hospital Aesthetic Clinic</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">How UNEOM elevated a Jeddah hospital's cosmetic services through advanced medical uniforms blending standards with elegance</p>
                    <span className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors flex items-center mt-2">
                      Read Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Hospitality Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            UNEOM designs luxurious, functional uniforms that elevate your brand and enhance both guest and staff experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Request a Consultation
            </Link>
            <Link href="/industries/hospitality" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Explore Hospitality Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 