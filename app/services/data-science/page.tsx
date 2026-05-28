import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Data Science Consulting Services | Business Analytics & Decision Intelligence | getyoteam",
  description:
    "Top-rated data science consulting services serving USA, Europe & Australia. EDA, statistical modeling, KPI dashboards, A/B testing, and business analytics. 117+ projects · 100% JSS.",
  keywords: [
    "data science consulting services",
    "data science company",
    "business analytics services",
    "data analysis services",
    "exploratory data analysis",
    "statistical modeling services",
    "data visualization dashboards",
    "KPI dashboard development",
    "A/B testing analytics",
    "customer segmentation analysis",
    "business intelligence consulting",
    "data science engineer",
    "data science USA",
    "Python data analysis",
    "business data insights",
  ],
  alternates: { canonical: "https://getyoteam.com/services/data-science" },
  openGraph: {
    title: "Data Science Consulting Services | Business Analytics & Decision Intelligence | getyoteam",
    description:
      "Top-rated data science consulting services for USA, Europe & Australia. EDA, statistical modeling, KPI dashboards & business analytics. 117+ projects · 100% JSS.",
    url: "https://getyoteam.com/services/data-science",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "Data Science Consulting Services — getyoteam",
      },
    ],
  },
};

const useCases = [
  {
    icon: "📊",
    title: "KPI Dashboards & Reporting",
    desc: "Interactive executive dashboards that track key business metrics in real time — built in Tableau or Power BI with automated data refresh, stakeholder-ready layouts, and drill-down analysis.",
  },
  {
    icon: "👥",
    title: "Customer Segmentation Analysis",
    desc: "Statistical clustering and behavioral segmentation to identify high-value customer groups, churn-risk cohorts, and growth segments — giving marketing and product teams data-backed targeting.",
  },
  {
    icon: "🧪",
    title: "A/B Testing & Experimentation",
    desc: "Rigorous experiment design and statistical significance testing for product features, pricing, and campaigns — so decisions are driven by evidence, not gut feel or underpowered tests.",
  },
  {
    icon: "🔬",
    title: "Market Research Analytics",
    desc: "Survey analysis, competitive benchmarking, and market sizing — turning raw research data into structured insights and visualizations that inform positioning, pricing, and go-to-market strategy.",
  },
  {
    icon: "📉",
    title: "Cohort & Funnel Analysis",
    desc: "Cohort retention tracking and funnel drop-off analysis that pinpoints exactly where customers disengage — enabling product and growth teams to prioritize with precision.",
  },
  {
    icon: "📈",
    title: "Business Forecasting Support",
    desc: "Statistical forecasting models for revenue, demand, and resource planning — combining time series analysis with business context for projections stakeholders can trust and act on.",
  },
  {
    icon: "⚙️",
    title: "Data Pipeline Automation",
    desc: "Automated ETL pipelines that clean, transform, and load data from multiple sources into a single analysis-ready layer — eliminating manual reporting work and reducing data errors.",
  },
  {
    icon: "🎯",
    title: "Funnel Optimization & Growth Analytics",
    desc: "End-to-end analytics across acquisition, activation, retention, and revenue — surfacing the highest-leverage levers for growth based on your actual user behavior data.",
  },
];

const industries = [
  { icon: "💰", name: "Finance",     desc: "Risk analytics, portfolio reporting, fraud insights" },
  { icon: "🏥", name: "Healthcare",  desc: "Outcomes analysis, operational KPIs, patient cohorts" },
  { icon: "🛒", name: "E-commerce",  desc: "Funnel analytics, segmentation, basket analysis" },
  { icon: "💻", name: "SaaS",        desc: "Churn cohorts, usage analytics, product experimentation" },
  { icon: "📣", name: "Marketing",   desc: "Campaign analytics, attribution, A/B testing" },
  { icon: "🎓", name: "EdTech",      desc: "Learning analytics, engagement data, outcome tracking" },
];

const process = [
  {
    step: "01",
    title: "Data Understanding & Business Framing",
    desc: "Before touching the data, I align on the business question: what decision needs to be made, and what would change if you had the answer? I then audit available data sources for completeness, quality, and granularity — so the analysis is scoped to produce insight that actually drives action.",
  },
  {
    step: "02",
    title: "Data Cleaning & Exploration",
    desc: "Real-world data is messy. I handle missing values, duplicates, inconsistent formats, and outliers — then run thorough exploratory data analysis (EDA) to surface distributions, correlations, and anomalies. This is where most hidden problems — and most hidden opportunities — are found.",
  },
  {
    step: "03",
    title: "Statistical Analysis & Modeling",
    desc: "Depending on the business question, I apply the right statistical method: hypothesis testing, regression analysis, clustering, time series decomposition, or A/B test evaluation. Statistical rigor — confidence intervals, effect sizes, and power analysis — is built into every analysis, not bolted on.",
  },
  {
    step: "04",
    title: "Visualization & Insight Generation",
    desc: "Findings are translated into clear, stakeholder-ready visualizations — not raw charts. Every visual is designed to communicate one specific insight and support a specific decision. I use Matplotlib, Plotly, and Tableau/Power BI depending on the delivery format required.",
  },
  {
    step: "05",
    title: "Dashboarding & Automation",
    desc: "Where analysis needs to repeat, I automate it. Interactive dashboards replace static reports. Scheduled pipelines refresh data without manual intervention. The goal is to make ongoing data insight a system, not a one-time project — so the business continues getting value long after delivery.",
  },
];

const techStack = [
  { name: "Python",         color: "border-blue-700/40 text-blue-300 bg-blue-900/15" },
  { name: "Pandas",         color: "border-teal-700/40 text-teal-300 bg-teal-900/15" },
  { name: "NumPy",          color: "border-sky-700/40 text-sky-300 bg-sky-900/15" },
  { name: "SQL",            color: "border-emerald-700/40 text-emerald-300 bg-emerald-900/15" },
  { name: "Tableau",        color: "border-orange-700/40 text-orange-300 bg-orange-900/15" },
  { name: "Power BI",       color: "border-yellow-700/40 text-yellow-300 bg-yellow-900/15" },
  { name: "Matplotlib",     color: "border-brand/40 text-brand bg-brand/15" },
  { name: "Plotly",         color: "border-brand/40 text-brand bg-brand/15" },
  { name: "Jupyter",        color: "border-amber-700/40 text-amber-300 bg-amber-900/15" },
  { name: "SciPy / Statsmodels", color: "border-cyan-700/40 text-cyan-300 bg-cyan-900/15" },
  { name: "scikit-learn",   color: "border-green-700/40 text-green-300 bg-green-900/15" },
  { name: "Docker",         color: "border-red-700/40 text-red-300 bg-red-900/15" },
];

const faqs = [
  {
    q: "What is data science consulting and what does it deliver?",
    a: "Data science consulting translates raw business data into structured insights, statistical findings, and decision-ready outputs — dashboards, reports, segmentation models, and experiment results. Unlike software development, the deliverable is actionable intelligence: an answer to a specific business question, backed by rigorous analysis. Engagements range from one-off analytical projects (customer segmentation, A/B test evaluation) to ongoing data pipeline and dashboard work.",
  },
  {
    q: "How is data science different from machine learning?",
    a: "Data science focuses on understanding what has happened and why — through EDA, statistical modeling, hypothesis testing, and visualization. Machine learning focuses on predicting what will happen next — training models that score, classify, or forecast on new data. In practice they overlap: data science informs feature engineering, and ML models feed into dashboards. Many projects benefit from both. If your goal is insight and reporting, data science is the primary discipline; if your goal is automation and prediction, ML is.",
  },
  {
    q: "Do I need machine learning or data science for my use case?",
    a: "A simple rule: if you need to understand your data and communicate findings to stakeholders, that is data science. If you need to automate a decision at scale using those findings, that is machine learning. For example, understanding which customer segments churn the most is data science. Automatically scoring every new customer for churn risk in real time is ML. Many projects start with data science and evolve into ML once the patterns are understood.",
  },
  {
    q: "What tools and frameworks do you use for data science projects?",
    a: "Python is the primary language, with Pandas and NumPy for data manipulation, SciPy and Statsmodels for statistical analysis, Matplotlib and Plotly for visualisation, and scikit-learn for clustering and basic modelling. SQL for data extraction and transformation. Tableau or Power BI for interactive executive dashboards. Jupyter for exploratory analysis and documentation. The stack is matched to your workflow and delivery format — not standardized across all projects.",
  },
  {
    q: "Can you work with data already in our systems?",
    a: "Yes. I work with data in whatever state it is in — CSV exports, SQL databases, Google Sheets, data warehouses (BigQuery, Snowflake, Redshift), or API exports. Part of every engagement is a data audit: understanding what you have, its quality, and what cleaning or transformation is required before analysis begins. I can also build lightweight ETL pipelines to consolidate data from multiple sources into a single analysis-ready layer.",
  },
  {
    q: "How long does a data science project take?",
    a: "A focused analytical project — EDA, segmentation, or A/B test evaluation — typically takes 5–10 business days with clean, available data. A full dashboard build with automated data pipelines takes 2–4 weeks. Ongoing data science retainers covering multiple analyses per month are structured as monthly engagements. I provide a detailed scope and timeline after an initial discovery call where we review your data and define the deliverables.",
  },
];

const relatedServices = [
  { slug: "machine-learning", title: "Machine Learning Solutions", icon: "📈" },
  { slug: "ai-agents",        title: "AI Agent Development",       icon: "🤖" },
  { slug: "nlp-chatbots",     title: "RAG & LLM Applications",     icon: "💬" },
];

export default function DataSciencePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://getyoteam.com/services" },
      { "@type": "ListItem", position: 3, name: "Data Science Consulting Services", item: "https://getyoteam.com/services/data-science" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data Science Consulting Services",
    description:
      "Business analytics, EDA, statistical modeling, KPI dashboards, A/B testing, and data-driven decision systems. Serving businesses in USA, Europe, and Australia.",
    provider: { "@type": "Person", name: "Kumar Katariya", url: "https://getyoteam.com" },
    areaServed: ["United States", "Australia", "United Kingdom", "Europe", "Worldwide"],
    serviceType: "Data Science Consulting",
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-700/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(20,184,166,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,0.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Data Science Consulting" },
          ]} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <h1 className="section-heading text-white mb-2">
                Data Science <span className="gradient-text">Consulting Services</span>
              </h1>
              <p className="text-lg font-medium text-slate-300 mb-4">
                Business Intelligence, Analytics &amp; Data-Driven Decision Systems
              </p>

              <p className="text-slate-400 leading-relaxed mb-4">
                Turn raw data into decisions that move the business forward. Our data science
                consulting services cover the full analytical stack — exploratory data analysis,
                statistical modeling, KPI dashboards, and business intelligence reporting —
                all built for stakeholder-ready output, not academic exercises.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                As a specialist data science company, I help startups and enterprises extract
                measurable insight from messy, underutilized data. Whether you need customer
                segmentation, A/B testing infrastructure, or automated reporting pipelines, every
                engagement produces business analytics that reduce guesswork and support better
                decisions. These systems integrate naturally with{" "}
                <Link href="/services/machine-learning" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  machine learning solutions
                </Link>{" "}
                for predictive intelligence,{" "}
                <Link href="/services/ai-agents" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  AI agents
                </Link>{" "}
                for autonomous decision-making, or{" "}
                <Link href="/services/nlp-chatbots" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  RAG &amp; LLM applications
                </Link>{" "}
                for natural-language access to your data.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 italic">
                Built for decisions — not just charts. Every delivery includes cleaned data,
                documented methodology, visualizations, and actionable recommendations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Python", "Pandas", "SQL", "Tableau"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-teal-900/30 text-teal-300 border border-teal-800/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full font-semibold btn-accent shadow-lg shadow-[#b6ff3c]/30 text-sm whitespace-nowrap"
                >
                  Start My Data Science Project →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-teal-800/40 hover:border-teal-500/60 hover:text-white transition-all text-sm whitespace-nowrap"
                >
                  See Data Science Examples
                </Link>
              </div>
            </div>

            {/* Right: data science pipeline diagram */}
            <div className="card-glass p-6 border border-teal-900/30">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-5">
                Data Science Pipeline
              </p>

              {/* Raw data inputs */}
              <div className="flex justify-center mb-3">
                <div className="flex flex-wrap justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 max-w-xs">
                  {["CSV / SQL", "APIs", "Spreadsheets", "Databases"].map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-teal-700/50" />
              </div>

              {/* Cleaning + EDA */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Data Cleaning & Preprocessing", color: "bg-teal-900/30 border-teal-700/40 text-teal-300" },
                  { label: "EDA & Exploration",              color: "bg-emerald-900/30 border-emerald-700/40 text-emerald-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-teal-700/50" />
              </div>

              {/* Statistical modeling */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-900/40 border border-teal-600/40 text-sm font-semibold text-teal-200 shadow-lg shadow-teal-900/30">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Statistical Modeling &amp; Analysis
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-5 bg-slate-700/50" />
              </div>

              {/* Visualization + Insights */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[
                  { label: "Visualization & Dashboards", color: "bg-slate-800/60 border-slate-700/50 text-slate-300" },
                  { label: "Insights & Decision Support",  color: "bg-teal-900/30 border-teal-700/40 text-teal-300" },
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
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-900/40 border border-emerald-600/40 text-sm font-semibold text-emerald-200">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Deployment &amp; Reporting Automation
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
                  Stakeholder-Ready Business Decisions
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "117+", label: "Projects Delivered" },
              { value: "100%", label: "Job Success Score" },
              { value: "90%+", label: "Insight-to-Decision Rate" },
              { value: "24h",  label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-teal-900/20 bg-white/[0.02]">
                <p className="text-2xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS DATA SCIENCE ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Understanding Data Science
            </p>
            <h2 className="section-heading text-white mb-4">
              What Is <span className="gradient-text">Data Science Consulting?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Data science consulting extracts structured insight from raw data using statistical
              thinking, exploratory analysis, and visualization — translating numbers into decisions.
              Where BI tools show you what happened, data science tells you why it happened and
              what to do about it.
            </p>
            <div className="p-5 rounded-2xl bg-teal-900/15 border border-teal-700/30 text-left max-w-2xl mx-auto">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-teal-300">New to data science?</span>{" "}
                Think of a data scientist as a business analyst with statistical superpowers.
                Instead of manually reviewing spreadsheets to spot trends, they write code that
                processes thousands of rows in seconds, applies statistical tests to separate
                signal from noise, and visualizes findings in ways executives can act on. Many
                businesses pair data science with{" "}
                <Link href="/services/machine-learning" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                  machine learning solutions
                </Link>{" "}
                to automate the decisions that data science surfaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                label: "Raw Data",
                points: ["Unstructured, uncleaned", "No actionable context", "Cannot inform decisions", "Siloed across systems"],
                accent: "border-slate-700/40",
                bad: true,
              },
              {
                icon: "📈",
                label: "Data Analysis",
                points: ["Descriptive summaries", "Basic charts and reports", "Tells you what happened", "Limited statistical depth"],
                accent: "border-teal-700/40",
                bad: false,
              },
              {
                icon: "🧠",
                label: "Data Science Decision Systems",
                points: ["Statistical rigor and hypothesis testing", "Causal reasoning and A/B experimentation", "Predictive insight, not just description", "Automated dashboards and reporting pipelines"],
                accent: "border-emerald-600/60",
                bad: false,
              },
            ].map((card) => (
              <div
                key={card.label}
                className={`card-glass p-6 border ${card.accent} ${card.accent === "border-emerald-600/60" ? "shadow-lg shadow-emerald-900/20" : ""}`}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-white mb-4">{card.label}</h3>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className={`mt-0.5 shrink-0 ${card.bad ? "text-slate-600" : "text-teal-400"}`}>
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

      {/* ── WHEN DO YOU NEED DATA SCIENCE ───────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Is This Right for You?
            </p>
            <h2 className="section-heading text-white mb-4">
              When Do You Need <span className="gradient-text">Data Science?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Data science consulting delivers the highest ROI when data exists but decisions
              are still being made on instinct, outdated reports, or incomplete analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "💡", title: "You need business insights from data", desc: "If your team collects data but decisions are still made on instinct, a data science engagement translates that raw data into structured findings — segmentations, trend analysis, and statistical summaries that directly inform strategy." },
              { icon: "📊", title: "You have dashboards but no decisions", desc: "Charts that no one acts on are a symptom of analysis without framing. Data science starts with the decision to be made, then builds the analysis backward — ensuring every output is tied to a specific business action." },
              { icon: "👥", title: "You want to understand customer behavior", desc: "Customer segmentation, cohort analysis, and funnel analytics reveal which users convert, which churn, and which segments are worth investing in — replacing assumptions with statistical evidence." },
              { icon: "🧪", title: "You need A/B testing & experimentation", desc: "Underpowered tests, p-hacking, and incorrect statistical methods are common in self-run experiments. A structured A/B testing framework with proper power analysis and significance testing ensures your experiment results are actually reliable." },
              { icon: "🗃️", title: "You have messy or siloed datasets", desc: "Multiple data sources with inconsistencies, duplicates, and missing values prevent meaningful analysis. A data cleaning and pipeline build consolidates everything into a single, reliable, analysis-ready layer." },
              { icon: "⚙️", title: "You want KPI tracking & reporting automation", desc: "If your team spends hours every week manually updating reports, automated dashboards with scheduled data refreshes eliminate that work entirely — and surface the numbers stakeholders need without delay." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-teal-900/20 flex gap-4">
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
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Applications
            </p>
            <h2 className="section-heading text-white mb-4">
              What Data Science <span className="gradient-text">Can Do for You</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Any business with data and decisions to improve is a strong candidate for data
              science consulting. Here are the systems and analyses I build and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-glass p-5 border border-teal-900/20 group">
                <div className="mb-3 p-2.5 rounded-xl bg-teal-900/20 border border-teal-800/30 w-fit text-teal-400 group-hover:text-emerald-400 transition-colors text-xl">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading text-white mb-4">
              Industries <span className="gradient-text">Served</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Data science consulting delivers the highest impact in industries where business
              decisions are driven by behavioral, transactional, or operational data.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-glass p-5 border border-teal-900/20 text-center group hover:border-teal-500/30 transition-all"
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
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              How We Work
            </p>
            <h2 className="section-heading text-white mb-4">
              The Data Science Consulting <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every engagement follows the same rigorous data science process — from business
              question framing to stakeholder-ready insights and automated reporting systems.
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
                    <div className="w-px flex-1 bg-gradient-to-b from-teal-700/50 to-transparent my-1" style={{ minHeight: "2.5rem" }} />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Why getyoteam
            </p>
            <h2 className="section-heading text-white mb-4">
              Why Work With <span className="gradient-text">Us?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Businesses in the USA, Europe, and Australia choose getyoteam because data
              analysis without business framing produces charts, not decisions. Every engagement
              is built around the outcome, not the output.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "🎯",
                title: "Business-First Thinking",
                desc: "Every analysis starts with the decision to be made — not the data available. Findings are framed in terms of business impact, not statistical outputs. Stakeholders get recommendations, not raw numbers.",
              },
              {
                icon: "📊",
                title: "Production Dashboards, Not Static Reports",
                desc: "Dashboards built in Tableau or Power BI with automated data refresh replace weekly manual reports. Stakeholders have live visibility into KPIs — without analyst intervention.",
              },
              {
                icon: "🧪",
                title: "Statistical Rigor in Every Experiment",
                desc: "A/B tests are designed with proper power analysis, sample size calculation, and significance thresholds — not run until a p-value crosses 0.05. Results you can trust and act on.",
              },
              {
                icon: "🏆",
                title: "Top Rated Plus on Upwork",
                desc: "Independently verified Top 3% globally — 100% Job Success Score across 117+ projects. Real client outcomes in the USA, UK, and Australia across analytics, dashboards, and data pipelines.",
              },
              {
                icon: "🤝",
                title: "Direct Access, No Middlemen",
                desc: "You work directly with Kumar Katariya — a Kaggle Expert and IBM-certified data scientist. I conduct every analysis, build every dashboard, and present every finding personally.",
              },
              {
                icon: "📞",
                title: "30-Day Post-Delivery Support",
                desc: "Data changes. Business questions evolve. I stay engaged for 30 days after delivery to refine visualizations, adjust analyses, and answer follow-up questions as the team digs into results.",
              },
            ].map((item) => (
              <div key={item.title} className="card-glass p-6 border border-teal-900/20">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Technology
            </p>
            <h2 className="section-heading text-white mb-4">
              Tech Stack for <span className="gradient-text">Data Science</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Battle-tested tools chosen for analytical depth, visualization quality, and
              automation capability — matched to your team&apos;s workflow and data environment.
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
              { icon: "🔬", title: "Analysis", desc: "Python, Pandas, NumPy, SciPy, and Statsmodels for data manipulation, statistical testing, and EDA — with Jupyter for documented, reproducible analysis." },
              { icon: "📊", title: "Visualization", desc: "Matplotlib and Plotly for publication-ready charts. Tableau and Power BI for interactive executive dashboards with live data connections and drill-down capability." },
              { icon: "⚙️", title: "Data Processing", desc: "SQL for extraction and transformation. Automated ETL pipelines for scheduled data refresh. scikit-learn for clustering and segmentation on top of clean analytical data." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-teal-900/20 text-center">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Proven Results
            </p>
            <h2 className="section-heading text-white mb-4">
              What Clients <span className="gradient-text">Achieved</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {/* Main case study */}
              <div className="card-glass p-6 border border-teal-900/20">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-teal-900/30 text-teal-300 border border-teal-800/30">Data Science</span>
                  <span className="text-xs text-slate-500">Case Study</span>
                </div>
                <h3 className="font-bold text-white mb-4">Financial Behavior Analysis & KPI Dashboard</h3>
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">The Problem</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      A fintech client had years of trader transaction data but no structured
                      analytical view of behavioral patterns — decisions were made on intuition.
                      Manual report generation consumed hours per week and produced inconsistent
                      numbers across teams.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">The Solution</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Conducted deep exploratory data analysis on transaction history, applied
                      statistical clustering to identify distinct trader behavior segments, and
                      built a KPI dashboard with automated weekly refresh. Statistical summaries
                      and cohort analysis surfaced patterns invisible to manual review. Pairs with{" "}
                      <Link href="/services/machine-learning" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                        machine learning solutions
                      </Link>{" "}
                      for predictive risk scoring on top of the same data.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">The Results</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { value: "5+",    label: "Behavior segments identified" },
                    { value: "80%",   label: "Reduction in manual reporting" },
                    { value: "Live",  label: "Dashboard with auto-refresh" },
                    { value: "3×",    label: "Faster decision turnaround" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-teal-900/20 border border-teal-800/20 p-3 text-center">
                      <p className="text-xl font-extrabold gradient-text">{m.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href="/portfolio" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
                  View portfolio →
                </Link>
              </div>

              {/* Mini case */}
              <div className="card-glass p-5 border border-emerald-900/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-800/30">A/B Testing</span>
                  <span className="text-xs text-slate-500">Mini Case</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-2">A/B Testing Analytics System</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Designed and analyzed a multi-variant A/B testing framework for a SaaS client
                  evaluating three onboarding flow variants. Applied proper power analysis,
                  statistical significance testing, and cohort-based retention comparison to
                  identify the highest-converting variant with 95% confidence. Integrated with{" "}
                  <Link href="/services/ai-agents" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
                    AI agents
                  </Link>{" "}
                  for automated experiment monitoring and alerting.
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
                  color: "from-teal-600 to-emerald-600",
                },
                {
                  quote: "Kumar and his team did a wonderful job. I now consider them an extension of my team. Their expertise in AI and attention to detail is outstanding.",
                  name: "Zhanna Shekhtmeyster",
                  role: "Founder, ABC Observe",
                  initials: "ZS",
                  color: "from-emerald-600 to-blue-600",
                },
                {
                  quote: "Excellent work from Kumar and Team. The AI solution they built has transformed our workflow. Will definitely hire again and again.",
                  name: "Simon Islam",
                  role: "CEO, Fair Pattern",
                  initials: "SI",
                  color: "from-orange-600 to-amber-600",
                },
              ].map((t) => (
                <div key={t.name} className="card-glass p-5 border border-teal-900/20">
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

      {/* ── DATA SCIENCE VS ML VS BI ─────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f11]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Understand Your Options
            </p>
            <h2 className="section-heading text-white mb-4">
              Data Science vs Machine Learning <span className="gradient-text">vs BI Tools</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-4">
              BI tools show you what the numbers are. Data science tells you why and what to
              do. Machine learning automates the decision at scale. Choosing between business
              intelligence consulting, data science, and ML depends on your current question:
              understand, explain, or predict and automate?
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              For most businesses, the answer is a progression — start with data science to
              understand, then apply ML to automate. Here&apos;s the honest comparison.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "BI Tools",
                icon: "📋",
                color: "border-slate-700/40",
                best: false,
                pros: ["Fast, self-serve reporting", "Non-technical stakeholder access", "Good for historical summaries"],
                cons: ["No statistical depth", "Cannot explain why", "No predictive capability"],
              },
              {
                label: "Data Science",
                icon: "📊",
                color: "border-teal-600/60",
                best: true,
                pros: ["Statistical rigor and hypothesis testing", "Explains patterns and causation", "A/B experimentation and segmentation", "Bridges raw data and business decisions"],
                cons: [],
              },
              {
                label: "Machine Learning",
                icon: "🤖",
                color: "border-emerald-700/40",
                best: false,
                pros: ["Automates decisions at scale", "Predicts future outcomes", "Improves with more data"],
                cons: ["Requires clean labeled data", "Black box without tooling", "Overkill for one-off analysis"],
              },
            ].map((opt) => (
              <div key={opt.label} className={`card-glass p-6 border ${opt.color} ${opt.best ? "shadow-lg shadow-teal-900/20" : ""}`}>
                <div className="text-3xl mb-3">{opt.icon}</div>
                <h3 className="font-bold text-white mb-2">{opt.label}</h3>
                {opt.best && (
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-teal-900/30 text-teal-300 border border-teal-800/30 mb-3">
                    Best for insight and experimentation
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
            <Link href="/contact" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors">
              Book a free consultation →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
              Common Questions
            </p>
            <h2 className="section-heading text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="card-glass border border-teal-900/20 group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm font-semibold text-white leading-snug">{faq.q}</h3>
                  <svg
                    viewBox="0 0 24 24" fill="none"
                    className="w-4 h-4 text-teal-400 shrink-0 transition-transform group-open:rotate-180"
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
      <section className="py-12 bg-[#0f0f11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Commonly Paired With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="card-glass p-5 border border-teal-900/20 flex items-center gap-4 group"
              >
                <span className="text-2xl">{rs.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
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
          <div className="relative rounded-3xl overflow-hidden border border-teal-700/30">
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute inset-0 bg-[#0a0a0b]/80" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(20,184,166,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(20,184,166,0.8) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center px-8 py-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/20 text-xs font-medium text-green-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new data science projects
              </div>
              <h2 className="section-heading text-white mb-4">
                Turn Your Data Into<br />
                <span className="gradient-text">Business Decisions</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-3 leading-relaxed">
                Describe the business question you want answered. I will respond within
                24 hours with a proposed approach, timeline, and plain-English explanation —
                no commitment required.
              </p>
              <p className="text-xs text-slate-500 mb-8">
                Trusted by businesses in the USA, UK, Europe &amp; Australia · Top Rated Plus · 100% Job Success
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold btn-accent shadow-lg shadow-[#b6ff3c]/35 text-sm whitespace-nowrap"
                >
                  Start My Data Science Project →
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-slate-300 border border-teal-700/40 hover:border-teal-500/60 hover:text-white transition-all text-sm whitespace-nowrap"
                >
                  Book a Free Consultation
                </Link>
                <a
                  href="https://www.upwork.com/freelancers/aimlengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full font-semibold text-green-300 border border-green-800/40 hover:border-green-600/60 hover:text-green-200 transition-all text-sm whitespace-nowrap"
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
