/**
 * ReturnVisitorGreeting — Personalized Returning User CTA (§38.2.6)
 * 
 * Detects returning visitors via cookie and shows a personalized greeting
 * instead of the default hero. This creates a "Navboost memory" signal.
 * 
 * Returning visitors convert at 3x higher rates when greeted personally.
 */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ReturnVisitorGreetingProps {
  industry?: string;
  industryAr?: string;
}

export function ReturnVisitorGreeting({ industry, industryAr }: ReturnVisitorGreetingProps) {
  const [isReturning, setIsReturning] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    try {
      const visits = parseInt(localStorage.getItem('uneom_visits') || '0', 10);
      const newCount = visits + 1;
      localStorage.setItem('uneom_visits', String(newCount));
      setVisitCount(newCount);
      if (newCount > 1) setIsReturning(true);
    } catch {
      // localStorage not available
    }
  }, []);

  if (!isReturning) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-200 rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👋</span>
          <div>
            <p className="font-bold text-gray-900 text-lg">
              {visitCount > 5 
                ? 'أهلاً بعميلنا المميز!'
                : 'مرحباً بعودتك!'
              }
            </p>
            <p className="text-sm text-gray-600">
              {industry 
                ? `لاحظنا اهتمامك بـ${industryAr || industry}. هل تحتاج عرض سعر مخصص؟`
                : `هذه زيارتك رقم ${visitCount}. هل أنت مستعد لطلب عرض سعر؟`
              }
            </p>
          </div>
        </div>
        <Link
          href={`/quote${industry ? `?industry=${industry}` : ''}`}
          className="ml-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-md text-sm whitespace-nowrap"
        >
          احصل على عرض خاص 🎯
        </Link>
      </div>
    </div>
  );
}
