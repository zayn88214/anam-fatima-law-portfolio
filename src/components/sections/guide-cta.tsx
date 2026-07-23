import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';

export function GuideCTA() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-gradient-to-br from-emerald-light to-gold-light p-10 text-center sm:p-14">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface text-emerald-dark shadow-sm">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="max-w-lg font-display text-2xl font-bold text-foreground sm:text-3xl">
            Free Legal Guides, Ready to Download
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Plain-language guides covering employment rights, property buying, business registration, and
            family law basics.
          </p>
          <Button asChild size="lg">
            <Link href="/legal-guides">Browse Free Guides</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
