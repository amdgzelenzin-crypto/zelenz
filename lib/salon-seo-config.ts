import type { Metadata } from 'next';
import type { SalonSeoPageConfig } from './salon-seo-types';
import { KOTTAYAM_DISTRICT_AREAS, KOTTAYAM_SEO_PAGES } from './kottayam-seo-config';
import { PALA_LOCAL_AREAS, PALA_SEO_PAGES } from './pala-seo-config';

const SALON_LINKS = [
  { href: '/best-salon-pala', title: 'Best Salon Pala', desc: '#1 salon in Pala, Kerala' },
  { href: '/best-salon-kottayam', title: 'Best Salon Kottayam', desc: '#1 salon serving Kottayam district' },
  { href: '/hair-salon-pala', title: 'Hair Salon Pala', desc: 'Cuts, colour, styling & treatments' },
  { href: '/hair-salon-kottayam', title: 'Hair Salon Kottayam', desc: 'Cuts, colour & keratin for Kottayam' },
  { href: '/nail-salon-pala', title: 'Nail Salon Pala', desc: 'Gel nails, extensions & nail art' },
  { href: '/facial-spa-pala', title: 'Facial & Spa Pala', desc: 'HydraFacial, facials & skin therapies' },
  { href: '/hydrafacial-pala', title: 'HydraFacial Pala', desc: 'Medical-grade HydraFacial treatments' },
  { href: '/keratin-treatment-pala', title: 'Keratin Pala', desc: 'Humidity-proof keratin & hair botox' },
  { href: '/waxing-threading-pala', title: 'Waxing & Threading Pala', desc: 'Eyebrow threading & body waxing' },
  { href: '/beauty-parlour-pala', title: 'Beauty Parlour Pala', desc: 'Full-service beauty parlour in Pala' },
];

const BRIDAL_LINKS = [
  { href: '/best-bridal-makeup-pala', title: 'Best Bridal Makeup Pala', desc: '#1 bridal artist in Pala' },
  { href: '/best-bridal-makeup-kottayam', title: 'Best Bridal Makeup Kottayam', desc: '#1 bridal artist for Kottayam' },
  { href: '/bridal-makeup-pala', title: 'Bridal Makeup Pala', desc: 'HD & airbrush bridal artistry' },
  { href: '/bridal-makeup-kottayam', title: 'Bridal Makeup Kottayam', desc: 'HD & airbrush across Kottayam' },
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
  title: '#1 Best Salon in Pala Kerala | Hair, Nails, Spa & Bridal | NIXTUDIO',
  description:
    'Pala\'s #1 salon — NIXTUDIO by Nikita Liby. Premium hair, gel nails, facials, spa & bridal makeup. 500+ reviews. Thodupuzha Road, Pala. Also serving Kottayam district. Call 70347 26402.',
  keywords: [
    'best salon pala',
    'salon in pala kerala',
    'best salon in pala',
    'luxury salon pala',
    'top salon pala',
    'beauty salon pala',
    'beauty parlour pala',
    'nixtudio salon',
    'salon near me pala',
    'unisex salon pala',
    'ladies salon pala',
    'best salon pala kottayam',
  ],
  h1Line1: '#1 Best Salon in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle:
    'Pala\'s top-rated salon — premium hair, nails, facials & bridal at NIXTUDIO on Thodupuzha Road. Also trusted across Kottayam district.',
  heroImage: '/images/studio/luxury-salon-interior-pala.webp',
  heroImageAlt: 'Best salon in Pala Kerala - NIXTUDIO luxury interior',
  introTitle: 'Pala\'s #1 Premium Salon',
  introParagraphs: [
    'When clients search "best salon pala," they want a studio that understands Kerala\'s climate, uses premium products, and delivers consistent results — not a rushed neighbourhood parlour. NIXTUDIO on Thodupuzha Road is Pala\'s answer.',
    'From humidity-resistant keratin and hair botox to bespoke gel nail art and Kerala\'s most trusted bridal makeup, every service is handled with the precision that made us #1 in both Pala and Kottayam district.',
    'Walk-ins welcome for cuts and threading. Book ahead for bridal makeup, colour, keratin, and weekends. Clients also travel from Kottayam, Ettumanoor, Changanacherry, and Kanjirappally daily.',
  ],
  services: [
    { title: 'Hair Styling & Colour', description: 'Precision cuts, blow-dry, updos, ammonia-free colour, keratin & hair botox.', price: 'From ₹550' },
    { title: 'Gel Nails & Extensions', description: 'Premium gel systems, nail art, extensions, manicure & pedicure.', price: 'From ₹2,000' },
    { title: 'Facials & Skin', description: 'Glass skin facials, deep cleansing & pre-bridal skin prep.', price: 'From ₹2,500' },
    { title: 'Waxing & Threading', description: 'Full-body waxing, eyebrow shaping, upper lip & bridal threading.', price: 'From ₹150' },
    { title: 'Bridal Makeup', description: '#1 bridal makeup artist in Pala — HD & airbrush by Nikita Liby.', price: 'From ₹27,500' },
    { title: 'Party & Guest Makeup', description: 'Engagement, reception & guest styling for every occasion.', price: 'From ₹4,500' },
  ],
  faqs: [
    {
      question: 'What is the best salon in Pala, Kerala?',
      answer:
        'NIXTUDIO on Thodupuzha Road is Pala\'s #1 salon for hair, nails, facials, waxing, threading, and bridal makeup. Led by Nikita Liby with 500+ five-star reviews across Pala and Kottayam district.',
    },
    {
      question: 'Is NIXTUDIO the top-rated salon in Pala?',
      answer:
        'Yes. NIXTUDIO is consistently rated the best salon in Pala for premium products, hygiene standards, bridal expertise, and full-service beauty — hair, nails, spa, and makeup under one roof.',
    },
    {
      question: 'Where is the best salon in Pala located?',
      answer:
        'NIXTUDIO is at Moozhayil House, Thodupuzha Road, opposite Kuttiyankal Nursery, Pala, Kerala 686575. Easy access from Kottayam, Ettumanoor, and Changanacherry.',
    },
    {
      question: 'Does the best salon in Pala also serve Kottayam clients?',
      answer:
        'Yes. Kottayam district clients travel to NIXTUDIO in Pala weekly for premium salon and bridal services — approximately 20–25 minutes from Kottayam town.',
    },
    {
      question: 'Does the best salon in Pala offer walk-in appointments?',
      answer:
        'Yes, walk-ins are welcome for haircuts, threading, and basic services. Book ahead for bridal makeup, colour treatments, keratin, and weekend slots.',
    },
    {
      question: 'What are salon prices in Pala at NIXTUDIO?',
      answer:
        'Hair from ₹550, nails from ₹2,000, facials from ₹2,500, waxing from ₹150, party makeup from ₹4,500, bridal from ₹27,500. Full menu at nixtudio.in/services.',
    },
  ],
  areaServed: PALA_LOCAL_AREAS,
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/best-salon-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO - #1 Best Salon in Pala Kerala',
  schemaDescription:
    'Best salon in Pala, Kerala — hair, nails, facials, spa, waxing, threading and bridal makeup by Nikita Liby.',
};

export const bestSalonKottayamConfig: SalonSeoPageConfig = {
  slug: 'best-salon-kottayam',
  title: '#1 Best Salon in Kottayam | Hair, Nails, Spa & Bridal | NIXTUDIO',
  description:
    'Kottayam\'s #1 salon — NIXTUDIO in Pala. Premium hair, gel nails, facials, spa & bridal makeup by Nikita Liby. 500+ reviews. 20 mins from Kottayam town. Call 70347 26402.',
  keywords: [
    'best salon kottayam',
    'salon kottayam kerala',
    'best salon in kottayam',
    'hair salon kottayam',
    'beauty salon kottayam',
    'salon near kottayam',
    'premium salon kottayam',
    'beauty parlour kottayam',
    'nixtudio kottayam',
    'top salon kottayam',
    'ladies salon kottayam',
    'unisex salon kottayam',
  ],
  h1Line1: '#1 Best Salon in',
  h1Accent: 'Kottayam District',
  heroSubtitle:
    'Kottayam\'s top-rated salon experience — premium hair, nails, facials & bridal at NIXTUDIO Pala, just 20 minutes from Kottayam town.',
  heroImage: '/images/studio/premium-makeup-studio-interior-kerala.webp',
  heroImageAlt: 'Best salon in Kottayam district - NIXTUDIO Pala',
  introTitle: 'Kottayam\'s #1 Premium Salon',
  introParagraphs: [
    'When Kottayam clients search "best salon kottayam," they want more than a quick haircut at a crowded town parlour. NIXTUDIO in Pala delivers studio-grade hair, nails, facials, and bridal makeup — the same precision that made us Kerala\'s most trusted bridal studio.',
    'Clients from Kottayam town, Ettumanoor, Changanacherry, Vaikom, Kanjirappally, Kumarakom, and Erattupetta choose us weekly. Our Thodupuzha Road location is an easy 20–25 minute drive — worth it for premium products, hygiene standards, and results that last in Kerala humidity.',
    'Walk-ins welcome for cuts and threading. Book ahead for bridal makeup, colour, keratin, and weekend slots. WhatsApp or call 70347 26402.',
  ],
  services: [
    { title: 'Hair Services', description: 'Cuts, styling, colour, keratin, hair botox & bridal updos.', price: 'From ₹550' },
    { title: 'Nail Lounge', description: 'Gel extensions, nail art, manicure & pedicure.', price: 'From ₹2,000' },
    { title: 'Facials & Skin', description: 'Glass skin facials, deep cleansing & pre-bridal prep.', price: 'From ₹2,500' },
    { title: 'Bridal & Party', description: '#1 bridal makeup artist Kottayam trusts — HD & airbrush.', price: 'From ₹27,500' },
    { title: 'Waxing & Threading', description: 'Eyebrow shaping, face threading & body waxing.', price: 'From ₹150' },
    { title: 'Party Makeup', description: 'Engagement, reception & guest styling.', price: 'From ₹4,500' },
  ],
  faqs: [
    {
      question: 'What is the best salon in Kottayam?',
      answer:
        'NIXTUDIO in Pala is the best salon serving Kottayam district — premium hair, nails, facials, waxing, threading, and bridal makeup by Nikita Liby with 500+ five-star reviews. Located 20–25 minutes from Kottayam town on Thodupuzha Road.',
    },
    {
      question: 'Is NIXTUDIO the best salon near Kottayam town?',
      answer:
        'Yes. Kottayam clients consistently rate NIXTUDIO as the best salon near Kottayam for quality, hygiene, and bridal expertise. Many prefer our Pala studio over town parlours for a premium, unhurried experience.',
    },
    {
      question: 'How far is the best salon from Kottayam town?',
      answer:
        'NIXTUDIO is approximately 20–25 minutes from Kottayam town via Thodupuzha Road, Pala. Easy access from Ettumanoor, Changanacherry, and Vaikom.',
    },
    {
      question: 'Does the best salon in Kottayam district offer bridal makeup?',
      answer:
        'Yes. NIXTUDIO is Kottayam district\'s top bridal makeup studio. Packages: HD ₹27,500, Airbrush ₹32,500, Premium ₹40,000. Home service available across Kottayam.',
    },
    {
      question: 'Does NIXTUDIO offer home service in Kottayam?',
      answer:
        'Bridal makeup home service is available across Kottayam district. Salon services (hair, nails, facials) are studio-only at our Pala location.',
    },
    {
      question: 'What are salon prices for Kottayam clients at NIXTUDIO?',
      answer:
        'Hair from ₹550, nails from ₹2,000, facials from ₹2,500, waxing from ₹150, party makeup from ₹4,500, bridal from ₹27,500. Full menu at nixtudio.in/services.',
    },
  ],
  areaServed: KOTTAYAM_DISTRICT_AREAS,
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/best-salon-kottayam'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO - #1 Best Salon Kottayam District',
  schemaDescription:
    'Best salon in Kottayam district — hair, nails, spa, facials and bridal makeup by Nikita Liby at NIXTUDIO Pala.',
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

export const hydrafacialPalaConfig: SalonSeoPageConfig = {
  slug: 'hydrafacial-pala',
  title: 'HydraFacial in Pala Kerala | Medical-Grade Skin Treatment | NIXTUDIO',
  description: 'HydraFacial in Pala at NIXTUDIO. FDA-approved Vortex-Fusion technology from ₹6,500. Pre-bridal skin prep, acne & glass skin. Book: 70347 26402.',
  keywords: ['hydrafacial pala', 'hydrafacial kottayam', 'hydrafacial pala kerala', 'best hydrafacial pala', 'hydrafacial near me', 'hydrafacial price pala', 'skin treatment pala'],
  h1Line1: 'HydraFacial in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'Medical-grade Vortex-Fusion HydraFacial — deep cleanse, extract, hydrate & protect in one session.',
  heroImage: '/images/studio/premium-makeup-studio-interior-kerala.webp',
  heroImageAlt: 'HydraFacial treatment in Pala - NIXTUDIO skin spa',
  introTitle: 'Pala\'s Medical-Grade HydraFacial Studio',
  introParagraphs: [
    'HydraFacial is one of the most searched skin treatments in Pala and Kottayam — but few local parlours offer genuine Vortex-Fusion technology. NIXTUDIO uses FDA-approved HydraFacial systems for deep cleansing, painless extraction, and intense hydration suited to Kerala\'s humid climate.',
    'Ideal for pre-bridal glow, monthly maintenance, acne-prone skin, and dullness from sun exposure. Clients travel from Kottayam town, Ettumanoor, and Changanacherry for our studio-grade facial experience.',
  ],
  services: [
    { title: 'Signature HydraFacial', description: 'Cleanse, extract, hydrate & antioxidant protection.', price: 'From ₹6,500' },
    { title: 'HydraFacial + Booster', description: 'Targeted boosters for brightening, anti-ageing or clarifying.', price: 'From ₹8,500' },
    { title: 'Pre-Bridal HydraFacial', description: 'Multi-session protocol 30–60 days before wedding.', price: 'From ₹6,500' },
    { title: 'Glass Skin Facial', description: 'Korean-inspired luminous finish add-on.', price: 'From ₹4,500' },
  ],
  faqs: [
    { question: 'Where can I get HydraFacial in Pala?', answer: 'NIXTUDIO on Thodupuzha Road, Pala offers FDA-approved Vortex-Fusion HydraFacial. We are among the few premium salons in Central Travancore with medical-grade HydraFacial equipment.' },
    { question: 'How much does HydraFacial cost in Pala?', answer: 'HydraFacial at NIXTUDIO starts from ₹6,500 for the signature treatment. Booster add-ons and pre-bridal packages are quoted after a brief skin consultation.' },
    { question: 'Is HydraFacial good for bridal skin prep?', answer: 'Yes — we recommend HydraFacial 2–4 weeks before your wedding (not the day before) as part of our pre-bridal skin protocol for smooth, hydrated makeup application.' },
  ],
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/hydrafacial-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO HydraFacial Pala',
  schemaDescription: 'HydraFacial in Pala Kerala — medical-grade Vortex-Fusion skin treatments.',
};

export const keratinTreatmentPalaConfig: SalonSeoPageConfig = {
  slug: 'keratin-treatment-pala',
  title: 'Keratin Treatment in Pala | Hair Botox & Smoothening | NIXTUDIO',
  description: 'Best keratin treatment in Pala, Kerala. Humidity-proof keratin & hair botox from ₹8,000. Frizz-free hair for 3–6 months. NIXTUDIO hair salon. Book now.',
  keywords: ['keratin treatment pala', 'keratin pala kerala', 'hair botox pala', 'keratin treatment kottayam', 'smoothening pala', 'frizz treatment pala', 'best keratin pala'],
  h1Line1: 'Keratin Treatment in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'Humidity-proof keratin & hair botox — engineered for frizzy Kerala hair.',
  heroImage: '/images/studio/luxury-hair-spa-station-pala.webp',
  heroImageAlt: 'Keratin treatment in Pala - NIXTUDIO hair salon',
  introTitle: 'Kerala-Ready Keratin & Hair Botox',
  introParagraphs: [
    'Standard keratin treatments often fail in Pala\'s humidity within weeks. NIXTUDIO uses premium keratin and hair botox systems formulated for tropical climates — delivering 3–6 months of manageable, glossy, frizz-resistant hair.',
    'Whether you are preparing for a wedding, recovering from colour damage, or simply tired of daily blow-dry battles, our hair team customises treatment strength to your hair type and lifestyle.',
  ],
  services: [
    { title: 'Keratin Smoothening', description: 'Full-length frizz control & shine for medium to long hair.', price: 'From ₹8,000' },
    { title: 'Hair Botox', description: 'Deep repair, volume & smoothness without heavy straightening.', price: 'From ₹9,500' },
    { title: 'Keratin + Cut Package', description: 'Post-treatment precision cut for best shape.', price: 'From ₹10,500' },
    { title: 'Bridal Hair Prep', description: 'Keratin or botox before wedding-week styling.', price: 'Custom quote' },
  ],
  faqs: [
    { question: 'What is the best keratin treatment in Pala?', answer: 'NIXTUDIO is Pala\'s top choice for keratin and hair botox, using premium products and climate-aware application for long-lasting frizz control in Kerala humidity.' },
    { question: 'How much does keratin cost in Pala?', answer: 'Keratin treatments at NIXTUDIO start from ₹8,000 depending on hair length and product. Hair botox from ₹9,500. A consultation determines the right treatment.' },
    { question: 'How long does keratin last in Kerala humidity?', answer: 'With proper aftercare and sulphate-free products, our keratin and botox treatments typically last 3–6 months in Kerala conditions — significantly longer than basic smoothening at neighbourhood parlours.' },
  ],
  galleryCategory: 'hair',
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/keratin-treatment-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO Keratin Treatment Pala',
  schemaDescription: 'Keratin treatment and hair botox in Pala — humidity-proof smoothening.',
};

export const waxingThreadingPalaConfig: SalonSeoPageConfig = {
  slug: 'waxing-threading-pala',
  title: 'Waxing & Threading in Pala | Eyebrow & Body Wax | NIXTUDIO',
  description: 'Best waxing & threading in Pala, Kerala. Eyebrow shaping, full face threading, body waxing from ₹150. Hygienic beauty parlour at NIXTUDIO.',
  keywords: ['threading pala', 'waxing pala', 'eyebrow threading pala', 'beauty parlour threading pala', 'waxing kottayam', 'ladies parlour pala', 'threading near me pala'],
  h1Line1: 'Waxing & Threading in',
  h1Accent: 'Pala, Kerala',
  heroSubtitle: 'Precision eyebrow threading, full-face threading & hygienic body waxing — walk-ins welcome.',
  heroImage: '/images/studio/luxury-salon-interior-pala.webp',
  heroImageAlt: 'Waxing and threading in Pala - NIXTUDIO beauty parlour',
  introTitle: 'Pala\'s Trusted Threading & Waxing Parlour',
  introParagraphs: [
    'Threading and waxing are everyday essentials — but hygiene and technique matter. NIXTUDIO offers studio-grade threading for eyebrows and full face, plus body waxing using premium wax systems in a clean, private environment.',
    'Walk in for eyebrow shaping before a function, or book bridal threading as part of your wedding prep. We serve clients from Pala, Kottayam, Ettumanoor, and Kanjirappally daily.',
  ],
  services: [
    { title: 'Eyebrow Threading', description: 'Precision shaping & arch definition.', price: 'From ₹150' },
    { title: 'Full Face Threading', description: 'Upper lip, chin, forehead & sideburns.', price: 'From ₹350' },
    { title: 'Body Waxing', description: 'Arms, legs, underarms & full body options.', price: 'From ₹500' },
    { title: 'Bridal Threading', description: 'Pre-wedding face threading & grooming.', price: 'From ₹500' },
  ],
  faqs: [
    { question: 'Where is the best threading in Pala?', answer: 'NIXTUDIO on Thodupuzha Road is trusted for precise eyebrow threading and full-face threading with hygienic single-use thread and studio cleanliness standards.' },
    { question: 'How much does waxing cost in Pala at NIXTUDIO?', answer: 'Eyebrow threading from ₹150, full face from ₹350, body waxing from ₹500. Full price list at nixtudio.in/services.' },
    { question: 'Do you offer walk-in threading in Pala?', answer: 'Yes — walk-ins are welcome for threading and basic waxing. Weekends can be busy; WhatsApp 70347 26402 to check wait times.' },
  ],
  relatedLinks: [...SALON_LINKS.filter((l) => l.href !== '/waxing-threading-pala'), ...BRIDAL_LINKS],
  schemaServiceName: 'NIXTUDIO Waxing & Threading Pala',
  schemaDescription: 'Waxing and threading in Pala — eyebrow shaping, face threading and body waxing.',
};

export const ALL_SALON_SEO_PAGES: SalonSeoPageConfig[] = [
  bestSalonPalaConfig,
  bestSalonKottayamConfig,
  ...PALA_SEO_PAGES,
  ...KOTTAYAM_SEO_PAGES,
  hairSalonPalaConfig,
  nailSalonPalaConfig,
  facialSpaPalaConfig,
  hydrafacialPalaConfig,
  keratinTreatmentPalaConfig,
  waxingThreadingPalaConfig,
  beautyParlourPalaConfig,
];
