#!/bin/bash
for file in "$@"; do
  echo "Processing $file..."
  sed -i "" "/import MainLayout/d" "$file"
  sed -i "" "s/<MainLayout.*>//" "$file"
  sed -i "" "s/<\/MainLayout>//" "$file"
  sed -i "" "s/return (/return (\n    <div className=\"bg-white\">/" "$file"
  sed -i "" "s/);/    <\/div>\n  );/" "$file"
  echo "Fixed $file"
done
