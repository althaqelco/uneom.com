import fs from 'fs';
import path from 'path';

const dir = 'src/lib/data/blog/posts';
const files = fs.readdirSync(dir);

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes("leadAr:")) {
    // Find the lead line, which might span one or more lines, but it's usually one line
    const lines = content.split('\n');
    let changed = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith("lead: ")) {
        const leadStr = lines[i].trim().substring(6);
        // append leadAr: exactly the same
        lines[i] = lines[i] + `\n    leadAr: ${leadStr}`;
        changed = true;
        break;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, lines.join('\n'));
    }
  }
}
console.log('Done fixing lead');
