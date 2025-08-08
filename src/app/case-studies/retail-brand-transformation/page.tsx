'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

export default function RetailBrandTransformationPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Retail Brand Transformation Case Study | 45% Sales Increase | Uneom Success Story"
        description="Comprehensive case study of successful retail brand transformation in Saudi Arabia through uniform development and visual identity. 45% sales increase in 8 months."
        canonicalUrl="https://uneom.com/case-studies/retail-brand-transformation/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/case-studies/retail-brand-transformation.jpg"
            alt="Retail Brand Transformation Case Study"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Retail Brand Transformation', href: '/case-studies/retail-brand-transformation' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Retail Brand Transformation: From Traditional to Modern Excellence
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-3xl">
              How a leading Saudi retail chain achieved a 45% sales increase and complete brand transformation through strategic uniform redesign and comprehensive visual identity development.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <span>8-Month Project</span>
              <span>•</span>
              <span>45% Sales Increase</span>
              <span>•</span>
              <span>150+ Stores</span>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            
            {/* Project Overview */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Transforming a traditional retail chain into a modern, customer-focused brand"
              >
                Project Overview
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Outdated brand image affecting customer perception</li>
                    <li>• Inconsistent staff appearance across 150+ stores</li>
                    <li>• Declining sales and market share</li>
                    <li>• Poor employee morale and brand pride</li>
                    <li>• Lack of visual brand cohesion</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Complete uniform redesign and standardization</li>
                    <li>• Modern visual identity development</li>
                    <li>• Staff training and brand guidelines</li>
                    <li>• Phased rollout across all locations</li>
                    <li>• Ongoing support and maintenance</li>
                  </ul>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/case-studies/retail-transformation-before-after.jpg"
                  alt="Before and After Retail Transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            {/* Key Metrics */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Measurable impact across all business metrics"
              >
                Transformation Results
              </SectionHeading>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                  <div className="text-gray-700">Sales Increase</div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">78%</div>
                  <div className="text-gray-700">Customer Satisfaction</div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
                  <div className="text-gray-700">Employee Satisfaction</div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
                  <div className="text-gray-700">Stores Transformed</div>
                </div>
              </div>
            </section>

            {/* Implementation Process */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Strategic approach to comprehensive brand transformation"
              >
                Implementation Process
              </SectionHeading>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Brand Analysis & Research</h3>
                    <p className="text-gray-700 mb-4">
                      Comprehensive analysis of existing brand perception, customer feedback, and market positioning to identify transformation opportunities.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Customer perception surveys</li>
                      <li>• Competitor analysis</li>
                      <li>• Employee feedback sessions</li>
                      <li>• Brand audit and assessment</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Design Development</h3>
                    <p className="text-gray-700 mb-4">
                      Creation of modern, professional uniform designs that reflect the brand's new direction while ensuring comfort and functionality.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Multiple design concepts</li>
                      <li>• Fabric selection and testing</li>
                      <li>• Color palette development</li>
                      <li>• Prototype creation and refinement</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pilot Testing</h3>
                    <p className="text-gray-700 mb-4">
                      Implementation in select stores to test design effectiveness, gather feedback, and refine the approach before full rollout.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 10 pilot stores selected</li>
                      <li>• Staff feedback collection</li>
                      <li>• Customer response monitoring</li>
                      <li>• Design adjustments and improvements</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Rollout</h3>
                    <p className="text-gray-700 mb-4">
                      Systematic implementation across all 150+ stores with comprehensive training and support to ensure consistent brand presentation.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Phased rollout schedule</li>
                      <li>• Staff training programs</li>
                      <li>• Quality control measures</li>
                      <li>• Ongoing support and maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Features */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Modern aesthetics meeting functional requirements"
              >
                Design Innovation
              </SectionHeading>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Modern Aesthetics</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Contemporary design elements that appeal to modern consumers while maintaining professional appearance.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Clean, minimalist lines</li>
                    <li>• Updated color palette</li>
                    <li>• Modern fit and silhouette</li>
                    <li>• Premium fabric selection</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Functional Excellence</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Practical features designed for the demands of retail environment while ensuring all-day comfort.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Moisture-wicking fabrics</li>
                    <li>• Easy-care materials</li>
                    <li>• Flexible movement design</li>
                    <li>• Durable construction</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Brand Integration</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Seamless incorporation of brand elements that reinforce company identity and values.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Subtle logo placement</li>
                    <li>• Brand color integration</li>
                    <li>• Consistent styling</li>
                    <li>• Professional presentation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Customer Impact */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Transforming customer experience and perception"
              >
                Customer Impact
              </SectionHeading>
              
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Before Transformation</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Inconsistent staff appearance</li>
                      <li>• Outdated brand perception</li>
                      <li>• Low customer confidence</li>
                      <li>• Declining foot traffic</li>
                      <li>• Poor brand recognition</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">After Transformation</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Professional, cohesive appearance</li>
                      <li>• Modern, trustworthy brand image</li>
                      <li>• Increased customer confidence</li>
                      <li>• Higher store visit frequency</li>
                      <li>• Strong brand recognition</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Customer Testimonial</h3>
                <p className="text-blue-800 italic">
                  "The transformation is remarkable. The staff looks professional and approachable, and the overall shopping experience feels more premium. I'm more confident shopping here now."
                </p>
                <p className="text-blue-700 text-sm mt-2">- Regular Customer Survey Response</p>
              </div>
            </section>

            {/* Employee Impact */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Boosting morale and professional pride"
              >
                Employee Transformation
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Morale Improvement</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 92% employee satisfaction increase</li>
                    <li>• Enhanced professional pride</li>
                    <li>• Improved team cohesion</li>
                    <li>• Better customer interactions</li>
                    <li>• Reduced turnover rates</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Enhanced professional image</li>
                    <li>• Increased confidence levels</li>
                    <li>• Better brand representation</li>
                    <li>• Improved customer service</li>
                    <li>• Career advancement opportunities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Employee Feedback</h3>
                <p className="text-green-800 italic">
                  "I feel more professional and confident in my new uniform. Customers treat me with more respect, and I'm proud to represent our brand."
                </p>
                <p className="text-green-700 text-sm mt-2">- Store Associate, Riyadh Location</p>
              </div>
            </section>

            {/* Business Results */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Measurable results across key performance indicators"
              >
                Business Impact
              </SectionHeading>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Financial Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Sales Revenue</span>
                      <span className="font-semibold text-green-600">+45%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Customer Retention</span>
                      <span className="font-semibold text-green-600">+32%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Average Transaction</span>
                      <span className="font-semibold text-green-600">+28%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Market Share</span>
                      <span className="font-semibold text-green-600">+15%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Operational Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Employee Turnover</span>
                      <span className="font-semibold text-green-600">-40%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Customer Complaints</span>
                      <span className="font-semibold text-green-600">-55%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Brand Recognition</span>
                      <span className="font-semibold text-green-600">+67%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-gray-700">Store Visits</span>
                      <span className="font-semibold text-green-600">+38%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mb-16">
              <SectionHeading
                subtitle="Critical elements that drove transformation success"
              >
                Key Success Factors
              </SectionHeading>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Strategic Planning</h3>
                  <p className="text-gray-700 text-sm">
                    Comprehensive planning and phased implementation ensured smooth transition with minimal disruption to operations.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Employee Engagement</h3>
                  <p className="text-gray-700 text-sm">
                    Active involvement of staff in the design process and comprehensive training programs drove adoption and enthusiasm.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Quality Focus</h3>
                  <p className="text-gray-700 text-sm">
                    Emphasis on high-quality materials and construction ensured durability and maintained professional appearance over time.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-primary-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Transform Your Retail Brand with Uneom</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Ready to achieve similar results for your retail business? Our expert team specializes in comprehensive brand transformations that drive measurable business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary" size="lg">
                    Start Your Transformation
                  </Button>
                  <Button href="/case-studies" variant="outline" size="lg">
                    View More Case Studies
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