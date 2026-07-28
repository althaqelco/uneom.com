import { Fragment } from 'react';
import Link from 'next/link';

/**
 * Renders article body text, turning `[anchor](/path/)` into a real link.
 *
 * Article bodies are plain strings. That kept authoring simple, but it meant a
 * 1,300-word post could not link to the product, industry or resource page it
 * spends two paragraphs describing — every internal link on a post came from
 * navigation chrome, with anchor text like "Industries" and "Shop". Contextual
 * links with descriptive anchors are worth considerably more, both to a reader
 * mid-sentence and to a crawler working out what a page is about.
 *
 * Deliberately not a markdown parser. It recognises exactly one construct, so
 * there is no ambiguity about how a body string renders, and body text stays
 * readable as prose in the data files.
 *
 * Only site-internal absolute paths are linkable. A `[text](https://…)`,
 * protocol-relative, or `javascript:` target renders as plain text rather than
 * becoming a link — body strings are authored data, and this keeps a bad or
 * malicious path from turning into an outbound or executable link.
 */

const PATTERN = /\[([^\]\n]+)\]\((\/[^)\s]*)\)/g;

export function RichText({ text }: { text: string }) {
  if (!text.includes('](')) return <>{text}</>;

  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  PATTERN.lastIndex = 0;
  while ((m = PATTERN.exec(text)) !== null) {
    const [full, label, href] = m;

    // Single leading slash only: "//evil.com" is protocol-relative, not internal.
    if (href.startsWith('//')) continue;

    if (m.index > last) nodes.push(text.slice(last, m.index));
    nodes.push(
      <Link
        key={`${m.index}-${href}`}
        href={href}
        className="font-medium text-accent-700 underline decoration-accent-700/30 underline-offset-4 transition-colors hover:decoration-accent-700"
      >
        {label}
      </Link>,
    );
    last = m.index + full.length;
  }

  if (last === 0) return <>{text}</>;
  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}

/** Strips link syntax back to plain prose — for metadata, JSON-LD and excerpts. */
export function stripLinks(text: string): string {
  return text.replace(PATTERN, '$1');
}
