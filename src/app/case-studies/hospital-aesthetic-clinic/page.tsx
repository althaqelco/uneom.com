import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Hospital Aesthetic Clinic Case Study | Medical Uniforms | UNEOM Saudi Arabia',
  description: 'How UNEOM designed premium medical uniforms for a leading Jeddah hospital aesthetic clinic, enhancing patient trust and staff professionalism while meeting Saudi healthcare standards.',
  keywords: 'hospital aesthetic clinic uniforms, medical spa staff attire Saudi, healthcare uniform solutions Jeddah, medical aesthetics clinic uniforms, Saudi healthcare staff appearance, premium medical uniforms',
};

export default function HospitalAestheticClinicCaseStudy() {
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
            "headline": "Hospital Aesthetic Clinic: UNEOM Elevates Medical Professionalism in Jeddah",
            "description": "Case study on how UNEOM delivered premium uniforms for a leading hospital aesthetic clinic in Jeddah, enhancing patient confidence and staff professional appearance.",
            "image": "https://uneom.com/images/hospitality/hospitality_full_look.jpg",
            "datePublished": "2023-11-15T08:00:00+03:00",
            "author": {
              "@type": "Organization",
              "name": "UNEOM Professional Uniforms"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-sm uppercase tracking-wider font-semibold text-teal-300">Case Study</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospital Aesthetic Clinic Transformation</h1>
            <p className="text-xl mb-8 text-white/90">How UNEOM elevated a premier Jeddah medical aesthetic facility with sophisticated healthcare uniforms</p>
            <div className="flex items-center space-x-4">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Industry</span>
                <span className="block text-lg">Healthcare Aesthetics</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Location</span>
                <span className="block text-lg">Jeddah, Saudi Arabia</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="block text-sm font-medium">Project Duration</span>
                <span className="block text-lg">2.5 months</span>
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
                A prestigious hospital-affiliated aesthetic clinic in Jeddah specializing in both medical and cosmetic 
                procedures. With a team of 40+ professionals including plastic surgeons, dermatologists, aesthetic specialists, 
                nurses, and administrative staff, they needed uniforms that would:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Reflect their position as a medical establishment while conveying luxury aesthetics</li>
                <li>Meet stringent Saudi healthcare regulations and hygiene standards</li>
                <li>Distinguish clearly between different staff roles</li>
                <li>Provide comfort during long procedures</li>
                <li>Instill confidence in their high-net-worth clientele</li>
              </ul>
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-teal-900">Key Challenge</h3>
                <p className="text-gray-700">
                  The clinic struggled to find uniforms that balanced clinical professionalism with the premium aesthetics 
                  expected by their clientele. Staff were wearing a mix of standard hospital scrubs and business attire, creating 
                  inconsistency in their brand presentation and undermining their premium positioning.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              <Image 
                src="/images/hospitality/hospitality_full_look.jpg" 
                alt="Medical aesthetics professionals in premium uniforms" 
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
                <p className="text-sm text-gray-700 font-medium">New uniforms balanced clinical professionalism with premium aesthetics</p>
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
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Medical Compliance Analysis</h3>
                <p className="text-gray-700">
                  We conducted a thorough review of Saudi healthcare uniform regulations and medical fabric requirements,
                  ensuring all designs would meet or exceed official standards while maintaining a premium aesthetic.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Clinic Environment Integration</h3>
                <p className="text-gray-700">
                  We studied the clinic's interior design, color scheme, and branding to create uniforms that would
                  complement their sophisticated environment while maintaining clear medical professionalism.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Medical-Grade Fabric Selection</h3>
                <p className="text-gray-700">
                  We sourced premium antimicrobial, fluid-resistant fabrics that could withstand medical-grade
                  sanitation while providing the sophisticated appearance and comfort required for long procedures.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Role Distinction System</h3>
                <p className="text-gray-700">
                  We developed a cohesive yet clearly differentiated uniform system that would allow patients to
                  immediately identify staff roles while maintaining a unified premium brand appearance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">5</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Cultural Considerations</h3>
                <p className="text-gray-700">
                  We ensured all uniform designs respected Saudi cultural norms while incorporating modern
                  medical uniform innovations, including modest options and hijab-compatible designs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full mb-4 text-xl font-bold">6</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Prototype Testing</h3>
                <p className="text-gray-700">
                  We implemented an extensive wear-test program with key staff members to ensure comfort during
                  long procedures and to gather feedback for final adjustments before full production.
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
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Medical-Aesthetic Uniform Integration</h3>
                <p className="text-gray-700 mb-6">
                  We created a comprehensive uniform collection that balanced clinical requirements with premium aesthetics:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Physicians & Surgeons:</span>
                      <p className="text-gray-700">Tailored navy lab coats with subtle teal accents and sophisticated details, paired with premium scrubs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Aesthetic Specialists:</span>
                      <p className="text-gray-700">Modern teal tunic tops with ergonomic design and antimicrobial finish for both comfort and protection</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Nursing Staff:</span>
                      <p className="text-gray-700">Contemporary scrubs in the clinic's signature light teal with contrasting navy piping and functional pockets</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Reception & Administration:</span>
                      <p className="text-gray-700">Elegant blazers and matching bottoms in complementary navy with subtle clinic branding</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <Image 
                  src="/images/hospitality/hospitality_reception.jpg" 
                  alt="Medical aesthetic clinic uniform system" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-96">
                <Image 
                  src="/images/hospitality/hospitality_uniform_management.jpg" 
                  alt="Premium medical-grade fabrics and details" 
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Premium Medical-Grade Features</h3>
                <p className="text-gray-700 mb-6">
                  Every uniform was engineered with specialized features for the medical-aesthetic environment:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Advanced Antimicrobial Protection:</span>
                      <p className="text-gray-700">All fabrics treated with medical-grade antimicrobial technology to prevent contamination</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Fluid-Resistant Finishing:</span>
                      <p className="text-gray-700">Special coating providing protection against fluids while maintaining breathability and comfort</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Strategic Stretch Panels:</span>
                      <p className="text-gray-700">4-way stretch fabric in key areas for unrestricted movement during procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 text-teal-600 p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">Discrete Branding Elements:</span>
                      <p className="text-gray-700">Subtle embroidery and hardware in the clinic's signature colors reinforcing brand identity</p>
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
                <div className="text-teal-600 text-4xl font-bold mb-2">94%</div>
                <p className="text-gray-700">Staff satisfaction with new uniforms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-teal-600 text-4xl font-bold mb-2">32%</div>
                <p className="text-gray-700">Increase in patient perception of professionalism</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-teal-600 text-4xl font-bold mb-2">27%</div>
                <p className="text-gray-700">Rise in premium procedure bookings</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-teal-600 text-4xl font-bold mb-2">100%</div>
                <p className="text-gray-700">Compliance with healthcare regulations</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Transformative Business Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-3 text-gray-900">Patient Confidence & Trust</h4>
                  <p className="text-gray-700 mb-4">
                    The new uniforms significantly enhanced patient perception of the clinic's professionalism and 
                    expertise. Survey data showed that 87% of patients reported increased confidence in the clinical 
                    quality of services based partly on staff appearance.
                  </p>
                  <p className="text-gray-700">
                    This translated directly to increased comfort with higher-value aesthetic procedures, with the 
                    clinic reporting a 27% increase in premium service bookings within three months of uniform implementation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3 text-gray-900">Staff Performance & Brand Unity</h4>
                  <p className="text-gray-700 mb-4">
                    Staff reported feeling more confident and professional in their new uniforms. The clear role 
                    differentiation improved patient interactions, with 94% of staff stating the uniforms helped them 
                    be more easily identified by patients.
                  </p>
                  <p className="text-gray-700">
                    Additionally, the new uniform system created stronger visual unity across all clinic locations and 
                    departments, reinforcing their premium brand identity and creating a more cohesive team environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-teal-300 mx-auto mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            <blockquote className="text-2xl font-light mb-10">
              The uniforms UNEOM designed for our clinic perfectly balance medical professionalism with the premium aesthetic our clientele expects. Our staff feel more confident and our patients have commented on how the new uniforms enhance their perception of our services. The careful attention to both healthcare requirements and design details has truly transformed our clinic environment.
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-bold text-xl">Dr. Nasser Al-Qahtani</p>
              <p className="text-teal-300">Medical Director, Premier Aesthetic Clinic, Jeddah</p>
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
              <Link href="/case-studies/beauty-chain-standardization" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg border border-gray-100">
                  <div className="relative h-48">
                    <Image 
                      src="/images/hospitality/hospitality_uniform_hotel_service.jpg" 
                      alt="Beauty Chain Standardization Case Study" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-bold">Beauty Chain Standardization</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">How UNEOM unified a leading Saudi beauty salon chain with professional uniforms across 25+ locations</p>
                    <span className="text-teal-600 font-medium group-hover:text-teal-800 transition-colors flex items-center mt-2">
                      Read Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              
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
                    <p className="text-gray-700">How UNEOM transformed a high-end Riyadh beauty salon with bespoke staff uniforms</p>
                    <span className="text-teal-600 font-medium group-hover:text-teal-800 transition-colors flex items-center mt-2">
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
      <section className="py-16 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Healthcare Uniform Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            UNEOM creates premium medical and healthcare uniform solutions that meet Saudi regulations 
            while elevating your facility's professional image.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-teal-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Request Healthcare Consultation
            </Link>
            <Link href="/industries/healthcare" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Explore Healthcare Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 