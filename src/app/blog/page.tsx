import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { BlogIndexClient } from '@/components/blog-index-client';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Legal insights, illustrative case studies, and news articles from Anam Fatima.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Legal Insights & Articles"
        description="Plain-language articles across three categories: Legal Insights, Case Studies, and News & Articles."
        crumbs={[{ label: 'Blog', href: '/blog' }]}
      />
      <BlogIndexClient posts={posts} />
    </>
  );
}
