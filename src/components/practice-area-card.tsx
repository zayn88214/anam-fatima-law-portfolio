import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { PracticeArea } from '@/lib/practice-areas';
import { practiceAreaIcons } from '@/lib/practice-areas';

export function PracticeAreaCard({ area, index }: { area: PracticeArea; index: number }) {
  const Icon = practiceAreaIcons[area.icon];

  return (
    <article className="scroll-reveal-card h-full">
      <Link href={`/practice-areas/${area.slug}`} className="group relative block h-full overflow-hidden rounded-xl border border-border bg-surface/95 p-5 shadow-[0_18px_52px_-42px_rgba(0,0,0,0.92)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-emerald/45 hover:shadow-[0_25px_60px_-40px_rgba(76,201,187,0.28)]">
        <span className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-gradient-to-b from-emerald to-gold transition-transform duration-300 group-hover:scale-y-100" />
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald/14 bg-emerald-light text-emerald-dark transition-colors duration-300 group-hover:bg-emerald group-hover:text-[#06131f]">
            <Icon className="h-4.5 w-4.5" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs text-muted-foreground/50">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-5 font-display text-lg font-medium tracking-[-0.01em] text-foreground">{area.title}</h3>
        <p className="mt-2 min-h-14 text-xs leading-5 text-muted-foreground sm:text-sm">{area.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-dark dark:text-emerald">
          Explore area
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
        <span className="pointer-events-none absolute -bottom-12 -right-10 h-28 w-28 rounded-full bg-emerald/8 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </article>
  );
}
