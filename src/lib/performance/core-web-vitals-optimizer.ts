/**
 * Core Web Vitals Optimizer
 * محسن مؤشرات الأداء الأساسية
 * 
 * Optimizes for Google's Core Web Vitals (2024-2026):
 * - LCP (Largest Contentful Paint) - should be ≤ 2.5s
 * - INP (Interaction to Next Paint) - replaced FID, should be ≤ 200ms
 * - CLS (Cumulative Layout Shift) - should be ≤ 0.1
 * 
 * Additional metrics monitored:
 * - TTFB (Time to First Byte)
 * - FCP (First Contentful Paint)
 */

// Types
export interface WebVitalsMetric {
  name: 'LCP' | 'INP' | 'CLS' | 'FCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

export interface WebVitalsThresholds {
  good: number;
  poor: number;
}

// Thresholds based on Google's guidelines (2024)
export const WEB_VITALS_THRESHOLDS: Record<string, WebVitalsThresholds> = {
  LCP: { good: 2500, poor: 4000 },      // milliseconds
  INP: { good: 200, poor: 500 },        // milliseconds (replaces FID)
  CLS: { good: 0.1, poor: 0.25 },       // score
  FCP: { good: 1800, poor: 3000 },      // milliseconds
  TTFB: { good: 800, poor: 1800 }       // milliseconds
};

/**
 * Get rating for a metric value
 */
export function getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = WEB_VITALS_THRESHOLDS[name];
  if (!thresholds) return 'needs-improvement';
  
  if (value <= thresholds.good) return 'good';
  if (value >= thresholds.poor) return 'poor';
  return 'needs-improvement';
}

/**
 * Critical CSS Generator
 * Extracts critical CSS for above-the-fold content
 */
export function generateCriticalCSS(): string {
  return `
    /* Critical CSS for LCP optimization */
    
    /* Reset and base */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { -webkit-text-size-adjust: 100%; line-height: 1.5; }
    body { min-height: 100vh; }
    
    /* Font optimization - prevent FOIT */
    @font-face {
      font-family: 'Inter';
      font-display: swap;
      src: local('Inter');
    }
    
    @font-face {
      font-family: 'Cairo';
      font-display: swap;
      src: local('Cairo');
    }
    
    /* Container */
    .container { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
    
    /* Hero section - prioritize LCP */
    .hero-section { position: relative; min-height: 50vh; }
    .hero-headline { font-size: clamp(1.75rem, 4vw, 3.5rem); font-weight: 700; }
    
    /* Image optimization */
    img { max-width: 100%; height: auto; display: block; }
    
    /* Button base */
    .btn { display: inline-flex; align-items: center; justify-content: center; }
    
    /* Navigation placeholder to prevent CLS */
    header { height: 64px; position: fixed; width: 100%; top: 0; z-index: 50; }
    main { padding-top: 64px; }
  `;
}

/**
 * Image Loading Strategy
 * Returns proper loading strategy based on position
 */
export function getImageLoadingStrategy(position: 'above-fold' | 'below-fold' | 'hero'): {
  loading: 'eager' | 'lazy';
  priority: boolean;
  fetchPriority: 'high' | 'low' | 'auto';
  decoding: 'async' | 'sync' | 'auto';
} {
  switch (position) {
    case 'hero':
      return {
        loading: 'eager',
        priority: true,
        fetchPriority: 'high',
        decoding: 'sync'
      };
    case 'above-fold':
      return {
        loading: 'eager',
        priority: true,
        fetchPriority: 'high',
        decoding: 'async'
      };
    case 'below-fold':
    default:
      return {
        loading: 'lazy',
        priority: false,
        fetchPriority: 'low',
        decoding: 'async'
      };
  }
}

/**
 * Resource Hints Generator
 * Generates preload, prefetch, and preconnect hints
 */
export function generateResourceHints(): {
  preconnect: string[];
  prefetch: string[];
  preload: Array<{ href: string; as: string; type?: string }>;
} {
  return {
    preconnect: [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com'
    ],
    prefetch: [
      '/ar/',
      '/shop/',
      '/contact/',
      '/quote/'
    ],
    preload: [
      { href: '/images/uneom-logo.png', as: 'image' },
      { href: '/images/og-image.jpg', as: 'image' }
    ]
  };
}

/**
 * Layout Shift Prevention Utilities
 */
export const preventLayoutShift = {
  /**
   * Generate aspect ratio box CSS
   */
  aspectRatioBox: (width: number, height: number): string => {
    const ratio = (height / width) * 100;
    return `padding-top: ${ratio}%; position: relative;`;
  },
  
  /**
   * Skeleton loader class generator
   */
  skeletonClass: (type: 'text' | 'image' | 'card' | 'button'): string => {
    const baseClass = 'animate-pulse bg-gray-200 rounded';
    const typeClasses = {
      text: 'h-4 w-3/4',
      image: 'aspect-video w-full',
      card: 'h-48 w-full',
      button: 'h-10 w-32'
    };
    return `${baseClass} ${typeClasses[type]}`;
  },
  
  /**
   * Font size clamp for responsive text without CLS
   */
  fontSizeClamp: (minPx: number, preferredVw: number, maxPx: number): string => {
    return `clamp(${minPx}px, ${preferredVw}vw, ${maxPx}px)`;
  }
};

/**
 * INP (Interaction to Next Paint) Optimization Utilities
 */
export const optimizeINP = {
  /**
   * Debounce function for input handlers
   */
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },
  
  /**
   * Throttle function for scroll/resize handlers
   */
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  /**
   * Request idle callback wrapper
   */
  whenIdle: (callback: () => void): void => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback);
    } else {
      setTimeout(callback, 1);
    }
  },
  
  /**
   * Defer non-critical JavaScript
   */
  deferNonCritical: (callback: () => void): void => {
    if (document.readyState === 'complete') {
      setTimeout(callback, 0);
    } else {
      window.addEventListener('load', () => setTimeout(callback, 0));
    }
  }
};

/**
 * LCP Optimization Strategies
 */
export const optimizeLCP = {
  /**
   * Preload LCP image
   */
  preloadLCPImage: (src: string): HTMLLinkElement => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
    return link;
  },
  
  /**
   * Get optimized image srcset
   */
  getOptimizedSrcset: (
    src: string,
    widths: number[] = [320, 640, 768, 1024, 1280, 1536]
  ): string => {
    // For Next.js Image optimization
    return widths
      .map(w => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=75 ${w}w`)
      .join(', ');
  },
  
  /**
   * Get responsive sizes attribute
   */
  getResponsiveSizes: (type: 'hero' | 'card' | 'thumbnail' | 'full'): string => {
    const sizes = {
      hero: '100vw',
      full: '100vw',
      card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px',
      thumbnail: '(max-width: 640px) 50vw, 200px'
    };
    return sizes[type];
  }
};

/**
 * Performance Budget Configuration
 */
export const PERFORMANCE_BUDGET = {
  // JavaScript budget (KB)
  javascript: {
    total: 300,
    thirdParty: 100,
    firstParty: 200
  },
  // CSS budget (KB)
  css: {
    total: 50,
    critical: 10,
    nonCritical: 40
  },
  // Images budget per page (KB)
  images: {
    total: 500,
    hero: 100,
    thumbnails: 200,
    decorative: 200
  },
  // Font budget (KB)
  fonts: {
    total: 100,
    primary: 50,
    secondary: 50
  },
  // Request limits
  requests: {
    total: 50,
    javascript: 10,
    css: 5,
    images: 25,
    fonts: 4,
    other: 6
  }
};

/**
 * Report Web Vitals to Analytics
 */
export function reportWebVitals(metric: WebVitalsMetric): void {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta
    });
  }
  
  // Send to Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_rating: metric.rating,
      non_interaction: true
    });
  }
  
  // Send to custom analytics endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        page: window.location.pathname,
        timestamp: new Date().toISOString()
      }),
      keepalive: true
    }).catch(() => {
      // Silently fail analytics
    });
  }
}

// Declare gtag for TypeScript
declare global {
  function gtag(command: string, ...args: any[]): void;
}

export default {
  WEB_VITALS_THRESHOLDS,
  getMetricRating,
  generateCriticalCSS,
  getImageLoadingStrategy,
  generateResourceHints,
  preventLayoutShift,
  optimizeINP,
  optimizeLCP,
  PERFORMANCE_BUDGET,
  reportWebVitals
};







