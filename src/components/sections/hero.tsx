import Link from 'next/link';
import { ArrowRight, BookOpenText, Feather, HeartHandshake, SearchCheck } from 'lucide-react';
import { Container } from '@/components/container';
import { ProfilePortrait } from '@/components/profile-portrait';

const strengths = [
  { icon: SearchCheck, label: 'Research-led thinking' },
  { icon: Feather, label: 'Clear communication' },
  { icon: HeartHandshake, label: 'Service-oriented approach' },
];

export function Hero() {
  return (
    <section className="home-hero relative overflow-hidden border-b border-border" aria-labelledby="home-heading">
      <div className="home-hero-rings" aria-hidden="true" />
      <Container className="relative grid min-h-[40rem] items-stretch lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hero-copy flex flex-col justify-center py-16 lg:py-20 lg:pr-14">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-emerald">
            Legal research&nbsp; • &nbsp;Writing&nbsp; • &nbsp;Public service
          </p>
          <h1 id="home-heading" className="mt-5 max-w-2xl text-balance font-display text-[2.8rem] font-normal leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.2rem]">
            Building a legal career grounded in <em className="font-normal text-gold">clarity</em>,{' '}
            <em className="font-normal text-emerald">service</em> and{' '}
            <em className="font-normal text-gold">principle</em>.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Exploring complex legal questions through disciplined study, thoughtful communication, and a commitment to meaningful public impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-emerald px-6 py-3 text-sm font-semibold text-[#06131f] transition hover:bg-[#65e0d2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald">
              Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/blog" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-gold/55 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
              Read my insights <BookOpenText className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {strengths.map((item) => (
              <div key={item.label} className="flex items-center gap-3 border-border sm:border-r sm:pr-4 last:border-r-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold/30 text-gold">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-xs leading-5 text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-portrait relative flex items-end lg:border-l lg:border-border lg:pl-8">
          <div className="relative mx-auto w-full max-w-[29rem] py-10 lg:py-14">
            <ProfilePortrait preload className="aspect-[4/5] w-full rounded-[1.6rem] border border-border bg-surface shadow-[0_30px_90px_-38px_rgba(0,0,0,0.55)]" />
            <div className="absolute bottom-16 right-[-0.5rem] w-[min(18rem,82%)] rounded-xl border border-border bg-surface/96 p-5 shadow-2xl sm:right-[-1.25rem]">
              <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-emerald">Current focus</p>
              <p className="mt-2 font-display text-xl leading-tight text-foreground">Legal research and professional development</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full border border-emerald" />Law student &amp; researcher</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
