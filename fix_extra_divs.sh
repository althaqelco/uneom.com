#!/bin/bash

# This script removes extra divs in shop pages

echo "Fixing files with extra divs..."

# Find all page.tsx files in the shop directory
find src/app/shop -type f -name "page.tsx" | while read -r file; do
  echo "Processing $file"
  
  # Use perl to read the entire file into memory and make the replacement
  perl -0777 -i -pe 's/(.*?)\s*\n\s*<\/div>\s*\n\s*\);$/$1\n  );/s' "$file"
  
  # Fix another pattern where there might be whitespace and a div before the closing
  perl -0777 -i -pe 's/(.*?)\s*\n\s*\n\s*<\/div>\s*\n\s*\);$/$1\n  );/s' "$file"
done

echo "Done!"
