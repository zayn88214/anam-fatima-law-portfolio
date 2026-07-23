import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Clock, CalendarDays } from 'lucide-react';
import { Container } from '@/components/container';
import { PageHeader } from '@/components/page-header';
import { ReadingProgressBar } from '@/components/layout/reading-progress-bar';
import { Badge } from '@/components/ui/badge';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { site } from '@/lib/site-config';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.meta.title,
      description: post.meta.excerpt,
      publishedTime: post.meta.date,
    },
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-9 font-display text-2xl font-medium text-foreground" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props} />,
  em: (props: React.HTMLAttributes<HTMLElement>) => <em className="text-foreground" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.meta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.meta.title,
    description: post.meta.excerpt,
    datePublished: post.meta.date,
    author: { '@type': 'Person', name: post.meta.author },
    url: `${site.url}/blog/${slug}`,
  };

  return (
    <>
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow={post.meta.category}
        title={post.meta.title}
        crumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.meta.title, href: `/blog/${slug}` },
        ]}
      />

      <article className="bg-background py-12 sm:py-16">
        <Container className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{post.meta.category}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.meta.readingTime}
            </span>
          </div>

          <div className="prose-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <p className="mt-10 rounded-lg border border-border bg-surface/90 p-5 text-xs leading-relaxed text-muted-foreground">
            This article is for general educational purposes only and does not constitute legal advice.
            Written by {post.meta.author} as part of ongoing legal studies.
          </p>
        </Container>
      </article>
    </>
  );
}
