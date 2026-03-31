interface JsonLdProps {
  data?: any
}

export default function JsonLd({ data }: JsonLdProps) {
  // Specific LocalBusiness schema for Google Maps
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Nixtudio",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Moozhayil House, Thodupuzha Rd, opposite kuttiyankal nursery",
      "addressLocality": "Pala",
      "addressRegion": "Kerala",
      "postalCode": "686575",
      "addressCountry": "IN"
    },
    "telephone": "+917034726402",
    "founder": "Nikita Liby",
    "url": "https://nixtudio.in",
    "image": "https://nixtudio.in/images/studio/nixtudio-studio-signage-pala-kerala.webp",
    "description": "Premium bridal makeup studio and luxury salon in Pala, Kerala",
    "priceRange": "₹₹₹",
    "openingHours": "Mo-Sa 10:00-19:00, Su 11:00-18:00",
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
        "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
        "@id": "https://nixtudio.in/#business",
        "name": "Nixtudio - Best Bridal Makeup Studio in Pala, Kerala",
        "url": "https://nixtudio.in",
        "telephone": "+917034726402",
        "priceRange": "₹₹₹",
        "image": "https://nixtudio.in/images/studio/nixtudio-studio-signage-pala-kerala.webp",
        "description": "Nixtudio is Pala's #1 premium bridal makeup studio and salon. Expert bridal artistry & advanced hair care exclusively by Nikita. Top-rated bridal makeup studio & luxury hair salon in Pala, Kottayam, Kerala. Book your appointment today.",
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
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "11:00",
            "closes": "18:00"
          }
        ],
        "areaServed": ["Pala", "Kottayam", "Ettumanoor", "Central Travancore"],
        "servesCuisine": ["Kerala Bridal Makeup", "Traditional Bridal Artistry"],
        "hasMap": "https://maps.google.com/maps?q=Nixtudio+Pala+Kerala",
        "keywords": "bridal studio Pala, salon Pala, bridal makeup Kerala, makeup studio Pala Kerala, best bridal makeup Pala, luxury bridal salon Pala",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Beauty Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HD Bridal Makeup",
                "description": "Traditional HD bridal makeup application by Nikita Liby. Perfect for church ceremonies and indoor venues in Pala, Kerala.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Nixtudio"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Airbrush Bridal Makeup",
                "description": "Advanced airbrush makeup technique for outdoor Kerala weddings. Sweat-resistant and long-lasting coverage for humid climates.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Nixtudio"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Luxury Hair Styling",
                "description": "Professional hair styling and updo services for weddings and special events in Pala, Kerala.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Nixtudio"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gel Nail Extensions",
                "description": "Premium gel nail extensions and nail art services by expert technicians at Nixtudio salon in Pala.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Nixtudio"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vortex Fusion HydraFacial",
                "description": "Medical-grade HydraFacial treatment for deep cleansing and hydration. Advanced skincare technology available at Nixtudio Pala.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Nixtudio"
                }
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.8,
          "reviewCount": 127,
          "bestRating": "5",
          "worstRating": "4"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Jessy Joseph"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5
            },
            "reviewBody": "I was extremely happy and satisfied with makeup and hair for my wedding day. It turned out even better than I had imagined! She understood each and every request of mine and executed everything perfectly.",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Nixtudio"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Stelly Tomy"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5
            },
            "reviewBody": "I had my engagement and wedding makeup done by Nikita, and it was such a wonderful experience. She was very vocal and guided me clearly on what would suit me best, which I truly appreciated.",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Nixtudio"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Jane Josy"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5
            },
            "reviewBody": "Thank you so much Nikita for making me look my best on my BigDay. Your work played a huge role in making me so happy and confident on my wedding day. I looked exactly like what I expected ",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Nixtudio"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Meenu Mathai"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": 5
            },
            "reviewBody": "Nikita did my bridal makeup and I couldn't be happier with results. She understood exactly what look I wanted and made me feel so confident and beautiful on my big day.",
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Nixtudio"
            }
          }
        ],
        "sameAs": [
          "https://www.instagram.com/nixtudio.in",
          "https://www.facebook.com/nixtudio.in"
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
        "provider": {
          "@id": "https://nixtudio.in/#business"
        },
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
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "BeautySalon",
          "name": "NIXTUDIO",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pala",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          }
        },
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1",
        "author": {
          "@type": "Person",
          "name": "Nikita Liby's Brides"
        }
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "BeautySalon",
          "name": "NIXTUDIO"
        },
        "author": {
          "@type": "Person",
          "name": "Anna Maria"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Nikita did my bridal makeup for my Christian church wedding in Pala. The humidity-resistant airbrush technique was incredible - my makeup looked fresh from 9 AM ceremony until midnight reception. Highly recommend for Kerala weddings!",
        "datePublished": "2024-12-15"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "BeautySalon",
          "name": "NIXTUDIO"
        },
        "author": {
          "@type": "Person",
          "name": "Priya Nair"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best bridal makeup artist in Kottayam district! Nikita personally handled my Hindu temple wedding makeup. The glow-from-within look was perfect for traditional gold jewelry and silk saree. Worth every rupee.",
        "datePublished": "2024-11-28"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Nixtudio's airbrush technique handle the 90% humidity of a July wedding in Kottayam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nikita Liby uses specialized humidity-resistant airbrush formulas with polymer-based technology that creates a flexible, breathable barrier. This micro-misting technique withstands 90%+ humidity for 16+ hours without caking or separation, specifically engineered for Kerala's monsoon season conditions."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Nikita Liby personally handle every bride instead of delegating to junior artists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nikita's 'no-delegation' policy ensures technical precision for Kerala's challenging climate. With 6+ years experience and 500+ brides served, she understands how humidity affects different skin types and customizes airbrush pressure, product selection, and application techniques for each bride's unique needs."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Nixtudio's 'Glow-from-within' technique different for Christian church weddings in Pala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our church wedding technique uses luminous, satin-finish airbrushing that photographs beautifully in natural church lighting. We avoid heavy contours that look harsh in daylight, instead using strategic highlighting that enhances the 'Azhagu' elegance while remaining sweat-proof for Kerala's tropical church conditions."
            }
          },
          {
            "@type": "Question",
            "name": "How does Nixtudio's airbrush makeup perform during outdoor Kerala temple ceremonies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For outdoor temple ceremonies, Nikita uses heat-activated airbrush formulas with vitamin E and silica that actually improve with warmth. The micro-particle technology creates a second-skin effect that won't transfer onto silk saris or gold jewelry, maintaining flawless appearance through 35°C+ temperatures."
            }
          },
          {
            "@type": "Question",
            "name": "What specific products does Nikita Liby use for humidity-resistant bridal makeup in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nikita uses medical-grade airbrush systems with silicone-based foundations (Kryolan, Mehron), waterproof sealers, and translucent HD powders. All products are specifically tested for Kerala's 80-95% humidity levels, containing ingredients like dimethicone, cyclomethicone, and nylon-12 for sweat-proof longevity."
            }
          },
          {
            "@type": "Question",
            "name": "How far in advance should brides book Nixtudio for peak wedding season in Pala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For peak season (December-February), book 6-8 months in advance. Nikita personally handles maximum 2 brides per day to ensure quality. Off-season bookings (June-August) can be secured 2-3 months ahead. Early booking guarantees availability for your preferred date and allows for skin preparation sessions."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between HD and Airbrush makeup for Kerala weddings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "HD makeup uses high-definition techniques with traditional application, while airbrush uses compressed air for micro-particle application. For Kerala's humidity, airbrush is superior - it's 30% lighter, completely waterproof, and creates a breathable barrier that won't melt. Nikita combines both techniques for optimal results."
            }
          },
          {
            "@type": "Question",
            "name": "How does Nixtudio prepare skin for bridal makeup in Kerala's tropical climate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nikita's 3-day skin prep includes oil-control cleansing, hyaluronic acid hydration, and silicone-based primers. She customizes prep based on whether it's monsoon (focus on oil control) or summer (focus on hydration). This ensures makeup adheres properly and lasts through humidity and sweat."
            }
          },
          {
            "@type": "Question",
            "name": "What emergency bridal makeup services does Nixtudio offer in Pala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nikita provides 24/7 emergency bridal services within 30km of Pala. This includes last-minute touch-ups, makeup corrections from other artists, and emergency bridal party makeup. She carries a complete professional kit with humidity-resistant products specifically for Kerala wedding emergencies."
            }
          },
          {
            "@type": "Question",
            "name": "How does Nixtudio's pricing compare to other premium bridal artists in Kottayam district?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nixtudio's bridal packages start at ₹27,500, which is premium but justified by Nikita's personal attention, 6+ years expertise, and specialized humidity-resistant techniques. Unlike chain salons, you get individualized service with medical-grade products specifically chosen for Kerala's climate, providing better value and results."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Nixtudio the best choice for Muslim bridal makeup in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For Muslim brides, Nikita specializes in elegant, sophisticated looks that complement traditional attire while respecting cultural preferences. She uses long-wear, smudge-proof techniques that withstand multiple events and hijab styling. Her expertise with humidity ensures makeup remains flawless through lengthy ceremonies and celebrations."
            }
          },
          {
            "@type": "Question",
            "name": "How does Nixtudio handle bridal makeup for destination weddings in backwater locations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nikita travels to backwater venues with a complete climate-controlled makeup kit. She uses extra-strength humidity sealers and waterproof formulations specifically for Kerala's backwater conditions. Portable lighting and mirror setups ensure professional results regardless of location challenges."
            }
          },
          {
            "@type": "Question",
            "name": "What post-bridal skincare does Nixtudio recommend for Kerala brides?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nikita provides personalized post-wedding skincare routines focusing on gentle makeup removal and skin recovery. She recommends oil-free cleansers, soothing masks with aloe vera, and lightweight moisturizers suitable for Kerala's humid climate to maintain the bridal glow beyond the wedding day."
            }
          },
          {
            "@type": "Question",
            "name": "Does Nixtudio offer bridal makeup trials specifically for Kerala climate testing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Nikita conducts climate-specific trials where she tests makeup durability in simulated humidity conditions. Trials include 8-hour wear tests, sweat resistance testing, and photography sessions to ensure the makeup performs perfectly in actual Kerala wedding conditions."
            }
          },
          {
            "@type": "Question",
            "name": "What are the payment terms and cancellation policies for Nixtudio bridal packages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nixtudio requires 50% advance booking confirmation, 25% one month before, and remaining 25% on the wedding day. Cancellations made 60+ days before receive 75% refund, 30-59 days receive 50% refund. Less than 30 days cancellations are non-refundable due to Nikita's personalized commitment and limited availability."
            }
          }
        ]
      }
    ]
  }

  const finalSchema = data || [localBusinessSchema, ...defaultSchema["@graph"]];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  )
}
