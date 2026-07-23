import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { GuideCard } from '@/components/guide-card';
import { guides } from '@/lib/guides';

export const metadata: Metadata = {
  title: 'Free Legal Guides',
  description: 'Download free, plain-language legal guides covering employment rights, property, business, and family law basics.',
  alternates: { canonical: '/legal-guides' },
};

export default function LegalGuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Legal Guides"
        title="Practical Guides, Free to Download"
        description="Plain-language PDFs designed to help individuals and businesses understand the basics before they need professional legal help."
        crumbs={[{ label: 'Legal Guides', href: '/legal-guides' }]}
      />

      <section className="bg-background py-12 sm:py-16">
        <Container className="mx-auto max-w-5xl">
          <div className="mb-7 flex items-start gap-3 rounded-lg border border-emerald/15 bg-emerald-light/55 p-4 text-xs leading-5 text-muted-foreground sm:text-sm">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald" />
            Each guide contains practical checklists and links to official Pakistani sources checked in July 2026. They are educational resources, not a substitute for advice on a specific matter.
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {guides.map((guide, idx) => (
              <GuideCard key={guide.slug} guide={guide} index={idx} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
