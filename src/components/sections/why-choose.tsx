import { BookOpenCheck, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/container';

const principles = [
  { icon: ShieldCheck, title: 'Integrity', description: 'Honesty, consistency, and ethical decision-making in every pursuit.' },
  { icon: BookOpenCheck, title: 'Intellectual rigor', description: 'Evidence-led thinking, curiosity, and a commitment to continuous learning.' },
  { icon: HeartHandshake, title: 'Service', description: 'Using legal knowledge and careful communication to contribute positively.' },
];

const coreValues = ['Clear communication', 'Evidence-led thinking', 'Respect for precedent', 'Client-centered empathy', 'Independence of thought', 'Commitment to justice'];

export function WhyChoose() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-20">
      <Container>
        <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald">Values</p>
        <h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.02em] text-foreground sm:text-4xl">Principles that guide the work</h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="grid gap-3 sm:grid-cols-3">
            {principles.map((value) => (
              <article key={value.title} className="scroll-reveal-card rounded-xl border border-border bg-surface/60 p-5">
                <value.icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg text-foreground">{value.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{value.description}</p>
              </article>
            ))}
          </div>

          <div className="lg:pl-4">
            <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-emerald">Core values</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {coreValues.map((value) => <span key={value} className="rounded-full border border-border bg-surface/50 px-3.5 py-2 text-xs text-muted-foreground">{value}</span>)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
