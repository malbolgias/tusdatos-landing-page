
import { testButtonContrast } from './contrastChecker';

// Function to run contrast tests and log results
export const runContrastTests = () => {
  console.log('Starting accessibility contrast tests...');
  const results = testButtonContrast();
  
  // Return summary for potential UI display
  return {
    totalTests: results.length,
    passed: results.filter(r => r.normalPassesAA && r.hoverPassesAA).length,
    failed: results.filter(r => !r.normalPassesAA || !r.hoverPassesAA).length,
    results
  };
};

// Auto-run tests in development
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  // Run tests after a short delay to ensure everything is loaded
  setTimeout(() => {
    runContrastTests();
  }, 1000);
}
