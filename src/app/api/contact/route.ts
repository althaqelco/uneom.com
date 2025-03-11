import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract form data
    const { fullName, company, email, phone, industry, employeeCount, message } = body;
    
    // Validate required fields
    if (!fullName || !company || !email || !phone || !industry || !employeeCount || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real implementation, you would:
    // 1. Send an email notification
    // 2. Store the submission in a database
    // 3. Integrate with a CRM system
    
    // For now, we'll just log the submission and return a success response
    console.log('Contact form submission:', {
      fullName,
      company,
      email,
      phone,
      industry,
      employeeCount,
      message,
      timestamp: new Date().toISOString(),
    });
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. We will contact you shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request. Please try again.' 
      },
      { status: 500 }
    );
  }
} 