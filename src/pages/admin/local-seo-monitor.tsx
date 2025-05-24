/**
 * Local SEO Performance Monitor Dashboard
 * 
 * This admin page provides detailed monitoring and analytics for:
 * - Location-specific keyword rankings
 * - Google Business Profile performance metrics
 * - Regional search volume and traffic trends
 * - Local backlink analysis
 * - City-specific conversion metrics
 */

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LocalSEODashboard from '@/components/seo/LocalSEODashboard';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import { applyPerformanceOptimizations } from '@/lib/performance/web-vitals';

// City selector component
const CitySelector = ({ 
  selectedCity, 
  onChange, 
  cities 
}: { 
  selectedCity: string;
  onChange: (city: string) => void;
  cities: {id: string; nameEn: string; nameAr: string}[];
}) => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  return (
    <div className="mb-6">
      <label htmlFor="city-select" className="block text-sm font-medium text-gray-700 mb-2">
        {isArabic ? 'اختر المدينة' : 'Select City'}
      </label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        <option value="all">{isArabic ? 'جميع المدن' : 'All Cities'}</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {isArabic ? city.nameAr : city.nameEn}
          </option>
        ))}
      </select>
    </div>
  );
};

// Date range selector component
const DateRangeSelector = ({ 
  range, 
  onChange 
}: { 
  range: string;
  onChange: (range: string) => void;
}) => {
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  const ranges = [
    { id: '7d', labelEn: 'Last 7 Days', labelAr: 'آخر 7 أيام' },
    { id: '30d', labelEn: 'Last 30 Days', labelAr: 'آخر 30 يوم' },
    { id: '90d', labelEn: 'Last 90 Days', labelAr: 'آخر 90 يوم' },
    { id: '6m', labelEn: 'Last 6 Months', labelAr: 'آخر 6 أشهر' },
    { id: '1y', labelEn: 'Last Year', labelAr: 'العام الماضي' },
  ];
  
  return (
    <div className="mb-6">
      <label htmlFor="date-range" className="block text-sm font-medium text-gray-700 mb-2">
        {isArabic ? 'النطاق الزمني' : 'Date Range'}
      </label>
      <select
        id="date-range"
        value={range}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        {ranges.map((r) => (
          <option key={r.id} value={r.id}>
            {isArabic ? r.labelAr : r.labelEn}
          </option>
        ))}
      </select>
    </div>
  );
};

// Main dashboard page component
const LocalSEOMonitorPage: React.FC = () => {
  // State management
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('30d');
  const [activeTab, setActiveTab] = useState<'overview' | 'rankings' | 'profiles' | 'backlinks'>('overview');
  
  const { locale = 'en' } = useRouter();
  const isArabic = locale === 'ar';
  
  // City data
  const cities = [
    { id: 'riyadh', nameEn: 'Riyadh', nameAr: 'الرياض' },
    { id: 'jeddah', nameEn: 'Jeddah', nameAr: 'جدة' },
    { id: 'dammam', nameEn: 'Dammam', nameAr: 'الدمام' }
  ];
  
  // Apply performance optimizations on component mount
  useEffect(() => {
    applyPerformanceOptimizations();
  }, []);
  
  // Tab labels
  const tabLabels = {
    en: {
      overview: 'Overview',
      rankings: 'Keyword Rankings',
      profiles: 'Business Profiles',
      backlinks: 'Local Backlinks'
    },
    ar: {
      overview: 'نظرة عامة',
      rankings: 'تصنيفات الكلمات الرئيسية',
      profiles: 'ملفات الأعمال',
      backlinks: 'الروابط الخلفية المحلية'
    }
  };
  
  // Tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <LocalSEODashboard />;
      case 'rankings':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {isArabic ? 'تصنيفات الكلمات الرئيسية المحلية' : 'Local Keyword Rankings'}
            </h2>
            <p className="text-gray-500 mb-4">
              {isArabic 
                ? 'تتبع تصنيفات محركات البحث للكلمات الرئيسية المستهدفة في كل مدينة'
                : 'Track search engine rankings for targeted keywords in each city'
              }
            </p>
            <div className="overflow-hidden border border-gray-200 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'الكلمة الرئيسية' : 'Keyword'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'المدينة' : 'City'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'الموضع' : 'Position'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'التغيير' : 'Change'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'حجم البحث' : 'Search Volume'}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Sample ranking data - would be replaced with real data from API */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {isArabic ? 'زي موحد للشركات الرياض' : 'corporate uniforms riyadh'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'الرياض' : 'Riyadh'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">+2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">210</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {isArabic ? 'زي طبي جدة' : 'medical uniforms jeddah'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'جدة' : 'Jeddah'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">+3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">180</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {isArabic ? 'ملابس قطاع النفط الدمام' : 'oil sector uniforms dammam'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'الدمام' : 'Dammam'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">+1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'profiles':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {isArabic ? 'ملفات الأعمال المحلية' : 'Local Business Profiles'}
            </h2>
            <p className="text-gray-500 mb-4">
              {isArabic 
                ? 'مراقبة أداء ملفات جوجل للأعمال في المدن الرئيسية'
                : 'Monitor Google Business Profile performance in major cities'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cities.map((city) => (
                <div key={city.id} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-2">
                    {isArabic ? city.nameAr : city.nameEn}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isArabic ? 'المشاهدات' : 'Views'}</span>
                      <span className="font-medium">547</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isArabic ? 'البحث' : 'Searches'}</span>
                      <span className="font-medium">312</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isArabic ? 'المكالمات' : 'Calls'}</span>
                      <span className="font-medium">48</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isArabic ? 'الاتجاهات' : 'Directions'}</span>
                      <span className="font-medium">96</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{isArabic ? 'التقييمات' : 'Reviews'}</span>
                      <span className="font-medium">4.7 ★ (28)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'backlinks':
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              {isArabic ? 'الروابط الخلفية المحلية' : 'Local Backlinks'}
            </h2>
            <p className="text-gray-500 mb-4">
              {isArabic 
                ? 'تحليل الروابط الخلفية الواردة من مصادر محلية في كل منطقة'
                : 'Analysis of backlinks from local sources in each region'
              }
            </p>
            <div className="overflow-hidden border border-gray-200 rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'المصدر' : 'Source'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'المدينة' : 'City'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'نوع الرابط' : 'Link Type'}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isArabic ? 'القوة' : 'Strength'}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      riyadhchamber.sa
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'الرياض' : 'Riyadh'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'دليل الأعمال' : 'Business Directory'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {isArabic ? 'مرتفع' : 'High'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      jeddahchamber.org.sa
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'جدة' : 'Jeddah'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'دليل الأعمال' : 'Business Directory'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {isArabic ? 'مرتفع' : 'High'}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      easternchamber.org.sa
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'الدمام' : 'Dammam'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {isArabic ? 'دليل الأعمال' : 'Business Directory'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {isArabic ? 'مرتفع' : 'High'}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  const t = tabLabels[isArabic ? 'ar' : 'en'];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <EnhancedSEO
        title="Local SEO Monitor | UNEOM Admin"
        description="Internal dashboard for monitoring local SEO performance across Saudi regions."
        noindex={true}
        nofollow={true}
      />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          {isArabic ? 'مراقبة تحسين محركات البحث المحلية' : 'Local SEO Monitor'}
        </h1>
        
        <Link href="/admin/seo-dashboard" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          {isArabic ? 'العودة إلى لوحة تحكم تحسين محركات البحث' : 'Back to SEO Dashboard'}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CitySelector
          selectedCity={selectedCity}
          onChange={setSelectedCity}
          cities={cities}
        />
        
        <DateRangeSelector
          range={dateRange}
          onChange={setDateRange}
        />
        
        <div className="flex items-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
          >
            {isArabic ? 'تحديث البيانات' : 'Refresh Data'}
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-4 text-center font-medium text-sm md:text-base ${
                activeTab === 'overview'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.overview}
            </button>
            <button
              onClick={() => setActiveTab('rankings')}
              className={`py-2 px-4 text-center font-medium text-sm md:text-base ${
                activeTab === 'rankings'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.rankings}
            </button>
            <button
              onClick={() => setActiveTab('profiles')}
              className={`py-2 px-4 text-center font-medium text-sm md:text-base ${
                activeTab === 'profiles'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.profiles}
            </button>
            <button
              onClick={() => setActiveTab('backlinks')}
              className={`py-2 px-4 text-center font-medium text-sm md:text-base ${
                activeTab === 'backlinks'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.backlinks}
            </button>
          </nav>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="mb-8">
        {renderTabContent()}
      </div>
      
      {/* Export Actions */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-8">
        <h2 className="text-lg font-medium mb-4">
          {isArabic ? 'إجراءات التقارير' : 'Report Actions'}
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            {isArabic ? 'تصدير تقرير شامل (PDF)' : 'Export Comprehensive Report (PDF)'}
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            {isArabic ? 'تصدير بيانات التصنيفات (CSV)' : 'Export Rankings Data (CSV)'}
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            {isArabic ? 'جدولة تقارير أسبوعية' : 'Schedule Weekly Reports'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalSEOMonitorPage;


// Export for proper server-side rendering - fixes "2 Word Count / Low Text Ratio" issue
export const getStaticProps = async ({ locale }) => {
  // This ensures content is rendered server-side
  // Additional data fetching could be done here if needed
  return {
    props: {
      // Any props needed for the page
    }
  };
};

