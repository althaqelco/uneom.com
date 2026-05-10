/**
 * On-demand ISR revalidation API route.
 * Protected by REVALIDATE_SECRET environment variable.
 * Per master-plan-v11 §3.4.1.
 */

import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { path, tag, secret } = await req.json();

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { ok: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (path) revalidatePath(path);
    if (tag) revalidateTag(tag);

    return NextResponse.json({
      revalidated: true,
      path: path || null,
      tag: tag || null,
      ts: Date.now()
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
