'use client';

import { useState } from 'react';
import { Container } from '@/components/container';
import { BlogCard } from '@/components/blog-card';
import type { BlogPostMeta, BlogCategory } from '@/lib/blog-types';
import { blogCategories } from '@/lib/blog-types';

export function BlogIndexClient({ posts }: { posts: BlogPostMeta[] }) {
  const [active, setActive] = useState<'All' | BlogCategory>('All');
  const filtered = active === 'All' ? posts : posts.filter((post) => post.category === active);

  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {(['All', ...blogCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`min-h-10 shrink-0 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${
                active === cat
                  ? 'border-emerald bg-emerald text-white'
                  : 'border-border bg-surface text-muted-foreground hover:border-emerald hover:text-emerald-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, idx) => (
              <BlogCard key={post.slug} post={post} index={idx} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-muted-foreground">No articles in this category yet.</p>
        )}
      </Container>
    </section>
  );
}
