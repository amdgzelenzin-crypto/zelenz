interface JsonLdProps {
  data?: any
}

export default function JsonLd({ data }: JsonLdProps) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
        "@id": "https://nixtudio.in/#business",
        "name": "Nixtudio",
        "url": "https://nixtudio.in",
        "telephone": "+917034726402",
        "priceRange": "₹₹₹",
        "image": "https://nixtudio.in/images/studio/nixtudio-studio-signage-pala-kerala.webp",
        "description": "Nixtudio is Pala's premier high-end beauty salon & bridal studio, specializing in FDA-approved facial treatments, hair care, and professional bridal aesthetics.",
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
        "areaServed": ["Pala", "Kottayam", "Ettumanoor"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Beauty Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Hair Styling",
                "description": "Professional hair styling, cutting, and treatments"
              },
              "priceCurrency": "INR",
              "price": "3500"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Glass Skin Treatments",
                "description": "Advanced facial treatments and skin care services"
              },
              "priceCurrency": "INR",
              "price": "4500"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bridal Makeup",
                "description": "HD and Airbrush bridal makeup services"
              },
              "priceCurrency": "INR",
              "price": "27500"
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Nail Services",
                "description": "Gel nail extensions and nail art"
              },
              "priceCurrency": "INR",
              "price": "2000"
            }
          ]
        },
        "founder": {
          "@id": "https://nixtudio.in/#person"
        },
        "sameAs": [
          "https://www.instagram.com/nixtudio.in",
          "https://www.facebook.com/nixtudio.in",
          "https://wa.me/917034726402"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://nixtudio.in/#professional-service",
        "name": "Bridal Makeup Services",
        "description": "Professional bridal makeup and beauty services by Nikita Liby",
        "provider": {
          "@id": "https://nixtudio.in/#business"
        },
        "serviceType": [
          "Bridal Makeup",
          "Engagement Makeup", 
          "Party Makeup",
          "Hair Styling",
          "Nail Services",
          "Skin Care"
        ],
        "areaServed": [
          {
            "@type": "Place",
            "name": "Pala, Kerala"
          },
          {
            "@type": "Place", 
            "name": "Kottayam, Kerala"
          },
          {
            "@type": "Place",
            "name": "Changanacherry, Kerala"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://nixtudio.in/#person",
        "name": "Nikita Liby",
        "jobTitle": "Founder & Creative Director",
        "description": "Professional makeup artist and hairstylist specializing in international luxury bridal aesthetics and precision hair treatments in Pala, Kerala.",
        "image": "https://nixtudio.in/images/studio/nikita-liby-makeup-artist-pala.webp",
        "url": "https://nixtudio.in/about"
      },
      {
        "@type": "Service",
        "name": "Bridal Makeup & Styling",
        provider: { "@id": "https://nixtudio.in/#business" },
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

  const schema = data || defaultSchema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
