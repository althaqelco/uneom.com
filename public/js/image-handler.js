// Image Handler JS - May 2025
// Handles image loading, fallbacks, and error recovery

(function() {
  'use strict';
  
  // Configuration
  const CONFIG = {
    fallbackImage: '/images/default-placeholder.jpg',
    retryAttempts: 3,
    retryDelay: 1000,
    loadingClass: 'image-loading',
    errorClass: 'image-error'
  };
  
  // Image loading utilities
  const ImageHandler = {
    // Test if an image URL is accessible
    testImage: function(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    },
    
    // Generate alternative URLs for an image
    generateAlternatives: function(originalSrc) {
      const alternatives = [];
      const baseUrl = window.location.origin;
      
      // Original URL
      alternatives.push(originalSrc);
      
      // With base URL
      if (!originalSrc.startsWith('http')) {
        alternatives.push(baseUrl + (originalSrc.startsWith('/') ? '' : '/') + originalSrc);
      }
      
      // Next.js static path
      if (originalSrc.includes('/images/')) {
        const filename = originalSrc.split('/').pop();
        alternatives.push('/_next/static/images/' + filename);
      }
      
      // Fallback image
      alternatives.push(CONFIG.fallbackImage);
      
      return alternatives;
    },
    
    // Fix a single image element
    fixImage: function(img, retryCount = 0) {
      if (img.getAttribute('data-fixed') === 'true') {
        return Promise.resolve();
      }
      
      const originalSrc = img.getAttribute('src') || img.getAttribute('data-src');
      if (!originalSrc) {
        return Promise.resolve();
      }
      
      img.classList.add(CONFIG.loadingClass);
      
      const alternatives = this.generateAlternatives(originalSrc);
      
      // Try each alternative URL
      const tryAlternatives = (index = 0) => {
        if (index >= alternatives.length) {
          img.classList.remove(CONFIG.loadingClass);
          img.classList.add(CONFIG.errorClass);
          return Promise.reject('All alternatives failed');
        }
        
        return this.testImage(alternatives[index])
          .then(workingSrc => {
            img.src = workingSrc;
            img.setAttribute('data-fixed', 'true');
            img.classList.remove(CONFIG.loadingClass);
            img.classList.remove(CONFIG.errorClass);
            return workingSrc;
          })
          .catch(() => tryAlternatives(index + 1));
      };
      
      return tryAlternatives();
    },
    
    // Fix all images on the page
    fixAllImages: function() {
      const images = document.querySelectorAll('img:not([data-fixed="true"])');
      const promises = Array.from(images).map(img => this.fixImage(img));
      
      return Promise.allSettled(promises);
    },
    
    // Set up error handlers for future images
    setupErrorHandlers: function() {
      // Handle images that fail to load
      document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
          this.fixImage(e.target);
        }
      }, true);
      
      // Handle dynamically added images
      if (window.MutationObserver) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === 1) { // Element node
                const images = node.tagName === 'IMG' ? [node] : node.querySelectorAll('img');
                Array.from(images).forEach(img => this.fixImage(img));
              }
            });
          });
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    },
    
    // Initialize the image handler
    init: function() {
      // Fix existing images
      this.fixAllImages();
      
      // Set up handlers for future images
      this.setupErrorHandlers();
      
      // Re-check images periodically
      setInterval(() => {
        this.fixAllImages();
      }, 30000); // Every 30 seconds
    }
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ImageHandler.init());
  } else {
    ImageHandler.init();
  }
  
  // Make available globally for debugging
  window.ImageHandler = ImageHandler;
  
})();