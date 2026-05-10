import { Eyebrow } from './Eyebrow';

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  /** One sentence, ~120 chars max */
  lead?: React.ReactNode;
  align?: 'start' | 'center';
  /** When true, applies display-2xl (hero-class). Default: display-lg */
  hero?: boolean;
}

export function SectionHeader({ eyebrow, title, lead, align = 'start', hero = false }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto items-center' : 'items-start';
  return (
    <div className={`flex flex-col gap-5 ${alignment} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`${hero ? 'text-display-2xl' : 'text-display-lg'} text-navy-900 balance`}>
        {title}
      </h2>
      {lead && (
        <p className="text-lg leading-relaxed text-ink-500 pretty">
          {lead}
        </p>
      )}
    </div>
  );
}
