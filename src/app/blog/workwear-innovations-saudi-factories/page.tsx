import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  LightBulbIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  ArrowRightIcon,
  CalendarIcon,
  UserIcon,
  SparklesIcon,
  FireIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Workwear Innovations for Saudi Factories: Enhancing Safety & Productivity | UNEOM',
  description: 'Explore cutting-edge workwear innovations transforming Saudi Arabian factories. Learn about smart fabrics, ergonomic designs, and safety-enhancing technologies for industrial uniforms.',
  keywords: 'workwear innovations, Saudi factories, industrial uniforms, smart fabrics, ergonomic workwear, factory safety, Saudi industry, Vision 2030 manufacturing',
  openGraph: {
    title: 'Workwear Innovations for Saudi Factories | UNEOM',
    description: 'Discover how advanced workwear is revolutionizing safety and productivity in Saudi Arabian factories.',
    images: ['/images/manufacturing/workwear-innovations-saudi-factories.jpg'],
  },
}

const innovations = [
  {
    icon: CpuChipIcon,
    title: 'Smart Fabrics & Wearable Tech',
    description: 'Integration of sensors and IoT devices into workwear for real-time monitoring of worker health, environmental hazards, and location tracking.',
    benefits: ['Enhanced worker safety', 'Proactive hazard detection', 'Improved communication', 'Data-driven decision making'],
    image: '/images/manufacturing/smart-fabric-workwear.jpg',
    color: 'blue'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Advanced Protective Materials',
    description: 'Development of new materials offering superior protection against heat, fire, chemicals, and mechanical risks while being lightweight and comfortable.',
    benefits: ['Increased protection levels', 'Reduced risk of injury', 'Improved comfort and mobility', 'Longer lifespan of garments'],
    image: '/images/manufacturing/advanced-protective-materials.jpg',
    color: 'green'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Ergonomic & Human-Centric Design',
    description: 'Workwear designed with a focus on human factors, improving comfort, reducing fatigue, and enhancing a worker\'s ability to perform tasks efficiently and safely.',
    benefits: ['Reduced musculoskeletal disorders', 'Increased productivity', 'Better worker morale', 'Adaptable to diverse body types'],
    image: '/images/manufacturing/ergonomic-workwear-design.jpg',
    color: 'purple'
  },
  {
    icon: SparklesIcon,
    title: 'Sustainable & Eco-Friendly Workwear',
    description: 'Growing trend of using recycled materials, eco-friendly manufacturing processes, and designing durable workwear for a circular economy.',
    benefits: ['Reduced environmental impact', 'Alignment with CSR goals', 'Cost savings through durability', 'Positive brand image'],
    image: '/images/manufacturing/sustainable-workwear-materials.jpg',
    color: 'teal'
  }
]

const saudiContext = [
  {
    title: 'Vision 2030 Alignment',
    description: 'Saudi Arabia\'s Vision 2030 emphasizes industrial development and worker welfare, driving demand for advanced workwear solutions.',
    icon: BuildingOffice2Icon,
    points: [
      'Focus on non-oil sector growth',
      'Emphasis on localization and local talent development',
      'Adoption of international best practices in safety'
    ]
  },
  {
    title: 'Climate Considerations',
    description: 'The harsh Saudi climate necessitates workwear that offers protection while ensuring thermal comfort and breathability.',
    icon: FireIcon,
    points: [
      'Heat stress management features',
      'Moisture-wicking and cooling fabrics',
      'UV protection for outdoor workers'
    ]
  },
  {
    title: 'Specific Industry Needs',
    description: 'Diverse industries like petrochemicals, construction, and manufacturing have unique workwear requirements.',
    icon: BoltIcon,
    points: [
      'Chemical-resistant gear for petrochemical sector',
      'High-visibility and durable wear for construction',
      'Anti-static and cleanroom garments for specialized manufacturing'
    ]
  }
]

const futureTrends = [
  'AI-powered hazard prediction integrated into uniforms',
  'Exoskeleton-compatible workwear for heavy lifting support',
  'Biometric sensors for fatigue and stress monitoring',
  'Personalized and custom-fit uniforms using 3D scanning',
  'Closed-loop recycling programs for industrial workwear'
]

export default function WorkwearInnovationsSaudiFactoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/manufacturing/factory-background-blur.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-blue-300 mb-4">
              <CalendarIcon className="h-5 w-5" />
              <span className="text-sm font-medium">May 26, 2025</span>
              <span className="text-gray-400">•</span>
              <UserIcon className="h-5 w-5" />
              <span className="text-sm font-medium">UNEOM Industrial Solutions Team</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Workwear Innovations
              <span className="block text-blue-400">Transforming Saudi Factories</span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-10">
              Explore the latest advancements in industrial workwear, enhancing safety, productivity, and worker well-being in Saudi Arabia's dynamic manufacturing sector.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/shop/industrial-uniforms"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Explore Industrial Uniforms
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors duration-300 text-lg"
              >
                Consult Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Evolving Landscape of Industrial Workwear
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The manufacturing landscape in Saudi Arabia is rapidly evolving, driven by Vision 2030 and a commitment to technological advancement. Workwear is no longer just about basic protection; it's becoming an integral part of a smarter, safer, and more productive industrial ecosystem.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Innovations in materials science, wearable technology, and ergonomic design are converging to create next-generation uniforms that actively contribute to worker performance and well-being.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/manufacturing/workwear-innovations-saudi-factories.jpg"
                    alt="Innovative workwear in a Saudi factory setting"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Innovations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Workwear Innovations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the technologies and design philosophies shaping the future of factory uniforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {innovations.map((innovation, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-t-4 border-${innovation.color}-500`}>
                <div className="relative h-64 w-full">
                  <Image
                    src={innovation.image}
                    alt={innovation.title}
                    fill
                    className="object-cover"
                  />
                   <div className="absolute top-4 right-4 bg-blue-500 p-3 rounded-full shadow-md">
                    <innovation.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {innovation.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-800">Key Benefits:</p>
                    <ul className="space-y-2">
                      {innovation.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ShieldCheckIcon className={`h-5 w-5 text-${innovation.color}-500 mr-2 flex-shrink-0`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saudi Context Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Innovations in the Saudi Arabian Context
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Addressing the unique challenges and opportunities within the Kingdom's industrial sector.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {saudiContext.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                     <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                     <li key={idx} className="flex items-start text-gray-600">
                        <ArrowRightIcon className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        {point}
                      </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Trends Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Future of Factory Workwear
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A glimpse into the next wave of innovations set to redefine industrial safety and performance.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {futureTrends.map((trend, index) => (
                <li key={index} className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center hover:bg-gray-600 transition-colors duration-300">
                  <LightBulbIcon className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
                  <span className="text-lg">{trend}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Equip Your Saudi Factory with Innovative Workwear
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Partner with UNEOM to leverage the latest workwear innovations. Enhance safety, boost productivity, and align with Vision 2030 goals for your manufacturing facility in Saudi Arabia.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-lg shadow-md"
            >
              Request a Custom Quote
            </Link>
            <Link
              href="/services/custom-design"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
            >
              Learn About Custom Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Further Reading
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore more insights on industrial safety and workwear.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/safety-standards-saudi-manufacturing" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/manufacturing/saudi-safety-standards.jpg" alt="Saudi Safety Standards" fill className="object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Safety Standards in Saudi Manufacturing</h3>
                <p className="text-gray-700 text-sm mb-4">A comprehensive guide to SASO requirements and best practices.</p>
                <span className="text-blue-600 font-semibold hover:underline">Read More &rarr;</span>
              </div>
            </Link>
            <Link href="/blog/industrial-protective-clothing-advances" className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-56">
                <Image src="/images/manufacturing/protective-clothing.jpg" alt="Protective Clothing Advances" fill className="object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Advances in Industrial Protective Clothing</h3>
                <p className="text-gray-700 text-sm mb-4">How new materials and technologies are enhancing worker protection.</p>
                <span className="text-blue-600 font-semibold hover:underline">Read More &rarr;</span>
              </div>
            </Link>
            <Link href="/shop/industrial-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/products/industrial/heavy-duty-coverall-featured.jpg"
                    alt="Heavy Duty Coveralls"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Heavy-Duty Industrial Coveralls</h3>
                  <p className="text-gray-700 text-sm mb-4">Explore our range of durable and protective coveralls for demanding environments.</p>
                  <span className="text-blue-600 font-semibold hover:underline">View Product &rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}