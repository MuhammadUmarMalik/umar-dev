export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  content: string;
  category: string;
  image?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js: A Practical Guide",
    excerpt:
      "Learn how to bootstrap a modern, performant Next.js app with TypeScript, Tailwind, and essential best practices.",
    date: "2024-11-01",
    category: "Tutorials",
    content:
      "Next.js provides a powerful foundation for building modern web apps...",
  },
  {
    slug: "optimize-portfolio-for-performance",
    title: "Optimizing a Portfolio Site for Performance and SEO",
    excerpt:
      "Practical steps to improve Core Web Vitals, accessibility, and SEO on a developer portfolio.",
    date: "2025-01-10",
    category: "Development",
    content:
      "Improving performance starts with measuring. Use PageSpeed Insights...",
  },
  {
    slug: "designing-effective-user-interfaces",
    title: "Principles of Effective UI Design for Web Applications",
    excerpt:
      "Key principles and practical tips for designing intuitive, accessible, and visually appealing user interfaces.",
    date: "2024-12-15",
    category: "Design",
    content:
      "Good UI design starts with understanding your users and their needs...",
  },
  {
    slug: "ecommerce-case-study",
    title: "Case Study: Building a High-Converting E-commerce Platform",
    excerpt:
      "How we increased conversion rates by 35% through UX improvements, performance optimization, and strategic redesign.",
    date: "2024-10-20",
    category: "Case Studies",
    content:
      "This case study examines the complete redesign and development process...",
  },
  {
    slug: "career-growth-for-developers",
    title: "Strategic Career Growth for Software Developers",
    excerpt:
      "Actionable strategies for advancing your development career, building a personal brand, and increasing your market value.",
    date: "2024-09-05",
    category: "Career",
    content:
      "Career growth in software development requires both technical and soft skills...",
  },
  {
    slug: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    excerpt:
      "Practical strategies to identify and fix performance bottlenecks in React applications for lightning-fast UIs.",
    date: "2024-08-12",
    category: "Tutorials",
    content:
      "React performance optimization starts with understanding how React renders components...",
  },
];

export const findPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);

