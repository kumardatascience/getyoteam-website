import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { projects } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Portfolio — AI/ML Projects | GetyoTeam | Kumar Katariya",
  description:
    "AI and machine learning portfolio: RAG chatbots, medical imaging AI, bankruptcy prediction, speech emotion recognition, and more. Real projects with real metrics.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-20 bg-[#07070f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />

        <div className="mt-8 text-center mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Real Projects, Real Results
          </p>
          <h1 className="section-heading text-white mb-4">
            AI/ML <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Every project ships to production. Read the full case studies below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-purple-900/20 bg-[#0f0f1a] overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20"
            >
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
                <h2 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.shortDesc}</p>
                <span className="mt-4 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                  Read Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
