/**
 * UNEOM Service Worker v2
 * Phase 6.1: Enhanced caching strategy
 *
 * - Navigation: Network-first with offline fallback
 * - Static assets (images, fonts, CSS, JS): Stale-While-Revalidate
 * - Precaches core pages for instant revisits
 */

const CACHE_NAME = 'uneom-v2';

const PRECACHE_URLS = [
  '/',
  '/ar/',
  '/industries/healthcare/',
  '/industries/hospitality/',
  '/industries/corporate/',
  '/industries/manufacturing/',
  '/locations/riyadh/',
  '/locations/jeddah/',
  '/quote/',
  '/offline.html'
];

// Install: precache core shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .catch(() => {/* Silently skip if offline during install */})
  );
  self.skipWaiting();
});

// Activate: purge old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: strategy depends on request type
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Skip non-GET and cross-origin requests
  if (e.request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  // ── Navigation: network-first ──
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          // Cache successful HTML navigations for offline
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return res;
        })
        .catch(() =>
          caches.match(e.request)
            .then(cached => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // ── Static assets: stale-while-revalidate ──
  if (
    /\.(avif|webp|png|jpg|jpeg|svg|ico|woff2?|css|js)$/.test(url.pathname) ||
    url.pathname.startsWith('/_next/static/')
  ) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        const fetchPromise = fetch(e.request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return res;
        }).catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }
});
