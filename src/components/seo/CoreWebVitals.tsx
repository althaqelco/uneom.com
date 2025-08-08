import React from 'react';
/**
 * Core Web Vitals Component
 * Implements Google's May 2025 Core Web Vitals requirements
 */

import { useEffect } from 'react';
import Script from 'next/script';

interface CoreWebVitalsProps {
  reportWebVitals?: (metric: any) => void;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ reportWebVitals }) => {
  useEffect(() => {
    // Import web-vitals library dynamically with error handling for v5.0.1
    import('web-vitals').then((webVitals) => {
      // Use the correct API for web-vitals v5
      if (webVitals.onCLS) webVitals.onCLS(reportWebVitals || console.log);
      if (webVitals.onINP) webVitals.onINP(reportWebVitals || console.log); // INP replaces FID in v5
      if (webVitals.onFCP) webVitals.onFCP(reportWebVitals || console.log);
      if (webVitals.onLCP) webVitals.onLCP(reportWebVitals || console.log);
      if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals || console.log);
    }).catch((error) => {
      console.log('Web vitals not available:', error);
    });
  }, [reportWebVitals]);

  return (
    <React.Fragment>
      {/* Google Analytics 4 with Core Web Vitals */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'core_web_vitals'
            }
          });
          
          // Track Core Web Vitals
          function sendToGoogleAnalytics({name, delta, value, id}) {
            gtag('event', name, {
              event_category: 'Web Vitals',
              event_label: id,
              value: Math.round(name === 'CLS' ? delta * 1000 : delta),
              non_interaction: true});
          }
          
          // Store the function globally for use by web-vitals
          window.reportWebVitals = sendToGoogleAnalytics;
        `}
      </Script>

      {/* Performance Observer for additional metrics */}
      <Script id="performance-observer" strategy="afterInteractive">
        {`
          if ('PerformanceObserver' in window) {
            // Observe layout shifts
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                  console.log('Layout shift detected:', entry.value);
                }
              }
            });
            
            try {
              observer.observe({entryTypes: ['layout-shift']});
            } catch (e) {
              console.log('Layout shift observation not supported');
            }
            
            // Observe largest contentful paint
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              console.log('LCP:', lastEntry.startTime);
            });
            
            try {
              lcpObserver.observe({entryTypes: ['largest-contentful-paint']});
            } catch (e) {
              console.log('LCP observation not supported');
            }
          }
        `}
      </Script>
    </React.Fragment>
  );
};

export default CoreWebVitals;