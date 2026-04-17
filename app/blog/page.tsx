import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import BlogList from "@/app/components/BlogList";
import { blogPosts } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "AI/ML Blog | getyoteam | Kumar Katariya",
  description:
    "Practical tutorials on AI agents, RAG pipelines, machine learning, deep learning, and NLP by Kumar Katariya — Top Rated Plus AI/ML Engineer on Upwork.",
  alternates: { canonical: "https://getyoteam.com/blog" },
  openGraph: {
    title: "AI/ML Blog | getyoteam | Kumar Katariya",
    description:
      "Practical tutorials on AI agents, RAG pipelines, machine learning, deep learning, and NLP by Kumar Katariya — Top Rated Plus AI/ML Engineer on Upwork.",
    url: "https://getyoteam.com/blog",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "AI/ML Blog — getyoteam | Kumar Katariya",
      },
    ],
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://getyoteam.com/blog" },
    ],
  };

  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
