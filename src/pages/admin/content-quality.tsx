/**
 * Content Quality Dashboard
 * 
 * This dashboard provides tools to monitor and fix the "2 Word Count / Low Text Ratio" issue (E003)
 * identified in the Screaming Frog report. It helps ensure that all pages have sufficient
 * server-side rendered content for proper search engine indexing.
 */

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  analyzeServerRenderedContent, 
  generateContentFixRecommendation 
} from '@/lib/seo/ssr-verification';

// Interface for page data
interface PageData {
  url: string;
  title: string;
  wordCount: number;
  textToHtmlRatio: number;
  hasH1Tag: boolean;
  hasMetaDescription: boolean;
  contentScore: number;
  locale: string;
}

// Sample page routes to test
const samplePageRoutes = [
  { path: '/', title: 'Home' },
  { path: '/industries/corporate/', title: 'Corporate Uniforms' },
  { path: '/industries/healthcare/', title: 'Healthcare Uniforms' },
  { path: '/services/design/', title: 'Design Services' },
  { path: '/about/', title: 'About Us' },
  { path: '/contact/', title: 'Contact Us' },
  { path: '/ar/', title: 'Home (Arabic)' },
  { path: '/ar/industries/corporate/', title: 'Corporate Uniforms (Arabic)' },
  { path: '/ar/about/', title: 'About Us (Arabic)' }
];

const ContentQualityDashboard: React.FC = () => {
  const [pageData, setPageData] = useState<PageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState<PageData | null>(null);
  const [recommendations, setRecommendations] = useState<string>('');
  const router = useRouter();
  
  // Fetch and analyze page content
  useEffect(() => {
    const analyzePages = async () => {
      setIsLoading(true);
      
      try {
        // In a real implementation, this would fetch actual page content
        // Here we're using a simulated approach for demonstration
        const results = await Promise.all(
          samplePageRoutes.map(async (route) => {
            // In production, this would make an actual fetch request to the page
            // For this demo, we'll simulate with some sample data
            const response = await fetch(route.path);
            const html = await response.text();
            
            const analysis = analyzeServerRenderedContent(html);
            
            return {
              url: route.path,
              title: route.title,
              wordCount: analysis.wordCount,
              textToHtmlRatio: analysis.textToHtmlRatio,
              hasH1Tag: analysis.hasH1Tag,
              hasMetaDescription: analysis.hasMetaDescription,
              contentScore: analysis.contentScore,
              locale: route.path.startsWith('/ar/') ? 'ar' : 'en'
            };
          })
        );
        
        setPageData(results);
      } catch (error) {
        console.error('Error analyzing pages:', error);
        
        // Fallback to simulated data if fetch fails in development
        if (process.env.NODE_ENV === 'development') {
          const simulatedData: PageData[] = samplePageRoutes.map((route, index) => {
            // Generate varied simulated data for testing UI
            const wordCount = [120, 450, 280, 350, 180, 290, 110, 400, 240][index % 9];
            const textRatio = [4.2, 9.8, 6.5, 8.2, 5.1, 7.3, 3.8, 8.9, 5.7][index % 9];
            const hasH1 = [true, true, false, true, true, true, false, true, true][index % 9];
            const hasMeta = [true, true, true, false, true, true, false, true, false][index % 9];
            
            // Calculate score based on the same algorithm as the utility
            let score = 0;
            score += Math.min(wordCount / 15, 40);
            score += Math.min(textRatio * 3, 30);
            if (hasH1) score += 15;
            if (hasMeta) score += 15;
            
            return {
              url: route.path,
              title: route.title,
              wordCount,
              textToHtmlRatio: textRatio,
              hasH1Tag: hasH1,
              hasMetaDescription: hasMeta,
              contentScore: Math.round(score),
              locale: route.path.startsWith('/ar/') ? 'ar' : 'en'
            };
          });
          
          setPageData(simulatedData);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    analyzePages();
  }, []);
  
  // Generate recommendations for a selected page
  const getRecommendations = async (page: PageData) => {
    setSelectedPage(page);
    
    try {
      // In production, we would fetch the actual page content here
      const response = await fetch(page.url);
      const html = await response.text();
      
      const recommendation = generateContentFixRecommendation(html);
      setRecommendations(recommendation);
    } catch (error) {
      console.error('Error generating recommendations:', error);
      
      // Generate simulated recommendations if fetch fails
      let recommendation = 'To improve the page content for search engines:\n\n';
      
      if (page.wordCount < 300) {
        recommendation += `- Add more textual content (currently ${page.wordCount} words, recommend at least 300)\n`;
      }
      
      if (page.textToHtmlRatio < 10) {
        recommendation += `- Improve text-to-HTML ratio (currently ${page.textToHtmlRatio.toFixed(2)}%, recommend at least 10%)\n`;
      }
      
      if (!page.hasH1Tag) {
        recommendation += '- Add an H1 tag with the main page title\n';
      }
      
      if (!page.hasMetaDescription) {
        recommendation += '- Add a meta description tag\n';
      }
      
      recommendation += `\nCurrent stats:\n- Word count: ${page.wordCount}\n- Text-to-HTML ratio: ${page.textToHtmlRatio.toFixed(2)}%\n- Content score: ${page.contentScore}/100`;
      
      setRecommendations(recommendation);
    }
  };
  
  // Get status color based on content score
  const getStatusColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };
  
  return (
    <>
      <Head>
        <title>Content Quality Dashboard | UNEOM Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Content Quality Dashboard</h1>
            <Link href="/admin/seo-dashboard" className="text-indigo-600 hover:text-indigo-900">
              Back to SEO Dashboard
            </Link>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-2">Page Content Analysis</h2>
            <p className="text-gray-600 mb-4">
              This dashboard helps identify pages with insufficient server-rendered content,
              which can lead to the "2 Word Count / Low Text Ratio" issue (E003) identified in the Screaming Frog report.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    For best SEO results, each page should have:
                  </p>
                  <ul className="mt-2 text-sm text-blue-700 list-disc list-inside">
                    <li>At least 300 words of content</li>
                    <li>Text-to-HTML ratio of at least 10%</li>
                    <li>A unique H1 tag</li>
                    <li>A meta description</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white shadow rounded-lg overflow-hidden">
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                  <p>Analyzing page content...</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Page
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Locale
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Word Count
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Text Ratio
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          H1
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Meta Desc
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Score
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pageData.map((page, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <Link href={page.url} className="hover:text-indigo-600" target="_blank">
                              {page.title}
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {page.locale === 'ar' ? 'Arabic' : 'English'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className={page.wordCount >= 300 ? 'text-green-600' : 'text-red-600'}>
                              {page.wordCount}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className={page.textToHtmlRatio >= 10 ? 'text-green-600' : 'text-red-600'}>
                              {page.textToHtmlRatio.toFixed(1)}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {page.hasH1Tag ? (
                              <span className="text-green-600">✓</span>
                            ) : (
                              <span className="text-red-600">✗</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {page.hasMetaDescription ? (
                              <span className="text-green-600">✓</span>
                            ) : (
                              <span className="text-red-600">✗</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(page.contentScore)}`}>
                              {page.contentScore}/100
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button
                              onClick={() => getRecommendations(page)}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Analyze
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Recommendations
                </h3>
                
                {selectedPage ? (
                  <>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700">{selectedPage.title}</h4>
                      <p className="text-sm text-gray-500">{selectedPage.url}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-md">
                      <pre className="text-sm whitespace-pre-wrap">{recommendations}</pre>
                    </div>
                    
                    <div className="mt-6">
                      <Link
                        href={`/admin/edit?path=${encodeURIComponent(selectedPage.url)}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Edit Page Content
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Select a page to see recommendations</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContentQualityDashboard;


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

