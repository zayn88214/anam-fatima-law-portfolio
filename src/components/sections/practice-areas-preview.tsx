import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import { practiceAreas, practiceAreaIcons } from '@/lib/practice-areas';

export function PracticeAreasPreview() {
  return (
    <section id="legal-interests" className="border-b border-border bg-surface/45 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald">Areas of interest</p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl">Legal questions worth exploring carefully</h2>
          </div>
          <Link href="/practice-areas" className="inline-flex min-h-10 items-center justify-center rounded-lg border border-emerald/40 px-4 py-2 text-xs font-semibold text-emerald transition hover:bg-emerald/10">View all areas</Link>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.slice(0, 6).map((area) => {
            const Icon = practiceAreaIcons[area.icon];
            return (
              <article key={area.slug} className="scroll-reveal-card">
                <Link href={`/practice-areas/${area.slug}`} className="group flex h-full gap-4 rounded-xl border border-border bg-surface/65 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald/45 hover:bg-surface">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="min-w-0">
                    <span className="block font-display text-base text-foreground">{area.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">{area.shortDescription}</span>
                    <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-emerald">Explore topic <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
