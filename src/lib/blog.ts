import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogFrontmatter, BlogPostMeta } from './blog-types';

export type { BlogCategory, BlogFrontmatter, BlogPostMeta } from './blog-types';
export { blogCategories } from './blog-types';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getAllPosts(): BlogPostMeta[] {
  const posts = getSlugs().map((slug) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf-8');
    const { data, content } = matter(raw);
    const frontmatter = data as BlogFrontmatter;
    return {
      ...frontmatter,
      slug,
      readingTime: readingTime(content).text,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { meta: BlogPostMeta; content: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;

  return {
    meta: {
      ...frontmatter,
      slug,
      readingTime: readingTime(content).text,
    },
    content,
  };
}
