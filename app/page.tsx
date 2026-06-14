import HomePageClient from "./HomePageClient";
import GalleryPreviewGrid from "@/components/GalleryPreviewGrid";

export default function HomePage() {
  const bridalCardImage = "/images/bridal-editorial-card.png";

  return (
    <HomePageClient
      galleryPreview={<GalleryPreviewGrid />}
      bridalCardImage={bridalCardImage}
    />
  );
}
