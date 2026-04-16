import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Kumar Katariya — AI/ML Engineer | GetyoTeam",
  description:
    "Meet Kumar Katariya — Top Rated Plus AI/ML Engineer on Upwork, Kaggle Expert, IBM Certified. 117+ projects, $400K+ earned. Based in Ahmedabad, India.",
};

const certifications = [
  { name: "Top Rated Plus — Upwork",  detail: "Top 3% globally · 117+ jobs · $400K+ earned",  icon: "🏆" },
  { name: "100% Job Success Score",   detail: "Perfect score across all 117+ projects",         icon: "✅" },
  { name: "Kaggle Notebooks Expert",  detail: "Rank 2,375 / 61,099 · Top 4% · 6 Bronze medals", icon: "🎯" },
  { name: "IBM Certified",            detail: "Machine Learning & Data Science Professional",    icon: "🎓" },
];

const skills = [
  { category: "AI & LLMs",         items: ["LangChain", "CrewAI", "Claude API", "OpenAI", "Groq", "Gemini"] },
  { category: "ML / DL",           items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "LightGBM"] },
  { category: "NLP & Vision",      items: ["Hugging Face", "BERT", "wav2vec2", "OpenCV", "YOLO"] },
  { category: "Data",              items: ["Pandas", "NumPy", "Plotly", "SQL", "Jupyter"] },
  { category: "Backend & Cloud",   items: ["FastAPI", "Flask", "Docker", "AWS", "Render", "Vercel"] },
  { category: "Mobile",            items: ["Swift", "Kotlin", "iOS", "Android"] },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />

        {/* Intro */}
        <div className="mt-10 mb-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">About Me</p>
            <h1 className="section-heading text-white mb-6">
              Kumar Katariya<br /><span className="gradient-text">AI/ML Engineer</span>
            </h1>
            <p className="text-slate-400 leading-relaxed mb-4 text-base sm:text-lg">
              I build production-grade AI systems that solve real business problems. Based in Ahmedabad,
              India, I work with clients globally — from early-stage startups to enterprise teams — helping
              them move from AI idea to deployed product.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              My focus is the full AI/ML stack: architecting RAG pipelines and multi-agent systems,
              training deep learning models, deploying scalable APIs, and building the dashboards that
              make insights actionable. I care deeply about code quality, explainability, and shipping
              things that actually work in production — not just in notebooks.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Outside client work, I compete on Kaggle (Top 4% globally, Notebooks Expert), contribute
              open-source ML projects, and write about AI on this blog. I believe the best AI engineers
              are also strong communicators — I translate technical complexity into language that helps
              non-technical stakeholders make better decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-2.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm">
                Work with Me
              </Link>
              <a
                href="https://www.upwork.com/freelancers/kumardatascience"
                target="_blank" rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full font-semibold text-slate-300 border border-purple-800/40 hover:border-purple-500/60 hover:text-white transition-all text-sm"
              >
                Upwork Profile →
              </a>
            </div>
          </div>

          {/* Quick facts */}
          <div className="card-glass p-6 border border-purple-900/20 space-y-3">
            {[
              ["Location",      "Ahmedabad, India"],
              ["Projects",      "117+ completed"],
              ["Earned",        "$400K+ on Upwork"],
              ["Rate",          "$40/hr"],
              ["Availability",  "Open to projects"],
              ["Email",         "info@getyoteam.com"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm gap-4">
                <span className="text-slate-500 shrink-0">{k}</span>
                <span className="text-slate-200 font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-6">Credentials & Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="flex items-start gap-4 p-4 rounded-xl border border-purple-900/20 bg-white/[0.02] hover:border-purple-500/30 transition-all">
                <span className="text-3xl shrink-0">{c.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white">{c.name}</p>
                  <p className="text-xs text-slate-400">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.category} className="card-glass p-4 border border-purple-900/20">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl border border-purple-900/20 bg-white/[0.02]">
          <h2 className="text-xl font-bold text-white mb-2">Ready to build something together?</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            I&apos;m open to new AI/ML projects. Reach out and let&apos;s discuss what you&apos;re building.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm">
            Get in Touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
