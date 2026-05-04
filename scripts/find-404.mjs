import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const nextAppDir = path.join(rootDir, '.next', 'server', 'app');
const nextPagesDir = path.join(rootDir, '.next', 'server', 'pages');

// Find all .tsx files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const tsxFiles = findTsxFiles(srcDir);
const links = new Set();
const linkSources = new Map();

// Regex to match href="..." or href={'...'} or href={`...`}
// We'll focus on static paths or semi-static paths that can be evaluated.
// A simpler regex to find strings starting with / inside href
const hrefRegex = /href=(?:{"|{'|`|"|')(\/[^"'`{}]+)(?:{"|{'|`|"|')?/g;

for (const file of tsxFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    let link = match[1];
    // Remove query params and hashes
    link = link.split('?')[0].split('#')[0];
    
    // Clean trailing slash
    if (link.length > 1 && link.endsWith('/')) {
      link = link.slice(0, -1);
    }
    
    // Ignore dynamic strings like ${city.slug}
    if (link.includes('$')) continue;

    links.add(link);
    if (!linkSources.has(link)) {
      linkSources.set(link, new Set());
    }
    linkSources.get(link).add(path.relative(rootDir, file));
  }
}

console.log(`Found ${links.size} unique internal links.`);

// Wait, the Next.js build generates valid routes. 
// However, there's a much easier way: fetch the dev server or production server!
// Since we are running the server, let's just make HTTP requests to localhost:3000
// for all unique links, and see which ones return 404!

import http from 'http';

async function checkLink(link) {
  return new Promise((resolve) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: link,
      method: 'HEAD',
    }, (res) => {
      resolve({ link, status: res.statusCode });
    });
    
    req.on('error', (e) => {
      resolve({ link, status: 500, error: e.message });
    });
    
    req.end();
  });
}

async function run() {
  console.log('Testing links against localhost:3000...');
  const brokenLinks = [];
  
  // Test in batches of 20
  const linksArray = Array.from(links);
  const batchSize = 20;
  
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
  }
  
  console.log(`\n\n=== FOUND ${brokenLinks.length} BROKEN LINKS ===\n`);
  for (const broken of brokenLinks) {
    console.log(`❌ 404: ${broken.link}`);
    console.log(`   Found in: ${broken.sources.join(', ')}`);
  }
  
  fs.writeFileSync('broken-links-report.json', JSON.stringify(brokenLinks, null, 2));
  console.log('\nReport saved to broken-links-report.json');
}

run();
