import fs from 'fs';
import path from 'path';

export type Category = "bridal" | "party" | "hair" | "nails";

export type GalleryItem = {
  src: string;
  category: Category;
  alt: string;
  label?: string;
};

const CATEGORY_FOLDERS: Record<string, Category> = {
  bridal: 'bridal',
  party: 'party',
  hair: 'hair',
  nails: 'nails',
};

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const CATEGORY_ORDER: Category[] = ['bridal', 'party', 'hair', 'nails'];

function isImageFile(filename: string): boolean {
  return IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase());
}

function galleryImageSrc(folder: string, filename: string): string {
  return `/images/gallery/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

function buildAltText(category: Category, filename: string): string {
  const name = filename.toLowerCase();

  if (category === 'bridal') {
    if (name.includes('christian')) {
      return "Christian bridal makeup by Nikita Liby at NIXTUDIO Pala Kerala - Best makeup artist in Kottayam";
    }
    if (name.includes('hindu')) {
      return "Traditional Hindu wedding makeup by NIXTUDIO - Temple bridal makeup Pala Kerala";
    }
    if (name.includes('muslim')) {
      return "Muslim bridal makeup by Nikita Liby - Premium bridal studio Pala Kottayam";
    }
    if (name.includes('engagement')) {
      return "Engagement makeup styling by NIXTUDIO - Best makeup artist Kottayam Kerala";
    }
    if (name.includes('reception')) {
      return "Wedding reception makeup by NIXTUDIO - Party makeup artist Pala Kerala";
    }
    return "HD bridal makeup by Nikita Liby at NIXTUDIO Pala Kerala - Best makeup artist in Kottayam";
  }

  if (category === 'party') {
    return "Party makeup and guest styling by NIXTUDIO - Beauty salon Pala Kerala";
  }
  if (category === 'hair') {
    return "Professional hair styling by NIXTUDIO - Hair salon Pala Kottayam Kerala";
  }
  return "Gel nail extensions and nail art by NIXTUDIO - Nail lounge Pala Kerala";
}

/**
 * Loads gallery images from category subfolders under /public/images/gallery/
 * Folders: bridal, party, hair, nails (matches gallery filter tabs)
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

  // Legacy: flat files directly in gallery root
  for (const filename of fs.readdirSync(galleryDir)) {
    const filePath = path.join(galleryDir, filename);
    if (!fs.statSync(filePath).isFile() || !isImageFile(filename)) continue;

    const name = filename.toLowerCase();
    let category: Category = 'bridal';
    if (name.includes('party') || name.includes('guest')) category = 'party';
    else if (name.includes('hair')) category = 'hair';
    else if (name.includes('nail')) category = 'nails';

    items.push({
      src: `/images/gallery/${encodeURIComponent(filename)}`,
      category,
      alt: buildAltText(category, filename),
      label: filename,
    });
  }

  return items.sort((a, b) => {
    if (a.category !== b.category) {
      return CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
    }
    return a.label!.localeCompare(b.label!);
  });
}

/**
 * Balanced subset for homepage preview: 2 bridal, 2 party, 1 hair, 1 nails
 */
export function getGalleryPreview(count: number = 6): GalleryItem[] {
  const allImages = getGalleryImages();

  if (allImages.length <= count) {
    return allImages;
  }

  const bridal = allImages.filter((img) => img.category === 'bridal').slice(0, 2);
  const party = allImages.filter((img) => img.category === 'party').slice(0, 2);
  const hair = allImages.filter((img) => img.category === 'hair').slice(0, 1);
  const nails = allImages.filter((img) => img.category === 'nails').slice(0, 1);

  const preview = [...bridal, ...party, ...hair, ...nails];

  if (preview.length < count) {
    const remaining = allImages
      .filter((img) => !preview.includes(img))
      .slice(0, count - preview.length);
    preview.push(...remaining);
  }

  return preview.slice(0, count);
}
