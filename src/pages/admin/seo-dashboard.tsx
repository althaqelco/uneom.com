/**
 * SEO Dashboard Page
 * 
 * A comprehensive dashboard for monitoring and testing SEO implementation
 * across the UNEOM website. This page helps verify that SEO fixes have been
 * properly implemented and addresses issues from the Screaming Frog report.
 * 
 * Now with integrated Core Web Vitals monitoring to track SEO performance metrics.
 * Added Local SEO dashboard for location-specific optimization tracking.
 */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import SEODashboard from '@/components/seo/SEODashboard';
import LocalSEODashboard from '@/components/seo/LocalSEODashboard';
import WebVitalsDashboard from '@/components/performance/WebVitalsDashboard';
import { useUrlValidation } from '@/lib/seo/config-check';
import { applyPerformanceOptimizations } from '@/lib/performance/web-vitals';

const SEODashboardPage: React.FC = () => {
  const router = useRouter();
  const [sampleUrls] = useState<string[]>([
    '/',
    '/about/',
    '/industries/corporate/',
    '/industries/healthcare/',
    '/services/',
    '/locations/riyadh/',
    '/contact/',
    '/ar/',
    '/ar/industries/corporate/',
    '/ar/contact/'
  ]);
  
  const [activeTab, setActiveTab] = useState<'seo' | 'localseo' | 'performance'>('seo');
  
  // URL validation check
  const urlValidation = useUrlValidation();
  
  // Apply performance optimizations on component mount
  useEffect(() => {
    applyPerformanceOptimizations();
  }, []);
  
  // Translations for tabs
  const { locale = 'en' } = router;
  const tabLabels = {
    en: {
      seo: 'SEO Implementation',
      localseo: 'Local SEO',
      performance: 'Performance Metrics'
    },
    ar: {
      seo: 'تطبيق تحسين محركات البحث',
      localseo: 'تحسين البحث المحلي',
      performance: 'مقاييس الأداء'
    }
  };
  
  const t = tabLabels[locale as 'en' | 'ar'];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <EnhancedSEO
        title="SEO Dashboard | UNEOM Admin"
        description="Internal SEO dashboard for monitoring and testing UNEOM website SEO implementation."
        noindex={true}
        nofollow={true}
      />
      
      <h1 className="text-3xl font-bold mb-6">
        SEO Implementation Dashboard
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Test a Different URL</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <select 
            className="form-select p-2 border rounded"
            onChange={(e) => {
              if (e.target.value) {
                router.push(e.target.value);
              }
            }}
            defaultValue=""
          >
            <option value="">Select a sample URL</option>
            {sampleUrls.map((url) => (
              <option key={url} value={url}>{url}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="font-semibold">URL Format Check:</div>
        <div className={`p-2 rounded ${urlValidation.isTrailingSlashValid ? 'bg-green-100' : 'bg-red-100'}`}>
          {urlValidation.isTrailingSlashValid ? 
            'URL has proper trailing slash' : 
            'URL is missing trailing slash'}
        </div>
        <div className={`p-2 rounded mt-2 ${urlValidation.isLocaleValid ? 'bg-green-100' : 'bg-red-100'}`}>
          {urlValidation.isLocaleValid ? 
            `Locale is valid: ${urlValidation.currentLocale}` : 
            'Invalid locale'}
        </div>
        <div className={`p-2 rounded mt-2 ${urlValidation.hasCorrectLocalePath ? 'bg-green-100' : 'bg-red-100'}`}>
          {urlValidation.hasCorrectLocalePath ? 
            'Locale path structure is correct' : 
            'Incorrect locale path structure'}
        </div>
      </div>
      
      {/* Tabs for SEO and Performance */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('seo')}
              className={`py-2 px-4 text-center font-medium text-sm md:text-base ${
                activeTab === 'seo'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.seo}
            </button>
            <button
              onClick={() => setActiveTab('localseo')}
              className={`py-2 px-4 text-center font-medium text-sm md:text-base ${
                activeTab === 'localseo'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.localseo}
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`py-2 px-4 text-center font-medium text-sm md:text-base ${
                activeTab === 'performance'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {t.performance}
            </button>
          </nav>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === 'seo' ? (
          <>
            {/* SEO Dashboard Component */}
            <SEODashboard />
            
            {/* SEO Implementation Status */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">SEO Implementation Status</h2>
              <table className="min-w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border text-left">Error ID</th>
                    <th className="py-2 px-4 border text-left">Description</th>
                    <th className="py-2 px-4 border text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">E001</td>
                    <td className="py-2 px-4 border">robots.txt Blocking</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E002</td>
                    <td className="py-2 px-4 border">Missing H1 Tags</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E003</td>
                    <td className="py-2 px-4 border">Low Text Ratio</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E004</td>
                    <td className="py-2 px-4 border">Title Tag Issues</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E005</td>
                    <td className="py-2 px-4 border">Meta Description Issues</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E006</td>
                    <td className="py-2 px-4 border">Meta Keywords Issues</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E007</td>
                    <td className="py-2 px-4 border">Missing Alt Tags</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E008</td>
                    <td className="py-2 px-4 border">Missing Structured Data</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E009</td>
                    <td className="py-2 px-4 border">Hreflang Implementation</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">E010</td>
                    <td className="py-2 px-4 border">URL Structure Consistency</td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Fixed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : activeTab === 'localseo' ? (
          <>
            {/* Local SEO Dashboard Component */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Saudi Arabia Location SEO</h2>
              <p className="mb-4">
                Monitor the performance of our local SEO efforts for key Saudi Arabian cities.
                This dashboard tracks regional keyword rankings, Google Business Profile metrics,
                and location-specific optimization opportunities.
              </p>
              <LocalSEODashboard />
            </div>
            
            {/* Location Implementation Status */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Local SEO Implementation Status</h2>
              <table className="min-w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border text-left">Location</th>
                    <th className="py-2 px-4 border text-left">Schema Type</th>
                    <th className="py-2 px-4 border text-left">Arabic Page</th>
                    <th className="py-2 px-4 border text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">Riyadh</td>
                    <td className="py-2 px-4 border">LocalBusiness</td>
                    <td className="py-2 px-4 border">
                      <Link href="/ar/locations/riyadh/" className="text-blue-600 hover:underline">
                        /ar/locations/riyadh/
                      </Link>
                    </td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Implemented</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Jeddah</td>
                    <td className="py-2 px-4 border">LocalBusiness</td>
                    <td className="py-2 px-4 border">
                      <span className="text-gray-500">Pending</span>
                    </td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs">Planned</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Dammam</td>
                    <td className="py-2 px-4 border">LocalBusiness</td>
                    <td className="py-2 px-4 border">
                      <span className="text-gray-500">Pending</span>
                    </td>
                    <td className="py-2 px-4 border">
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs">Planned</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            {/* Web Vitals Dashboard Component */}
            <WebVitalsDashboard />
            
            {/* Performance Optimization Guide */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Performance Optimization Guide</h2>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="font-medium text-lg mb-2">Image Optimization</h3>
                  <p className="text-gray-700">All images should be optimized for web using the <code>OptimizedImage</code> component which handles:</p>
                  <ul className="list-disc ml-5 mt-2">
                    <li>WebP format conversion</li>
                    <li>Proper sizing and responsive images</li>
                    <li>Lazy loading</li>
                    <li>Alt text</li>
                  </ul>
                </div>
                
                <div className="border-b pb-3">
                  <h3 className="font-medium text-lg mb-2">JavaScript Optimization</h3>
                  <p className="text-gray-700">Follow these practices to improve JavaScript performance:</p>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Use <code>next/dynamic</code> for code splitting</li>
                    <li>Defer non-critical JavaScript</li>
                    <li>Minimize third-party scripts</li>
                  </ul>
                </div>
                
                <div className="border-b pb-3">
                  <h3 className="font-medium text-lg mb-2">CSS Optimization</h3>
                  <p className="text-gray-700">Optimize CSS delivery with:</p>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Critical CSS inline loading</li>
                    <li>Remove unused CSS</li>
                    <li>Use CSS modules for component styles</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2">Font Optimization</h3>
                  <p className="text-gray-700">Follow these practices for better font loading:</p>
                  <ul className="list-disc ml-5 mt-2">
                    <li>Use <code>font-display: swap</code></li>
                    <li>Preload critical fonts</li>
                    <li>Use variable fonts where possible</li>
                    <li>Self-host fonts instead of using external services</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* SEO Tool Links */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">SEO Tools</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/sitemap.xml" target="_blank" className="text-blue-600 hover:underline">
              View Sitemap XML
            </Link>
          </li>
          <li>
            <Link href="/robots.txt" target="_blank" className="text-blue-600 hover:underline">
              View Robots.txt
            </Link>
          </li>
          <li>
            <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Google Rich Results Test
            </a>
          </li>
          <li>
            <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Google Search Console
            </a>
          </li>
          {/* Performance Tools */}
          <li>
            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              PageSpeed Insights
            </a>
          </li>
          <li>
            <a href="https://web.dev/measure/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Web.dev Measure
            </a>
          </li>
          {/* Local SEO Tools */}
          <li>
            <a href="https://www.google.com/business/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Google Business Profile
            </a>
          </li>
          <li>
            <a href="https://schema.org/LocalBusiness" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LocalBusiness Schema Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SEODashboardPage;


// Export for proper server-side rendering - fixes "2 Word Count / Low Text Ratio" issue
export const getStaticProps = async ({ locale }) => {
  // This ensures content is rendered server-side
  // Additional data fetching could be done here if needed
  return {
    props: {
      // Any props needed for the page
  };
};

