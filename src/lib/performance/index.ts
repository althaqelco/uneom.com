/**
 * Performance Optimization Library
 * مكتبة تحسين الأداء
 * 
 * Core Web Vitals optimization utilities for 2024-2026:
 * - LCP (Largest Contentful Paint)
 * - INP (Interaction to Next Paint) - replaces FID
 * - CLS (Cumulative Layout Shift)
 */

export {
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
} from './core-web-vitals-optimizer';

export type { WebVitalsMetric, WebVitalsThresholds } from './core-web-vitals-optimizer';

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







