import { getGalleryImages } from "@/lib/gallery-utils";
import GalleryClient from "./GalleryClient";

export default function GalleryPage() {
  // Load images at build time (server-side)
  const galleryItems = getGalleryImages();
  
  return <GalleryClient galleryItems={galleryItems} />;
}
