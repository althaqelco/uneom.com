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
  
  // Track loaded images to avoid duplicate processing
  const processedImages = new Set();
  
  // Process all images on the page
  function processImages() {
    const images = document.querySelectorAll('img:not([data-processed="true"])');
    
    images.forEach(img => {
      // Skip already processed images
      if (processedImages.has(img)) return;
      processedImages.add(img);
      
      // Mark as processed
      img.setAttribute('data-processed', 'true');
      
      // Store original src
      const originalSrc = img.getAttribute('src');
      if (originalSrc) {
        img.setAttribute('data-original-src', originalSrc);
      }
      
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading') && !isInViewport(img)) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Handle image errors
      img.onerror = function() {
        handleImageError(img);
      };
      
      // Check if image is already broken (for images that failed before script loaded)
      if (img.complete && img.naturalWidth === 0) {
        handleImageError(img);
      }
    });
  }
  
  // Handle image loading errors
  function handleImageError(img) {
    // Get original source
    const originalSrc = img.getAttribute('data-original-src') || img.getAttribute('src');
    
    // Try with different path variations
    const variations = generatePathVariations(originalSrc);
    
    // Try each variation
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
      variations.push(baseUrl + src.substring(1));
    } else {
      variations.push('/' + src);
      variations.push(baseUrl + '/' + src);
    }
    
    // Try in _next/static/images folder
    const filename = src.split('/').pop();
    variations.push('/_next/static/images/' + filename);
    variations.push(baseUrl + '/_next/static/images/' + filename);
    
    // Try in public/images folder
    variations.push('/images/' + filename);
    variations.push(baseUrl + '/images/' + filename);
    
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
      img.setAttribute('data-fixed', 'true');
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
        img.setAttribute('data-fixed', 'true');
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
  
  // Process images on load and after DOM changes
  window.addEventListener('load', processImages);
  window.addEventListener('DOMContentLoaded', processImages);
  
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
  
  // Run initial processing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processImages);
  } else {
    processImages();
  }
  
  // Make functions available globally
  window.imageHandler = {
    processImages,
    handleImageError,
    tryImageVariations
  };
})();

// Image Handler - Utility to fix broken images and provide fallbacks
document.addEventListener('DOMContentLoaded', () => {
  // Find all images in the document
  const images = document.querySelectorAll('img');
  
  // Handle each image
  images.forEach(img => {
    // Skip images that are already loaded
    if (img.complete && img.naturalHeight !== 0) return;
    
    // Store original source
    const originalSrc = img.src;
    
    // Add error handler to replace broken images
    img.onerror = () => {
      // Try different path variations
      const filename = originalSrc.split('/').pop();
      const paths = [
        `/images/${filename}`,
        `/images/products/${filename}`,
        `/images/default-placeholder.jpg`
      ];
      
      // Try each path until one works
      tryNextPath(img, paths, 0);
      
      // Log the error for debugging
      console.warn(`Image load failed: ${originalSrc}`);
    };
    
    // Add data attribute for tracking
    img.setAttribute('data-original-src', originalSrc);
    
    // Force reload to trigger error handler if needed
    if (!img.complete) {
      img.src = originalSrc;
    }
  });
  
  // Try loading image with different paths
  function tryNextPath(img, paths, index) {
    if (index >= paths.length) {
      // All paths failed, use inline SVG as ultimate fallback
      img.insertAdjacentHTML('afterend', `
        <svg xmlns="http://www.w3.org/2000/svg" width="${img.width || 24}" height="${img.height || 24}" 
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" class="image-fallback">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      `);
      img.style.display = 'none';
      return;
    }
    
    // Try next path
    const newSrc = paths[index];
    const testImg = new Image();
    
    testImg.onload = () => {
      img.src = newSrc;
      img.setAttribute('data-fallback-used', 'true');
      img.style.display = '';
    };
    
    testImg.onerror = () => {
      tryNextPath(img, paths, index + 1);
    };
    
    testImg.src = newSrc;
  }
  
  // Fix Next.js Image component path issues
  fixNextJsImagePaths();
});

// Fix malformed Next.js Image src paths
function fixNextJsImagePaths() {
  // Find all Next.js image elements
  const nextImages = document.querySelectorAll('[data-nimg]');
  
  nextImages.forEach(img => {
    const src = img.src;
    
    // Fix common malformed template paths
    if (src && src.includes('undefined')) {
      const fixedSrc = src.replace('undefined', '');
      img.src = fixedSrc;
      console.info(`Fixed malformed image path: ${src} → ${fixedSrc}`);
    }
    
    // Add error handler for Next.js images
    img.onerror = () => {
      const placeholderSrc = '/images/default-placeholder.jpg';
      console.warn(`Next.js image load failed: ${img.src}, using placeholder`);
      img.src = placeholderSrc;
    };
  });
}

// Script para manejar errores de carga de imágenes
document.addEventListener('DOMContentLoaded', function() {
  // Elegir un placeholder según el tipo de imagen
  function getPlaceholder(element) {
    const className = element.className || '';
    
    // Placeholders específicos según la clase CSS
    if (className.includes('product')) {
      return '/images/defaults/default-product.jpg';
    } else if (className.includes('blog')) {
      return '/images/defaults/default-blog.jpg';
    } else if (className.includes('avatar') || className.includes('team')) {
      return '/images/defaults/default-team.jpg';
    } else if (className.includes('industry')) {
      return '/images/defaults/default-industry.jpg';
    } else if (className.includes('service')) {
      return '/images/defaults/default-service.jpg';
    } else {
      // Placeholder genérico
      return '/images/defaults/default-placeholder.jpg';
    }
  }

  // Manejar errores en todas las imágenes
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      if (!this.dataset.failedOnce) {
        this.dataset.failedOnce = true;
        this.src = getPlaceholder(this);
      }
    });
    
    // Intentar cargar la imagen actual
    if (img.complete && img.naturalHeight === 0) {
      img.src = getPlaceholder(img);
    }
  });
}); 