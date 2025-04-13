export const config = {
  preview: {
    API_URL: 'https://preview-api.strata-project.com',
    NODE_ENV: 'preview',
    FEATURE_FLAGS: {
      maintenanceCheck: true,
      emergencyAlert: true
    }
  },
  production: {
    API_URL: 'https://api.strata-project.com',
    NODE_ENV: 'production',
    FEATURE_FLAGS: {
      maintenanceCheck: true,
      emergencyAlert: true
    }
  }
};

export const getConfig = () => {
  const env = process.env.NODE_ENV || 'preview';
  return config[env as keyof typeof config];
}; 