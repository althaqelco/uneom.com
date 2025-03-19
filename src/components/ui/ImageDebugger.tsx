"use client";

import React, { useState, useEffect } from 'react';

/**
 * ImageDebugger component
 * 
 * A development tool that helps identify image loading issues on the page.
 * Only visible in development mode or when explicitly enabled.
 */
const ImageDebugger: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageStats, setImageStats] = useState<{
    total: number;
    loaded: number;
    failed: number;
    issues: Array<{ src: string; issue: string }>;
  }>({
    total: 0,
    loaded: 0,
    failed: 0,
    issues: []
  });

  // Only show in development or when forced via localStorage
  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    const isForced = localStorage.getItem('enableImageDebugger') === 'true';
    
    if (isDev || isForced) {
      // Add keyboard shortcut (Ctrl+Shift+I) to toggle debugger
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
          e.preventDefault();
          setIsVisible(prev => !prev);
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  // Analyze images on the page
  useEffect(() => {
    if (!isVisible) return;
    
    const analyzeImages = () => {
      const images = document.querySelectorAll('img');
      const stats = {
        total: images.length,
        loaded: 0,
        failed: 0,
        issues: [] as Array<{ src: string; issue: string }>
      };
      
      images.forEach(img => {
        // Check if image is loaded
        if (img.complete) {
          if (img.naturalWidth === 0) {
            stats.failed++;
            stats.issues.push({
              src: img.src,
              issue: 'Failed to load (naturalWidth = 0)'
            });
          } else {
            stats.loaded++;
            
            // Check for other potential issues
            if (img.naturalWidth < 50 || img.naturalHeight < 50) {
              stats.issues.push({
                src: img.src,
                issue: `Suspiciously small dimensions (${img.naturalWidth}x${img.naturalHeight})`
              });
            }
            
            if (!img.alt) {
              stats.issues.push({
                src: img.src,
                issue: 'Missing alt text'
              });
            }
            
            // Check if image is stretched
            const imgStyle = window.getComputedStyle(img);
            const displayWidth = parseFloat(imgStyle.width);
            const displayHeight = parseFloat(imgStyle.height);
            
            if (
              img.naturalWidth > 0 &&
              displayWidth > 0 &&
              (
                Math.abs(displayWidth / img.naturalWidth - 1) > 0.5 ||
                Math.abs(displayHeight / img.naturalHeight - 1) > 0.5
              )
            ) {
              stats.issues.push({
                src: img.src,
                issue: `Image stretched (natural: ${img.naturalWidth}x${img.naturalHeight}, display: ${Math.round(displayWidth)}x${Math.round(displayHeight)})`
              });
            }
          }
        } else {
          // Image still loading
          stats.issues.push({
            src: img.src,
            issue: 'Still loading'
          });
        }
      });
      
      setImageStats(stats);
    };
    
    analyzeImages();
    
    // Re-analyze when images load or fail
    const handleImageEvent = () => {
      analyzeImages();
    };
    
    document.addEventListener('load', handleImageEvent, true);
    document.addEventListener('error', handleImageEvent, true);
    
    return () => {
      document.removeEventListener('load', handleImageEvent, true);
      document.removeEventListener('error', handleImageEvent, true);
    };
  }, [isVisible]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '5px 10px',
          fontSize: '12px',
          cursor: 'pointer',
          zIndex: 9999,
          display: process.env.NODE_ENV === 'development' ? 'block' : 'none'
        }}
      >
        Debug Images
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        width: '350px',
        maxHeight: '80vh',
        overflowY: 'auto',
        background: 'rgba(30, 30, 30, 0.9)',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '12px',
        padding: '15px',
        borderRadius: '5px',
        zIndex: 10000,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, fontSize: '14px' }}>Image Debugger</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          ✕
        </button>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <div>Total Images: {imageStats.total}</div>
        <div style={{ color: '#4caf50' }}>Loaded: {imageStats.loaded}</div>
        <div style={{ color: '#f44336' }}>Failed: {imageStats.failed}</div>
      </div>
      
      <div>
        <h4 style={{ margin: '10px 0', fontSize: '13px' }}>Issues ({imageStats.issues.length})</h4>
        {imageStats.issues.length > 0 ? (
          <ul style={{ margin: 0, padding: '0 0 0 20px' }}>
            {imageStats.issues.map((issue, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <div style={{ wordBreak: 'break-all' }}>
                  <span style={{ color: '#ffeb3b' }}>{issue.issue}</span>
                  <br />
                  <span style={{ fontSize: '10px', opacity: 0.8 }}>{issue.src}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ color: '#4caf50' }}>No issues detected!</div>
        )}
      </div>
      
      <div style={{ marginTop: '15px', fontSize: '11px', opacity: 0.7 }}>
        Press Ctrl+Shift+I to toggle this panel
      </div>
    </div>
  );
};

export default ImageDebugger; 