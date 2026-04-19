import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export const metadata: Metadata = {
  title: "AI Agent Development Services | LangChain & CrewAI | getyoteam",
  description:
    "Build autonomous AI agents that work 24/7. Custom multi-agent systems with LangChain, CrewAI & Claude API. Top Rated Plus engineer · 117+ projects delivered.",
  keywords: [
    "AI agent development",
    "custom AI agents",
    "multi-agent systems",
    "LangChain development",
    "CrewAI development",
    "autonomous AI workflows",
    "AI automation services",
    "hire AI agent developer",
    "AI workflow automation",
    "business process automation AI",
  ],
  alternates: { canonical: "https://getyoteam.com/services/ai-agents" },
  openGraph: {
    title: "AI Agent Development Services | LangChain & CrewAI | getyoteam",
    description:
      "Build autonomous AI agents that work 24/7. Custom multi-agent systems with LangChain, CrewAI & Claude API. Top Rated Plus engineer · 117+ projects.",
    url: "https://getyoteam.com/services/ai-agents",
    type: "website",
    images: [
      {
        url: "https://getyoteam.com/getyoteam-1.png",
        width: 1200,
        height: 630,
        alt: "AI Agent Development Services — getyoteam",
      },
    ],
  },
};

const useCases = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Customer Support Automation",
    desc: "Agents that resolve tickets, escalate edge cases, and handle refunds autonomously — 24/7 with zero human oversight for routine queries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Research & Intelligence Agents",
    desc: "Agents that crawl the web, aggregate data from multiple sources, and synthesise structured reports — in minutes, not days.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Content Generation Pipelines",
    desc: "Multi-agent pipelines that research, draft, review, and publish content — blog posts, product descriptions, social media — autonomously.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582 4-8 4s8 1.79 8 4" />
      </svg>
    ),
    title: "Data Extraction & Enrichment",
    desc: "Agents that scrape, clean, structure, and enrich data from websites, PDFs, and APIs — feeding clean records directly into your database.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Internal Knowledge-Base Q&A",
    desc: "Agents connected to your company docs, Notion, Confluence, or SharePoint — answering employee questions instantly with source citations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sales Outreach Automation",
    desc: "Agents that research prospects, personalise outreach emails, schedule follow-ups, and update your CRM — without a human SDR.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Competitive Intelligence",
    desc: "Agents that monitor competitor websites, pricing, job postings, and news — delivering weekly briefings without manual effort.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Code Review & Documentation",
    desc: "Agents that review pull requests, flag issues, suggest improvements, and auto-generate technical documentation from your codebase.",
  },
];

const industries = [
  { icon: "🛒", name: "E-commerce",      desc: "Product listing, customer service, returns" },
  { icon: "🏥", name: "Healthcare",       desc: "Patient intake, scheduling, report analysis" },
  { icon: "💰", name: "Finance",          desc: "Research, compliance checks, report generation" },
  { icon: "⚖️", name: "Legal",            desc: "Document review, case research, contract analysis" },
  { icon: "☁️", name: "SaaS",             desc: "Onboarding, support, usage analysis" },
  { icon: "📰", name: "Media",            desc: "Content creation, curation, distribution" },
  { icon: "🏭", name: "Manufacturing",    desc: "Supply chain monitoring, defect reporting" },
  { icon: "📊", name: "Consulting",       desc: "Research synthesis, proposal generation" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We map your business process end-to-end: inputs, outputs, decision points, and edge cases. I design the agent architecture — how many agents, how they communicate, and what tools they need.",
  },
  {
    step: "02",
    title: "Prompt Engineering & Agent Design",
    desc: "Each agent gets a precise system prompt, clear task scope, and failure-handling logic. This is where most projects fail — vague prompts lead to unpredictable agents. I get this right.",
  },
  {
    step: "03",
    title: "Tool Integration & Testing",
    desc: "Agents are connected to your APIs, databases, search tools, and external services. I run adversarial testing — intentionally feeding edge cases to expose and fix failure modes before production.",
  },
  {
    step: "04",
    title: "Production Deployment",
    desc: "The system ships with retries, logging, observability, and rate-limit handling. Every agent action is traceable. You can see exactly what each agent did, when, and why.",
  },
  {
    step: "05",
    title: "Monitoring & Iteration",
    desc: "Post-launch, I monitor agent performance, catch regressions, and tune prompts based on real production data. Agents improve over time — not just at launch.",
  },
];

const techStack = [
  { name: "LangChain",   color: "border-green-700/40 text-green-300 bg-green-900/15" },
  { name: "CrewAI",      color: "border-purple-700/40 text-purple-300 bg-purple-900/15" },
  { name: "Claude API",  color: "border-orange-700/40 text-orange-300 bg-orange-900/15" },
  { name: "AutoGen",     color: "border-sky-700/40 text-sky-300 bg-sky-900/15" },
  { name: "OpenAI",      color: "border-emerald-700/40 text-emerald-300 bg-emerald-900/15" },
  { name: "FastAPI",     color: "border-teal-700/40 text-teal-300 bg-teal-900/15" },
  { name: "Python",      color: "border-blue-700/40 text-blue-300 bg-blue-900/15" },
  { name: "Docker",      color: "border-cyan-700/40 text-cyan-300 bg-cyan-900/15" },
  { name: "PostgreSQL",  color: "border-indigo-700/40 text-indigo-300 bg-indigo-900/15" },
  { name: "Redis",       color: "border-red-700/40 text-red-300 bg-red-900/15" },
  { name: "AWS Lambda",  color: "border-yellow-700/40 text-yellow-300 bg-yellow-900/15" },
  { name: "Langfuse",    color: "border-violet-700/40 text-violet-300 bg-violet-900/15" },
];

const faqs = [
  {
    q: "What exactly is an AI agent, and how is it different from a chatbot?",
    a: "A chatbot responds to messages. An AI agent takes actions. An agent can browse the web, write and execute code, call APIs, update databases, send emails, and make decisions — all autonomously, without a human in the loop. A chatbot is reactive; an agent is proactive.",
  },
  {
    q: "How long does it take to build a custom AI agent system?",
    a: "A single-agent proof-of-concept can be ready in 3–5 days. A production-grade multi-agent system with tool integrations, observability, and error-handling typically takes 2–6 weeks depending on complexity. I provide a detailed timeline after the discovery call.",
  },
  {
    q: "What is the difference between a single agent and a multi-agent system?",
    a: "A single agent handles tasks sequentially — one instruction at a time. A multi-agent system uses specialised agents working in parallel: an orchestrator breaks down the goal, sub-agents handle specific subtasks (research, writing, validation), and results are merged. Multi-agent systems are faster and more reliable for complex workflows.",
  },
  {
    q: "Can AI agents connect to my existing databases, APIs, and internal tools?",
    a: "Yes — this is a core part of what I build. Agents can query SQL/NoSQL databases, call REST APIs, read from Google Sheets, write to Notion, post to Slack, and integrate with any system that has an API. Custom integrations are built case-by-case.",
  },
  {
    q: "How do you prevent the agent from making mistakes or taking wrong actions?",
    a: "Production-grade agents need guardrails: input validation before each action, output verification after each step, human-in-the-loop checkpoints for irreversible actions, retry logic for transient failures, and full observability so every decision is logged and auditable. I build all of these by default.",
  },
  {
    q: "What ongoing support do you provide after the agent is deployed?",
    a: "I offer a 30-day post-launch support window included in every engagement. After that, I offer monthly retainers for monitoring, prompt tuning, and feature additions. Most clients find that agents need tuning in the first 30–60 days as real-world data surfaces edge cases that testing missed.",
  },
];

const relatedServices = [
  { slug: "nlp-chatbots",     title: "RAG & LLM Applications",    icon: "🧠" },
  { slug: "machine-learning", title: "Machine Learning Solutions", icon: "📈" },
  { slug: "data-science",     title: "Data Science Consulting",    icon: "📊" },
];

export default function AIAgentsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://getyoteam.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://getyoteam.com/services" },
      { "@type": "ListItem", position: 3, name: "AI Agent Development", item: "https://getyoteam.com/services/ai-agents" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Agent Development",
    description:
      "Custom multi-agent AI systems built with LangChain, CrewAI, and Claude API. Autonomous workflows that research, decide, and act on your behalf — production-hardened with retries, observability, and graceful error handling.",
    provider: { "@type": "Person", name: "Kumar Katariya", url: "https://getyoteam.com" },
    areaServed: ["United States", "Australia", "United Kingdom", "Europe", "Worldwide"],
    serviceType: "AI Agent Development",
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(124,58,237,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "AI Agent Development" },
          ]} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-900/20 text-xs font-medium text-purple-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </div>

              <h1 className="section-heading text-white mb-5">
                AI Agent Development<br />
                <span className="gradient-text">Services</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                Build autonomous AI agents that research, decide, and act on your behalf —
                24 hours a day, without manual intervention.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                I design and deploy production-grade multi-agent systems using LangChain, CrewAI,
                and Claude API. From a single workflow agent to complex pipelines where specialised
                agents collaborate in parallel — every system ships with observability, retries,
                and graceful error handling.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["LangChain", "CrewAI", "Claude API", "AutoGen"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/25 text-sm"
                >
                  Get a Free Quote →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-6 py-3 rounded-full font-semibold text-slate-300 border border-purple-800/40 hover:border-purple-500/60 hover:text-white transition-all text-sm"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right: agent architecture diagram */}
            <div className="card-glass p-6 border border-purple-900/30">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-5">
                Multi-Agent Architecture
              </p>

              {/* Input */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-sky-400" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  User Task / Business Trigger
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-6 bg-purple-700/50" />
              </div>

              {/* Orchestrator */}
              <div className="flex justify-center mb-3">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-900/40 border border-purple-600/40 text-sm font-semibold text-purple-200 shadow-lg shadow-purple-900/30">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                  Orchestrator Agent
                </div>
              </div>

              {/* Branch lines */}
              <div className="flex justify-center gap-16 mb-3">
                <div className="flex flex-col items-center">
                  <div className="w-px h-4 bg-purple-700/50" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-4 bg-sky-700/50" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-px h-4 bg-violet-700/50" />
                </div>
              </div>

              {/* Sub-agents */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: "Research Agent", color: "bg-purple-900/30 border-purple-700/40 text-purple-300" },
                  { label: "Writing Agent",  color: "bg-sky-900/30 border-sky-700/40 text-sky-300" },
                  { label: "Tool Agent",     color: "bg-violet-900/30 border-violet-700/40 text-violet-300" },
                ].map((a) => (
                  <div key={a.label} className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${a.color}`}>
                    {a.label}
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-3">
                <div className="w-px h-4 bg-slate-700/50" />
              </div>

              {/* Tools */}
              <div className="flex justify-center mb-3">
                <div className="flex flex-wrap justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 max-w-xs">
                  {["Web Search", "Code Exec", "Database", "Email API"].map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-400 border border-slate-600/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mb-3">
                <div className="w-px h-4 bg-green-700/50" />
              </div>

              {/* Output */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-900/20 border border-green-700/30 text-sm text-green-300">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Structured Output / Action Taken
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "117+",    label: "Projects Delivered" },
              { value: "100%",    label: "Job Success Score" },
              { value: "Top 3%",  label: "Upwork Globally" },
              { value: "24h",     label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl border border-purple-900/20 bg-white/[0.02]">
                <p className="text-2xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT ARE AI AGENTS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Understanding AI Agents
            </p>
            <h2 className="section-heading text-white mb-4">
              What Is <span className="gradient-text">AI Agent Development?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              AI agents go beyond question-answering. They perceive a goal, plan a sequence
              of actions, use tools to execute those actions, observe the results, and iterate
              until the goal is achieved — all without a human steering every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                label: "Traditional Chatbot",
                points: ["Responds to messages", "Single turn", "No external tools", "Needs human input"],
                accent: "border-slate-700/40",
                bad: true,
              },
              {
                icon: "⚡",
                label: "Single AI Agent",
                points: ["Takes autonomous actions", "Multi-step reasoning", "Uses external tools", "Handles one task end-to-end"],
                accent: "border-sky-700/40",
                bad: false,
              },
              {
                icon: "🤖",
                label: "Multi-Agent System",
                points: ["Parallel specialised agents", "Orchestrator + sub-agents", "Complex pipelines", "Production-grade reliability"],
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
                      <span className={`mt-0.5 shrink-0 ${card.bad ? "text-slate-600" : "text-purple-400"}`}>
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

      {/* ── USE CASES ─────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Applications
            </p>
            <h2 className="section-heading text-white mb-4">
              What Can AI Agents <span className="gradient-text">Do For Your Business?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Any repetitive, research-heavy, or multi-step business process is a candidate
              for automation. Here are the most common use cases I build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <div key={uc.title} className="card-glass p-5 border border-purple-900/20 group">
                <div className="mb-3 p-2.5 rounded-xl bg-purple-900/20 border border-purple-800/30 w-fit text-purple-400 group-hover:text-sky-400 transition-colors">
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
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Who We Serve
            </p>
            <h2 className="section-heading text-white mb-4">
              Industries <span className="gradient-text">Served</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              AI agents deliver the highest ROI in information-intensive industries where
              research, writing, and decision-making happen at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="card-glass p-5 border border-purple-900/20 text-center group hover:border-purple-500/30 transition-all"
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              How We Work
            </p>
            <h2 className="section-heading text-white mb-4">
              The AI Agent Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every agent I build follows the same battle-tested process — from whiteboard
              to production deployment.
            </p>
          </div>

          <div className="space-y-0">
            {process.map((step, i) => (
              <div key={step.step} className="flex gap-6 group">
                {/* Left: step number + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {step.step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-purple-700/50 to-transparent my-1" style={{ minHeight: "2.5rem" }} />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10">
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Technology
            </p>
            <h2 className="section-heading text-white mb-4">
              Tech Stack for <span className="gradient-text">AI Agents</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Production-grade tools chosen for reliability, scalability, and
              ecosystem support — not hype.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t.name}
                className={`px-4 py-2 rounded-full border text-sm font-medium ${t.color}`}
              >
                {t.name}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🔁", title: "Orchestration", desc: "LangChain and CrewAI for agent coordination, memory, and tool routing." },
              { icon: "🔍", title: "Observability", desc: "Langfuse traces every agent decision — full auditability in production." },
              { icon: "🚀", title: "Deployment", desc: "FastAPI + Docker on AWS Lambda or any cloud — scale from 0 to thousands of runs per day." },
            ].map((item) => (
              <div key={item.title} className="card-glass p-5 border border-purple-900/20 text-center">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Proven Results
            </p>
            <h2 className="section-heading text-white mb-4">
              What Clients <span className="gradient-text">Achieved</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Case study card */}
            <div className="card-glass p-6 border border-purple-900/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/30">RAG Agent</span>
                <span className="text-xs text-slate-500">Case Study</span>
              </div>
              <h3 className="font-bold text-white mb-2">RAG Document Intelligence Agent</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Built a multi-step RAG agent that ingests PDF documents, chunks and embeds them
                into ChromaDB, then answers natural-language queries with source citations —
                deployed live on Streamlit Cloud.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { value: "80%+", label: "Faster research" },
                  { value: "Zero", label: "Hallucinations" },
                  { value: "6",    label: "Pipeline steps" },
                  { value: "Free", label: "Hosting cost" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl bg-purple-900/20 border border-purple-800/20 p-3 text-center">
                    <p className="text-xl font-extrabold gradient-text">{m.value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/portfolio/rag-chatbot" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                View full case study →
              </Link>
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
                  color: "from-sky-600 to-blue-600",
                },
              ].map((t) => (
                <div key={t.name} className="card-glass p-5 border border-purple-900/20">
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

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              Common Questions
            </p>
            <h2 className="section-heading text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="card-glass border border-purple-900/20 group"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                  <h3 className="text-sm font-semibold text-white leading-snug">{faq.q}</h3>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 text-purple-400 shrink-0 transition-transform group-open:rotate-180"
                    stroke="currentColor"
                    strokeWidth={2}
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
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">
            Commonly Paired With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/services/${rs.slug}`}
                className="card-glass p-5 border border-purple-900/20 flex items-center gap-4 group"
              >
                <span className="text-2xl">{rs.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
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
          <div className="relative rounded-3xl overflow-hidden border border-purple-700/30">
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute inset-0 bg-[#07070f]/80" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(124,58,237,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.8) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center px-8 py-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/20 text-xs font-medium text-green-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new AI agent projects
              </div>
              <h2 className="section-heading text-white mb-4">
                Ready to Automate with<br />
                <span className="gradient-text">AI Agents?</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
                Tell me about the business process you want to automate. I will respond within
                24 hours with a proposed architecture and timeline — no commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/30 text-sm"
                >
                  Get a Free Quote →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-3.5 rounded-full font-semibold text-slate-300 border border-purple-700/40 hover:border-purple-500/60 hover:text-white transition-all text-sm"
                >
                  Browse AI Projects
                </Link>
                <a
                  href="https://www.upwork.com/freelancers/aimlengineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full font-semibold text-green-300 border border-green-800/40 hover:border-green-600/60 hover:text-green-200 transition-all text-sm"
                >
                  Hire on Upwork
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
