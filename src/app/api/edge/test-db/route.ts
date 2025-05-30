import { getConfig } from '@/config/env';
import { MongoClient } from 'mongodb';

export async function GET() {
  const config = getConfig();
  const testResults = {
    connection: false,
    write: false,
    read: false,
    error: null as string | null
  };

  try {
    // Test 1: Connection
    const client = new MongoClient(config.MONGODB_URI);
    await client.connect();
    testResults.connection = true;

    const db = client.db('strata');
    const testCollection = db.collection('test');

    // Test 2: Write operation
    const testDoc = {
      test: 'data',
      timestamp: new Date(),
      message: 'Test document'
    };
    await testCollection.insertOne(testDoc);
    testResults.write = true;

    // Test 3: Read operation
    const readDoc = await testCollection.findOne({ test: 'data' });
    testResults.read = !!readDoc;

    // Cleanup: Remove test document
    await testCollection.deleteOne({ test: 'data' });
    
    await client.close();

    return new Response(JSON.stringify({
      success: true,
      tests: testResults,
      message: 'Database tests completed successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Database test error:', error);
    testResults.error = error instanceof Error ? error.message : 'Unknown error';
    
    return new Response(JSON.stringify({
      success: false,
      tests: testResults,
      message: 'Database tests failed'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 