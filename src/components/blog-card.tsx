import Link from 'next/link';
import { ArrowUpRight, Clock, FileText } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog-types';
import { Badge } from '@/components/ui/badge';

export function BlogCard({ post }: { post: BlogPostMeta; index?: number }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="scroll-reveal-card h-full">
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/95 shadow-[0_18px_52px_-42px_rgba(0,0,0,0.92)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-emerald/40 group-hover:shadow-[0_24px_55px_-40px_rgba(76,201,187,0.25)]">
          <div className="home-article-visual relative flex h-28 items-end overflow-hidden border-b border-border p-4">
            <FileText className="absolute right-4 top-4 h-10 w-10 text-gold/35" aria-hidden="true" />
            <Badge className="relative rounded-md border-white/10 bg-[#071722]/75 text-emerald">{post.category}</Badge>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-display text-lg font-medium leading-snug text-foreground">{post.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3.5 text-[0.68rem] text-muted-foreground">
              <span>{formattedDate}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>
            <span className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-dark dark:text-emerald">
              Read article
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
