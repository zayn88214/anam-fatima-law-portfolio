import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CalendarClock, GraduationCap } from 'lucide-react';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ComingSoonIllustration } from '@/components/coming-soon-illustration';

export const metadata: Metadata = {
  title: 'Consultation Availability',
  description: 'Consultations are not currently available while Anam Fatima completes her legal education.',
  alternates: { canonical: '/booking' },
};

const milestones = [
  {
    icon: GraduationCap,
    title: 'Legal education in progress',
    detail: 'Building a strong foundation across core areas of law.',
  },
  {
    icon: BookOpen,
    title: 'Resources remain available',
    detail: 'Explore educational articles and practical legal guides in the meantime.',
  },
];

export default function BookingPage() {
  return (
    <>
      <PageHeader
        eyebrow='Availability'
        title='Consultations Coming in the Future'
        description='Professional legal consultations are not currently available while Anam completes her education and practical training.'
        crumbs={[{ label: 'Consultation Availability', href: '/booking' }]}
      />

      <section className='relative overflow-hidden border-b border-border bg-background py-14 sm:py-18'>
        <div className='pointer-events-none absolute right-[8%] top-8 h-72 w-72 rounded-full bg-gold/8 blur-3xl' aria-hidden='true' />
        <Container className='relative mx-auto max-w-5xl'>
          <div className='grid items-center gap-8 rounded-xl border border-border bg-surface/95 p-6 shadow-[0_24px_70px_-50px_rgba(76,201,187,0.55)] sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-11'>
            <div className='rounded-2xl border border-border bg-emerald-light/35 p-4'>
              <ComingSoonIllustration className='mx-auto h-auto w-full max-w-sm' />
            </div>

            <div>
              <span className='flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold-light text-gold'>
                <CalendarClock className='h-5 w-5' aria-hidden='true' />
              </span>
              <p className='mt-5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald'>
                Current status
              </p>
              <h2 className='mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl'>
                Not accepting consultations yet
              </h2>
              <p className='mt-4 max-w-xl text-sm leading-6 text-muted-foreground'>
                This portfolio shares Anam&apos;s developing areas of interest and educational work. It does not
                currently offer legal representation, case advice, or appointment booking.
              </p>

              <div className='mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
                {milestones.map((milestone) => (
                  <div key={milestone.title} className='rounded-xl border border-border bg-background/45 p-4'>
                    <milestone.icon className='h-4.5 w-4.5 text-gold' aria-hidden='true' />
                    <h3 className='mt-3 font-display text-sm font-semibold text-foreground'>{milestone.title}</h3>
                    <p className='mt-1.5 text-xs leading-5 text-muted-foreground'>{milestone.detail}</p>
                  </div>
                ))}
              </div>

              <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
                <Button asChild>
                  <Link href='/legal-guides'>Explore legal guides</Link>
                </Button>
                <Button asChild variant='outline'>
                  <Link href='/'>
                    <ArrowLeft className='h-4 w-4' aria-hidden='true' />
                    Return home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
