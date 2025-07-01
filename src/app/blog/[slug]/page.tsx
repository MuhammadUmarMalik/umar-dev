"use client";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

// Sample blog data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js",
    excerpt: "Learn how to leverage the power of Next.js to build fast, SEO-friendly web applications with React.",
    date: "May 15, 2023",
    category: "Development",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "building-modern-web-applications-with-nextjs",
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js is a React framework that enables functionality such as server-side rendering and static site generation. It's designed to make building React applications easier and more efficient.</p>
      
      <h2>Key Features of Next.js</h2>
      <ul>
        <li><strong>Server-side Rendering (SSR)</strong>: Renders pages on the server for improved SEO and initial load performance.</li>
        <li><strong>Static Site Generation (SSG)</strong>: Pre-renders pages at build time for maximum performance.</li>
        <li><strong>Incremental Static Regeneration</strong>: Updates static content after deployment without rebuilding the entire site.</li>
        <li><strong>API Routes</strong>: Create API endpoints as Node.js serverless functions.</li>
        <li><strong>File-based Routing</strong>: Automatic routing based on file structure in the pages directory.</li>
      </ul>
      
      <h2>Getting Started with Next.js</h2>
      <p>To create a new Next.js app, you can use the create-next-app command:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This sets up a new Next.js project with all the necessary configurations. Once installed, you can start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>

      <h2>Conclusion</h2>
      <p>Next.js provides a powerful framework for building modern web applications with React. Its features like server-side rendering, static site generation, and file-based routing make it an excellent choice for building fast, SEO-friendly websites.</p>
    `
  },
  {
    id: "2",
    title: "Mastering TypeScript for Frontend Development",
    excerpt: "Discover how TypeScript can improve your development workflow and help catch bugs before they reach production.",
    date: "June 2, 2023",
    category: "TypeScript",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "mastering-typescript-for-frontend-development",
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, which helps catch errors during development rather than at runtime. This can lead to more robust code and a better development experience.</p>
      
      <h2>Key Benefits of TypeScript</h2>
      <ul>
        <li><strong>Type Safety</strong>: Catch type-related errors at compile time.</li>
        <li><strong>Better IDE Support</strong>: Enhanced autocompletion, navigation, and refactoring.</li>
        <li><strong>Improved Maintainability</strong>: Self-documenting code with explicit types.</li>
        <li><strong>Modern JavaScript Features</strong>: Use the latest ECMAScript features with backward compatibility.</li>
      </ul>
      
      <h2>Getting Started with TypeScript</h2>
      <p>To start using TypeScript in your project, you can install it as a dev dependency:</p>
      <pre><code>npm install typescript --save-dev</code></pre>
      
      <p>Then create a tsconfig.json file to configure TypeScript:</p>
      <pre><code>{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}</code></pre>

      <h2>Conclusion</h2>
      <p>TypeScript is a powerful tool for frontend development that can help you write more maintainable and error-free code. By adding static typing to JavaScript, it provides a better development experience and can catch many common errors before they reach production.</p>
    `
  },
  {
    id: "3",
    title: "The Future of UI Design: Trends to Watch",
    excerpt: "Explore emerging UI design trends that are shaping the future of web and mobile applications.",
    date: "July 10, 2023",
    category: "Design",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "future-of-ui-design-trends-to-watch",
    content: `
      <h2>Evolving UI Design Trends</h2>
      <p>User interface design continues to evolve rapidly, with new trends emerging that focus on user experience, accessibility, and visual appeal.</p>
      
      <h2>Key UI Design Trends</h2>
      <ul>
        <li><strong>Dark Mode</strong>: Reducing eye strain and saving battery life while providing a sleek look.</li>
        <li><strong>Glassmorphism</strong>: Creating frosted glass effects for depth and modern aesthetics.</li>
        <li><strong>Microinteractions</strong>: Small animations that provide feedback and enhance user engagement.</li>
        <li><strong>3D Elements</strong>: Adding depth and realism to interfaces with 3D graphics and illustrations.</li>
        <li><strong>Voice User Interfaces</strong>: Designing for voice-controlled interactions as voice assistants become more prevalent.</li>
      </ul>
      
      <h2>Implementing Modern UI Trends</h2>
      <p>To implement these trends in your projects, consider using modern CSS features and JavaScript libraries:</p>
      <pre><code>/* Glassmorphism example */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}</code></pre>

      <h2>Conclusion</h2>
      <p>Staying current with UI design trends is essential for creating modern, engaging user interfaces. By incorporating these emerging trends thoughtfully, you can create interfaces that are not only visually appealing but also functional and user-friendly.</p>
    `
  },
  {
    id: "4",
    title: "Optimizing React Performance",
    excerpt: "Learn practical techniques to optimize your React applications for better performance and user experience.",
    date: "August 5, 2023",
    category: "React",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "optimizing-react-performance",
    content: `
      <h2>Why React Performance Matters</h2>
      <p>Optimizing React performance is crucial for providing a smooth user experience, especially as applications grow in complexity.</p>
      
      <h2>Key Performance Optimization Techniques</h2>
      <ul>
        <li><strong>Memoization</strong>: Using React.memo, useMemo, and useCallback to prevent unnecessary re-renders.</li>
        <li><strong>Code Splitting</strong>: Breaking down your bundle into smaller chunks to reduce initial load time.</li>
        <li><strong>Virtualization</strong>: Rendering only visible items in long lists using libraries like react-window.</li>
        <li><strong>Lazy Loading</strong>: Loading components only when they're needed using React.lazy and Suspense.</li>
        <li><strong>State Management Optimization</strong>: Using efficient state management approaches to minimize renders.</li>
      </ul>
      
      <h2>Implementing React.memo</h2>
      <p>Here's an example of using React.memo to prevent unnecessary re-renders:</p>
      <pre><code>import React from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  // Expensive rendering logic
  return (
    <div>
      {/* Rendered content */}
    </div>
  );
});

export default ExpensiveComponent;</code></pre>

      <h2>Conclusion</h2>
      <p>By implementing these performance optimization techniques, you can significantly improve the speed and responsiveness of your React applications, leading to a better user experience and potentially higher conversion rates.</p>
    `
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If no post is found, return 404
  if (!post) {
    notFound();
  }

  return (
    <main className="relative">
      {/* Hero Section with decorative elements */}
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-8">
        {/* Background decorative elements */}
       s
      
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm text-blue-500 hover:text-blue-400 mb-6 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all posts
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className="bg-blue-600 text-xs font-medium py-1 px-3 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-slate-400 ml-4">{post.date}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{post.title}</h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mb-8">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Image */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mb-12 -mt-4">
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* Blog Content */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share and Navigation */}
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <div>
                  <h4 className="text-sm uppercase text-slate-400 mb-2">Share this post</h4>
                  <div className="flex gap-3">
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yourwebsite.com/blog/${post.slug}`)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`https://github.com/MuhammadUmarMalik`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-gray-700 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://yourwebsite.com/blog/${post.slug}`)}`}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-green-600 transition-colors"
                      aria-label="Share via Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase text-slate-400 mb-2">Related posts</h4>
                  <div className="flex flex-col gap-2">
                    {blogPosts
                      .filter(relatedPost => 
                        relatedPost.category === post.category && 
                        relatedPost.id !== post.id
                      )
                      .slice(0, 2)
                      .map(relatedPost => (
                        <Link 
                          key={relatedPost.id} 
                          href={`/blog/${relatedPost.slug}`}
                          className="text-blue-500 hover:text-blue-400 transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 