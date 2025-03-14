'use client';

import React, { useEffect } from 'react';

/**
 * CSPHeaders Component
 * 
 * Dynamically adds Content Security Policy meta tags to allow images and fonts 
 * from various sources, especially for Vercel deployment
 */
const CSPHeaders: React.FC = () => {
  useEffect(() => {
    // Check if the application is running on Vercel or production domain
    const isVercel = typeof window !== 'undefined' && 
      (window.location.hostname.includes('vercel.app') || 
       window.location.hostname === 'uneom.com' ||
       window.location.hostname.endsWith('.uneom.com'));
    
    // Remove any existing CSP meta tags to avoid duplicates
    document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(el => {
      el.remove();
    });
    
    // Create CSP meta tag for images
    const imageCspMeta = document.createElement('meta');
    imageCspMeta.httpEquiv = 'Content-Security-Policy';
    imageCspMeta.content = `
      img-src 'self' data: blob: 
      https://uneom-com.vercel.app 
      https://*.vercel.app 
      https://vercel.app 
      https://vercel.com 
      https://*.vercel.com 
      https://uneom.com 
      https://*.uneom.com 
      https://*.githubusercontent.com 
      https://github.com
      https://assets.vercel.com
      https://lh3.googleusercontent.com;
    `;
    
    // Create CSP meta tag for fonts
    const fontCspMeta = document.createElement('meta');
    fontCspMeta.httpEquiv = 'Content-Security-Policy';
    fontCspMeta.content = `
      font-src 'self' data: 
      https://uneom-com.vercel.app 
      https://*.vercel.app 
      https://vercel.app 
      https://vercel.com 
      https://*.vercel.com 
      https://uneom.com 
      https://*.uneom.com;
    `;
    
    // Create CSP meta tag for media
    const mediaCspMeta = document.createElement('meta');
    mediaCspMeta.httpEquiv = 'Content-Security-Policy';
    mediaCspMeta.content = `
      media-src 'self' 
      https://uneom-com.vercel.app 
      https://*.vercel.app 
      https://vercel.app 
      https://vercel.com 
      https://*.vercel.com 
      https://uneom.com 
      https://*.uneom.com;
    `;
    
    // Apply more permissive policies only in production environments
    if (isVercel) {
      document.head.appendChild(imageCspMeta);
      document.head.appendChild(fontCspMeta);
      document.head.appendChild(mediaCspMeta);
      
      // Add meta tag to ensure resources load properly
      const resourceHintsMeta = document.createElement('meta');
      resourceHintsMeta.name = 'resource-hints';
      resourceHintsMeta.content = 'preconnect,prefetch,preload';
      document.head.appendChild(resourceHintsMeta);
      
      // Add DNS prefetch for critical domains
      const domains = [
        'uneom-com.vercel.app',
        'vercel.app',
        'vercel.com',
        'uneom.com'
      ];
      
      domains.forEach(domain => {
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = `https://${domain}`;
        document.head.appendChild(dnsPrefetch);
        
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = `https://${domain}`;
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
      });
    }
    
    return () => {
      // Cleanup when component unmounts
      if (isVercel) {
        document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(el => {
          el.remove();
        });
        document.querySelectorAll('link[rel="dns-prefetch"], link[rel="preconnect"]').forEach(el => {
          el.remove();
        });
      }
    };
  }, []);
  
  // This component doesn't render anything visually
  return null;
};

export default CSPHeaders; 