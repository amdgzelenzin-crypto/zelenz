import HomePageClient from "./HomePageClient";
import GalleryPreviewGrid from "@/components/GalleryPreviewGrid";
import HomePageCrawlContent from "@/components/seo/HomePageCrawlContent";

export default function HomePage() {
  const bridalCardImage = "/images/bridal-editorial-card.png";

  return (
    <>
      <HomePageClient
        galleryPreview={<GalleryPreviewGrid />}
        bridalCardImage={bridalCardImage}
      />
      <HomePageCrawlContent />
    </>
  );
}
