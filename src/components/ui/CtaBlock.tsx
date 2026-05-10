import Link from 'next/link';

interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** When true, dark navy bg + white text. Default light. */
  dark?: boolean;
}

export function CtaBlock({ eyebrow = 'Next step', heading, body, primary, secondary, dark = false }: Props) {
  const bg = dark ? 'bg-navy-900 text-white' : 'bg-white text-navy-900 ring-1 ring-ink-100';
  const eyebrowColor = dark ? 'text-accent-300' : 'text-accent-700';
  const bodyColor = dark ? 'text-white/80' : 'text-ink-500';

  return (
    <section className={`${bg} relative overflow-hidden rounded-3xl shadow-elevation-lg`}>
      {dark && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 0%, rgba(16,185,129,0.18), transparent 50%)'
          }}
          aria-hidden
        />
      )}
      <div className="relative px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="max-w-2xl">
            {eyebrow && (
              <span className={`text-xs font-bold uppercase tracking-[0.18em] ${eyebrowColor}`}>
                {eyebrow}
              </span>
            )}
            <h2 className={`mt-4 text-display-lg balance ${dark ? 'text-white' : 'text-navy-900'}`}>
              {heading}
            </h2>
            {body && (
              <p className={`mt-5 text-lg leading-relaxed pretty ${bodyColor}`}>
                {body}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {primary && (
              <Link href={primary.href} className={dark ? 'btn-accent' : 'btn-primary'}>
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href} className={dark ? 'btn-ghost text-white hover:bg-white/10 hover:text-white' : 'btn-outline'}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
