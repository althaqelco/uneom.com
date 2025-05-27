const fs = require('fs');
const path = require('path');

// Files with dynamic Tailwind classes that need to be fixed
const filesToFix = [
  'src/app/ar/shop/corporate/business-shirts/premium-dress/page.tsx',
  'src/app/ar/shop/corporate/business-shirts/classic/page.tsx',
  'src/app/ar/shop/corporate/casual-polo/classic/page.tsx',
  'src/app/ar/shop/corporate/casual-polo/performance/page.tsx',
  'src/app/ar/shop/corporate/casual-polo/premium-corporate/page.tsx',
  'src/app/shop/corporate/casual-polo/performance/page.tsx',
  'src/app/shop/corporate/casual-polo/classic/page.tsx',
  'src/app/shop/corporate/casual-polo/premium-corporate/page.tsx',
  'src/app/shop/corporate/business-shirts/modern-fit/page.tsx',
