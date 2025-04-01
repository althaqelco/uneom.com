#!/bin/bash
# List files to process
files=(
  src/app/page.tsx
  src/app/shop/education-uniforms/page.tsx
  src/app/shop/corporate-uniforms/page.tsx
  src/app/shop/healthcare-uniforms/page.tsx
  src/app/shop/aviation-uniforms/page.tsx
  src/app/shop/page.tsx
  src/app/industries/education/page.tsx
  src/app/industries/manufacturing/page.tsx
  src/app/industries/corporate/page.tsx
  src/app/industries/aviation/page.tsx
  src/app/industries/healthcare/page.tsx
  src/app/industries/page.tsx
  src/app/services/program-management/page.tsx
  src/app/services/design-customization/page.tsx
  src/app/services/compliance-management/page.tsx
  src/app/services/logistics-management/page.tsx
  src/app/services/page.tsx
  src/app/about/page.tsx
  src/app/about/our-story/page.tsx
  src/app/about/sustainability/page.tsx
  src/app/about/careers/page.tsx
  src/app/contact/page.tsx
  src/app/quote/page.tsx
  src/app/resources/page.tsx
  src/app/resources/guides/page.tsx
  src/app/resources/faqs/page.tsx
  src/app/blog/page.tsx
  src/app/blog/corporate-uniform-employee-satisfaction/page.tsx
  src/app/blog/healthcare-uniforms-future-trends/page.tsx
  src/app/blog/education-uniforms-impact-study/page.tsx
  src/app/authors/page.tsx
)
# Process each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    # Check if file contains MainLayout
    if grep -q "import MainLayout" "$file"; then
      # Remove MainLayout import
      sed -i "" "/import MainLayout/d" "$file"
      # Remove MainLayout wrapper
      sed -i "" "s/<MainLayout.*>//" "$file"
      sed -i "" "s/<\/MainLayout>//" "$file"
      # Wrap content in a single div
      sed -i "" "s/return (/return (\n    <div className=\"bg-white\">/" "$file"
      sed -i "" "s/);/    <\/div>\n  );/" "$file"
      echo "Fixed $file"
    else
      echo "No MainLayout found in $file"
    fi
  else
    echo "File $file does not exist"
  fi
done
