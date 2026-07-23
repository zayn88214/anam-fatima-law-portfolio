import type { Metadata } from 'next';
import { FileCheck2, Info } from 'lucide-react';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { CaseEvaluationForm } from '@/components/case-evaluation-form';

export const metadata: Metadata = {
  title: 'Case Questionnaire',
  description: 'An educational questionnaire for organizing the basic details of a legal situation.',
  alternates: { canonical: '/case-evaluation' },
};

export default function CaseEvaluationPage() {
  return (
    <>
      <PageHeader
        eyebrow='Case Questionnaire'
        title='Organize the Details of Your Situation'
        description='A private, on-page questionnaire that helps structure the basic facts of a legal concern.'
        crumbs={[{ label: 'Case Questionnaire', href: '/case-evaluation' }]}
      />

      <section className='relative overflow-hidden border-b border-border bg-background py-14 sm:py-18'>
        <div className='pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald/8 blur-3xl' aria-hidden='true' />
        <Container className='relative mx-auto max-w-5xl'>
          <div className='grid items-start gap-6 lg:grid-cols-[0.68fr_1.32fr]'>
            <aside className='rounded-2xl border border-border bg-surface/95 p-6 lg:sticky lg:top-28 sm:p-7'>
              <span className='flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold-light text-gold'>
                <FileCheck2 className='h-5 w-5' aria-hidden='true' />
              </span>
              <p className='mt-5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald'>
                Before you begin
              </p>
              <h2 className='mt-2 font-display text-xl font-semibold text-foreground'>Educational tool only</h2>
              <p className='mt-3 text-sm leading-6 text-muted-foreground'>
                Anam is not currently accepting clients. Completing this questionnaire does not create a
                lawyer-client relationship or provide legal advice.
              </p>
              <div className='mt-6 flex gap-3 rounded-xl border border-emerald/20 bg-emerald-light/45 p-4'>
                <Info className='mt-0.5 h-4 w-4 shrink-0 text-emerald' aria-hidden='true' />
                <p className='text-xs leading-5 text-muted-foreground'>
                  Your entries are validated in this browser for demonstration. They are not transmitted or stored.
                </p>
              </div>
            </aside>

            <div className='rounded-2xl border border-border bg-surface/95 p-6 shadow-[0_24px_70px_-52px_rgba(76,201,187,0.5)] sm:p-8'>
              <CaseEvaluationForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
