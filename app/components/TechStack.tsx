const categories = [
  {
    icon: "🧠",
    label: "AI & LLM Frameworks",
    description: "For building agents, RAG pipelines, and custom LLM applications that go beyond chat demos.",
    items: ["LangChain", "LangGraph", "OpenAI", "Hugging Face", "LlamaIndex"],
  },
  {
    icon: "⚙️",
    label: "Automation & Workflows",
    description: "For connecting AI to business systems — CRMs, spreadsheets, email, internal tools — without brittle integration code.",
    items: ["n8n", "Zapier", "Make (Integromat)"],
  },
  {
    icon: "🗄️",
    label: "Data Infrastructure",
    description: "For storing and querying everything from transactional records to analytical warehouses feeding ML pipelines.",
    items: ["PostgreSQL", "MongoDB", "Snowflake", "Databricks"],
  },
  {
    icon: "🔍",
    label: "Vector Databases",
    description: "For semantic search, retrieval-augmented generation, and embeddings at any scale — from prototypes to billions of vectors.",
    items: ["Pinecone", "Weaviate", "FAISS", "Milvus"],
  },
  {
    icon: "🚀",
    label: "Deployment & APIs",
    description: "For shipping AI as production APIs, containerized services, and automated pipelines that recover from failure cleanly.",
    items: ["FastAPI", "Docker", "GitHub Actions", "Render", "Streamlit"],
  },
];

const colorClasses = [
  "border-purple-700/40 text-purple-300 bg-purple-900/15",
  "border-sky-700/40 text-sky-300 bg-sky-900/15",
  "border-violet-700/40 text-violet-300 bg-violet-900/15",
  "border-green-700/40 text-green-300 bg-green-900/15",
  "border-orange-700/40 text-orange-300 bg-orange-900/15",
];

export default function TechStack() {
  return (
    <section className="py-12 sm:py-16 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            Tools &amp; Technologies
          </p>
          <h2 className="section-heading text-white mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            The tools that run every system I ship — chosen because they hold up under real traffic, not because they look good in a demo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => {
            const colors = colorClasses[ci % colorClasses.length];
            return (
              <div key={cat.label} className="card-glass p-6 border border-purple-900/20 flex flex-col">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-2xl leading-none">{cat.icon}</span>
                  <h3 className="text-base font-bold text-white">{cat.label}</h3>
                </div>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
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
