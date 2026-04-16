"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/app/lib/data";

const FILTERS = ["All", "ML", "Deep Learning", "NLP", "Vision", "RAG"] as const;

export default function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Real Projects, Real Results
          </p>
          <h2 className="section-heading text-white mb-4">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Every project ships to production. Explore the work — live demos and source code included.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "gradient-bg text-white shadow-lg shadow-purple-600/25"
                  : "text-slate-400 border border-purple-900/30 hover:border-purple-500/50 hover:text-white bg-white/[0.03]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-purple-900/20 bg-[#0f0f1a] overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20"
            >
              {/* Stats card thumbnail */}
              <div className={`bg-gradient-to-br ${p.gradient} relative overflow-hidden px-5 py-5`}>
                <div className="absolute inset-0 bg-black/40" />
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1.5 flex-wrap">
                      {p.category.filter((c) => c !== "All").slice(0, 2).map((c) => (
                        <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/15 font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                    <span className="text-xl opacity-70">{p.metricIcon}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {p.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="bg-white/10 rounded-lg px-3 py-2.5 border border-white/10">
                        <p className="text-sm sm:text-base font-extrabold text-white leading-none mb-0.5 whitespace-nowrap">{h.value}</p>
                        <p className="text-[10px] text-white/55 font-medium leading-snug">{h.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{p.shortDesc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="flex items-center gap-1.5 text-xs font-medium text-white gradient-bg px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Case Study →
                  </Link>
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-300 border border-purple-900/30 hover:border-purple-500/50 hover:text-white bg-white/[0.03] transition-all"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
