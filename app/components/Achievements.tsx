const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-400">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Top Rated Plus",
    sub: "Upwork · Top 3% Globally",
    badge: "Verified",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    glow: "shadow-green-500/10",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-sky-400">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "100% Job Success",
    sub: "117 Jobs · $400K+ Earned",
    badge: "Perfect Score",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/20",
    glow: "shadow-sky-500/10",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-400">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a7 7 0 110 14A7 7 0 0112 5z" opacity=".3"/>
        <path d="M12 7l1.545 3.13 3.455.502-2.5 2.437.59 3.437L12 14.885l-3.09 1.621.59-3.437L7 10.632l3.455-.502z"/>
      </svg>
    ),
    title: "Kaggle Expert",
    sub: "Rank 2,375 / 61,099 · Top 4%",
    badge: "6 Bronze Medals",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
    glow: "shadow-orange-500/10",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-blue-400">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "IBM Certified",
    sub: "Machine Learning & Data Science",
    badge: "Professional Cert",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/10",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-10 sm:py-14 border-y border-purple-900/20 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-8">
          Verified Credentials &amp; Achievements
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div
              key={b.title}
              className={`relative flex flex-col items-center text-center p-5 rounded-2xl bg-gradient-to-br ${b.color} border ${b.border} shadow-xl ${b.glow} hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="mb-3 p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-0.5">{b.title}</h3>
              <p className="text-xs text-slate-400 mb-2">{b.sub}</p>
              <span className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-xs font-medium text-slate-300">
                {b.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
