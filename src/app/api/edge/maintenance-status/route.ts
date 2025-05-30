import { getConfig } from '@/config/env';
import { MongoClient } from 'mongodb';

export async function GET() {
  const config = getConfig();
  
  // Check if maintenance check is enabled
  if (!config.FEATURE_FLAGS.maintenanceCheck) {
    return new Response(JSON.stringify({ message: 'Maintenance check disabled' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Connect to MongoDB
    const client = new MongoClient(config.MONGODB_URI);
    await client.connect();
    
    const db = client.db('strata');
    const maintenanceCollection = db.collection('maintenance');
    
    // Get the latest maintenance status
    const maintenanceStatus = await maintenanceCollection.findOne(
      {},
      { sort: { timestamp: -1 } }
    );
    
    await client.close();

    return new Response(JSON.stringify({
      status: maintenanceStatus?.status || 'operational',
      message: maintenanceStatus?.message || 'System is operational',
      lastUpdated: maintenanceStatus?.timestamp || new Date().toISOString()
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error checking maintenance status:', error);
    return new Response(JSON.stringify({
      status: 'error',
      message: 'Failed to check maintenance status'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 