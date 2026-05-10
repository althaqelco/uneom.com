/**
 * Service Worker — offline fallback + core page caching.
 * Per master-plan-v11 §10.9 (T2).
 */

const CACHE = 'uneom-v1';
const OFFLINE_URLS = [
  '/',
  '/ar/',
  '/industries/healthcare/',
  '/industries/hospitality/',
  '/locations/riyadh/',
  '/locations/jeddah/',
  '/offline.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('/offline.html'))
    );
  }
});
