import type { Category } from '@/lib/gallery-utils';

export type SalonSeoPageConfig = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1Line1: string;
  h1Accent: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  introTitle: string;
  introParagraphs: string[];
  services: { title: string; description: string; price: string }[];
  faqs: { question: string; answer: string }[];
  galleryCategory?: Category;
  relatedLinks: { href: string; title: string; desc: string }[];
  schemaServiceName: string;
  schemaDescription: string;
};
