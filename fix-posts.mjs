import fs from 'fs';
import path from 'path';

const dir = 'src/lib/data/blog/posts';
const files = fs.readdirSync(dir);

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix lines with `q: '...', a: '...'` that missed the `qAr` and `aAr`
  // A regex that matches `{ q: '...', a: '...' }` safely without missing escaped quotes.
  // Instead of complex regex, let's just find lines containing `{ q: '` and not containing `qAr:`
  const lines = content.split('\n');
  let changed = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("{ q: '") && !line.includes("qAr:")) {
      // Find the question and answer by extracting everything between `q: '` and `', a: '`
      const qStart = line.indexOf("q: '") + 4;
      const qEnd = line.indexOf("', a: '");
      if (qStart !== -1 && qEnd !== -1) {
        const q = line.slice(qStart, qEnd);
        const aStart = qEnd + 7;
        const aEnd = line.lastIndexOf("'}");
        let a = line.slice(aStart, aEnd);
        if (aEnd === -1) {
          // might be `'} ,` or similar
          const aEndAlt = line.lastIndexOf("' }");
          if (aEndAlt !== -1) {
            a = line.slice(aStart, aEndAlt);
          }
        }
        
        lines[i] = `      { q: '${q}', qAr: '${q}', a: '${a}', aAr: '${a}' },`.replace(/},,$/, '},').replace(/},$/, line.endsWith(',') ? '},' : '}');
        changed = true;
      }
    }
    
    // Also fix any `heading:` lines that might have failed
    if (line.includes("{ heading: '") && !line.includes("headingAr:")) {
      const hStart = line.indexOf("heading: '") + 10;
      const hEnd = line.indexOf("', body: '");
      if (hStart !== -1 && hEnd !== -1) {
        const h = line.slice(hStart, hEnd);
        const bStart = hEnd + 10;
        const bEnd = line.lastIndexOf("' }");
        let b = line.slice(bStart, bEnd);
        if (bEnd === -1) b = line.slice(bStart, line.lastIndexOf("'}"));
        lines[i] = `      { heading: '${h}', headingAr: '${h}', body: '${b}', bodyAr: '${b}' },`.replace(/},,$/, '},').replace(/},$/, line.endsWith(',') ? '},' : '}');
        changed = true;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'));
  }
}
console.log('Done fixing posts');
