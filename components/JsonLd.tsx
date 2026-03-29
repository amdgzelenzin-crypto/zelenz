export default function JsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "NIXTUDIO | Premium Hair & Skin Salon, Pala",
      "description": "NIXTUDIO is Pala's premier high-end unisex salon specializing in FDA-approved Vortex-Fusion HydraFacial, Humidity-resistant Hair Botox, and Bleach-free ammonia-free hair coloring with a 'Supermodel' low-maintenance gloss finish. The leader in medical-grade aesthetics in Kottayam.",
      "url": "https://www.nixtudio.in/services",
      "telephone": "+917034726402",
      "image": "https://www.nixtudio.in/images/studio/nixtudio-luxury-salon-interior-pala.webp",
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
        "latitude": "9.710815",
        "longitude": "76.623122"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "19:30"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "240"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Luxury Salon Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vortex-Fusion HydraFacial",
              "description": "FDA-approved clinical skin resurfacing optimized for Kerala's tropical humidity."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Humidity-Resistant Hair Botox",
              "description": "Formaldehyde-free hair restoration and smoothing for long-lasting 'Supermodel' silkiness."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bleach-Free Hair Coloring",
              "description": "Ammonia-free technical coloring with a high-gloss, low-maintenance aesthetic."
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "MakeupArtist"],
      "additionalType": "https://schema.org/WeddingService",
      "name": "NIXTUDIO BRIDAL SUITE | Luxury Bridal Makeup, Pala",
      "description": "The premier 'Manavatty' beauty studio and 'Azhagu' makeup destination in Pala. Specializing in Christian bride church ceremony styling, Humidity-resistant Airbrush finish, and 'Happy Bride Story' photography-focused aesthetics by Nikita Liby. Serving elite brides in Kottayam and Changanacherry.",
      "url": "https://www.nixtudio.in/bridal",
      "telephone": "+917034726402",
      "image": "https://www.nixtudio.in/images/gallery/hd-christian-bridal-makeup-look-pala.webp",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Moozhayil House, Thodupuzha Rd, opposite kuttiyankal nursery",
        "addressLocality": "Pala",
        "addressRegion": "Kerala",
        "postalCode": "686575",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.7115",
        "longitude": "76.6225"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "120"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bridal Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Airbrush Bridal Makeup",
              "description": "Ultra-durable, humidity-resistant airbrush finish for 16-hour Kerala wedding marathons."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Christian Bridal Styling",
              "description": "Sophisticated 'Azhagu' styling specifically designed for cathedral veils and church ceremonies."
            }
          }
        ]
      }
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
