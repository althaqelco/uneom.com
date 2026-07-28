'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

/**
 * Paginated post grid.
 *
 * Why this exists: /blog rendered every post as a full card in one document.
 * At 46 posts that was a 248 KB HTML file; at the full 101-post schedule it
 * would have passed 500 KB, and every visitor downloaded all of it to read the
 * three cards above the fold.
 *
 * This component receives a *slim* record per post (the seven fields a card
 * actually shows — not the sections, FAQs, Arabic bodies or author blocks) and
 * renders one page of cards at a time. The rest of the corpus travels once, as
 * data, at roughly 300 bytes a post instead of 2.4 KB of markup.
 *
 * Paging is component state on purpose. It creates no /blog/page/2 routes and
 * touches no URL, per the brief. The tradeoff that buys: a reader cannot link
 * to or bookmark page 4, and the browser Back button leaves the listing rather
 * than stepping back a page. Every post URL itself is unaffected, and the full
 * link set stays crawlable through <ArchiveList> and the category pages.
 */

export type SlimPost = {
  slug: string;
  title: string;
  excerpt: string;
  hero: string;
  publishedAt: string;
  readingMinutes: number;
  category: string;
};

type Locale = 'en' | 'ar';

const T = {
  en: {
    read: (n: number) => `${n} min read`,
    pagination: 'Article pages',
    prev: 'Previous page',
    next: 'Next page',
    page: (n: number) => `Page ${n}`,
    current: (n: number, t: number) => `Page ${n} of ${t}`,
    locale: 'en-GB',
  },
  ar: {
    read: (n: number) => `${n} دقيقة قراءة`,
    pagination: 'صفحات المقالات',
    prev: 'الصفحة السابقة',
    next: 'الصفحة التالية',
    page: (n: number) => `الصفحة ${n}`,
    current: (n: number, t: number) => `الصفحة ${n} من ${t}`,
    locale: 'ar-SA',
  },
} as const;

/**
 * Windowed page list: first, last, and the current page with a neighbour each
 * side. Gaps collapse to an ellipsis. Under 8 pages nothing is elided, since
 * the ellipsis costs more in comprehension than the row saves in width.
 */
function pageWindow(current: number, total: number): (number | 'gap')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const out: (number | 'gap')[] = [];
  const push = (n: number) => { if (!out.includes(n)) out.push(n); };

  push(1);
  if (current - 1 > 2) out.push('gap');
  for (let n = Math.max(2, current - 1); n <= Math.min(total - 1, current + 1); n++) push(n);
  if (current + 1 < total - 1) out.push('gap');
  push(total);

  return out;
}

function Chevron({ flip }: { flip: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={`h-5 w-5 ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function Card({ post, locale }: { post: SlimPost; locale: Locale }) {
  const t = T[locale];
  const base = locale === 'ar' ? '/ar/blog' : '/blog';
  const date = new Date(post.publishedAt).toLocaleDateString(t.locale, {
    day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <Link href={`${base}/${post.slug}/`} className="group flex flex-col card-hover overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
        <picture>
          <source type="image/avif" srcSet={`/images/${post.hero}.avif`} />
          <source type="image/webp" srcSet={`/images/${post.hero}.webp`} />
          <img
            src={`/images/${post.hero}.avif`}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy" decoding="async" width={1920} height={1080}
          />
        </picture>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
          {post.category}
        </div>
        <h3 className="mt-3 text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors balance">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-ink-400">
          <time dateTime={post.publishedAt}>{date}</time>
          <span aria-hidden>·</span>
          <span>{t.read(post.readingMinutes)}</span>
        </div>
      </div>
    </Link>
  );
}

export function PostGrid({
  posts,
  locale,
  perPage = 12,
}: {
  posts: SlimPost[];
  locale: Locale;
  perPage?: number;
}) {
  const t = T[locale];
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const total = Math.max(1, Math.ceil(posts.length / perPage));
  const slice = useMemo(
    () => posts.slice((page - 1) * perPage, page * perPage),
    [posts, page, perPage],
  );

  const go = useCallback((n: number) => {
    const next = Math.min(total, Math.max(1, n));
    if (next === page) return;
    setPage(next);
    // Land the reader at the top of the grid, not wherever the old page's
    // scroll position happened to leave them.
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page, total]);

  const window = pageWindow(page, total);
  const flip = locale === 'ar';

  return (
    <>
      <div ref={topRef} className="scroll-mt-28" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {slice.map(p => <Card key={p.slug} post={p} locale={locale} />)}
      </div>

      <p className="sr-only" aria-live="polite">{t.current(page, total)}</p>

      {total > 1 && (
        <nav aria-label={t.pagination} className="flex items-center justify-center gap-2 pt-14">
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 1}
            aria-label={t.prev}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-400 transition-colors hover:bg-ink-100 hover:text-navy-900 disabled:pointer-events-none disabled:opacity-30"
          >
            <Chevron flip={flip} />
          </button>

          {window.map((n, i) =>
            n === 'gap' ? (
              <span key={`gap-${i}`} aria-hidden className="w-8 select-none text-center text-ink-400">…</span>
            ) : (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-label={t.page(n)}
                aria-current={n === page ? 'page' : undefined}
                className={
                  n === page
                    ? 'h-12 w-12 rounded-2xl bg-accent-600 text-base font-bold text-white shadow-lg shadow-accent-600/30'
                    : 'h-12 w-12 rounded-2xl text-base font-semibold text-ink-600 transition-colors hover:bg-ink-100 hover:text-navy-900'
                }
              >
                {n}
              </button>
            ),
          )}

          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === total}
            aria-label={t.next}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-400 transition-colors hover:bg-ink-100 hover:text-navy-900 disabled:pointer-events-none disabled:opacity-30"
          >
            <Chevron flip={!flip} />
          </button>
        </nav>
      )}
    </>
  );
}
