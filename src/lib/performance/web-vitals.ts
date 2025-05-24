/**
 * Web Vitals Monitoring and Optimization Utility
 * 
 * This utility helps track and improve Core Web Vitals metrics,
 * which are critical ranking factors for SEO:
 * - Largest Contentful Paint (LCP): loading performance
 * - First Input Delay (FID): interactivity
 * - Cumulative Layout Shift (CLS): visual stability
 * 
 * It integrates with the web-vitals library to measure these metrics
 * and implements optimization techniques to improve them.
 */

import { getLCP, getFID, getCLS, getTTFB, getFCP } from 'web-vitals';

// Types for Web Vitals metrics
export interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Type for analytics reporting
type ReportHandler = (metric: WebVitalMetric) => void;

// Thresholds for good/poor ratings based on Google's recommendations
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // milliseconds
  FID: { good: 100, poor: 300 },   // milliseconds
  CLS: { good: 0.1, poor: 0.25 },  // unitless
  FCP: { good: 1800, poor: 3000 }, // milliseconds
  TTFB: { good: 800, poor: 1800 }  // milliseconds
};

/**
 * Get rating for a metric value based on thresholds
 */
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'needs-improvement';
  
  if (value <= threshold.good) return 'good';
  if (value >= threshold.poor) return 'poor';
  return 'needs-improvement';
}

/**
 * Report Web Vitals metrics to console and analytics
 */
export function reportWebVitals(onReport: ReportHandler): void {
  // Measure LCP (Largest Contentful Paint)
  getLCP(metric => {
    const vitalsMetric: WebVitalMetric = {
      name: 'LCP',
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      rating: getRating('LCP', metric.value)
    };
    onReport(vitalsMetric);
  }, { reportAllChanges: false });

  // Measure FID (First Input Delay)
  getFID(metric => {
    const vitalsMetric: WebVitalMetric = {
      name: 'FID',
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      rating: getRating('FID', metric.value)
    };
    onReport(vitalsMetric);
  });

  // Measure CLS (Cumulative Layout Shift)
  getCLS(metric => {
    const vitalsMetric: WebVitalMetric = {
      name: 'CLS',
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      rating: getRating('CLS', metric.value)
    };
    onReport(vitalsMetric);
  }, { reportAllChanges: false });
  
  // Additional metrics for comprehensive monitoring
  getFCP(metric => {
    const vitalsMetric: WebVitalMetric = {
      name: 'FCP',
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      rating: getRating('FCP', metric.value)
    };
    onReport(vitalsMetric);
  });
  
  getTTFB(metric => {
    const vitalsMetric: WebVitalMetric = {
      name: 'TTFB',
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      rating: getRating('TTFB', metric.value)
    };
    onReport(vitalsMetric);
  });
}

/**
 * Apply performance optimizations
 * Call this function during app initialization
 */
export function applyPerformanceOptimizations(): void {
  if (typeof window === 'undefined') return;
  
  // Optimize non-critical resources loading
  document.addEventListener('DOMContentLoaded', () => {
    // Defer non-critical images
    deferNonCriticalImages();
    
    // Add font display swap to improve text rendering
    optimizeFontLoading();
    
    // Preconnect to required origins
    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com', true);
    
    // Add intersection observer for elements below the fold
    setupIntersectionObserver();
  });
}

/**
 * Defer loading of non-critical images
 */
function deferNonCriticalImages(): void {
  const lazyImages = document.querySelectorAll('img.lazy');
  
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    lazyImages.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.loading = 'lazy';
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      }
    });
  } else {
    // Fallback to Intersection Observer
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
          const lazyImage = entry.target;
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
          }
          lazyImage.classList.remove('lazy');
          imageObserver.unobserve(lazyImage);
        }
      });
    });
    
    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Optimize font loading
 */
function optimizeFontLoading(): void {
  // Add font-display: swap to all font-face rules
  const styleSheets = document.styleSheets;
  
  try {
    for (let i = 0; i < styleSheets.length; i++) {
      const styleSheet = styleSheets[i];
      if (styleSheet.href && styleSheet.href.includes('fonts')) {
        for (let j = 0; j < styleSheet.cssRules.length; j++) {
          const rule = styleSheet.cssRules[j];
          if (rule instanceof CSSFontFaceRule) {
            // @ts-ignore: Modifying font-display property
            rule.style.fontDisplay = 'swap';
          }
        }
      }
    }
  } catch (e) {
    // CORS issues with external stylesheets - we can't modify those
    console.warn('Could not optimize font loading due to CORS restrictions');
  }
}

/**
 * Add preconnect links for faster resource loading
 */
function addPreconnect(url: string, crossorigin: boolean = false): void {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  if (crossorigin) {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Setup intersection observer for below-the-fold elements
 */
function setupIntersectionObserver(): void {
  const options = {
    rootMargin: '200px', // Load elements when they're 200px from viewport
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Handle different element types
        if (entry.target.tagName === 'IMG' && entry.target instanceof HTMLImageElement) {
          // Lazy load images
          if (entry.target.dataset.src) {
            entry.target.src = entry.target.dataset.src;
          }
        } else if (entry.target.classList.contains('defer-load')) {
          // Load deferred content
          entry.target.classList.add('loaded');
          
          // If it's an iframe, set the src
          const iframes = entry.target.querySelectorAll('iframe');
          iframes.forEach(iframe => {
            if (iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
            }
          });
        }
        
        // Stop observing this element
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  // Observe lazy images and deferred content
  const targets = document.querySelectorAll('.lazy, .defer-load');
  targets.forEach(target => {
    observer.observe(target);
  });
}

/**
 * Get performance score based on Core Web Vitals
 */
export function getPerformanceScore(metrics: Record<string, WebVitalMetric>): {
  score: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  recommendations: string[];
} {
  const recommendations: string[] = [];
  let score = 0;
  let totalWeight = 0;
  
  // Scoring weights
  const weights = {
    LCP: 25, // 25% of total score
    FID: 25, // 25% of total score
    CLS: 25, // 25% of total score
    FCP: 15, // 15% of total score
    TTFB: 10 // 10% of total score
  };
  
  // Calculate score
  Object.entries(metrics).forEach(([name, metric]) => {
    const weight = weights[name as keyof typeof weights] || 0;
    totalWeight += weight;
    
    // Calculate metric score (0-100)
    let metricScore = 0;
    if (metric.rating === 'good') {
      metricScore = 100;
    } else if (metric.rating === 'needs-improvement') {
      metricScore = 50;
    }
    
    score += metricScore * (weight / 100);
    
    // Add recommendations for non-good metrics
    if (metric.rating !== 'good') {
      if (name === 'LCP' && metric.value > THRESHOLDS.LCP.good) {
        recommendations.push('Optimize Largest Contentful Paint by reducing image sizes and improving server response time.');
      } else if (name === 'FID' && metric.value > THRESHOLDS.FID.good) {
        recommendations.push('Improve First Input Delay by minimizing long tasks and reducing JavaScript execution time.');
      } else if (name === 'CLS' && metric.value > THRESHOLDS.CLS.good) {
        recommendations.push('Reduce Cumulative Layout Shift by setting explicit dimensions for images and embeds.');
      } else if (name === 'FCP' && metric.value > THRESHOLDS.FCP.good) {
        recommendations.push('Improve First Contentful Paint by optimizing critical CSS and reducing render-blocking resources.');
      } else if (name === 'TTFB' && metric.value > THRESHOLDS.TTFB.good) {
        recommendations.push('Reduce Time to First Byte by optimizing server response time and using CDN.');
      }
    }
  });
  
  // Normalize score to 0-100
  if (totalWeight > 0) {
    score = (score / totalWeight) * 100;
  }
  
  // Determine overall rating
  let rating: 'good' | 'needs-improvement' | 'poor';
  if (score >= 90) {
    rating = 'good';
  } else if (score >= 50) {
    rating = 'needs-improvement';
  } else {
    rating = 'poor';
  }
  
  return {
    score: Math.round(score),
    rating,
    recommendations
  };
}

export default {
  reportWebVitals,
  applyPerformanceOptimizations,
  getPerformanceScore
};
