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
      "streetAddress": "Dummy Building, Near Civil Station",
      "addressLocality": "Pala",
      "addressRegion": "Kerala",
      "postalCode": "686575",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "url": "https://dummyzelenz.com",
    "image": "https://dummyzelenz.com/images/zelenz-logo.png",
    "description": "Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Kottayam. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 09:30-19:30",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.7115",
      "longitude": "76.6225"
    }
  };

  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dummyzelenz.com/#organization",
        "name": "Zelenz Unisex Saloon",
        "alternateName": "Zelenz Salon Pala & Kottayam",
        "url": "https://dummyzelenz.com",
        "logo": "https://dummyzelenz.com/images/zelenz-logo.png",
        "image": "https://dummyzelenz.com/images/zelenz-logo.png",
        "telephone": "+919876543210",
        "description": "Premium unisex grooming, hair styling, coloring, skin treatments, nail lounge, and bridal/groom makeup at Zelenz Pala and Kottayam.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dummy Building, Near Civil Station",
          "addressLocality": "Pala",
          "addressRegion": "Kerala",
          "postalCode": "686575",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://dummyzelenz.com/#website",
        "url": "https://dummyzelenz.com",
        "name": "Zelenz Unisex Saloon",
        "publisher": { "@id": "https://dummyzelenz.com/#organization" },
        "inLanguage": "en-IN"
      },
      {
        "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
        "@id": "https://dummyzelenz.com/#business",
        "name": "Zelenz Unisex Saloon - Best Salon & Bridal Makeup in Pala & Kottayam, Kerala",
        "url": "https://dummyzelenz.com",
        "telephone": "+919876543210",
        "priceRange": "₹₹",
        "image": "https://dummyzelenz.com/images/zelenz-logo.png",
        "parentOrganization": { "@id": "https://dummyzelenz.com/#organization" },
        "description": "Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Kottayam. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dummy Building, Near Civil Station",
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:30",
            "closes": "19:30"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Kottayam" },
          { "@type": "City", "name": "Pala" },
          { "@type": "City", "name": "Ettumanoor" },
          { "@type": "AdministrativeArea", "name": "Kottayam District" }
        ],
        "knowsAbout": ["Bridal Makeup", "Hair Styling", "Gel Nails", "Beauty Salon Services", "Facials"],
        "hasMap": "https://maps.google.com/maps?q=Zelenz+Unisex+Saloon+Pala+Kerala",
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
