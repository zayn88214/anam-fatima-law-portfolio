export type BlogCategory = 'Legal Insights' | 'Case Studies' | 'News & Articles';

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  author: string;
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
  readingTime: string;
}

export const blogCategories: BlogCategory[] = ['Legal Insights', 'Case Studies', 'News & Articles'];
