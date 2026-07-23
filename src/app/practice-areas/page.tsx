import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { PracticeAreaCard } from '@/components/practice-area-card';
import { practiceAreas } from '@/lib/practice-areas';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Explore nine areas of legal focus — from criminal and family law to corporate, immigration, and intellectual property law.',
  alternates: { canonical: '/practice-areas' },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Practice Areas"
        title="Areas of Legal Focus"
        description="A broad foundation across nine areas of law. Select an area to learn more about common issues, how legal assistance typically works, and frequently asked questions."
        crumbs={[{ label: 'Practice Areas', href: '/practice-areas' }]}
      />

      <section className="bg-background py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, idx) => (
              <PracticeAreaCard key={area.slug} area={area} index={idx} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
