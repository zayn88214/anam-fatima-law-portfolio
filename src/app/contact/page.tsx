import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  CalendarClock,
  Compass,
  GraduationCap,
  HelpCircle,
  MapPin,
  ShieldCheck,
  Languages,
  BookMarked,
  MessageSquareText,
} from 'lucide-react';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { contact, person } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact & Availability',
  description: 'Location, professional status, and portfolio resources for Anam Fatima in Multan, Punjab, Pakistan.',
  alternates: { canonical: '/contact' },
};

const nextSteps = [
  {
    href: '/legal-guides',
    icon: BookOpen,
    label: 'Legal Guides',
    description: 'Download practical, educational resources based on official sources.',
  },
  {
    href: '/faq',
    icon: HelpCircle,
    label: 'Frequently Asked Questions',
    description: 'Read clear answers about this portfolio and its current purpose.',
  },
  {
    href: '/booking',
    icon: CalendarClock,
    label: 'Consultation Availability',
    description: 'See the current status of future professional consultations.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow='Contact'
        title='Location & Current Availability'
        description='Factual information about where Anam is based, her current professional status, and the educational resources available on this portfolio.'
        crumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <section className='relative overflow-hidden border-b border-border bg-background py-14 sm:py-18'>
        <div
          className='pointer-events-none absolute left-[12%] top-44 h-60 w-60 rounded-full bg-emerald/10 blur-3xl'
          aria-hidden='true'
        />
        <Container className='relative mx-auto max-w-5xl'>
          <div className='grid overflow-hidden rounded-xl border border-border bg-surface/95 shadow-[0_24px_70px_-48px_rgba(76,201,187,0.5)] lg:grid-cols-[0.72fr_1.28fr]'>
            <div className='relative flex min-h-56 items-center justify-center overflow-hidden border-b border-border bg-emerald-light/55 p-8 lg:min-h-80 lg:border-b-0 lg:border-r'>
              <div className='absolute h-48 w-48 rounded-full border border-gold/20' aria-hidden='true' />
              <div className='absolute h-30 w-30 rounded-full border border-emerald/25' aria-hidden='true' />
              <span className='relative flex h-18 w-18 items-center justify-center rounded-2xl border border-gold/35 bg-background/95 text-gold shadow-xl'>
                <Compass className='h-8 w-8' aria-hidden='true' />
              </span>
            </div>

            <div className='p-7 sm:p-9 lg:p-11'>
              <p className='font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald'>
                Based in {contact.region}
              </p>
              <div className='mt-5 flex items-start gap-4'>
                <span className='mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald/25 bg-emerald-light text-emerald'>
                  <MapPin className='h-4.5 w-4.5' aria-hidden='true' />
                </span>
                <div>
                  <p className='text-xs uppercase tracking-[0.14em] text-muted-foreground'>Location</p>
                  <h2 className='mt-2 font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl'>
                    {contact.address}
                  </h2>
                </div>
              </div>

              <div className='mt-8 grid gap-3 border-t border-border pt-7 sm:grid-cols-2'>
                <div className='rounded-xl border border-border bg-background/60 p-4'>
                  <GraduationCap className='h-4.5 w-4.5 text-gold' aria-hidden='true' />
                  <p className='mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground'>Professional status</p>
                  <p className='mt-1.5 font-display text-base font-semibold text-foreground'>Law student &amp; {person.title}</p>
                </div>
                <div className='rounded-xl border border-border bg-background/60 p-4'>
                  <ShieldCheck className='h-4.5 w-4.5 text-emerald' aria-hidden='true' />
                  <p className='mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground'>Current availability</p>
                  <p className='mt-1.5 font-display text-base font-semibold text-foreground'>{contact.availability}</p>
                </div>
              </div>

              <p className='mt-5 text-sm leading-6 text-muted-foreground'>
                Anam is currently completing her legal education. This portfolio shares educational information
                and developing professional interests; it does not offer legal representation or legal advice.
              </p>
            </div>
          </div>

          <div className='mt-10 grid gap-4 sm:grid-cols-3'>
            <div className='rounded-xl border border-border bg-surface/90 p-5'>
              <BookMarked className='h-4.5 w-4.5 text-gold' aria-hidden='true' />
              <p className='mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground'>Current focus</p>
              <p className='mt-2 text-sm leading-5 text-foreground'>{contact.focus}</p>
            </div>
            <div className='rounded-xl border border-border bg-surface/90 p-5'>
              <Languages className='h-4.5 w-4.5 text-emerald' aria-hidden='true' />
              <p className='mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground'>Languages</p>
              <p className='mt-2 text-sm leading-5 text-foreground'>{contact.languages}</p>
            </div>
            <div className='rounded-xl border border-border bg-surface/90 p-5'>
              <MessageSquareText className='h-4.5 w-4.5 text-gold' aria-hidden='true' />
              <p className='mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground'>Enquiries</p>
              <p className='mt-2 text-sm leading-5 text-foreground'>{contact.response}</p>
            </div>
          </div>
          <div className='mt-10 flex items-end justify-between gap-6'>
            <div>
              <p className='font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald'>
                Useful next steps
              </p>
              <h2 id='contact-status-heading' className='mt-2 font-display text-2xl font-semibold text-foreground'>
                Continue exploring the portfolio
              </h2>
            </div>
          </div>

          <nav aria-labelledby='contact-status-heading' className='mt-6 grid gap-4 md:grid-cols-3'>
            {nextSteps.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='group flex min-h-44 flex-col rounded-xl border border-border bg-surface/90 p-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-emerald/45 hover:bg-emerald-light/35'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/70 text-gold'>
                  <item.icon className='h-4.5 w-4.5' aria-hidden='true' />
                </span>
                <span className='mt-5 flex items-start justify-between gap-3'>
                  <span className='font-display text-base font-semibold text-foreground'>{item.label}</span>
                  <ArrowUpRight className='h-4 w-4 shrink-0 text-emerald transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' aria-hidden='true' />
                </span>
                <span className='mt-2 text-xs leading-5 text-muted-foreground'>{item.description}</span>
              </Link>
            ))}
          </nav>
        </Container>
      </section>
    </>
  );
}



