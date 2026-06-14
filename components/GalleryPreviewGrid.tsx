import Link from "next/link";
import Image from "next/image";
import { getGalleryPreview } from "@/lib/gallery-utils";

export default function GalleryPreviewGrid() {
  const images = getGalleryPreview(6);

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "12px",
        marginBottom: "32px",
      }}
    >
      {images.map((img) => (
        <Link
          key={img.src}
          href="/gallery"
          style={{
            display: "block",
            aspectRatio: "1/1",
            background: "#FFFFFF",
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
            textDecoration: "none",
          }}
          className="group skeleton"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 33vw, 20vw"
            quality={80}
          />
        </Link>
      ))}
    </div>
  );
}
