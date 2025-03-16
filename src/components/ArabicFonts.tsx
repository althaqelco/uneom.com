'use client';

import { useEffect } from 'react';

export default function ArabicFonts() {
  useEffect(() => {
    // Create a link element for Cairo font
    const cairoLink = document.createElement('link');
    cairoLink.rel = 'stylesheet';
    cairoLink.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap';
    
    // Create a link element for Tajawal font
    const tajawalLink = document.createElement('link');
    tajawalLink.rel = 'stylesheet';
    tajawalLink.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap';
    
    // Append the links to the document head
    document.head.appendChild(cairoLink);
    document.head.appendChild(tajawalLink);
    
    // Create a style element for additional CSS variables
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      :root {
        --font-cairo: 'Cairo', sans-serif;
        --font-tajawal: 'Tajawal', sans-serif;
      }
      
      html[dir="rtl"] body,
      html[lang="ar"] body,
      .rtl-text {
        font-family: var(--font-tajawal);
      }
      
      html[dir="rtl"] h1,
      html[dir="rtl"] h2,
      html[dir="rtl"] h3,
      html[dir="rtl"] h4,
      html[dir="rtl"] h5,
      html[dir="rtl"] h6,
      html[lang="ar"] h1,
      html[lang="ar"] h2,
      html[lang="ar"] h3,
      html[lang="ar"] h4,
      html[lang="ar"] h5,
      html[lang="ar"] h6 {
        font-family: var(--font-cairo);
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      // Clean up
      document.head.removeChild(cairoLink);
      document.head.removeChild(tajawalLink);
      document.head.removeChild(styleElement);
    };
  }, []);

  // This component doesn't render anything visually
  return null;
} 