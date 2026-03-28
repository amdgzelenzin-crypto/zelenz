import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | NIXTUDIO Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <article className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Post Header */}
        <header className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-sans text-[10px] tracking-widest text-[#B76E79] bg-[#FFF5F7] px-4 py-1 rounded-full uppercase">
              {post.category}
            </span>
            <span className="font-sans text-[10px] tracking-widest text-espresso/40 uppercase">
              {post.date}
            </span>
          </div>
          <h1 className="font-serif font-light text-4xl lg:text-6xl text-espresso mb-10 leading-snug lg:leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-rose-gold/20 flex items-center justify-center text-[10px] font-sans text-espresso/80">
              NL
            </div>
            <p className="font-sans text-[11px] tracking-wider text-espresso/60 uppercase">
              Written by <span className="text-espresso">{post.author}</span>
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto rounded-[40px] overflow-hidden mb-20 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-espresso prose-lg transition-all duration-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Box */}
          <div className="mt-20 p-10 lg:p-16 bg-[#FFF5F7] rounded-[40px] border border-[#B76E79]/10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-serif text-3xl text-espresso mb-6 italic">
                Ready for your <em>Big Day?</em>
              </h3>
              <p className="font-body text-espresso/60 text-lg mb-10 max-w-xl mx-auto">
                Secure your date for a premium bridal consultation at our Pala studio. Limited monthly slots available for 2025 weddings.
              </p>
              <Link 
                href="/bridal"
                className="inline-block bg-[#B76E79] text-white font-sans text-[11px] tracking-[0.25em] uppercase px-12 py-5 rounded-full hover:bg-espresso transition-all duration-500 hover:scale-105"
              >
                Inquire & Book Now
              </Link>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-[#FFF5F7] mt-32 py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-espresso mb-12 text-center italic">More from <em>NIXTUDIO.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {relatedPosts.map((r) => (
              <Link 
                key={r.slug} 
                href={`/blog/${r.slug}`}
                className="flex items-center gap-6 group"
              >
                <div className="relative w-32 h-32 shrink-0 rounded-2xl overflow-hidden">
                  <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-[#B76E79] text-[9px] font-sans tracking-widest uppercase mb-2">{r.category}</p>
                  <h4 className="font-serif text-xl text-espresso line-clamp-2 leading-tight group-hover:text-[#B76E79] transition-colors">
                    {r.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
