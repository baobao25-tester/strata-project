import { Pool } from 'pg';

// Check if the database connection string is set
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Optional: Add other pool configurations here
  // max: 20, // set maximum number of clients in the pool
  // idleTimeoutMillis: 30000, // close idle clients after 30 seconds
  // connectionTimeoutMillis: 2000, // return an error after 2 seconds if connection could not be established
});

// Export the pool
export default pool;

// Optional: Helper function to test the connection
export async function testSupabaseConnection() {
  let client;
  try {
    client = await pool.connect();
    // Execute a simple query to test the connection
    await client.query('SELECT 1');
    console.log('Successfully connected to Supabase database.');
    return true;
  } catch (error) {
    console.error('Error connecting to Supabase database:', error);
    return false;
  } finally {
    if (client) {
      client.release();
    }
  }
} 