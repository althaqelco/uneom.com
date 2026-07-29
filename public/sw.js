/**
 * UNEOM Service Worker v3
 *
 * The change from v2: navigations were network-first, so every click paid a
 * full round-trip even when an identical copy was already on the device. On a
 * mobile connection in the Kingdom that is the difference between a page that
 * appears and a page that loads. Navigations are now stale-while-revalidate —
 * served from cache in about a millisecond, with a background fetch that makes
 * the next visit current.
 *
 * What that trades: a reader can see one-navigation-stale HTML. That is the
 * same bargain the CDN already makes (s-maxage=3600, stale-while-revalidate
 * =86400 in next.config.mjs), so the service worker is not loosening a policy,
 * it is matching one. The revalidation is unconditional, so a page is stale at
 * most once.
 *
 * Two paths deliberately stay network-first, because for them a stale answer is
 * a wrong answer rather than an old one: the quote form, and anything under
 * /api/. Sitemap and robots are never cached at all.
 */

const CACHE = 'uneom-v3';
const OFFLINE = '/offline.html';

/**
 * Precached on install. Kept to entry points a first-time visitor is most
 * likely to reach, plus the blog hub — 101 scheduled articles now make it the
 * main organic entry, and v2 did not include it.
 */
const PRECACHE_URLS = [
  '/',
  '/ar/',
  '/blog/',
  '/ar/blog/',
  '/industries/healthcare/',
  '/industries/hospitality/',
  '/industries/corporate/',
  '/industries/manufacturing/',
  '/locations/riyadh/',
  '/locations/jeddah/',
  '/quote/',
  OFFLINE,
];

/** A stale answer here would be a wrong answer, not an old one. */
const ALWAYS_FRESH = [/^\/api\//, /^\/quote\/?$/, /^\/ar\/quote\/?$/];

/** Never worth a cache entry. */
const NEVER_CACHE = [/^\/sitemap\.xml$/, /^\/robots\.txt$/, /^\/llms(-full)?\.txt$/];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll rejects the whole batch if any single URL fails, which would
      // leave the worker with no precache at all. Fetch them independently.
      .then(cache => Promise.allSettled(PRECACHE_URLS.map(u => cache.add(u))))
      .catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

/** Cache a response only if it is genuinely reusable. */
function store(req, res) {
  if (!res || !res.ok || res.type === 'opaque') return res;
  const clone = res.clone();
  caches.open(CACHE).then(cache => cache.put(req, clone)).catch(() => {});
  return res;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (NEVER_CACHE.some(re => re.test(url.pathname))) return;

  const fresh = ALWAYS_FRESH.some(re => re.test(url.pathname));

  // ── Navigations ──
  if (req.mode === 'navigate') {
    if (fresh) {
      e.respondWith(
        fetch(req)
          .then(res => store(req, res))
          .catch(() => caches.match(req).then(c => c || caches.match(OFFLINE))),
      );
      return;
    }

    e.respondWith(
      caches.match(req).then(cached => {
        const network = fetch(req)
          .then(res => store(req, res))
          .catch(() => cached || caches.match(OFFLINE));
        // Cached copy wins the race when there is one; the fetch still runs and
        // refreshes the entry for next time.
        return cached || network;
      }),
    );
    return;
  }

  // ── Static assets: stale-while-revalidate ──
  if (/\.(avif|webp|png|jpg|jpeg|svg|ico|woff2?|css|js|json|txt)$/.test(url.pathname) ||
      url.pathname.startsWith('/_next/static/')) {
    e.respondWith(
      caches.match(req).then(cached => {
        const network = fetch(req).then(res => store(req, res)).catch(() => cached);
        return cached || network;
      }),
    );
  }
});
