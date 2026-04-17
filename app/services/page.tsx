import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { services } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "AI & ML Services — getyoteam | Kumar Katariya",
  description:
    "Full-stack AI/ML services: AI agents, RAG pipelines, machine learning, deep learning, computer vision, NLP, data science, and speech AI. Top Rated Plus on Upwork.",
};

const colorMap: Record<string, { bg: string; border: string; badge: string }> = {
  purple: { bg: "from-purple-900/20 to-transparent", border: "border-purple-700/30 hover:border-purple-500/50", badge: "bg-purple-900/40 text-purple-300" },
  sky:    { bg: "from-sky-900/20 to-transparent",    border: "border-sky-700/30 hover:border-sky-500/50",       badge: "bg-sky-900/40 text-sky-300" },
  violet: { bg: "from-violet-900/20 to-transparent", border: "border-violet-700/30 hover:border-violet-500/50", badge: "bg-violet-900/40 text-violet-300" },
  blue:   { bg: "from-blue-900/20 to-transparent",   border: "border-blue-700/30 hover:border-blue-500/50",     badge: "bg-blue-900/40 text-blue-300" },
  indigo: { bg: "from-indigo-900/20 to-transparent", border: "border-indigo-700/30 hover:border-indigo-500/50", badge: "bg-indigo-900/40 text-indigo-300" },
  cyan:   { bg: "from-cyan-900/20 to-transparent",   border: "border-cyan-700/30 hover:border-cyan-500/50",     badge: "bg-cyan-900/40 text-cyan-300" },
  teal:   { bg: "from-teal-900/20 to-transparent",   border: "border-teal-700/30 hover:border-teal-500/50",     badge: "bg-teal-900/40 text-teal-300" },
};

export default function ServicesPage() {
  const featured = services.filter((s) => s.slug);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />

        <div className="mt-8 text-center mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            What I Build
          </p>
          <h1 className="section-heading text-white mb-4">
            AI & ML <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Production-ready AI solutions built with the latest tools and frameworks.
            From autonomous agents to deep learning models — end-to-end delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featured.map((s) => {
            const c = colorMap[s.color] ?? colorMap.purple;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group flex flex-col p-6 rounded-2xl bg-gradient-to-br ${c.bg} border ${c.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {s.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{s.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tech.slice(0, 3).map((t) => (
                    <span key={t} className={`text-xs px-2 py-0.5 rounded-full font-medium ${c.badge}`}>{t}</span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                  Learn More →
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl border border-purple-900/20 bg-white/[0.02]">
          <h2 className="text-xl font-bold text-white mb-3">Not sure which service fits your project?</h2>
          <p className="text-slate-400 mb-6 text-sm max-w-md mx-auto">
            Tell me what you&apos;re trying to build and I&apos;ll recommend the right approach.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm"
          >
            Start a Conversation →
          </Link>
        </div>
      </div>
    </div>
  );
}
