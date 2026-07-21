interface JsonLdProps {
  data?: any
}

export default function JsonLd({ data }: JsonLdProps) {
  // Specific LocalBusiness schema for Google Maps
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Zelenz Unisex Saloon",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opp. Mar Sleeva Medicity, Cherpunkal",
      "addressLocality": "Cherpunkal, Pala",
      "addressRegion": "Kerala",
      "postalCode": "686584",
      "addressCountry": "IN"
    },
    "telephone": "+917560862329",
    "url": "https://zelenzsaloon.com",
    "image": "https://zelenzsaloon.com/images/zelenz-logo.png",
    "description": "Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Cherpunkal. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 09:30-19:30",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.6797295",
      "longitude": "76.6448603"
    }
  };

  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zelenzsaloon.com/#organization",
        "name": "Zelenz Unisex Saloon",
        "alternateName": "Zelenz Makeups Pala & Cherpunkal",
        "url": "https://zelenzsaloon.com",
        "logo": "https://zelenzsaloon.com/images/zelenz-logo.png",
        "image": "https://zelenzsaloon.com/images/zelenz-logo.png",
        "telephone": "+917560862329",
        "description": "Premium unisex grooming, hair styling, coloring, skin treatments, nail lounge, and bridal/groom makeup at Zelenz Cherpunkal and Pala.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Opp. Mar Sleeva Medicity, Cherpunkal",
          "addressLocality": "Cherpunkal, Pala",
          "addressRegion": "Kerala",
          "postalCode": "686584",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://zelenzsaloon.com/#website",
        "url": "https://zelenzsaloon.com",
        "name": "Zelenz Unisex Saloon",
        "publisher": { "@id": "https://zelenzsaloon.com/#organization" },
        "inLanguage": "en-IN"
      },
      {
        "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
        "@id": "https://zelenzsaloon.com/#business",
        "name": "Zelenz Unisex Saloon - Best Salon & Bridal Makeup in Cherpunkal & Pala, Kerala",
        "url": "https://zelenzsaloon.com",
        "telephone": "+917560862329",
        "priceRange": "₹₹",
        "image": "https://zelenzsaloon.com/images/zelenz-logo.png",
        "parentOrganization": { "@id": "https://zelenzsaloon.com/#organization" },
        "description": "Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Cherpunkal. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Opp. Mar Sleeva Medicity, Cherpunkal",
          "addressLocality": "Cherpunkal, Pala",
          "addressRegion": "Kerala",
          "postalCode": "686584",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "9.6797295",
          "longitude": "76.6448603"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:30",
            "closes": "19:30"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Cherpunkal" },
          { "@type": "City", "name": "Pala" },
          { "@type": "City", "name": "Kottayam" },
          { "@type": "AdministrativeArea", "name": "Kottayam District" }
        ],
        "knowsAbout": ["Bridal Makeup", "Hair Styling", "Gel Nails", "Beauty Salon Services", "Facials"],
        "hasMap": "https://www.google.com/maps/place/9%C2%B040'47.0%22N+76%C2%B038'41.5%22E/@9.6797295,76.6422854,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.6797295!4d76.6448603?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",
        "keywords": "best salon pala, best salon kottayam, best bridal makeup pala, best bridal makeup kottayam, salon pala kerala, hair salon pala, hair salon kottayam, beauty parlour pala, nail salon pala",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Beauty Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HD Bridal Makeup",
                "description": "Traditional HD bridal makeup application. Perfect for church ceremonies and indoor venues in Pala & Kottayam, Kerala.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Zelenz Unisex Saloon"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Luxury Hair Styling",
                "description": "Professional hair styling and updo services for weddings and special events in Pala & Kottayam, Kerala.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Zelenz Unisex Saloon"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gel Nail Extensions",
                "description": "Premium gel nail extensions and nail art services by expert technicians at Zelenz salon.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Zelenz Unisex Saloon"
                }
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.9,
          "reviewCount": 500,
          "bestRating": "5",
          "worstRating": "4"
        }
      }
    ]
  };

  const finalSchema = data || [localBusinessSchema, ...defaultSchema["@graph"]];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  )
}
