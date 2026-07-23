import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, Eye, GraduationCap, Heart, MapPin, Target } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Container } from '@/components/container';
import { ProfilePortrait } from '@/components/profile-portrait';
import { person } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Anam Fatima, her legal education, values, and future practice goals.',
  alternates: { canonical: '/about' },
};

const education = [
  { year: 'In progress', title: 'Bachelor of Laws (LLB)', description: 'Building a broad foundation across core areas of civil, criminal, and corporate law.' },
  { year: 'Next step', title: 'Bar licensing and practical training', description: 'Planned professional training toward formal admission to legal practice.' },
  { year: 'Long-term goal', title: 'Independent legal practice', description: 'A future practice shaped by research, integrity, and clear communication.' },
];

const values = [
  { icon: Target, title: 'Mission', description: 'Make legal information clearer, more useful, and easier to understand.' },
  { icon: Eye, title: 'Vision', description: 'Build a future practice known for approachability and ethical rigor.' },
  { icon: Heart, title: 'Values', description: 'Lead with integrity, empathy, discipline, and genuine care for people.' },
  { icon: Compass, title: 'Philosophy', description: 'Listen carefully, research thoroughly, and communicate with clarity.' },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-background text-foreground">
      <section className="relative border-b border-border py-10 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute -left-36 top-8 h-80 w-80 rounded-full border border-emerald/15" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-[radial-gradient(circle,rgba(195,154,85,0.12),transparent_68%)]" aria-hidden="true" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[20rem] lg:mx-0">
              <div className="absolute -inset-3 rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-emerald/15 to-transparent" aria-hidden="true" />
              <ProfilePortrait className="relative w-full rounded-[2rem] shadow-[0_28px_70px_-35px_rgba(0,0,0,0.8)]" />
              <div className="absolute -bottom-4 -right-3 rounded-xl border border-border bg-surface/96 px-4 py-3 shadow-xl">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-emerald">Based in</p>
                <p className="mt-1 flex items-center gap-1.5 font-display text-sm font-semibold text-foreground"><MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />{person.location}</p>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald">About {person.name}</p>
              <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.06] tracking-[-0.025em] text-foreground sm:text-5xl">A thoughtful approach to a demanding profession</h1>
              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>{person.name} is a law student based in {person.location}, working toward a career in legal practice. Her studies span criminal, family, corporate, and other areas of law, with a particular interest in making legal information clearer and more accessible.</p>
                <p>This portfolio shares researched legal insights, free educational guides, and that professional journey. It reflects an ongoing commitment to careful study, ethical standards, and respect for the people behind every legal question.</p>
                <p>Consultations are not yet available, but visitors are welcome to explore the educational resources and legal topics published here.</p>
              </div>
              <Link href="/legal-guides" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-emerald px-5 py-3 text-sm font-semibold text-[#06131f] transition-colors hover:bg-emerald-dark">Explore legal guides<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-surface/45 py-12 sm:py-14">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald">Guiding principles</p><h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">The values behind the work</h2></div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">Four principles shaping Anam&apos;s education and future professional direction.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="scroll-reveal-card rounded-xl border border-border bg-background/70 p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-gold/35">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold"><value.icon className="h-5 w-5" aria-hidden="true" /></span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald/15 text-emerald"><GraduationCap className="h-5 w-5" aria-hidden="true" /></span>
            <div><p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-emerald">Education</p><h2 className="mt-0.5 font-display text-2xl font-semibold text-foreground sm:text-3xl">A career in progress</h2></div>
          </div>
          <ol className="relative mt-8 grid gap-4 lg:grid-cols-3 lg:gap-5">
            {education.map((entry, index) => (
              <li key={entry.title} className="scroll-reveal-card relative rounded-xl border border-border bg-surface/55 p-5">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald/35 bg-background font-mono text-xs font-semibold text-emerald">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">{entry.year}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{entry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{entry.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  );
}
