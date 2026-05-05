import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const appDir = path.join(rootDir, 'src/app');

function getAllPaths(dir, basePath = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!file.startsWith('[') && !file.startsWith('(')) {
        results = results.concat(getAllPaths(fullPath, `${basePath}/${file}`));
      }
    } else if (file === 'page.tsx') {
      results.push(basePath);
    }
  });
  return results;
}

// Get all non-Arabic, non-api paths
const rawPaths = getAllPaths(appDir)
  .filter(p => !p.startsWith('/ar') && !p.startsWith('/api') && p !== '');

// Filter and sort into categories
const data = {
  shop: rawPaths.filter(p => p.startsWith('/shop/')).map(p => p.replace('/shop/', '')),
  services: rawPaths.filter(p => p.startsWith('/services/')).map(p => p.replace('/services/', '')),
  resources: rawPaths.filter(p => p.startsWith('/resources/') && !p.startsWith('/resources/case-studies/')).map(p => p.replace('/resources/', '')),
  caseStudies: rawPaths.filter(p => p.startsWith('/case-studies/')).map(p => p.replace('/case-studies/', '')),
  industries: rawPaths.filter(p => p.startsWith('/industries/')).map(p => p.replace('/industries/', '')),
  other: rawPaths.filter(p => !p.startsWith('/shop/') && !p.startsWith('/services/') && !p.startsWith('/resources/') && !p.startsWith('/case-studies/') && !p.startsWith('/industries/') && p !== '/quote' && p !== '/contact' && p !== '/about' && p !== '/faq' && p !== '/privacy-policy' && p !== '/terms-of-service' && !p.startsWith('/blog') && !p.startsWith('/locations'))
};

// Also let's extract blogs just in case
data.blog = rawPaths.filter(p => p.startsWith('/blog/')).map(p => p.replace('/blog/', ''));

const outputPath = path.join(rootDir, 'src/lib/data/sitemap-paths.json');
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log(`Generated sitemap paths to ${outputPath}`);
console.log(`Found ${data.shop.length} shop paths, ${data.services.length} services, ${data.resources.length} resources, ${data.caseStudies.length} case studies, ${data.industries.length} industries.`);
