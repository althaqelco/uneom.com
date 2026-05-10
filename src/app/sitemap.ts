import type { MetadataRoute } from 'next';
import { INDUSTRIES } from '@/lib/data/industries';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { SERVICES } from '@/lib/data/services';
import { PRODUCT_CATEGORIES, PRODUCTS } from '@/lib/data/products';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blog';
import { RESOURCES } from '@/lib/data/resources';
import { CASE_STUDIES } from '@/lib/data/case-studies';

const SITE = 'https://uneom.com';

/**
 * Master sitemap. Per master-plan-v11 §11 we'll segment to 6 files at scale,
 * but Next.js single-sitemap output is fine until we cross 500+ URLs.
 *
 * Build-time invariant: total entries should sit in 270–300 (en + ar mirrors).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastmod = new Date('2026-05-08');
  const entries: MetadataRoute.Sitemap = [];

  function add(path: string, freq: MetadataRoute.Sitemap[number]['changeFrequency'], pri: number, mirrorAr = true) {
    entries.push({ url: `${SITE}${path}`, lastModified: lastmod, changeFrequency: freq, priority: pri });
    if (mirrorAr) {
      entries.push({ url: `${SITE}/ar${path}`, lastModified: lastmod, changeFrequency: freq, priority: pri });
    }
  }

  // ===== Core pages (9 × 2 = 18) =====
  add('/',                  'weekly',  1.0);
  add('/about/',            'monthly', 0.7);
  add('/contact/',          'monthly', 0.7);
  add('/quote/',            'monthly', 0.9);
  add('/faq/',              'monthly', 0.6);
  add('/careers/',          'monthly', 0.5);
  add('/privacy-policy/',   'yearly',  0.3);
  add('/terms-of-service/', 'yearly',  0.3);
  add('/license/',          'yearly',  0.3);

  // ===== Hubs (7 × 2 = 14) =====
  add('/industries/',   'monthly', 0.9);
  add('/locations/',    'monthly', 0.9);
  add('/services/',     'monthly', 0.8);
  add('/shop/',         'weekly',  0.9);
  add('/blog/',         'weekly',  0.85);
  add('/resources/',    'monthly', 0.85);
  add('/case-studies/', 'monthly', 0.85);

  // ===== Industry pillars (8 × 2 = 16) =====
  for (const i of INDUSTRIES) add(`/industries/${i.slug}/`, 'monthly', 0.85);

  // ===== City pages (24 × 2 = 48) =====
  for (const c of SAUDI_CITIES) add(`/locations/${c.slug}/`, 'monthly', 0.7);

  // ===== Services (7 × 2 = 14) =====
  for (const s of SERVICES) add(`/services/${s.slug}/`, 'monthly', 0.7);

  // ===== Shop categories (8 × 2 = 16) =====
  for (const c of PRODUCT_CATEGORIES) add(`/shop/${c.slug}/`, 'weekly', 0.75);

  // ===== Products (16 × 2 = 32) =====
  for (const p of PRODUCTS) add(`/shop/${p.category}/${p.slug}/`, 'weekly', 0.7);

  // ===== Blog categories (6 × 2 = 12) =====
  for (const c of BLOG_CATEGORIES) add(`/blog/category/${c.slug}/`, 'weekly', 0.7);

  // ===== Blog posts (10 × 2 = 20) =====
  for (const p of BLOG_POSTS) add(`/blog/${p.slug}/`, 'monthly', 0.65);

  // ===== Resources (12 × 2 = 24) =====
  for (const r of RESOURCES) add(`/resources/${r.slug}/`, 'monthly', 0.7);

  // ===== Case studies (8 × 2 = 16) =====
  for (const c of CASE_STUDIES) add(`/case-studies/${c.slug}/`, 'monthly', 0.7);

  // ===== Price index (1 × 2 = 2) =====
  add('/resources/uniform-price-index-ksa/', 'yearly', 0.8);

  return entries;
}
