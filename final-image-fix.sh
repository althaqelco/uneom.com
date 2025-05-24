#!/bin/bash

echo "Final comprehensive image and icon fix..."

# Create all missing directories
mkdir -p public/images/blog
mkdir -p public/images/products/aviation
mkdir -p public/images/industries/corporate
mkdir -p public/images/industries/healthcare
mkdir -p public/images/industries/aviation
mkdir -p public/images/hospitality
mkdir -p public/images/products
mkdir -p public/images/corporate
mkdir -p public/icons
mkdir -p public/images/icons

# Create missing blog placeholder images as JPG files
cat > public/images/blog/placeholder-corporate1.jpg << 'EOF'
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiBmaWxsPSJub25lIj4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzFlNDBhZiIgcng9IjEwIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjMyIiBmb250LWZhbWlseT0iQXJpYWwiPkNvcnBvcmF0ZSBVbmlmb3JtczwvdGV4dD4KPC9zdmc+
EOF

cat > public/images/blog/placeholder-corporate2.jpg << 'EOF'
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiBmaWxsPSJub25lIj4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzA1OTY2OSIgcng9IjEwIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjMyIiBmb250LWZhbWlseT0iQXJpYWwiPkJ1c2luZXNzIEF0dGlyZTwvdGV4dD4KPC9zdmc+
EOF

cat > public/images/blog/placeholder-aviation1.jpg << 'EOF'
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiBmaWxsPSJub25lIj4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzdjM2FlZCIgcng9IjEwIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjMyIiBmb250LWZhbWlseT0iQXJpYWwiPkF2aWF0aW9uIFVuaWZvcm1zPC90ZXh0Pgo8L3N2Zz4=
EOF

cat > public/images/blog/placeholder-aviation2.jpg << 'EOF'
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiBmaWxsPSJub25lIj4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2RjMjYyNiIgcng9IjEwIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjMyIiBmb250LWZhbWlseT0iQXJpYWwiPkFpcmxpbmUgQ3JldzwvdGV4dD4KPC9zdmc+
EOF

cat > public/images/blog/placeholder1.jpg << 'EOF'
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiBmaWxsPSJub25lIj4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y1OWUwYiIgcng9IjEwIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjMyIiBmb250LWZhbWlseT0iQXJpYWwiPkJsb2cgUG9zdDwvdGV4dD4KPC9zdmc+
EOF

cat > public/images/blog/placeholder2.jpg << 'EOF'
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIiBmaWxsPSJub25lIj4KICA <cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzhiNWNmNiIgcng9IjEwIi8+CiAgPHRleHQgeD0iNDAwIiB5PSIzMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjMyIiBmb250LWZhbWlseT0iQXJpYWwiPkFydGljbGU8L3RleHQ+Cjwvc3ZnPg==
EOF

# Create missing icons in both locations
cat > public/icons/saudi-expertise.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#059669" stroke="#10b981" stroke-width="2"/>
  <path d="M20 28h24l-4 8h-16z" fill="#fbbf24"/>
  <path d="M32 20l8 8H24z" fill="#ffffff"/>
  <text x="32" y="52" text-anchor="middle" fill="#1f2937" font-size="6" font-family="Arial">SAUDI EXPERTISE</text>
</svg>
EOF

cat > public/icons/brand-aligned.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#7c3aed" stroke="#8b5cf6" stroke-width="2"/>
  <rect x="24" y="24" width="16" height="16" fill="#fbbf24" rx="2"/>
  <circle cx="32" cy="32" r="4" fill="#ffffff"/>
  <text x="32" y="52" text-anchor="middle" fill="#1f2937" font-size="7" font-family="Arial">BRAND ALIGNED</text>
</svg>
EOF

# Copy icons to images/icons directory as well
cp public/icons/saudi-expertise.svg public/images/icons/saudi-expertise.svg
cp public/icons/brand-aligned.svg public/images/icons/brand-aligned.svg

# Create a simple favicon
cat > public/favicon.ico << 'EOF'
