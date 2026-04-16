"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/app/lib/data";

const CATEGORIES = ["All", "AI", "Machine Learning", "Computer Vision", "NLP", "Tutorials"];

const categoryColor: Record<string, string> = {
  "AI":               "bg-purple-900/40 text-purple-300 border-purple-800/30",
  "Machine Learning": "bg-sky-900/40 text-sky-300 border-sky-800/30",
  "NLP":              "bg-violet-900/40 text-violet-300 border-violet-800/30",
  "Computer Vision":  "bg-indigo-900/40 text-indigo-300 border-indigo-800/30",
  "Tutorials":        "bg-teal-900/40 text-teal-300 border-teal-800/30",
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? posts
    : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all cursor-pointer ${
              c === active
                ? "gradient-bg text-white border-transparent shadow-lg shadow-purple-600/20"
                : (categoryColor[c] ?? "bg-slate-900/40 text-slate-400 border-slate-700/30 hover:border-slate-500/50 hover:text-slate-300")
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Post list */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <p className="text-4xl mb-4">✍️</p>
          <p>No posts in this category yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block card-glass p-6 border border-purple-900/20 hover:border-purple-500/30 transition-all hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryColor[post.category] ?? "bg-slate-900/40 text-slate-400 border-slate-700/30"}`}>
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              <h2 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-purple-900/20 text-purple-400 border border-purple-900/30">
                    #{t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
