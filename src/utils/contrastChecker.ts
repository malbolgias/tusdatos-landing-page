
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

// Test function to check button contrast including hover states
export const testButtonContrast = () => {
  const buttonTests = [
    {
      name: 'Primary Button',
      background: '#222222', // primary color
      text: '#ffffff',
      hoverBackground: '#1a1a1a',
      description: 'Default primary button'
    },
    {
      name: 'Secondary Button (White background)',
      background: '#ffffff',
      text: '#222222',
      hoverBackground: '#f3f4f6',
      description: 'Secondary button on white background'
    },
    {
      name: 'Blue Button',
      background: '#2563eb', // blue-600
      text: '#ffffff',
      hoverBackground: '#1d4ed8', // blue-700
      description: 'Blue themed buttons'
    },
    {
      name: 'Green Button (Fixed)',
      background: '#047857', // green-700 - darker for better contrast
      text: '#ffffff',
      hoverBackground: '#065f46', // green-800
      description: 'Green themed buttons - now meets WCAG AA'
    },
    {
      name: 'Purple Button',
      background: '#7c3aed', // purple-600
      text: '#ffffff',
      hoverBackground: '#6d28d9', // purple-700
      description: 'Purple themed buttons'
    },
    {
      name: 'Destructive Button',
      background: '#dc2626', // red-600
      text: '#ffffff',
      hoverBackground: '#b91c1c', // red-700
      description: 'Destructive/error buttons'
    },
    {
      name: 'Ghost Button',
      background: 'transparent',
      text: '#374151', // gray-700
      hoverBackground: '#f3f4f6', // gray-100
      description: 'Ghost variant buttons'
    }
  ];

  console.log('🎨 Button Contrast Test Results (Normal & Hover States):');
  console.log('======================================================');
  
  const results = buttonTests.map(test => {
    const normalContrast = getContrastRatio(test.background === 'transparent' ? '#ffffff' : test.background, test.text);
    const hoverContrast = getContrastRatio(test.hoverBackground, test.text);
    const normalPassesAA = meetsWCAGAA(normalContrast);
    const hoverPassesAA = meetsWCAGAA(hoverContrast);
    const normalPassesAAA = meetsWCAGAAA(normalContrast);
    const hoverPassesAAA = meetsWCAGAAA(hoverContrast);
    
    const normalStatus = normalPassesAA ? '✅ PASS' : '❌ FAIL';
    const hoverStatus = hoverPassesAA ? '✅ PASS' : '❌ FAIL';
    const normalGrade = normalPassesAAA ? 'AAA' : normalPassesAA ? 'AA' : 'FAIL';
    const hoverGrade = hoverPassesAAA ? 'AAA' : hoverPassesAA ? 'AA' : 'FAIL';
    
    console.log(`${test.name}:`);
    console.log(`  Normal: ${normalStatus} - Contrast: ${normalContrast.toFixed(2)}:1 (${normalGrade})`);
    console.log(`  Hover:  ${hoverStatus} - Contrast: ${hoverContrast.toFixed(2)}:1 (${hoverGrade})`);
    console.log(`  Colors: ${test.background} → ${test.hoverBackground} (text: ${test.text})`);
    console.log(`  ${test.description}`);
    console.log('');
    
    return {
      ...test,
      normalContrast,
      hoverContrast,
      normalPassesAA,
      hoverPassesAA,
      normalPassesAAA,
      hoverPassesAAA,
      normalGrade,
      hoverGrade
    };
  });

  const failedTests = results.filter(result => !result.normalPassesAA || !result.hoverPassesAA);
  
  if (failedTests.length > 0) {
    console.log('⚠️  Failed Contrast Tests:');
    failedTests.forEach(test => {
      if (!test.normalPassesAA) {
        console.log(`- ${test.name} (Normal): ${test.normalContrast.toFixed(2)}:1 (needs 4.5:1 minimum)`);
      }
      if (!test.hoverPassesAA) {
        console.log(`- ${test.name} (Hover): ${test.hoverContrast.toFixed(2)}:1 (needs 4.5:1 minimum)`);
      }
    });
    console.log('\n💡 Recommended fixes:');
    console.log('- Use darker background colors for better contrast');
    console.log('- Consider using white text on dark backgrounds');
    console.log('- Test colors at https://webaim.org/resources/contrastchecker/');
  } else {
    console.log('🎉 All button contrast tests passed for both normal and hover states!');
  }
  
  return results;
};
