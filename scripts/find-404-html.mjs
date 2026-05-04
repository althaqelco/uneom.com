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
const links = new Set();
const linkSources = new Map();

// Regex to extract href="/..."
const hrefRegex = /href="(\/[^"]+)"/g;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    let link = match[1];
    
    // Skip static assets
    if (link.startsWith('/_next/') || link.startsWith('/images/') || link.startsWith('/fonts/')) continue;
    
    // Remove query params and hashes
    link = link.split('?')[0].split('#')[0];
    
    // Clean trailing slash
    if (link.length > 1 && link.endsWith('/')) {
      link = link.slice(0, -1);
    }

    links.add(link);
    if (!linkSources.has(link)) {
      linkSources.set(link, new Set());
    }
    
    // Map HTML file back to its route
    let sourceRoute = file.replace(nextAppDir, '').replace(/\.html$/, '');
    if (sourceRoute.endsWith('/index')) sourceRoute = sourceRoute.replace(/\/index$/, '/');
    if (sourceRoute === '') sourceRoute = '/';
    
    linkSources.get(link).add(sourceRoute);
  }
}

console.log(`Extracted ${links.size} unique internal links from generated HTML files.`);

async function checkLink(link) {
  try {
    const res = await fetch(`http://localhost:3000${link}`, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
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
  const batchSize = 50;
  
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
  
  // Categorize
  const categorized = {
    locations: [],
    industries: [],
    shop: [],
    blog: [],
    other: []
  };
  
  for (const broken of brokenLinks) {
    if (broken.link.includes('/locations')) categorized.locations.push(broken);
    else if (broken.link.includes('/industries')) categorized.industries.push(broken);
    else if (broken.link.includes('/shop')) categorized.shop.push(broken);
    else if (broken.link.includes('/blog')) categorized.blog.push(broken);
    else categorized.other.push(broken);
  }
  
  fs.writeFileSync('broken-links-report.json', JSON.stringify(categorized, null, 2));
  console.log('\nReport saved to broken-links-report.json');
}

run();
