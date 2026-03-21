const fs = require('fs');
const path = require('path');

const galleryDir = 'public/images/gallery';

// Get all files
const files = fs.readdirSync(galleryDir);

// Rename files with spaces and .jpg.jpeg extensions
files.forEach(file => {
  const fullPath = path.join(galleryDir, file);
  
  // Skip if it's a directory
  if (fs.statSync(fullPath).isDirectory()) return;
  
  let newName = file;
  
  // Fix .jpg.jpeg extension
  newName = newName.replace('.jpg.jpeg', '.jpg');
  
  // Replace spaces with hyphens
  newName = newName.replace(/\s+/g, '-');
  
  // Convert to lowercase
  newName = newName.toLowerCase();
  
  // Rename bride to bridal
  newName = newName.replace('bride-', 'bridal-');
  
  if (newName !== file) {
    const newPath = path.join(galleryDir, newName);
    
    // Check if target already exists
    if (fs.existsSync(newPath)) {
      // Find next available number
      const match = newName.match(/^([a-z]+)-(\d+)/);
      if (match) {
        const prefix = match[1];
        let num = parseInt(match[2]);
        
        // Find highest existing number for this prefix
        const existing = files
          .filter(f => f.startsWith(prefix + '-'))
          .map(f => {
            const m = f.match(/^[a-z]+-(\d+)/);
            return m ? parseInt(m[1]) : 0;
          });
        
        const maxNum = Math.max(...existing, num);
        newName = `${prefix}-${String(maxNum + 1).padStart(3, '0')}.jpg`;
      }
    }
    
    const finalPath = path.join(galleryDir, newName);
    fs.renameSync(fullPath, finalPath);
    console.log(`✓ Renamed: ${file} → ${newName}`);
  }
});

console.log('✅ Done organizing images!');
