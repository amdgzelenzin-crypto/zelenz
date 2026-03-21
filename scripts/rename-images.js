const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images',
  'public/images/gallery',
  'public/images/studio',
  'public/images/services',
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    // Only process image files
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) return;

    // Skip if already a directory
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) return;

    const newName = file
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-_.]/g, '');

    if (newName !== file) {
      const newPath = path.join(dir, newName);
      fs.renameSync(fullPath, newPath);
      console.log(`✓ Renamed: ${file} → ${newName}`);
    }
  });
});

console.log('✅ Done renaming images.');
