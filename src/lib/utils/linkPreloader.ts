/**
 * Link preloading utilities for UNEOM website
 * Provides functions for preloading links to improve navigation performance
 */

/**
 * Interface for link preloading options
 */
interface PreloadLinkOptions {
  /** Whether to preload the link immediately */
  immediate?: boolean;
  /** Whether to preload the link when it's visible in the viewport */
  onVisible?: boolean;
  /** Whether to preload the link on hover */
  onHover?: boolean;
  /** Timeout in milliseconds before preloading on hover */
  hoverDelay?: number;
  /** Priority of the preload (high, low, auto) */
  priority?: 'high' | 'low' | 'auto';
}

/**
 * Default options for link preloading
 */
const defaultOptions: PreloadLinkOptions = {
  immediate: false,
  onVisible: true,
  onHover: true,
  hoverDelay: 100,
  priority: 'low',
};

/**
 * Preloads a link by adding a preload link element to the document head
 * @param href - URL to preload
 * @param priority - Priority of the preload
 */
export const preloadLink = (href: string, priority: 'high' | 'low' | 'auto' = 'low'): void => {
  if (typeof document === 'undefined' || !href) return;

  // Check if link is already preloaded
  const existingPreload = document.querySelector(`link[rel="preload"][href="${href}"]`);
  if (existingPreload) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'document';
  link.href = href;
  link.setAttribute('fetchpriority', priority);
  document.head.appendChild(link);
};

/**
 * Sets up preloading for a specific link element
 * @param linkElement - The link element to set up preloading for
 * @param options - Preloading options
 */
export const setupLinkPreloading = (
  linkElement: HTMLAnchorElement,
  options: PreloadLinkOptions = {}
): void => {
  const mergedOptions = { ...defaultOptions, ...options };
  const href = linkElement.href;

  // Skip if no href or it's an external link
  if (!href || href.startsWith('http') || href.startsWith('//') || href.startsWith('#')) {
    return;
  }

  // Immediate preload
  if (mergedOptions.immediate) {
    preloadLink(href, mergedOptions.priority);
  }

  // Preload on hover
  if (mergedOptions.onHover) {
    let hoverTimer: ReturnType<typeof setTimeout> | null = null;

    linkElement.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(() => {
        preloadLink(href, mergedOptions.priority);
      }, mergedOptions.hoverDelay);
    });

    linkElement.addEventListener('mouseleave', () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
    });
  }

  // Preload when visible in viewport
  if (mergedOptions.onVisible && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            preloadLink(href, mergedOptions.priority);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(linkElement);
  }
};

/**
 * Sets up preloading for all navigation links on the page
 * @param selector - CSS selector for navigation links
 * @param options - Preloading options
 */
export const setupNavigationPreloading = (
  selector: string = 'a[href^="/"]',
  options: PreloadLinkOptions = {}
): void => {
  if (typeof document === 'undefined') return;

  const links = document.querySelectorAll<HTMLAnchorElement>(selector);
  links.forEach((link) => {
    setupLinkPreloading(link, options);
  });
};

/**
 * Preloads critical navigation paths for the current page
 * @param paths - Array of critical paths to preload
 * @param priority - Priority of the preload
 */
export const preloadCriticalPaths = (
  paths: string[],
  priority: 'high' | 'low' | 'auto' = 'high'
): void => {
  paths.forEach((path) => {
    preloadLink(path, priority);
  });
};

/**
 * Client-side component to initialize link preloading
 * Can be used in a layout component to set up preloading for all pages
 */
export const initLinkPreloading = (): void => {
  if (typeof window === 'undefined') return;

  // Wait for the page to load
  window.addEventListener('load', () => {
    // Delay slightly to prioritize main content loading
    setTimeout(() => {
      setupNavigationPreloading();
    }, 300);
  });
}; 