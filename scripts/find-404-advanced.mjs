import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const nextAppDir = path.join(rootDir, '.next', 'server', 'app');

function findHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles(nextAppDir);
console.log(`Found ${htmlFiles.length} HTML files in Next.js build output.`);

const links = new Set();
const linkSources = new Map();

// Match any internal absolute link, including JSON escaped ones like \"href\":\"/locations/riyadh\"
// Also match absolute URLs like https://uneom.com/locations/riyadh
const regex = /href[\\":=\s]+(?:https?:\/\/(?:www\.)?uneom\.com)?(\/[a-zA-Z0-9\-\/]+)[\\"]/g;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    let link = match[1];
    
    // Skip static assets and irrelevant paths
    if (
      link.startsWith('/_next') || 
      link.startsWith('/images') || 
      link.startsWith('/fonts') || 
      link.startsWith('/favicon') || 
      link.startsWith('/icons') ||
      link.startsWith('/api') ||
      link.match(/\.[a-z0-9]+$/i) // skip anything with an extension like .jpg, .png, .css
    ) continue;
    
    // Clean trailing slash
    if (link.length > 1 && link.endsWith('/')) {
      link = link.slice(0, -1);
    }

    links.add(link);
    if (!linkSources.has(link)) {
      linkSources.set(link, new Set());
    }
    
    let sourceRoute = file.replace(nextAppDir, '').replace(/\.html$/, '');
    if (sourceRoute.endsWith('/index')) sourceRoute = sourceRoute.replace(/\/index$/, '/');
    if (sourceRoute === '') sourceRoute = '/';
    
    linkSources.get(link).add(sourceRoute);
  }
}

console.log(`Extracted ${links.size} unique internal links.`);

async function checkLink(link) {
  try {
    const res = await fetch(`http://localhost:3000${link}`, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    return { link, status: res.status };
  } catch (e) {
    return { link, status: 500, error: e.message };
  }
}

async function run() {
  console.log('Testing links against localhost:3000...');
  const brokenLinks = [];
  
  const linksArray = Array.from(links);
  const batchSize = 10;
  
  let checked = 0;
  for (let i = 0; i < linksArray.length; i += batchSize) {
    const batch = linksArray.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(checkLink));
    
    for (const result of results) {
      if (result.status === 404) {
        brokenLinks.push({
          link: result.link,
          sources: Array.from(linkSources.get(result.link))
        });
      }
    }
    checked += batch.length;
    process.stdout.write(`\rChecked ${checked}/${linksArray.length} links`);
  }
  
  console.log(`\n\n=== FOUND ${brokenLinks.length} BROKEN LINKS (404) ===\n`);
  
  // Categorize for easier action planning
  const categorized = {
    locations: [],
    industries: [],
    shop: [],
    blog: [],
    other: []
  };
  
  for (const broken of brokenLinks) {
    const entry = { url: broken.link, found_on_pages: broken.sources };
    if (broken.link.includes('/locations')) categorized.locations.push(entry);
    else if (broken.link.includes('/industries')) categorized.industries.push(entry);
    else if (broken.link.includes('/shop')) categorized.shop.push(entry);
    else if (broken.link.includes('/blog')) categorized.blog.push(entry);
    else categorized.other.push(entry);
  }
  
  fs.writeFileSync('broken-links-report.json', JSON.stringify(categorized, null, 2));
  console.log('\nReport saved to broken-links-report.json');
  process.exit(0);
}

run();
