import { kaggleCompetitions, kaggleMedals } from "@/app/lib/data";

export default function KaggleSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-400 mb-3">
            Competitive Machine Learning
          </p>
          <h2 className="section-heading text-white mb-4">
            Kaggle <span className="gradient-text">Rankings</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Consistently placing in the top percentile against thousands of data scientists worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {kaggleCompetitions.map((c) => {
            const pct = Math.round((parseInt(c.rank) / parseInt(c.total.replace(",", ""))) * 100);
            const barPct = Math.max(2, 100 - pct);
            return (
              <div key={c.name} className="card-glass p-6 border border-orange-900/20 hover:border-orange-500/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{c.tag}</p>
                    <h3 className="text-sm font-semibold text-white leading-snug">{c.name}</h3>
                  </div>
                  <span className="text-3xl" role="img" aria-label="medal">{c.medal}</span>
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Rank</p>
                    <p className="text-3xl font-extrabold gradient-text">#{c.rank}</p>
                  </div>
                  <p className="text-slate-500 mb-1.5 text-sm">/ {c.total} teams</p>
                  <span className="ml-auto inline-flex items-center px-3 py-1 rounded-full bg-orange-900/30 border border-orange-700/30 text-orange-300 text-xs font-bold">
                    {c.pct}
                  </span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-orange-400 transition-all"
                    style={{ width: `${barPct}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1">Ahead of {barPct}% of participants</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {kaggleMedals.map((m) => (
            <div key={m.label} className="flex items-center gap-4 p-4 rounded-xl border border-purple-900/20 bg-white/[0.03] hover:border-purple-500/30 transition-all">
              <span className="text-4xl shrink-0" role="img" aria-label={m.label}>{m.emoji}</span>
              <div>
                <p className="text-sm font-semibold text-white">{m.label}</p>
                <p className="text-xs text-slate-400">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
