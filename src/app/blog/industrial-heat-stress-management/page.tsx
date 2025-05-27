'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

export default function IndustrialHeatStressManagementPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Industrial Heat Stress Management: Protective Workwear Solutions | Uneom Blog"
        description="Comprehensive guide to managing heat stress in industrial environments. Learn about protective workwear, cooling technologies, and safety protocols for Saudi Arabia's hot climate."
        canonicalUrl="https://uneom.com/blog/industrial-heat-stress-management/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/industrial-heat-stress.jpg"
            alt="Industrial Heat Stress Management"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Industrial Heat Stress Management', href: '/blog/industrial-heat-stress-management' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Industrial Heat Stress Management: Protecting Workers in Extreme Conditions
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-3xl">
              Essential strategies and advanced workwear solutions for managing heat stress in Saudi Arabia's challenging industrial environments.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <span>Safety Guide</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Industrial Safety</span>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <section className="mb-16">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                  In Saudi Arabia's extreme heat conditions, industrial workers face significant challenges that can impact both their health and productivity. 
                  Heat stress is a serious occupational hazard that requires comprehensive management strategies, including specialized protective workwear, 
                  proper hydration protocols, and environmental controls.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-red-900 mb-2">Critical Safety Alert</h3>
                  <p className="text-red-800">
                    Heat-related illnesses can be life-threatening. Temperatures in Saudi industrial facilities can exceed 50°C (122°F), 
                    making proper heat stress management essential for worker safety and regulatory compliance.
                  </p>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/blog/heat-stress-workplace.jpg"
                    alt="Industrial Workers in Hot Environment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Understanding Heat Stress */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Recognizing the signs and understanding the risks"
              >
                Understanding Heat Stress in Industrial Settings
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Heat Stress Symptoms</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Excessive sweating or stopped sweating</li>
                    <li>• Muscle cramps and fatigue</li>
                    <li>• Nausea and dizziness</li>
                    <li>• Rapid heartbeat</li>
                    <li>• High body temperature</li>
                    <li>• Confusion and irritability</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Risk Factors</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• High ambient temperatures (&gt;35°C)</li>
                    <li>• High humidity levels</li>
                    <li>• Physical exertion and heavy work</li>
                    <li>• Inadequate ventilation</li>
                    <li>• Inappropriate clothing</li>
                    <li>• Dehydration</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-900">Saudi Arabia Climate Challenges</h3>
                <p className="text-yellow-800 mb-4">
                  Saudi Arabia's desert climate presents unique challenges for industrial workers:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-700 mb-1">50°C+</div>
                    <div className="text-sm text-yellow-700">Summer Temperatures</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-700 mb-1">12+</div>
                    <div className="text-sm text-yellow-700">Hours of Daylight</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-700 mb-1">60%+</div>
                    <div className="text-sm text-yellow-700">Humidity in Coastal Areas</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Protective Workwear Solutions */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Advanced clothing technologies for heat protection"
              >
                Protective Workwear Solutions
              </SectionHeading>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Cooling Technologies</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Moisture-Wicking Fabrics</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Advanced synthetic materials that draw sweat away from the body and promote rapid evaporation.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Polyester blends</li>
                        <li>• Merino wool composites</li>
                        <li>• Bamboo fiber materials</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phase Change Materials</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Innovative materials that absorb and release heat to maintain optimal body temperature.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• PCM vest inserts</li>
                        <li>• Cooling bandanas</li>
                        <li>• Temperature-regulating linings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ventilation Systems</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Strategic ventilation features that promote airflow and heat dissipation.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Mesh ventilation panels</li>
                        <li>• Zippered vents</li>
                        <li>• Breathable back panels</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-blue-900">Fabric Selection Criteria</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• <strong>Breathability:</strong> High air permeability rating</li>
                      <li>• <strong>UV Protection:</strong> UPF 50+ rating minimum</li>
                      <li>• <strong>Moisture Management:</strong> Quick-dry properties</li>
                      <li>• <strong>Durability:</strong> Industrial wash resistance</li>
                      <li>• <strong>Comfort:</strong> Soft hand feel and flexibility</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-900">Design Features</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• <strong>Loose Fit:</strong> Allows air circulation</li>
                      <li>• <strong>Light Colors:</strong> Reflects heat and sunlight</li>
                      <li>• <strong>Minimal Seams:</strong> Reduces chafing and hot spots</li>
                      <li>• <strong>Extended Coverage:</strong> Protects from UV exposure</li>
                      <li>• <strong>Easy Care:</strong> Machine washable and quick-dry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Protective Equipment */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Essential PPE for heat stress prevention"
              >
                Heat-Resistant Personal Protective Equipment
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Cooling Vests</h4>
                  <p className="text-gray-700 text-sm">Phase change or evaporative cooling vests for core temperature control</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Hard Hats</h4>
                  <p className="text-gray-700 text-sm">Ventilated hard hats with sun shields and cooling inserts</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Eye Protection</h4>
                  <p className="text-gray-700 text-sm">UV-blocking safety glasses with anti-fog coatings</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Cooling Towels</h4>
                  <p className="text-gray-700 text-sm">Evaporative cooling towels for neck and head cooling</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">PPE Selection Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Essential Features</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Heat-resistant materials</li>
                      <li>• Lightweight construction</li>
                      <li>• Ventilation capabilities</li>
                      <li>• UV protection rating</li>
                      <li>• Easy maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Comfort Considerations</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Proper fit and sizing</li>
                      <li>• Moisture-wicking properties</li>
                      <li>• Minimal weight burden</li>
                      <li>• Ergonomic design</li>
                      <li>• Compatibility with other PPE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Environmental Controls */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Workplace modifications to reduce heat exposure"
              >
                Environmental Heat Control Strategies
              </SectionHeading>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Ventilation Systems</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Industrial exhaust fans</li>
                      <li>• Evaporative cooling systems</li>
                      <li>• Air conditioning in control rooms</li>
                      <li>• Natural ventilation optimization</li>
                      <li>• Heat recovery ventilation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Shading Solutions</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Temporary shade structures</li>
                      <li>• Permanent canopies</li>
                      <li>• Reflective roofing materials</li>
                      <li>• Strategic equipment placement</li>
                      <li>• Mobile shade units</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3">Cooling Stations</h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Air-conditioned rest areas</li>
                      <li>• Misting stations</li>
                      <li>• Cold water access points</li>
                      <li>• Ice vest storage</li>
                      <li>• Emergency cooling areas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">Work Schedule Modifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-800">Timing Adjustments</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• Early morning start times (5:00-6:00 AM)</li>
                        <li>• Extended midday breaks (11:00 AM - 3:00 PM)</li>
                        <li>• Evening work shifts when possible</li>
                        <li>• Reduced work hours during peak heat</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-800">Work-Rest Cycles</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• 15-minute breaks every hour in extreme heat</li>
                        <li>• Rotation of workers in hot areas</li>
                        <li>• Mandatory rest periods in cooling areas</li>
                        <li>• Gradual acclimatization for new workers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hydration and Nutrition */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Proper hydration and nutrition strategies for hot environments"
              >
                Hydration and Nutrition Management
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Hydration Guidelines</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <div className="font-semibold">Pre-Work Hydration</div>
                        <div className="text-gray-600 text-sm">500ml water 2 hours before work</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <div className="font-semibold">During Work</div>
                        <div className="text-gray-600 text-sm">200-300ml every 15-20 minutes</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <div className="font-semibold">Post-Work Recovery</div>
                        <div className="text-gray-600 text-sm">150% of fluid lost through sweat</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Optimal Beverages</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="font-medium">Water</span>
                      <span className="text-green-600 font-bold">Best</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="font-medium">Electrolyte Solutions</span>
                      <span className="text-blue-600 font-bold">Good</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="font-medium">Diluted Sports Drinks</span>
                      <span className="text-yellow-600 font-bold">Moderate</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <span className="font-medium">Caffeinated Beverages</span>
                      <span className="text-red-600 font-bold">Avoid</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-orange-900">Nutrition for Heat Stress Prevention</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-800">Foods to Include</h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Fresh fruits (watermelon, oranges)</li>
                      <li>• Vegetables with high water content</li>
                      <li>• Light, easily digestible meals</li>
                      <li>• Foods rich in potassium and sodium</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-800">Foods to Avoid</h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Heavy, fatty meals</li>
                      <li>• Excessive protein</li>
                      <li>• Alcohol</li>
                      <li>• High-sodium processed foods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-800">Timing</h4>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Light breakfast before work</li>
                      <li>• Small, frequent snacks</li>
                      <li>• Avoid large meals during heat</li>
                      <li>• Post-work recovery nutrition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Emergency Procedures */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Critical response procedures for heat-related emergencies"
              >
                Emergency Response Procedures
              </SectionHeading>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-red-900">Heat Emergency Recognition</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-800">Heat Exhaustion</h4>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Heavy sweating</li>
                      <li>• Weakness or fatigue</li>
                      <li>• Nausea, vomiting</li>
                      <li>• Headache</li>
                      <li>• Muscle cramps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-800">Heat Stroke</h4>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• High body temperature (&gt;40°C)</li>
                      <li>• Hot, dry skin</li>
                      <li>• Rapid pulse</li>
                      <li>• Confusion</li>
                      <li>• Loss of consciousness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-800">Immediate Actions</h4>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Move to cool area</li>
                      <li>• Remove excess clothing</li>
                      <li>• Apply cooling methods</li>
                      <li>• Call emergency services</li>
                      <li>• Monitor vital signs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">First Aid Procedures</h3>
                  <ol className="text-gray-700 space-y-2 text-sm">
                    <li>1. Move victim to cool, shaded area</li>
                    <li>2. Remove or loosen clothing</li>
                    <li>3. Apply cool water to skin</li>
                    <li>4. Fan the victim to increase evaporation</li>
                    <li>5. Apply ice packs to neck, armpits, groin</li>
                    <li>6. Monitor breathing and consciousness</li>
                    <li>7. Seek immediate medical attention</li>
                  </ol>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Prevention Checklist</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>☐ Proper hydration before work</li>
                    <li>☐ Appropriate cooling workwear</li>
                    <li>☐ Regular break schedules</li>
                    <li>☐ Environmental monitoring</li>
                    <li>☐ Worker acclimatization</li>
                    <li>☐ Emergency response plan</li>
                    <li>☐ First aid supplies available</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Regulatory Compliance */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Saudi Arabia workplace safety regulations and standards"
              >
                Regulatory Compliance and Standards
              </SectionHeading>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Saudi Arabia Occupational Safety Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Ministry of Human Resources Requirements</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Heat stress risk assessments</li>
                      <li>• Worker health monitoring</li>
                      <li>• Mandatory rest periods</li>
                      <li>• PPE provision and training</li>
                      <li>• Emergency response procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">International Standards Compliance</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• ISO 45001 (Occupational Health & Safety)</li>
                      <li>• ACGIH heat stress guidelines</li>
                      <li>• NIOSH heat stress criteria</li>
                      <li>• OSHA heat illness prevention</li>
                      <li>• EN ISO 11079 (Cold environments)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">Documentation Requirements</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-800">Risk Assessments</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Heat exposure evaluations</li>
                      <li>• Job-specific risk analysis</li>
                      <li>• Control measure effectiveness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-800">Training Records</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Heat stress awareness training</li>
                      <li>• Emergency response training</li>
                      <li>• PPE usage instruction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-800">Health Monitoring</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Pre-employment health checks</li>
                      <li>• Regular health surveillance</li>
                      <li>• Incident reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mb-16">
              <SectionHeading 
                subtitle="Additional resources for industrial safety and workwear"
              >
                Related Articles
              </SectionHeading>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/blog/industrial-protective-clothing-advances" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/blog/protective-clothing.jpg"
                      alt="Industrial Protective Clothing Advances"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      Industrial Protective Clothing Advances
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Latest innovations in protective workwear technology for enhanced safety and comfort.
                    </p>
                  </div>
                </Link>

                <Link href="/blog/safety-standards-saudi-manufacturing" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/blog/safety-standards.jpg"
                      alt="Safety Standards in Saudi Manufacturing"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      Safety Standards in Saudi Manufacturing
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Comprehensive guide to workplace safety regulations and compliance requirements.
                    </p>
                  </div>
                </Link>

                <Link href="/blog/workwear-innovations-saudi-factories" className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src="/images/blog/workwear-innovations.jpg"
                      alt="Workwear Innovations in Saudi Factories"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      Workwear Innovations in Saudi Factories
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Modern workwear solutions transforming industrial safety and productivity.
                    </p>
                  </div>
                </Link>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Protect Your Workers with Advanced Heat Stress Solutions</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Ensure worker safety and compliance with our comprehensive heat stress management solutions. 
                  From cooling workwear to environmental controls, we help you create a safer workplace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary" size="lg">
                    Consult Our Safety Experts
                  </Button>
                  <Button href="/shop/industrial-uniforms" variant="outline" size="lg">
                    View Cooling Workwear
                  </Button>
                </div>
              </div>
            </section>

          </div>
        </Container>
      </main>
    </div>
  );
}