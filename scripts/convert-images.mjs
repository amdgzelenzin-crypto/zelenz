import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageMap = {
  'public/images/hero-bridal.jpg': 'premium-bridal-makeup-studio-pala-kerala-hero',
  'public/images/hero-bridal-2.jpg': 'hd-bridal-makeup-artist-pala-kottayam',
  'public/images/hero-bridal-3.jpg': 'traditional-kerala-bridal-styling-pala',
  'public/images/nikita-portrait.jpg': 'nikita-liby-professional-makeup-artist-pala',
  'public/images/nikita-detail-work.png': 'detailed-bridal-makeover-pala-kottayam',
  'public/images/party-makeup.jpg': 'elegant-reception-party-makeup-pala',
  'public/images/book-now.jpg': 'book-bridal-makeup-appointment-pala',
  
  // Gallery
  'public/images/gallery/bridal-001.jpg': 'hd-christian-bridal-makeup-look-pala',
  'public/images/gallery/bridal-002.jpg': 'traditional-hindu-wedding-makeup-kottayam',
  'public/images/gallery/bridal-003.jpg': 'south-indian-temple-wedding-makeup-pala',
  'public/images/gallery/bridal-004.jpg': 'modern-bridal-reception-makeup-style',
  'public/images/gallery/bridal-005.jpg': 'north-indian-bridal-makeup-artist-kerala',
  'public/images/gallery/bridal-006.jpg': 'elegant-engagement-makeup-pala-kottayam',
  'public/images/gallery/bridal-007.jpg': 'luxury-bridal-prep-pala-kerala',
  'public/images/gallery/hair-001.jpg': 'bridal-hair-styling-pala-kerala',
  'public/images/gallery/hair-002.jpg': 'traditional-kerala-bridal-hair-flowers',
  'public/images/gallery/hair-003.jpg': 'modern-wedding-hair-style-makeup-pala',
  'public/images/gallery/hair-004.jpg': 'elegant-party-hair-styling-kottayam',
  'public/images/gallery/hair-005.jpg': 'textured-bridal-braid-hairstyle-pala',
  'public/images/gallery/hair-006.jpg': 'loose-wave-bridal-hair-pala',
  'public/images/gallery/hair-007.jpg': 'intricate-wedding-hair-bun-look',
  'public/images/gallery/hair-008.jpg': 'celebrity-style-bridal-hair-styling',
  'public/images/gallery/nails-001.jpg': 'gel-nail-extensions-pala-kottayam',
  'public/images/gallery/nails-002.jpg': 'bridal-nail-art-design-pala',
  'public/images/gallery/nails-003.jpg': 'french-bridal-nails-salon-pala',
  'public/images/gallery/nails-004.jpg': 'luxury-pedicure-manicure-pala',
  'public/images/gallery/nails-005.jpg': 'chrome-nail-art-bridal-salon',
  'public/images/gallery/nails-006.jpg': 'detailed-nail-extensions-salon-pala',
  'public/images/gallery/party-001.jpg': 'flawless-engagement-reception-styling-pala',
  'public/images/gallery/party-002.jpg': 'bridesmaid-party-makeup-styling-pala',

  // Studio
  'public/images/studio/studio-001.jpg': 'nixtudio-bridal-salon-reception-pala',
  'public/images/studio/studio-002.jpg': 'premium-makeup-studio-interior-kerala',
  'public/images/studio/studio-003.png': 'nixtudio-luxury-salon-interior-pala',
  'public/images/studio/studio-004.png': 'professional-makeup-station-pala-studio',
  'public/images/studio/studio-005.jpg': 'bridal-prep-suite-pala-kottayam',
  'public/images/studio/studio-006.jpg': 'luxury-hair-spa-station-pala',
  'public/images/studio/studio-007.png': 'nixtudio-studio-signage-pala-kerala',

  // Services
  'public/images/services/bridal-service.jpg': 'professional-bridal-makeup-service-pala'
};

const convert = async () => {
  for (const [oldPath, newBaseName] of Object.entries(imageMap)) {
    const fullOldPath = path.resolve(process.cwd(), oldPath);
    const dir = path.dirname(fullOldPath);
    const newPath = path.join(dir, `${newBaseName}.webp`);

    if (fs.existsSync(fullOldPath)) {
      console.log(`Converting ${oldPath} to ${newBaseName}.webp...`);
      await sharp(fullOldPath)
        .webp({ quality: 80 })
        .toFile(newPath);
      
      // We'll keep the old ones for a moment to avoid breaking builds while we update code,
      // but the user wants them REPLACED. We'll delete them after verification.
    } else {
      console.warn(`File not found: ${oldPath}`);
    }
  }
  console.log('Conversion complete!');
};

convert().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
