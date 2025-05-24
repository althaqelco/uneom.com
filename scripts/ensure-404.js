/**
 * ensure-404.js
 * 
 * This script ensures that a proper 404.html file exists in the build output directory
 * and also creates a /404/index.html file with the same content.
 * 
 * This is critical for Netlify to serve 404 pages correctly with the proper status code.
 */

const fs = require('fs');
const path = require('path');

// Paths
const buildDir = path.resolve(process.cwd(), 'out');
const notFoundHtmlPath = path.join(buildDir, '404.html');
const notFoundDirPath = path.join(buildDir, '404');
const notFoundIndexPath = path.join(notFoundDirPath, 'index.html');

// Content for the 404 page if it doesn't exist
const fallback404Content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 - Page Not Found | Uneom</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
      text-align: center;
      color: #333;
      background-color: #f7f7f7;
    }
    
    .error-container {
      max-width: 500px;
      padding: 40px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      font-size: 6rem;
      margin: 0;
      color: #118aaa;
    }
    
    h2 {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    
    p {
      margin-bottom: 30px;
      line-height: 1.6;
    }
    
    a {
      display: inline-block;
      padding: 10px 20px;
      background-color: #118aaa;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    a:hover {
      background-color: #0e7090;
    }
  </style>
</head>
<body>
  <div class="error-container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
    <a href="/">Back to Homepage</a>
  </div>
</body>
</html>`;

// Main function
function ensureNotFoundPage() {
  console.log('🔍 Ensuring correct 404 page setup...');
  
  // Check if 404.html exists
  if (!fs.existsSync(notFoundHtmlPath)) {
    console.log('⚠️ 404.html not found, creating it...');
    fs.writeFileSync(notFoundHtmlPath, fallback404Content, 'utf8');
    console.log('✅ Created 404.html');
  } else {
    console.log('✅ Found existing 404.html');
    
    // Check and fix robots meta tag if missing
    let notFoundContent = fs.readFileSync(notFoundHtmlPath, 'utf8');
    if (!notFoundContent.includes('robots') || !notFoundContent.includes('noindex')) {
      console.log('⚠️ Adding missing robots noindex meta tag...');
      notFoundContent = notFoundContent.replace(
        /<head>([\s\S]*?)<\/head>/,
        '<head>$1<meta name="robots" content="noindex, nofollow">\n</head>'
      );
      fs.writeFileSync(notFoundHtmlPath, notFoundContent, 'utf8');
      console.log('✅ Added robots noindex meta tag');
    }
  }
  
  // Create /404/index.html directory and file if they don't exist
  if (!fs.existsSync(notFoundDirPath)) {
    fs.mkdirSync(notFoundDirPath, { recursive: true });
  }
  
  // Copy 404.html to /404/index.html
  fs.copyFileSync(notFoundHtmlPath, notFoundIndexPath);
  console.log('✅ Copied 404.html to /404/index.html');
  
  // Verify file sizes
  const originalSize = fs.statSync(notFoundHtmlPath).size;
  const copySize = fs.statSync(notFoundIndexPath).size;
  
  if (originalSize === copySize) {
    console.log('✅ Verified that both files are identical in size');
  } else {
    console.log('⚠️ Warning: File sizes differ between 404.html and /404/index.html');
  }
  
  console.log('✅ 404 page setup complete!');
}

// Run the main function
try {
  ensureNotFoundPage();
} catch (error) {
  console.error('❌ Error ensuring 404 page:', error);
  process.exit(1);
} 