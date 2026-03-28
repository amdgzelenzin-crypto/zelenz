export default function JsonLd() {
  const schema = [
    {
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "6"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Jessy Joseph"
          },
          "reviewBody": "Extremely happy and satisfied with the makeup and hair for my wedding day. Executed everything perfectly."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Stelly Tomy"
          },
          "reviewBody": "engagement and wedding makeup done by Nikita, such a wonderful experience. Clearly guided me on what would suit me best."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Jane Josy"
          },
          "reviewBody": "Making me look my best on my BigDay. Work played a huge role in making me so happy and confident."
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "NIXTUDIO Luxury Bridal & Beauty Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium HD Bridal Makeup",
              "description": "High-Definition bridal artistry optimized for Kerala's lighting and temple/reception environments."
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "27500",
              "priceCurrency": "INR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Luxury Airbrush Bridal Makeup",
              "description": "Ultra-long-lasting airbrush application designed for 16-hour humidity resistance."
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "32500",
              "priceCurrency": "INR"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Celebrity Engagement & Reception Styling",
              "description": "Sophisticated event styling from Pala and Kottayam's premier artist."
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "14500",
              "priceCurrency": "INR",
              "priceType": "Starting at"
            }
          }
        ]
      },
      "sameAs": [
        "https://instagram.com/nixtudio",
        "https://wa.me/917034726402"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "NIXTUDIO BRIDAL SUITE",
      "description": "NIXTUDIO BRIDAL SUITE — Specialized luxury bridal prep location by Nikita Liby in Pala.",
      "url": "https://nixtudio.in/bridal",
      "telephone": "+917034726402",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Moozhayil House, Thodupuzha Rd, opposite kuttiyankal nursery",
        "addressLocality": "Pala",
        "addressRegion": "Kerala",
        "postalCode": "686574",
        "addressCountry": "IN"
      },
      "image": "https://nixtudio.in/og/bridal-og.jpg",
      "priceRange": "₹₹₹",
      "hasMap": "https://maps.app.goo.gl/F6MtRGyNAoHAsmYe8"
    }
  ]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
