'use client';

import { useState, type FormEvent } from 'react';
import { INDUSTRIES } from '@/lib/data/industries';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';

const WHATSAPP_NUMBER = '966564612017';

const HEADCOUNT_OPTIONS = [
  { value: '50-199', label: '50 – 199 employees' },
  { value: '200-999', label: '200 – 999 employees' },
  { value: '1000-4999', label: '1,000 – 4,999 employees' },
  { value: '5000+', label: '5,000+ employees' },
];

export function QuoteFormEN() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const industry = fd.get('industry') as string;
    const headcount = fd.get('headcount') as string;
    const city = fd.get('city') as string;
    const name = fd.get('name') as string;
    const company = fd.get('company') as string;
    const email = fd.get('email') as string;
    const phone = fd.get('phone') as string;
    const notes = fd.get('notes') as string;

    // Resolve display names
    const industryName = INDUSTRIES.find(i => i.slug === industry)?.nameEn ?? industry;
    const cityObj = SAUDI_CITIES.find(c => c.slug === city);
    const cityName = cityObj ? `${cityObj.nameEn} — ${cityObj.region}` : city;

    const lines = [
      `📋 *UNEOM — New Quote Request*`,
      ``,
      `🏭 *Industry:* ${industryName}`,
      `👥 *Headcount:* ${headcount}`,
      `📍 *City:* ${cityName}`,
      ``,
      `👤 *Name:* ${name}`,
      `🏢 *Company:* ${company}`,
      `📧 *Email:* ${email}`,
      phone ? `📞 *Phone:* ${phone}` : '',
      notes ? `\n📝 *Notes:*\n${notes}` : '',
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 lg:p-10 space-y-6">
      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-semibold text-navy-900">Which industry?</label>
        <p className="text-xs text-ink-400 mt-1">We tailor the proposal to your sector&apos;s regulators.</p>
        <select id="industry" name="industry" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
          <option value="">Select an industry...</option>
          {INDUSTRIES.map(i => (
            <option key={i.slug} value={i.slug}>{i.nameEn}</option>
          ))}
        </select>
      </div>

      {/* Headcount */}
      <div>
        <label htmlFor="headcount" className="block text-sm font-semibold text-navy-900">How many employees?</label>
        <p className="text-xs text-ink-400 mt-1">Programme economics shift around 200, 1000, and 5000 employees.</p>
        <select id="headcount" name="headcount" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
          <option value="">Select a band...</option>
          {HEADCOUNT_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="block text-sm font-semibold text-navy-900">Primary city of operations</label>
        <p className="text-xs text-ink-400 mt-1">If multi-city, pick the largest. We&apos;ll cover the rest.</p>
        <select id="city" name="city" required className="mt-3 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:ring-0 focus:outline-none">
          <option value="">Select a city...</option>
          {SAUDI_CITIES.map(c => (
            <option key={c.slug} value={c.slug}>{c.nameEn} — {c.region}</option>
          ))}
        </select>
      </div>

      <div className="border-t border-ink-100 pt-6">
        <p className="text-sm font-semibold text-navy-900">Your details</p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-ink-500">Name</label>
            <input id="name" name="name" type="text" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs font-medium text-ink-500">Company</label>
            <input id="company" name="company" type="text" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-ink-500">Work email</label>
            <input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-ink-500">Phone (optional)</label>
            <input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="notes" className="block text-xs font-medium text-ink-500">Anything specific?</label>
          <textarea id="notes" name="notes" rows={3} placeholder="Existing programme, target launch date, custom designs..." className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-base text-navy-900 focus:border-accent-500 focus:outline-none" />
        </div>
      </div>

      <button type="submit" disabled={sending} className="btn-primary w-full text-base flex items-center justify-center gap-2">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        {sending ? 'Opening WhatsApp...' : 'Send via WhatsApp →'}
      </button>

      <p className="text-xs text-ink-400 text-center">
        Opens WhatsApp with your brief pre-filled. We&apos;ll respond within one business day.
      </p>
    </form>
  );
}
