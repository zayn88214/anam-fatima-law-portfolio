import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { site } from '@/lib/site-config';

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', item: site.url }, ...items.map((c) => ({ name: c.label, item: `${site.url}${c.href}` }))].map(
      (entry, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: entry.name,
        item: entry.item,
      })
    ),
  };

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[0.68rem] text-muted-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/" className="flex items-center gap-1 transition-colors hover:text-emerald">
        <Home className="h-3.5 w-3.5" aria-hidden="true" />
        Home
      </Link>
      {items.map((crumb, idx) => (
        <span key={crumb.href} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          {idx === items.length - 1 ? (
            <span aria-current="page" className="font-medium text-foreground">
              {crumb.label}
            </span>
          ) : (
            <Link href={crumb.href} className="transition-colors hover:text-emerald">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
