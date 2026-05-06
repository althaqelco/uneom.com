import React from 'react';
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | UNEOM",
  description: "Sorry, the page you are looking for does not exist. Browse our uniform categories or get a free quote.",
  robots: {
    index: false,
    follow: true, // Allow following links even on 404
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <span className="text-[150px] md:text-[200px] font-black text-gray-100 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🔍</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          الصفحة غير موجودة
          <span className="block text-lg font-normal text-gray-500 mt-2">Page Not Found</span>
        </h1>

        <p className="text-gray-600 mb-10 max-w-md mx-auto text-lg">
          عذراً، لم نتمكن من إيجاد الصفحة المطلوبة. جرب أحد الخيارات أدناه:
        </p>

        {/* Recovery Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { name: 'الرئيسية', nameEn: 'Home', href: '/ar', icon: '🏠' },
            { name: 'عرض سعر', nameEn: 'Quote', href: '/ar/contact', icon: '📋' },
            { name: 'القطاعات', nameEn: 'Industries', href: '/ar/industries', icon: '🏢' },
            { name: 'المواقع', nameEn: 'Locations', href: '/ar/locations', icon: '📍' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200"
            >
              <span className="text-2xl block mb-2">{link.icon}</span>
              <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 block">{link.name}</span>
              <span className="text-[10px] text-gray-400">{link.nameEn}</span>
            </Link>
          ))}
        </div>

        {/* Top Cities Quick Links */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <p className="text-sm font-bold text-gray-800 mb-3">🇸🇦 ابحث حسب المدينة:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: 'الرياض', slug: 'riyadh' },
              { name: 'جدة', slug: 'jeddah' },
              { name: 'الدمام', slug: 'dammam' },
              { name: 'مكة', slug: 'mecca' },
              { name: 'المدينة', slug: 'medina' },
              { name: 'تبوك', slug: 'tabuk' },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/ar/locations/${city.slug}`}
                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors font-medium"
              >
                📍 {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* WhatsApp Recovery */}
        <div className="mt-8">
          <a
            href="https://wa.me/966564612017?text=مرحباً، لم أجد الصفحة المطلوبة"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            <span>💬</span>
            تواصل معنا عبر واتساب
          </a>
        </div>
      </div>
    </div>
  );
}