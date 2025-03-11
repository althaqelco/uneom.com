const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get a list of all files with the issue
const grepOutput = execSync('grep -l "onClick={handleAddToQuote}" $(find src -name "*.tsx")').toString();
const filesToFix = grepOutput.split('\n').filter(Boolean);

console.log(`Found ${filesToFix.length} files to fix`);

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the AddToQuoteButton component usage
  const regex = /<AddToQuoteButton\s+onClick={handleAddToQuote}(?:\s+disabled={!selectedColor \|\| !selectedSize})?(?:\s+locale={locale})?\s*\/>/g;
  
  const replacement = (match) => {
    // Check if the file has selectedColor and selectedSize
    const hasColorSize = content.includes('selectedColor') && content.includes('selectedSize');
    const hasLocale = match.includes('locale={locale}');
    
    if (hasColorSize) {
      return `<AddToQuoteButton 
  product={product}
  color={selectedColor || undefined}
  size={selectedSize || undefined}
  quantity={quantity}
/>`;
    } else if (hasLocale) {
      return `<AddToQuoteButton 
  product={product}
  quantity={quantity}
/>`;
    } else {
      return `<AddToQuoteButton 
  product={product}
  quantity={quantity}
/>`;
    }
  };
  
  const newContent = content.replace(regex, replacement);
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`No changes needed for: ${filePath}`);
  }
});

console.log('Done fixing files'); 