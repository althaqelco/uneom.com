import Link from 'next/link';
import { breadcrumbSchema, type BreadcrumbItem } from '@/lib/seo/schemas';
import { JsonLd } from '@/lib/seo/JsonLd';

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: Props) {
  const withHome = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(withHome)} />
      <nav aria-label="Breadcrumb" className="container-page pt-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-500">
          {withHome.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && <span className="mx-1 text-ink-300" aria-hidden>/</span>}
              {i === withHome.length - 1 ? (
                <span aria-current="page" className="font-medium text-navy-900">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-accent-700 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
