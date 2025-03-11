import { NextResponse } from 'next/server';

// Vercel Cron Job handler
// This runs every day at midnight as specified in vercel.json
export async function GET(request: Request) {
  try {
    // Check for the authorization header to ensure this request is from Vercel
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET_TOKEN}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Perform cleanup operations here
    // Examples:
    // - Clear temporary data
    // - Archive old records
    // - Generate reports
    // - Update cache
    
    console.log('Daily cleanup job executed at:', new Date().toISOString());
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Cleanup job completed successfully', 
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error executing cleanup job:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred during the cleanup process', 
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 