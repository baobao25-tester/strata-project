import { NextResponse } from 'next/server';
import { testConnection, getDb } from '@/lib/db';

export async function GET() {
  try {
    console.log('Testing database connection...');
    console.log('MongoDB URI:', process.env.MONGODB_URI ? 'URI is set' : 'URI is not set');
    
    // Test the connection
    const isConnected = await testConnection();
    if (!isConnected) {
      console.error('Connection test failed');
      return NextResponse.json(
        { 
          error: 'Failed to connect to database',
          details: 'Connection test returned false'
        },
        { status: 500 }
      );
    }

    console.log('Connection successful, getting database instance...');
    // Get database instance
    const db = await getDb('strata_db');
    
    console.log('Listing collections...');
    // Test a simple query
    const collections = await db.listCollections().toArray();
    
    console.log('Collections found:', collections.map(c => c.name));
    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      collections: collections.map(c => c.name),
      environment: process.env.NODE_ENV
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json(
      { 
        error: 'Database test failed', 
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        environment: process.env.NODE_ENV
      },
      { status: 500 }
    );
  }
} 