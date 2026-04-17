import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import BlogList from "@/app/components/BlogList";
import { blogPosts } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "AI & ML Blog — getyoteam | Kumar Katariya",
  description:
    "Practical insights on AI agents, RAG, machine learning, deep learning, and NLP from Kumar Katariya — Top Rated Plus AI/ML Engineer on Upwork.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        <div className="mt-8 mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Insights & Tutorials
          </p>
          <h1 className="section-heading text-white mb-4">
            AI/ML <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Real projects, explained simply — from chest X-ray AI to predicting company bankruptcies.
          </p>
        </div>

        <BlogList posts={sorted} />
      </div>
    </div>
  );
}
