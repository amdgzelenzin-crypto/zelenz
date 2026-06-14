import type { Metadata } from 'next';
import type { SalonSeoPageConfig } from './salon-seo-types';

const SALON_LINKS = [
  { href: '/best-salon-pala', title: 'Best Salon Pala', desc: 'Premium salon in Pala, Kerala' },
  { href: '/best-salon-kottayam', title: 'Best Salon Kottayam', desc: 'Top-rated salon serving Kottayam district' },
  { href: '/hair-salon-pala', title: 'Hair Salon Pala', desc: 'Cuts, colour, styling & treatments' },
  { href: '/nail-salon-pala', title: 'Nail Salon Pala', desc: 'Gel nails, extensions & nail art' },
  { href: '/facial-spa-pala', title: 'Facial & Spa Pala', desc: 'HydraFacial, facials & skin therapies' },
  { href: '/beauty-parlour-pala', title: 'Beauty Parlour Pala', desc: 'Full-service beauty parlour in Pala' },
];

const BRIDAL_LINKS = [
  { href: '/bridal-makeup-pala', title: 'Bridal Makeup Pala', desc: 'HD & airbrush bridal artistry' },
  { href: '/best-bridal-makeup-pala', title: 'Best Bridal Makeup Pala', desc: '#1 bridal studio in Kerala' },
];

export function salonPageMetadata(config: SalonSeoPageConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://nixtudio.in/${config.slug}`,
      images: [{ url: config.heroImage, width: 1200, height: 630, alt: config.heroImageAlt }],
    },
    alternates: { canonical: `https://nixtudio.in/${config.slug}` },
  };
}

export const bestSalonPalaConfig: SalonSeoPageConfig = {
  slug: 'best-salon-pala',
  title: 'Best Salon in Pala Kerala | Hair, Nails, Spa & Bridal | NIXTUDIO',
  description: 'NIXTUDIO is the best salon in Pala, Kerala. Premium hair styling, gel nails, HydraFacial, waxing, threading & bridal makeup by Nikita Liby. Walk-ins welcome. Call 70347 26402.',
  keywords: ['best salon pala', 'salon in pala kerala', 'best salon pala kottayam', 'luxury salon pala', 'top salon pala', 'beauty salon pala', 'nixtudio salon', 'salon near me pala'],
  h1Line1: 'Best Salon in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'Premium hair, nails, facials, spa & bridal services — all under one roof at NIXTUDIO by Nikita Liby.',
  heroImage: '/images/studio/luxury-salon-interior-pala.webp',
  heroImageAlt: 'Best salon in Pala Kerala - NIXTUDIO luxury interior',
  introTitle: 'Why NIXTUDIO is Pala\'s Top-Rated Salon',
  introParagraphs: [
    'When brides and everyday clients search for the best salon in Pala, they want more than a quick haircut — they want a studio that understands Kerala\'s climate, premium products, and personalised care. NIXTUDIO delivers exactly that.',
    'From humidity-resistant hair treatments and medical-grade HydraFacials to bespoke gel nail art and world-class bridal makeup, every service is handled with the same precision that made us #1 in bridal makeup across Kottayam district.',
    'Located on Thodupuzha Road in Pala, we serve clients from Ettumanoor, Changanacherry, Kanjirappally, and across Central Travancore. Walk-ins are welcome; appointments recommended for bridal and spa services.',
  ],
  services: [
    { title: 'Hair Styling & Colour', description: 'Precision cuts, blow-dry, updos, ammonia-free colour, keratin & hair botox.', price: 'From ₹3,500' },
    { title: 'Gel Nails & Extensions', description: 'Premium gel systems, nail art, extensions, manicure & pedicure.', price: 'From ₹2,000' },
    { title: 'HydraFacial & Skin', description: 'Vortex-Fusion HydraFacial, glass skin facials, deep cleansing.', price: 'From ₹4,500' },
    { title: 'Waxing & Threading', description: 'Full-body waxing, eyebrow shaping, upper lip & bridal threading.', price: 'From ₹150' },
    { title: 'Bridal Makeup', description: 'HD & airbrush bridal makeup — Kerala\'s most trusted bridal artist.', price: 'From ₹27,500' },
    { title: 'Party & Guest Makeup', description: 'Engagement, reception & guest styling for every occasion.', price: 'From ₹5,500' },
  ],
  faqs: [
    { question: 'What is the best salon in Pala, Kerala?', answer: 'NIXTUDIO is consistently rated among the best salons in Pala for hair, nails, facials, and bridal services. Led by Nikita Liby with 500+ satisfied clients, we combine luxury salon services with bridal expertise under one roof.' },
    { question: 'Where is NIXTUDIO salon located in Pala?', answer: 'NIXTUDIO is at Moozhayil House, Thodupuzha Road, opposite Kuttiyankal Nursery, Pala, Kerala 686575. Easy access from Kottayam, Ettumanoor, and Changanacherry.' },
    { question: 'Does the best salon in Pala offer walk-in appointments?', answer: 'Yes, walk-ins are welcome for haircuts, threading, and basic services. We recommend booking ahead for bridal makeup, HydraFacial, colour treatments, and weekend slots.' },
    { question: 'What are salon prices in Pala at NIXTUDIO?', answer: 'Hair services from ₹3,500, nails from ₹2,000, facials from ₹4,500, waxing from ₹150, party makeup from ₹5,500, and bridal packages from ₹27,500. Full menu at nixtudio.in/services.' },
    { question: 'Is NIXTUDIO only for bridal clients?', answer: 'No — while we are Kerala\'s top bridal studio, NIXTUDIO is a full-service salon offering hair, nails, spa, waxing, threading, and everyday beauty for all clients.' },
  ],
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/best-salon-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO - Best Salon in Pala Kerala',
  schemaDescription: 'Best salon in Pala, Kerala offering hair, nails, facials, spa, waxing, threading and bridal makeup by Nikita Liby.',
};

export const bestSalonKottayamConfig: SalonSeoPageConfig = {
  slug: 'best-salon-kottayam',
  title: 'Best Salon in Kottayam | Premium Hair, Nails & Spa | NIXTUDIO Pala',
  description: 'Looking for the best salon in Kottayam district? NIXTUDIO in Pala serves Kottayam with premium hair, nails, HydraFacial, spa & bridal services. 20 mins from Kottayam town.',
  keywords: ['best salon kottayam', 'salon kottayam kerala', 'hair salon kottayam', 'beauty salon kottayam', 'salon near kottayam', 'premium salon kottayam', 'nixtudio kottayam'],
  h1Line1: 'Best Salon for',
  h1Accent: 'Kottayam District',
  heroSubtitle: 'Kottayam\'s discerning clients choose NIXTUDIO in Pala for premium salon services — just 20 minutes from Kottayam town.',
  heroImage: '/images/studio/premium-makeup-studio-interior-kerala.webp',
  heroImageAlt: 'Best salon serving Kottayam - NIXTUDIO Pala',
  introTitle: 'Kottayam\'s Preferred Premium Salon',
  introParagraphs: [
    'Clients across Kottayam district travel to NIXTUDIO because Pala\'s best salon experience shouldn\'t mean compromising on quality. Whether you need a precision haircut before a function, gel nails for the weekend, or a full bridal transformation, Nikita Liby and the NIXTUDIO team deliver studio-grade results.',
    'We serve brides and salon clients from Kottayam town, Ettumanoor, Pala, Vaikom, Changanacherry, and Erattupetta. Our central location on Thodupuzha Road makes us the convenient choice for premium beauty across the district.',
  ],
  services: [
    { title: 'Hair Services', description: 'Cuts, styling, colour, keratin, hair botox & bridal updos for Kottayam clients.', price: 'From ₹3,500' },
    { title: 'Nail Lounge', description: 'Gel extensions, nail art, manicure & pedicure with premium products.', price: 'From ₹2,000' },
    { title: 'Skin & HydraFacial', description: 'Medical-grade HydraFacial and customised facials for Kerala skin.', price: 'From ₹4,500' },
    { title: 'Bridal & Party', description: 'The bridal makeup artist Kottayam trusts — HD & airbrush specialists.', price: 'From ₹5,500' },
  ],
  faqs: [
    { question: 'What is the best salon in Kottayam district?', answer: 'NIXTUDIO in Pala is widely regarded as the best salon serving Kottayam district, offering premium hair, nails, spa, and bridal services with 500+ five-star reviews.' },
    { question: 'How far is NIXTUDIO from Kottayam town?', answer: 'NIXTUDIO is approximately 20–25 minutes from Kottayam town via Thodupuzha Road. Many Kottayam clients prefer our Pala studio for the premium, unhurried salon experience.' },
    { question: 'Does NIXTUDIO offer home service in Kottayam?', answer: 'Bridal makeup home service is available across Kottayam district for an additional fee. Salon services (hair, nails, facials) are studio-only at our Pala location.' },
  ],
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/best-salon-kottayam'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO - Best Salon Serving Kottayam',
  schemaDescription: 'Best salon serving Kottayam district from Pala — hair, nails, spa, facials and bridal makeup.',
};

export const hairSalonPalaConfig: SalonSeoPageConfig = {
  slug: 'hair-salon-pala',
  title: 'Best Hair Salon in Pala | Cuts, Colour & Styling | NIXTUDIO',
  description: 'Top hair salon in Pala, Kerala. Expert cuts, blow-dry, updos, ammonia-free colour, keratin & hair botox. Humidity-proof styling by NIXTUDIO. Book: 70347 26402.',
  keywords: ['hair salon pala', 'best hair salon pala', 'hair salon kottayam', 'hair styling pala', 'hair colour pala', 'keratin treatment pala', 'hair botox pala kerala'],
  h1Line1: 'Best Hair Salon in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'Precision cuts, luxury colour, keratin treatments & bridal updos — engineered for Kerala\'s humidity.',
  heroImage: '/images/studio/luxury-hair-spa-station-pala.webp',
  heroImageAlt: 'Best hair salon in Pala - NIXTUDIO hair spa station',
  introTitle: 'Pala\'s Premier Hair Salon',
  introParagraphs: [
    'Great hair in Kerala means fighting humidity, hard water, and frizz — every single day. At NIXTUDIO\'s hair salon in Pala, we use ammonia-free colour systems, humidity-resistant keratin and hair botox treatments, and precision cutting techniques tailored to your face shape and lifestyle.',
    'Whether you need a fresh cut before a function, a glossy colour refresh, a sleek keratin treatment, or an intricate bridal updo, our hair team delivers salon results that last in Pala\'s tropical climate.',
  ],
  services: [
    { title: 'Haircut & Styling', description: 'Precision cuts, layers, blow-dry & everyday styling.', price: 'From ₹3,500' },
    { title: 'Hair Colour', description: 'Ammonia-free, bleach-free colour with supermodel gloss finish.', price: 'From ₹4,500' },
    { title: 'Keratin & Hair Botox', description: 'Humidity-proof smoothing treatments for frizz-free Kerala hair.', price: 'From ₹8,000' },
    { title: 'Bridal Hair', description: 'Updos, braids, flowers & reception hair for wedding day.', price: 'From ₹5,000' },
  ],
  faqs: [
    { question: 'What is the best hair salon in Pala?', answer: 'NIXTUDIO is Pala\'s top-rated hair salon, known for ammonia-free colour, keratin treatments, humidity-proof styling, and bridal updos by experienced stylists.' },
    { question: 'Does NIXTUDIO offer keratin treatment in Pala?', answer: 'Yes — we offer premium keratin and hair botox treatments designed for Kerala\'s humid climate, providing 3–6 months of frizz-free, manageable hair.' },
    { question: 'How much does hair colour cost at NIXTUDIO Pala?', answer: 'Hair colour at NIXTUDIO starts from ₹4,500 depending on length, technique, and product choice. We use ammonia-free, salon-grade colour systems.' },
  ],
  galleryCategory: 'hair',
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/hair-salon-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO Hair Salon Pala',
  schemaDescription: 'Best hair salon in Pala — cuts, colour, keratin, hair botox and bridal styling.',
};

export const nailSalonPalaConfig: SalonSeoPageConfig = {
  slug: 'nail-salon-pala',
  title: 'Best Nail Salon in Pala | Gel Nails & Nail Art | NIXTUDIO',
  description: 'Premium nail salon in Pala, Kerala. Gel extensions, nail art, manicure & pedicure. Bespoke designs by NIXTUDIO nail lounge. Walk-ins welcome.',
  keywords: ['nail salon pala', 'gel nails pala', 'nail art pala kottayam', 'best nail salon pala', 'nail extensions pala', 'manicure pedicure pala'],
  h1Line1: 'Best Nail Salon in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'Gel extensions, bespoke nail art, manicures & pedicures — Pala\'s dedicated nail lounge.',
  heroImage: '/images/studio/premium-makeup-studio-interior-kerala.webp',
  heroImageAlt: 'Best nail salon in Pala - NIXTUDIO nail lounge',
  introTitle: 'Pala\'s Bespoke Nail Lounge',
  introParagraphs: [
    'Your nails deserve the same attention as your hair and skin. NIXTUDIO\'s nail salon in Pala offers premium gel systems, custom nail art, extensions, and spa manicures using products chosen for durability in Kerala\'s daily routines.',
    'From minimalist bridal nails to bold chrome art and classic French tips, our nail technicians create designs that photograph beautifully and last through wedding celebrations and everyday wear.',
  ],
  services: [
    { title: 'Gel Nail Extensions', description: 'Durable gel extensions with natural or dramatic lengths.', price: 'From ₹2,500' },
    { title: 'Nail Art & Design', description: 'Custom art, chrome, ombre, French & bridal nail designs.', price: 'From ₹2,000' },
    { title: 'Manicure & Pedicure', description: 'Spa manicure, pedicure, cuticle care & nail health treatments.', price: 'From ₹800' },
    { title: 'Bridal Nails', description: 'Coordinated bridal nail designs for your wedding day look.', price: 'From ₹2,500' },
  ],
  faqs: [
    { question: 'What is the best nail salon in Pala?', answer: 'NIXTUDIO\'s nail lounge is Pala\'s top choice for gel nails, extensions, and custom nail art, with premium products and bridal-specialist technicians.' },
    { question: 'How much do gel nails cost in Pala at NIXTUDIO?', answer: 'Gel nail services start from ₹2,000 for basic gel polish, with extensions and custom art from ₹2,500. Bridal nail packages available.' },
    { question: 'How long do gel nails last at NIXTUDIO?', answer: 'Our gel nail applications typically last 2–3 weeks with proper care. We use premium gel systems for chip-resistant, glossy results.' },
  ],
  galleryCategory: 'nails',
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/nail-salon-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO Nail Salon Pala',
  schemaDescription: 'Best nail salon in Pala — gel extensions, nail art, manicure and pedicure.',
};

export const facialSpaPalaConfig: SalonSeoPageConfig = {
  slug: 'facial-spa-pala',
  title: 'Best Facial & Spa in Pala | HydraFacial & Skin Treatments | NIXTUDIO',
  description: 'Medical-grade HydraFacial, glass skin facials & spa treatments in Pala, Kerala. FDA-approved Vortex-Fusion technology at NIXTUDIO. Book your skin consultation.',
  keywords: ['facial pala', 'hydrafacial pala', 'spa pala kerala', 'best facial pala', 'skin treatment pala', 'glass skin facial kottayam', 'facial spa pala'],
  h1Line1: 'Facial & Spa in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'Medical-grade HydraFacial, glass skin therapies & advanced facials — Kerala\'s premium skin destination.',
  heroImage: '/images/studio/premium-makeup-studio-interior-kerala.webp',
  heroImageAlt: 'Best facial and spa in Pala - NIXTUDIO skin treatments',
  introTitle: 'Medical-Grade Skin & Spa',
  introParagraphs: [
    'Kerala\'s humidity demands more than a basic cleanup. NIXTUDIO offers FDA-approved Vortex-Fusion HydraFacial — the same technology used in international medi-spas — alongside glass skin facials, deep cleansing, and pre-bridal skin prep protocols.',
    'Whether you are preparing for your wedding, recovering from sun exposure, or maintaining monthly skin health, our facial and spa services in Pala are customised for Indian skin in tropical conditions.',
  ],
  services: [
    { title: 'Vortex-Fusion HydraFacial', description: 'Medical-grade deep cleanse, extract, hydrate & protect in one session.', price: 'From ₹6,500' },
    { title: 'Glass Skin Facial', description: 'Korean-inspired luminous skin treatment for radiant, translucent finish.', price: 'From ₹4,500' },
    { title: 'Pre-Bridal Skin Prep', description: 'Multi-session skin protocol before your wedding day.', price: 'From ₹3,500' },
    { title: 'Deep Cleansing & Acne', description: 'Targeted treatments for oily, acne-prone Kerala skin.', price: 'From ₹2,500' },
  ],
  faqs: [
    { question: 'Does NIXTUDIO offer HydraFacial in Pala?', answer: 'Yes — NIXTUDIO is among the few salons in Pala offering FDA-approved Vortex-Fusion HydraFacial technology for deep cleansing, hydration, and anti-ageing results.' },
    { question: 'What is the best facial in Pala for bridal skin prep?', answer: 'Our pre-bridal skin prep protocol includes HydraFacial, glass skin treatments, and customised facials starting 30–60 days before your wedding for optimal makeup application.' },
    { question: 'How much does a HydraFacial cost in Pala?', answer: 'HydraFacial at NIXTUDIO starts from ₹6,500. We recommend a consultation to determine the best treatment plan for your skin type and goals.' },
  ],
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/facial-spa-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO Facial & Spa Pala',
  schemaDescription: 'Best facial and spa in Pala — HydraFacial, glass skin treatments and pre-bridal skin prep.',
};

export const beautyParlourPalaConfig: SalonSeoPageConfig = {
  slug: 'beauty-parlour-pala',
  title: 'Best Beauty Parlour in Pala | Hair, Nails, Waxing & Makeup | NIXTUDIO',
  description: 'Top beauty parlour in Pala, Kerala. Full-service hair, nails, waxing, threading, facials, makeup & bridal services at NIXTUDIO. Trusted by 500+ clients.',
  keywords: ['beauty parlour pala', 'parlour pala kerala', 'best beauty parlour pala', 'ladies parlour pala', 'beauty parlour kottayam', 'parlour near me pala'],
  h1Line1: 'Best Beauty Parlour in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'The complete beauty parlour experience — hair, skin, nails, waxing, threading & makeup in one premium studio.',
  heroImage: '/images/studio/luxury-salon-interior-pala.webp',
  heroImageAlt: 'Best beauty parlour in Pala Kerala - NIXTUDIO',
  introTitle: 'Pala\'s Complete Beauty Parlour',
  introParagraphs: [
    'Searching for a beauty parlour in Pala that does everything well — not just one service? NIXTUDIO is a full-service beauty destination offering hair, nails, facials, waxing, threading, party makeup, and Kerala\'s #1 bridal artistry.',
    'Unlike neighbourhood parlours, NIXTUDIO combines salon services with studio-grade hygiene, premium international products, and personalised consultations — the same standard that earned us top rankings for bridal makeup across Kottayam district.',
  ],
  services: [
    { title: 'Threading & Waxing', description: 'Eyebrow threading, full face, body waxing & bridal threading.', price: 'From ₹150' },
    { title: 'Hair & Nails', description: 'Complete hair salon and nail lounge services under one roof.', price: 'From ₹800' },
    { title: 'Facials & Skin', description: 'HydraFacial, cleanups, bleaching & skin brightening.', price: 'From ₹2,500' },
    { title: 'Makeup Services', description: 'Party, engagement, reception & bridal makeup by Nikita Liby.', price: 'From ₹5,500' },
  ],
  faqs: [
    { question: 'What is the best beauty parlour in Pala?', answer: 'NIXTUDIO is rated the best beauty parlour in Pala for comprehensive services — hair, nails, skin, waxing, threading, and bridal makeup — with premium products and expert staff.' },
    { question: 'Is NIXTUDIO a ladies parlour in Pala?', answer: 'NIXTUDIO is a premium unisex salon and beauty parlour in Pala, specialising in women\'s hair, nails, skin, and makeup services with a luxury studio environment.' },
    { question: 'What services does the beauty parlour in Pala offer?', answer: 'Full menu includes haircuts, colour, keratin, gel nails, HydraFacial, waxing, threading, party makeup, and bridal packages. See nixtudio.in/services for complete pricing.' },
  ],
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/beauty-parlour-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO Beauty Parlour Pala',
  schemaDescription: 'Best beauty parlour in Pala — hair, nails, waxing, threading, facials and makeup.',
};

export const ALL_SALON_SEO_PAGES: SalonSeoPageConfig[] = [
  bestSalonPalaConfig,
  bestSalonKottayamConfig,
  hairSalonPalaConfig,
  nailSalonPalaConfig,
  facialSpaPalaConfig,
  beautyParlourPalaConfig,
];
