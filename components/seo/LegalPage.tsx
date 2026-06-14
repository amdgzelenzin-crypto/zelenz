import type { ReactNode } from 'react';
import Link from 'next/link';

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="min-h-screen pt-28 pb-20" style={{ background: '#FFF9F5' }}>
      <article className="mx-auto max-w-3xl px-6">
        <p
          className="mb-4 text-xs uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-sans), sans-serif', color: '#B76E79' }}
        >
          NIXTUDIO · Legal
        </p>
        <h1
          className="mb-3 text-4xl font-light italic"
          style={{ fontFamily: 'var(--font-display), Georgia, serif', color: '#3D1520' }}
        >
          {title}
        </h1>
        <p
          className="mb-10 text-sm"
          style={{ fontFamily: 'var(--font-sans), sans-serif', color: '#4E4247' }}
        >
          Last updated: <time dateTime={lastUpdated}>{lastUpdated}</time>
        </p>
        <div
          className="space-y-5 text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-body), Georgia, serif', color: '#4E4247' }}
        >
          {children}
        </div>
        <p className="mt-12 text-sm" style={{ fontFamily: 'var(--font-sans), sans-serif', color: '#4E4247' }}>
          Questions?{' '}
          <Link href="/contact" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
            Contact NIXTUDIO
          </Link>
          {' · '}
          <Link href="/" className="underline decoration-[#B76E79]/50 hover:decoration-[#B76E79]">
            Back to homepage
          </Link>
        </p>
      </article>
    </main>
  );
}
