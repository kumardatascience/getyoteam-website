import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Machine Learning Development Services | Predictive Analytics & AI Models | getyoteam",
  description:
    "Top-rated machine learning development company serving USA, Europe & Australia. Predictive analytics, ML model development, time series forecasting & AI deployment. 117+ projects · 100% JSS.",
  keywords: [
    "machine learning services",
    "machine learning development company",
    "predictive analytics solutions",
    "ML model development",
    "AI model development",
    "time series forecasting",
    "predictive modeling",
    "machine learning engineer",
    "custom ML solutions",
    "ML developer USA",
    "machine learning Australia",
    "scikit-learn developer",
    "XGBoost development",
    "AI model deployment",
  ],
  alternates: { canonical: "https://getyoteam.com/services/machine-learning" },
  openGraph: {
    title: "Machine Learning Development Services | Predictive Analytics & AI Models | getyoteam",
    description:
      "Top-rated machine learning development company serving USA, Europe & Australia. Predictive analytics, ML model development & time series forecasting. 117+ projects.",
    url: "https://getyoteam.com/services/machine-learning",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "Machine Learning Development Services — getyoteam",
      },
    ],
  },
};

const useCases = [
  {
    icon: "🚗",
    title: "Price Optimization & Prediction",
    desc: "Built regression models to predict used car prices using historical data — helping businesses optimize pricing strategy and improve revenue with high-accuracy predictive analytics.",
  },
  {
    icon: "💹",
    title: "Financial Behavior Analysis",
    desc: "Analyzed trader behavior patterns to surface actionable insights — delivering ML-powered decision support for fintech analytics and financial risk management systems.",
  },
  {
    icon: "🏥",
    title: "Healthcare AI & Medical Diagnosis",
    desc: "Developed deep learning models to detect pneumonia from chest X-rays — improving diagnostic support systems with image classification achieving clinical-grade accuracy.",
  },
  {
    icon: "🖼️",
    title: "Image Classification Systems",
    desc: "Built CNN-based image classification models applicable to quality inspection, product categorization, and visual search — scalable to millions of images.",
  },
  {
    icon: "📉",
    title: "Customer Churn Prediction",
    desc: "End-to-end churn models using XGBoost and LightGBM — enabling businesses to identify at-risk customers before they leave and take targeted retention action.",
  },
  {
    icon: "🔍",
    title: "Anomaly & Fraud Detection",
    desc: "Real-time anomaly detection pipelines for financial transactions and operational data — flagging outliers with low false-positive rates using ensemble ML models.",
  },
  {
    icon: "📦",
    title: "Demand Forecasting",
    desc: "Time series forecasting models (Prophet, LSTM, XGBoost) for inventory optimization and supply chain planning — reducing stockouts and overstock costs.",
  },
  {
    icon: "🎯",
    title: "Lead Scoring & Conversion",
    desc: "ML pipelines that score inbound leads by conversion probability — helping sales teams prioritize effort and increase close rates with data-driven ranking.",
  },
];

const industries = [
  { icon: "💰", name: "Finance",     desc: "Risk models, fraud detection, portfolio analytics" },
  { icon: "🏥", name: "Healthcare",  desc: "Diagnostic AI, patient risk scoring, operations" },
  { icon: "🛒", name: "E-commerce",  desc: "Recommendations, price optimization, churn" },
  { icon: "🏭", name: "Manufacturing", desc: "Predictive maintenance, quality control, demand" },
  { icon: "🚗", name: "Automotive",  desc: "Price prediction, demand forecasting, telematics" },
  { icon: "🎓", name: "EdTech",      desc: "Learning analytics, engagement scoring, outcomes" },
];

const process = [
  {
    step: "01",
    title: "Data Audit & Problem Framing",
    desc: "Before writing a single line of model code, I audit your data: volume, quality, feature coverage, and label availability. I then frame the ML problem precisely — classification, regression, ranking, or anomaly detection — so the right approach is chosen from the start.",
  },
  {
    step: "02",
    title: "Feature Engineering & EDA",
    desc: "Raw data rarely makes good features. I run deep exploratory analysis, identify signal vs noise, engineer domain-relevant features, and handle missing data, class imbalance, and leakage — the unglamorous work that determines model quality.",
  },
  {
    step: "03",
    title: "Model Selection, Training & Tuning",
    desc: "I benchmark multiple algorithms (XGBoost, LightGBM, CatBoost, ensembles) with rigorous cross-validation. Hyperparameter tuning via Optuna or Bayesian search extracts the final performance gain. No single-model guessing — systematic comparison drives the choice.",
  },
  {
    step: "04",
    title: "Interpretability & Validation",
    desc: "Business stakeholders need to trust the model. I generate SHAP explanations for feature importance, validate against holdout data, and stress-test for distribution shift and edge cases — so the model is defensible, not a black box.",
  },
  {
    step: "05",
    title: "Deployment, Monitoring & Iteration",
    desc: "I deploy models via FastAPI or cloud endpoints with input validation, logging, and drift monitoring. Post-launch, I track prediction quality and retrain on new data as distributions shift — because a model that degrades silently is worse than no model.",
  },
];

const techStack = [
  { name: "XGBoost",      color: "border-violet-700/40 text-violet-300 bg-violet-900/15" },
  { name: "LightGBM",     color: "border-purple-700/40 text-purple-300 bg-purple-900/15" },
  { name: "CatBoost",     color: "border-indigo-700/40 text-indigo-300 bg-indigo-900/15" },
  { name: "scikit-learn", color: "border-blue-700/40 text-blue-300 bg-blue-900/15" },
  { name: "PyTorch",      color: "border-orange-700/40 text-orange-300 bg-orange-900/15" },
  { name: "TensorFlow",   color: "border-yellow-700/40 text-yellow-300 bg-yellow-900/15" },
  { name: "SHAP",         color: "border-green-700/40 text-green-300 bg-green-900/15" },
  { name: "Optuna",       color: "border-teal-700/40 text-teal-300 bg-teal-900/15" },
  { name: "Pandas",       color: "border-sky-700/40 text-sky-300 bg-sky-900/15" },
  { name: "Python",       color: "border-emerald-700/40 text-emerald-300 bg-emerald-900/15" },
  { name: "FastAPI",      color: "border-cyan-700/40 text-cyan-300 bg-cyan-900/15" },
  { name: "Docker",       color: "border-red-700/40 text-red-300 bg-red-900/15" },
];

const faqs = [
  {
    q: "What is machine learning and how can it benefit my business?",
    a: "Machine learning is a branch of AI where algorithms learn patterns from historical data to make predictions or decisions on new data — without being explicitly programmed. For businesses, this means automating decisions (fraud detection, lead scoring), forecasting outcomes (demand, churn, prices), and surfacing insights that manual analysis misses. The benefit is measurable: higher accuracy, faster decisions, and scalable intelligence built on your own data.",
  },
  {
    q: "How long does it take to build a machine learning model?",
    a: "A proof-of-concept model for a well-defined problem with clean data can be ready in 3–7 days. A production-grade ML system — with feature pipelines, cross-validation, hyperparameter tuning, SHAP explanations, and API deployment — typically takes 2–6 weeks depending on data complexity, integration requirements, and the number of models benchmarked.",
  },
  {
    q: "How much does machine learning development cost?",
    a: "Cost depends on data complexity, project scope, and deployment requirements. A focused predictive model (e.g., churn prediction on clean tabular data) typically ranges from $1,500–$5,000. Full end-to-end ML systems with data pipelines, model serving, monitoring, and retraining workflows range from $5,000–$20,000+. I provide a detailed scope and fixed-price quote after a discovery call — no vague retainers.",
  },
  {
    q: "What industries use machine learning most effectively?",
    a: "Machine learning delivers the highest ROI in data-rich industries: finance (fraud detection, credit scoring, trading signals), healthcare (diagnostic AI, patient risk scoring), e-commerce (price optimization, recommendations, churn), manufacturing (predictive maintenance, quality control), and SaaS (lead scoring, usage analytics, churn prediction). Virtually any industry with historical transaction or behavioral data can benefit.",
  },
  {
    q: "What tools and frameworks do you use for ML development?",
    a: "I use Python as the primary language, with scikit-learn for baseline models, XGBoost and LightGBM for tabular data (the best-performing algorithms on most structured datasets), PyTorch and TensorFlow for deep learning, SHAP for model explainability, Optuna for hyperparameter tuning, and FastAPI + Docker for deployment. The stack is chosen for your use case — not forced.",
  },
  {
    q: "What is the difference between machine learning and deep learning?",
    a: "Machine learning (ML) covers a broad family of algorithms — decision trees, gradient boosting, SVMs, linear models — that learn patterns from structured data. Deep learning is a subset of ML using multi-layer neural networks, best suited for unstructured data like images, text, and audio. For most tabular business data (sales, transactions, user behavior), gradient boosting ML outperforms deep learning and is far more interpretable.",
  },
];

const relatedServices = [
  { slug: "ai-agents",     title: "AI Agent Development",       icon: "🤖" },
  { slug: "nlp-chatbots",  title: "RAG & LLM Applications",     icon: "📄" },
  { slug: "data-science",  title: "Data Science Consulting",     icon: "📊" },
];

export default function MachineLearningPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://getyoteam.com/services" },
      { "@type": "ListItem", position: 3, name: "Machine Learning Services", item: "https://getyoteam.com/services/machine-learning" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Machine Learning Development Services",
    description:
      "Custom machine learning model development, predictive analytics, and AI model deployment. Serving businesses in USA, Europe, and Australia with XGBoost, LightGBM, and production-grade ML pipelines.",
    provider: { "@type": "Person", name: "Kumar Katariya", url: "https://getyoteam.com" },
    areaServed: ["United States", "Australia", "United Kingdom", "Europe", "Worldwide"],
    serviceType: "Machine Learning Development",
    offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="pt-24 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-700/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Machine Learning Services" },
          ]} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h1 className="section-heading text-white mb-4">
                Machine Learning <span className="gradient-text">Development Services</span>
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-900/20 text-xs font-medium text-violet-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Serving clients in USA · Europe · Australia
              </div>

              <p className="text-slate-400 leading-relaxed mb-4">
                Build predictive analytics systems and AI models that turn your historical data
                into competitive advantage. Our machine learning services cover everything from
                ML model development and time series forecasting to production AI model
                deployment — grounded in your real business data, not synthetic demos.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                As a machine learning development company, I build scalable predictive analytics
                systems, recommendation engines, and time series forecasting models for
                real-world business use cases. If you&apos;re looking to hire a machine learning
                expert to build predictive models or production-ready AI systems, I can help
                you design and deploy solutions tailored to your data.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                These ML systems integrate naturally with{" "}
                <Link href="/services/ai-agents" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                  AI agents
                </Link>{" "}
                for autonomous decision-making,{" "}
                <Link href="/services/nlp-chatbots" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                  RAG &amp; LLM applications
                </Link>{" "}
                for intelligent knowledge retrieval, or{" "}
                <Link href="/services/data-science" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                  data science solutions
                </Link>{" "}
                for end-to-end analytical pipelines.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
                Unlike one-off model notebooks, every delivery is production-ready — with
                feature pipelines, cross-validation, SHAP explanations, and API deployment
                built in from day one.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["XGBoost", "LightGBM", "scikit-learn", "SHAP"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-violet-900/30 text-violet-300 border border-violet-800/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm"
                >
                  Start My ML Project →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-violet-800/40 hover:border-violet-500/60 hover:text-white transition-all text-sm"
                >
                  See ML Examples
                </Link>
              </div>
            </div>

            {/* Right: ML pipeline diagram */}
            <div className="card-glass p-6 border border-violet-900/30">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-5">
                ML Development Pipeline
              </p>

              {/* Raw data */}
              <div className="flex justify-center mb-3">
                <div className="flex flex-wrap justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 max-w-xs">
                  {["CSV / SQL", "APIs", "Time Series", "Logs"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-violet-700/50" />
              </div>

              {/* Feature engineering */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Feature Engineering", color: "bg-violet-900/30 border-violet-700/40 text-violet-300" },
                  { label: "EDA & Cleaning",       color: "bg-purple-900/30 border-purple-700/40 text-purple-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-violet-700/50" />
              </div>

              {/* Model training */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-900/40 border border-violet-600/40 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-900/30">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Model Training &amp; Tuning
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>

              {/* Validation */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Cross-Validation", color: "bg-slate-800/60 border-slate-700/50 text-slate-300" },
                  { label: "SHAP Explainability", color: "bg-violet-900/30 border-violet-700/40 text-violet-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>

              {/* Deployment */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/40 border border-purple-600/40 text-sm font-semibold text-purple-200">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  API Deployment &amp; Monitoring
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-green-700/50" />
              </div>

              {/* Output */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-900/20 border border-green-700/30 text-sm text-green-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  High-Accuracy Predictions in Production
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "117+",  label: "Projects Delivered" },
              { value: "100%",  label: "Job Success Score" },
              { value: "93%+",  label: "Model Accuracy (AUC)" },
              { value: "24h",   label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-violet-900/20 bg-white/[0.02]">
                <p className="text-2xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS MACHINE LEARNING ─────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Understanding ML
            </p>
            <h2 className="section-heading text-white mb-4">
              What Is <span className="gradient-text">Machine Learning Development?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Machine learning algorithms learn patterns from your historical data and apply
              them to make accurate predictions on new data — without explicit programming.
              The result is automated decisions, surfaced insights, and optimized outcomes at scale.
            </p>
            <div className="p-5 rounded-2xl bg-violet-900/15 border border-violet-700/30 text-left max-w-2xl mx-auto">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-violet-300">New to ML?</span>{" "}
                Think of machine learning as a very experienced analyst who has studied thousands
                of past outcomes and can now instantly predict the next one. A churn model has
                studied every customer who left — and flags the next ones before they go.
                Many businesses pair ML predictions with{" "}
                <Link href="/services/ai-agents" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                  AI agents
                </Link>{" "}
                to automate the action triggered by those predictions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                label: "Rules-Based System",
                points: ["Written by hand", "Breaks on edge cases", "Cannot learn from data", "Requires constant updates"],
                accent: "border-slate-700/40",
                bad: true,
              },
              {
                icon: "📈",
                label: "Machine Learning Model",
                points: ["Learns patterns from data", "Generalises to new cases", "Improves with more data", "Interpretable with SHAP"],
                accent: "border-violet-700/40",
                bad: false,
              },
              {
                icon: "🤖",
                label: "ML + Automated Action",
                points: ["Predicts and acts autonomously", "Triggers workflows on signals", "Closes the loop end-to-end", "Scales without human review"],
                accent: "border-purple-600/60",
                bad: false,
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`card-glass p-6 border ${card.accent} ${card.accent === "border-purple-600/60" ? "shadow-lg shadow-purple-900/20" : ""}`}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-white mb-4">{card.label}</h3>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`mt-0.5 shrink-0 ${card.bad ? "text-slate-600" : "text-violet-400"}`}>
                        {card.bad ? "○" : "✓"}
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN DO YOU NEED ML ───────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Is This Right for You?
            </p>
            <h2 className="section-heading text-white mb-4">
              When Do You Need <span className="gradient-text">Machine Learning?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Machine learning delivers the highest value when you have historical data,
              a repeatable decision to automate, or a pattern too complex for manual rules.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🔮", title: "You need to predict future outcomes", desc: "Sales forecasting, demand prediction, churn risk scoring — if a future outcome matters to your business and you have historical data, ML can model it with high accuracy." },
              { icon: "⚙️", title: "You want to automate decision making", desc: "Manual decisions that repeat hundreds of times daily — loan approvals, lead routing, fraud flags — are ideal ML targets. Replace rule lists with models that learn and improve." },
              { icon: "📊", title: "You have large datasets with hidden patterns", desc: "When data volume exceeds what humans can analyse, ML finds the signal. Behavioral patterns, micro-segments, and leading indicators invisible to manual review become actionable." },
              { icon: "📈", title: "You need to improve business forecasting", desc: "Inaccurate inventory, revenue, or staffing forecasts cost money. Time series forecasting models learn seasonal patterns, trends, and external drivers that spreadsheets miss." },
              { icon: "🚨", title: "You need real-time anomaly detection", desc: "Fraud, equipment failure, and security breaches happen fast. ML anomaly detection flags outliers in milliseconds — before damage compounds." },
              { icon: "🔄", title: "Your rules keep breaking on new data", desc: "If your current decision system requires constant manual updates every time the business changes, a learned model is more robust — it adapts to new patterns with retraining." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-violet-900/20 flex gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Applications
            </p>
            <h2 className="section-heading text-white mb-4">
              What ML Systems <span className="gradient-text">Can Build for You</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Any business with historical data and a repeatable decision to improve is a
              strong candidate for a machine learning solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-glass p-5 border border-violet-900/20 group">
                <div className="mb-3 p-2.5 rounded-xl bg-violet-900/20 border border-violet-800/30 w-fit text-violet-400 group-hover:text-purple-400 transition-colors text-xl">
                  {uc.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{uc.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading text-white mb-4">
              Industries <span className="gradient-text">Served</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Machine learning delivers the highest ROI in data-rich industries where
              prediction accuracy directly impacts revenue or risk.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-glass p-5 border border-violet-900/20 text-center group hover:border-violet-500/30 transition-all"
              >
                <span className="text-3xl block mb-2">{ind.icon}</span>
                <h3 className="font-semibold text-white text-sm mb-1">{ind.name}</h3>
                <p className="text-xs text-slate-500">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              How We Build
            </p>
            <h2 className="section-heading text-white mb-4">
              The ML Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every machine learning project I deliver follows the same rigorous pipeline —
              from raw data to production-deployed, high-accuracy predictive models.
            </p>
          </div>

          <div className="space-y-0">
            {process.map((step, i) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {step.step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-violet-700/50 to-transparent my-1" style={{ minHeight: "2.5rem" }} />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ──────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Why getyoteam
            </p>
            <h2 className="section-heading text-white mb-4">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Businesses in the USA, Europe, and Australia choose getyoteam because
              production ML is harder than a notebook demo — and we get it right the first time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🎯",
                title: "Rigorous Model Validation",
                desc: "Every model ships with cross-validation, holdout testing, and SHAP explanations. You know exactly why each prediction is made — no black boxes in production.",
              },
              {
                icon: "🏆",
                title: "Top Rated Plus on Upwork",
                desc: "Independently verified Top 3% globally — 100% Job Success Score across 117+ projects. Real client outcomes across the USA, UK, and Australia.",
              },
              {
                icon: "🔒",
                title: "Production-First Delivery",
                desc: "Feature pipelines, API deployment, drift monitoring, and retraining hooks are not optional add-ons. Every system ships ready for real traffic and scheduled retraining.",
              },
              {
                icon: "⚡",
                title: "Fast, Predictable Delivery",
                desc: "Proof-of-concept models in 3–7 days. Full production ML systems in 2–6 weeks — with a milestone plan, not an open-ended retainer.",
              },
              {
                icon: "🤝",
                title: "Direct Access, No Middlemen",
                desc: "You work directly with Kumar Katariya — a Kaggle Expert and IBM-certified ML engineer. I design, build, and validate every model personally.",
              },
              {
                icon: "📞",
                title: "30-Day Post-Launch Support",
                desc: "Distribution shifts and edge cases surface in production that testing never catches. I stay engaged for 30 days to monitor, fix, and refine after launch.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-6 border border-violet-900/20">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Technology
            </p>
            <h2 className="section-heading text-white mb-4">
              Tech Stack for <span className="gradient-text">ML Development</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Battle-tested tools chosen for model performance, interpretability, and
              production scalability — not trend-chasing.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t.name} className={`px-4 py-2 rounded-full border text-sm font-medium ${t.color}`}>
                {t.name}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🧮", title: "Modelling", desc: "XGBoost, LightGBM, CatBoost, and scikit-learn ensembles — tuned with Optuna for optimized performance on your data." },
              { icon: "🔍", title: "Explainability", desc: "SHAP values for global and local feature importance — every prediction is traceable and stakeholder-presentable." },
              { icon: "🚀", title: "Deployment", desc: "FastAPI + Docker on any cloud or on-premise — with input validation, logging, and automated retraining pipelines." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-violet-900/20 text-center">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ───────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Proven Results
            </p>
            <h2 className="section-heading text-white mb-4">
              What Clients <span className="gradient-text">Achieved</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {/* Main case study */}
              <div className="card-glass p-6 border border-violet-900/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-violet-900/30 text-violet-300 border border-violet-800/30">ML System</span>
                  <span className="text-xs text-slate-500">Case Study</span>
                </div>
                <h3 className="font-bold text-white mb-4">Bankruptcy Prediction with Ensemble ML</h3>
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">The Problem</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      A fintech firm needed to assess company-level financial distress risk across
                      thousands of candidates. Manual analysis of 94 financial ratios per company
                      was infeasible. Existing rule-based scoring missed non-linear risk patterns
                      and produced too many false negatives.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-1">The Solution</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Built an ensemble stacking model combining XGBoost, LightGBM, and logistic
                      regression — trained on 6,819 companies with 94 financial features.
                      SHAP explanations made every risk flag interpretable. Deployed via FastAPI
                      with a batch-scoring endpoint for portfolio-level screening. Pairs naturally
                      with{" "}
                      <Link href="/services/data-science" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                        data science pipelines
                      </Link>{" "}
                      for automated report generation.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">The Results</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { value: "93.67%", label: "AUC Score" },
                    { value: "94",     label: "Features engineered" },
                    { value: "6,819",  label: "Companies scored" },
                    { value: "3×",     label: "Faster than manual" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-violet-900/20 border border-violet-800/20 p-3 text-center">
                      <p className="text-xl font-extrabold gradient-text">{m.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/portfolio/bankruptcy-prediction" className="text-sm text-violet-400 hover:text-violet-300 transition-colors">
                  View full case study →
                </Link>
              </div>

              {/* Mini case */}
              <div className="card-glass p-5 border border-purple-900/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30">Healthcare ML</span>
                  <span className="text-xs text-slate-500">Mini Case</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">Pneumonia Detection from Chest X-Rays</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Built a deep learning image classification model to detect pneumonia from
                  chest X-rays — achieving high accuracy on a clinical dataset. The model
                  provides diagnostic support, reducing manual review time for radiologists.
                  Pairs with{" "}
                  <Link href="/services/nlp-chatbots" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
                    RAG &amp; LLM applications
                  </Link>{" "}
                  for automated clinical report Q&amp;A.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col gap-4">
              {[
                {
                  quote: "Kumar acted with utmost professionalism and skill, working tirelessly to complete the project according to my standards. Highly recommended for any AI or ML project.",
                  name: "Erika Shapiro",
                  role: "CEO, Study Song LLC",
                  initials: "ES",
                  color: "from-purple-600 to-violet-600",
                },
                {
                  quote: "Kumar and his team did a wonderful job. I now consider them an extension of my team. Their expertise in AI and attention to detail is outstanding.",
                  name: "Zhanna Shekhtmeyster",
                  role: "Founder, ABC Observe",
                  initials: "ZS",
                  color: "from-violet-600 to-blue-600",
                },
                {
                  quote: "Excellent work from Kumar and Team. The AI solution they built has transformed our workflow. Will definitely hire again and again.",
                  name: "Simon Islam",
                  role: "CEO, Fair Pattern",
                  initials: "SI",
                  color: "from-orange-600 to-amber-600",
                },
              ].map((t) => (
                <div key={t.name} className="card-glass p-5 border border-violet-900/20">
                  <div className="flex mb-2 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ML VS DEEP LEARNING VS AI ─────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Understand Your Options
            </p>
            <h2 className="section-heading text-white mb-4">
              Machine Learning vs Deep Learning <span className="gradient-text">vs AI</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-4">
              Understanding machine learning vs deep learning vs AI helps you choose the right
              approach for your use case. AI is the broad field; ML is a subset that learns
              from data; deep learning is a subset of ML using neural networks for unstructured
              inputs. When to use machine learning depends on your data type, volume, and
              interpretability requirements.
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              For most structured business data, gradient boosting ML outperforms deep learning
              and is far more interpretable. Here&apos;s the honest comparison.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "Traditional AI / Rules",
                icon: "📋",
                color: "border-slate-700/40",
                best: false,
                pros: ["Fully transparent logic", "No training data needed", "Deterministic output"],
                cons: ["Breaks on edge cases", "Cannot learn from data", "Manual updates required"],
              },
              {
                label: "Machine Learning",
                icon: "📈",
                color: "border-violet-600/60",
                best: true,
                pros: ["Learns from structured data", "SHAP-explainable predictions", "Fast to train and retrain", "Optimized performance on tabular data"],
                cons: [],
              },
              {
                label: "Deep Learning",
                icon: "🧠",
                color: "border-purple-700/40",
                best: false,
                pros: ["Best for images, text, audio", "State-of-the-art accuracy", "Learns complex representations"],
                cons: ["Needs large datasets", "Black box without extra tooling", "High compute cost"],
              },
            ].map((opt) => (
              <div key={opt.label} className={`card-glass p-6 border ${opt.color} ${opt.best ? "shadow-lg shadow-violet-900/20" : ""}`}>
                <div className="text-3xl mb-3">{opt.icon}</div>
                <h3 className="font-bold text-white mb-2">{opt.label}</h3>
                {opt.best && (
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-violet-900/30 text-violet-300 border border-violet-800/30 mb-3">
                    Best for structured data
                  </span>
                )}
                <ul className="space-y-1.5 mb-3">
                  {opt.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-green-400 mt-0.5 shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
                {opt.cons.length > 0 && (
                  <ul className="space-y-1.5 mt-3 pt-3 border-t border-slate-700/30">
                    {opt.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-slate-600 mt-0.5 shrink-0">✗</span>{c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">
            Not sure which approach fits your use case?{" "}
            <Link href="/contact" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
              Book a free consultation →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Common Questions
            </p>
            <h2 className="section-heading text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-glass border border-violet-900/20 group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm font-semibold text-white leading-snug">{faq.q}</h3>
                  <svg
                    viewBox="0 0 24 24" fill="none"
                    className="w-4 h-4 text-violet-400 shrink-0 transition-transform group-open:rotate-180"
                    stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ──────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Commonly Paired With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="card-glass p-5 border border-violet-900/20 flex items-center gap-4 group"
              >
                <span className="text-2xl">{rs.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {rs.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">View service →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-violet-700/30">
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute inset-0 bg-[#07070f]/80" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139,92,246,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.8) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center px-8 py-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/20 text-xs font-medium text-green-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new ML projects
              </div>
              <h2 className="section-heading text-white mb-4">
                Turn Your Data Into<br />
                <span className="gradient-text">Predictive Intelligence</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-3 leading-relaxed">
                Describe the prediction problem you want to solve. I will respond within
                24 hours with a proposed ML architecture, timeline, and plain-English
                explanation — no commitment required.
              </p>
              <p className="text-xs text-slate-500 mb-8">
                Trusted by businesses in the USA, UK, Europe &amp; Australia · Top Rated Plus · 100% Job Success
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30 text-sm"
                >
                  Start My ML Project →
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-slate-300 border border-violet-700/40 hover:border-violet-500/60 hover:text-white transition-all text-sm"
                >
                  Book a Free Consultation
                </Link>
                <a
                  href="https://www.upwork.com/freelancers/aimlengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full font-semibold text-green-300 border border-green-800/40 hover:border-green-600/60 hover:text-green-200 transition-all text-sm"
                >
                  Hire on Upwork (Top Rated)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
