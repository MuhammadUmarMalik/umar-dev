"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Sample blog data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    id: "1",
    title: "Building Modern Web Applications with Next.js",
    excerpt: "Learn how to leverage the power of Next.js to build fast, SEO-friendly web applications with React.",
    date: "May 15, 2023",
    category: "Development",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "building-modern-web-applications-with-nextjs"
  },
  {
    id: "2",
    title: "Mastering TypeScript for Frontend Development",
    excerpt: "Discover how TypeScript can improve your development workflow and help catch bugs before they reach production.",
    date: "June 2, 2023",
    category: "TypeScript",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "mastering-typescript-for-frontend-development"
  },
  {
    id: "3",
    title: "The Future of UI Design: Trends to Watch",
    excerpt: "Explore emerging UI design trends that are shaping the future of web and mobile applications.",
    date: "July 10, 2023",
    category: "Design",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "future-of-ui-design-trends-to-watch"
  },
  {
    id: "4",
    title: "Optimizing React Performance",
    excerpt: "Learn practical techniques to optimize your React applications for better performance and user experience.",
    date: "August 5, 2023",
    category: "React",
    image: "/assets/images/umar_logo.png", // Using an existing image as placeholder
    slug: "optimizing-react-performance"
  },
];

export const BlogList = () => {
  const [filter, setFilter] = useState("All");
  
  // Get unique categories for filter
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on selected category
  const filteredPosts = filter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Filter by category to find exactly what you're looking for
          </p>
        </motion.div>
      
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12 justify-center"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <h3 className="text-xl font-medium mb-2">No posts found</h3>
            <p className="text-slate-400">No blog posts in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Blog Card Component
const BlogCard = ({ post }: { post: any }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800/50 h-full flex flex-col transition-all duration-300 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-900/20">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-xs font-medium py-1 px-2 rounded-full">
            {post.category}
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="text-sm text-slate-400 mb-2">{post.date}</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
          <div className="mt-auto">
            <span className="text-blue-500 text-sm font-medium group-hover:text-blue-400 flex items-center">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}; 