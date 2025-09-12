import React from "react";
import Link from "next/link";
import { posts } from "./posts";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Blog",
  description: "Articles and resources by Muhammad Umar on web development and design.",
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Latest Articles"
        title="Insights, Tutorials, and Case Studies"
        subtitle="Exploring web development trends, coding techniques, and design principles to help you build better digital products."
        customEyebrow={
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium animate-fadeIn">
            <span className="flex h-2 w-2 relative">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Latest Articles
          </span>
        }
        customTitle={
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Insights, Tutorials, and Case Studies
          </span>
        }
      />
      <Section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="relative flex flex-col h-full overflow-hidden">
                  {/* Card glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/0 via-blue-600/0 to-purple-600/0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:from-blue-600/20 group-hover:via-blue-600/10 group-hover:to-purple-600/20 blur-md transition-all duration-500 -z-10"></div>
                  
                  {/* Card content */}
                  <div className="relative flex-1 rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 sm:p-8 transition-all duration-300 group-hover:border-slate-700/80 group-hover:shadow-lg">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/20 border border-blue-500/20 text-blue-400">
                        {index % 3 === 0 ? 'Tutorial' : index % 3 === 1 ? 'Case Study' : 'Development'}
                      </span>
                      <span className="text-slate-500 text-xs">{new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}</span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-slate-300 mb-6 line-clamp-3">{post.excerpt}</p>
                    
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
    </>
  );
}


