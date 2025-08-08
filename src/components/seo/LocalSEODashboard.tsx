/**
 * Local SEO Dashboard Component
 * 
 * This component provides monitoring and analytics for local SEO performance
 * across different Saudi regions. It tracks:
 * 
 * - Local keyword rankings
 * - Google My Business insights
 * - Local backlink profiles
 * - Regional performance metrics
 * - Local competitor analysis
 */

import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import styles from './SEODashboard.module.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Location types we track
type LocationCode = 'riyadh' | 'jeddah' | 'dammam';

interface LocalSEOMetrics {
  locationCode: LocationCode;
  locationName: string;
  locationNameAr: string;
  organicTraffic: number;
  localKeywordRankings: {
    keyword: string;
    position: number;
    changeLastMonth: number;
  }[];
  googleBusinessMetrics: {
    views: number;
    searches: number;
    actions: number;
    direction_requests: number;
  };
  localBacklinks: number;
  reviewScore: number;
  reviewCount: number;
}

// Sample data - in a real implementation, this would come from an API
const sampleLocalSEOData: LocalSEOMetrics[] = [
  {
    locationCode: 'riyadh',
    locationName: 'Riyadh',
    locationNameAr: 'الرياض',
    organicTraffic: 1250,
    localKeywordRankings: [
      { keyword: 'uniform store riyadh', position: 3, changeLastMonth: 2 },
      { keyword: 'corporate uniforms riyadh', position: 2, changeLastMonth: 1 },
      { keyword: 'healthcare uniforms saudi', position: 5, changeLastMonth: 0 },
      { keyword: 'متجر زي موحد الرياض', position: 1, changeLastMonth: 3 },
      { keyword: 'يونيفورم شركات الرياض', position: 2, changeLastMonth: 1 }
    ],
    googleBusinessMetrics: {
      views: 542,
      searches: 387,
      actions: 97,
      direction_requests: 63
    },
    localBacklinks: 87,
    reviewScore: 4.7,
    reviewCount: 32
  },
  {
    locationCode: 'jeddah',
    locationName: 'Jeddah',
    locationNameAr: 'جدة',
    organicTraffic: 980,
    localKeywordRankings: [
      { keyword: 'uniform store jeddah', position: 4, changeLastMonth: 1 },
      { keyword: 'corporate uniforms jeddah', position: 3, changeLastMonth: 2 },
      { keyword: 'hotel uniforms jeddah', position: 2, changeLastMonth: 0 },
      { keyword: 'متجر زي موحد جدة', position: 2, changeLastMonth: 2 },
      { keyword: 'يونيفورم فنادق جدة', position: 1, changeLastMonth: 3 }
    ],
    googleBusinessMetrics: {
      views: 421,
      searches: 298,
      actions: 76,
      direction_requests: 47
    },
    localBacklinks: 62,
    reviewScore: 4.5,
    reviewCount: 28
  },
  {
    locationCode: 'dammam',
    locationName: 'Dammam',
    locationNameAr: 'الدمام',
    organicTraffic: 640,
    localKeywordRankings: [
      { keyword: 'uniform store dammam', position: 5, changeLastMonth: 1 },
      { keyword: 'industrial uniforms eastern province', position: 2, changeLastMonth: 3 },
      { keyword: 'oil company uniforms saudi', position: 3, changeLastMonth: -1 },
      { keyword: 'متجر زي موحد الدمام', position: 3, changeLastMonth: 1 },
      { keyword: 'يونيفورم شركات النفط', position: 2, changeLastMonth: 2 }
    ],
    googleBusinessMetrics: {
      views: 312,
      searches: 187,
      actions: 52,
      direction_requests: 31
    },
    localBacklinks: 45,
    reviewScore: 4.3,
    reviewCount: 17
  }
];

// Historical data for trends
const historicalTrafficData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Riyadh',
      data: [830, 920, 1050, 1120, 1180, 1250],
      borderColor: 'rgba(53, 162, 235, 0.8)',
      backgroundColor: 'rgba(53, 162, 235, 0.2)'},
    {
      label: 'Jeddah',
      data: [720, 750, 810, 870, 920, 980],
      borderColor: 'rgba(75, 192, 192, 0.8)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)'},
    {
      label: 'Dammam',
      data: [380, 420, 510, 550, 590, 640],
      borderColor: 'rgba(255, 159, 64, 0.8)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)'}
  ]
};

const LocalSEODashboard: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationCode>('riyadh');
  const [localSEOData, setLocalSEOData] = useState<LocalSEOMetrics[]>(sampleLocalSEOData);
  const [isArabic, setIsArabic] = useState(false);
  
  // Get the currently selected location data
  const currentLocationData = localSEOData.find(location => location.locationCode === selectedLocation);
  
  // Function to toggle language for demo purposes
  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };
  
  // In a real implementation, we would fetch this data from an API
  useEffect(() => {
    // Simulate data fetching
    // In a real application, this would be an API call
    const fetchLocalSEOData = async () => {
      // For now, we're using our sample data
      setLocalSEOData(sampleLocalSEOData);
    };
    
    fetchLocalSEOData();
  }, []);
  
  // Prepare chart data for Google Business metrics
  const googleBusinessChartData = {
    labels: [
      isArabic ? 'المشاهدات' : 'Views',
      isArabic ? 'عمليات البحث' : 'Searches',
      isArabic ? 'الإجراءات' : 'Actions',
      isArabic ? 'طلبات الاتجاهات' : 'Direction Requests'
    ],
    datasets: [
      {
        label: currentLocationData?.locationName || '',
        data: currentLocationData ? [
          currentLocationData.googleBusinessMetrics.views,
          currentLocationData.googleBusinessMetrics.searches,
          currentLocationData.googleBusinessMetrics.actions,
          currentLocationData.googleBusinessMetrics.direction_requests
        ] : [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1
      }
    ]
  };
  
  // Options for the bar chart
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const},
      title: {
        display: true,
        text: isArabic ? 'مقاييس جوجل للأعمال' : 'Google Business Metrics'}}};
  
  // Options for the line chart
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const},
      title: {
        display: true,
        text: isArabic ? 'اتجاهات حركة المرور العضوية' : 'Organic Traffic Trends'}}};
  
  return (
    <div className={styles.dashboardContainer} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className={styles.dashboardHeader}>
        <h2>{isArabic ? 'لوحة تحكم تحسين محركات البحث المحلية' : 'Local SEO Dashboard'}</h2>
        <div className={styles.controls}>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value as LocationCode)}
            className={styles.locationSelector}
          >
            {localSEOData.map(location => (
              <option key={location.locationCode} value={location.locationCode}>
                {isArabic ? location.locationNameAr : location.locationName}
              </option>
            ))}
          </select>
          <button onClick={toggleLanguage} className={styles.langToggle}>
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
      
      {currentLocationData && (
        <div className={styles.metricsContainer}>
          <div className={styles.metricsRow}>
            <div className={`${styles.metricCard} ${styles.highlight}`}>
              <h3>{isArabic ? 'حركة المرور العضوية' : 'Organic Traffic'}</h3>
              <div className={styles.metricValue}>{currentLocationData.organicTraffic}</div>
              <div className={styles.metricLabel}>
                {isArabic ? 'الزيارات الشهرية' : 'Monthly visits'}
              </div>
            </div>
            
            <div className={styles.metricCard}>
              <h3>{isArabic ? 'الروابط الخلفية المحلية' : 'Local Backlinks'}</h3>
              <div className={styles.metricValue}>{currentLocationData.localBacklinks}</div>
              <div className={styles.metricLabel}>
                {isArabic ? 'إجمالي الروابط' : 'Total links'}
              </div>
            </div>
            
            <div className={styles.metricCard}>
              <h3>{isArabic ? 'متوسط تقييم المراجعات' : 'Average Review Rating'}</h3>
              <div className={styles.metricValue}>
                {currentLocationData.reviewScore}
                <span className={styles.starRating}>★</span>
              </div>
              <div className={styles.metricLabel}>
                {isArabic 
                  ? `من ${currentLocationData.reviewCount} مراجعات` 
                  : `from ${currentLocationData.reviewCount} reviews`}
              </div>
            </div>
          </div>
          
          <div className={styles.chartSection}>
            <div className={styles.chartContainer}>
              <h3>{isArabic ? 'مقاييس نشاط العمل' : 'Business Activity Metrics'}</h3>
              <Bar data={googleBusinessChartData} options={barChartOptions} />
            </div>
            
            <div className={styles.chartContainer}>
              <h3>{isArabic ? 'اتجاهات المرور عبر الزمن' : 'Traffic Trends Over Time'}</h3>
              <Line data={historicalTrafficData} options={lineChartOptions} />
            </div>
          </div>
          
          <div className={styles.keywordSection}>
            <h3>{isArabic ? 'تصنيفات الكلمات الرئيسية المحلية' : 'Local Keyword Rankings'}</h3>
            <table className={styles.keywordTable}>
              <thead>
                <tr>
                  <th>{isArabic ? 'الكلمة الرئيسية' : 'Keyword'}</th>
                  <th>{isArabic ? 'الموضع' : 'Position'}</th>
                  <th>{isArabic ? 'التغيير' : 'Change'}</th>
                </tr>
              </thead>
              <tbody>
                {currentLocationData.localKeywordRankings.map((keyword, index) => (
                  <tr key={index}>
                    <td>{keyword.keyword}</td>
                    <td>{keyword.position}</td>
                    <td className={
                      keyword.changeLastMonth > 0 
                        ? styles.positive 
                        : keyword.changeLastMonth < 0 
                          ? styles.negative 
                          : ''
                    }>
                      {keyword.changeLastMonth > 0 && '+'}
                      {keyword.changeLastMonth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className={styles.recommendationsSection}>
            <h3>{isArabic ? 'التوصيات' : 'Recommendations'}</h3>
            <ul className={styles.recommendationsList}>
              <li>
                {isArabic 
                  ? 'قم بإضافة المزيد من الصور المحلية إلى صفحة المنطقة الخاصة بك مع تحسين النص البديل'
                  : 'Add more local images to your location page with optimized alt text'}
              </li>
              <li>
                {isArabic
                  ? 'تشجيع المزيد من المراجعات من العملاء المحليين'
                  : 'Encourage more reviews from local customers'}
              </li>
              <li>
                {isArabic
                  ? 'تحسين هيكل الروابط الداخلية لصفحات المواقع المحلية'
                  : 'Improve internal linking structure for location pages'}
              </li>
              <li>
                {isArabic
                  ? 'تحسين محتوى صفحة الأسئلة الشائعة للبحث المحلي'
                  : 'Optimize FAQ page content for local search'}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocalSEODashboard;
