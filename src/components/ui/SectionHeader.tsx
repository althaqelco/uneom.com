import { Eyebrow } from './Eyebrow';

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  /** One sentence, ~120 chars max */
  lead?: React.ReactNode;
  align?: 'start' | 'center';
  /** When true, applies display-2xl (hero-class). Default: display-lg */
  hero?: boolean;
  /** Heading level. Hub/listing pages must pass `as="h1"` for their page
   *  title — this component defaulted to h2, leaving 48 hub pages with no
   *  H1. Section headers inside a page keep the default h2. */
  as?: 'h1' | 'h2';
}

export function SectionHeader({ eyebrow, title, lead, align = 'start', hero = false, as = 'h2' }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'items-start';
  const Heading = as;
  return (
    <div className={`flex flex-col gap-5 ${alignment} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className={`${hero ? 'text-display-2xl' : 'text-display-lg'} text-navy-900 balance`}>
        {title}
      </Heading>
      {lead && (
        <p className="text-lg leading-relaxed text-ink-500 pretty">
          {lead}
        </p>
      )}
    </div>
  );
}
