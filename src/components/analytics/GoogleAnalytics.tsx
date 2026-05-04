/**
 * GoogleAnalytics — GA4 Integration Component (G-RSQSS61R9J)
 * 
 * Handles:
 * 1. gtag.js loading via Next.js Script (afterInteractive)
 * 2. Page view tracking for SPA navigations
 * 3. Custom event helpers for conversion tracking
 * 4. Enhanced measurement configuration
 * 
 * All behavioral components (ScrollDepthTracker, StickyWhatsApp, 
 * QuoteWizard, BackButtonShield) fire events through gtag().
 */
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

const GA_MEASUREMENT_ID = 'G-RSQSS61R9J';

// ============================================
// PAGE VIEW TRACKER (SPA-aware)
// ============================================
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gtag) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      // Enhanced measurement
      send_page_view: true,
    });
  }, [pathname, searchParams]);

  return null;
}

// ============================================
// MAIN COMPONENT
// ============================================
export function GoogleAnalytics() {
  return (
    <>
      {/* Google Tag Manager — gtag.js */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
              anonymize_ip: true,
              custom_map: {
                'dimension1': 'industry',
                'dimension2': 'city',
                'dimension3': 'user_type'
              }
            });
          `,
        }}
      />
      {/* SPA Page View Tracker */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}

// ============================================
// CONVERSION EVENT HELPERS
// ============================================

/** Fire a quote request conversion event */
export function trackQuoteConversion(data: {
  industry?: string;
  quantity?: string;
  city?: string;
  value?: number;
}) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', 'generate_lead', {
    event_category: 'conversion',
    event_label: data.industry || 'general',
    value: data.value || 0,
    currency: 'SAR',
    // Custom dimensions
    industry: data.industry,
    quantity_range: data.quantity,
    city: data.city,
  });
}

/** Fire a WhatsApp click conversion event */
export function trackWhatsAppClick(industry?: string) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', 'whatsapp_click', {
    event_category: 'conversion',
    event_label: industry || 'general',
    transport_type: 'beacon',
  });
}

/** Fire a phone call conversion event */
export function trackPhoneCall() {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', 'phone_call', {
    event_category: 'conversion',
    event_label: 'header_click',
    transport_type: 'beacon',
  });
}

/** Track CTA engagement */
export function trackCTAClick(ctaName: string, page?: string) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
    page_location: page || window.location.pathname,
  });
}

/** Track page engagement time */
export function trackEngagement(seconds: number) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('event', 'page_engagement', {
    event_category: 'engagement',
    value: seconds,
    non_interaction: true,
  });
}
