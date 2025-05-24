import React, { useState, useEffect } from 'react';
import { verifyAllSEOFixes } from '@/lib/seo/verify-seo';
import styles from './SEODashboard.module.css';

interface SEOVerificationResult {
  robotsTxt: {
    success: boolean;
    blockedResources: string[];
    message: string;
  };
  h1Tag: {
    success: boolean;
    count: number;
    message: string;
  };
  textContent: {
    success: boolean;
    wordCount: number;
    textRatio: number;
    message: string;
    recommendations: string[];
  };
  metaTags: {
    title: { success: boolean; value: string; message: string; };
    description: { success: boolean; value: string; message: string; };
    keywords: { success: boolean; value: string; message: string; };
    canonical: { success: boolean; value: string; message: string; };
    hreflang: { success: boolean; values: string[]; message: string; };
    ogTags: { success: boolean; count: number; message: string; };
  };
  imageAltTags: {
    success: boolean;
    totalImages: number;
    missingAlt: number;
    emptyAlt: number;
    message: string;
    imagesWithIssues: {src: string; issue: string}[];
  };
  structuredData: {
    success: boolean;
    schemas: string[];
    message: string;
  };
  urlConsistency: {
    success: boolean;
    hasTrailingSlash: boolean;
    message: string;
  };
  overallSuccess: boolean;
  passedChecks: number;
  totalChecks: number;
  percentComplete: number;
}

const SEODashboard: React.FC = () => {
  const [results, setResults] = useState<SEOVerificationResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      runSEOChecks();
    }
  }, []);

  const runSEOChecks = async () => {
    setLoading(true);
    try {
      const verificationResults = await verifyAllSEOFixes();
      setResults(verificationResults);
    } catch (error) {
      console.error('Error running SEO checks:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (success: boolean) => {
    return success 
      ? '✅' 
      : '❌';
  };

  const getStatusClass = (success: boolean) => {
    return success 
      ? styles.success 
      : styles.error;
  };

  if (loading) {
    return (
      <div className={styles.dashboard}>
        <h2>SEO Dashboard</h2>
        <div className={styles.loading}>
          <p>Running SEO checks...</p>
          <div className={styles.spinner}></div>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className={styles.dashboard}>
        <h2>SEO Dashboard</h2>
        <div className={styles.error}>
          <p>Failed to run SEO checks. Please try again.</p>
          <button onClick={runSEOChecks} className={styles.button}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <h2>SEO Dashboard</h2>
      <p className={styles.pageUrl}>
        <strong>Analyzing:</strong> {currentUrl}
      </p>

      <div className={styles.scoreCard}>
        <div className={styles.scoreCircle} style={{ 
          background: `conic-gradient(#4CAF50 ${results.percentComplete}%, #f3f3f3 0)` 
        }}>
          <span className={styles.scoreValue}>{results.percentComplete}%</span>
        </div>
        <div className={styles.scoreDetails}>
          <p><strong>SEO Health Score</strong></p>
          <p>{results.passedChecks} of {results.totalChecks} checks passed</p>
          <p className={results.overallSuccess ? styles.success : styles.warning}>
            {results.overallSuccess 
              ? 'All SEO checks passed! 🎉' 
              : 'Some SEO issues need attention'}
          </p>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'overview' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('overview')}>
          Overview
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'content' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('content')}>
          Content
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'technical' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('technical')}>
          Technical SEO
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'images' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('images')}>
          Images
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'overview' && (
          <div className={styles.overviewTab}>
            <h3>SEO Check Summary</h3>
            <div className={styles.checksGrid}>
              <div className={`${styles.checkItem} ${getStatusClass(results.h1Tag.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.h1Tag.success)}</span>
                <span>H1 Tag</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.textContent.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.textContent.success)}</span>
                <span>Text Content</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.metaTags.title.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.metaTags.title.success)}</span>
                <span>Title Tag</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.metaTags.description.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.metaTags.description.success)}</span>
                <span>Meta Description</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.metaTags.canonical.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.metaTags.canonical.success)}</span>
                <span>Canonical URL</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.metaTags.hreflang.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.metaTags.hreflang.success)}</span>
                <span>Hreflang Tags</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.imageAltTags.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.imageAltTags.success)}</span>
                <span>Image Alt Tags</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.structuredData.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.structuredData.success)}</span>
                <span>Structured Data</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.urlConsistency.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.urlConsistency.success)}</span>
                <span>URL Consistency</span>
              </div>
              <div className={`${styles.checkItem} ${getStatusClass(results.robotsTxt.success)}`}>
                <span className={styles.statusIcon}>{getStatusIcon(results.robotsTxt.success)}</span>
                <span>Robots.txt</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className={styles.contentTab}>
            <div className={styles.contentSection}>
              <h3>H1 Tag</h3>
              <p className={getStatusClass(results.h1Tag.success)}>
                {results.h1Tag.message}
              </p>
            </div>

            <div className={styles.contentSection}>
              <h3>Text Content</h3>
              <p className={getStatusClass(results.textContent.success)}>
                {results.textContent.message}
              </p>
              <div className={styles.contentMetrics}>
                <div className={styles.metric}>
                  <span>Word Count</span>
                  <strong>{results.textContent.wordCount}</strong>
                </div>
                <div className={styles.metric}>
                  <span>Text Ratio</span>
                  <strong>{(results.textContent.textRatio * 100).toFixed(2)}%</strong>
                </div>
              </div>
              {results.textContent.recommendations.length > 0 && (
                <div className={styles.recommendations}>
                  <h4>Recommendations:</h4>
                  <ul>
                    {results.textContent.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className={styles.contentSection}>
              <h3>Meta Tags</h3>
              
              <div className={styles.metaTagItem}>
                <h4>Title</h4>
                <p className={getStatusClass(results.metaTags.title.success)}>
                  {results.metaTags.title.message}
                </p>
                <div className={styles.metaTagValue}>
                  "{results.metaTags.title.value}"
                </div>
              </div>
              
              <div className={styles.metaTagItem}>
                <h4>Description</h4>
                <p className={getStatusClass(results.metaTags.description.success)}>
                  {results.metaTags.description.message}
                </p>
                <div className={styles.metaTagValue}>
                  "{results.metaTags.description.value}"
                </div>
              </div>
              
              <div className={styles.metaTagItem}>
                <h4>Keywords</h4>
                <p className={getStatusClass(results.metaTags.keywords.success)}>
                  {results.metaTags.keywords.message}
                </p>
                <div className={styles.metaTagValue}>
                  "{results.metaTags.keywords.value}"
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className={styles.technicalTab}>
            <div className={styles.technicalSection}>
              <h3>Canonical URL</h3>
              <p className={getStatusClass(results.metaTags.canonical.success)}>
                {results.metaTags.canonical.message}
              </p>
              {results.metaTags.canonical.value && (
                <div className={styles.techValue}>
                  <code>{results.metaTags.canonical.value}</code>
                </div>
              )}
            </div>

            <div className={styles.technicalSection}>
              <h3>Hreflang Tags</h3>
              <p className={getStatusClass(results.metaTags.hreflang.success)}>
                {results.metaTags.hreflang.message}
              </p>
              {results.metaTags.hreflang.values.length > 0 && (
                <div className={styles.tagsList}>
                  {results.metaTags.hreflang.values.map((value, index) => (
                    <span key={index} className={styles.tag}>{value}</span>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.technicalSection}>
              <h3>Structured Data</h3>
              <p className={getStatusClass(results.structuredData.success)}>
                {results.structuredData.message}
              </p>
              {results.structuredData.schemas.length > 0 && (
                <div className={styles.tagsList}>
                  {results.structuredData.schemas.map((schema, index) => (
                    <span key={index} className={styles.tag}>{schema}</span>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.technicalSection}>
              <h3>URL Consistency</h3>
              <p className={getStatusClass(results.urlConsistency.success)}>
                {results.urlConsistency.message}
              </p>
            </div>

            <div className={styles.technicalSection}>
              <h3>Robots.txt</h3>
              <p className={getStatusClass(results.robotsTxt.success)}>
                {results.robotsTxt.message}
              </p>
              {results.robotsTxt.blockedResources.length > 0 && (
                <div className={styles.blockedResources}>
                  <h4>Blocked Resources:</h4>
                  <ul>
                    {results.robotsTxt.blockedResources.map((resource, index) => (
                      <li key={index}>{resource}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'images' && (
          <div className={styles.imagesTab}>
            <div className={styles.imageSection}>
              <h3>Image Alt Tags</h3>
              <p className={getStatusClass(results.imageAltTags.success)}>
                {results.imageAltTags.message}
              </p>
              
              <div className={styles.imageMetrics}>
                <div className={styles.metric}>
                  <span>Total Images</span>
                  <strong>{results.imageAltTags.totalImages}</strong>
                </div>
                <div className={styles.metric}>
                  <span>Missing Alt</span>
                  <strong>{results.imageAltTags.missingAlt}</strong>
                </div>
                <div className={styles.metric}>
                  <span>Empty Alt</span>
                  <strong>{results.imageAltTags.emptyAlt}</strong>
                </div>
              </div>
              
              {results.imageAltTags.imagesWithIssues.length > 0 && (
                <div className={styles.imageIssues}>
                  <h4>Images with Issues:</h4>
                  <div className={styles.imageIssuesList}>
                    {results.imageAltTags.imagesWithIssues.map((img, index) => (
                      <div key={index} className={styles.imageIssueItem}>
                        <div className={styles.imageThumb}>
                          <img 
                            src={img.src.startsWith('/') ? img.src : `/${img.src}`} 
                            alt="Preview" 
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/placeholder.jpg';
                            }}
                          />
                        </div>
                        <div className={styles.imageIssueDetails}>
                          <p className={styles.imageIssuePath}>{img.src}</p>
                          <p className={styles.imageIssueType}>{img.issue}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button onClick={runSEOChecks} className={styles.button}>
          Re-run SEO Checks
        </button>
      </div>
    </div>
  );
};

export default SEODashboard;
