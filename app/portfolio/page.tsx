import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { projects, mobileApps, type MobileApp } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "AI/ML & Mobile App Portfolio | Kumar Katariya | getyoteam",
  description:
    "Portfolio by Kumar Katariya: RAG chatbots, medical imaging AI, bankruptcy prediction, and 6 published mobile apps on iOS & Android. Real metrics, live links.",
  alternates: { canonical: "https://getyoteam.com/portfolio" },
  openGraph: {
    title: "AI/ML & Mobile App Portfolio | Kumar Katariya | getyoteam",
    description:
      "Portfolio by Kumar Katariya: RAG chatbots, medical imaging AI, bankruptcy prediction, and 6 published mobile apps on iOS & Android. Real metrics, live links.",
    url: "https://getyoteam.com/portfolio",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "AI/ML & Mobile App Portfolio — Kumar Katariya | getyoteam",
      },
    ],
  },
};

// ── Apple App Store icon ──────────────────────────────────────────────────────
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

// ── Google Play icon ──────────────────────────────────────────────────────────
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M3.18 23.76c.3.17.64.24.99.2l12.69-11.95L13.23 8.38 3.18 23.76zm16.84-10.95L16.8 10.9 3.36.25C3 .01 2.6-.06 2.23.08L13.2 11.98l6.82.83zM2.23.08C1.7.3 1.33.85 1.33 1.56v20.88c0 .71.37 1.26.9 1.48L13.2 11.98 2.23.08zm19.6 9.96l-2.72-1.61-3.11 2.93 3.11 2.93 2.74-1.63c.78-.46.78-1.16.02-1.62h-.04z"/>
    </svg>
  );
}

// ── Phone icon (card header) ───────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
    </svg>
  );
}

// ── Mobile app card ───────────────────────────────────────────────────────────
function MobileAppCard({ app }: { app: MobileApp }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-purple-900/20 bg-[#0f0f1a] overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20">

      {/* Stats thumbnail */}
      <div className={`bg-gradient-to-br ${app.gradient} relative overflow-hidden px-5 py-5`}>
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
              {app.tech.slice(0, 2).map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/15 font-medium">
                  {t}
                </span>
              ))}
            </div>
            <span className="text-white/70">
              <PhoneIcon />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {app.highlights.slice(0, 4).map((h, i) => (
              <div key={i} className="bg-white/10 rounded-lg px-3 py-2.5 border border-white/10">
                <p className="text-sm sm:text-base font-extrabold text-white leading-none mb-0.5 whitespace-nowrap">{h.value}</p>
                <p className="text-[10px] text-white/55 font-medium leading-snug">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {app.title}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{app.shortDesc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {app.tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30">
              {t}
            </span>
          ))}
        </div>

        {/* Store buttons */}
        <div className="flex gap-2.5 flex-wrap">
          {app.iosUrl && (
            <a
              href={app.iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 px-3 py-1.5 rounded-lg transition-all"
            >
              <AppleIcon />
              App Store
            </a>
          )}
          {app.androidUrl && (
            <a
              href={app.androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-white gradient-bg px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              <PlayIcon />
              Play Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
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
            Every project ships to production. Full case studies, live apps, and source code included.
          </p>
        </div>

        {/* AI / ML projects */}
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

          {/* Mobile app cards — same grid, same card style */}
          {mobileApps.map((app) => (
            <MobileAppCard key={app.title} app={app} />
          ))}
        </div>

        {/* CTA */}
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
