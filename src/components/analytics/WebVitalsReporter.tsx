/**
 * WebVitalsReporter — Core Web Vitals → GA4 (§38.7)
 * 
 * Reports LCP, FID, CLS, INP, TTFB, and FCP metrics to GA4.
 * Google uses these metrics for ranking (Page Experience Update).
 * 
 * Uses the web-vitals library which is included in Next.js.
 */
'use client';

import { useEffect } from 'react';

type Metric = {
  name: string;
  value: number;
  id: string;
  delta: number;
  rating: 'good' | 'needs-improvement' | 'poor';
};

function sendToGA4(metric: Metric) {
  if (typeof window === 'undefined' || !(window as any).gtag) return;

  (window as any).gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
    metric_rating: metric.rating,
    non_interaction: true,
  });
}

export function WebVitalsReporter() {
  useEffect(() => {
    // Dynamic import to avoid SSR issues
    import('web-vitals').then(({ onCLS, onFID, onLCP, onINP, onTTFB, onFCP }) => {
      onCLS(sendToGA4);
      onFID(sendToGA4);
      onLCP(sendToGA4);
      onINP(sendToGA4);
      onTTFB(sendToGA4);
      onFCP(sendToGA4);
    }).catch(() => {
      // web-vitals not available, skip
    });
  }, []);

  return null;
}
