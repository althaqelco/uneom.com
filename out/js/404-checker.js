// 404 Checker JS - Development Only
// Monitors and reports 404 errors for debugging

(function() {
  'use strict';
  
  if (typeof window === 'undefined' || window.location.hostname === 'uneom.com') {
    return; // Only run in development
  }
  
  const Checker404 = {
    errors: [],
    
    // Log 404 errors
    log404: function(url, type = 'unknown') {
      const error = {
        url: url,
        type: type,
        timestamp: new Date().toISOString(),
        page: window.location.pathname
      };
      
      this.errors.push(error);
      console.warn(`404 Error [${type}]:`, url);
      
      // Store in localStorage for persistence
      try {
        const stored = JSON.parse(localStorage.getItem('404-errors') || '[]');
        stored.push(error);
        localStorage.setItem('404-errors', JSON.stringify(stored.slice(-100))); // Keep last 100
      } catch (e) {
        // Ignore localStorage errors
      }
    },
    
    // Check if a resource exists
    checkResource: function(url) {
      return fetch(url, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }
          return true;
        })
        .catch(() => false);
    },
    
    // Monitor network requests
    monitorRequests: function() {
      // Override fetch to monitor API calls
      const originalFetch = window.fetch;
      window.fetch = function(...args) {
        return originalFetch.apply(this, args)
          .then(response => {
            if (!response.ok && response.status === 404) {
              Checker404.log404(args[0], 'fetch');
            }
            return response;
          });
      };
      
      // Monitor image loading errors
      document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
          Checker404.log404(e.target.src, 'image');
        } else if (e.target.tagName === 'LINK') {
          Checker404.log404(e.target.href, 'stylesheet');
        } else if (e.target.tagName === 'SCRIPT') {
          Checker404.log404(e.target.src, 'script');
        }
      }, true);
    },
    
    // Check common resources
    checkCommonResources: function() {
      const resources = [
        '/favicon.ico',
        '/manifest.json',
        '/robots.txt',
        '/sitemap.xml',
        '/images/og-image.jpg',
        '/images/default-placeholder.jpg'
      ];
      
      resources.forEach(resource => {
        this.checkResource(resource).then(exists => {
          if (!exists) {
            this.log404(resource, 'common-resource');
          }
        });
      });
    },
    
    // Generate report
    generateReport: function() {
      const stored = JSON.parse(localStorage.getItem('404-errors') || '[]');
      const allErrors = [...this.errors, ...stored];
      
      // Group by type
      const grouped = allErrors.reduce((acc, error) => {
        acc[error.type] = acc[error.type] || [];
        acc[error.type].push(error);
        return acc;
      }, {});
      
      console.group('404 Error Report');
      Object.keys(grouped).forEach(type => {
        console.group(`${type} (${grouped[type].length} errors)`);
        grouped[type].forEach(error => {
          console.log(`${error.timestamp}: ${error.url} (on ${error.page})`);
        });
        console.groupEnd();
      });
      console.groupEnd();
      
      return grouped;
    },
    
    // Clear stored errors
    clearErrors: function() {
      this.errors = [];
      localStorage.removeItem('404-errors');
      console.log('404 errors cleared');
    },
    
    // Initialize
    init: function() {
      this.monitorRequests();
      this.checkCommonResources();
      
      // Make available globally
      window.Checker404 = this;
      
      console.log('404 Checker initialized. Use Checker404.generateReport() to see errors.');
    }
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Checker404.init());
  } else {
    Checker404.init();
  }
  
})();