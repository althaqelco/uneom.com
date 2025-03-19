/**
 * 404 Checker Script
 * 
 * This script monitors all image and link requests on the page and logs any 404 errors
 * to help developers identify broken links and images during development.
 * 
 * Only runs in development mode.
 */

// 404 Checker - Development utility to identify missing resources
(function() {
  // Only run in development mode
  if (window.location.hostname !== 'localhost' && 
      !window.location.hostname.includes('127.0.0.1') &&
      !window.location.hostname.includes('.local')) {
    return;
  }
  
  console.log('🔍 404 Checker initialized - Monitoring for missing resources');
  
  // Create UI container for errors
  const errorContainer = document.createElement('div');
  errorContainer.id = '404-checker-container';
  errorContainer.style.cssText = `
    position: fixed;
    bottom: 0;
    right: 0;
    width: 300px;
    max-height: 300px;
    overflow-y: auto;
    background-color: rgba(255, 230, 230, 0.95);
    border-top-left-radius: 5px;
    box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.1);
    font-family: monospace;
    font-size: 12px;
    z-index: 10000;
    padding: 10px;
    display: none;
  `;
  
  const errorHeader = document.createElement('div');
  errorHeader.innerHTML = '<h3 style="margin: 0 0 10px 0; display: flex; justify-content: space-between;">404 Checker <button id="404-checker-close" style="background: none; border: none; cursor: pointer;">×</button></h3>';
  errorContainer.appendChild(errorHeader);
  
  const errorList = document.createElement('ul');
  errorList.style.cssText = `
    margin: 0;
    padding: 0 0 0 20px;
    list-style-type: square;
  `;
  errorContainer.appendChild(errorList);
  
  document.body.appendChild(errorContainer);
  
  // Event handler for close button
  document.getElementById('404-checker-close').addEventListener('click', function() {
    errorContainer.style.display = 'none';
  });
  
  // Store errors to avoid duplicates
  const errors = new Set();
  
  // Monitor fetch requests for 404 errors
  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    return originalFetch(input, init).then(response => {
      // Check for 404 status
      if (response.status === 404) {
        const url = typeof input === 'string' ? input : input.url;
        reportMissingResource(url, '404 (fetch)');
      }
      return response;
    });
  };
  
  // Monitor image load errors
  document.addEventListener('error', function(event) {
    const target = event.target;
    
    // Only handle resource loading errors
    if (target.tagName === 'IMG' || target.tagName === 'SCRIPT' || target.tagName === 'LINK') {
      const src = target.src || target.href;
      reportMissingResource(src, `Failed to load (${target.tagName.toLowerCase()})`);
    }
  }, true);
  
  // Report missing resource
  function reportMissingResource(url, errorType) {
    // Skip if already reported
    if (errors.has(url)) return;
    errors.add(url);
    
    // Extract filename from URL
    const filename = url.split('/').pop();
    
    // Skip data URLs
    if (url.startsWith('data:')) return;
    
    // Create error entry
    const errorItem = document.createElement('li');
    errorItem.style.cssText = `
      margin-bottom: 8px;
      word-break: break-all;
    `;
    
    // Create prettified output
    errorItem.innerHTML = `
      <div><strong>${filename}</strong></div>
      <div style="color: #777; font-size: 10px;">${url}</div>
      <div style="color: #c00;">${errorType}</div>
    `;
    
    // Add to error list
    errorList.appendChild(errorItem);
    
    // Show error container
    errorContainer.style.display = 'block';
    
    // Log to console
    console.warn(`404 Checker: ${errorType} - ${url}`);
  }
})(); 