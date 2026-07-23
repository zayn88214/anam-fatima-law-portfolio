import { Container } from '@/components/container';
import { Breadcrumbs, type Crumb } from '@/components/breadcrumbs';

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="page-header-shell relative overflow-hidden border-b border-border py-10 sm:py-12">
      <span className="page-header-orbit" aria-hidden="true" />
      <span className="page-header-plane" aria-hidden="true" />
      <Container className="relative z-10">
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <span className="mt-5 block font-mono text-[0.68rem] uppercase tracking-[0.17em] text-emerald">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 max-w-3xl text-balance font-display text-3xl font-normal tracking-[-0.025em] text-foreground sm:text-4xl lg:text-[2.7rem]">{title}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p>
        )}
      </Container>
    </section>
  );
}
