import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Medical Accessories | Shop - يونيوم للزي الموحد',
  description: 'اكتشف أفضل Medical Accessories من يونيوم. نقدم حلول الزي الموحد عالية الجودة في السعودية مع توصيل سريع.',
};

export default function GeneratedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] opacity-10"></div>
        <Container>
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-400">★</span>
              <span className="text-sm font-medium uppercase tracking-wider">Shop</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Medical Accessories
            </h1>
            
            <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              اكتشف أفضل Medical Accessories من يونيوم. نقدم حلول الزي الموحد عالية الجودة في السعودية مع توصيل سريع.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="primary" 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold border-0 shadow-lg shadow-orange-500/30"
              >
                احصل على عرض سعر مجاني →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <main className="py-16 bg-gray-50">
        <Container>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">حلول متقدمة لقطاع Shop</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              نقوم حالياً بتحديث هذا القسم بأحدث الكتالوجات والمنتجات. يرجى التواصل مع فريق المبيعات للحصول على التفاصيل الكاملة والأسعار المخصصة.
            </p>
            
            <div className="flex justify-center gap-4">
               <Link 
                  href="/ar/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  تواصل معنا
                </Link>
                <Link 
                  href="/ar"
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  العودة للرئيسية
                </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
