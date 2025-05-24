/**
 * Image Handler Script
 * 
 * This script improves image loading and error handling across the site.
 * It provides fallback mechanisms for broken images and optimizes image loading.
 */

(function() {
  // Default fallback image
  const DEFAULT_FALLBACK = '/images/default-placeholder.jpg';
  
  // Preload the fallback image
  const preloadFallback = new Image();
  preloadFallback.src = DEFAULT_FALLBACK;
  
  // Create a fallback SVG data URL for extreme cases
  const FALLBACK_SVG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQ4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQwIiBoZWlnaHQ9IjQ4MCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjMyMCIgeT0iMjQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODgiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
  
  // Use WeakMap and WeakSet to track images instead of data attributes
  const originalSrcs = new WeakMap();
  const processedImages = new WeakSet();
  const attemptCounts = new WeakMap();
  
  // Process all images on the page
  function processImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Skip already processed images
      if (processedImages.has(img)) return;
      
      // Mark as processed
      processedImages.add(img);
      
      // Store original src in WeakMap
      originalSrcs.set(img, img.src);
      attemptCounts.set(img, 0);
      
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading') && !isInViewport(img)) {
        img.loading = 'lazy'; // Use property instead of setAttribute
      }
      
      // Handle image errors
      img.onerror = function() {
        handleImageError(img);
      };
      
      // Check if image is already broken
      if (img.complete && img.naturalWidth === 0) {
        handleImageError(img);
      }
    });
  }
  
  // Handle image loading errors
  function handleImageError(img) {
    // Skip if no src
    if (!img.src) return;
    
    // Get original source
    const originalSrc = originalSrcs.get(img) || img.src;
    const attempts = attemptCounts.get(img) || 0;
    
    if (attempts >= 5) {
      // Too many attempts, use fallback
      img.src = DEFAULT_FALLBACK;
      return;
    }
    
    // Increment attempt count
    attemptCounts.set(img, attempts + 1);
    
    // Try different variations
    const variations = generatePathVariations(originalSrc);
    tryImageVariations(img, variations, 0);
  }
  
  // Generate different path variations to try
  function generatePathVariations(src) {
    if (!src || src.startsWith('data:')) return [DEFAULT_FALLBACK];
    
    const variations = [];
    const baseUrl = window.location.origin;
    
    // Original path
    variations.push(src);
    
    // With and without leading slash
    if (src.startsWith('/')) {
      variations.push(baseUrl + src);
      variations.push(src.substring(1));
    } else {
      variations.push('/' + src);
      variations.push(baseUrl + '/' + src);
    }
    
    // Try in _next/static/images folder
    const filename = src.split('/').pop();
    if (filename) {
      variations.push('/_next/static/images/' + filename);
      variations.push('/images/' + filename);
    }
    
    // Add fallback as last resort
    variations.push(DEFAULT_FALLBACK);
    variations.push(FALLBACK_SVG);
    
    return [...new Set(variations)]; // Remove duplicates
  }
  
  // Try each variation until one works
  function tryImageVariations(img, variations, index) {
    if (index >= variations.length) {
      // All variations failed, use SVG fallback
      img.src = FALLBACK_SVG;
      return;
    }
    
    const testImg = new Image();
    testImg.onload = function() {
      // This variation worked
      img.src = variations[index];
    };
    
    testImg.onerror = function() {
      // Try next variation
      tryImageVariations(img, variations, index + 1);
    };
    
    testImg.src = variations[index];
    
    // If image is already cached, onload might not fire
    if (testImg.complete) {
      if (testImg.naturalWidth > 0) {
        img.src = variations[index];
      } else {
        tryImageVariations(img, variations, index + 1);
      }
    }
  }
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Clean up any data attributes that might already exist
  function cleanupDataAttributes() {
    document.querySelectorAll('[data-processed], [data-original-src], [data-fixed]').forEach(el => {
      el.removeAttribute('data-processed');
      el.removeAttribute('data-original-src');
      el.removeAttribute('data-fixed');
    });
  }
  
  // Process images on DOM ready and after load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      cleanupDataAttributes();
      processImages();
    });
  } else {
    cleanupDataAttributes();
    processImages();
  }
  
  window.addEventListener('load', () => {
    cleanupDataAttributes();
    processImages();
  });
  
  // Process new images when they're added to the DOM
  const observer = new MutationObserver(mutations => {
    let hasNewImages = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeName === 'IMG') {
            hasNewImages = true;
          } else if (node.querySelectorAll) {
            const images = node.querySelectorAll('img');
            if (images.length > 0) {
              hasNewImages = true;
            }
          }
        });
      }
    });
    
    if (hasNewImages) {
      processImages();
    }
  });
  
  // Start observing the document
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  
  // Make functions available globally
  window.imageHandler = {
    processImages,
    handleImageError,
    tryImageVariations,
    cleanupDataAttributes
  };
  
  // Make fallback available globally
  window.fallbackImageDataUrl = FALLBACK_SVG;
})();

// Fix for Next.js image paths
function fixNextJsImagePaths() {
  try {
    // Look for Next.js images with _next/image paths
    const nextImages = document.querySelectorAll('img[src^="/_next/image"]');
    const processedImages = new WeakSet();
    
    nextImages.forEach(img => {
      // Skip already processed images
      if (processedImages.has(img)) return;
      processedImages.add(img);
      
      // Extract the actual image path
      const src = img.src;
      if (!src) return;
      
      // Extract the url parameter
      try {
        const url = new URL(src);
        const imagePath = url.searchParams.get('url');
        
        if (imagePath) {
          const testImg = new Image();
          testImg.onload = function() {
            // Replace with the direct path if it loads
            img.src = imagePath;
          };
          testImg.src = imagePath;
        }
      } catch (e) {
        console.error('Error parsing image URL:', e);
      }
    });
  } catch (e) {
    console.error('Error fixing Next.js image paths:', e);
  }
}

// Execute the next.js image fix on load
window.addEventListener('load', fixNextJsImagePaths);
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(fixNextJsImagePaths, 1000); // Delay to allow Next.js to complete initial loading
});

// Helper function to create image placeholder
function getPlaceholder(element) {
  const width = element.width || 300;
  const height = element.height || 200;
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#f0f0f0"/>
    <text x="${width/2}" y="${height/2}" font-family="Arial" font-size="14" 
      text-anchor="middle" fill="#888">Image not available</text>
  </svg>`;
} 