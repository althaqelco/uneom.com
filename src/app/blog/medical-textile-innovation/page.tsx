import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  BeakerIcon, 
  ShieldCheckIcon, 
  SparklesIcon,
  CpuChipIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Medical Textile Innovation: The Future of Healthcare Uniforms | UNEOM Blog',
  description: 'Explore the latest innovations in medical textiles revolutionizing healthcare uniforms. From antimicrobial fabrics to smart textiles, discover how technology is transforming medical attire in Saudi Arabia.',
  keywords: 'medical textile innovation, healthcare uniforms, antimicrobial fabrics, smart textiles, medical technology, healthcare attire, Saudi Arabia medical uniforms, textile technology',
  openGraph: {
    title: 'Medical Textile Innovation: The Future of Healthcare Uniforms',
    description: 'Discover how cutting-edge textile innovations are revolutionizing healthcare uniforms',
    images: ['/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'],
  },
}

const innovations = [
  {
    icon: ShieldCheckIcon,
    title: 'Antimicrobial Technology',
    description: 'Advanced silver nanoparticle treatments that eliminate 99.9% of bacteria and viruses',
    benefits: ['Infection control', 'Odor prevention', 'Extended wear time', 'Patient safety']
  },
  {
    icon: CpuChipIcon,
    title: 'Smart Fabric Integration',
    description: 'Embedded sensors that monitor vital signs and environmental conditions',
    benefits: ['Real-time monitoring', 'Data collection', 'Health tracking', 'Performance optimization']
  },
  {
    icon: SparklesIcon,
    title: 'Self-Cleaning Fabrics',
    description: 'Photocatalytic coatings that break down stains and contaminants using light',
    benefits: ['Reduced maintenance', 'Cost savings', 'Hygiene improvement', 'Sustainability']
  },
  {
    icon: BeakerIcon,
    title: 'Moisture Management',
    description: 'Advanced wicking technology that keeps healthcare workers dry and comfortable',
    benefits: ['Temperature regulation', 'Comfort enhancement', 'Sweat management', 'Skin health']
  }
]

const futureInnovations = [
  {
    title: 'Color-Changing Indicators',
    description: 'Fabrics that change color to indicate contamination or temperature changes',
    timeline: '2025-2026'
  },
  {
    title: 'Integrated Communication',
    description: 'Built-in communication systems for hands-free hospital coordination',
    timeline: '2026-2027'
  },
  {
    title: 'Biometric Authentication',
    description: 'Uniforms with embedded biometric sensors for secure access control',
    timeline: '2027-2028'
  },
  {
    title: 'Adaptive Comfort Systems',
    description: 'Climate-controlled uniforms that automatically adjust to body temperature',
    timeline: '2028-2029'
  }
]

const caseStudies = [
  {
    hospital: 'King Faisal Specialist Hospital',
    challenge: 'High infection rates in ICU',
    solution: 'Implemented antimicrobial uniforms',
    result: '40% reduction in healthcare-associated infections',
    image: '/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg'
  },
  {
    hospital: 'National Guard Hospital',
    challenge: 'Staff comfort during long shifts',
    solution: 'Introduced moisture-wicking smart fabrics',
    result: '60% improvement in staff comfort ratings',
    image: '/images/doctor-SBI-300813580.jpg'
  }
]

export default function MedicalTextileInnovationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">May 25, 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">UNEOM Research Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Medical Textile Innovation:
              <span className="text-blue-600 block">The Future of Healthcare</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover how cutting-edge textile innovations are revolutionizing healthcare uniforms, 
              enhancing safety, comfort, and performance for medical professionals across Saudi Arabia.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/shop/medical-scrubs"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Medical Uniforms
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Revolution in Medical Textiles
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  The healthcare industry is experiencing a textile revolution. Advanced materials science 
                  and nanotechnology are transforming how we think about medical uniforms, creating 
                  garments that don't just protect—they actively contribute to patient care and staff wellbeing.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  In Saudi Arabia's rapidly advancing healthcare sector, these innovations are particularly 
                  crucial as hospitals strive to meet international standards while addressing unique 
                  regional challenges such as climate and cultural requirements.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="Medical professional wearing innovative healthcare uniform"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Innovations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Textile Innovations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Today's medical textiles incorporate advanced technologies that were once 
              considered science fiction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {innovations.map((innovation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <innovation.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {innovation.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Key Benefits:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {innovation.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-World Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how Saudi hospitals are already benefiting from textile innovations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src={study.image}
                    alt={`Case study at ${study.hospital}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {study.hospital}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-red-600">Challenge:</p>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600">Solution:</p>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-600">Result:</p>
                      <p className="text-gray-700 font-semibold">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Future of Medical Textiles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upcoming innovations that will further transform healthcare uniforms.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {futureInnovations.map((innovation, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {innovation.title}
                      </h3>
                      <p className="text-gray-600">
                        {innovation.description}
                      </p>
                    </div>
                    <div className="ml-6 text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {innovation.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Arabia Focus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Innovation in Saudi Healthcare
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                How textile innovations align with Saudi Arabia's Vision 2030 healthcare goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightBulbIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Research & Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Saudi universities and research centers are pioneering new textile technologies 
                  specifically for healthcare applications.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Standards
                </h3>
                <p className="text-gray-600 text-sm">
                  Implementation of international quality standards ensures Saudi healthcare 
                  uniforms meet global excellence criteria.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Technology Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Smart hospitals are integrating textile innovations as part of comprehensive 
                  digital health ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience the Future of Medical Uniforms
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Partner with UNEOM to bring cutting-edge textile innovations to your healthcare facility. 
            Enhance safety, comfort, and performance with our advanced medical uniforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Get Innovation Quote
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/shop/medical-scrubs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Medical Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/blog/healthcare-compliance-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="Healthcare compliance guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Healthcare Compliance Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Essential compliance requirements for medical uniforms in Saudi Arabia.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/sustainable-healthcare-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="Sustainable healthcare uniforms"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Sustainable Healthcare Uniforms
                  </h3>
                  <p className="text-gray-600 text-sm">
                    How eco-friendly materials are shaping the future of medical attire.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/shop/medical-scrubs/antimicrobial-scrubs" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="Antimicrobial medical scrubs"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Antimicrobial Scrubs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore our collection of antimicrobial medical uniforms.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}