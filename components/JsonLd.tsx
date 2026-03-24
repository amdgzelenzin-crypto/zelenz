export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "NIX Studio",
    "description": "Premium bridal makeup studio in Pala, Kottayam, Kerala.",
    "url": "https://nixtudio.in",
    "telephone": "REPLACE_WITH_PHONE_NUMBER",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "REPLACE_WITH_STREET_ADDRESS",
      "addressLocality": "Pala",
      "addressRegion": "Kerala",
      "postalCode": "REPLACE_WITH_PINCODE",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "REPLACE_WITH_LAT",
      "longitude": "REPLACE_WITH_LNG"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "image": "https://nixtudio.in/og-image.jpg",
    "priceRange": "₹₹",
    "servesCuisine": null,
    "hasMap": "REPLACE_WITH_GOOGLE_MAPS_URL"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
