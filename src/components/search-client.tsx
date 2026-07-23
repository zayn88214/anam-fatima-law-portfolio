'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search as SearchIcon, FileText, HelpCircle } from 'lucide-react';
import { Container } from '@/components/container';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import type { BlogPostMeta } from '@/lib/blog-types';
import type { FAQItem } from '@/lib/faqs';
import type { PracticeArea } from '@/lib/practice-areas';
import { practiceAreaIcons } from '@/lib/practice-areas';

export function SearchClient({
  posts,
  items,
  areas,
}: {
  posts: BlogPostMeta[];
  items: FAQItem[];
  areas: PracticeArea[];
}) {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const matchedPosts = useMemo(
    () => (q ? posts.filter((p) => `${p.title} ${p.excerpt}`.toLowerCase().includes(q)) : []),
    [q, posts]
  );
  const matchedFaqs = useMemo(
    () => (q ? items.filter((f) => `${f.question} ${f.answer}`.toLowerCase().includes(q)) : []),
    [q, items]
  );
  const matchedAreas = useMemo(
    () => (q ? areas.filter((a) => `${a.title} ${a.shortDescription}`.toLowerCase().includes(q)) : []),
    [q, areas]
  );

  const hasResults = matchedPosts.length + matchedFaqs.length + matchedAreas.length > 0;

  return (
    <Container className="mx-auto max-w-3xl py-12 sm:py-16">
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles, practice areas, and FAQs..."
          className="h-12 bg-surface/90 pl-11 text-sm shadow-[0_18px_50px_-38px_rgba(0,0,0,0.9)]"
          aria-label="Search the site"
        />
      </div>

      {q && !hasResults && (
        <p className="mt-8 text-center text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;.</p>
      )}

      {matchedAreas.length > 0 && (
        <div className="mt-8">
          <h2 className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-emerald">
            Practice Areas
          </h2>
          <div className="mt-3 space-y-2">
            {matchedAreas.map((area) => {
              const Icon = practiceAreaIcons[area.icon];
              return (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`}>
                  <Card className="flex items-center gap-3 p-4 transition-colors hover:border-emerald/40">
                    <Icon className="h-4.5 w-4.5 shrink-0 text-emerald" aria-hidden="true" />
                    <span className="font-display text-sm font-semibold text-foreground">{area.title}</span>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {matchedPosts.length > 0 && (
        <div className="mt-8">
          <h2 className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-emerald">Articles</h2>
          <div className="mt-3 space-y-2">
            {matchedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="flex items-center gap-3 p-4 transition-colors hover:border-emerald/40">
                  <FileText className="h-4.5 w-4.5 shrink-0 text-emerald" aria-hidden="true" />
                  <span className="font-display text-sm font-semibold text-foreground">{post.title}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {matchedFaqs.length > 0 && (
        <div className="mt-8">
          <h2 className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-emerald">FAQs</h2>
          <div className="mt-3 space-y-2">
            {matchedFaqs.map((faq) => (
              <Card key={faq.question} className="flex items-start gap-3 p-4">
                <HelpCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{faq.question}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
