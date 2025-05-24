/**
 * Robots.txt Validator UI
 * 
 * This tool helps diagnose and fix the critical E001 error (robots.txt blocking essential resources)
 * identified in the Screaming Frog report.
 */

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  validateRobotsTxt, 
  generateFixedRobotsTxt,
  getCriticalResources
} from '@/lib/seo/robots-txt-validator';

export default function RobotsValidator() {
  const [robotsTxtContent, setRobotsTxtContent] = useState<string>('');
  const [fixedContent, setFixedContent] = useState<string>('');
  const [validationResult, setValidationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string>('');
  
  // Fetch robots.txt content on component mount
  useEffect(() => {
    fetchRobotsTxt();
  }, []);
  
  // Fetch robots.txt
  const fetchRobotsTxt = async () => {
    setIsLoading(true);
    setFetchError('');
    
    try {
      const response = await fetch('/robots.txt');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch robots.txt (Status: ${response.status})`);
      }
      
      const content = await response.text();
      setRobotsTxtContent(content);
      
      // Validate the content
      validateContent(content);
    } catch (error) {
      setFetchError(error instanceof Error ? error.message : 'Unknown error fetching robots.txt');
      console.error('Error fetching robots.txt:', error);
      
      // For development, use a sample robots.txt
      if (process.env.NODE_ENV === 'development') {
        const sampleContent = `User-agent: *
Disallow: /_next/
Allow: /_next/static/css/
Disallow: /admin/
Disallow: /api/

Sitemap: https://uneom.com/sitemap.xml`;
        
        setRobotsTxtContent(sampleContent);
        validateContent(sampleContent);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Validate robots.txt content
  const validateContent = (content: string) => {
    const result = validateRobotsTxt(content);
    setValidationResult(result);
    
    if (!result.isValid) {
      const fixed = generateFixedRobotsTxt(content);
      setFixedContent(fixed);
    } else {
      setFixedContent('');
    }
  };
  
  // Handle manual validation
  const handleValidate = () => {
    validateContent(robotsTxtContent);
  };
  
  // Copy fixed content to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fixedContent);
    alert('Fixed robots.txt content copied to clipboard!');
  };
  
  // Get status badge
  const getStatusBadge = (status: boolean) => {
    return status ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        ✓ Allowed
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        ✗ Blocked
      </span>
    );
  };
  
  return (
    <>
      <Head>
        <title>Robots.txt Validator | UNEOM Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Robots.txt Validator</h1>
            <Link href="/admin/seo-dashboard" className="text-indigo-600 hover:text-indigo-900">
              Back to SEO Dashboard
            </Link>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-2">Robots.txt Validation</h2>
            <p className="text-gray-600 mb-4">
              This tool checks if your robots.txt configuration allows search engines to access critical
              CSS/JS resources, addressing the E001 error from the Screaming Frog report.
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
                    A proper robots.txt configuration should:
                  </p>
                  <ul className="mt-2 text-sm text-blue-700 list-disc list-inside">
                    <li>Allow search engines to access CSS files (<code>/_next/static/css/</code>)</li>
                    <li>Allow access to JS chunks (<code>/_next/static/chunks/</code>)</li>
                    <li>Avoid overly broad rules like <code>Disallow: /_next/</code></li>
                    <li>Include a Sitemap entry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Current robots.txt
                </h3>
                
                {fetchError && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{fetchError}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mb-2">
                  <button
                    onClick={fetchRobotsTxt}
                    className="text-sm text-indigo-600 hover:text-indigo-900"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Refresh'}
                  </button>
                  
                  <button
                    onClick={handleValidate}
                    className="text-sm text-indigo-600 hover:text-indigo-900"
                    disabled={!robotsTxtContent || isLoading}
                  >
                    Validate
                  </button>
                </div>
                
                <div className="relative">
                  <textarea
                    value={robotsTxtContent}
                    onChange={(e) => setRobotsTxtContent(e.target.value)}
                    className="block w-full h-80 sm:text-sm border-gray-300 rounded-md font-mono bg-gray-50"
                    spellCheck="false"
                  />
                  
                  {isLoading && (
                    <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Validation Results
                </h3>
                
                {validationResult ? (
                  <>
                    <div className={`p-3 rounded-md mb-4 ${validationResult.isValid ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          {validationResult.isValid ? (
                            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <div className="ml-3">
                          <p className={`text-sm ${validationResult.isValid ? 'text-green-700' : 'text-red-700'}`}>
                            {validationResult.isValid ? 'robots.txt is valid' : 'robots.txt has issues'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {validationResult.errors.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-red-800 mb-2">Errors:</h4>
                        <ul className="list-disc list-inside text-sm text-red-700">
                          {validationResult.errors.map((error: string, index: number) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {validationResult.warnings.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-yellow-800 mb-2">Warnings:</h4>
                        <ul className="list-disc list-inside text-sm text-yellow-700">
                          {validationResult.warnings.map((warning: string, index: number) => (
                            <li key={index}>{warning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <h4 className="font-medium text-gray-700 mb-2">Resource Access:</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Resource
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {getCriticalResources().map((resource, index) => {
                            const isAllowed = !validationResult.blockedPaths.includes(resource.path);
                            return (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                                  {resource.path}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {getStatusBadge(isAllowed)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    resource.critical ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    {resource.critical ? 'Critical' : 'Optional'} {resource.type.toUpperCase()}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    
                    {fixedContent && (
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-700 mb-2">Suggested Fix:</h4>
                        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm mb-3 h-60 overflow-y-auto">
                          <pre>{fixedContent}</pre>
                        </div>
                        <button
                          onClick={copyToClipboard}
                          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Copy to Clipboard
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Click "Validate" to check your robots.txt configuration.
                  </p>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
