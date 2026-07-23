import { BookOpenCheck, GraduationCap, Landmark, PenLine } from 'lucide-react';
import { Container } from '@/components/container';

const focusPoints = [
  { icon: GraduationCap, eyebrow: 'Education', title: 'Law studies', text: 'Building a strong foundation in law' },
  { icon: BookOpenCheck, eyebrow: 'Interests', title: 'Rights & policy', text: 'Exploring law and its public impact' },
  { icon: PenLine, eyebrow: 'Work', title: 'Research & writing', text: 'Analyzing and communicating with clarity' },
  { icon: Landmark, eyebrow: 'Purpose', title: 'Public service', text: 'Working toward positive social impact' },
];

export function StatsSection() {
  return (
    <section className="border-b border-border bg-surface" aria-label="Professional focus">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {focusPoints.map((item) => (
            <article key={item.eyebrow} className="flex gap-4 border-b border-border py-6 sm:px-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <item.icon className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-gold">{item.eyebrow}</p>
                <h2 className="mt-1 font-display text-base text-foreground">{item.title}</h2>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
