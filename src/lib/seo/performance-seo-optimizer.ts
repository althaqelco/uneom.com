/**
 * Performance & SEO Optimizer for Google 2025
 * محسن الأداء والسيو لمعايير جوجل 2025
 */

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

export interface SEOScore {
  overall: number;
  technical: number;
  content: number;
  performance: number;
  mobile: number;
}

/**
 * تحسين Core Web Vitals
 */
export class CoreWebVitalsOptimizer {
  private static instance: CoreWebVitalsOptimizer;
  
  static getInstance(): CoreWebVitalsOptimizer {
    if (!CoreWebVitalsOptimizer.instance) {
      CoreWebVitalsOptimizer.instance = new CoreWebVitalsOptimizer();
    }
    return CoreWebVitalsOptimizer.instance;
  }

  /**
   * قياس وتحسين LCP (Largest Contentful Paint)
   */
  optimizeLCP(): void {
    // تحسين تحميل الصور
    this.optimizeImageLoading();
    
    // تحسين الخطوط
    this.optimizeFontLoading();
    
    // تحسين CSS Critical Path
    this.optimizeCriticalCSS();
    
    // تحسين تحميل الموارد
    this.optimizeResourceLoading();
  }

  /**
   * تحسين FID (First Input Delay)
   */
  optimizeFID(): void {
    // تقليل JavaScript الرئيسي
    this.optimizeMainThreadWork();
    
    // تحسين Event Listeners
    this.optimizeEventListeners();
    
    // استخدام Web Workers
    this.implementWebWorkers();
  }

  /**
   * تحسين CLS (Cumulative Layout Shift)
   */
  optimizeCLS(): void {
    // تحديد أبعاد الصور
    this.setImageDimensions();
    
    // تحسين الإعلانات والمحتوى الديناميكي
    this.optimizeDynamicContent();
    
    // تحسين الخطوط
    this.preventFontLayoutShift();
  }

  private optimizeImageLoading(): void {
    // تطبيق lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  private optimizeFontLoading(): void {
    // تحميل الخطوط بشكل مُحسن
    const fontPreloads = [
      '/fonts/arabic-font.woff2',
      '/fonts/english-font.woff2'
    ];

    fontPreloads.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  private optimizeCriticalCSS(): void {
    // تحديد CSS الحرج وتحميله inline
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .hero-section { display: block; }
      .navigation { display: flex; }
      .main-content { display: block; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }

  private optimizeResourceLoading(): void {
    // تحسين تحميل الموارد
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://api.uneom.com' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);
    });
  }

  private optimizeMainThreadWork(): void {
    // تقسيم المهام الثقيلة
    const heavyTask = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
      } else {
        setTimeout(callback, 0);
      }
    };

    // استخدام المهام المؤجلة
    heavyTask(() => {
      // تنفيذ المهام غير الحرجة
      console.log('Heavy task executed during idle time');
    });
  }

  private optimizeEventListeners(): void {
    // استخدام passive listeners
    document.addEventListener('scroll', this.handleScroll, { passive: true });
    document.addEventListener('touchstart', this.handleTouch, { passive: true });
  }

  private handleScroll = (): void => {
    // معالجة التمرير بكفاءة
  };

  private handleTouch = (): void => {
    // معالجة اللمس بكفاءة
  };

  private implementWebWorkers(): void {
    if ('Worker' in window) {
      const worker = new Worker('/workers/data-processor.js');
      worker.postMessage({ type: 'PROCESS_DATA', data: {} });
      worker.onmessage = (e) => {
        console.log('Worker result:', e.data);
      };
    }
  }

  private setImageDimensions(): void {
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
      // تحديد أبعاد الصور لمنع layout shift
      (img as HTMLImageElement).style.aspectRatio = '16/9'; // أو النسبة المناسبة
    });
  }

  private optimizeDynamicContent(): void {
    // حجز مساحة للمحتوى الديناميكي
    const dynamicContainers = document.querySelectorAll('[data-dynamic]');
    dynamicContainers.forEach(container => {
      (container as HTMLElement).style.minHeight = '200px';
    });
  }

  private preventFontLayoutShift(): void {
    // منع layout shift للخطوط
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Arabic Font';
        src: url('/fonts/arabic-font.woff2') format('woff2');
        font-display: swap;
        size-adjust: 100%;
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * محلل السيو المتقدم
 */
export class AdvancedSEOAnalyzer {
  /**
   * تحليل شامل للسيو
   */
  async analyzePage(url: string): Promise<SEOScore> {
    const technicalScore = await this.analyzeTechnicalSEO(url);
    const contentScore = await this.analyzeContentSEO(url);
    const performanceScore = await this.analyzePerformance(url);
    const mobileScore = await this.analyzeMobileFriendliness(url);

    const overall = (technicalScore + contentScore + performanceScore + mobileScore) / 4;

    return {
      overall,
      technical: technicalScore,
      content: contentScore,
      performance: performanceScore,
      mobile: mobileScore
    };
  }

  private async analyzeTechnicalSEO(url: string): Promise<number> {
    let score = 100;

    // فحص العناوين
    const title = document.querySelector('title')?.textContent;
    if (!title || title.length < 30 || title.length > 60) score -= 10;

    // فحص الوصف
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (!description || description.length < 120 || description.length > 160) score -= 10;

    // فحص الروابط الداخلية
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    if (internalLinks.length < 5) score -= 5;

    // فحص البيانات المنظمة
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    if (structuredData.length === 0) score -= 15;

    // فحص Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) score -= 10;

    // فحص Hreflang
    const hreflang = document.querySelectorAll('link[hreflang]');
    if (hreflang.length === 0) score -= 5;

    return Math.max(0, score);
  }

  private async analyzeContentSEO(url: string): Promise<number> {
    let score = 100;

    // فحص العناوين H1
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length !== 1) score -= 15;

    // فحص التسلسل الهرمي للعناوين
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length < 3) score -= 10;

    // فحص النص البديل للصور
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    if (imagesWithoutAlt.length > 0) score -= (imagesWithoutAlt.length * 2);

    // فحص طول المحتوى
    const textContent = document.body.textContent || '';
    if (textContent.length < 300) score -= 20;

    // فحص الكلمات المفتاحية
    const keywordDensity = this.calculateKeywordDensity(textContent, 'يونيوم');
    if (keywordDensity < 0.5 || keywordDensity > 3) score -= 10;

    return Math.max(0, score);
  }

  private async analyzePerformance(url: string): Promise<number> {
    let score = 100;

    // قياس Core Web Vitals
    if ('web-vital' in window) {
      const vitals = await this.getCoreWebVitals();
      
      // LCP
      if (vitals.lcp > 2500) score -= 20;
      else if (vitals.lcp > 4000) score -= 40;

      // FID
      if (vitals.fid > 100) score -= 15;
      else if (vitals.fid > 300) score -= 30;

      // CLS
      if (vitals.cls > 0.1) score -= 15;
      else if (vitals.cls > 0.25) score -= 30;
    }

    return Math.max(0, score);
  }

  private async analyzeMobileFriendliness(url: string): Promise<number> {
    let score = 100;

    // فحص Viewport Meta Tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) score -= 20;

    // فحص حجم النص
    const textElements = document.querySelectorAll('p, span, div');
    const smallTextElements = Array.from(textElements).filter(el => {
      const fontSize = window.getComputedStyle(el).fontSize;
      return parseInt(fontSize) < 16;
    });
    if (smallTextElements.length > textElements.length * 0.3) score -= 15;

    // فحص المسافات بين العناصر القابلة للنقر
    const clickableElements = document.querySelectorAll('a, button, input[type="submit"]');
    // تحليل المسافات...

    return Math.max(0, score);
  }

  private calculateKeywordDensity(text: string, keyword: string): number {
    const words = text.toLowerCase().split(/\s+/);
    const keywordCount = words.filter(word => word.includes(keyword.toLowerCase())).length;
    return (keywordCount / words.length) * 100;
  }

  private async getCoreWebVitals(): Promise<PerformanceMetrics> {
    return new Promise((resolve) => {
      // محاكاة قياس Core Web Vitals
      setTimeout(() => {
        resolve({
          lcp: Math.random() * 3000 + 1000,
          fid: Math.random() * 200 + 50,
          cls: Math.random() * 0.3,
          fcp: Math.random() * 2000 + 500,
          ttfb: Math.random() * 1000 + 200
        });
      }, 1000);
    });
  }
}

/**
 * مُحسن الفهرسة المتقدم
 */
export class AdvancedIndexingOptimizer {
  /**
   * تحسين الفهرسة للصفحات الجديدة
   */
  async optimizeIndexing(urls: string[]): Promise<void> {
    // إرسال الصفحات الجديدة لجوجل
    await this.submitToGoogleIndexing(urls);
    
    // تحديث خريطة الموقع
    await this.updateSitemap(urls);
    
    // تحسين الروابط الداخلية
    await this.optimizeInternalLinking(urls);
  }

  private async submitToGoogleIndexing(urls: string[]): Promise<void> {
    // استخدام Google Indexing API
    for (const url of urls) {
      try {
        await fetch('/api/google-indexing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url, type: 'URL_UPDATED' })
        });
      } catch (error) {
        console.error('Error submitting to Google Indexing API:', error);
      }
    }
  }

  private async updateSitemap(urls: string[]): Promise<void> {
    // تحديث خريطة الموقع تلقائياً
    try {
      await fetch('/api/update-sitemap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls })
      });
    } catch (error) {
      console.error('Error updating sitemap:', error);
    }
  }

  private async optimizeInternalLinking(urls: string[]): Promise<void> {
    // تحسين الروابط الداخلية للصفحات الجديدة
    urls.forEach(url => {
      this.addInternalLinksToRelevantPages(url);
    });
  }

  private addInternalLinksToRelevantPages(newUrl: string): void {
    // إضافة روابط داخلية للصفحات ذات الصلة
    const relevantPages = this.findRelevantPages(newUrl);
    relevantPages.forEach(page => {
      this.insertInternalLink(page, newUrl);
    });
  }

  private findRelevantPages(url: string): string[] {
    // العثور على الصفحات ذات الصلة
    const category = this.extractCategory(url);
    return [
      `/shop/${category}`,
      `/industries/${category}`,
      `/blog/tag/${category}`
    ];
  }

  private extractCategory(url: string): string {
    const segments = url.split('/');
    return segments[2] || 'general';
  }

  private insertInternalLink(targetPage: string, linkUrl: string): void {
    // إدراج رابط داخلي في الصفحة المستهدفة
    console.log(`Adding internal link from ${targetPage} to ${linkUrl}`);
  }
}

/**
 * مراقب الأداء المستمر
 */
export class ContinuousPerformanceMonitor {
  private observer: PerformanceObserver | null = null;

  startMonitoring(): void {
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          this.processPerformanceEntry(entry);
        });
      });

      this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }
  }

  stopMonitoring(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    // معالجة بيانات الأداء
    console.log('Performance entry:', entry);
    
    // إرسال البيانات للتحليل
    this.sendPerformanceData(entry);
  }

  private sendPerformanceData(entry: PerformanceEntry): void {
    // إرسال بيانات الأداء للخادم
    fetch('/api/performance-analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: entry.entryType,
        name: entry.name,
        duration: entry.duration,
        startTime: entry.startTime,
        timestamp: Date.now()
      })
    }).catch(error => {
      console.error('Error sending performance data:', error);
    });
  }
}

// تصدير الفئات
export const coreWebVitalsOptimizer = CoreWebVitalsOptimizer.getInstance();
export const seoAnalyzer = new AdvancedSEOAnalyzer();
export const indexingOptimizer = new AdvancedIndexingOptimizer();
export const performanceMonitor = new ContinuousPerformanceMonitor();

// تشغيل التحسينات تلقائياً
if (typeof window !== 'undefined') {
  // تشغيل تحسينات Core Web Vitals
  coreWebVitalsOptimizer.optimizeLCP();
  coreWebVitalsOptimizer.optimizeFID();
  coreWebVitalsOptimizer.optimizeCLS();

  // بدء مراقبة الأداء
  performanceMonitor.startMonitoring();

  // تحليل السيو عند تحميل الصفحة
  document.addEventListener('DOMContentLoaded', async () => {
    const seoScore = await seoAnalyzer.analyzePage(window.location.href);
    console.log('SEO Score:', seoScore);
  });
}