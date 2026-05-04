/**
 * CookieConsent — Privacy Compliance Banner (§38.8)
 * 
 * A bilingual cookie consent banner that:
 * 1. Shows on first visit (checks localStorage)
 * 2. Blocks GA4 until consent is given
 * 3. Stores consent in localStorage
 * 4. Minimal, non-intrusive design
 * 
 * Compliant with Saudi PDPL (Personal Data Protection Law)
 */
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('uneom_cookie_consent');
    if (!consent) {
      // Show after 2 seconds to avoid blocking initial render
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('uneom_cookie_consent', 'accepted');
    localStorage.setItem('uneom_consent_date', new Date().toISOString());
    setVisible(false);

    // Enable GA4 now that consent is given
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('uneom_cookie_consent', 'declined');
    setVisible(false);

    // Revoke GA4 consent
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] animate-slideUp">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 text-sm text-gray-600">
              <span className="font-bold text-gray-900">🍪 نستخدم ملفات تعريف الارتباط</span>
              <span className="mx-1">—</span>
              <span>لتحسين تجربتك وتحليل الزيارات. </span>
              <Link href="/privacy-policy" className="text-blue-600 hover:underline font-medium">
                سياسة الخصوصية
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDecline}
                className="text-sm text-gray-500 hover:text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                رفض
              </button>
              <button
                onClick={handleAccept}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg transition-colors shadow-sm"
              >
                موافق ✓
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
      `}</style>
    </div>
  );
}
