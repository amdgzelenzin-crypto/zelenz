export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "additionalType": [
      "https://schema.org/BeautySalon",
      "https://schema.org/MakeupArtist"
    ],
    "name": "NIXTUDIO",
    "description": "NIXTUDIO is a premium bridal makeup studio in Pala, Kottayam, Kerala. Specialising in HD bridal makeup, airbrush makeup, traditional Kerala bridal looks, pre-bridal packages, party makeup, hair styling, nail art and spa services. Located at Moozhayil Building, Pala Ramapuram Road, near KSEB Office, Pala.",
    "url": "https://nixtudio.in",
    "telephone": "070347 26402",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Moozhayil Building, Pala Ramapuram Road, Near KSEB Office",
      "addressLocality": "Pala",
      "addressRegion": "Kerala",
      "postalCode": "686575",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.7108",
      "longitude": "76.6231"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "19:30"
      }
    ],
    "image": "https://nixtudio.in/og-image.jpg",
    "priceRange": "₹₹",
    "servesCuisine": null,
    "hasMap": "https://maps.google.com/?q=NIXTUDIO+Moozhayil+Building+Pala+Ramapuram+Road+Pala+Kerala"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
