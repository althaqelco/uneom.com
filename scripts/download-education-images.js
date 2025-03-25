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

  // Create full directory path
  const targetDir = path.join('../public/images', pagePath);
  
  // Ensure directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`📁 Created directory: ${targetDir}`);
  }
  
  try {
    console.log(`🔍 Searching for "${keyword}" images...`);
    
    // Search for images
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: keyword,
        per_page: count * 2, // Get more to have alternatives if some fail
        orientation: orientation,
        content_filter: 'high'
      },
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    });
    
    if (response.data.results.length === 0) {
      console.log(`⚠️ No images found for keyword: "${keyword}"`);
      return [];
    }
    
    console.log(`✅ Found ${response.data.results.length} images for "${keyword}"`);
    
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
    
    console.log(`\n📷 Downloaded ${successCount} out of ${count} requested images for "${keyword}"`);
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

// Education images to download
const educationImages = [
  {
    keyword: 'school uniform',
    pagePath: 'industries/education',
    count: 6,
    options: {
      orientation: 'landscape',
      maxWidth: 1600,
      quality: 85
    }
  },
  {
    keyword: 'school uniform students',
    pagePath: 'industries/education/students',
    count: 4,
    options: {
      orientation: 'landscape',
      maxWidth: 1600,
      quality: 85
    }
  },
  {
    keyword: 'school uniform teacher',
    pagePath: 'industries/education/teachers',
    count: 4,
    options: {
      orientation: 'landscape',
      maxWidth: 1600,
      quality: 85
    }
  }
];

// Main function to download all education images
async function downloadAllEducationImages() {
  console.log('🏫 Downloading Education Industry Images');
  console.log('=======================================\n');
  
  const results = {};
  
  for (const job of educationImages) {
    console.log(`\n🔄 Processing: ${job.keyword} for ${job.pagePath}`);
    const jobResults = await downloadImages(
      job.keyword, 
      job.pagePath,
      job.count,
      job.options
    );
    
    results[job.keyword] = jobResults;
  }
  
  console.log('\n✅ All education images downloaded successfully!');
  return results;
}

// Run the script
downloadAllEducationImages().catch(error => {
  console.error('❌ Error running script:', error);
}); 