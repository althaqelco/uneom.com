import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  SwatchIcon,
  BeakerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  FireIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Complete Fabric Guide for Professional Uniforms | UNEOM Resources',
  description: 'Comprehensive guide to choosing the right fabrics for professional uniforms. Learn about cotton, polyester, blends, and specialty fabrics for healthcare, corporate, and industrial use.',
  keywords: 'fabric guide, uniform fabrics, cotton uniforms, polyester uniforms, fabric blends, healthcare fabrics, corporate fabrics, industrial fabrics, fabric properties',
  openGraph: {
    title: 'Complete Fabric Guide for Professional Uniforms',
    description: 'Everything you need to know about choosing the right fabrics for your uniforms',
    images: ['/images/resources/fabric-guide-preview.jpg'],
  },
}

const fabricTypes = [
  {
    id: 'cotton',
    name: 'Cotton',
    description: 'Natural fiber known for comfort and breathability',
    icon: SparklesIcon,
    properties: {
      comfort: 95,
      durability: 75,
      breathability: 90,
      easycare: 70,
      costeffective: 85
    },
    pros: [
      'Excellent breathability',
      'Soft and comfortable',
      'Hypoallergenic',
      'Absorbs moisture well',
      'Easy to dye'
    ],
    cons: [
      'Wrinkles easily',
      'Shrinks when washed',
      'Fades over time',
      'Slower drying time'
    ],
    bestFor: ['Healthcare scrubs', 'Casual corporate wear', 'Undergarments', 'Hot climate uniforms'],
    careInstructions: [
      'Wash in cold water',
      'Use mild detergent',
      'Tumble dry on low heat',
      'Iron while slightly damp'
    ],
    price: '$$',
    sustainability: 'High - Biodegradable natural fiber'
  },
  {
    id: 'polyester',
    name: 'Polyester',
    description: 'Synthetic fiber offering durability and easy care',
    icon: ShieldCheckIcon,
    properties: {
      comfort: 70,
      durability: 95,
      breathability: 60,
      easycare: 95,
      costeffective: 90
    },
    pros: [
      'Highly durable',
      'Wrinkle resistant',
      'Color retention',
      'Quick drying',
      'Stain resistant'
    ],
    cons: [
      'Less breathable',
      'Can feel synthetic',
      'Static buildup',
      'Odor retention'
    ],
    bestFor: ['Industrial uniforms', 'Outerwear', 'High-wear items', 'Easy-care requirements'],
    careInstructions: [
      'Machine wash warm',
      'Use fabric softener',
      'Tumble dry medium heat',
      'Iron on low setting'
    ],
    price: '$',
    sustainability: 'Medium - Recyclable synthetic'
  },
  {
    id: 'cotton-poly',
    name: 'Cotton-Polyester Blend',
    description: 'Combines the best of both natural and synthetic fibers',
    icon: BeakerIcon,
    properties: {
      comfort: 85,
      durability: 85,
      breathability: 75,
      easycare: 85,
      costeffective: 85
    },
    pros: [
      'Balanced properties',
      'Reduced shrinkage',
      'Good durability',
      'Comfortable wear',
      'Easy maintenance'
    ],
    cons: [
      'Moderate breathability',
      'Some pilling possible',
      'Less natural feel'
    ],
    bestFor: ['Corporate shirts', 'Healthcare uniforms', 'General workwear', 'All-purpose uniforms'],
    careInstructions: [
      'Machine wash warm',
      'Regular detergent',
      'Tumble dry medium',
      'Iron medium heat'
    ],
    price: '$$',
    sustainability: 'Medium - Mixed composition'
  },
  {
    id: 'performance',
    name: 'Performance Fabrics',
    description: 'Advanced synthetic blends with specialized properties',
    icon: FireIcon,
    properties: {
      comfort: 80,
      durability: 90,
      breathability: 85,
      easycare: 90,
      costeffective: 70
    },
    pros: [
      'Moisture-wicking',
      'Antimicrobial properties',
      'UV protection',
      'Temperature regulation',
      'Stain resistance'
    ],
    cons: [
      'Higher cost',
      'Synthetic feel',
      'Special care requirements'
    ],
    bestFor: ['Medical scrubs', 'Athletic wear', 'Outdoor uniforms', 'High-performance needs'],
    careInstructions: [
      'Follow care label',
      'Use specialized detergent',
      'Air dry preferred',
      'No fabric softener'
    ],
    price: '$$$',
    sustainability: 'Variable - Depends on composition'
  }
]

const specialtyFabrics = [
  {
    name: 'Antimicrobial Cotton',
    description: 'Cotton treated with antimicrobial agents',
    applications: ['Healthcare', 'Food service', 'Childcare'],
    benefits: ['Odor control', 'Bacteria resistance', 'Hygiene enhancement']
  },
  {
    name: 'Flame Retardant',
    description: 'Fabrics treated or inherently flame resistant',
    applications: ['Industrial', 'Oil & gas', 'Electrical work'],
    benefits: ['Safety compliance', 'Heat protection', 'Arc flash protection']
  },
  {
    name: 'High-Visibility',
    description: 'Bright colors with reflective strips',
    applications: ['Construction', 'Traffic control', 'Emergency services'],
    benefits: ['Worker safety', 'Visibility enhancement', 'Compliance standards']
  },
  {
    name: 'Moisture-Wicking',
    description: 'Fabrics that pull moisture away from skin',
    applications: ['Healthcare', 'Food service', 'Active work'],
    benefits: ['Comfort', 'Temperature regulation', 'Reduced bacteria growth']
  }
]

const fabricSelection = [
  {
    industry: 'Healthcare',
    requirements: ['Antimicrobial', 'Easy cleaning', 'Comfort', 'Professional appearance'],
    recommended: ['Cotton blends', 'Performance fabrics', 'Antimicrobial treatments'],
    avoid: ['Pure cotton (shrinkage)', 'Heavy fabrics', 'Difficult care fabrics']
  },
  {
    industry: 'Corporate',
    requirements: ['Professional look', 'Wrinkle resistance', 'Color retention', 'Comfort'],
    recommended: ['Cotton-polyester blends', 'Wool blends', 'Performance dress fabrics'],
    avoid: ['Casual fabrics', 'High-maintenance materials', 'Overly synthetic appearance']
  },
  {
    industry: 'Industrial',
    requirements: ['Durability', 'Safety features', 'Easy care', 'Cost-effective'],
    recommended: ['Heavy cotton', 'Polyester blends', 'Specialty safety fabrics'],
    avoid: ['Delicate fabrics', 'Light-weight materials', 'High-cost options']
  },
  {
    industry: 'Hospitality',
    requirements: ['Professional appearance', 'Stain resistance', 'Comfort', 'Easy care'],
    recommended: ['Cotton-polyester blends', 'Performance fabrics', 'Stain-resistant treatments'],
    avoid: ['Pure white (staining)', 'Difficult care fabrics', 'Uncomfortable materials']
  }
]

const sustainabilityGuide = [
  {
    level: 'Most Sustainable',
    fabrics: ['Organic Cotton', 'Hemp', 'Linen', 'Recycled Polyester'],
    benefits: ['Biodegradable', 'Low environmental impact', 'Renewable resources'],
    considerations: ['Higher cost', 'Limited availability', 'Special care needs']
  },
  {
    level: 'Moderately Sustainable',
    fabrics: ['Conventional Cotton', 'Cotton Blends', 'Tencel/Modal'],
    benefits: ['Natural fibers', 'Biodegradable components', 'Good performance'],
    considerations: ['Water usage', 'Chemical processing', 'Mixed recyclability']
  },
  {
    level: 'Less Sustainable',
    fabrics: ['Virgin Polyester', 'Nylon', 'Acrylic'],
    benefits: ['Durability', 'Performance features', 'Cost-effective'],
    considerations: ['Non-biodegradable', 'Petroleum-based', 'Microplastic shedding']
  }
]

export default function FabricGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Complete Fabric Guide
              <span className="text-purple-600 block">for Professional Uniforms</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Make informed decisions about uniform fabrics with our comprehensive guide. 
              Learn about properties, care instructions, and best applications for different 
              fabric types in Saudi Arabian climates.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#fabric-types"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Fabrics
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Types Section */}
      <section id="fabric-types" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Main Fabric Types
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding the characteristics of different fabric types helps you choose 
              the best option for your specific uniform needs.
            </p>
          </div>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {fabricTypes.map((fabric) => (
              <div key={fabric.id} className="bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Fabric Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <fabric.icon className="h-8 w-8 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{fabric.name}</h3>
                        <p className="text-gray-600">{fabric.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Price Range:</span>
                        <span className="text-purple-600 font-semibold">{fabric.price}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-700">Sustainability:</span>
                        <p className="text-sm text-gray-600 mt-1">{fabric.sustainability}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Properties Chart */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Properties</h4>
                    <div className="space-y-3">
                      {Object.entries(fabric.properties).map(([property, value]) => (
                        <div key={property} className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-700 w-24 capitalize">
                            {property.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${value}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-8">{value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pros & Cons */}
                  <div className="lg:col-span-1">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                          Advantages
                        </h4>
                        <ul className="space-y-1">
                          {fabric.pros.map((pro, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <MagnifyingGlassIcon className="h-5 w-5 text-orange-500 mr-2" />
                          Considerations
                        </h4>
                        <ul className="space-y-1">
                          {fabric.cons.map((con, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-orange-500 mr-2">•</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-gray-200 grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {fabric.bestFor.map((use, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Care Instructions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {fabric.careInstructions.map((instruction, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {instruction}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Fabrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialty Fabric Treatments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced fabric treatments that add specific properties for specialized applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {specialtyFabrics.map((specialty, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {specialty.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {specialty.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {specialty.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {specialty.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Industry Selection Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fabric Selection by Industry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right fabrics based on your industry's specific requirements and challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {fabricSelection.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {industry.industry}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {industry.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <StarIcon className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Recommended Fabrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.recommended.map((fabric, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Avoid:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.avoid.map((fabric, idx) => (
                        <span key={idx} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainability Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make environmentally conscious choices with our fabric sustainability rankings.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {sustainabilityGuide.map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${
                    index === 0 ? 'bg-green-500' : 
                    index === 1 ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {level.level}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Fabrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.fabrics.map((fabric, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded ${
                          index === 0 ? 'bg-green-100 text-green-800' :
                          index === 1 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Considerations:</h4>
                    <ul className="space-y-1">
                      {level.considerations.map((consideration, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <MagnifyingGlassIcon className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          {consideration}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Fabric?
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Our fabric experts can help you select the perfect materials for your specific 
            uniform requirements, climate, and budget considerations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              Consult Our Experts
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/shop"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Browse Our Fabrics
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/resources/policy-templates" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                  <SwatchIcon className="h-16 w-16 text-purple-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Policy Templates
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Download uniform policy templates that include fabric specifications.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/sustainable-healthcare-uniforms" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/categories/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg"
                    alt="Sustainable healthcare uniforms"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Sustainable Fabrics
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn about eco-friendly fabric options for healthcare uniforms.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/services/fabric-selection" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video relative">
                  <Image
                    src="/images/doctor-SBI-300813580.jpg"
                    alt="Fabric selection service"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Fabric Selection Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Professional fabric consultation and selection services.
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