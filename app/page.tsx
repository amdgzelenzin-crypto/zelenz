import HomePageClient from "./HomePageClient";
import { getGalleryImages } from "@/lib/gallery-utils";

export default function HomePage() {
  const galleryItems = getGalleryImages();

  return <HomePageClient galleryItems={galleryItems} />;
}

