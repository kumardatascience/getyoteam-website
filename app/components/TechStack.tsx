const categories = [
  {
    label: "AI / LLMs",
    items: ["LangChain", "Claude API", "OpenAI API", "Groq", "Google Gemini", "Hugging Face", "CrewAI"],
  },
  {
    label: "ML / DL Frameworks",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
  },
  {
    label: "Vector Databases",
    items: ["ChromaDB", "Pinecone", "FAISS", "Weaviate"],
  },
  {
    label: "Languages & Data",
    items: ["Python", "TypeScript", "SQL", "Pandas", "NumPy", "Jupyter"],
  },
  {
    label: "Backend & APIs",
    items: ["FastAPI", "Flask", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Frontend & Mobile",
    items: ["React", "Next.js", "Streamlit", "Swift", "Kotlin"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "AWS", "Render", "Vercel", "Git"],
  },
];

const colorClasses = [
  "border-purple-700/40 text-purple-300 bg-purple-900/15",
  "border-sky-700/40 text-sky-300 bg-sky-900/15",
  "border-violet-700/40 text-violet-300 bg-violet-900/15",
  "border-green-700/40 text-green-300 bg-green-900/15",
  "border-orange-700/40 text-orange-300 bg-orange-900/15",
  "border-pink-700/40 text-pink-300 bg-pink-900/15",
  "border-cyan-700/40 text-cyan-300 bg-cyan-900/15",
];

export default function TechStack() {
  return (
    <section className="py-12 sm:py-16 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Tools &amp; Technologies
          </p>
          <h2 className="section-heading text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
            Battle-tested tools across the full AI/ML engineering pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat, ci) => {
            const colors = colorClasses[ci % colorClasses.length];
            return (
              <div key={cat.label} className="card-glass p-5 border border-purple-900/20">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${colors}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
