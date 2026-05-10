import fs from 'fs';

// Quick parser for the 30 posts using regex
const blogCode = fs.readFileSync('src/lib/data/blog.ts', 'utf-8');
const postsRegex = /\{\n\s+slug: '([^']+)',\n\s+title: '((?:[^'\\]|\\.)*)',\n\s+excerpt: '((?:[^'\\]|\\.)*)',[\s\S]*?author: \{([^\}]+)\}(?:,\n\s+reviewer: \{([^\}]+)\})?\n\s+\}/g;

let match;
while ((match = postsRegex.exec(blogCode)) !== null) {
  const slug = match[1];
  const title = match[2].replace(/\\'/g, "'");
  const excerpt = match[3].replace(/\\'/g, "'");
  
  // To avoid complex regex, let's just extract the whole block
  const block = match[0];
  
  // We'll write a simple conversion
  const varName = slug.split('-').map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  
  // Create Arabic fields by duplicating the English ones for now (we can do a translation pass later or just append 'Ar' keys)
  let newBlock = block.replace(/title: '((?:[^'\\]|\\.)*)',/, "title: '$1',\n    titleAr: '$1',");
  newBlock = newBlock.replace(/excerpt: '((?:[^'\\]|\\.)*)',/, "excerpt: '$1',\n    excerptAr: '$1',");
  
  // For lead, it could be a string or lorem()
  newBlock = newBlock.replace(/lead: (lorem\([^)]+\)|'[^']+'),/, "lead: $1,\n    leadAr: $1,");
  
  // For sections: { heading: string, body: string }
  newBlock = newBlock.replace(/heading: '([^']+)', body: '((?:[^'\\]|\\.)*)'/g, "heading: '$1', headingAr: '$1', body: '$2', bodyAr: '$2'");
  
  // For faqs: { q: string, a: string }
  newBlock = newBlock.replace(/q: '([^']+)', a: '((?:[^'\\]|\\.)*)'/g, "q: '$1', qAr: '$1', a: '$2', aAr: '$2'");
  
  // For author:
  newBlock = newBlock.replace(/name: '([^']+)', title: '([^']+)'/, "name: '$1', nameAr: '$1', title: '$2', titleAr: '$2'");
  
  // For reviewer:
  if (match[5]) {
    newBlock = newBlock.replace(/reviewer: \{ name: '([^']+)', title: '([^']+)', affiliation: '([^']+)' \}/, "reviewer: { name: '$1', nameAr: '$1', title: '$2', titleAr: '$2', affiliation: '$3', affiliationAr: '$3' }");
  }

  const content = `import type { BlogPost } from '../index';

const lorem = (s: string) => s;

export const ${varName}: BlogPost = ${newBlock};
`;
  
  fs.writeFileSync(`src/lib/data/blog/posts/${slug}.ts`, content);
}
console.log('Done splitting posts');
