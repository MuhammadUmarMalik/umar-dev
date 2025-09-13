import React from "react";
import Link from "next/link";
import { posts } from "./posts";
import { Section } from "@/components/ui/section";

// Get unique categories from posts
const categories = ["All Posts", ...Array.from(new Set(posts.map(post => post.category)))];

export const metadata = {
  title: "Blog",
  description: "Articles and resources by Muhammad Umar on web development and design.",
};

export default function BlogIndexPage() {
  return (
    <div className="blog-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .filter-btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .filter-btn:hover {
          color: white !important;
          border-color: rgba(59, 130, 246, 0.5) !important;
          background-color: rgba(30, 41, 59, 0.5) !important;
        }
        
        .filter-btn:active {
          transform: translateY(1px);
        }
        
        .filter-btn.active-filter {
          background: linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234)) !important;
          color: white !important;
          border-color: rgba(59, 130, 246, 0.3) !important;
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.1), 0 2px 4px -1px rgba(37, 99, 235, 0.06) !important;
        }
        
        .filter-btn.active-filter::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, rgb(59, 130, 246), rgb(168, 85, 247));
        }
      `}} />
      {/* Client-side filtering with improved implementation */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Wait for DOM to be fully loaded
              function ready(callback) {
                if (document.readyState !== 'loading') {
                  callback();
                } else {
                  document.addEventListener('DOMContentLoaded', callback);
                }
              }
              
              // Main initialization function
              function initBlogFilters() {
                // Try to get elements with retry mechanism
                function getElements() {
                  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
                  const posts = document.querySelectorAll('[data-category]');
                  const searchInput = document.getElementById('blog-search');
                  
                  if (!filterButtons.length || !posts.length) {
                    console.log('Blog filter elements not found, retrying in 200ms...');
                    setTimeout(getElements, 200);
                    return;
                  }
                  
                  setupFilters(filterButtons, posts, searchInput);
                }
                
                // Setup filter functionality
                function setupFilters(filterButtons, posts, searchInput) {
                  console.log('Setting up blog filters with', filterButtons.length, 'buttons and', posts.length, 'posts');
                  
                  // Set initial active state
                  const defaultFilter = document.querySelector('[data-filter="All Posts"]');
                  if (defaultFilter) {
                    defaultFilter.classList.add('active-filter');
                  }
                  
                  // Filter application function
                  function applyFilter(filter) {
                    // Update button states
                    filterButtons.forEach(btn => {
                      const isActive = btn.getAttribute('data-filter') === filter;
                      btn.classList.toggle('active-filter', isActive);
                      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                    });
                    
                    // Get search term if search is active
                    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
                    
                    // Apply filtering to posts
                    posts.forEach(post => {
                      const category = post.getAttribute('data-category');
                      const titleEl = post.querySelector('[data-title]');
                      const excerptEl = post.querySelector('[data-excerpt]');
                      
                      const title = titleEl ? titleEl.getAttribute('data-title').toLowerCase() : '';
                      const excerpt = excerptEl ? excerptEl.getAttribute('data-excerpt').toLowerCase() : '';
                      
                      const matchesCategory = filter === 'All Posts' || filter === category;
                      const matchesSearch = !searchTerm || 
                                           title.includes(searchTerm) || 
                                           excerpt.includes(searchTerm);
                      
                      // Show/hide based on both filters
                      post.style.display = (matchesCategory && matchesSearch) ? '' : 'none';
                    });
                  }
                  
                  // Add click events to filter buttons
                  filterButtons.forEach(button => {
                    button.addEventListener('click', function(e) {
                      e.preventDefault();
                      const filter = this.getAttribute('data-filter');
                      console.log('Filter clicked:', filter);
                      applyFilter(filter);
                    });
                  });
                  
                  // Add search functionality
                  if (searchInput) {
                    searchInput.addEventListener('input', function() {
                      // Get current active filter
                      const activeButton = document.querySelector('.filter-btn.active-filter');
                      const currentFilter = activeButton ? activeButton.getAttribute('data-filter') : 'All Posts';
                      applyFilter(currentFilter);
                    });
                  }
                  
                  // Initial filter application
                  applyFilter('All Posts');
                }
                
                // Start the process
                getElements();
                
                // Final safety check
                setTimeout(() => {
                  const activeFilter = document.querySelector('.filter-btn.active-filter');
                  if (!activeFilter) {
                    console.log('Filter initialization may have failed, retrying...');
                    getElements();
                  }
                }, 1500);
              }
              
              // Initialize
              ready(initBlogFilters);
            })();
          `
        }}
      />
    
      <div className="relative overflow-hidden pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-16 sm:pb-20">
        {/* Enhanced background with animated gradients */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]"></div>
          
          {/* Animated particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-400/40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-purple-400/30 animate-pulse" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-400/40 animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-purple-400/30 animate-pulse" style={{animationDelay: "1.5s"}}></div>
          
          {/* Decorative lines */}
          <div className="absolute inset-x-0 top-[25%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute inset-y-0 right-[20%] w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium animate-fadeIn backdrop-blur-sm shadow-lg shadow-blue-500/5">
            <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Latest Articles
              </div>
            </div>
            
            {/* Main title with enhanced styling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                Insights, Tutorials, and 
                <span className="relative whitespace-nowrap">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur rounded-lg"></span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"> Case Studies</span>
          </span>
          </span>
            </h1>
            
            {/* Subtitle with improved styling */}
            <p className="text-lg sm:text-xl text-slate-300/90 text-center mb-8 leading-relaxed max-w-3xl mx-auto">
              Exploring web development trends, coding techniques, and design principles to help you build better digital products.
            </p>
            
            {/* Search bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg blur-sm"></div>
              <div className="relative flex items-center bg-slate-900/90 border border-slate-700/50 rounded-lg overflow-hidden backdrop-blur-sm focus-within:border-blue-500/50 transition-all duration-300">
                <input 
                  id="blog-search"
                  type="search" 
                  placeholder="Search articles..." 
                  aria-label="Search blog posts"
                  autoComplete="off"
                  className="w-full py-3 px-4 bg-transparent text-white placeholder-slate-400 outline-none focus:ring-0 focus:ring-offset-0"
                />
                <button 
                  type="button"
                  aria-label="Search"
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>
      <Section className="py-12">
        <div className="max-w-7xl mx-auto">
          {/* Category filters */}
          <div className="mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex gap-3 min-w-max">
              <button 
                type="button"
                data-filter="All Posts"
                aria-pressed="true"
                className="filter-btn px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md"
                style={{backgroundColor: 'rgba(15, 23, 42, 0.3)', border: '1px solid rgba(100, 116, 139, 0.5)', color: '#94a3b8'}}
              >
                All Posts
              </button>
              {categories.slice(1).map((category) => (
                <button 
                  type="button"
                  key={category}
                  data-filter={category}
                  aria-pressed="false"
                  className="filter-btn px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm"
                  style={{backgroundColor: 'rgba(15, 23, 42, 0.3)', border: '1px solid rgba(100, 116, 139, 0.5)', color: '#94a3b8'}}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group" data-category={post.category}>
                <article className="relative flex flex-col h-full overflow-hidden">
                  {/* Card glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/0 via-blue-600/0 to-purple-600/0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:from-blue-600/20 group-hover:via-blue-600/10 group-hover:to-purple-600/20 blur-md transition-all duration-500 -z-10"></div>
                  
                  {/* Card content */}
                  <div className="relative flex-1 rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 sm:p-8 transition-all duration-300 group-hover:border-slate-700/80 group-hover:shadow-lg">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/20 border border-blue-500/20 text-blue-400">
                        {post.category}
                      </span>
                      <span className="text-slate-500 text-xs">{new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}</span>
                    </div>
                    
                    {/* Title */}
                    <h2 
                      className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors"
                      data-title={post.title}
                    >
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p 
                      className="text-slate-300 mb-6 line-clamp-3"
                      data-excerpt={post.excerpt}
                    >
                      {post.excerpt}
                    </p>
                    
                    {/* Read more button */}
                    <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Read article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          {/* Newsletter subscription */}
          <div className="mt-16 relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-md"></div>
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-10 rounded-xl border border-slate-800/80">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Stay updated with latest articles</h2>
                <p className="text-slate-300 mb-6">Get notified when I publish new content. No spam, just quality insights.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/30 border border-blue-500/30">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}


