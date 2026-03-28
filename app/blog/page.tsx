import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Bridal Guides & Beauty Insights | NIXTUDIO Pala Kerala",
  description: "Expert bridal makeup tips, HD vs Airbrush guides, and the latest Kerala wedding trends from NIXTUDIO by Nikita Liby.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#FFF5F7]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <p className="font-sans text-[11px] tracking-[0.3em] text-[#B76E79] mb-4 uppercase">The Journal</p>
          <h1 className="font-serif font-light text-espresso text-5xl lg:text-7xl mb-8 italic">
            Bridal Guides & <em>Technical Artistry.</em>
          </h1>
          <p className="font-body text-espresso/60 text-lg leading-relaxed">
            A curated collection of professional insights for the modern Kerala bride. From technical prep to aesthetic trends in Pala and Kottayam.
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden border border-espresso/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#B76E79] text-white text-[10px] font-sans tracking-widest uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-[#B76E79] text-[10px] font-sans tracking-widest uppercase mb-4">{post.date}</p>
                <h2 className="font-serif text-2xl text-espresso mb-4 leading-snug group-hover:text-[#B76E79] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="font-body text-espresso/60 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-espresso text-[11px] font-sans tracking-widest uppercase gap-2 border-t border-espresso/5 pt-6 group-hover:gap-4 transition-all">
                  Read Article
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
