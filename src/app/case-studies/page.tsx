import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'UNEOM Case Studies | Premium Uniform Solutions for Saudi Beauty Salons',
  description: 'Explore how UNEOM transformed beauty salon operations with premium uniform solutions across Saudi Arabia. Read our detailed case studies on salon chain standardization and luxury spa transformations.',
  keywords: 'beauty salon uniforms Saudi Arabia, salon staff case studies, premium spa uniform implementation, Saudi beauty salon branding, luxury salon staff attire, beauty business transformation',
};

export default function CaseStudiesIndex() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Uniform Success Stories</h1>
            <p className="text-xl mb-8 text-white/90">
              See how UNEOM has transformed businesses across Saudi Arabia with premium uniform solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Beauty & Healthcare Case Studies</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Case Study 1 */}
              <Link href="/case-studies/beauty-chain-standardization" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all group-hover:shadow-xl border border-gray-100">
                  <div className="relative h-64">
                    <Image 
                      src="/images/hospitality/hospitality_uniform_hotel_service.jpg" 
                      alt="Beauty Chain Standardization Case Study" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <div className="text-sm font-medium text-purple-300 mb-2">Beauty Salon Chain</div>
                        <h3 className="text-2xl font-bold mb-2">Beauty Chain Standardization</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      How UNEOM unified a leading Saudi beauty salon chain with professional uniforms across 25+ locations, enhancing brand consistency and staff professionalism.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Salon Chain</span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Multi-location</span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Brand Standardization</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <div className="text-gray-700">
                          <span className="font-medium">25+</span>
                          <span className="text-sm ml-1">Locations</span>
                        </div>
                        <div className="text-gray-700">
                          <span className="font-medium">300+</span>
                          <span className="text-sm ml-1">Staff</span>
                        </div>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:text-purple-800 transition-colors flex items-center">
                        Read Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Case Study 2 */}
              <Link href="/case-studies/luxury-salon-evolution" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all group-hover:shadow-xl border border-gray-100">
                  <div className="relative h-64">
                    <Image 
                      src="/images/corporate/corporate_uniform_formal.jpg" 
                      alt="Luxury Salon Evolution Case Study" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <div className="text-sm font-medium text-indigo-300 mb-2">Premium Spa</div>
                        <h3 className="text-2xl font-bold mb-2">Luxury Salon Evolution</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      How UNEOM transformed a high-end Riyadh beauty salon with bespoke staff uniforms that elevated brand perception and staff professionalism.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">Luxury</span>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">Bespoke Design</span>
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">Brand Elevation</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <div className="text-gray-700">
                          <span className="font-medium">35</span>
                          <span className="text-sm ml-1">Staff</span>
                        </div>
                        <div className="text-gray-700">
                          <span className="font-medium">41%</span>
                          <span className="text-sm ml-1">Satisfaction ↑</span>
                        </div>
                      </div>
                      <span className="text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors flex items-center">
                        Read Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Case Study 3 - Hospital Aesthetic Clinic */}
              <Link href="/case-studies/hospital-aesthetic-clinic" className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all group-hover:shadow-xl border border-gray-100">
                  <div className="relative h-64">
                    <Image 
                      src="/images/hospitality/hospitality_full_look.jpg" 
                      alt="Hospital Aesthetic Clinic Case Study" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <div className="text-sm font-medium text-teal-300 mb-2">Medical Aesthetics</div>
                        <h3 className="text-2xl font-bold mb-2">Hospital Aesthetic Clinic</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      How UNEOM elevated a premier Jeddah medical aesthetic facility with sophisticated healthcare uniforms that balanced clinical standards with luxury appeal.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">Healthcare</span>
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">Medical Compliance</span>
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">Premium Clinic</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <div className="text-gray-700">
                          <span className="font-medium">40+</span>
                          <span className="text-sm ml-1">Staff</span>
                        </div>
                        <div className="text-gray-700">
                          <span className="font-medium">27%</span>
                          <span className="text-sm ml-1">Bookings ↑</span>
                        </div>
                      </div>
                      <span className="text-teal-600 font-medium group-hover:text-teal-800 transition-colors flex items-center">
                        Read Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Coming Soon Section */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">More Case Studies Coming Soon</h3>
              <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                We're working on documenting more success stories from various industries including hospitality, education, and corporate sectors across Saudi Arabia.
              </p>
              <Link href="/contact" className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Request a Custom Case Study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-purple-500 mr-4"></div>
                  <p className="font-medium text-purple-600">Beauty Chain Standardization</p>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "UNEOM's uniform solution transformed our multi-location salon chain. Staff morale improved dramatically, and the consistent professional appearance across all locations significantly strengthened our brand image."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-gray-900">Mohammed Al-Harbi</p>
                    <p className="text-gray-600">Operations Director, Leading Saudi Beauty Chain</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-indigo-500 mr-4"></div>
                  <p className="font-medium text-indigo-600">Luxury Salon Evolution</p>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Working with UNEOM transformed not just our staff appearance but the entire client experience. The bespoke uniforms perfectly complement our salon's interior design and luxury positioning."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-gray-900">Lama Al-Saud</p>
                    <p className="text-gray-600">Founder & Creative Director, Luxury Salon</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-teal-500 mr-4"></div>
                  <p className="font-medium text-teal-600">Hospital Aesthetic Clinic</p>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The uniforms UNEOM designed for our clinic perfectly balance medical professionalism with the premium aesthetic our clientele expects. Our patients have commented on how the new uniforms enhance their perception of our services."
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-gray-900">Dr. Nasser Al-Qahtani</p>
                    <p className="text-gray-600">Medical Director, Premier Aesthetic Clinic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            UNEOM creates premium uniform solutions tailored to your specific industry needs across Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Request Consultation
            </Link>
            <Link href="/industries" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Explore Industry Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 