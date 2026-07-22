import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  // Resolve symlinks to prevent duplicate scanning
  const realPath = fs.realpathSync(dirPath);
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.lstatSync(fullPath);
    if (stat.isSymbolicLink()) {
      return; // skip symlinks
    }
    if (stat.isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

async function optimizeImage(filePath) {
  if (!fs.existsSync(filePath)) return;

  const ext = path.extname(filePath).toLowerCase();
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  if (!validExtensions.some(e => filePath.toLowerCase().endsWith(e))) {
    return;
  }

  const fileStat = fs.statSync(filePath);
  const sizeMb = fileStat.size / (1024 * 1024);

  let dir = path.dirname(filePath);
  let baseName = path.basename(filePath);
  
  // Remove trailing extensions cleanly
  let cleanName = baseName.replace(/(\.(jpg|jpeg|png|webp))+$/i, '');

  const webpPath = path.join(dir, `${cleanName}.webp`);

  // If file is already a clean webp and under 500KB, skip re-encoding unless it's huge
  if (filePath === webpPath && sizeMb < 0.5) {
    return;
  }

  console.log(`Processing: ${path.relative(process.cwd(), filePath)} (${sizeMb.toFixed(2)} MB)`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let transform = image;
    if (metadata.width && metadata.width > 1400) {
      transform = transform.resize({ width: 1400, withoutEnlargement: true });
    }

    const tempWebp = path.join(dir, `_temp_${cleanName}.webp`);

    await transform
      .webp({ quality: 80, effort: 5 })
      .toFile(tempWebp);

    const newStat = fs.statSync(tempWebp);
    console.log(` -> WebP created: ${path.relative(process.cwd(), webpPath)} (${(newStat.size / 1024).toFixed(1)} KB)`);

    if (filePath !== webpPath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    if (fs.existsSync(webpPath) && webpPath !== tempWebp) {
      fs.unlinkSync(webpPath);
    }

    fs.renameSync(tempWebp, webpPath);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function main() {
  console.log('--- Starting Image Optimization ---');
  const files = getAllFiles(imagesDir);
  console.log(`Found ${files.length} unique files in public/images/`);

  for (const file of files) {
    await optimizeImage(file);
  }

  // Remove any remaining stray symlinks or non-webp leftovers in gallery if present
  console.log('--- Image Optimization Completed! ---');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
