import { getConfig } from '@/config/env';

export async function GET() {
  const config = getConfig();
  
  // Use environment-specific API URL
  const apiUrl = config.API_URL;
  
  // Check if maintenance check is enabled
  if (!config.FEATURE_FLAGS.maintenanceCheck) {
    return new Response(JSON.stringify({ message: 'Maintenance check disabled' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Your existing maintenance check logic here
  // ...
} 