/**
 * Image Optimizer Utility
 * 
 * This utility automatically scans the site for image optimization opportunities
 * and applies best practices to improve Core Web Vitals scores.
 * 
 * It specifically targets:
 * - LCP (Largest Contentful Paint) - By optimizing image size and format
 * - CLS (Cumulative Layout Shift) - By enforcing width/height attributes
 */

import fs from 'fs';
import path from 'path';
import { generateAltTag } from '../images/alt-tag-generator';

// Types
export interface ImageOptimizationResult {
  path: string;
  originalSize: number;
  optimizedSize: number;
  savingsPercent: number;
  format: string;
  optimizedFormat: string;
  hasAltText: boolean;
  generatedAltText?: string;
  hasDimensions: boolean;
  isLazyLoaded: boolean;
  isResponsive: boolean;
  improvements: string[];
}

export interface OptimizationReport {
  totalImages: number;
  totalOptimized: number;
  totalSavingsKB: number;
  averageSavingsPercent: number;
  missingAltText: number;
  missingDimensions: number;
  notLazyLoaded: number;
  notResponsive: number;
  results: ImageOptimizationResult[];
  recommendations: string[];
}

/**
 * Scan a specific directory for images
 */
export function scanDirectoryForImages(directory: string): string[] {
  // In a real implementation, this would recursively scan the directory
  // For this demo, we'll return some sample image paths
  
  const basePath = '/images/industries/corporate';
  return [
    `${basePath}/hero-banner-ar.jpg`,
    `${basePath}/corporate-uniform-1.jpg`,
    `${basePath}/corporate-uniform-2.jpg`,
    `${basePath}/fabric-technology.jpg`,
    `${basePath}/customization-options.jpg`,
    `${basePath}/department-executives.jpg`,
    `${basePath}/department-frontdesk.jpg`,
    `${basePath}/department-support.jpg`,
    `${basePath}/testimonial-ceo.jpg`
  ];
}

/**
 * Analyze an image for optimization opportunities
 */
export function analyzeImage(imagePath: string, pageContext: string): ImageOptimizationResult {
  // In a real implementation, this would actually analyze the image file
  // For this demo, we'll simulate the analysis
  
  const fileExt = path.extname(imagePath).toLowerCase();
  const fileName = path.basename(imagePath, fileExt);
  
  // Simulate file size (would be actual file size in production)
  const originalSize = Math.floor(Math.random() * 1000) + 500; // Random size between 500KB and 1500KB
  
  // Check optimization opportunities
  const isHeroImage = imagePath.includes('hero');
  const isLazyLoadCandidate = !isHeroImage; // Everything except hero should be lazy loaded
  const needsResponsiveSizing = true; // Most images should be responsive
  
  // Generate a sample alt text based on filename and context
  const generatedAltText = generateAltTag(fileName, pageContext, 'ar');
  
  // Simulate optimization result
  const optimizationResult: ImageOptimizationResult = {
    path: imagePath,
    originalSize,
    optimizedSize: Math.floor(originalSize * 0.4), // Assume 60% reduction
    savingsPercent: 60,
    format: fileExt.replace('.', ''),
    optimizedFormat: 'webp',
    hasAltText: false, // Assume no alt text initially
    generatedAltText,
    hasDimensions: Math.random() > 0.3, // 70% chance has dimensions
    isLazyLoaded: Math.random() > 0.7, // 30% chance already lazy loaded
    isResponsive: Math.random() > 0.6, // 40% chance already responsive
    improvements: []
  };
  
  // Generate list of improvements
  if (optimizationResult.format !== 'webp') {
    optimizationResult.improvements.push('Convert to WebP format');
  }
  
  if (!optimizationResult.hasAltText) {
    optimizationResult.improvements.push('Add alt text');
  }
  
  if (!optimizationResult.hasDimensions) {
    optimizationResult.improvements.push('Add width/height attributes');
  }
  
  if (isLazyLoadCandidate && !optimizationResult.isLazyLoaded) {
    optimizationResult.improvements.push('Add lazy loading');
  }
  
  if (needsResponsiveSizing && !optimizationResult.isResponsive) {
    optimizationResult.improvements.push('Add responsive sizing (srcset)');
  }
  
  return optimizationResult;
}

/**
 * Generate an optimization report for a specific page
 */
export function generateOptimizationReport(pagePath: string): OptimizationReport {
  // Get images on the page
  const imagePaths = scanDirectoryForImages(pagePath);
  
  // Analyze each image
  const results = imagePaths.map(imagePath => 
    analyzeImage(imagePath, pagePath)
  );
  
  // Aggregate results
  const totalImages = results.length;
  const totalOptimized = results.filter(r => r.improvements.length === 0).length;
  const totalSavingsKB = results.reduce((sum, r) => sum + (r.originalSize - r.optimizedSize), 0);
  
  const missingAltText = results.filter(r => !r.hasAltText).length;
  const missingDimensions = results.filter(r => !r.hasDimensions).length;
  const notLazyLoaded = results.filter(r => !r.isLazyLoaded).length;
  const notResponsive = results.filter(r => !r.isResponsive).length;
  
  // Calculate average savings
  const totalSavingsPercent = results.reduce((sum, r) => sum + r.savingsPercent, 0);
  const averageSavingsPercent = totalSavingsPercent / totalImages;
  
  // Generate general recommendations
  const recommendations: string[] = [];
  
  if (missingAltText > 0) {
    recommendations.push(`Add alt text to ${missingAltText} images to improve accessibility and SEO.`);
  }
  
  if (missingDimensions > 0) {
    recommendations.push(`Add width/height attributes to ${missingDimensions} images to prevent layout shifts.`);
  }
  
  if (notLazyLoaded > 0) {
    recommendations.push(`Add lazy loading to ${notLazyLoaded} images to improve page load time.`);
  }
  
  if (notResponsive > 0) {
    recommendations.push(`Add responsive sizing to ${notResponsive} images to optimize for different devices.`);
  }
  
  // Add WebP recommendation if needed
  const needWebP = results.filter(r => r.format !== 'webp').length;
  if (needWebP > 0) {
    recommendations.push(`Convert ${needWebP} images to WebP format to reduce file size by approximately ${averageSavingsPercent.toFixed(0)}%.`);
  }
  
  return {
    totalImages,
    totalOptimized,
    totalSavingsKB,
    averageSavingsPercent,
    missingAltText,
    missingDimensions,
    notLazyLoaded,
    notResponsive,
    results,
    recommendations
  };
}

/**
 * Apply optimizations to images on a page
 * 
 * In a real implementation, this would:
 * 1. Convert images to WebP
 * 2. Resize images appropriately
 * 3. Generate image component code with proper attributes
 * 
 * For this demo, we'll return sample OptimizedImage component usage
 */
export function getOptimizedImageCode(imageResult: ImageOptimizationResult): string {
  const { path, generatedAltText } = imageResult;
  
  // Sample OptimizedImage component code
  return `<OptimizedImage
  src="${path}"
  alt="${generatedAltText || 'صورة زي موحد للشركات'}"
  width={800}
  height={600}
  priority={${path.includes('hero') ? 'true' : 'false'}}
  className="rounded-md shadow-md"
/>`;
}

export default {
  scanDirectoryForImages,
  analyzeImage,
  generateOptimizationReport,
  getOptimizedImageCode
};
