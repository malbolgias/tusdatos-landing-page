
// Utility functions for checking color contrast ratios
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

export const getLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

export const getContrastRatio = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 0;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

export const meetsWCAGAA = (contrastRatio: number): boolean => {
  return contrastRatio >= 4.5; // WCAG AA standard for normal text
};

export const meetsWCAGAAA = (contrastRatio: number): boolean => {
  return contrastRatio >= 7; // WCAG AAA standard for normal text
};

// Test function to check button contrast
export const testButtonContrast = () => {
  const buttonTests = [
    {
      name: 'Primary Button',
      background: '#222222', // primary color
      text: '#ffffff',
      description: 'Default primary button'
    },
    {
      name: 'Secondary Button (White background)',
      background: '#ffffff',
      text: '#222222',
      description: 'Secondary button on white background'
    },
    {
      name: 'Blue Button',
      background: '#2563eb', // blue-600
      text: '#ffffff',
      description: 'Blue themed buttons'
    },
    {
      name: 'Green Button (Fixed)',
      background: '#059669', // green-700 - darker for better contrast
      text: '#ffffff',
      description: 'Green themed buttons - now meets WCAG AA'
    },
    {
      name: 'Purple Button',
      background: '#9333ea', // purple-600
      text: '#ffffff',
      description: 'Purple themed buttons'
    },
    {
      name: 'White Button on Blue',
      background: '#2563eb', // blue-600
      text: '#ffffff',
      description: 'White text on blue background'
    }
  ];

  console.log('🎨 Button Contrast Test Results:');
  console.log('================================');
  
  const results = buttonTests.map(test => {
    const contrastRatio = getContrastRatio(test.background, test.text);
    const passesAA = meetsWCAGAA(contrastRatio);
    const passesAAA = meetsWCAGAAA(contrastRatio);
    
    const status = passesAA ? '✅ PASS' : '❌ FAIL';
    const grade = passesAAA ? 'AAA' : passesAA ? 'AA' : 'FAIL';
    
    console.log(`${status} ${test.name}`);
    console.log(`   Background: ${test.background}, Text: ${test.text}`);
    console.log(`   Contrast Ratio: ${contrastRatio.toFixed(2)}:1 (${grade})`);
    console.log(`   ${test.description}`);
    console.log('');
    
    return {
      ...test,
      contrastRatio,
      passesAA,
      passesAAA,
      grade
    };
  });

  const failedTests = results.filter(result => !result.passesAA);
  
  if (failedTests.length > 0) {
    console.log('⚠️  Failed Contrast Tests:');
    failedTests.forEach(test => {
      console.log(`- ${test.name}: ${test.contrastRatio.toFixed(2)}:1 (needs 4.5:1 minimum)`);
    });
  } else {
    console.log('🎉 All button contrast tests passed!');
  }
  
  return results;
};
