import HomePageClient from "./HomePageClient";
import GalleryPreviewGrid from "@/components/GalleryPreviewGrid";

export default function HomePage() {
  const bridalCardImage = "/images/bridal-editorial-card.jpg";

  return (
    <HomePageClient
      galleryPreview={<GalleryPreviewGrid />}
      bridalCardImage={bridalCardImage}
    />
  );
}
