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
        eyebrow="Blog"
        title="Insights, Tutorials, and Case Studies"
        subtitle="Long-form articles on building modern, user-centric web products."
      />
      <Section>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="relative rounded-xl border border-slate-800/60 bg-slate-950/50 p-5 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-emerald-500/10 pointer-events-none" />
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-3">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-blue-400 group-hover:underline">Read more →</div>
              </article>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}


