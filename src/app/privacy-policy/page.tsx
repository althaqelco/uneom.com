import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Privacy Policy | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'privacy policy'],
  openGraph: {
    title: 'Privacy Policy | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/privacy-policy/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


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

      <section className="bg-gradient-to-b from-neutral-100 to-white py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-neutral-700 mb-8">
              How UNEOM collects, uses, and protects your information
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="lead">
              At UNEOM, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, use our services, or conduct business with us.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Business Information:</strong> Company name, industry, size, and contact details.</li>
              <li><strong>Personal Information:</strong> Names, job titles, business email addresses, and phone numbers of company representatives.</li>
              <li><strong>Account Information:</strong> Login credentials and preferences for registered users.</li>
              <li><strong>Order Information:</strong> Products ordered, quantities, pricing, delivery requirements, and payment details.</li>
              <li><strong>Communication Data:</strong> Correspondence via email, phone, or through our website.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies when you visit our website.</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Processing and fulfilling orders</li>
              <li>Managing your account and providing customer support</li>
              <li>Communicating about products, services, and promotions</li>
              <li>Improving our website, products, and services</li>
              <li>Conducting market research and analysis</li>
              <li>Complying with legal obligations</li>
              <li>Preventing fraud and protecting our rights</li>
            </ul>
            
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Secure servers and encryption for sensitive data</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on data protection</li>
              <li>Access controls and authentication requirements</li>
            </ul>
            
            <h2>Data Sharing</h2>
            <p>
              We may share your information with the following third parties:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Payment processors, shipping companies, and IT service providers who help us deliver our services.</li>
              <li><strong>Business Partners:</strong> Manufacturers, suppliers, and other partners involved in fulfilling your orders.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
            </ul>
            <p>
              We do not sell your personal information to third parties for marketing purposes.
            </p>
            
            <h2>Cookies and Similar Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance user experience and collect information about how the site is used. You can control cookie settings through your browser preferences.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your data:
            </p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>
            
            <h2>Retention Period</h2>
            <p>
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through our website or via email.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of the Kingdom of Saudi Arabia.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              Email: privacy@uneom.com<br />
              Phone: +966 11 234 5678<br />
              Address: UNEOM Saudi Arabia, P.O. Box 12345, Riyadh, Saudi Arabia
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors">
              Contact Our Team
            </Link>
            <Link href="/terms-of-service" className="inline-block ml-4 text-primary underline hover:text-primary-dark transition-colors">
              View Terms of Service
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
} 