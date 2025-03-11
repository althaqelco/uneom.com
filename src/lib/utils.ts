import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names with tailwind-merge and clsx
 * This is useful for conditional classnames in Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a price with currency symbol and formatting based on locale
 */
export function formatPrice(price: number, locale: string = 'en', currency: string = 'SAR') {
  const formatter = new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  });
  
  return formatter.format(price);
}

/**
 * Format a date based on locale
 */
export function formatDate(date: Date | string, locale: string = 'en') {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return dateObj.toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate a string to a specified maximum length
 */
export function truncateString(str: string, maxLength: number = 100) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Generate a slug from a string (for URLs)
 */
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * Check if running on client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Get random item from array
 */
export function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Capitalize first letter of a string
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Clears all browser cookies and localStorage data for the application
 */
export function clearBrowserData() {
  // Clear localStorage
  localStorage.clear();
  
  // Clear sessionStorage
  sessionStorage.clear();
  
  // Clear cookies
  const cookies = document.cookie.split(";");
  
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
  
  // Attempt to clear browser cache if supported
  if ('caches' in window) {
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        return caches.delete(key);
      }));
    });
  }
  
  console.log('All cookies, localStorage, and cache cleared');
  
  return true;
} 