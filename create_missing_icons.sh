#!/bin/bash

# Create missing icons for the website

# Corporate icon
cat > public/images/icons/corporate-icon.svg << 'ICON_EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#1e40af" stroke="#3b82f6" stroke-width="2"/>
  <rect x="24" y="20" width="16" height="20" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
  <rect x="28" y="24" width="2" height="2" fill="#374151"/>
  <rect x="32" y="24" width="2" height="2" fill="#374151"/>
  <rect x="36" y="24" width="2" height="2" fill="#374151"/>
  <rect x="28" y="28" width="2" height="2" fill="#374151"/>
  <rect x="32" y="28" width="2" height="2" fill="#374151"/>
  <rect x="36" y="28" width="2" height="2" fill="#374151"/>
  <text x="32" y="52" text-anchor="middle" fill="#1f2937" font-size="7" font-family="Arial">CORPORATE</text>
</svg>
ICON_EOF

# Healthcare icon
cat > public/images/icons/healthcare-icon.svg << 'ICON_EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#dc2626" stroke="#ef4444" stroke-width="2"/>
  <path d="M32 18v28M18 32h28" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <text x="32" y="52" text-anchor="middle" fill="#1f2937" font-size="7" font-family="Arial">HEALTHCARE</text>
</svg>
ICON_EOF

# Hospitality icon
cat > public/images/icons/hospitality-icon.svg << 'ICON_EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#7c3aed" stroke="#8b5cf6" stroke-width="2"/>
  <rect x="20" y="24" width="24" height="16" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
  <rect x="24" y="28" width="4" height="4" fill="#374151"/>
  <rect x="30" y="28" width="4" height="4" fill="#374151"/>
  <rect x="36" y="28" width="4" height="4" fill="#374151"/>
  <text x="32" y="52" text-anchor="middle" fill="#1f2937" font-size="6" font-family="Arial">HOSPITALITY</text>
</svg>
ICON_EOF

# Customization icon
cat > public/images/icons/customization-icon.svg << 'ICON_EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#059669" stroke="#10b981" stroke-width="2"/>
  <path d="M20 20h24v24H20z" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
  <circle cx="26" cy="26" r="2" fill="#ef4444"/>
  <circle cx="32" cy="32" r="2" fill="#3b82f6"/>
  <circle cx="38" cy="38" r="2" fill="#10b981"/>
  <text x="32" y="52" text-anchor="middle" fill="#1f2937" font-size="6" font-family="Arial">CUSTOM</text>
</svg>
ICON_EOF

# Consultation icon
cat > public/images/icons/consultation-icon.svg << 'ICON_EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="32" cy="28" r="6" fill="#ffffff"/>
  <path d="M22 44c0-6 4-10 10-10s10 4 10 10" fill="#ffffff"/>
  <text x="32" y="52" text-anchor="middle" fill="#1f2937" font-size="6" font-family="Arial">CONSULT</text>
</svg>
ICON_EOF

echo "All missing icons created successfully!"
