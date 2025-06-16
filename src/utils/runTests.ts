
import { runContrastTests } from './contrastTest';

// Run the contrast tests immediately
console.log('🔍 Running contrast tests...');
const testResults = runContrastTests();

console.log('\n📊 Test Summary:');
console.log(`Total tests: ${testResults.totalTests}`);
console.log(`Passed: ${testResults.passed}`);
console.log(`Failed: ${testResults.failed}`);

if (testResults.failed > 0) {
  console.log('\n❌ Issues found! Check the detailed results above.');
} else {
  console.log('\n✅ All contrast tests passed!');
}

export { testResults };
