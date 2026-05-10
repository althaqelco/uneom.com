/**
 * ResponsiveImage — single source of truth for rendering images from
 * the registry (src/lib/data/images.ts).
 *
 * - Serves AVIF as primary, WebP as fallback via <picture>
 * - Uses the slug to look up dimensions, alt, srcSet
 * - Emits ImageObject JSON-LD when `withSchema` is true
 * - Forces width+height attributes (prevents CLS, mandatory per master-plan-v11 §10.2)
 */

import { IMAGES, buildSrcSet, defaultSizes, type ImageMetadata } from '@/lib/data/images';
import { imageObjectSchema } from '@/lib/seo/imageSchema';

interface Props {
  /** Lookup key in IMAGES registry, e.g. "cities/hero-riyadh" or "products/medical-scrubs/scrub-set-classic". */
  slug: string;
  /** Override alt (defaults to registry-generated). */
  alt?: string;
  /** Override sizes attribute (defaults to category default). */
  sizes?: string;
  /** Eager loading + fetchpriority high for above-the-fold heroes. */
  priority?: boolean;
  /** Emit JSON-LD ImageObject schema inline. Default true for hero-class images, false for inline body. */
  withSchema?: boolean;
  /** Optional className applied to the <img>. */
  className?: string;
}

export function ResponsiveImage({
  slug,
  alt: altOverride,
  sizes: sizesOverride,
  priority = false,
  withSchema,
  className
}: Props) {
  const img: ImageMetadata | undefined = IMAGES[slug];
  if (!img) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[ResponsiveImage] slug not found in registry: ${slug}`);
    }
    return null;
  }

  const alt = altOverride ?? img.alt;
  const sizes = sizesOverride ?? defaultSizes(img.category);
  const srcSetAvif = buildSrcSet(img);
  const srcSetWebp = img.variants
    .map(v => `${v.path.replace(/\.avif$/, '.webp')} ${v.width}w`)
    .concat(`${img.webp} ${img.width}w`)
    .join(', ');

  // Schema default: yes for heroes/cities/products, no for blog/inline
  const shouldEmitSchema =
    withSchema ?? ['heroes', 'cities', 'products', 'case-studies', 'resources'].includes(img.category);

  return (
    <>
      {shouldEmitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema(img)) }}
        />
      )}
      <picture>
        <source type="image/avif" srcSet={srcSetAvif} sizes={sizes} />
        <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
        <img
          src={img.path}
          alt={alt}
          width={img.width}
          height={img.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          sizes={sizes}
          srcSet={srcSetAvif}
          className={className}
        />
      </picture>
    </>
  );
}
