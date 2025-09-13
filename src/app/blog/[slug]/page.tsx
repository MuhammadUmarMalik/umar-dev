import React from "react";
import { findPostBySlug, posts } from "../posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

// Custom code block component for better presentation
const CodeBlock = ({ language, value, filename }: { language: string; value: string; filename?: string }) => {
  return (
    <div className="code-container">
      {filename && (
        <div className="code-header">
          <div className="flex items-center gap-2">
            <span className="flex space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </span>
            <span>{filename}</span>
          </div>
          <div className="text-xs opacity-70">{language}</div>
        </div>
      )}
      <pre>
        <code className={language ? `language-${language}` : ''}>
          {value}
        </code>
      </pre>
    </div>
  );
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = findPostBySlug(params.slug);
  if (!post) return {} as { title: string; description: string };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "blog", "tutorial", "web development", post.title.toLowerCase()],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Muhammad Umar"],
      tags: [post.category, "web development", "programming"]
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = findPostBySlug(params.slug);
  if (!post) return notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Add custom styles for code blocks and syntax highlighting
  const customCodeStyles = `
    /* Table of Contents styling */
    .table-of-contents {
      border-radius: 0.75rem;
      border: 1px solid rgba(59, 130, 246, 0.2);
      background: linear-gradient(to bottom right, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.7));
      backdrop-filter: blur(8px);
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .toc-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: white;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .toc-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .toc-item {
      margin-bottom: 0.75rem;
    }
    
    .toc-subitem {
      margin-bottom: 0.5rem;
      padding-left: 1.25rem;
      position: relative;
    }
    
    .toc-subitem::before {
      content: "";
      position: absolute;
      left: 0.5rem;
      top: 0.75rem;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background-color: rgba(59, 130, 246, 0.8);
    }
    
    .toc-link {
      color: rgba(226, 232, 240, 0.9);
      text-decoration: none;
      transition: color 0.2s ease;
      font-size: 0.95rem;
      line-height: 1.5;
      display: inline-block;
    }
    
    .toc-link:hover {
      color: rgba(59, 130, 246, 1);
    }
    
    /* Reading progress bar */
    .reading-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      z-index: 1000;
      transition: width 0.1s ease;
    }
    
    /* Code block styling */
    .prose pre {
      background: linear-gradient(to bottom right, #1a1e2d, #0f1629);
      border: 1px solid rgba(59, 130, 246, 0.2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1), 0 0 15px rgba(59, 130, 246, 0.1) inset;
      padding: 1.5rem !important;
      border-radius: 0.75rem !important;
      overflow-x: auto;
      margin: 2rem 0 !important;
    }
    
    .prose pre code {
      background: transparent;
      padding: 0;
      border-radius: 0;
      color: #e2e8f0;
      font-family: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
      font-size: 0.9rem;
      line-height: 1.6;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    
    /* Inline code styling */
    .prose :not(pre) > code {
      background: rgba(59, 130, 246, 0.1);
      color: #93c5fd;
      padding: 0.2em 0.4em;
      border-radius: 0.25rem;
      font-family: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
      font-size: 0.875em;
      font-weight: 500;
      border: 1px solid rgba(59, 130, 246, 0.2);
    }
    
    /* Code block header */
    .code-header {
      background: rgba(30, 41, 59, 0.8);
      border-bottom: 1px solid rgba(59, 130, 246, 0.2);
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
      padding: 0.75rem 1.5rem;
      font-family: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
      font-size: 0.8rem;
      color: #94a3b8;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .code-header + pre {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      margin-top: 0 !important;
    }
    
    /* Blockquote styling */
    .prose blockquote {
      border-left-width: 3px;
      border-left-color: rgba(59, 130, 246, 0.5);
      background: rgba(30, 41, 59, 0.4);
      padding: 1rem 1.5rem !important;
      border-radius: 0.5rem;
      margin: 1.5rem 0;
      font-style: italic;
      position: relative;
    }
    
    .prose blockquote::before {
      content: """;
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      font-size: 3rem;
      color: rgba(59, 130, 246, 0.3);
      font-family: serif;
    }
    
    /* Table styling */
    .prose table {
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
      margin: 2rem 0;
      overflow: hidden;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    .prose table th {
      background: rgba(30, 41, 59, 0.8);
      color: white;
      font-weight: 600;
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 2px solid rgba(59, 130, 246, 0.3);
    }
    
    .prose table td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
      background: rgba(30, 41, 59, 0.4);
    }
    
    .prose table tr:last-child td {
      border-bottom: none;
    }
    
    /* List styling */
    .prose ul li::marker {
      color: rgba(59, 130, 246, 0.8);
    }
    
    .prose ol li::marker {
      color: rgba(59, 130, 246, 0.8);
      font-weight: 600;
    }
  `;

  // Add client-side script for table of contents generation
  const tableOfContentsScript = `
    (function() {
      function generateTableOfContents() {
        const article = document.querySelector('.blog-article');
        const tocContainer = document.querySelector('.table-of-contents');
        
        if (!article || !tocContainer) return;
        
        // Find all headings in the article
        const headings = article.querySelectorAll('h2, h3');
        if (headings.length === 0) {
          tocContainer.style.display = 'none';
          return;
        }
        
        // Create TOC list
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';
        
        // Process each heading
        headings.forEach((heading, index) => {
          // Add ID to the heading if it doesn't have one
          if (!heading.id) {
            heading.id = 'heading-' + index;
          }
          
          // Create list item
          const listItem = document.createElement('li');
          listItem.className = heading.tagName.toLowerCase() === 'h3' ? 'toc-subitem' : 'toc-item';
          
          // Create link
          const link = document.createElement('a');
          link.href = '#' + heading.id;
          link.textContent = heading.textContent;
          link.className = 'toc-link';
          
          // Add click event to smooth scroll
          link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#' + heading.id).scrollIntoView({
              behavior: 'smooth'
            });
          });
          
          // Append link to list item
          listItem.appendChild(link);
          
          // Append list item to TOC list
          tocList.appendChild(listItem);
        });
        
        // Append TOC list to container
        tocContainer.appendChild(tocList);
      }
      
      // Initialize when DOM is ready
      if (document.readyState === 'complete') {
        generateTableOfContents();
      } else {
        window.addEventListener('load', generateTableOfContents);
      }
    })();
  `;

  // Add client-side script for reading progress
  const readingProgressScript = `
    (function() {
      function updateReadingProgress() {
        const article = document.querySelector('.blog-article');
        if (!article) return;
        
        const progress = document.querySelector('.reading-progress-bar');
        if (!progress) return;
        
        const windowHeight = window.innerHeight;
        const articleHeight = article.offsetHeight;
        const scrollY = window.scrollY;
        const articleTop = article.getBoundingClientRect().top + scrollY;
        const articleBottom = articleTop + articleHeight;
        
        // Calculate reading progress percentage
        const totalReadingArea = articleBottom - articleTop - windowHeight;
        const currentReadingProgress = scrollY - articleTop;
        let progressWidth = (currentReadingProgress / totalReadingArea) * 100;
        
        // Constrain between 0-100%
        progressWidth = Math.min(100, Math.max(0, progressWidth));
        
        progress.style.width = progressWidth + '%';
      }
      
      // Wait for DOM to be ready
      function init() {
        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress-bar';
        document.body.appendChild(progressBar);
        
        // Add scroll event listener
        window.addEventListener('scroll', updateReadingProgress);
        window.addEventListener('resize', updateReadingProgress);
        
        // Initial update
        updateReadingProgress();
      }
      
      // Initialize when DOM is ready
      if (document.readyState === 'complete') {
        init();
      } else {
        window.addEventListener('load', init);
      }
    })();
  `;

  return (
    <>
      {/* Custom styles for code blocks and content */}
      <style dangerouslySetInnerHTML={{ __html: customCodeStyles }} />
      
      {/* Table of contents script */}
      <script dangerouslySetInnerHTML={{ __html: tableOfContentsScript }} />
      
      {/* Reading progress script */}
      <script dangerouslySetInnerHTML={{ __html: readingProgressScript }} />
      
      {/* Modern blog post header */}
      <div className="relative pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-16 sm:pb-20 overflow-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Category badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-medium backdrop-blur-sm">
                {post.category}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 leading-tight text-white">
              {post.title}
            </h1>
            
            {/* Author and date */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500/30 relative">
                  <Image 
                    src="/assets/images/muhammad-umar-malik.jpg" 
                    alt="Muhammad Umar" 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-slate-300 text-sm">Muhammad Umar</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-300 text-sm">{formattedDate}</span>
              </div>
            </div>
            
            {/* Reading time and social share */}
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{Math.ceil(post.content.length / 1000)} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Section className="py-0">
        <article className="max-w-6xl mx-auto blog-article">
          {/* Enhanced featured visual */}
          <div className="relative flex items-center justify-center mb-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="w-32 h-32 bg-purple-500/10 rounded-full blur-3xl ml-16"></div>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-500/50"></span>
                <span>ARTICLE</span>
                <span className="inline-block w-1 h-1 rounded-full bg-slate-600"></span>
                <span>{Math.ceil(post.content.length / 1000)} MIN READ</span>
              </div>
            </div>
          </div>
          
          {/* Content container with enhanced styling */}
          <div className="bg-gradient-to-b from-slate-900/60 to-slate-950/60 backdrop-blur-sm rounded-2xl border border-slate-800/50 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            {/* Main content with improved spacing */}
            <div className="p-8 sm:p-12 md:p-16 relative">
              {/* Table of contents with enhanced styling */}
              <div className="table-of-contents mb-14 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-md"></div>
                <div className="relative bg-slate-900/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/30">
                  <h3 className="toc-title">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Table of Contents
                  </h3>
                  {/* Content will be dynamically generated by JavaScript */}
                </div>
              </div>
              
              {/* Article content with improved typography and spacing */}
              <div className="prose prose-lg md:prose-xl prose-invert prose-headings:font-bold prose-headings:text-white prose-h2:text-3xl prose-h3:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-p:my-6 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:text-purple-300 prose-pre:bg-slate-800/90 prose-pre:border prose-pre:border-slate-700/50 prose-pre:rounded-xl prose-pre:shadow-md prose-pre:p-6 prose-pre:my-8 prose-img:rounded-xl prose-img:shadow-xl prose-img:my-10 prose-li:text-slate-300 prose-li:my-2 prose-ul:my-6 prose-ol:my-6 prose-strong:text-white prose-blockquote:border-blue-500/50 prose-blockquote:bg-slate-800/30 prose-blockquote:rounded-md prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:shadow-sm prose-blockquote:my-8 max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  components={{
                    code({className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '');
                      const fileMatch = /file-(.+)/.exec(className || '');
                      const filename = fileMatch ? fileMatch[1] : undefined;
                      
                      // Check if this is an inline code block or a code block with language
                      return className?.includes('language-') && match ? (
                        <CodeBlock
                          language={match[1] || 'text'}
                          value={String(children).replace(/\n$/, '')}
                          filename={filename}
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    }
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-slate-800/40">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-slate-400">Tags:</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/20 border border-blue-500/20 text-blue-400">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300">
                    Web Development
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300">
                    Programming
                  </span>
                </div>
              </div>
              
              {/* Author info - enhanced styling */}
              <div className="mt-16 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-md rounded-xl border border-slate-700/30 overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                  </div>
                  
                  <div className="relative p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-lg shadow-blue-500/20 relative flex-shrink-0">
                        <Image 
                          src="/assets/images/muhammad-umar-malik.jpg" 
                          alt="Muhammad Umar" 
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          WRITTEN BY
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">Muhammad Umar</h4>
                        <p className="text-sm text-slate-400 mb-4">Full Stack Developer & UI/UX Designer</p>
                        <p className="text-slate-300 leading-relaxed">I help businesses build modern, high-performance web applications with clean code and exceptional user experiences. With expertise in React, Next.js, and modern frontend technologies.</p>
                        
                        <div className="mt-6 flex items-center justify-center sm:justify-start gap-4">
                          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to action - enhanced styling */}
              <div className="mt-16 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl blur-lg opacity-70"></div>
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-md p-10 rounded-xl border border-slate-800/50 text-center overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                  
                  <div className="relative">
                    <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need help with your project?</h4>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">I&apos;m available for freelance work and consulting. Let&apos;s discuss how I can help you build something amazing.</p>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-900/30 border border-blue-500/30 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100"
                    >
                      <span className="relative">
                        <span className="absolute inset-0 w-full h-full bg-white/20 rounded-full blur-sm"></span>
                        <span className="relative">Get in touch</span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related posts - enhanced styling */}
            <div className="bg-gradient-to-b from-slate-950/70 to-slate-900/70 border-t border-slate-800/50 p-10 sm:p-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                You might also like
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {posts.filter(p => p.slug !== post.slug).slice(0, 2).map(relatedPost => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-800/60 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-blue-900/10 transform hover:-translate-y-1 hover:scale-[1.01] active:translate-y-0 active:scale-100">
                      {/* Featured image area with gradient placeholder */}
                      <div className="relative h-40 bg-gradient-to-br from-blue-900/30 to-purple-900/30 overflow-hidden">
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl"></div>
                          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-2xl"></div>
                        </div>
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/80 text-white shadow-lg shadow-blue-900/30">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-slate-400 text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            {new Date(relatedPost.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}
                          </span>
                          <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Section>
    </>
  );
}


