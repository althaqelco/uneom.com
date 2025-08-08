'use client';

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  pageViews: number;
  uniqueVisitors: number;
  conversionRate: number;
  avgSessionDuration: number;
  topKeywords: { keyword: string; rank: number; traffic: number }[];
  goalCompletions: number;
  bounceRate: number;
}

interface LocationMetrics {
  [key: string]: {
    views: number;
    conversions: number;
    revenue: number;
  };
}

// Simple Card components
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-4 pb-2 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-4 pt-0 ${className}`}>
    {children}
  </div>
);

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [locationMetrics, setLocationMetrics] = useState<LocationMetrics>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching real analytics data
    const fetchAnalytics = async () => {
      try {
        // This would connect to Google Analytics 4, Search Console, etc.
        const mockMetrics: PerformanceMetrics = {
          pageViews: 15420,
          uniqueVisitors: 8750,
          conversionRate: 12.8,
          avgSessionDuration: 245, // seconds
          topKeywords: [
            { keyword: 'أزياء طبية السعودية', rank: 2, traffic: 1850 },
            { keyword: 'يونيفورم طيران', rank: 1, traffic: 1420 },
            { keyword: 'سكرابز طبية الرياض', rank: 3, traffic: 980 },
            { keyword: 'أزياء مهنية جدة', rank: 2, traffic: 750 },
            { keyword: 'uniform supplier Saudi', rank: 1, traffic: 650 }
          ],
          goalCompletions: 1120,
          bounceRate: 28.5
        };

        const mockLocationMetrics: LocationMetrics = {
          riyadh: { views: 6200, conversions: 156, revenue: 245000 },
          jeddah: { views: 4800, conversions: 98, revenue: 189000 },
          dammam: { views: 2100, conversions: 45, revenue: 87000 },
          other: { views: 2320, conversions: 32, revenue: 56000 }
        };

        setMetrics(mockMetrics);
        setLocationMetrics(mockLocationMetrics);
        setIsLoading(false);
      } catch (error) {
        console.error('Analytics fetch error:', error);
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  const calculatePerformanceScore = (): number => {
    if (!metrics) return 0;
    
    const conversionScore = Math.min(metrics.conversionRate * 8, 100);
    const engagementScore = Math.min((metrics.avgSessionDuration / 180) * 100, 100);
    const bounceScore = Math.max(100 - metrics.bounceRate * 2, 0);
    
    return Math.round((conversionScore + engagementScore + bounceScore) / 3);
  };

  const getPerformanceColor = (score: number): string => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isLoading) {
    return (
      <div className="space-y-6 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!metrics) {
    return <div className="p-6 text-center text-gray-500">فشل في تحميل البيانات</div>;
  }

  const performanceScore = calculatePerformanceScore();

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          لوحة قيادة الأداء | Performance Dashboard
        </h1>
        <p className="text-gray-600">مراقبة شاملة لأداء موقع يونيوم وفعالية استراتيجية SEO</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">آخر تحديث: {new Date().toLocaleString('ar-SA')}</span>
          </div>
          <div className={`text-2xl font-bold ${getPerformanceColor(performanceScore)}`}>
            نتيجة الأداء: {performanceScore}/100
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">مشاهدات الصفحة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {metrics.pageViews.toLocaleString('ar-SA')}
            </div>
            <p className="text-xs text-green-600 mt-1">↗ +24% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">زوار فريدون</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {metrics.uniqueVisitors.toLocaleString('ar-SA')}
            </div>
            <p className="text-xs text-green-600 mt-1">↗ +18% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">معدل التحويل</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {metrics.conversionRate}%
            </div>
            <p className="text-xs text-green-600 mt-1">↗ +3.2% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">اكتمال الأهداف</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {metrics.goalCompletions.toLocaleString('ar-SA')}
            </div>
            <p className="text-xs text-green-600 mt-1">↗ +35% من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>

      {/* SEO Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>أداء الكلمات المفتاحية | Keyword Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {metrics.topKeywords.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{item.keyword}</div>
                    <div className="text-sm text-gray-500">
                      المرتبة {item.rank} • {item.traffic.toLocaleString('ar-SA')} زيارة
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded text-sm font-bold ${
                    item.rank <= 3 ? 'bg-green-100 text-green-800' : 
                    item.rank <= 10 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    #{item.rank}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الأداء حسب المواقع | Performance by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(locationMetrics).map(([location, data]) => (
                <div key={location} className="p-3 bg-gray-50 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium capitalize">
                      {location === 'riyadh' ? 'الرياض' : 
                       location === 'jeddah' ? 'جدة' : 
                       location === 'dammam' ? 'الدمام' : 'أخرى'}
                    </span>
                    <span className="text-sm text-gray-500">
                      {data.views.toLocaleString('ar-SA')} مشاهدة
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">التحويلات: </span>
                      <span className="font-bold text-green-600">{data.conversions}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">الإيرادات: </span>
                      <span className="font-bold text-blue-600">
                        {data.revenue.toLocaleString('ar-SA')} ر.س
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>متوسط مدة الجلسة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-indigo-600">
              {Math.floor(metrics.avgSessionDuration / 60)}:{(metrics.avgSessionDuration % 60).toString().padStart(2, '0')}
            </div>
            <p className="text-sm text-gray-500 mt-1">دقائق وثواني</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>معدل الارتداد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">
              {metrics.bounceRate}%
            </div>
            <p className="text-sm text-green-600 mt-1">↓ -5.2% تحسن</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>نقاط الجودة الإجمالية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${getPerformanceColor(performanceScore)}`}>
              {performanceScore}/100
            </div>
            <p className="text-sm text-gray-500 mt-1">بناءً على جميع المؤشرات</p>
          </CardContent>
        </Card>
      </div>

      {/* Actionable Insights */}
      <Card>
        <CardHeader>
          <CardTitle>توصيات التحسين | Optimization Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-green-800">أداء ممتاز في الكلمات المفتاحية</h4>
                <p className="text-sm text-gray-600">
                  كلمة "يونيفورم طيران" في المرتبة الأولى. اعمل على تعزيز المحتوى المرتبط بها.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-yellow-800">فرصة تحسين في جدة</h4>
                <p className="text-sm text-gray-600">
                  صفحة جدة تحتاج المزيد من التحسين للوصول لمستوى أداء الرياض.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-medium text-blue-800">زيادة التركيز على التحويلات</h4>
                <p className="text-sm text-gray-600">
                  معدل التحويل ممتاز (12.8%) - يمكن تحسينه أكثر عبر تحسين صفحات CTA.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 