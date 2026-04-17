import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { projects } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "AI/ML Portfolio | Kumar Katariya | getyoteam",
  description:
    "AI/ML portfolio by Kumar Katariya: RAG chatbots, medical imaging AI, bankruptcy prediction, and more. 117+ real projects with metrics and live demos.",
  alternates: { canonical: "https://getyoteam.com/portfolio" },
  openGraph: {
    title: "AI/ML Portfolio | Kumar Katariya | getyoteam",
    description:
      "AI/ML portfolio by Kumar Katariya: RAG chatbots, medical imaging AI, bankruptcy prediction, and more. 117+ real projects with metrics and live demos.",
    url: "https://getyoteam.com/portfolio",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "AI/ML Portfolio — Kumar Katariya | getyoteam",
      },
    ],
  },
};

export default function PortfolioPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",      item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://getyoteam.com/portfolio" },
    ],
  };

  return (
    <div className="pt-24 pb-20 bg-[#07070f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
                    <span className="text-xl opacity-70" role="img" aria-label={p.title}>{p.metricIcon}</span>
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

        {/* Internal links */}
        <div className="mt-12 text-center space-y-3">
          <p className="text-slate-400 text-sm">Interested in working together?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm">
              Start a Project →
            </Link>
            <Link href="/services" className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-purple-800/40 hover:border-purple-500/60 hover:text-white transition-all text-sm">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
