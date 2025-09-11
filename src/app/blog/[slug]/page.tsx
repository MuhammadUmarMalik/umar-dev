import React from "react";
import { findPostBySlug, posts } from "../posts";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = findPostBySlug(params.slug);
  if (!post) return {} as any;
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = findPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <>
      <PageHeader
        eyebrow="Article"
        title={post.title}
        subtitle={new Date(post.date).toLocaleDateString()}
      />
      <Section>
        <article className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition" />
            <div className="relative rounded-xl bg-slate-950/60 border border-slate-800/60 p-6">
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-200">
{post.content}
                </pre>
              </div>
            </div>
          </div>
        </article>
      </Section>
    </>
  );
}


