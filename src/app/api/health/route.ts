/**
 * Health check endpoint for uptime monitoring.
 * Returns 200 with timestamp and build metadata.
 */

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'uneom-web',
    version: process.env.npm_package_version || '1.0.0'
  });
}
