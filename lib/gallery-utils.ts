import fs from 'fs';
import path from 'path';

export type Category = "bridal" | "party" | "hair" | "nails";

export type GalleryItem = {
  src: string;
  category: Category;
  alt: string;
  label?: string;
};

/**
 * Dynamically loads all gallery images from /public/images/gallery/
 * Categorizes them based on filename patterns
 * This runs at build time (server-side)
 */
export function getGalleryImages(): GalleryItem[] {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  
  if (!fs.existsSync(galleryDir)) {
    console.warn('Gallery directory not found:', galleryDir);
    return [];
  }

  const files = fs.readdirSync(galleryDir);
  
  return files
    .filter(f => {
      const ext = path.extname(f).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    })
    .map(filename => {
      const name = filename.toLowerCase();
      let category: Category = 'bridal'; // default
      
      // Categorize based on filename
      if (name.includes('party') || name.includes('guest') || 
          name.includes('event') || name.includes('celebration')) {
        category = 'party';
      } else if (name.includes('hair') || name.includes('hairstyle') || 
                 name.includes('updo') || name.includes('curl') || 
                 name.includes('blow')) {
        category = 'hair';
      } else if (name.includes('nail') || name.includes('gel') || 
                 name.includes('mani') || name.includes('pedi') || 
                 name.includes('extension')) {
        category = 'nails';
      } else if (name.includes('bridal') || name.includes('bride') || 
                 name.includes('engagement') || name.includes('wedding') || 
                 name.includes('reception')) {
        category = 'bridal';
      }
      
      let customAlt = `NIXTUDIO ${category} work`;
      if (category === 'bridal') {
        customAlt = "HD bridal makeup by Nikita Liby, NIXTUDIO Pala Kerala";
      } else if (category === 'party') {
        customAlt = "Party guest makeup by NIXTUDIO team, Pala Kerala";
      } else if (category === 'nails') {
        customAlt = "Gel nail art by NIXTUDIO Nail Lounge, Pala Kerala";
      }
      
      return {
        src: `/images/gallery/${filename}`,
        category,
        alt: customAlt,
        label: filename,
      };
    })
    .sort((a, b) => {
      // Sort by category, then by filename
      if (a.category !== b.category) {
        const order = ['bridal', 'party', 'hair', 'nails'];
        return order.indexOf(a.category) - order.indexOf(b.category);
      }
      return a.label!.localeCompare(b.label!);
    });
}

/**
 * Get a subset of gallery images for homepage preview
 * Tries to get 2 bridal, 2 party, 1 hair, 1 nails
 * Falls back to first 6 available
 */
export function getGalleryPreview(count: number = 6): GalleryItem[] {
  const allImages = getGalleryImages();
  
  if (allImages.length <= count) {
    return allImages;
  }
  
  // Try to get a balanced selection
  const bridal = allImages.filter(img => img.category === 'bridal').slice(0, 2);
  const party = allImages.filter(img => img.category === 'party').slice(0, 2);
  const hair = allImages.filter(img => img.category === 'hair').slice(0, 1);
  const nails = allImages.filter(img => img.category === 'nails').slice(0, 1);
  
  const preview = [...bridal, ...party, ...hair, ...nails];
  
  // If we don't have enough, fill with remaining images
  if (preview.length < count) {
    const remaining = allImages
      .filter(img => !preview.includes(img))
      .slice(0, count - preview.length);
    preview.push(...remaining);
  }
  
  return preview.slice(0, count);
}
