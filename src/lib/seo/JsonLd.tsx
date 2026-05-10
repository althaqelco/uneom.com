/**
 * JsonLd — render one or more JSON-LD blocks inline. Server-Component safe.
 * Importable from any page or layout to inject Schema.org graphs into <head>
 * without client JavaScript.
 */

interface Props { data: object | object[]; }

export function JsonLd({ data }: Props) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
