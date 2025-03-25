import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg md:text-xl">
              The following terms and conditions govern your use of UNEOM's products and services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <p className="text-gray-600 mb-6">
                  Last Updated: June 15, 2023
                </p>
                <p>
                  Welcome to UNEOM ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your access to and use of UNEOM's website, products, and services. Please read these Terms carefully before using our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Description</h2>
                <p>
                  UNEOM is a B2B uniform supplier providing professional uniforms and scrubs to businesses across Saudi Arabia. Our services include:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Custom uniform design and manufacturing</li>
                  <li>Bulk uniform orders for businesses</li>
                  <li>Uniform program management</li>
                  <li>Corporate uniform consultancy</li>
                  <li>Delivery and distribution services within Saudi Arabia</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Account Registration</h2>
                <p>
                  To access certain features of our services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p className="mt-3">
                  You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Order and Payment Terms</h2>
                <p>
                  All orders are subject to acceptance by UNEOM. We reserve the right to refuse any order for any reason.
                </p>
                <p className="mt-3">
                  Prices for our products and services are subject to change without notice. We reserve the right to modify or discontinue any product or service without notice at any time.
                </p>
                <p className="mt-3">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>For standard orders: 50% advance payment upon order confirmation, remaining 50% before shipment</li>
                  <li>For custom designs: Design fee may apply and is non-refundable</li>
                  <li>For bulk orders: Payment terms may be negotiated on a case-by-case basis</li>
                  <li>For recurring orders: Payment terms will be specified in a separate agreement</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Delivery and Shipping</h2>
                <p>
                  UNEOM will make every effort to deliver products according to the estimated delivery times, but we cannot guarantee specific delivery dates. Shipping and delivery timeframes are estimates only.
                </p>
                <p className="mt-3">
                  Risk of loss and title for products purchased from UNEOM pass to you upon delivery of the products to the shipping carrier.
                </p>
                <p className="mt-3">
                  For deliveries within Saudi Arabia, we use reputable shipping partners. International shipping may be available upon request and subject to additional fees and customs requirements.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Returns and Refunds</h2>
                <p>
                  Due to the custom nature of many of our products, returns are limited and subject to the following conditions:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Stock items: May be returned within 14 days of receipt if unused, in original packaging, and with tags attached</li>
                  <li>Custom items: Cannot be returned unless there is a manufacturing defect</li>
                  <li>Defective products: Must be reported within 7 days of receipt with photographic evidence</li>
                </ul>
                <p className="mt-3">
                  All returns must be authorized by UNEOM before shipping. Unauthorized returns will not be accepted.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, images, and software, is the property of UNEOM or its content suppliers and is protected by Saudi Arabian and international copyright laws.
                </p>
                <p className="mt-3">
                  For custom designs: Unless otherwise agreed in writing, UNEOM retains ownership of all designs, patterns, and artwork created for clients. Clients are granted a non-exclusive license to use the designs on the products purchased from UNEOM.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
                <p>
                  UNEOM shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the services; (ii) any conduct or content of any third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access, use, or alteration of your transmissions or content.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions.
                </p>
                <p className="mt-3">
                  Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Saudi Arabia.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-3">
                  <p>UNEOM Saudi Arabia</p>
                  <p>Email: legal@uneom.com</p>
                  <p>Phone: +966 13 XXX XXXX</p>
                  <p>Address: Business Gate, Riyadh, Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Have Questions About Our Terms?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our customer service team is ready to assist you with any inquiries regarding our terms of service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Contact Us
              </Link>
              <Link 
                href="/privacy-policy" 
                className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition duration-300"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 