import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FadeUp } from '@/components/ui/AnimationWrapper';

export const metadata: Metadata = {
  title: 'Best Woman Salon in Pala | Premium Beauty Services by Nixtudio',
  description: 'Discover Pala\'s premier woman salon offering premium hair styling, glass skin treatments, and bespoke beauty services. Luxury salon experience in Kottayam district.',
  openGraph: {
    title: 'Best Woman Salon in Pala | Premium Beauty Services by Nixtudio',
    description: 'Discover Pala\'s premier woman salon offering premium hair styling, glass skin treatments, and bespoke beauty services. Luxury salon experience in Kottayam district.',
    url: 'https://nixtudio.in/services/woman-salon-pala',
  },
};

export default function WomanSalonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF9F5 0%, #FDE8E8 100%)" }}>
        <div className="absolute inset-0">
          <Image
            src="/images/studio/luxury-salon-interior-pala.webp"
            alt="Premium woman salon interior at Nixtudio Pala - Best beauty salon in Kottayam"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeUp>
            <p className="text-sm tracking-widest uppercase text-[#B76E79] mb-6" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
              Premium Woman Salon
            </p>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h1 
              className="text-5xl md:text-7xl font-light italic mb-8 text-[#3D1520]"
              style={{ fontFamily: "var(--font-display), Georgia, serif", lineHeight: 1.1 }}
            >
              Where Beauty
              <br />
              <span className="text-[#B76E79]">Meets Artistry</span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p 
              className="text-lg md:text-xl text-[#3D1520]/80 mb-12 max-w-2xl mx-auto italic"
              style={{ fontFamily: "var(--font-body), Georgia, serif", lineHeight: 1.6 }}
            >
              Experience Pala's most sophisticated beauty destination, where premium services 
              and personalized care create your signature look.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3D1520] text-white rounded-full hover:bg-[#4A3B39] transition-colors"
                style={{ fontFamily: "var(--font-sans), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                Book Consultation
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#B76E79] text-[#B76E79] rounded-full hover:bg-[#B76E79] hover:text-white transition-all"
                style={{ fontFamily: "var(--font-sans), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                All Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-[#B76E79] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                Our Signature Services
              </p>
              <h2 
                className="text-4xl md:text-5xl font-light italic text-[#3D1520]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Premium <span className="text-[#B76E79]">Beauty</span> Experiences
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Hair Styling",
                description: "Expert cuts, color, and styling using the finest products and techniques tailored to your unique features.",
                image: "/images/studio/luxury-hair-spa-station-pala.webp",
                price: "From ₹3,500"
              },
              {
                title: "Glass Skin Treatments",
                description: "Advanced facial therapies delivering radiant, translucent skin using Korean-inspired techniques and medical-grade products.",
                image: "/images/studio/premium-makeup-studio-interior-kerala.webp",
                price: "From ₹4,500"
              },
              {
                title: "Bespoke Nail Art",
                description: "Custom nail designs and extensions using premium gel systems for lasting beauty and nail health.",
                image: "/images/gallery/gel-nail-extensions-pala-kottayam.webp",
                price: "From ₹2,000"
              }
            ].map((service, index) => (
              <FadeUp key={service.title} delay={index * 0.1}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-t-3xl overflow-hidden mb-6 bg-[#F9C8C8]">
                    <Image
                      src={service.image}
                      alt={`${service.title} at Nixtudio - Best woman salon in Pala Kottayam`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 
                    className="text-2xl font-light italic text-[#3D1520] mb-3"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-[#3D1520]/70 mb-4 leading-relaxed"
                    style={{ fontFamily: "var(--font-body), Georgia, serif" }}
                  >
                    {service.description}
                  </p>
                  <p 
                    className="text-[#B76E79] font-medium"
                    style={{ fontFamily: "var(--font-sans), sans-serif", letterSpacing: "0.05em" }}
                  >
                    {service.price}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6" style={{ background: "#FDE8E8" }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 
              className="text-4xl md:text-5xl font-light italic text-[#3D1520] mb-8"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              The Nixtudio
              <br />
              <span className="text-[#B76E79]">Difference</span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p 
              className="text-lg md:text-xl text-[#3D1520]/80 leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Located in the heart of Pala, our salon combines cutting-edge beauty technology 
              with timeless elegance. Every treatment is personalized to enhance your natural 
              beauty while providing a moment of pure indulgence in your busy life.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Satisfied Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Premium Products" }
            ].map((stat, index) => (
              <FadeUp key={stat.label} delay={0.2 + index * 0.1}>
                <div>
                  <div 
                    className="text-4xl md:text-5xl font-light italic text-[#B76E79] mb-2"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {stat.number}
                  </div>
                  <p 
                    className="text-sm tracking-widest uppercase text-[#3D1520]/60"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 
              className="text-4xl md:text-5xl font-light italic text-[#3D1520] mb-8"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Ready to Experience
              <br />
              <span className="text-[#B76E79]">Premium Beauty?</span>
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p 
              className="text-lg text-[#3D1520]/80 mb-12"
              style={{ fontFamily: "var(--font-body), Georgia, serif" }}
            >
              Book your personalized consultation and discover why we're Pala's most trusted 
              destination for premium beauty services.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-12 py-5 bg-[#3D1520] text-white rounded-full hover:bg-[#4A3B39] transition-colors text-lg"
              style={{ fontFamily: "var(--font-sans), sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Book Your Appointment
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
