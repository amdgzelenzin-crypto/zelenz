import fs from 'fs';
import path from 'path';

export type Category = "groom" | "bridal" | "hair" | "skin" | "nails" | "party";

export type GalleryItem = {
  src: string;
  category: Category;
  alt: string;
  label?: string;
};

const CATEGORY_FOLDERS: Record<string, Category> = {
  groom: 'groom',
  bridal: 'bridal',
  hair: 'hair',
  skin: 'skin',
  nails: 'nails',
  party: 'party',
};

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const CATEGORY_ORDER: Category[] = ['groom', 'bridal', 'hair', 'skin', 'nails', 'party'];

function isImageFile(filename: string): boolean {
  return IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase());
}

function galleryImageSrc(folder: string, filename: string): string {
  return `/images/gallery/${folder}/${filename}`;
}

function buildAltText(category: Category, filename: string): string {
  if (category === 'groom') {
    return "Groom styling and hair makeover at Zelenz Unisex Saloon Pala & Kottayam";
  }
  if (category === 'bridal') {
    return "Bridal makeover & wedding makeup at Zelenz Unisex Saloon";
  }
  if (category === 'hair') {
    return "Hair styling, coloring & hair botox treatment at Zelenz Unisex Saloon";
  }
  if (category === 'skin') {
    return "Skin facials & Hydra facial treatments at Zelenz Unisex Saloon";
  }
  if (category === 'nails') {
    return "Nail art & gel extensions at Zelenz Unisex Saloon";
  }
  return "Party makeup & event styling at Zelenz Unisex Saloon";
}

/**
 * Loads gallery images from category subfolders under /public/images/gallery/
 * Folders: groom, bridal, hair, skin, nails, party
 * Runs at build time (server-side)
 */
export function getGalleryImages(): GalleryItem[] {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');

  if (!fs.existsSync(galleryDir)) {
    console.warn('Gallery directory not found:', galleryDir);
    return [];
  }

  const items: GalleryItem[] = [];

  for (const [folder, category] of Object.entries(CATEGORY_FOLDERS)) {
    const folderPath = path.join(galleryDir, folder);
    if (!fs.existsSync(folderPath)) continue;

    const files = fs.readdirSync(folderPath).filter(isImageFile);
    for (const filename of files) {
      items.push({
        src: galleryImageSrc(folder, filename),
        category,
        alt: buildAltText(category, filename),
        label: `${folder}/${filename}`,
      });
    }
  }

  return items.sort((a, b) => {
    if (a.category !== b.category) {
      return CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
    }
    return a.label!.localeCompare(b.label!);
  });
}

/**
 * Balanced subset for homepage preview
 */
export function getGalleryPreview(count: number = 8): GalleryItem[] {
  const allImages = getGalleryImages();
  return allImages.slice(0, count);
}

