import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle2, ListChecks } from 'lucide-react';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { FAQList } from '@/components/faq-list';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { practiceAreas, getPracticeAreaBySlug, practiceAreaIcons } from '@/lib/practice-areas';

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.overview.slice(0, 155),
    alternates: { canonical: `/practice-areas/${area.slug}` },
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);
  if (!area) notFound();

  const Icon = practiceAreaIcons[area.icon];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Practice Area"
        title={area.title}
        description={area.shortDescription}
        crumbs={[
          { label: 'Practice Areas', href: '/practice-areas' },
          { label: area.title, href: `/practice-areas/${area.slug}` },
        ]}
      />

      <section className="bg-background py-12 sm:py-16">
        <Container className="grid gap-9 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-emerald/15 bg-emerald-light text-emerald-dark">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-medium text-foreground sm:text-3xl">Overview</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{area.overview}</p>

            <h2 className="mt-9 font-display text-2xl font-medium text-foreground sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6">
              <FAQList items={area.faqs} idPrefix={area.slug} />
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-5">
              <div className="flex items-center gap-2.5">
                <ListChecks className="h-5 w-5 text-emerald" aria-hidden="true" />
                <h3 className="font-display text-base font-medium text-foreground">Common Legal Issues</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {area.commonIssues.map((issue) => (
                  <li key={issue} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
                    {issue}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-5">
              <h3 className="font-display text-base font-medium text-foreground">How Legal Assistance Works</h3>
              <ol className="mt-4 space-y-3">
                {area.howItWorks.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-light font-mono text-xs font-bold text-emerald-dark">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="border-gold/25 bg-gradient-to-br from-emerald-light/80 to-gold-light/45 p-5 text-center">
              <h3 className="font-display text-base font-medium text-foreground">
                Have a Question About {area.title}?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Share your situation through a free case evaluation.
              </p>
              <Button asChild className="mt-4 w-full">
                <Link href="/case-evaluation">Free Case Evaluation</Link>
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
