/**
 * Robots.txt Validator
 * 
 * This utility helps verify that the robots.txt file is correctly configured
 * to allow search engines to access critical CSS/JS resources.
 * 
 * Addresses the E001 critical error identified in the Screaming Frog report.
 */

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  allowedPaths: string[];
  blockedPaths: string[];
}

interface ResourceTest {
  path: string;
  critical: boolean;
  type: 'css' | 'js' | 'image' | 'other';
  description: string;
}

/**
 * Parse robots.txt content and extract rules
 */
export function parseRobotsTxt(content: string): {
  allowRules: string[];
  disallowRules: string[];
  sitemaps: string[];
} {
  const allowRules: string[] = [];
  const disallowRules: string[] = [];
  const sitemaps: string[] = [];
  
  // Simple parser for robots.txt rules
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip comments and empty lines
    if (trimmedLine.startsWith('#') || trimmedLine === '') {
      continue;
    }
    
    // Check for Allow: rules
    if (trimmedLine.toLowerCase().startsWith('allow:')) {
      const path = trimmedLine.substring(6).trim();
      if (path) {
        allowRules.push(path);
      }
    }
    
    // Check for Disallow: rules
    else if (trimmedLine.toLowerCase().startsWith('disallow:')) {
      const path = trimmedLine.substring(9).trim();
      if (path) {
        disallowRules.push(path);
      }
    }
    
    // Check for Sitemap: entries
    else if (trimmedLine.toLowerCase().startsWith('sitemap:')) {
      const sitemap = trimmedLine.substring(8).trim();
      if (sitemap) {
        sitemaps.push(sitemap);
      }
    }
  }
  
  return { allowRules, disallowRules, sitemaps };
}

/**
 * Check if a path is allowed by robots.txt rules
 */
export function isPathAllowed(
  path: string,
  allowRules: string[],
  disallowRules: string[]
): boolean {
  // Check if path matches any disallow rule
  for (const rule of disallowRules) {
    if (pathMatchesRule(path, rule)) {
      // If disallowed, check if there's a more specific allow rule
      for (const allowRule of allowRules) {
        if (pathMatchesRule(path, allowRule) && isMoreSpecific(allowRule, rule)) {
          return true;
        }
      }
      return false;
    }
  }
  
  // Default to allowed if not matched by any disallow rule
  return true;
}

/**
 * Check if a path matches a robots.txt rule
 */
function pathMatchesRule(path: string, rule: string): boolean {
  // Escape special regex characters except * and $
  const escapedRule = rule
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*');
  
  // Create a regex that matches the entire path from the start
  const regex = new RegExp(`^${escapedRule}`);
  
  return regex.test(path);
}

/**
 * Check if rule A is more specific than rule B
 */
function isMoreSpecific(ruleA: string, ruleB: string): boolean {
  // A rule is more specific if it's longer
  // This is a simplified approach but works for most cases
  return ruleA.length > ruleB.length;
}

/**
 * Get a list of critical resources that should be allowed in robots.txt
 */
export function getCriticalResources(): ResourceTest[] {
  return [
    {
      path: '/_next/static/css/main.css',
      critical: true,
      type: 'css',
      description: 'Main CSS file'
    },
    {
      path: '/_next/static/chunks/main.js',
      critical: true,
      type: 'js',
      description: 'Main JavaScript chunk'
    },
    {
      path: '/_next/static/chunks/pages/_app.js',
      critical: true,
      type: 'js',
      description: 'App JavaScript chunk'
    },
    {
      path: '/_next/static/chunks/pages/index.js',
      critical: true,
      type: 'js',
      description: 'Homepage JavaScript chunk'
    },
    {
      path: '/_next/static/media/logo.png',
      critical: false,
      type: 'image',
      description: 'Logo image'
    },
    {
      path: '/_next/static/image/hero.webp',
      critical: false,
      type: 'image',
      description: 'Hero image'
    }
  ];
}

/**
 * Validate robots.txt configuration
 */
export function validateRobotsTxt(content: string): ValidationResult {
  const { allowRules, disallowRules, sitemaps } = parseRobotsTxt(content);
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    allowedPaths: [],
    blockedPaths: []
  };
  
  // Check if robots.txt has at least one sitemap entry
  if (sitemaps.length === 0) {
    result.warnings.push('No Sitemap entry found in robots.txt');
  }
  
  // Check critical resources
  const criticalResources = getCriticalResources();
  
  for (const resource of criticalResources) {
    const allowed = isPathAllowed(resource.path, allowRules, disallowRules);
    
    if (allowed) {
      result.allowedPaths.push(resource.path);
    } else {
      result.blockedPaths.push(resource.path);
      
      // Critical resources being blocked is an error
      if (resource.critical) {
        result.errors.push(`Critical resource blocked: ${resource.path} (${resource.description})`);
        result.isValid = false;
      } else {
        result.warnings.push(`Non-critical resource blocked: ${resource.path} (${resource.description})`);
      }
    }
  }
  
  // Check for overly broad disallow rules
  for (const rule of disallowRules) {
    if (rule === '/_next/') {
      result.errors.push('Overly broad rule blocks all Next.js resources: Disallow: /_next/');
      result.isValid = false;
    }
    else if (rule === '/_next/static/') {
      result.errors.push('Overly broad rule blocks all static resources: Disallow: /_next/static/');
      result.isValid = false;
    }
  }
  
  return result;
}

/**
 * Generate a fixed robots.txt content if issues are found
 */
export function generateFixedRobotsTxt(content: string): string {
  const { allowRules, disallowRules, sitemaps } = parseRobotsTxt(content);
  const validation = validateRobotsTxt(content);
  
  // If valid, return the original content
  if (validation.isValid && validation.warnings.length === 0) {
    return content;
  }
  
  // Create a new robots.txt with fixes
  let fixedContent = 'User-agent: *\n';
  
  // Add specific allow rules for critical resources
  fixedContent += 'Allow: /_next/static/css/ # Allow CSS files\n';
  fixedContent += 'Allow: /_next/static/chunks/ # Allow JS chunks (Next.js needs these)\n';
  fixedContent += 'Allow: /_next/static/media/ # Allow media files (if served from here)\n';
  fixedContent += 'Allow: /_next/static/image/ # Allow optimized images\n\n';
  
  // Add existing disallow rules, except overly broad ones
  for (const rule of disallowRules) {
    if (rule !== '/_next/' && rule !== '/_next/static/') {
      fixedContent += `Disallow: ${rule}\n`;
    }
  }
  
  // Add sensible disallow rules if needed
  if (!disallowRules.includes('/admin/')) {
    fixedContent += 'Disallow: /admin/\n';
  }
  
  if (!disallowRules.includes('/api/')) {
    fixedContent += 'Disallow: /api/\n';
  }
  
  // Add sitemap entries
  fixedContent += '\n';
  
  for (const sitemap of sitemaps) {
    fixedContent += `Sitemap: ${sitemap}\n`;
  }
  
  // Add default sitemap if none exists
  if (sitemaps.length === 0) {
    fixedContent += 'Sitemap: https://uneom.com/sitemap.xml\n';
  }
  
  return fixedContent;
}

export default {
  parseRobotsTxt,
  isPathAllowed,
  getCriticalResources,
  validateRobotsTxt,
  generateFixedRobotsTxt
};
