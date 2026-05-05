import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'UNEOM Mobile App | B2B Uniform Management Platform Saudi Arabia',
  titleAr: 'تطبيق يونيوم للموبايل | منصة إدارة الأزياء للشركات في السعودية',
  description: 'Download the UNEOM B2B mobile app for seamless uniform procurement in Saudi Arabia. Manage sizing, track orders, and approve employee requests directly from your phone.',
  descriptionAr: 'حمل تطبيق يونيوم لإدارة وشراء الأزياء الموحدة للشركات في السعودية. تتبع الطلبات وإدارة المقاسات بسهولة.',
  keywords: ['uneom mobile app', 'uniform management software saudi', 'B2B uniform app ksa', 'corporate uniform procurement platform'],
  keywordsAr: ['تطبيق يونيوم', 'إدارة الأزياء الموحدة', 'تطبيق ملابس الشركات'],
  locale: 'en', pageType: 'article', path: '/mobile',
  image: '/images/hero/hero-1.jpg', imageAlt: 'UNEOM Mobile App',
  aiSummary: 'The UNEOM mobile app provides enterprise clients in Saudi Arabia with a dedicated B2B platform to manage their uniform programs, including automated sizing algorithms, employee allowance tracking, and real-time inventory visibility.',
});

export const dynamic = 'force-static';

const features = [
  { title: 'Employee Allowances', desc: 'Set and track annual uniform allowances for each employee or department automatically.', icon: '💳' },
  { title: 'Smart Sizing Algorithm', desc: 'Employees input their height and weight; our app calculates their perfect uniform size instantly.', icon: '📏' },
  { title: 'Manager Approvals', desc: 'Approve or reject employee uniform requests with a single tap before the order is processed.', icon: '✅' },
  { title: 'Real-Time Tracking', desc: 'Track the production and delivery status of your uniform orders in real-time across Saudi Arabia.', icon: '🚚' },
];

export default function MobileAppPage() {
  return (
    <>
      <SEO2026 title="UNEOM Mobile App" titleAr="تطبيق يونيوم للموبايل" description="B2B uniform management platform." locale="en" pageType="article" mainEntity="UNEOM Mobile App" primaryImage="/images/hero/hero-1.jpg" primaryImageAlt="UNEOM App" breadcrumbs={[{ name: 'Mobile App', url: '/mobile' }]} certifications={['ISO 27001']} clientCount={500} yearsInBusiness={20} industry="Technology" />
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Mobile App', href: '/mobile' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-cyan-400">📱</span><span className="text-sm font-medium">B2B Platform</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Uniform Management <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">in Your Pocket</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed">The UNEOM Mobile App streamlines corporate uniform procurement for HR managers and procurement teams across Saudi Arabia.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Control Over Your Uniform Program</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">Say goodbye to messy spreadsheets and sizing errors. The UNEOM platform digitizes your entire uniform operation. Employees order exactly what they need within their pre-set allowance, the system ensures perfect sizing, and managers approve requests with one tap.</p>
              <div className="flex gap-4">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <span>Download on iOS</span>
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <span>Get it on Android</span>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100"><div className="text-3xl mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 text-sm">{f.desc}</p></div>))}
            </div>
          </div>
          <section className="text-center bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Request a Platform Demo</h2>
            <p className="text-lg mb-8 text-gray-600">See how our B2B uniform management software can save your HR team hundreds of hours per year.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl transition-all shadow-lg">Schedule Demo →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
