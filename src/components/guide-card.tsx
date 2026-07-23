import { Download, ShieldCheck } from 'lucide-react';
import type { Guide } from '@/lib/guides';
import { guideIcons } from '@/lib/guides';
import { Button } from '@/components/ui/button';

export function GuideCard({ guide }: { guide: Guide; index?: number }) {
  const Icon = guideIcons[guide.icon];

  return (
    <article className="scroll-reveal-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/95 p-5 shadow-[0_18px_52px_-42px_rgba(0,0,0,0.92)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_24px_55px_-40px_rgba(210,160,78,0.22)]">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/15 bg-gold-light text-gold">
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <span className="rounded-lg border border-emerald/15 bg-emerald-light px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wide text-emerald-dark dark:text-emerald">
          {guide.pages} pages
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-medium text-foreground">{guide.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{guide.description}</p>
      <div className="mt-5 flex items-center gap-2 border-t border-border pt-3.5 text-[0.68rem] text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
        Official sources &middot; Updated {guide.updated}
      </div>
      <Button asChild variant="outline" size="sm" className="mt-4 w-full">
        <a href={guide.fileHref} download>
          <Download className="h-4 w-4" aria-hidden="true" />
          Download PDF
        </a>
      </Button>
    </article>
  );
}
