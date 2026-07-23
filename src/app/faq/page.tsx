import type { Metadata } from 'next';
import { BookOpenCheck, HelpCircle, MapPin, Scale } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Container } from '@/components/container';
import { FAQList } from '@/components/faq-list';
import { faqs } from '@/lib/faqs';
import { person } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Anam Fatima’s portfolio, legal education, and future availability.',
  alternates: { canonical: '/faq' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FAQPage() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pointer-events-none absolute -left-36 top-32 h-96 w-96 rounded-full border border-emerald/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(36,127,120,0.13),transparent_68%)]" aria-hidden="true" />

      <section className="relative py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Frequently asked questions</p>
              <h1 className="mt-4 max-w-lg text-balance font-display text-4xl font-semibold leading-[1.06] tracking-[-0.025em] text-foreground sm:text-5xl">Clear answers, thoughtfully explained</h1>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                Learn more about {person.name}&apos;s legal education, the purpose of this portfolio, its educational resources, and future availability.
              </p>

              <div className="relative mx-auto mt-9 aspect-square w-full max-w-[20rem]" aria-hidden="true">
                <div className="absolute inset-4 rounded-full border border-emerald/20" />
                <div className="absolute inset-12 rounded-full border border-gold/20" />
                <div className="absolute inset-[30%] rounded-full bg-emerald/10 blur-2xl" />
                <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-border bg-surface text-gold shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)]"><Scale className="h-11 w-11" /></span>
                <span className="absolute left-[8%] top-[25%] flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald/25 bg-background text-emerald shadow-lg"><HelpCircle className="h-5 w-5" /></span>
                <span className="absolute bottom-[12%] left-[21%] flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/25 bg-background text-gold shadow-lg"><BookOpenCheck className="h-5 w-5" /></span>
                <span className="absolute right-[7%] top-[31%] flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald/25 bg-background text-emerald shadow-lg"><MapPin className="h-5 w-5" /></span>
              </div>
              <div className="mt-2 rounded-xl border border-border bg-surface/55 p-4">
                <p className="font-display text-sm font-semibold text-foreground">Important note</p>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">The material on this site is for general educational purposes and does not constitute legal advice.</p>
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-border pb-4">
                <div><p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold">Answers</p><h2 className="mt-1 font-display text-2xl font-semibold text-foreground">Common questions</h2></div>
                <span className="rounded-full border border-emerald/20 bg-emerald/10 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-emerald">{faqs.length} topics</span>
              </div>
              <FAQList items={faqs} idPrefix="faq-page" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
