'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SEO from '@/components/SEO';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function PrivacyPolicyPage() {
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
        title="Privacy Policy | UNEOM Uniform Manufacturing"
        description="Learn how UNEOM protects your personal information and data privacy. Our comprehensive privacy policy outlines data collection, usage, and protection practices."
        canonicalUrl="https://uneom.com/privacy/"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 mb-4">
              UNEOM is committed to protecting your privacy and personal information.
            </p>
            <p className="text-lg text-white/80">
              Last updated: January 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <SectionHeading as="h2">Introduction</SectionHeading>
              <p>
                UNEOM ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, use our services, or interact with us in connection with our uniform manufacturing and supply services in Saudi Arabia.
              </p>
              <p>
                This policy applies to all personal data we process about you, whether you are a customer, potential customer, supplier, or website visitor. By using our services or providing us with your personal information, you consent to the practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <SectionHeading as="h2">Information We Collect</SectionHeading>
              
              <h3 className="text-xl font-semibold mb-4">Personal Information You Provide</h3>
              <p>We collect information you voluntarily provide to us, including:</p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title, and mailing address</li>
                <li><strong>Business Information:</strong> Industry type, company size, uniform requirements, and project specifications</li>
                <li><strong>Communication Records:</strong> Messages, inquiries, and correspondence you send to us</li>
                <li><strong>Quote and Order Information:</strong> Product specifications, quantities, delivery preferences, and payment information</li>
                <li><strong>Account Information:</strong> Login credentials and preferences if you create an account with us</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-8">Information Automatically Collected</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul>
                <li><strong>Technical Information:</strong> IP address, browser type, operating system, and device information</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click-through rates, and navigation patterns</li>
                <li><strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <SectionHeading as="h2">How We Use Your Information</SectionHeading>
              <p>We use your personal information for the following purposes:</p>
              
              <h3 className="text-xl font-semibold mb-4">Service Provision</h3>
              <ul>
                <li>Processing and fulfilling uniform orders and quotes</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Managing your account and maintaining customer relationships</li>
                <li>Coordinating deliveries and logistics</li>
                <li>Processing payments and managing billing</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Business Operations</h3>
              <ul>
                <li>Improving our products, services, and website functionality</li>
                <li>Conducting market research and analyzing customer needs</li>
                <li>Managing supplier relationships and quality control</li>
                <li>Maintaining business records and compliance</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Marketing and Communications</h3>
              <ul>
                <li>Sending promotional materials about our products and services (with your consent)</li>
                <li>Providing industry insights and uniform-related information</li>
                <li>Inviting you to events, webinars, or trade shows</li>
                <li>Conducting customer satisfaction surveys</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <SectionHeading as="h2">How We Share Your Information</SectionHeading>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold mb-4">Service Providers</h3>
              <p>We work with trusted third-party service providers who assist us in:</p>
              <ul>
                <li>Payment processing and financial services</li>
                <li>Shipping and logistics coordination</li>
                <li>Website hosting and technical support</li>
                <li>Marketing and communication services</li>
                <li>Quality assurance and testing services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Legal Requirements</h3>
              <p>We may disclose your information when required by law or to:</p>
              <ul>
                <li>Comply with legal obligations and government requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or security threats</li>
                <li>Enforce our terms of service</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 mt-6">Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to confidentiality agreements.</p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <SectionHeading as="h2">Data Security</SectionHeading>
              <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
              <ul>
                <li><strong>Encryption:</strong> Sensitive data is encrypted in transit and at rest</li>
                <li><strong>Access Controls:</strong> Limited access to personal data on a need-to-know basis</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Employee Training:</strong> Staff education on data protection and privacy practices</li>
                <li><strong>Secure Facilities:</strong> Physical security measures at our offices and data centers</li>
              </ul>
              <p>While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.</p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <SectionHeading as="h2">Your Privacy Rights</SectionHeading>
              <p>Depending on your location and applicable laws, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests or for marketing purposes</li>
                <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below. We will respond to your request within the timeframe required by applicable law.</p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <SectionHeading as="h2">Cookies and Tracking Technologies</SectionHeading>
              <p>Our website uses cookies and similar technologies to enhance your browsing experience:</p>
              
              <h3 className="text-xl font-semibold mb-4">Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Necessary for website functionality and security</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
              </ul>
              
              <p>You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.</p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <SectionHeading as="h2">International Data Transfers</SectionHeading>
              <p>
                UNEOM primarily operates within Saudi Arabia and the Gulf region. However, some of our service providers may be located in other countries. When we transfer personal data internationally, we ensure appropriate safeguards are in place, including:
              </p>
              <ul>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Standard contractual clauses</li>
                <li>Binding corporate rules</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <SectionHeading as="h2">Data Retention</SectionHeading>
              <p>We retain your personal information for as long as necessary to:</p>
              <ul>
                <li>Provide our services and maintain customer relationships</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records for operational purposes</li>
              </ul>
              <p>
                Retention periods vary depending on the type of information and purpose of processing. We regularly review and delete information that is no longer needed.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <SectionHeading as="h2">Children's Privacy</SectionHeading>
              <p>
                Our services are not directed to children under 16 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information promptly.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <SectionHeading as="h2">Changes to This Privacy Policy</SectionHeading>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Providing notice through our services</li>
              </ul>
              <p>Your continued use of our services after changes become effective constitutes acceptance of the updated policy.</p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <SectionHeading as="h2">Contact Us</SectionHeading>
              <p>If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:</p>
              
              <div className="bg-neutral-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-4">UNEOM Privacy Office</h3>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@uneom.com</p>
                  <p><strong>Phone:</strong> +971 55 816 4922</p>
                  <p><strong>Address:</strong> Al Olaya St, Al Olaya District, Riyadh 12213, Saudi Arabia</p>
                </div>
                <p className="mt-4 text-sm text-neutral-600">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Privacy Practices?</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Our team is here to help you understand how we protect your information and respect your privacy rights.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
            >
              Contact Our Privacy Team
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}