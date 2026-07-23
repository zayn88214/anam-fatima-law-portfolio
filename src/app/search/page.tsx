import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { SearchClient } from '@/components/search-client';
import { getAllPosts } from '@/lib/blog';
import { faqs } from '@/lib/faqs';
import { practiceAreas } from '@/lib/practice-areas';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search articles, practice areas, and frequently asked questions.',
  alternates: { canonical: '/search' },
};

export default function SearchPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader eyebrow="Search" title="Search the Site" crumbs={[{ label: 'Search', href: '/search' }]} />
      <SearchClient posts={posts} items={faqs} areas={practiceAreas} />
    </>
  );
}
