// Feature flags configuration
export const FEATURES = {
  BEFORE_AFTER_SECTION: false, // Disabled for now - will revisit later
} as const;

// Type for feature flags
export type FeatureFlags = typeof FEATURES;

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (feature: keyof FeatureFlags): boolean => {
  return FEATURES[feature];
};
