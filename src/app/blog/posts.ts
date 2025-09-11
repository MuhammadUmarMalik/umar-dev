export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js: A Practical Guide",
    excerpt:
      "Learn how to bootstrap a modern, performant Next.js app with TypeScript, Tailwind, and essential best practices.",
    date: "2024-11-01",
    content:
      "Next.js provides a powerful foundation for building modern web apps...",
  },
  {
    slug: "optimize-portfolio-for-performance",
    title: "Optimizing a Portfolio Site for Performance and SEO",
    excerpt:
      "Practical steps to improve Core Web Vitals, accessibility, and SEO on a developer portfolio.",
    date: "2025-01-10",
    content:
      "Improving performance starts with measuring. Use PageSpeed Insights...",
  },
];

export const findPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

