import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Terms of Service | UNEOM - Terms & Conditions',
  titleAr: 'شروط الخدمة | يونيوم - الشروط والأحكام',
  description: 'UNEOM Terms of Service. Read our terms and conditions for ordering uniforms, payments, shipping, returns, and warranty. Saudi Arabia business terms.',
  descriptionAr: 'شروط خدمة يونيوم. اقرأ شروطنا وأحكامنا لطلب الأزياء الموحدة، المدفوعات، الشحن، الإرجاع، والضمان. شروط الأعمال السعودية.',
  keywords: ['terms of service', 'terms and conditions', 'uniform ordering terms', 'return policy'],
  keywordsAr: ['شروط الخدمة', 'الشروط والأحكام', 'شروط طلب الأزياء', 'سياسة الإرجاع'],
  locale: 'en',
  pageType: 'resources',
  path: '/terms-of-service',
  noindex: false,
  aiSummary: 'UNEOM Terms of Service covers: Ordering process, Payment terms (50% deposit, balance before shipping), Shipping (10-15 business days standard), Returns (14 days for stock items, custom orders non-refundable), Warranty (90 days manufacturing defects), Cancellation policy. Governing law: Saudi Arabia.',
  aiSummaryAr: 'شروط خدمة يونيوم تغطي: عملية الطلب، شروط الدفع، الشحن، الإرجاع، الضمان، سياسة الإلغاء. القانون الحاكم: المملكة العربية السعودية.'
});

export const dynamic = 'force-static';

export default function TermsOfServicePage() {
  return (
    <>
      <SEO2026
        title="Terms of Service | UNEOM"
        titleAr="شروط الخدمة | يونيوم"
        description="UNEOM Terms of Service."
        descriptionAr="شروط خدمة يونيوم."
        locale="en"
        pageType="resources"
        mainEntity="Terms of Service"
        mainEntityAr="شروط الخدمة"
        breadcrumbs={[
          { name: 'Terms of Service', nameAr: 'شروط الخدمة', url: '/terms-of-service' },
        ]}
      />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">Last updated: December 2024</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <article className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using UNEOM&apos;s website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Ordering Process</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>All orders are subject to acceptance and availability</li>
                <li>Prices are quoted in Saudi Riyals (SAR) unless otherwise specified</li>
                <li>Minimum order quantities may apply for certain products</li>
                <li>Custom orders require written approval of design before production</li>
                <li>Order confirmation will be sent via email within 24 business hours</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Stock Orders:</strong> Full payment required before shipping</li>
                <li><strong>Custom Orders:</strong> 50% deposit required to begin production, balance due before shipping</li>
                <li><strong>Corporate Accounts:</strong> NET 30 terms available upon approval</li>
                <li>We accept bank transfers, credit cards, and approved purchase orders</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Shipping & Delivery</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Standard Delivery:</strong> 10-15 business days from order confirmation</li>
                <li><strong>Rush Delivery:</strong> 5-7 business days (additional fees apply)</li>
                <li>Shipping costs calculated at checkout based on destination and weight</li>
                <li>Free shipping on orders over SAR 5,000 within Saudi Arabia</li>
                <li>International shipping available to GCC countries</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Returns & Exchanges</h2>
              <h3 className="text-xl font-semibold mb-3">Stock Items</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Returns accepted within 14 days of delivery</li>
                <li>Items must be unworn, unwashed, with original tags</li>
                <li>Return shipping costs are customer&apos;s responsibility</li>
                <li>Refunds processed within 7-10 business days</li>
              </ul>
              <h3 className="text-xl font-semibold mb-3">Custom Orders</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Custom orders are non-refundable once production begins</li>
                <li>Defects in custom orders will be replaced at no charge</li>
                <li>Size exchanges available within 14 days</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Warranty</h2>
              <p className="text-gray-600 mb-4">
                UNEOM provides a 90-day warranty against manufacturing defects:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Stitching defects</li>
                <li>Fabric flaws present at time of purchase</li>
                <li>Color fading within normal wash guidelines</li>
                <li>Hardware failures (buttons, zippers)</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Warranty does not cover normal wear and tear, misuse, or improper care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Cancellation Policy</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Stock Orders:</strong> Can be cancelled within 24 hours of placement for full refund</li>
                <li><strong>Custom Orders:</strong> Can be cancelled before production begins with refund minus design fees</li>
                <li>Once production begins, custom orders cannot be cancelled</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All designs, logos, and content on uneom.com are property of UNEOM. Customer logos and branding submitted for customization remain customer property.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes will be resolved in the courts of Riyadh, Saudi Arabia.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms of Service:
              </p>
              <ul className="list-none text-gray-600 mb-4">
                <li><strong>Email:</strong> legal@uneom.com</li>
                <li><strong>Phone:</strong> +971 55 816 4922</li>
              </ul>
            </section>
          </article>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/terms-of-service" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
