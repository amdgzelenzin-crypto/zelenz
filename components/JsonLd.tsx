export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://www.nixtudio.in/#business",
        "name": "NIXTUDIO by Nikita Liby",
        "url": "https://www.nixtudio.in",
        "telephone": "+917034726402",
        "priceRange": "₹₹₹",
        "image": "https://www.nixtudio.in/images/studio/nixtudio-studio-signage-pala-kerala.webp",
        "description": "NIXTUDIO is Pala's premier high-end unisex salon & bridal studio, specializing in FDA-approved facial treatments, hair care, and professional bridal aesthetics.",
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
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "10:00",
            "closes": "19:00"
          }
        ],
        "founder": {
          "@id": "https://www.nixtudio.in/#person"
        },
        "sameAs": [
          "https://www.instagram.com/nixtudio.in",
          "https://www.facebook.com/nixtudio.in",
          "https://wa.me/917034726402"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.nixtudio.in/#person",
        "name": "Nikita Liby",
        "jobTitle": "Founder & Creative Director",
        "description": "Professional makeup artist and hairstylist specializing in international luxury bridal aesthetics and precision hair treatments in Pala, Kerala.",
        "image": "https://www.nixtudio.in/images/studio/nikita-liby-makeup-artist-pala.webp",
        "url": "https://www.nixtudio.in/about"
      },
      {
        "@type": "Service",
        "name": "Bridal Makeup & Styling",
        "provider": { "@id": "https://www.nixtudio.in/#business" },
        "areaServed": {
          "@type": "State",
          "name": "Kerala"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Bridal Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "price": "27500",
              "priceCurrency": "INR",
              "itemOffered": {
                "@type": "Service",
                "name": "Wedding Day Bridal Makeup",
                "description": "HD and Airbrush bridal makeup with 16-hour humidity resistance."
              }
            },
            {
              "@type": "Offer",
              "price": "14500",
              "priceCurrency": "INR",
              "itemOffered": {
                "@type": "Service",
                "name": "Engagement Styling",
                "description": "Sophisticated party and engagement makeup for church and hall events."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does NIXTUDIO provide home services for bridal makeup?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide luxury on-site bridal services across Kottayam, Changanacherry, and nearby regions in Kerala for a premium experience."
            }
          },
          {
            "@type": "Question",
            "name": "What are the bridal makeup rates in Pala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NIXTUDIO's bridal packages start at ₹27,500, which includes specialized skin preparation, HD/Airbrush application, hair styling, and draping."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
