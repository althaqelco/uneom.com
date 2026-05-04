/**
 * SalaryAwareHero — Behavioral Engineering CTA (§38.2)
 * 
 * Changes the hero CTA messaging based on Saudi salary cycle:
 * - Days 27-5 (after salary): Premium offers, VIP packages
 * - Days 6-19 (mid-month): Standard messaging, value proposition
 * - Days 20-26 (pre-salary): Installment plans, economic packages
 * 
 * This exploits the Saudi market's salary-driven purchasing behavior.
 */
'use client';

import React from 'react';

interface SalaryAwareHeroProps {
  industry?: string;
  cityAr?: string;
}

function getSalaryPhase(): 'post-salary' | 'mid-month' | 'pre-salary' {
  const day = new Date().getDate();
  if (day >= 27 || day <= 5) return 'post-salary';
  if (day >= 20) return 'pre-salary';
  return 'mid-month';
}

const PHASE_CONFIG = {
  'post-salary': {
    badge: '🌟 عرض VIP',
    badgeEn: 'VIP Offer',
    heading: 'عروض حصرية للمؤسسات — خصم يصل إلى 25%',
    headingEn: 'Exclusive Enterprise Deals — Up to 25% Off',
    subtext: 'احصل على أفضل الأسعار للطلبات المؤسسية الكبيرة',
    subtextEn: 'Best prices for large institutional orders',
    ctaText: '🎯 احصل على عرض VIP الآن',
    ctaTextEn: 'Get VIP Quote Now',
    ctaColor: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700',
  },
  'mid-month': {
    badge: '✅ الأكثر مبيعاً',
    badgeEn: 'Best Seller',
    heading: 'الحل الأمثل للزي الموحد في المملكة',
    headingEn: 'The Ultimate Uniform Solution in Saudi Arabia',
    subtext: 'جودة عالمية، تصنيع محلي، توصيل سريع',
    subtextEn: 'World-class quality, local manufacturing, fast delivery',
    ctaText: '📩 اطلب عرض سعر مجاني',
    ctaTextEn: 'Get Free Quote',
    ctaColor: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
  },
  'pre-salary': {
    badge: '💰 خيارات مرنة',
    badgeEn: 'Flexible Options',
    heading: 'باقات اقتصادية مع خيارات التقسيط',
    headingEn: 'Economy Packages with Installment Options',
    subtext: 'ادفع على دفعات مريحة — بدون فوائد',
    subtextEn: 'Pay in comfortable installments — interest-free',
    ctaText: '💳 تعرف على خطط الدفع',
    ctaTextEn: 'Explore Payment Plans',
    ctaColor: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700',
  },
};

export function SalaryAwareHero({ industry, cityAr }: SalaryAwareHeroProps) {
  const phase = getSalaryPhase();
  const config = PHASE_CONFIG[phase];

  return (
    <div className="relative">
      {/* Phase Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
        <span className="text-sm font-bold">{config.badge}</span>
      </div>

      {/* Dynamic Heading */}
      <p className="text-lg md:text-xl text-blue-100 mb-4 font-medium" dir="rtl">
        {config.heading}
      </p>
      <p className="text-sm text-blue-200/80 mb-6" dir="rtl">
        {config.subtext}
      </p>

      {/* Dynamic CTA */}
      <a
        href={`/quote${industry ? `?industry=${industry}` : ''}`}
        className={`inline-flex items-center px-8 py-4 ${config.ctaColor} text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg`}
      >
        {config.ctaText}
      </a>
    </div>
  );
}
