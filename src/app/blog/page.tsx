import { Metadata } from "next";
import { BlogHero } from "@/components/ui/blog-hero";
import { BlogList } from "@/components/ui/blog-list";

export const metadata: Metadata = {
  title: "Blog | Muhammad Umar",
  description: "Read my latest thoughts, tutorials, and insights on web development, design, and technology.",
};

export default function BlogPage() {
  return (
    <main className="relative bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      <div className="min-h-screen">
        <BlogHero />
        <BlogList />
      </div>
    </main>
  );
} 