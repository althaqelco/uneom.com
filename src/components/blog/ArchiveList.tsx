import Link from 'next/link';

/**
 * Server-rendered index of every published post.
 *
 * <PostGrid> renders one page of cards at a time, so only the current page's
 * links exist as markup. This restores the rest — as plain anchors, which cost
 * roughly a hundred bytes each instead of the ~2.4 KB a full card costs.
 *
 * That keeps three things true that pagination would otherwise put at risk:
 * every post keeps an internal link from the blog hub, a crawler reaches the
 * whole corpus in one hop without executing JavaScript, and a reader who knows
 * what they are looking for can scan titles instead of paging through cards.
 *
 * It is ordinary visible content, not a hidden link farm — it renders, it is
 * useful, and it says how many posts it covers.
 */

export type ArchiveEntry = { slug: string; title: string; publishedAt: string };

export function ArchiveList({
  entries,
  locale,
}: {
  entries: ArchiveEntry[];
  locale: 'en' | 'ar';
}) {
  if (entries.length === 0) return null;

  const ar = locale === 'ar';
  const base = ar ? '/ar/blog' : '/blog';
  const heading = ar ? 'كل المقالات' : 'All articles';
  const note = ar
    ? `${entries.length} مقالة — مرتّبة من الأحدث إلى الأقدم`
    : `${entries.length} posts — newest first`;

  return (
    <section className="container-page border-t border-ink-200 py-16">
      <h2 className="text-lg font-bold text-navy-900">{heading}</h2>
      <p className="mt-1 text-sm text-ink-400">{note}</p>

      <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(e => (
          <li key={e.slug}>
            <Link
              href={`${base}/${e.slug}/`}
              className="block text-sm leading-snug text-ink-600 transition-colors hover:text-accent-700"
            >
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
