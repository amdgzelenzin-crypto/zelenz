export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "additionalType": [
      "https://schema.org/BeautySalon",
      "https://schema.org/MakeupArtist"
    ],
    "name": "NIXTUDIO by Nikita Liby",
    "description": "NIXTUDIO is a premium bridal makeup studio in Pala, Kottayam, Kerala. Specialising in HD bridal makeup, airbrush makeup, traditional Kerala bridal looks, pre-bridal packages, party makeup, hair styling, nail art and spa services. Located at Moozhayil Building, Pala Ramapuram Road, near KSEB Office, Pala.",
    "url": "https://nixtudio.in",
    "telephone": "+917034726402",
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
    "priceRange": "₹₹₹",
    "hasMap": "https://maps.google.com/?q=NIXTUDIO+Moozhayil+Building+Pala+Ramapuram+Road+Pala+Kerala",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bridal Makeup",
            "description": "HD and airbrush bridal makeup by Nikita Liby"
          },
          "price": "27500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Party Makeup"
          },
          "price": "5500",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hair Salon Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gel Nails — The Nail Lounge"
          }
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/nixtudio",
      "https://wa.me/917034726402"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
