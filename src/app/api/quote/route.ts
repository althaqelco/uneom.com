import { NextResponse, type NextRequest } from 'next/server';

/**
 * Quote submission endpoint.
 *
 * MVP — accepts form-encoded submissions from /quote/, validates basic
 * shape, and forwards to the operations team. CRM integration (HubSpot
 * / Zoho — see master-plan-v11 §15.3) is wired here once the user
 * provides credentials.
 *
 * For now: parses, validates, persists to a minimal log line, and 302s
 * the user to a thank-you state.
 */

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') || '';
  let data: Record<string, string> = {};

  if (contentType.includes('application/json')) {
    data = await req.json();
  } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const form = await req.formData();
    for (const [k, v] of form.entries()) data[k] = String(v);
  }

  // Validation
  const required = ['industry', 'headcount', 'city', 'name', 'company', 'email'];
  const missing = required.filter(k => !data[k] || data[k].trim() === '');
  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: 'missing_fields', fields: missing }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  // Honeypot field — if filled, silently drop
  if (data.website && data.website !== '') {
    return NextResponse.json({ ok: true, id: 'silent' });
  }

  // TODO (master-plan-v11 §15.3): CRM integration
  // - HubSpot or Zoho contact creation
  // - Lead-scoring computation
  // - Sales notification email
  // - User confirmation email
  console.log('[QUOTE]', JSON.stringify({ ts: Date.now(), ...data }));

  // Redirect form submissions; JSON callers get JSON
  if (contentType.includes('application/json')) {
    return NextResponse.json({ ok: true, message: 'Quote received. We respond within one business day.' });
  }

  return NextResponse.redirect(new URL('/quote/?status=received', req.url), 303);
}

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: 'quote', accepts: ['POST'] });
}
