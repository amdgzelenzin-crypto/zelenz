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
  businessName = "Zelenz Unisex Saloon",
  description = "Zelenz Unisex Saloon is the premier luxury beauty & styling destination in Pala & Kottayam. Offering professional hair cuts, styling, coloring, gel nails, facials, skin care, and custom bridal/groom makeovers.",
  address = {
    streetAddress: "Dummy Building, Near Civil Station",
    addressLocality: "Pala",
    addressRegion: "Kerala",
    postalCode: "686575",
    addressCountry: "IN"
  },
  telephone = "+919876543210",
  website = "https://dummyzelenz.com",
  areaServed = ["Pala", "Kottayam", "Ettumanoor"],
  services = [
    {
      name: "Premium Hair Styling",
      description: "Professional hair styling, cutting, and color treatments",
      price: "450",
      priceCurrency: "INR"
    },
    {
      name: "Glass Skin Treatments", 
      description: "Advanced facial treatments and skin care services",
      price: "1350",
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
      price: "1100",
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
        "priceRange": "₹₹",
        "image": `${website}/images/zelenz-logo.png`,
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:30",
            "closes": "19:30"
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
          "@id": `${website}#organization`
        },
        "sameAs": [
          "https://wa.me/919876543210"
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
