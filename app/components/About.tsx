const highlights = [
  { num: "117+", label: "Projects Delivered" },
  { num: "$400K+", label: "Earned on Upwork" },
  { num: "100%",  label: "Job Success Score" },
  { num: "Top 3%", label: "Upwork Globally" },
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
              About Me
            </p>
            <h2 className="section-heading text-white mb-6">
              Turning AI Research<br />into <span className="gradient-text">Business Value</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5 text-base sm:text-lg">
              I&apos;m Kumar Katariya — an AI/ML Engineer building
              production-grade intelligent systems. Based in Ahmedabad, India, I work with clients
              globally to solve their hardest problems using the latest in AI, LLMs, and data science.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              As a <strong className="text-purple-300">Top Rated Plus freelancer</strong> on Upwork (Top 3% globally),
              I&apos;ve delivered 117+ projects across industries including healthcare, finance, e-commerce,
              and enterprise — maintaining a perfect 100% Job Success Score throughout.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              My expertise spans the full AI stack: from architecting multi-agent systems and RAG pipelines
              to training deep learning models and deploying them to production. I&apos;m also a Kaggle
              Notebooks Expert (Top 4% globally) and IBM Certified in Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-all shadow-lg shadow-purple-600/25 text-sm"
              >
                Start a Project
              </a>
              <a
                href="https://www.upwork.com/freelancers/kumardatascience"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full font-semibold text-slate-300 border border-purple-800/40 hover:border-purple-500/60 hover:text-white transition-all text-sm"
              >
                View Upwork Profile →
              </a>
            </div>
          </div>

          {/* Right — stats + detail */}
          <div className="space-y-6">
            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="card-glass p-5 border border-purple-900/20 text-center"
                >
                  <p className="text-3xl font-extrabold gradient-text mb-1">{h.num}</p>
                  <p className="text-xs text-slate-400 font-medium">{h.label}</p>
                </div>
              ))}
            </div>

            {/* Detail card */}
            <div className="card-glass p-6 border border-purple-900/20 space-y-3">
              {[
                ["Location",   "Ahmedabad, India (GMT+5:30)"],
                ["Email",      "info@getyoteam.com"],
                ["Phone",      "+91-910 693 9053"],
                ["Rate",       "$40/hr · Project-based available"],
                ["Availability","Open to new projects"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-slate-500">{k}</span>
                  <span className="text-slate-200 font-medium text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
