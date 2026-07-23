import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/container';
import { ProfilePortrait } from '@/components/profile-portrait';
import { person } from '@/lib/site-config';

export function AboutPreview() {
  return (
    <section id="about" className="border-b border-border bg-background py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <ProfilePortrait imageClassName="object-[center_16%]" className="aspect-[16/11] w-full max-w-none rounded-xl border border-border bg-surface shadow-[0_24px_70px_-35px_rgba(0,0,0,0.45)]" />

        <div className="max-w-xl">
          <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald">About</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-normal leading-[1.05] tracking-[-0.025em] text-foreground sm:text-4xl">
            A thoughtful approach to a demanding profession
          </h2>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            {person.name} is developing a legal career shaped by disciplined research, respect for precedent, and the belief that complex ideas should be communicated with clarity.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Her current work centers on learning, writing, and building accessible educational resources for people navigating legal questions in Pakistan.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition hover:text-[#6de0d3]">
            Learn more about the journey <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
