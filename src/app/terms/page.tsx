'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SEO from '@/components/SEO';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function TermsOfServicePage() {
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <SEO
        title="Terms of Service | UNEOM Uniform Manufacturing"
        description="Read UNEOM's terms of service for uniform manufacturing and supply services in Saudi Arabia. Learn about our policies, warranties, and service conditions."
        canonicalUrl="https://uneom.com/terms/"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Terms and conditions governing the use of UNEOM's uniform manufacturing services.
            </p>
            <p className="text-lg text-white/80">
              Last updated: January 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <SectionHeading as="h2">Agreement to Terms</SectionHeading>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you and UNEOM ("Company," "we," "our," or "us") regarding your use of our uniform manufacturing and supply services, website, and related services (collectively, the "Services").
              </p>
              <p>
                By accessing or using our Services, placing orders, or entering into business relationships with UNEOM, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use our Services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <SectionHeading as="h2">Our Services</SectionHeading>
              <p>UNEOM provides comprehensive uniform manufacturing and supply services, including:</p>
              <ul>
                <li>Custom uniform design and manufacturing for various industries</li>
                <li>Standard uniform products and catalog items</li>
                <li>Fabric sourcing and material consultation</li>
                <li>Branding and customization services (embroidery, printing, etc.)</li>
                <li>Size consultation and fitting services</li>
                <li>Delivery and logistics coordination</li>
                <li>After-sales support and warranty services</li>
              </ul>
              <p>
                Our services are primarily focused on the Saudi Arabian market and Gulf Cooperation Council (GCC) region, with manufacturing facilities and offices located in Saudi Arabia.
              </p>
            </div>

            {/* Ordering and Quotations */}
            <div className="mb-12">
              <SectionHeading as="h2">Orders and Quotations</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">Quotation Process</h3>
              <ul>
                <li>All quotations are valid for 30 days unless otherwise specified</li>
                <li>Prices are subject to change based on material costs, specifications, and market conditions</li>
                <li>Quotations are estimates and final pricing may vary based on actual requirements</li>
                <li>Custom design fees may apply for unique uniform development</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Order Acceptance</h3>
              <ul>
                <li>Orders are subject to our acceptance and confirmation</li>
                <li>We reserve the right to refuse orders that do not meet our quality standards or capabilities</li>
                <li>Minimum order quantities apply to most products and services</li>
                <li>Order modifications may be subject to additional charges and timeline adjustments</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Production Timeline</h3>
              <ul>
                <li>Standard production times range from 2-8 weeks depending on product complexity</li>
                <li>Rush orders may be accommodated for additional fees</li>
                <li>Delivery dates are estimates and may be affected by material availability or unforeseen circumstances</li>
                <li>We will notify you promptly of any significant delays</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <SectionHeading as="h2">Payment Terms</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
              <p>We accept the following payment methods:</p>
              <ul>
                <li>Bank transfers (wire transfers) in Saudi Riyals (SAR)</li>
                <li>Letters of credit for large orders</li>
                <li>Approved corporate accounts with established credit terms</li>
                <li>Cash payments for small orders (at our discretion)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Payment Schedule</h3>
              <ul>
                <li><strong>Standard Orders:</strong> 50% deposit upon order confirmation, 50% before delivery</li>
                <li><strong>Large Orders:</strong> Payment schedule negotiated based on order size and timeline</li>
                <li><strong>Established Customers:</strong> Net 30 payment terms may be available with approved credit</li>
                <li><strong>Custom Design Projects:</strong> Design fees due upon project commencement</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Late Payments</h3>
              <p>
                Late payment charges of 1.5% per month may be applied to overdue amounts. We reserve the right to suspend services for accounts with outstanding balances exceeding 60 days.
              </p>
            </div>

            {/* Quality and Warranties */}
            <div className="mb-12">
              <SectionHeading as="h2">Quality Assurance and Warranties</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
              <p>All UNEOM products are manufactured to meet:</p>
              <ul>
                <li>ISO 9001:2015 quality management standards</li>
                <li>OEKO-TEX Standard 100 for textile safety</li>
                <li>Saudi Quality Mark requirements</li>
                <li>Industry-specific safety and performance standards</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Product Warranty</h3>
              <ul>
                <li><strong>Manufacturing Defects:</strong> 90-day warranty against defects in materials and workmanship</li>
                <li><strong>Color Fastness:</strong> Guarantee against excessive fading under normal use and care</li>
                <li><strong>Sizing Issues:</strong> Free size exchanges within 30 days of delivery (subject to conditions)</li>
                <li><strong>Custom Products:</strong> Limited warranty terms apply to custom-designed items</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Warranty Exclusions</h3>
              <p>Warranties do not cover:</p>
              <ul>
                <li>Normal wear and tear from regular use</li>
                <li>Damage from improper care or cleaning</li>
                <li>Alterations made by third parties</li>
                <li>Products used outside their intended purpose</li>
              </ul>
            </div>

            {/* Delivery and Risk */}
            <div className="mb-12">
              <SectionHeading as="h2">Delivery and Risk of Loss</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">Delivery Terms</h3>
              <ul>
                <li>Delivery is made to the address specified in your order</li>
                <li>Risk of loss transfers to you upon delivery</li>
                <li>Delivery dates are estimates and not guaranteed</li>
                <li>Additional charges may apply for expedited shipping or special delivery requirements</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Inspection and Acceptance</h3>
              <ul>
                <li>You must inspect products within 7 days of delivery</li>
                <li>Claims for shipping damage must be reported within 48 hours</li>
                <li>Quality issues must be reported within 14 days of delivery</li>
                <li>Failure to report issues within specified timeframes may void warranty claims</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <SectionHeading as="h2">Intellectual Property</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">Customer Designs and Logos</h3>
              <ul>
                <li>You retain ownership of your logos, designs, and brand elements</li>
                <li>You grant us license to use your intellectual property solely for fulfilling your orders</li>
                <li>You warrant that you have rights to all designs and logos provided to us</li>
                <li>You indemnify us against claims related to your intellectual property</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">UNEOM Intellectual Property</h3>
              <ul>
                <li>Our designs, patterns, and proprietary processes remain our property</li>
                <li>You may not reproduce or distribute our proprietary designs without permission</li>
                <li>Our website content, logos, and materials are protected by copyright and trademark laws</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <SectionHeading as="h2">Limitation of Liability</SectionHeading>
              <p>
                To the maximum extent permitted by law, UNEOM's total liability for any claims arising from or related to our services shall not exceed the total amount paid by you for the specific products or services giving rise to the claim.
              </p>
              <p>
                We shall not be liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, business interruption, or loss of data, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <SectionHeading as="h2">Force Majeure</SectionHeading>
              <p>
                We shall not be liable for any delay or failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to:
              </p>
              <ul>
                <li>Natural disasters, pandemics, or public health emergencies</li>
                <li>Government actions, regulations, or trade restrictions</li>
                <li>Labor disputes, strikes, or supply chain disruptions</li>
                <li>Material shortages or manufacturing equipment failures</li>
                <li>Transportation delays or logistics disruptions</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <SectionHeading as="h2">Governing Law and Dispute Resolution</SectionHeading>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising from or relating to these Terms or our services shall be resolved through:
              </p>
              <ol>
                <li><strong>Direct Negotiation:</strong> Good faith discussions between the parties</li>
                <li><strong>Mediation:</strong> Non-binding mediation through a mutually agreed mediator</li>
                <li><strong>Arbitration:</strong> Binding arbitration under Saudi Arabian Commercial Arbitration Law</li>
              </ol>
              <p>
                The seat of arbitration shall be Riyadh, Saudi Arabia, and proceedings shall be conducted in Arabic or English as mutually agreed.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <SectionHeading as="h2">Modifications to Terms</SectionHeading>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
              <p>
                For material changes that significantly affect your rights or obligations, we will provide reasonable notice through email or other appropriate means.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <SectionHeading as="h2">Contact Information</SectionHeading>
              <p>For questions about these Terms or our services, please contact us:</p>
              
              <div className="bg-neutral-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-4">UNEOM Legal Department</h3>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@uneom.com</p>
                  <p><strong>Phone:</strong> +971 55 816 4922</p>
                  <p><strong>Address:</strong> Al Olaya St, Al Olaya District, Riyadh 12213, Saudi Arabia</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Uniform Project?</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Contact our team to discuss your uniform requirements and receive a detailed quotation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 px-8 py-3 rounded-md font-medium text-lg transition-colors duration-200"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}