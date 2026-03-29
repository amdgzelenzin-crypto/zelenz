#!/usr/bin/env node

/**
 * NIXTUDIO Accessibility & Performance Validation Script
 * 
 * This script helps validate that our fixes address the audit issues:
 * - SEO improvements (meta description, H1 tags, structured data)
 * - Performance optimizations (unused JS, render-blocking resources)
 * - Accessibility fixes (contrast, ARIA IDs, heading order)
 * - HTML structure improvements (tables, forms)
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 NIXTUDIO - Validating Accessibility & Performance Fixes\n');

// Check critical files exist and have our fixes
const checks = [
  {
    name: 'Meta Description Length',
    file: 'app/layout.tsx',
    check: (content) => {
      const metaDesc = content.match(/description:\s*["'"]([^"'"]+)["'"]/);
      return metaDesc && metaDesc[1].length <= 160;
    }
  },
  {
    name: 'Font Preconnect Headers',
    file: 'app/layout.tsx',
    check: (content) => content.includes('rel="preconnect"') && content.includes('fonts.googleapis.com')
  },
  {
    name: 'Structured Data Present',
    file: 'components/JsonLd.tsx',
    check: (content) => content.includes('@context": "https://schema.org')
  },
  {
    name: 'Next.js Performance Optimizations',
    file: 'next.config.ts',
    check: (content) => content.includes('optimizePackageImports') && content.includes('compress: true')
  },
  {
    name: 'Table Captions Added',
    file: 'app/services/page.tsx',
    check: (content) => content.includes('<caption className="sr-only">')
  },
  {
    name: 'Accessibility CSS Improvements',
    file: 'app/globals.css',
    check: (content) => content.includes(':focus-visible') && content.includes('prefers-reduced-motion')
  },
  {
    name: 'Proper Heading Hierarchy',
    file: 'app/page.tsx',
    check: (content) => {
      const h1Count = (content.match(/<h1/g) || []).length;
      const hasAriaLabel = content.includes('aria-label=');
      return h1Count === 1 && hasAriaLabel;
    }
  }
];

let passed = 0;
let failed = 0;

checks.forEach(({ name, file, check }) => {
  try {
    const filePath = path.join(process.cwd(), file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (check(content)) {
      console.log(`✅ ${name}`);
      passed++;
    } else {
      console.log(`❌ ${name} - Check failed in ${file}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${name} - Error reading ${file}: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('\n🎉 All checks passed! The audit issues should be resolved.');
  console.log('\n📝 Next steps:');
  console.log('1. Run `npm run build` to test the production build');
  console.log('2. Run `npm run start` to preview the production build');
  console.log('3. Test with Lighthouse to verify improvements');
} else {
  console.log('\n⚠️  Some checks failed. Please review the issues above.');
  process.exit(1);
}
