import fs from 'fs';
import path from 'path';

export type Category = "groom" | "bridal";

export type GalleryItem = {
  src: string;
  category: Category;
  alt: string;
  label?: string;
};

const CATEGORY_FOLDERS: Record<string, Category> = {
  groom: 'groom',
  bridal: 'bridal',
};

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const CATEGORY_ORDER: Category[] = ['groom', 'bridal'];

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
  return "Bridal makeover & wedding makeup at Zelenz Unisex Saloon";
}

/**
 * Loads gallery images from category subfolders under /public/images/gallery/
 * Folders: groom, bridal
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

