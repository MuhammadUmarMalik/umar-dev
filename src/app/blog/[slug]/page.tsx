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
import TOC from "@/components/ui/toc";

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

  // Create stable, URL-friendly IDs from heading children
  const getNodeText = (node: React.ReactNode): string => {
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getNodeText).join(' ');
    if (React.isValidElement(node)) {
      const el = node as React.ReactElement<{ children?: React.ReactNode }>;
      return getNodeText(el.props?.children);
    }
    return '';
  };

  const slugify = (node: React.ReactNode): string => {
    const text = getNodeText(node);
    return text
      .toLowerCase()
      .trim()
      .replace(/[\u2000-\u206F\u2E00-\u2E7F'".,:;!?(){}\[\]<>@#$%^&*+=~`|\\/]+/g, '')
      .replace(/\s+/g, '-');
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Calculate reading time based on content length
  const readingTime = Math.max(1, Math.ceil(post.content.length / 1000));
  
  // Add custom styles for blog post layout and components
  const customStyles = `
    /* Reading progress bar */
    .reading-progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      z-index: 1000;
      transition: width 0.1s ease;
    }
    
    /* Table of Contents */
    .toc {
      position: sticky;
      top: 7rem;
      max-height: calc(100vh - 10rem);
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(59, 130, 246, 0.3) transparent;
    }
    
    .toc::-webkit-scrollbar {
      width: 4px;
    }
    
    .toc::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .toc::-webkit-scrollbar-thumb {
      background-color: rgba(59, 130, 246, 0.3);
      border-radius: 6px;
    }
    
    .toc-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .toc-item {
      margin-bottom: 0.75rem;
      position: relative;
    }
    
    .toc-subitem {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;
    }
    
    .toc-subitem::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.65rem;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: rgba(59, 130, 246, 0.5);
    }

    .toc-subsubitem {
      margin-top: 0.35rem;
      margin-bottom: 0.35rem;
      padding-left: 1.75rem;
      position: relative;
      opacity: 0.9;
    }
    
    .toc-subsubitem::before {
      content: "";
      position: absolute;
      left: 0.75rem;
      top: 0.6rem;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: rgba(59, 130, 246, 0.4);
    }
    
    .toc-link {
      color: rgba(226, 232, 240, 0.8);
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.2s ease;
      display: block;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      border-left: 2px solid transparent;
    }
    
    .toc-link:hover {
      color: rgba(59, 130, 246, 0.9);
      background: rgba(59, 130, 246, 0.05);
    }
    
    .toc-link.active {
      color: #3b82f6;
      background: rgba(59, 130, 246, 0.08);
      border-left: 2px solid #3b82f6;
      font-weight: 500;
    }
    
    /* Social share buttons */
    .share-btn {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      color: white;
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.2);
    }
    
    .share-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .share-btn.twitter {
      color: #1DA1F2;
    }
    
    .share-btn.facebook {
      color: #4267B2;
    }
    
    .share-btn.linkedin {
      color: #0077B5;
    }
    
    .floating-share {
      position: sticky;
      top: 8rem;
    }
    
    /* Typography enhancements */
    .prose h2 {
      font-size: 1.8rem;
      line-height: 1.3;
      margin-top: 2.5rem;
      margin-bottom: 1rem;
      scroll-margin-top: 7rem;
    }
    
    .prose h3 {
      font-size: 1.4rem;
      line-height: 1.4;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      scroll-margin-top: 7rem;
    }
    
    .prose p {
      line-height: 1.8;
      margin-bottom: 1.25rem;
    }
    
    .prose blockquote {
      border-left-width: 3px;
      border-left-color: rgba(59, 130, 246, 0.5);
      background: rgba(30, 41, 59, 0.1);
      padding: 1.25rem 1.5rem;
      border-radius: 0.5rem;
      margin: 2rem 0;
      font-style: italic;
      position: relative;
    }
    
    .prose blockquote::before {
      content: "“";
      position: absolute;
      top: -0.75rem;
      left: -0.5rem;
      font-size: 3rem;
      color: rgba(59, 130, 246, 0.3);
      font-family: serif;
    }
    
    /* Code block styling */
    .prose pre {
      background: linear-gradient(to bottom right, #1a1e2d, #0f1629);
      border: 1px solid rgba(59, 130, 246, 0.2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      border-radius: 0.75rem;
      overflow-x: auto;
      margin: 2rem 0;
    }
    
    .prose pre code {
      background: transparent;
      padding: 0;
      border-radius: 0;
      color: #e2e8f0;
      font-family: 'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace;
      font-size: 0.9rem;
      line-height: 1.6;
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
    
    /* Divider styling */
    .content-divider {
      border: 0;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(59, 130, 246, 0.3), transparent);
      margin: 2.5rem 0;
    }
    
    /* Related posts */
    .related-card {
      transition: all 0.3s ease;
      border: 1px solid rgba(59, 130, 246, 0.1);
    }
    
    .related-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      border-color: rgba(59, 130, 246, 0.3);
    }
    
    /* Author info card */
    .author-card {
      position: relative;
    }
    
    .author-card::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 1rem;
      padding: 2px;
      background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
  `;

  // Removed inline TOC script; TOC is now a client component

  // Script for reading progress bar
  const readingProgressScript = `
    (function() {
      function updateReadingProgress() {
        const article = document.querySelector('.blog-content');
        if (!article) return;
        
        const progressBar = document.querySelector('.reading-progress-bar');
        if (!progressBar) return;
        
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
        
        progressBar.style.width = progressWidth + '%';
      }
      
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
      
      if (document.readyState === 'complete') {
        init();
      } else {
        window.addEventListener('load', init);
      }
    })();
  `;

  // Script for social share functionality
  const socialShareScript = `
    (function() {
      function setupSocialSharing() {
        const shareButtons = document.querySelectorAll('.share-btn');
        
        shareButtons.forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            const network = this.getAttribute('data-network');
            const title = document.title;
            const url = window.location.href;
            
            let shareUrl;
            switch (network) {
              case 'twitter':
                shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url);
                break;
              case 'facebook':
                shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
                break;
              case 'linkedin':
                shareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title);
                break;
            }
            
            if (shareUrl) {
              window.open(shareUrl, '_blank', 'width=600,height=400');
            }
          });
        });
      }
      
      if (document.readyState === 'complete') {
        setupSocialSharing();
      } else {
        window.addEventListener('load', setupSocialSharing);
      }
    })();
  `;

  return (
    <>
      {/* Custom styles for blog post layout */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      {/* Scripts for interactive elements */}
      <script dangerouslySetInnerHTML={{ __html: socialShareScript }} />
      <script dangerouslySetInnerHTML={{ __html: readingProgressScript }} />
      
      {/* Hero banner with featured image and post title */}
      <div className="relative w-full  flex items-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-950/95 z-10"></div>
        
        {/* Background image or pattern */}
        <div className="absolute inset-0 bg-slate-900">
          {post.image ? (
            <div className="relative w-full h-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>
          ) : (
            <div className="w-full h-full overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
              </div>
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}></div>
            </div>
          )}
        </div>
        
        {/* Content container */}
        <div className="container relative z-20 mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Category badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-medium backdrop-blur-sm mb-6">
              {post.category}
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}
            
            {/* Author info and metadata */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
              {/* Author info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30 relative">
                  <Image 
                    src="/assets/images/muhammad-umar-malik.jpg" 
                    alt="Muhammad Umar" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">Muhammad Umar</div>
                  <div className="text-slate-400 text-sm">{formattedDate}</div>
                </div>
              </div>
              
              <div className="h-10 w-px bg-slate-700/50 hidden sm:block"></div>
              
              {/* Reading time */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800/60 border border-slate-700/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">{readingTime} min</div>
                  <div className="text-slate-400 text-sm">Read time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Section className="py-16">
        <article className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left sidebar with TOC and share buttons */}
            <aside className="hidden lg:block lg:col-span-3 xl:col-span-3 relative">
              <div className="sticky top-28">
                {/* Table of Contents (top-left, sticky) */}
                <TOC className="toc w-64 xl:w-72 shrink-0 bg-slate-900/40 rounded-xl border border-slate-700/30 p-5 backdrop-blur-sm" />
              </div>

            </aside>

            {/* Main content column */}
            <div className="lg:col-span-9 xl:col-span-9 min-w-0">
              {/* Content container with enhanced styling */}
              <div className="bg-slate-950/40 backdrop-blur-sm rounded-2xl border border-slate-800/40 shadow-xl overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                
                {/* Main content with improved spacing */}
                <div className="p-8 sm:p-12 md:p-16 relative">
                  {/* Mobile TOC (collapsible) */}
                  <div className="mb-8 lg:hidden">
                    <TOC className="toc bg-slate-900/40 rounded-xl border border-slate-700/30 p-5 backdrop-blur-sm" collapsible initialOpen={false} />
                  </div>
                  
                  {/* Mobile share buttons */}
                  <div className="mb-8 lg:hidden">
                    <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Share this article</h3>
                    <div className="flex items-center gap-3">
                      <button className="share-btn twitter" data-network="twitter" aria-label="Share on Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </button>
                      <button className="share-btn facebook" data-network="facebook" aria-label="Share on Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </button>
                      <button className="share-btn linkedin" data-network="linkedin" aria-label="Share on LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Subtle divider */}
                  <hr className="content-divider mb-8 lg:hidden" />

                  {/* Main blog content with enhanced typography */}
                  <div className="blog-content prose prose-lg md:prose-xl prose-invert 
                    prose-headings:font-semibold prose-headings:text-white 
                    prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:leading-tight
                    prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-slate-200 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
                    prose-code:text-purple-200 
                    prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-slate-700/60 prose-pre:rounded-xl prose-pre:shadow-lg
                    prose-img:rounded-xl prose-img:shadow-xl prose-img:w-full
                    prose-li:text-slate-200 prose-li:my-1.5 prose-li:leading-relaxed
                    prose-strong:text-white prose-strong:font-medium
                    prose-blockquote:border-blue-500/60 prose-blockquote:bg-slate-800/20 prose-blockquote:rounded-lg prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:shadow-sm prose-blockquote:not-italic
                    max-w-[780px] xl:max-w-[820px] mx-auto">
                    {/* Subtle heading indicator line */}
                    <div className="mb-8 flex items-center gap-2">
                      <div className="h-0.5 w-6 bg-blue-500 rounded-full"></div>
                      <div className="h-0.5 w-3 bg-blue-500/70 rounded-full"></div>
                      <div className="h-0.5 w-1.5 bg-blue-500/40 rounded-full"></div>
                    </div>
                    
                    {/* Add sample headings for testing if no content */}
                    {!post.content && (
                      <>
                        <h2>Sample Heading 2</h2>
                        <p>Some sample content to test TOC generation</p>
                        <h3>Sample Subheading 3</h3>
                        <p>More sample content for testing</p>
                        <h2>Another Heading 2</h2>
                        <p>Final test content</p>
                      </>
                    )}
                    
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw, rehypeSanitize]}
                      components={{
                        code({className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '');
                          const fileMatch = /file-(.+)/.exec(className || '');
                          const filename = fileMatch ? fileMatch[1] : undefined;
                          
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
                        },
                        // Enhanced heading components with anchors
                        h2: ({children, ...props}: { children?: React.ReactNode }) => {
                          const id = slugify(children || '') || undefined;
                          return (
                            <h2 id={id} {...props} className="group relative">
                              {children}
                              <a href={`#${id}`} className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                              </a>
                            </h2>
                          );
                        },
                        h3: ({children, ...props}: { children?: React.ReactNode }) => {
                          const id = slugify(children || '') || undefined;
                          return (
                            <h3 id={id} {...props} className="group relative">
                              {children}
                              <a href={`#${id}`} className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                              </a>
                            </h3>
                          );
                        }
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>

                    {/* Social share at end of blog post */}
                    <div className="mt-10 pt-6 border-t border-slate-800/50">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Share this article</h3>
                        <div className="flex items-center gap-3">
                          <button className="share-btn twitter" data-network="twitter" aria-label="Share on Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </button>
                          <button className="share-btn facebook" data-network="facebook" aria-label="Share on Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                          </button>
                          <button className="share-btn linkedin" data-network="linkedin" aria-label="Share on LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                    {/* Section divider */}
                    <hr className="content-divider my-10" />
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-sm font-medium text-slate-400 mr-2">Tags</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 border border-blue-500/40 text-blue-300 hover:bg-blue-900/40 transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1.5"></span>
                      {post.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:bg-slate-700/40 transition-colors">
                      Web Development
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:bg-slate-700/40 transition-colors">
                      Programming
                    </span>
                  </div>
                  
                  {/* Author info card */}
                  <div className="mt-16">
                    <div className="author-card bg-slate-900/40 rounded-xl border border-slate-800/50 overflow-hidden">
                      <div className="relative p-8 sm:p-10">
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-0 left-0 w-full h-full" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px)', 
                            backgroundSize: '24px 24px'
                          }}></div>
                        </div>
                        
                        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-xl shadow-blue-900/10 relative flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-0.5">
                            <div className="rounded-full overflow-hidden w-full h-full relative bg-slate-900">
                              <Image 
                                src="/assets/images/muhammad-umar-malik.jpg" 
                                alt="Muhammad Umar" 
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          
                          <div className="flex-1 text-center sm:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-medium mb-3">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                              WRITTEN BY
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Muhammad Umar</h4>
                            <p className="text-sm text-slate-400 mb-3">Full Stack Developer & UI/UX Designer</p>
                            <p className="text-slate-300 leading-relaxed max-w-2xl">
                              I help businesses build modern, high-performance web applications with clean code and exceptional user experiences. With expertise in React, Next.js, and modern frontend technologies.
                            </p>
                            
                            <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                              <a href="#" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800/70 hover:bg-blue-900/30 text-slate-300 hover:text-blue-300 transition-colors border border-slate-700/60 hover:border-blue-500/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                                Twitter
                              </a>
                              <a href="#" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-slate-800/70 hover:bg-blue-900/30 text-slate-300 hover:text-blue-300 transition-colors border border-slate-700/60 hover:border-blue-500/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                LinkedIn
                              </a>
                              <a href="/contact" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-600/80 hover:bg-blue-500/80 text-white transition-colors border border-blue-500/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact Me
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Newsletter signup */}
                  <div className="mt-16 relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl blur-lg opacity-70"></div>
                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-slate-800/50 overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                      
                      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="md:max-w-md">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            <div className="text-blue-400 text-sm font-medium">STAY UPDATED</div>
                          </div>
                          <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">Join my newsletter</h4>
                          <p className="text-slate-300 text-lg leading-relaxed">
                            Get the latest articles, tutorials, and updates delivered straight to your inbox. No spam, unsubscribe anytime.
                          </p>
                        </div>
                        
                        <div className="flex-shrink-0 w-full md:w-auto">
                          <div className="flex flex-col sm:flex-row gap-3">
                            <input 
                              type="email" 
                              placeholder="Your email address" 
                              className="w-full px-5 py-3 rounded-lg bg-slate-800/70 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                            />
                            <button className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500/30">
                              Subscribe
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related posts grid layout */}
                <div className="bg-gradient-to-b from-slate-950/70 to-slate-900/70 border-t border-slate-800/50 p-10 sm:p-16">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                        <div className="h-8 w-1.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                        More articles like this
                      </h3>
                      <Link href="/blog" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group">
                        <span>View all articles</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Posts grid */}
                    <div className="grid grid-cols-1 md:[grid-template-columns:repeat(2,minmax(420px,1fr))] gap-8 justify-center">
                      {posts.filter(p => p.slug !== post.slug).slice(0, 2).map(relatedPost => (
                        <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                          <div className="related-card rounded-xl overflow-hidden bg-slate-900/40 backdrop-blur-sm h-full flex flex-col shadow-md">
                            {/* Featured image area */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 overflow-hidden">
                              {relatedPost.image ? (
                                <div className="relative w-full h-full">
                                  <Image
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                  />
                                </div>
                              ) : (
                                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity">
                                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                                  <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all"></div>
                                </div>
                              )}
                              
                              {/* Category badge */}
                              <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/80 text-white shadow-lg shadow-blue-900/30">
                                  {relatedPost.category}
                                </span>
                              </div>
                            </div>
                            
                            <div className="p-6 flex-1 flex flex-col">
                              <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{new Date(relatedPost.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                <span>{Math.ceil(relatedPost.content.length / 1000)} min read</span>
                              </div>
                              
                              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{relatedPost.title}</h4>
                              <p className="text-slate-400 text-sm mb-5 line-clamp-2">{relatedPost.excerpt}</p>
                              
                              <div className="mt-auto">
                                <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                                  Read article
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Mobile view all link */}
                    <div className="mt-10 text-center md:hidden">
                      <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/70 hover:bg-blue-900/30 text-white transition-colors border border-slate-700/60 hover:border-blue-500/50">
                        View all articles
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar removed to keep TOC on top-left */}
          </div>
        </article>
      </Section>
    </>
  );
}
