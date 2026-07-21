import HomePageClient from "./HomePageClient";
import HomePageCrawlContent from "@/components/seo/HomePageCrawlContent";
import { getGalleryImages } from "@/lib/gallery-utils";

export default function HomePage() {
  const galleryItems = getGalleryImages();

  return (
    <>
      <HomePageClient galleryItems={galleryItems} />
      <HomePageCrawlContent />
    </>
  );
}
