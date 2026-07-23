import Link from 'next/link';
import { ArrowRight, BookOpenText, Landmark, ScrollText } from 'lucide-react';
import { Container } from '@/components/container';
import { getAllPosts } from '@/lib/blog';

const articleIcons = [Landmark, BookOpenText, ScrollText];

export function ArticlesPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="insights" className="border-b border-border bg-surface/45 py-16 sm:py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald">Recent insights</p>
            <h2 className="mt-3 font-display text-3xl font-normal tracking-[-0.02em] text-foreground sm:text-4xl">Latest legal insights</h2>
          </div>
          <Link href="/blog" className="hidden items-center gap-2 text-xs font-semibold text-emerald sm:inline-flex">View all articles <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link>
        </div>

        <div className="mt-8 grid gap-3 lg:grid-cols-3">
          {posts.map((post, index) => {
            const Icon = articleIcons[index % articleIcons.length];
            const date = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            return (
              <article key={post.slug} className="scroll-reveal-card overflow-hidden rounded-xl border border-border bg-surface/65">
                <Link href={`/blog/${post.slug}`} className="group grid h-full sm:grid-cols-[0.42fr_0.58fr] lg:grid-cols-1">
                  <div className="home-article-visual relative flex min-h-40 items-center justify-center overflow-hidden border-b border-border sm:border-b-0 sm:border-r lg:border-b lg:border-r-0">
                    <Icon className="relative h-12 w-12 text-gold/85" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col p-5">
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-emerald">{post.category} · {post.readingTime}</p>
                    <h3 className="mt-3 font-display text-xl leading-tight text-foreground transition group-hover:text-emerald">{post.title}</h3>
                    <p className="mt-3 flex-1 text-xs leading-5 text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-5 flex items-center justify-between text-[0.65rem] text-muted-foreground"><span>{date}</span><span className="inline-flex items-center gap-1.5 text-emerald">Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
