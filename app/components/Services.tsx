import Link from "next/link";
import { services } from "@/app/lib/data";

const colorMap: Record<string, { border: string; badge: string; glow: string }> = {
  purple: { border: "group-hover:border-purple-500/50",  badge: "bg-purple-900/40 text-purple-300",  glow: "group-hover:shadow-purple-500/10" },
  sky:    { border: "group-hover:border-sky-500/50",     badge: "bg-sky-900/40 text-sky-300",         glow: "group-hover:shadow-sky-500/10" },
  violet: { border: "group-hover:border-violet-500/50",  badge: "bg-violet-900/40 text-violet-300",   glow: "group-hover:shadow-violet-500/10" },
  blue:   { border: "group-hover:border-blue-500/50",    badge: "bg-blue-900/40 text-blue-300",       glow: "group-hover:shadow-blue-500/10" },
  indigo: { border: "group-hover:border-indigo-500/50",  badge: "bg-indigo-900/40 text-indigo-300",   glow: "group-hover:shadow-indigo-500/10" },
  cyan:   { border: "group-hover:border-cyan-500/50",    badge: "bg-cyan-900/40 text-cyan-300",       glow: "group-hover:shadow-cyan-500/10" },
  teal:   { border: "group-hover:border-teal-500/50",    badge: "bg-teal-900/40 text-teal-300",       glow: "group-hover:shadow-teal-500/10" },
};

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            What I Build
          </p>
          <h2 className="section-heading text-white mb-4">
            AI & ML <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            From ideation to production — full-stack AI solutions that solve real problems and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const c = colorMap[s.color] ?? colorMap.purple;
            return (
              <div
                key={s.title}
                className={`group card-glass p-6 border border-purple-900/20 ${c.border} transition-all duration-300 shadow-xl ${c.glow} hover:shadow-2xl flex flex-col`}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{s.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tech.slice(0, 4).map((tag) => (
                    <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {s.slug && (
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors mt-auto"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-300 border border-purple-900/30 hover:border-purple-500/50 hover:text-white bg-white/[0.03] transition-all"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
