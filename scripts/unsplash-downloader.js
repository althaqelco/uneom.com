const axios = require('axios');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Unsplash API credentials
const UNSPLASH_ACCESS_KEY = 'E9Jr7N9Y8Rdf7T-vQjfKjmCSLQ2LWsNHnAUUPViRnwM';

/**
 * Cleans a string to be used as a filename or directory name
 * @param {string} str - String to clean
 * @returns {string} Cleaned string
 */
function cleanString(str) {
  return str.replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

/**
 * Downloads images from Unsplash based on keywords
 * @param {string} keyword - Search term
 * @param {string} pagePath - Path where images should be saved
 * @param {number} count - Number of images to download
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} Array of downloaded image information
 */
async function downloadImages(keyword, pagePath, count = 5, options = {}) {
  const {
    orientation = 'landscape',
    minWidth = 1200,
    convertToWebp = true,
    quality = 85, // WebP quality
  } = options;

  // Add 'uniform' to the search query if not already present
  const searchQuery = keyword.toLowerCase().includes('uniform') 
    ? keyword 
    : `${keyword} uniform`;
  
  // Create full directory path
  const targetDir = path.join('public/images', pagePath);
  
  // Ensure directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`📁 Created directory: ${targetDir}`);
  }
  
  try {
    console.log(`🔍 Searching for "${searchQuery}" images...`);
    
    // Search for images
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: searchQuery,
        per_page: count * 2, // Get more to have alternatives if some fail
        orientation: orientation,
        content_filter: 'high'
      },
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });
    
    if (response.data.results.length === 0) {
      console.log(`⚠️ No images found for keyword: "${searchQuery}"`);
      return [];
    }
    
    console.log(`✅ Found ${response.data.results.length} images for "${searchQuery}"`);
    
    // Download process
    const results = [];
    let successCount = 0;
    
    // Process images one by one to avoid overwhelming the server
    for (let i = 0; i < response.data.results.length && successCount < count; i++) {
      const photo = response.data.results[i];
      
      // Skip images that don't meet minimum width
      if (photo.width < minWidth) {
        console.log(`⚠️ Skipping image - too small: ${photo.width}px`);
        continue;
      }
      
      const cleanKeyword = cleanString(keyword);
      const fileName = `${cleanKeyword}-${(successCount + 1).toString().padStart(2, '0')}`;
      const fileExt = convertToWebp ? 'webp' : 'jpg';
      const fullFileName = `${fileName}.${fileExt}`;
      const filePath = path.join(targetDir, fullFileName);
      
      try {
        // Download the image
        console.log(`⬇️ Downloading: ${photo.urls.regular}`);
        
        const imageResponse = await axios({
          url: photo.urls.regular,
          method: 'GET',
          responseType: 'arraybuffer'
        });
        
        // Process the image with sharp - resize and convert to WebP if needed
        let imageProcessor = sharp(imageResponse.data);
        
        // Resize if necessary while maintaining aspect ratio
        if (options.maxWidth) {
          imageProcessor = imageProcessor.resize({
            width: options.maxWidth,
            withoutEnlargement: true,
            fit: 'inside'
          });
        }
        
        // Convert to WebP if requested
        if (convertToWebp) {
          imageProcessor = imageProcessor.webp({ quality });
        }
        
        // Save the processed image
        await imageProcessor.toFile(filePath);
        
        // Store result
        results.push({
          filename: fullFileName,
          path: path.join(pagePath, fullFileName),
          title: photo.alt_description || '',
          width: photo.width,
          height: photo.height,
          color: photo.color,
          attribution: {
            name: photo.user.name,
            username: photo.user.username,
            url: photo.user.links.html
          }
        });
        
        // Log and increment counter
        console.log(`✅ Saved: ${filePath}`);
        successCount++;
        
        // Add attribution to a text file
        const attributionPath = path.join(targetDir, 'attribution.txt');
        const attributionLine = `${fullFileName}: Photo by ${photo.user.name} (@${photo.user.username}) on Unsplash - ${photo.user.links.html}\n`;
        fs.appendFileSync(attributionPath, attributionLine);
        
      } catch (err) {
        console.error(`❌ Error processing image ${i + 1}: ${err.message}`);
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log(`\n📷 Downloaded ${successCount} out of ${count} requested images for "${searchQuery}"`);
    console.log(`📂 Images saved to: ${targetDir}\n`);
    
    return results;
  } catch (error) {
    console.error(`❌ API Error: ${error.message}`);
    if (error.response) {
      console.error(`Status: ${error.response.status} - ${error.response.statusText}`);
    }
    return [];
  }
}

/**
 * Downloads multiple image sets for different page categories/types
 * @param {Array} imageJobs - Array of download jobs
 * @returns {Promise<Object>} Results for all download jobs
 */
async function downloadMultipleImageSets(imageJobs) {
  const results = {};
  
  for (const job of imageJobs) {
    console.log(`\n🔄 Processing job: ${job.keyword} for ${job.pagePath}`);
    const jobResults = await downloadImages(
      job.keyword, 
      job.pagePath,
      job.count || 5,
      job.options || {}
    );
    
    results[job.pagePath] = jobResults;
  }
  
  return results;
}

// Example usage:
/*
downloadImages(
  'professional hotel uniform staff',
  'industries/hospitality/hotels', 
  5,
  {
    orientation: 'landscape',
    convertToWebp: true,
    maxWidth: 1600,
    quality: 85
  }
);
*/

/*
// Example for batch downloading
downloadMultipleImageSets([
  {
    keyword: 'professional hotel staff uniform',
    pagePath: 'industries/hospitality/hotels',
    count: 5
  },
  {
    keyword: 'restaurant staff uniform professional',
    pagePath: 'industries/hospitality/restaurants',
    count: 5
  },
  {
    keyword: 'medical scrubs professional hospital',
    pagePath: 'industries/healthcare',
    count: 5,
    options: {
      orientation: 'portrait'
    }
  }
]);
*/

module.exports = { downloadImages, downloadMultipleImageSets }; 