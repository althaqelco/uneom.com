/**
 * Performance Optimization Verification Utility
 * 
 * This utility helps verify that performance optimizations have been correctly
 * implemented across the site, focusing on Core Web Vitals metrics.
 * 
 * It performs checks for:
 * 1. Image optimizations (WebP format, proper sizing, lazy loading)
 * 2. Font optimizations (font-display: swap)
 * 3. Script loading optimizations (defer, async)
 * 4. CSS optimizations (critical CSS)
 */

import { generateOptimizationReport } from './image-optimizer';

export interface VerificationResult {
  name: string;
  status: 'pass' | 'warning' | 'fail';
  details: string;
  impact: 'high' | 'medium' | 'low';
  recommendation?: string;
}

export interface PagePerformanceReport {
  url: string;
  timestamp: string;
  overall: {
    score: number;
    rating: 'good' | 'needs-improvement' | 'poor';
  };
  imageOptimizations: VerificationResult;
  fontOptimizations: VerificationResult;
  scriptOptimizations: VerificationResult;
  cssOptimizations: VerificationResult;
  recommendations: string[];
}

/**
 * Verify image optimizations on a page
 */
export async function verifyImageOptimizations(pageUrl: string): Promise<VerificationResult> {
  // In a real implementation, this would check actual images
  // For this demo, we'll simulate the verification

  // Use our image optimizer to get a report
  const report = generateOptimizationReport(pageUrl);
  
  // Calculate the percentage of optimized images
  const optimizationRate = (report.totalOptimized / report.totalImages) * 100;
  
  let status: 'pass' | 'warning' | 'fail';
  let details: string;
  let impact: 'high' | 'medium' | 'low';
  let recommendation: string | undefined;
  
  if (optimizationRate >= 90) {
    status = 'pass';
    details = `${optimizationRate.toFixed(0)}% of images are fully optimized (${report.totalOptimized}/${report.totalImages})`;
    impact = 'low';
  } else if (optimizationRate >= 70) {
    status = 'warning';
    details = `${optimizationRate.toFixed(0)}% of images are optimized (${report.totalOptimized}/${report.totalImages})`;
    impact = 'medium';
    recommendation = report.recommendations[0];
  } else {
    status = 'fail';
    details = `Only ${optimizationRate.toFixed(0)}% of images are optimized (${report.totalOptimized}/${report.totalImages})`;
    impact = 'high';
    recommendation = report.recommendations.join(' ');
  }
  
  return {
    name: 'Image Optimizations',
    status,
    details,
    impact,
    recommendation
  };
}

/**
 * Verify font optimizations on a page
 */
export function verifyFontOptimizations(pageUrl: string): VerificationResult {
  // In a real implementation, this would check actual font loading
  // For this demo, we'll simulate the verification
  
  // Simulate fonts with font-display: swap
  const totalFonts = 4;
  const optimizedFonts = 3;
  const optimizationRate = (optimizedFonts / totalFonts) * 100;
  
  let status: 'pass' | 'warning' | 'fail';
  let details: string;
  let impact: 'high' | 'medium' | 'low';
  let recommendation: string | undefined;
  
  if (optimizationRate >= 90) {
    status = 'pass';
    details = `${optimizationRate.toFixed(0)}% of fonts use font-display: swap (${optimizedFonts}/${totalFonts})`;
    impact = 'low';
  } else if (optimizationRate >= 70) {
    status = 'warning';
    details = `${optimizationRate.toFixed(0)}% of fonts use font-display: swap (${optimizedFonts}/${totalFonts})`;
    impact = 'medium';
    recommendation = 'Add font-display: swap to all custom fonts to improve text rendering during font loading.';
  } else {
    status = 'fail';
    details = `Only ${optimizationRate.toFixed(0)}% of fonts use font-display: swap (${optimizedFonts}/${totalFonts})`;
    impact = 'high';
    recommendation = 'Add font-display: swap to all custom fonts and consider preloading critical fonts.';
  }
  
  return {
    name: 'Font Optimizations',
    status,
    details,
    impact,
    recommendation
  };
}

/**
 * Verify script loading optimizations on a page
 */
export function verifyScriptOptimizations(pageUrl: string): VerificationResult {
  // In a real implementation, this would check actual script loading
  // For this demo, we'll simulate the verification
  
  // Simulate scripts with defer or async
  const totalScripts = 8;
  const optimizedScripts = 6;
  const optimizationRate = (optimizedScripts / totalScripts) * 100;
  
  let status: 'pass' | 'warning' | 'fail';
  let details: string;
  let impact: 'high' | 'medium' | 'low';
  let recommendation: string | undefined;
  
  if (optimizationRate >= 90) {
    status = 'pass';
    details = `${optimizationRate.toFixed(0)}% of scripts use defer or async (${optimizedScripts}/${totalScripts})`;
    impact = 'low';
  } else if (optimizationRate >= 70) {
    status = 'warning';
    details = `${optimizationRate.toFixed(0)}% of scripts use defer or async (${optimizedScripts}/${totalScripts})`;
    impact = 'medium';
    recommendation = 'Add defer attribute to non-critical scripts to improve page loading.';
  } else {
    status = 'fail';
    details = `Only ${optimizationRate.toFixed(0)}% of scripts use defer or async (${optimizedScripts}/${totalScripts})`;
    impact = 'high';
    recommendation = 'Add defer or async attributes to scripts and consider using dynamic imports for non-critical code.';
  }
  
  return {
    name: 'Script Loading Optimizations',
    status,
    details,
    impact,
    recommendation
  };
}

/**
 * Verify CSS optimizations on a page
 */
export function verifyCSSOptimizations(pageUrl: string): VerificationResult {
  // In a real implementation, this would check actual CSS loading
  // For this demo, we'll simulate the verification
  
  // Simulate critical CSS inline loading
  const hasCriticalCSS = true;
  const unusedCSSPercentage = 15; // 15% of CSS is unused
  
  let status: 'pass' | 'warning' | 'fail';
  let details: string;
  let impact: 'high' | 'medium' | 'low';
  let recommendation: string | undefined;
  
  if (hasCriticalCSS && unusedCSSPercentage < 10) {
    status = 'pass';
    details = `Critical CSS is inlined and only ${unusedCSSPercentage}% of CSS is unused`;
    impact = 'low';
  } else if (hasCriticalCSS && unusedCSSPercentage < 20) {
    status = 'warning';
    details = `Critical CSS is inlined but ${unusedCSSPercentage}% of CSS is unused`;
    impact = 'medium';
    recommendation = 'Remove unused CSS to reduce stylesheet size and improve parsing time.';
  } else {
    status = 'fail';
    details = hasCriticalCSS 
      ? `Critical CSS is inlined but ${unusedCSSPercentage}% of CSS is unused`
      : 'Critical CSS is not inlined';
    impact = 'high';
    recommendation = hasCriticalCSS
      ? 'Remove unused CSS to reduce stylesheet size and improve parsing time.'
      : 'Inline critical CSS to improve render times and defer non-critical CSS.';
  }
  
  return {
    name: 'CSS Optimizations',
    status,
    details,
    impact,
    recommendation
  };
}

/**
 * Generate a complete performance report for a page
 */
export async function generatePagePerformanceReport(pageUrl: string): Promise<PagePerformanceReport> {
  // Run all verification checks
  const imageResults = await verifyImageOptimizations(pageUrl);
  const fontResults = verifyFontOptimizations(pageUrl);
  const scriptResults = verifyScriptOptimizations(pageUrl);
  const cssResults = verifyCSSOptimizations(pageUrl);
  
  // Collect all recommendations
  const recommendations: string[] = [];
  if (imageResults.recommendation) recommendations.push(imageResults.recommendation);
  if (fontResults.recommendation) recommendations.push(fontResults.recommendation);
  if (scriptResults.recommendation) recommendations.push(scriptResults.recommendation);
  if (cssResults.recommendation) recommendations.push(cssResults.recommendation);
  
  // Calculate overall score (0-100)
  const resultWeights = {
    'pass': 100,
    'warning': 50,
    'fail': 0
  };
  
  const impactWeights = {
    'high': 3,
    'medium': 2,
    'low': 1
  };
  
  const results = [imageResults, fontResults, scriptResults, cssResults];
  let weightedScore = 0;
  let totalWeight = 0;
  
  results.forEach(result => {
    const resultScore = resultWeights[result.status];
    const impactWeight = impactWeights[result.impact];
    weightedScore += resultScore * impactWeight;
    totalWeight += impactWeight;
  });
  
  const overallScore = Math.round(weightedScore / totalWeight);
  
  // Determine overall rating
  let overallRating: 'good' | 'needs-improvement' | 'poor';
  if (overallScore >= 90) {
    overallRating = 'good';
  } else if (overallScore >= 50) {
    overallRating = 'needs-improvement';
  } else {
    overallRating = 'poor';
  }
  
  return {
    url: pageUrl,
    timestamp: new Date().toISOString(),
    overall: {
      score: overallScore,
      rating: overallRating
    },
    imageOptimizations: imageResults,
    fontOptimizations: fontResults,
    scriptOptimizations: scriptResults,
    cssOptimizations: cssResults,
    recommendations
  };
}

export default {
  verifyImageOptimizations,
  verifyFontOptimizations,
  verifyScriptOptimizations,
  verifyCSSOptimizations,
  generatePagePerformanceReport
};
