import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { FadeUp } from '@/components/ui/AnimationWrapper';
import { getGalleryImages } from '@/lib/gallery-utils';
import type { SalonSeoPageConfig } from '@/lib/salon-seo-types';

type Props = {
  config: SalonSeoPageConfig;
};

export default function SalonSeoLanding({ config }: Props) {
  const galleryImages = config.galleryCategory
    ? getGalleryImages().filter((img) => img.category === config.galleryCategory).slice(0, 6)
    : getGalleryImages().slice(0, 6);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BeautySalon', 'HealthAndBeautyBusiness'],
        name: config.schemaServiceName,
        description: config.schemaDescription,
        url: `https://nixtudio.in/${config.slug}`,
        telephone: '+917034726402',
        priceRange: '₹₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Moozhayil House, Thodupuzha Rd, opposite kuttiyankal nursery',
          addressLocality: 'Pala',
          addressRegion: 'Kerala',
          postalCode: '686575',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '9.7115',
          longitude: '76.6225',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '500',
          bestRating: '5',
        },
        ...(config.areaServed
          ? { areaServed: config.areaServed.map((name) => ({ '@type': 'City', name })) }
          : {}),
      },
      {
        '@type': 'FAQPage',
        mainEntity: config.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <section
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FFF9F5 0%, #FDE8E8 100%)' }}
      >
        <div className="absolute inset-0">
          <Image
            src={config.heroImage}
            alt={config.heroImageAlt}
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <FadeUp>
            <p
              className="text-sm tracking-widest uppercase text-[#B76E79] mb-6"
              style={{ fontFamily: 'var(--font-sans), sans-serif' }}
            >
              NIXTUDIO · Pala, Kerala
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1
              className="text-4xl md:text-6xl font-light italic mb-8 text-[#3D1520]"
              style={{ fontFamily: 'var(--font-display), Georgia, serif', lineHeight: 1.1 }}
            >
              {config.h1Line1}
              <br />
              <span className="text-[#B76E79]">{config.h1Accent}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p
              className="text-lg md:text-xl text-[#3D1520]/80 mb-10 max-w-2xl mx-auto italic"
              style={{ fontFamily: 'var(--font-body), Georgia, serif', lineHeight: 1.6 }}
            >
              {config.heroSubtitle}
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3D1520] text-white rounded-full hover:bg-[#4A3B39] transition-colors"
                style={{ fontFamily: 'var(--font-sans), sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '12px' }}
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#B76E79] text-[#B76E79] rounded-full hover:bg-[#B76E79] hover:text-white transition-all"
                style={{ fontFamily: 'var(--font-sans), sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '12px' }}
              >
                View Full Menu
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-light italic text-[#3D1520] mb-8"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              {config.introTitle}
            </h2>
          </FadeUp>
          {config.introParagraphs.map((paragraph, i) => (
            <FadeUp key={paragraph.slice(0, 24)} delay={i * 0.08}>
              <p
                className="text-[#3D1520]/80 mb-6 leading-relaxed italic"
                style={{ fontFamily: 'var(--font-body), Georgia, serif', fontSize: '17px' }}
              >
                {paragraph}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDE8E8' }}>
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-light italic text-center text-[#3D1520] mb-14"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Services & <span className="text-[#B76E79]">Pricing</span>
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((service, index) => (
              <FadeUp key={service.title} delay={index * 0.06}>
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm border border-[#3D1520]/5">
                  <h3
                    className="text-xl font-light italic text-[#3D1520] mb-3"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[#3D1520]/70 mb-4 leading-relaxed text-sm"
                    style={{ fontFamily: 'var(--font-body), Georgia, serif' }}
                  >
                    {service.description}
                  </p>
                  <p
                    className="text-[#B76E79] font-medium text-sm tracking-wide"
                    style={{ fontFamily: 'var(--font-sans), sans-serif' }}
                  >
                    {service.price}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2
                className="text-3xl font-light italic text-center text-[#3D1520] mb-10"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Our <span className="text-[#B76E79]">Work</span>
              </h2>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((img) => (
                <Link
                  key={img.src}
                  href="/gallery"
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-6" style={{ background: '#3D1520' }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2
              className="text-3xl font-light italic text-center text-[#FDE8E8] mb-12"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Frequently Asked Questions
            </h2>
          </FadeUp>
          <div className="space-y-4">
            {config.faqs.map((faq, index) => (
              <FadeUp key={faq.question} delay={index * 0.04}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3
                    className="text-[#E8CC90] mb-3 text-lg font-light italic"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    className="text-[#FDE8E8]/85 leading-relaxed text-sm"
                    style={{ fontFamily: 'var(--font-body), Georgia, serif' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2
              className="text-2xl font-light italic text-center text-[#3D1520] mb-10"
              style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
            >
              Explore NIXTUDIO
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-5 rounded-xl border border-[#3D1520]/10 hover:border-[#B76E79]/40 hover:shadow-md transition-all"
              >
                <h3
                  className="text-[#B76E79] mb-2 text-base font-light italic"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  {link.title}
                </h3>
                <p
                  className="text-[#3D1520]/65 text-sm"
                  style={{ fontFamily: 'var(--font-body), Georgia, serif' }}
                >
                  {link.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
