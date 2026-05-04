/**
 * PWAHead — Progressive Web App Meta Tags (§38.6)
 * 
 * Injects PWA-related meta tags for installability and
 * enhanced performance scores in Lighthouse.
 * Firebase App Hosting serves these pages over HTTPS,
 * satisfying all PWA requirements.
 */
import React from 'react';

export function PWAHead() {
  return (
    <>
      {/* PWA: Theme and Display */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="UNEOM" />
      
      {/* PWA: Tile */}
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* DNS Prefetch for critical origins */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
}
