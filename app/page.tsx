import HomePageClient from "./HomePageClient";
import GalleryPreviewGrid from "@/components/GalleryPreviewGrid";
import { getGalleryImages } from "@/lib/gallery-utils";

export default function HomePage() {
  const bridalCardImage =
    getGalleryImages().find((img) => img.category === "bridal")?.src ??
    "/images/premium-bridal-makeup-studio-pala-kerala-hero.webp";

  return (
    <HomePageClient
      galleryPreview={<GalleryPreviewGrid />}
      bridalCardImage={bridalCardImage}
    />
  );
}
