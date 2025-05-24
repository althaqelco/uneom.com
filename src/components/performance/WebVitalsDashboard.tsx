/**
 * Web Vitals Dashboard Component
 * 
 * A visual dashboard for monitoring Core Web Vitals metrics on the site.
 * This component helps track the key performance indicators that affect SEO rankings
 * and provides actionable recommendations for improvement.
 * 
 * Fully supports both English and Arabic content with proper RTL handling.
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { 
  WebVitalMetric, 
  reportWebVitals, 
  getPerformanceScore 
} from '@/lib/performance/web-vitals';

interface WebVitalsDisplayProps {
  metric: WebVitalMetric;
}

const WebVitalsDisplay: React.FC<WebVitalsDisplayProps> = ({ metric }) => {
  const { name, value, rating } = metric;
  const router = useRouter();
  const { locale = 'en' } = router;
  
  // Format value based on metric type
  const formattedValue = name === 'CLS' 
    ? value.toFixed(3) 
    : `${Math.round(value)}ms`;
  
  // Color based on rating
  const colors = {
    good: 'bg-green-100 text-green-800 border-green-200',
    'needs-improvement': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    poor: 'bg-red-100 text-red-800 border-red-200'
  };
  
  const colorClass = colors[rating];
  
  // Display names in Arabic when needed
  const metricNames = {
    en: {
      LCP: 'Largest Contentful Paint',
      FID: 'First Input Delay',
      CLS: 'Cumulative Layout Shift',
      FCP: 'First Contentful Paint',
      TTFB: 'Time to First Byte'
    },
    ar: {
      LCP: 'أكبر عرض للمحتوى',
      FID: 'تأخير أول تفاعل',
      CLS: 'تغيير تراكمي للتخطيط',
      FCP: 'أول عرض للمحتوى',
      TTFB: 'وقت إلى أول بايت'
    }
  };
  
  const ratingTexts = {
    en: {
      good: 'Good',
      'needs-improvement': 'Needs Improvement',
      poor: 'Poor'
    },
    ar: {
      good: 'جيد',
      'needs-improvement': 'بحاجة إلى تحسين',
      poor: 'ضعيف'
    }
  };
  
  const displayName = metricNames[locale as 'en' | 'ar'][name as keyof typeof metricNames.en] || name;
  const ratingText = ratingTexts[locale as 'en' | 'ar'][rating] || rating;
  
  return (
    <div className={`rounded-lg p-4 border ${colorClass}`}>
      <div className="flex justify-between items-center">
        <div className="font-semibold">{displayName}</div>
        <div className="text-lg font-bold">{formattedValue}</div>
      </div>
      <div className="mt-2 text-sm">{ratingText}</div>
    </div>
  );
};

const WebVitalsDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Record<string, WebVitalMetric>>({});
  const [score, setScore] = useState<{
    score: number;
    rating: 'good' | 'needs-improvement' | 'poor';
    recommendations: string[];
  } | null>(null);
  
  const router = useRouter();
  const { locale = 'en' } = router;
  
  // Localized texts
  const texts = {
    en: {
      title: 'Core Web Vitals',
      measuring: 'Measuring performance metrics...',
      overallScore: 'Overall Performance Score',
      recommendations: 'Recommendations',
      aboutTitle: 'About Core Web Vitals',
      aboutDescription: 'Core Web Vitals are a set of specific factors that Google considers important in a webpage\'s overall user experience. They are part of Google\'s Page Experience signals used to rank pages in search results.',
      good: 'Good',
      needsImprovement: 'Needs Improvement',
      poor: 'Poor'
    },
    ar: {
      title: 'مقاييس الويب الأساسية',
      measuring: 'قياس مقاييس الأداء...',
      overallScore: 'درجة الأداء الإجمالية',
      recommendations: 'توصيات',
      aboutTitle: 'عن مقاييس الويب الأساسية',
      aboutDescription: 'مقاييس الويب الأساسية هي مجموعة من العوامل المحددة التي تعتبرها Google مهمة في تجربة المستخدم الشاملة لصفحة الويب. وهي جزء من إشارات تجربة الصفحة التي تستخدمها Google لترتيب الصفحات في نتائج البحث.',
      good: 'جيد',
      needsImprovement: 'بحاجة إلى تحسين',
      poor: 'ضعيف'
    }
  };
  
  // Localized recommendations
  const localizedRecommendations = {
    en: {
      'LCP': 'Optimize Largest Contentful Paint by reducing image sizes and improving server response time.',
      'FID': 'Improve First Input Delay by minimizing long tasks and reducing JavaScript execution time.',
      'CLS': 'Reduce Cumulative Layout Shift by setting explicit dimensions for images and embeds.',
      'FCP': 'Improve First Contentful Paint by optimizing critical CSS and reducing render-blocking resources.',
      'TTFB': 'Reduce Time to First Byte by optimizing server response time and using CDN.'
    },
    ar: {
      'LCP': 'تحسين أكبر عرض للمحتوى عن طريق تقليل أحجام الصور وتحسين وقت استجابة الخادم.',
      'FID': 'تحسين تأخير أول تفاعل عن طريق تقليل المهام الطويلة وتقليل وقت تنفيذ جافا سكريبت.',
      'CLS': 'تقليل التغيير التراكمي للتخطيط عن طريق تعيين أبعاد صريحة للصور والتضمينات.',
      'FCP': 'تحسين أول عرض للمحتوى عن طريق تحسين CSS الحرج وتقليل الموارد التي تمنع العرض.',
      'TTFB': 'تقليل الوقت إلى أول بايت عن طريق تحسين وقت استجابة الخادم واستخدام CDN.'
    }
  };
  
  const t = texts[locale as 'en' | 'ar'];
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    reportWebVitals((metric) => {
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric
      }));
    });
  }, []);
  
  // Calculate score when metrics change
  useEffect(() => {
    if (Object.keys(metrics).length > 0) {
      const performanceScore = getPerformanceScore(metrics);
      
      // Localize recommendations
      if (locale && localizedRecommendations[locale as 'en' | 'ar']) {
        const localizedRecs = performanceScore.recommendations.map(rec => {
          // Find which metric this recommendation is for
          const metricKey = Object.keys(localizedRecommendations[locale as 'en' | 'ar']).find(
            key => rec.includes(key)
          );
          
          return metricKey ? localizedRecommendations[locale as 'en' | 'ar'][metricKey as keyof typeof localizedRecommendations.en] : rec;
        });
        
        performanceScore.recommendations = localizedRecs;
      }
      
      setScore(performanceScore);
    }
  }, [metrics, locale]);
  
  // Get direction based on locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const textAlign = locale === 'ar' ? 'text-right' : 'text-left';
  
  // Show loading state if no metrics yet
  if (Object.keys(metrics).length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-6 ${textAlign}`} dir={dir}>
        <h2 className="text-xl font-semibold mb-4">{t.title}</h2>
        <p className="text-gray-500">{t.measuring}</p>
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${textAlign}`} dir={dir}>
      <h2 className="text-xl font-semibold mb-4">{t.title}</h2>
      
      {/* Overall Score */}
      {score && (
        <div className={`mb-6 p-4 rounded-lg border ${
          score.rating === 'good' 
            ? 'bg-green-100 border-green-200' 
            : score.rating === 'needs-improvement' 
              ? 'bg-yellow-100 border-yellow-200' 
              : 'bg-red-100 border-red-200'
        }`}>
          <div className="flex justify-between items-center">
            <div className="font-semibold">{t.overallScore}</div>
            <div className="text-2xl font-bold">{score.score}/100</div>
          </div>
          <div className="mt-2 text-sm">
            {score.rating === 'good' ? t.good : 
             score.rating === 'needs-improvement' ? t.needsImprovement : 
             t.poor}
          </div>
        </div>
      )}
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {Object.values(metrics).map((metric) => (
          <WebVitalsDisplay key={metric.name} metric={metric} />
        ))}
      </div>
      
      {/* Recommendations */}
      {score && score.recommendations.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">{t.recommendations}</h3>
          <ul className="list-disc pr-5 pl-5 space-y-2">
            {score.recommendations.map((recommendation, index) => (
              <li key={index} className="text-gray-700">{recommendation}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Learn More */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="font-semibold mb-2">{t.aboutTitle}</h3>
        <p className="text-gray-700 mb-2">{t.aboutDescription}</p>
        <div className="text-sm mt-4">
          <div className="flex items-center mb-2">
            <span className="w-8 h-4 inline-block bg-green-100 rounded mr-2"></span>
            <span>{t.good}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="w-8 h-4 inline-block bg-yellow-100 rounded mr-2"></span>
            <span>{t.needsImprovement}</span>
          </div>
          <div className="flex items-center">
            <span className="w-8 h-4 inline-block bg-red-100 rounded mr-2"></span>
            <span>{t.poor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebVitalsDashboard;
