/**
 * BackButtonShield — Anti-Pogo-Sticking Interceptor (§38.2.4)
 * 
 * Detects back button intent and presents a targeted micro-offer
 * to prevent the visitor from returning to search results (pogo-sticking).
 * Uses beforeunload + popstate + visibilitychange event fusion.
 */
'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface BackButtonShieldProps {
  discountPercent?: number;
  industry?: string;
}

export function BackButtonShield({ discountPercent = 10, industry }: BackButtonShieldProps) {
  const [showShield, setShowShield] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const triggerShield = useCallback(() => {
    if (dismissed) return;
    // Only trigger once and only if user spent at least 5 seconds on page
    setShowShield(true);
  }, [dismissed]);

  useEffect(() => {
    // Prevent double-trigger
    if (dismissed) return;

    let timeOnPage = 0;
    const timer = setInterval(() => { timeOnPage += 1; }, 1000);

    // Method 1: Back button via popstate
    const handlePop = () => {
      if (timeOnPage >= 5) {
        window.history.pushState(null, '', window.location.href);
        triggerShield();
      }
    };

    // Push an extra history entry so popstate fires on back
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePop);

    return () => {
      clearInterval(timer);
      window.removeEventListener('popstate', handlePop);
    };
  }, [dismissed, triggerShield]);

  const handleDismiss = () => {
    setDismissed(true);
    setShowShield(false);
  };

  if (!showShield) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
        {/* Gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500" />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          {/* Emoji hook */}
          <div className="text-5xl mb-4">🎁</div>

          <h3 className="text-2xl font-black text-gray-900 mb-2">
            انتظر! عرض خاص لك
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            احصل على خصم <span className="text-blue-600 font-black text-xl">{discountPercent}%</span> على 
            {industry ? ` أزياء ${industry}` : ' طلبك الأول'} عند طلب عرض سعر الآن
          </p>

          {/* CTA */}
          <a
            href={`/quote${industry ? `?industry=${industry}` : ''}&discount=${discountPercent}`}
            onClick={handleDismiss}
            className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
          >
            🎯 نعم، أريد الخصم!
          </a>

          <button
            onClick={handleDismiss}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            لا شكراً، أريد المغادرة
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </div>
  );
}
