import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log the form submission (in production, you'd save to a database)
    console.log('Form submission received:', data);

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted successfully',
        data: data 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Form submission API endpoint' },
    { status: 200 }
  );
} 