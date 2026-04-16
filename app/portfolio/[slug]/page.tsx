import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { projects } from "@/app/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | GetyoTeam`,
    description: project.shortDesc,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Next / prev navigation
  const idx  = projects.indexOf(project);
  const prev = projects[idx - 1] ?? null;
  const next = projects[idx + 1] ?? null;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb crumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]} />

        {/* Header */}
        <div className="mt-10 mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.filter((c) => c !== "All").map((c) => (
              <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/30">
                {c}
              </span>
            ))}
          </div>
          <h1 className="section-heading text-white mb-4">{project.title}</h1>
          <p className="text-slate-400 text-lg leading-relaxed">{project.shortDesc}</p>
        </div>

        {/* Hero stats card */}
        <div className={`rounded-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden mb-10 border border-white/10`}>
          <div className="absolute inset-0 bg-black/40" />
          {/* subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 px-6 sm:px-10 py-8 sm:py-10">
            {/* Category tags + icon row */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-wrap gap-2">
                {project.category.filter((c) => c !== "All").map((c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 font-medium backdrop-blur-sm">
                    {c}
                  </span>
                ))}
              </div>
              <span className="text-3xl opacity-80">{project.metricIcon}</span>
            </div>
            {/* Stats grid — mirrors the PDF cover style */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {project.highlights.map((h, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-4 border border-white/10">
                  <p className="text-xl sm:text-2xl font-extrabold text-white leading-none mb-1.5 whitespace-nowrap">{h.value}</p>
                  <p className="text-xs text-white/60 font-medium leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card-glass p-6 border border-purple-900/20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">The Problem</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="card-glass p-6 border border-purple-900/20">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">The Solution</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="card-glass p-6 border border-purple-900/20 mb-8">
          <h2 className="text-base font-bold text-white mb-4">Results & Metrics</h2>
          <ul className="space-y-3">
            {project.results.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="card-glass p-6 border border-purple-900/20 mb-8">
          <h2 className="text-base font-bold text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.githubUrl && (() => {
            const isKaggle = project.githubUrl.includes("kaggle.com");
            return (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all"
              >
                {isKaggle ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.234.118-.353.354-.353h2.431c.234 0 .351.119.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                )}
                {isKaggle ? "View on Kaggle" : "View on GitHub"}
              </a>
            );
          })()}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-purple-400 border border-purple-800/40 hover:border-purple-500/60 hover:text-purple-300 transition-all"
          >
            Build Something Similar →
          </Link>
        </div>

        {/* Prev / Next */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-purple-900/20 pt-8">
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`} className="group flex flex-col p-4 rounded-xl border border-purple-900/20 hover:border-purple-500/30 transition-all">
              <span className="text-xs text-slate-500 mb-1">← Previous</span>
              <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{prev.title}</span>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/portfolio/${next.slug}`} className="group flex flex-col p-4 rounded-xl border border-purple-900/20 hover:border-purple-500/30 transition-all text-right ml-auto w-full">
              <span className="text-xs text-slate-500 mb-1">Next →</span>
              <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{next.title}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
