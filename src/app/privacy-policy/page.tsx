import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Privacy Policy | UNEOM - Your Data Protection',
  titleAr: 'سياسة الخصوصية | يونيوم - حماية بياناتك',
  description: 'UNEOM Privacy Policy. Learn how we collect, use, and protect your personal information. GDPR compliant. Data security measures for Saudi Arabia customers.',
  descriptionAr: 'سياسة خصوصية يونيوم. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية. متوافقة مع GDPR. تدابير أمان البيانات لعملاء السعودية.',
  keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'customer data security'],
  keywordsAr: ['سياسة الخصوصية', 'حماية البيانات', 'التوافق مع GDPR', 'أمان بيانات العملاء'],
  locale: 'en',
  pageType: 'resources',
  path: '/privacy-policy',
  noindex: false,
  aiSummary: 'UNEOM Privacy Policy covers: Data collection (contact info, order history), Data usage (order processing, customer service), Data protection (SSL encryption, secure storage), Third-party sharing (only payment processors), Customer rights (access, deletion, portability). GDPR compliant. Contact privacy@uneom.com for requests.',
  aiSummaryAr: 'سياسة خصوصية يونيوم تغطي: جمع البيانات، استخدام البيانات، حماية البيانات، المشاركة مع أطراف ثالثة، حقوق العملاء. متوافقة مع GDPR.'
});

export const dynamic = 'force-static';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO2026
        title="Privacy Policy | UNEOM"
        titleAr="سياسة الخصوصية | يونيوم"
        description="UNEOM Privacy Policy."
        descriptionAr="سياسة خصوصية يونيوم."
        locale="en"
        pageType="resources"
        mainEntity="Privacy Policy"
        mainEntityAr="سياسة الخصوصية"
        breadcrumbs={[
          { name: 'Privacy Policy', nameAr: 'سياسة الخصوصية', url: '/privacy-policy' },
        ]}
      />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">Last updated: December 2024</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <article className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                UNEOM (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website uneom.com or make purchases from us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name, email address, phone number</li>
                <li>Company name and position</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Order history and preferences</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate about orders, products, and services</li>
                <li>Provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Data Protection</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>SSL encryption for all data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings in your browser.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Third-Party Sharing</h2>
              <p className="text-gray-600 mb-4">
                We only share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Payment processors for transaction processing</li>
                <li>Shipping partners for order delivery</li>
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                For privacy-related inquiries or to exercise your rights:
              </p>
              <ul className="list-none text-gray-600 mb-4">
                <li><strong>Email:</strong> privacy@uneom.com</li>
                <li><strong>Phone:</strong> +966 56 461 2017</li>
                <li><strong>Address:</strong> King Fahd Road, Al Olaya District, Riyadh, Saudi Arabia</li>
              </ul>
            </section>
          </article>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/privacy-policy" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
