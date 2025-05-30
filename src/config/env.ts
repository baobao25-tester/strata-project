export const config = {
  preview: {
    API_URL: 'https://preview-api.strata-project.com',
    NODE_ENV: 'preview',
    MONGODB_URI: 'mongodb+srv://phantomepickid:Duybao2007@kiendev1.sklqwie.mongodb.net/',
    FEATURE_FLAGS: {
      maintenanceCheck: true,
      emergencyAlert: true
    }
  },
  production: {
    API_URL: 'https://api.strata-project.com',
    NODE_ENV: 'production',
    MONGODB_URI: 'mongodb+srv://phantomepickid:Duybao2007@kiendev1.sklqwie.mongodb.net/',
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