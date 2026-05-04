/**
 * Contact / Quote API Route — Firebase Ready
 * 
 * Handles both:
 * 1. Standard contact form submissions (existing fields)
 * 2. QuoteWizard submissions (extended fields)
 * 
 * Data is logged and can be forwarded to:
 * - Firebase Firestore (when connected)
 * - Google Sheets API
 * - Email notifications
 * - WhatsApp Business API
 */
import { NextResponse } from 'next/server';

interface ContactPayload {
  // Standard contact fields
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  employeeCount?: string;
  message?: string;
  
  // QuoteWizard extended fields
  contactName?: string;
  companyName?: string;
  uniformType?: string;
  quantity?: string;
  city?: string;
  deliveryUrgency?: string;
  notes?: string;
  source?: string;
  discount?: number;
  timestamp?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    
    // Normalize field names (support both forms)
    const name = body.fullName || body.contactName || '';
    const companyName = body.company || body.companyName || '';
    const phone = body.phone || '';
    const email = body.email || '';
    const industry = body.industry || '';
    
    // Validate — at minimum we need a name and phone
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'الاسم ورقم الهاتف مطلوبان — Name and phone are required' },
        { status: 400 }
      );
    }

    // Build unified lead record
    const lead = {
      // Identity
      name,
      company: companyName,
      phone,
      email,
      
      // Requirements
      industry,
      uniformType: body.uniformType || '',
      quantity: body.quantity || body.employeeCount || '',
      city: body.city || '',
      deliveryUrgency: body.deliveryUrgency || 'standard',
      
      // Extra
      message: body.message || body.notes || '',
      source: body.source || 'ContactForm',
      discount: body.discount || 0,
      
      // Meta
      timestamp: body.timestamp || new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
    };

    // Log to server (Cloud Run logs → Cloud Logging)
    console.log('📋 NEW LEAD:', JSON.stringify(lead, null, 2));

    // TODO: Future integrations
    // await saveToFirestore(lead);
    // await sendEmailNotification(lead);
    // await sendToGoogleSheets(lead);
    // await notifyWhatsApp(lead);

    return NextResponse.json(
      { 
        success: true, 
        message: 'تم استلام طلبك بنجاح — Form submitted successfully',
        leadId: `UNEOM-${Date.now()}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact API Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'حدث خطأ، يرجى المحاولة مرة أخرى — An error occurred' 
      },
      { status: 500 }
    );
  }
}