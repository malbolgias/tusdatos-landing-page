
import React, { useEffect } from 'react';
import { runContrastTests } from '@/utils/contrastTest';

const ContrastTestRunner = () => {
  useEffect(() => {
    // Run tests when component mounts
    runContrastTests();
  }, []);

  return null; // This component doesn't render anything
};

export default ContrastTestRunner;
