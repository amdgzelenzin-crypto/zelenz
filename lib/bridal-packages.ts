/**
 * Official bridal packages — source: NIXTUDIO "The Bridal Edit" catalogue (2026).
 * Engagement, Wedding & Wedding Reception use the same package tiers.
 */

export const BRIDAL_PHILOSOPHY_BRANDS = [
  'Gucci', 'Chanel', 'Dior', 'YSL', 'Charlotte Tilbury', 'Givenchy', 'NARS',
  'Fenty Beauty', 'Urban Decay', 'Too Faced', 'Huda Beauty', 'Makeup by Mario',
  'Pat McGrath', 'MAC', 'Laura Mercier', 'Rare Beauty',
] as const;

export const STANDARD_PRODUCTS = [
  'Bobbi Brown', 'Huda Beauty', 'Anastasia', 'MAC', 'Urban Decay',
  'Too Faced', 'Makeup Forever',
] as const;

export const PREMIUM_PRODUCTS = [
  'Chanel', 'Dior', 'Gucci', 'YSL', 'Givenchy', 'Rare Beauty', 'NARS',
  'Pat McGrath', 'Hauslabs', 'Hourglass', 'One/Size', 'Fenty Beauty',
  'Charlotte Tilbury', 'Tarte', 'Lancome', 'Bobbi Brown', 'Urban Decay', 'Too Faced',
] as const;

export const STANDARD_INCLUDED = [
  'Makeup',
  'Hairstyling',
  'Eyelashes',
  'Lens',
  'Outfit styling (saree not included)',
  'Hair extensions if needed',
] as const;

export const PREMIUM_INCLUDED = [
  'Makeup',
  'Hairstyling',
  'Saree draping with/without pre-pleats',
  'Eyelashes',
  'Lens',
  'Outfit styling',
  'Hair extensions if needed',
] as const;

export const BRIDAL_EXTRAS = [
  { service: 'Bridal saree draping (normal)', price: '₹1,500' },
  { service: 'Bridal saree draping with pre-pleat / fluffy pleats / mermaid', price: '₹2,000' },
  { service: 'Hair accessories', price: '₹750 / ₹1,000 / ₹1,500' },
] as const;

export const BRIDE_PROVIDED = [
  'Hair extensions', 'Lashes', 'Lenses', 'Slides', 'Pins', 'Bun', 'Nets', 'Bands', 'Hairpins',
] as const;

export const BRIDAL_GOOD_TO_KNOW = [
  'There are no makeup or hair trials. Your consultation happens on the day — it is thorough, personal, and enough.',
  'Once booked, date and venue changes are subject to availability only.',
  'Guest and family makeup is available separately — please ask for our Party/Guest makeup catalogue and inform us at booking.',
  'Listed prices apply to the bride\'s makeup and hair only. Guest requirements must be shared at the time of booking.',
  'We provide hair extensions, lashes, lenses, slides, pins, bun, nets, bands, and hairpins. Flowers for hair are not included.',
  'Limited hair accessories available for brides in case of emergency at extra cost (₹750 / ₹1,000 / ₹1,500).',
  'Balance amount (after advance) must be settled on the day of the event.',
] as const;

export type BridalPackageTier = {
  id: 'standard-hd' | 'standard-airbrush' | 'premium-airbrush';
  name: string;
  subtitle: string;
  price: number;
  priceDisplay: string;
  technique: string;
  products: readonly string[];
  included: readonly string[];
  badge?: string;
};

export const BRIDAL_PACKAGES: BridalPackageTier[] = [
  {
    id: 'standard-hd',
    name: 'Standard Package',
    subtitle: 'HD Makeup',
    price: 27500,
    priceDisplay: '₹27,500',
    technique: 'High-definition bridal finish',
    products: STANDARD_PRODUCTS,
    included: STANDARD_INCLUDED,
  },
  {
    id: 'standard-airbrush',
    name: 'Standard Package',
    subtitle: 'Airbrush Makeup',
    price: 32500,
    priceDisplay: '₹32,500',
    technique: 'Humidity-resistant airbrush finish',
    products: STANDARD_PRODUCTS,
    included: STANDARD_INCLUDED,
    badge: 'MOST POPULAR',
  },
  {
    id: 'premium-airbrush',
    name: 'Premium Package',
    subtitle: 'Signature Subtle Airbrush Look',
    price: 40000,
    priceDisplay: '₹40,000',
    technique: 'Luxury subtle airbrush glam',
    products: PREMIUM_PRODUCTS,
    included: PREMIUM_INCLUDED,
  },
];

export const BRIDAL_PACKAGE_EVENTS = 'Engagement · Wedding · Wedding Reception';

export function formatPackagePrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}
