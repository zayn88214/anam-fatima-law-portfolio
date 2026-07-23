import type { MetadataRoute } from 'next';
import { site } from '@/lib/site-config';
import { practiceAreas } from '@/lib/practice-areas';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/practice-areas',
    '/blog',
    '/legal-guides',
    '/faq',
    '/contact',
    '/booking',
    '/case-evaluation',
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));

  const practiceAreaRoutes = practiceAreas.map((area) => ({
    url: `${site.url}/practice-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...blogRoutes];
}
