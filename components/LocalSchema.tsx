interface LocalSchemaProps {
  businessName?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  website?: string;
  areaServed?: string[];
  services?: Array<{
    name: string;
    description: string;
    price: string;
    priceCurrency?: string;
  }>;
}

export default function LocalSchema({
  businessName = "Nixtudio",
  description = "Pala's premier beauty salon & bridal studio specializing in premium hair styling, glass skin treatments, and HD bridal makeup services.",
  address = {
    streetAddress: "Moozhayil House, Thodupuzha Rd, opposite kuttiyankal nursery",
    addressLocality: "Pala",
    addressRegion: "Kerala",
    postalCode: "686575",
    addressCountry: "IN"
  },
  telephone = "+917034726402",
  website = "https://nixtudio.in",
  areaServed = ["Pala", "Kottayam", "Ettumanoor"],
  services = [
    {
      name: "Premium Hair Styling",
      description: "Professional hair styling, cutting, and color treatments",
      price: "3500",
      priceCurrency: "INR"
    },
    {
      name: "Glass Skin Treatments", 
      description: "Advanced facial treatments and skin care services",
      price: "4500",
      priceCurrency: "INR"
    },
    {
      name: "Bridal Makeup",
      description: "HD and Airbrush bridal makeup services",
      price: "27500",
      priceCurrency: "INR"
    },
    {
      name: "Premium Nail Services",
      description: "Gel nail extensions and nail art",
      price: "2000",
      priceCurrency: "INR"
    }
  ]
}: LocalSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
        "@id": `${website}#business`,
        "name": businessName,
        "url": website,
        "telephone": telephone,
        "priceRange": "₹₹₹",
        "image": `${website}/images/studio/nixtudio-studio-signage-pala-kerala.webp`,
        "description": description,
        "address": {
          "@type": "PostalAddress",
          ...address
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
        "areaServed": areaServed,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Beauty Services",
          "itemListElement": services.map(service => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.name,
              "description": service.description
            },
            "priceCurrency": service.priceCurrency || "INR",
            "price": service.price
          }))
        },
        "founder": {
          "@id": `${website}#person`
        },
        "sameAs": [
          "https://www.instagram.com/nixtudio.in",
          "https://www.facebook.com/nixtudio.in",
          "https://wa.me/917034726402"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${website}#professional-service`,
        "name": "Beauty & Bridal Services",
        "description": "Professional beauty and bridal makeup services",
        "provider": {
          "@id": `${website}#business`
        },
        "serviceType": [
          "Bridal Makeup",
          "Hair Styling",
          "Skin Care",
          "Nail Services",
          "Beauty Treatments"
        ],
        "areaServed": areaServed.map(place => ({
          "@type": "Place",
          "name": place
        }))
      },
      {
        "@type": "Person",
        "@id": `${website}#person`,
        "name": "Nikita Liby",
        "jobTitle": "Founder & Creative Director",
        "description": "Professional makeup artist and beauty specialist specializing in luxury bridal aesthetics and precision beauty treatments in Pala, Kerala.",
        "image": `${website}/images/nikita-liby-professional-makeup-artist-pala.webp`,
        "url": `${website}/about`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
